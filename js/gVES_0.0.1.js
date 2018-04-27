window.Modernizr = function(a, b, c) {
        function z(a) {
            j.cssText = a
        }

        function A(a, b) {
            return z(m.join(a + ";") + (b || ""))
        }

        function B(a, b) {
            return typeof a === b
        }

        function C(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function D(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!C(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
            }
            return !1
        }

        function E(a, b, d) {
            for (var e in a) {
                var f = b[a[e]];
                if (f !== c) return d === !1 ? a[e] : B(f, "function") ? f.bind(d || b) : f
            }
            return !1
        }

        function F(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                e = (a + " " + o.join(d + " ") + d).split(" ");
            return B(b, "string") || B(b, "undefined") ? D(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "), E(e, b, c))
        }
        var d = "2.8.3",
            e = {},
            f = !0,
            g = b.documentElement,
            h = "modernizr",
            i = b.createElement(h),
            j = i.style,
            k, l = {}.toString,
            m = " -webkit- -moz- -o- -ms- ".split(" "),
            n = "Webkit Moz O ms",
            o = n.split(" "),
            p = n.toLowerCase().split(" "),
            q = {},
            r = {},
            s = {},
            t = [],
            u = t.slice,
            v, w = function(a, c, d, e) {
                var f, i, j, k, l = b.createElement("div"),
                    m = b.body,
                    n = m || b.createElement("body");
                if (parseInt(d, 10))
                    while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
                return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
            },
            x = {}.hasOwnProperty,
            y;
        !B(x, "undefined") && !B(x.call, "undefined") ? y = function(a, b) {
            return x.call(a, b)
        } : y = function(a, b) {
            return b in a && B(a.constructor.prototype[b], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function(b) {
            var c = this;
            if (typeof c != "function") throw new TypeError;
            var d = u.call(arguments, 1),
                e = function() {
                    if (this instanceof e) {
                        var a = function() {};
                        a.prototype = c.prototype;
                        var f = new a,
                            g = c.apply(f, d.concat(u.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return c.apply(b, d.concat(u.call(arguments)))
                };
            return e
        }), q.touch = function() {
            var c;
            return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : w(["@media (", m.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
                c = a.offsetTop === 9
            }), c
        }, q.cssanimations = function() {
            return F("animationName")
        }, q.csstransforms = function() {
            return !!F("transform")
        }, q.csstransforms3d = function() {
            var a = !!F("perspective");
            return a && "webkitPerspective" in g.style && w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
                a = b.offsetLeft === 9 && b.offsetHeight === 3
            }), a
        };
        for (var G in q) y(q, G) && (v = G.toLowerCase(), e[v] = q[G](), t.push((e[v] ? "" : "no-") + v));
        return e.addTest = function(a, b) {
                if (typeof a == "object")
                    for (var d in a) y(a, d) && e.addTest(d, a[d]);
                else {
                    a = a.toLowerCase();
                    if (e[a] !== c) return e;
                    b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
                }
                return e
            }, z(""), i = k = null,
            function(a, b) {
                function l(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }

                function m() {
                    var a = s.elements;
                    return typeof a == "string" ? a.split(" ") : a
                }

                function n(a) {
                    var b = j[a[h]];
                    return b || (b = {}, i++, a[h] = i, j[i] = b), b
                }

                function o(a, c, d) {
                    c || (c = b);
                    if (k) return c.createElement(a);
                    d || (d = n(c));
                    var g;
                    return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g
                }

                function p(a, c) {
                    a || (a = b);
                    if (k) return a.createDocumentFragment();
                    c = c || n(a);
                    var d = c.frag.cloneNode(),
                        e = 0,
                        f = m(),
                        g = f.length;
                    for (; e < g; e++) d.createElement(f[e]);
                    return d
                }

                function q(a, b) {
                    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                        return s.shivMethods ? o(c, a, b) : b.createElem(c)
                    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function(a) {
                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                    }) + ");return n}")(s, b.frag)
                }

                function r(a) {
                    a || (a = b);
                    var c = n(a);
                    return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a
                }
                var c = "3.7.0",
                    d = a.html5 || {},
                    e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    g, h = "_html5shiv",
                    i = 0,
                    j = {},
                    k;
                (function() {
                    try {
                        var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", g = "hidden" in a, k = a.childNodes.length == 1 || function() {
                            b.createElement("a");
                            var a = b.createDocumentFragment();
                            return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                        }()
                    } catch (c) {
                        g = !0, k = !0
                    }
                })();
                var s = {
                    elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: c,
                    shivCSS: d.shivCSS !== !1,
                    supportsUnknownElements: k,
                    shivMethods: d.shivMethods !== !1,
                    type: "default",
                    shivDocument: r,
                    createElement: o,
                    createDocumentFragment: p
                };
                a.html5 = s, r(b)
            }(this, b), e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.testProp = function(a) {
                return D([a])
            }, e.testAllProps = F, e.testStyles = w, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + t.join(" ") : ""), e
    }(this, this.document),
    function(a, b, c) {
        function d(a) {
            return "[object Function]" == o.call(a)
        }

        function e(a) {
            return "string" == typeof a
        }

        function f() {}

        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a
        }

        function h() {
            var a = p.shift();
            q = 1, a ? a.t ? m(function() {
                ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(), h()) : q = 0
        }

        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                    "img" != a && m(function() {
                        t.removeChild(l)
                    }, 50);
                    for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
                }
            }
            var j = j || B.errorTimeout,
                l = b.createElement(a),
                o = 0,
                r = 0,
                u = {
                    t: d,
                    s: c,
                    e: f,
                    a: i,
                    x: j
                };
            1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                k.call(this, r)
            }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
        }

        function j(a, b, c, d, f) {
            return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
        }

        function k() {
            var a = B;
            return a.loader = {
                load: j,
                i: 0
            }, a
        }
        var l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            t = s ? l : n.parentNode,
            l = a.opera && "[object Opera]" == o.call(a.opera),
            l = !!b.attachEvent && !l,
            u = r ? "object" : l ? "script" : "img",
            v = l ? "script" : u,
            w = Array.isArray || function(a) {
                return "[object Array]" == o.call(a)
            },
            x = [],
            y = {},
            z = {
                timeout: function(a, b) {
                    return b.length && (a.timeout = b[0]), a
                }
            },
            A, B;
        B = function(a) {
            function b(a) {
                var a = a.split("!"),
                    b = x.length,
                    c = a.pop(),
                    d = a.length,
                    c = {
                        url: c,
                        origUrl: c,
                        prefixes: a
                    },
                    e, f, g;
                for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
                for (f = 0; f < b; f++) c = x[f](c);
                return c
            }

            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
                })))
            }

            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a)) c || (j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        }), g(a, j, b, 0, h);
                        else if (Object(a) === a)
                            for (n in m = function() {
                                    var b = 0,
                                        c;
                                    for (c in a) a.hasOwnProperty(c) && b++;
                                    return b
                                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                                var a = [].slice.call(arguments);
                                k.apply(this, a), l()
                            } : j[n] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), l()
                                }
                            }(k[n])), g(a[n], j, b, n, h))
                    } else !c && l()
                }
                var h = !!a.test,
                    i = a.load || a.both,
                    j = a.callback || f,
                    k = j,
                    l = a.complete || f,
                    m, n;
                c(h ? a.yep : a.nope, !!i), i && c(i)
            }
            var i, j, l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (w(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l)
        }, B.addPrefix = function(a, b) {
            z[a] = b
        }, B.addFilter = function(a) {
            x.push(a)
        }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
            b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
        }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
            var k = b.createElement("script"),
                l, o, e = e || B.errorTimeout;
            k.src = a;
            for (o in d) k.setAttribute(o, d[o]);
            c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
                !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
            }, m(function() {
                l || (l = 1, c(1))
            }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
        }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
            var e = b.createElement("link"),
                j, c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css";
            for (j in d) e.setAttribute(j, d[j]);
            g || (n.parentNode.insertBefore(e, n), m(c, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };; /*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = "1.11.1",
        m = function(a, b) {
            return new m.fn.init(a, b)
        },
        n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        o = /^-ms-/,
        p = /-([\da-z])/gi,
        q = function(a, b) {
            return b.toUpperCase()
        };
    m.fn = m.prototype = {
        jquery: l,
        constructor: m,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = m.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return m.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(m.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, m.extend = m.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, m.extend({
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === m.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === m.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return !m.isArray(a) && a - parseFloat(a) >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (k.ownLast)
                for (b in a) return j.call(a, b);
            for (b in a);
            return void 0 === b || j.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && m.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(o, "ms-").replace(p, q)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0,
                f = a.length,
                g = r(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1) break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1) break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1) break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(n, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (g) return g.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, f = 0,
                g = a.length,
                h = r(a),
                i = [];
            if (h)
                for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function() {
                return a.apply(b || this, c.concat(d.call(arguments)))
            }, e.guid = a.guid = a.guid || m.guid++, e) : void 0
        },
        now: function() {
            return +new Date
        },
        support: k
    }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function r(a) {
        var b = a.length,
            c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var s = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + -new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = gb(),
            z = gb(),
            A = gb(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = "undefined",
            D = 1 << 31,
            E = {}.hasOwnProperty,
            F = [],
            G = F.pop,
            H = F.push,
            I = F.push,
            J = F.slice,
            K = F.indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (this[b] === a) return b;
                return -1
            },
            L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            O = N.replace("w", "w#"),
            P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]",
            Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)",
            R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            S = new RegExp("^" + M + "*," + M + "*"),
            T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            V = new RegExp(Q),
            W = new RegExp("^" + O + "$"),
            X = {
                ID: new RegExp("^#(" + N + ")"),
                CLASS: new RegExp("^\\.(" + N + ")"),
                TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + P),
                PSEUDO: new RegExp("^" + Q),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + L + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ab = /[+~]/,
            bb = /'|\\/g,
            cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            db = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            };
        try {
            I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType
        } catch (eb) {
            I = {
                apply: F.length ? function(a, b) {
                    H.apply(a, J.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function fb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a) return d;
            if (1 !== (k = b.nodeType) && 9 !== k) return [];
            if (p && !e) {
                if (f = _.exec(a))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j), !h || !h.parentNode) return d;
                            if (h.id === j) return d.push(h), d
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
                    } else {
                        if (f[2]) return I.apply(d, b.getElementsByTagName(a)), d;
                        if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return I.apply(d, b.getElementsByClassName(j)), d
                    }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--) o[l] = s + qb(o[l]);
                        w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",")
                    }
                    if (x) try {
                        return I.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {} finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function gb() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function hb(a) {
            return a[u] = !0, a
        }

        function ib(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function jb(a, b) {
            var c = a.split("|"),
                e = a.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function kb(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function lb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function mb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function nb(a) {
            return hb(function(b) {
                return b = +b, hb(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function ob(a) {
            return a && typeof a.getElementsByTagName !== C && a
        }
        c = fb.support = {}, f = fb.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fb.setDocument = function(a) {
            var b, e = a ? a.ownerDocument || a : v,
                g = e.defaultView;
            return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function() {
                m()
            }, !1) : g.attachEvent && g.attachEvent("onunload", function() {
                m()
            })), c.attributes = ib(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ib(function(a) {
                return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), c.getById = ib(function(a) {
                return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if (typeof b.getElementById !== C && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function(a) {
                a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked")
            }), ib(function(a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    f = a.parentNode,
                    g = b.parentNode,
                    h = [a],
                    i = [b];
                if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
                if (f === g) return kb(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) i.unshift(c);
                while (h[d] === i[d]) d++;
                return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, e) : n
        }, fb.matches = function(a, b) {
            return fb(a, null, null, b)
        }, fb.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return fb(b, n, null, [a]).length > 0
        }, fb.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fb.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fb.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fb.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fb.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = fb.selectors = {
            cacheLength: 50,
            createPseudo: hb,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fb.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = K.call(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: hb(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(R, "$1"));
                    return d[u] ? hb(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }),
                has: hb(function(a) {
                    return function(b) {
                        return fb(a, b).length > 0
                    }
                }),
                contains: hb(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: hb(function(a) {
                    return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Z.test(a.nodeName)
                },
                input: function(a) {
                    return Y.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: nb(function() {
                    return [0]
                }),
                last: nb(function(a, b) {
                    return [b - 1]
                }),
                eq: nb(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: nb(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: nb(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: nb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: nb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = lb(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = mb(b);

        function pb() {}
        pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? fb.error(a) : z(a, i).slice(0)
        };

        function qb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function rb(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function sb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function tb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fb(a, b[d], c);
            return c
        }

        function ub(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function vb(a, b, c, d, e, f) {
            return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || tb(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ub(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ub(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r)
            })
        }

        function wb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function(a) {
                    return a === b
                }, h, !0), l = rb(function(a) {
                    return K.call(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
                }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [rb(sb(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a))
                    }
                    m.push(c)
                }
            return sb(m)
        }

        function xb(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, m, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = j,
                        u = f || e && d.find.TAG("*", k),
                        v = w += null == t ? 1 : Math.random() || .1,
                        x = u.length;
                    for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                        if (e && l) {
                            m = 0;
                            while (o = a[m++])
                                if (o(l, g, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = v)
                        }
                        c && ((l = !o && l) && p--, f && r.push(l))
                    }
                    if (p += q, c && q !== p) {
                        m = 0;
                        while (o = b[m++]) o(r, s, g, h);
                        if (f) {
                            if (p > 0)
                                while (q--) r[q] || s[q] || (s[q] = G.call(i));
                            s = ub(s)
                        }
                        I.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i)
                    }
                    return k && (w = v, j = t), r
                };
            return c ? hb(f) : f
        }
        return h = fb.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xb(e, d)), f.selector = a
            }
            return f
        }, i = fb.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qb(j), !a) return I.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ib(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || jb("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ib(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || jb("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ib(function(a) {
            return null == a.getAttribute("disabled")
        }) || jb(L, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fb
    }(a);
    m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
    var t = m.expr.match.needsContext,
        u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        v = /^.[^:#\[\.,]*$/;

    function w(a, b, c) {
        if (m.isFunction(b)) return m.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return m.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (v.test(b)) return m.filter(b, a, c);
            b = m.filter(b, a)
        }
        return m.grep(a, function(a) {
            return m.inArray(a, b) >= 0 !== c
        })
    }
    m.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, m.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(m(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (m.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) m.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(w(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(w(this, a || [], !0))
        },
        is: function(a) {
            return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
        }
    });
    var x, y = a.document,
        z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = m.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b))
                        for (c in b) m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                if (d = y.getElementById(c[2]), d && d.parentNode) {
                    if (d.id !== c[2]) return x.find(a);
                    this.length = 1, this[0] = d
                }
                return this.context = y, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
        };
    A.prototype = m.fn, x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/,
        C = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    m.extend({
        dir: function(a, b, c) {
            var d = [],
                e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b];
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), m.fn.extend({
        has: function(a) {
            var b, c = m(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (m.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? m.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function D(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }
    m.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return m.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return m.dir(a, "parentNode", c)
        },
        next: function(a) {
            return D(a, "nextSibling")
        },
        prev: function(a) {
            return D(a, "previousSibling")
        },
        nextAll: function(a) {
            return m.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return m.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return m.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return m.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return m.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return m.sibling(a.firstChild)
        },
        contents: function(a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
        }
    }, function(a, b) {
        m.fn[a] = function(c, d) {
            var e = m.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var E = /\S+/g,
        F = {};

    function G(a) {
        var b = F[a] = {};
        return m.each(a.match(E) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    m.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function(l) {
                for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)
                    if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break
                    }
                b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
            },
            k = {
                add: function() {
                    if (h) {
                        var d = h.length;
                        ! function f(b) {
                            m.each(b, function(b, c) {
                                var d = m.type(c);
                                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments), b ? e = h.length : c && (g = d, j(c))
                    }
                    return this
                },
                remove: function() {
                    return h && m.each(arguments, function(a, c) {
                        var d;
                        while ((d = m.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
                    }), this
                },
                has: function(a) {
                    return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
                },
                empty: function() {
                    return h = [], e = 0, this
                },
                disable: function() {
                    return h = i = c = void 0, this
                },
                disabled: function() {
                    return !h
                },
                lock: function() {
                    return i = void 0, c || k.disable(), this
                },
                locked: function() {
                    return !i
                },
                fireWith: function(a, c) {
                    return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
                },
                fire: function() {
                    return k.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return k
    }, m.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", m.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", m.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", m.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return m.Deferred(function(c) {
                            m.each(b, function(b, f) {
                                var g = m.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? m.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, m.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && m.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : m.Deferred(),
                h = function(a, b, c) {
                    return function(e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    m.fn.ready = function(a) {
        return m.ready.promise().done(a), this
    }, m.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? m.readyWait++ : m.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? !--m.readyWait : !m.isReady) {
                if (!y.body) return setTimeout(m.ready);
                m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")))
            }
        }
    });

    function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))
    }

    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready())
    }
    m.ready.promise = function(b) {
        if (!H)
            if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready);
            else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1);
        else {
            y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
            var c = !1;
            try {
                c = null == a.frameElement && y.documentElement
            } catch (d) {}
            c && c.doScroll && ! function e() {
                if (!m.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(e, 50)
                    }
                    I(), m.ready()
                }
            }()
        }
        return H.promise(b)
    };
    var K = "undefined",
        L;
    for (L in m(k)) break;
    k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function() {
            var a, b, c, d;
            c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
        }),
        function() {
            var a = y.createElement("div");
            if (null == k.deleteExpando) {
                k.deleteExpando = !0;
                try {
                    delete a.test
                } catch (b) {
                    k.deleteExpando = !1
                }
            }
            a = null
        }(), m.acceptData = function(a) {
            var b = m.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        };
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        N = /([A-Z])/g;

    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c
                } catch (e) {}
                m.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function P(a) {
        var b;
        for (b in a)
            if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando,
                i = a.nodeType,
                j = i ? m.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: m.noop
            }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
        }
    }

    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType,
                g = f ? m.cache : a,
                h = f ? a[m.expando] : m.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !P(d) : !m.isEmptyObject(d)) return
                }(c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }
    m.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a)
        },
        data: function(a, b, c) {
            return Q(a, b, c)
        },
        removeData: function(a, b) {
            return R(a, b)
        },
        _data: function(a, b, c) {
            return Q(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return R(a, b, !0)
        }
    }), m.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
                    m._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                m.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                m.data(this, a, b)
            }) : f ? O(f, a, m.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                m.removeData(this, a)
            })
        }
    }), m.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = m.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = m._queueHooks(a, b),
                g = function() {
                    m.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return m._data(a, c) || m._data(a, c, {
                empty: m.Callbacks("once memory").add(function() {
                    m._removeData(a, b + "queue"), m._removeData(a, c)
                })
            })
        }
    }), m.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                m.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = m.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = ["Top", "Right", "Bottom", "Left"],
        U = function(a, b) {
            return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
        },
        V = m.access = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === m.type(c)) {
                e = !0;
                for (h in c) m.access(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(m(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        W = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = y.createElement("input"),
            b = y.createElement("div"),
            c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() {
                k.noCloneEvent = !1
            }), b.cloneNode(!0).click()), null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                k.deleteExpando = !1
            }
        }
    }(),
    function() {
        var b, c, d = y.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var X = /^(?:input|select|textarea)$/i,
        Y = /^key/,
        Z = /^(?:mouse|pointer|contextmenu)|click/,
        $ = /^(?:focusinfocus|focusoutblur)$/,
        _ = /^([^.]*)(?:\.(.+)|)$/;

    function ab() {
        return !0
    }

    function bb() {
        return !1
    }

    function cb() {
        try {
            return y.activeElement
        } catch (a) {}
    }
    m.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                    return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;
                while (h--) f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && m.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)
                    if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
                        while (f--) g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) m.event.remove(a, o + b[j], c, d, !0);
                m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, n, o = [d || y],
                p = j.call(b, "type") ? b.type : b,
                q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), l = h;
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
                }
                n = 0;
                while ((h = o[n++]) && !b.isPropagationStopped()) b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g], l && (d[g] = null), m.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {}
                    m.event.triggered = void 0, l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (m._data(this, "events") || {})[a.type] || [],
                k = m.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = m.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function(a) {
            if (a[m.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button,
                    g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== cb() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === cb() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return m.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = m.extend(new m.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, m.removeEvent = y.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c))
    }, m.Event = function(a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(a, b)
    }, m.Event.prototype = {
        isDefaultPrevented: bb,
        isPropagationStopped: bb,
        isImmediatePropagationStopped: bb,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ab, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ab, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ab, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        m.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.submitBubbles || (m.event.special.submit = {
        setup: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }), m._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
        }
    }), k.changeBubbles || (m.event.special.change = {
        setup: function() {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), m.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0)
            })), !1) : void m.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)
                }), m._data(b, "changeBubbles", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return m.event.remove(this, "._change"), !X.test(this.nodeName)
        }
    }), k.focusinBubbles || m.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0)
        };
        m.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = m._data(d, b);
                e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b))
            }
        }
    }), m.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a) this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = bb;
            else if (!d) return this;
            return 1 === e && (g = d, d = function(a) {
                return m().off(a), g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function() {
                m.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = bb), this.each(function() {
                m.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                m.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? m.event.trigger(a, b, c, !0) : void 0
        }
    });

    function db(a) {
        var b = eb.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }
    var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        fb = / jQuery\d+="(?:null|\d+)"/g,
        gb = new RegExp("<(?:" + eb + ")[\\s/>]", "i"),
        hb = /^\s+/,
        ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        jb = /<([\w:]+)/,
        kb = /<tbody/i,
        lb = /<|&#?\w+;/,
        mb = /<(?:script|style|link)/i,
        nb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ob = /^$|\/(?:java|ecma)script/i,
        pb = /^true\/(.*)/,
        qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        rb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        sb = db(y),
        tb = sb.appendChild(y.createElement("div"));
    rb.optgroup = rb.option, rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead, rb.th = rb.td;

    function ub(a, b) {
        var c, d, e = 0,
            f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b));
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
    }

    function vb(a) {
        W.test(a.type) && (a.defaultChecked = a.checked)
    }

    function wb(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function xb(a) {
        return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a
    }

    function yb(a) {
        var b = pb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function zb(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
    }

    function Ab(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a),
                g = m._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) m.event.add(b, c, h[c][d])
            }
            g.data && (g.data = m.extend({}, g.data))
        }
    }

    function Bb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events) m.removeEvent(b, d, e.handle);
                b.removeAttribute(m.expando)
            }
            "script" === c && b.text !== a.text ? (xb(b).text = a.text, yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    m.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML, tb.removeChild(f = tb.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))
                for (d = ub(f), h = ub(a), g = 0; null != (e = h[g]); ++g) d[g] && Bb(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]); g++) Ab(e, d[g]);
                else Ab(a, f);
            return d = ub(f, "script"), d.length > 0 && zb(d, !i && ub(a, "script")), d = h = e = null, f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++)
                if (f = a[q], f || 0 === f)
                    if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f);
                    else if (lb.test(f)) {
                h = h || o.appendChild(b.createElement("div")), i = (jb.exec(f) || ["", ""])[1].toLowerCase(), l = rb[i] || rb._default, h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2], e = l[0];
                while (e--) h = h.lastChild;
                if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])), !k.tbody) {
                    f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                    while (e--) m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                }
                m.merge(p, h.childNodes), h.textContent = "";
                while (h.firstChild) h.removeChild(h.firstChild);
                h = o.lastChild
            } else p.push(b.createTextNode(f));
            h && o.removeChild(h), k.appendChecked || m.grep(ub(p, "input"), vb), q = 0;
            while (f = p[q++])
                if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ub(o.appendChild(f), "script"), g && zb(h), c)) {
                    e = 0;
                    while (f = h[e++]) ob.test(f.type || "") && c.push(f)
                }
            return h = null, o
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)
                if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f))
                }
        }
    }), m.fn.extend({
        text: function(a) {
            return V(this, function(a) {
                return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || m.cleanData(ub(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ub(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && m.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return m.clone(this, a, b)
            })
        },
        html: function(a) {
            return V(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0;
                if (!("string" != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(ib, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ub(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, m.cleanData(ub(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                l = this.length,
                n = this,
                o = l - 1,
                p = a[0],
                q = m.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && nb.test(p)) return this.each(function(c) {
                var d = n.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = m.map(ub(i, "script"), xb), f = g.length; l > j; j++) d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ub(d, "script"))), b.call(this[j], d, j);
                if (f)
                    for (h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0; f > j; j++) d = g[j], ob.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, "")));
                i = c = null
            }
            return this
        }
    }), m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        m.fn[a] = function(a) {
            for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Cb, Db = {};

    function Eb(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(), f
    }

    function Fb(a) {
        var b = y,
            c = Db[a];
        return c || (c = Eb(a, b), "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Cb[0].contentWindow || Cb[0].contentDocument).document, b.write(), b.close(), c = Eb(a, b), Cb.detach()), Db[a] = c), c
    }! function() {
        var a;
        k.shrinkWrapBlocks = function() {
            if (null != a) return a;
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
        }
    }();
    var Gb = /^margin/,
        Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ib, Jb, Kb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ib = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    }, Jb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Hb.test(g) && Gb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : y.documentElement.currentStyle && (Ib = function(a) {
        return a.currentStyle
    }, Jb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Hb.test(g) && !Kb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function Lb(a, b) {
        return {
            get: function() {
                var c = a();
                if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }! function() {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
            c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, {
                reliableHiddenOffsets: function() {
                    return null == g && i(), g
                },
                boxSizingReliable: function() {
                    return null == f && i(), f
                },
                pixelPosition: function() {
                    return null == e && i(), e
                },
                reliableMarginRight: function() {
                    return null == h && i(), h
                }
            });

            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || {
                    width: "4px"
                }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d))
            }
        }
    }(), m.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Mb = /alpha\([^)]*\)/i,
        Nb = /opacity\s*=\s*([^)]*)/,
        Ob = /^(none|table(?!-c[ea]).+)/,
        Pb = new RegExp("^(" + S + ")(.*)$", "i"),
        Qb = new RegExp("^([+-])=(" + S + ")", "i"),
        Rb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Sb = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Tb = ["Webkit", "O", "Moz", "ms"];

    function Ub(a, b) {
        if (b in a) return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1),
            d = b,
            e = Tb.length;
        while (e--)
            if (b = Tb[e] + c, b in a) return b;
        return d
    }

    function Vb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function Wb(a, b, c) {
        var d = Pb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Xb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
        return g
    }

    function Yb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ib(a),
            g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Jb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Hb.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    m.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Jb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": k.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b),
                    i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c
                } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = m.camelCase(b);
            return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Jb(a, b, d)), "normal" === f && b in Sb && (f = Sb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f
        }
    }), m.each(["height", "width"], function(a, b) {
        m.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function() {
                    return Yb(a, b, d)
                }) : Yb(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ib(a);
                return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), k.opacity || (m.cssHooks.opacity = {
        get: function(a, b) {
            return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e)
        }
    }), m.cssHooks.marginRight = Lb(k.reliableMarginRight, function(a, b) {
        return b ? m.swap(a, {
            display: "inline-block"
        }, Jb, [a, "marginRight"]) : void 0
    }), m.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        m.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Gb.test(a) || (m.cssHooks[a + b].set = Wb)
    }), m.fn.extend({
        css: function(a, b) {
            return V(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (m.isArray(b)) {
                    for (d = Ib(a), e = b.length; e > g; g++) f[b[g]] = m.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Vb(this, !0)
        },
        hide: function() {
            return Vb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                U(this) ? m(this).show() : m(this).hide()
            })
        }
    });

    function Zb(a, b, c, d, e) {
        return new Zb.prototype.init(a, b, c, d, e)
    }
    m.Tween = Zb, Zb.prototype = {
        constructor: Zb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Zb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Zb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Zb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Zb.propHooks._default.set(this), this
        }
    }, Zb.prototype.init.prototype = Zb.prototype, Zb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, m.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, m.fx = Zb.prototype.init, m.fx.step = {};
    var $b, _b, ac = /^(?:toggle|show|hide)$/,
        bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        cc = /queueHooks$/,
        dc = [ic],
        ec = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = bc.exec(b),
                    f = e && e[3] || (m.cssNumber[a] ? "" : "px"),
                    g = (m.cssNumber[a] || "px" !== f && +d) && bc.exec(m.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };

    function fc() {
        return setTimeout(function() {
            $b = void 0
        }), $b = m.now()
    }

    function gc(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = T[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function hc(a, b, c) {
        for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function ic(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this,
            o = {},
            p = a.style,
            q = a.nodeType && U(a),
            r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, n.always(function() {
            n.always(function() {
                h.unqueued--, m.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], ac.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || m.style(a, d)
            } else j = void 0;
        if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function() {
                m(a).hide()
            }), n.done(function() {
                var b;
                m._removeData(a, "fxshow");
                for (b in o) m.style(a, b, o[b])
            });
            for (d in o) g = hc(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function jc(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function kc(a, b, c) {
        var d, e, f = 0,
            g = dc.length,
            h = m.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: m.extend({}, b),
                opts: m.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: $b || fc(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (jc(k, j.opts.specialEasing); g > f; f++)
            if (d = dc[f].call(j, a, k, j.opts)) return d;
        return m.map(k, hc, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    m.Animation = m.extend(kc, {
            tweener: function(a, b) {
                m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? dc.unshift(a) : dc.push(a)
            }
        }), m.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? m.extend({}, a) : {
                complete: c || !c && b || m.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !m.isFunction(b) && b
            };
            return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue)
            }, d
        }, m.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(U).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = m.isEmptyObject(a),
                    f = m.speed(b, c, d),
                    g = function() {
                        var b = kc(this, m.extend({}, a), f);
                        (e || m._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = m.timers,
                        g = m._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && cc.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && m.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = m._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = m.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), m.each(["toggle", "show", "hide"], function(a, b) {
            var c = m.fn[b];
            m.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e)
            }
        }), m.each({
            slideDown: gc("show"),
            slideUp: gc("hide"),
            slideToggle: gc("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            m.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), m.timers = [], m.fx.tick = function() {
            var a, b = m.timers,
                c = 0;
            for ($b = m.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || m.fx.stop(), $b = void 0
        }, m.fx.timer = function(a) {
            m.timers.push(a), a() ? m.fx.start() : m.timers.pop()
        }, m.fx.interval = 13, m.fx.start = function() {
            _b || (_b = setInterval(m.fx.tick, m.fx.interval))
        }, m.fx.stop = function() {
            clearInterval(_b), _b = null
        }, m.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, m.fn.delay = function(a, b) {
            return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        function() {
            var a, b, c, d, e;
            b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value
        }();
    var lc = /\r/g;
    m.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = m.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c)
            }
        }
    }), m.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = m.find.attr(a, "value");
                    return null != b ? b : m.trim(m.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                            if (b = m(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = m.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), m.each(["radio", "checkbox"], function() {
        m.valHooks[this] = {
            set: function(a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (m.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var mc, nc, oc = m.expr.attrHandle,
        pc = /^(?:checked|selected)$/i,
        qc = k.getSetAttribute,
        rc = k.input;
    m.fn.extend({
        attr: function(a, b) {
            return V(this, m.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                m.removeAttr(this, a)
            })
        }
    }), m.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qc ? c : d)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), nc = {
        set: function(a, b, c) {
            return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, m.each(m.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = oc[b] || m.find.attr;
        oc[b] = rc && qc || !pc.test(b) ? function(a, b, d) {
            var e, f;
            return d || (f = oc[b], oc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, oc[b] = f), e
        } : function(a, b, c) {
            return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), rc && qc || (m.attrHooks.value = {
        set: function(a, b, c) {
            return m.nodeName(a, "input") ? void(a.defaultValue = b) : mc && mc.set(a, b, c)
        }
    }), qc || (mc = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, oc.id = oc.name = oc.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, m.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: mc.set
    }, m.attrHooks.contenteditable = {
        set: function(a, b, c) {
            mc.set(a, "" === b ? !1 : b, c)
        }
    }, m.each(["width", "height"], function(a, b) {
        m.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), k.style || (m.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var sc = /^(?:input|select|textarea|button|object)$/i,
        tc = /^(?:a|area)$/i;
    m.fn.extend({
        prop: function(a, b) {
            return V(this, m.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = m.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), m.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = m.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }), k.hrefNormalized || m.each(["href", "src"], function(a, b) {
        m.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), k.optSelected || (m.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        m.propFix[this.toLowerCase()] = this
    }), k.enctype || (m.propFix.enctype = "encoding");
    var uc = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).addClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = m.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = 0 === arguments.length || "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).removeClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                        g = a ? m.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function(c) {
                m(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c) {
                    var b, d = 0,
                        e = m(this),
                        f = a.match(E) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        m.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), m.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var vc = m.now(),
        wc = /\?/,
        xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = m.trim(b + "");
        return e && !m.trim(e.replace(xc, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
    }, m.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c
    };
    var yc, zc, Ac = /#.*$/,
        Bc = /([?&])_=[^&]*/,
        Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ec = /^(?:GET|HEAD)$/,
        Fc = /^\/\//,
        Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Hc = {},
        Ic = {},
        Jc = "*/".concat("*");
    try {
        zc = location.href
    } catch (Kc) {
        zc = y.createElement("a"), zc.href = "", zc = zc.href
    }
    yc = Gc.exec(zc.toLowerCase()) || [];

    function Lc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Mc(a, b, c, d) {
        var e = {},
            f = a === Ic;

        function g(h) {
            var i;
            return e[h] = !0, m.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Nc(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && m.extend(!0, a, c), a
    }

    function Oc(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Pc(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zc,
            type: "GET",
            isLocal: Dc.test(yc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Jc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": m.parseJSON,
                "text xml": m.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a)
        },
        ajaxPrefilter: Lc(Hc),
        ajaxTransport: Lc(Ic),
        ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b),
                l = k.context || k,
                n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
                o = m.Deferred(),
                p = m.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!j) {
                                j = {};
                                while (b = Cc.exec(f)) j[b[1].toLowerCase()] = b[2]
                            }
                            b = j[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? f : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (k.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return i && i.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mc(Hc, k, b, v), 2 === t) return v;
            h = k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Ec.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[d](k[d]);
            if (i = Mc(Ic, k, b, v)) {
                v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, i.send(r, x)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");

            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Oc(k, v, c)), u = Pc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) {
            return m.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return m.get(a, void 0, b, "script")
        }
    }), m.each(["get", "post"], function(a, b) {
        m[b] = function(a, c, d, e) {
            return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        m.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), m._evalUrl = function(a) {
        return m.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, m.fn.extend({
        wrapAll: function(a) {
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return this.each(m.isFunction(a) ? function(b) {
                m(this).wrapInner(a.call(this, b))
            } : function() {
                var b = m(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = m.isFunction(a);
            return this.each(function(c) {
                m(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
            }).end()
        }
    }), m.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
    }, m.expr.filters.visible = function(a) {
        return !m.expr.filters.hidden(a)
    };
    var Qc = /%20/g,
        Rc = /\[\]$/,
        Sc = /\r?\n/g,
        Tc = /^(?:submit|button|image|reset|file)$/i,
        Uc = /^(?:input|select|textarea|keygen)/i;

    function Vc(a, b, c, d) {
        var e;
        if (m.isArray(b)) m.each(b, function(b, e) {
            c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== m.type(b)) d(a, b);
        else
            for (e in b) Vc(a + "[" + e + "]", b[e], c, d)
    }
    m.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) Vc(c, a[c], b, e);
        return d.join("&").replace(Qc, "+")
    }, m.fn.extend({
        serialize: function() {
            return m.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = m.prop(this, "elements");
                return a ? m.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !m(this).is(":disabled") && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a))
            }).map(function(a, b) {
                var c = m(this).val();
                return null == c ? null : m.isArray(c) ? m.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Sc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Sc, "\r\n")
                }
            }).get()
        }
    }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c()
    } : Zc;
    var Wc = 0,
        Xc = {},
        Yc = m.ajaxSettings.xhr();
    a.ActiveXObject && m(a).on("unload", function() {
        for (var a in Xc) Xc[a](void 0, !0)
    }), k.cors = !!Yc && "withCredentials" in Yc, Yc = k.ajax = !!Yc, Yc && m.ajaxTransport(function(a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(),
                        g = ++Wc;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete Xc[g], b = void 0, f.onreadystatechange = m.noop, e) 4 !== f.readyState && f.abort();
                            else {
                                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xc[g] = b : b()
                },
                abort: function() {
                    b && b(void 0, !0)
                }
            }
        }
    });

    function Zc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function $c() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    m.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return m.globalEval(a), a
            }
        }
    }), m.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), m.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement;
            return {
                send: function(d, e) {
                    b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var _c = [],
        ad = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = _c.pop() || m.expando + "_" + vc++;
            return this[a] = !0, a
        }
    }), m.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (ad.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || m.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _c.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), m.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || y;
        var d = u.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
    };
    var bd = m.fn.load;
    m.fn.load = function(a, b, c) {
        if ("string" != typeof a && bd) return bd.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, e || [a.responseText, b, a])
        }), this
    }, m.expr.filters.animated = function(a) {
        return m.grep(m.timers, function(b) {
            return a === b.elem
        }).length
    };
    var cd = a.document.documentElement;

    function dd(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    m.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"),
                l = m(a),
                n = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n)
        }
    }, m.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                m.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dd(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - m.css(d, "marginTop", !0),
                    left: b.left - c.left - m.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || cd;
                while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) a = a.offsetParent;
                return a || cd
            })
        }
    }), m.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function(d) {
            return V(this, function(a, d, e) {
                var f = dd(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), m.each(["top", "left"], function(a, b) {
        m.cssHooks[b] = Lb(k.pixelPosition, function(a, c) {
            return c ? (c = Jb(a, b), Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0
        })
    }), m.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        m.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            m.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return V(this, function(b, c, d) {
                    var e;
                    return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), m.fn.size = function() {
        return this.length
    }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return m
    });
    var ed = a.jQuery,
        fd = a.$;
    return m.noConflict = function(b) {
        return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m
    }, typeof b === K && (a.jQuery = a.$ = m), m
});

//Ratchet way to inject stuff for angular to go through... note that we only want the below to run once.

document.onreadystatechange = () => {

    if (document.readyState === "interactive") {

        $("body").append(
        "<!-- Modal -->" +
        "  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\" data-toggle=\"modal\">" +
        "    <div class=\"modal-dialog\">" +
        "      <!-- Modal content-->" +
        "      <div class=\"modal-content\">" +
        "        <div class=\"modal-header\">" +
        "          <a class=\"modal-dismiss\" data-dismiss=\"modal\"><span class=\"sprite sprite-remove\"></span><span class=\"sr-only\">Close</span></a>" +
        "          <h4 class=\"modal-title\">{{custom_modal.title}}</h4>" +
        "        </div>" +
        "        <div class=\"modal-item\">" +
        "          <h2>Your wants!</h2>" +
        "          <div id=\"modalwant\" ng-repeat=\"i in listing.setToArray(listing.want)\">" +
        "           <p>{{i.split(\", \")[0]}}</br>Section {{i.split(\", \")[1]}}</p>" +
        "          </div>" +
        "          <h2>Your haves!</h2>" +
        "          <div id=\"modalhave\" ng-repeat=\"i in listing.setToArray(listing.have)\">" +
        "           <p>{{i.split(\", \")[0]}}</br>Section {{i.split(\", \")[1]}}</p>" +
        "          </div>" +
        "        </div>" +
        "        <div class=\"modal-footer\">" +
        "          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>" +
        "          <button type=\"button\" class=\"btn btn-default\" ng-click=\"listing.upload(userinfo.data.uni);\" data-dismiss=\"modal\">Submit</button>" +
        "        </div>" +
        "      </div>" +
        "    </div>" +
        "  </div>"
        )

        $("a[ng-click=\"::setFavorite(section, course)\"").attr(
            "ng-if", "!listing.choosing"
        )

        $("#program-course-lookup").append(
          "<p id=\"loginprompt\" ng-if=\"!userinfo.data.uni\">Please log in!</p>"
        )

        $("#program-course-lookup").append(
            "<div ng-if=\"userinfo.data.uni\" id=\"coreswap\">" +
            "<button ng-click=\"listing.toggleMode('I Want This')\">Select sections you want</button>" +
            "<div style=\"color:white;\" ng-repeat=\"i in listing.setToArray(listing.want)\"><p>{{i.split(\", \")[0]}}</br>Section {{i.split(\", \")[1]}}</p></div>" +
            "<button ng-click=\"listing.toggleMode('I Have This')\">Select the section you have</button>" +
            "<button ng-click=\"listing.isEmpty() ? listing.emptyAlert() : listing.modal()\">Submit!</button>" +
            "<div style=\"color:white;\" ng-repeat=\"i in listing.setToArray(listing.have)\"><p>{{i.split(\", \")[0]}}</br>Section {{i.split(\", \")[1]}}</p></div>" +
            "</div>"
        )

        $(".class-more-info").append(
            "<dl ng-if=\"::section.universalCourseIdentifier\">" +
            "<dt>Universal Course Identifier</dt>" +
            "<dd ng-bind=\"::section.universalCourseIdentifier\"></dd>" +
            "</dl>"
        )
        // $(".class-more-info").append(
        //     "<dl ng-if=\"::course.ribbit\">" +
        //     "<dt>Ribbit Link</dt>" +
        //     "<dd><a ng-href=\"{{course.ribbit}}\">Here</dd>" +
        //     "</dl>"
        // )
        $(".course-actions").prepend(
            "<a ng-if=\"listing.choosing\" ng-class=\"{ 'btn-danger': listing.has(section.listingValue), 'btn-success': !listing.has(section.listingValue)}\"" +
            "ng-bind=\"listing.has(section.listingValue) ? 'Remove' : listing.choosing \"" +
            "ng-click=\"listing.toggle(section.listingValue); listing.log()\"" +
            " class=\"btn btn-lg ng-scope\"></a>"
        )
    }
}

;
/*
 AngularJS v1.3.11
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(M, Y, t) {
    'use strict';

    function T(b) {
        return function() {
            var a = arguments[0],
                c;
            c = "[" + (b ? b + ":" : "") + a + "] http://errors.angularjs.org/1.3.11/" + (b ? b + "/" : "") + a;
            for (a = 1; a < arguments.length; a++) {
                c = c + (1 == a ? "?" : "&") + "p" + (a - 1) + "=";
                var d = encodeURIComponent,
                    e;
                e = arguments[a];
                e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e;
                c += d(e)
            }
            return Error(c)
        }
    }

    function Ta(b) {
        if (null == b || Ua(b)) return !1;
        var a = b.length;
        return b.nodeType ===
            oa && a ? !0 : F(b) || D(b) || 0 === a || "number" === typeof a && 0 < a && a - 1 in b
    }

    function s(b, a, c) {
        var d, e;
        if (b)
            if (G(b))
                for (d in b) "prototype" == d || "length" == d || "name" == d || b.hasOwnProperty && !b.hasOwnProperty(d) || a.call(c, b[d], d, b);
            else if (D(b) || Ta(b)) {
            var f = "object" !== typeof b;
            d = 0;
            for (e = b.length; d < e; d++)(f || d in b) && a.call(c, b[d], d, b)
        } else if (b.forEach && b.forEach !== s) b.forEach(a, c, b);
        else
            for (d in b) b.hasOwnProperty(d) && a.call(c, b[d], d, b);
        return b
    }

    function Ed(b, a, c) {
        for (var d = Object.keys(b).sort(), e = 0; e < d.length; e++) a.call(c,
            b[d[e]], d[e]);
        return d
    }

    function kc(b) {
        return function(a, c) {
            b(c, a)
        }
    }

    function Fd() {
        return ++nb
    }

    function lc(b, a) {
        a ? b.$$hashKey = a : delete b.$$hashKey
    }

    function z(b) {
        for (var a = b.$$hashKey, c = 1, d = arguments.length; c < d; c++) {
            var e = arguments[c];
            if (e)
                for (var f = Object.keys(e), g = 0, h = f.length; g < h; g++) {
                    var l = f[g];
                    b[l] = e[l]
                }
        }
        lc(b, a);
        return b
    }

    function ba(b) {
        return parseInt(b, 10)
    }

    function H() {}

    function pa(b) {
        return b
    }

    function da(b) {
        return function() {
            return b
        }
    }

    function A(b) {
        return "undefined" === typeof b
    }

    function y(b) {
        return "undefined" !==
            typeof b
    }

    function I(b) {
        return null !== b && "object" === typeof b
    }

    function F(b) {
        return "string" === typeof b
    }

    function V(b) {
        return "number" === typeof b
    }

    function qa(b) {
        return "[object Date]" === Da.call(b)
    }

    function G(b) {
        return "function" === typeof b
    }

    function ob(b) {
        return "[object RegExp]" === Da.call(b)
    }

    function Ua(b) {
        return b && b.window === b
    }

    function Va(b) {
        return b && b.$evalAsync && b.$watch
    }

    function Wa(b) {
        return "boolean" === typeof b
    }

    function mc(b) {
        return !(!b || !(b.nodeName || b.prop && b.attr && b.find))
    }

    function Gd(b) {
        var a = {};
        b = b.split(",");
        var c;
        for (c = 0; c < b.length; c++) a[b[c]] = !0;
        return a
    }

    function ua(b) {
        return Q(b.nodeName || b[0] && b[0].nodeName)
    }

    function Xa(b, a) {
        var c = b.indexOf(a);
        0 <= c && b.splice(c, 1);
        return a
    }

    function Ea(b, a, c, d) {
        if (Ua(b) || Va(b)) throw Ka("cpws");
        if (a) {
            if (b === a) throw Ka("cpi");
            c = c || [];
            d = d || [];
            if (I(b)) {
                var e = c.indexOf(b);
                if (-1 !== e) return d[e];
                c.push(b);
                d.push(a)
            }
            if (D(b))
                for (var f = a.length = 0; f < b.length; f++) e = Ea(b[f], null, c, d), I(b[f]) && (c.push(b[f]), d.push(e)), a.push(e);
            else {
                var g = a.$$hashKey;
                D(a) ? a.length =
                    0 : s(a, function(b, c) {
                        delete a[c]
                    });
                for (f in b) b.hasOwnProperty(f) && (e = Ea(b[f], null, c, d), I(b[f]) && (c.push(b[f]), d.push(e)), a[f] = e);
                lc(a, g)
            }
        } else if (a = b) D(b) ? a = Ea(b, [], c, d) : qa(b) ? a = new Date(b.getTime()) : ob(b) ? (a = new RegExp(b.source, b.toString().match(/[^\/]*$/)[0]), a.lastIndex = b.lastIndex) : I(b) && (e = Object.create(Object.getPrototypeOf(b)), a = Ea(b, e, c, d));
        return a
    }

    function ra(b, a) {
        if (D(b)) {
            a = a || [];
            for (var c = 0, d = b.length; c < d; c++) a[c] = b[c]
        } else if (I(b))
            for (c in a = a || {}, b)
                if ("$" !== c.charAt(0) || "$" !== c.charAt(1)) a[c] =
                    b[c];
        return a || b
    }

    function fa(b, a) {
        if (b === a) return !0;
        if (null === b || null === a) return !1;
        if (b !== b && a !== a) return !0;
        var c = typeof b,
            d;
        if (c == typeof a && "object" == c)
            if (D(b)) {
                if (!D(a)) return !1;
                if ((c = b.length) == a.length) {
                    for (d = 0; d < c; d++)
                        if (!fa(b[d], a[d])) return !1;
                    return !0
                }
            } else {
                if (qa(b)) return qa(a) ? fa(b.getTime(), a.getTime()) : !1;
                if (ob(b) && ob(a)) return b.toString() == a.toString();
                if (Va(b) || Va(a) || Ua(b) || Ua(a) || D(a)) return !1;
                c = {};
                for (d in b)
                    if ("$" !== d.charAt(0) && !G(b[d])) {
                        if (!fa(b[d], a[d])) return !1;
                        c[d] = !0
                    }
                for (d in a)
                    if (!c.hasOwnProperty(d) &&
                        "$" !== d.charAt(0) && a[d] !== t && !G(a[d])) return !1;
                return !0
            }
        return !1
    }

    function Ya(b, a, c) {
        return b.concat(Za.call(a, c))
    }

    function nc(b, a) {
        var c = 2 < arguments.length ? Za.call(arguments, 2) : [];
        return !G(a) || a instanceof RegExp ? a : c.length ? function() {
            return arguments.length ? a.apply(b, Ya(c, arguments, 0)) : a.apply(b, c)
        } : function() {
            return arguments.length ? a.apply(b, arguments) : a.call(b)
        }
    }

    function Hd(b, a) {
        var c = a;
        "string" === typeof b && "$" === b.charAt(0) && "$" === b.charAt(1) ? c = t : Ua(a) ? c = "$WINDOW" : a && Y === a ? c = "$DOCUMENT" : Va(a) &&
            (c = "$SCOPE");
        return c
    }

    function $a(b, a) {
        if ("undefined" === typeof b) return t;
        V(a) || (a = a ? 2 : null);
        return JSON.stringify(b, Hd, a)
    }

    function oc(b) {
        return F(b) ? JSON.parse(b) : b
    }

    function va(b) {
        b = B(b).clone();
        try {
            b.empty()
        } catch (a) {}
        var c = B("<div>").append(b).html();
        try {
            return b[0].nodeType === pb ? Q(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
                return "<" + Q(b)
            })
        } catch (d) {
            return Q(c)
        }
    }

    function pc(b) {
        try {
            return decodeURIComponent(b)
        } catch (a) {}
    }

    function qc(b) {
        var a = {},
            c, d;
        s((b || "").split("&"), function(b) {
            b &&
                (c = b.replace(/\+/g, "%20").split("="), d = pc(c[0]), y(d) && (b = y(c[1]) ? pc(c[1]) : !0, rc.call(a, d) ? D(a[d]) ? a[d].push(b) : a[d] = [a[d], b] : a[d] = b))
        });
        return a
    }

    function Nb(b) {
        var a = [];
        s(b, function(b, d) {
            D(b) ? s(b, function(b) {
                a.push(Fa(d, !0) + (!0 === b ? "" : "=" + Fa(b, !0)))
            }) : a.push(Fa(d, !0) + (!0 === b ? "" : "=" + Fa(b, !0)))
        });
        return a.length ? a.join("&") : ""
    }

    function qb(b) {
        return Fa(b, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function Fa(b, a) {
        return encodeURIComponent(b).replace(/%40/gi, "@").replace(/%3A/gi,
            ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, a ? "%20" : "+")
    }

    function Id(b, a) {
        var c, d, e = rb.length;
        b = B(b);
        for (d = 0; d < e; ++d)
            if (c = rb[d] + a, F(c = b.attr(c))) return c;
        return null
    }

    function Jd(b, a) {
        var c, d, e = {};
        s(rb, function(a) {
            a += "app";
            !c && b.hasAttribute && b.hasAttribute(a) && (c = b, d = b.getAttribute(a))
        });
        s(rb, function(a) {
            a += "app";
            var e;
            !c && (e = b.querySelector("[" + a.replace(":", "\\:") + "]")) && (c = e, d = e.getAttribute(a))
        });
        c && (e.strictDi = null !== Id(c, "strict-di"), a(c, d ? [d] : [], e))
    }

    function sc(b,
        a, c) {
        I(c) || (c = {});
        c = z({
            strictDi: !1
        }, c);
        var d = function() {
                b = B(b);
                if (b.injector()) {
                    var d = b[0] === Y ? "document" : va(b);
                    throw Ka("btstrpd", d.replace(/</, "&lt;").replace(/>/, "&gt;"));
                }
                a = a || [];
                a.unshift(["$provide", function(a) {
                    a.value("$rootElement", b)
                }]);
                c.debugInfoEnabled && a.push(["$compileProvider", function(a) {
                    a.debugInfoEnabled(!0)
                }]);
                a.unshift("ng");
                d = Ob(a, c.strictDi);
                d.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(a, b, c, d) {
                    a.$apply(function() {
                        b.data("$injector", d);
                        c(b)(a)
                    })
                }]);
                return d
            },
            e = /^NG_ENABLE_DEBUG_INFO!/,
            f = /^NG_DEFER_BOOTSTRAP!/;
        M && e.test(M.name) && (c.debugInfoEnabled = !0, M.name = M.name.replace(e, ""));
        if (M && !f.test(M.name)) return d();
        M.name = M.name.replace(f, "");
        ga.resumeBootstrap = function(b) {
            s(b, function(b) {
                a.push(b)
            });
            d()
        }
    }

    function Kd() {
        M.name = "NG_ENABLE_DEBUG_INFO!" + M.name;
        M.location.reload()
    }

    function Ld(b) {
        b = ga.element(b).injector();
        if (!b) throw Ka("test");
        return b.get("$$testability")
    }

    function tc(b, a) {
        a = a || "_";
        return b.replace(Md, function(b, d) {
            return (d ? a : "") + b.toLowerCase()
        })
    }

    function Nd() {
        var b;
        uc || ((sa = M.jQuery) && sa.fn.on ? (B = sa, z(sa.fn, {
            scope: La.scope,
            isolateScope: La.isolateScope,
            controller: La.controller,
            injector: La.injector,
            inheritedData: La.inheritedData
        }), b = sa.cleanData, sa.cleanData = function(a) {
            var c;
            if (Pb) Pb = !1;
            else
                for (var d = 0, e; null != (e = a[d]); d++)(c = sa._data(e, "events")) && c.$destroy && sa(e).triggerHandler("$destroy");
            b(a)
        }) : B = R, ga.element = B, uc = !0)
    }

    function Qb(b, a, c) {
        if (!b) throw Ka("areq", a || "?", c || "required");
        return b
    }

    function sb(b, a, c) {
        c && D(b) && (b = b[b.length - 1]);
        Qb(G(b), a, "not a function, got " + (b && "object" === typeof b ? b.constructor.name || "Object" : typeof b));
        return b
    }

    function Ma(b, a) {
        if ("hasOwnProperty" === b) throw Ka("badname", a);
    }

    function vc(b, a, c) {
        if (!a) return b;
        a = a.split(".");
        for (var d, e = b, f = a.length, g = 0; g < f; g++) d = a[g], b && (b = (e = b)[d]);
        return !c && G(b) ? nc(e, b) : b
    }

    function tb(b) {
        var a = b[0];
        b = b[b.length - 1];
        var c = [a];
        do {
            a = a.nextSibling;
            if (!a) break;
            c.push(a)
        } while (a !== b);
        return B(c)
    }

    function ha() {
        return Object.create(null)
    }

    function Od(b) {
        function a(a, b, c) {
            return a[b] ||
                (a[b] = c())
        }
        var c = T("$injector"),
            d = T("ng");
        b = a(b, "angular", Object);
        b.$$minErr = b.$$minErr || T;
        return a(b, "module", function() {
            var b = {};
            return function(f, g, h) {
                if ("hasOwnProperty" === f) throw d("badname", "module");
                g && b.hasOwnProperty(f) && (b[f] = null);
                return a(b, f, function() {
                    function a(c, d, e, f) {
                        f || (f = b);
                        return function() {
                            f[e || "push"]([c, d, arguments]);
                            return u
                        }
                    }
                    if (!g) throw c("nomod", f);
                    var b = [],
                        d = [],
                        e = [],
                        q = a("$injector", "invoke", "push", d),
                        u = {
                            _invokeQueue: b,
                            _configBlocks: d,
                            _runBlocks: e,
                            requires: g,
                            name: f,
                            provider: a("$provide",
                                "provider"),
                            factory: a("$provide", "factory"),
                            service: a("$provide", "service"),
                            value: a("$provide", "value"),
                            constant: a("$provide", "constant", "unshift"),
                            animation: a("$animateProvider", "register"),
                            filter: a("$filterProvider", "register"),
                            controller: a("$controllerProvider", "register"),
                            directive: a("$compileProvider", "directive"),
                            config: q,
                            run: function(a) {
                                e.push(a);
                                return this
                            }
                        };
                    h && q(h);
                    return u
                })
            }
        })
    }

    function Pd(b) {
        z(b, {
            bootstrap: sc,
            copy: Ea,
            extend: z,
            equals: fa,
            element: B,
            forEach: s,
            injector: Ob,
            noop: H,
            bind: nc,
            toJson: $a,
            fromJson: oc,
            identity: pa,
            isUndefined: A,
            isDefined: y,
            isString: F,
            isFunction: G,
            isObject: I,
            isNumber: V,
            isElement: mc,
            isArray: D,
            version: Qd,
            isDate: qa,
            lowercase: Q,
            uppercase: ub,
            callbacks: {
                counter: 0
            },
            getTestability: Ld,
            $$minErr: T,
            $$csp: ab,
            reloadWithDebugInfo: Kd
        });
        bb = Od(M);
        try {
            bb("ngLocale")
        } catch (a) {
            bb("ngLocale", []).provider("$locale", Rd)
        }
        bb("ng", ["ngLocale"], ["$provide", function(a) {
            a.provider({
                $$sanitizeUri: Sd
            });
            a.provider("$compile", wc).directive({
                a: Td,
                input: xc,
                textarea: xc,
                form: Ud,
                script: Vd,
                select: Wd,
                style: Xd,
                option: Yd,
                ngBind: Zd,
                ngBindHtml: $d,
                ngBindTemplate: ae,
                ngClass: be,
                ngClassEven: ce,
                ngClassOdd: de,
                ngCloak: ee,
                ngController: fe,
                ngForm: ge,
                ngHide: he,
                ngIf: ie,
                ngInclude: je,
                ngInit: ke,
                ngNonBindable: le,
                ngPluralize: me,
                ngRepeat: ne,
                ngShow: oe,
                ngStyle: pe,
                ngSwitch: qe,
                ngSwitchWhen: re,
                ngSwitchDefault: se,
                ngOptions: te,
                ngTransclude: ue,
                ngModel: ve,
                ngList: we,
                ngChange: xe,
                pattern: yc,
                ngPattern: yc,
                required: zc,
                ngRequired: zc,
                minlength: Ac,
                ngMinlength: Ac,
                maxlength: Bc,
                ngMaxlength: Bc,
                ngValue: ye,
                ngModelOptions: ze
            }).directive({
                ngInclude: Ae
            }).directive(vb).directive(Cc);
            a.provider({
                $anchorScroll: Be,
                $animate: Ce,
                $browser: De,
                $cacheFactory: Ee,
                $controller: Fe,
                $document: Ge,
                $exceptionHandler: He,
                $filter: Dc,
                $interpolate: Ie,
                $interval: Je,
                $http: Ke,
                $httpBackend: Le,
                $location: Me,
                $log: Ne,
                $parse: Oe,
                $rootScope: Pe,
                $q: Qe,
                $$q: Re,
                $sce: Se,
                $sceDelegate: Te,
                $sniffer: Ue,
                $templateCache: Ve,
                $templateRequest: We,
                $$testability: Xe,
                $timeout: Ye,
                $window: Ze,
                $$rAF: $e,
                $$asyncCallback: af,
                $$jqLite: bf
            })
        }])
    }

    function cb(b) {
        return b.replace(cf, function(a, b, d, e) {
            return e ? d.toUpperCase() : d
        }).replace(df, "Moz$1")
    }

    function Ec(b) {
        b = b.nodeType;
        return b === oa || !b || 9 === b
    }

    function Fc(b, a) {
        var c, d, e = a.createDocumentFragment(),
            f = [];
        if (Rb.test(b)) {
            c = c || e.appendChild(a.createElement("div"));
            d = (ef.exec(b) || ["", ""])[1].toLowerCase();
            d = ia[d] || ia._default;
            c.innerHTML = d[1] + b.replace(ff, "<$1></$2>") + d[2];
            for (d = d[0]; d--;) c = c.lastChild;
            f = Ya(f, c.childNodes);
            c = e.firstChild;
            c.textContent = ""
        } else f.push(a.createTextNode(b));
        e.textContent = "";
        e.innerHTML = "";
        s(f, function(a) {
            e.appendChild(a)
        });
        return e
    }

    function R(b) {
        if (b instanceof R) return b;
        var a;
        F(b) && (b = U(b), a = !0);
        if (!(this instanceof R)) {
            if (a && "<" != b.charAt(0)) throw Sb("nosel");
            return new R(b)
        }
        if (a) {
            a = Y;
            var c;
            b = (c = gf.exec(b)) ? [a.createElement(c[1])] : (c = Fc(b, a)) ? c.childNodes : []
        }
        Gc(this, b)
    }

    function Tb(b) {
        return b.cloneNode(!0)
    }

    function wb(b, a) {
        a || xb(b);
        if (b.querySelectorAll)
            for (var c = b.querySelectorAll("*"), d = 0, e = c.length; d < e; d++) xb(c[d])
    }

    function Hc(b, a, c, d) {
        if (y(d)) throw Sb("offargs");
        var e = (d = yb(b)) && d.events,
            f = d && d.handle;
        if (f)
            if (a) s(a.split(" "), function(a) {
                if (y(c)) {
                    var d =
                        e[a];
                    Xa(d || [], c);
                    if (d && 0 < d.length) return
                }
                b.removeEventListener(a, f, !1);
                delete e[a]
            });
            else
                for (a in e) "$destroy" !== a && b.removeEventListener(a, f, !1), delete e[a]
    }

    function xb(b, a) {
        var c = b.ng339,
            d = c && zb[c];
        d && (a ? delete d.data[a] : (d.handle && (d.events.$destroy && d.handle({}, "$destroy"), Hc(b)), delete zb[c], b.ng339 = t))
    }

    function yb(b, a) {
        var c = b.ng339,
            c = c && zb[c];
        a && !c && (b.ng339 = c = ++hf, c = zb[c] = {
            events: {},
            data: {},
            handle: t
        });
        return c
    }

    function Ub(b, a, c) {
        if (Ec(b)) {
            var d = y(c),
                e = !d && a && !I(a),
                f = !a;
            b = (b = yb(b, !e)) && b.data;
            if (d) b[a] = c;
            else {
                if (f) return b;
                if (e) return b && b[a];
                z(b, a)
            }
        }
    }

    function Ab(b, a) {
        return b.getAttribute ? -1 < (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ") : !1
    }

    function Bb(b, a) {
        a && b.setAttribute && s(a.split(" "), function(a) {
            b.setAttribute("class", U((" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + U(a) + " ", " ")))
        })
    }

    function Cb(b, a) {
        if (a && b.setAttribute) {
            var c = (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            s(a.split(" "), function(a) {
                a =
                    U(a); - 1 === c.indexOf(" " + a + " ") && (c += a + " ")
            });
            b.setAttribute("class", U(c))
        }
    }

    function Gc(b, a) {
        if (a)
            if (a.nodeType) b[b.length++] = a;
            else {
                var c = a.length;
                if ("number" === typeof c && a.window !== a) {
                    if (c)
                        for (var d = 0; d < c; d++) b[b.length++] = a[d]
                } else b[b.length++] = a
            }
    }

    function Ic(b, a) {
        return Db(b, "$" + (a || "ngController") + "Controller")
    }

    function Db(b, a, c) {
        9 == b.nodeType && (b = b.documentElement);
        for (a = D(a) ? a : [a]; b;) {
            for (var d = 0, e = a.length; d < e; d++)
                if ((c = B.data(b, a[d])) !== t) return c;
            b = b.parentNode || 11 === b.nodeType && b.host
        }
    }

    function Jc(b) {
        for (wb(b, !0); b.firstChild;) b.removeChild(b.firstChild)
    }

    function Kc(b, a) {
        a || wb(b);
        var c = b.parentNode;
        c && c.removeChild(b)
    }

    function jf(b, a) {
        a = a || M;
        if ("complete" === a.document.readyState) a.setTimeout(b);
        else B(a).on("load", b)
    }

    function Lc(b, a) {
        var c = Eb[a.toLowerCase()];
        return c && Mc[ua(b)] && c
    }

    function kf(b, a) {
        var c = b.nodeName;
        return ("INPUT" === c || "TEXTAREA" === c) && Nc[a]
    }

    function lf(b, a) {
        var c = function(c, e) {
            c.isDefaultPrevented = function() {
                return c.defaultPrevented
            };
            var f = a[e || c.type],
                g = f ? f.length :
                0;
            if (g) {
                if (A(c.immediatePropagationStopped)) {
                    var h = c.stopImmediatePropagation;
                    c.stopImmediatePropagation = function() {
                        c.immediatePropagationStopped = !0;
                        c.stopPropagation && c.stopPropagation();
                        h && h.call(c)
                    }
                }
                c.isImmediatePropagationStopped = function() {
                    return !0 === c.immediatePropagationStopped
                };
                1 < g && (f = ra(f));
                for (var l = 0; l < g; l++) c.isImmediatePropagationStopped() || f[l].call(b, c)
            }
        };
        c.elem = b;
        return c
    }

    function bf() {
        this.$get = function() {
            return z(R, {
                hasClass: function(b, a) {
                    b.attr && (b = b[0]);
                    return Ab(b, a)
                },
                addClass: function(b,
                    a) {
                    b.attr && (b = b[0]);
                    return Cb(b, a)
                },
                removeClass: function(b, a) {
                    b.attr && (b = b[0]);
                    return Bb(b, a)
                }
            })
        }
    }

    function Na(b, a) {
        var c = b && b.$$hashKey;
        if (c) return "function" === typeof c && (c = b.$$hashKey()), c;
        c = typeof b;
        return c = "function" == c || "object" == c && null !== b ? b.$$hashKey = c + ":" + (a || Fd)() : c + ":" + b
    }

    function db(b, a) {
        if (a) {
            var c = 0;
            this.nextUid = function() {
                return ++c
            }
        }
        s(b, this.put, this)
    }

    function mf(b) {
        return (b = b.toString().replace(Oc, "").match(Pc)) ? "function(" + (b[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function Vb(b,
        a, c) {
        var d;
        if ("function" === typeof b) {
            if (!(d = b.$inject)) {
                d = [];
                if (b.length) {
                    if (a) throw F(c) && c || (c = b.name || mf(b)), Ga("strictdi", c);
                    a = b.toString().replace(Oc, "");
                    a = a.match(Pc);
                    s(a[1].split(nf), function(a) {
                        a.replace( of , function(a, b, c) {
                            d.push(c)
                        })
                    })
                }
                b.$inject = d
            }
        } else D(b) ? (a = b.length - 1, sb(b[a], "fn"), d = b.slice(0, a)) : sb(b, "fn", !0);
        return d
    }

    function Ob(b, a) {
        function c(a) {
            return function(b, c) {
                if (I(b)) s(b, kc(a));
                else return a(b, c)
            }
        }

        function d(a, b) {
            Ma(a, "service");
            if (G(b) || D(b)) b = q.instantiate(b);
            if (!b.$get) throw Ga("pget",
                a);
            return n[a + "Provider"] = b
        }

        function e(a, b) {
            return function() {
                var c = r.invoke(b, this);
                if (A(c)) throw Ga("undef", a);
                return c
            }
        }

        function f(a, b, c) {
            return d(a, {
                $get: !1 !== c ? e(a, b) : b
            })
        }

        function g(a) {
            var b = [],
                c;
            s(a, function(a) {
                function d(a) {
                    var b, c;
                    b = 0;
                    for (c = a.length; b < c; b++) {
                        var e = a[b],
                            f = q.get(e[0]);
                        f[e[1]].apply(f, e[2])
                    }
                }
                if (!m.get(a)) {
                    m.put(a, !0);
                    try {
                        F(a) ? (c = bb(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : G(a) ? b.push(q.invoke(a)) : D(a) ? b.push(q.invoke(a)) : sb(a, "module")
                    } catch (e) {
                        throw D(a) &&
                            (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Ga("modulerr", a, e.stack || e.message || e);
                    }
                }
            });
            return b
        }

        function h(b, c) {
            function d(a, e) {
                if (b.hasOwnProperty(a)) {
                    if (b[a] === l) throw Ga("cdep", a + " <- " + k.join(" <- "));
                    return b[a]
                }
                try {
                    return k.unshift(a), b[a] = l, b[a] = c(a, e)
                } catch (f) {
                    throw b[a] === l && delete b[a], f;
                } finally {
                    k.shift()
                }
            }

            function e(b, c, f, g) {
                "string" === typeof f && (g = f, f = null);
                var h = [],
                    k = Vb(b, a, g),
                    l, q, n;
                q = 0;
                for (l = k.length; q < l; q++) {
                    n = k[q];
                    if ("string" !==
                        typeof n) throw Ga("itkn", n);
                    h.push(f && f.hasOwnProperty(n) ? f[n] : d(n, g))
                }
                D(b) && (b = b[l]);
                return b.apply(c, h)
            }
            return {
                invoke: e,
                instantiate: function(a, b, c) {
                    var d = Object.create((D(a) ? a[a.length - 1] : a).prototype || null);
                    a = e(a, d, b, c);
                    return I(a) || G(a) ? a : d
                },
                get: d,
                annotate: Vb,
                has: function(a) {
                    return n.hasOwnProperty(a + "Provider") || b.hasOwnProperty(a)
                }
            }
        }
        a = !0 === a;
        var l = {},
            k = [],
            m = new db([], !0),
            n = {
                $provide: {
                    provider: c(d),
                    factory: c(f),
                    service: c(function(a, b) {
                        return f(a, ["$injector", function(a) {
                            return a.instantiate(b)
                        }])
                    }),
                    value: c(function(a, b) {
                        return f(a, da(b), !1)
                    }),
                    constant: c(function(a, b) {
                        Ma(a, "constant");
                        n[a] = b;
                        u[a] = b
                    }),
                    decorator: function(a, b) {
                        var c = q.get(a + "Provider"),
                            d = c.$get;
                        c.$get = function() {
                            var a = r.invoke(d, c);
                            return r.invoke(b, null, {
                                $delegate: a
                            })
                        }
                    }
                }
            },
            q = n.$injector = h(n, function(a, b) {
                ga.isString(b) && k.push(b);
                throw Ga("unpr", k.join(" <- "));
            }),
            u = {},
            r = u.$injector = h(u, function(a, b) {
                var c = q.get(a + "Provider", b);
                return r.invoke(c.$get, c, t, a)
            });
        s(g(b), function(a) {
            r.invoke(a || H)
        });
        return r
    }

    function Be() {
        var b = !0;
        this.disableAutoScrolling =
            function() {
                b = !1
            };
        this.$get = ["$window", "$location", "$rootScope", function(a, c, d) {
            function e(a) {
                var b = null;
                Array.prototype.some.call(a, function(a) {
                    if ("a" === ua(a)) return b = a, !0
                });
                return b
            }

            function f(b) {
                if (b) {
                    b.scrollIntoView();
                    var c;
                    c = g.yOffset;
                    G(c) ? c = c() : mc(c) ? (c = c[0], c = "fixed" !== a.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : V(c) || (c = 0);
                    c && (b = b.getBoundingClientRect().top, a.scrollBy(0, b - c))
                } else a.scrollTo(0, 0)
            }

            function g() {
                var a = c.hash(),
                    b;
                a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ?
                    f(b) : "top" === a && f(null) : f(null)
            }
            var h = a.document;
            b && d.$watch(function() {
                return c.hash()
            }, function(a, b) {
                a === b && "" === a || jf(function() {
                    d.$evalAsync(g)
                })
            });
            return g
        }]
    }

    function af() {
        this.$get = ["$$rAF", "$timeout", function(b, a) {
            return b.supported ? function(a) {
                return b(a)
            } : function(b) {
                return a(b, 0, !1)
            }
        }]
    }

    function pf(b, a, c, d) {
        function e(a) {
            try {
                a.apply(null, Za.call(arguments, 1))
            } finally {
                if (v--, 0 === v)
                    for (; w.length;) try {
                        w.pop()()
                    } catch (b) {
                        c.error(b)
                    }
            }
        }

        function f(a, b) {
            (function N() {
                s(L, function(a) {
                    a()
                });
                C = b(N,
                    a)
            })()
        }

        function g() {
            h();
            l()
        }

        function h() {
            x = b.history.state;
            x = A(x) ? null : x;
            fa(x, J) && (x = J);
            J = x
        }

        function l() {
            if (E !== m.url() || P !== x) E = m.url(), P = x, s(W, function(a) {
                a(m.url(), x)
            })
        }

        function k(a) {
            try {
                return decodeURIComponent(a)
            } catch (b) {
                return a
            }
        }
        var m = this,
            n = a[0],
            q = b.location,
            u = b.history,
            r = b.setTimeout,
            O = b.clearTimeout,
            p = {};
        m.isMock = !1;
        var v = 0,
            w = [];
        m.$$completeOutstandingRequest = e;
        m.$$incOutstandingRequestCount = function() {
            v++
        };
        m.notifyWhenNoOutstandingRequests = function(a) {
            s(L, function(a) {
                a()
            });
            0 === v ? a() :
                w.push(a)
        };
        var L = [],
            C;
        m.addPollFn = function(a) {
            A(C) && f(100, r);
            L.push(a);
            return a
        };
        var x, P, E = q.href,
            S = a.find("base"),
            X = null;
        h();
        P = x;
        m.url = function(a, c, e) {
            A(e) && (e = null);
            q !== b.location && (q = b.location);
            u !== b.history && (u = b.history);
            if (a) {
                var f = P === e;
                if (E === a && (!d.history || f)) return m;
                var g = E && Ha(E) === Ha(a);
                E = a;
                P = e;
                !d.history || g && f ? (g || (X = a), c ? q.replace(a) : g ? (c = q, e = a.indexOf("#"), a = -1 === e ? "" : a.substr(e + 1), c.hash = a) : q.href = a) : (u[c ? "replaceState" : "pushState"](e, "", a), h(), P = x);
                return m
            }
            return X || q.href.replace(/%27/g,
                "'")
        };
        m.state = function() {
            return x
        };
        var W = [],
            wa = !1,
            J = null;
        m.onUrlChange = function(a) {
            if (!wa) {
                if (d.history) B(b).on("popstate", g);
                B(b).on("hashchange", g);
                wa = !0
            }
            W.push(a);
            return a
        };
        m.$$checkUrlChange = l;
        m.baseHref = function() {
            var a = S.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        };
        var ea = {},
            y = "",
            ca = m.baseHref();
        m.cookies = function(a, b) {
            var d, e, f, g;
            if (a) b === t ? n.cookie = encodeURIComponent(a) + "=;path=" + ca + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : F(b) && (d = (n.cookie = encodeURIComponent(a) + "=" + encodeURIComponent(b) +
                ";path=" + ca).length + 1, 4096 < d && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!"));
            else {
                if (n.cookie !== y)
                    for (y = n.cookie, d = y.split("; "), ea = {}, f = 0; f < d.length; f++) e = d[f], g = e.indexOf("="), 0 < g && (a = k(e.substring(0, g)), ea[a] === t && (ea[a] = k(e.substring(g + 1))));
                return ea
            }
        };
        m.defer = function(a, b) {
            var c;
            v++;
            c = r(function() {
                delete p[c];
                e(a)
            }, b || 0);
            p[c] = !0;
            return c
        };
        m.defer.cancel = function(a) {
            return p[a] ? (delete p[a], O(a), e(H), !0) : !1
        }
    }

    function De() {
        this.$get = ["$window",
            "$log", "$sniffer", "$document",
            function(b, a, c, d) {
                return new pf(b, d, a, c)
            }
        ]
    }

    function Ee() {
        this.$get = function() {
            function b(b, d) {
                function e(a) {
                    a != n && (q ? q == a && (q = a.n) : q = a, f(a.n, a.p), f(a, n), n = a, n.n = null)
                }

                function f(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a))
                }
                if (b in a) throw T("$cacheFactory")("iid", b);
                var g = 0,
                    h = z({}, d, {
                        id: b
                    }),
                    l = {},
                    k = d && d.capacity || Number.MAX_VALUE,
                    m = {},
                    n = null,
                    q = null;
                return a[b] = {
                    put: function(a, b) {
                        if (k < Number.MAX_VALUE) {
                            var c = m[a] || (m[a] = {
                                key: a
                            });
                            e(c)
                        }
                        if (!A(b)) return a in l || g++, l[a] = b, g > k && this.remove(q.key),
                            b
                    },
                    get: function(a) {
                        if (k < Number.MAX_VALUE) {
                            var b = m[a];
                            if (!b) return;
                            e(b)
                        }
                        return l[a]
                    },
                    remove: function(a) {
                        if (k < Number.MAX_VALUE) {
                            var b = m[a];
                            if (!b) return;
                            b == n && (n = b.p);
                            b == q && (q = b.n);
                            f(b.n, b.p);
                            delete m[a]
                        }
                        delete l[a];
                        g--
                    },
                    removeAll: function() {
                        l = {};
                        g = 0;
                        m = {};
                        n = q = null
                    },
                    destroy: function() {
                        m = h = l = null;
                        delete a[b]
                    },
                    info: function() {
                        return z({}, h, {
                            size: g
                        })
                    }
                }
            }
            var a = {};
            b.info = function() {
                var b = {};
                s(a, function(a, e) {
                    b[e] = a.info()
                });
                return b
            };
            b.get = function(b) {
                return a[b]
            };
            return b
        }
    }

    function Ve() {
        this.$get = ["$cacheFactory",
            function(b) {
                return b("templates")
            }
        ]
    }

    function wc(b, a) {
        function c(a, b) {
            var c = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,
                d = {};
            s(a, function(a, e) {
                var f = a.match(c);
                if (!f) throw ja("iscp", b, e, a);
                d[e] = {
                    mode: f[1][0],
                    collection: "*" === f[2],
                    optional: "?" === f[3],
                    attrName: f[4] || e
                }
            });
            return d
        }
        var d = {},
            e = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
            f = /(([\w\-]+)(?:\:([^;]+))?;?)/,
            g = Gd("ngSrc,ngSrcset,src,srcset"),
            h = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
            l = /^(on[a-z]+|formaction)$/;
        this.directive = function n(a, e) {
            Ma(a, "directive");
            F(a) ? (Qb(e,
                "directiveFactory"), d.hasOwnProperty(a) || (d[a] = [], b.factory(a + "Directive", ["$injector", "$exceptionHandler", function(b, e) {
                var f = [];
                s(d[a], function(d, g) {
                    try {
                        var h = b.invoke(d);
                        G(h) ? h = {
                            compile: da(h)
                        } : !h.compile && h.link && (h.compile = da(h.link));
                        h.priority = h.priority || 0;
                        h.index = g;
                        h.name = h.name || a;
                        h.require = h.require || h.controller && h.name;
                        h.restrict = h.restrict || "EA";
                        I(h.scope) && (h.$$isolateBindings = c(h.scope, h.name));
                        f.push(h)
                    } catch (l) {
                        e(l)
                    }
                });
                return f
            }])), d[a].push(e)) : s(a, kc(n));
            return this
        };
        this.aHrefSanitizationWhitelist =
            function(b) {
                return y(b) ? (a.aHrefSanitizationWhitelist(b), this) : a.aHrefSanitizationWhitelist()
            };
        this.imgSrcSanitizationWhitelist = function(b) {
            return y(b) ? (a.imgSrcSanitizationWhitelist(b), this) : a.imgSrcSanitizationWhitelist()
        };
        var k = !0;
        this.debugInfoEnabled = function(a) {
            return y(a) ? (k = a, this) : k
        };
        this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(a, b, c, r, O, p, v, w, L, C, x) {
            function P(a, b) {
                try {
                    a.addClass(b)
                } catch (c) {}
            }

            function E(a, b, c, d, e) {
                a instanceof B || (a = B(a));
                s(a, function(b, c) {
                    b.nodeType == pb && b.nodeValue.match(/\S+/) && (a[c] = B(b).wrap("<span></span>").parent()[0])
                });
                var f = S(a, b, a, c, d, e);
                E.$$addScopeClass(a);
                var g = null;
                return function(b, c, d) {
                    Qb(b, "scope");
                    d = d || {};
                    var e = d.parentBoundTranscludeFn,
                        h = d.transcludeControllers;
                    d = d.futureParentElement;
                    e && e.$$boundTransclude && (e = e.$$boundTransclude);
                    g || (g = (d = d && d[0]) ? "foreignobject" !== ua(d) && d.toString().match(/SVG/) ? "svg" : "html" : "html");
                    d = "html" !== g ? B(Wb(g, B("<div>").append(a).html())) :
                        c ? La.clone.call(a) : a;
                    if (h)
                        for (var l in h) d.data("$" + l + "Controller", h[l].instance);
                    E.$$addScopeInfo(d, b);
                    c && c(d, b);
                    f && f(b, d, d, e);
                    return d
                }
            }

            function S(a, b, c, d, e, f) {
                function g(a, c, d, e) {
                    var f, l, k, q, n, p, w;
                    if (r)
                        for (w = Array(c.length), q = 0; q < h.length; q += 3) f = h[q], w[f] = c[f];
                    else w = c;
                    q = 0;
                    for (n = h.length; q < n;) l = w[h[q++]], c = h[q++], f = h[q++], c ? (c.scope ? (k = a.$new(), E.$$addScopeInfo(B(l), k)) : k = a, p = c.transcludeOnThisElement ? X(a, c.transclude, e, c.elementTranscludeOnThisElement) : !c.templateOnThisElement && e ? e : !e && b ? X(a,
                        b) : null, c(f, k, l, d, p)) : f && f(a, l.childNodes, t, e)
                }
                for (var h = [], l, k, q, n, r, p = 0; p < a.length; p++) {
                    l = new Xb;
                    k = W(a[p], [], l, 0 === p ? d : t, e);
                    (f = k.length ? ea(k, a[p], l, b, c, null, [], [], f) : null) && f.scope && E.$$addScopeClass(l.$$element);
                    l = f && f.terminal || !(q = a[p].childNodes) || !q.length ? null : S(q, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);
                    if (f || l) h.push(p, f, l), n = !0, r = r || f;
                    f = null
                }
                return n ? g : null
            }

            function X(a, b, c, d) {
                return function(d, e, f, g, h) {
                    d || (d = a.$new(!1, h), d.$$transcluded = !0);
                    return b(d, e, {
                        parentBoundTranscludeFn: c,
                        transcludeControllers: f,
                        futureParentElement: g
                    })
                }
            }

            function W(a, b, c, d, g) {
                var h = c.$attr,
                    l;
                switch (a.nodeType) {
                    case oa:
                        ca(b, ya(ua(a)), "E", d, g);
                        for (var k, q, n, r = a.attributes, p = 0, w = r && r.length; p < w; p++) {
                            var O = !1,
                                L = !1;
                            k = r[p];
                            l = k.name;
                            q = U(k.value);
                            k = ya(l);
                            if (n = fb.test(k)) l = l.replace(Rc, "").substr(8).replace(/_(.)/g, function(a, b) {
                                return b.toUpperCase()
                            });
                            var u = k.replace(/(Start|End)$/, "");
                            A(u) && k === u + "Start" && (O = l, L = l.substr(0, l.length - 5) + "end", l = l.substr(0, l.length - 6));
                            k = ya(l.toLowerCase());
                            h[k] = l;
                            if (n || !c.hasOwnProperty(k)) c[k] = q, Lc(a, k) && (c[k] = !0);
                            Pa(a, b, q, k, n);
                            ca(b, k, "A", d, g, O, L)
                        }
                        a = a.className;
                        I(a) && (a = a.animVal);
                        if (F(a) && "" !== a)
                            for (; l = f.exec(a);) k = ya(l[2]), ca(b, k, "C", d, g) && (c[k] = U(l[3])), a = a.substr(l.index + l[0].length);
                        break;
                    case pb:
                        M(b, a.nodeValue);
                        break;
                    case 8:
                        try {
                            if (l = e.exec(a.nodeValue)) k = ya(l[1]), ca(b, k, "M", d, g) && (c[k] = U(l[2]))
                        } catch (v) {}
                }
                b.sort(N);
                return b
            }

            function wa(a, b, c) {
                var d = [],
                    e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a) throw ja("uterdir", b, c);
                        a.nodeType ==
                            oa && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
                        d.push(a);
                        a = a.nextSibling
                    } while (0 < e)
                } else d.push(a);
                return B(d)
            }

            function J(a, b, c) {
                return function(d, e, f, g, h) {
                    e = wa(e[0], b, c);
                    return a(d, e, f, g, h)
                }
            }

            function ea(a, d, e, f, g, l, k, n, r) {
                function w(a, b, c, d) {
                    if (a) {
                        c && (a = J(a, c, d));
                        a.require = K.require;
                        a.directiveName = z;
                        if (S === K || K.$$isolateScope) a = Z(a, {
                            isolateScope: !0
                        });
                        k.push(a)
                    }
                    if (b) {
                        c && (b = J(b, c, d));
                        b.require = K.require;
                        b.directiveName = z;
                        if (S === K || K.$$isolateScope) b = Z(b, {
                            isolateScope: !0
                        });
                        n.push(b)
                    }
                }

                function L(a,
                    b, c, d) {
                    var e, f = "data",
                        g = !1,
                        l = c,
                        k;
                    if (F(b)) {
                        k = b.match(h);
                        b = b.substring(k[0].length);
                        k[3] && (k[1] ? k[3] = null : k[1] = k[3]);
                        "^" === k[1] ? f = "inheritedData" : "^^" === k[1] && (f = "inheritedData", l = c.parent());
                        "?" === k[2] && (g = !0);
                        e = null;
                        d && "data" === f && (e = d[b]) && (e = e.instance);
                        e = e || l[f]("$" + b + "Controller");
                        if (!e && !g) throw ja("ctreq", b, a);
                        return e || null
                    }
                    D(b) && (e = [], s(b, function(b) {
                        e.push(L(a, b, c, d))
                    }));
                    return e
                }

                function v(a, c, f, g, h) {
                    function l(a, b, c) {
                        var d;
                        Va(a) || (c = b, b = a, a = t);
                        H && (d = P);
                        c || (c = H ? W.parent() : W);
                        return h(a,
                            b, d, c, wa)
                    }
                    var r, w, u, x, P, eb, W, J;
                    d === f ? (J = e, W = e.$$element) : (W = B(f), J = new Xb(W, e));
                    S && (x = c.$new(!0));
                    h && (eb = l, eb.$$boundTransclude = h);
                    C && (X = {}, P = {}, s(C, function(a) {
                        var b = {
                            $scope: a === S || a.$$isolateScope ? x : c,
                            $element: W,
                            $attrs: J,
                            $transclude: eb
                        };
                        u = a.controller;
                        "@" == u && (u = J[a.name]);
                        b = p(u, b, !0, a.controllerAs);
                        P[a.name] = b;
                        H || W.data("$" + a.name + "Controller", b.instance);
                        X[a.name] = b
                    }));
                    if (S) {
                        E.$$addScopeInfo(W, x, !0, !(ka && (ka === S || ka === S.$$originalDirective)));
                        E.$$addScopeClass(W, !0);
                        g = X && X[S.name];
                        var xa = x;
                        g &&
                            g.identifier && !0 === S.bindToController && (xa = g.instance);
                        s(x.$$isolateBindings = S.$$isolateBindings, function(a, d) {
                            var e = a.attrName,
                                f = a.optional,
                                g, h, l, k;
                            switch (a.mode) {
                                case "@":
                                    J.$observe(e, function(a) {
                                        xa[d] = a
                                    });
                                    J.$$observers[e].$$scope = c;
                                    J[e] && (xa[d] = b(J[e])(c));
                                    break;
                                case "=":
                                    if (f && !J[e]) break;
                                    h = O(J[e]);
                                    k = h.literal ? fa : function(a, b) {
                                        return a === b || a !== a && b !== b
                                    };
                                    l = h.assign || function() {
                                        g = xa[d] = h(c);
                                        throw ja("nonassign", J[e], S.name);
                                    };
                                    g = xa[d] = h(c);
                                    f = function(a) {
                                        k(a, xa[d]) || (k(a, g) ? l(c, a = xa[d]) : xa[d] = a);
                                        return g = a
                                    };
                                    f.$stateful = !0;
                                    f = a.collection ? c.$watchCollection(J[e], f) : c.$watch(O(J[e], f), null, h.literal);
                                    x.$on("$destroy", f);
                                    break;
                                case "&":
                                    h = O(J[e]), xa[d] = function(a) {
                                        return h(c, a)
                                    }
                            }
                        })
                    }
                    X && (s(X, function(a) {
                        a()
                    }), X = null);
                    g = 0;
                    for (r = k.length; g < r; g++) w = k[g], $(w, w.isolateScope ? x : c, W, J, w.require && L(w.directiveName, w.require, W, P), eb);
                    var wa = c;
                    S && (S.template || null === S.templateUrl) && (wa = x);
                    a && a(wa, f.childNodes, t, h);
                    for (g = n.length - 1; 0 <= g; g--) w = n[g], $(w, w.isolateScope ? x : c, W, J, w.require && L(w.directiveName, w.require,
                        W, P), eb)
                }
                r = r || {};
                for (var x = -Number.MAX_VALUE, P, C = r.controllerDirectives, X, S = r.newIsolateScopeDirective, ka = r.templateDirective, ea = r.nonTlbTranscludeDirective, ca = !1, A = !1, H = r.hasElementTranscludeDirective, aa = e.$$element = B(d), K, z, N, Aa = f, Q, M = 0, R = a.length; M < R; M++) {
                    K = a[M];
                    var Pa = K.$$start,
                        fb = K.$$end;
                    Pa && (aa = wa(d, Pa, fb));
                    N = t;
                    if (x > K.priority) break;
                    if (N = K.scope) K.templateUrl || (I(N) ? (Oa("new/isolated scope", S || P, K, aa), S = K) : Oa("new/isolated scope", S, K, aa)), P = P || K;
                    z = K.name;
                    !K.templateUrl && K.controller && (N = K.controller,
                        C = C || {}, Oa("'" + z + "' controller", C[z], K, aa), C[z] = K);
                    if (N = K.transclude) ca = !0, K.$$tlb || (Oa("transclusion", ea, K, aa), ea = K), "element" == N ? (H = !0, x = K.priority, N = aa, aa = e.$$element = B(Y.createComment(" " + z + ": " + e[z] + " ")), d = aa[0], V(g, Za.call(N, 0), d), Aa = E(N, f, x, l && l.name, {
                        nonTlbTranscludeDirective: ea
                    })) : (N = B(Tb(d)).contents(), aa.empty(), Aa = E(N, f));
                    if (K.template)
                        if (A = !0, Oa("template", ka, K, aa), ka = K, N = G(K.template) ? K.template(aa, e) : K.template, N = Sc(N), K.replace) {
                            l = K;
                            N = Rb.test(N) ? Tc(Wb(K.templateNamespace, U(N))) : [];
                            d = N[0];
                            if (1 != N.length || d.nodeType !== oa) throw ja("tplrt", z, "");
                            V(g, aa, d);
                            R = {
                                $attr: {}
                            };
                            N = W(d, [], R);
                            var ba = a.splice(M + 1, a.length - (M + 1));
                            S && y(N);
                            a = a.concat(N).concat(ba);
                            Qc(e, R);
                            R = a.length
                        } else aa.html(N);
                    if (K.templateUrl) A = !0, Oa("template", ka, K, aa), ka = K, K.replace && (l = K), v = T(a.splice(M, a.length - M), aa, e, g, ca && Aa, k, n, {
                        controllerDirectives: C,
                        newIsolateScopeDirective: S,
                        templateDirective: ka,
                        nonTlbTranscludeDirective: ea
                    }), R = a.length;
                    else if (K.compile) try {
                        Q = K.compile(aa, e, Aa), G(Q) ? w(null, Q, Pa, fb) : Q && w(Q.pre,
                            Q.post, Pa, fb)
                    } catch (qf) {
                        c(qf, va(aa))
                    }
                    K.terminal && (v.terminal = !0, x = Math.max(x, K.priority))
                }
                v.scope = P && !0 === P.scope;
                v.transcludeOnThisElement = ca;
                v.elementTranscludeOnThisElement = H;
                v.templateOnThisElement = A;
                v.transclude = Aa;
                r.hasElementTranscludeDirective = H;
                return v
            }

            function y(a) {
                for (var b = 0, c = a.length; b < c; b++) {
                    var d = b,
                        e;
                    e = z(Object.create(a[b]), {
                        $$isolateScope: !0
                    });
                    a[d] = e
                }
            }

            function ca(b, e, f, g, h, l, k) {
                if (e === h) return null;
                h = null;
                if (d.hasOwnProperty(e)) {
                    var q;
                    e = a.get(e + "Directive");
                    for (var r = 0, p = e.length; r <
                        p; r++) try {
                        if (q = e[r], (g === t || g > q.priority) && -1 != q.restrict.indexOf(f)) {
                            if (l) {
                                var w = {
                                    $$start: l,
                                    $$end: k
                                };
                                q = z(Object.create(q), w)
                            }
                            b.push(q);
                            h = q
                        }
                    } catch (O) {
                        c(O)
                    }
                }
                return h
            }

            function A(b) {
                if (d.hasOwnProperty(b))
                    for (var c = a.get(b + "Directive"), e = 0, f = c.length; e < f; e++)
                        if (b = c[e], b.multiElement) return !0;
                return !1
            }

            function Qc(a, b) {
                var c = b.$attr,
                    d = a.$attr,
                    e = a.$$element;
                s(a, function(d, e) {
                    "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                });
                s(b, function(b, f) {
                    "class" == f ? (P(e, b), a["class"] =
                        (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
                })
            }

            function T(a, b, c, d, e, f, g, h) {
                var l = [],
                    k, q, n = b[0],
                    p = a.shift(),
                    w = z({}, p, {
                        templateUrl: null,
                        transclude: null,
                        replace: null,
                        $$originalDirective: p
                    }),
                    O = G(p.templateUrl) ? p.templateUrl(b, c) : p.templateUrl,
                    u = p.templateNamespace;
                b.empty();
                r(L.getTrustedResourceUrl(O)).then(function(r) {
                    var L, v;
                    r = Sc(r);
                    if (p.replace) {
                        r = Rb.test(r) ? Tc(Wb(u,
                            U(r))) : [];
                        L = r[0];
                        if (1 != r.length || L.nodeType !== oa) throw ja("tplrt", p.name, O);
                        r = {
                            $attr: {}
                        };
                        V(d, b, L);
                        var x = W(L, [], r);
                        I(p.scope) && y(x);
                        a = x.concat(a);
                        Qc(c, r)
                    } else L = n, b.html(r);
                    a.unshift(w);
                    k = ea(a, L, c, e, b, p, f, g, h);
                    s(d, function(a, c) {
                        a == L && (d[c] = b[0])
                    });
                    for (q = S(b[0].childNodes, e); l.length;) {
                        r = l.shift();
                        v = l.shift();
                        var C = l.shift(),
                            E = l.shift(),
                            x = b[0];
                        if (!r.$$destroyed) {
                            if (v !== n) {
                                var J = v.className;
                                h.hasElementTranscludeDirective && p.replace || (x = Tb(L));
                                V(C, B(v), x);
                                P(B(x), J)
                            }
                            v = k.transcludeOnThisElement ? X(r, k.transclude,
                                E) : E;
                            k(q, r, x, d, v)
                        }
                    }
                    l = null
                });
                return function(a, b, c, d, e) {
                    a = e;
                    b.$$destroyed || (l ? l.push(b, c, d, a) : (k.transcludeOnThisElement && (a = X(b, k.transclude, e)), k(q, b, c, d, a)))
                }
            }

            function N(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
            }

            function Oa(a, b, c, d) {
                if (b) throw ja("multidir", b.name, c.name, a, va(d));
            }

            function M(a, c) {
                var d = b(c, !0);
                d && a.push({
                    priority: 0,
                    compile: function(a) {
                        a = a.parent();
                        var b = !!a.length;
                        b && E.$$addBindingClass(a);
                        return function(a, c) {
                            var e = c.parent();
                            b || E.$$addBindingClass(e);
                            E.$$addBindingInfo(e, d.expressions);
                            a.$watch(d, function(a) {
                                c[0].nodeValue = a
                            })
                        }
                    }
                })
            }

            function Wb(a, b) {
                a = Q(a || "html");
                switch (a) {
                    case "svg":
                    case "math":
                        var c = Y.createElement("div");
                        c.innerHTML = "<" + a + ">" + b + "</" + a + ">";
                        return c.childNodes[0].childNodes;
                    default:
                        return b
                }
            }

            function R(a, b) {
                if ("srcdoc" == b) return L.HTML;
                var c = ua(a);
                if ("xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b)) return L.RESOURCE_URL
            }

            function Pa(a, c, d, e, f) {
                var h = R(a, e);
                f = g[e] || f;
                var k = b(d, !0,
                    h, f);
                if (k) {
                    if ("multiple" === e && "select" === ua(a)) throw ja("selmulti", va(a));
                    c.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(a, c, g) {
                                    c = g.$$observers || (g.$$observers = {});
                                    if (l.test(e)) throw ja("nodomevents");
                                    var n = g[e];
                                    n !== d && (k = n && b(n, !0, h, f), d = n);
                                    k && (g[e] = k(a), (c[e] || (c[e] = [])).$$inter = !0, (g.$$observers && g.$$observers[e].$$scope || a).$watch(k, function(a, b) {
                                        "class" === e && a != b ? g.$updateClass(a, b) : g.$set(e, a)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function V(a, b, c) {
                var d = b[0],
                    e = b.length,
                    f = d.parentNode,
                    g, h;
                if (a)
                    for (g = 0, h = a.length; g <
                        h; g++)
                        if (a[g] == d) {
                            a[g++] = c;
                            h = g + e - 1;
                            for (var l = a.length; g < l; g++, h++) h < l ? a[g] = a[h] : delete a[g];
                            a.length -= e - 1;
                            a.context === d && (a.context = c);
                            break
                        }
                f && f.replaceChild(c, d);
                a = Y.createDocumentFragment();
                a.appendChild(d);
                B(c).data(B(d).data());
                sa ? (Pb = !0, sa.cleanData([d])) : delete B.cache[d[B.expando]];
                d = 1;
                for (e = b.length; d < e; d++) f = b[d], B(f).remove(), a.appendChild(f), delete b[d];
                b[0] = c;
                b.length = 1
            }

            function Z(a, b) {
                return z(function() {
                    return a.apply(null, arguments)
                }, a, b)
            }

            function $(a, b, d, e, f, g) {
                try {
                    a(b, d, e, f, g)
                } catch (h) {
                    c(h,
                        va(d))
                }
            }
            var Xb = function(a, b) {
                if (b) {
                    var c = Object.keys(b),
                        d, e, f;
                    d = 0;
                    for (e = c.length; d < e; d++) f = c[d], this[f] = b[f]
                } else this.$attr = {};
                this.$$element = a
            };
            Xb.prototype = {
                $normalize: ya,
                $addClass: function(a) {
                    a && 0 < a.length && C.addClass(this.$$element, a)
                },
                $removeClass: function(a) {
                    a && 0 < a.length && C.removeClass(this.$$element, a)
                },
                $updateClass: function(a, b) {
                    var c = Uc(a, b);
                    c && c.length && C.addClass(this.$$element, c);
                    (c = Uc(b, a)) && c.length && C.removeClass(this.$$element, c)
                },
                $set: function(a, b, d, e) {
                    var f = this.$$element[0],
                        g =
                        Lc(f, a),
                        h = kf(f, a),
                        f = a;
                    g ? (this.$$element.prop(a, b), e = g) : h && (this[h] = b, f = h);
                    this[a] = b;
                    e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = tc(a, "-"));
                    g = ua(this.$$element);
                    if ("a" === g && "href" === a || "img" === g && "src" === a) this[a] = b = x(b, "src" === a);
                    else if ("img" === g && "srcset" === a) {
                        for (var g = "", h = U(b), l = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, l = /\s/.test(h) ? l : /(,)/, h = h.split(l), l = Math.floor(h.length / 2), k = 0; k < l; k++) var q = 2 * k,
                            g = g + x(U(h[q]), !0),
                            g = g + (" " + U(h[q + 1]));
                        h = U(h[2 * k]).split(/\s/);
                        g += x(U(h[0]), !0);
                        2 === h.length &&
                            (g += " " + U(h[1]));
                        this[a] = b = g
                    }!1 !== d && (null === b || b === t ? this.$$element.removeAttr(e) : this.$$element.attr(e, b));
                    (a = this.$$observers) && s(a[f], function(a) {
                        try {
                            a(b)
                        } catch (d) {
                            c(d)
                        }
                    })
                },
                $observe: function(a, b) {
                    var c = this,
                        d = c.$$observers || (c.$$observers = ha()),
                        e = d[a] || (d[a] = []);
                    e.push(b);
                    v.$evalAsync(function() {
                        !e.$$inter && c.hasOwnProperty(a) && b(c[a])
                    });
                    return function() {
                        Xa(e, b)
                    }
                }
            };
            var Aa = b.startSymbol(),
                ka = b.endSymbol(),
                Sc = "{{" == Aa || "}}" == ka ? pa : function(a) {
                    return a.replace(/\{\{/g, Aa).replace(/}}/g, ka)
                },
                fb =
                /^ngAttr[A-Z]/;
            E.$$addBindingInfo = k ? function(a, b) {
                var c = a.data("$binding") || [];
                D(b) ? c = c.concat(b) : c.push(b);
                a.data("$binding", c)
            } : H;
            E.$$addBindingClass = k ? function(a) {
                P(a, "ng-binding")
            } : H;
            E.$$addScopeInfo = k ? function(a, b, c, d) {
                a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b)
            } : H;
            E.$$addScopeClass = k ? function(a, b) {
                P(a, b ? "ng-isolate-scope" : "ng-scope")
            } : H;
            return E
        }]
    }

    function ya(b) {
        return cb(b.replace(Rc, ""))
    }

    function Uc(b, a) {
        var c = "",
            d = b.split(/\s+/),
            e = a.split(/\s+/),
            f = 0;
        a: for (; f < d.length; f++) {
            for (var g =
                    d[f], h = 0; h < e.length; h++)
                if (g == e[h]) continue a;
            c += (0 < c.length ? " " : "") + g
        }
        return c
    }

    function Tc(b) {
        b = B(b);
        var a = b.length;
        if (1 >= a) return b;
        for (; a--;) 8 === b[a].nodeType && rf.call(b, a, 1);
        return b
    }

    function Fe() {
        var b = {},
            a = !1,
            c = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function(a, c) {
            Ma(a, "controller");
            I(a) ? z(b, a) : b[a] = c
        };
        this.allowGlobals = function() {
            a = !0
        };
        this.$get = ["$injector", "$window", function(d, e) {
            function f(a, b, c, d) {
                if (!a || !I(a.$scope)) throw T("$controller")("noscp", d, b);
                a.$scope[b] = c
            }
            return function(g, h,
                l, k) {
                var m, n, q;
                l = !0 === l;
                k && F(k) && (q = k);
                F(g) && (k = g.match(c), n = k[1], q = q || k[3], g = b.hasOwnProperty(n) ? b[n] : vc(h.$scope, n, !0) || (a ? vc(e, n, !0) : t), sb(g, n, !0));
                if (l) return l = (D(g) ? g[g.length - 1] : g).prototype, m = Object.create(l || null), q && f(h, q, m, n || g.name), z(function() {
                    d.invoke(g, m, h, n);
                    return m
                }, {
                    instance: m,
                    identifier: q
                });
                m = d.instantiate(g, h, n);
                q && f(h, q, m, n || g.name);
                return m
            }
        }]
    }

    function Ge() {
        this.$get = ["$window", function(b) {
            return B(b.document)
        }]
    }

    function He() {
        this.$get = ["$log", function(b) {
            return function(a,
                c) {
                b.error.apply(b, arguments)
            }
        }]
    }

    function Yb(b, a) {
        if (F(b)) {
            var c = b.replace(sf, "").trim();
            if (c) {
                var d = a("Content-Type");
                (d = d && 0 === d.indexOf(Vc)) || (d = (d = c.match(tf)) && uf[d[0]].test(c));
                d && (b = oc(c))
            }
        }
        return b
    }

    function Wc(b) {
        var a = ha(),
            c, d, e;
        if (!b) return a;
        s(b.split("\n"), function(b) {
            e = b.indexOf(":");
            c = Q(U(b.substr(0, e)));
            d = U(b.substr(e + 1));
            c && (a[c] = a[c] ? a[c] + ", " + d : d)
        });
        return a
    }

    function Xc(b) {
        var a = I(b) ? b : t;
        return function(c) {
            a || (a = Wc(b));
            return c ? (c = a[Q(c)], void 0 === c && (c = null), c) : a
        }
    }

    function Yc(b,
        a, c, d) {
        if (G(d)) return d(b, a, c);
        s(d, function(d) {
            b = d(b, a, c)
        });
        return b
    }

    function Ke() {
        var b = this.defaults = {
                transformResponse: [Yb],
                transformRequest: [function(a) {
                    return I(a) && "[object File]" !== Da.call(a) && "[object Blob]" !== Da.call(a) && "[object FormData]" !== Da.call(a) ? $a(a) : a
                }],
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    post: ra(Zb),
                    put: ra(Zb),
                    patch: ra(Zb)
                },
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN"
            },
            a = !1;
        this.useApplyAsync = function(b) {
            return y(b) ? (a = !!b, this) : a
        };
        var c = this.interceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(d, e, f, g, h, l) {
            function k(a) {
                function c(a) {
                    var b = z({}, a);
                    b.data = a.data ? Yc(a.data, a.headers, a.status, e.transformResponse) : a.data;
                    a = a.status;
                    return 200 <= a && 300 > a ? b : h.reject(b)
                }

                function d(a) {
                    var b, c = {};
                    s(a, function(a, d) {
                        G(a) ? (b = a(), null != b && (c[d] = b)) : c[d] = a
                    });
                    return c
                }
                if (!ga.isObject(a)) throw T("$http")("badreq", a);
                var e = z({
                        method: "get",
                        transformRequest: b.transformRequest,
                        transformResponse: b.transformResponse
                    },
                    a);
                e.headers = function(a) {
                    var c = b.headers,
                        e = z({}, a.headers),
                        f, g, c = z({}, c.common, c[Q(a.method)]);
                    a: for (f in c) {
                        a = Q(f);
                        for (g in e)
                            if (Q(g) === a) continue a;
                        e[f] = c[f]
                    }
                    return d(e)
                }(a);
                e.method = ub(e.method);
                var f = [function(a) {
                        var d = a.headers,
                            e = Yc(a.data, Xc(d), t, a.transformRequest);
                        A(e) && s(d, function(a, b) {
                            "content-type" === Q(b) && delete d[b]
                        });
                        A(a.withCredentials) && !A(b.withCredentials) && (a.withCredentials = b.withCredentials);
                        return m(a, e).then(c, c)
                    }, t],
                    g = h.when(e);
                for (s(u, function(a) {
                        (a.request || a.requestError) &&
                        f.unshift(a.request, a.requestError);
                        (a.response || a.responseError) && f.push(a.response, a.responseError)
                    }); f.length;) {
                    a = f.shift();
                    var l = f.shift(),
                        g = g.then(a, l)
                }
                g.success = function(a) {
                    g.then(function(b) {
                        a(b.data, b.status, b.headers, e)
                    });
                    return g
                };
                g.error = function(a) {
                    g.then(null, function(b) {
                        a(b.data, b.status, b.headers, e)
                    });
                    return g
                };
                return g
            }

            function m(c, f) {
                function l(b, c, d, e) {
                    function f() {
                        m(c, b, d, e)
                    }
                    P && (200 <= b && 300 > b ? P.put(X, [b, c, Wc(d), e]) : P.remove(X));
                    a ? g.$applyAsync(f) : (f(), g.$$phase || g.$apply())
                }

                function m(a,
                    b, d, e) {
                    b = Math.max(b, 0);
                    (200 <= b && 300 > b ? C.resolve : C.reject)({
                        data: a,
                        status: b,
                        headers: Xc(d),
                        config: c,
                        statusText: e
                    })
                }

                function w(a) {
                    m(a.data, a.status, ra(a.headers()), a.statusText)
                }

                function u() {
                    var a = k.pendingRequests.indexOf(c); - 1 !== a && k.pendingRequests.splice(a, 1)
                }
                var C = h.defer(),
                    x = C.promise,
                    P, E, s = c.headers,
                    X = n(c.url, c.params);
                k.pendingRequests.push(c);
                x.then(u, u);
                !c.cache && !b.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (P = I(c.cache) ? c.cache : I(b.cache) ? b.cache : q);
                P && (E = P.get(X), y(E) ? E &&
                    G(E.then) ? E.then(w, w) : D(E) ? m(E[1], E[0], ra(E[2]), E[3]) : m(E, 200, {}, "OK") : P.put(X, x));
                A(E) && ((E = Zc(c.url) ? e.cookies()[c.xsrfCookieName || b.xsrfCookieName] : t) && (s[c.xsrfHeaderName || b.xsrfHeaderName] = E), d(c.method, X, f, l, s, c.timeout, c.withCredentials, c.responseType));
                return x
            }

            function n(a, b) {
                if (!b) return a;
                var c = [];
                Ed(b, function(a, b) {
                    null === a || A(a) || (D(a) || (a = [a]), s(a, function(a) {
                        I(a) && (a = qa(a) ? a.toISOString() : $a(a));
                        c.push(Fa(b) + "=" + Fa(a))
                    }))
                });
                0 < c.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&"));
                return a
            }
            var q = f("$http"),
                u = [];
            s(c, function(a) {
                u.unshift(F(a) ? l.get(a) : l.invoke(a))
            });
            k.pendingRequests = [];
            (function(a) {
                s(arguments, function(a) {
                    k[a] = function(b, c) {
                        return k(z(c || {}, {
                            method: a,
                            url: b
                        }))
                    }
                })
            })("get", "delete", "head", "jsonp");
            (function(a) {
                s(arguments, function(a) {
                    k[a] = function(b, c, d) {
                        return k(z(d || {}, {
                            method: a,
                            url: b,
                            data: c
                        }))
                    }
                })
            })("post", "put", "patch");
            k.defaults = b;
            return k
        }]
    }

    function vf() {
        return new M.XMLHttpRequest
    }

    function Le() {
        this.$get = ["$browser", "$window", "$document", function(b, a, c) {
            return wf(b,
                vf, b.defer, a.angular.callbacks, c[0])
        }]
    }

    function wf(b, a, c, d, e) {
        function f(a, b, c) {
            var f = e.createElement("script"),
                m = null;
            f.type = "text/javascript";
            f.src = a;
            f.async = !0;
            m = function(a) {
                f.removeEventListener("load", m, !1);
                f.removeEventListener("error", m, !1);
                e.body.removeChild(f);
                f = null;
                var g = -1,
                    u = "unknown";
                a && ("load" !== a.type || d[b].called || (a = {
                    type: "error"
                }), u = a.type, g = "error" === a.type ? 404 : 200);
                c && c(g, u)
            };
            f.addEventListener("load", m, !1);
            f.addEventListener("error", m, !1);
            e.body.appendChild(f);
            return m
        }
        return function(e,
            h, l, k, m, n, q, u) {
            function r() {
                v && v();
                w && w.abort()
            }

            function O(a, d, e, f, g) {
                C !== t && c.cancel(C);
                v = w = null;
                a(d, e, f, g);
                b.$$completeOutstandingRequest(H)
            }
            b.$$incOutstandingRequestCount();
            h = h || b.url();
            if ("jsonp" == Q(e)) {
                var p = "_" + (d.counter++).toString(36);
                d[p] = function(a) {
                    d[p].data = a;
                    d[p].called = !0
                };
                var v = f(h.replace("JSON_CALLBACK", "angular.callbacks." + p), p, function(a, b) {
                    O(k, a, d[p].data, "", b);
                    d[p] = H
                })
            } else {
                var w = a();
                w.open(e, h, !0);
                s(m, function(a, b) {
                    y(a) && w.setRequestHeader(b, a)
                });
                w.onload = function() {
                    var a = w.statusText ||
                        "",
                        b = "response" in w ? w.response : w.responseText,
                        c = 1223 === w.status ? 204 : w.status;
                    0 === c && (c = b ? 200 : "file" == Ba(h).protocol ? 404 : 0);
                    O(k, c, b, w.getAllResponseHeaders(), a)
                };
                e = function() {
                    O(k, -1, null, null, "")
                };
                w.onerror = e;
                w.onabort = e;
                q && (w.withCredentials = !0);
                if (u) try {
                    w.responseType = u
                } catch (L) {
                    if ("json" !== u) throw L;
                }
                w.send(l || null)
            }
            if (0 < n) var C = c(r, n);
            else n && G(n.then) && n.then(r)
        }
    }

    function Ie() {
        var b = "{{",
            a = "}}";
        this.startSymbol = function(a) {
            return a ? (b = a, this) : b
        };
        this.endSymbol = function(b) {
            return b ? (a = b, this) :
                a
        };
        this.$get = ["$parse", "$exceptionHandler", "$sce", function(c, d, e) {
            function f(a) {
                return "\\\\\\" + a
            }

            function g(f, g, u, r) {
                function O(c) {
                    return c.replace(k, b).replace(m, a)
                }

                function p(a) {
                    try {
                        var b = a;
                        a = u ? e.getTrusted(u, b) : e.valueOf(b);
                        var c;
                        if (r && !y(a)) c = a;
                        else if (null == a) c = "";
                        else {
                            switch (typeof a) {
                                case "string":
                                    break;
                                case "number":
                                    a = "" + a;
                                    break;
                                default:
                                    a = $a(a)
                            }
                            c = a
                        }
                        return c
                    } catch (g) {
                        c = $b("interr", f, g.toString()), d(c)
                    }
                }
                r = !!r;
                for (var v, w, L = 0, C = [], x = [], P = f.length, E = [], s = []; L < P;)
                    if (-1 != (v = f.indexOf(b, L)) && -1 !=
                        (w = f.indexOf(a, v + h))) L !== v && E.push(O(f.substring(L, v))), L = f.substring(v + h, w), C.push(L), x.push(c(L, p)), L = w + l, s.push(E.length), E.push("");
                    else {
                        L !== P && E.push(O(f.substring(L)));
                        break
                    }
                if (u && 1 < E.length) throw $b("noconcat", f);
                if (!g || C.length) {
                    var X = function(a) {
                        for (var b = 0, c = C.length; b < c; b++) {
                            if (r && A(a[b])) return;
                            E[s[b]] = a[b]
                        }
                        return E.join("")
                    };
                    return z(function(a) {
                        var b = 0,
                            c = C.length,
                            e = Array(c);
                        try {
                            for (; b < c; b++) e[b] = x[b](a);
                            return X(e)
                        } catch (g) {
                            a = $b("interr", f, g.toString()), d(a)
                        }
                    }, {
                        exp: f,
                        expressions: C,
                        $$watchDelegate: function(a,
                            b, c) {
                            var d;
                            return a.$watchGroup(x, function(c, e) {
                                var f = X(c);
                                G(b) && b.call(this, f, c !== e ? d : f, a);
                                d = f
                            }, c)
                        }
                    })
                }
            }
            var h = b.length,
                l = a.length,
                k = new RegExp(b.replace(/./g, f), "g"),
                m = new RegExp(a.replace(/./g, f), "g");
            g.startSymbol = function() {
                return b
            };
            g.endSymbol = function() {
                return a
            };
            return g
        }]
    }

    function Je() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", function(b, a, c, d) {
            function e(e, h, l, k) {
                var m = a.setInterval,
                    n = a.clearInterval,
                    q = 0,
                    u = y(k) && !k,
                    r = (u ? d : c).defer(),
                    O = r.promise;
                l = y(l) ? l : 0;
                O.then(null, null, e);
                O.$$intervalId =
                    m(function() {
                        r.notify(q++);
                        0 < l && q >= l && (r.resolve(q), n(O.$$intervalId), delete f[O.$$intervalId]);
                        u || b.$apply()
                    }, h);
                f[O.$$intervalId] = r;
                return O
            }
            var f = {};
            e.cancel = function(b) {
                return b && b.$$intervalId in f ? (f[b.$$intervalId].reject("canceled"), a.clearInterval(b.$$intervalId), delete f[b.$$intervalId], !0) : !1
            };
            return e
        }]
    }

    function Rd() {
        this.$get = function() {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "\u00a4",
                        posSuf: "",
                        negPre: "(\u00a4",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    }],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January February March April May June July August September October November December".split(" "),
                    SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                    DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                    SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                    AMPMS: ["AM", "PM"],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function(b) {
                    return 1 === b ? "one" : "other"
                }
            }
        }
    }

    function ac(b) {
        b = b.split("/");
        for (var a = b.length; a--;) b[a] = qb(b[a]);
        return b.join("/")
    }

    function $c(b, a) {
        var c = Ba(b);
        a.$$protocol = c.protocol;
        a.$$host = c.hostname;
        a.$$port = ba(c.port) || xf[c.protocol] || null
    }

    function ad(b, a) {
        var c = "/" !== b.charAt(0);
        c && (b = "/" + b);
        var d = Ba(b);
        a.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0) ?
            d.pathname.substring(1) : d.pathname);
        a.$$search = qc(d.search);
        a.$$hash = decodeURIComponent(d.hash);
        a.$$path && "/" != a.$$path.charAt(0) && (a.$$path = "/" + a.$$path)
    }

    function za(b, a) {
        if (0 === a.indexOf(b)) return a.substr(b.length)
    }

    function Ha(b) {
        var a = b.indexOf("#");
        return -1 == a ? b : b.substr(0, a)
    }

    function bd(b) {
        return b.replace(/(#.+)|#$/, "$1")
    }

    function bc(b) {
        return b.substr(0, Ha(b).lastIndexOf("/") + 1)
    }

    function cc(b, a) {
        this.$$html5 = !0;
        a = a || "";
        var c = bc(b);
        $c(b, this);
        this.$$parse = function(a) {
            var b = za(c, a);
            if (!F(b)) throw Fb("ipthprfx",
                a, c);
            ad(b, this);
            this.$$path || (this.$$path = "/");
            this.$$compose()
        };
        this.$$compose = function() {
            var a = Nb(this.$$search),
                b = this.$$hash ? "#" + qb(this.$$hash) : "";
            this.$$url = ac(this.$$path) + (a ? "?" + a : "") + b;
            this.$$absUrl = c + this.$$url.substr(1)
        };
        this.$$parseLinkUrl = function(d, e) {
            if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
            var f, g;
            (f = za(b, d)) !== t ? (g = f, g = (f = za(a, f)) !== t ? c + (za("/", f) || f) : b + g) : (f = za(c, d)) !== t ? g = c + f : c == d + "/" && (g = c);
            g && this.$$parse(g);
            return !!g
        }
    }

    function dc(b, a) {
        var c = bc(b);
        $c(b, this);
        this.$$parse =
            function(d) {
                d = za(b, d) || za(c, d);
                var e;
                "#" === d.charAt(0) ? (e = za(a, d), A(e) && (e = d)) : e = this.$$html5 ? d : "";
                ad(e, this);
                d = this.$$path;
                var f = /^\/[A-Z]:(\/.*)/;
                0 === e.indexOf(b) && (e = e.replace(b, ""));
                f.exec(e) || (d = (e = f.exec(d)) ? e[1] : d);
                this.$$path = d;
                this.$$compose()
            };
        this.$$compose = function() {
            var c = Nb(this.$$search),
                e = this.$$hash ? "#" + qb(this.$$hash) : "";
            this.$$url = ac(this.$$path) + (c ? "?" + c : "") + e;
            this.$$absUrl = b + (this.$$url ? a + this.$$url : "")
        };
        this.$$parseLinkUrl = function(a, c) {
            return Ha(b) == Ha(a) ? (this.$$parse(a), !0) :
                !1
        }
    }

    function cd(b, a) {
        this.$$html5 = !0;
        dc.apply(this, arguments);
        var c = bc(b);
        this.$$parseLinkUrl = function(d, e) {
            if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
            var f, g;
            b == Ha(d) ? f = d : (g = za(c, d)) ? f = b + a + g : c === d + "/" && (f = c);
            f && this.$$parse(f);
            return !!f
        };
        this.$$compose = function() {
            var c = Nb(this.$$search),
                e = this.$$hash ? "#" + qb(this.$$hash) : "";
            this.$$url = ac(this.$$path) + (c ? "?" + c : "") + e;
            this.$$absUrl = b + a + this.$$url
        }
    }

    function Gb(b) {
        return function() {
            return this[b]
        }
    }

    function dd(b, a) {
        return function(c) {
            if (A(c)) return this[b];
            this[b] = a(c);
            this.$$compose();
            return this
        }
    }

    function Me() {
        var b = "",
            a = {
                enabled: !1,
                requireBase: !0,
                rewriteLinks: !0
            };
        this.hashPrefix = function(a) {
            return y(a) ? (b = a, this) : b
        };
        this.html5Mode = function(b) {
            return Wa(b) ? (a.enabled = b, this) : I(b) ? (Wa(b.enabled) && (a.enabled = b.enabled), Wa(b.requireBase) && (a.requireBase = b.requireBase), Wa(b.rewriteLinks) && (a.rewriteLinks = b.rewriteLinks), this) : a
        };
        this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(c, d, e, f, g) {
            function h(a, b, c) {
                var e = k.url(),
                    f = k.$$state;
                try {
                    d.url(a, b, c), k.$$state = d.state()
                } catch (g) {
                    throw k.url(e), k.$$state = f, g;
                }
            }

            function l(a, b) {
                c.$broadcast("$locationChangeSuccess", k.absUrl(), a, k.$$state, b)
            }
            var k, m;
            m = d.baseHref();
            var n = d.url(),
                q;
            if (a.enabled) {
                if (!m && a.requireBase) throw Fb("nobase");
                q = n.substring(0, n.indexOf("/", n.indexOf("//") + 2)) + (m || "/");
                m = e.history ? cc : cd
            } else q = Ha(n), m = dc;
            k = new m(q, "#" + b);
            k.$$parseLinkUrl(n, n);
            k.$$state = d.state();
            var u = /^\s*(javascript|mailto):/i;
            f.on("click", function(b) {
                if (a.rewriteLinks && !b.ctrlKey &&
                    !b.metaKey && !b.shiftKey && 2 != b.which && 2 != b.button) {
                    for (var e = B(b.target);
                        "a" !== ua(e[0]);)
                        if (e[0] === f[0] || !(e = e.parent())[0]) return;
                    var h = e.prop("href"),
                        l = e.attr("href") || e.attr("xlink:href");
                    I(h) && "[object SVGAnimatedString]" === h.toString() && (h = Ba(h.animVal).href);
                    u.test(h) || !h || e.attr("target") || b.isDefaultPrevented() || !k.$$parseLinkUrl(h, l) || (b.preventDefault(), k.absUrl() != d.url() && (c.$apply(), g.angular["ff-684208-preventDefault"] = !0))
                }
            });
            k.absUrl() != n && d.url(k.absUrl(), !0);
            var r = !0;
            d.onUrlChange(function(a,
                b) {
                c.$evalAsync(function() {
                    var d = k.absUrl(),
                        e = k.$$state,
                        f;
                    k.$$parse(a);
                    k.$$state = b;
                    f = c.$broadcast("$locationChangeStart", a, d, b, e).defaultPrevented;
                    k.absUrl() === a && (f ? (k.$$parse(d), k.$$state = e, h(d, !1, e)) : (r = !1, l(d, e)))
                });
                c.$$phase || c.$digest()
            });
            c.$watch(function() {
                var a = bd(d.url()),
                    b = bd(k.absUrl()),
                    f = d.state(),
                    g = k.$$replace,
                    q = a !== b || k.$$html5 && e.history && f !== k.$$state;
                if (r || q) r = !1, c.$evalAsync(function() {
                    var b = k.absUrl(),
                        d = c.$broadcast("$locationChangeStart", b, a, k.$$state, f).defaultPrevented;
                    k.absUrl() ===
                        b && (d ? (k.$$parse(a), k.$$state = f) : (q && h(b, g, f === k.$$state ? null : k.$$state), l(a, f)))
                });
                k.$$replace = !1
            });
            return k
        }]
    }

    function Ne() {
        var b = !0,
            a = this;
        this.debugEnabled = function(a) {
            return y(a) ? (b = a, this) : b
        };
        this.$get = ["$window", function(c) {
            function d(a) {
                a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
                return a
            }

            function e(a) {
                var b = c.console || {},
                    e = b[a] || b.log || H;
                a = !1;
                try {
                    a = !!e.apply
                } catch (l) {}
                return a ?
                    function() {
                        var a = [];
                        s(arguments, function(b) {
                            a.push(d(b))
                        });
                        return e.apply(b, a)
                    } : function(a, b) {
                        e(a, null == b ? "" : b)
                    }
            }
            return {
                log: e("log"),
                info: e("info"),
                warn: e("warn"),
                error: e("error"),
                debug: function() {
                    var c = e("debug");
                    return function() {
                        b && c.apply(a, arguments)
                    }
                }()
            }
        }]
    }

    function ta(b, a) {
        if ("__defineGetter__" === b || "__defineSetter__" === b || "__lookupGetter__" === b || "__lookupSetter__" === b || "__proto__" === b) throw la("isecfld", a);
        return b
    }

    function ma(b, a) {
        if (b) {
            if (b.constructor === b) throw la("isecfn", a);
            if (b.window ===
                b) throw la("isecwindow", a);
            if (b.children && (b.nodeName || b.prop && b.attr && b.find)) throw la("isecdom", a);
            if (b === Object) throw la("isecobj", a);
        }
        return b
    }

    function ec(b) {
        return b.constant
    }

    function gb(b, a, c, d, e) {
        ma(b, e);
        ma(a, e);
        c = c.split(".");
        for (var f, g = 0; 1 < c.length; g++) {
            f = ta(c.shift(), e);
            var h = 0 === g && a && a[f] || b[f];
            h || (h = {}, b[f] = h);
            b = ma(h, e)
        }
        f = ta(c.shift(), e);
        ma(b[f], e);
        return b[f] = d
    }

    function Qa(b) {
        return "constructor" == b
    }

    function ed(b, a, c, d, e, f, g) {
        ta(b, f);
        ta(a, f);
        ta(c, f);
        ta(d, f);
        ta(e, f);
        var h = function(a) {
                return ma(a,
                    f)
            },
            l = g || Qa(b) ? h : pa,
            k = g || Qa(a) ? h : pa,
            m = g || Qa(c) ? h : pa,
            n = g || Qa(d) ? h : pa,
            q = g || Qa(e) ? h : pa;
        return function(f, g) {
            var h = g && g.hasOwnProperty(b) ? g : f;
            if (null == h) return h;
            h = l(h[b]);
            if (!a) return h;
            if (null == h) return t;
            h = k(h[a]);
            if (!c) return h;
            if (null == h) return t;
            h = m(h[c]);
            if (!d) return h;
            if (null == h) return t;
            h = n(h[d]);
            return e ? null == h ? t : h = q(h[e]) : h
        }
    }

    function yf(b, a) {
        return function(c, d) {
            return b(c, d, ma, a)
        }
    }

    function zf(b, a, c) {
        var d = a.expensiveChecks,
            e = d ? Af : Bf,
            f = e[b];
        if (f) return f;
        var g = b.split("."),
            h = g.length;
        if (a.csp) f =
            6 > h ? ed(g[0], g[1], g[2], g[3], g[4], c, d) : function(a, b) {
                var e = 0,
                    f;
                do f = ed(g[e++], g[e++], g[e++], g[e++], g[e++], c, d)(a, b), b = t, a = f; while (e < h);
                return f
            };
        else {
            var l = "";
            d && (l += "s = eso(s, fe);\nl = eso(l, fe);\n");
            var k = d;
            s(g, function(a, b) {
                ta(a, c);
                var e = (b ? "s" : '((l&&l.hasOwnProperty("' + a + '"))?l:s)') + "." + a;
                if (d || Qa(a)) e = "eso(" + e + ", fe)", k = !0;
                l += "if(s == null) return undefined;\ns=" + e + ";\n"
            });
            l += "return s;";
            a = new Function("s", "l", "eso", "fe", l);
            a.toString = da(l);
            k && (a = yf(a, c));
            f = a
        }
        f.sharedGetter = !0;
        f.assign = function(a,
            c, d) {
            return gb(a, d, b, c, b)
        };
        return e[b] = f
    }

    function fc(b) {
        return G(b.valueOf) ? b.valueOf() : Cf.call(b)
    }

    function Oe() {
        var b = ha(),
            a = ha();
        this.$get = ["$filter", "$sniffer", function(c, d) {
            function e(a) {
                var b = a;
                a.sharedGetter && (b = function(b, c) {
                    return a(b, c)
                }, b.literal = a.literal, b.constant = a.constant, b.assign = a.assign);
                return b
            }

            function f(a, b) {
                for (var c = 0, d = a.length; c < d; c++) {
                    var e = a[c];
                    e.constant || (e.inputs ? f(e.inputs, b) : -1 === b.indexOf(e) && b.push(e))
                }
                return b
            }

            function g(a, b) {
                return null == a || null == b ? a === b : "object" ===
                    typeof a && (a = fc(a), "object" === typeof a) ? !1 : a === b || a !== a && b !== b
            }

            function h(a, b, c, d) {
                var e = d.$$inputs || (d.$$inputs = f(d.inputs, [])),
                    h;
                if (1 === e.length) {
                    var l = g,
                        e = e[0];
                    return a.$watch(function(a) {
                        var b = e(a);
                        g(b, l) || (h = d(a), l = b && fc(b));
                        return h
                    }, b, c)
                }
                for (var k = [], q = 0, n = e.length; q < n; q++) k[q] = g;
                return a.$watch(function(a) {
                    for (var b = !1, c = 0, f = e.length; c < f; c++) {
                        var l = e[c](a);
                        if (b || (b = !g(l, k[c]))) k[c] = l && fc(l)
                    }
                    b && (h = d(a));
                    return h
                }, b, c)
            }

            function l(a, b, c, d) {
                var e, f;
                return e = a.$watch(function(a) {
                    return d(a)
                }, function(a,
                    c, d) {
                    f = a;
                    G(b) && b.apply(this, arguments);
                    y(a) && d.$$postDigest(function() {
                        y(f) && e()
                    })
                }, c)
            }

            function k(a, b, c, d) {
                function e(a) {
                    var b = !0;
                    s(a, function(a) {
                        y(a) || (b = !1)
                    });
                    return b
                }
                var f, g;
                return f = a.$watch(function(a) {
                    return d(a)
                }, function(a, c, d) {
                    g = a;
                    G(b) && b.call(this, a, c, d);
                    e(a) && d.$$postDigest(function() {
                        e(g) && f()
                    })
                }, c)
            }

            function m(a, b, c, d) {
                var e;
                return e = a.$watch(function(a) {
                    return d(a)
                }, function(a, c, d) {
                    G(b) && b.apply(this, arguments);
                    e()
                }, c)
            }

            function n(a, b) {
                if (!b) return a;
                var c = a.$$watchDelegate,
                    c = c !== k &&
                    c !== l ? function(c, d) {
                        var e = a(c, d);
                        return b(e, c, d)
                    } : function(c, d) {
                        var e = a(c, d),
                            f = b(e, c, d);
                        return y(e) ? f : e
                    };
                a.$$watchDelegate && a.$$watchDelegate !== h ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate = h, c.inputs = [a]);
                return c
            }
            var q = {
                    csp: d.csp,
                    expensiveChecks: !1
                },
                u = {
                    csp: d.csp,
                    expensiveChecks: !0
                };
            return function(d, f, g) {
                var v, w, L;
                switch (typeof d) {
                    case "string":
                        L = d = d.trim();
                        var C = g ? a : b;
                        v = C[L];
                        v || (":" === d.charAt(0) && ":" === d.charAt(1) && (w = !0, d = d.substring(2)), g = g ? u : q, v = new gc(g), v = (new hb(v,
                            c, g)).parse(d), v.constant ? v.$$watchDelegate = m : w ? (v = e(v), v.$$watchDelegate = v.literal ? k : l) : v.inputs && (v.$$watchDelegate = h), C[L] = v);
                        return n(v, f);
                    case "function":
                        return n(d, f);
                    default:
                        return n(H, f)
                }
            }
        }]
    }

    function Qe() {
        this.$get = ["$rootScope", "$exceptionHandler", function(b, a) {
            return fd(function(a) {
                b.$evalAsync(a)
            }, a)
        }]
    }

    function Re() {
        this.$get = ["$browser", "$exceptionHandler", function(b, a) {
            return fd(function(a) {
                b.defer(a)
            }, a)
        }]
    }

    function fd(b, a) {
        function c(a, b, c) {
            function d(b) {
                return function(c) {
                    e || (e = !0,
                        b.call(a, c))
                }
            }
            var e = !1;
            return [d(b), d(c)]
        }

        function d() {
            this.$$state = {
                status: 0
            }
        }

        function e(a, b) {
            return function(c) {
                b.call(a, c)
            }
        }

        function f(c) {
            !c.processScheduled && c.pending && (c.processScheduled = !0, b(function() {
                var b, d, e;
                e = c.pending;
                c.processScheduled = !1;
                c.pending = t;
                for (var f = 0, g = e.length; f < g; ++f) {
                    d = e[f][0];
                    b = e[f][c.status];
                    try {
                        G(b) ? d.resolve(b(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value)
                    } catch (h) {
                        d.reject(h), a(h)
                    }
                }
            }))
        }

        function g() {
            this.promise = new d;
            this.resolve = e(this, this.resolve);
            this.reject = e(this, this.reject);
            this.notify = e(this, this.notify)
        }
        var h = T("$q", TypeError);
        d.prototype = {
            then: function(a, b, c) {
                var d = new g;
                this.$$state.pending = this.$$state.pending || [];
                this.$$state.pending.push([d, a, b, c]);
                0 < this.$$state.status && f(this.$$state);
                return d.promise
            },
            "catch": function(a) {
                return this.then(null, a)
            },
            "finally": function(a, b) {
                return this.then(function(b) {
                    return k(b, !0, a)
                }, function(b) {
                    return k(b, !1, a)
                }, b)
            }
        };
        g.prototype = {
            resolve: function(a) {
                this.promise.$$state.status || (a === this.promise ?
                    this.$$reject(h("qcycle", a)) : this.$$resolve(a))
            },
            $$resolve: function(b) {
                var d, e;
                e = c(this, this.$$resolve, this.$$reject);
                try {
                    if (I(b) || G(b)) d = b && b.then;
                    G(d) ? (this.promise.$$state.status = -1, d.call(b, e[0], e[1], this.notify)) : (this.promise.$$state.value = b, this.promise.$$state.status = 1, f(this.promise.$$state))
                } catch (g) {
                    e[1](g), a(g)
                }
            },
            reject: function(a) {
                this.promise.$$state.status || this.$$reject(a)
            },
            $$reject: function(a) {
                this.promise.$$state.value = a;
                this.promise.$$state.status = 2;
                f(this.promise.$$state)
            },
            notify: function(c) {
                var d =
                    this.promise.$$state.pending;
                0 >= this.promise.$$state.status && d && d.length && b(function() {
                    for (var b, e, f = 0, g = d.length; f < g; f++) {
                        e = d[f][0];
                        b = d[f][3];
                        try {
                            e.notify(G(b) ? b(c) : c)
                        } catch (h) {
                            a(h)
                        }
                    }
                })
            }
        };
        var l = function(a, b) {
                var c = new g;
                b ? c.resolve(a) : c.reject(a);
                return c.promise
            },
            k = function(a, b, c) {
                var d = null;
                try {
                    G(c) && (d = c())
                } catch (e) {
                    return l(e, !1)
                }
                return d && G(d.then) ? d.then(function() {
                    return l(a, b)
                }, function(a) {
                    return l(a, !1)
                }) : l(a, b)
            },
            m = function(a, b, c, d) {
                var e = new g;
                e.resolve(a);
                return e.promise.then(b, c, d)
            },
            n = function u(a) {
                if (!G(a)) throw h("norslvr", a);
                if (!(this instanceof u)) return new u(a);
                var b = new g;
                a(function(a) {
                    b.resolve(a)
                }, function(a) {
                    b.reject(a)
                });
                return b.promise
            };
        n.defer = function() {
            return new g
        };
        n.reject = function(a) {
            var b = new g;
            b.reject(a);
            return b.promise
        };
        n.when = m;
        n.all = function(a) {
            var b = new g,
                c = 0,
                d = D(a) ? [] : {};
            s(a, function(a, e) {
                c++;
                m(a).then(function(a) {
                    d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
                }, function(a) {
                    d.hasOwnProperty(e) || b.reject(a)
                })
            });
            0 === c && b.resolve(d);
            return b.promise
        };
        return n
    }

    function $e() {
        this.$get = ["$window", "$timeout", function(b, a) {
            var c = b.requestAnimationFrame || b.webkitRequestAnimationFrame,
                d = b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.webkitCancelRequestAnimationFrame,
                e = !!c,
                f = e ? function(a) {
                    var b = c(a);
                    return function() {
                        d(b)
                    }
                } : function(b) {
                    var c = a(b, 16.66, !1);
                    return function() {
                        a.cancel(c)
                    }
                };
            f.supported = e;
            return f
        }]
    }

    function Pe() {
        var b = 10,
            a = T("$rootScope"),
            c = null,
            d = null;
        this.digestTtl = function(a) {
            arguments.length && (b = a);
            return b
        };
        this.$get = ["$injector",
            "$exceptionHandler", "$parse", "$browser",
            function(e, f, g, h) {
                function l() {
                    this.$id = ++nb;
                    this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                    this.$root = this;
                    this.$$destroyed = !1;
                    this.$$listeners = {};
                    this.$$listenerCount = {};
                    this.$$isolateBindings = null
                }

                function k(b) {
                    if (r.$$phase) throw a("inprog", r.$$phase);
                    r.$$phase = b
                }

                function m(a, b, c) {
                    do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
                }

                function n() {}

                function q() {
                    for (; v.length;) try {
                        v.shift()()
                    } catch (a) {
                        f(a)
                    }
                    d = null
                }

                function u() {
                    null === d && (d = h.defer(function() {
                        r.$apply(q)
                    }))
                }
                l.prototype = {
                    constructor: l,
                    $new: function(a, b) {
                        function c() {
                            d.$$destroyed = !0
                        }
                        var d;
                        b = b || this;
                        a ? (d = new l, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = function() {
                            this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
                            this.$$listeners = {};
                            this.$$listenerCount = {};
                            this.$id = ++nb;
                            this.$$ChildScope = null
                        }, this.$$ChildScope.prototype = this), d = new this.$$ChildScope);
                        d.$parent = b;
                        d.$$prevSibling = b.$$childTail;
                        b.$$childHead ? (b.$$childTail.$$nextSibling = d, b.$$childTail = d) : b.$$childHead = b.$$childTail = d;
                        (a || b != this) && d.$on("$destroy", c);
                        return d
                    },
                    $watch: function(a, b, d) {
                        var e = g(a);
                        if (e.$$watchDelegate) return e.$$watchDelegate(this, b, d, e);
                        var f = this.$$watchers,
                            h = {
                                fn: b,
                                last: n,
                                get: e,
                                exp: a,
                                eq: !!d
                            };
                        c = null;
                        G(b) || (h.fn = H);
                        f || (f = this.$$watchers = []);
                        f.unshift(h);
                        return function() {
                            Xa(f, h);
                            c = null
                        }
                    },
                    $watchGroup: function(a, b) {
                        function c() {
                            h = !1;
                            l ? (l = !1, b(e, e, g)) : b(e, d, g)
                        }
                        var d = Array(a.length),
                            e = Array(a.length),
                            f = [],
                            g = this,
                            h = !1,
                            l = !0;
                        if (!a.length) {
                            var k = !0;
                            g.$evalAsync(function() {
                                k && b(e, e, g)
                            });
                            return function() {
                                k = !1
                            }
                        }
                        if (1 === a.length) return this.$watch(a[0], function(a, c, f) {
                            e[0] = a;
                            d[0] = c;
                            b(e, a === c ? e : d, f)
                        });
                        s(a, function(a, b) {
                            var l = g.$watch(a, function(a, f) {
                                e[b] = a;
                                d[b] = f;
                                h || (h = !0, g.$evalAsync(c))
                            });
                            f.push(l)
                        });
                        return function() {
                            for (; f.length;) f.shift()()
                        }
                    },
                    $watchCollection: function(a, b) {
                        function c(a) {
                            e = a;
                            var b, d, g, h;
                            if (!A(e)) {
                                if (I(e))
                                    if (Ta(e))
                                        for (f !== q && (f = q, u = f.length = 0, k++), a = e.length, u !==
                                            a && (k++, f.length = u = a), b = 0; b < a; b++) h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (k++, f[b] = g);
                                    else {
                                        f !== m && (f = m = {}, u = 0, k++);
                                        a = 0;
                                        for (b in e) e.hasOwnProperty(b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h === g || (k++, f[b] = g)) : (u++, f[b] = g, k++));
                                        if (u > a)
                                            for (b in k++, f) e.hasOwnProperty(b) || (u--, delete f[b])
                                    }
                                else f !== e && (f = e, k++);
                                return k
                            }
                        }
                        c.$stateful = !0;
                        var d = this,
                            e, f, h, l = 1 < b.length,
                            k = 0,
                            n = g(a, c),
                            q = [],
                            m = {},
                            p = !0,
                            u = 0;
                        return this.$watch(n, function() {
                            p ? (p = !1, b(e, e, d)) : b(e, h, d);
                            if (l)
                                if (I(e))
                                    if (Ta(e)) {
                                        h = Array(e.length);
                                        for (var a = 0; a < e.length; a++) h[a] = e[a]
                                    } else
                                        for (a in h = {}, e) rc.call(e, a) && (h[a] = e[a]);
                            else h = e
                        })
                    },
                    $digest: function() {
                        var e, g, l, m, u, v, s = b,
                            t, W = [],
                            y, J;
                        k("$digest");
                        h.$$checkUrlChange();
                        this === r && null !== d && (h.defer.cancel(d), q());
                        c = null;
                        do {
                            v = !1;
                            for (t = this; O.length;) {
                                try {
                                    J = O.shift(), J.scope.$eval(J.expression, J.locals)
                                } catch (B) {
                                    f(B)
                                }
                                c = null
                            }
                            a: do {
                                if (m = t.$$watchers)
                                    for (u = m.length; u--;) try {
                                        if (e = m[u])
                                            if ((g = e.get(t)) !== (l = e.last) && !(e.eq ? fa(g, l) : "number" === typeof g && "number" === typeof l && isNaN(g) && isNaN(l))) v = !0, c = e, e.last = e.eq ? Ea(g, null) : g, e.fn(g, l === n ? g : l, t), 5 > s && (y = 4 - s, W[y] || (W[y] = []), W[y].push({
                                                msg: G(e.exp) ? "fn: " + (e.exp.name || e.exp.toString()) : e.exp,
                                                newVal: g,
                                                oldVal: l
                                            }));
                                            else if (e === c) {
                                            v = !1;
                                            break a
                                        }
                                    } catch (A) {
                                        f(A)
                                    }
                                if (!(m = t.$$childHead || t !== this && t.$$nextSibling))
                                    for (; t !== this && !(m = t.$$nextSibling);) t = t.$parent
                            } while (t = m);
                            if ((v || O.length) && !s--) throw r.$$phase = null, a("infdig", b, W);
                        } while (v || O.length);
                        for (r.$$phase = null; p.length;) try {
                            p.shift()()
                        } catch (ca) {
                            f(ca)
                        }
                    },
                    $destroy: function() {
                        if (!this.$$destroyed) {
                            var a =
                                this.$parent;
                            this.$broadcast("$destroy");
                            this.$$destroyed = !0;
                            if (this !== r) {
                                for (var b in this.$$listenerCount) m(this, this.$$listenerCount[b], b);
                                a.$$childHead == this && (a.$$childHead = this.$$nextSibling);
                                a.$$childTail == this && (a.$$childTail = this.$$prevSibling);
                                this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);
                                this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
                                this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = H;
                                this.$on = this.$watch = this.$watchGroup =
                                    function() {
                                        return H
                                    };
                                this.$$listeners = {};
                                this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null
                            }
                        }
                    },
                    $eval: function(a, b) {
                        return g(a)(this, b)
                    },
                    $evalAsync: function(a, b) {
                        r.$$phase || O.length || h.defer(function() {
                            O.length && r.$digest()
                        });
                        O.push({
                            scope: this,
                            expression: a,
                            locals: b
                        })
                    },
                    $$postDigest: function(a) {
                        p.push(a)
                    },
                    $apply: function(a) {
                        try {
                            return k("$apply"), this.$eval(a)
                        } catch (b) {
                            f(b)
                        } finally {
                            r.$$phase = null;
                            try {
                                r.$digest()
                            } catch (c) {
                                throw f(c), c;
                            }
                        }
                    },
                    $applyAsync: function(a) {
                        function b() {
                            c.$eval(a)
                        }
                        var c = this;
                        a && v.push(b);
                        u()
                    },
                    $on: function(a, b) {
                        var c = this.$$listeners[a];
                        c || (this.$$listeners[a] = c = []);
                        c.push(b);
                        var d = this;
                        do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                        var e = this;
                        return function() {
                            var d = c.indexOf(b); - 1 !== d && (c[d] = null, m(e, 1, a))
                        }
                    },
                    $emit: function(a, b) {
                        var c = [],
                            d, e = this,
                            g = !1,
                            h = {
                                name: a,
                                targetScope: e,
                                stopPropagation: function() {
                                    g = !0
                                },
                                preventDefault: function() {
                                    h.defaultPrevented = !0
                                },
                                defaultPrevented: !1
                            },
                            l = Ya([h], arguments, 1),
                            k, m;
                        do {
                            d = e.$$listeners[a] || c;
                            h.currentScope = e;
                            k = 0;
                            for (m = d.length; k < m; k++)
                                if (d[k]) try {
                                    d[k].apply(null, l)
                                } catch (n) {
                                    f(n)
                                } else d.splice(k, 1), k--, m--;
                            if (g) return h.currentScope = null, h;
                            e = e.$parent
                        } while (e);
                        h.currentScope = null;
                        return h
                    },
                    $broadcast: function(a, b) {
                        var c = this,
                            d = this,
                            e = {
                                name: a,
                                targetScope: this,
                                preventDefault: function() {
                                    e.defaultPrevented = !0
                                },
                                defaultPrevented: !1
                            };
                        if (!this.$$listenerCount[a]) return e;
                        for (var g = Ya([e], arguments, 1), h, l; c = d;) {
                            e.currentScope = c;
                            d = c.$$listeners[a] || [];
                            h = 0;
                            for (l = d.length; h < l; h++)
                                if (d[h]) try {
                                    d[h].apply(null, g)
                                } catch (k) {
                                    f(k)
                                } else d.splice(h, 1), h--, l--;
                            if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling))
                                for (; c !== this && !(d = c.$$nextSibling);) c = c.$parent
                        }
                        e.currentScope = null;
                        return e
                    }
                };
                var r = new l,
                    O = r.$$asyncQueue = [],
                    p = r.$$postDigestQueue = [],
                    v = r.$$applyAsyncQueue = [];
                return r
            }
        ]
    }

    function Sd() {
        var b = /^\s*(https?|ftp|mailto|tel|file):/,
            a = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(a) {
            return y(a) ?
                (b = a, this) : b
        };
        this.imgSrcSanitizationWhitelist = function(b) {
            return y(b) ? (a = b, this) : a
        };
        this.$get = function() {
            return function(c, d) {
                var e = d ? a : b,
                    f;
                f = Ba(c).href;
                return "" === f || f.match(e) ? c : "unsafe:" + f
            }
        }
    }

    function Df(b) {
        if ("self" === b) return b;
        if (F(b)) {
            if (-1 < b.indexOf("***")) throw Ca("iwcard", b);
            b = gd(b).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");
            return new RegExp("^" + b + "$")
        }
        if (ob(b)) return new RegExp("^" + b.source + "$");
        throw Ca("imatcher");
    }

    function hd(b) {
        var a = [];
        y(b) && s(b, function(b) {
            a.push(Df(b))
        });
        return a
    }

    function Te() {
        this.SCE_CONTEXTS = na;
        var b = ["self"],
            a = [];
        this.resourceUrlWhitelist = function(a) {
            arguments.length && (b = hd(a));
            return b
        };
        this.resourceUrlBlacklist = function(b) {
            arguments.length && (a = hd(b));
            return a
        };
        this.$get = ["$injector", function(c) {
            function d(a, b) {
                return "self" === a ? Zc(b) : !!a.exec(b.href)
            }

            function e(a) {
                var b = function(a) {
                    this.$$unwrapTrustedValue = function() {
                        return a
                    }
                };
                a && (b.prototype = new a);
                b.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue()
                };
                b.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString()
                };
                return b
            }
            var f = function(a) {
                throw Ca("unsafe");
            };
            c.has("$sanitize") && (f = c.get("$sanitize"));
            var g = e(),
                h = {};
            h[na.HTML] = e(g);
            h[na.CSS] = e(g);
            h[na.URL] = e(g);
            h[na.JS] = e(g);
            h[na.RESOURCE_URL] = e(h[na.URL]);
            return {
                trustAs: function(a, b) {
                    var c = h.hasOwnProperty(a) ? h[a] : null;
                    if (!c) throw Ca("icontext", a, b);
                    if (null === b || b === t || "" === b) return b;
                    if ("string" !== typeof b) throw Ca("itype", a);
                    return new c(b)
                },
                getTrusted: function(c, e) {
                    if (null === e || e === t || "" === e) return e;
                    var g = h.hasOwnProperty(c) ? h[c] : null;
                    if (g && e instanceof g) return e.$$unwrapTrustedValue();
                    if (c === na.RESOURCE_URL) {
                        var g = Ba(e.toString()),
                            n, q, u = !1;
                        n = 0;
                        for (q = b.length; n < q; n++)
                            if (d(b[n], g)) {
                                u = !0;
                                break
                            }
                        if (u)
                            for (n = 0, q = a.length; n < q; n++)
                                if (d(a[n], g)) {
                                    u = !1;
                                    break
                                }
                        if (u) return e;
                        throw Ca("insecurl", e.toString());
                    }
                    if (c === na.HTML) return f(e);
                    throw Ca("unsafe");
                },
                valueOf: function(a) {
                    return a instanceof g ? a.$$unwrapTrustedValue() : a
                }
            }
        }]
    }

    function Se() {
        var b = !0;
        this.enabled = function(a) {
            arguments.length && (b = !!a);
            return b
        };
        this.$get = ["$parse", "$sceDelegate", function(a, c) {
            if (b &&
                8 > Ra) throw Ca("iequirks");
            var d = ra(na);
            d.isEnabled = function() {
                return b
            };
            d.trustAs = c.trustAs;
            d.getTrusted = c.getTrusted;
            d.valueOf = c.valueOf;
            b || (d.trustAs = d.getTrusted = function(a, b) {
                return b
            }, d.valueOf = pa);
            d.parseAs = function(b, c) {
                var e = a(c);
                return e.literal && e.constant ? e : a(c, function(a) {
                    return d.getTrusted(b, a)
                })
            };
            var e = d.parseAs,
                f = d.getTrusted,
                g = d.trustAs;
            s(na, function(a, b) {
                var c = Q(b);
                d[cb("parse_as_" + c)] = function(b) {
                    return e(a, b)
                };
                d[cb("get_trusted_" + c)] = function(b) {
                    return f(a, b)
                };
                d[cb("trust_as_" +
                    c)] = function(b) {
                    return g(a, b)
                }
            });
            return d
        }]
    }

    function Ue() {
        this.$get = ["$window", "$document", function(b, a) {
            var c = {},
                d = ba((/android (\d+)/.exec(Q((b.navigator || {}).userAgent)) || [])[1]),
                e = /Boxee/i.test((b.navigator || {}).userAgent),
                f = a[0] || {},
                g, h = /^(Moz|webkit|ms)(?=[A-Z])/,
                l = f.body && f.body.style,
                k = !1,
                m = !1;
            if (l) {
                for (var n in l)
                    if (k = h.exec(n)) {
                        g = k[0];
                        g = g.substr(0, 1).toUpperCase() + g.substr(1);
                        break
                    }
                g || (g = "WebkitOpacity" in l && "webkit");
                k = !!("transition" in l || g + "Transition" in l);
                m = !!("animation" in l || g + "Animation" in
                    l);
                !d || k && m || (k = F(f.body.style.webkitTransition), m = F(f.body.style.webkitAnimation))
            }
            return {
                history: !(!b.history || !b.history.pushState || 4 > d || e),
                hasEvent: function(a) {
                    if ("input" === a && 11 >= Ra) return !1;
                    if (A(c[a])) {
                        var b = f.createElement("div");
                        c[a] = "on" + a in b
                    }
                    return c[a]
                },
                csp: ab(),
                vendorPrefix: g,
                transitions: k,
                animations: m,
                android: d
            }
        }]
    }

    function We() {
        this.$get = ["$templateCache", "$http", "$q", function(b, a, c) {
            function d(e, f) {
                d.totalPendingRequests++;
                var g = a.defaults && a.defaults.transformResponse;
                D(g) ? g = g.filter(function(a) {
                    return a !==
                        Yb
                }) : g === Yb && (g = null);
                return a.get(e, {
                    cache: b,
                    transformResponse: g
                }).finally(function() {
                    d.totalPendingRequests--
                }).then(function(a) {
                    return a.data
                }, function(a) {
                    if (!f) throw ja("tpload", e);
                    return c.reject(a)
                })
            }
            d.totalPendingRequests = 0;
            return d
        }]
    }

    function Xe() {
        this.$get = ["$rootScope", "$browser", "$location", function(b, a, c) {
            return {
                findBindings: function(a, b, c) {
                    a = a.getElementsByClassName("ng-binding");
                    var g = [];
                    s(a, function(a) {
                        var d = ga.element(a).data("$binding");
                        d && s(d, function(d) {
                            c ? (new RegExp("(^|\\s)" +
                                gd(b) + "(\\s|\\||$)")).test(d) && g.push(a) : -1 != d.indexOf(b) && g.push(a)
                        })
                    });
                    return g
                },
                findModels: function(a, b, c) {
                    for (var g = ["ng-", "data-ng-", "ng\\:"], h = 0; h < g.length; ++h) {
                        var l = a.querySelectorAll("[" + g[h] + "model" + (c ? "=" : "*=") + '"' + b + '"]');
                        if (l.length) return l
                    }
                },
                getLocation: function() {
                    return c.url()
                },
                setLocation: function(a) {
                    a !== c.url() && (c.url(a), b.$digest())
                },
                whenStable: function(b) {
                    a.notifyWhenNoOutstandingRequests(b)
                }
            }
        }]
    }

    function Ye() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler",
            function(b, a, c, d, e) {
                function f(f, l, k) {
                    var m = y(k) && !k,
                        n = (m ? d : c).defer(),
                        q = n.promise;
                    l = a.defer(function() {
                        try {
                            n.resolve(f())
                        } catch (a) {
                            n.reject(a), e(a)
                        } finally {
                            delete g[q.$$timeoutId]
                        }
                        m || b.$apply()
                    }, l);
                    q.$$timeoutId = l;
                    g[l] = n;
                    return q
                }
                var g = {};
                f.cancel = function(b) {
                    return b && b.$$timeoutId in g ? (g[b.$$timeoutId].reject("canceled"), delete g[b.$$timeoutId], a.defer.cancel(b.$$timeoutId)) : !1
                };
                return f
            }
        ]
    }

    function Ba(b) {
        Ra && (Z.setAttribute("href", b), b = Z.href);
        Z.setAttribute("href", b);
        return {
            href: Z.href,
            protocol: Z.protocol ?
                Z.protocol.replace(/:$/, "") : "",
            host: Z.host,
            search: Z.search ? Z.search.replace(/^\?/, "") : "",
            hash: Z.hash ? Z.hash.replace(/^#/, "") : "",
            hostname: Z.hostname,
            port: Z.port,
            pathname: "/" === Z.pathname.charAt(0) ? Z.pathname : "/" + Z.pathname
        }
    }

    function Zc(b) {
        b = F(b) ? Ba(b) : b;
        return b.protocol === id.protocol && b.host === id.host
    }

    function Ze() {
        this.$get = da(M)
    }

    function Dc(b) {
        function a(c, d) {
            if (I(c)) {
                var e = {};
                s(c, function(b, c) {
                    e[c] = a(c, b)
                });
                return e
            }
            return b.factory(c + "Filter", d)
        }
        this.register = a;
        this.$get = ["$injector", function(a) {
            return function(b) {
                return a.get(b +
                    "Filter")
            }
        }];
        a("currency", jd);
        a("date", kd);
        a("filter", Ef);
        a("json", Ff);
        a("limitTo", Gf);
        a("lowercase", Hf);
        a("number", ld);
        a("orderBy", md);
        a("uppercase", If)
    }

    function Ef() {
        return function(b, a, c) {
            if (!D(b)) return b;
            var d;
            switch (typeof a) {
                case "function":
                    break;
                case "boolean":
                case "number":
                case "string":
                    d = !0;
                case "object":
                    a = Jf(a, c, d);
                    break;
                default:
                    return b
            }
            return b.filter(a)
        }
    }

    function Jf(b, a, c) {
        var d = I(b) && "$" in b;
        !0 === a ? a = fa : G(a) || (a = function(a, b) {
            if (I(a) || I(b)) return !1;
            a = Q("" + a);
            b = Q("" + b);
            return -1 !== a.indexOf(b)
        });
        return function(e) {
            return d && !I(e) ? Ia(e, b.$, a, !1) : Ia(e, b, a, c)
        }
    }

    function Ia(b, a, c, d, e) {
        var f = typeof b,
            g = typeof a;
        if ("string" === g && "!" === a.charAt(0)) return !Ia(b, a.substring(1), c, d);
        if (D(b)) return b.some(function(b) {
            return Ia(b, a, c, d)
        });
        switch (f) {
            case "object":
                var h;
                if (d) {
                    for (h in b)
                        if ("$" !== h.charAt(0) && Ia(b[h], a, c, !0)) return !0;
                    return e ? !1 : Ia(b, a, c, !1)
                }
                if ("object" === g) {
                    for (h in a)
                        if (e = a[h], !G(e) && (f = "$" === h, !Ia(f ? b : b[h], e, c, f, f))) return !1;
                    return !0
                }
                return c(b, a);
            case "function":
                return !1;
            default:
                return c(b,
                    a)
        }
    }

    function jd(b) {
        var a = b.NUMBER_FORMATS;
        return function(b, d, e) {
            A(d) && (d = a.CURRENCY_SYM);
            A(e) && (e = a.PATTERNS[1].maxFrac);
            return null == b ? b : nd(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, e).replace(/\u00A4/g, d)
        }
    }

    function ld(b) {
        var a = b.NUMBER_FORMATS;
        return function(b, d) {
            return null == b ? b : nd(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d)
        }
    }

    function nd(b, a, c, d, e) {
        if (!isFinite(b) || I(b)) return "";
        var f = 0 > b;
        b = Math.abs(b);
        var g = b + "",
            h = "",
            l = [],
            k = !1;
        if (-1 !== g.indexOf("e")) {
            var m = g.match(/([\d\.]+)e(-?)(\d+)/);
            m &&
                "-" == m[2] && m[3] > e + 1 ? b = 0 : (h = g, k = !0)
        }
        if (k) 0 < e && 1 > b && (h = b.toFixed(e), b = parseFloat(h));
        else {
            g = (g.split(od)[1] || "").length;
            A(e) && (e = Math.min(Math.max(a.minFrac, g), a.maxFrac));
            b = +(Math.round(+(b.toString() + "e" + e)).toString() + "e" + -e);
            var g = ("" + b).split(od),
                k = g[0],
                g = g[1] || "",
                n = 0,
                q = a.lgSize,
                u = a.gSize;
            if (k.length >= q + u)
                for (n = k.length - q, m = 0; m < n; m++) 0 === (n - m) % u && 0 !== m && (h += c), h += k.charAt(m);
            for (m = n; m < k.length; m++) 0 === (k.length - m) % q && 0 !== m && (h += c), h += k.charAt(m);
            for (; g.length < e;) g += "0";
            e && "0" !== e && (h += d + g.substr(0,
                e))
        }
        0 === b && (f = !1);
        l.push(f ? a.negPre : a.posPre, h, f ? a.negSuf : a.posSuf);
        return l.join("")
    }

    function Hb(b, a, c) {
        var d = "";
        0 > b && (d = "-", b = -b);
        for (b = "" + b; b.length < a;) b = "0" + b;
        c && (b = b.substr(b.length - a));
        return d + b
    }

    function $(b, a, c, d) {
        c = c || 0;
        return function(e) {
            e = e["get" + b]();
            if (0 < c || e > -c) e += c;
            0 === e && -12 == c && (e = 12);
            return Hb(e, a, d)
        }
    }

    function Ib(b, a) {
        return function(c, d) {
            var e = c["get" + b](),
                f = ub(a ? "SHORT" + b : b);
            return d[f][e]
        }
    }

    function pd(b) {
        var a = (new Date(b, 0, 1)).getDay();
        return new Date(b, 0, (4 >= a ? 5 : 12) - a)
    }

    function qd(b) {
        return function(a) {
            var c =
                pd(a.getFullYear());
            a = +new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay())) - +c;
            a = 1 + Math.round(a / 6048E5);
            return Hb(a, b)
        }
    }

    function kd(b) {
        function a(a) {
            var b;
            if (b = a.match(c)) {
                a = new Date(0);
                var f = 0,
                    g = 0,
                    h = b[8] ? a.setUTCFullYear : a.setFullYear,
                    l = b[8] ? a.setUTCHours : a.setHours;
                b[9] && (f = ba(b[9] + b[10]), g = ba(b[9] + b[11]));
                h.call(a, ba(b[1]), ba(b[2]) - 1, ba(b[3]));
                f = ba(b[4] || 0) - f;
                g = ba(b[5] || 0) - g;
                h = ba(b[6] || 0);
                b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));
                l.call(a, f, g, h, b)
            }
            return a
        }
        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(c, e, f) {
            var g = "",
                h = [],
                l, k;
            e = e || "mediumDate";
            e = b.DATETIME_FORMATS[e] || e;
            F(c) && (c = Kf.test(c) ? ba(c) : a(c));
            V(c) && (c = new Date(c));
            if (!qa(c)) return c;
            for (; e;)(k = Lf.exec(e)) ? (h = Ya(h, k, 1), e = h.pop()) : (h.push(e), e = null);
            f && "UTC" === f && (c = new Date(c.getTime()), c.setMinutes(c.getMinutes() + c.getTimezoneOffset()));
            s(h, function(a) {
                l = Mf[a];
                g += l ? l(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            });
            return g
        }
    }

    function Ff() {
        return function(b, a) {
            A(a) && (a = 2);
            return $a(b, a)
        }
    }

    function Gf() {
        return function(b,
            a) {
            V(b) && (b = b.toString());
            return D(b) || F(b) ? (a = Infinity === Math.abs(Number(a)) ? Number(a) : ba(a)) ? 0 < a ? b.slice(0, a) : b.slice(a) : F(b) ? "" : [] : b
        }
    }

    function md(b) {
        return function(a, c, d) {
            function e(a, b) {
                return b ? function(b, c) {
                    return a(c, b)
                } : a
            }

            function f(a) {
                switch (typeof a) {
                    case "number":
                    case "boolean":
                    case "string":
                        return !0;
                    default:
                        return !1
                }
            }

            function g(a) {
                return null === a ? "null" : "function" === typeof a.valueOf && (a = a.valueOf(), f(a)) || "function" === typeof a.toString && (a = a.toString(), f(a)) ? a : ""
            }

            function h(a, b) {
                var c =
                    typeof a,
                    d = typeof b;
                c === d && "object" === c && (a = g(a), b = g(b));
                return c === d ? ("string" === c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : a < b ? -1 : 1) : c < d ? -1 : 1
            }
            if (!Ta(a)) return a;
            c = D(c) ? c : [c];
            0 === c.length && (c = ["+"]);
            c = c.map(function(a) {
                var c = !1,
                    d = a || pa;
                if (F(a)) {
                    if ("+" == a.charAt(0) || "-" == a.charAt(0)) c = "-" == a.charAt(0), a = a.substring(1);
                    if ("" === a) return e(h, c);
                    d = b(a);
                    if (d.constant) {
                        var f = d();
                        return e(function(a, b) {
                            return h(a[f], b[f])
                        }, c)
                    }
                }
                return e(function(a, b) {
                    return h(d(a), d(b))
                }, c)
            });
            return Za.call(a).sort(e(function(a,
                b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (0 !== e) return e
                }
                return 0
            }, d))
        }
    }

    function Ja(b) {
        G(b) && (b = {
            link: b
        });
        b.restrict = b.restrict || "AC";
        return da(b)
    }

    function rd(b, a, c, d, e) {
        var f = this,
            g = [],
            h = f.$$parentForm = b.parent().controller("form") || Jb;
        f.$error = {};
        f.$$success = {};
        f.$pending = t;
        f.$name = e(a.name || a.ngForm || "")(c);
        f.$dirty = !1;
        f.$pristine = !0;
        f.$valid = !0;
        f.$invalid = !1;
        f.$submitted = !1;
        h.$addControl(f);
        f.$rollbackViewValue = function() {
            s(g, function(a) {
                a.$rollbackViewValue()
            })
        };
        f.$commitViewValue = function() {
            s(g,
                function(a) {
                    a.$commitViewValue()
                })
        };
        f.$addControl = function(a) {
            Ma(a.$name, "input");
            g.push(a);
            a.$name && (f[a.$name] = a)
        };
        f.$$renameControl = function(a, b) {
            var c = a.$name;
            f[c] === a && delete f[c];
            f[b] = a;
            a.$name = b
        };
        f.$removeControl = function(a) {
            a.$name && f[a.$name] === a && delete f[a.$name];
            s(f.$pending, function(b, c) {
                f.$setValidity(c, null, a)
            });
            s(f.$error, function(b, c) {
                f.$setValidity(c, null, a)
            });
            s(f.$$success, function(b, c) {
                f.$setValidity(c, null, a)
            });
            Xa(g, a)
        };
        sd({
            ctrl: this,
            $element: b,
            set: function(a, b, c) {
                var d = a[b];
                d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [c]
            },
            unset: function(a, b, c) {
                var d = a[b];
                d && (Xa(d, c), 0 === d.length && delete a[b])
            },
            parentForm: h,
            $animate: d
        });
        f.$setDirty = function() {
            d.removeClass(b, Sa);
            d.addClass(b, Kb);
            f.$dirty = !0;
            f.$pristine = !1;
            h.$setDirty()
        };
        f.$setPristine = function() {
            d.setClass(b, Sa, Kb + " ng-submitted");
            f.$dirty = !1;
            f.$pristine = !0;
            f.$submitted = !1;
            s(g, function(a) {
                a.$setPristine()
            })
        };
        f.$setUntouched = function() {
            s(g, function(a) {
                a.$setUntouched()
            })
        };
        f.$setSubmitted = function() {
            d.addClass(b, "ng-submitted");
            f.$submitted = !0;
            h.$setSubmitted()
        }
    }

    function hc(b) {
        b.$formatters.push(function(a) {
            return b.$isEmpty(a) ? a : a.toString()
        })
    }

    function ib(b, a, c, d, e, f) {
        var g = Q(a[0].type);
        if (!e.android) {
            var h = !1;
            a.on("compositionstart", function(a) {
                h = !0
            });
            a.on("compositionend", function() {
                h = !1;
                l()
            })
        }
        var l = function(b) {
            k && (f.defer.cancel(k), k = null);
            if (!h) {
                var e = a.val();
                b = b && b.type;
                "password" === g || c.ngTrim && "false" === c.ngTrim || (e = U(e));
                (d.$viewValue !== e || "" === e && d.$$hasNativeValidators) && d.$setViewValue(e, b)
            }
        };
        if (e.hasEvent("input")) a.on("input",
            l);
        else {
            var k, m = function(a, b, c) {
                k || (k = f.defer(function() {
                    k = null;
                    b && b.value === c || l(a)
                }))
            };
            a.on("keydown", function(a) {
                var b = a.keyCode;
                91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || m(a, this, this.value)
            });
            if (e.hasEvent("paste")) a.on("paste cut", m)
        }
        a.on("change", l);
        d.$render = function() {
            a.val(d.$isEmpty(d.$viewValue) ? "" : d.$viewValue)
        }
    }

    function Lb(b, a) {
        return function(c, d) {
            var e, f;
            if (qa(c)) return c;
            if (F(c)) {
                '"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1));
                if (Nf.test(c)) return new Date(c);
                b.lastIndex =
                    0;
                if (e = b.exec(c)) return e.shift(), f = d ? {
                    yyyy: d.getFullYear(),
                    MM: d.getMonth() + 1,
                    dd: d.getDate(),
                    HH: d.getHours(),
                    mm: d.getMinutes(),
                    ss: d.getSeconds(),
                    sss: d.getMilliseconds() / 1E3
                } : {
                    yyyy: 1970,
                    MM: 1,
                    dd: 1,
                    HH: 0,
                    mm: 0,
                    ss: 0,
                    sss: 0
                }, s(e, function(b, c) {
                    c < a.length && (f[a[c]] = +b)
                }), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1E3 * f.sss || 0)
            }
            return NaN
        }
    }

    function jb(b, a, c, d) {
        return function(e, f, g, h, l, k, m) {
            function n(a) {
                return a && !(a.getTime && a.getTime() !== a.getTime())
            }

            function q(a) {
                return y(a) ? qa(a) ? a : c(a) : t
            }
            td(e, f, g, h);
            ib(e, f, g, h, l, k);
            var u = h && h.$options && h.$options.timezone,
                r;
            h.$$parserName = b;
            h.$parsers.push(function(b) {
                return h.$isEmpty(b) ? null : a.test(b) ? (b = c(b, r), "UTC" === u && b.setMinutes(b.getMinutes() - b.getTimezoneOffset()), b) : t
            });
            h.$formatters.push(function(a) {
                if (a && !qa(a)) throw Mb("datefmt", a);
                if (n(a)) {
                    if ((r = a) && "UTC" === u) {
                        var b = 6E4 * r.getTimezoneOffset();
                        r = new Date(r.getTime() + b)
                    }
                    return m("date")(a, d, u)
                }
                r = null;
                return ""
            });
            if (y(g.min) || g.ngMin) {
                var s;
                h.$validators.min = function(a) {
                    return !n(a) || A(s) || c(a) >= s
                };
                g.$observe("min", function(a) {
                    s = q(a);
                    h.$validate()
                })
            }
            if (y(g.max) || g.ngMax) {
                var p;
                h.$validators.max = function(a) {
                    return !n(a) || A(p) || c(a) <= p
                };
                g.$observe("max", function(a) {
                    p = q(a);
                    h.$validate()
                })
            }
        }
    }

    function td(b, a, c, d) {
        (d.$$hasNativeValidators = I(a[0].validity)) && d.$parsers.push(function(b) {
            var c = a.prop("validity") || {};
            return c.badInput && !c.typeMismatch ? t : b
        })
    }

    function ud(b, a, c, d, e) {
        if (y(d)) {
            b = b(d);
            if (!b.constant) throw T("ngModel")("constexpr", c, d);
            return b(a)
        }
        return e
    }

    function ic(b, a) {
        b = "ngClass" + b;
        return ["$animate",
            function(c) {
                function d(a, b) {
                    var c = [],
                        d = 0;
                    a: for (; d < a.length; d++) {
                        for (var e = a[d], m = 0; m < b.length; m++)
                            if (e == b[m]) continue a;
                        c.push(e)
                    }
                    return c
                }

                function e(a) {
                    if (!D(a)) {
                        if (F(a)) return a.split(" ");
                        if (I(a)) {
                            var b = [];
                            s(a, function(a, c) {
                                a && (b = b.concat(c.split(" ")))
                            });
                            return b
                        }
                    }
                    return a
                }
                return {
                    restrict: "AC",
                    link: function(f, g, h) {
                        function l(a, b) {
                            var c = g.data("$classCounts") || {},
                                d = [];
                            s(a, function(a) {
                                if (0 < b || c[a]) c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a)
                            });
                            g.data("$classCounts", c);
                            return d.join(" ")
                        }

                        function k(b) {
                            if (!0 ===
                                a || f.$index % 2 === a) {
                                var k = e(b || []);
                                if (!m) {
                                    var u = l(k, 1);
                                    h.$addClass(u)
                                } else if (!fa(b, m)) {
                                    var r = e(m),
                                        u = d(k, r),
                                        k = d(r, k),
                                        u = l(u, 1),
                                        k = l(k, -1);
                                    u && u.length && c.addClass(g, u);
                                    k && k.length && c.removeClass(g, k)
                                }
                            }
                            m = ra(b)
                        }
                        var m;
                        f.$watch(h[b], k, !0);
                        h.$observe("class", function(a) {
                            k(f.$eval(h[b]))
                        });
                        "ngClass" !== b && f.$watch("$index", function(c, d) {
                            var g = c & 1;
                            if (g !== (d & 1)) {
                                var k = e(f.$eval(h[b]));
                                g === a ? (g = l(k, 1), h.$addClass(g)) : (g = l(k, -1), h.$removeClass(g))
                            }
                        })
                    }
                }
            }
        ]
    }

    function sd(b) {
        function a(a, b) {
            b && !f[a] ? (k.addClass(e, a),
                f[a] = !0) : !b && f[a] && (k.removeClass(e, a), f[a] = !1)
        }

        function c(b, c) {
            b = b ? "-" + tc(b, "-") : "";
            a(kb + b, !0 === c);
            a(vd + b, !1 === c)
        }
        var d = b.ctrl,
            e = b.$element,
            f = {},
            g = b.set,
            h = b.unset,
            l = b.parentForm,
            k = b.$animate;
        f[vd] = !(f[kb] = e.hasClass(kb));
        d.$setValidity = function(b, e, f) {
            e === t ? (d.$pending || (d.$pending = {}), g(d.$pending, b, f)) : (d.$pending && h(d.$pending, b, f), wd(d.$pending) && (d.$pending = t));
            Wa(e) ? e ? (h(d.$error, b, f), g(d.$$success, b, f)) : (g(d.$error, b, f), h(d.$$success, b, f)) : (h(d.$error, b, f), h(d.$$success, b, f));
            d.$pending ? (a(xd, !0), d.$valid = d.$invalid = t, c("", null)) : (a(xd, !1), d.$valid = wd(d.$error), d.$invalid = !d.$valid, c("", d.$valid));
            e = d.$pending && d.$pending[b] ? t : d.$error[b] ? !1 : d.$$success[b] ? !0 : null;
            c(b, e);
            l.$setValidity(b, e, d)
        }
    }

    function wd(b) {
        if (b)
            for (var a in b) return !1;
        return !0
    }
    var Of = /^\/(.+)\/([a-z]*)$/,
        Q = function(b) {
            return F(b) ? b.toLowerCase() : b
        },
        rc = Object.prototype.hasOwnProperty,
        ub = function(b) {
            return F(b) ? b.toUpperCase() : b
        },
        Ra, B, sa, Za = [].slice,
        rf = [].splice,
        Pf = [].push,
        Da = Object.prototype.toString,
        Ka = T("ng"),
        ga = M.angular ||
        (M.angular = {}),
        bb, nb = 0;
    Ra = Y.documentMode;
    H.$inject = [];
    pa.$inject = [];
    var D = Array.isArray,
        U = function(b) {
            return F(b) ? b.trim() : b
        },
        gd = function(b) {
            return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        },
        ab = function() {
            if (y(ab.isActive_)) return ab.isActive_;
            var b = !(!Y.querySelector("[ng-csp]") && !Y.querySelector("[data-ng-csp]"));
            if (!b) try {
                new Function("")
            } catch (a) {
                b = !0
            }
            return ab.isActive_ = b
        },
        rb = ["ng-", "data-ng-", "ng:", "x-ng-"],
        Md = /[A-Z]/g,
        uc = !1,
        Pb, oa = 1,
        pb = 3,
        Qd = {
            full: "1.3.11",
            major: 1,
            minor: 3,
            dot: 11,
            codeName: "spiffy-manatee"
        };
    R.expando = "ng339";
    var zb = R.cache = {},
        hf = 1;
    R._data = function(b) {
        return this.cache[b[this.expando]] || {}
    };
    var cf = /([\:\-\_]+(.))/g,
        df = /^moz([A-Z])/,
        Qf = {
            mouseleave: "mouseout",
            mouseenter: "mouseover"
        },
        Sb = T("jqLite"),
        gf = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Rb = /<|&#?\w+;/,
        ef = /<([\w:]+)/,
        ff = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ia = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>",
                "</colgroup></table>"
            ],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ia.optgroup = ia.option;
    ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead;
    ia.th = ia.td;
    var La = R.prototype = {
            ready: function(b) {
                function a() {
                    c || (c = !0, b())
                }
                var c = !1;
                "complete" === Y.readyState ? setTimeout(a) : (this.on("DOMContentLoaded", a), R(M).on("load", a))
            },
            toString: function() {
                var b = [];
                s(this, function(a) {
                    b.push("" + a)
                });
                return "[" + b.join(", ") + "]"
            },
            eq: function(b) {
                return 0 <=
                    b ? B(this[b]) : B(this[this.length + b])
            },
            length: 0,
            push: Pf,
            sort: [].sort,
            splice: [].splice
        },
        Eb = {};
    s("multiple selected checked disabled readOnly required open".split(" "), function(b) {
        Eb[Q(b)] = b
    });
    var Mc = {};
    s("input select option textarea button form details".split(" "), function(b) {
        Mc[b] = !0
    });
    var Nc = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern"
    };
    s({
        data: Ub,
        removeData: xb
    }, function(b, a) {
        R[a] = b
    });
    s({
        data: Ub,
        inheritedData: Db,
        scope: function(b) {
            return B.data(b, "$scope") ||
                Db(b.parentNode || b, ["$isolateScope", "$scope"])
        },
        isolateScope: function(b) {
            return B.data(b, "$isolateScope") || B.data(b, "$isolateScopeNoTemplate")
        },
        controller: Ic,
        injector: function(b) {
            return Db(b, "$injector")
        },
        removeAttr: function(b, a) {
            b.removeAttribute(a)
        },
        hasClass: Ab,
        css: function(b, a, c) {
            a = cb(a);
            if (y(c)) b.style[a] = c;
            else return b.style[a]
        },
        attr: function(b, a, c) {
            var d = Q(a);
            if (Eb[d])
                if (y(c)) c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d));
                else return b[a] || (b.attributes.getNamedItem(a) || H).specified ?
                    d : t;
            else if (y(c)) b.setAttribute(a, c);
            else if (b.getAttribute) return b = b.getAttribute(a, 2), null === b ? t : b
        },
        prop: function(b, a, c) {
            if (y(c)) b[a] = c;
            else return b[a]
        },
        text: function() {
            function b(a, b) {
                if (A(b)) {
                    var d = a.nodeType;
                    return d === oa || d === pb ? a.textContent : ""
                }
                a.textContent = b
            }
            b.$dv = "";
            return b
        }(),
        val: function(b, a) {
            if (A(a)) {
                if (b.multiple && "select" === ua(b)) {
                    var c = [];
                    s(b.options, function(a) {
                        a.selected && c.push(a.value || a.text)
                    });
                    return 0 === c.length ? null : c
                }
                return b.value
            }
            b.value = a
        },
        html: function(b, a) {
            if (A(a)) return b.innerHTML;
            wb(b, !0);
            b.innerHTML = a
        },
        empty: Jc
    }, function(b, a) {
        R.prototype[a] = function(a, d) {
            var e, f, g = this.length;
            if (b !== Jc && (2 == b.length && b !== Ab && b !== Ic ? a : d) === t) {
                if (I(a)) {
                    for (e = 0; e < g; e++)
                        if (b === Ub) b(this[e], a);
                        else
                            for (f in a) b(this[e], f, a[f]);
                    return this
                }
                e = b.$dv;
                g = e === t ? Math.min(g, 1) : g;
                for (f = 0; f < g; f++) {
                    var h = b(this[f], a, d);
                    e = e ? e + h : h
                }
                return e
            }
            for (e = 0; e < g; e++) b(this[e], a, d);
            return this
        }
    });
    s({
        removeData: xb,
        on: function a(c, d, e, f) {
            if (y(f)) throw Sb("onargs");
            if (Ec(c)) {
                var g = yb(c, !0);
                f = g.events;
                var h = g.handle;
                h || (h =
                    g.handle = lf(c, f));
                for (var g = 0 <= d.indexOf(" ") ? d.split(" ") : [d], l = g.length; l--;) {
                    d = g[l];
                    var k = f[d];
                    k || (f[d] = [], "mouseenter" === d || "mouseleave" === d ? a(c, Qf[d], function(a) {
                        var c = a.relatedTarget;
                        c && (c === this || this.contains(c)) || h(a, d)
                    }) : "$destroy" !== d && c.addEventListener(d, h, !1), k = f[d]);
                    k.push(e)
                }
            }
        },
        off: Hc,
        one: function(a, c, d) {
            a = B(a);
            a.on(c, function f() {
                a.off(c, d);
                a.off(c, f)
            });
            a.on(c, d)
        },
        replaceWith: function(a, c) {
            var d, e = a.parentNode;
            wb(a);
            s(new R(c), function(c) {
                d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c,
                    a);
                d = c
            })
        },
        children: function(a) {
            var c = [];
            s(a.childNodes, function(a) {
                a.nodeType === oa && c.push(a)
            });
            return c
        },
        contents: function(a) {
            return a.contentDocument || a.childNodes || []
        },
        append: function(a, c) {
            var d = a.nodeType;
            if (d === oa || 11 === d) {
                c = new R(c);
                for (var d = 0, e = c.length; d < e; d++) a.appendChild(c[d])
            }
        },
        prepend: function(a, c) {
            if (a.nodeType === oa) {
                var d = a.firstChild;
                s(new R(c), function(c) {
                    a.insertBefore(c, d)
                })
            }
        },
        wrap: function(a, c) {
            c = B(c).eq(0).clone()[0];
            var d = a.parentNode;
            d && d.replaceChild(c, a);
            c.appendChild(a)
        },
        remove: Kc,
        detach: function(a) {
            Kc(a, !0)
        },
        after: function(a, c) {
            var d = a,
                e = a.parentNode;
            c = new R(c);
            for (var f = 0, g = c.length; f < g; f++) {
                var h = c[f];
                e.insertBefore(h, d.nextSibling);
                d = h
            }
        },
        addClass: Cb,
        removeClass: Bb,
        toggleClass: function(a, c, d) {
            c && s(c.split(" "), function(c) {
                var f = d;
                A(f) && (f = !Ab(a, c));
                (f ? Cb : Bb)(a, c)
            })
        },
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        },
        next: function(a) {
            return a.nextElementSibling
        },
        find: function(a, c) {
            return a.getElementsByTagName ? a.getElementsByTagName(c) : []
        },
        clone: Tb,
        triggerHandler: function(a, c, d) {
            var e, f, g = c.type || c,
                h = yb(a);
            if (h = (h = h && h.events) && h[g]) e = {
                preventDefault: function() {
                    this.defaultPrevented = !0
                },
                isDefaultPrevented: function() {
                    return !0 === this.defaultPrevented
                },
                stopImmediatePropagation: function() {
                    this.immediatePropagationStopped = !0
                },
                isImmediatePropagationStopped: function() {
                    return !0 === this.immediatePropagationStopped
                },
                stopPropagation: H,
                type: g,
                target: a
            }, c.type && (e = z(e, c)), c = ra(h), f = d ? [e].concat(d) : [e], s(c, function(c) {
                e.isImmediatePropagationStopped() || c.apply(a,
                    f)
            })
        }
    }, function(a, c) {
        R.prototype[c] = function(c, e, f) {
            for (var g, h = 0, l = this.length; h < l; h++) A(g) ? (g = a(this[h], c, e, f), y(g) && (g = B(g))) : Gc(g, a(this[h], c, e, f));
            return y(g) ? g : this
        };
        R.prototype.bind = R.prototype.on;
        R.prototype.unbind = R.prototype.off
    });
    db.prototype = {
        put: function(a, c) {
            this[Na(a, this.nextUid)] = c
        },
        get: function(a) {
            return this[Na(a, this.nextUid)]
        },
        remove: function(a) {
            var c = this[a = Na(a, this.nextUid)];
            delete this[a];
            return c
        }
    };
    var Pc = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
        nf = /,/,
        of = /^\s*(_?)(\S+?)\1\s*$/,
        Oc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
        Ga = T("$injector");
    Ob.$$annotate = Vb;
    var Rf = T("$animate"),
        Ce = ["$provide", function(a) {
            this.$$selectors = {};
            this.register = function(c, d) {
                var e = c + "-animation";
                if (c && "." != c.charAt(0)) throw Rf("notcsel", c);
                this.$$selectors[c.substr(1)] = e;
                a.factory(e, d)
            };
            this.classNameFilter = function(a) {
                1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null);
                return this.$$classNameFilter
            };
            this.$get = ["$$q", "$$asyncCallback", "$rootScope", function(a, d, e) {
                function f(d) {
                    var f,
                        g = a.defer();
                    g.promise.$$cancelFn = function() {
                        f && f()
                    };
                    e.$$postDigest(function() {
                        f = d(function() {
                            g.resolve()
                        })
                    });
                    return g.promise
                }

                function g(a, c) {
                    var d = [],
                        e = [],
                        f = ha();
                    s((a.attr("class") || "").split(/\s+/), function(a) {
                        f[a] = !0
                    });
                    s(c, function(a, c) {
                        var g = f[c];
                        !1 === a && g ? e.push(c) : !0 !== a || g || d.push(c)
                    });
                    return 0 < d.length + e.length && [d.length ? d : null, e.length ? e : null]
                }

                function h(a, c, d) {
                    for (var e = 0, f = c.length; e < f; ++e) a[c[e]] = d
                }

                function l() {
                    m || (m = a.defer(), d(function() {
                        m.resolve();
                        m = null
                    }));
                    return m.promise
                }

                function k(a,
                    c) {
                    if (ga.isObject(c)) {
                        var d = z(c.from || {}, c.to || {});
                        a.css(d)
                    }
                }
                var m;
                return {
                    animate: function(a, c, d) {
                        k(a, {
                            from: c,
                            to: d
                        });
                        return l()
                    },
                    enter: function(a, c, d, e) {
                        k(a, e);
                        d ? d.after(a) : c.prepend(a);
                        return l()
                    },
                    leave: function(a, c) {
                        a.remove();
                        return l()
                    },
                    move: function(a, c, d, e) {
                        return this.enter(a, c, d, e)
                    },
                    addClass: function(a, c, d) {
                        return this.setClass(a, c, [], d)
                    },
                    $$addClassImmediately: function(a, c, d) {
                        a = B(a);
                        c = F(c) ? c : D(c) ? c.join(" ") : "";
                        s(a, function(a) {
                            Cb(a, c)
                        });
                        k(a, d);
                        return l()
                    },
                    removeClass: function(a, c, d) {
                        return this.setClass(a, [], c, d)
                    },
                    $$removeClassImmediately: function(a, c, d) {
                        a = B(a);
                        c = F(c) ? c : D(c) ? c.join(" ") : "";
                        s(a, function(a) {
                            Bb(a, c)
                        });
                        k(a, d);
                        return l()
                    },
                    setClass: function(a, c, d, e) {
                        var k = this,
                            l = !1;
                        a = B(a);
                        var m = a.data("$$animateClasses");
                        m ? e && m.options && (m.options = ga.extend(m.options || {}, e)) : (m = {
                            classes: {},
                            options: e
                        }, l = !0);
                        e = m.classes;
                        c = D(c) ? c : c.split(" ");
                        d = D(d) ? d : d.split(" ");
                        h(e, c, !0);
                        h(e, d, !1);
                        l && (m.promise = f(function(c) {
                            var d = a.data("$$animateClasses");
                            a.removeData("$$animateClasses");
                            if (d) {
                                var e = g(a, d.classes);
                                e &&
                                    k.$$setClassImmediately(a, e[0], e[1], d.options)
                            }
                            c()
                        }), a.data("$$animateClasses", m));
                        return m.promise
                    },
                    $$setClassImmediately: function(a, c, d, e) {
                        c && this.$$addClassImmediately(a, c);
                        d && this.$$removeClassImmediately(a, d);
                        k(a, e);
                        return l()
                    },
                    enabled: H,
                    cancel: H
                }
            }]
        }],
        ja = T("$compile");
    wc.$inject = ["$provide", "$$sanitizeUriProvider"];
    var Rc = /^((?:x|data)[\:\-_])/i,
        Vc = "application/json",
        Zb = {
            "Content-Type": Vc + ";charset=utf-8"
        },
        tf = /^\[|^\{(?!\{)/,
        uf = {
            "[": /]$/,
            "{": /}$/
        },
        sf = /^\)\]\}',?\n/,
        $b = T("$interpolate"),
        Sf = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
        xf = {
            http: 80,
            https: 443,
            ftp: 21
        },
        Fb = T("$location"),
        Tf = {
            $$html5: !1,
            $$replace: !1,
            absUrl: Gb("$$absUrl"),
            url: function(a) {
                if (A(a)) return this.$$url;
                var c = Sf.exec(a);
                (c[1] || "" === a) && this.path(decodeURIComponent(c[1]));
                (c[2] || c[1] || "" === a) && this.search(c[3] || "");
                this.hash(c[5] || "");
                return this
            },
            protocol: Gb("$$protocol"),
            host: Gb("$$host"),
            port: Gb("$$port"),
            path: dd("$$path", function(a) {
                a = null !== a ? a.toString() : "";
                return "/" == a.charAt(0) ? a : "/" + a
            }),
            search: function(a, c) {
                switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (F(a) || V(a)) a = a.toString(), this.$$search = qc(a);
                        else if (I(a)) a = Ea(a, {}), s(a, function(c, e) {
                            null == c && delete a[e]
                        }), this.$$search = a;
                        else throw Fb("isrcharg");
                        break;
                    default:
                        A(c) || null === c ? delete this.$$search[a] : this.$$search[a] = c
                }
                this.$$compose();
                return this
            },
            hash: dd("$$hash", function(a) {
                return null !== a ? a.toString() : ""
            }),
            replace: function() {
                this.$$replace = !0;
                return this
            }
        };
    s([cd, dc, cc], function(a) {
        a.prototype = Object.create(Tf);
        a.prototype.state = function(c) {
            if (!arguments.length) return this.$$state;
            if (a !== cc || !this.$$html5) throw Fb("nostate");
            this.$$state = A(c) ? null : c;
            return this
        }
    });
    var la = T("$parse"),
        Uf = Function.prototype.call,
        Vf = Function.prototype.apply,
        Wf = Function.prototype.bind,
        lb = ha();
    s({
        "null": function() {
            return null
        },
        "true": function() {
            return !0
        },
        "false": function() {
            return !1
        },
        undefined: function() {}
    }, function(a, c) {
        a.constant = a.literal = a.sharedGetter = !0;
        lb[c] = a
    });
    lb["this"] = function(a) {
        return a
    };
    lb["this"].sharedGetter = !0;
    var mb = z(ha(), {
            "+": function(a, c, d, e) {
                d = d(a, c);
                e = e(a, c);
                return y(d) ? y(e) ?
                    d + e : d : y(e) ? e : t
            },
            "-": function(a, c, d, e) {
                d = d(a, c);
                e = e(a, c);
                return (y(d) ? d : 0) - (y(e) ? e : 0)
            },
            "*": function(a, c, d, e) {
                return d(a, c) * e(a, c)
            },
            "/": function(a, c, d, e) {
                return d(a, c) / e(a, c)
            },
            "%": function(a, c, d, e) {
                return d(a, c) % e(a, c)
            },
            "===": function(a, c, d, e) {
                return d(a, c) === e(a, c)
            },
            "!==": function(a, c, d, e) {
                return d(a, c) !== e(a, c)
            },
            "==": function(a, c, d, e) {
                return d(a, c) == e(a, c)
            },
            "!=": function(a, c, d, e) {
                return d(a, c) != e(a, c)
            },
            "<": function(a, c, d, e) {
                return d(a, c) < e(a, c)
            },
            ">": function(a, c, d, e) {
                return d(a, c) > e(a, c)
            },
            "<=": function(a,
                c, d, e) {
                return d(a, c) <= e(a, c)
            },
            ">=": function(a, c, d, e) {
                return d(a, c) >= e(a, c)
            },
            "&&": function(a, c, d, e) {
                return d(a, c) && e(a, c)
            },
            "||": function(a, c, d, e) {
                return d(a, c) || e(a, c)
            },
            "!": function(a, c, d) {
                return !d(a, c)
            },
            "=": !0,
            "|": !0
        }),
        Xf = {
            n: "\n",
            f: "\f",
            r: "\r",
            t: "\t",
            v: "\v",
            "'": "'",
            '"': '"'
        },
        gc = function(a) {
            this.options = a
        };
    gc.prototype = {
        constructor: gc,
        lex: function(a) {
            this.text = a;
            this.index = 0;
            for (this.tokens = []; this.index < this.text.length;)
                if (a = this.text.charAt(this.index), '"' === a || "'" === a) this.readString(a);
                else if (this.isNumber(a) ||
                "." === a && this.isNumber(this.peek())) this.readNumber();
            else if (this.isIdent(a)) this.readIdent();
            else if (this.is(a, "(){}[].,;:?")) this.tokens.push({
                index: this.index,
                text: a
            }), this.index++;
            else if (this.isWhitespace(a)) this.index++;
            else {
                var c = a + this.peek(),
                    d = c + this.peek(2),
                    e = mb[c],
                    f = mb[d];
                mb[a] || e || f ? (a = f ? d : e ? c : a, this.tokens.push({
                    index: this.index,
                    text: a,
                    operator: !0
                }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1)
            }
            return this.tokens
        },
        is: function(a, c) {
            return -1 !==
                c.indexOf(a)
        },
        peek: function(a) {
            a = a || 1;
            return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1
        },
        isNumber: function(a) {
            return "0" <= a && "9" >= a && "string" === typeof a
        },
        isWhitespace: function(a) {
            return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\u00a0" === a
        },
        isIdent: function(a) {
            return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a
        },
        isExpOperator: function(a) {
            return "-" === a || "+" === a || this.isNumber(a)
        },
        throwError: function(a, c, d) {
            d = d || this.index;
            c = y(c) ? "s " + c + "-" + this.index + " [" + this.text.substring(c,
                d) + "]" : " " + d;
            throw la("lexerr", a, c, this.text);
        },
        readNumber: function() {
            for (var a = "", c = this.index; this.index < this.text.length;) {
                var d = Q(this.text.charAt(this.index));
                if ("." == d || this.isNumber(d)) a += d;
                else {
                    var e = this.peek();
                    if ("e" == d && this.isExpOperator(e)) a += d;
                    else if (this.isExpOperator(d) && e && this.isNumber(e) && "e" == a.charAt(a.length - 1)) a += d;
                    else if (!this.isExpOperator(d) || e && this.isNumber(e) || "e" != a.charAt(a.length - 1)) break;
                    else this.throwError("Invalid exponent")
                }
                this.index++
            }
            this.tokens.push({
                index: c,
                text: a,
                constant: !0,
                value: Number(a)
            })
        },
        readIdent: function() {
            for (var a = this.index; this.index < this.text.length;) {
                var c = this.text.charAt(this.index);
                if (!this.isIdent(c) && !this.isNumber(c)) break;
                this.index++
            }
            this.tokens.push({
                index: a,
                text: this.text.slice(a, this.index),
                identifier: !0
            })
        },
        readString: function(a) {
            var c = this.index;
            this.index++;
            for (var d = "", e = a, f = !1; this.index < this.text.length;) {
                var g = this.text.charAt(this.index),
                    e = e + g;
                if (f) "u" === g ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) ||
                    this.throwError("Invalid unicode escape [\\u" + f + "]"), this.index += 4, d += String.fromCharCode(parseInt(f, 16))) : d += Xf[g] || g, f = !1;
                else if ("\\" === g) f = !0;
                else {
                    if (g === a) {
                        this.index++;
                        this.tokens.push({
                            index: c,
                            text: e,
                            constant: !0,
                            value: d
                        });
                        return
                    }
                    d += g
                }
                this.index++
            }
            this.throwError("Unterminated quote", c)
        }
    };
    var hb = function(a, c, d) {
        this.lexer = a;
        this.$filter = c;
        this.options = d
    };
    hb.ZERO = z(function() {
        return 0
    }, {
        sharedGetter: !0,
        constant: !0
    });
    hb.prototype = {
        constructor: hb,
        parse: function(a) {
            this.text = a;
            this.tokens = this.lexer.lex(a);
            a = this.statements();
            0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
            a.literal = !!a.literal;
            a.constant = !!a.constant;
            return a
        },
        primary: function() {
            var a;
            this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.peek().identifier && this.peek().text in lb ? a = lb[this.consume().text] : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression",
                this.peek());
            for (var c, d; c = this.expect("(", "[", ".");) "(" === c.text ? (a = this.functionCall(a, d), d = null) : "[" === c.text ? (d = a, a = this.objectIndex(a)) : "." === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
            return a
        },
        throwError: function(a, c) {
            throw la("syntax", c.text, a, c.index + 1, this.text, this.text.substring(c.index));
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw la("ueoe", this.text);
            return this.tokens[0]
        },
        peek: function(a, c, d, e) {
            return this.peekAhead(0, a, c, d, e)
        },
        peekAhead: function(a,
            c, d, e, f) {
            if (this.tokens.length > a) {
                a = this.tokens[a];
                var g = a.text;
                if (g === c || g === d || g === e || g === f || !(c || d || e || f)) return a
            }
            return !1
        },
        expect: function(a, c, d, e) {
            return (a = this.peek(a, c, d, e)) ? (this.tokens.shift(), a) : !1
        },
        consume: function(a) {
            if (0 === this.tokens.length) throw la("ueoe", this.text);
            var c = this.expect(a);
            c || this.throwError("is unexpected, expecting [" + a + "]", this.peek());
            return c
        },
        unaryFn: function(a, c) {
            var d = mb[a];
            return z(function(a, f) {
                return d(a, f, c)
            }, {
                constant: c.constant,
                inputs: [c]
            })
        },
        binaryFn: function(a,
            c, d, e) {
            var f = mb[c];
            return z(function(c, e) {
                return f(c, e, a, d)
            }, {
                constant: a.constant && d.constant,
                inputs: !e && [a, d]
            })
        },
        identifier: function() {
            for (var a = this.consume().text; this.peek(".") && this.peekAhead(1).identifier && !this.peekAhead(2, "(");) a += this.consume().text + this.consume().text;
            return zf(a, this.options, this.text)
        },
        constant: function() {
            var a = this.consume().value;
            return z(function() {
                return a
            }, {
                constant: !0,
                literal: !0
            })
        },
        statements: function() {
            for (var a = [];;)
                if (0 < this.tokens.length && !this.peek("}", ")",
                        ";", "]") && a.push(this.filterChain()), !this.expect(";")) return 1 === a.length ? a[0] : function(c, d) {
                    for (var e, f = 0, g = a.length; f < g; f++) e = a[f](c, d);
                    return e
                }
        },
        filterChain: function() {
            for (var a = this.expression(); this.expect("|");) a = this.filter(a);
            return a
        },
        filter: function(a) {
            var c = this.$filter(this.consume().text),
                d, e;
            if (this.peek(":"))
                for (d = [], e = []; this.expect(":");) d.push(this.expression());
            var f = [a].concat(d || []);
            return z(function(f, h) {
                var l = a(f, h);
                if (e) {
                    e[0] = l;
                    for (l = d.length; l--;) e[l + 1] = d[l](f, h);
                    return c.apply(t,
                        e)
                }
                return c(l)
            }, {
                constant: !c.$stateful && f.every(ec),
                inputs: !c.$stateful && f
            })
        },
        expression: function() {
            return this.assignment()
        },
        assignment: function() {
            var a = this.ternary(),
                c, d;
            return (d = this.expect("=")) ? (a.assign || this.throwError("implies assignment but [" + this.text.substring(0, d.index) + "] can not be assigned to", d), c = this.ternary(), z(function(d, f) {
                return a.assign(d, c(d, f), f)
            }, {
                inputs: [a, c]
            })) : a
        },
        ternary: function() {
            var a = this.logicalOR(),
                c;
            if (this.expect("?") && (c = this.assignment(), this.consume(":"))) {
                var d =
                    this.assignment();
                return z(function(e, f) {
                    return a(e, f) ? c(e, f) : d(e, f)
                }, {
                    constant: a.constant && c.constant && d.constant
                })
            }
            return a
        },
        logicalOR: function() {
            for (var a = this.logicalAND(), c; c = this.expect("||");) a = this.binaryFn(a, c.text, this.logicalAND(), !0);
            return a
        },
        logicalAND: function() {
            for (var a = this.equality(), c; c = this.expect("&&");) a = this.binaryFn(a, c.text, this.equality(), !0);
            return a
        },
        equality: function() {
            for (var a = this.relational(), c; c = this.expect("==", "!=", "===", "!==");) a = this.binaryFn(a, c.text, this.relational());
            return a
        },
        relational: function() {
            for (var a = this.additive(), c; c = this.expect("<", ">", "<=", ">=");) a = this.binaryFn(a, c.text, this.additive());
            return a
        },
        additive: function() {
            for (var a = this.multiplicative(), c; c = this.expect("+", "-");) a = this.binaryFn(a, c.text, this.multiplicative());
            return a
        },
        multiplicative: function() {
            for (var a = this.unary(), c; c = this.expect("*", "/", "%");) a = this.binaryFn(a, c.text, this.unary());
            return a
        },
        unary: function() {
            var a;
            return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(hb.ZERO,
                a.text, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.text, this.unary()) : this.primary()
        },
        fieldAccess: function(a) {
            var c = this.identifier();
            return z(function(d, e, f) {
                d = f || a(d, e);
                return null == d ? t : c(d)
            }, {
                assign: function(d, e, f) {
                    var g = a(d, f);
                    g || a.assign(d, g = {}, f);
                    return c.assign(g, e)
                }
            })
        },
        objectIndex: function(a) {
            var c = this.text,
                d = this.expression();
            this.consume("]");
            return z(function(e, f) {
                var g = a(e, f),
                    h = d(e, f);
                ta(h, c);
                return g ? ma(g[h], c) : t
            }, {
                assign: function(e, f, g) {
                    var h = ta(d(e, g), c),
                        l = ma(a(e, g), c);
                    l || a.assign(e,
                        l = {}, g);
                    return l[h] = f
                }
            })
        },
        functionCall: function(a, c) {
            var d = [];
            if (")" !== this.peekToken().text) {
                do d.push(this.expression()); while (this.expect(","))
            }
            this.consume(")");
            var e = this.text,
                f = d.length ? [] : null;
            return function(g, h) {
                var l = c ? c(g, h) : y(c) ? t : g,
                    k = a(g, h, l) || H;
                if (f)
                    for (var m = d.length; m--;) f[m] = ma(d[m](g, h), e);
                ma(l, e);
                if (k) {
                    if (k.constructor === k) throw la("isecfn", e);
                    if (k === Uf || k === Vf || k === Wf) throw la("isecff", e);
                }
                l = k.apply ? k.apply(l, f) : k(f[0], f[1], f[2], f[3], f[4]);
                return ma(l, e)
            }
        },
        arrayDeclaration: function() {
            var a = [];
            if ("]" !== this.peekToken().text) {
                do {
                    if (this.peek("]")) break;
                    a.push(this.expression())
                } while (this.expect(","))
            }
            this.consume("]");
            return z(function(c, d) {
                for (var e = [], f = 0, g = a.length; f < g; f++) e.push(a[f](c, d));
                return e
            }, {
                literal: !0,
                constant: a.every(ec),
                inputs: a
            })
        },
        object: function() {
            var a = [],
                c = [];
            if ("}" !== this.peekToken().text) {
                do {
                    if (this.peek("}")) break;
                    var d = this.consume();
                    d.constant ? a.push(d.value) : d.identifier ? a.push(d.text) : this.throwError("invalid key", d);
                    this.consume(":");
                    c.push(this.expression())
                } while (this.expect(","))
            }
            this.consume("}");
            return z(function(d, f) {
                for (var g = {}, h = 0, l = c.length; h < l; h++) g[a[h]] = c[h](d, f);
                return g
            }, {
                literal: !0,
                constant: c.every(ec),
                inputs: c
            })
        }
    };
    var Bf = ha(),
        Af = ha(),
        Cf = Object.prototype.valueOf,
        Ca = T("$sce"),
        na = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        },
        ja = T("$compile"),
        Z = Y.createElement("a"),
        id = Ba(M.location.href);
    Dc.$inject = ["$provide"];
    jd.$inject = ["$locale"];
    ld.$inject = ["$locale"];
    var od = ".",
        Mf = {
            yyyy: $("FullYear", 4),
            yy: $("FullYear", 2, 0, !0),
            y: $("FullYear", 1),
            MMMM: Ib("Month"),
            MMM: Ib("Month", !0),
            MM: $("Month", 2, 1),
            M: $("Month", 1, 1),
            dd: $("Date", 2),
            d: $("Date", 1),
            HH: $("Hours", 2),
            H: $("Hours", 1),
            hh: $("Hours", 2, -12),
            h: $("Hours", 1, -12),
            mm: $("Minutes", 2),
            m: $("Minutes", 1),
            ss: $("Seconds", 2),
            s: $("Seconds", 1),
            sss: $("Milliseconds", 3),
            EEEE: Ib("Day"),
            EEE: Ib("Day", !0),
            a: function(a, c) {
                return 12 > a.getHours() ? c.AMPMS[0] : c.AMPMS[1]
            },
            Z: function(a) {
                a = -1 * a.getTimezoneOffset();
                return a = (0 <= a ? "+" : "") + (Hb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Hb(Math.abs(a % 60), 2))
            },
            ww: qd(2),
            w: qd(1)
        },
        Lf = /((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,
        Kf = /^\-?\d+$/;
    kd.$inject = ["$locale"];
    var Hf = da(Q),
        If = da(ub);
    md.$inject = ["$parse"];
    var Td = da({
            restrict: "E",
            compile: function(a, c) {
                if (!c.href && !c.xlinkHref && !c.name) return function(a, c) {
                    if ("a" === c[0].nodeName.toLowerCase()) {
                        var f = "[object SVGAnimatedString]" === Da.call(c.prop("href")) ? "xlink:href" : "href";
                        c.on("click", function(a) {
                            c.attr(f) || a.preventDefault()
                        })
                    }
                }
            }
        }),
        vb = {};
    s(Eb, function(a, c) {
        if ("multiple" != a) {
            var d = ya("ng-" + c);
            vb[d] = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    link: function(a, f, g) {
                        a.$watch(g[d],
                            function(a) {
                                g.$set(c, !!a)
                            })
                    }
                }
            }
        }
    });
    s(Nc, function(a, c) {
        vb[c] = function() {
            return {
                priority: 100,
                link: function(a, e, f) {
                    if ("ngPattern" === c && "/" == f.ngPattern.charAt(0) && (e = f.ngPattern.match(Of))) {
                        f.$set("ngPattern", new RegExp(e[1], e[2]));
                        return
                    }
                    a.$watch(f[c], function(a) {
                        f.$set(c, a)
                    })
                }
            }
        }
    });
    s(["src", "srcset", "href"], function(a) {
        var c = ya("ng-" + a);
        vb[c] = function() {
            return {
                priority: 99,
                link: function(d, e, f) {
                    var g = a,
                        h = a;
                    "href" === a && "[object SVGAnimatedString]" === Da.call(e.prop("href")) && (h = "xlinkHref", f.$attr[h] = "xlink:href",
                        g = null);
                    f.$observe(c, function(c) {
                        c ? (f.$set(h, c), Ra && g && e.prop(g, f[h])) : "href" === a && f.$set(h, null)
                    })
                }
            }
        }
    });
    var Jb = {
        $addControl: H,
        $$renameControl: function(a, c) {
            a.$name = c
        },
        $removeControl: H,
        $setValidity: H,
        $setDirty: H,
        $setPristine: H,
        $setSubmitted: H
    };
    rd.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var yd = function(a) {
            return ["$timeout", function(c) {
                return {
                    name: "form",
                    restrict: a ? "EAC" : "E",
                    controller: rd,
                    compile: function(a) {
                        a.addClass(Sa).addClass(kb);
                        return {
                            pre: function(a, d, g, h) {
                                if (!("action" in
                                        g)) {
                                    var l = function(c) {
                                        a.$apply(function() {
                                            h.$commitViewValue();
                                            h.$setSubmitted()
                                        });
                                        c.preventDefault()
                                    };
                                    d[0].addEventListener("submit", l, !1);
                                    d.on("$destroy", function() {
                                        c(function() {
                                            d[0].removeEventListener("submit", l, !1)
                                        }, 0, !1)
                                    })
                                }
                                var k = h.$$parentForm,
                                    m = h.$name;
                                m && (gb(a, null, m, h, m), g.$observe(g.name ? "name" : "ngForm", function(c) {
                                    m !== c && (gb(a, null, m, t, m), m = c, gb(a, null, m, h, m), k.$$renameControl(h, m))
                                }));
                                d.on("$destroy", function() {
                                    k.$removeControl(h);
                                    m && gb(a, null, m, t, m);
                                    z(h, Jb)
                                })
                            }
                        }
                    }
                }
            }]
        },
        Ud = yd(),
        ge = yd(!0),
        Nf = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
        Yf = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
        Zf = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
        $f = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
        zd = /^(\d{4})-(\d{2})-(\d{2})$/,
        Ad = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        jc = /^(\d{4})-W(\d\d)$/,
        Bd = /^(\d{4})-(\d\d)$/,
        Cd = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        Dd = {
            text: function(a, c, d, e, f, g) {
                ib(a, c, d, e, f, g);
                hc(e)
            },
            date: jb("date", zd, Lb(zd, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
            "datetime-local": jb("datetimelocal", Ad, Lb(Ad, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"),
            time: jb("time", Cd, Lb(Cd, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
            week: jb("week", jc, function(a, c) {
                if (qa(a)) return a;
                if (F(a)) {
                    jc.lastIndex = 0;
                    var d = jc.exec(a);
                    if (d) {
                        var e = +d[1],
                            f = +d[2],
                            g = d = 0,
                            h = 0,
                            l = 0,
                            k = pd(e),
                            f = 7 * (f - 1);
                        c && (d = c.getHours(), g = c.getMinutes(), h = c.getSeconds(), l = c.getMilliseconds());
                        return new Date(e, 0, k.getDate() + f, d, g, h, l)
                    }
                }
                return NaN
            }, "yyyy-Www"),
            month: jb("month", Bd, Lb(Bd, ["yyyy", "MM"]), "yyyy-MM"),
            number: function(a, c, d, e, f, g) {
                td(a, c, d, e);
                ib(a, c, d, e, f, g);
                e.$$parserName = "number";
                e.$parsers.push(function(a) {
                    return e.$isEmpty(a) ? null : $f.test(a) ? parseFloat(a) : t
                });
                e.$formatters.push(function(a) {
                    if (!e.$isEmpty(a)) {
                        if (!V(a)) throw Mb("numfmt", a);
                        a = a.toString()
                    }
                    return a
                });
                if (d.min || d.ngMin) {
                    var h;
                    e.$validators.min = function(a) {
                        return e.$isEmpty(a) || A(h) || a >= h
                    };
                    d.$observe("min", function(a) {
                        y(a) &&
                            !V(a) && (a = parseFloat(a, 10));
                        h = V(a) && !isNaN(a) ? a : t;
                        e.$validate()
                    })
                }
                if (d.max || d.ngMax) {
                    var l;
                    e.$validators.max = function(a) {
                        return e.$isEmpty(a) || A(l) || a <= l
                    };
                    d.$observe("max", function(a) {
                        y(a) && !V(a) && (a = parseFloat(a, 10));
                        l = V(a) && !isNaN(a) ? a : t;
                        e.$validate()
                    })
                }
            },
            url: function(a, c, d, e, f, g) {
                ib(a, c, d, e, f, g);
                hc(e);
                e.$$parserName = "url";
                e.$validators.url = function(a, c) {
                    var d = a || c;
                    return e.$isEmpty(d) || Yf.test(d)
                }
            },
            email: function(a, c, d, e, f, g) {
                ib(a, c, d, e, f, g);
                hc(e);
                e.$$parserName = "email";
                e.$validators.email = function(a,
                    c) {
                    var d = a || c;
                    return e.$isEmpty(d) || Zf.test(d)
                }
            },
            radio: function(a, c, d, e) {
                A(d.name) && c.attr("name", ++nb);
                c.on("click", function(a) {
                    c[0].checked && e.$setViewValue(d.value, a && a.type)
                });
                e.$render = function() {
                    c[0].checked = d.value == e.$viewValue
                };
                d.$observe("value", e.$render)
            },
            checkbox: function(a, c, d, e, f, g, h, l) {
                var k = ud(l, a, "ngTrueValue", d.ngTrueValue, !0),
                    m = ud(l, a, "ngFalseValue", d.ngFalseValue, !1);
                c.on("click", function(a) {
                    e.$setViewValue(c[0].checked, a && a.type)
                });
                e.$render = function() {
                    c[0].checked = e.$viewValue
                };
                e.$isEmpty = function(a) {
                    return !1 === a
                };
                e.$formatters.push(function(a) {
                    return fa(a, k)
                });
                e.$parsers.push(function(a) {
                    return a ? k : m
                })
            },
            hidden: H,
            button: H,
            submit: H,
            reset: H,
            file: H
        },
        xc = ["$browser", "$sniffer", "$filter", "$parse", function(a, c, d, e) {
            return {
                restrict: "E",
                require: ["?ngModel"],
                link: {
                    pre: function(f, g, h, l) {
                        l[0] && (Dd[Q(h.type)] || Dd.text)(f, g, h, l[0], c, a, d, e)
                    }
                }
            }
        }],
        ag = /^(true|false|\d+)$/,
        ye = function() {
            return {
                restrict: "A",
                priority: 100,
                compile: function(a, c) {
                    return ag.test(c.ngValue) ? function(a, c, f) {
                        f.$set("value",
                            a.$eval(f.ngValue))
                    } : function(a, c, f) {
                        a.$watch(f.ngValue, function(a) {
                            f.$set("value", a)
                        })
                    }
                }
            }
        },
        Zd = ["$compile", function(a) {
            return {
                restrict: "AC",
                compile: function(c) {
                    a.$$addBindingClass(c);
                    return function(c, e, f) {
                        a.$$addBindingInfo(e, f.ngBind);
                        e = e[0];
                        c.$watch(f.ngBind, function(a) {
                            e.textContent = a === t ? "" : a
                        })
                    }
                }
            }
        }],
        ae = ["$interpolate", "$compile", function(a, c) {
            return {
                compile: function(d) {
                    c.$$addBindingClass(d);
                    return function(d, f, g) {
                        d = a(f.attr(g.$attr.ngBindTemplate));
                        c.$$addBindingInfo(f, d.expressions);
                        f = f[0];
                        g.$observe("ngBindTemplate", function(a) {
                            f.textContent = a === t ? "" : a
                        })
                    }
                }
            }
        }],
        $d = ["$sce", "$parse", "$compile", function(a, c, d) {
            return {
                restrict: "A",
                compile: function(e, f) {
                    var g = c(f.ngBindHtml),
                        h = c(f.ngBindHtml, function(a) {
                            return (a || "").toString()
                        });
                    d.$$addBindingClass(e);
                    return function(c, e, f) {
                        d.$$addBindingInfo(e, f.ngBindHtml);
                        c.$watch(h, function() {
                            e.html(a.getTrustedHtml(g(c)) || "")
                        })
                    }
                }
            }
        }],
        xe = da({
            restrict: "A",
            require: "ngModel",
            link: function(a, c, d, e) {
                e.$viewChangeListeners.push(function() {
                    a.$eval(d.ngChange)
                })
            }
        }),
        be = ic("", !0),
        de = ic("Odd", 0),
        ce = ic("Even", 1),
        ee = Ja({
            compile: function(a, c) {
                c.$set("ngCloak", t);
                a.removeClass("ng-cloak")
            }
        }),
        fe = [function() {
            return {
                restrict: "A",
                scope: !0,
                controller: "@",
                priority: 500
            }
        }],
        Cc = {},
        bg = {
            blur: !0,
            focus: !0
        };
    s("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
        var c = ya("ng-" + a);
        Cc[c] = ["$parse", "$rootScope", function(d, e) {
            return {
                restrict: "A",
                compile: function(f, g) {
                    var h =
                        d(g[c], null, !0);
                    return function(c, d) {
                        d.on(a, function(d) {
                            var f = function() {
                                h(c, {
                                    $event: d
                                })
                            };
                            bg[a] && e.$$phase ? c.$evalAsync(f) : c.$apply(f)
                        })
                    }
                }
            }
        }]
    });
    var ie = ["$animate", function(a) {
            return {
                multiElement: !0,
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function(c, d, e, f, g) {
                    var h, l, k;
                    c.$watch(e.ngIf, function(c) {
                        c ? l || g(function(c, f) {
                            l = f;
                            c[c.length++] = Y.createComment(" end ngIf: " + e.ngIf + " ");
                            h = {
                                clone: c
                            };
                            a.enter(c, d.parent(), d)
                        }) : (k && (k.remove(), k = null), l && (l.$destroy(), l = null), h && (k =
                            tb(h.clone), a.leave(k).then(function() {
                                k = null
                            }), h = null))
                    })
                }
            }
        }],
        je = ["$templateRequest", "$anchorScroll", "$animate", "$sce", function(a, c, d, e) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: ga.noop,
                compile: function(f, g) {
                    var h = g.ngInclude || g.src,
                        l = g.onload || "",
                        k = g.autoscroll;
                    return function(f, g, q, s, r) {
                        var t = 0,
                            p, v, w, L = function() {
                                v && (v.remove(), v = null);
                                p && (p.$destroy(), p = null);
                                w && (d.leave(w).then(function() {
                                    v = null
                                }), v = w, w = null)
                            };
                        f.$watch(e.parseAsResourceUrl(h), function(e) {
                            var h =
                                function() {
                                    !y(k) || k && !f.$eval(k) || c()
                                },
                                q = ++t;
                            e ? (a(e, !0).then(function(a) {
                                if (q === t) {
                                    var c = f.$new();
                                    s.template = a;
                                    a = r(c, function(a) {
                                        L();
                                        d.enter(a, null, g).then(h)
                                    });
                                    p = c;
                                    w = a;
                                    p.$emit("$includeContentLoaded", e);
                                    f.$eval(l)
                                }
                            }, function() {
                                q === t && (L(), f.$emit("$includeContentError", e))
                            }), f.$emit("$includeContentRequested", e)) : (L(), s.template = null)
                        })
                    }
                }
            }
        }],
        Ae = ["$compile", function(a) {
            return {
                restrict: "ECA",
                priority: -400,
                require: "ngInclude",
                link: function(c, d, e, f) {
                    /SVG/.test(d[0].toString()) ? (d.empty(), a(Fc(f.template,
                        Y).childNodes)(c, function(a) {
                        d.append(a)
                    }, {
                        futureParentElement: d
                    })) : (d.html(f.template), a(d.contents())(c))
                }
            }
        }],
        ke = Ja({
            priority: 450,
            compile: function() {
                return {
                    pre: function(a, c, d) {
                        a.$eval(d.ngInit)
                    }
                }
            }
        }),
        we = function() {
            return {
                restrict: "A",
                priority: 100,
                require: "ngModel",
                link: function(a, c, d, e) {
                    var f = c.attr(d.$attr.ngList) || ", ",
                        g = "false" !== d.ngTrim,
                        h = g ? U(f) : f;
                    e.$parsers.push(function(a) {
                        if (!A(a)) {
                            var c = [];
                            a && s(a.split(h), function(a) {
                                a && c.push(g ? U(a) : a)
                            });
                            return c
                        }
                    });
                    e.$formatters.push(function(a) {
                        return D(a) ?
                            a.join(f) : t
                    });
                    e.$isEmpty = function(a) {
                        return !a || !a.length
                    }
                }
            }
        },
        kb = "ng-valid",
        vd = "ng-invalid",
        Sa = "ng-pristine",
        Kb = "ng-dirty",
        xd = "ng-pending",
        Mb = new T("ngModel"),
        cg = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(a, c, d, e, f, g, h, l, k, m) {
            this.$modelValue = this.$viewValue = Number.NaN;
            this.$$rawModelValue = t;
            this.$validators = {};
            this.$asyncValidators = {};
            this.$parsers = [];
            this.$formatters = [];
            this.$viewChangeListeners = [];
            this.$untouched = !0;
            this.$touched = !1;
            this.$pristine = !0;
            this.$dirty = !1;
            this.$valid = !0;
            this.$invalid = !1;
            this.$error = {};
            this.$$success = {};
            this.$pending = t;
            this.$name = m(d.name || "", !1)(a);
            var n = f(d.ngModel),
                q = n.assign,
                u = n,
                r = q,
                O = null,
                p = this;
            this.$$setOptions = function(a) {
                if ((p.$options = a) && a.getterSetter) {
                    var c = f(d.ngModel + "()"),
                        g = f(d.ngModel + "($$$p)");
                    u = function(a) {
                        var d = n(a);
                        G(d) && (d = c(a));
                        return d
                    };
                    r = function(a, c) {
                        G(n(a)) ? g(a, {
                            $$$p: p.$modelValue
                        }) : q(a, p.$modelValue)
                    }
                } else if (!n.assign) throw Mb("nonassign", d.ngModel, va(e));
            };
            this.$render = H;
            this.$isEmpty = function(a) {
                return A(a) || "" === a || null === a || a !== a
            };
            var v = e.inheritedData("$formController") || Jb,
                w = 0;
            sd({
                ctrl: this,
                $element: e,
                set: function(a, c) {
                    a[c] = !0
                },
                unset: function(a, c) {
                    delete a[c]
                },
                parentForm: v,
                $animate: g
            });
            this.$setPristine = function() {
                p.$dirty = !1;
                p.$pristine = !0;
                g.removeClass(e, Kb);
                g.addClass(e, Sa)
            };
            this.$setDirty = function() {
                p.$dirty = !0;
                p.$pristine = !1;
                g.removeClass(e, Sa);
                g.addClass(e, Kb);
                v.$setDirty()
            };
            this.$setUntouched = function() {
                p.$touched = !1;
                p.$untouched = !0;
                g.setClass(e,
                    "ng-untouched", "ng-touched")
            };
            this.$setTouched = function() {
                p.$touched = !0;
                p.$untouched = !1;
                g.setClass(e, "ng-touched", "ng-untouched")
            };
            this.$rollbackViewValue = function() {
                h.cancel(O);
                p.$viewValue = p.$$lastCommittedViewValue;
                p.$render()
            };
            this.$validate = function() {
                if (!V(p.$modelValue) || !isNaN(p.$modelValue)) {
                    var a = p.$$rawModelValue,
                        c = p.$valid,
                        d = p.$modelValue,
                        e = p.$options && p.$options.allowInvalid;
                    p.$$runValidators(p.$error[p.$$parserName || "parse"] ? !1 : t, a, p.$$lastCommittedViewValue, function(f) {
                        e || c === f || (p.$modelValue =
                            f ? a : t, p.$modelValue !== d && p.$$writeModelToScope())
                    })
                }
            };
            this.$$runValidators = function(a, c, d, e) {
                function f() {
                    var a = !0;
                    s(p.$validators, function(e, f) {
                        var g = e(c, d);
                        a = a && g;
                        h(f, g)
                    });
                    return a ? !0 : (s(p.$asyncValidators, function(a, c) {
                        h(c, null)
                    }), !1)
                }

                function g() {
                    var a = [],
                        e = !0;
                    s(p.$asyncValidators, function(f, g) {
                        var l = f(c, d);
                        if (!l || !G(l.then)) throw Mb("$asyncValidators", l);
                        h(g, t);
                        a.push(l.then(function() {
                            h(g, !0)
                        }, function(a) {
                            e = !1;
                            h(g, !1)
                        }))
                    });
                    a.length ? k.all(a).then(function() {
                        l(e)
                    }, H) : l(!0)
                }

                function h(a, c) {
                    m ===
                        w && p.$setValidity(a, c)
                }

                function l(a) {
                    m === w && e(a)
                }
                w++;
                var m = w;
                (function(a) {
                    var c = p.$$parserName || "parse";
                    if (a === t) h(c, null);
                    else if (h(c, a), !a) return s(p.$validators, function(a, c) {
                        h(c, null)
                    }), s(p.$asyncValidators, function(a, c) {
                        h(c, null)
                    }), !1;
                    return !0
                })(a) ? f() ? g() : l(!1): l(!1)
            };
            this.$commitViewValue = function() {
                var a = p.$viewValue;
                h.cancel(O);
                if (p.$$lastCommittedViewValue !== a || "" === a && p.$$hasNativeValidators) p.$$lastCommittedViewValue = a, p.$pristine && this.$setDirty(), this.$$parseAndValidate()
            };
            this.$$parseAndValidate =
                function() {
                    var c = p.$$lastCommittedViewValue,
                        d = A(c) ? t : !0;
                    if (d)
                        for (var e = 0; e < p.$parsers.length; e++)
                            if (c = p.$parsers[e](c), A(c)) {
                                d = !1;
                                break
                            }
                    V(p.$modelValue) && isNaN(p.$modelValue) && (p.$modelValue = u(a));
                    var f = p.$modelValue,
                        g = p.$options && p.$options.allowInvalid;
                    p.$$rawModelValue = c;
                    g && (p.$modelValue = c, p.$modelValue !== f && p.$$writeModelToScope());
                    p.$$runValidators(d, c, p.$$lastCommittedViewValue, function(a) {
                        g || (p.$modelValue = a ? c : t, p.$modelValue !== f && p.$$writeModelToScope())
                    })
                };
            this.$$writeModelToScope = function() {
                r(a,
                    p.$modelValue);
                s(p.$viewChangeListeners, function(a) {
                    try {
                        a()
                    } catch (d) {
                        c(d)
                    }
                })
            };
            this.$setViewValue = function(a, c) {
                p.$viewValue = a;
                p.$options && !p.$options.updateOnDefault || p.$$debounceViewValueCommit(c)
            };
            this.$$debounceViewValueCommit = function(c) {
                var d = 0,
                    e = p.$options;
                e && y(e.debounce) && (e = e.debounce, V(e) ? d = e : V(e[c]) ? d = e[c] : V(e["default"]) && (d = e["default"]));
                h.cancel(O);
                d ? O = h(function() {
                    p.$commitViewValue()
                }, d) : l.$$phase ? p.$commitViewValue() : a.$apply(function() {
                    p.$commitViewValue()
                })
            };
            a.$watch(function() {
                var c =
                    u(a);
                if (c !== p.$modelValue) {
                    p.$modelValue = p.$$rawModelValue = c;
                    for (var d = p.$formatters, e = d.length, f = c; e--;) f = d[e](f);
                    p.$viewValue !== f && (p.$viewValue = p.$$lastCommittedViewValue = f, p.$render(), p.$$runValidators(t, c, f, H))
                }
                return c
            })
        }],
        ve = ["$rootScope", function(a) {
            return {
                restrict: "A",
                require: ["ngModel", "^?form", "^?ngModelOptions"],
                controller: cg,
                priority: 1,
                compile: function(c) {
                    c.addClass(Sa).addClass("ng-untouched").addClass(kb);
                    return {
                        pre: function(a, c, f, g) {
                            var h = g[0],
                                l = g[1] || Jb;
                            h.$$setOptions(g[2] && g[2].$options);
                            l.$addControl(h);
                            f.$observe("name", function(a) {
                                h.$name !== a && l.$$renameControl(h, a)
                            });
                            a.$on("$destroy", function() {
                                l.$removeControl(h)
                            })
                        },
                        post: function(c, e, f, g) {
                            var h = g[0];
                            if (h.$options && h.$options.updateOn) e.on(h.$options.updateOn, function(a) {
                                h.$$debounceViewValueCommit(a && a.type)
                            });
                            e.on("blur", function(e) {
                                h.$touched || (a.$$phase ? c.$evalAsync(h.$setTouched) : c.$apply(h.$setTouched))
                            })
                        }
                    }
                }
            }
        }],
        dg = /(\s+|^)default(\s+|$)/,
        ze = function() {
            return {
                restrict: "A",
                controller: ["$scope", "$attrs", function(a, c) {
                    var d =
                        this;
                    this.$options = a.$eval(c.ngModelOptions);
                    this.$options.updateOn !== t ? (this.$options.updateOnDefault = !1, this.$options.updateOn = U(this.$options.updateOn.replace(dg, function() {
                        d.$options.updateOnDefault = !0;
                        return " "
                    }))) : this.$options.updateOnDefault = !0
                }]
            }
        },
        le = Ja({
            terminal: !0,
            priority: 1E3
        }),
        me = ["$locale", "$interpolate", function(a, c) {
            var d = /{}/g,
                e = /^when(Minus)?(.+)$/;
            return {
                restrict: "EA",
                link: function(f, g, h) {
                    function l(a) {
                        g.text(a || "")
                    }
                    var k = h.count,
                        m = h.$attr.when && g.attr(h.$attr.when),
                        n = h.offset ||
                        0,
                        q = f.$eval(m) || {},
                        u = {},
                        m = c.startSymbol(),
                        r = c.endSymbol(),
                        t = m + k + "-" + n + r,
                        p = ga.noop,
                        v;
                    s(h, function(a, c) {
                        var d = e.exec(c);
                        d && (d = (d[1] ? "-" : "") + Q(d[2]), q[d] = g.attr(h.$attr[c]))
                    });
                    s(q, function(a, e) {
                        u[e] = c(a.replace(d, t))
                    });
                    f.$watch(k, function(c) {
                        c = parseFloat(c);
                        var d = isNaN(c);
                        d || c in q || (c = a.pluralCat(c - n));
                        c === v || d && isNaN(v) || (p(), p = f.$watch(u[c], l), v = c)
                    })
                }
            }
        }],
        ne = ["$parse", "$animate", function(a, c) {
            var d = T("ngRepeat"),
                e = function(a, c, d, e, k, m, n) {
                    a[d] = e;
                    k && (a[k] = m);
                    a.$index = c;
                    a.$first = 0 === c;
                    a.$last = c === n - 1;
                    a.$middle = !(a.$first || a.$last);
                    a.$odd = !(a.$even = 0 === (c & 1))
                };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1E3,
                terminal: !0,
                $$tlb: !0,
                compile: function(f, g) {
                    var h = g.ngRepeat,
                        l = Y.createComment(" end ngRepeat: " + h + " "),
                        k = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!k) throw d("iexp", h);
                    var m = k[1],
                        n = k[2],
                        q = k[3],
                        u = k[4],
                        k = m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
                    if (!k) throw d("iidexp", m);
                    var r = k[3] || k[1],
                        y = k[2];
                    if (q && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q))) throw d("badident", q);
                    var p, v, w, A, z = {
                        $id: Na
                    };
                    u ? p = a(u) : (w = function(a, c) {
                        return Na(c)
                    }, A = function(a) {
                        return a
                    });
                    return function(a, f, g, k, m) {
                        p && (v = function(c, d, e) {
                            y && (z[y] = c);
                            z[r] = d;
                            z.$index = e;
                            return p(a, z)
                        });
                        var u = ha();
                        a.$watchCollection(n, function(g) {
                            var k, p, n = f[0],
                                E, z = ha(),
                                H, S, N, D, G, C, I;
                            q && (a[q] = g);
                            if (Ta(g)) G = g, p = v || w;
                            else {
                                p = v || A;
                                G = [];
                                for (I in g) g.hasOwnProperty(I) &&
                                    "$" != I.charAt(0) && G.push(I);
                                G.sort()
                            }
                            H = G.length;
                            I = Array(H);
                            for (k = 0; k < H; k++)
                                if (S = g === G ? k : G[k], N = g[S], D = p(S, N, k), u[D]) C = u[D], delete u[D], z[D] = C, I[k] = C;
                                else {
                                    if (z[D]) throw s(I, function(a) {
                                        a && a.scope && (u[a.id] = a)
                                    }), d("dupes", h, D, N);
                                    I[k] = {
                                        id: D,
                                        scope: t,
                                        clone: t
                                    };
                                    z[D] = !0
                                }
                            for (E in u) {
                                C = u[E];
                                D = tb(C.clone);
                                c.leave(D);
                                if (D[0].parentNode)
                                    for (k = 0, p = D.length; k < p; k++) D[k].$$NG_REMOVED = !0;
                                C.scope.$destroy()
                            }
                            for (k = 0; k < H; k++)
                                if (S = g === G ? k : G[k], N = g[S], C = I[k], C.scope) {
                                    E = n;
                                    do E = E.nextSibling; while (E && E.$$NG_REMOVED);
                                    C.clone[0] !=
                                        E && c.move(tb(C.clone), null, B(n));
                                    n = C.clone[C.clone.length - 1];
                                    e(C.scope, k, r, N, y, S, H)
                                } else m(function(a, d) {
                                    C.scope = d;
                                    var f = l.cloneNode(!1);
                                    a[a.length++] = f;
                                    c.enter(a, null, B(n));
                                    n = f;
                                    C.clone = a;
                                    z[C.id] = C;
                                    e(C.scope, k, r, N, y, S, H)
                                });
                            u = z
                        })
                    }
                }
            }
        }],
        oe = ["$animate", function(a) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(c, d, e) {
                    c.$watch(e.ngShow, function(c) {
                        a[c ? "removeClass" : "addClass"](d, "ng-hide", {
                            tempClasses: "ng-hide-animate"
                        })
                    })
                }
            }
        }],
        he = ["$animate", function(a) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(c,
                    d, e) {
                    c.$watch(e.ngHide, function(c) {
                        a[c ? "addClass" : "removeClass"](d, "ng-hide", {
                            tempClasses: "ng-hide-animate"
                        })
                    })
                }
            }
        }],
        pe = Ja(function(a, c, d) {
            a.$watchCollection(d.ngStyle, function(a, d) {
                d && a !== d && s(d, function(a, d) {
                    c.css(d, "")
                });
                a && c.css(a)
            })
        }),
        qe = ["$animate", function(a) {
            return {
                restrict: "EA",
                require: "ngSwitch",
                controller: ["$scope", function() {
                    this.cases = {}
                }],
                link: function(c, d, e, f) {
                    var g = [],
                        h = [],
                        l = [],
                        k = [],
                        m = function(a, c) {
                            return function() {
                                a.splice(c, 1)
                            }
                        };
                    c.$watch(e.ngSwitch || e.on, function(c) {
                        var d, e;
                        d = 0;
                        for (e = l.length; d < e; ++d) a.cancel(l[d]);
                        d = l.length = 0;
                        for (e = k.length; d < e; ++d) {
                            var r = tb(h[d].clone);
                            k[d].$destroy();
                            (l[d] = a.leave(r)).then(m(l, d))
                        }
                        h.length = 0;
                        k.length = 0;
                        (g = f.cases["!" + c] || f.cases["?"]) && s(g, function(c) {
                            c.transclude(function(d, e) {
                                k.push(e);
                                var f = c.element;
                                d[d.length++] = Y.createComment(" end ngSwitchWhen: ");
                                h.push({
                                    clone: d
                                });
                                a.enter(d, f.parent(), f)
                            })
                        })
                    })
                }
            }
        }],
        re = Ja({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(a, c, d, e, f) {
                e.cases["!" + d.ngSwitchWhen] =
                    e.cases["!" + d.ngSwitchWhen] || [];
                e.cases["!" + d.ngSwitchWhen].push({
                    transclude: f,
                    element: c
                })
            }
        }),
        se = Ja({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(a, c, d, e, f) {
                e.cases["?"] = e.cases["?"] || [];
                e.cases["?"].push({
                    transclude: f,
                    element: c
                })
            }
        }),
        ue = Ja({
            restrict: "EAC",
            link: function(a, c, d, e, f) {
                if (!f) throw T("ngTransclude")("orphan", va(c));
                f(function(a) {
                    c.empty();
                    c.append(a)
                })
            }
        }),
        Vd = ["$templateCache", function(a) {
            return {
                restrict: "E",
                terminal: !0,
                compile: function(c, d) {
                    "text/ng-template" ==
                    d.type && a.put(d.id, c[0].text)
                }
            }
        }],
        eg = T("ngOptions"),
        te = da({
            restrict: "A",
            terminal: !0
        }),
        Wd = ["$compile", "$parse", function(a, c) {
            var d = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
                e = {
                    $setViewValue: H
                };
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: ["$element", "$scope", "$attrs", function(a, c, d) {
                    var l = this,
                        k = {},
                        m = e,
                        n;
                    l.databound = d.ngModel;
                    l.init = function(a, c, d) {
                        m = a;
                        n = d
                    };
                    l.addOption = function(c, d) {
                        Ma(c, '"option value"');
                        k[c] = !0;
                        m.$viewValue == c && (a.val(c), n.parent() && n.remove());
                        d && d[0].hasAttribute("selected") && (d[0].selected = !0)
                    };
                    l.removeOption = function(a) {
                        this.hasOption(a) && (delete k[a], m.$viewValue === a && this.renderUnknownOption(a))
                    };
                    l.renderUnknownOption = function(c) {
                        c = "? " + Na(c) + " ?";
                        n.val(c);
                        a.prepend(n);
                        a.val(c);
                        n.prop("selected", !0)
                    };
                    l.hasOption = function(a) {
                        return k.hasOwnProperty(a)
                    };
                    c.$on("$destroy", function() {
                        l.renderUnknownOption =
                            H
                    })
                }],
                link: function(e, g, h, l) {
                    function k(a, c, d, e) {
                        d.$render = function() {
                            var a = d.$viewValue;
                            e.hasOption(a) ? (C.parent() && C.remove(), c.val(a), "" === a && p.prop("selected", !0)) : A(a) && p ? c.val("") : e.renderUnknownOption(a)
                        };
                        c.on("change", function() {
                            a.$apply(function() {
                                C.parent() && C.remove();
                                d.$setViewValue(c.val())
                            })
                        })
                    }

                    function m(a, c, d) {
                        var e;
                        d.$render = function() {
                            var a = new db(d.$viewValue);
                            s(c.find("option"), function(c) {
                                c.selected = y(a.get(c.value))
                            })
                        };
                        a.$watch(function() {
                            fa(e, d.$viewValue) || (e = ra(d.$viewValue),
                                d.$render())
                        });
                        c.on("change", function() {
                            a.$apply(function() {
                                var a = [];
                                s(c.find("option"), function(c) {
                                    c.selected && a.push(c.value)
                                });
                                d.$setViewValue(a)
                            })
                        })
                    }

                    function n(e, f, g) {
                        function h(a, c, d) {
                            T[x] = d;
                            G && (T[G] = c);
                            return a(e, T)
                        }

                        function k(a) {
                            var c;
                            if (u)
                                if (M && D(a)) {
                                    c = new db([]);
                                    for (var d = 0; d < a.length; d++) c.put(h(M, null, a[d]), !0)
                                } else c = new db(a);
                            else M && (a = h(M, null, a));
                            return function(d, e) {
                                var f;
                                f = M ? M : B ? B : F;
                                return u ? y(c.remove(h(f, d, e))) : a === h(f, d, e)
                            }
                        }

                        function l() {
                            v || (e.$$postDigest(p), v = !0)
                        }

                        function m(a,
                            c, d) {
                            a[c] = a[c] || 0;
                            a[c] += d ? 1 : -1
                        }

                        function p() {
                            v = !1;
                            var a = {
                                    "": []
                                },
                                c = [""],
                                d, l, n, r, t;
                            n = g.$viewValue;
                            r = P(e) || [];
                            var B = G ? Object.keys(r).sort() : r,
                                x, A, D, F, N = {};
                            t = k(n);
                            var J = !1,
                                U, V;
                            Q = {};
                            for (F = 0; D = B.length, F < D; F++) {
                                x = F;
                                if (G && (x = B[F], "$" === x.charAt(0))) continue;
                                A = r[x];
                                d = h(I, x, A) || "";
                                (l = a[d]) || (l = a[d] = [], c.push(d));
                                d = t(x, A);
                                J = J || d;
                                A = h(C, x, A);
                                A = y(A) ? A : "";
                                V = M ? M(e, T) : G ? B[F] : F;
                                M && (Q[V] = x);
                                l.push({
                                    id: V,
                                    label: A,
                                    selected: d
                                })
                            }
                            u || (z || null === n ? a[""].unshift({
                                id: "",
                                label: "",
                                selected: !J
                            }) : J || a[""].unshift({
                                id: "?",
                                label: "",
                                selected: !0
                            }));
                            x = 0;
                            for (B = c.length; x < B; x++) {
                                d = c[x];
                                l = a[d];
                                R.length <= x ? (n = {
                                    element: H.clone().attr("label", d),
                                    label: l.label
                                }, r = [n], R.push(r), f.append(n.element)) : (r = R[x], n = r[0], n.label != d && n.element.attr("label", n.label = d));
                                J = null;
                                F = 0;
                                for (D = l.length; F < D; F++) d = l[F], (t = r[F + 1]) ? (J = t.element, t.label !== d.label && (m(N, t.label, !1), m(N, d.label, !0), J.text(t.label = d.label), J.prop("label", t.label)), t.id !== d.id && J.val(t.id = d.id), J[0].selected !== d.selected && (J.prop("selected", t.selected = d.selected), Ra && J.prop("selected",
                                    t.selected))) : ("" === d.id && z ? U = z : (U = w.clone()).val(d.id).prop("selected", d.selected).attr("selected", d.selected).prop("label", d.label).text(d.label), r.push(t = {
                                    element: U,
                                    label: d.label,
                                    id: d.id,
                                    selected: d.selected
                                }), m(N, d.label, !0), J ? J.after(U) : n.element.append(U), J = U);
                                for (F++; r.length > F;) d = r.pop(), m(N, d.label, !1), d.element.remove()
                            }
                            for (; R.length > x;) {
                                l = R.pop();
                                for (F = 1; F < l.length; ++F) m(N, l[F].label, !1);
                                l[0].element.remove()
                            }
                            s(N, function(a, c) {
                                0 < a ? q.addOption(c) : 0 > a && q.removeOption(c)
                            })
                        }
                        var n;
                        if (!(n = r.match(d))) throw eg("iexp",
                            r, va(f));
                        var C = c(n[2] || n[1]),
                            x = n[4] || n[6],
                            A = / as /.test(n[0]) && n[1],
                            B = A ? c(A) : null,
                            G = n[5],
                            I = c(n[3] || ""),
                            F = c(n[2] ? n[1] : x),
                            P = c(n[7]),
                            M = n[8] ? c(n[8]) : null,
                            Q = {},
                            R = [
                                [{
                                    element: f,
                                    label: ""
                                }]
                            ],
                            T = {};
                        z && (a(z)(e), z.removeClass("ng-scope"), z.remove());
                        f.empty();
                        f.on("change", function() {
                            e.$apply(function() {
                                var a = P(e) || [],
                                    c;
                                if (u) c = [], s(f.val(), function(d) {
                                    d = M ? Q[d] : d;
                                    c.push("?" === d ? t : "" === d ? null : h(B ? B : F, d, a[d]))
                                });
                                else {
                                    var d = M ? Q[f.val()] : f.val();
                                    c = "?" === d ? t : "" === d ? null : h(B ? B : F, d, a[d])
                                }
                                g.$setViewValue(c);
                                p()
                            })
                        });
                        g.$render =
                            p;
                        e.$watchCollection(P, l);
                        e.$watchCollection(function() {
                            var a = P(e),
                                c;
                            if (a && D(a)) {
                                c = Array(a.length);
                                for (var d = 0, f = a.length; d < f; d++) c[d] = h(C, d, a[d])
                            } else if (a)
                                for (d in c = {}, a) a.hasOwnProperty(d) && (c[d] = h(C, d, a[d]));
                            return c
                        }, l);
                        u && e.$watchCollection(function() {
                            return g.$modelValue
                        }, l)
                    }
                    if (l[1]) {
                        var q = l[0];
                        l = l[1];
                        var u = h.multiple,
                            r = h.ngOptions,
                            z = !1,
                            p, v = !1,
                            w = B(Y.createElement("option")),
                            H = B(Y.createElement("optgroup")),
                            C = w.clone();
                        h = 0;
                        for (var x = g.children(), G = x.length; h < G; h++)
                            if ("" === x[h].value) {
                                p = z = x.eq(h);
                                break
                            }
                        q.init(l, z, C);
                        u && (l.$isEmpty = function(a) {
                            return !a || 0 === a.length
                        });
                        r ? n(e, g, l) : u ? m(e, g, l) : k(e, g, l, q)
                    }
                }
            }
        }],
        Yd = ["$interpolate", function(a) {
            var c = {
                addOption: H,
                removeOption: H
            };
            return {
                restrict: "E",
                priority: 100,
                compile: function(d, e) {
                    if (A(e.value)) {
                        var f = a(d.text(), !0);
                        f || e.$set("value", d.text())
                    }
                    return function(a, d, e) {
                        var k = d.parent(),
                            m = k.data("$selectController") || k.parent().data("$selectController");
                        m && m.databound || (m = c);
                        f ? a.$watch(f, function(a, c) {
                            e.$set("value", a);
                            c !== a && m.removeOption(c);
                            m.addOption(a,
                                d)
                        }) : m.addOption(e.value, d);
                        d.on("$destroy", function() {
                            m.removeOption(e.value)
                        })
                    }
                }
            }
        }],
        Xd = da({
            restrict: "E",
            terminal: !1
        }),
        zc = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(a, c, d, e) {
                    e && (d.required = !0, e.$validators.required = function(a, c) {
                        return !d.required || !e.$isEmpty(c)
                    }, d.$observe("required", function() {
                        e.$validate()
                    }))
                }
            }
        },
        yc = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(a, c, d, e) {
                    if (e) {
                        var f, g = d.ngPattern || d.pattern;
                        d.$observe("pattern", function(a) {
                            F(a) && 0 < a.length &&
                                (a = new RegExp("^" + a + "$"));
                            if (a && !a.test) throw T("ngPattern")("noregexp", g, a, va(c));
                            f = a || t;
                            e.$validate()
                        });
                        e.$validators.pattern = function(a) {
                            return e.$isEmpty(a) || A(f) || f.test(a)
                        }
                    }
                }
            }
        },
        Bc = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(a, c, d, e) {
                    if (e) {
                        var f = -1;
                        d.$observe("maxlength", function(a) {
                            a = ba(a);
                            f = isNaN(a) ? -1 : a;
                            e.$validate()
                        });
                        e.$validators.maxlength = function(a, c) {
                            return 0 > f || e.$isEmpty(a) || c.length <= f
                        }
                    }
                }
            }
        },
        Ac = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(a, c,
                    d, e) {
                    if (e) {
                        var f = 0;
                        d.$observe("minlength", function(a) {
                            f = ba(a) || 0;
                            e.$validate()
                        });
                        e.$validators.minlength = function(a, c) {
                            return e.$isEmpty(c) || c.length >= f
                        }
                    }
                }
            }
        };
    M.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : (Nd(), Pd(ga), B(Y).ready(function() {
        Jd(Y, sc)
    }))
})(window, document);
!window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map

;
(function(window, angular, undefined) {
    'use strict';
    angular.module('ngAnimate', ['ng']).directive('ngAnimateChildren', function() {
        var NG_ANIMATE_CHILDREN = '$$ngAnimateChildren';
        return function(scope, element, attrs) {
            var val = attrs.ngAnimateChildren;
            if (angular.isString(val) && val.length === 0) {
                element.data(NG_ANIMATE_CHILDREN, true);
            } else {
                scope.$watch(val, function(value) {
                    element.data(NG_ANIMATE_CHILDREN, !!value);
                });
            }
        };
    }).factory('$$animateReflow', ['$$rAF', '$document', function($$rAF, $document) {
        var bod = $document[0].body;
        return function(fn) {
            return $$rAF(function() {
                var a = bod.offsetWidth + 1;
                fn();
            });
        };
    }]).config(['$provide', '$animateProvider', function($provide, $animateProvider) {
        var noop = angular.noop;
        var forEach = angular.forEach;
        var selectors = $animateProvider.$$selectors;
        var isArray = angular.isArray;
        var isString = angular.isString;
        var isObject = angular.isObject;
        var ELEMENT_NODE = 1;
        var NG_ANIMATE_STATE = '$$ngAnimateState';
        var NG_ANIMATE_CHILDREN = '$$ngAnimateChildren';
        var NG_ANIMATE_CLASS_NAME = 'ng-animate';
        var rootAnimateState = {
            running: true
        };

        function extractElementNode(element) {
            for (var i = 0; i < element.length; i++) {
                var elm = element[i];
                if (elm.nodeType == ELEMENT_NODE) {
                    return elm;
                }
            }
        }

        function prepareElement(element) {
            return element && angular.element(element);
        }

        function stripCommentsFromElement(element) {
            return angular.element(extractElementNode(element));
        }

        function isMatchingElement(elm1, elm2) {
            return extractElementNode(elm1) == extractElementNode(elm2);
        }
        var $$jqLite;
        $provide.decorator('$animate', ['$delegate', '$$q', '$injector', '$sniffer', '$rootElement', '$$asyncCallback', '$rootScope', '$document', '$templateRequest', '$$jqLite', function($delegate, $$q, $injector, $sniffer, $rootElement, $$asyncCallback, $rootScope, $document, $templateRequest, $$$jqLite) {
            $$jqLite = $$$jqLite;
            $rootElement.data(NG_ANIMATE_STATE, rootAnimateState);
            var deregisterWatch = $rootScope.$watch(function() {
                return $templateRequest.totalPendingRequests;
            }, function(val, oldVal) {
                if (val !== 0) return;
                deregisterWatch();
                $rootScope.$$postDigest(function() {
                    $rootScope.$$postDigest(function() {
                        rootAnimateState.running = false;
                    });
                });
            });
            var globalAnimationCounter = 0;
            var classNameFilter = $animateProvider.classNameFilter();
            var isAnimatableClassName = !classNameFilter ? function() {
                return true;
            } : function(className) {
                return classNameFilter.test(className);
            };

            function classBasedAnimationsBlocked(element, setter) {
                var data = element.data(NG_ANIMATE_STATE) || {};
                if (setter) {
                    data.running = true;
                    data.structural = true;
                    element.data(NG_ANIMATE_STATE, data);
                }
                return data.disabled || (data.running && data.structural);
            }

            function runAnimationPostDigest(fn) {
                var cancelFn, defer = $$q.defer();
                defer.promise.$$cancelFn = function() {
                    cancelFn && cancelFn();
                };
                $rootScope.$$postDigest(function() {
                    cancelFn = fn(function() {
                        defer.resolve();
                    });
                });
                return defer.promise;
            }

            function parseAnimateOptions(options) {
                if (isObject(options)) {
                    if (options.tempClasses && isString(options.tempClasses)) {
                        options.tempClasses = options.tempClasses.split(/\s+/);
                    }
                    return options;
                }
            }

            function resolveElementClasses(element, cache, runningAnimations) {
                runningAnimations = runningAnimations || {};
                var lookup = {};
                forEach(runningAnimations, function(data, selector) {
                    forEach(selector.split(' '), function(s) {
                        lookup[s] = data;
                    });
                });
                var hasClasses = Object.create(null);
                forEach((element.attr('class') || '').split(/\s+/), function(className) {
                    hasClasses[className] = true;
                });
                var toAdd = [],
                    toRemove = [];
                forEach((cache && cache.classes) || [], function(status, className) {
                    var hasClass = hasClasses[className];
                    var matchingAnimation = lookup[className] || {};
                    if (status === false) {
                        if (hasClass || matchingAnimation.event == 'addClass') {
                            toRemove.push(className);
                        }
                    } else if (status === true) {
                        if (!hasClass || matchingAnimation.event == 'removeClass') {
                            toAdd.push(className);
                        }
                    }
                });
                return (toAdd.length + toRemove.length) > 0 && [toAdd.join(' '), toRemove.join(' ')];
            }

            function lookup(name) {
                if (name) {
                    var matches = [],
                        flagMap = {},
                        classes = name.substr(1).split('.');
                    if ($sniffer.transitions || $sniffer.animations) {
                        matches.push($injector.get(selectors['']));
                    }
                    for (var i = 0; i < classes.length; i++) {
                        var klass = classes[i],
                            selectorFactoryName = selectors[klass];
                        if (selectorFactoryName && !flagMap[klass]) {
                            matches.push($injector.get(selectorFactoryName));
                            flagMap[klass] = true;
                        }
                    }
                    return matches;
                }
            }

            function animationRunner(element, animationEvent, className, options) {
                var node = element[0];
                if (!node) {
                    return;
                }
                if (options) {
                    options.to = options.to || {};
                    options.from = options.from || {};
                }
                var classNameAdd;
                var classNameRemove;
                if (isArray(className)) {
                    classNameAdd = className[0];
                    classNameRemove = className[1];
                    if (!classNameAdd) {
                        className = classNameRemove;
                        animationEvent = 'removeClass';
                    } else if (!classNameRemove) {
                        className = classNameAdd;
                        animationEvent = 'addClass';
                    } else {
                        className = classNameAdd + ' ' + classNameRemove;
                    }
                }
                var isSetClassOperation = animationEvent == 'setClass';
                var isClassBased = isSetClassOperation || animationEvent == 'addClass' || animationEvent == 'removeClass' || animationEvent == 'animate';
                var currentClassName = element.attr('class');
                var classes = currentClassName + ' ' + className;
                if (!isAnimatableClassName(classes)) {
                    return;
                }
                var beforeComplete = noop,
                    beforeCancel = [],
                    before = [],
                    afterComplete = noop,
                    afterCancel = [],
                    after = [];
                var animationLookup = (' ' + classes).replace(/\s+/g, '.');
                forEach(lookup(animationLookup), function(animationFactory) {
                    var created = registerAnimation(animationFactory, animationEvent);
                    if (!created && isSetClassOperation) {
                        registerAnimation(animationFactory, 'addClass');
                        registerAnimation(animationFactory, 'removeClass');
                    }
                });

                function registerAnimation(animationFactory, event) {
                    var afterFn = animationFactory[event];
                    var beforeFn = animationFactory['before' + event.charAt(0).toUpperCase() + event.substr(1)];
                    if (afterFn || beforeFn) {
                        if (event == 'leave') {
                            beforeFn = afterFn;
                            afterFn = null;
                        }
                        after.push({
                            event: event,
                            fn: afterFn
                        });
                        before.push({
                            event: event,
                            fn: beforeFn
                        });
                        return true;
                    }
                }

                function run(fns, cancellations, allCompleteFn) {
                    var animations = [];
                    forEach(fns, function(animation) {
                        animation.fn && animations.push(animation);
                    });
                    var count = 0;

                    function afterAnimationComplete(index) {
                        if (cancellations) {
                            (cancellations[index] || noop)();
                            if (++count < animations.length) return;
                            cancellations = null;
                        }
                        allCompleteFn();
                    }
                    forEach(animations, function(animation, index) {
                        var progress = function() {
                            afterAnimationComplete(index);
                        };
                        switch (animation.event) {
                            case 'setClass':
                                cancellations.push(animation.fn(element, classNameAdd, classNameRemove, progress, options));
                                break;
                            case 'animate':
                                cancellations.push(animation.fn(element, className, options.from, options.to, progress));
                                break;
                            case 'addClass':
                                cancellations.push(animation.fn(element, classNameAdd || className, progress, options));
                                break;
                            case 'removeClass':
                                cancellations.push(animation.fn(element, classNameRemove || className, progress, options));
                                break;
                            default:
                                cancellations.push(animation.fn(element, progress, options));
                                break;
                        }
                    });
                    if (cancellations && cancellations.length === 0) {
                        allCompleteFn();
                    }
                }
                return {
                    node: node,
                    event: animationEvent,
                    className: className,
                    isClassBased: isClassBased,
                    isSetClassOperation: isSetClassOperation,
                    applyStyles: function() {
                        if (options) {
                            element.css(angular.extend(options.from || {}, options.to || {}));
                        }
                    },
                    before: function(allCompleteFn) {
                        beforeComplete = allCompleteFn;
                        run(before, beforeCancel, function() {
                            beforeComplete = noop;
                            allCompleteFn();
                        });
                    },
                    after: function(allCompleteFn) {
                        afterComplete = allCompleteFn;
                        run(after, afterCancel, function() {
                            afterComplete = noop;
                            allCompleteFn();
                        });
                    },
                    cancel: function() {
                        if (beforeCancel) {
                            forEach(beforeCancel, function(cancelFn) {
                                (cancelFn || noop)(true);
                            });
                            beforeComplete(true);
                        }
                        if (afterCancel) {
                            forEach(afterCancel, function(cancelFn) {
                                (cancelFn || noop)(true);
                            });
                            afterComplete(true);
                        }
                    }
                };
            }
            return {
                animate: function(element, from, to, className, options) {
                    className = className || 'ng-inline-animate';
                    options = parseAnimateOptions(options) || {};
                    options.from = to ? from : null;
                    options.to = to ? to : from;
                    return runAnimationPostDigest(function(done) {
                        return performAnimation('animate', className, stripCommentsFromElement(element), null, null, noop, options, done);
                    });
                },
                enter: function(element, parentElement, afterElement, options) {
                    options = parseAnimateOptions(options);
                    element = angular.element(element);
                    parentElement = prepareElement(parentElement);
                    afterElement = prepareElement(afterElement);
                    classBasedAnimationsBlocked(element, true);
                    $delegate.enter(element, parentElement, afterElement);
                    return runAnimationPostDigest(function(done) {
                        return performAnimation('enter', 'ng-enter', stripCommentsFromElement(element), parentElement, afterElement, noop, options, done);
                    });
                },
                leave: function(element, options) {
                    options = parseAnimateOptions(options);
                    element = angular.element(element);
                    cancelChildAnimations(element);
                    classBasedAnimationsBlocked(element, true);
                    return runAnimationPostDigest(function(done) {
                        return performAnimation('leave', 'ng-leave', stripCommentsFromElement(element), null, null, function() {
                            $delegate.leave(element);
                        }, options, done);
                    });
                },
                move: function(element, parentElement, afterElement, options) {
                    options = parseAnimateOptions(options);
                    element = angular.element(element);
                    parentElement = prepareElement(parentElement);
                    afterElement = prepareElement(afterElement);
                    cancelChildAnimations(element);
                    classBasedAnimationsBlocked(element, true);
                    $delegate.move(element, parentElement, afterElement);
                    return runAnimationPostDigest(function(done) {
                        return performAnimation('move', 'ng-move', stripCommentsFromElement(element), parentElement, afterElement, noop, options, done);
                    });
                },
                addClass: function(element, className, options) {
                    return this.setClass(element, className, [], options);
                },
                removeClass: function(element, className, options) {
                    return this.setClass(element, [], className, options);
                },
                setClass: function(element, add, remove, options) {
                    options = parseAnimateOptions(options);
                    var STORAGE_KEY = '$$animateClasses';
                    element = angular.element(element);
                    element = stripCommentsFromElement(element);
                    if (classBasedAnimationsBlocked(element)) {
                        return $delegate.$$setClassImmediately(element, add, remove, options);
                    }
                    var classes, cache = element.data(STORAGE_KEY);
                    var hasCache = !!cache;
                    if (!cache) {
                        cache = {};
                        cache.classes = {};
                    }
                    classes = cache.classes;
                    add = isArray(add) ? add : add.split(' ');
                    forEach(add, function(c) {
                        if (c && c.length) {
                            classes[c] = true;
                        }
                    });
                    remove = isArray(remove) ? remove : remove.split(' ');
                    forEach(remove, function(c) {
                        if (c && c.length) {
                            classes[c] = false;
                        }
                    });
                    if (hasCache) {
                        if (options && cache.options) {
                            cache.options = angular.extend(cache.options || {}, options);
                        }
                        return cache.promise;
                    } else {
                        element.data(STORAGE_KEY, cache = {
                            classes: classes,
                            options: options
                        });
                    }
                    return cache.promise = runAnimationPostDigest(function(done) {
                        var parentElement = element.parent();
                        var elementNode = extractElementNode(element);
                        var parentNode = elementNode.parentNode;
                        if (!parentNode || parentNode['$$NG_REMOVED'] || elementNode['$$NG_REMOVED']) {
                            done();
                            return;
                        }
                        var cache = element.data(STORAGE_KEY);
                        element.removeData(STORAGE_KEY);
                        var state = element.data(NG_ANIMATE_STATE) || {};
                        var classes = resolveElementClasses(element, cache, state.active);
                        return !classes ? done() : performAnimation('setClass', classes, element, parentElement, null, function() {
                            if (classes[0]) $delegate.$$addClassImmediately(element, classes[0]);
                            if (classes[1]) $delegate.$$removeClassImmediately(element, classes[1]);
                        }, cache.options, done);
                    });
                },
                cancel: function(promise) {
                    promise.$$cancelFn();
                },
                enabled: function(value, element) {
                    switch (arguments.length) {
                        case 2:
                            if (value) {
                                cleanup(element);
                            } else {
                                var data = element.data(NG_ANIMATE_STATE) || {};
                                data.disabled = true;
                                element.data(NG_ANIMATE_STATE, data);
                            }
                            break;
                        case 1:
                            rootAnimateState.disabled = !value;
                            break;
                        default:
                            value = !rootAnimateState.disabled;
                            break;
                    }
                    return !!value;
                }
            };

            function performAnimation(animationEvent, className, element, parentElement, afterElement, domOperation, options, doneCallback) {
                var noopCancel = noop;
                var runner = animationRunner(element, animationEvent, className, options);
                if (!runner) {
                    fireDOMOperation();
                    fireBeforeCallbackAsync();
                    fireAfterCallbackAsync();
                    closeAnimation();
                    return noopCancel;
                }
                animationEvent = runner.event;
                className = runner.className;
                var elementEvents = angular.element._data(runner.node);
                elementEvents = elementEvents && elementEvents.events;
                if (!parentElement) {
                    parentElement = afterElement ? afterElement.parent() : element.parent();
                }
                if (animationsDisabled(element, parentElement)) {
                    fireDOMOperation();
                    fireBeforeCallbackAsync();
                    fireAfterCallbackAsync();
                    closeAnimation();
                    return noopCancel;
                }
                var ngAnimateState = element.data(NG_ANIMATE_STATE) || {};
                var runningAnimations = ngAnimateState.active || {};
                var totalActiveAnimations = ngAnimateState.totalActive || 0;
                var lastAnimation = ngAnimateState.last;
                var skipAnimation = false;
                if (totalActiveAnimations > 0) {
                    var animationsToCancel = [];
                    if (!runner.isClassBased) {
                        if (animationEvent == 'leave' && runningAnimations['ng-leave']) {
                            skipAnimation = true;
                        } else {
                            for (var klass in runningAnimations) {
                                animationsToCancel.push(runningAnimations[klass]);
                            }
                            ngAnimateState = {};
                            cleanup(element, true);
                        }
                    } else if (lastAnimation.event == 'setClass') {
                        animationsToCancel.push(lastAnimation);
                        cleanup(element, className);
                    } else if (runningAnimations[className]) {
                        var current = runningAnimations[className];
                        if (current.event == animationEvent) {
                            skipAnimation = true;
                        } else {
                            animationsToCancel.push(current);
                            cleanup(element, className);
                        }
                    }
                    if (animationsToCancel.length > 0) {
                        forEach(animationsToCancel, function(operation) {
                            operation.cancel();
                        });
                    }
                }
                if (runner.isClassBased && !runner.isSetClassOperation && animationEvent != 'animate' && !skipAnimation) {
                    skipAnimation = (animationEvent == 'addClass') == element.hasClass(className);
                }
                if (skipAnimation) {
                    fireDOMOperation();
                    fireBeforeCallbackAsync();
                    fireAfterCallbackAsync();
                    fireDoneCallbackAsync();
                    return noopCancel;
                }
                runningAnimations = ngAnimateState.active || {};
                totalActiveAnimations = ngAnimateState.totalActive || 0;
                if (animationEvent == 'leave') {
                    element.one('$destroy', function(e) {
                        var element = angular.element(this);
                        var state = element.data(NG_ANIMATE_STATE);
                        if (state) {
                            var activeLeaveAnimation = state.active['ng-leave'];
                            if (activeLeaveAnimation) {
                                activeLeaveAnimation.cancel();
                                cleanup(element, 'ng-leave');
                            }
                        }
                    });
                }
                $$jqLite.addClass(element, NG_ANIMATE_CLASS_NAME);
                if (options && options.tempClasses) {
                    forEach(options.tempClasses, function(className) {
                        $$jqLite.addClass(element, className);
                    });
                }
                var localAnimationCount = globalAnimationCounter++;
                totalActiveAnimations++;
                runningAnimations[className] = runner;
                element.data(NG_ANIMATE_STATE, {
                    last: runner,
                    active: runningAnimations,
                    index: localAnimationCount,
                    totalActive: totalActiveAnimations
                });
                fireBeforeCallbackAsync();
                runner.before(function(cancelled) {
                    var data = element.data(NG_ANIMATE_STATE);
                    cancelled = cancelled || !data || !data.active[className] || (runner.isClassBased && data.active[className].event != animationEvent);
                    fireDOMOperation();
                    if (cancelled === true) {
                        closeAnimation();
                    } else {
                        fireAfterCallbackAsync();
                        runner.after(closeAnimation);
                    }
                });
                return runner.cancel;

                function fireDOMCallback(animationPhase) {
                    var eventName = '$animate:' + animationPhase;
                    if (elementEvents && elementEvents[eventName] && elementEvents[eventName].length > 0) {
                        $$asyncCallback(function() {
                            element.triggerHandler(eventName, {
                                event: animationEvent,
                                className: className
                            });
                        });
                    }
                }

                function fireBeforeCallbackAsync() {
                    fireDOMCallback('before');
                }

                function fireAfterCallbackAsync() {
                    fireDOMCallback('after');
                }

                function fireDoneCallbackAsync() {
                    fireDOMCallback('close');
                    doneCallback();
                }

                function fireDOMOperation() {
                    if (!fireDOMOperation.hasBeenRun) {
                        fireDOMOperation.hasBeenRun = true;
                        domOperation();
                    }
                }

                function closeAnimation() {
                    if (!closeAnimation.hasBeenRun) {
                        if (runner) {
                            runner.applyStyles();
                        }
                        closeAnimation.hasBeenRun = true;
                        if (options && options.tempClasses) {
                            forEach(options.tempClasses, function(className) {
                                $$jqLite.removeClass(element, className);
                            });
                        }
                        var data = element.data(NG_ANIMATE_STATE);
                        if (data) {
                            if (runner && runner.isClassBased) {
                                cleanup(element, className);
                            } else {
                                $$asyncCallback(function() {
                                    var data = element.data(NG_ANIMATE_STATE) || {};
                                    if (localAnimationCount == data.index) {
                                        cleanup(element, className, animationEvent);
                                    }
                                });
                                element.data(NG_ANIMATE_STATE, data);
                            }
                        }
                        fireDoneCallbackAsync();
                    }
                }
            }

            function cancelChildAnimations(element) {
                var node = extractElementNode(element);
                if (node) {
                    var nodes = angular.isFunction(node.getElementsByClassName) ? node.getElementsByClassName(NG_ANIMATE_CLASS_NAME) : node.querySelectorAll('.' + NG_ANIMATE_CLASS_NAME);
                    forEach(nodes, function(element) {
                        element = angular.element(element);
                        var data = element.data(NG_ANIMATE_STATE);
                        if (data && data.active) {
                            forEach(data.active, function(runner) {
                                runner.cancel();
                            });
                        }
                    });
                }
            }

            function cleanup(element, className) {
                if (isMatchingElement(element, $rootElement)) {
                    if (!rootAnimateState.disabled) {
                        rootAnimateState.running = false;
                        rootAnimateState.structural = false;
                    }
                } else if (className) {
                    var data = element.data(NG_ANIMATE_STATE) || {};
                    var removeAnimations = className === true;
                    if (!removeAnimations && data.active && data.active[className]) {
                        data.totalActive--;
                        delete data.active[className];
                    }
                    if (removeAnimations || !data.totalActive) {
                        $$jqLite.removeClass(element, NG_ANIMATE_CLASS_NAME);
                        element.removeData(NG_ANIMATE_STATE);
                    }
                }
            }

            function animationsDisabled(element, parentElement) {
                if (rootAnimateState.disabled) {
                    return true;
                }
                if (isMatchingElement(element, $rootElement)) {
                    return rootAnimateState.running;
                }
                var allowChildAnimations, parentRunningAnimation, hasParent;
                do {
                    if (parentElement.length === 0) break;
                    var isRoot = isMatchingElement(parentElement, $rootElement);
                    var state = isRoot ? rootAnimateState : (parentElement.data(NG_ANIMATE_STATE) || {});
                    if (state.disabled) {
                        return true;
                    }
                    if (isRoot) {
                        hasParent = true;
                    }
                    if (allowChildAnimations !== false) {
                        var animateChildrenFlag = parentElement.data(NG_ANIMATE_CHILDREN);
                        if (angular.isDefined(animateChildrenFlag)) {
                            allowChildAnimations = animateChildrenFlag;
                        }
                    }
                    parentRunningAnimation = parentRunningAnimation || state.running || (state.last && !state.last.isClassBased);
                }
                while (parentElement = parentElement.parent());
                return !hasParent || (!allowChildAnimations && parentRunningAnimation);
            }
        }]);
        $animateProvider.register('', ['$window', '$sniffer', '$timeout', '$$animateReflow', function($window, $sniffer, $timeout, $$animateReflow) {
            var CSS_PREFIX = '',
                TRANSITION_PROP, TRANSITIONEND_EVENT, ANIMATION_PROP, ANIMATIONEND_EVENT;
            if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
                CSS_PREFIX = '-webkit-';
                TRANSITION_PROP = 'WebkitTransition';
                TRANSITIONEND_EVENT = 'webkitTransitionEnd transitionend';
            } else {
                TRANSITION_PROP = 'transition';
                TRANSITIONEND_EVENT = 'transitionend';
            }
            if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
                CSS_PREFIX = '-webkit-';
                ANIMATION_PROP = 'WebkitAnimation';
                ANIMATIONEND_EVENT = 'webkitAnimationEnd animationend';
            } else {
                ANIMATION_PROP = 'animation';
                ANIMATIONEND_EVENT = 'animationend';
            }
            var DURATION_KEY = 'Duration';
            var PROPERTY_KEY = 'Property';
            var DELAY_KEY = 'Delay';
            var ANIMATION_ITERATION_COUNT_KEY = 'IterationCount';
            var ANIMATION_PLAYSTATE_KEY = 'PlayState';
            var NG_ANIMATE_PARENT_KEY = '$$ngAnimateKey';
            var NG_ANIMATE_CSS_DATA_KEY = '$$ngAnimateCSS3Data';
            var ELAPSED_TIME_MAX_DECIMAL_PLACES = 3;
            var CLOSING_TIME_BUFFER = 1.5;
            var ONE_SECOND = 1000;
            var lookupCache = {};
            var parentCounter = 0;
            var animationReflowQueue = [];
            var cancelAnimationReflow;

            function clearCacheAfterReflow() {
                if (!cancelAnimationReflow) {
                    cancelAnimationReflow = $$animateReflow(function() {
                        animationReflowQueue = [];
                        cancelAnimationReflow = null;
                        lookupCache = {};
                    });
                }
            }

            function afterReflow(element, callback) {
                if (cancelAnimationReflow) {
                    cancelAnimationReflow();
                }
                animationReflowQueue.push(callback);
                cancelAnimationReflow = $$animateReflow(function() {
                    forEach(animationReflowQueue, function(fn) {
                        fn();
                    });
                    animationReflowQueue = [];
                    cancelAnimationReflow = null;
                    lookupCache = {};
                });
            }
            var closingTimer = null;
            var closingTimestamp = 0;
            var animationElementQueue = [];

            function animationCloseHandler(element, totalTime) {
                var node = extractElementNode(element);
                element = angular.element(node);
                animationElementQueue.push(element);
                var futureTimestamp = Date.now() + totalTime;
                if (futureTimestamp <= closingTimestamp) {
                    return;
                }
                $timeout.cancel(closingTimer);
                closingTimestamp = futureTimestamp;
                closingTimer = $timeout(function() {
                    closeAllAnimations(animationElementQueue);
                    animationElementQueue = [];
                }, totalTime, false);
            }

            function closeAllAnimations(elements) {
                forEach(elements, function(element) {
                    var elementData = element.data(NG_ANIMATE_CSS_DATA_KEY);
                    if (elementData) {
                        forEach(elementData.closeAnimationFns, function(fn) {
                            fn();
                        });
                    }
                });
            }

            function getElementAnimationDetails(element, cacheKey) {
                var data = cacheKey ? lookupCache[cacheKey] : null;
                if (!data) {
                    var transitionDuration = 0;
                    var transitionDelay = 0;
                    var animationDuration = 0;
                    var animationDelay = 0;
                    forEach(element, function(element) {
                        if (element.nodeType == ELEMENT_NODE) {
                            var elementStyles = $window.getComputedStyle(element) || {};
                            var transitionDurationStyle = elementStyles[TRANSITION_PROP + DURATION_KEY];
                            transitionDuration = Math.max(parseMaxTime(transitionDurationStyle), transitionDuration);
                            var transitionDelayStyle = elementStyles[TRANSITION_PROP + DELAY_KEY];
                            transitionDelay = Math.max(parseMaxTime(transitionDelayStyle), transitionDelay);
                            var animationDelayStyle = elementStyles[ANIMATION_PROP + DELAY_KEY];
                            animationDelay = Math.max(parseMaxTime(elementStyles[ANIMATION_PROP + DELAY_KEY]), animationDelay);
                            var aDuration = parseMaxTime(elementStyles[ANIMATION_PROP + DURATION_KEY]);
                            if (aDuration > 0) {
                                aDuration *= parseInt(elementStyles[ANIMATION_PROP + ANIMATION_ITERATION_COUNT_KEY], 10) || 1;
                            }
                            animationDuration = Math.max(aDuration, animationDuration);
                        }
                    });
                    data = {
                        total: 0,
                        transitionDelay: transitionDelay,
                        transitionDuration: transitionDuration,
                        animationDelay: animationDelay,
                        animationDuration: animationDuration
                    };
                    if (cacheKey) {
                        lookupCache[cacheKey] = data;
                    }
                }
                return data;
            }

            function parseMaxTime(str) {
                var maxValue = 0;
                var values = isString(str) ? str.split(/\s*,\s*/) : [];
                forEach(values, function(value) {
                    maxValue = Math.max(parseFloat(value) || 0, maxValue);
                });
                return maxValue;
            }

            function getCacheKey(element) {
                var parentElement = element.parent();
                var parentID = parentElement.data(NG_ANIMATE_PARENT_KEY);
                if (!parentID) {
                    parentElement.data(NG_ANIMATE_PARENT_KEY, ++parentCounter);
                    parentID = parentCounter;
                }
                return parentID + '-' + extractElementNode(element).getAttribute('class');
            }

            function animateSetup(animationEvent, element, className, styles) {
                var structural = ['ng-enter', 'ng-leave', 'ng-move'].indexOf(className) >= 0;
                var cacheKey = getCacheKey(element);
                var eventCacheKey = cacheKey + ' ' + className;
                var itemIndex = lookupCache[eventCacheKey] ? ++lookupCache[eventCacheKey].total : 0;
                var stagger = {};
                if (itemIndex > 0) {
                    var staggerClassName = className + '-stagger';
                    var staggerCacheKey = cacheKey + ' ' + staggerClassName;
                    var applyClasses = !lookupCache[staggerCacheKey];
                    applyClasses && $$jqLite.addClass(element, staggerClassName);
                    stagger = getElementAnimationDetails(element, staggerCacheKey);
                    applyClasses && $$jqLite.removeClass(element, staggerClassName);
                }
                $$jqLite.addClass(element, className);
                var formerData = element.data(NG_ANIMATE_CSS_DATA_KEY) || {};
                var timings = getElementAnimationDetails(element, eventCacheKey);
                var transitionDuration = timings.transitionDuration;
                var animationDuration = timings.animationDuration;
                if (structural && transitionDuration === 0 && animationDuration === 0) {
                    $$jqLite.removeClass(element, className);
                    return false;
                }
                var blockTransition = styles || (structural && transitionDuration > 0);
                var blockAnimation = animationDuration > 0 && stagger.animationDelay > 0 && stagger.animationDuration === 0;
                var closeAnimationFns = formerData.closeAnimationFns || [];
                element.data(NG_ANIMATE_CSS_DATA_KEY, {
                    stagger: stagger,
                    cacheKey: eventCacheKey,
                    running: formerData.running || 0,
                    itemIndex: itemIndex,
                    blockTransition: blockTransition,
                    closeAnimationFns: closeAnimationFns
                });
                var node = extractElementNode(element);
                if (blockTransition) {
                    blockTransitions(node, true);
                    if (styles) {
                        element.css(styles);
                    }
                }
                if (blockAnimation) {
                    blockAnimations(node, true);
                }
                return true;
            }

            function animateRun(animationEvent, element, className, activeAnimationComplete, styles) {
                var node = extractElementNode(element);
                var elementData = element.data(NG_ANIMATE_CSS_DATA_KEY);
                if (node.getAttribute('class').indexOf(className) == -1 || !elementData) {
                    activeAnimationComplete();
                    return;
                }
                var activeClassName = '';
                var pendingClassName = '';
                forEach(className.split(' '), function(klass, i) {
                    var prefix = (i > 0 ? ' ' : '') + klass;
                    activeClassName += prefix + '-active';
                    pendingClassName += prefix + '-pending';
                });
                var style = '';
                var appliedStyles = [];
                var itemIndex = elementData.itemIndex;
                var stagger = elementData.stagger;
                var staggerTime = 0;
                if (itemIndex > 0) {
                    var transitionStaggerDelay = 0;
                    if (stagger.transitionDelay > 0 && stagger.transitionDuration === 0) {
                        transitionStaggerDelay = stagger.transitionDelay * itemIndex;
                    }
                    var animationStaggerDelay = 0;
                    if (stagger.animationDelay > 0 && stagger.animationDuration === 0) {
                        animationStaggerDelay = stagger.animationDelay * itemIndex;
                        appliedStyles.push(CSS_PREFIX + 'animation-play-state');
                    }
                    staggerTime = Math.round(Math.max(transitionStaggerDelay, animationStaggerDelay) * 100) / 100;
                }
                if (!staggerTime) {
                    $$jqLite.addClass(element, activeClassName);
                    if (elementData.blockTransition) {
                        blockTransitions(node, false);
                    }
                }
                var eventCacheKey = elementData.cacheKey + ' ' + activeClassName;
                var timings = getElementAnimationDetails(element, eventCacheKey);
                var maxDuration = Math.max(timings.transitionDuration, timings.animationDuration);
                if (maxDuration === 0) {
                    $$jqLite.removeClass(element, activeClassName);
                    animateClose(element, className);
                    activeAnimationComplete();
                    return;
                }
                if (!staggerTime && styles && Object.keys(styles).length > 0) {
                    if (!timings.transitionDuration) {
                        element.css('transition', timings.animationDuration + 's linear all');
                        appliedStyles.push('transition');
                    }
                    element.css(styles);
                }
                var maxDelay = Math.max(timings.transitionDelay, timings.animationDelay);
                var maxDelayTime = maxDelay * ONE_SECOND;
                if (appliedStyles.length > 0) {
                    var oldStyle = node.getAttribute('style') || '';
                    if (oldStyle.charAt(oldStyle.length - 1) !== ';') {
                        oldStyle += ';';
                    }
                    node.setAttribute('style', oldStyle + ' ' + style);
                }
                var startTime = Date.now();
                var css3AnimationEvents = ANIMATIONEND_EVENT + ' ' + TRANSITIONEND_EVENT;
                var animationTime = (maxDelay + maxDuration) * CLOSING_TIME_BUFFER;
                var totalTime = (staggerTime + animationTime) * ONE_SECOND;
                var staggerTimeout;
                if (staggerTime > 0) {
                    $$jqLite.addClass(element, pendingClassName);
                    staggerTimeout = $timeout(function() {
                        staggerTimeout = null;
                        if (timings.transitionDuration > 0) {
                            blockTransitions(node, false);
                        }
                        if (timings.animationDuration > 0) {
                            blockAnimations(node, false);
                        }
                        $$jqLite.addClass(element, activeClassName);
                        $$jqLite.removeClass(element, pendingClassName);
                        if (styles) {
                            if (timings.transitionDuration === 0) {
                                element.css('transition', timings.animationDuration + 's linear all');
                            }
                            element.css(styles);
                            appliedStyles.push('transition');
                        }
                    }, staggerTime * ONE_SECOND, false);
                }
                element.on(css3AnimationEvents, onAnimationProgress);
                elementData.closeAnimationFns.push(function() {
                    onEnd();
                    activeAnimationComplete();
                });
                elementData.running++;
                animationCloseHandler(element, totalTime);
                return onEnd;

                function onEnd() {
                    element.off(css3AnimationEvents, onAnimationProgress);
                    $$jqLite.removeClass(element, activeClassName);
                    $$jqLite.removeClass(element, pendingClassName);
                    if (staggerTimeout) {
                        $timeout.cancel(staggerTimeout);
                    }
                    animateClose(element, className);
                    var node = extractElementNode(element);
                    for (var i in appliedStyles) {
                        node.style.removeProperty(appliedStyles[i]);
                    }
                }

                function onAnimationProgress(event) {
                    event.stopPropagation();
                    var ev = event.originalEvent || event;
                    var timeStamp = ev.$manualTimeStamp || ev.timeStamp || Date.now();
                    var elapsedTime = (ev.elapsedTime) ? parseFloat(ev.elapsedTime.toFixed(ELAPSED_TIME_MAX_DECIMAL_PLACES)) : 0;
                    if (Math.max(timeStamp - startTime, 0) >= maxDelayTime && elapsedTime >= maxDuration) {
                        activeAnimationComplete();
                    }
                }
            }

            function blockTransitions(node, bool) {
                node.style[TRANSITION_PROP + PROPERTY_KEY] = bool ? 'none' : '';
            }

            function blockAnimations(node, bool) {
                node.style[ANIMATION_PROP + ANIMATION_PLAYSTATE_KEY] = bool ? 'paused' : '';
            }

            function animateBefore(animationEvent, element, className, styles) {
                if (animateSetup(animationEvent, element, className, styles)) {
                    return function(cancelled) {
                        cancelled && animateClose(element, className);
                    };
                }
            }

            function animateAfter(animationEvent, element, className, afterAnimationComplete, styles) {
                if (element.data(NG_ANIMATE_CSS_DATA_KEY)) {
                    return animateRun(animationEvent, element, className, afterAnimationComplete, styles);
                } else {
                    animateClose(element, className);
                    afterAnimationComplete();
                }
            }

            function animate(animationEvent, element, className, animationComplete, options) {
                var preReflowCancellation = animateBefore(animationEvent, element, className, options.from);
                if (!preReflowCancellation) {
                    clearCacheAfterReflow();
                    animationComplete();
                    return;
                }
                var cancel = preReflowCancellation;
                afterReflow(element, function() {
                    cancel = animateAfter(animationEvent, element, className, animationComplete, options.to);
                });
                return function(cancelled) {
                    (cancel || noop)(cancelled);
                };
            }

            function animateClose(element, className) {
                $$jqLite.removeClass(element, className);
                var data = element.data(NG_ANIMATE_CSS_DATA_KEY);
                if (data) {
                    if (data.running) {
                        data.running--;
                    }
                    if (!data.running || data.running === 0) {
                        element.removeData(NG_ANIMATE_CSS_DATA_KEY);
                    }
                }
            }
            return {
                animate: function(element, className, from, to, animationCompleted, options) {
                    options = options || {};
                    options.from = from;
                    options.to = to;
                    return animate('animate', element, className, animationCompleted, options);
                },
                enter: function(element, animationCompleted, options) {
                    options = options || {};
                    return animate('enter', element, 'ng-enter', animationCompleted, options);
                },
                leave: function(element, animationCompleted, options) {
                    options = options || {};
                    return animate('leave', element, 'ng-leave', animationCompleted, options);
                },
                move: function(element, animationCompleted, options) {
                    options = options || {};
                    return animate('move', element, 'ng-move', animationCompleted, options);
                },
                beforeSetClass: function(element, add, remove, animationCompleted, options) {
                    options = options || {};
                    var className = suffixClasses(remove, '-remove') + ' ' +
                        suffixClasses(add, '-add');
                    var cancellationMethod = animateBefore('setClass', element, className, options.from);
                    if (cancellationMethod) {
                        afterReflow(element, animationCompleted);
                        return cancellationMethod;
                    }
                    clearCacheAfterReflow();
                    animationCompleted();
                },
                beforeAddClass: function(element, className, animationCompleted, options) {
                    options = options || {};
                    var cancellationMethod = animateBefore('addClass', element, suffixClasses(className, '-add'), options.from);
                    if (cancellationMethod) {
                        afterReflow(element, animationCompleted);
                        return cancellationMethod;
                    }
                    clearCacheAfterReflow();
                    animationCompleted();
                },
                beforeRemoveClass: function(element, className, animationCompleted, options) {
                    options = options || {};
                    var cancellationMethod = animateBefore('removeClass', element, suffixClasses(className, '-remove'), options.from);
                    if (cancellationMethod) {
                        afterReflow(element, animationCompleted);
                        return cancellationMethod;
                    }
                    clearCacheAfterReflow();
                    animationCompleted();
                },
                setClass: function(element, add, remove, animationCompleted, options) {
                    options = options || {};
                    remove = suffixClasses(remove, '-remove');
                    add = suffixClasses(add, '-add');
                    var className = remove + ' ' + add;
                    return animateAfter('setClass', element, className, animationCompleted, options.to);
                },
                addClass: function(element, className, animationCompleted, options) {
                    options = options || {};
                    return animateAfter('addClass', element, suffixClasses(className, '-add'), animationCompleted, options.to);
                },
                removeClass: function(element, className, animationCompleted, options) {
                    options = options || {};
                    return animateAfter('removeClass', element, suffixClasses(className, '-remove'), animationCompleted, options.to);
                }
            };

            function suffixClasses(classes, suffix) {
                var className = '';
                classes = isArray(classes) ? classes : classes.split(/\s+/);
                forEach(classes, function(klass, i) {
                    if (klass && klass.length > 0) {
                        className += (i > 0 ? ' ' : '') + klass + suffix;
                    }
                });
                return className;
            }
        }]);
    }]);
})(window, window.angular);;
/*
 AngularJS v1.3.11
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(y, u, z) {
    'use strict';

    function s(h, k, p) {
        n.directive(h, ["$parse", "$swipe", function(d, e) {
            return function(l, m, f) {
                function g(a) {
                    if (!c) return !1;
                    var b = Math.abs(a.y - c.y);
                    a = (a.x - c.x) * k;
                    return q && 75 > b && 0 < a && 30 < a && .3 > b / a
                }
                var b = d(f[h]),
                    c, q, a = ["touch"];
                u.isDefined(f.ngSwipeDisableMouse) || a.push("mouse");
                e.bind(m, {
                    start: function(a, b) {
                        c = a;
                        q = !0
                    },
                    cancel: function(a) {
                        q = !1
                    },
                    end: function(a, c) {
                        g(a) && l.$apply(function() {
                            m.triggerHandler(p);
                            b(l, {
                                $event: c
                            })
                        })
                    }
                }, a)
            }
        }])
    }
    var n = u.module("ngTouch", []);
    n.factory("$swipe", [function() {
        function h(d) {
            var e = d.touches && d.touches.length ? d.touches : [d];
            d = d.changedTouches && d.changedTouches[0] || d.originalEvent && d.originalEvent.changedTouches && d.originalEvent.changedTouches[0] || e[0].originalEvent || e[0];
            return {
                x: d.clientX,
                y: d.clientY
            }
        }

        function k(d, e) {
            var l = [];
            u.forEach(d, function(d) {
                (d = p[d][e]) && l.push(d)
            });
            return l.join(" ")
        }
        var p = {
            mouse: {
                start: "mousedown",
                move: "mousemove",
                end: "mouseup"
            },
            touch: {
                start: "touchstart",
                move: "touchmove",
                end: "touchend",
                cancel: "touchcancel"
            }
        };
        return {
            bind: function(d,
                e, l) {
                var m, f, g, b, c = !1;
                l = l || ["mouse", "touch"];
                d.on(k(l, "start"), function(a) {
                    g = h(a);
                    c = !0;
                    f = m = 0;
                    b = g;
                    e.start && e.start(g, a)
                });
                var q = k(l, "cancel");
                if (q) d.on(q, function(a) {
                    c = !1;
                    e.cancel && e.cancel(a)
                });
                d.on(k(l, "move"), function(a) {
                    if (c && g) {
                        var d = h(a);
                        m += Math.abs(d.x - b.x);
                        f += Math.abs(d.y - b.y);
                        b = d;
                        10 > m && 10 > f || (f > m ? (c = !1, e.cancel && e.cancel(a)) : (a.preventDefault(), e.move && e.move(d, a)))
                    }
                });
                d.on(k(l, "end"), function(a) {
                    c && (c = !1, e.end && e.end(h(a), a))
                })
            }
        }
    }]);
    n.config(["$provide", function(h) {
        h.decorator("ngClickDirective", ["$delegate", function(k) {
            k.shift();
            return k
        }])
    }]);
    n.directive("ngClick", ["$parse", "$timeout", "$rootElement", function(h, k, p) {
        function d(b, c, d) {
            for (var a = 0; a < b.length; a += 2) {
                var e = b[a + 1],
                    f = d;
                if (25 > Math.abs(b[a] - c) && 25 > Math.abs(e - f)) return b.splice(a, a + 2), !0
            }
            return !1
        }

        function e(b) {
            if (!(2500 < Date.now() - m)) {
                var c = b.touches && b.touches.length ? b.touches : [b],
                    e = c[0].clientX,
                    c = c[0].clientY;
                1 > e && 1 > c || g && g[0] === e && g[1] === c || (g && (g = null), "label" === b.target.tagName.toLowerCase() && (g = [e, c]), d(f, e, c) || (b.stopPropagation(),
                    b.preventDefault(), b.target && b.target.blur()))
            }
        }

        function l(b) {
            b = b.touches && b.touches.length ? b.touches : [b];
            var c = b[0].clientX,
                d = b[0].clientY;
            f.push(c, d);
            k(function() {
                for (var a = 0; a < f.length; a += 2)
                    if (f[a] == c && f[a + 1] == d) {
                        f.splice(a, a + 2);
                        break
                    }
            }, 2500, !1)
        }
        var m, f, g;
        return function(b, c, g) {
            function a() {
                n = !1;
                c.removeClass("ng-click-active")
            }
            var k = h(g.ngClick),
                n = !1,
                r, s, v, w;
            c.on("touchstart", function(a) {
                n = !0;
                r = a.target ? a.target : a.srcElement;
                3 == r.nodeType && (r = r.parentNode);
                c.addClass("ng-click-active");
                s = Date.now();
                a = a.touches && a.touches.length ? a.touches : [a];
                a = a[0].originalEvent || a[0];
                v = a.clientX;
                w = a.clientY
            });
            c.on("touchmove", function(c) {
                a()
            });
            c.on("touchcancel", function(c) {
                a()
            });
            c.on("touchend", function(b) {
                var k = Date.now() - s,
                    h = b.changedTouches && b.changedTouches.length ? b.changedTouches : b.touches && b.touches.length ? b.touches : [b],
                    t = h[0].originalEvent || h[0],
                    h = t.clientX,
                    t = t.clientY,
                    x = Math.sqrt(Math.pow(h - v, 2) + Math.pow(t - w, 2));
                n && 750 > k && 12 > x && (f || (p[0].addEventListener("click", e, !0), p[0].addEventListener("touchstart",
                    l, !0), f = []), m = Date.now(), d(f, h, t), r && r.blur(), u.isDefined(g.disabled) && !1 !== g.disabled || c.triggerHandler("click", [b]));
                a()
            });
            c.onclick = function(a) {};
            c.on("click", function(a, c) {
                b.$apply(function() {
                    k(b, {
                        $event: c || a
                    })
                })
            });
            c.on("mousedown", function(a) {
                c.addClass("ng-click-active")
            });
            c.on("mousemove mouseup", function(a) {
                c.removeClass("ng-click-active")
            })
        }
    }]);
    s("ngSwipeLeft", -1, "swipeleft");
    s("ngSwipeRight", 1, "swiperight")
})(window, window.angular);
//# sourceMappingURL=angular-touch.min.js.map

;
/*
 AngularJS v1.3.11
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(p, k, q) {
    'use strict';
    k.module("ngAria", ["ng"]).provider("$aria", function() {
        function b(b, e, c) {
            return function(d, h, f) {
                var l = f.$normalize(e);
                a[l] && !f[l] && d.$watch(f[b], function(d) {
                    c && (d = !d);
                    h.attr(e, d)
                })
            }
        }
        var a = {
            ariaHidden: !0,
            ariaChecked: !0,
            ariaDisabled: !0,
            ariaRequired: !0,
            ariaInvalid: !0,
            ariaMultiline: !0,
            ariaValue: !0,
            tabindex: !0,
            bindKeypress: !0
        };
        this.config = function(b) {
            a = k.extend(a, b)
        };
        this.$get = function() {
            return {
                config: function(b) {
                    return a[b]
                },
                $$watchExpr: b
            }
        }
    }).directive("ngShow", ["$aria", function(b) {
        return b.$$watchExpr("ngShow",
            "aria-hidden", !0)
    }]).directive("ngHide", ["$aria", function(b) {
        return b.$$watchExpr("ngHide", "aria-hidden", !1)
    }]).directive("ngModel", ["$aria", function(b) {
        function a(a, c, d) {
            return b.config(c) && !d.attr(a)
        }

        function g(b, c) {
            var d = b.type,
                a = b.role;
            return "checkbox" === (d || a) || "menuitemcheckbox" === a ? "checkbox" : "radio" === (d || a) || "menuitemradio" === a ? "radio" : "range" === d || "progressbar" === a || "slider" === a ? "range" : "textbox" === (d || a) || "TEXTAREA" === c[0].nodeName ? "multiline" : ""
        }
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(e, c, d, h) {
                function f() {
                    return h.$modelValue
                }

                function l() {
                    return m ? (m = !1, function(a) {
                        a = a === d.value;
                        c.attr("aria-checked", a);
                        c.attr("tabindex", 0 - !a)
                    }) : function(a) {
                        c.attr("aria-checked", a === d.value)
                    }
                }

                function n(a) {
                    c.attr("aria-checked", !!a)
                }
                var k = g(d, c),
                    m = a("tabindex", "tabindex", c);
                switch (k) {
                    case "radio":
                    case "checkbox":
                        a("aria-checked", "ariaChecked", c) && e.$watch(f, "radio" === k ? l() : n);
                        break;
                    case "range":
                        b.config("ariaValue") && (d.min && !c.attr("aria-valuemin") && c.attr("aria-valuemin", d.min),
                            d.max && !c.attr("aria-valuemax") && c.attr("aria-valuemax", d.max), c.attr("aria-valuenow") || e.$watch(f, function(a) {
                                c.attr("aria-valuenow", a)
                            }));
                        break;
                    case "multiline":
                        a("aria-multiline", "ariaMultiline", c) && c.attr("aria-multiline", !0)
                }
                m && c.attr("tabindex", 0);
                h.$validators.required && a("aria-required", "ariaRequired", c) && e.$watch(function() {
                    return h.$error.required
                }, function(a) {
                    c.attr("aria-required", !!a)
                });
                a("aria-invalid", "ariaInvalid", c) && e.$watch(function() {
                    return h.$invalid
                }, function(a) {
                    c.attr("aria-invalid", !!a)
                })
            }
        }
    }]).directive("ngDisabled", ["$aria", function(b) {
        return b.$$watchExpr("ngDisabled", "aria-disabled")
    }]).directive("ngMessages", function() {
        return {
            restrict: "A",
            require: "?ngMessages",
            link: function(b, a, g, e) {
                a.attr("aria-live") || a.attr("aria-live", "assertive")
            }
        }
    }).directive("ngClick", ["$aria", "$parse", function(b, a) {
        return {
            restrict: "A",
            compile: function(g, e) {
                var c = a(e.ngClick, null, !0);
                return function(a, e, f) {
                    b.config("tabindex") && !e.attr("tabindex") && e.attr("tabindex", 0);
                    if (b.config("bindKeypress") &&
                        !f.ngKeypress) e.on("keypress", function(b) {
                        function e() {
                            c(a, {
                                $event: b
                            })
                        }
                        32 !== b.keyCode && 13 !== b.keyCode || a.$apply(e)
                    })
                }
            }
        }
    }]).directive("ngDblclick", ["$aria", function(b) {
        return function(a, g, e) {
            b.config("tabindex") && !g.attr("tabindex") && g.attr("tabindex", 0)
        }
    }])
})(window, window.angular);
//# sourceMappingURL=angular-aria.min.js.map

;
/*!
 * typeahead.js 0.11.1
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2015 Twitter, Inc. and other contributors; Licensed MIT
 */

! function(a, b) {
    "function" == typeof define && define.amd ? define("bloodhound", ["jquery"], function(c) {
        return a.Bloodhound = b(c)
    }) : "object" == typeof exports ? module.exports = b(require("jquery")) : a.Bloodhound = b(jQuery)
}(this, function(a) {
    var b = function() {
            "use strict";
            return {
                isMsie: function() {
                    return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : !1
                },
                isBlankString: function(a) {
                    return !a || /^\s*$/.test(a)
                },
                escapeRegExChars: function(a) {
                    return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                },
                isString: function(a) {
                    return "string" == typeof a
                },
                isNumber: function(a) {
                    return "number" == typeof a
                },
                isArray: a.isArray,
                isFunction: a.isFunction,
                isObject: a.isPlainObject,
                isUndefined: function(a) {
                    return "undefined" == typeof a
                },
                isElement: function(a) {
                    return !(!a || 1 !== a.nodeType)
                },
                isJQuery: function(b) {
                    return b instanceof a
                },
                toStr: function(a) {
                    return b.isUndefined(a) || null === a ? "" : a + ""
                },
                bind: a.proxy,
                each: function(b, c) {
                    function d(a, b) {
                        return c(b, a)
                    }
                    a.each(b, d)
                },
                map: a.map,
                filter: a.grep,
                every: function(b, c) {
                    var d = !0;
                    return b ? (a.each(b, function(a, e) {
                        return (d = c.call(null, e, a, b)) ? void 0 : !1
                    }), !!d) : d
                },
                some: function(b, c) {
                    var d = !1;
                    return b ? (a.each(b, function(a, e) {
                        return (d = c.call(null, e, a, b)) ? !1 : void 0
                    }), !!d) : d
                },
                mixin: a.extend,
                identity: function(a) {
                    return a
                },
                clone: function(b) {
                    return a.extend(!0, {}, b)
                },
                getIdGenerator: function() {
                    var a = 0;
                    return function() {
                        return a++
                    }
                },
                templatify: function(b) {
                    function c() {
                        return String(b)
                    }
                    return a.isFunction(b) ? b : c
                },
                defer: function(a) {
                    setTimeout(a, 0)
                },
                debounce: function(a, b, c) {
                    var d, e;
                    return function() {
                        var f, g, h = this,
                            i = arguments;
                        return f = function() {
                            d = null, c || (e = a.apply(h, i))
                        }, g = c && !d, clearTimeout(d), d = setTimeout(f, b), g && (e = a.apply(h, i)), e
                    }
                },
                throttle: function(a, b) {
                    var c, d, e, f, g, h;
                    return g = 0, h = function() {
                            g = new Date, e = null, f = a.apply(c, d)
                        },
                        function() {
                            var i = new Date,
                                j = b - (i - g);
                            return c = this, d = arguments, 0 >= j ? (clearTimeout(e), e = null, g = i, f = a.apply(c, d)) : e || (e = setTimeout(h, j)), f
                        }
                },
                stringify: function(a) {
                    return b.isString(a) ? a : JSON.stringify(a)
                },
                noop: function() {}
            }
        }(),
        c = "0.11.1",
        d = function() {
            "use strict";

            function a(a) {
                return a = b.toStr(a), a ? a.split(/\s+/) : []
            }

            function c(a) {
                return a = b.toStr(a), a ? a.split(/\W+/) : []
            }

            function d(a) {
                return function(c) {
                    return c = b.isArray(c) ? c : [].slice.call(arguments, 0),
                        function(d) {
                            var e = [];
                            return b.each(c, function(c) {
                                e = e.concat(a(b.toStr(d[c])))
                            }), e
                        }
                }
            }
            return {
                nonword: c,
                whitespace: a,
                obj: {
                    nonword: d(c),
                    whitespace: d(a)
                }
            }
        }(),
        e = function() {
            "use strict";

            function c(c) {
                this.maxSize = b.isNumber(c) ? c : 100, this.reset(), this.maxSize <= 0 && (this.set = this.get = a.noop)
            }

            function d() {
                this.head = this.tail = null
            }

            function e(a, b) {
                this.key = a, this.val = b, this.prev = this.next = null
            }
            return b.mixin(c.prototype, {
                set: function(a, b) {
                    var c, d = this.list.tail;
                    this.size >= this.maxSize && (this.list.remove(d), delete this.hash[d.key], this.size--), (c = this.hash[a]) ? (c.val = b, this.list.moveToFront(c)) : (c = new e(a, b), this.list.add(c), this.hash[a] = c, this.size++)
                },
                get: function(a) {
                    var b = this.hash[a];
                    return b ? (this.list.moveToFront(b), b.val) : void 0
                },
                reset: function() {
                    this.size = 0, this.hash = {}, this.list = new d
                }
            }), b.mixin(d.prototype, {
                add: function(a) {
                    this.head && (a.next = this.head, this.head.prev = a), this.head = a, this.tail = this.tail || a
                },
                remove: function(a) {
                    a.prev ? a.prev.next = a.next : this.head = a.next, a.next ? a.next.prev = a.prev : this.tail = a.prev
                },
                moveToFront: function(a) {
                    this.remove(a), this.add(a)
                }
            }), c
        }(),
        f = function() {
            "use strict";

            function c(a, c) {
                this.prefix = ["__", a, "__"].join(""), this.ttlKey = "__ttl__", this.keyMatcher = new RegExp("^" + b.escapeRegExChars(this.prefix)), this.ls = c || h, !this.ls && this._noop()
            }

            function d() {
                return (new Date).getTime()
            }

            function e(a) {
                return JSON.stringify(b.isUndefined(a) ? null : a)
            }

            function f(b) {
                return a.parseJSON(b)
            }

            function g(a) {
                var b, c, d = [],
                    e = h.length;
                for (b = 0; e > b; b++)(c = h.key(b)).match(a) && d.push(c.replace(a, ""));
                return d
            }
            var h;
            try {
                h = window.localStorage, h.setItem("~~~", "!"), h.removeItem("~~~")
            } catch (i) {
                h = null
            }
            return b.mixin(c.prototype, {
                _prefix: function(a) {
                    return this.prefix + a
                },
                _ttlKey: function(a) {
                    return this._prefix(a) + this.ttlKey
                },
                _noop: function() {
                    this.get = this.set = this.remove = this.clear = this.isExpired = b.noop
                },
                _safeSet: function(a, b) {
                    try {
                        this.ls.setItem(a, b)
                    } catch (c) {
                        "QuotaExceededError" === c.name && (this.clear(), this._noop())
                    }
                },
                get: function(a) {
                    return this.isExpired(a) && this.remove(a), f(this.ls.getItem(this._prefix(a)))
                },
                set: function(a, c, f) {
                    return b.isNumber(f) ? this._safeSet(this._ttlKey(a), e(d() + f)) : this.ls.removeItem(this._ttlKey(a)), this._safeSet(this._prefix(a), e(c))
                },
                remove: function(a) {
                    return this.ls.removeItem(this._ttlKey(a)), this.ls.removeItem(this._prefix(a)), this
                },
                clear: function() {
                    var a, b = g(this.keyMatcher);
                    for (a = b.length; a--;) this.remove(b[a]);
                    return this
                },
                isExpired: function(a) {
                    var c = f(this.ls.getItem(this._ttlKey(a)));
                    return b.isNumber(c) && d() > c ? !0 : !1
                }
            }), c
        }(),
        g = function() {
            "use strict";

            function c(a) {
                a = a || {}, this.cancelled = !1, this.lastReq = null, this._send = a.transport, this._get = a.limiter ? a.limiter(this._get) : this._get, this._cache = a.cache === !1 ? new e(0) : h
            }
            var d = 0,
                f = {},
                g = 6,
                h = new e(10);
            return c.setMaxPendingRequests = function(a) {
                g = a
            }, c.resetCache = function() {
                h.reset()
            }, b.mixin(c.prototype, {
                _fingerprint: function(b) {
                    return b = b || {}, b.url + b.type + a.param(b.data || {})
                },
                _get: function(a, b) {
                    function c(a) {
                        b(null, a), k._cache.set(i, a)
                    }

                    function e() {
                        b(!0)
                    }

                    function h() {
                        d--, delete f[i], k.onDeckRequestArgs && (k._get.apply(k, k.onDeckRequestArgs), k.onDeckRequestArgs = null)
                    }
                    var i, j, k = this;
                    i = this._fingerprint(a), this.cancelled || i !== this.lastReq || ((j = f[i]) ? j.done(c).fail(e) : g > d ? (d++, f[i] = this._send(a).done(c).fail(e).always(h)) : this.onDeckRequestArgs = [].slice.call(arguments, 0))
                },
                get: function(c, d) {
                    var e, f;
                    d = d || a.noop, c = b.isString(c) ? {
                        url: c
                    } : c || {}, f = this._fingerprint(c), this.cancelled = !1, this.lastReq = f, (e = this._cache.get(f)) ? d(null, e) : this._get(c, d)
                },
                cancel: function() {
                    this.cancelled = !0
                }
            }), c
        }(),
        h = window.SearchIndex = function() {
            "use strict";

            function c(c) {
                c = c || {}, c.datumTokenizer && c.queryTokenizer || a.error("datumTokenizer and queryTokenizer are both required"), this.identify = c.identify || b.stringify, this.datumTokenizer = c.datumTokenizer, this.queryTokenizer = c.queryTokenizer, this.reset()
            }

            function d(a) {
                return a = b.filter(a, function(a) {
                    return !!a
                }), a = b.map(a, function(a) {
                    return a.toLowerCase()
                })
            }

            function e() {
                var a = {};
                return a[i] = [], a[h] = {}, a
            }

            function f(a) {
                for (var b = {}, c = [], d = 0, e = a.length; e > d; d++) b[a[d]] || (b[a[d]] = !0, c.push(a[d]));
                return c
            }

            function g(a, b) {
                var c = 0,
                    d = 0,
                    e = [];
                a = a.sort(), b = b.sort();
                for (var f = a.length, g = b.length; f > c && g > d;) a[c] < b[d] ? c++ : a[c] > b[d] ? d++ : (e.push(a[c]), c++, d++);
                return e
            }
            var h = "c",
                i = "i";
            return b.mixin(c.prototype, {
                bootstrap: function(a) {
                    this.datums = a.datums, this.trie = a.trie
                },
                add: function(a) {
                    var c = this;
                    a = b.isArray(a) ? a : [a], b.each(a, function(a) {
                        var f, g;
                        c.datums[f = c.identify(a)] = a, g = d(c.datumTokenizer(a)), b.each(g, function(a) {
                            var b, d, g;
                            for (b = c.trie, d = a.split(""); g = d.shift();) b = b[h][g] || (b[h][g] = e()), b[i].push(f)
                        })
                    })
                },
                get: function(a) {
                    var c = this;
                    return b.map(a, function(a) {
                        return c.datums[a]
                    })
                },
                search: function(a) {
                    var c, e, j = this;
                    return c = d(this.queryTokenizer(a)), b.each(c, function(a) {
                        var b, c, d, f;
                        if (e && 0 === e.length) return !1;
                        for (b = j.trie, c = a.split(""); b && (d = c.shift());) b = b[h][d];
                        return b && 0 === c.length ? (f = b[i].slice(0), void(e = e ? g(e, f) : f)) : (e = [], !1)
                    }), e ? b.map(f(e), function(a) {
                        return j.datums[a]
                    }) : []
                },
                all: function() {
                    var a = [];
                    for (var b in this.datums) a.push(this.datums[b]);
                    return a
                },
                reset: function() {
                    this.datums = {}, this.trie = e()
                },
                serialize: function() {
                    return {
                        datums: this.datums,
                        trie: this.trie
                    }
                }
            }), c
        }(),
        i = function() {
            "use strict";

            function a(a) {
                this.url = a.url, this.ttl = a.ttl, this.cache = a.cache, this.prepare = a.prepare, this.transform = a.transform, this.transport = a.transport, this.thumbprint = a.thumbprint, this.storage = new f(a.cacheKey)
            }
            var c;
            return c = {
                data: "data",
                protocol: "protocol",
                thumbprint: "thumbprint"
            }, b.mixin(a.prototype, {
                _settings: function() {
                    return {
                        url: this.url,
                        type: "GET",
                        dataType: "json"
                    }
                },
                store: function(a) {
                    this.cache && (this.storage.set(c.data, a, this.ttl), this.storage.set(c.protocol, location.protocol, this.ttl), this.storage.set(c.thumbprint, this.thumbprint, this.ttl))
                },
                fromCache: function() {
                    var a, b = {};
                    return this.cache ? (b.data = this.storage.get(c.data), b.protocol = this.storage.get(c.protocol), b.thumbprint = this.storage.get(c.thumbprint), a = b.thumbprint !== this.thumbprint || b.protocol !== location.protocol, b.data && !a ? b.data : null) : null
                },
                fromNetwork: function(a) {
                    function b() {
                        a(!0)
                    }

                    function c(b) {
                        a(null, e.transform(b))
                    }
                    var d, e = this;
                    a && (d = this.prepare(this._settings()), this.transport(d).fail(b).done(c))
                },
                clear: function() {
                    return this.storage.clear(), this
                }
            }), a
        }(),
        j = function() {
            "use strict";

            function a(a) {
                this.url = a.url, this.prepare = a.prepare, this.transform = a.transform, this.transport = new g({
                    cache: a.cache,
                    limiter: a.limiter,
                    transport: a.transport
                })
            }
            return b.mixin(a.prototype, {
                _settings: function() {
                    return {
                        url: this.url,
                        type: "GET",
                        dataType: "json"
                    }
                },
                get: function(a, b) {
                    function c(a, c) {
                        b(a ? [] : e.transform(c))
                    }
                    var d, e = this;
                    if (b) return a = a || "", d = this.prepare(a, this._settings()), this.transport.get(d, c)
                },
                cancelLastRequest: function() {
                    this.transport.cancel()
                }
            }), a
        }(),
        k = function() {
            "use strict";

            function d(d) {
                var e;
                return d ? (e = {
                    url: null,
                    ttl: 864e5,
                    cache: !0,
                    cacheKey: null,
                    thumbprint: "",
                    prepare: b.identity,
                    transform: b.identity,
                    transport: null
                }, d = b.isString(d) ? {
                    url: d
                } : d, d = b.mixin(e, d), !d.url && a.error("prefetch requires url to be set"), d.transform = d.filter || d.transform, d.cacheKey = d.cacheKey || d.url, d.thumbprint = c + d.thumbprint, d.transport = d.transport ? h(d.transport) : a.ajax, d) : null
            }

            function e(c) {
                var d;
                if (c) return d = {
                    url: null,
                    cache: !0,
                    prepare: null,
                    replace: null,
                    wildcard: null,
                    limiter: null,
                    rateLimitBy: "debounce",
                    rateLimitWait: 300,
                    transform: b.identity,
                    transport: null
                }, c = b.isString(c) ? {
                    url: c
                } : c, c = b.mixin(d, c), !c.url && a.error("remote requires url to be set"), c.transform = c.filter || c.transform, c.prepare = f(c), c.limiter = g(c), c.transport = c.transport ? h(c.transport) : a.ajax, delete c.replace, delete c.wildcard, delete c.rateLimitBy, delete c.rateLimitWait, c
            }

            function f(a) {
                function b(a, b) {
                    return b.url = f(b.url, a), b
                }

                function c(a, b) {
                    return b.url = b.url.replace(g, encodeURIComponent(a)), b
                }

                function d(a, b) {
                    return b
                }
                var e, f, g;
                return e = a.prepare, f = a.replace, g = a.wildcard, e ? e : e = f ? b : a.wildcard ? c : d
            }

            function g(a) {
                function c(a) {
                    return function(c) {
                        return b.debounce(c, a)
                    }
                }

                function d(a) {
                    return function(c) {
                        return b.throttle(c, a)
                    }
                }
                var e, f, g;
                return e = a.limiter, f = a.rateLimitBy, g = a.rateLimitWait, e || (e = /^throttle$/i.test(f) ? d(g) : c(g)), e
            }

            function h(c) {
                return function(d) {
                    function e(a) {
                        b.defer(function() {
                            g.resolve(a)
                        })
                    }

                    function f(a) {
                        b.defer(function() {
                            g.reject(a)
                        })
                    }
                    var g = a.Deferred();
                    return c(d, e, f), g
                }
            }
            return function(c) {
                var f, g;
                return f = {
                    initialize: !0,
                    identify: b.stringify,
                    datumTokenizer: null,
                    queryTokenizer: null,
                    sufficient: 5,
                    sorter: null,
                    local: [],
                    prefetch: null,
                    remote: null
                }, c = b.mixin(f, c || {}), !c.datumTokenizer && a.error("datumTokenizer is required"), !c.queryTokenizer && a.error("queryTokenizer is required"), g = c.sorter, c.sorter = g ? function(a) {
                    return a.sort(g)
                } : b.identity, c.local = b.isFunction(c.local) ? c.local() : c.local, c.prefetch = d(c.prefetch), c.remote = e(c.remote), c
            }
        }(),
        l = function() {
            "use strict";

            function c(a) {
                a = k(a), this.sorter = a.sorter, this.identify = a.identify, this.sufficient = a.sufficient, this.local = a.local, this.remote = a.remote ? new j(a.remote) : null, this.prefetch = a.prefetch ? new i(a.prefetch) : null, this.index = new h({
                    identify: this.identify,
                    datumTokenizer: a.datumTokenizer,
                    queryTokenizer: a.queryTokenizer
                }), a.initialize !== !1 && this.initialize()
            }
            var e;
            return e = window && window.Bloodhound, c.noConflict = function() {
                return window && (window.Bloodhound = e), c
            }, c.tokenizers = d, b.mixin(c.prototype, {
                __ttAdapter: function() {
                    function a(a, b, d) {
                        return c.search(a, b, d)
                    }

                    function b(a, b) {
                        return c.search(a, b)
                    }
                    var c = this;
                    return this.remote ? a : b
                },
                _loadPrefetch: function() {
                    function b(a, b) {
                        return a ? c.reject() : (e.add(b), e.prefetch.store(e.index.serialize()), void c.resolve())
                    }
                    var c, d, e = this;
                    return c = a.Deferred(), this.prefetch ? (d = this.prefetch.fromCache()) ? (this.index.bootstrap(d), c.resolve()) : this.prefetch.fromNetwork(b) : c.resolve(), c.promise()
                },
                _initialize: function() {
                    function a() {
                        b.add(b.local)
                    }
                    var b = this;
                    return this.clear(), (this.initPromise = this._loadPrefetch()).done(a), this.initPromise
                },
                initialize: function(a) {
                    return !this.initPromise || a ? this._initialize() : this.initPromise
                },
                add: function(a) {
                    return this.index.add(a), this
                },
                get: function(a) {
                    return a = b.isArray(a) ? a : [].slice.call(arguments), this.index.get(a)
                },
                search: function(a, c, d) {
                    function e(a) {
                        var c = [];
                        b.each(a, function(a) {
                            !b.some(f, function(b) {
                                return g.identify(a) === g.identify(b)
                            }) && c.push(a)
                        }), d && d(c)
                    }
                    var f, g = this;
                    return f = this.sorter(this.index.search(a)), c(this.remote ? f.slice() : f), this.remote && f.length < this.sufficient ? this.remote.get(a, e) : this.remote && this.remote.cancelLastRequest(), this
                },
                all: function() {
                    return this.index.all()
                },
                clear: function() {
                    return this.index.reset(), this
                },
                clearPrefetchCache: function() {
                    return this.prefetch && this.prefetch.clear(), this
                },
                clearRemoteCache: function() {
                    return g.resetCache(), this
                },
                ttAdapter: function() {
                    return this.__ttAdapter()
                }
            }), c
        }();
    return l
}),
function(a, b) {
    "function" == typeof define && define.amd ? define("typeahead.js", ["jquery"], function(a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(this, function(a) {
    var b = function() {
            "use strict";
            return {
                isMsie: function() {
                    return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : !1
                },
                isBlankString: function(a) {
                    return !a || /^\s*$/.test(a)
                },
                escapeRegExChars: function(a) {
                    return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                },
                isString: function(a) {
                    return "string" == typeof a
                },
                isNumber: function(a) {
                    return "number" == typeof a
                },
                isArray: a.isArray,
                isFunction: a.isFunction,
                isObject: a.isPlainObject,
                isUndefined: function(a) {
                    return "undefined" == typeof a
                },
                isElement: function(a) {
                    return !(!a || 1 !== a.nodeType)
                },
                isJQuery: function(b) {
                    return b instanceof a
                },
                toStr: function(a) {
                    return b.isUndefined(a) || null === a ? "" : a + ""
                },
                bind: a.proxy,
                each: function(b, c) {
                    function d(a, b) {
                        return c(b, a)
                    }
                    a.each(b, d)
                },
                map: a.map,
                filter: a.grep,
                every: function(b, c) {
                    var d = !0;
                    return b ? (a.each(b, function(a, e) {
                        return (d = c.call(null, e, a, b)) ? void 0 : !1
                    }), !!d) : d
                },
                some: function(b, c) {
                    var d = !1;
                    return b ? (a.each(b, function(a, e) {
                        return (d = c.call(null, e, a, b)) ? !1 : void 0
                    }), !!d) : d
                },
                mixin: a.extend,
                identity: function(a) {
                    return a
                },
                clone: function(b) {
                    return a.extend(!0, {}, b)
                },
                getIdGenerator: function() {
                    var a = 0;
                    return function() {
                        return a++
                    }
                },
                templatify: function(b) {
                    function c() {
                        return String(b)
                    }
                    return a.isFunction(b) ? b : c
                },
                defer: function(a) {
                    setTimeout(a, 0)
                },
                debounce: function(a, b, c) {
                    var d, e;
                    return function() {
                        var f, g, h = this,
                            i = arguments;
                        return f = function() {
                            d = null, c || (e = a.apply(h, i))
                        }, g = c && !d, clearTimeout(d), d = setTimeout(f, b), g && (e = a.apply(h, i)), e
                    }
                },
                throttle: function(a, b) {
                    var c, d, e, f, g, h;
                    return g = 0, h = function() {
                            g = new Date, e = null, f = a.apply(c, d)
                        },
                        function() {
                            var i = new Date,
                                j = b - (i - g);
                            return c = this, d = arguments, 0 >= j ? (clearTimeout(e), e = null, g = i, f = a.apply(c, d)) : e || (e = setTimeout(h, j)), f
                        }
                },
                stringify: function(a) {
                    return b.isString(a) ? a : JSON.stringify(a)
                },
                noop: function() {}
            }
        }(),
        c = function() {
            "use strict";

            function a(a) {
                var g, h;
                return h = b.mixin({}, f, a), g = {
                    css: e(),
                    classes: h,
                    html: c(h),
                    selectors: d(h)
                }, {
                    css: g.css,
                    html: g.html,
                    classes: g.classes,
                    selectors: g.selectors,
                    mixin: function(a) {
                        b.mixin(a, g)
                    }
                }
            }

            function c(a) {
                return {
                    wrapper: '<span class="' + a.wrapper + '"></span>',
                    menu: '<div class="' + a.menu + '"></div>'
                }
            }

            function d(a) {
                var c = {};
                return b.each(a, function(a, b) {
                    c[b] = "." + a
                }), c
            }

            function e() {
                var a = {
                    wrapper: {
                        position: "relative",
                        display: "inline-block"
                    },
                    hint: {
                        position: "absolute",
                        top: "0",
                        left: "0",
                        borderColor: "transparent",
                        boxShadow: "none",
                        opacity: "1"
                    },
                    input: {
                        position: "relative",
                        verticalAlign: "top",
                        backgroundColor: "transparent"
                    },
                    inputWithNoHint: {
                        position: "relative",
                        verticalAlign: "top"
                    },
                    menu: {
                        position: "absolute",
                        top: "100%",
                        left: "0",
                        zIndex: "100",
                        display: "none"
                    },
                    ltr: {
                        left: "0",
                        right: "auto"
                    },
                    rtl: {
                        left: "auto",
                        right: " 0"
                    }
                };
                return b.isMsie() && b.mixin(a.input, {
                    backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
                }), a
            }
            var f = {
                wrapper: "twitter-typeahead",
                input: "tt-input",
                hint: "tt-hint",
                menu: "tt-menu",
                dataset: "tt-dataset",
                suggestion: "tt-suggestion",
                selectable: "tt-selectable",
                empty: "tt-empty",
                open: "tt-open",
                cursor: "tt-cursor",
                highlight: "tt-highlight"
            };
            return a
        }(),
        d = function() {
            "use strict";

            function c(b) {
                b && b.el || a.error("EventBus initialized without el"), this.$el = a(b.el)
            }
            var d, e;
            return d = "typeahead:", e = {
                render: "rendered",
                cursorchange: "cursorchanged",
                select: "selected",
                autocomplete: "autocompleted"
            }, b.mixin(c.prototype, {
                _trigger: function(b, c) {
                    var e;
                    return e = a.Event(d + b), (c = c || []).unshift(e), this.$el.trigger.apply(this.$el, c), e
                },
                before: function(a) {
                    var b, c;
                    return b = [].slice.call(arguments, 1), c = this._trigger("before" + a, b), c.isDefaultPrevented()
                },
                trigger: function(a) {
                    var b;
                    this._trigger(a, [].slice.call(arguments, 1)), (b = e[a]) && this._trigger(b, [].slice.call(arguments, 1))
                }
            }), c
        }(),
        e = function() {
            "use strict";

            function a(a, b, c, d) {
                var e;
                if (!c) return this;
                for (b = b.split(i), c = d ? h(c, d) : c, this._callbacks = this._callbacks || {}; e = b.shift();) this._callbacks[e] = this._callbacks[e] || {
                    sync: [],
                    async: []
                }, this._callbacks[e][a].push(c);
                return this
            }

            function b(b, c, d) {
                return a.call(this, "async", b, c, d)
            }

            function c(b, c, d) {
                return a.call(this, "sync", b, c, d)
            }

            function d(a) {
                var b;
                if (!this._callbacks) return this;
                for (a = a.split(i); b = a.shift();) delete this._callbacks[b];
                return this
            }

            function e(a) {
                var b, c, d, e, g;
                if (!this._callbacks) return this;
                for (a = a.split(i), d = [].slice.call(arguments, 1);
                    (b = a.shift()) && (c = this._callbacks[b]);) e = f(c.sync, this, [b].concat(d)), g = f(c.async, this, [b].concat(d)), e() && j(g);
                return this
            }

            function f(a, b, c) {
                function d() {
                    for (var d, e = 0, f = a.length; !d && f > e; e += 1) d = a[e].apply(b, c) === !1;
                    return !d
                }
                return d
            }

            function g() {
                var a;
                return a = window.setImmediate ? function(a) {
                    setImmediate(function() {
                        a()
                    })
                } : function(a) {
                    setTimeout(function() {
                        a()
                    }, 0)
                }
            }

            function h(a, b) {
                return a.bind ? a.bind(b) : function() {
                    a.apply(b, [].slice.call(arguments, 0))
                }
            }
            var i = /\s+/,
                j = g();
            return {
                onSync: c,
                onAsync: b,
                off: d,
                trigger: e
            }
        }(),
        f = function(a) {
            "use strict";

            function c(a, c, d) {
                for (var e, f = [], g = 0, h = a.length; h > g; g++) f.push(b.escapeRegExChars(a[g]));
                return e = d ? "\\b(" + f.join("|") + ")\\b" : "(" + f.join("|") + ")", c ? new RegExp(e) : new RegExp(e, "i")
            }
            var d = {
                node: null,
                pattern: null,
                tagName: "strong",
                className: null,
                wordsOnly: !1,
                caseSensitive: !1
            };
            return function(e) {
                function f(b) {
                    var c, d, f;
                    return (c = h.exec(b.data)) && (f = a.createElement(e.tagName), e.className && (f.className = e.className), d = b.splitText(c.index), d.splitText(c[0].length), f.appendChild(d.cloneNode(!0)), b.parentNode.replaceChild(f, d)), !!c
                }

                function g(a, b) {
                    for (var c, d = 3, e = 0; e < a.childNodes.length; e++) c = a.childNodes[e], c.nodeType === d ? e += b(c) ? 1 : 0 : g(c, b)
                }
                var h;
                e = b.mixin({}, d, e), e.node && e.pattern && (e.pattern = b.isArray(e.pattern) ? e.pattern : [e.pattern], h = c(e.pattern, e.caseSensitive, e.wordsOnly), g(e.node, f))
            }
        }(window.document),
        g = function() {
            "use strict";

            function c(c, e) {
                c = c || {}, c.input || a.error("input is missing"), e.mixin(this), this.$hint = a(c.hint), this.$input = a(c.input), this.query = this.$input.val(), this.queryWhenFocused = this.hasFocus() ? this.query : null, this.$overflowHelper = d(this.$input), this._checkLanguageDirection(), 0 === this.$hint.length && (this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = b.noop)
            }

            function d(b) {
                return a('<pre aria-hidden="true"></pre>').css({
                    position: "absolute",
                    visibility: "hidden",
                    whiteSpace: "pre",
                    fontFamily: b.css("font-family"),
                    fontSize: b.css("font-size"),
                    fontStyle: b.css("font-style"),
                    fontVariant: b.css("font-variant"),
                    fontWeight: b.css("font-weight"),
                    wordSpacing: b.css("word-spacing"),
                    letterSpacing: b.css("letter-spacing"),
                    textIndent: b.css("text-indent"),
                    textRendering: b.css("text-rendering"),
                    textTransform: b.css("text-transform")
                }).insertAfter(b)
            }

            function f(a, b) {
                return c.normalizeQuery(a) === c.normalizeQuery(b)
            }

            function g(a) {
                return a.altKey || a.ctrlKey || a.metaKey || a.shiftKey
            }
            var h;
            return h = {
                9: "tab",
                27: "esc",
                37: "left",
                39: "right",
                13: "enter",
                38: "up",
                40: "down"
            }, c.normalizeQuery = function(a) {
                return b.toStr(a).replace(/^\s*/g, "").replace(/\s{2,}/g, " ")
            }, b.mixin(c.prototype, e, {
                _onBlur: function() {
                    this.resetInputValue(), this.trigger("blurred")
                },
                _onFocus: function() {
                    this.queryWhenFocused = this.query, this.trigger("focused")
                },
                _onKeydown: function(a) {
                    var b = h[a.which || a.keyCode];
                    this._managePreventDefault(b, a), b && this._shouldTrigger(b, a) && this.trigger(b + "Keyed", a)
                },
                _onInput: function() {
                    this._setQuery(this.getInputValue()), this.clearHintIfInvalid(), this._checkLanguageDirection()
                },
                _managePreventDefault: function(a, b) {
                    var c;
                    switch (a) {
                        case "up":
                        case "down":
                            c = !g(b);
                            break;
                        default:
                            c = !1
                    }
                    c && b.preventDefault()
                },
                _shouldTrigger: function(a, b) {
                    var c;
                    switch (a) {
                        case "tab":
                            c = !g(b);
                            break;
                        default:
                            c = !0
                    }
                    return c
                },
                _checkLanguageDirection: function() {
                    var a = (this.$input.css("direction") || "ltr").toLowerCase();
                    this.dir !== a && (this.dir = a, this.$hint.attr("dir", a), this.trigger("langDirChanged", a))
                },
                _setQuery: function(a, b) {
                    var c, d;
                    c = f(a, this.query), d = c ? this.query.length !== a.length : !1, this.query = a, b || c ? !b && d && this.trigger("whitespaceChanged", this.query) : this.trigger("queryChanged", this.query)
                },
                bind: function() {
                    var a, c, d, e, f = this;
                    return a = b.bind(this._onBlur, this), c = b.bind(this._onFocus, this), d = b.bind(this._onKeydown, this), e = b.bind(this._onInput, this), this.$input.on("blur.tt", a).on("focus.tt", c).on("keydown.tt", d), !b.isMsie() || b.isMsie() > 9 ? this.$input.on("input.tt", e) : this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function(a) {
                        h[a.which || a.keyCode] || b.defer(b.bind(f._onInput, f, a))
                    }), this
                },
                focus: function() {
                    this.$input.focus()
                },
                blur: function() {
                    this.$input.blur()
                },
                getLangDir: function() {
                    return this.dir
                },
                getQuery: function() {
                    return this.query || ""
                },
                setQuery: function(a, b) {
                    this.setInputValue(a), this._setQuery(a, b)
                },
                hasQueryChangedSinceLastFocus: function() {
                    return this.query !== this.queryWhenFocused
                },
                getInputValue: function() {
                    return this.$input.val()
                },
                setInputValue: function(a) {
                    this.$input.val(a), this.clearHintIfInvalid(), this._checkLanguageDirection()
                },
                resetInputValue: function() {
                    this.setInputValue(this.query)
                },
                getHint: function() {
                    return this.$hint.val()
                },
                setHint: function(a) {
                    this.$hint.val(a)
                },
                clearHint: function() {
                    this.setHint("")
                },
                clearHintIfInvalid: function() {
                    var a, b, c, d;
                    a = this.getInputValue(), b = this.getHint(), c = a !== b && 0 === b.indexOf(a), d = "" !== a && c && !this.hasOverflow(), !d && this.clearHint()
                },
                hasFocus: function() {
                    return this.$input.is(":focus")
                },
                hasOverflow: function() {
                    var a = this.$input.width() - 2;
                    return this.$overflowHelper.text(this.getInputValue()), this.$overflowHelper.width() >= a
                },
                isCursorAtEnd: function() {
                    var a, c, d;
                    return a = this.$input.val().length, c = this.$input[0].selectionStart, b.isNumber(c) ? c === a : document.selection ? (d = document.selection.createRange(), d.moveStart("character", -a), a === d.text.length) : !0
                },
                destroy: function() {
                    this.$hint.off(".tt"), this.$input.off(".tt"), this.$overflowHelper.remove(), this.$hint = this.$input = this.$overflowHelper = a("<div>")
                }
            }), c
        }(),
        h = function() {
            "use strict";

            function c(c, e) {
                c = c || {}, c.templates = c.templates || {}, c.templates.notFound = c.templates.notFound || c.templates.empty, c.source || a.error("missing source"), c.node || a.error("missing node"), c.name && !h(c.name) && a.error("invalid dataset name: " + c.name), e.mixin(this), this.highlight = !!c.highlight, this.name = c.name || j(), this.limit = c.limit || 5, this.displayFn = d(c.display || c.displayKey), this.templates = g(c.templates, this.displayFn), this.source = c.source.__ttAdapter ? c.source.__ttAdapter() : c.source, this.async = b.isUndefined(c.async) ? this.source.length > 2 : !!c.async, this._resetLastSuggestion(), this.$el = a(c.node).addClass(this.classes.dataset).addClass(this.classes.dataset + "-" + this.name)
            }

            function d(a) {
                function c(b) {
                    return b[a]
                }
                return a = a || b.stringify, b.isFunction(a) ? a : c
            }

            function g(c, d) {
                function e(b) {
                    return a("<div>").text(d(b))
                }
                return {
                    notFound: c.notFound && b.templatify(c.notFound),
                    pending: c.pending && b.templatify(c.pending),
                    header: c.header && b.templatify(c.header),
                    footer: c.footer && b.templatify(c.footer),
                    suggestion: c.suggestion || e
                }
            }

            function h(a) {
                return /^[_a-zA-Z0-9-]+$/.test(a)
            }
            var i, j;
            return i = {
                val: "tt-selectable-display",
                obj: "tt-selectable-object"
            }, j = b.getIdGenerator(), c.extractData = function(b) {
                var c = a(b);
                return c.data(i.obj) ? {
                    val: c.data(i.val) || "",
                    obj: c.data(i.obj) || null
                } : null
            }, b.mixin(c.prototype, e, {
                _overwrite: function(a, b) {
                    b = b || [], b.length ? this._renderSuggestions(a, b) : this.async && this.templates.pending ? this._renderPending(a) : !this.async && this.templates.notFound ? this._renderNotFound(a) : this._empty(), this.trigger("rendered", this.name, b, !1)
                },
                _append: function(a, b) {
                    b = b || [], b.length && this.$lastSuggestion.length ? this._appendSuggestions(a, b) : b.length ? this._renderSuggestions(a, b) : !this.$lastSuggestion.length && this.templates.notFound && this._renderNotFound(a), this.trigger("rendered", this.name, b, !0)
                },
                _renderSuggestions: function(a, b) {
                    var c;
                    c = this._getSuggestionsFragment(a, b), this.$lastSuggestion = c.children().last(), this.$el.html(c).prepend(this._getHeader(a, b)).append(this._getFooter(a, b))
                },
                _appendSuggestions: function(a, b) {
                    var c, d;
                    c = this._getSuggestionsFragment(a, b), d = c.children().last(), this.$lastSuggestion.after(c), this.$lastSuggestion = d
                },
                _renderPending: function(a) {
                    var b = this.templates.pending;
                    this._resetLastSuggestion(), b && this.$el.html(b({
                        query: a,
                        dataset: this.name
                    }))
                },
                _renderNotFound: function(a) {
                    var b = this.templates.notFound;
                    this._resetLastSuggestion(), b && this.$el.html(b({
                        query: a,
                        dataset: this.name
                    }))
                },
                _empty: function() {
                    this.$el.empty(), this._resetLastSuggestion()
                },
                _getSuggestionsFragment: function(c, d) {
                    var e, g = this;
                    return e = document.createDocumentFragment(), b.each(d, function(b) {
                        var d, f;
                        f = g._injectQuery(c, b), d = a(g.templates.suggestion(f)).data(i.obj, b).data(i.val, g.displayFn(b)).addClass(g.classes.suggestion + " " + g.classes.selectable), e.appendChild(d[0])
                    }), this.highlight && f({
                        className: this.classes.highlight,
                        node: e,
                        pattern: c
                    }), a(e)
                },
                _getFooter: function(a, b) {
                    return this.templates.footer ? this.templates.footer({
                        query: a,
                        suggestions: b,
                        dataset: this.name
                    }) : null
                },
                _getHeader: function(a, b) {
                    return this.templates.header ? this.templates.header({
                        query: a,
                        suggestions: b,
                        dataset: this.name
                    }) : null
                },
                _resetLastSuggestion: function() {
                    this.$lastSuggestion = a()
                },
                _injectQuery: function(a, c) {
                    return b.isObject(c) ? b.mixin({
                        _query: a
                    }, c) : c
                },
                update: function(b) {
                    function c(a) {
                        g || (g = !0, a = (a || []).slice(0, e.limit), h = a.length, e._overwrite(b, a), h < e.limit && e.async && e.trigger("asyncRequested", b))
                    }

                    function d(c) {
                        c = c || [], !f && h < e.limit && (e.cancel = a.noop, h += c.length, e._append(b, c.slice(0, e.limit - h)), e.async && e.trigger("asyncReceived", b))
                    }
                    var e = this,
                        f = !1,
                        g = !1,
                        h = 0;
                    this.cancel(), this.cancel = function() {
                        f = !0, e.cancel = a.noop, e.async && e.trigger("asyncCanceled", b)
                    }, this.source(b, c, d), !g && c([])
                },
                cancel: a.noop,
                clear: function() {
                    this._empty(), this.cancel(), this.trigger("cleared")
                },
                isEmpty: function() {
                    return this.$el.is(":empty")
                },
                destroy: function() {
                    this.$el = a("<div>")
                }
            }), c
        }(),
        i = function() {
            "use strict";

            function c(c, d) {
                function e(b) {
                    var c = f.$node.find(b.node).first();
                    return b.node = c.length ? c : a("<div>").appendTo(f.$node), new h(b, d)
                }
                var f = this;
                c = c || {}, c.node || a.error("node is required"), d.mixin(this), this.$node = a(c.node), this.query = null, this.datasets = b.map(c.datasets, e)
            }
            return b.mixin(c.prototype, e, {
                _onSelectableClick: function(b) {
                    this.trigger("selectableClicked", a(b.currentTarget))
                },
                _onRendered: function(a, b, c, d) {
                    this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty()), this.trigger("datasetRendered", b, c, d)
                },
                _onCleared: function() {
                    this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty()), this.trigger("datasetCleared")
                },
                _propagate: function() {
                    this.trigger.apply(this, arguments)
                },
                _allDatasetsEmpty: function() {
                    function a(a) {
                        return a.isEmpty()
                    }
                    return b.every(this.datasets, a)
                },
                _getSelectables: function() {
                    return this.$node.find(this.selectors.selectable)
                },
                _removeCursor: function() {
                    var a = this.getActiveSelectable();
                    a && a.removeClass(this.classes.cursor)
                },
                _ensureVisible: function(a) {
                    var b, c, d, e;
                    b = a.position().top, c = b + a.outerHeight(!0), d = this.$node.scrollTop(), e = this.$node.height() + parseInt(this.$node.css("paddingTop"), 10) + parseInt(this.$node.css("paddingBottom"), 10), 0 > b ? this.$node.scrollTop(d + b) : c > e && this.$node.scrollTop(d + (c - e))
                },
                bind: function() {
                    var a, c = this;
                    return a = b.bind(this._onSelectableClick, this), this.$node.on("click.tt", this.selectors.selectable, a), b.each(this.datasets, function(a) {
                        a.onSync("asyncRequested", c._propagate, c).onSync("asyncCanceled", c._propagate, c).onSync("asyncReceived", c._propagate, c).onSync("rendered", c._onRendered, c).onSync("cleared", c._onCleared, c)
                    }), this
                },
                isOpen: function() {
                    return this.$node.hasClass(this.classes.open)
                },
                open: function() {
                    this.$node.addClass(this.classes.open)
                },
                close: function() {
                    this.$node.removeClass(this.classes.open), this._removeCursor()
                },
                setLanguageDirection: function(a) {
                    this.$node.attr("dir", a)
                },
                selectableRelativeToCursor: function(a) {
                    var b, c, d, e;
                    return c = this.getActiveSelectable(), b = this._getSelectables(), d = c ? b.index(c) : -1, e = d + a, e = (e + 1) % (b.length + 1) - 1, e = -1 > e ? b.length - 1 : e, -1 === e ? null : b.eq(e)
                },
                setCursor: function(a) {
                    this._removeCursor(), (a = a && a.first()) && (a.addClass(this.classes.cursor), this._ensureVisible(a))
                },
                getSelectableData: function(a) {
                    return a && a.length ? h.extractData(a) : null
                },
                getActiveSelectable: function() {
                    var a = this._getSelectables().filter(this.selectors.cursor).first();
                    return a.length ? a : null
                },
                getTopSelectable: function() {
                    var a = this._getSelectables().first();
                    return a.length ? a : null
                },
                update: function(a) {
                    function c(b) {
                        b.update(a)
                    }
                    var d = a !== this.query;
                    return d && (this.query = a, b.each(this.datasets, c)), d
                },
                empty: function() {
                    function a(a) {
                        a.clear()
                    }
                    b.each(this.datasets, a), this.query = null, this.$node.addClass(this.classes.empty)
                },
                destroy: function() {
                    function c(a) {
                        a.destroy()
                    }
                    this.$node.off(".tt"), this.$node = a("<div>"), b.each(this.datasets, c)
                }
            }), c
        }(),
        j = function() {
            "use strict";

            function a() {
                i.apply(this, [].slice.call(arguments, 0))
            }
            var c = i.prototype;
            return b.mixin(a.prototype, i.prototype, {
                open: function() {
                    return !this._allDatasetsEmpty() && this._show(), c.open.apply(this, [].slice.call(arguments, 0))
                },
                close: function() {
                    return this._hide(), c.close.apply(this, [].slice.call(arguments, 0))
                },
                _onRendered: function() {
                    return this._allDatasetsEmpty() ? this._hide() : this.isOpen() && this._show(), c._onRendered.apply(this, [].slice.call(arguments, 0))
                },
                _onCleared: function() {
                    return this._allDatasetsEmpty() ? this._hide() : this.isOpen() && this._show(), c._onCleared.apply(this, [].slice.call(arguments, 0))
                },
                setLanguageDirection: function(a) {
                    return this.$node.css("ltr" === a ? this.css.ltr : this.css.rtl), c.setLanguageDirection.apply(this, [].slice.call(arguments, 0))
                },
                _hide: function() {
                    this.$node.hide()
                },
                _show: function() {
                    this.$node.css("display", "block")
                }
            }), a
        }(),
        k = function() {
            "use strict";

            function c(c, e) {
                var f, g, h, i, j, k, l, m, n, o, p;
                c = c || {}, c.input || a.error("missing input"), c.menu || a.error("missing menu"), c.eventBus || a.error("missing event bus"), e.mixin(this), this.eventBus = c.eventBus, this.minLength = b.isNumber(c.minLength) ? c.minLength : 1, this.input = c.input, this.menu = c.menu, this.enabled = !0, this.active = !1, this.input.hasFocus() && this.activate(), this.dir = this.input.getLangDir(), this._hacks(), this.menu.bind().onSync("selectableClicked", this._onSelectableClicked, this).onSync("asyncRequested", this._onAsyncRequested, this).onSync("asyncCanceled", this._onAsyncCanceled, this).onSync("asyncReceived", this._onAsyncReceived, this).onSync("datasetRendered", this._onDatasetRendered, this).onSync("datasetCleared", this._onDatasetCleared, this), f = d(this, "activate", "open", "_onFocused"), g = d(this, "deactivate", "_onBlurred"), h = d(this, "isActive", "isOpen", "_onEnterKeyed"), i = d(this, "isActive", "isOpen", "_onTabKeyed"), j = d(this, "isActive", "_onEscKeyed"), k = d(this, "isActive", "open", "_onUpKeyed"), l = d(this, "isActive", "open", "_onDownKeyed"), m = d(this, "isActive", "isOpen", "_onLeftKeyed"), n = d(this, "isActive", "isOpen", "_onRightKeyed"), o = d(this, "_openIfActive", "_onQueryChanged"), p = d(this, "_openIfActive", "_onWhitespaceChanged"), this.input.bind().onSync("focused", f, this).onSync("blurred", g, this).onSync("enterKeyed", h, this).onSync("tabKeyed", i, this).onSync("escKeyed", j, this).onSync("upKeyed", k, this).onSync("downKeyed", l, this).onSync("leftKeyed", m, this).onSync("rightKeyed", n, this).onSync("queryChanged", o, this).onSync("whitespaceChanged", p, this).onSync("langDirChanged", this._onLangDirChanged, this)
            }

            function d(a) {
                var c = [].slice.call(arguments, 1);
                return function() {
                    var d = [].slice.call(arguments);
                    b.each(c, function(b) {
                        return a[b].apply(a, d)
                    })
                }
            }
            return b.mixin(c.prototype, {
                _hacks: function() {
                    var c, d;
                    c = this.input.$input || a("<div>"), d = this.menu.$node || a("<div>"), c.on("blur.tt", function(a) {
                        var e, f, g;
                        e = document.activeElement, f = d.is(e), g = d.has(e).length > 0, b.isMsie() && (f || g) && (a.preventDefault(), a.stopImmediatePropagation(), b.defer(function() {
                            c.focus()
                        }))
                    }), d.on("mousedown.tt", function(a) {
                        a.preventDefault()
                    })
                },
                _onSelectableClicked: function(a, b) {
                    this.select(b)
                },
                _onDatasetCleared: function() {
                    this._updateHint()
                },
                _onDatasetRendered: function(a, b, c, d) {
                    this._updateHint(), this.eventBus.trigger("render", c, d, b)
                },
                _onAsyncRequested: function(a, b, c) {
                    this.eventBus.trigger("asyncrequest", c, b)
                },
                _onAsyncCanceled: function(a, b, c) {
                    this.eventBus.trigger("asynccancel", c, b)
                },
                _onAsyncReceived: function(a, b, c) {
                    this.eventBus.trigger("asyncreceive", c, b)
                },
                _onFocused: function() {
                    this._minLengthMet() && this.menu.update(this.input.getQuery())
                },
                _onBlurred: function() {
                    this.input.hasQueryChangedSinceLastFocus() && this.eventBus.trigger("change", this.input.getQuery())
                },
                _onEnterKeyed: function(a, b) {
                    var c;
                    (c = this.menu.getActiveSelectable()) && this.select(c) && b.preventDefault()
                },
                _onTabKeyed: function(a, b) {
                    var c;
                    (c = this.menu.getActiveSelectable()) ? this.select(c) && b.preventDefault(): (c = this.menu.getTopSelectable()) && this.autocomplete(c) && b.preventDefault()
                },
                _onEscKeyed: function() {
                    this.close()
                },
                _onUpKeyed: function() {
                    this.moveCursor(-1)
                },
                _onDownKeyed: function() {
                    this.moveCursor(1)
                },
                _onLeftKeyed: function() {
                    "rtl" === this.dir && this.input.isCursorAtEnd() && this.autocomplete(this.menu.getTopSelectable())
                },
                _onRightKeyed: function() {
                    "ltr" === this.dir && this.input.isCursorAtEnd() && this.autocomplete(this.menu.getTopSelectable())
                },
                _onQueryChanged: function(a, b) {
                    this._minLengthMet(b) ? this.menu.update(b) : this.menu.empty()
                },
                _onWhitespaceChanged: function() {
                    this._updateHint()
                },
                _onLangDirChanged: function(a, b) {
                    this.dir !== b && (this.dir = b, this.menu.setLanguageDirection(b))
                },
                _openIfActive: function() {
                    this.isActive() && this.open()
                },
                _minLengthMet: function(a) {
                    return a = b.isString(a) ? a : this.input.getQuery() || "", a.length >= this.minLength
                },
                _updateHint: function() {
                    var a, c, d, e, f, h, i;
                    a = this.menu.getTopSelectable(), c = this.menu.getSelectableData(a), d = this.input.getInputValue(), !c || b.isBlankString(d) || this.input.hasOverflow() ? this.input.clearHint() : (e = g.normalizeQuery(d), f = b.escapeRegExChars(e), h = new RegExp("^(?:" + f + ")(.+$)", "i"), i = h.exec(c.val), i && this.input.setHint(d + i[1]))
                },
                isEnabled: function() {
                    return this.enabled
                },
                enable: function() {
                    this.enabled = !0
                },
                disable: function() {
                    this.enabled = !1
                },
                isActive: function() {
                    return this.active
                },
                activate: function() {
                    return this.isActive() ? !0 : !this.isEnabled() || this.eventBus.before("active") ? !1 : (this.active = !0, this.eventBus.trigger("active"), !0)
                },
                deactivate: function() {
                    return this.isActive() ? this.eventBus.before("idle") ? !1 : (this.active = !1, this.close(), this.eventBus.trigger("idle"), !0) : !0
                },
                isOpen: function() {
                    return this.menu.isOpen()
                },
                open: function() {
                    return this.isOpen() || this.eventBus.before("open") || (this.menu.open(), this._updateHint(), this.eventBus.trigger("open")), this.isOpen()
                },
                close: function() {
                    return this.isOpen() && !this.eventBus.before("close") && (this.menu.close(), this.input.clearHint(), this.input.resetInputValue(), this.eventBus.trigger("close")), !this.isOpen()
                },
                setVal: function(a) {
                    this.input.setQuery(b.toStr(a))
                },
                getVal: function() {
                    return this.input.getQuery()
                },
                select: function(a) {
                    var b = this.menu.getSelectableData(a);
                    return b && !this.eventBus.before("select", b.obj) ? (this.input.setQuery(b.val, !0), this.eventBus.trigger("select", b.obj), this.close(), !0) : !1
                },
                autocomplete: function(a) {
                    var b, c, d;
                    return b = this.input.getQuery(), c = this.menu.getSelectableData(a), d = c && b !== c.val, d && !this.eventBus.before("autocomplete", c.obj) ? (this.input.setQuery(c.val), this.eventBus.trigger("autocomplete", c.obj), !0) : !1
                },
                moveCursor: function(a) {
                    var b, c, d, e, f;
                    return b = this.input.getQuery(), c = this.menu.selectableRelativeToCursor(a), d = this.menu.getSelectableData(c), e = d ? d.obj : null, f = this._minLengthMet() && this.menu.update(b), f || this.eventBus.before("cursorchange", e) ? !1 : (this.menu.setCursor(c), d ? this.input.setInputValue(d.val) : (this.input.resetInputValue(), this._updateHint()), this.eventBus.trigger("cursorchange", e), !0)
                },
                destroy: function() {
                    this.input.destroy(), this.menu.destroy()
                }
            }), c
        }();
    ! function() {
        "use strict";

        function e(b, c) {
            b.each(function() {
                var b, d = a(this);
                (b = d.data(p.typeahead)) && c(b, d)
            })
        }

        function f(a, b) {
            return a.clone().addClass(b.classes.hint).removeData().css(b.css.hint).css(l(a)).prop("readonly", !0).removeAttr("id name placeholder required").attr({
                autocomplete: "off",
                spellcheck: "false",
                tabindex: -1
            })
        }

        function h(a, b) {
            a.data(p.attrs, {
                dir: a.attr("dir"),
                autocomplete: a.attr("autocomplete"),
                spellcheck: a.attr("spellcheck"),
                style: a.attr("style")
            }), a.addClass(b.classes.input).attr({
                autocomplete: "off",
                spellcheck: !1
            });
            try {
                !a.attr("dir") && a.attr("dir", "auto")
            } catch (c) {}
            return a
        }

        function l(a) {
            return {
                backgroundAttachment: a.css("background-attachment"),
                backgroundClip: a.css("background-clip"),
                backgroundColor: a.css("background-color"),
                backgroundImage: a.css("background-image"),
                backgroundOrigin: a.css("background-origin"),
                backgroundPosition: a.css("background-position"),
                backgroundRepeat: a.css("background-repeat"),
                backgroundSize: a.css("background-size")
            }
        }

        function m(a) {
            var c, d;
            c = a.data(p.www), d = a.parent().filter(c.selectors.wrapper), b.each(a.data(p.attrs), function(c, d) {
                b.isUndefined(c) ? a.removeAttr(d) : a.attr(d, c)
            }), a.removeData(p.typeahead).removeData(p.www).removeData(p.attr).removeClass(c.classes.input), d.length && (a.detach().insertAfter(d), d.remove())
        }

        function n(c) {
            var d, e;
            return d = b.isJQuery(c) || b.isElement(c), e = d ? a(c).first() : [], e.length ? e : null
        }
        var o, p, q;
        o = a.fn.typeahead, p = {
            www: "tt-www",
            attrs: "tt-attrs",
            typeahead: "tt-typeahead"
        }, q = {
            initialize: function(e, l) {
                function m() {
                    var c, m, q, r, s, t, u, v, w, x, y;
                    b.each(l, function(a) {
                        a.highlight = !!e.highlight
                    }), c = a(this), m = a(o.html.wrapper), q = n(e.hint), r = n(e.menu), s = e.hint !== !1 && !q, t = e.menu !== !1 && !r, s && (q = f(c, o)), t && (r = a(o.html.menu).css(o.css.menu)), q && q.val(""), c = h(c, o), (s || t) && (m.css(o.css.wrapper), c.css(s ? o.css.input : o.css.inputWithNoHint), c.wrap(m).parent().prepend(s ? q : null).append(t ? r : null)), y = t ? j : i, u = new d({
                        el: c
                    }), v = new g({
                        hint: q,
                        input: c
                    }, o), w = new y({
                        node: r,
                        datasets: l
                    }, o), x = new k({
                        input: v,
                        menu: w,
                        eventBus: u,
                        minLength: e.minLength
                    }, o), c.data(p.www, o), c.data(p.typeahead, x)
                }
                var o;
                return l = b.isArray(l) ? l : [].slice.call(arguments, 1), e = e || {}, o = c(e.classNames), this.each(m)
            },
            isEnabled: function() {
                var a;
                return e(this.first(), function(b) {
                    a = b.isEnabled()
                }), a
            },
            enable: function() {
                return e(this, function(a) {
                    a.enable()
                }), this
            },
            disable: function() {
                return e(this, function(a) {
                    a.disable()
                }), this
            },
            isActive: function() {
                var a;
                return e(this.first(), function(b) {
                    a = b.isActive()
                }), a
            },
            activate: function() {
                return e(this, function(a) {
                    a.activate()
                }), this
            },
            deactivate: function() {
                return e(this, function(a) {
                    a.deactivate()
                }), this
            },
            isOpen: function() {
                var a;
                return e(this.first(), function(b) {
                    a = b.isOpen()
                }), a
            },
            open: function() {
                return e(this, function(a) {
                    a.open()
                }), this
            },
            close: function() {
                return e(this, function(a) {
                    a.close()
                }), this
            },
            select: function(b) {
                var c = !1,
                    d = a(b);
                return e(this.first(), function(a) {
                    c = a.select(d)
                }), c
            },
            autocomplete: function(b) {
                var c = !1,
                    d = a(b);
                return e(this.first(), function(a) {
                    c = a.autocomplete(d)
                }), c
            },
            moveCursor: function(a) {
                var b = !1;
                return e(this.first(), function(c) {
                    b = c.moveCursor(a)
                }), b
            },
            val: function(a) {
                var b;
                return arguments.length ? (e(this, function(b) {
                    b.setVal(a)
                }), this) : (e(this.first(), function(a) {
                    b = a.getVal()
                }), b)
            },
            destroy: function() {
                return e(this, function(a, b) {
                    m(b), a.destroy()
                }), this
            }
        }, a.fn.typeahead = function(a) {
            return q[a] ? q[a].apply(this, [].slice.call(arguments, 1)) : q.initialize.apply(this, arguments)
        }, a.fn.typeahead.noConflict = function() {
            return a.fn.typeahead = o, this
        }
    }()
});; /* Chosen v1.1.0 | (c) 2011-2013 by Harvest | MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md */
! function() {
    var a, AbstractChosen, Chosen, SelectParser, b, c = {}.hasOwnProperty,
        d = function(a, b) {
            function d() {
                this.constructor = a
            }
            for (var e in b) c.call(b, e) && (a[e] = b[e]);
            return d.prototype = b.prototype, a.prototype = new d, a.__super__ = b.prototype, a
        };
    SelectParser = function() {
        function SelectParser() {
            this.options_index = 0, this.parsed = []
        }
        return SelectParser.prototype.add_node = function(a) {
            return "OPTGROUP" === a.nodeName.toUpperCase() ? this.add_group(a) : this.add_option(a)
        }, SelectParser.prototype.add_group = function(a) {
            var b, c, d, e, f, g;
            for (b = this.parsed.length, this.parsed.push({
                    array_index: b,
                    group: !0,
                    label: this.escapeExpression(a.label),
                    children: 0,
                    disabled: a.disabled
                }), f = a.childNodes, g = [], d = 0, e = f.length; e > d; d++) c = f[d], g.push(this.add_option(c, b, a.disabled));
            return g
        }, SelectParser.prototype.add_option = function(a, b, c) {
            return "OPTION" === a.nodeName.toUpperCase() ? ("" !== a.text ? (null != b && (this.parsed[b].children += 1), this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                value: a.value,
                text: a.text,
                html: a.innerHTML,
                selected: a.selected,
                disabled: c === !0 ? c : a.disabled,
                group_array_index: b,
                classes: a.className,
                style: a.style.cssText
            })) : this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                empty: !0
            }), this.options_index += 1) : void 0
        }, SelectParser.prototype.escapeExpression = function(a) {
            var b, c;
            return null == a || a === !1 ? "" : /[\&\<\>\"\'\`]/.test(a) ? (b = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            }, c = /&(?!\w+;)|[\<\>\"\'\`]/g, a.replace(c, function(a) {
                return b[a] || "&amp;"
            })) : a
        }, SelectParser
    }(), SelectParser.select_to_array = function(a) {
        var b, c, d, e, f;
        for (c = new SelectParser, f = a.childNodes, d = 0, e = f.length; e > d; d++) b = f[d], c.add_node(b);
        return c.parsed
    }, AbstractChosen = function() {
        function AbstractChosen(a, b) {
            this.form_field = a, this.options = null != b ? b : {}, AbstractChosen.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers())
        }
        return AbstractChosen.prototype.set_default_values = function() {
            var a = this;
            return this.click_test_action = function(b) {
                return a.test_active_click(b)
            }, this.activate_action = function(b) {
                return a.activate_field(b)
            }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text ? this.options.allow_single_deselect : !1, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null != this.options.enable_split_word_search ? this.options.enable_split_word_search : !0, this.group_search = null != this.options.group_search ? this.options.group_search : !0, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null != this.options.single_backstroke_delete ? this.options.single_backstroke_delete : !0, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null != this.options.display_selected_options ? this.options.display_selected_options : !0, this.display_disabled_options = null != this.options.display_disabled_options ? this.options.display_disabled_options : !0
        }, AbstractChosen.prototype.set_default_text = function() {
            return this.default_text = this.form_field.getAttribute("data-placeholder") ? this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.options.placeholder_text_multiple || this.options.placeholder_text || AbstractChosen.default_multiple_text : this.options.placeholder_text_single || this.options.placeholder_text || AbstractChosen.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || AbstractChosen.default_no_result_text
        }, AbstractChosen.prototype.mouse_enter = function() {
            return this.mouse_on_container = !0
        }, AbstractChosen.prototype.mouse_leave = function() {
            return this.mouse_on_container = !1
        }, AbstractChosen.prototype.input_focus = function() {
            var a = this;
            if (this.is_multiple) {
                if (!this.active_field) return setTimeout(function() {
                    return a.container_mousedown()
                }, 50)
            } else if (!this.active_field) return this.activate_field()
        }, AbstractChosen.prototype.input_blur = function() {
            var a = this;
            return this.mouse_on_container ? void 0 : (this.active_field = !1, setTimeout(function() {
                return a.blur_test()
            }, 100))
        }, AbstractChosen.prototype.results_option_build = function(a) {
            var b, c, d, e, f;
            for (b = "", f = this.results_data, d = 0, e = f.length; e > d; d++) c = f[d], b += c.group ? this.result_add_group(c) : this.result_add_option(c), (null != a ? a.first : void 0) && (c.selected && this.is_multiple ? this.choice_build(c) : c.selected && !this.is_multiple && this.single_set_selected_text(c.text));
            return b
        }, AbstractChosen.prototype.result_add_option = function(a) {
            var b, c;
            return a.search_match ? this.include_option_in_results(a) ? (b = [], a.disabled || a.selected && this.is_multiple || b.push("active-result"), !a.disabled || a.selected && this.is_multiple || b.push("disabled-result"), a.selected && b.push("result-selected"), null != a.group_array_index && b.push("group-option"), "" !== a.classes && b.push(a.classes), c = document.createElement("li"), c.className = b.join(" "), c.style.cssText = a.style, c.setAttribute("data-option-array-index", a.array_index), c.innerHTML = a.search_text, this.outerHTML(c)) : "" : ""
        }, AbstractChosen.prototype.result_add_group = function(a) {
            var b;
            return a.search_match || a.group_match ? a.active_options > 0 ? (b = document.createElement("li"), b.className = "group-result", b.innerHTML = a.search_text, this.outerHTML(b)) : "" : ""
        }, AbstractChosen.prototype.results_update_field = function() {
            return this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing ? this.winnow_results() : void 0
        }, AbstractChosen.prototype.reset_single_select_options = function() {
            var a, b, c, d, e;
            for (d = this.results_data, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a.selected ? e.push(a.selected = !1) : e.push(void 0);
            return e
        }, AbstractChosen.prototype.results_toggle = function() {
            return this.results_showing ? this.results_hide() : this.results_show()
        }, AbstractChosen.prototype.results_search = function() {
            return this.results_showing ? this.winnow_results() : this.results_show()
        }, AbstractChosen.prototype.winnow_results = function() {
            var a, b, c, d, e, f, g, h, i, j, k, l, m;
            for (this.no_results_clear(), e = 0, g = this.get_search_text(), a = g.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), d = this.search_contains ? "" : "^", c = new RegExp(d + a, "i"), j = new RegExp(a, "i"), m = this.results_data, k = 0, l = m.length; l > k; k++) b = m[k], b.search_match = !1, f = null, this.include_option_in_results(b) && (b.group && (b.group_match = !1, b.active_options = 0), null != b.group_array_index && this.results_data[b.group_array_index] && (f = this.results_data[b.group_array_index], 0 === f.active_options && f.search_match && (e += 1), f.active_options += 1), (!b.group || this.group_search) && (b.search_text = b.group ? b.label : b.html, b.search_match = this.search_string_match(b.search_text, c), b.search_match && !b.group && (e += 1), b.search_match ? (g.length && (h = b.search_text.search(j), i = b.search_text.substr(0, h + g.length) + "</em>" + b.search_text.substr(h + g.length), b.search_text = i.substr(0, h) + "<em>" + i.substr(h)), null != f && (f.group_match = !0)) : null != b.group_array_index && this.results_data[b.group_array_index].search_match && (b.search_match = !0)));
            return this.result_clear_highlight(), 1 > e && g.length ? (this.update_results_content(""), this.no_results(g)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight())
        }, AbstractChosen.prototype.search_string_match = function(a, b) {
            var c, d, e, f;
            if (b.test(a)) return !0;
            if (this.enable_split_word_search && (a.indexOf(" ") >= 0 || 0 === a.indexOf("[")) && (d = a.replace(/\[|\]/g, "").split(" "), d.length))
                for (e = 0, f = d.length; f > e; e++)
                    if (c = d[e], b.test(c)) return !0
        }, AbstractChosen.prototype.choices_count = function() {
            var a, b, c, d;
            if (null != this.selected_option_count) return this.selected_option_count;
            for (this.selected_option_count = 0, d = this.form_field.options, b = 0, c = d.length; c > b; b++) a = d[b], a.selected && (this.selected_option_count += 1);
            return this.selected_option_count
        }, AbstractChosen.prototype.choices_click = function(a) {
            return a.preventDefault(), this.results_showing || this.is_disabled ? void 0 : this.results_show()
        }, AbstractChosen.prototype.keyup_checker = function(a) {
            var b, c;
            switch (b = null != (c = a.which) ? c : a.keyCode, this.search_field_scale(), b) {
                case 8:
                    if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) return this.keydown_backstroke();
                    if (!this.pending_backstroke) return this.result_clear_highlight(), this.results_search();
                    break;
                case 13:
                    if (a.preventDefault(), this.results_showing) return this.result_select(a);
                    break;
                case 27:
                    return this.results_showing && this.results_hide(), !0;
                case 9:
                case 38:
                case 40:
                case 16:
                case 91:
                case 17:
                    break;
                default:
                    return this.results_search()
            }
        }, AbstractChosen.prototype.clipboard_event_checker = function() {
            var a = this;
            return setTimeout(function() {
                return a.results_search()
            }, 50)
        }, AbstractChosen.prototype.container_width = function() {
            return null != this.options.width ? this.options.width : "" + this.form_field.offsetWidth + "px"
        }, AbstractChosen.prototype.include_option_in_results = function(a) {
            var school = document.getElementById("school_select");
            if (this.container[0].getAttribute("id")=="program_chosen") {
	            if(a.text.slice(0,2) != school.value.substring(0,2)) {
	              return false;
	            }
	        }
            return this.is_multiple && !this.display_selected_options && a.selected ? !1 : !this.display_disabled_options && a.disabled ? !1 : a.empty ? !1 : !0
        }, AbstractChosen.prototype.search_results_touchstart = function(a) {
            return this.touch_started = !0, this.search_results_mouseover(a)
        }, AbstractChosen.prototype.search_results_touchmove = function(a) {
            return this.touch_started = !1, this.search_results_mouseout(a)
        }, AbstractChosen.prototype.search_results_touchend = function(a) {
            return this.touch_started ? this.search_results_mouseup(a) : void 0
        }, AbstractChosen.prototype.outerHTML = function(a) {
            var b;
            return a.outerHTML ? a.outerHTML : (b = document.createElement("div"), b.appendChild(a), b.innerHTML)
        }, AbstractChosen.browser_is_supported = function() {
            return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : /iP(od|hone)/i.test(window.navigator.userAgent) ? !1 : /Android/i.test(window.navigator.userAgent) && /Mobile/i.test(window.navigator.userAgent) ? !1 : !0
        }, AbstractChosen.default_multiple_text = "Select Some Options", AbstractChosen.default_single_text = "Select an Option", AbstractChosen.default_no_result_text = "No results match", AbstractChosen
    }(), a = jQuery, a.fn.extend({
        chosen: function(b) {
            return AbstractChosen.browser_is_supported() ? this.each(function() {
                var c, d;
                c = a(this), d = c.data("chosen"), "destroy" === b && d ? d.destroy() : d || c.data("chosen", new Chosen(this, b))
            }) : this
        }
    }), Chosen = function(c) {
        function Chosen() {
            return b = Chosen.__super__.constructor.apply(this, arguments)
        }
        return d(Chosen, c), Chosen.prototype.setup = function() {
            return this.form_field_jq = a(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chosen-rtl")
        }, Chosen.prototype.set_up_html = function() {
            var b, c;
            return b = ["chosen-container"], b.push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && b.push(this.form_field.className), this.is_rtl && b.push("chosen-rtl"), c = {
                "class": b.join(" "),
                style: "width: " + this.container_width() + ";",
                title: this.form_field.title
            }, this.form_field.id.length && (c.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = a("<div />", c), this.is_multiple ? this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>') : this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior(), this.form_field_jq.trigger("chosen:ready", {
                chosen: this
            })
        }, Chosen.prototype.register_observers = function() {
            var a = this;
            return this.container.bind("mousedown.chosen", function(b) {
                a.container_mousedown(b)
            }), this.container.bind("mouseup.chosen", function(b) {
                a.container_mouseup(b)
            }), this.container.bind("mouseenter.chosen", function(b) {
                a.mouse_enter(b)
            }), this.container.bind("mouseleave.chosen", function(b) {
                a.mouse_leave(b)
            }), this.search_results.bind("mouseup.chosen", function(b) {
                a.search_results_mouseup(b)
            }), this.search_results.bind("mouseover.chosen", function(b) {
                a.search_results_mouseover(b)
            }), this.search_results.bind("mouseout.chosen", function(b) {
                a.search_results_mouseout(b)
            }), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function(b) {
                a.search_results_mousewheel(b)
            }), this.search_results.bind("touchstart.chosen", function(b) {
                a.search_results_touchstart(b)
            }), this.search_results.bind("touchmove.chosen", function(b) {
                a.search_results_touchmove(b)
            }), this.search_results.bind("touchend.chosen", function(b) {
                a.search_results_touchend(b)
            }), this.form_field_jq.bind("chosen:updated.chosen", function(b) {
                a.results_update_field(b)
            }), this.form_field_jq.bind("chosen:activate.chosen", function(b) {
                a.activate_field(b)
            }), this.form_field_jq.bind("chosen:open.chosen", function(b) {
                a.container_mousedown(b)
            }), this.form_field_jq.bind("chosen:close.chosen", function(b) {
                a.input_blur(b)
            }), this.search_field.bind("blur.chosen", function(b) {
                a.input_blur(b)
            }), this.search_field.bind("keyup.chosen", function(b) {
                a.keyup_checker(b)
            }), this.search_field.bind("keydown.chosen", function(b) {
                a.keydown_checker(b)
            }), this.search_field.bind("focus.chosen", function(b) {
                a.input_focus(b)
            }), this.search_field.bind("cut.chosen", function(b) {
                a.clipboard_event_checker(b)
            }), this.search_field.bind("paste.chosen", function(b) {
                a.clipboard_event_checker(b)
            }), this.is_multiple ? this.search_choices.bind("click.chosen", function(b) {
                a.choices_click(b)
            }) : this.container.bind("click.chosen", function(a) {
                a.preventDefault()
            })
        }, Chosen.prototype.destroy = function() {
            return a(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
        }, Chosen.prototype.search_field_disabled = function() {
            return this.is_disabled = this.form_field_jq[0].disabled, this.is_disabled ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action))
        }, Chosen.prototype.container_mousedown = function(b) {
            return this.is_disabled || (b && "mousedown" === b.type && !this.results_showing && b.preventDefault(), null != b && a(b.target).hasClass("search-choice-close")) ? void 0 : (this.active_field ? this.is_multiple || !b || a(b.target)[0] !== this.selected_item[0] && !a(b.target).parents("a.chosen-single").length || (b.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), a(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field())
        }, Chosen.prototype.container_mouseup = function(a) {
            return "ABBR" !== a.target.nodeName || this.is_disabled ? void 0 : this.results_reset(a)
        }, Chosen.prototype.search_results_mousewheel = function(a) {
            var b;
            return a.originalEvent && (b = -a.originalEvent.wheelDelta || a.originalEvent.detail), null != b ? (a.preventDefault(), "DOMMouseScroll" === a.type && (b = 40 * b), this.search_results.scrollTop(b + this.search_results.scrollTop())) : void 0
        }, Chosen.prototype.blur_test = function() {
            return !this.active_field && this.container.hasClass("chosen-container-active") ? this.close_field() : void 0
        }, Chosen.prototype.close_field = function() {
            return a(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale()
        }, Chosen.prototype.activate_field = function() {
            return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
        }, Chosen.prototype.test_active_click = function(b) {
            var c;
            return c = a(b.target).closest(".chosen-container"), c.length && this.container[0] === c[0] ? this.active_field = !0 : this.close_field()
        }, Chosen.prototype.results_build = function() {
            return this.parsing = !0, this.selected_option_count = null, this.results_data = SelectParser.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({
                first: !0
            })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1
        }, Chosen.prototype.result_do_highlight = function(a) {
            var b, c, d, e, f;
            if (a.length) {
                if (this.result_clear_highlight(), this.result_highlight = a, this.result_highlight.addClass("highlighted"), d = parseInt(this.search_results.css("maxHeight"), 10), f = this.search_results.scrollTop(), e = d + f, c = this.result_highlight.position().top + this.search_results.scrollTop(), b = c + this.result_highlight.outerHeight(), b >= e) return this.search_results.scrollTop(b - d > 0 ? b - d : 0);
                if (f > c) return this.search_results.scrollTop(c)
            }
        }, Chosen.prototype.result_clear_highlight = function() {
            return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
        }, Chosen.prototype.results_show = function() {
            return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                chosen: this
            }), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {
                chosen: this
            }))
        }, Chosen.prototype.update_results_content = function(a) {
            return this.search_results.html(a)
        }, Chosen.prototype.results_hide = function() {
            return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {
                chosen: this
            })), this.results_showing = !1
        }, Chosen.prototype.set_tab_index = function() {
            var a;
            return this.form_field.tabIndex ? (a = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = a) : void 0
        }, Chosen.prototype.set_label_behavior = function() {
            var b = this;
            return this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = a("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0 ? this.form_field_label.bind("click.chosen", function(a) {
                return b.is_multiple ? b.container_mousedown(a) : b.activate_field()
            }) : void 0
        }, Chosen.prototype.show_search_field_default = function() {
            return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
        }, Chosen.prototype.search_results_mouseup = function(b) {
            var c;
            return c = a(b.target).hasClass("active-result") ? a(b.target) : a(b.target).parents(".active-result").first(), c.length ? (this.result_highlight = c, this.result_select(b), this.search_field.focus()) : void 0
        }, Chosen.prototype.search_results_mouseover = function(b) {
            var c;
            return c = a(b.target).hasClass("active-result") ? a(b.target) : a(b.target).parents(".active-result").first(), c ? this.result_do_highlight(c) : void 0
        }, Chosen.prototype.search_results_mouseout = function(b) {
            return a(b.target).hasClass("active-result") ? this.result_clear_highlight() : void 0
        }, Chosen.prototype.choice_build = function(b) {
            var c, d, e = this;
            return c = a("<li />", {
                "class": "search-choice"
            }).html("<span>" + b.html + "</span>"), b.disabled ? c.addClass("search-choice-disabled") : (d = a("<a />", {
                "class": "search-choice-close",
                "data-option-array-index": b.array_index
            }), d.bind("click.chosen", function(a) {
                return e.choice_destroy_link_click(a)
            }), c.append(d)), this.search_container.before(c)
        }, Chosen.prototype.choice_destroy_link_click = function(b) {
            return b.preventDefault(), b.stopPropagation(), this.is_disabled ? void 0 : this.choice_destroy(a(b.target))
        }, Chosen.prototype.choice_destroy = function(a) {
            return this.result_deselect(a[0].getAttribute("data-option-array-index")) ? (this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(), a.parents("li").first().remove(), this.search_field_scale()) : void 0
        }, Chosen.prototype.results_reset = function() {
            return this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field ? this.results_hide() : void 0
        }, Chosen.prototype.results_reset_cleanup = function() {
            return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
        }, Chosen.prototype.result_select = function(a) {
            var b, c;
            return this.result_highlight ? (b = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                chosen: this
            }), !1) : (this.is_multiple ? b.removeClass("active-result") : this.reset_single_select_options(), c = this.results_data[b[0].getAttribute("data-option-array-index")], c.selected = !0, this.form_field.options[c.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(c) : this.single_set_selected_text(c.text), (a.metaKey || a.ctrlKey) && this.is_multiple || this.results_hide(), this.search_field.val(""), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", {
                selected: this.form_field.options[c.options_index].value
            }), this.current_selectedIndex = this.form_field.selectedIndex, this.search_field_scale())) : void 0
        }, Chosen.prototype.single_set_selected_text = function(a) {
            return null == a && (a = this.default_text), a === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").text(a)
        }, Chosen.prototype.result_deselect = function(a) {
            var b;
            return b = this.results_data[a], this.form_field.options[b.options_index].disabled ? !1 : (b.selected = !1, this.form_field.options[b.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", {
                deselected: this.form_field.options[b.options_index].value
            }), this.search_field_scale(), !0)
        }, Chosen.prototype.single_deselect_control_build = function() {
            return this.allow_single_deselect ? (this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")) : void 0
        }, Chosen.prototype.get_search_text = function() {
            return this.search_field.val() === this.default_text ? "" : a("<div/>").text(a.trim(this.search_field.val())).html()
        }, Chosen.prototype.winnow_results_set_highlight = function() {
            var a, b;
            return b = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), a = b.length ? b.first() : this.search_results.find(".active-result").first(), null != a ? this.result_do_highlight(a) : void 0
        }, Chosen.prototype.no_results = function(b) {
            var c;
            return c = a('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'), c.find("span").first().html(b), this.search_results.append(c), this.form_field_jq.trigger("chosen:no_results", {
                chosen: this
            })
        }, Chosen.prototype.no_results_clear = function() {
            return this.search_results.find(".no-results").remove()
        }, Chosen.prototype.keydown_arrow = function() {
            var a;
            return this.results_showing && this.result_highlight ? (a = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(a) : void 0 : this.results_show()
        }, Chosen.prototype.keyup_arrow = function() {
            var a;
            return this.results_showing || this.is_multiple ? this.result_highlight ? (a = this.result_highlight.prevAll("li.active-result"), a.length ? this.result_do_highlight(a.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight())) : void 0 : this.results_show()
        }, Chosen.prototype.keydown_backstroke = function() {
            var a;
            return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (a = this.search_container.siblings("li.search-choice").last(), a.length && !a.hasClass("search-choice-disabled") ? (this.pending_backstroke = a, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0)
        }, Chosen.prototype.clear_backstroke = function() {
            return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
        }, Chosen.prototype.keydown_checker = function(a) {
            var b, c;
            switch (b = null != (c = a.which) ? c : a.keyCode, this.search_field_scale(), 8 !== b && this.pending_backstroke && this.clear_backstroke(), b) {
                case 8:
                    this.backstroke_length = this.search_field.val().length;
                    break;
                case 9:
                    this.results_showing && !this.is_multiple && this.result_select(a), this.mouse_on_container = !1;
                    break;
                case 13:
                    a.preventDefault();
                    break;
                case 38:
                    a.preventDefault(), this.keyup_arrow();
                    break;
                case 40:
                    a.preventDefault(), this.keydown_arrow()
            }
        }, Chosen.prototype.search_field_scale = function() {
            var b, c, d, e, f, g, h, i, j;
            if (this.is_multiple) {
                for (d = 0, h = 0, f = "position:absolute; left: -1000px; top: -1000px; display:none;", g = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"], i = 0, j = g.length; j > i; i++) e = g[i], f += e + ":" + this.search_field.css(e) + ";";
                return b = a("<div />", {
                    style: f
                }), b.text(this.search_field.val()), a("body").append(b), h = b.width() + 25, b.remove(), c = this.container.outerWidth(), h > c - 10 && (h = c - 10), this.search_field.css({
                    width: h + "px"
                })
            }
        }, Chosen
    }(AbstractChosen)
}.call(this);;
/*

$.Link (part of noUiSlider) - WTFPL */
(function(c) {
    function m(a, c, d) {
        if ((a[c] || a[d]) && a[c] === a[d]) throw Error("(Link) '" + c + "' can't match '" + d + "'.'");
    }

    function r(a) {
        void 0 === a && (a = {});
        if ("object" !== typeof a) throw Error("(Format) 'format' option must be an object.");
        var h = {};
        c(u).each(function(c, n) {
            if (void 0 === a[n]) h[n] = A[c];
            else if (typeof a[n] === typeof A[c]) {
                if ("decimals" === n && (0 > a[n] || 7 < a[n])) throw Error("(Format) 'format.decimals' option must be between 0 and 7.");
                h[n] = a[n]
            } else throw Error("(Format) 'format." + n + "' must be a " + typeof A[c] +
                ".");
        });
        m(h, "mark", "thousand");
        m(h, "prefix", "negative");
        m(h, "prefix", "negativeBefore");
        this.r = h
    }

    function k(a, h) {
        "object" !== typeof a && c.error("(Link) Initialize with an object.");
        return new k.prototype.p(a.target || function() {}, a.method, a.format || {}, h)
    }
    var u = "decimals mark thousand prefix postfix encoder decoder negative negativeBefore to from".split(" "),
        A = [2, ".", "", "", "", function(a) {
            return a
        }, function(a) {
            return a
        }, "-", "", function(a) {
            return a
        }, function(a) {
            return a
        }];
    r.prototype.a = function(a) {
        return this.r[a]
    };
    r.prototype.L = function(a) {
        function c(a) {
            return a.split("").reverse().join("")
        }
        a = this.a("encoder")(a);
        var d = this.a("decimals"),
            n = "",
            k = "",
            m = "",
            r = "";
        0 === parseFloat(a.toFixed(d)) && (a = "0");
        0 > a && (n = this.a("negative"), k = this.a("negativeBefore"));
        a = Math.abs(a).toFixed(d).toString();
        a = a.split(".");
        this.a("thousand") ? (m = c(a[0]).match(/.{1,3}/g), m = c(m.join(c(this.a("thousand"))))) : m = a[0];
        this.a("mark") && 1 < a.length && (r = this.a("mark") + a[1]);
        return this.a("to")(k + this.a("prefix") + n + m + r + this.a("postfix"))
    };
    r.prototype.w =
        function(a) {
            function c(a) {
                return a.replace(/[\-\/\\\^$*+?.()|\[\]{}]/g, "\\$&")
            }
            var d;
            if (null === a || void 0 === a) return !1;
            a = this.a("from")(a);
            a = a.toString();
            d = a.replace(RegExp("^" + c(this.a("negativeBefore"))), "");
            a !== d ? (a = d, d = "-") : d = "";
            a = a.replace(RegExp("^" + c(this.a("prefix"))), "");
            this.a("negative") && (d = "", a = a.replace(RegExp("^" + c(this.a("negative"))), "-"));
            a = a.replace(RegExp(c(this.a("postfix")) + "$"), "").replace(RegExp(c(this.a("thousand")), "g"), "").replace(this.a("mark"), ".");
            a = this.a("decoder")(parseFloat(d +
                a));
            return isNaN(a) ? !1 : a
        };
    k.prototype.K = function(a, h) {
        this.method = h || "html";
        this.j = c(a.replace("-tooltip-", "") || "<div/>")[0]
    };
    k.prototype.H = function(a) {
        this.method = "val";
        this.j = document.createElement("input");
        this.j.name = a;
        this.j.type = "hidden"
    };
    k.prototype.G = function(a) {
        function h(a, c) {
            return [c ? null : a, c ? a : null]
        }
        var d = this;
        this.method = "val";
        this.target = a.on("change", function(a) {
            d.B.val(h(c(a.target).val(), d.t), {
                link: d,
                set: !0
            })
        })
    };
    k.prototype.p = function(a, h, d, k) {
        this.g = d;
        this.update = !k;
        if ("string" ===
            typeof a && 0 === a.indexOf("-tooltip-")) this.K(a, h);
        else if ("string" === typeof a && 0 !== a.indexOf("-")) this.H(a);
        else if ("function" === typeof a) this.target = !1, this.method = a;
        else {
            if (a instanceof c || c.zepto && c.zepto.isZ(a)) {
                if (!h) {
                    if (a.is("input, select, textarea")) {
                        this.G(a);
                        return
                    }
                    h = "html"
                }
                if ("function" === typeof h || "string" === typeof h && a[h]) {
                    this.method = h;
                    this.target = a;
                    return
                }
            }
            throw new RangeError("(Link) Invalid Link.");
        }
    };
    k.prototype.write = function(a, c, d, k) {
        if (!this.update || !1 !== k)
            if (this.u = a, this.F = a =
                this.format(a), "function" === typeof this.method) this.method.call(this.target[0] || d[0], a, c, d);
            else this.target[this.method](a, c, d)
    };
    k.prototype.q = function(a) {
        this.g = new r(c.extend({}, a, this.g instanceof r ? this.g.r : this.g))
    };
    k.prototype.J = function(a) {
        this.B = a
    };
    k.prototype.I = function(a) {
        this.t = a
    };
    k.prototype.format = function(a) {
        return this.g.L(a)
    };
    k.prototype.A = function(a) {
        return this.g.w(a)
    };
    k.prototype.p.prototype = k.prototype;
    c.Link = k
})(window.jQuery || window.Zepto);
/*

$.fn.noUiSlider - WTFPL - refreshless.com/nouislider/ */
(function(c) {
    function m(e) {
        return "number" === typeof e && !isNaN(e) && isFinite(e)
    }

    function r(e) {
        return c.isArray(e) ? e : [e]
    }

    function k(e, b) {
        e.addClass(b);
        setTimeout(function() {
            e.removeClass(b)
        }, 300)
    }

    function u(e, b) {
        return 100 * b / (e[1] - e[0])
    }

    function A(e, b) {
        if (b >= e.d.slice(-1)[0]) return 100;
        for (var a = 1, c, f, d; b >= e.d[a];) a++;
        c = e.d[a - 1];
        f = e.d[a];
        d = e.c[a - 1];
        c = [c, f];
        return d + u(c, 0 > c[0] ? b + Math.abs(c[0]) : b - c[0]) / (100 / (e.c[a] - d))
    }

    function a(e, b) {
        if (100 <= b) return e.d.slice(-1)[0];
        for (var a = 1, c, f, d; b >= e.c[a];) a++;
        c =
            e.d[a - 1];
        f = e.d[a];
        d = e.c[a - 1];
        c = [c, f];
        return 100 / (e.c[a] - d) * (b - d) * (c[1] - c[0]) / 100 + c[0]
    }

    function h(a, b) {
        for (var c = 1, g;
            (a.dir ? 100 - b : b) >= a.c[c];) c++;
        if (a.m) return g = a.c[c - 1], c = a.c[c], b - g > (c - g) / 2 ? c : g;
        a.h[c - 1] ? (g = a.h[c - 1], c = a.c[c - 1] + Math.round((b - a.c[c - 1]) / g) * g) : c = b;
        return c
    }

    function d(a, b) {
        if (!m(b)) throw Error("noUiSlider: 'step' is not numeric.");
        a.h[0] = b
    }

    function n(a, b) {
        if ("object" !== typeof b || c.isArray(b)) throw Error("noUiSlider: 'range' is not an object.");
        if (void 0 === b.min || void 0 === b.max) throw Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
        c.each(b, function(b, g) {
            var d;
            "number" === typeof g && (g = [g]);
            if (!c.isArray(g)) throw Error("noUiSlider: 'range' contains invalid value.");
            d = "min" === b ? 0 : "max" === b ? 100 : parseFloat(b);
            if (!m(d) || !m(g[0])) throw Error("noUiSlider: 'range' value isn't numeric.");
            a.c.push(d);
            a.d.push(g[0]);
            d ? a.h.push(isNaN(g[1]) ? !1 : g[1]) : isNaN(g[1]) || (a.h[0] = g[1])
        });
        c.each(a.h, function(b, c) {
            if (!c) return !0;
            a.h[b] = u([a.d[b], a.d[b + 1]], c) / (100 / (a.c[b + 1] - a.c[b]))
        })
    }

    function E(a, b) {
        "number" === typeof b && (b = [b]);
        if (!c.isArray(b) || !b.length ||
            2 < b.length) throw Error("noUiSlider: 'start' option is incorrect.");
        a.b = b.length;
        a.start = b
    }

    function I(a, b) {
        a.m = b;
        if ("boolean" !== typeof b) throw Error("noUiSlider: 'snap' option must be a boolean.");
    }

    function J(a, b) {
        if ("lower" === b && 1 === a.b) a.i = 1;
        else if ("upper" === b && 1 === a.b) a.i = 2;
        else if (!0 === b && 2 === a.b) a.i = 3;
        else if (!1 === b) a.i = 0;
        else throw Error("noUiSlider: 'connect' option doesn't match handle count.");
    }

    function D(a, b) {
        switch (b) {
            case "horizontal":
                a.k = 0;
                break;
            case "vertical":
                a.k = 1;
                break;
            default:
                throw Error("noUiSlider: 'orientation' option is invalid.");
        }
    }

    function K(a, b) {
        if (2 < a.c.length) throw Error("noUiSlider: 'margin' option is only supported on linear sliders.");
        a.margin = u(a.d, b);
        if (!m(b)) throw Error("noUiSlider: 'margin' option must be numeric.");
    }

    function L(a, b) {
        switch (b) {
            case "ltr":
                a.dir = 0;
                break;
            case "rtl":
                a.dir = 1;
                a.i = [0, 2, 1, 3][a.i];
                break;
            default:
                throw Error("noUiSlider: 'direction' option was not recognized.");
        }
    }

    function M(a, b) {
        if ("string" !== typeof b) throw Error("noUiSlider: 'behaviour' must be a string containing options.");
        var c = 0 <= b.indexOf("snap");
        a.n = {
            s: 0 <= b.indexOf("tap") || c,
            extend: 0 <= b.indexOf("extend"),
            v: 0 <= b.indexOf("drag"),
            fixed: 0 <= b.indexOf("fixed"),
            m: c
        }
    }

    function N(a, b, d) {
        a.o = [b.lower, b.upper];
        a.g = b.format;
        c.each(a.o, function(a, e) {
            if (!c.isArray(e)) throw Error("noUiSlider: 'serialization." + (a ? "upper" : "lower") + "' must be an array.");
            c.each(e, function() {
                if (!(this instanceof c.Link)) throw Error("noUiSlider: 'serialization." + (a ? "upper" : "lower") + "' can only contain Link instances.");
                this.I(a);
                this.J(d);
                this.q(b.format)
            })
        });
        a.dir && 1 < a.b && a.o.reverse()
    }

    function O(a, b) {
        var f = {
                c: [],
                d: [],
                h: [!1],
                margin: 0
            },
            g;
        g = {
            step: {
                e: !1,
                f: d
            },
            start: {
                e: !0,
                f: E
            },
            connect: {
                e: !0,
                f: J
            },
            direction: {
                e: !0,
                f: L
            },
            range: {
                e: !0,
                f: n
            },
            snap: {
                e: !1,
                f: I
            },
            orientation: {
                e: !1,
                f: D
            },
            margin: {
                e: !1,
                f: K
            },
            behaviour: {
                e: !0,
                f: M
            },
            serialization: {
                e: !0,
                f: N
            }
        };
        a = c.extend({
            connect: !1,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal"
        }, a);
        a.serialization = c.extend({
            lower: [],
            upper: [],
            format: {}
        }, a.serialization);
        c.each(g, function(c, d) {
            if (void 0 === a[c]) {
                if (d.e) throw Error("noUiSlider: '" + c + "' is required.");
                return !0
            }
            d.f(f, a[c], b)
        });
        f.style = f.k ? "top" : "left";
        return f
    }

    function P(a, b) {
        var d = c("<div><div/></div>").addClass(f[2]),
            g = ["-lower", "-upper"];
        a.dir && g.reverse();
        d.children().addClass(f[3] + " " + f[3] + g[b]);
        return d
    }

    function Q(a, b) {
        b.j && (b = new c.Link({
            target: c(b.j).clone().appendTo(a),
            method: b.method,
            format: b.g
        }, !0));
        return b
    }

    function R(a, b) {
        var d, f = [];
        for (d = 0; d < a.b; d++) {
            var k = f,
                h = d,
                m = a.o[d],
                n = b[d].children(),
                r = a.g,
                s = void 0,
                v = [],
                s = new c.Link({}, !0);
            s.q(r);
            v.push(s);
            for (s = 0; s < m.length; s++) v.push(Q(n, m[s]));
            k[h] = v
        }
        return f
    }

    function S(a, b, c) {
        switch (a) {
            case 1:
                b.addClass(f[7]);
                c[0].addClass(f[6]);
                break;
            case 3:
                c[1].addClass(f[6]);
            case 2:
                c[0].addClass(f[7]);
            case 0:
                b.addClass(f[6])
        }
    }

    function T(a, b) {
        var c, d = [];
        for (c = 0; c < a.b; c++) d.push(P(a, c).appendTo(b));
        return d
    }

    function U(a, b) {
        b.addClass([f[0], f[8 + a.dir], f[4 + a.k]].join(" "));
        return c("<div/>").appendTo(b).addClass(f[1])
    }

    function V(d, b, m) {
        function g() {
            return t[["width", "height"][b.k]]()
        }

        function n(a) {
            var b, c = [q.val()];
            for (b = 0; b < a.length; b++) q.trigger(a[b],
                c)
        }

        function u(d, p, e) {
            var g = d[0] !== l[0][0] ? 1 : 0,
                H = x[0] + b.margin,
                k = x[1] - b.margin;
            e && 1 < l.length && (p = g ? Math.max(p, H) : Math.min(p, k));
            100 > p && (p = h(b, p));
            p = Math.max(Math.min(parseFloat(p.toFixed(7)), 100), 0);
            if (p === x[g]) return 1 === l.length ? !1 : p === H || p === k ? 0 : !1;
            d.css(b.style, p + "%");
            d.is(":first-child") && d.toggleClass(f[17], 50 < p);
            x[g] = p;
            b.dir && (p = 100 - p);
            c(y[g]).each(function() {
                this.write(a(b, p), d.children(), q)
            });
            return !0
        }

        function B(a, b, c) {
            c || k(q, f[14]);
            u(a, b, !1);
            n(["slide", "set", "change"])
        }

        function w(a, c, d, e) {
            a =
                a.replace(/\s/g, ".nui ") + ".nui";
            c.on(a, function(a) {
                var c = q.attr("disabled");
                if (q.hasClass(f[14]) || void 0 !== c && null !== c) return !1;
                a.preventDefault();
                var c = 0 === a.type.indexOf("touch"),
                    p = 0 === a.type.indexOf("mouse"),
                    F = 0 === a.type.indexOf("pointer"),
                    g, k, l = a;
                0 === a.type.indexOf("MSPointer") && (F = !0);
                a.originalEvent && (a = a.originalEvent);
                c && (g = a.changedTouches[0].pageX, k = a.changedTouches[0].pageY);
                if (p || F) F || void 0 !== window.pageXOffset || (window.pageXOffset = document.documentElement.scrollLeft, window.pageYOffset =
                    document.documentElement.scrollTop), g = a.clientX + window.pageXOffset, k = a.clientY + window.pageYOffset;
                l.C = [g, k];
                l.cursor = p;
                a = l;
                a.l = a.C[b.k];
                d(a, e)
            })
        }

        function C(a, c) {
            var b = c.b || l,
                d, e = !1,
                e = 100 * (a.l - c.start) / g(),
                f = b[0][0] !== l[0][0] ? 1 : 0;
            var k = c.D;
            d = e + k[0];
            e += k[1];
            1 < b.length ? (0 > d && (e += Math.abs(d)), 100 < e && (d -= e - 100), d = [Math.max(Math.min(d, 100), 0), Math.max(Math.min(e, 100), 0)]) : d = [d, e];
            e = u(b[0], d[f], 1 === b.length);
            1 < b.length && (e = u(b[1], d[f ? 0 : 1], !1) || e);
            e && n(["slide"])
        }

        function s(a) {
            c("." + f[15]).removeClass(f[15]);
            a.cursor && c("body").css("cursor", "").off(".nui");
            G.off(".nui");
            q.removeClass(f[12]);
            n(["set", "change"])
        }

        function v(a, b) {
            1 === b.b.length && b.b[0].children().addClass(f[15]);
            a.stopPropagation();
            w(z.move, G, C, {
                start: a.l,
                b: b.b,
                D: [x[0], x[l.length - 1]]
            });
            w(z.end, G, s, null);
            a.cursor && (c("body").css("cursor", c(a.target).css("cursor")), 1 < l.length && q.addClass(f[12]), c("body").on("selectstart.nui", !1))
        }

        function D(a) {
            var d = a.l,
                e = 0;
            a.stopPropagation();
            c.each(l, function() {
                e += this.offset()[b.style]
            });
            e = d < e / 2 || 1 === l.length ?
                0 : 1;
            d -= t.offset()[b.style];
            d = 100 * d / g();
            B(l[e], d, b.n.m);
            b.n.m && v(a, {
                b: [l[e]]
            })
        }

        function E(a) {
            var c = (a = a.l < t.offset()[b.style]) ? 0 : 100;
            a = a ? 0 : l.length - 1;
            B(l[a], c, !1)
        }
        var q = c(d),
            x = [-1, -1],
            t, y, l;
        if (q.hasClass(f[0])) throw Error("Slider was already initialized.");
        t = U(b, q);
        l = T(b, t);
        y = R(b, l);
        S(b.i, q, l);
        (function(a) {
            var b;
            if (!a.fixed)
                for (b = 0; b < l.length; b++) w(z.start, l[b].children(), v, {
                    b: [l[b]]
                });
            a.s && w(z.start, t, D, {
                b: l
            });
            a.extend && (q.addClass(f[16]), a.s && w(z.start, q, E, {
                b: l
            }));
            a.v && (b = t.find("." + f[7]).addClass(f[10]),
                a.fixed && (b = b.add(t.children().not(b).children())), w(z.start, b, v, {
                    b: l
                }))
        })(b.n);
        d.vSet = function() {
            var a = Array.prototype.slice.call(arguments, 0),
                d, e, g, h, m, s, t = r(a[0]);
            "object" === typeof a[1] ? (d = a[1].set, e = a[1].link, g = a[1].update, h = a[1].animate) : !0 === a[1] && (d = !0);
            b.dir && 1 < b.b && t.reverse();
            h && k(q, f[14]);
            a = 1 < l.length ? 3 : 1;
            1 === t.length && (a = 1);
            for (m = 0; m < a; m++) h = e || y[m % 2][0], h = h.A(t[m % 2]), !1 !== h && (h = A(b, h), b.dir && (h = 100 - h), !0 !== u(l[m % 2], h, !0) && c(y[m % 2]).each(function(a) {
                if (!a) return s = this.u, !0;
                this.write(s,
                    l[m % 2].children(), q, g)
            }));
            !0 === d && n(["set"]);
            return this
        };
        d.vGet = function() {
            var a, c = [];
            for (a = 0; a < b.b; a++) c[a] = y[a][0].F;
            return 1 === c.length ? c[0] : b.dir ? c.reverse() : c
        };
        d.destroy = function() {
            c.each(y, function() {
                c.each(this, function() {
                    this.target && this.target.off(".nui")
                })
            });
            c(this).off(".nui").removeClass(f.join(" ")).empty();
            return m
        };
        q.val(b.start)
    }

    function W(a) {
        if (!this.length) throw Error("noUiSlider: Can't initialize slider on empty selection.");
        var b = O(a, this);
        return this.each(function() {
            V(this,
                b, a)
        })
    }

    function X(a) {
        return this.each(function() {
            var b = c(this).val(),
                d = this.destroy(),
                f = c.extend({}, d, a);
            c(this).noUiSlider(f);
            d.start === f.start && c(this).val(b)
        })
    }

    function B() {
        return this[0][arguments.length ? "vSet" : "vGet"].apply(this[0], arguments)
    }
    var G = c(document),
        C = c.fn.val,
        z = window.navigator.pointerEnabled ? {
            start: "pointerdown",
            move: "pointermove",
            end: "pointerup"
        } : window.navigator.msPointerEnabled ? {
            start: "MSPointerDown",
            move: "MSPointerMove",
            end: "MSPointerUp"
        } : {
            start: "mousedown touchstart",
            move: "mousemove touchmove",
            end: "mouseup touchend"
        },
        f = "noUi-target noUi-base noUi-origin noUi-handle noUi-horizontal noUi-vertical noUi-background noUi-connect noUi-ltr noUi-rtl noUi-dragable  noUi-state-drag  noUi-state-tap noUi-active noUi-extended noUi-stacking".split(" ");
    c.fn.val = function() {
        var a = arguments,
            b = c(this[0]);
        return arguments.length ? this.each(function() {
            (c(this).hasClass(f[0]) ? B : C).apply(c(this), a)
        }) : (b.hasClass(f[0]) ? B : C).call(b)
    };
    c.noUiSlider = {
        Link: c.Link
    };
    c.fn.noUiSlider = function(a, b) {
        return (b ? X : W).call(this,
            a)
    }
})(window.jQuery || window.Zepto);

;
/*!
 * Bootstrap v3.3.2 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function(a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var c in b)
            if (void 0 !== a.style[c]) return {
                end: b[c]
            };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function() {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]',
        d = function(b) {
            a(b).on("click", c, this.close)
        };
    d.VERSION = "3.3.2", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }
        var e = a(this),
            f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a(f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.3.2", c.DEFAULTS = {
        loadingText: "loading..."
    }, c.prototype.setState = function(b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        }, this), 0)
    }, c.prototype.toggle = function() {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        a && this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), c.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.2", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    }, c.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.getItemForDirection = function(a, b) {
        var c = this.getItemIndex(b),
            d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }, c.prototype.to = function(a) {
        var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }, c.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, c.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, c.prototype.slide = function(b, d) {
        var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this;
        if (f.hasClass("active")) return this.sliding = !1;
        var j = f[0],
            k = a.Event("slide.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d, this
    };
    var e = function(c) {
        var d, e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }

    function c(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && "show" == b && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }
    var d = function(b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a(this.options.trigger).filter('[href="#' + b.id + '"], [data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.2", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
        toggle: !0,
        trigger: '[data-toggle="collapse"]'
    }, d.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, d.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition) return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, d.prototype.getParent = function() {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : a.extend({}, e.data(), {
                trigger: this
            });
        c.call(f, h)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        b && 3 === b.which || (a(e).remove(), a(f).each(function() {
            var d = a(this),
                e = c(d),
                f = {
                    relatedTarget: this
                };
            e.hasClass("open") && (e.trigger(b = a.Event("hide.bs.dropdown", f)), b.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f)))
        }))
    }

    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function d(b) {
        return this.each(function() {
            var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function(b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
    g.VERSION = "3.3.2", g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e),
                g = f.hasClass("open");
            if (b(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h)
            }
            return !1
        }
    }, g.prototype.keydown = function(b) {
        if (/(38|40|27|32)/.test(b.which) && !/input|textarea/i.test(b.target.tagName)) {
            var d = a(this);
            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = c(d),
                    g = e.hasClass("open");
                if (!g && 27 != b.which || g && 27 == b.which) return 27 == b.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.divider):visible a",
                    i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
                if (i.length) {
                    var j = i.index(b.target);
                    38 == b.which && j > 0 && j--, 40 == b.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', g.prototype.keydown)
}(jQuery), + function(a) {
    "use strict";

    function b(b, d) {
        return this.each(function() {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.2", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function(b) {
        var d = this,
            e = a.Event("show.bs.modal", {
                relatedTarget: b
            });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function() {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.options.backdrop && d.adjustBackdrop(), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in").attr("aria-hidden", !1), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            e ? d.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function() {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function(b) {
        var d = this,
            e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a('<div class="modal-backdrop ' + e + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", a.proxy(function(a) {
                    a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function() {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else b && b()
    }, c.prototype.handleUpdate = function() {
        this.options.backdrop && this.adjustBackdrop(), this.adjustDialog()
    }, c.prototype.adjustBackdrop = function() {
        this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight)
    }, c.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }, c.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, c.prototype.checkScrollbar = function() {
        this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    }, c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({
                remote: !/#/.test(e) && e
            }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;
            (e || "destroy" != b) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.2", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, c.prototype.init = function(b, c, d) {
        this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport);
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function() {
        var b = {},
            c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c && c.$tip && c.$tip.is(":visible") ? void(c.hoverState = "in") : (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }, c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide()
    }, c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d) return;
            var e = this,
                f = this.tip(),
                g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element);
            var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight;
            if (j) {
                var n = h,
                    o = this.options.container ? a(this.options.container) : this.$element.parent(),
                    p = this.getPosition(o);
                h = "bottom" == h && k.bottom + m > p.bottom ? "top" : "top" == h && k.top - m < p.top ? "bottom" : "right" == h && k.right + l > p.width ? "left" : "left" == h && k.left - l < p.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var q = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(q, h);
            var r = function() {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", r).emulateTransitionEnd(c.TRANSITION_DURATION) : r()
        }
    }, c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top = b.top + g, b.left = b.left + h, a.offset.setOffset(d[0], a.extend({
            using: function(a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth,
            j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function(b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }
        var e = this,
            f = this.tip(),
            g = a.Event("hide.bs." + this.type);
        return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
    }, c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function() {
        return this.getTitle()
    }, c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top
        }));
        var f = d ? {
                top: 0,
                left: 0
            } : b.offset(),
            g = {
                scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
            },
            h = d ? {
                width: a(window).width(),
                height: a(window).height()
            } : null;
        return a.extend({}, e, g, h, f)
    }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.width && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function() {
        var a, b = this.$element,
            c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function(a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a
    }, c.prototype.tip = function() {
        return this.$tip = this.$tip || a(this.options.template)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function() {
        this.enabled = !0
    }, c.prototype.disable = function() {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function() {
        var a = this;
        clearTimeout(this.timeout), this.hide(function() {
            a.$element.off("." + a.type).removeData("bs." + a.type)
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof b && b;
            (e || "destroy" != b) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.2", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function() {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, c.prototype.tip = function() {
        return this.$tip || (this.$tip = a(this.options.template)), this.$tip
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
        return a.fn.popover = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(c, d) {
        var e = a.proxy(this.process, this);
        this.$body = a("body"), this.$scrollElement = a(a(c).is("body") ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e), this.refresh(), this.process()
    }

    function c(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.3.2", b.DEFAULTS = {
        offset: 10
    }, b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function() {
        var b = "offset",
            c = 0;
        a.isWindow(this.$scrollElement[0]) || (b = "position", c = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var d = this;
        this.$body.find(this.selector).map(function() {
            var d = a(this),
                e = d.data("target") || d.attr("href"),
                f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [
                [f[b]().top + c, e]
            ] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            d.offsets.push(this[0]), d.targets.push(this[1])
        })
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return this.activeTarget = null, this.clear();
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function() {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.2", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", {
                    relatedTarget: b[0]
                }),
                g = a.Event("show.bs.tab", {
                    relatedTarget: e[0]
                });
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
                    e.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: b[0]
                    }), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }, c.prototype.activate = function(b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
        }
        var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
        return a.fn.tab = d, this
    };
    var e = function(c) {
        c.preventDefault(), b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.3.2", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function(a, b, c, d) {
        var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height();
        if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
        if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
        var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b;
        return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
    }, c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
            b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(),
                d = this.options.offset,
                e = d.top,
                f = d.bottom,
                g = a("body").height();
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""),
                    j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({
                top: g - b - f
            })
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
        return a.fn.affix = d, this
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this),
                d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery);;
/*!
 * angular-loading-bar v0.6.0
 * https://chieffancypants.github.io/angular-loading-bar
 * Copyright (c) 2014 Wes Cruver
 * License: MIT
 */
! function() {
    "use strict";
    angular.module("angular-loading-bar", ["cfp.loadingBarInterceptor"]), angular.module("chieffancypants.loadingBar", ["cfp.loadingBarInterceptor"]), angular.module("cfp.loadingBarInterceptor", ["cfp.loadingBar"]).config(["$httpProvider", function(a) {
        var b = ["$q", "$cacheFactory", "$timeout", "$rootScope", "cfpLoadingBar", function(b, c, d, e, f) {
            function g() {
                d.cancel(i), f.complete(), k = 0, j = 0
            }

            function h(b) {
                var d, e = c.get("$http"),
                    f = a.defaults;
                !b.cache && !f.cache || b.cache === !1 || "GET" !== b.method && "JSONP" !== b.method || (d = angular.isObject(b.cache) ? b.cache : angular.isObject(f.cache) ? f.cache : e);
                var g = void 0 !== d ? void 0 !== d.get(b.url) : !1;
                return void 0 !== b.cached && g !== b.cached ? b.cached : (b.cached = g, g)
            }
            var i, j = 0,
                k = 0,
                l = f.latencyThreshold;
            return {
                request: function(a) {
                    return a.ignoreLoadingBar || h(a) || (e.$broadcast("cfpLoadingBar:loading", {
                        url: a.url
                    }), 0 === j && (i = d(function() {
                        f.start()
                    }, l)), j++, f.set(k / j)), a
                },
                response: function(a) {
                    return a.config.ignoreLoadingBar || h(a.config) || (k++, e.$broadcast("cfpLoadingBar:loaded", {
                        url: a.config.url
                    }), k >= j ? g() : f.set(k / j)), a
                },
                responseError: function(a) {
                    return a.config.ignoreLoadingBar || h(a.config) || (k++, e.$broadcast("cfpLoadingBar:loaded", {
                        url: a.config.url
                    }), k >= j ? g() : f.set(k / j)), b.reject(a)
                }
            }
        }];
        a.interceptors.push(b)
    }]), angular.module("cfp.loadingBar", []).provider("cfpLoadingBar", function() {
        this.includeSpinner = !0, this.includeBar = !0, this.latencyThreshold = 100, this.startSize = .02, this.parentSelector = "body", this.spinnerTemplate = '<div id="loading-bar-spinner"><div class="spinner-icon"></div></div>', this.loadingBarTemplate = '<div id="loading-bar"><div class="bar"><div class="peg"></div></div></div>', this.$get = ["$injector", "$document", "$timeout", "$rootScope", function(a, b, c, d) {
            function e() {
                k || (k = a.get("$animate"));
                var e = b.find(n).eq(0);
                c.cancel(m), r || (d.$broadcast("cfpLoadingBar:started"), r = !0, u && k.enter(o, e), t && k.enter(q, e), f(v))
            }

            function f(a) {
                if (r) {
                    var b = 100 * a + "%";
                    p.css("width", b), s = a, c.cancel(l), l = c(function() {
                        g()
                    }, 250)
                }
            }

            function g() {
                if (!(h() >= 1)) {
                    var a = 0,
                        b = h();
                    a = b >= 0 && .25 > b ? (3 * Math.random() + 3) / 100 : b >= .25 && .65 > b ? 3 * Math.random() / 100 : b >= .65 && .9 > b ? 2 * Math.random() / 100 : b >= .9 && .99 > b ? .005 : 0;
                    var c = h() + a;
                    f(c)
                }
            }

            function h() {
                return s
            }

            function i() {
                s = 0, r = !1
            }

            function j() {
                k || (k = a.get("$animate")), d.$broadcast("cfpLoadingBar:completed"), f(1), c.cancel(m), m = c(function() {
                    var a = k.leave(o, i);
                    a && a.then && a.then(i), k.leave(q)
                }, 500)
            }
            var k, l, m, n = this.parentSelector,
                o = angular.element(this.loadingBarTemplate),
                p = o.find("div").eq(0),
                q = angular.element(this.spinnerTemplate),
                r = !1,
                s = 0,
                t = this.includeSpinner,
                u = this.includeBar,
                v = this.startSize;
            return {
                start: e,
                set: f,
                status: h,
                inc: g,
                complete: j,
                includeSpinner: this.includeSpinner,
                latencyThreshold: this.latencyThreshold,
                parentSelector: this.parentSelector,
                startSize: this.startSize
            }
        }]
    })
}();;
/*!
 * angularjs-breakpoint v0.0.1
 *
 * BREAKPOINT DIRECTIVE FOR RESPONSIVE WEBSITES
 *
 *  http://snapjay.github.com/angularjs-breakpoint/
 *  Apply as a attribute of the body tag. Set
 *  breakpoint="{1250:'break1250', 1000:'break1000',1120:'break1120'}
 *
 *  Values are available on scope as
 *  {{breakpoint.class}} = current set class
 *  {{breakpoint.windowSize}} = current width of window
 */
var breakpointApp = angular.module('breakpointApp', []);
breakpointApp.directive('breakpoint', ['$window', '$rootScope', function($window, $rootScope) {
    return {
        restrict: "A",
        link: function(scope, element, attr) {
            scope.breakpoint = {
                class: '',
                windowSize: $window.innerWidth
            };
            var breakpoints = (scope.$eval(attr.breakpoint));
            var firstTime = true;
            angular.element($window).bind('resize', setWindowSize);
            scope.$watch('breakpoint.windowSize', function(windowWidth, oldValue) {
                setClass(windowWidth);
            });
            scope.$watch('breakpoint.class', function(newClass, oldClass) {
                if (newClass != oldClass || firstTime) {
                    broadcastEvent(oldClass);
                    firstTime = false;
                }
            });

            function broadcastEvent(oldClass) {
                $rootScope.$broadcast('breakpointChange', scope.breakpoint, oldClass);
            }

            function setWindowSize() {
                scope.breakpoint.windowSize = $window.innerWidth;
                if (!scope.$$phase) scope.$apply();
            }

            function setClass(windowWidth) {
                var setClass = breakpoints[Object.keys(breakpoints)[0]];
                for (var breakpoint in breakpoints) {
                    if (breakpoint < windowWidth) setClass = breakpoints[breakpoint];
                    element.removeClass(breakpoints[breakpoint]);
                }
                element.addClass(setClass);
                scope.breakpoint.class = setClass;
                if (!scope.$$phase) scope.$apply();
            }
        }
    }
}]);;
(function($) {
    $.fn.vergilics = function(options) {
        var settings = $.extend({
            'calName': 'Columbia University Vergil',
            'calDesc': 'Scheduled Courses on Vergil',
            'events': [{
                'eventId': 'debug',
                'title': 'Sample event',
                'description': 'This is example. Only display on debug mode.',
                'startTime': '170000',
                'endTime': '235959',
                'location': '',
                'dayOfWeek': '1'
            }],
            'debug': 0
        }, options);
        settings.icsHeader = "BEGIN:VCALENDAR\nVERSION:2.0\nX-WR-CALNAME:" + (settings.calName) + "\nPRODID:-//Apple Inc.//Mac OS X 10.9.5//EN\nX-WR-CALDESC:" + (settings.calDesc) + "\nX-WR-TIMEZONE:America/New_York\n";
        settings.icsFooter = "END:VCALENDAR";
        $.fn.vergilics.download = function() {
            let dayMap = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
            var events = [];
            $.each(settings.events, function(index, event) {
                if (!settings.debug) {
                    if (event.eventId == 'debug') {
                        return true;
                    }
                }
                var d = new Date();
                var day = d.getDay();
                console.log(event);
                if ((0 + event.dayOfWeek) == 7) {
                    event.dayOfWeek = 0;
                }
                var diff = 0 + event.dayOfWeek - day;
                d.setDate(d.getDate() + diff);
                var utcDT = d.getUTCFullYear() + '' + pad((d.getUTCMonth() + 1)) + '' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + '' + pad(d.getUTCMinutes()) + '' + pad(d.getUTCSeconds()) + 'Z';
                var eventDate = d.getFullYear() + '' + pad((d.getMonth() + 1)) + '' + pad(d.getDate());
                events[index] = "BEGIN:VEVENT\nUID:" +
                    event.eventId + "_" + event.dayOfWeek + "@vergil.columbia.edu\nDTSTAMP:" +
                    utcDT + "\nDTSTART:" +
                    eventDate + "T" + event.startTime + "\nRRULE:FREQ=WEEKLY;WKST=" + dayMap[event.dayOfWeek] + "\nDTEND:" +
                    eventDate + "T" + event.endTime + "\nSUMMARY:" +
                    event.title + "\nDESCRIPTION:" +
                    event.description + "\nLOCATION:" +
                    event.location + "\nEND:VEVENT\n";
            });
            var icsEvents = events.join('');
            var icsMSG = settings.icsHeader + icsEvents + settings.icsFooter;
            if (settings.debug) {
                console.log(icsMSG);
            }
            saveContent(("data:text/calendar;charset=utf8," + escape(icsMSG)), "calendar.ics");

            // tryme should be set to "calendarInstructions" before deploy - if you try to store it into a variable, it will not work...
            // change the string each time you want to wipe out the local storage
            if (localStorage.getItem("tryme") == null) {
                alert("You have successfully downloaded a .ics calendar file of your class schedule.\n\nAdd to iCal: Double click the .ics file and follow the instructions\nAdd to Google Calendar: Open a new tab with Google Calendar, click the plus sign on the left side of the screen, and select import from the list of options to upload your .ics file.");
                localStorage.setItem("tryme", true);
            }
            /*




            */
            function saveContent(fileContents, fileName)
            {
                var link = document.createElement('a');
                link.download = fileName;
                link.href = fileContents;
                link.click();
            }
        }
        return this.each(function() {
            var elem = $(this);
            elem.click(function(event) {
                event.preventDefault();
                $.fn.vergilics.download();
            });
        });
    };

    function pad(n) {
        return (0 + n < 10) ? ("0" + n) : n;
    }
}(jQuery));
