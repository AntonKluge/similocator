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

    function TaaSDynamic() {
        var c = window["cookies-browser"] || raptor.require("ebay.cookies");
        this.readCookie = function (d, e) {
            return c.readCookie(d, e)
        };
        this.writeCookielet = function (d, e, b, a, g) {
            c.writeCookielet(d, e, b, a, g)
        };
        this.readMultiLineCookie = function (d, e) {
            c.readMultiLineCookie(d, e)
        };
        this.writeMultiLineCookie = function (d, e, b, a, g) {
            c.writeMultiLineCookie(d, e, b, a, g)
        };
        this.writeCookie = function (d, e, b) {
            c.writeCookie(d, e, b)
        }
    }

    var TaaSDynamicObj = new TaaSDynamic;

    function attachTrackingListener(c, d) {
        window.jQuery ? $(document).on(c, d) : document.addEventListener(c, d, !1)
    }

    window.triggerTracking = function (c, d) {
        var e = document.createEvent("CustomEvent");
        e.initCustomEvent(c, !1, !1, d);
        document.dispatchEvent(e)
    };
    var $trk = null;
    (function () {
        function c(b) {
            for (var a = 1; a < arguments.length; a++) {
                var g = arguments[a], c;
                for (c in g) Object.prototype.hasOwnProperty.call(g, c) && (b[c] = g[c])
            }
            return b
        }

        function d(b) {
            var a = $trk = this;
            c(a, a.config = b);
            a.image = document.createElement("img");
            a.image.style.display = "none";
            a.rover.sync && a.image.attr("src", a.rover.sync);
            a.originalPSI = a.currentPSI = b.psi;
            attachTrackingListener("click", a.onBody);
            attachTrackingListener("mousedown", a.onMouse);
            attachTrackingListener("rover", a.onRover);
            attachTrackingListener("track",
                a.onTrack);
            attachTrackingListener("pulsar", a.onPulsar);
            attachTrackingListener("TRACKING_UPDATE_PSI", a.trackingUpdatePSI);
            attachTrackingListener("ADD_LAYER_PSI", a.addLayerPSI);
            attachTrackingListener("CLEAR_LAYER_PSI", a.clearLayerPSI)
        }

        function e(b, a, g) {
            if (b && "object" === typeof b) {
                var c = [];
                Object.keys(b).forEach(function (a) {
                    c.push(a + "=" + b[a])
                });
                a = c.join(a || ",");
                return g ? encodeURIComponent(a) : a
            }
            return g ? encodeURIComponent(b) : b
        }

        c(d.prototype, {
            codes: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy-_!".split(""),
            sizes: {p: 4, c: 1, m: 3, l: 3}, start: {p: 1, c: 5, m: 6, l: 9}, target: function (b) {
                return b.tagName ? b : b.target
            }, attrib: function (b, a) {
                return b.getAttribute ? b.getAttribute(a) : null
            }, valid: function (b, a) {
                return a && 0 < a.indexOf(".ebay.") ? b : null
            }, trackable: function (b) {
                var a = $trk, b = b.tagName;
                return b.match(/^a$|area/i) ? a.valid(b, b.href) : b.match(/input/) && b.type.match(/submit/i) && b.form ? a.valid(b, form.action) : null
            }, click: function (b) {
                for (var a = $trk, b = a.target(b), g = null; b && b.tagName; b = b.parentNode) if (g = g || a.trackable(b), a.attrib(b,
                    "_sp")) return a.clickElement(b, g);
                a.pid && a.track(a.pid)
            }, clickElement: function (b, a) {
                var g = $trk, c = g.attrib(b, "_sp");
                g.track(c.split(";")[0], a ? g.attrib(a, "_l") : null)
            }, track: function (b, a) {
                var c = $trk, d = b.split(".");
                b.match(/p\d+/) || d.push(c.pid);
                a && d.push(a);
                for (var f = TaaSDynamicObj.readCookie("ds2", "sotr"), e = c.chars(f && "b" == f.charAt(0) ? f : "bzzzzzzzzzzz"), i = 0, l = d.length; i < l; i++) {
                    var h = d[i].match(/([pcml])(\d+)/);
                    if (null != h) for (var o = h[1], f = c.sizes[o], o = c.start[o], h = c.chars(c.encode(h[2], f)), k = 0; k < f; k++) e[o +
                    k] = h[k]
                }
                i = 0;
                l = e.length;
                for (f = ""; i < l;) f = f.concat(e[i++]);
                TaaSDynamicObj.writeCookielet("ds2", "sotr", f)
            }, chars: function (b) {
                for (var a = 0, c = b.length, d = []; a < c;) d.push(b.charAt(a++));
                return d
            }, encode: function (b, a) {
                for (var c = $trk.codes, d = ""; 64 <= b; b = b / 64 | 0) d = c[b % 64] + d;
                d = (0 <= b ? c[b] : "") + d;
                return d.concat("zzzz").substring(0, a)
            }, onBody: function (b) {
                $trk.click(b)
            }, onMouse: function () {
                TaaSDynamicObj.writeCookielet("ebay", "psi", $trk.currentPSI)
            }, onTrack: function (b, a) {
                var c = a.trksid;
                c && $trk.track(c, a.trklid)
            }, onRover: function (b,
                                  a) {
                if (void 0 != b.detail && null != b.detail) a = b.detail; else if (!a || "object" !== typeof a) return;
                var c = $trk, d = a.imp, f = c.rover.uri + (d ? c.rover.imp : c.rover.clk), n, i;
                delete a.imp;
                d && (i = e(d, "&", !0));
                a && (a.ts = Date.now(), n = e(a, "&", !0));
                n && 0 < n.length && (f += (0 > f.indexOf("?") ? "?" : "&") + "trknvp=" + n);
                i && 0 < i.length && (f += (0 > f.indexOf("?") ? "?" : "&") + "imp=" + i);
                c.image.src = f
            }, onPulsar: function (b, a, c) {
                if ("undefined" !== typeof _plsUBTTQ) {
                    if (("undefined" === typeof a || null == a) && null != b.detail) Array.isArray(b.detail) ? (a = b.detail[0],
                        c = b.detail[1]) : a = b.detail;
                    "undefined" !== typeof a && null != a && (b = JSON.parse(JSON.stringify(a)), a = b.eventProperty, "undefined" !== typeof c && null != c && (c = JSON.parse(JSON.stringify(c)), "undefined" !== typeof a && null != a && (a.actionKind = c.actionKind)), null != b.eventFamily && null != b.eventAction && _plsUBTTQ.push(["customEvts", b.eventFamily, b.eventAction, a]))
                }
            }, trackingUpdatePSI: function (b, a) {
                void 0 != b.detail && null != b.detail && (a = b.detail);
                a && a.psi && (self.currentPSI = a.psi);
                a && (a.callback && "function" == typeof a.callback) &&
                a.callback.call(self)
            }, addLayerPSI: function (b, a) {
                void 0 != b.detail && null != b.detail && (a = b.detail);
                a && a.psi && (self.currentPSI += a.psi)
            }, clearLayerPSI: function () {
                self.currentPSI = self.originalPSI
            }
        });
        window.TaaSTrackingCore = d
    })();
    var idmapRoverURL;

    function TaaSIdMapTracker() {
        this.roverService = function (c) {
            "https:" == window.location.protocol || (!c || TaaSDynamicObj.readCookie("dp1", "idm")) || (idmapRoverURL = c, window.jQuery ? $(window).on("load", this.sendRequest) : window.addEventListener("load", this.sendRequest, !1))
        };
        this.sendRequest = function () {
            idmapRoverURL = -1 < idmapRoverURL.indexOf("?") ? idmapRoverURL + "&" : idmapRoverURL + "?";
            idmapRoverURL += "cb=TaaSIdMapTrackerObj.handleResponse";
            idmapRoverURL = encodeURI(idmapRoverURL) + "&cache=" + Math.random();
            var c = document.createElement("script");
            c.setAttribute("src", idmapRoverURL);
            c.setAttribute("type", "text/javascript");
            document.body.appendChild(c)
        };
        this.setCookieExpiration = function (c) {
            "number" == typeof c && 0 < c && TaaSDynamicObj.writeCookielet("dp1", "idm", "1", c / 86400, "")
        };
        this.handleResponse = function (c) {
            if (c && 1 < c.length) {
                for (var d = c.length - 1, e = 0; e < d; e++) this.createImage(c[e]);
                this.setCookieExpiration(c[d])
            }
        };
        this.createImage = function (c) {
            if (c && 1 < c.length) {
                var d = document.createElement("IMG");
                d.width = "1";
                d.height = "1";
                d.src = c;
                d.alt = "";
                document.body.appendChild(d)
            }
        }
    }

    var tracking = tracking || function () {
        return {}
    }();
    tracking.roversync = tracking.roversync && void 0 === QUnit || function () {
        function c(a) {
            for (var b = a + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) if (a = c[d], a = a.trim(), 0 == a.indexOf(b)) return b = a.indexOf("="), a.substring(b + 1);
            return null
        }

        function d() {
            var a = document.getElementById("roversyncimg");
            if (null != a) return {img: a, method: "id"};
            for (var b = document.body.lastChild, c = /^(http|https):\/\/rover.*.ebay.*\/roversync\/*/i, d = 0; 40 >= d && null != b; d++) if (null != b) {
                if (null != b.src && c.test(b.src)) return a = b, {img: a, method: "sibling"};
                b = b.previousSibling
            }
            return {img: a, method: null}
        }

        function e() {
            try {
                q = Date.now();
                var a = d();
                i = a.method;
                if (f = null != a.img) o = a.img.src;
                var e = c("npii");
                var h = a.img;
                l = null == h || void 0 === h ? !1 : 1 == h.naturalWidth && 1 == h.naturalHeight || 1 == h.width && 1 == h.height;
                if (!(!f && null != e || f && l && null != e)) {
                    var j = {
                        hostname: n,
                        hasImg: f,
                        imgFindMethod: i,
                        nonsession: c("nonsession"),
                        npii: e,
                        roversyncImgStatus: l,
                        s: c("s"),
                        winLoc: window.location
                    };
                    if (null == j) k = null; else {
                        var a = encodeURIComponent, m = "host=" + j.hostname + "&ifm=" + j.imgFindMethod + "&hasImg =" +
                            j.hasImg + "&hasNons=" + (null != j.nonsession) + "&hasNpii=" + (null != j.npii) + "&hasSess=" + (null != j.s) + "&nonSess=" + a(j.nonsession) + "&npii=" + a(j.npii) + "&ris=" + j.roversyncImgStatus + "&s=" + a(j.s) + "&winLoc=" + a(j.winLoc);
                        k = "/?_trkparms=" + a(m)
                    }
                    var j = k, p;
                    p = window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                    p.withCredentials = !1;
                    p.open("GET", j, !0);
                    p.send("")
                }
                g = Date.now()
            } catch (r) {
                b = r
            }
        }

        var b, a = Date.now(), g, q, f, n = window.location.hostname, i, l, h, o, k;
        var m = 100, m = c("roversyncSampling"),
            m = null != m && !isNaN(m) ? Number(m) : null != tracking._RSRandomSamplingPct && !isNaN(tracking._RSRandomSamplingPct) ? tracking._RSRandomSamplingPct : 2;
        Math.random() < m / 100 ? (h = !0, window.addEventListener ? window.addEventListener("load", e, !1) : window.attachEvent && window.attachEvent("onload", e)) : h = !1;
        return {
            getVersion: function () {
                return "1.3"
            }, logStatus: function () {
                console.log("err=" + b + (null != b ? " err.description=" + b.description + " err.message=" + b.message + " err.name=" + b.name + " err.number=" + b.number : "") + " hasImg=" + f + " handEndTime=" +
                    g + " handStartTime=" + q + " handElapsedMs=" + (g - q) + " hostname=" + n + " imgFindMethod=" + i + " roversyncImgStatus=" + l + " sampling=" + h + " startTime=" + a + " url1=" + o + " url2=" + k)
            }
        }
    }();

}
/*
     FILE ARCHIVED ON 10:13:13 Sep 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:59:23 Nov 26, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.129
  exclusion.robots.policy: 0.112
  cdx.remote: 0.165
  esindex: 0.017
  LoadShardBlock: 104.334 (6)
  PetaboxLoader3.datanode: 82.532 (8)
  load_resource: 114.658 (2)
  PetaboxLoader3.resolve: 72.28 (2)
*/
