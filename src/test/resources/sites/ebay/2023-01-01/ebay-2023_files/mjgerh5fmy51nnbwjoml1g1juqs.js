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

    "use strict";
    !function () {
        var r = [], i = {},
            o = window.document.location.hostname.endsWith(".qa.ebay.com") ? "https://web.archive.org/web/20230901120853/https://gisufespipeline2.vip.qa.ebay.com/webresources" : "https://web.archive.org/web/20230901120853/https://monitor.ebay.com/webresources",
            c = 0;

        function s(t, n) {
            var e = {};
            e.type = n, e.url = t ? a(t) : null, r.push(e)
        }

        function t() {
            try {
                if (window.performance && window.performance.getEntriesByType) {
                    for (var t = window.performance.getEntriesByType("resource"), n = t.length, e = c ? c + 1 : 0; e < n - 1; e++) "script" === t[e].initiatorType ? s(t[e].name, "script") : "xmlhttprequest" === t[e].initiatorType ? s(t[e].name, "xhr") : "fetch" === t[e].initiatorType ? s(t[e].name, "fetch") : "beacon" !== t[e].initiatorType || t[e].name.startsWith(o) || s(t[e].name, "beacon"), c = e;
                    navigator && navigator.sendBeacon && 0 < r.length && (!i || i.url && i.ts || h(), a = JSON.stringify({
                        meta: i,
                        data: r
                    }), navigator.sendBeacon(o, a), r = [])
                }
            } catch (t) {
            }
            var a
        }

        function a(t) {
            try {
                var n = (t = new URL(t)).origin;
                if (t && t.pathname && "" !== t.pathname && (n += t.pathname), t && t.search) {
                    n += "?";
                    for (var e = t.search.split("?")[1], a = (e = e.split("&")).length, r = 0; r < a; r++) {
                        var i = e[r].split("=")[0] + "=";
                        if (r === e.length - 1) return n += i;
                        n = n + i + "&"
                    }
                }
                return n
            } catch (t) {
                return ""
            }
        }

        function h() {
            i.url = a(window.location.href), i.ts = Date.now()
        }

        h(), t(), setInterval(function () {
            t()
        }, 5e3)
    }();

}
/*
     FILE ARCHIVED ON 12:08:53 Sep 01, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:01:24 Nov 26, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1111.36
  exclusion.robots: 0.167
  exclusion.robots.policy: 0.151
  cdx.remote: 0.101
  esindex: 0.014
  LoadShardBlock: 111.829 (3)
  PetaboxLoader3.datanode: 84.127 (4)
  load_resource: 112.313
  PetaboxLoader3.resolve: 73.355
*/
