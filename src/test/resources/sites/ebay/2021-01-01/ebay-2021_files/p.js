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

    !function (t) {
        function s(i) {
            if (e[i]) return e[i].exports;
            var n = e[i] = {i: i, l: !1, exports: {}};
            return t[i].call(n.exports, n, n.exports, s), n.l = !0, n.exports
        }

        var e = {};
        s.m = t, s.c = e, s.d = function (t, e, i) {
            s.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: i})
        }, s.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
        }, s.t = function (t, e) {
            if (1 & e && (t = s(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var i = Object.create(null);
            if (s.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t) for (var n in t) s.d(i, n, function (s) {
                return t[s]
            }.bind(null, n));
            return i
        }, s.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return s.d(e, "a", e), e
        }, s.o = function (t, s) {
            return Object.prototype.hasOwnProperty.call(t, s)
        }, s.p = "", s(s.s = 0)
    }([function (t, s, e) {
        "use strict";
        e.r(s);
        var i = {
            get: ((t, s, e) => {
                return new Promise((i, n) => {
                    var r = new XMLHttpRequest;
                    r.open(t, `${s}`, !0), "post" === t.toLowerCase() && r.setRequestHeader("Content-type", "application/json"), r.send(e ? JSON.stringify(e) : null), r.onerror = function () {
                        n("Network Error")
                    }, r.onreadystatechange = function () {
                        if (4 === r.readyState && 200 === r.status) {
                            var t;
                            try {
                                t = JSON.parse(r.response)
                            } catch (s) {
                                t = r.response
                            }
                            i({status: r.status, response: t})
                        } else 4 === r.readyState && (500 === r.status || 404 === r.status) && n(r.status)
                    }
                })
            }).bind(null, "GET")
        }, n = t => {
            let s, e = window.location.protocol;
            return s = e, void 0 !== t && (e = 0 == t ? "http:" : "https:"), "https:" == s && e != s ? null : e
        };

        class r {
            constructor(t, s) {
                this.params = s, this.pulsarDomain = t, this.results = [], this.scheme = n(s.s), this.runs = s.N ? parseInt(s.N, 10) : 10, this.totalRuns = this.runs, this.defaultTimeout = 15e3, this.randString = this.randString.bind(this), this.randQueryString = this.randQueryString.bind(this), this.run = this.run.bind(this), this.abort = this.abort.bind(this)
            }

            randString(t) {
                return Math.random().toString(36).slice(2, t + 2)
            }

            randQueryString() {
                return `?t=${this.randString(6)}`
            }

            abort() {
                this.runs = 0, "function" == typeof this.abortHook && this.abortHook()
            }

            async run() {
                for (; 0 < this.runs;) this.runs--, this.results.push(await this.measure());
                return this.results
            }
        }

        class o extends r {
            constructor(t, s) {
                super(t, s), this.runs = 1
            }

            async measure() {
                const {h: t, J: s, u: e, i: n, T: r, a: o, e: a} = this.params, h = setTimeout(this.abort, r || 3e3);
                return new Promise((r, u) => {
                    if (!n || !this.scheme) return clearTimeout(h), r(null);
                    const c = t || `${s.toLowerCase()}.${this.pulsarDomain}`,
                        l = `${e || "/a/r.js"}${this.randQueryString()}`, d = `${this.scheme}//${c}${l}&j=${n}`;
                    setTimeout(() => {
                        i.get(d).then(t => {
                            let s = t.response.split("]")[1];
                            s = s.substring(2, s.length - 3), r(`${o},${n},${a || ""}:${s}`)
                        }).catch(t => {
                            u(t)
                        }).then(() => {
                            clearTimeout(h)
                        })
                    }, 500)
                })
            }

            abortHook() {
                this.callback(null)
            }

            callback(t) {
                null != t && (t = `${this.params.i}:${t}`)
            }
        }

        var a = {base36: t => t.toString(36)};
        const h = ["responseEnd", "responseStart", "requestStart", "connectEnd", "secureConnectionStart", "connectStart", "domainLookupEnd", "domainLookupStart"];
        var u = {
            parse: t => (t => {
                const s = parseInt(t.fetchStart, 10), e = h.map(e => {
                    const i = parseInt(t[e], 10);
                    return 0 < i ? i - s : 0
                });
                return [a.base36(s), ...e.map(t => 0 === t ? "" : a.base36(t))].join(",").replace(/\,+$/, "")
            })(t)
        };

        class c extends r {
            constructor(t, s) {
                super(t, s), this.setOverallTimeout = this.setOverallTimeout.bind(this), this.abortHook = this.abortHook.bind(this), this.aborted = !1, this.setOverallTimeout()
            }

            setOverallTimeout() {
                const {T: t} = this.params;
                this.jobTimeout = setTimeout(this.abort, t || this.defaultTimeout)
            }

            abortHook() {
                this.runs = 0, this.aborted = !0, clearTimeout(this.jobTimeout)
            }

            async run() {
                for (; !1 === this.aborted && 0 < this.runs;) {
                    this.runs--, this.results.push(await this.measure()), 2 < this.totalRuns - this.runs && 0 === this.results.length && this.abort()
                }
                return clearTimeout(this.jobTimeout), this.serializeResponses()
            }

            async measure() {
                const {x: t, i: s, h: e, u: i, l: n} = this.params;
                return new Promise(r => {
                    if (!s || !e || !this.scheme) return r(null);
                    this.tryXhr = !!t && !this.skipXhr && window.XMLHttpRequest, this.useLegacy = !!n;
                    const o = `${this.scheme}//${e}${i || "/a/l.gif"}${this.randQueryString()}`;
                    this.tryXhr && !this.useLegacy ? this.loadImgXhr(o, r) : this.loadImg(o, r)
                })
            }

            loadImg(t, s) {
                let e = new Image;
                const i = (new Date).getTime(), n = setTimeout(() => {
                    this.loadImgCallback(i, t, 650, s)
                }, this.params.t || this.defaultTimeout), r = (n, r) => () => {
                    e.onload = e.onerror = null, e = null, clearTimeout(r), this.loadImgCallback(i, t, n ? 200 : 500, s)
                };
                e.onload = r(!0, n), e.onerror = r(!1, n), e.src = t
            }

            loadImgXhr(t, s) {
                const e = new XMLHttpRequest, i = (new Date).getTime();
                e.open("GET", t), e.responseType = "arraybuffer", e.timeout = this.params.t || this.defaultTimeout;
                const n = (n, r) => () => {
                    const n = r || e.status || 0;
                    this.loadImgCallback(i, t, n, s)
                }, r = n(), o = n(), a = n(0, 650);
                return e.addEventListener("error", r), e.addEventListener("load", o), e.addEventListener("timeout", a), e.send(), e
            }

            loadImgCallback(t, s, e, i) {
                const n = this.getEntry(s), r = (new Date).getTime();
                return e = e || 500, !this.useLegacy && !n && this.tryXhr && !this.skipXhr && 1 == this.totalRuns - this.runs ? (this.skipXhr = !0, this.loadImg(s, i)) : this.aborted ? i(null) : void (this.useLegacy || void 0 === n ? i({
                    status: parseInt(e),
                    measurements: u.parse({fetchStart: 0, responseEnd: r - t})
                }) : i(Object.assign({}, {status: parseInt(e), measurements: u.parse(n)})))
            }

            getEntry(t) {
                return window.performance.getEntriesByType("resource").filter(s => s.name === t)[0]
            }

            serializeResponses() {
                const {i: t, x: s, a: e, e: i} = this.params;
                return `${e},${t},${i || ""}:${this.results.filter(t => t).map(t => {
                    return `${s ? "x" : "i"}${a.base36(t.status || 0)},${t.measurements}`
                }).join("|")}`
            }
        }

        const l = t => {
            let s, e;
            const i = new Promise((i, n) => {
                s = setTimeout(i, t), e = n
            });
            return i.cancel = (() => {
                clearTimeout(s), e(Error("Cancelled job delay"))
            }), i
        };

        class d {
            constructor(t, s, e) {
                let i, n;
                this.appIds = t, this.tags = s, this.domain = e || "//web.archive.org/web/20210101112801/https://s.ns1p.net/";
                const r = window.document.getElementById("ns1ps");
                n = (i = window.parent !== window && r && "script" === r.nodeName.toLowerCase() ? window.parent : window).document, this.w = i, this.d = n, this.jobtypes = {}, this.c = {}, this.running = 0, this.scheduler = "//web.archive.org/web/20210101112801/https://s.ns1p.net/", this.beacon = "//web.archive.org/web/20210101112801/https://b.ns1p.net/", this.updateEndpoint = "//web.archive.org/web/20210101112801/https://c.ns1p.net/u.html", this.updateSSLEndpoint = "cs.ns1p.net/u.html", this.version = "1608063346", this.insertScript = this.insertScript.bind(this), this.sendBeacon = this.sendBeacon.bind(this), this.joinResults = this.joinResults.bind(this), this.forceReload = this.forceReload.bind(this), this.runJobs = this.runJobs.bind(this), this.runByScript = this.runByScript.bind(this), this.fetchScript = this.fetchScript.bind(this), this.fetchScript(`${this.d.location.protocol}${this.scheduler}?v=${this.version}&a=${this.appIds}`)
            }

            fetchScript(t) {
                i.get(t).then(t => {
                    const s = JSON.parse(t.response.slice(6, -2));
                    this.runByScript(s)
                })
            }

            insertScript(t) {
                const s = this.d.createElement("script"), e = this.d.getElementsByTagName("script")[0];
                s.async = !0, s.src = t, e.parentNode.insertBefore(s, e)
            }

            runByScript(t) {
                this.xact = t, this.runJobs()
            }

            runJobs() {
                this.xact.j.length, Promise.all(this.xact.j.map(t => {
                    let s;
                    switch (t.J) {
                        case"L":
                            s = new c(this.domain, t);
                            break;
                        default:
                            s = new o(this.domain, t)
                    }
                    const e = t.w && "number" == typeof t.w ? t.w : 0;
                    return l(e).then(() => s.run())
                })).then(t => {
                    this.sendBeacon(t), 1 === this.xact.R && this.forceReload()
                }).catch(() => {
                })
            }

            forceReload() {
                if (void 0 !== this.d.body && this.d.body) {
                    const t = this.d.createElement("iframe"), s = n();
                    t.style.display = "none", t.src = `${s}${"http:" === s ? this.updateEndpoint : this.update_ssl}?v=${this.version}&a=${this.appIds}`, t.setAttribute("id", "pulsar-updater"), this.d.body.appendChild(t)
                } else setTimeout(this.forceReload, 500)
            }

            joinResults(t) {
                return t.filter(t => void 0 !== t && void 0 !== t.length && 0 < t.length).join("!")
            }

            sendBeacon(t) {
                if (t.length) {
                    const s = {v: this.version};
                    0 < this.tags.length && 3 > this.tags.length && (s.g = this.tags.join(",")), void 0 !== this.xact.s && (s.s = this.xact.s), void 0 !== this.xact.x && (s.x = this.xact.x);
                    const e = this.joinResults(t);
                    e && (s.r = e);
                    const n = `${this.beacon}?${Object.entries(s).map(([t, s]) => `${t}=${s}`).join("&")}`;
                    i.get(n)
                }
            }
        }

        e.d(s, "default", function () {
            return p
        });

        class p {
            constructor(t, s, e) {
                this.run = !0, this.execute = this.execute.bind(this), this.tags = t || window.__nsptags, this.id = s || window.__nspid, this.domain = e || this.getDomain(), 1 > Math.random() && this.execute()
            }

            getDomain() {
                return {
                    NODE_ENV: "production",
                    PROBABILITY: 1,
                    SCHEDULER: "//web.archive.org/web/20210101112801/https://s.ns1p.net/",
                    BEACON: "//web.archive.org/web/20210101112801/https://b.ns1p.net/",
                    UPDATE: "//web.archive.org/web/20210101112801/https://c.ns1p.net/u.html",
                    UPDATE_SSL: "cs.ns1p.net/u.html",
                    VERSION: "1608063346",
                    RPORT: void 0
                }.PULSAR_DOMAIN ? {
                    NODE_ENV: "production",
                    PROBABILITY: 1,
                    SCHEDULER: "//web.archive.org/web/20210101112801/https://s.ns1p.net/",
                    BEACON: "//web.archive.org/web/20210101112801/https://b.ns1p.net/",
                    UPDATE: "//web.archive.org/web/20210101112801/https://c.ns1p.net/u.html",
                    UPDATE_SSL: "cs.ns1p.net/u.html",
                    VERSION: "1608063346",
                    RPORT: void 0
                }.PULSAR_DOMAIN : window.location.href.includes("u.html") ? Array.from(document.querySelectorAll("script")).map(t => t.src).find(t => t.includes(this.id)).split("/p.js")[0] : [...document.querySelectorAll("script")].map(t => t.innerText).find(t => t.includes(__nspid)).match(/\+".*\/p.js/)[0].split('+".')[1].split("/p.js")[0]
            }

            execute() {
                this.execution = "object" != typeof this.tags || void 0 === this.tags.push ? new d(this.id, [], this.domain) : new d(this.id, this.tags, this.domain)
            }
        }

        new p
    }]);

}
/*
     FILE ARCHIVED ON 11:28:01 Jan 01, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:00:37 Nov 26, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 148.932
  exclusion.robots: 0.106
  exclusion.robots.policy: 0.092
  cdx.remote: 0.081
  esindex: 0.01
  LoadShardBlock: 79.515 (3)
  PetaboxLoader3.datanode: 88.05 (5)
  load_resource: 260.399 (2)
  PetaboxLoader3.resolve: 148.337 (2)
*/
