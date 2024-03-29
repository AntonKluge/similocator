var _____WB$wombat$assign$function_____ = function (name) {
    return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if (!self.__WB_pmw) {
    self.__WB_pmw = function (obj) {
        this.__WB_source = obj;
        return this;
    }
}
{
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    /**
     * Copyright (c) 2018 eBay Inc.
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     *
     **/

    /**
     * Default configuration
     **/
    var _DEFAULTS = {
        'url': '/api/log',
        'flushInterval': 1000,
        isInSampling: true,
        samplingRate: 100,
        collectMetrics: true,
        logLevels: ['log', 'info', 'warn', 'debug', 'error'],
        maxAttempts: 50
    };

    /**
     * Logger Class which exposes API for intercepting log, errors & collects metrics
     **/
    function Logger() {
        this.buffer = [];
        this.plugins = {};

        this.url = _DEFAULTS.url;
        this.flushInterval = _DEFAULTS.flushInterval;
        this.collectMetrics = _DEFAULTS.collectMetrics;
        this.logLevels = _DEFAULTS.logLevels;
    }

    /**
     * Init API for intializing the class with paramaters.
     **/
    Logger.prototype.init = function (options) {
        options = options || _DEFAULTS;
        this.url = options.url || this.url;
        this.logLevels = options.logLevels || this.logLevels;
        this.flushInterval = options.flushInterval !== undefined ? options.flushInterval : this.flushInterval;
        this.collectMetrics = options.collectMetrics !== undefined ? options.collectMetrics : this.collectMetrics;
        this.maxAttempts = options.maxAttempts !== undefined ? options.maxAttempts : this.maxAttempts;

        // Use Sampling Flag provide in init() or calculate Sampling factor based on Sampling Rate
        this.isInSampling = options.isInSampling !== undefined ? options.isInSampling : sample(options.samplingRate);
        this.isSendCritical = options.isSendCritical !== undefined ? options.isSendCritical : false;
        var _this = this;

        // Setup timer & flush ONLY if this is in Sampling
        if (_this.isInSampling || _this.isSendCritical) {
            var loglevels = ['log', 'info', 'warn', 'debug', 'error'];

            loglevels.forEach(function (level) {
                var _fn = console[level];
                console[level] = function () {
                    var args = Array.prototype.slice.call(arguments);
                    _this[level](args);
                    _fn.apply(console, args);
                }
            });

            if (_this.flushInterval) {
                _this.interval = setInterval(function () {
                    _this.flush();
                }, _this.flushInterval);
            } else {
                // add support for `pagehide`
                var activeEvent = 'onpagehide' in window ? 'pagehide' : 'beforeunload';
                window.addEventListener(activeEvent, function () {
                    _this.flush();
                }, false);
            }
        }
    };

    /**
     * API for registering custom functions.
     **/
    Logger.prototype.registerPlugin = function (property, customFunction) {
        this.plugins[property] = customFunction;
    };

    /**
     * Collects metrics using navigation API
     **/
    Logger.prototype.metrics = function () {
        if (!(window && window.performance)) {
            return;
        }

        var perf = window.performance,
            perfData = perf.timing,
            navData = perf.navigation,
            metrics = {
                'navType': navData.type, // 0=Navigate, 1=Reload, 2=History
                'rc': navData.redirectCount,
                'lt': perfData.loadEventEnd - perfData.navigationStart, // PageLoadTime
                'ct': perfData.responseEnd - perfData.requestStart, // connectTime
                'rt': perfData.domComplete - perfData.domLoading // renderTime
            };
        return metrics;
    };

    Logger.prototype.log = function () {
        this.addToQ('LOG', arguments);
    };

    Logger.prototype.info = function () {
        this.addToQ('INFO', arguments);
    };

    Logger.prototype.debug = function () {
        this.addToQ('DEBUG', arguments);
    };

    Logger.prototype.warn = function () {
        this.addToQ('WARN', arguments);
    };

    Logger.prototype.error = function () {
        var args = [];
        Array.prototype.slice.call(arguments[0]).forEach(function (elem) {
            if (typeof elem === 'object' && elem && elem.stack) {
                args.push(elem.stack);
            } else {
                args.push(elem);
            }
        });
        this.addToQ('ERROR', args);
    };

    /**
     * Clears Buffer
     **/
    Logger.prototype.clearBuffer = function (clearFromIndex) {
        this.buffer = this.buffer.slice(clearFromIndex);
    };

    /**
     * Adds message and type to Queue
     **/
    Logger.prototype.addToQ = function (type, args) {
        if (this.logLevels.indexOf(type.toLowerCase()) > -1) {
            var message = (args.length > 0 && [].join.call(args, ' ')) || '';
            if (this.isInSampling || (this.isSendCritical && message.indexOf('"type":"critical"') > -1)) {
                this.buffer.push({
                    level: type,
                    msg: message,
                    desc: this.getDesc(message)
                });
            }
        }
    };

    /**
     * Get error description
     **/
    Logger.prototype.getDesc = function (msg) {
        var desc = 'Non critical';
        if (msg.indexOf('{') > -1 && msg.indexOf('}') > -1) {
            try {
                var msgObj = JSON.parse(msg.substring(msg.indexOf('{'), msg.indexOf('}') + 1));
                desc = msgObj && msgObj.desc;
            } catch (e) {
            }
        }
        return desc;
    };

    /**
     * Flushes data from buffer
     **/
    Logger.prototype.flush = function () {
        var _this = this;

        if (_this.buffer.length < 1) {
            return;
        }
        if (_this.maxAttempts < 1) {
            clearInterval(_this.interval);
            return;
        }
        _this.maxAttempts = _this.maxAttempts - 1;
        var bufSize = _this.buffer.length,
            payload = {
                'metrics': _this.metrics(),
                'logs': _this.buffer,
                'isBeaconAPI': false
            },
            url = _this.url + '&desc=' + encodeURI(_this.buffer.map(a => a.desc));

        Object.keys(_this.plugins).forEach(function (property) {
            _this.plugins[property](payload);
        });

        if (navigator && navigator.sendBeacon) {
            payload.isBeaconAPI = true;
            var status = navigator.sendBeacon(url, JSON.stringify(payload));
            if (status) {
                _this.clearBuffer(bufSize);
            }
        } else {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', url, true); // third parameter indicates sync xhr
            xhr.setRequestHeader('Content-Type', 'text/plain');
            xhr.onreadystatechange = function () { // Call a function when the state changes.
                if (xhr.readyState === 4 && xhr.status === 200) {
                    // Request finished. Do processing here.
                    _this.clearBuffer(bufSize);
                }
            };
            xhr.send(JSON.stringify(payload));
        }
    };

    /**
     * Client side Sampling API
     **/
    function sample(samplingRate) {
        if (Math.random() * 100 < samplingRate) {
            return true;
        }
        return false;
    }

    function intialize() {
        var logger = new Logger();
        if (window) {
            window.$logger = logger;

            var _onerror = window.onerror;
            // Handle Uncaught Errors
            window.onerror = function () {
                var args = Array.prototype.slice.call(arguments);
                logger.error(args);
                if (_onerror) {
                    return _onerror.apply(window, args);
                }
                return false;
            };
        }
    }

    intialize();


}
/*
     FILE ARCHIVED ON 12:12:25 Jan 01, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:00:25 Nov 26, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 707.541
  exclusion.robots: 0.113
  exclusion.robots.policy: 0.098
  cdx.remote: 0.088
  esindex: 0.013
  LoadShardBlock: 86.721 (3)
  PetaboxLoader3.datanode: 64.366 (4)
  load_resource: 72.752
  PetaboxLoader3.resolve: 38.19
*/
