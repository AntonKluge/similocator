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

    $_mod.main("/jquery$3.5.1", "dist/jquery");
    $_mod.def("/jquery$3.5.1/dist/jquery", function (la, Qc, ca) {
        var D = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (r) {
            return typeof r
        } : function (r) {
            return r && "function" === typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }, la = "undefined" !== typeof window ? window : this, ka = function (r, la) {
            function ca(c, d, a) {
                var a = a || q, b, e = a.createElement("script");
                e.text = c;
                if (d) for (b in Rc) (c = d[b] || d.getAttribute && d.getAttribute(b)) && e.setAttribute(b, c);
                a.head.appendChild(e).parentNode.removeChild(e)
            }

            function ma(c) {
                return null == c ? c + "" : "object" === ("undefined" === typeof c ? "undefined" : D(c)) || "function" === typeof c ? Ma[Hb.call(c)] || "object" : "undefined" === typeof c ? "undefined" : D(c)
            }

            function ka(c) {
                var d = !!c && "length" in c && c.length, a = ma(c);
                return s(c) || na(c) ? !1 : "array" === a || 0 === d || "number" === typeof d && 0 < d && d - 1 in c
            }

            function G(c, d) {
                return c.nodeName && c.nodeName.toLowerCase() === d.toLowerCase()
            }

            function gb(m, d, a) {
                return s(d) ? c.grep(m, function (b, e) {
                    return !!d.call(b, e, b) !== a
                }) : d.nodeType ? c.grep(m, function (b) {
                    return b ===
                        d !== a
                }) : "string" !== typeof d ? c.grep(m, function (b) {
                    return -1 < Na.call(d, b) !== a
                }) : c.filter(d, m, a)
            }

            function Ib(c, d) {
                for (; (c = c[d]) && 1 !== c.nodeType;) ;
                return c
            }

            function oa(c) {
                return c
            }

            function Oa(c) {
                throw c;
            }

            function Jb(c, d, a, b) {
                var e;
                try {
                    c && s(e = c.promise) ? e.call(c).done(d).fail(a) : c && s(e = c.then) ? e.call(c, d, a) : d.apply(void 0, [c].slice(b))
                } catch (f) {
                    a.apply(void 0, [f])
                }
            }

            function Pa() {
                q.removeEventListener("DOMContentLoaded", Pa);
                r.removeEventListener("load", Pa);
                c.ready()
            }

            function Sc(c, d) {
                return d.toUpperCase()
            }

            function R(c) {
                return c.replace(Tc, "ms-").replace(Uc, Sc)
            }

            function Aa() {
                this.expando = c.expando + Aa.uid++
            }

            function Kb(c, d, a) {
                if (void 0 === a && 1 === c.nodeType) if (a = "data-" + d.replace(Vc, "-$&").toLowerCase(), a = c.getAttribute(a), "string" === typeof a) {
                    try {
                        a = "true" === a ? !0 : "false" === a ? !1 : "null" === a ? null : a === +a + "" ? +a : Wc.test(a) ? JSON.parse(a) : a
                    } catch (b) {
                    }
                    E.set(c, d, a)
                } else a = void 0;
                return a
            }

            function Lb(m, d, a, b) {
                var e, f, g = 20, h = b ? function () {
                    return b.cur()
                } : function () {
                    return c.css(m, d, "")
                }, i = h(), j = a && a[3] || (c.cssNumber[d] ?
                    "" : "px"), l = m.nodeType && (c.cssNumber[d] || "px" !== j && +i) && Ba.exec(c.css(m, d));
                if (l && l[3] !== j) {
                    i /= 2;
                    j = j || l[3];
                    for (l = +i || 1; g--;) {
                        c.style(m, d, l + j);
                        if (0 >= (1 - f) * (1 - (f = h() / i || 0.5))) g = 0;
                        l /= f
                    }
                    l *= 2;
                    c.style(m, d, l + j);
                    a = a || []
                }
                a && (l = +l || +i || 0, e = a[1] ? l + (a[1] + 1) * a[2] : +a[2], b && (b.unit = j, b.start = l, b.end = e));
                return e
            }

            function pa(m, d) {
                for (var a, b, e = [], f = 0, g = m.length; f < g; f++) if (b = m[f], b.style) if (a = b.style.display, d) {
                    if ("none" === a && (e[f] = o.get(b, "display") || null, e[f] || (b.style.display = "")), "" === b.style.display && Qa(b)) {
                        a =
                            e;
                        var h = f;
                        var i = void 0, i = b.ownerDocument;
                        b = b.nodeName;
                        var j = Mb[b];
                        j || (i = i.body.appendChild(i.createElement(b)), j = c.css(i, "display"), i.parentNode.removeChild(i), "none" === j && (j = "block"), Mb[b] = j);
                        b = j;
                        a[h] = b
                    }
                } else "none" !== a && (e[f] = "none", o.set(b, "display", a));
                for (f = 0; f < g; f++) null != e[f] && (m[f].style.display = e[f]);
                return m
            }

            function C(m, d) {
                var a;
                a = "undefined" !== typeof m.getElementsByTagName ? m.getElementsByTagName(d || "*") : "undefined" !== typeof m.querySelectorAll ? m.querySelectorAll(d || "*") : [];
                return void 0 ===
                d || d && G(m, d) ? c.merge([m], a) : a
            }

            function hb(c, d) {
                for (var a = 0, b = c.length; a < b; a++) o.set(c[a], "globalEval", !d || o.get(d[a], "globalEval"))
            }

            function Nb(m, d, a, b, e) {
                for (var f, g, h, i = d.createDocumentFragment(), j = [], l = 0, n = m.length; l < n; l++) if ((f = m[l]) || 0 === f) if ("object" === ma(f)) c.merge(j, f.nodeType ? [f] : f); else if (Xc.test(f)) {
                    g = g || i.appendChild(d.createElement("div"));
                    h = (Ob.exec(f) || ["", ""])[1].toLowerCase();
                    h = J[h] || J._default;
                    g.innerHTML = h[1] + c.htmlPrefilter(f) + h[2];
                    for (h = h[0]; h--;) g = g.lastChild;
                    c.merge(j, g.childNodes);
                    g = i.firstChild;
                    g.textContent = ""
                } else j.push(d.createTextNode(f));
                i.textContent = "";
                for (l = 0; f = j[l++];) if (b && -1 < c.inArray(f, b)) e && e.push(f); else if (m = qa(f), g = C(i.appendChild(f), "script"), m && hb(g), a) for (h = 0; f = g[h++];) Pb.test(f.type || "") && a.push(f);
                return i
            }

            function ra() {
                return !0
            }

            function sa() {
                return !1
            }

            function Yc(c, d) {
                var a;
                a:{
                    try {
                        a = q.activeElement;
                        break a
                    } catch (b) {
                    }
                    a = void 0
                }
                return c === a === ("focus" === d)
            }

            function ib(m, d, a, b, e, f) {
                var g, h;
                if ("object" === ("undefined" === typeof d ? "undefined" : D(d))) {
                    "string" !==
                    typeof a && (b = b || a, a = void 0);
                    for (h in d) ib(m, h, a, b, d[h], f);
                    return m
                }
                null == b && null == e ? (e = a, b = a = void 0) : null == e && ("string" === typeof a ? (e = b, b = void 0) : (e = b, b = a, a = void 0));
                if (!1 === e) e = sa; else if (!e) return m;
                1 === f && (g = e, e = function (a) {
                    c().off(a);
                    return g.apply(this, arguments)
                }, e.guid = g.guid || (g.guid = c.guid++));
                return m.each(function () {
                    c.event.add(this, d, e, b, a)
                })
            }

            function Ra(m, d, a) {
                a ? (o.set(m, d, !1), c.event.add(m, d, {
                    namespace: !1, handler: function (b) {
                        var e, f, g = o.get(this, d);
                        if (b.isTrigger & 1 && this[d]) if (g.length) (c.event.special[d] ||
                            {}).delegateType && b.stopPropagation(); else {
                            if (g = Y.call(arguments), o.set(this, d, g), e = a(this, d), this[d](), f = o.get(this, d), g !== f || e ? o.set(this, d, !1) : f = {}, g !== f) return b.stopImmediatePropagation(), b.preventDefault(), f.value
                        } else g.length && (o.set(this, d, {value: c.event.trigger(c.extend(g[0], c.Event.prototype), g.slice(1), this)}), b.stopImmediatePropagation())
                    }
                })) : void 0 === o.get(m, d) && c.event.add(m, d, ra)
            }

            function Qb(m, d) {
                return G(m, "table") && G(11 !== d.nodeType ? d : d.firstChild, "tr") ? c(m).children("tbody")[0] ||
                    m : m
            }

            function Zc(c) {
                c.type = (null !== c.getAttribute("type")) + "/" + c.type;
                return c
            }

            function $c(c) {
                "true/" === (c.type || "").slice(0, 5) ? c.type = c.type.slice(5) : c.removeAttribute("type");
                return c
            }

            function Rb(m, d) {
                var a, b, e, f;
                if (1 === d.nodeType) {
                    if (o.hasData(m) && (a = o.get(m), f = a.events)) for (e in o.remove(d, "handle events"), f) {
                        a = 0;
                        for (b = f[e].length; a < b; a++) c.event.add(d, e, f[e][a])
                    }
                    E.hasData(m) && (e = E.access(m), e = c.extend({}, e), E.set(d, e))
                }
            }

            function ta(m, d, a, b) {
                var d = Sb(d), e, f, g, h, i = 0, j = m.length, l = j - 1, n = d[0], p = s(n);
                if (p || 1 < j && "string" === typeof n && !w.checkClone && ad.test(n)) return m.each(function (e) {
                    var f = m.eq(e);
                    p && (d[0] = n.call(this, e, f.html()));
                    ta(f, d, a, b)
                });
                if (j && (e = Nb(d, m[0].ownerDocument, !1, m, b), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || b)) {
                    f = c.map(C(e, "script"), Zc);
                    for (g = f.length; i < j; i++) h = e, i !== l && (h = c.clone(h, !0, !0), g && c.merge(f, C(h, "script"))), a.call(m[i], h, i);
                    if (g) {
                        e = f[f.length - 1].ownerDocument;
                        c.map(f, $c);
                        for (i = 0; i < g; i++) if (h = f[i], Pb.test(h.type || "") && !o.access(h, "globalEval") && c.contains(e,
                            h)) h.src && "module" !== (h.type || "").toLowerCase() ? c._evalUrl && !h.noModule && c._evalUrl(h.src, {nonce: h.nonce || h.getAttribute("nonce")}, e) : ca(h.textContent.replace(bd, ""), h, e)
                    }
                }
                return m
            }

            function Tb(m, d, a) {
                for (var b = d ? c.filter(d, m) : m, e = 0; null != (d = b[e]); e++) !a && 1 === d.nodeType && c.cleanData(C(d)), d.parentNode && (a && qa(d) && hb(C(d, "script")), d.parentNode.removeChild(d));
                return m
            }

            function Ca(m, d, a) {
                var b, e, f = m.style;
                if (a = a || Sa(m)) e = a.getPropertyValue(d) || a[d], "" === e && !qa(m) && (e = c.style(m, d)), !w.pixelBoxStyles() &&
                (jb.test(e) && cd.test(d)) && (m = f.width, d = f.minWidth, b = f.maxWidth, f.minWidth = f.maxWidth = f.width = e, e = a.width, f.width = m, f.minWidth = d, f.maxWidth = b);
                return void 0 !== e ? e + "" : e
            }

            function Ub(c, d) {
                return {
                    get: function () {
                        if (c()) delete this.get; else return (this.get = d).apply(this, arguments)
                    }
                }
            }

            function kb(m) {
                var d = c.cssProps[m] || Vb[m];
                if (d) return d;
                if (m in Wb) return m;
                var d = Vb, a;
                a:{
                    a = m;
                    for (var b = a[0].toUpperCase() + a.slice(1), e = Xb.length; e--;) if (a = Xb[e] + b, a in Wb) break a;
                    a = void 0
                }
                return d[m] = a || m
            }

            function Yb(c, d, a) {
                return (c =
                    Ba.exec(d)) ? Math.max(0, c[2] - (a || 0)) + (c[3] || "px") : d
            }

            function lb(m, d, a, b, e, f) {
                var g = "width" === d ? 1 : 0, h = 0, i = 0;
                if (a === (b ? "border" : "content")) return 0;
                for (; 4 > g; g += 2) "margin" === a && (i += c.css(m, a + U[g], !0, e)), b ? ("content" === a && (i -= c.css(m, "padding" + U[g], !0, e)), "margin" !== a && (i -= c.css(m, "border" + U[g] + "Width", !0, e))) : (i += c.css(m, "padding" + U[g], !0, e), "padding" !== a ? i += c.css(m, "border" + U[g] + "Width", !0, e) : h += c.css(m, "border" + U[g] + "Width", !0, e));
                !b && 0 <= f && (i += Math.max(0, Math.ceil(m["offset" + d[0].toUpperCase() + d.slice(1)] -
                    f - i - h - 0.5)) || 0);
                return i
            }

            function Zb(m, d, a) {
                var b = Sa(m), e = (!w.boxSizingReliable() || a) && "border-box" === c.css(m, "boxSizing", !1, b),
                    f = e, g = Ca(m, d, b), h = "offset" + d[0].toUpperCase() + d.slice(1);
                if (jb.test(g)) {
                    if (!a) return g;
                    g = "auto"
                }
                if ((!w.boxSizingReliable() && e || !w.reliableTrDimensions() && G(m, "tr") || "auto" === g || !parseFloat(g) && "inline" === c.css(m, "display", !1, b)) && m.getClientRects().length) e = "border-box" === c.css(m, "boxSizing", !1, b), (f = h in m) && (g = m[h]);
                g = parseFloat(g) || 0;
                return g + lb(m, d, a || (e ? "border" : "content"),
                    f, b, g) + "px"
            }

            function F(c, d, a, b, e) {
                return new F.prototype.init(c, d, a, b, e)
            }

            function mb() {
                Ta && (!1 === q.hidden && r.requestAnimationFrame ? r.requestAnimationFrame(mb) : r.setTimeout(mb, c.fx.interval), c.fx.tick())
            }

            function $b() {
                r.setTimeout(function () {
                    ua = void 0
                });
                return ua = Date.now()
            }

            function Ua(c, d) {
                for (var a, b = 0, e = {height: c}, d = d ? 1 : 0; 4 > b; b += 2 - d) a = U[b], e["margin" + a] = e["padding" + a] = c;
                d && (e.opacity = e.width = c);
                return e
            }

            function ac(c, d, a) {
                for (var b, e = (N.tweeners[d] || []).concat(N.tweeners["*"]), f = 0, g = e.length; f <
                g; f++) if (b = e[f].call(a, d, c)) return b
            }

            function N(m, d, a) {
                var b, e, f = 0, g = N.prefilters.length, h = c.Deferred().always(function () {
                    delete i.elem
                }), i = function () {
                    if (e) return !1;
                    for (var a = ua || $b(), a = Math.max(0, j.startTime + j.duration - a), b = 1 - (a / j.duration || 0), d = 0, f = j.tweens.length; d < f; d++) j.tweens[d].run(b);
                    h.notifyWith(m, [j, b, a]);
                    if (1 > b && f) return a;
                    f || h.notifyWith(m, [j, 1, 0]);
                    h.resolveWith(m, [j]);
                    return !1
                }, j = h.promise({
                    elem: m,
                    props: c.extend({}, d),
                    opts: c.extend(!0, {specialEasing: {}, easing: c.easing._default}, a),
                    originalProperties: d,
                    originalOptions: a,
                    startTime: ua || $b(),
                    duration: a.duration,
                    tweens: [],
                    createTween: function (a, b) {
                        var e = c.Tween(m, j.opts, a, b, j.opts.specialEasing[a] || j.opts.easing);
                        j.tweens.push(e);
                        return e
                    },
                    stop: function (a) {
                        var b = 0, d = a ? j.tweens.length : 0;
                        if (e) return this;
                        for (e = !0; b < d; b++) j.tweens[b].run(1);
                        a ? (h.notifyWith(m, [j, 1, 0]), h.resolveWith(m, [j, a])) : h.rejectWith(m, [j, a]);
                        return this
                    }
                }), d = j.props, a = j.opts.specialEasing, l, n, p, t;
                for (b in d) if (l = R(b), n = a[l], p = d[b], Array.isArray(p) && (n = p[1], p = d[b] = p[0]), b !== l && (d[l] =
                    p, delete d[b]), (t = c.cssHooks[l]) && "expand" in t) for (b in p = t.expand(p), delete d[l], p) b in d || (d[b] = p[b], a[b] = n); else a[l] = n;
                for (; f < g; f++) if (b = N.prefilters[f].call(j, m, d, j.opts)) return s(b.stop) && (c._queueHooks(j.elem, j.opts.queue).stop = b.stop.bind(b)), b;
                c.map(d, ac, j);
                s(j.opts.start) && j.opts.start.call(m, j);
                j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
                c.fx.timer(c.extend(i, {elem: m, anim: j, queue: j.opts.queue}));
                return j
            }

            function da(c) {
                return (c.match(S) ||
                    []).join(" ")
            }

            function ea(c) {
                return c.getAttribute && c.getAttribute("class") || ""
            }

            function nb(c) {
                return Array.isArray(c) ? c : "string" === typeof c ? c.match(S) || [] : []
            }

            function ob(m, d, a, b) {
                var e;
                if (Array.isArray(d)) c.each(d, function (e, d) {
                    a || dd.test(m) ? b(m, d) : ob(m + "[" + ("object" === ("undefined" === typeof d ? "undefined" : D(d)) && null != d ? e : "") + "]", d, a, b)
                }); else if (!a && "object" === ma(d)) for (e in d) ob(m + "[" + e + "]", d[e], a, b); else b(m, d)
            }

            function cc(c) {
                return function (d, a) {
                    "string" !== typeof d && (a = d, d = "*");
                    var b, e = 0, f = d.toLowerCase().match(S) ||
                        [];
                    if (s(a)) for (; b = f[e++];) "+" === b[0] ? (b = b.slice(1) || "*", (c[b] = c[b] || []).unshift(a)) : (c[b] = c[b] || []).push(a)
                }
            }

            function dc(m, d, a, b) {
                function e(h) {
                    var i;
                    f[h] = !0;
                    c.each(m[h] || [], function (c, h) {
                        var n = h(d, a, b);
                        if ("string" === typeof n && !g && !f[n]) return d.dataTypes.unshift(n), e(n), !1;
                        if (g) return !(i = n)
                    });
                    return i
                }

                var f = {}, g = m === pb;
                return e(d.dataTypes[0]) || !f["*"] && e("*")
            }

            function qb(m, d) {
                var a, b, e = c.ajaxSettings.flatOptions || {};
                for (a in d) void 0 !== d[a] && ((e[a] ? m : b || (b = {}))[a] = d[a]);
                b && c.extend(!0, m, b);
                return m
            }

            var V = [], ec = Object.getPrototypeOf, Y = V.slice, Sb = V.flat ? function (c) {
                    return V.flat.call(c)
                } : function (c) {
                    return V.concat.apply([], c)
                }, rb = V.push, Na = V.indexOf, Ma = {}, Hb = Ma.toString, Va = Ma.hasOwnProperty, fc = Va.toString,
                ed = fc.call(Object), w = {}, s = function (c) {
                    return "function" === typeof c && "number" !== typeof c.nodeType
                }, na = function (c) {
                    return null != c && c === c.window
                }, q = r.document, Rc = {type: !0, src: !0, nonce: !0, noModule: !0}, c = function d(a, b) {
                    return new d.fn.init(a, b)
                };
            c.fn = c.prototype = {
                jquery: "3.5.1", constructor: c, length: 0,
                toArray: function () {
                    return Y.call(this)
                }, get: function (d) {
                    return null == d ? Y.call(this) : 0 > d ? this[d + this.length] : this[d]
                }, pushStack: function (d) {
                    d = c.merge(this.constructor(), d);
                    d.prevObject = this;
                    return d
                }, each: function (d) {
                    return c.each(this, d)
                }, map: function (d) {
                    return this.pushStack(c.map(this, function (a, b) {
                        return d.call(a, b, a)
                    }))
                }, slice: function () {
                    return this.pushStack(Y.apply(this, arguments))
                }, first: function () {
                    return this.eq(0)
                }, last: function () {
                    return this.eq(-1)
                }, even: function () {
                    return this.pushStack(c.grep(this,
                        function (d, a) {
                            return (a + 1) % 2
                        }))
                }, odd: function () {
                    return this.pushStack(c.grep(this, function (d, a) {
                        return a % 2
                    }))
                }, eq: function (d) {
                    var a = this.length, d = +d + (0 > d ? a : 0);
                    return this.pushStack(0 <= d && d < a ? [this[d]] : [])
                }, end: function () {
                    return this.prevObject || this.constructor()
                }, push: rb, sort: V.sort, splice: V.splice
            };
            c.extend = c.fn.extend = function () {
                var d, a, b, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
                "boolean" === typeof g && (j = g, g = arguments[h] || {}, h++);
                if ("object" !== ("undefined" === typeof g ? "undefined" : D(g)) &&
                    !s(g)) g = {};
                h === i && (g = this, h--);
                for (; h < i; h++) if (null != (d = arguments[h])) for (a in d) e = d[a], "__proto__" === a || g === e || (j && e && (c.isPlainObject(e) || (f = Array.isArray(e))) ? (b = g[a], b = f && !Array.isArray(b) ? [] : !f && !c.isPlainObject(b) ? {} : b, f = !1, g[a] = c.extend(j, b, e)) : void 0 !== e && (g[a] = e));
                return g
            };
            c.extend({
                expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (d) {
                    throw Error(d);
                }, noop: function () {
                }, isPlainObject: function (d) {
                    if (!d || "[object Object]" !== Hb.call(d)) return !1;
                    d = ec(d);
                    if (!d) return !0;
                    d = Va.call(d, "constructor") && d.constructor;
                    return "function" === typeof d && fc.call(d) === ed
                }, isEmptyObject: function (d) {
                    for (var a in d) return !1;
                    return !0
                }, globalEval: function (d, a, b) {
                    ca(d, {nonce: a && a.nonce}, b)
                }, each: function (d, a) {
                    var b, e = 0;
                    if (ka(d)) for (b = d.length; e < b && !1 !== a.call(d[e], e, d[e]); e++) ; else for (e in d) if (!1 === a.call(d[e], e, d[e])) break;
                    return d
                }, makeArray: function (d, a) {
                    var b = a || [];
                    null != d && (ka(Object(d)) ? c.merge(b, "string" === typeof d ? [d] : d) : rb.call(b, d));
                    return b
                }, inArray: function (d, a, b) {
                    return null ==
                    a ? -1 : Na.call(a, d, b)
                }, merge: function (d, a) {
                    for (var b = +a.length, e = 0, f = d.length; e < b; e++) d[f++] = a[e];
                    d.length = f;
                    return d
                }, grep: function (d, a, b) {
                    for (var e = [], f = 0, c = d.length, h = !b; f < c; f++) b = !a(d[f], f), b !== h && e.push(d[f]);
                    return e
                }, map: function (d, a, b) {
                    var e, f, c = 0, h = [];
                    if (ka(d)) for (e = d.length; c < e; c++) f = a(d[c], c, b), null != f && h.push(f); else for (c in d) f = a(d[c], c, b), null != f && h.push(f);
                    return Sb(h)
                }, guid: 1, support: w
            });
            "function" === typeof Symbol && (c.fn[Symbol.iterator] = V[Symbol.iterator]);
            c.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
                function (d, a) {
                    Ma["[object " + a + "]"] = a.toLowerCase()
                });
            var sb = r, y = function (d, a, b, e) {
                    var c, g, h, i, j, l = a && a.ownerDocument;
                    g = a ? a.nodeType : 9;
                    b = b || [];
                    if ("string" !== typeof d || !d || 1 !== g && 9 !== g && 11 !== g) return b;
                    if (!e && (Z(a), a = a || u, L)) {
                        if (11 !== g && (j = fd.exec(d))) if (c = j[1]) if (9 === g) if (h = a.getElementById(c)) {
                            if (h.id === c) return b.push(h), b
                        } else return b; else {
                            if (l && (h = l.getElementById(c)) && Da(a, h) && h.id === c) return b.push(h), b
                        } else {
                            if (j[2]) return $.apply(b, a.getElementsByTagName(d)), b;
                            if ((c = j[3]) && x.getElementsByClassName &&
                                a.getElementsByClassName) return $.apply(b, a.getElementsByClassName(c)), b
                        }
                        if (x.qsa && !Wa[d + " "] && (!A || !A.test(d)) && (1 !== g || "object" !== a.nodeName.toLowerCase())) {
                            c = d;
                            l = a;
                            if (1 === g && (gd.test(d) || gc.test(d))) {
                                l = tb.test(d) && ub(a.parentNode) || a;
                                if (l !== a || !x.scope) (i = a.getAttribute("id")) ? i = i.replace(hc, ic) : a.setAttribute("id", i = v);
                                c = Ea(d);
                                for (g = c.length; g--;) c[g] = (i ? "#" + i : ":scope") + " " + Xa(c[g]);
                                c = c.join(",")
                            }
                            try {
                                return $.apply(b, l.querySelectorAll(c)), b
                            } catch (n) {
                                Wa(d, !0)
                            } finally {
                                i === v && a.removeAttribute("id")
                            }
                        }
                    }
                    return jc(d.replace(Ya,
                        "$1"), a, b, e)
                }, Za = function () {
                    function d(b, e) {
                        a.push(b + " ") > z.cacheLength && delete d[a.shift()];
                        return d[b + " "] = e
                    }

                    var a = [];
                    return d
                }, O = function (d) {
                    d[v] = !0;
                    return d
                }, P = function (d) {
                    var a = u.createElement("fieldset");
                    try {
                        return !!d(a)
                    } catch (b) {
                        return !1
                    } finally {
                        a.parentNode && a.parentNode.removeChild(a)
                    }
                }, vb = function (d, a) {
                    for (var b = d.split("|"), e = b.length; e--;) z.attrHandle[b[e]] = a
                }, kc = function (d, a) {
                    var b = a && d, e = b && 1 === d.nodeType && 1 === a.nodeType && d.sourceIndex - a.sourceIndex;
                    if (e) return e;
                    if (b) for (; b = b.nextSibling;) if (b ===
                        a) return -1;
                    return d ? 1 : -1
                }, hd = function (d) {
                    return function (a) {
                        return "input" === a.nodeName.toLowerCase() && a.type === d
                    }
                }, id = function (d) {
                    return function (a) {
                        var b = a.nodeName.toLowerCase();
                        return ("input" === b || "button" === b) && a.type === d
                    }
                }, lc = function (d) {
                    return function (a) {
                        return "form" in a ? a.parentNode && !1 === a.disabled ? "label" in a ? "label" in a.parentNode ? a.parentNode.disabled === d : a.disabled === d : a.isDisabled === d || a.isDisabled !== !d && jd(a) === d : a.disabled === d : "label" in a ? a.disabled === d : !1
                    }
                }, fa = function (d) {
                    return O(function (a) {
                        a =
                            +a;
                        return O(function (b, e) {
                            for (var c, g = d([], b.length, a), h = g.length; h--;) if (b[c = g[h]]) b[c] = !(e[c] = b[c])
                        })
                    })
                }, ub = function (d) {
                    return d && "undefined" !== typeof d.getElementsByTagName && d
                }, mc = function () {
                }, Xa = function (d) {
                    for (var a = 0, b = d.length, e = ""; a < b; a++) e += d[a].value;
                    return e
                }, $a = function (d, a, b) {
                    var e = a.dir, c = a.next, g = c || e, h = b && "parentNode" === g, i = kd++;
                    return a.first ? function (a, b, c) {
                        for (; a = a[e];) if (1 === a.nodeType || h) return d(a, b, c);
                        return !1
                    } : function (a, b, n) {
                        var p, t, k = [T, i];
                        if (n) for (; a = a[e];) {
                            if ((1 === a.nodeType ||
                                h) && d(a, b, n)) return !0
                        } else for (; a = a[e];) if (1 === a.nodeType || h) if (t = a[v] || (a[v] = {}), t = t[a.uniqueID] || (t[a.uniqueID] = {}), c && c === a.nodeName.toLowerCase()) a = a[e] || a; else {
                            if ((p = t[g]) && p[0] === T && p[1] === i) return k[2] = p[2];
                            t[g] = k;
                            if (k[2] = d(a, b, n)) return !0
                        }
                        return !1
                    }
                }, wb = function (d) {
                    return 1 < d.length ? function (a, b, e) {
                        for (var c = d.length; c--;) if (!d[c](a, b, e)) return !1;
                        return !0
                    } : d[0]
                }, ab = function (d, a, b, e, c) {
                    for (var g, h = [], i = 0, j = d.length, l = null != a; i < j; i++) if (g = d[i]) if (!b || b(g, e, c)) h.push(g), l && a.push(i);
                    return h
                },
                xb = function (d, a, b, e, c, g) {
                    e && !e[v] && (e = xb(e));
                    c && !c[v] && (c = xb(c, g));
                    return O(function (g, i, j, l) {
                        var n, p, t = [], k = [], bc = i.length, I;
                        if (!(I = g)) {
                            I = a || "*";
                            for (var o = j.nodeType ? [j] : j, r = [], s = 0, q = o.length; s < q; s++) y(I, o[s], r);
                            I = r
                        }
                        I = d && (g || !a) ? ab(I, t, d, j, l) : I;
                        o = b ? c || (g ? d : bc || e) ? [] : i : I;
                        b && b(I, o, j, l);
                        if (e) {
                            n = ab(o, k);
                            e(n, [], j, l);
                            for (j = n.length; j--;) if (p = n[j]) o[k[j]] = !(I[k[j]] = p)
                        }
                        if (g) {
                            if (c || d) {
                                if (c) {
                                    n = [];
                                    for (j = o.length; j--;) if (p = o[j]) n.push(I[j] = p);
                                    c(null, o = [], n, l)
                                }
                                for (j = o.length; j--;) if ((p = o[j]) && -1 < (n = c ? ga(g, p) :
                                    t[j])) g[n] = !(i[n] = p)
                            }
                        } else o = ab(o === i ? o.splice(bc, o.length) : o), c ? c(null, i, o, l) : $.apply(i, o)
                    })
                }, yb = function (d) {
                    var a, b, e, c = d.length, g = z.relative[d[0].type];
                    b = g || z.relative[" "];
                    for (var h = g ? 1 : 0, i = $a(function (b) {
                        return b === a
                    }, b, !0), j = $a(function (b) {
                        return -1 < ga(a, b)
                    }, b, !0), l = [function (b, e, d) {
                        b = !g && (d || e !== bb) || ((a = e).nodeType ? i(b, e, d) : j(b, e, d));
                        a = null;
                        return b
                    }]; h < c; h++) if (b = z.relative[d[h].type]) l = [$a(wb(l), b)]; else {
                        b = z.filter[d[h].type].apply(null, d[h].matches);
                        if (b[v]) {
                            for (e = ++h; e < c && !z.relative[d[e].type]; e++) ;
                            return xb(1 < h && wb(l), 1 < h && Xa(d.slice(0, h - 1).concat({value: " " === d[h - 2].type ? "*" : ""})).replace(Ya, "$1"), b, h < e && yb(d.slice(h, e)), e < c && yb(d = d.slice(e)), e < c && Xa(d))
                        }
                        l.push(b)
                    }
                    return wb(l)
                }, va, x, z, cb, nc, Ea, zb, jc, bb, aa, wa, Z, u, H, L, A, ha, db, Da, v = "sizzle" + 1 * new Date,
                Q = sb.document, T = 0, kd = 0, oc = Za(), pc = Za(), qc = Za(), Wa = Za(), Ab = function (d, a) {
                    d === a && (wa = !0);
                    return 0
                }, ld = {}.hasOwnProperty, ia = [], md = ia.pop, nd = ia.push, $ = ia.push, rc = ia.slice,
                ga = function (d, a) {
                    for (var b = 0, e = d.length; b < e; b++) if (d[b] === a) return b;
                    return -1
                },
                od = /[\x20\t\r\n\f]+/g, Ya = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
                pd = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, gc = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
                gd = /[\x20\t\r\n\f]|>/,
                qd = RegExp(":((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
                rd = /^(?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+$/, eb = {
                    ID: /^#((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+)/,
                    CLASS: /^\.((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+)/,
                    TAG: /^((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+|[*])/,
                    ATTR: RegExp("^\\[[\\x20\\t\\r\\n\\f]*((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+))|)[\\x20\\t\\r\\n\\f]*\\]"),
                    PSEUDO: RegExp("^:((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
                    bool: RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
                    needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                        "i")
                }, sd = /HTML$/i, td = /^(?:input|select|textarea|button)$/i, ud = /^h\d$/i, Fa = /^[^{]+\{\s*\[native \w/,
                fd = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, tb = /[+~]/,
                W = /\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\([^\r\n\f])/g, X = function (d, a) {
                    var b = "0x" + d.slice(1) - 65536;
                    return a ? a : 0 > b ? String.fromCharCode(b + 65536) : String.fromCharCode(b >> 10 | 55296, b & 1023 | 56320)
                }, hc = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ic = function (d, a) {
                    return a ? "\x00" === d ? "\ufffd" : d.slice(0, -1) + "\\" + d.charCodeAt(d.length - 1).toString(16) + " " : "\\" +
                        d
                }, sc = function () {
                    Z()
                }, jd = $a(function (d) {
                    return !0 === d.disabled && "fieldset" === d.nodeName.toLowerCase()
                }, {dir: "parentNode", next: "legend"});
            try {
                $.apply(ia = rc.call(Q.childNodes), Q.childNodes), ia[Q.childNodes.length].nodeType
            } catch (Qc) {
                $ = {
                    apply: ia.length ? function (d, a) {
                        nd.apply(d, rc.call(a))
                    } : function (d, a) {
                        for (var b = d.length, e = 0; d[b++] = a[e++];) ;
                        d.length = b - 1
                    }
                }
            }
            x = y.support = {};
            nc = y.isXML = function (d) {
                var a = (d.ownerDocument || d).documentElement;
                return !sd.test(d.namespaceURI || a && a.nodeName || "HTML")
            };
            Z = y.setDocument =
                function (d) {
                    var a, d = d ? d.ownerDocument || d : Q;
                    if (d == u || 9 !== d.nodeType || !d.documentElement) return u;
                    u = d;
                    H = u.documentElement;
                    L = !nc(u);
                    if (Q != u && (a = u.defaultView) && a.top !== a) a.addEventListener ? a.addEventListener("unload", sc, !1) : a.attachEvent && a.attachEvent("onunload", sc);
                    x.scope = P(function (a) {
                        H.appendChild(a).appendChild(u.createElement("div"));
                        return "undefined" !== typeof a.querySelectorAll && !a.querySelectorAll(":scope fieldset div").length
                    });
                    x.attributes = P(function (a) {
                        a.className = "i";
                        return !a.getAttribute("className")
                    });
                    x.getElementsByTagName = P(function (a) {
                        a.appendChild(u.createComment(""));
                        return !a.getElementsByTagName("*").length
                    });
                    x.getElementsByClassName = Fa.test(u.getElementsByClassName);
                    x.getById = P(function (a) {
                        H.appendChild(a).id = v;
                        return !u.getElementsByName || !u.getElementsByName(v).length
                    });
                    x.getById ? (z.filter.ID = function (a) {
                            var e = a.replace(W, X);
                            return function (a) {
                                return a.getAttribute("id") === e
                            }
                        }, z.find.ID = function (a, e) {
                            if ("undefined" !== typeof e.getElementById && L) {
                                var d = e.getElementById(a);
                                return d ? [d] : []
                            }
                        }) :
                        (z.filter.ID = function (a) {
                            var e = a.replace(W, X);
                            return function (a) {
                                return (a = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === e
                            }
                        }, z.find.ID = function (a, e) {
                            if ("undefined" !== typeof e.getElementById && L) {
                                var d, c, h, i = e.getElementById(a);
                                if (i) {
                                    if ((d = i.getAttributeNode("id")) && d.value === a) return [i];
                                    h = e.getElementsByName(a);
                                    for (c = 0; i = h[c++];) if ((d = i.getAttributeNode("id")) && d.value === a) return [i]
                                }
                                return []
                            }
                        });
                    z.find.TAG = x.getElementsByTagName ? function (a, e) {
                        if ("undefined" !== typeof e.getElementsByTagName) return e.getElementsByTagName(a);
                        if (x.qsa) return e.querySelectorAll(a)
                    } : function (a, e) {
                        var d, c = [], h = 0, i = e.getElementsByTagName(a);
                        if ("*" === a) {
                            for (; d = i[h++];) 1 === d.nodeType && c.push(d);
                            return c
                        }
                        return i
                    };
                    z.find.CLASS = x.getElementsByClassName && function (a, e) {
                        if ("undefined" !== typeof e.getElementsByClassName && L) return e.getElementsByClassName(a)
                    };
                    ha = [];
                    A = [];
                    if (x.qsa = Fa.test(u.querySelectorAll)) P(function (a) {
                        var e;
                        H.appendChild(a).innerHTML = "<a id='" + v + "'></a><select id='" + v + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                        a.querySelectorAll("[msallowcapture^='']").length && A.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                        a.querySelectorAll("[selected]").length || A.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                        a.querySelectorAll("[id~=" + v + "-]").length || A.push("~=");
                        e = u.createElement("input");
                        e.setAttribute("name", "");
                        a.appendChild(e);
                        a.querySelectorAll("[name='']").length || A.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                        a.querySelectorAll(":checked").length || A.push(":checked");
                        a.querySelectorAll("a#" + v + "+*").length || A.push(".#.+[+~]");
                        a.querySelectorAll("\\\f");
                        A.push("[\\r\\n\\f]")
                    }), P(function (a) {
                        a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var e = u.createElement("input");
                        e.setAttribute("type", "hidden");
                        a.appendChild(e).setAttribute("name", "D");
                        a.querySelectorAll("[name=d]").length && A.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                        2 !== a.querySelectorAll(":enabled").length &&
                        A.push(":enabled", ":disabled");
                        H.appendChild(a).disabled = !0;
                        2 !== a.querySelectorAll(":disabled").length && A.push(":enabled", ":disabled");
                        a.querySelectorAll("*,:x");
                        A.push(",.*:")
                    });
                    (x.matchesSelector = Fa.test(db = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && P(function (a) {
                        x.disconnectedMatch = db.call(a, "*");
                        db.call(a, "[s!='']:x");
                        ha.push("!=", ":((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")
                    });
                    A = A.length && RegExp(A.join("|"));
                    ha = ha.length && RegExp(ha.join("|"));
                    Da = (a = Fa.test(H.compareDocumentPosition)) || Fa.test(H.contains) ? function (a, e) {
                        var d = 9 === a.nodeType ? a.documentElement : a, c = e && e.parentNode;
                        return a === c || !(!c || !(1 === c.nodeType && (d.contains ? d.contains(c) : a.compareDocumentPosition && a.compareDocumentPosition(c) & 16)))
                    } : function (a, e) {
                        if (e) for (; e = e.parentNode;) if (e === a) return !0;
                        return !1
                    };
                    Ab = a ? function (a, e) {
                        if (a === e) return wa = !0, 0;
                        var d = !a.compareDocumentPosition - !e.compareDocumentPosition;
                        if (d) return d;
                        d = (a.ownerDocument || a) == (e.ownerDocument || e) ? a.compareDocumentPosition(e) : 1;
                        return d & 1 || !x.sortDetached && e.compareDocumentPosition(a) === d ? a == u || a.ownerDocument == Q && Da(Q, a) ? -1 : e == u || e.ownerDocument == Q && Da(Q, e) ? 1 : aa ? ga(aa, a) - ga(aa, e) : 0 : d & 4 ? -1 : 1
                    } : function (a, e) {
                        if (a === e) return wa = !0, 0;
                        var d, c = 0;
                        d = a.parentNode;
                        var h = e.parentNode, i = [a], j = [e];
                        if (!d || !h) return a == u ? -1 : e == u ? 1 : d ? -1 : h ? 1 : aa ? ga(aa, a) - ga(aa, e) : 0;
                        if (d === h) return kc(a, e);
                        for (d = a; d = d.parentNode;) i.unshift(d);
                        for (d = e; d = d.parentNode;) j.unshift(d);
                        for (; i[c] === j[c];) c++;
                        return c ? kc(i[c], j[c]) : i[c] == Q ? -1 : j[c] == Q ? 1 : 0
                    };
                    return u
                };
            y.matches = function (d, a) {
                return y(d, null, null, a)
            };
            y.matchesSelector = function (d, a) {
                Z(d);
                if (x.matchesSelector && L && !Wa[a + " "] && (!ha || !ha.test(a)) && (!A || !A.test(a))) try {
                    var b = db.call(d, a);
                    if (b || x.disconnectedMatch || d.document && 11 !== d.document.nodeType) return b
                } catch (e) {
                    Wa(a, !0)
                }
                return 0 < y(a, u, null, [d]).length
            };
            y.contains = function (d, a) {
                (d.ownerDocument || d) != u && Z(d);
                return Da(d, a)
            };
            y.attr = function (d, a) {
                (d.ownerDocument || d) != u &&
                Z(d);
                var b = z.attrHandle[a.toLowerCase()],
                    b = b && ld.call(z.attrHandle, a.toLowerCase()) ? b(d, a, !L) : void 0;
                return void 0 !== b ? b : x.attributes || !L ? d.getAttribute(a) : (b = d.getAttributeNode(a)) && b.specified ? b.value : null
            };
            y.escape = function (d) {
                return (d + "").replace(hc, ic)
            };
            y.error = function (d) {
                throw Error("Syntax error, unrecognized expression: " + d);
            };
            y.uniqueSort = function (d) {
                var a, b = [], e = 0, c = 0;
                wa = !x.detectDuplicates;
                aa = !x.sortStable && d.slice(0);
                d.sort(Ab);
                if (wa) {
                    for (; a = d[c++];) a === d[c] && (e = b.push(c));
                    for (; e--;) d.splice(b[e],
                        1)
                }
                aa = null;
                return d
            };
            cb = y.getText = function (d) {
                var a, b = "", e = 0;
                if (a = d.nodeType) if (1 === a || 9 === a || 11 === a) {
                    if ("string" === typeof d.textContent) return d.textContent;
                    for (d = d.firstChild; d; d = d.nextSibling) b += cb(d)
                } else {
                    if (3 === a || 4 === a) return d.nodeValue
                } else for (; a = d[e++];) b += cb(a);
                return b
            };
            z = y.selectors = {
                cacheLength: 50,
                createPseudo: O,
                match: eb,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (d) {
                        d[1] =
                            d[1].replace(W, X);
                        d[3] = (d[3] || d[4] || d[5] || "").replace(W, X);
                        "~=" === d[2] && (d[3] = " " + d[3] + " ");
                        return d.slice(0, 4)
                    }, CHILD: function (d) {
                        d[1] = d[1].toLowerCase();
                        "nth" === d[1].slice(0, 3) ? (d[3] || y.error(d[0]), d[4] = +(d[4] ? d[5] + (d[6] || 1) : 2 * ("even" === d[3] || "odd" === d[3])), d[5] = +(d[7] + d[8] || "odd" === d[3])) : d[3] && y.error(d[0]);
                        return d
                    }, PSEUDO: function (d) {
                        var a, b = !d[6] && d[2];
                        if (eb.CHILD.test(d[0])) return null;
                        if (d[3]) d[2] = d[4] || d[5] || ""; else if (b && qd.test(b) && (a = Ea(b, !0)) && (a = b.indexOf(")", b.length - a) - b.length)) d[0] =
                            d[0].slice(0, a), d[2] = b.slice(0, a);
                        return d.slice(0, 3)
                    }
                },
                filter: {
                    TAG: function (d) {
                        var a = d.replace(W, X).toLowerCase();
                        return "*" === d ? function () {
                            return !0
                        } : function (b) {
                            return b.nodeName && b.nodeName.toLowerCase() === a
                        }
                    }, CLASS: function (d) {
                        var a = oc[d + " "];
                        return a || (a = RegExp("(^|[\\x20\\t\\r\\n\\f])" + d + "([\\x20\\t\\r\\n\\f]|$)")) && oc(d, function (b) {
                            return a.test("string" === typeof b.className && b.className || "undefined" !== typeof b.getAttribute && b.getAttribute("class") || "")
                        })
                    }, ATTR: function (d, a, b) {
                        return function (e) {
                            e =
                                y.attr(e, d);
                            if (null == e) return "!=" === a;
                            if (!a) return !0;
                            e += "";
                            return "=" === a ? e === b : "!=" === a ? e !== b : "^=" === a ? b && 0 === e.indexOf(b) : "*=" === a ? b && -1 < e.indexOf(b) : "$=" === a ? b && e.slice(-b.length) === b : "~=" === a ? -1 < (" " + e.replace(od, " ") + " ").indexOf(b) : "|=" === a ? e === b || e.slice(0, b.length + 1) === b + "-" : !1
                        }
                    }, CHILD: function (d, a, b, e, c) {
                        var g = "nth" !== d.slice(0, 3), h = "last" !== d.slice(-4), i = "of-type" === a;
                        return 1 === e && 0 === c ? function (a) {
                            return !!a.parentNode
                        } : function (a, b, n) {
                            var p, t, k, o, I, b = g !== h ? "nextSibling" : "previousSibling",
                                r = a.parentNode, s = i && a.nodeName.toLowerCase(), n = !n && !i;
                            p = !1;
                            if (r) {
                                if (g) {
                                    for (; b;) {
                                        for (k = a; k = k[b];) if (i ? k.nodeName.toLowerCase() === s : 1 === k.nodeType) return !1;
                                        I = b = "only" === d && !I && "nextSibling"
                                    }
                                    return !0
                                }
                                I = [h ? r.firstChild : r.lastChild];
                                if (h && n) {
                                    k = r;
                                    t = k[v] || (k[v] = {});
                                    t = t[k.uniqueID] || (t[k.uniqueID] = {});
                                    p = t[d] || [];
                                    p = (o = p[0] === T && p[1]) && p[2];
                                    for (k = o && r.childNodes[o]; k = ++o && k && k[b] || (p = o = 0) || I.pop();) if (1 === k.nodeType && ++p && k === a) {
                                        t[d] = [T, o, p];
                                        break
                                    }
                                } else if (n && (k = a, t = k[v] || (k[v] = {}), t = t[k.uniqueID] || (t[k.uniqueID] =
                                    {}), p = t[d] || [], p = o = p[0] === T && p[1]), !1 === p) for (; k = ++o && k && k[b] || (p = o = 0) || I.pop();) if ((i ? k.nodeName.toLowerCase() === s : 1 === k.nodeType) && ++p) if (n && (t = k[v] || (k[v] = {}), t = t[k.uniqueID] || (t[k.uniqueID] = {}), t[d] = [T, p]), k === a) break;
                                p -= c;
                                return p === e || 0 === p % e && 0 <= p / e
                            }
                        }
                    }, PSEUDO: function (d, a) {
                        var b, e = z.pseudos[d] || z.setFilters[d.toLowerCase()] || y.error("unsupported pseudo: " + d);
                        return e[v] ? e(a) : 1 < e.length ? (b = [d, d, "", a], z.setFilters.hasOwnProperty(d.toLowerCase()) ? O(function (b, d) {
                            for (var c, i = e(b, a), j = i.length; j--;) c =
                                ga(b, i[j]), b[c] = !(d[c] = i[j])
                        }) : function (a) {
                            return e(a, 0, b)
                        }) : e
                    }
                },
                pseudos: {
                    not: O(function (d) {
                        var a = [], b = [], e = zb(d.replace(Ya, "$1"));
                        return e[v] ? O(function (a, b, d, c) {
                            for (var c = e(a, null, c, []), j = a.length; j--;) if (d = c[j]) a[j] = !(b[j] = d)
                        }) : function (d, c, h) {
                            a[0] = d;
                            e(a, null, h, b);
                            a[0] = null;
                            return !b.pop()
                        }
                    }), has: O(function (d) {
                        return function (a) {
                            return 0 < y(d, a).length
                        }
                    }), contains: O(function (d) {
                        d = d.replace(W, X);
                        return function (a) {
                            return -1 < (a.textContent || cb(a)).indexOf(d)
                        }
                    }), lang: O(function (d) {
                        rd.test(d || "") || y.error("unsupported lang: " +
                            d);
                        d = d.replace(W, X).toLowerCase();
                        return function (a) {
                            var b;
                            do if (b = L ? a.lang : a.getAttribute("xml:lang") || a.getAttribute("lang")) return b = b.toLowerCase(), b === d || 0 === b.indexOf(d + "-"); while ((a = a.parentNode) && 1 === a.nodeType);
                            return !1
                        }
                    }), target: function (d) {
                        var a = sb.location && sb.location.hash;
                        return a && a.slice(1) === d.id
                    }, root: function (d) {
                        return d === H
                    }, focus: function (d) {
                        return d === u.activeElement && (!u.hasFocus || u.hasFocus()) && !(!d.type && !d.href && !~d.tabIndex)
                    }, enabled: lc(!1), disabled: lc(!0), checked: function (d) {
                        var a =
                            d.nodeName.toLowerCase();
                        return "input" === a && !!d.checked || "option" === a && !!d.selected
                    }, selected: function (d) {
                        d.parentNode && d.parentNode.selectedIndex;
                        return !0 === d.selected
                    }, empty: function (d) {
                        for (d = d.firstChild; d; d = d.nextSibling) if (6 > d.nodeType) return !1;
                        return !0
                    }, parent: function (d) {
                        return !z.pseudos.empty(d)
                    }, header: function (d) {
                        return ud.test(d.nodeName)
                    }, input: function (d) {
                        return td.test(d.nodeName)
                    }, button: function (d) {
                        var a = d.nodeName.toLowerCase();
                        return "input" === a && "button" === d.type || "button" === a
                    },
                    text: function (d) {
                        var a;
                        return "input" === d.nodeName.toLowerCase() && "text" === d.type && (null == (a = d.getAttribute("type")) || "text" === a.toLowerCase())
                    }, first: fa(function () {
                        return [0]
                    }), last: fa(function (d, a) {
                        return [a - 1]
                    }), eq: fa(function (d, a, b) {
                        return [0 > b ? b + a : b]
                    }), even: fa(function (d, a) {
                        for (var b = 0; b < a; b += 2) d.push(b);
                        return d
                    }), odd: fa(function (d, a) {
                        for (var b = 1; b < a; b += 2) d.push(b);
                        return d
                    }), lt: fa(function (d, a, b) {
                        for (a = 0 > b ? b + a : b > a ? a : b; 0 <= --a;) d.push(a);
                        return d
                    }), gt: fa(function (d, a, b) {
                        for (b = 0 > b ? b + a : b; ++b < a;) d.push(b);
                        return d
                    })
                }
            };
            z.pseudos.nth = z.pseudos.eq;
            for (va in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) z.pseudos[va] = hd(va);
            for (va in {submit: !0, reset: !0}) z.pseudos[va] = id(va);
            mc.prototype = z.filters = z.pseudos;
            z.setFilters = new mc;
            Ea = y.tokenize = function (d, a) {
                var b, e, c, g, h, i, j;
                if (h = pc[d + " "]) return a ? 0 : h.slice(0);
                h = d;
                i = [];
                for (j = z.preFilter; h;) {
                    if (!b || (e = pd.exec(h))) e && (h = h.slice(e[0].length) || h), i.push(c = []);
                    b = !1;
                    if (e = gc.exec(h)) b = e.shift(), c.push({
                        value: b,
                        type: e[0].replace(Ya, " ")
                    }), h = h.slice(b.length);
                    for (g in z.filter) if ((e = eb[g].exec(h)) && (!j[g] || (e = j[g](e)))) b = e.shift(), c.push({
                        value: b,
                        type: g,
                        matches: e
                    }), h = h.slice(b.length);
                    if (!b) break
                }
                return a ? h.length : h ? y.error(d) : pc(d, i).slice(0)
            };
            zb = y.compile = function (d, a) {
                var b, e = [], c = [], g = qc[d + " "];
                if (!g) {
                    a || (a = Ea(d));
                    for (b = a.length; b--;) g = yb(a[b]), g[v] ? e.push(g) : c.push(g);
                    var h = 0 < e.length, i = 0 < c.length;
                    b = function (a, b, d, g, t) {
                        var k, o, r, s = 0, q = "0", w = a && [], x = [], v = bb, A = a || i && z.find.TAG("*", t),
                            B = T += null == v ? 1 : Math.random() || 0.1, D = A.length;
                        for (t && (bb = b == u || b ||
                            t); q !== D && null != (k = A[q]); q++) {
                            if (i && k) {
                                o = 0;
                                !b && k.ownerDocument != u && (Z(k), d = !L);
                                for (; r = c[o++];) if (r(k, b || u, d)) {
                                    g.push(k);
                                    break
                                }
                                t && (T = B)
                            }
                            h && ((k = !r && k) && s--, a && w.push(k))
                        }
                        s += q;
                        if (h && q !== s) {
                            for (o = 0; r = e[o++];) r(w, x, b, d);
                            if (a) {
                                if (0 < s) for (; q--;) !w[q] && !x[q] && (x[q] = md.call(g));
                                x = ab(x)
                            }
                            $.apply(g, x);
                            t && (!a && 0 < x.length && 1 < s + e.length) && y.uniqueSort(g)
                        }
                        t && (T = B, bb = v);
                        return w
                    };
                    b = h ? O(b) : b;
                    g = qc(d, b);
                    g.selector = d
                }
                return g
            };
            jc = y.select = function (d, a, b, e) {
                var c, g, h, i, j = "function" === typeof d && d, l = !e && Ea(d = j.selector ||
                    d), b = b || [];
                if (1 === l.length) {
                    g = l[0] = l[0].slice(0);
                    if (2 < g.length && "ID" === (h = g[0]).type && 9 === a.nodeType && L && z.relative[g[1].type]) {
                        if (a = (z.find.ID(h.matches[0].replace(W, X), a) || [])[0]) j && (a = a.parentNode); else return b;
                        d = d.slice(g.shift().value.length)
                    }
                    for (c = eb.needsContext.test(d) ? 0 : g.length; c--;) {
                        h = g[c];
                        if (z.relative[i = h.type]) break;
                        if (i = z.find[i]) if (e = i(h.matches[0].replace(W, X), tb.test(g[0].type) && ub(a.parentNode) || a)) {
                            g.splice(c, 1);
                            d = e.length && Xa(g);
                            if (!d) return $.apply(b, e), b;
                            break
                        }
                    }
                }
                (j || zb(d, l))(e,
                    a, !L, b, !a || tb.test(d) && ub(a.parentNode) || a);
                return b
            };
            x.sortStable = v.split("").sort(Ab).join("") === v;
            x.detectDuplicates = !!wa;
            Z();
            x.sortDetached = P(function (d) {
                return d.compareDocumentPosition(u.createElement("fieldset")) & 1
            });
            P(function (d) {
                d.innerHTML = "<a href='#'></a>";
                return "#" === d.firstChild.getAttribute("href")
            }) || vb("type|href|height|width", function (d, a, b) {
                if (!b) return d.getAttribute(a, "type" === a.toLowerCase() ? 1 : 2)
            });
            (!x.attributes || !P(function (d) {
                d.innerHTML = "<input/>";
                d.firstChild.setAttribute("value",
                    "");
                return "" === d.firstChild.getAttribute("value")
            })) && vb("value", function (d, a, b) {
                if (!b && "input" === d.nodeName.toLowerCase()) return d.defaultValue
            });
            P(function (d) {
                return null == d.getAttribute("disabled")
            }) || vb("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function (d, a, b) {
                var e;
                if (!b) return !0 === d[a] ? a.toLowerCase() : (e = d.getAttributeNode(a)) && e.specified ? e.value : null
            });
            c.find = y;
            c.expr = y.selectors;
            c.expr[":"] = c.expr.pseudos;
            c.uniqueSort = c.unique = y.uniqueSort;
            c.text = y.getText;
            c.isXMLDoc = y.isXML;
            c.contains = y.contains;
            c.escapeSelector = y.escape;
            var xa = function (d, a, b) {
                for (var e = [], f = void 0 !== b; (d = d[a]) && 9 !== d.nodeType;) if (1 === d.nodeType) {
                    if (f && c(d).is(b)) break;
                    e.push(d)
                }
                return e
            }, tc = function (d, a) {
                for (var b = []; d; d = d.nextSibling) 1 === d.nodeType && d !== a && b.push(d);
                return b
            }, uc = c.expr.match.needsContext, vc = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            c.filter = function (d, a, b) {
                var e = a[0];
                b && (d = ":not(" + d + ")");
                return 1 === a.length && 1 === e.nodeType ? c.find.matchesSelector(e, d) ? [e] : [] : c.find.matches(d, c.grep(a, function (a) {
                    return 1 === a.nodeType
                }))
            };
            c.fn.extend({
                find: function (d) {
                    var a, b, e = this.length, f = this;
                    if ("string" !== typeof d) return this.pushStack(c(d).filter(function () {
                        for (a = 0; a < e; a++) if (c.contains(f[a], this)) return !0
                    }));
                    b = this.pushStack([]);
                    for (a = 0; a < e; a++) c.find(d, f[a], b);
                    return 1 < e ? c.uniqueSort(b) : b
                }, filter: function (d) {
                    return this.pushStack(gb(this, d || [], !1))
                }, not: function (d) {
                    return this.pushStack(gb(this,
                        d || [], !0))
                }, is: function (d) {
                    return !!gb(this, "string" === typeof d && uc.test(d) ? c(d) : d || [], !1).length
                }
            });
            var wc, vd = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (c.fn.init = function (d, a, b) {
                var e;
                if (!d) return this;
                b = b || wc;
                if ("string" === typeof d) {
                    if ((e = "<" === d[0] && ">" === d[d.length - 1] && 3 <= d.length ? [null, d, null] : vd.exec(d)) && (e[1] || !a)) {
                        if (e[1]) {
                            if (a = a instanceof c ? a[0] : a, c.merge(this, c.parseHTML(e[1], a && a.nodeType ? a.ownerDocument || a : q, !0)), vc.test(e[1]) && c.isPlainObject(a)) for (e in a) if (s(this[e])) this[e](a[e]); else this.attr(e,
                                a[e])
                        } else if (d = q.getElementById(e[2])) this[0] = d, this.length = 1;
                        return this
                    }
                    return !a || a.jquery ? (a || b).find(d) : this.constructor(a).find(d)
                }
                return d.nodeType ? (this[0] = d, this.length = 1, this) : s(d) ? void 0 !== b.ready ? b.ready(d) : d(c) : c.makeArray(d, this)
            }).prototype = c.fn;
            wc = c(q);
            var wd = /^(?:parents|prev(?:Until|All))/, xd = {children: !0, contents: !0, next: !0, prev: !0};
            c.fn.extend({
                has: function (d) {
                    var a = c(d, this), b = a.length;
                    return this.filter(function () {
                        for (var e = 0; e < b; e++) if (c.contains(this, a[e])) return !0
                    })
                }, closest: function (d,
                                      a) {
                    var b, e = 0, f = this.length, g = [], h = "string" !== typeof d && c(d);
                    if (!uc.test(d)) for (; e < f; e++) for (b = this[e]; b && b !== a; b = b.parentNode) if (11 > b.nodeType && (h ? -1 < h.index(b) : 1 === b.nodeType && c.find.matchesSelector(b, d))) {
                        g.push(b);
                        break
                    }
                    return this.pushStack(1 < g.length ? c.uniqueSort(g) : g)
                }, index: function (d) {
                    return !d ? this[0] && this[0].parentNode ? this.first().prevAll().length : -1 : "string" === typeof d ? Na.call(c(d), this[0]) : Na.call(this, d.jquery ? d[0] : d)
                }, add: function (d, a) {
                    return this.pushStack(c.uniqueSort(c.merge(this.get(),
                        c(d, a))))
                }, addBack: function (d) {
                    return this.add(null == d ? this.prevObject : this.prevObject.filter(d))
                }
            });
            c.each({
                parent: function (d) {
                    return (d = d.parentNode) && 11 !== d.nodeType ? d : null
                }, parents: function (d) {
                    return xa(d, "parentNode")
                }, parentsUntil: function (d, a, b) {
                    return xa(d, "parentNode", b)
                }, next: function (d) {
                    return Ib(d, "nextSibling")
                }, prev: function (d) {
                    return Ib(d, "previousSibling")
                }, nextAll: function (d) {
                    return xa(d, "nextSibling")
                }, prevAll: function (d) {
                    return xa(d, "previousSibling")
                }, nextUntil: function (d, a, b) {
                    return xa(d,
                        "nextSibling", b)
                }, prevUntil: function (d, a, b) {
                    return xa(d, "previousSibling", b)
                }, siblings: function (d) {
                    return tc((d.parentNode || {}).firstChild, d)
                }, children: function (d) {
                    return tc(d.firstChild)
                }, contents: function (d) {
                    if (null != d.contentDocument && ec(d.contentDocument)) return d.contentDocument;
                    G(d, "template") && (d = d.content || d);
                    return c.merge([], d.childNodes)
                }
            }, function (d, a) {
                c.fn[d] = function (b, e) {
                    var f = c.map(this, a, b);
                    "Until" !== d.slice(-5) && (e = b);
                    e && "string" === typeof e && (f = c.filter(e, f));
                    1 < this.length && (xd[d] ||
                    c.uniqueSort(f), wd.test(d) && f.reverse());
                    return this.pushStack(f)
                }
            });
            var S = /[^\x20\t\r\n\f]+/g;
            c.Callbacks = function (d) {
                var a;
                if ("string" === typeof d) {
                    var b = {};
                    c.each(d.match(S) || [], function (a, e) {
                        b[e] = !0
                    });
                    a = b
                } else a = c.extend({}, d);
                var d = a, e, f, g, h, i = [], j = [], l = -1, n = function () {
                    h = h || d.once;
                    for (g = e = !0; j.length; l = -1) for (f = j.shift(); ++l < i.length;) !1 === i[l].apply(f[0], f[1]) && d.stopOnFalse && (l = i.length, f = !1);
                    d.memory || (f = !1);
                    e = !1;
                    h && (i = f ? [] : "")
                }, p = {
                    add: function () {
                        i && (f && !e && (l = i.length - 1, j.push(f)), function k(a) {
                            c.each(a,
                                function (a, b) {
                                    s(b) ? (!d.unique || !p.has(b)) && i.push(b) : b && (b.length && "string" !== ma(b)) && k(b)
                                })
                        }(arguments), f && !e && n());
                        return this
                    }, remove: function () {
                        c.each(arguments, function (a, b) {
                            for (var e; -1 < (e = c.inArray(b, i, e));) i.splice(e, 1), e <= l && l--
                        });
                        return this
                    }, has: function (a) {
                        return a ? -1 < c.inArray(a, i) : 0 < i.length
                    }, empty: function () {
                        i && (i = []);
                        return this
                    }, disable: function () {
                        h = j = [];
                        i = f = "";
                        return this
                    }, disabled: function () {
                        return !i
                    }, lock: function () {
                        h = j = [];
                        !f && !e && (i = f = "");
                        return this
                    }, locked: function () {
                        return !!h
                    },
                    fireWith: function (a, b) {
                        h || (b = b || [], b = [a, b.slice ? b.slice() : b], j.push(b), e || n());
                        return this
                    }, fire: function () {
                        p.fireWith(this, arguments);
                        return this
                    }, fired: function () {
                        return !!g
                    }
                };
                return p
            };
            c.extend({
                Deferred: function (d) {
                    var a = [["notify", "progress", c.Callbacks("memory"), c.Callbacks("memory"), 2], ["resolve", "done", c.Callbacks("once memory"), c.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", c.Callbacks("once memory"), c.Callbacks("once memory"), 1, "rejected"]],
                        b = "pending", e = {
                            state: function () {
                                return b
                            },
                            always: function () {
                                f.done(arguments).fail(arguments);
                                return this
                            }, "catch": function (a) {
                                return e.then(null, a)
                            }, pipe: function () {
                                var b = arguments;
                                return c.Deferred(function (e) {
                                    c.each(a, function (a, d) {
                                        var c = s(b[d[4]]) && b[d[4]];
                                        f[d[1]](function () {
                                            var a = c && c.apply(this, arguments);
                                            if (a && s(a.promise)) a.promise().progress(e.notify).done(e.resolve).fail(e.reject); else e[d[0] + "With"](this, c ? [a] : arguments)
                                        })
                                    });
                                    b = null
                                }).promise()
                            }, then: function (b, e, d) {
                                function f(a, b, e, d) {
                                    return function () {
                                        var g = this, h = arguments, i =
                                            function () {
                                                var c, i;
                                                if (!(a < l)) {
                                                    c = e.apply(g, h);
                                                    if (c === b.promise()) throw new TypeError("Thenable self-resolution");
                                                    i = c && ("object" === ("undefined" === typeof c ? "undefined" : D(c)) || "function" === typeof c) && c.then;
                                                    s(i) ? d ? i.call(c, f(l, b, oa, d), f(l, b, Oa, d)) : (l++, i.call(c, f(l, b, oa, d), f(l, b, Oa, d), f(l, b, oa, b.notifyWith))) : (e !== oa && (g = void 0, h = [c]), (d || b.resolveWith)(g, h))
                                                }
                                            }, o = d ? i : function () {
                                            try {
                                                i()
                                            } catch (d) {
                                                c.Deferred.exceptionHook && c.Deferred.exceptionHook(d, o.stackTrace), a + 1 >= l && (e !== Oa && (g = void 0, h = [d]), b.rejectWith(g,
                                                    h))
                                            }
                                        };
                                        a ? o() : (c.Deferred.getStackHook && (o.stackTrace = c.Deferred.getStackHook()), r.setTimeout(o))
                                    }
                                }

                                var l = 0;
                                return c.Deferred(function (c) {
                                    a[0][3].add(f(0, c, s(d) ? d : oa, c.notifyWith));
                                    a[1][3].add(f(0, c, s(b) ? b : oa));
                                    a[2][3].add(f(0, c, s(e) ? e : Oa))
                                }).promise()
                            }, promise: function (a) {
                                return null != a ? c.extend(a, e) : e
                            }
                        }, f = {};
                    c.each(a, function (d, c) {
                        var i = c[2], j = c[5];
                        e[c[1]] = i.add;
                        j && i.add(function () {
                            b = j
                        }, a[3 - d][2].disable, a[3 - d][3].disable, a[0][2].lock, a[0][3].lock);
                        i.add(c[3].fire);
                        f[c[0]] = function () {
                            f[c[0] + "With"](this ===
                            f ? void 0 : this, arguments);
                            return this
                        };
                        f[c[0] + "With"] = i.fireWith
                    });
                    e.promise(f);
                    d && d.call(f, f);
                    return f
                }, when: function (d) {
                    var a = arguments.length, b = a, e = Array(b), f = Y.call(arguments), g = c.Deferred(),
                        h = function (b) {
                            return function (d) {
                                e[b] = this;
                                f[b] = 1 < arguments.length ? Y.call(arguments) : d;
                                --a || g.resolveWith(e, f)
                            }
                        };
                    if (1 >= a && (Jb(d, g.done(h(b)).resolve, g.reject, !a), "pending" === g.state() || s(f[b] && f[b].then))) return g.then();
                    for (; b--;) Jb(f[b], h(b), g.reject);
                    return g.promise()
                }
            });
            var yd = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            c.Deferred.exceptionHook = function (d, a) {
                r.console && (r.console.warn && d && yd.test(d.name)) && r.console.warn("jQuery.Deferred exception: " + d.message, d.stack, a)
            };
            c.readyException = function (d) {
                r.setTimeout(function () {
                    throw d;
                })
            };
            var Bb = c.Deferred();
            c.fn.ready = function (d) {
                Bb.then(d).catch(function (a) {
                    c.readyException(a)
                });
                return this
            };
            c.extend({
                isReady: !1, readyWait: 1, ready: function (d) {
                    if (!(!0 === d ? --c.readyWait : c.isReady)) c.isReady = !0, !0 !== d && 0 < --c.readyWait || Bb.resolveWith(q, [c])
                }
            });
            c.ready.then = Bb.then;
            "complete" ===
            q.readyState || "loading" !== q.readyState && !q.documentElement.doScroll ? r.setTimeout(c.ready) : (q.addEventListener("DOMContentLoaded", Pa), r.addEventListener("load", Pa));
            var ba = function a(b, e, f, g, h, i, j) {
                    var l = 0, n = b.length, p = null == f;
                    if ("object" === ma(f)) for (l in h = !0, f) a(b, e, l, f[l], !0, i, j); else if (void 0 !== g && (h = !0, s(g) || (j = !0), p && (j ? (e.call(b, g), e = null) : (p = e, e = function (a, b, e) {
                        return p.call(c(a), e)
                    })), e)) for (; l < n; l++) e(b[l], f, j ? g : g.call(b[l], l, e(b[l], f)));
                    return h ? b : p ? e.call(b) : n ? e(b[0], f) : i
                }, Tc = /^-ms-/,
                Uc = /-([a-z])/g, Ga = function (a) {
                    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
                };
            Aa.uid = 1;
            Aa.prototype = {
                cache: function (a) {
                    var b = a[this.expando];
                    b || (b = {}, Ga(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                        value: b,
                        configurable: !0
                    })));
                    return b
                }, set: function (a, b, e) {
                    var c, a = this.cache(a);
                    if ("string" === typeof b) a[R(b)] = e; else for (c in b) a[R(c)] = b[c];
                    return a
                }, get: function (a, b) {
                    return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][R(b)]
                }, access: function (a, b, e) {
                    if (void 0 ===
                        b || b && "string" === typeof b && void 0 === e) return this.get(a, b);
                    this.set(a, b, e);
                    return void 0 !== e ? e : b
                }, remove: function (a, b) {
                    var e, f = a[this.expando];
                    if (void 0 !== f) {
                        if (void 0 !== b) {
                            Array.isArray(b) ? b = b.map(R) : (b = R(b), b = b in f ? [b] : b.match(S) || []);
                            for (e = b.length; e--;) delete f[b[e]]
                        }
                        if (void 0 === b || c.isEmptyObject(f)) a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]
                    }
                }, hasData: function (a) {
                    a = a[this.expando];
                    return void 0 !== a && !c.isEmptyObject(a)
                }
            };
            var o = new Aa, E = new Aa, Wc = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                Vc = /[A-Z]/g;
            c.extend({
                hasData: function (a) {
                    return E.hasData(a) || o.hasData(a)
                }, data: function (a, b, e) {
                    return E.access(a, b, e)
                }, removeData: function (a, b) {
                    E.remove(a, b)
                }, _data: function (a, b, e) {
                    return o.access(a, b, e)
                }, _removeData: function (a, b) {
                    o.remove(a, b)
                }
            });
            c.fn.extend({
                data: function (a, b) {
                    var e, c, g, h = this[0], i = h && h.attributes;
                    if (void 0 === a) {
                        if (this.length && (g = E.get(h), 1 === h.nodeType && !o.get(h, "hasDataAttrs"))) {
                            for (e = i.length; e--;) i[e] && (c = i[e].name, 0 === c.indexOf("data-") && (c = R(c.slice(5)), Kb(h, c, g[c])));
                            o.set(h, "hasDataAttrs", !0)
                        }
                        return g
                    }
                    return "object" === ("undefined" === typeof a ? "undefined" : D(a)) ? this.each(function () {
                        E.set(this, a)
                    }) : ba(this, function (b) {
                        var e;
                        if (h && void 0 === b) {
                            e = E.get(h, a);
                            if (void 0 !== e) return e;
                            e = Kb(h, a);
                            if (void 0 !== e) return e
                        } else this.each(function () {
                            E.set(this, a, b)
                        })
                    }, null, b, 1 < arguments.length, null, !0)
                }, removeData: function (a) {
                    return this.each(function () {
                        E.remove(this, a)
                    })
                }
            });
            c.extend({
                queue: function (a, b, e) {
                    var f;
                    if (a) return b = (b || "fx") + "queue", f = o.get(a, b), e && (!f || Array.isArray(e) ?
                        f = o.access(a, b, c.makeArray(e)) : f.push(e)), f || []
                }, dequeue: function (a, b) {
                    var b = b || "fx", e = c.queue(a, b), f = e.length, g = e.shift(), h = c._queueHooks(a, b),
                        i = function () {
                            c.dequeue(a, b)
                        };
                    "inprogress" === g && (g = e.shift(), f--);
                    g && ("fx" === b && e.unshift("inprogress"), delete h.stop, g.call(a, i, h));
                    !f && h && h.empty.fire()
                }, _queueHooks: function (a, b) {
                    var e = b + "queueHooks";
                    return o.get(a, e) || o.access(a, e, {
                        empty: c.Callbacks("once memory").add(function () {
                            o.remove(a, [b + "queue", e])
                        })
                    })
                }
            });
            c.fn.extend({
                queue: function (a, b) {
                    var e = 2;
                    "string" !== typeof a && (b = a, a = "fx", e--);
                    return arguments.length < e ? c.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                        var e = c.queue(this, a, b);
                        c._queueHooks(this, a);
                        "fx" === a && "inprogress" !== e[0] && c.dequeue(this, a)
                    })
                }, dequeue: function (a) {
                    return this.each(function () {
                        c.dequeue(this, a)
                    })
                }, clearQueue: function (a) {
                    return this.queue(a || "fx", [])
                }, promise: function (a, b) {
                    var e, f = 1, g = c.Deferred(), h = this, i = this.length, j = function () {
                        --f || g.resolveWith(h, [h])
                    };
                    "string" !== typeof a && (b = a, a = void 0);
                    for (a = a || "fx"; i--;) if ((e =
                        o.get(h[i], a + "queueHooks")) && e.empty) f++, e.empty.add(j);
                    j();
                    return g.promise(b)
                }
            });
            var xc = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                Ba = RegExp("^(?:([+-])=|)(" + xc + ")([a-z%]*)$", "i"), U = ["Top", "Right", "Bottom", "Left"],
                ja = q.documentElement, qa = function (a) {
                    return c.contains(a.ownerDocument, a)
                }, zd = {composed: !0};
            ja.getRootNode && (qa = function (a) {
                return c.contains(a.ownerDocument, a) || a.getRootNode(zd) === a.ownerDocument
            });
            var Qa = function (a, b) {
                a = b || a;
                return "none" === a.style.display || "" === a.style.display && qa(a) &&
                    "none" === c.css(a, "display")
            }, Mb = {};
            c.fn.extend({
                show: function () {
                    return pa(this, !0)
                }, hide: function () {
                    return pa(this)
                }, toggle: function (a) {
                    return "boolean" === typeof a ? a ? this.show() : this.hide() : this.each(function () {
                        Qa(this) ? c(this).show() : c(this).hide()
                    })
                }
            });
            var Ha = /^(?:checkbox|radio)$/i, Ob = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                Pb = /^$|^module$|\/(?:java|ecma)script/i,
                ya = q.createDocumentFragment().appendChild(q.createElement("div")), fb = q.createElement("input");
            fb.setAttribute("type", "radio");
            fb.setAttribute("checked",
                "checked");
            fb.setAttribute("name", "t");
            ya.appendChild(fb);
            w.checkClone = ya.cloneNode(!0).cloneNode(!0).lastChild.checked;
            ya.innerHTML = "<textarea>x</textarea>";
            w.noCloneChecked = !!ya.cloneNode(!0).lastChild.defaultValue;
            ya.innerHTML = "<option></option>";
            w.option = !!ya.lastChild;
            var J = {
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
            J.tbody = J.tfoot = J.colgroup =
                J.caption = J.thead;
            J.th = J.td;
            w.option || (J.optgroup = J.option = [1, "<select multiple='multiple'>", "</select>"]);
            var Xc = /<|&#?\w+;/, Ad = /^key/, Bd = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                yc = /^([^.]*)(?:\.(.+)|)/;
            c.event = {
                global: {}, add: function (a, b, e, f, g) {
                    var h, i, j, l, n, p, t, k, r;
                    n = o.get(a);
                    if (Ga(a)) {
                        e.handler && (h = e, e = h.handler, g = h.selector);
                        g && c.find.matchesSelector(ja, g);
                        e.guid || (e.guid = c.guid++);
                        if (!(l = n.events)) l = n.events = Object.create(null);
                        if (!(i = n.handle)) i = n.handle = function (b) {
                            return "undefined" !==
                            typeof c && c.event.triggered !== b.type ? c.event.dispatch.apply(a, arguments) : void 0
                        };
                        b = (b || "").match(S) || [""];
                        for (n = b.length; n--;) if (j = yc.exec(b[n]) || [], k = p = j[1], r = (j[2] || "").split(".").sort(), k) {
                            j = c.event.special[k] || {};
                            k = (g ? j.delegateType : j.bindType) || k;
                            j = c.event.special[k] || {};
                            p = c.extend({
                                type: k,
                                origType: p,
                                data: f,
                                handler: e,
                                guid: e.guid,
                                selector: g,
                                needsContext: g && c.expr.match.needsContext.test(g),
                                namespace: r.join(".")
                            }, h);
                            if (!(t = l[k])) t = l[k] = [], t.delegateCount = 0, (!j.setup || !1 === j.setup.call(a, f, r, i)) &&
                            a.addEventListener && a.addEventListener(k, i);
                            j.add && (j.add.call(a, p), p.handler.guid || (p.handler.guid = e.guid));
                            g ? t.splice(t.delegateCount++, 0, p) : t.push(p);
                            c.event.global[k] = !0
                        }
                    }
                }, remove: function (a, b, e, f, g) {
                    var h, i, j, l, n, p, t, k, r, s, q, w = o.hasData(a) && o.get(a);
                    if (w && (l = w.events)) {
                        b = (b || "").match(S) || [""];
                        for (n = b.length; n--;) if (j = yc.exec(b[n]) || [], r = q = j[1], s = (j[2] || "").split(".").sort(), r) {
                            t = c.event.special[r] || {};
                            r = (f ? t.delegateType : t.bindType) || r;
                            k = l[r] || [];
                            j = j[2] && RegExp("(^|\\.)" + s.join("\\.(?:.*\\.|)") +
                                "(\\.|$)");
                            for (i = h = k.length; h--;) if (p = k[h], (g || q === p.origType) && (!e || e.guid === p.guid) && (!j || j.test(p.namespace)) && (!f || f === p.selector || "**" === f && p.selector)) k.splice(h, 1), p.selector && k.delegateCount--, t.remove && t.remove.call(a, p);
                            i && !k.length && ((!t.teardown || !1 === t.teardown.call(a, s, w.handle)) && c.removeEvent(a, r, w.handle), delete l[r])
                        } else for (r in l) c.event.remove(a, r + b[n], e, f, !0);
                        c.isEmptyObject(l) && o.remove(a, "handle events")
                    }
                }, dispatch: function (a) {
                    var b, e, f, g, h, i = Array(arguments.length), j = c.event.fix(a);
                    e = (o.get(this, "events") || Object.create(null))[j.type] || [];
                    var l = c.event.special[j.type] || {};
                    i[0] = j;
                    for (b = 1; b < arguments.length; b++) i[b] = arguments[b];
                    j.delegateTarget = this;
                    if (!(l.preDispatch && !1 === l.preDispatch.call(this, j))) {
                        h = c.event.handlers.call(this, j, e);
                        for (b = 0; (g = h[b++]) && !j.isPropagationStopped();) {
                            j.currentTarget = g.elem;
                            for (e = 0; (f = g.handlers[e++]) && !j.isImmediatePropagationStopped();) if (!j.rnamespace || !1 === f.namespace || j.rnamespace.test(f.namespace)) if (j.handleObj = f, j.data = f.data, f = ((c.event.special[f.origType] ||
                                {}).handle || f.handler).apply(g.elem, i), void 0 !== f && !1 === (j.result = f)) j.preventDefault(), j.stopPropagation()
                        }
                        l.postDispatch && l.postDispatch.call(this, j);
                        return j.result
                    }
                }, handlers: function (a, b) {
                    var e, f, g, h, i, j = [], l = b.delegateCount, n = a.target;
                    if (l && n.nodeType && !("click" === a.type && 1 <= a.button)) for (; n !== this; n = n.parentNode || this) if (1 === n.nodeType && !("click" === a.type && !0 === n.disabled)) {
                        h = [];
                        i = {};
                        for (e = 0; e < l; e++) f = b[e], g = f.selector + " ", void 0 === i[g] && (i[g] = f.needsContext ? -1 < c(g, this).index(n) : c.find(g,
                            this, null, [n]).length), i[g] && h.push(f);
                        h.length && j.push({elem: n, handlers: h})
                    }
                    l < b.length && j.push({elem: this, handlers: b.slice(l)});
                    return j
                }, addProp: function (a, b) {
                    Object.defineProperty(c.Event.prototype, a, {
                        enumerable: !0,
                        configurable: !0,
                        get: s(b) ? function () {
                            if (this.originalEvent) return b(this.originalEvent)
                        } : function () {
                            if (this.originalEvent) return this.originalEvent[a]
                        },
                        set: function (b) {
                            Object.defineProperty(this, a, {enumerable: !0, configurable: !0, writable: !0, value: b})
                        }
                    })
                }, fix: function (a) {
                    return a[c.expando] ?
                        a : new c.Event(a)
                }, special: {
                    load: {noBubble: !0}, click: {
                        setup: function (a) {
                            a = this || a;
                            Ha.test(a.type) && (a.click && G(a, "input")) && Ra(a, "click", ra);
                            return !1
                        }, trigger: function (a) {
                            a = this || a;
                            Ha.test(a.type) && (a.click && G(a, "input")) && Ra(a, "click");
                            return !0
                        }, _default: function (a) {
                            a = a.target;
                            return Ha.test(a.type) && a.click && G(a, "input") && o.get(a, "click") || G(a, "a")
                        }
                    }, beforeunload: {
                        postDispatch: function (a) {
                            void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                        }
                    }
                }
            };
            c.removeEvent = function (a, b, e) {
                a.removeEventListener &&
                a.removeEventListener(b, e)
            };
            c.Event = function (a, b) {
                if (!(this instanceof c.Event)) return new c.Event(a, b);
                a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? ra : sa, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a;
                b && c.extend(this, b);
                this.timeStamp = a && a.timeStamp || Date.now();
                this[c.expando] = !0
            };
            c.Event.prototype =
                {
                    constructor: c.Event,
                    isDefaultPrevented: sa,
                    isPropagationStopped: sa,
                    isImmediatePropagationStopped: sa,
                    isSimulated: !1,
                    preventDefault: function () {
                        var a = this.originalEvent;
                        this.isDefaultPrevented = ra;
                        a && !this.isSimulated && a.preventDefault()
                    },
                    stopPropagation: function () {
                        var a = this.originalEvent;
                        this.isPropagationStopped = ra;
                        a && !this.isSimulated && a.stopPropagation()
                    },
                    stopImmediatePropagation: function () {
                        var a = this.originalEvent;
                        this.isImmediatePropagationStopped = ra;
                        a && !this.isSimulated && a.stopImmediatePropagation();
                        this.stopPropagation()
                    }
                };
            c.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                "char": !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (a) {
                    var b = a.button;
                    return null == a.which && Ad.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !==
                    b && Bd.test(a.type) ? b & 1 ? 1 : b & 2 ? 3 : b & 4 ? 2 : 0 : a.which
                }
            }, c.event.addProp);
            c.each({focus: "focusin", blur: "focusout"}, function (a, b) {
                c.event.special[a] = {
                    setup: function () {
                        Ra(this, a, Yc);
                        return !1
                    }, trigger: function () {
                        Ra(this, a);
                        return !0
                    }, delegateType: b
                }
            });
            c.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function (a, b) {
                c.event.special[a] = {
                    delegateType: b, bindType: b, handle: function (a) {
                        var f, g = a.relatedTarget, h = a.handleObj;
                        if (!g || g !== this && !c.contains(this, g)) a.type =
                            h.origType, f = h.handler.apply(this, arguments), a.type = b;
                        return f
                    }
                }
            });
            c.fn.extend({
                on: function (a, b, e, c) {
                    return ib(this, a, b, e, c)
                }, one: function (a, b, e, c) {
                    return ib(this, a, b, e, c, 1)
                }, off: function (a, b, e) {
                    var f;
                    if (a && a.preventDefault && a.handleObj) return f = a.handleObj, c(a.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace : f.origType, f.selector, f.handler), this;
                    if ("object" === ("undefined" === typeof a ? "undefined" : D(a))) {
                        for (f in a) this.off(f, b, a[f]);
                        return this
                    }
                    if (!1 === b || "function" === typeof b) e = b, b = void 0;
                    !1 === e && (e = sa);
                    return this.each(function () {
                        c.event.remove(this, a, e, b)
                    })
                }
            });
            var Cd = /<script|<style|<link/i, ad = /checked\s*(?:[^=]|=\s*.checked.)/i,
                bd = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            c.extend({
                htmlPrefilter: function (a) {
                    return a
                }, clone: function (a, b, e) {
                    var f, g, h, i, j = a.cloneNode(!0), l = qa(a);
                    if (!w.noCloneChecked && (1 === a.nodeType || 11 === a.nodeType) && !c.isXMLDoc(a)) {
                        i = C(j);
                        h = C(a);
                        f = 0;
                        for (g = h.length; f < g; f++) {
                            var n = h[f], p = i[f], o = p.nodeName.toLowerCase();
                            if ("input" === o && Ha.test(n.type)) p.checked = n.checked;
                            else if ("input" === o || "textarea" === o) p.defaultValue = n.defaultValue
                        }
                    }
                    if (b) if (e) {
                        h = h || C(a);
                        i = i || C(j);
                        f = 0;
                        for (g = h.length; f < g; f++) Rb(h[f], i[f])
                    } else Rb(a, j);
                    i = C(j, "script");
                    0 < i.length && hb(i, !l && C(a, "script"));
                    return j
                }, cleanData: function (a) {
                    for (var b, e, f, g = c.event.special, h = 0; void 0 !== (e = a[h]); h++) if (Ga(e)) {
                        if (b = e[o.expando]) {
                            if (b.events) for (f in b.events) g[f] ? c.event.remove(e, f) : c.removeEvent(e, f, b.handle);
                            e[o.expando] = void 0
                        }
                        e[E.expando] && (e[E.expando] = void 0)
                    }
                }
            });
            c.fn.extend({
                detach: function (a) {
                    return Tb(this,
                        a, !0)
                }, remove: function (a) {
                    return Tb(this, a)
                }, text: function (a) {
                    return ba(this, function (a) {
                        return void 0 === a ? c.text(this) : this.empty().each(function () {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) this.textContent = a
                        })
                    }, null, a, arguments.length)
                }, append: function () {
                    return ta(this, arguments, function (a) {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && Qb(this, a).appendChild(a)
                    })
                }, prepend: function () {
                    return ta(this, arguments, function (a) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 ===
                            this.nodeType) {
                            var b = Qb(this, a);
                            b.insertBefore(a, b.firstChild)
                        }
                    })
                }, before: function () {
                    return ta(this, arguments, function (a) {
                        this.parentNode && this.parentNode.insertBefore(a, this)
                    })
                }, after: function () {
                    return ta(this, arguments, function (a) {
                        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                    })
                }, empty: function () {
                    for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (c.cleanData(C(a, !1)), a.textContent = "");
                    return this
                }, clone: function (a, b) {
                    a = null == a ? !1 : a;
                    b = null == b ? a : b;
                    return this.map(function () {
                        return c.clone(this,
                            a, b)
                    })
                }, html: function (a) {
                    return ba(this, function (a) {
                        var e = this[0] || {}, f = 0, g = this.length;
                        if (void 0 === a && 1 === e.nodeType) return e.innerHTML;
                        if ("string" === typeof a && !Cd.test(a) && !J[(Ob.exec(a) || ["", ""])[1].toLowerCase()]) {
                            a = c.htmlPrefilter(a);
                            try {
                                for (; f < g; f++) e = this[f] || {}, 1 === e.nodeType && (c.cleanData(C(e, !1)), e.innerHTML = a);
                                e = 0
                            } catch (h) {
                            }
                        }
                        e && this.empty().append(a)
                    }, null, a, arguments.length)
                }, replaceWith: function () {
                    var a = [];
                    return ta(this, arguments, function (b) {
                        var e = this.parentNode;
                        0 > c.inArray(this, a) &&
                        (c.cleanData(C(this)), e && e.replaceChild(b, this))
                    }, a)
                }
            });
            c.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (a, b) {
                c.fn[a] = function (a) {
                    for (var f = [], g = c(a), h = g.length - 1, i = 0; i <= h; i++) a = i === h ? this : this.clone(!0), c(g[i])[b](a), rb.apply(f, a.get());
                    return this.pushStack(f)
                }
            });
            var jb = RegExp("^(" + xc + ")(?!px)[a-z%]+$", "i"), Sa = function (a) {
                var b = a.ownerDocument.defaultView;
                if (!b || !b.opener) b = r;
                return b.getComputedStyle(a)
            }, zc = function (a, b,
                              e) {
                var c, g = {};
                for (c in b) g[c] = a.style[c], a.style[c] = b[c];
                e = e.call(a);
                for (c in b) a.style[c] = g[c];
                return e
            }, cd = RegExp(U.join("|"), "i");
            var Ia = function () {
                if (M) {
                    Cb.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
                    M.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
                    ja.appendChild(Cb).appendChild(M);
                    var a = r.getComputedStyle(M);
                    Ac = "1%" !== a.top;
                    Bc = 12 === Math.round(parseFloat(a.marginLeft));
                    M.style.right = "60%";
                    Cc = 36 === Math.round(parseFloat(a.right));
                    Dc = 36 === Math.round(parseFloat(a.width));
                    M.style.position = "absolute";
                    Ec = 12 === Math.round(parseFloat(M.offsetWidth / 3));
                    ja.removeChild(Cb);
                    M = null
                }
            }, Ac, Dc, Ec, Cc, Db, Bc, Cb = q.createElement("div"), M = q.createElement("div");
            M.style && (M.style.backgroundClip = "content-box", M.cloneNode(!0).style.backgroundClip = "", w.clearCloneStyle = "content-box" === M.style.backgroundClip, c.extend(w, {
                boxSizingReliable: function () {
                    Ia();
                    return Dc
                }, pixelBoxStyles: function () {
                    Ia();
                    return Cc
                }, pixelPosition: function () {
                    Ia();
                    return Ac
                }, reliableMarginLeft: function () {
                    Ia();
                    return Bc
                }, scrollboxSize: function () {
                    Ia();
                    return Ec
                }, reliableTrDimensions: function () {
                    var a, b, e;
                    null == Db && (a = q.createElement("table"), b = q.createElement("tr"), e = q.createElement("div"), a.style.cssText = "position:absolute;left:-11111px", b.style.height = "1px", e.style.height = "9px", ja.appendChild(a).appendChild(b).appendChild(e), b = r.getComputedStyle(b), Db = 3 < parseInt(b.height), ja.removeChild(a));
                    return Db
                }
            }));
            var Xb = ["Webkit",
                    "Moz", "ms"], Wb = q.createElement("div").style, Vb = {}, Dd = /^(none|table(?!-c[ea]).+)/, Fc = /^--/,
                Ed = {position: "absolute", visibility: "hidden", display: "block"},
                Gc = {letterSpacing: "0", fontWeight: "400"};
            c.extend({
                cssHooks: {
                    opacity: {
                        get: function (a, b) {
                            if (b) {
                                var e = Ca(a, "opacity");
                                return "" === e ? "1" : e
                            }
                        }
                    }
                }, cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                }, cssProps: {}, style: function (a, b, e, f) {
                    if (a && !(3 === a.nodeType || 8 === a.nodeType || !a.style)) {
                        var g, h, i, j = R(b), l = Fc.test(b), n = a.style;
                        l || (b = kb(j));
                        i = c.cssHooks[b] || c.cssHooks[j];
                        if (void 0 !== e) {
                            h = "undefined" === typeof e ? "undefined" : D(e);
                            if ("string" === h && (g = Ba.exec(e)) && g[1]) e = Lb(a, b, g), h = "number";
                            if (!(null == e || e !== e)) if ("number" === h && !l && (e += g && g[3] || (c.cssNumber[j] ? "" : "px")), !w.clearCloneStyle && ("" === e && 0 === b.indexOf("background")) && (n[b] = "inherit"),
                            !i || !("set" in i) || void 0 !== (e = i.set(a, e, f))) l ? n.setProperty(b, e) : n[b] = e
                        } else return i && "get" in i && void 0 !== (g = i.get(a, !1, f)) ? g : n[b]
                    }
                }, css: function (a, b, e, f) {
                    var g, h;
                    h = R(b);
                    Fc.test(b) || (b = kb(h));
                    (h = c.cssHooks[b] || c.cssHooks[h]) && "get" in h && (g = h.get(a, !0, e));
                    void 0 === g && (g = Ca(a, b, f));
                    "normal" === g && b in Gc && (g = Gc[b]);
                    return "" === e || e ? (a = parseFloat(g), !0 === e || isFinite(a) ? a || 0 : g) : g
                }
            });
            c.each(["height", "width"], function (a, b) {
                c.cssHooks[b] = {
                    get: function (a, f, g) {
                        if (f) return Dd.test(c.css(a, "display")) && (!a.getClientRects().length ||
                            !a.getBoundingClientRect().width) ? zc(a, Ed, function () {
                            return Zb(a, b, g)
                        }) : Zb(a, b, g)
                    }, set: function (a, f, g) {
                        var h, i = Sa(a), j = !w.scrollboxSize() && "absolute" === i.position,
                            l = (j || g) && "border-box" === c.css(a, "boxSizing", !1, i),
                            g = g ? lb(a, b, g, l, i) : 0;
                        l && j && (g -= Math.ceil(a["offset" + b[0].toUpperCase() + b.slice(1)] - parseFloat(i[b]) - lb(a, b, "border", !1, i) - 0.5));
                        if (g && (h = Ba.exec(f)) && "px" !== (h[3] || "px")) a.style[b] = f, f = c.css(a, b);
                        return Yb(a, f, g)
                    }
                }
            });
            c.cssHooks.marginLeft = Ub(w.reliableMarginLeft, function (a, b) {
                if (b) return (parseFloat(Ca(a,
                    "marginLeft")) || a.getBoundingClientRect().left - zc(a, {marginLeft: 0}, function () {
                    return a.getBoundingClientRect().left
                })) + "px"
            });
            c.each({margin: "", padding: "", border: "Width"}, function (a, b) {
                c.cssHooks[a + b] = {
                    expand: function (c) {
                        for (var f = 0, g = {}, c = "string" === typeof c ? c.split(" ") : [c]; 4 > f; f++) g[a + U[f] + b] = c[f] || c[f - 2] || c[0];
                        return g
                    }
                };
                "margin" !== a && (c.cssHooks[a + b].set = Yb)
            });
            c.fn.extend({
                css: function (a, b) {
                    return ba(this, function (a, b, g) {
                        var h, i = {}, j = 0;
                        if (Array.isArray(b)) {
                            g = Sa(a);
                            for (h = b.length; j < h; j++) i[b[j]] =
                                c.css(a, b[j], !1, g);
                            return i
                        }
                        return void 0 !== g ? c.style(a, b, g) : c.css(a, b)
                    }, a, b, 1 < arguments.length)
                }
            });
            c.Tween = F;
            F.prototype = {
                constructor: F, init: function (a, b, e, f, g, h) {
                    this.elem = a;
                    this.prop = e;
                    this.easing = g || c.easing._default;
                    this.options = b;
                    this.start = this.now = this.cur();
                    this.end = f;
                    this.unit = h || (c.cssNumber[e] ? "" : "px")
                }, cur: function () {
                    var a = F.propHooks[this.prop];
                    return a && a.get ? a.get(this) : F.propHooks._default.get(this)
                }, run: function (a) {
                    var b, e = F.propHooks[this.prop];
                    this.pos = this.options.duration ? b =
                        c.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : b = a;
                    this.now = (this.end - this.start) * b + this.start;
                    this.options.step && this.options.step.call(this.elem, this.now, this);
                    e && e.set ? e.set(this) : F.propHooks._default.set(this);
                    return this
                }
            };
            F.prototype.init.prototype = F.prototype;
            F.propHooks = {
                _default: {
                    get: function (a) {
                        if (1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop]) return a.elem[a.prop];
                        a = c.css(a.elem, a.prop, "");
                        return !a || "auto" === a ? 0 : a
                    }, set: function (a) {
                        if (c.fx.step[a.prop]) c.fx.step[a.prop](a);
                        else 1 === a.elem.nodeType && (c.cssHooks[a.prop] || null != a.elem.style[kb(a.prop)]) ? c.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
                    }
                }
            };
            F.propHooks.scrollTop = F.propHooks.scrollLeft = {
                set: function (a) {
                    a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
                }
            };
            c.easing = {
                linear: function (a) {
                    return a
                }, swing: function (a) {
                    return 0.5 - Math.cos(a * Math.PI) / 2
                }, _default: "swing"
            };
            c.fx = F.prototype.init;
            c.fx.step = {};
            var ua, Ta, Fd = /^(?:toggle|show|hide)$/, Gd = /queueHooks$/;
            c.Animation = c.extend(N, {
                tweeners: {
                    "*": [function (a,
                                    b) {
                        var c = this.createTween(a, b);
                        Lb(c.elem, a, Ba.exec(b), c);
                        return c
                    }]
                }, tweener: function (a, b) {
                    s(a) ? (b = a, a = ["*"]) : a = a.match(S);
                    for (var c, f = 0, g = a.length; f < g; f++) c = a[f], N.tweeners[c] = N.tweeners[c] || [], N.tweeners[c].unshift(b)
                }, prefilters: [function (a, b, e) {
                    var f, g, h, i, j, l, n;
                    n = "width" in b || "height" in b;
                    var p = this, r = {}, k = a.style, s = a.nodeType && Qa(a), q = o.get(a, "fxshow");
                    e.queue || (i = c._queueHooks(a, "fx"), null == i.unqueued && (i.unqueued = 0, j = i.empty.fire, i.empty.fire = function () {
                        i.unqueued || j()
                    }), i.unqueued++, p.always(function () {
                        p.always(function () {
                            i.unqueued--;
                            c.queue(a, "fx").length || i.empty.fire()
                        })
                    }));
                    for (f in b) if (g = b[f], Fd.test(g)) {
                        delete b[f];
                        h = h || "toggle" === g;
                        if (g === (s ? "hide" : "show")) if ("show" === g && q && void 0 !== q[f]) s = !0; else continue;
                        r[f] = q && q[f] || c.style(a, f)
                    }
                    if ((b = !c.isEmptyObject(b)) || !c.isEmptyObject(r)) {
                        if (n && 1 === a.nodeType && (e.overflow = [k.overflow, k.overflowX, k.overflowY], l = q && q.display, null == l && (l = o.get(a, "display")), n = c.css(a, "display"), "none" === n && (l ? n = l : (pa([a], !0), l = a.style.display || l, n = c.css(a, "display"), pa([a]))), ("inline" === n || "inline-block" ===
                            n && null != l) && "none" === c.css(a, "float"))) b || (p.done(function () {
                            k.display = l
                        }), null == l && (n = k.display, l = "none" === n ? "" : n)), k.display = "inline-block";
                        e.overflow && (k.overflow = "hidden", p.always(function () {
                            k.overflow = e.overflow[0];
                            k.overflowX = e.overflow[1];
                            k.overflowY = e.overflow[2]
                        }));
                        b = !1;
                        for (f in r) b || (q ? "hidden" in q && (s = q.hidden) : q = o.access(a, "fxshow", {display: l}), h && (q.hidden = !s), s && pa([a], !0), p.done(function () {
                            s || pa([a]);
                            o.remove(a, "fxshow");
                            for (f in r) c.style(a, f, r[f])
                        })), b = ac(s ? q[f] : 0, f, p), f in q || (q[f] =
                            b.start, s && (b.end = b.start, b.start = 0))
                    }
                }], prefilter: function (a, b) {
                    b ? N.prefilters.unshift(a) : N.prefilters.push(a)
                }
            });
            c.speed = function (a, b, e) {
                var f = a && "object" === ("undefined" === typeof a ? "undefined" : D(a)) ? c.extend({}, a) : {
                    complete: e || !e && b || s(a) && a,
                    duration: a,
                    easing: e && b || b && !s(b) && b
                };
                c.fx.off ? f.duration = 0 : "number" !== typeof f.duration && (f.duration = f.duration in c.fx.speeds ? c.fx.speeds[f.duration] : c.fx.speeds._default);
                if (null == f.queue || !0 === f.queue) f.queue = "fx";
                f.old = f.complete;
                f.complete = function () {
                    s(f.old) &&
                    f.old.call(this);
                    f.queue && c.dequeue(this, f.queue)
                };
                return f
            };
            c.fn.extend({
                fadeTo: function (a, b, c, f) {
                    return this.filter(Qa).css("opacity", 0).show().end().animate({opacity: b}, a, c, f)
                }, animate: function (a, b, e, f) {
                    var g = c.isEmptyObject(a), h = c.speed(b, e, f), b = function () {
                        var b = N(this, c.extend({}, a), h);
                        (g || o.get(this, "finish")) && b.stop(!0)
                    };
                    b.finish = b;
                    return g || !1 === h.queue ? this.each(b) : this.queue(h.queue, b)
                }, stop: function (a, b, e) {
                    var f = function (a) {
                        var b = a.stop;
                        delete a.stop;
                        b(e)
                    };
                    "string" !== typeof a && (e = b, b =
                        a, a = void 0);
                    b && this.queue(a || "fx", []);
                    return this.each(function () {
                        var b = !0, h = null != a && a + "queueHooks", i = c.timers, j = o.get(this);
                        if (h) j[h] && j[h].stop && f(j[h]); else for (h in j) j[h] && (j[h].stop && Gd.test(h)) && f(j[h]);
                        for (h = i.length; h--;) if (i[h].elem === this && (null == a || i[h].queue === a)) i[h].anim.stop(e), b = !1, i.splice(h, 1);
                        (b || !e) && c.dequeue(this, a)
                    })
                }, finish: function (a) {
                    !1 !== a && (a = a || "fx");
                    return this.each(function () {
                        var b, e = o.get(this), f = e[a + "queue"];
                        b = e[a + "queueHooks"];
                        var g = c.timers, h = f ? f.length : 0;
                        e.finish =
                            !0;
                        c.queue(this, a, []);
                        b && b.stop && b.stop.call(this, !0);
                        for (b = g.length; b--;) g[b].elem === this && g[b].queue === a && (g[b].anim.stop(!0), g.splice(b, 1));
                        for (b = 0; b < h; b++) f[b] && f[b].finish && f[b].finish.call(this);
                        delete e.finish
                    })
                }
            });
            c.each(["toggle", "show", "hide"], function (a, b) {
                var e = c.fn[b];
                c.fn[b] = function (a, c, h) {
                    return null == a || "boolean" === typeof a ? e.apply(this, arguments) : this.animate(Ua(b, !0), a, c, h)
                }
            });
            c.each({
                slideDown: Ua("show"),
                slideUp: Ua("hide"),
                slideToggle: Ua("toggle"),
                fadeIn: {opacity: "show"},
                fadeOut: {opacity: "hide"},
                fadeToggle: {opacity: "toggle"}
            }, function (a, b) {
                c.fn[a] = function (a, c, g) {
                    return this.animate(b, a, c, g)
                }
            });
            c.timers = [];
            c.fx.tick = function () {
                var a, b = 0, e = c.timers;
                for (ua = Date.now(); b < e.length; b++) a = e[b], !a() && e[b] === a && e.splice(b--, 1);
                e.length || c.fx.stop();
                ua = void 0
            };
            c.fx.timer = function (a) {
                c.timers.push(a);
                c.fx.start()
            };
            c.fx.interval = 13;
            c.fx.start = function () {
                Ta || (Ta = !0, mb())
            };
            c.fx.stop = function () {
                Ta = null
            };
            c.fx.speeds = {slow: 600, fast: 200, _default: 400};
            c.fn.delay = function (a, b) {
                a = c.fx ? c.fx.speeds[a] || a : a;
                return this.queue(b ||
                    "fx", function (b, c) {
                    var g = r.setTimeout(b, a);
                    c.stop = function () {
                        r.clearTimeout(g)
                    }
                })
            };
            var za = q.createElement("input"), Hd = q.createElement("select").appendChild(q.createElement("option"));
            za.type = "checkbox";
            w.checkOn = "" !== za.value;
            w.optSelected = Hd.selected;
            za = q.createElement("input");
            za.value = "t";
            za.type = "radio";
            w.radioValue = "t" === za.value;
            var Hc, Ja = c.expr.attrHandle;
            c.fn.extend({
                attr: function (a, b) {
                    return ba(this, c.attr, a, b, 1 < arguments.length)
                }, removeAttr: function (a) {
                    return this.each(function () {
                        c.removeAttr(this,
                            a)
                    })
                }
            });
            c.extend({
                attr: function (a, b, e) {
                    var f, g, h = a.nodeType;
                    if (!(3 === h || 8 === h || 2 === h)) {
                        if ("undefined" === typeof a.getAttribute) return c.prop(a, b, e);
                        if (1 !== h || !c.isXMLDoc(a)) g = c.attrHooks[b.toLowerCase()] || (c.expr.match.bool.test(b) ? Hc : void 0);
                        if (void 0 !== e) {
                            if (null === e) {
                                c.removeAttr(a, b);
                                return
                            }
                            if (g && "set" in g && void 0 !== (f = g.set(a, e, b))) return f;
                            a.setAttribute(b, e + "");
                            return e
                        }
                        if (g && "get" in g && null !== (f = g.get(a, b))) return f;
                        f = c.find.attr(a, b);
                        return null == f ? void 0 : f
                    }
                }, attrHooks: {
                    type: {
                        set: function (a,
                                       b) {
                            if (!w.radioValue && "radio" === b && G(a, "input")) {
                                var c = a.value;
                                a.setAttribute("type", b);
                                c && (a.value = c);
                                return b
                            }
                        }
                    }
                }, removeAttr: function (a, b) {
                    var c, f = 0, g = b && b.match(S);
                    if (g && 1 === a.nodeType) for (; c = g[f++];) a.removeAttribute(c)
                }
            });
            Hc = {
                set: function (a, b, e) {
                    !1 === b ? c.removeAttr(a, e) : a.setAttribute(e, e);
                    return e
                }
            };
            c.each(c.expr.match.bool.source.match(/\w+/g), function (a, b) {
                var e = Ja[b] || c.find.attr;
                Ja[b] = function (a, b, c) {
                    var i, j, l = b.toLowerCase();
                    c || (j = Ja[l], Ja[l] = i, i = null != e(a, b, c) ? l : null, Ja[l] = j);
                    return i
                }
            });
            var Id = /^(?:input|select|textarea|button)$/i, Jd = /^(?:a|area)$/i;
            c.fn.extend({
                prop: function (a, b) {
                    return ba(this, c.prop, a, b, 1 < arguments.length)
                }, removeProp: function (a) {
                    return this.each(function () {
                        delete this[c.propFix[a] || a]
                    })
                }
            });
            c.extend({
                prop: function (a, b, e) {
                    var f, g, h = a.nodeType;
                    if (!(3 === h || 8 === h || 2 === h)) {
                        if (1 !== h || !c.isXMLDoc(a)) b = c.propFix[b] || b, g = c.propHooks[b];
                        return void 0 !== e ? g && "set" in g && void 0 !== (f = g.set(a, e, b)) ? f : a[b] = e : g && "get" in g && null !== (f = g.get(a, b)) ? f : a[b]
                    }
                }, propHooks: {
                    tabIndex: {
                        get: function (a) {
                            var b =
                                c.find.attr(a, "tabindex");
                            return b ? parseInt(b, 10) : Id.test(a.nodeName) || Jd.test(a.nodeName) && a.href ? 0 : -1
                        }
                    }
                }, propFix: {"for": "htmlFor", "class": "className"}
            });
            w.optSelected || (c.propHooks.selected = {
                get: function (a) {
                    (a = a.parentNode) && a.parentNode && a.parentNode.selectedIndex;
                    return null
                }, set: function (a) {
                    if (a = a.parentNode) a.selectedIndex, a.parentNode && a.parentNode.selectedIndex
                }
            });
            c.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function () {
                c.propFix[this.toLowerCase()] =
                    this
            });
            c.fn.extend({
                addClass: function (a) {
                    var b, e, f, g, h, i, j = 0;
                    if (s(a)) return this.each(function (b) {
                        c(this).addClass(a.call(this, b, ea(this)))
                    });
                    b = nb(a);
                    if (b.length) for (; e = this[j++];) if (g = ea(e), f = 1 === e.nodeType && " " + da(g) + " ") {
                        for (i = 0; h = b[i++];) 0 > f.indexOf(" " + h + " ") && (f += h + " ");
                        f = da(f);
                        g !== f && e.setAttribute("class", f)
                    }
                    return this
                }, removeClass: function (a) {
                    var b, e, f, g, h, i, j = 0;
                    if (s(a)) return this.each(function (b) {
                        c(this).removeClass(a.call(this, b, ea(this)))
                    });
                    if (!arguments.length) return this.attr("class",
                        "");
                    b = nb(a);
                    if (b.length) for (; e = this[j++];) if (g = ea(e), f = 1 === e.nodeType && " " + da(g) + " ") {
                        for (i = 0; h = b[i++];) for (; -1 < f.indexOf(" " + h + " ");) f = f.replace(" " + h + " ", " ");
                        f = da(f);
                        g !== f && e.setAttribute("class", f)
                    }
                    return this
                }, toggleClass: function (a, b) {
                    var e = "undefined" === typeof a ? "undefined" : D(a), f = "string" === e || Array.isArray(a);
                    return "boolean" === typeof b && f ? b ? this.addClass(a) : this.removeClass(a) : s(a) ? this.each(function (e) {
                        c(this).toggleClass(a.call(this, e, ea(this), b), b)
                    }) : this.each(function () {
                        var b, h, i, j;
                        if (f) {
                            h =
                                0;
                            i = c(this);
                            for (j = nb(a); b = j[h++];) i.hasClass(b) ? i.removeClass(b) : i.addClass(b)
                        } else if (void 0 === a || "boolean" === e) (b = ea(this)) && o.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || !1 === a ? "" : o.get(this, "__className__") || "")
                    })
                }, hasClass: function (a) {
                    for (var b, c = 0, a = " " + a + " "; b = this[c++];) if (1 === b.nodeType && -1 < (" " + da(ea(b)) + " ").indexOf(a)) return !0;
                    return !1
                }
            });
            var Kd = /\r/g;
            c.fn.extend({
                val: function (a) {
                    var b, e, f, g = this[0];
                    if (arguments.length) return f = s(a), this.each(function (e) {
                        if (1 ===
                            this.nodeType && (e = f ? a.call(this, e, c(this).val()) : a, null == e ? e = "" : "number" === typeof e ? e += "" : Array.isArray(e) && (e = c.map(e, function (a) {
                                return null == a ? "" : a + ""
                            })), b = c.valHooks[this.type] || c.valHooks[this.nodeName.toLowerCase()], !b || !("set" in b) || void 0 === b.set(this, e, "value"))) this.value = e
                    });
                    if (g) {
                        if ((b = c.valHooks[g.type] || c.valHooks[g.nodeName.toLowerCase()]) && "get" in b && void 0 !== (e = b.get(g, "value"))) return e;
                        e = g.value;
                        return "string" === typeof e ? e.replace(Kd, "") : null == e ? "" : e
                    }
                }
            });
            c.extend({
                valHooks: {
                    option: {
                        get: function (a) {
                            var b =
                                c.find.attr(a, "value");
                            return null != b ? b : da(c.text(a))
                        }
                    }, select: {
                        get: function (a) {
                            for (var b, e = a.options, f = a.selectedIndex, g = "select-one" === a.type, h = g ? null : [], i = g ? f + 1 : e.length, a = 0 > f ? i : g ? f : 0; a < i; a++) if (b = e[a], (b.selected || a === f) && !b.disabled && (!b.parentNode.disabled || !G(b.parentNode, "optgroup"))) {
                                b = c(b).val();
                                if (g) return b;
                                h.push(b)
                            }
                            return h
                        }, set: function (a, b) {
                            for (var e, f, g = a.options, h = c.makeArray(b), i = g.length; i--;) if (f = g[i], f.selected = -1 < c.inArray(c.valHooks.option.get(f), h)) e = !0;
                            e || (a.selectedIndex =
                                -1);
                            return h
                        }
                    }
                }
            });
            c.each(["radio", "checkbox"], function () {
                c.valHooks[this] = {
                    set: function (a, b) {
                        if (Array.isArray(b)) return a.checked = -1 < c.inArray(c(a).val(), b)
                    }
                };
                w.checkOn || (c.valHooks[this].get = function (a) {
                    return null === a.getAttribute("value") ? "on" : a.value
                })
            });
            w.focusin = "onfocusin" in r;
            var Ic = /^(?:focusinfocus|focusoutblur)$/, Jc = function (a) {
                a.stopPropagation()
            };
            c.extend(c.event, {
                trigger: function (a, b, e, f) {
                    var g, h, i, j, l, n, p, t = [e || q], k = Va.call(a, "type") ? a.type : a;
                    n = Va.call(a, "namespace") ? a.namespace.split(".") :
                        [];
                    h = p = g = e = e || q;
                    if (!(3 === e.nodeType || 8 === e.nodeType) && !Ic.test(k + c.event.triggered)) if (-1 < k.indexOf(".") && (n = k.split("."), k = n.shift(), n.sort()), j = 0 > k.indexOf(":") && "on" + k, a = a[c.expando] ? a : new c.Event(k, "object" === ("undefined" === typeof a ? "undefined" : D(a)) && a), a.isTrigger = f ? 2 : 3, a.namespace = n.join("."), a.rnamespace = a.namespace ? RegExp("(^|\\.)" + n.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a.result = void 0, a.target || (a.target = e), b = null == b ? [a] : c.makeArray(b, [a]), n = c.event.special[k] || {}, f || !(n.trigger && !1 ===
                        n.trigger.apply(e, b))) {
                        if (!f && !n.noBubble && !na(e)) {
                            i = n.delegateType || k;
                            Ic.test(i + k) || (h = h.parentNode);
                            for (; h; h = h.parentNode) t.push(h), g = h;
                            if (g === (e.ownerDocument || q)) t.push(g.defaultView || g.parentWindow || r)
                        }
                        for (g = 0; (h = t[g++]) && !a.isPropagationStopped();) if (p = h, a.type = 1 < g ? i : n.bindType || k, (l = (o.get(h, "events") || Object.create(null))[a.type] && o.get(h, "handle")) && l.apply(h, b), (l = j && h[j]) && l.apply && Ga(h)) a.result = l.apply(h, b), !1 === a.result && a.preventDefault();
                        a.type = k;
                        if (!f && !a.isDefaultPrevented() && (!n._default ||
                            !1 === n._default.apply(t.pop(), b)) && Ga(e) && j && s(e[k]) && !na(e)) (g = e[j]) && (e[j] = null), c.event.triggered = k, a.isPropagationStopped() && p.addEventListener(k, Jc), e[k](), a.isPropagationStopped() && p.removeEventListener(k, Jc), c.event.triggered = void 0, g && (e[j] = g);
                        return a.result
                    }
                }, simulate: function (a, b, e) {
                    a = c.extend(new c.Event, e, {type: a, isSimulated: !0});
                    c.event.trigger(a, null, b)
                }
            });
            c.fn.extend({
                trigger: function (a, b) {
                    return this.each(function () {
                        c.event.trigger(a, b, this)
                    })
                }, triggerHandler: function (a, b) {
                    var e =
                        this[0];
                    if (e) return c.event.trigger(a, b, e, !0)
                }
            });
            w.focusin || c.each({focus: "focusin", blur: "focusout"}, function (a, b) {
                var e = function (a) {
                    c.event.simulate(b, a.target, c.event.fix(a))
                };
                c.event.special[b] = {
                    setup: function () {
                        var c = this.ownerDocument || this.document || this, g = o.access(c, b);
                        g || c.addEventListener(a, e, !0);
                        o.access(c, b, (g || 0) + 1)
                    }, teardown: function () {
                        var c = this.ownerDocument || this.document || this, g = o.access(c, b) - 1;
                        g ? o.access(c, b, g) : (c.removeEventListener(a, e, !0), o.remove(c, b))
                    }
                }
            });
            var Ka = r.location,
                Kc = Date.now(), Eb = /\?/;
            c.parseXML = function (a) {
                var b;
                if (!a || "string" !== typeof a) return null;
                try {
                    b = (new r.DOMParser).parseFromString(a, "text/xml")
                } catch (e) {
                    b = void 0
                }
                (!b || b.getElementsByTagName("parsererror").length) && c.error("Invalid XML: " + a);
                return b
            };
            var dd = /\[\]$/, Lc = /\r?\n/g, Ld = /^(?:submit|button|image|reset|file)$/i,
                Md = /^(?:input|select|textarea|keygen)/i;
            c.param = function (a, b) {
                var e, f = [], g = function (a, b) {
                    var c = s(b) ? b() : b;
                    f[f.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
                };
                if (null ==
                    a) return "";
                if (Array.isArray(a) || a.jquery && !c.isPlainObject(a)) c.each(a, function () {
                    g(this.name, this.value)
                }); else for (e in a) ob(e, a[e], b, g);
                return f.join("&")
            };
            c.fn.extend({
                serialize: function () {
                    return c.param(this.serializeArray())
                }, serializeArray: function () {
                    return this.map(function () {
                        var a = c.prop(this, "elements");
                        return a ? c.makeArray(a) : this
                    }).filter(function () {
                        var a = this.type;
                        return this.name && !c(this).is(":disabled") && Md.test(this.nodeName) && !Ld.test(a) && (this.checked || !Ha.test(a))
                    }).map(function (a,
                                     b) {
                        var e = c(this).val();
                        return null == e ? null : Array.isArray(e) ? c.map(e, function (a) {
                            return {name: b.name, value: a.replace(Lc, "\r\n")}
                        }) : {name: b.name, value: e.replace(Lc, "\r\n")}
                    }).get()
                }
            });
            var Nd = /%20/g, Od = /#.*$/, Pd = /([?&])_=[^&]*/, Qd = /^(.*?):[ \t]*([^\r\n]*)$/mg,
                Rd = /^(?:GET|HEAD)$/, Sd = /^\/\//, Mc = {}, pb = {}, Nc = "*/".concat("*"), Fb = q.createElement("a");
            Fb.href = Ka.href;
            c.extend({
                active: 0, lastModified: {}, etag: {}, ajaxSettings: {
                    url: Ka.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ka.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Nc,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                    responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                    converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": c.parseXML},
                    flatOptions: {url: !0, context: !0}
                }, ajaxSetup: function (a, b) {
                    return b ?
                        qb(qb(a, c.ajaxSettings), b) : qb(c.ajaxSettings, a)
                }, ajaxPrefilter: cc(Mc), ajaxTransport: cc(pb), ajax: function (a, b) {
                    function e(a, b, e, i) {
                        var l, o, q, t;
                        t = b;
                        if (!n) {
                            n = !0;
                            j && r.clearTimeout(j);
                            f = void 0;
                            h = i || "";
                            B.readyState = 0 < a ? 4 : 0;
                            i = 200 <= a && 300 > a || 304 === a;
                            if (e) {
                                q = k;
                                for (var u = B, v, A, D, C, E = q.contents, F = q.dataTypes; "*" === F[0];) F.shift(), void 0 === v && (v = q.mimeType || u.getResponseHeader("Content-Type"));
                                if (v) for (A in E) if (E[A] && E[A].test(v)) {
                                    F.unshift(A);
                                    break
                                }
                                if (F[0] in e) D = F[0]; else {
                                    for (A in e) {
                                        if (!F[0] || q.converters[A +
                                        " " + F[0]]) {
                                            D = A;
                                            break
                                        }
                                        C || (C = A)
                                    }
                                    D = D || C
                                }
                                D ? (D !== F[0] && F.unshift(D), q = e[D]) : q = void 0
                            }
                            !i && -1 < c.inArray("script", k.dataTypes) && (k.converters["text script"] = function () {
                            });
                            a:{
                                e = k;
                                v = q;
                                A = B;
                                D = i;
                                var H, K, G, u = {}, E = e.dataTypes.slice();
                                if (E[1]) for (K in e.converters) u[K.toLowerCase()] = e.converters[K];
                                for (C = E.shift(); C;) if (e.responseFields[C] && (A[e.responseFields[C]] = v), !G && (D && e.dataFilter) && (v = e.dataFilter(v, e.dataType)), G = C, C = E.shift()) if ("*" === C) C = G; else if ("*" !== G && G !== C) {
                                    K = u[G + " " + C] || u["* " + C];
                                    if (!K) for (H in u) if (q =
                                        H.split(" "), q[1] === C && (K = u[G + " " + q[0]] || u["* " + q[0]])) {
                                        !0 === K ? K = u[H] : !0 !== u[H] && (C = q[0], E.unshift(q[1]));
                                        break
                                    }
                                    if (!0 !== K) if (K && e.throws) v = K(v); else try {
                                        v = K(v)
                                    } catch (J) {
                                        q = {
                                            state: "parsererror",
                                            error: K ? J : "No conversion from " + G + " to " + C
                                        };
                                        break a
                                    }
                                }
                                q = {state: "success", data: v}
                            }
                            if (i) k.ifModified && ((t = B.getResponseHeader("Last-Modified")) && (c.lastModified[g] = t), (t = B.getResponseHeader("etag")) && (c.etag[g] = t)), 204 === a || "HEAD" === k.type ? t = "nocontent" : 304 === a ? t = "notmodified" : (t = q.state, l = q.data, o = q.error, i = !o);
                            else if (o = t, a || !t) t = "error", 0 > a && (a = 0);
                            B.status = a;
                            B.statusText = (b || t) + "";
                            i ? x.resolveWith(s, [l, t, B]) : x.rejectWith(s, [B, t, o]);
                            B.statusCode(y);
                            y = void 0;
                            p && w.trigger(i ? "ajaxSuccess" : "ajaxError", [B, k, i ? l : o]);
                            z.fireWith(s, [B, t]);
                            p && (w.trigger("ajaxComplete", [B, k]), --c.active || c.event.trigger("ajaxStop"))
                        }
                    }

                    if ("object" === ("undefined" === typeof a ? "undefined" : D(a))) b = a, a = void 0;
                    var b = b || {}, f, g, h, i, j, l, n, p, o, k = c.ajaxSetup({}, b), s = k.context || k,
                        w = k.context && (s.nodeType || s.jquery) ? c(s) : c.event, x = c.Deferred(), z =
                            c.Callbacks("once memory"), y = k.statusCode || {}, u = {}, v = {}, A = "canceled", B = {
                            readyState: 0, getResponseHeader: function (a) {
                                var b;
                                if (n) {
                                    if (!i) for (i = {}; b = Qd.exec(h);) i[b[1].toLowerCase() + " "] = (i[b[1].toLowerCase() + " "] || []).concat(b[2]);
                                    b = i[a.toLowerCase() + " "]
                                }
                                return null == b ? null : b.join(", ")
                            }, getAllResponseHeaders: function () {
                                return n ? h : null
                            }, setRequestHeader: function (a, b) {
                                null == n && (a = v[a.toLowerCase()] = v[a.toLowerCase()] || a, u[a] = b);
                                return this
                            }, overrideMimeType: function (a) {
                                null == n && (k.mimeType = a);
                                return this
                            },
                            statusCode: function (a) {
                                var b;
                                if (a) if (n) B.always(a[B.status]); else for (b in a) y[b] = [y[b], a[b]];
                                return this
                            }, abort: function (a) {
                                a = a || A;
                                f && f.abort(a);
                                e(0, a);
                                return this
                            }
                        };
                    x.promise(B);
                    k.url = ((a || k.url || Ka.href) + "").replace(Sd, Ka.protocol + "//");
                    k.type = b.method || b.type || k.method || k.type;
                    k.dataTypes = (k.dataType || "*").toLowerCase().match(S) || [""];
                    if (null == k.crossDomain) {
                        l = q.createElement("a");
                        try {
                            l.href = k.url, l.href = l.href, k.crossDomain = Fb.protocol + "//" + Fb.host !== l.protocol + "//" + l.host
                        } catch (E) {
                            k.crossDomain =
                                !0
                        }
                    }
                    k.data && (k.processData && "string" !== typeof k.data) && (k.data = c.param(k.data, k.traditional));
                    dc(Mc, k, b, B);
                    if (n) return B;
                    (p = c.event && k.global) && 0 === c.active++ && c.event.trigger("ajaxStart");
                    k.type = k.type.toUpperCase();
                    k.hasContent = !Rd.test(k.type);
                    g = k.url.replace(Od, "");
                    if (k.hasContent) {
                        if (k.data && k.processData && 0 === (k.contentType || "").indexOf("application/x-www-form-urlencoded")) k.data = k.data.replace(Nd, "+")
                    } else {
                        l = k.url.slice(g.length);
                        if (k.data && (k.processData || "string" === typeof k.data)) g += (Eb.test(g) ?
                            "&" : "?") + k.data, delete k.data;
                        !1 === k.cache && (g = g.replace(Pd, "$1"), l = (Eb.test(g) ? "&" : "?") + "_=" + Kc++ + l);
                        k.url = g + l
                    }
                    k.ifModified && (c.lastModified[g] && B.setRequestHeader("If-Modified-Since", c.lastModified[g]), c.etag[g] && B.setRequestHeader("If-None-Match", c.etag[g]));
                    (k.data && k.hasContent && !1 !== k.contentType || b.contentType) && B.setRequestHeader("Content-Type", k.contentType);
                    B.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Nc + "; q=0.01" :
                        "") : k.accepts["*"]);
                    for (o in k.headers) B.setRequestHeader(o, k.headers[o]);
                    if (k.beforeSend && (!1 === k.beforeSend.call(s, B, k) || n)) return B.abort();
                    A = "abort";
                    z.add(k.complete);
                    B.done(k.success);
                    B.fail(k.error);
                    if (f = dc(pb, k, b, B)) {
                        B.readyState = 1;
                        p && w.trigger("ajaxSend", [B, k]);
                        if (n) return B;
                        k.async && 0 < k.timeout && (j = r.setTimeout(function () {
                            B.abort("timeout")
                        }, k.timeout));
                        try {
                            n = !1, f.send(u, e)
                        } catch (C) {
                            if (n) throw C;
                            e(-1, C)
                        }
                    } else e(-1, "No Transport");
                    return B
                }, getJSON: function (a, b, e) {
                    return c.get(a, b, e, "json")
                },
                getScript: function (a, b) {
                    return c.get(a, void 0, b, "script")
                }
            });
            c.each(["get", "post"], function (a, b) {
                c[b] = function (a, f, g, h) {
                    s(f) && (h = h || g, g = f, f = void 0);
                    return c.ajax(c.extend({
                        url: a,
                        type: b,
                        dataType: h,
                        data: f,
                        success: g
                    }, c.isPlainObject(a) && a))
                }
            });
            c.ajaxPrefilter(function (a) {
                for (var b in a.headers) "content-type" === b.toLowerCase() && (a.contentType = a.headers[b] || "")
            });
            c._evalUrl = function (a, b, e) {
                return c.ajax({
                    url: a,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: {
                        "text script": function () {
                        }
                    },
                    dataFilter: function (a) {
                        c.globalEval(a, b, e)
                    }
                })
            };
            c.fn.extend({
                wrapAll: function (a) {
                    this[0] && (s(a) && (a = a.call(this[0])), a = c(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && a.insertBefore(this[0]), a.map(function () {
                        for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                        return a
                    }).append(this));
                    return this
                }, wrapInner: function (a) {
                    return s(a) ? this.each(function (b) {
                        c(this).wrapInner(a.call(this, b))
                    }) : this.each(function () {
                        var b = c(this), e = b.contents();
                        e.length ? e.wrapAll(a) : b.append(a)
                    })
                }, wrap: function (a) {
                    var b =
                        s(a);
                    return this.each(function (e) {
                        c(this).wrapAll(b ? a.call(this, e) : a)
                    })
                }, unwrap: function (a) {
                    this.parent(a).not("body").each(function () {
                        c(this).replaceWith(this.childNodes)
                    });
                    return this
                }
            });
            c.expr.pseudos.hidden = function (a) {
                return !c.expr.pseudos.visible(a)
            };
            c.expr.pseudos.visible = function (a) {
                return !(!a.offsetWidth && !a.offsetHeight && !a.getClientRects().length)
            };
            c.ajaxSettings.xhr = function () {
                try {
                    return new r.XMLHttpRequest
                } catch (a) {
                }
            };
            var Td = {"0": 200, 1223: 204}, La = c.ajaxSettings.xhr();
            w.cors = !!La && "withCredentials" in
                La;
            w.ajax = La = !!La;
            c.ajaxTransport(function (a) {
                var b, c;
                if (w.cors || La && !a.crossDomain) return {
                    send: function (f, g) {
                        var h, i = a.xhr();
                        i.open(a.type, a.url, a.async, a.username, a.password);
                        if (a.xhrFields) for (h in a.xhrFields) i[h] = a.xhrFields[h];
                        a.mimeType && i.overrideMimeType && i.overrideMimeType(a.mimeType);
                        !a.crossDomain && !f["X-Requested-With"] && (f["X-Requested-With"] = "XMLHttpRequest");
                        for (h in f) i.setRequestHeader(h, f[h]);
                        b = function (a) {
                            return function () {
                                b && (b = c = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange =
                                    null, "abort" === a ? i.abort() : "error" === a ? "number" !== typeof i.status ? g(0, "error") : g(i.status, i.statusText) : g(Td[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" !== typeof i.responseText ? {binary: i.response} : {text: i.responseText}, i.getAllResponseHeaders()))
                            }
                        };
                        i.onload = b();
                        c = i.onerror = i.ontimeout = b("error");
                        void 0 !== i.onabort ? i.onabort = c : i.onreadystatechange = function () {
                            4 === i.readyState && r.setTimeout(function () {
                                b && c()
                            })
                        };
                        b = b("abort");
                        try {
                            i.send(a.hasContent && a.data || null)
                        } catch (j) {
                            if (b) throw j;
                        }
                    }, abort: function () {
                        b && b()
                    }
                }
            });
            c.ajaxPrefilter(function (a) {
                a.crossDomain && (a.contents.script = !1)
            });
            c.ajaxSetup({
                accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
                contents: {script: /\b(?:java|ecma)script\b/},
                converters: {
                    "text script": function (a) {
                        c.globalEval(a);
                        return a
                    }
                }
            });
            c.ajaxPrefilter("script", function (a) {
                void 0 === a.cache && (a.cache = !1);
                a.crossDomain && (a.type = "GET")
            });
            c.ajaxTransport("script", function (a) {
                if (a.crossDomain || a.scriptAttrs) {
                    var b,
                        e;
                    return {
                        send: function (f, g) {
                            b = c("<script>").attr(a.scriptAttrs || {}).prop({
                                charset: a.scriptCharset,
                                src: a.url
                            }).on("load error", e = function (a) {
                                b.remove();
                                e = null;
                                a && g("error" === a.type ? 404 : 200, a.type)
                            });
                            q.head.appendChild(b[0])
                        }, abort: function () {
                            e && e()
                        }
                    }
                }
            });
            var Oc = [], Gb = /(=)\?(?=&|$)|\?\?/;
            c.ajaxSetup({
                jsonp: "callback", jsonpCallback: function () {
                    var a = Oc.pop() || c.expando + "_" + Kc++;
                    this[a] = !0;
                    return a
                }
            });
            c.ajaxPrefilter("json jsonp", function (a, b, e) {
                var f, g, h, i = !1 !== a.jsonp && (Gb.test(a.url) ? "url" : "string" ===
                    typeof a.data && 0 === (a.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(a.data) && "data");
                if (i || "jsonp" === a.dataTypes[0]) return f = a.jsonpCallback = s(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, i ? a[i] = a[i].replace(Gb, "$1" + f) : !1 !== a.jsonp && (a.url += (Eb.test(a.url) ? "&" : "?") + a.jsonp + "=" + f), a.converters["script json"] = function () {
                    h || c.error(f + " was not called");
                    return h[0]
                }, a.dataTypes[0] = "json", g = r[f], r[f] = function () {
                    h = arguments
                }, e.always(function () {
                    void 0 === g ? c(r).removeProp(f) :
                        r[f] = g;
                    a[f] && (a.jsonpCallback = b.jsonpCallback, Oc.push(f));
                    h && s(g) && g(h[0]);
                    h = g = void 0
                }), "script"
            });
            var Ud = w, Pc = q.implementation.createHTMLDocument("").body;
            Pc.innerHTML = "<form></form><form></form>";
            Ud.createHTMLDocument = 2 === Pc.childNodes.length;
            c.parseHTML = function (a, b, e) {
                if ("string" !== typeof a) return [];
                "boolean" === typeof b && (e = b, b = !1);
                var f;
                b || (w.createHTMLDocument ? (b = q.implementation.createHTMLDocument(""), f = b.createElement("base"), f.href = q.location.href, b.head.appendChild(f)) : b = q);
                f = vc.exec(a);
                e = !e && [];
                if (f) return [b.createElement(f[1])];
                f = Nb([a], b, e);
                e && e.length && c(e).remove();
                return c.merge([], f.childNodes)
            };
            c.fn.load = function (a, b, e) {
                var f, g, h, i = this, j = a.indexOf(" ");
                -1 < j && (f = da(a.slice(j)), a = a.slice(0, j));
                if (s(b)) e = b, b = void 0; else if (b && "object" === ("undefined" === typeof b ? "undefined" : D(b))) g = "POST";
                0 < i.length && c.ajax({url: a, type: g || "GET", dataType: "html", data: b}).done(function (a) {
                    h = arguments;
                    i.html(f ? c("<div>").append(c.parseHTML(a)).find(f) : a)
                }).always(e && function (a, b) {
                    i.each(function () {
                        e.apply(this,
                            h || [a.responseText, b, a])
                    })
                });
                return this
            };
            c.expr.pseudos.animated = function (a) {
                return c.grep(c.timers, function (b) {
                    return a === b.elem
                }).length
            };
            c.offset = {
                setOffset: function (a, b, e) {
                    var f, g, h, i = c.css(a, "position"), j = c(a), l = {};
                    "static" === i && (a.style.position = "relative");
                    h = j.offset();
                    g = c.css(a, "top");
                    f = c.css(a, "left");
                    ("absolute" === i || "fixed" === i) && -1 < (g + f).indexOf("auto") ? (f = j.position(), g = f.top, f = f.left) : (g = parseFloat(g) || 0, f = parseFloat(f) || 0);
                    s(b) && (b = b.call(a, e, c.extend({}, h)));
                    null != b.top && (l.top = b.top -
                        h.top + g);
                    null != b.left && (l.left = b.left - h.left + f);
                    "using" in b ? b.using.call(a, l) : ("number" === typeof l.top && (l.top += "px"), "number" === typeof l.left && (l.left += "px"), j.css(l))
                }
            };
            c.fn.extend({
                offset: function (a) {
                    if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                        c.offset.setOffset(this, a, b)
                    });
                    var b, e;
                    if (e = this[0]) {
                        if (!e.getClientRects().length) return {top: 0, left: 0};
                        b = e.getBoundingClientRect();
                        e = e.ownerDocument.defaultView;
                        return {top: b.top + e.pageYOffset, left: b.left + e.pageXOffset}
                    }
                }, position: function () {
                    if (this[0]) {
                        var a,
                            b, e, f = this[0], g = {top: 0, left: 0};
                        if ("fixed" === c.css(f, "position")) b = f.getBoundingClientRect(); else {
                            b = this.offset();
                            e = f.ownerDocument;
                            for (a = f.offsetParent || e.documentElement; a && (a === e.body || a === e.documentElement) && "static" === c.css(a, "position");) a = a.parentNode;
                            a && (a !== f && 1 === a.nodeType) && (g = c(a).offset(), g.top += c.css(a, "borderTopWidth", !0), g.left += c.css(a, "borderLeftWidth", !0))
                        }
                        return {
                            top: b.top - g.top - c.css(f, "marginTop", !0),
                            left: b.left - g.left - c.css(f, "marginLeft", !0)
                        }
                    }
                }, offsetParent: function () {
                    return this.map(function () {
                        for (var a =
                            this.offsetParent; a && "static" === c.css(a, "position");) a = a.offsetParent;
                        return a || ja
                    })
                }
            });
            c.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, b) {
                var e = "pageYOffset" === b;
                c.fn[a] = function (c) {
                    return ba(this, function (a, c, f) {
                        var j;
                        na(a) ? j = a : 9 === a.nodeType && (j = a.defaultView);
                        if (void 0 === f) return j ? j[b] : a[c];
                        j ? j.scrollTo(!e ? f : j.pageXOffset, e ? f : j.pageYOffset) : a[c] = f
                    }, a, c, arguments.length)
                }
            });
            c.each(["top", "left"], function (a, b) {
                c.cssHooks[b] = Ub(w.pixelPosition, function (a, f) {
                    if (f) return f = Ca(a,
                        b), jb.test(f) ? c(a).position()[b] + "px" : f
                })
            });
            c.each({Height: "height", Width: "width"}, function (a, b) {
                c.each({padding: "inner" + a, content: b, "": "outer" + a}, function (e, f) {
                    c.fn[f] = function (g, h) {
                        var i = arguments.length && (e || "boolean" !== typeof g),
                            j = e || (!0 === g || !0 === h ? "margin" : "border");
                        return ba(this, function (b, e, g) {
                            return na(b) ? 0 === f.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a],
                                e["client" + a])) : void 0 === g ? c.css(b, e, j) : c.style(b, e, g, j)
                        }, b, i ? g : void 0, i)
                    }
                })
            });
            c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
                c.fn[b] = function (a) {
                    return this.on(b, a)
                }
            });
            c.fn.extend({
                bind: function (a, b, c) {
                    return this.on(a, null, b, c)
                }, unbind: function (a, b) {
                    return this.off(a, null, b)
                }, delegate: function (a, b, c, f) {
                    return this.on(b, a, c, f)
                }, undelegate: function (a, b, c) {
                    return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
                }, hover: function (a, b) {
                    return this.mouseenter(a).mouseleave(b ||
                        a)
                }
            });
            c.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
                c.fn[b] = function (a, c) {
                    return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b)
                }
            });
            var Vd = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            c.proxy = function (a, b) {
                var e, f;
                "string" === typeof b && (e = a[b], b = a, a = e);
                if (s(a)) return f = Y.call(arguments, 2), e = function () {
                    return a.apply(b || this, f.concat(Y.call(arguments)))
                },
                    e.guid = a.guid = a.guid || c.guid++, e
            };
            c.holdReady = function (a) {
                a ? c.readyWait++ : c.ready(!0)
            };
            c.isArray = Array.isArray;
            c.parseJSON = JSON.parse;
            c.nodeName = G;
            c.isFunction = s;
            c.isWindow = na;
            c.camelCase = R;
            c.type = ma;
            c.now = Date.now;
            c.isNumeric = function (a) {
                var b = c.type(a);
                return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
            };
            c.trim = function (a) {
                return null == a ? "" : (a + "").replace(Vd, "")
            };
            "function" === typeof define && define.amd && define("jquery", [], function () {
                return c
            });
            var Wd = r.jQuery, Xd = r.$;
            c.noConflict = function (a) {
                r.$ ===
                c && (r.$ = Xd);
                a && r.jQuery === c && (r.jQuery = Wd);
                return c
            };
            "undefined" === typeof la && (r.jQuery = r.$ = c);
            return c
        };
        "object" === ("undefined" === typeof ca ? "undefined" : D(ca)) && "object" === D(ca.exports) ? ca.exports = la.document ? ka(la, !0) : function (r) {
            if (!r.document) throw Error("jQuery requires a window with a document");
            return ka(r)
        } : ka(la)
    }, {globals: ["$", "jQuery"]});

}
/*
     FILE ARCHIVED ON 12:12:31 Jan 01, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:00:26 Nov 26, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 484.766
  exclusion.robots: 0.125
  exclusion.robots.policy: 0.111
  cdx.remote: 0.082
  esindex: 0.011
  LoadShardBlock: 87.254 (3)
  PetaboxLoader3.datanode: 66.813 (4)
  load_resource: 69.659
  PetaboxLoader3.resolve: 43.044
*/
