! function() {
    var n, t;
    (function() {
        t = {}
    }).call(this),
        function() {
            (function() {
                var n = this,
                    r = n._,
                    e = {},
                    u = Array.prototype,
                    i = Object.prototype,
                    a = Function.prototype,
                    o = u.push,
                    c = u.slice,
                    l = u.concat,
                    f = i.toString,
                    s = i.hasOwnProperty,
                    p = u.forEach,
                    v = u.map,
                    h = u.reduce,
                    d = u.reduceRight,
                    g = u.filter,
                    m = u.every,
                    y = u.some,
                    b = u.indexOf,
                    _ = u.lastIndexOf,
                    w = Array.isArray,
                    x = Object.keys,
                    j = a.bind,
                    A = function(n) {
                        return n instanceof A ? n : this instanceof A ? void(this._wrapped = n) : new A(n)
                    };
                "undefined" != typeof t ? ("undefined" != typeof module && module.exports && (t = module.exports = A), t._ = A) : n._ = A, A.VERSION = "1.5.2";
                var k = function(n) {
                    return "[object Arguments]" === f.call(n)
                };
                k(arguments) || (k = function(n) {
                    return !(!n || !s.call(n, "callee") || "function" != typeof n.callee)
                });
                var O = function(n) {
                        return n.length === +n.length && (k(n) || n.constructor !== Object)
                    },
                    E = A.each = A.forEach = function(n, t, r) {
                        if (null != n)
                            if (p && n.forEach === p) n.forEach(t, r);
                            else if (O(n)) {
                            for (var u = 0, i = n.length; i > u; u++)
                                if (t.call(r, n[u], u, n) === e) return
                        } else
                            for (var a = A.keys(n), u = 0, i = a.length; i > u; u++)
                                if (t.call(r, n[a[u]], a[u], n) === e) return
                    };
                A.map = A.collect = function(n, t, r) {
                    var e = [];
                    return null == n ? e : v && n.map === v ? n.map(t, r) : (E(n, function(n, u, i) {
                        e.push(t.call(r, n, u, i))
                    }), e)
                };
                var F = "Reduce of empty array with no initial value";
                A.reduce = A.foldl = A.inject = function(n, t, r, e) {
                    var u = arguments.length > 2;
                    if (null == n && (n = []), h && n.reduce === h) return e && (t = A.bind(t, e)), u ? n.reduce(t, r) : n.reduce(t);
                    if (E(n, function(n, i, a) {
                            u ? r = t.call(e, r, n, i, a) : (r = n, u = !0)
                        }), !u) throw new TypeError(F);
                    return r
                }, A.reduceRight = A.foldr = function(n, t, r, e) {
                    var u = arguments.length > 2;
                    if (null == n && (n = []), d && n.reduceRight === d) return e && (t = A.bind(t, e)), u ? n.reduceRight(t, r) : n.reduceRight(t);
                    var i = n.length;
                    if (!O(n)) {
                        var a = A.keys(n);
                        i = a.length
                    }
                    if (E(n, function(o, c, l) {
                            c = a ? a[--i] : --i, u ? r = t.call(e, r, n[c], c, l) : (r = n[c], u = !0)
                        }), !u) throw new TypeError(F);
                    return r
                }, A.find = A.detect = function(n, t, r) {
                    var e;
                    return M(n, function(n, u, i) {
                        return t.call(r, n, u, i) ? (e = n, !0) : void 0
                    }), e
                }, A.filter = A.select = function(n, t, r) {
                    var e = [];
                    return null == n ? e : g && n.filter === g ? n.filter(t, r) : (E(n, function(n, u, i) {
                        t.call(r, n, u, i) && e.push(n)
                    }), e)
                }, A.reject = function(n, t, r) {
                    return A.filter(n, function(n, e, u) {
                        return !t.call(r, n, e, u)
                    }, r)
                }, A.every = A.all = function(n, t, r) {
                    t || (t = A.identity);
                    var u = !0;
                    return null == n ? u : m && n.every === m ? n.every(t, r) : (E(n, function(n, i, a) {
                        return (u = u && t.call(r, n, i, a)) ? void 0 : e
                    }), !!u)
                };
                var M = A.some = A.any = function(n, t, r) {
                    t || (t = A.identity);
                    var u = !1;
                    return null == n ? u : y && n.some === y ? n.some(t, r) : (E(n, function(n, i, a) {
                        return u || (u = t.call(r, n, i, a)) ? e : void 0
                    }), !!u)
                };
                A.contains = A.include = function(n, t) {
                    return null == n ? !1 : b && n.indexOf === b ? -1 != n.indexOf(t) : M(n, function(n) {
                        return n === t
                    })
                }, A.invoke = function(n, t) {
                    var r = c.call(arguments, 2),
                        e = A.isFunction(t);
                    return A.map(n, function(n) {
                        return (e ? t : n[t]).apply(n, r)
                    })
                }, A.pluck = function(n, t) {
                    return A.map(n, function(n) {
                        return n[t]
                    })
                }, A.where = function(n, t, r) {
                    return A.isEmpty(t) ? r ? void 0 : [] : A[r ? "find" : "filter"](n, function(n) {
                        for (var r in t)
                            if (t[r] !== n[r]) return !1;
                        return !0
                    })
                }, A.findWhere = function(n, t) {
                    return A.where(n, t, !0)
                }, A.max = function(n, t, r) {
                    if (!t && A.isArray(n) && n[0] === +n[0] && n.length < 65535) return Math.max.apply(Math, n);
                    if (!t && A.isEmpty(n)) return -(1 / 0);
                    var e = {
                        computed: -(1 / 0),
                        value: -(1 / 0)
                    };
                    return E(n, function(n, u, i) {
                        var a = t ? t.call(r, n, u, i) : n;
                        a > e.computed && (e = {
                            value: n,
                            computed: a
                        })
                    }), e.value
                }, A.min = function(n, t, r) {
                    if (!t && A.isArray(n) && n[0] === +n[0] && n.length < 65535) return Math.min.apply(Math, n);
                    if (!t && A.isEmpty(n)) return 1 / 0;
                    var e = {
                        computed: 1 / 0,
                        value: 1 / 0
                    };
                    return E(n, function(n, u, i) {
                        var a = t ? t.call(r, n, u, i) : n;
                        a < e.computed && (e = {
                            value: n,
                            computed: a
                        })
                    }), e.value
                }, A.shuffle = function(n) {
                    var t, r = 0,
                        e = [];
                    return E(n, function(n) {
                        t = A.random(r++), e[r - 1] = e[t], e[t] = n
                    }), e
                }, A.sample = function(n, t, r) {
                    return arguments.length < 2 || r ? n[A.random(n.length - 1)] : A.shuffle(n).slice(0, Math.max(0, t))
                };
                var R = function(n) {
                    return A.isFunction(n) ? n : function(t) {
                        return t[n]
                    }
                };
                A.sortBy = function(n, t, r) {
                    var e = R(t);
                    return A.pluck(A.map(n, function(n, t, u) {
                        return {
                            value: n,
                            index: t,
                            criteria: e.call(r, n, t, u)
                        }
                    }).sort(function(n, t) {
                        var r = n.criteria,
                            e = t.criteria;
                        if (r !== e) {
                            if (r > e || void 0 === r) return 1;
                            if (e > r || void 0 === e) return -1
                        }
                        return n.index - t.index
                    }), "value")
                };
                var S = function(n) {
                    return function(t, r, e) {
                        var u = {},
                            i = null == r ? A.identity : R(r);
                        return E(t, function(r, a) {
                            var o = i.call(e, r, a, t);
                            n(u, o, r)
                        }), u
                    }
                };
                A.groupBy = S(function(n, t, r) {
                    (A.has(n, t) ? n[t] : n[t] = []).push(r)
                }), A.indexBy = S(function(n, t, r) {
                    n[t] = r
                }), A.countBy = S(function(n, t) {
                    A.has(n, t) ? n[t]++ : n[t] = 1
                }), A.sortedIndex = function(n, t, r, e) {
                    r = null == r ? A.identity : R(r);
                    for (var u = r.call(e, t), i = 0, a = n.length; a > i;) {
                        var o = i + a >>> 1;
                        r.call(e, n[o]) < u ? i = o + 1 : a = o
                    }
                    return i
                }, A.toArray = function(n) {
                    return n ? A.isArray(n) ? c.call(n) : O(n) ? A.map(n, A.identity) : A.values(n) : []
                }, A.size = function(n) {
                    return null == n ? 0 : O(n) ? n.length : A.keys(n).length
                }, A.first = A.head = A.take = function(n, t, r) {
                    return null == n ? void 0 : null == t || r ? n[0] : c.call(n, 0, t)
                }, A.initial = function(n, t, r) {
                    return c.call(n, 0, n.length - (null == t || r ? 1 : t))
                }, A.last = function(n, t, r) {
                    return null == n ? void 0 : null == t || r ? n[n.length - 1] : c.call(n, Math.max(n.length - t, 0))
                }, A.rest = A.tail = A.drop = function(n, t, r) {
                    return c.call(n, null == t || r ? 1 : t)
                }, A.compact = function(n) {
                    return A.filter(n, A.identity)
                };
                var I = function(n, t, r) {
                    return t && A.every(n, A.isArray) ? l.apply(r, n) : (E(n, function(n) {
                        A.isArray(n) || A.isArguments(n) ? t ? o.apply(r, n) : I(n, t, r) : r.push(n)
                    }), r)
                };
                A.flatten = function(n, t) {
                    return I(n, t, [])
                }, A.without = function(n) {
                    return A.difference(n, c.call(arguments, 1))
                }, A.uniq = A.unique = function(n, t, r, e) {
                    A.isFunction(t) && (e = r, r = t, t = !1);
                    var u = r ? A.map(n, r, e) : n,
                        i = [],
                        a = [];
                    return E(u, function(r, e) {
                        (t ? e && a[a.length - 1] === r : A.contains(a, r)) || (a.push(r), i.push(n[e]))
                    }), i
                }, A.union = function() {
                    return A.uniq(A.flatten(arguments, !0))
                }, A.intersection = function(n) {
                    var t = c.call(arguments, 1);
                    return A.filter(A.uniq(n), function(n) {
                        return A.every(t, function(t) {
                            return A.indexOf(t, n) >= 0
                        })
                    })
                }, A.difference = function(n) {
                    var t = l.apply(u, c.call(arguments, 1));
                    return A.filter(n, function(n) {
                        return !A.contains(t, n)
                    })
                }, A.zip = function() {
                    for (var n = A.max(A.pluck(arguments, "length").concat(0)), t = new Array(n), r = 0; n > r; r++) t[r] = A.pluck(arguments, "" + r);
                    return t
                }, A.object = function(n, t) {
                    if (null == n) return {};
                    for (var r = {}, e = 0, u = n.length; u > e; e++) t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
                    return r
                }, A.indexOf = function(n, t, r) {
                    if (null == n) return -1;
                    var e = 0,
                        u = n.length;
                    if (r) {
                        if ("number" != typeof r) return e = A.sortedIndex(n, t), n[e] === t ? e : -1;
                        e = 0 > r ? Math.max(0, u + r) : r
                    }
                    if (b && n.indexOf === b) return n.indexOf(t, r);
                    for (; u > e; e++)
                        if (n[e] === t) return e;
                    return -1
                }, A.lastIndexOf = function(n, t, r) {
                    if (null == n) return -1;
                    var e = null != r;
                    if (_ && n.lastIndexOf === _) return e ? n.lastIndexOf(t, r) : n.lastIndexOf(t);
                    for (var u = e ? r : n.length; u--;)
                        if (n[u] === t) return u;
                    return -1
                }, A.range = function(n, t, r) {
                    arguments.length <= 1 && (t = n || 0, n = 0), r = arguments[2] || 1;
                    for (var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = new Array(e); e > u;) i[u++] = n, n += r;
                    return i
                };
                var T = function() {};
                A.bind = function(n, t) {
                    var r, e;
                    if (j && n.bind === j) return j.apply(n, c.call(arguments, 1));
                    if (!A.isFunction(n)) throw new TypeError;
                    return r = c.call(arguments, 2), e = function() {
                        if (!(this instanceof e)) return n.apply(t, r.concat(c.call(arguments)));
                        T.prototype = n.prototype;
                        var u = new T;
                        T.prototype = null;
                        var i = n.apply(u, r.concat(c.call(arguments)));
                        return Object(i) === i ? i : u
                    }
                }, A.partial = function(n) {
                    var t = c.call(arguments, 1);
                    return function() {
                        return n.apply(this, t.concat(c.call(arguments)))
                    }
                }, A.bindAll = function(n) {
                    var t = c.call(arguments, 1);
                    if (0 === t.length) throw new Error("bindAll must be passed function names");
                    return E(t, function(t) {
                        n[t] = A.bind(n[t], n)
                    }), n
                }, A.memoize = function(n, t) {
                    var r = {};
                    return t || (t = A.identity),
                        function() {
                            var e = t.apply(this, arguments);
                            return A.has(r, e) ? r[e] : r[e] = n.apply(this, arguments)
                        }
                }, A.delay = function(n, t) {
                    var r = c.call(arguments, 2);
                    return setTimeout(function() {
                        return n.apply(null, r)
                    }, t)
                }, A.defer = function(n) {
                    return A.delay.apply(A, [n, 1].concat(c.call(arguments, 1)))
                }, A.throttle = function(n, t, r) {
                    var e, u, i, a = null,
                        o = 0;
                    r || (r = {});
                    var c = function() {
                        o = r.leading === !1 ? 0 : new Date, a = null, i = n.apply(e, u)
                    };
                    return function() {
                        var l = new Date;
                        o || r.leading !== !1 || (o = l);
                        var f = t - (l - o);
                        return e = this, u = arguments, 0 >= f ? (clearTimeout(a), a = null, o = l, i = n.apply(e, u)) : a || r.trailing === !1 || (a = setTimeout(c, f)), i
                    }
                }, A.debounce = function(n, t, r) {
                    var e, u, i, a, o;
                    return function() {
                        i = this, u = arguments, a = new Date;
                        var c = function() {
                                var l = new Date - a;
                                t > l ? e = setTimeout(c, t - l) : (e = null, r || (o = n.apply(i, u)))
                            },
                            l = r && !e;
                        return e || (e = setTimeout(c, t)), l && (o = n.apply(i, u)), o
                    }
                }, A.once = function(n) {
                    var t = !1,
                        r;
                    return function() {
                        return t ? r : (t = !0, r = n.apply(this, arguments), n = null, r)
                    }
                }, A.wrap = function(n, t) {
                    return function() {
                        var r = [n];
                        return o.apply(r, arguments), t.apply(this, r)
                    }
                }, A.compose = function() {
                    var n = arguments;
                    return function() {
                        for (var t = arguments, r = n.length - 1; r >= 0; r--) t = [n[r].apply(this, t)];
                        return t[0]
                    }
                }, A.after = function(n, t) {
                    return function() {
                        return --n < 1 ? t.apply(this, arguments) : void 0
                    }
                }, A.keys = x || function(n) {
                    if (n !== Object(n)) throw new TypeError("Invalid object");
                    var t = [];
                    for (var r in n) A.has(n, r) && t.push(r);
                    return t
                }, A.values = function(n) {
                    for (var t = A.keys(n), r = t.length, e = new Array(r), u = 0; r > u; u++) e[u] = n[t[u]];
                    return e
                }, A.pairs = function(n) {
                    for (var t = A.keys(n), r = t.length, e = new Array(r), u = 0; r > u; u++) e[u] = [t[u], n[t[u]]];
                    return e
                }, A.invert = function(n) {
                    for (var t = {}, r = A.keys(n), e = 0, u = r.length; u > e; e++) t[n[r[e]]] = r[e];
                    return t
                }, A.functions = A.methods = function(n) {
                    var t = [];
                    for (var r in n) A.isFunction(n[r]) && t.push(r);
                    return t.sort()
                }, A.extend = function(n) {
                    return E(c.call(arguments, 1), function(t) {
                        if (t)
                            for (var r in t) n[r] = t[r]
                    }), n
                }, A.pick = function(n) {
                    var t = {},
                        r = l.apply(u, c.call(arguments, 1));
                    return E(r, function(r) {
                        r in n && (t[r] = n[r])
                    }), t
                }, A.omit = function(n) {
                    var t = {},
                        r = l.apply(u, c.call(arguments, 1));
                    for (var e in n) A.contains(r, e) || (t[e] = n[e]);
                    return t
                }, A.defaults = function(n) {
                    return E(c.call(arguments, 1), function(t) {
                        if (t)
                            for (var r in t) void 0 === n[r] && (n[r] = t[r])
                    }), n
                }, A.clone = function(n) {
                    return A.isObject(n) ? A.isArray(n) ? n.slice() : A.extend({}, n) : n
                }, A.tap = function(n, t) {
                    return t(n), n
                };
                var N = function(n, t, r, e) {
                    if (n === t) return 0 !== n || 1 / n == 1 / t;
                    if (null == n || null == t) return n === t;
                    n instanceof A && (n = n._wrapped), t instanceof A && (t = t._wrapped);
                    var u = f.call(n);
                    if (u != f.call(t)) return !1;
                    switch (u) {
                        case "[object String]":
                            return n == String(t);
                        case "[object Number]":
                            return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t;
                        case "[object Date]":
                        case "[object Boolean]":
                            return +n == +t;
                        case "[object RegExp]":
                            return n.source == t.source && n.global == t.global && n.multiline == t.multiline && n.ignoreCase == t.ignoreCase
                    }
                    if ("object" != typeof n || "object" != typeof t) return !1;
                    for (var i = r.length; i--;)
                        if (r[i] == n) return e[i] == t;
                    var a = n.constructor,
                        o = t.constructor;
                    if (a !== o && !(A.isFunction(a) && a instanceof a && A.isFunction(o) && o instanceof o)) return !1;
                    r.push(n), e.push(t);
                    var c = 0,
                        l = !0;
                    if ("[object Array]" == u) {
                        if (c = n.length, l = c == t.length)
                            for (; c-- && (l = N(n[c], t[c], r, e)););
                    } else {
                        for (var s in n)
                            if (A.has(n, s) && (c++, !(l = A.has(t, s) && N(n[s], t[s], r, e)))) break;
                        if (l) {
                            for (s in t)
                                if (A.has(t, s) && !c--) break;
                            l = !c
                        }
                    }
                    return r.pop(), e.pop(), l
                };
                A.isEqual = function(n, t) {
                    return N(n, t, [], [])
                }, A.isEmpty = function(n) {
                    if (null == n) return !0;
                    if (A.isArray(n) || A.isString(n)) return 0 === n.length;
                    for (var t in n)
                        if (A.has(n, t)) return !1;
                    return !0
                }, A.isElement = function(n) {
                    return !(!n || 1 !== n.nodeType)
                }, A.isArray = w || function(n) {
                    return "[object Array]" == f.call(n)
                }, A.isObject = function(n) {
                    return n === Object(n)
                }, E(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(n) {
                    A["is" + n] = function(t) {
                        return f.call(t) == "[object " + n + "]"
                    }
                }), A.isArguments(arguments) || (A.isArguments = function(n) {
                    return !(!n || !A.has(n, "callee"))
                }), "function" != typeof /./ && (A.isFunction = function(n) {
                    return "function" == typeof n
                }), A.isFinite = function(n) {
                    return isFinite(n) && !isNaN(parseFloat(n))
                }, A.isNaN = function(n) {
                    return A.isNumber(n) && n != +n
                }, A.isBoolean = function(n) {
                    return n === !0 || n === !1 || "[object Boolean]" == f.call(n)
                }, A.isNull = function(n) {
                    return null === n
                }, A.isUndefined = function(n) {
                    return void 0 === n
                }, A.has = function(n, t) {
                    return s.call(n, t)
                }, A.noConflict = function() {
                    return n._ = r, this
                }, A.identity = function(n) {
                    return n
                }, A.times = function(n, t, r) {
                    for (var e = Array(Math.max(0, n)), u = 0; n > u; u++) e[u] = t.call(r, u);
                    return e
                }, A.random = function(n, t) {
                    return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1))
                };
                var q = {
                    escape: {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#x27;"
                    }
                };
                q.unescape = A.invert(q.escape);
                var B = {
                    escape: new RegExp("[" + A.keys(q.escape).join("") + "]", "g"),
                    unescape: new RegExp("(" + A.keys(q.unescape).join("|") + ")", "g")
                };
                A.each(["escape", "unescape"], function(n) {
                    A[n] = function(t) {
                        return null == t ? "" : ("" + t).replace(B[n], function(t) {
                            return q[n][t]
                        })
                    }
                }), A.result = function(n, t) {
                    if (null == n) return void 0;
                    var r = n[t];
                    return A.isFunction(r) ? r.call(n) : r
                }, A.mixin = function(n) {
                    E(A.functions(n), function(t) {
                        var r = A[t] = n[t];
                        A.prototype[t] = function() {
                            var n = [this._wrapped];
                            return o.apply(n, arguments), U.call(this, r.apply(A, n))
                        }
                    })
                };
                var D = 0;
                A.uniqueId = function(n) {
                    var t = ++D + "";
                    return n ? n + t : t
                }, A.templateSettings = {
                    evaluate: /<%([\s\S]+?)%>/g,
                    interpolate: /<%=([\s\S]+?)%>/g,
                    escape: /<%-([\s\S]+?)%>/g
                };
                var P = /(.)^/,
                    z = {
                        "'": "'",
                        "\\": "\\",
                        "\r": "r",
                        "\n": "n",
                        "	": "t",
                        "\u2028": "u2028",
                        "\u2029": "u2029"
                    },
                    C = /\\|'|\r|\n|\t|\u2028|\u2029/g;
                A.template = function(n, t, r) {
                    var e;
                    r = A.defaults({}, r, A.templateSettings);
                    var u = new RegExp([(r.escape || P).source, (r.interpolate || P).source, (r.evaluate || P).source].join("|") + "|$", "g"),
                        i = 0,
                        a = "__p+='";
                    n.replace(u, function(t, r, e, u, o) {
                        return a += n.slice(i, o).replace(C, function(n) {
                            return "\\" + z[n]
                        }), r && (a += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'"), e && (a += "'+\n((__t=(" + e + "))==null?'':__t)+\n'"), u && (a += "';\n" + u + "\n__p+='"), i = o + t.length, t
                    }), a += "';\n", r.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
                    try {
                        e = new Function(r.variable || "obj", "_", a)
                    } catch (o) {
                        throw o.source = a, o
                    }
                    if (t) return e(t, A);
                    var c = function(n) {
                        return e.call(this, n, A)
                    };
                    return c.source = "function(" + (r.variable || "obj") + "){\n" + a + "}", c
                }, A.chain = function(n) {
                    return A(n).chain()
                };
                var U = function(n) {
                    return this._chain ? A(n).chain() : n
                };
                A.mixin(A), E(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
                    var t = u[n];
                    A.prototype[n] = function() {
                        var r = this._wrapped;
                        return t.apply(r, arguments), "shift" != n && "splice" != n || 0 !== r.length || delete r[0], U.call(this, r)
                    }
                }), E(["concat", "join", "slice"], function(n) {
                    var t = u[n];
                    A.prototype[n] = function() {
                        return U.call(this, t.apply(this._wrapped, arguments))
                    }
                }), A.extend(A.prototype, {
                    chain: function() {
                        return this._chain = !0, this
                    },
                    value: function() {
                        return this._wrapped
                    }
                })
            }).call(this)
        }.call(this),
        function() {
            n = t._
        }.call(this), "undefined" == typeof Package && (Package = {}), Package.underscore = {
            _: n
        }
}();

! function() {
    var t = Package.underscore._,
        e;
    (function() {
        e = {
            isClient: !0,
            isServer: !1,
            isCordova: !1
        }, "object" == typeof __meteor_runtime_config__ && __meteor_runtime_config__.PUBLIC_SETTINGS && (e.settings = {
            "public": __meteor_runtime_config__.PUBLIC_SETTINGS
        })
    }).call(this),
        function() {
            function n(t) {
                return t ? e._debug("Exception in callback of async function", t.stack ? t.stack : t) : void 0
            }
            if (e.isServer) var r = Npm.require("fibers/future");
            "object" == typeof __meteor_runtime_config__ && __meteor_runtime_config__.meteorRelease && (e.release = __meteor_runtime_config__.meteorRelease), t.extend(e, {
                _get: function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        if (!(arguments[e] in t)) return void 0;
                        t = t[arguments[e]]
                    }
                    return t
                },
                _ensure: function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        n in t || (t[n] = {}), t = t[n]
                    }
                    return t
                },
                _delete: function(t) {
                    for (var e = [t], n = !0, r = 1; r < arguments.length - 1; r++) {
                        var o = arguments[r];
                        if (!(o in t)) {
                            n = !1;
                            break
                        }
                        if (t = t[o], "object" != typeof t) break;
                        e.push(t)
                    }
                    for (var r = e.length - 1; r >= 0; r--) {
                        var o = arguments[r + 1];
                        if (n) n = !1;
                        else
                            for (var i in e[r][o]) return;
                        delete e[r][o]
                    }
                },
                wrapAsync: function(o, i) {
                    return function() {
                        for (var a = i || this, u = t.toArray(arguments), s, c = u.length - 1; c >= 0; --c) {
                            var l = u[c],
                                f = typeof l;
                            if ("undefined" !== f) {
                                "function" === f && (s = l);
                                break
                            }
                        }
                        if (!s) {
                            if (e.isClient) s = n;
                            else {
                                var _ = new r;
                                s = _.resolver()
                            }++c
                        }
                        u[c] = e.bindEnvironment(s);
                        var p = o.apply(a, u);
                        return _ ? _.wait() : p
                    }
                },
                _inherits: function(e, n) {
                    for (var r in n) t.has(n, r) && (e[r] = n[r]);
                    var o = function() {
                        this.constructor = e
                    };
                    return o.prototype = n.prototype, e.prototype = new o, e.__super__ = n.prototype, e
                }
            });
            var o = !1;
            e._wrapAsync = function(t, n) {
                return o || (e._debug("Meteor._wrapAsync has been renamed to Meteor.wrapAsync"), o = !0), e.wrapAsync.apply(e, arguments)
            }
        }.call(this),
        function() {
            "use strict";

            function t() {
                if (o.setImmediate) {
                    var t = function(t) {
                        o.setImmediate(t)
                    };
                    return t.implementation = "setImmediate", t
                }
                return null
            }

            function n() {
                function t(t, e) {
                    return "string" == typeof t && t.substring(0, e.length) === e
                }

                function e(e) {
                    if (e.source === o && t(e.data, u)) {
                        var n = e.data.substring(u.length);
                        try {
                            a[n] && a[n]()
                        } finally {
                            delete a[n]
                        }
                    }
                }
                if (!o.postMessage || o.importScripts) return null;
                var n = !0,
                    r = o.onmessage;
                if (o.onmessage = function() {
                        n = !1
                    }, o.postMessage("", "*"), o.onmessage = r, !n) return null;
                var i = 0,
                    a = {},
                    u = "Meteor._setImmediate." + Math.random() + ".";
                o.addEventListener ? o.addEventListener("message", e, !1) : o.attachEvent("onmessage", e);
                var s = function(t) {
                    ++i, a[i] = t, o.postMessage(u + i, "*")
                };
                return s.implementation = "postMessage", s
            }

            function r() {
                var t = function(t) {
                    o.setTimeout(t, 0)
                };
                return t.implementation = "setTimeout", t
            }
            var o = this;
            e._setImmediate = t() || n() || r()
        }.call(this),
        function() {
            var n = function(t) {
                    if (Package.ddp) {
                        var e = Package.ddp.DDP._CurrentInvocation;
                        if (e.get() && e.get().isSimulation) throw new Error("Can't set timers inside simulations");
                        return function() {
                            e.withValue(null, t)
                        }
                    }
                    return t
                },
                r = function(t, r) {
                    return e.bindEnvironment(n(r), t)
                };
            t.extend(e, {
                setTimeout: function(t, e) {
                    return setTimeout(r("setTimeout callback", t), e)
                },
                setInterval: function(t, e) {
                    return setInterval(r("setInterval callback", t), e)
                },
                clearInterval: function(t) {
                    return clearInterval(t)
                },
                clearTimeout: function(t) {
                    return clearTimeout(t)
                },
                defer: function(t) {
                    e._setImmediate(r("defer callback", t))
                }
            })
        }.call(this),
        function() {
            e.makeErrorType = function(t, n) {
                var r = function() {
                    var e = this;
                    if (Error.captureStackTrace) Error.captureStackTrace(e, r);
                    else {
                        var o = new Error;
                        o.__proto__ = r.prototype, o instanceof r && (e = o)
                    }
                    return n.apply(e, arguments), e.errorType = t, e
                };
                return e._inherits(r, Error), r
            }, e.Error = e.makeErrorType("Meteor.Error", function(t, e, n) {
                var r = this;
                r.error = t, r.reason = e, r.details = n, r.message = r.reason ? r.reason + " [" + r.error + "]" : "[" + r.error + "]"
            }), e.Error.prototype.clone = function() {
                var t = this;
                return new e.Error(t.error, t.reason, t.details)
            }
        }.call(this),
        function() {
            e._noYieldsAllowed = function(t) {
                return t()
            }, e._SynchronousQueue = function() {
                var t = this;
                t._tasks = [], t._running = !1, t._runTimeout = null
            }, t.extend(e._SynchronousQueue.prototype, {
                runTask: function(n) {
                    var r = this;
                    if (!r.safeToRunTask()) throw new Error("Could not synchronously run a task from a running task");
                    r._tasks.push(n);
                    var o = r._tasks;
                    r._tasks = [], r._running = !0, r._runTimeout && (clearTimeout(r._runTimeout), r._runTimeout = null);
                    try {
                        for (; !t.isEmpty(o);) {
                            var i = o.shift();
                            try {
                                i()
                            } catch (a) {
                                if (t.isEmpty(o)) throw a;
                                e._debug("Exception in queued task: " + a.stack)
                            }
                        }
                    } finally {
                        r._running = !1
                    }
                },
                queueTask: function(e) {
                    var n = this;
                    n._tasks.push(e), n._runTimeout || (n._runTimeout = setTimeout(t.bind(n.flush, n), 0))
                },
                flush: function() {
                    var t = this;
                    t.runTask(function() {})
                },
                drain: function() {
                    var e = this;
                    if (e.safeToRunTask())
                        for (; !t.isEmpty(e._tasks);) e.flush()
                },
                safeToRunTask: function() {
                    var t = this;
                    return !t._running
                }
            })
        }.call(this),
        function() {
            var t = [],
                n = !e.isCordova && ("loaded" === document.readyState || "complete" == document.readyState),
                r = 1,
                o = function() {
                    if (r--, !(r > 0)) {
                        n = !0;
                        var o = function() {
                            if (e.isCordova && (!cordova.plugins || !cordova.plugins.CordovaUpdate)) return void e.setTimeout(o, 20);
                            for (; t.length;) t.shift()()
                        };
                        o()
                    }
                };
            document.addEventListener ? (document.addEventListener("DOMContentLoaded", o, !1), e.isCordova && (r++, document.addEventListener("deviceready", o, !1)), window.addEventListener("load", o, !1)) : (document.attachEvent("onreadystatechange", function() {
                "complete" === document.readyState && o()
            }), window.attachEvent("load", o)), e.startup = function(r) {
                var o = !document.addEventListener && document.documentElement.doScroll;
                if (o && window === top) {
                    try {
                        o("left")
                    } catch (i) {
                        return void setTimeout(function() {
                            e.startup(r)
                        }, 50)
                    }
                    r()
                } else n ? r() : t.push(r)
            }
        }.call(this),
        function() {
            var t = 0;
            e._debug = function() {
                if (t) return void t--;
                if ("undefined" != typeof console && "undefined" != typeof console.log)
                    if (0 == arguments.length) console.log("");
                    else if ("function" == typeof console.log.apply) {
                    for (var e = !0, n = 0; n < arguments.length; n++) "string" != typeof arguments[n] && (e = !1);
                    e ? console.log.apply(console, [Array.prototype.join.call(arguments, " ")]) : console.log.apply(console, arguments)
                } else if ("function" == typeof Function.prototype.bind) {
                    var r = Function.prototype.bind.call(console.log, console);
                    r.apply(console, arguments)
                } else Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments))
            }, e._suppress_log = function(e) {
                t += e
            }, e._supressed_log_expected = function() {
                return 0 !== t
            }
        }.call(this),
        function() {
            var n = 0,
                r = [];
            e.EnvironmentVariable = function() {
                this.slot = n++
            }, t.extend(e.EnvironmentVariable.prototype, {
                get: function() {
                    return r[this.slot]
                },
                getOrNullIfOutsideFiber: function() {
                    return this.get()
                },
                withValue: function(t, e) {
                    var n = r[this.slot];
                    try {
                        r[this.slot] = t;
                        var o = e()
                    } finally {
                        r[this.slot] = n
                    }
                    return o
                }
            }), e.bindEnvironment = function(n, o, i) {
                var a = t.clone(r);
                if (!o || "string" == typeof o) {
                    var u = o || "callback of async function";
                    o = function(t) {
                        e._debug("Exception in " + u + ":", t && t.stack || t)
                    }
                }
                return function() {
                    var e = r;
                    try {
                        r = a;
                        var u = n.apply(i, t.toArray(arguments))
                    } catch (s) {
                        o(s)
                    } finally {
                        r = e
                    }
                    return u
                }
            }, e._nodeCodeMustBeInFiber = function() {}
        }.call(this),
        function() {
            e.absoluteUrl = function(n, r) {
                r || "object" != typeof n || (r = n, n = void 0), r = t.extend({}, e.absoluteUrl.defaultOptions, r || {});
                var o = r.rootUrl;
                if (!o) throw new Error("Must pass options.rootUrl or set ROOT_URL in the server environment");
                return /^http[s]?:\/\//i.test(o) || (o = "http://" + o), /\/$/.test(o) || (o += "/"), n && (o += n), r.secure && /^http:/.test(o) && !/http:\/\/localhost[:\/]/.test(o) && !/http:\/\/127\.0\.0\.1[:\/]/.test(o) && (o = o.replace(/^http:/, "https:")), r.replaceLocalhost && (o = o.replace(/^http:\/\/localhost([:\/].*)/, "http://127.0.0.1$1")), o
            }, e.absoluteUrl.defaultOptions = {}, "object" == typeof __meteor_runtime_config__ && __meteor_runtime_config__.ROOT_URL && (e.absoluteUrl.defaultOptions.rootUrl = __meteor_runtime_config__.ROOT_URL), e._relativeToSiteRootUrl = function(t) {
                return "object" == typeof __meteor_runtime_config__ && "/" === t.substr(0, 1) && (t = (__meteor_runtime_config__.ROOT_URL_PATH_PREFIX || "") + t), t
            }
        }.call(this), "undefined" == typeof Package && (Package = {}), Package.meteor = {
            Meteor: e
        }
}();

! function() {
    var Meteor = Package.meteor.Meteor,
        JSON;
    (function() {
        window.JSON && (JSON = window.JSON)
    }).call(this),
        function() {
            "object" != typeof JSON && (JSON = {}),
                function() {
                    "use strict";

                    function f(t) {
                        return 10 > t ? "0" + t : t
                    }

                    function quote(t) {
                        return escapable.lastIndex = 0, escapable.test(t) ? '"' + t.replace(escapable, function(t) {
                            var e = meta[t];
                            return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                        }) + '"' : '"' + t + '"'
                    }

                    function str(t, e) {
                        var n, r, o, f, u = gap,
                            i, a = e[t];
                        switch (a && "object" == typeof a && "function" == typeof a.toJSON && (a = a.toJSON(t)), "function" == typeof rep && (a = rep.call(e, t, a)), typeof a) {
                            case "string":
                                return quote(a);
                            case "number":
                                return isFinite(a) ? String(a) : "null";
                            case "boolean":
                            case "null":
                                return String(a);
                            case "object":
                                if (!a) return "null";
                                if (gap += indent, i = [], "[object Array]" === Object.prototype.toString.apply(a)) {
                                    for (f = a.length, n = 0; f > n; n += 1) i[n] = str(n, a) || "null";
                                    return o = 0 === i.length ? "[]" : gap ? "[\n" + gap + i.join(",\n" + gap) + "\n" + u + "]" : "[" + i.join(",") + "]", gap = u, o
                                }
                                if (rep && "object" == typeof rep)
                                    for (f = rep.length, n = 0; f > n; n += 1) "string" == typeof rep[n] && (r = rep[n], o = str(r, a), o && i.push(quote(r) + (gap ? ": " : ":") + o));
                                else
                                    for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (o = str(r, a), o && i.push(quote(r) + (gap ? ": " : ":") + o));
                                return o = 0 === i.length ? "{}" : gap ? "{\n" + gap + i.join(",\n" + gap) + "\n" + u + "}" : "{" + i.join(",") + "}", gap = u, o
                        }
                    }
                    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(t) {
                        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
                    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(t) {
                        return this.valueOf()
                    });
                    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                        gap, indent, meta = {
                            "\b": "\\b",
                            "	": "\\t",
                            "\n": "\\n",
                            "\f": "\\f",
                            "\r": "\\r",
                            '"': '\\"',
                            "\\": "\\\\"
                        },
                        rep;
                    "function" != typeof JSON.stringify && (JSON.stringify = function(t, e, n) {
                        var r;
                        if (gap = "", indent = "", "number" == typeof n)
                            for (r = 0; n > r; r += 1) indent += " ";
                        else "string" == typeof n && (indent = n);
                        if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify");
                        return str("", {
                            "": t
                        })
                    }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
                        function walk(t, e) {
                            var n, r, o = t[e];
                            if (o && "object" == typeof o)
                                for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (r = walk(o, n), void 0 !== r ? o[n] = r : delete o[n]);
                            return reviver.call(t, e, o)
                        }
                        var j;
                        if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(t) {
                                return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                            })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                            "": j
                        }, "") : j;
                        throw new SyntaxError("JSON.parse")
                    })
                }()
        }.call(this), "undefined" == typeof Package && (Package = {}), Package.json = {
            JSON: JSON
        }
}();

! function() {
    var n = Package.meteor.Meteor,
        r;
    (function() {
        for (var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", e = {}, a = 0; a < n.length; a++) e[n.charAt(a)] = a;
        r = {}, r.encode = function(n) {
            if ("string" == typeof n) {
                var e = n;
                n = r.newBinary(e.length);
                for (var a = 0; a < e.length; a++) {
                    var l = e.charCodeAt(a);
                    if (l > 255) throw new Error("Not ascii. Base64.encode can only take ascii strings.");
                    n[a] = l
                }
            }
            for (var u = [], i = null, o = null, c = null, s = null, a = 0; a < n.length; a++) switch (a % 3) {
                case 0:
                    i = n[a] >> 2 & 63, o = (3 & n[a]) << 4;
                    break;
                case 1:
                    o |= n[a] >> 4 & 15, c = (15 & n[a]) << 2;
                    break;
                case 2:
                    c |= n[a] >> 6 & 3, s = 63 & n[a], u.push(t(i)), u.push(t(o)), u.push(t(c)), u.push(t(s)), i = null, o = null, c = null, s = null
            }
            return null != i && (u.push(t(i)), u.push(t(o)), u.push(null == c ? "=" : t(c)), null == s && u.push("=")), u.join("")
        };
        var t = function(r) {
                return n.charAt(r)
            },
            l = function(n) {
                return "=" === n ? -1 : e[n]
            };
        r.newBinary = function(n) {
            if ("undefined" == typeof Uint8Array || "undefined" == typeof ArrayBuffer) {
                for (var r = [], e = 0; n > e; e++) r.push(0);
                return r.$Uint8ArrayPolyfill = !0, r
            }
            return new Uint8Array(new ArrayBuffer(n))
        }, r.decode = function(n) {
            var e = Math.floor(3 * n.length / 4);
            "=" == n.charAt(n.length - 1) && (e--, "=" == n.charAt(n.length - 2) && e--);
            for (var a = r.newBinary(e), t = null, u = null, i = null, o = 0, c = 0; c < n.length; c++) {
                var s = n.charAt(c),
                    f = l(s);
                switch (c % 4) {
                    case 0:
                        if (0 > f) throw new Error("invalid base64 string");
                        t = f << 2;
                        break;
                    case 1:
                        if (0 > f) throw new Error("invalid base64 string");
                        t |= f >> 4, a[o++] = t, u = (15 & f) << 4;
                        break;
                    case 2:
                        f >= 0 && (u |= f >> 2, a[o++] = u, i = (3 & f) << 6);
                        break;
                    case 3:
                        f >= 0 && (a[o++] = i | f)
                }
            }
            return a
        }
    }).call(this), "undefined" == typeof Package && (Package = {}), Package.base64 = {
        Base64: r
    }
}();

! function() {
    var n = Package.meteor.Meteor,
        e = Package.json.JSON,
        t = Package.underscore._,
        r = Package.base64.Base64,
        u, a;
    (function() {
        u = {}, a = {};
        var i = {};
        u.addType = function(n, e) {
            if (t.has(i, n)) throw new Error("Type " + n + " already present");
            i[n] = e
        };
        var o = function(n) {
                return t.isNaN(n) || n === 1 / 0 || n === -(1 / 0)
            },
            f = [{
                matchJSONValue: function(n) {
                    return t.has(n, "$date") && 1 === t.size(n)
                },
                matchObject: function(n) {
                    return n instanceof Date
                },
                toJSONValue: function(n) {
                    return {
                        $date: n.getTime()
                    }
                },
                fromJSONValue: function(n) {
                    return new Date(n.$date)
                }
            }, {
                matchJSONValue: function(n) {
                    return t.has(n, "$InfNaN") && 1 === t.size(n)
                },
                matchObject: o,
                toJSONValue: function(n) {
                    var e;
                    return e = t.isNaN(n) ? 0 : n === 1 / 0 ? 1 : -1, {
                        $InfNaN: e
                    }
                },
                fromJSONValue: function(n) {
                    return n.$InfNaN / 0
                }
            }, {
                matchJSONValue: function(n) {
                    return t.has(n, "$binary") && 1 === t.size(n)
                },
                matchObject: function(n) {
                    return "undefined" != typeof Uint8Array && n instanceof Uint8Array || n && t.has(n, "$Uint8ArrayPolyfill")
                },
                toJSONValue: function(n) {
                    return {
                        $binary: r.encode(n)
                    }
                },
                fromJSONValue: function(n) {
                    return r.decode(n.$binary)
                }
            }, {
                matchJSONValue: function(n) {
                    return t.has(n, "$escape") && 1 === t.size(n)
                },
                matchObject: function(n) {
                    return t.isEmpty(n) || t.size(n) > 2 ? !1 : t.any(f, function(e) {
                        return e.matchJSONValue(n)
                    })
                },
                toJSONValue: function(n) {
                    var e = {};
                    return t.each(n, function(n, t) {
                        e[t] = u.toJSONValue(n)
                    }), {
                        $escape: e
                    }
                },
                fromJSONValue: function(n) {
                    var e = {};
                    return t.each(n.$escape, function(n, t) {
                        e[t] = u.fromJSONValue(n)
                    }), e
                }
            }, {
                matchJSONValue: function(n) {
                    return t.has(n, "$type") && t.has(n, "$value") && 2 === t.size(n)
                },
                matchObject: function(n) {
                    return u._isCustomType(n)
                },
                toJSONValue: function(e) {
                    var t = n._noYieldsAllowed(function() {
                        return e.toJSONValue()
                    });
                    return {
                        $type: e.typeName(),
                        $value: t
                    }
                },
                fromJSONValue: function(e) {
                    var r = e.$type;
                    if (!t.has(i, r)) throw new Error("Custom EJSON type " + r + " is not defined");
                    var u = i[r];
                    return n._noYieldsAllowed(function() {
                        return u(e.$value)
                    })
                }
            }];
        u._isCustomType = function(n) {
            return n && "function" == typeof n.toJSONValue && "function" == typeof n.typeName && t.has(i, n.typeName())
        };
        var c = u._adjustTypesToJSONValue = function(n) {
                if (null === n) return null;
                var e = l(n);
                return void 0 !== e ? e : "object" != typeof n ? n : (t.each(n, function(e, t) {
                    if ("object" == typeof e || void 0 === e || o(e)) {
                        var r = l(e);
                        return r ? void(n[t] = r) : void c(e)
                    }
                }), n)
            },
            l = function(n) {
                for (var e = 0; e < f.length; e++) {
                    var t = f[e];
                    if (t.matchObject(n)) return t.toJSONValue(n)
                }
                return void 0
            };
        u.toJSONValue = function(n) {
            var e = l(n);
            return void 0 !== e ? e : ("object" == typeof n && (n = u.clone(n), c(n)), n)
        };
        var s = u._adjustTypesFromJSONValue = function(n) {
                if (null === n) return null;
                var e = y(n);
                return e !== n ? e : "object" != typeof n ? n : (t.each(n, function(e, t) {
                    if ("object" == typeof e) {
                        var r = y(e);
                        if (e !== r) return void(n[t] = r);
                        s(e)
                    }
                }), n)
            },
            y = function(n) {
                if ("object" == typeof n && null !== n && t.size(n) <= 2 && t.all(n, function(n, e) {
                        return "string" == typeof e && "$" === e.substr(0, 1)
                    }))
                    for (var e = 0; e < f.length; e++) {
                        var r = f[e];
                        if (r.matchJSONValue(n)) return r.fromJSONValue(n)
                    }
                return n
            };
        u.fromJSONValue = function(n) {
            var e = y(n);
            return e === n && "object" == typeof n ? (n = u.clone(n), s(n), n) : e
        }, u.stringify = function(n, t) {
            var r = u.toJSONValue(n);
            return t && (t.canonical || t.indent) ? u._canonicalStringify(r, t) : e.stringify(r)
        }, u.parse = function(n) {
            if ("string" != typeof n) throw new Error("EJSON.parse argument should be a string");
            return u.fromJSONValue(e.parse(n))
        }, u.isBinary = function(n) {
            return !!("undefined" != typeof Uint8Array && n instanceof Uint8Array || n && n.$Uint8ArrayPolyfill)
        }, u.equals = function(n, e, r) {
            var a, i = !(!r || !r.keyOrderSensitive);
            if (n === e) return !0;
            if (t.isNaN(n) && t.isNaN(e)) return !0;
            if (!n || !e) return !1;
            if ("object" != typeof n || "object" != typeof e) return !1;
            if (n instanceof Date && e instanceof Date) return n.valueOf() === e.valueOf();
            if (u.isBinary(n) && u.isBinary(e)) {
                if (n.length !== e.length) return !1;
                for (a = 0; a < n.length; a++)
                    if (n[a] !== e[a]) return !1;
                return !0
            }
            if ("function" == typeof n.equals) return n.equals(e, r);
            if ("function" == typeof e.equals) return e.equals(n, r);
            if (n instanceof Array) {
                if (!(e instanceof Array)) return !1;
                if (n.length !== e.length) return !1;
                for (a = 0; a < n.length; a++)
                    if (!u.equals(n[a], e[a], r)) return !1;
                return !0
            }
            switch (u._isCustomType(n) + u._isCustomType(e)) {
                case 1:
                    return !1;
                case 2:
                    return u.equals(u.toJSONValue(n), u.toJSONValue(e))
            }
            var o;
            if (i) {
                var f = [];
                return t.each(e, function(n, e) {
                    f.push(e)
                }), a = 0, o = t.all(n, function(n, t) {
                    return a >= f.length ? !1 : t !== f[a] ? !1 : u.equals(n, e[f[a]], r) ? (a++, !0) : !1
                }), o && a === f.length
            }
            return a = 0, o = t.all(n, function(n, i) {
                return t.has(e, i) && u.equals(n, e[i], r) ? (a++, !0) : !1
            }), o && t.size(e) === a
        }, u.clone = function(n) {
            var e;
            if ("object" != typeof n) return n;
            if (null === n) return null;
            if (n instanceof Date) return new Date(n.getTime());
            if (n instanceof RegExp) return n;
            if (u.isBinary(n)) {
                e = u.newBinary(n.length);
                for (var r = 0; r < n.length; r++) e[r] = n[r];
                return e
            }
            if (t.isArray(n) || t.isArguments(n)) {
                for (e = [], r = 0; r < n.length; r++) e[r] = u.clone(n[r]);
                return e
            }
            return "function" == typeof n.clone ? n.clone() : u._isCustomType(n) ? u.fromJSONValue(u.clone(u.toJSONValue(n)), !0) : (e = {}, t.each(n, function(n, t) {
                e[t] = u.clone(n)
            }), e)
        }, u.newBinary = r.newBinary
    }).call(this),
        function() {
            function n(n) {
                return e.stringify(n)
            }
            var r = function(e, u, a, i, o) {
                var f, c, l, s, y = i,
                    h, N = u[e];
                switch (typeof N) {
                    case "string":
                        return n(N);
                    case "number":
                        return isFinite(N) ? String(N) : "null";
                    case "boolean":
                        return String(N);
                    case "object":
                        if (!N) return "null";
                        if (y = i + a, h = [], t.isArray(N) || t.isArguments(N)) {
                            for (s = N.length, f = 0; s > f; f += 1) h[f] = r(f, N, a, y, o) || "null";
                            return l = 0 === h.length ? "[]" : y ? "[\n" + y + h.join(",\n" + y) + "\n" + i + "]" : "[" + h.join(",") + "]"
                        }
                        var p = t.keys(N);
                        return o && (p = p.sort()), t.each(p, function(e) {
                            l = r(e, N, a, y, o), l && h.push(n(e) + (y ? ": " : ":") + l)
                        }), l = 0 === h.length ? "{}" : y ? "{\n" + y + h.join(",\n" + y) + "\n" + i + "}" : "{" + h.join(",") + "}"
                }
            };
            u._canonicalStringify = function(n, e) {
                if (e = t.extend({
                        indent: "",
                        canonical: !1
                    }, e), e.indent === !0) e.indent = "  ";
                else if ("number" == typeof e.indent) {
                    for (var u = "", a = 0; a < e.indent; a++) u += " ";
                    e.indent = u
                }
                return r("", {
                    "": n
                }, e.indent, "", e.canonical)
            }
        }.call(this), "undefined" == typeof Package && (Package = {}), Package.ejson = {
            EJSON: u,
            EJSONTest: a
        }
}();

! function() {
    var e = Package.meteor.Meteor,
        t = Package.underscore._,
        r = Package.ejson.EJSON,
        n, i;
    (function() {
        var o = new e.EnvironmentVariable;
        n = function(e, t) {
            var r = o.getOrNullIfOutsideFiber();
            r && r.checking(e);
            try {
                l(e, t)
            } catch (n) {
                throw n instanceof i.Error && n.path && (n.message += " in field " + n.path), n
            }
        }, i = {
            Optional: function(e) {
                return new a(e)
            },
            OneOf: function() {
                return new c(t.toArray(arguments))
            },
            Any: ["__any__"],
            Where: function(e) {
                return new f(e)
            },
            ObjectIncluding: function(e) {
                return new s(e)
            },
            ObjectWithValues: function(e) {
                return new h(e)
            },
            Integer: ["__integer__"],
            Error: e.makeErrorType("Match.Error", function(t) {
                this.message = "Match error: " + t, this.path = "", this.sanitizedError = new e.Error(400, "Match failed")
            }),
            test: function(e, t) {
                try {
                    return l(e, t), !0
                } catch (r) {
                    if (r instanceof i.Error) return !1;
                    throw r
                }
            },
            _failIfArgumentsAreNotAllChecked: function(e, t, r, n) {
                var i = new p(r, n),
                    a = o.withValue(i, function() {
                        return e.apply(t, r)
                    });
                return i.throwUnlessAllArgumentsHaveBeenChecked(), a
            }
        };
        var a = function(e) {
                this.pattern = e
            },
            c = function(e) {
                if (t.isEmpty(e)) throw new Error("Must provide at least one choice to Match.OneOf");
                this.choices = e
            },
            f = function(e) {
                this.condition = e
            },
            s = function(e) {
                this.pattern = e
            },
            h = function(e) {
                this.pattern = e
            },
            u = [
                [String, "string"],
                [Number, "number"],
                [Boolean, "boolean"],
                [void 0, "undefined"]
            ],
            l = function(e, n) {
                if (n !== i.Any) {
                    for (var o = 0; o < u.length; ++o)
                        if (n === u[o][0]) {
                            if (typeof e === u[o][1]) return;
                            throw new i.Error("Expected " + u[o][1] + ", got " + typeof e)
                        }
                    if (null === n) {
                        if (null === e) return;
                        throw new i.Error("Expected null, got " + r.stringify(e))
                    }
                    if ("string" == typeof n || "number" == typeof n) {
                        if (e === n) return;
                        throw new i.Error("Expected " + n + ", got " + r.stringify(e))
                    }
                    if (n === i.Integer) {
                        if ("number" == typeof e && (0 | e) === e) return;
                        throw new i.Error("Expected Integer, got " + (e instanceof Object ? r.stringify(e) : e))
                    }
                    if (n === Object && (n = i.ObjectIncluding({})), n instanceof Array) {
                        if (1 !== n.length) throw Error("Bad pattern: arrays must have one type element" + r.stringify(n));
                        if (!t.isArray(e) && !t.isArguments(e)) throw new i.Error("Expected array, got " + r.stringify(e));
                        return void t.each(e, function(e, t) {
                            try {
                                l(e, n[0])
                            } catch (r) {
                                throw r instanceof i.Error && (r.path = w(t, r.path)), r
                            }
                        })
                    }
                    if (n instanceof f) {
                        if (n.condition(e)) return;
                        throw new i.Error("Failed Match.Where validation")
                    }
                    if (n instanceof a && (n = i.OneOf(void 0, n.pattern)), n instanceof c) {
                        for (var o = 0; o < n.choices.length; ++o) try {
                            return void l(e, n.choices[o])
                        } catch (p) {
                            if (!(p instanceof i.Error)) throw p
                        }
                        throw new i.Error("Failed Match.OneOf or Match.Optional validation")
                    }
                    if (n instanceof Function) {
                        if (e instanceof n) return;
                        throw new i.Error("Expected " + (n.name || "particular constructor"))
                    }
                    var g = !1,
                        d;
                    if (n instanceof s && (g = !0, n = n.pattern), n instanceof h && (g = !0, d = [n.pattern], n = {}), "object" != typeof n) throw Error("Bad pattern: unknown pattern type");
                    if ("object" != typeof e) throw new i.Error("Expected object, got " + typeof e);
                    if (null === e) throw new i.Error("Expected object, got null");
                    if (e.constructor !== Object) throw new i.Error("Expected plain object");
                    var y = {},
                        E = {};
                    t.each(n, function(e, t) {
                        e instanceof a ? E[t] = e.pattern : y[t] = e
                    }), t.each(e, function(e, r) {
                        try {
                            if (t.has(y, r)) l(e, y[r]), delete y[r];
                            else if (t.has(E, r)) l(e, E[r]);
                            else {
                                if (!g) throw new i.Error("Unknown key");
                                d && l(e, d[0])
                            }
                        } catch (n) {
                            throw n instanceof i.Error && (n.path = w(r, n.path)), n
                        }
                    }), t.each(y, function(e, t) {
                        throw new i.Error("Missing key '" + t + "'")
                    })
                }
            },
            p = function(e, r) {
                var n = this;
                n.args = t.clone(e), n.args.reverse(), n.description = r
            };
        t.extend(p.prototype, {
            checking: function(e) {
                var r = this;
                r._checkingOneValue(e) || (t.isArray(e) || t.isArguments(e)) && t.each(e, t.bind(r._checkingOneValue, r))
            },
            _checkingOneValue: function(e) {
                for (var r = this, n = 0; n < r.args.length; ++n)
                    if (e === r.args[n] || t.isNaN(e) && t.isNaN(r.args[n])) return r.args.splice(n, 1), !0;
                return !1
            },
            throwUnlessAllArgumentsHaveBeenChecked: function() {
                var e = this;
                if (!t.isEmpty(e.args)) throw new Error("Did not check() all arguments during " + e.description)
            }
        });
        var g = ["do", "if", "in", "for", "let", "new", "try", "var", "case", "else", "enum", "eval", "false", "null", "this", "true", "void", "with", "break", "catch", "class", "const", "super", "throw", "while", "yield", "delete", "export", "import", "public", "return", "static", "switch", "typeof", "default", "extends", "finally", "package", "private", "continue", "debugger", "function", "arguments", "interface", "protected", "implements", "instanceof"],
            w = function(e, r) {
                return "number" == typeof e || e.match(/^[0-9]+$/) ? e = "[" + e + "]" : (!e.match(/^[a-z_$][0-9a-z_$]*$/i) || t.contains(g, e)) && (e = JSON.stringify([e])), r && "[" !== r[0] ? e + "." + r : e + r
            }
    }).call(this), "undefined" == typeof Package && (Package = {}), Package.check = {
        check: n,
        Match: i
    }
}();

! function() {
    var e = Package.meteor.Meteor,
        n = Package.underscore._,
        t;
    (function() {
        if (e.isServer) var n = Npm.require("crypto");
        var r = function() {
                function e() {
                    var e = 4022871197,
                        n = function(n) {
                            n = n.toString();
                            for (var t = 0; t < n.length; t++) {
                                e += n.charCodeAt(t);
                                var r = .02519603282416938 * e;
                                e = r >>> 0, r -= e, r *= e, e = r >>> 0, r -= e, e += 4294967296 * r
                            }
                            return 2.3283064365386963e-10 * (e >>> 0)
                        };
                    return n.version = "Mash 0.9", n
                }
                return function(n) {
                    var t = 0,
                        r = 0,
                        o = 0,
                        i = 1;
                    0 == n.length && (n = [+new Date]);
                    var a = e();
                    t = a(" "), r = a(" "), o = a(" ");
                    for (var u = 0; u < n.length; u++) t -= a(n[u]), 0 > t && (t += 1), r -= a(n[u]), 0 > r && (r += 1), o -= a(n[u]), 0 > o && (o += 1);
                    a = null;
                    var d = function() {
                        var e = 2091639 * t + 2.3283064365386963e-10 * i;
                        return t = r, r = o, o = e - (i = 0 | e)
                    };
                    return d.uint32 = function() {
                        return 4294967296 * d()
                    }, d.fract53 = function() {
                        return d() + 1.1102230246251565e-16 * (2097152 * d() | 0)
                    }, d.version = "Alea 0.9", d.args = n, d
                }(Array.prototype.slice.call(arguments))
            },
            o = "23456789ABCDEFGHJKLMNPQRSTWXYZabcdefghijkmnopqrstuvwxyz",
            i = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_",
            a = function(e) {
                var n = this;
                void 0 !== e && (n.alea = r.apply(null, e))
            };
        a.prototype.fraction = function() {
            var e = this;
            if (e.alea) return e.alea();
            if (n) {
                var t = parseInt(e.hexString(8), 16);
                return 2.3283064365386963e-10 * t
            }
            if ("undefined" != typeof window && window.crypto && window.crypto.getRandomValues) {
                var r = new Uint32Array(1);
                return window.crypto.getRandomValues(r), 2.3283064365386963e-10 * r[0]
            }
            throw new Error("No random generator available")
        }, a.prototype.hexString = function(e) {
            var t = this;
            if (n && !t.alea) {
                var r = Math.ceil(e / 2),
                    o;
                try {
                    o = n.randomBytes(r)
                } catch (i) {
                    o = n.pseudoRandomBytes(r)
                }
                var a = o.toString("hex");
                return a.substring(0, e)
            }
            for (var u = [], d = 0; e > d; ++d) u.push(t.choice("0123456789abcdef"));
            return u.join("")
        }, a.prototype._randomString = function(e, n) {
            for (var t = this, r = [], o = 0; e > o; o++) r[o] = t.choice(n);
            return r.join("")
        }, a.prototype.id = function(e) {
            var n = this;
            return void 0 === e && (e = 17), n._randomString(e, o)
        }, a.prototype.secret = function(e) {
            var n = this;
            return void 0 === e && (e = 43), n._randomString(e, i)
        }, a.prototype.choice = function(e) {
            var n = Math.floor(this.fraction() * e.length);
            return "string" == typeof e ? e.substr(n, 1) : e[n]
        };
        var u = "undefined" != typeof window && window.innerHeight || "undefined" != typeof document && document.documentElement && document.documentElement.clientHeight || "undefined" != typeof document && document.body && document.body.clientHeight || 1,
            d = "undefined" != typeof window && window.innerWidth || "undefined" != typeof document && document.documentElement && document.documentElement.clientWidth || "undefined" != typeof document && document.body && document.body.clientWidth || 1,
            c = "undefined" != typeof navigator && navigator.userAgent || "";
        t = n || "undefined" != typeof window && window.crypto && window.crypto.getRandomValues ? new a : new a([new Date, u, d, c, Math.random()]), t.createWithSeeds = function() {
            if (0 === arguments.length) throw new Error("No seeds were provided");
            return new a(arguments)
        }
    }).call(this),
        function() {
            e.uuid = function() {
                for (var e = "0123456789abcdef", n = [], r = 0; 36 > r; r++) n[r] = t.choice(e);
                n[14] = "4", n[19] = e.substr(3 & parseInt(n[19], 16) | 8, 1), n[8] = n[13] = n[18] = n[23] = "-";
                var o = n.join("");
                return o
            }
        }.call(this), "undefined" == typeof Package && (Package = {}), Package.random = {
            Random: t
        }
}();

! function() {
    var n = Package.meteor.Meteor,
        t, e;
    (function() {
        t = {}, t.active = !1, t.currentComputation = null, t._computations = {};
        var e = function(n) {
                t.currentComputation = n, t.active = !!n
            },
            r = function() {
                return "undefined" != typeof n ? n._debug : "undefined" != typeof console && console.error ? function() {
                    console.error.apply(console, arguments)
                } : function() {}
            },
            o = function(t) {
                "undefined" != typeof n && n._supressed_log_expected() && n._suppress_log(t - 1)
            },
            i = function(n, t) {
                if (d) throw t;
                var e = ["Exception from Tracker " + n + " function:"];
                if (t.stack && t.message && t.name) {
                    var i = t.stack.indexOf(t.message);
                    if (0 > i || i > t.name.length + 2) {
                        var a = t.name + ": " + t.message;
                        e.push(a)
                    }
                }
                e.push(t.stack), o(e.length);
                for (var u = 0; u < e.length; u++) r()(e[u])
            },
            a = function(t) {
                return "undefined" == typeof n || n.isClient ? t : function() {
                    var e = arguments;
                    n._noYieldsAllowed(function() {
                        t.apply(null, e)
                    })
                }
            },
            u = 1,
            c = [],
            s = !1,
            f = !1,
            p = !1,
            d = !1,
            l = [],
            h = function() {
                s || ("undefined" != typeof n ? n._setImmediate(t._runFlush) : setTimeout(t._runFlush, 0), s = !0)
            },
            v = !1;
        t.Computation = function(n, e, r) {
            if (!v) throw new Error("Tracker.Computation constructor is private; use Tracker.autorun");
            v = !1;
            var o = this;
            o.stopped = !1, o.invalidated = !1, o.firstRun = !0, o._id = u++, o._onInvalidateCallbacks = [], o._parent = e, o._func = n, o._onError = r, o._recomputing = !1, t._computations[o._id] = o;
            var i = !0;
            try {
                o._compute(), i = !1
            } finally {
                o.firstRun = !1, i && o.stop()
            }
        }, t.Computation.prototype.onInvalidate = function(n) {
            var e = this;
            if ("function" != typeof n) throw new Error("onInvalidate requires a function");
            e.invalidated ? t.nonreactive(function() {
                a(n)(e)
            }) : e._onInvalidateCallbacks.push(n)
        }, t.Computation.prototype.invalidate = function() {
            var n = this;
            if (!n.invalidated) {
                n._recomputing || n.stopped || (h(), c.push(this)), n.invalidated = !0;
                for (var e = 0, r; r = n._onInvalidateCallbacks[e]; e++) t.nonreactive(function() {
                    a(r)(n)
                });
                n._onInvalidateCallbacks = []
            }
        }, t.Computation.prototype.stop = function() {
            this.stopped || (this.stopped = !0, this.invalidate(), delete t._computations[this._id])
        }, t.Computation.prototype._compute = function() {
            var n = this;
            n.invalidated = !1;
            var r = t.currentComputation;
            e(n);
            var o = p;
            p = !0;
            try {
                a(n._func)(n)
            } finally {
                e(r), p = o
            }
        }, t.Computation.prototype._needsRecompute = function() {
            var n = this;
            return n.invalidated && !n.stopped
        }, t.Computation.prototype._recompute = function() {
            var n = this;
            n._recomputing = !0;
            try {
                if (n._needsRecompute()) try {
                    n._compute()
                } catch (t) {
                    n._onError ? n._onError(t) : i("recompute", t)
                }
            } finally {
                n._recomputing = !1
            }
        }, t.Dependency = function() {
            this._dependentsById = {}
        }, t.Dependency.prototype.depend = function(n) {
            if (!n) {
                if (!t.active) return !1;
                n = t.currentComputation
            }
            var e = this,
                r = n._id;
            return r in e._dependentsById ? !1 : (e._dependentsById[r] = n, n.onInvalidate(function() {
                delete e._dependentsById[r]
            }), !0)
        }, t.Dependency.prototype.changed = function() {
            var n = this;
            for (var t in n._dependentsById) n._dependentsById[t].invalidate()
        }, t.Dependency.prototype.hasDependents = function() {
            var n = this;
            for (var t in n._dependentsById) return !0;
            return !1
        }, t.flush = function(n) {
            t._runFlush({
                finishSynchronously: !0,
                throwFirstError: n && n._throwFirstError
            })
        }, t._runFlush = function(n) {
            if (f) throw new Error("Can't call Tracker.flush while flushing");
            if (p) throw new Error("Can't flush inside Tracker.autorun");
            n = n || {}, f = !0, s = !0, d = !!n.throwFirstError;
            var e = 0,
                r = !1;
            try {
                for (; c.length || l.length;) {
                    for (; c.length;) {
                        var o = c.shift();
                        if (o._recompute(), o._needsRecompute() && c.unshift(o), !n.finishSynchronously && ++e > 1e3) return void(r = !0)
                    }
                    if (l.length) {
                        var a = l.shift();
                        try {
                            a()
                        } catch (u) {
                            i("afterFlush", u)
                        }
                    }
                }
                r = !0
            } finally {
                if (r || (f = !1, t._runFlush({
                        finishSynchronously: n.finishSynchronously,
                        throwFirstError: !1
                    })), s = !1, f = !1, c.length || l.length) {
                    if (n.finishSynchronously) throw new Error("still have more to do?");
                    setTimeout(h, 10)
                }
            }
        }, t.autorun = function(n, e) {
            if ("function" != typeof n) throw new Error("Tracker.autorun requires a function argument");
            e = e || {}, v = !0;
            var r = new t.Computation(n, t.currentComputation, e.onError);
            return t.active && t.onInvalidate(function() {
                r.stop()
            }), r
        }, t.nonreactive = function(n) {
            var r = t.currentComputation;
            e(null);
            try {
                return n()
            } finally {
                e(r)
            }
        }, t.onInvalidate = function(n) {
            if (!t.active) throw new Error("Tracker.onInvalidate requires a currentComputation");
            t.currentComputation.onInvalidate(n)
        }, t.afterFlush = function(n) {
            l.push(n), h()
        }
    }).call(this),
        function() {
            n.flush = t.flush, n.autorun = t.autorun, n.autosubscribe = t.autorun, t.depend = function(n) {
                return n.depend()
            }, e = t
        }.call(this), "undefined" == typeof Package && (Package = {}), Package.tracker = {
            Tracker: t,
            Deps: e
        }
}();

! function() {
    var e = Package.meteor.Meteor,
        t = Package.underscore._,
        r = Package.ejson.EJSON,
        n;
    (function() {
        n = function() {
            return n.info.apply(this, arguments)
        };
        var i = 0,
            o = [],
            a = 0;
        n._intercept = function(e) {
            i += e
        }, n._suppress = function(e) {
            a += e
        }, n._intercepted = function() {
            var e = o;
            return o = [], i = 0, e
        }, n.outputFormat = "json";
        var s = {
                debug: "green",
                warn: "magenta",
                error: "red"
            },
            l = "blue",
            c = ["time", "timeInexact", "level", "file", "line", "program", "originApp", "satellite", "stderr"],
            u = c.concat(["app", "message"]),
            g = function(t) {
                var r = n.format(t),
                    i = t.level;
                "undefined" != typeof console && console[i] ? console[i](r) : e._debug(r)
            };
        n._getCallerDetails = function() {
            var e = function() {
                    var e = new Error,
                        t = e.stack;
                    return t
                },
                t = e();
            if (!t) return {};
            for (var r = t.split("\n"), n, i = 1; i < r.length; ++i) {
                if (n = r[i], n.match(/^\s*at eval \(eval/)) return {
                    file: "eval"
                };
                if (!n.match(/packages\/(?:local-test:)?logging(?:\/|\.js)/)) break
            }
            var o = {},
                a = /(?:[@(]| at )([^(]+?):([0-9:]+)(?:\)|$)/.exec(n);
            return a ? (o.line = a[2].split(":")[0], o.file = a[1].split("/").slice(-1)[0].split("?")[0], o) : o
        }, t.each(["debug", "info", "warn", "error"], function(s) {
            n[s] = function(l) {
                if (a) return void a--;
                var u = !1;
                i && (i--, u = !0);
                var f = !t.isObject(l) || t.isRegExp(l) || t.isDate(l) ? {
                    message: new String(l).toString()
                } : l;
                if (t.each(c, function(e) {
                        if (f[e]) throw new Error("Can't set '" + e + "' in log message")
                    }), t.has(f, "message") && !t.isString(f.message)) throw new Error("The 'message' field in log objects must be a string");
                if (f.omitCallerDetails || (f = t.extend(n._getCallerDetails(), f)), f.time = new Date, f.level = s, "debug" !== s)
                    if (u) o.push(r.stringify(f));
                    else if (e.isServer)
                    if ("colored-text" === n.outputFormat) console.log(n.format(f, {
                        color: !0
                    }));
                    else {
                        if ("json" !== n.outputFormat) throw new Error("Unknown logging output format: " + n.outputFormat);
                        console.log(r.stringify(f))
                    } else g(f)
            }
        }), n.parse = function(e) {
            var t = null;
            if (e && "{" === e.charAt(0)) try {
                t = r.parse(e)
            } catch (n) {}
            return t && t.time && t.time instanceof Date ? t : null
        }, n.format = function(n, i) {
            n = r.clone(n), i = i || {};
            var o = n.time;
            if (!(o instanceof Date)) throw new Error("'time' must be a Date object");
            var a = n.timeInexact,
                c = n.level || "info",
                g = n.file,
                f = n.line,
                m = n.app || "",
                p = n.originApp,
                v = n.message || "",
                h = n.program || "",
                d = n.satellite,
                w = n.stderr || "";
            t.each(u, function(e) {
                delete n[e]
            }), t.isEmpty(n) || (v && (v += " "), v += r.stringify(n));
            var b = function(e) {
                    return 10 > e ? "0" + e : e.toString()
                },
                D = function(e) {
                    return 100 > e ? "0" + b(e) : e.toString()
                },
                j = o.getFullYear().toString() + b(o.getMonth() + 1) + b(o.getDate()),
                S = b(o.getHours()) + ":" + b(o.getMinutes()) + ":" + b(o.getSeconds()) + "." + D(o.getMilliseconds()),
                k = "(" + -((new Date).getTimezoneOffset() / 60) + ")",
                E = "";
            m && (E += m), p && p !== m && (E += " via " + p), E && (E = "[" + E + "] ");
            var x = [];
            h && x.push(h), g && x.push(g), f && x.push(f);
            var y = t.isEmpty(x) ? "" : "(" + x.join(":") + ") ";
            d && (y += ["[", d, "]"].join(""));
            var _ = w ? "(STDERR) " : "",
                C = [c.charAt(0).toUpperCase(), j, "-", S, k, a ? "? " : " ", E, y, _].join(""),
                F = function(t, r) {
                    return i.color && e.isServer && r ? Npm.require("cli-color")[r](t) : t
                };
            return F(C, i.metaColor || l) + F(v, s[c])
        }, n.objFromText = function(e, r) {
            var n = {
                message: e,
                level: "info",
                time: new Date,
                timeInexact: !0
            };
            return t.extend(n, r)
        }
    }).call(this), "undefined" == typeof Package && (Package = {}), Package.logging = {
        Log: n
    }
}();

! function() {
    var e = Package.meteor.Meteor,
        t = Package.underscore._,
        r = Package.random.Random,
        i;
    (function() {
        i = function(e) {
            var r = this;
            t.extend(r, t.defaults(t.clone(e || {}), {
                baseTimeout: 1e3,
                exponent: 2.2,
                maxTimeout: 3e5,
                minTimeout: 10,
                minCount: 2,
                fuzz: .5
            })), r.retryTimer = null
        }, t.extend(i.prototype, {
            clear: function() {
                var e = this;
                e.retryTimer && clearTimeout(e.retryTimer), e.retryTimer = null
            },
            _timeout: function(e) {
                var t = this;
                if (e < t.minCount) return t.minTimeout;
                var i = Math.min(t.maxTimeout, t.baseTimeout * Math.pow(t.exponent, e));
                return i *= r.fraction() * t.fuzz + (1 - t.fuzz / 2)
            },
            retryLater: function(t, r) {
                var i = this,
                    n = i._timeout(t);
                return i.retryTimer && clearTimeout(i.retryTimer), i.retryTimer = e.setTimeout(r, n), n
            }
        })
    }).call(this), "undefined" == typeof Package && (Package = {}), Package.retry = {
        Retry: i
    }
}();

! function() {
    var i = Package.meteor.Meteor,
        t = Package.underscore._,
        a = Package.json.JSON,
        n = Package.ejson.EJSON,
        e;
    (function() {
        e = function(i, t) {
            var n = this;
            n._map = {}, n._idStringify = i || a.stringify, n._idParse = t || a.parse
        }, t.extend(e.prototype, {
            get: function(i) {
                var t = this,
                    a = t._idStringify(i);
                return t._map[a]
            },
            set: function(i, t) {
                var a = this,
                    n = a._idStringify(i);
                a._map[n] = t
            },
            remove: function(i) {
                var t = this,
                    a = t._idStringify(i);
                delete t._map[a]
            },
            has: function(i) {
                var a = this,
                    n = a._idStringify(i);
                return t.has(a._map, n)
            },
            empty: function() {
                var i = this;
                return t.isEmpty(i._map)
            },
            clear: function() {
                var i = this;
                i._map = {}
            },
            forEach: function(i) {
                for (var a = this, n = t.keys(a._map), e = 0; e < n.length; e++) {
                    var r = i.call(null, a._map[n[e]], a._idParse(n[e]));
                    if (r === !1) return
                }
            },
            size: function() {
                var i = this;
                return t.size(i._map)
            },
            setDefault: function(i, a) {
                var n = this,
                    e = n._idStringify(i);
                return t.has(n._map, e) ? n._map[e] : (n._map[e] = a, a)
            },
            clone: function() {
                var i = this,
                    t = new e(i._idStringify, i._idParse);
                return i.forEach(function(i, a) {
                    t.set(a, n.clone(i))
                }), t
            }
        })
    }).call(this), "undefined" == typeof Package && (Package = {}), Package["id-map"] = {
        IdMap: e
    }
}();

! function() {
    var t = Package.meteor.Meteor,
        e = Package.underscore._,
        r;
    (function() {
        var t = function(t, e, r, n) {
            return {
                key: t,
                value: e,
                next: r,
                prev: n
            }
        };
        r = function() {
            var t = this;
            t._dict = {}, t._first = null, t._last = null, t._size = 0;
            var r = e.toArray(arguments);
            t._stringify = function(t) {
                return t
            }, "function" == typeof r[0] && (t._stringify = r.shift()), e.each(r, function(e) {
                t.putBefore(e[0], e[1], null)
            })
        }, e.extend(r.prototype, {
            _k: function(t) {
                return " " + this._stringify(t)
            },
            empty: function() {
                var t = this;
                return !t._first
            },
            size: function() {
                var t = this;
                return t._size
            },
            _linkEltIn: function(t) {
                var e = this;
                t.next ? (t.prev = t.next.prev, t.next.prev = t, t.prev && (t.prev.next = t)) : (t.prev = e._last, e._last && (e._last.next = t), e._last = t), (null === e._first || e._first === t.next) && (e._first = t)
            },
            _linkEltOut: function(t) {
                var e = this;
                t.next && (t.next.prev = t.prev), t.prev && (t.prev.next = t.next), t === e._last && (e._last = t.prev), t === e._first && (e._first = t.next)
            },
            putBefore: function(e, r, n) {
                var i = this;
                if (i._dict[i._k(e)]) throw new Error("Item " + e + " already present in OrderedDict");
                var o = n ? t(e, r, i._dict[i._k(n)]) : t(e, r, null);
                if (void 0 === o.next) throw new Error("could not find item to put this one before");
                i._linkEltIn(o), i._dict[i._k(e)] = o, i._size++
            },
            append: function(t, e) {
                var r = this;
                r.putBefore(t, e, null)
            },
            remove: function(t) {
                var e = this,
                    r = e._dict[e._k(t)];
                if (void 0 === r) throw new Error("Item " + t + " not present in OrderedDict");
                return e._linkEltOut(r), e._size--, delete e._dict[e._k(t)], r.value
            },
            get: function(t) {
                var e = this;
                return e.has(t) ? e._dict[e._k(t)].value : void 0
            },
            has: function(t) {
                var r = this;
                return e.has(r._dict, r._k(t))
            },
            forEach: function(t) {
                for (var e = this, n = 0, i = e._first; null !== i;) {
                    var o = t(i.value, i.key, n);
                    if (o === r.BREAK) return;
                    i = i.next, n++
                }
            },
            first: function() {
                var t = this;
                return t.empty() ? void 0 : t._first.key
            },
            firstValue: function() {
                var t = this;
                return t.empty() ? void 0 : t._first.value
            },
            last: function() {
                var t = this;
                return t.empty() ? void 0 : t._last.key
            },
            lastValue: function() {
                var t = this;
                return t.empty() ? void 0 : t._last.value
            },
            prev: function(t) {
                var e = this;
                if (e.has(t)) {
                    var r = e._dict[e._k(t)];
                    if (r.prev) return r.prev.key
                }
                return null
            },
            next: function(t) {
                var e = this;
                if (e.has(t)) {
                    var r = e._dict[e._k(t)];
                    if (r.next) return r.next.key
                }
                return null
            },
            moveBefore: function(t, e) {
                var r = this,
                    n = r._dict[r._k(t)],
                    i = e ? r._dict[r._k(e)] : null;
                if (void 0 === n) throw new Error("Item to move is not present");
                if (void 0 === i) throw new Error("Could not find element to move this one before");
                i !== n.next && (r._linkEltOut(n), n.next = i, r._linkEltIn(n))
            },
            indexOf: function(t) {
                var e = this,
                    n = null;
                return e.forEach(function(i, o, u) {
                    return e._k(o) === e._k(t) ? (n = u, r.BREAK) : void 0
                }), n
            },
            _checkRep: function() {
                var t = this;
                e.each(t._dict, function(t, e) {
                    if (e.next === e) throw new Error("Next is a loop");
                    if (e.prev === e) throw new Error("Prev is a loop")
                })
            }
        }), r.BREAK = {
            "break": !0
        }
    }).call(this), "undefined" == typeof Package && (Package = {}), Package["ordered-dict"] = {
        OrderedDict: r
    }
}();

! function() {
    var t = Package.meteor.Meteor,
        n, o;
    (function() {
        o = {
            exports: {}
        }
    }).call(this),
        function() {
            ! function() {
                function t(t) {
                    for (var n = [], o = [], a = 0; a < t[0].length; a++) n.push(t[0][a][1]), o.push(t[0][a][0]);
                    return n = n.sort(function(t, n) {
                        return t - n
                    }), o = o.sort(function(t, n) {
                        return t - n
                    }), [
                        [n[0], o[0]],
                        [n[n.length - 1], o[o.length - 1]]
                    ]
                }

                function n(t, n, o) {
                    for (var a = [
                            [0, 0]
                        ], r = 0; r < o.length; r++) {
                        for (var e = 0; e < o[r].length; e++) a.push(o[r][e]);
                        a.push([0, 0])
                    }
                    for (var i = !1, r = 0, e = a.length - 1; r < a.length; e = r++) a[r][0] > n != a[e][0] > n && t < (a[e][1] - a[r][1]) * (n - a[r][0]) / (a[e][0] - a[r][0]) + a[r][1] && (i = !i);
                    return i
                }
                var a = {};
                "undefined" != typeof o && o.exports && (o.exports = a), a.lineStringsIntersect = function(t, n) {
                    for (var o = [], a = 0; a <= t.coordinates.length - 2; ++a)
                        for (var r = 0; r <= n.coordinates.length - 2; ++r) {
                            var e = {
                                    x: t.coordinates[a][1],
                                    y: t.coordinates[a][0]
                                },
                                i = {
                                    x: t.coordinates[a + 1][1],
                                    y: t.coordinates[a + 1][0]
                                },
                                s = {
                                    x: n.coordinates[r][1],
                                    y: n.coordinates[r][0]
                                },
                                c = {
                                    x: n.coordinates[r + 1][1],
                                    y: n.coordinates[r + 1][0]
                                },
                                u = (c.x - s.x) * (e.y - s.y) - (c.y - s.y) * (e.x - s.x),
                                h = (i.x - e.x) * (e.y - s.y) - (i.y - e.y) * (e.x - s.x),
                                d = (c.y - s.y) * (i.x - e.x) - (c.x - s.x) * (i.y - e.y);
                            if (0 != d) {
                                var l = u / d,
                                    y = h / d;
                                l >= 0 && 1 >= l && y >= 0 && 1 >= y && o.push({
                                    type: "Point",
                                    coordinates: [e.x + l * (i.x - e.x), e.y + l * (i.y - e.y)]
                                })
                            }
                        }
                    return 0 == o.length && (o = !1), o
                }, a.pointInBoundingBox = function(t, n) {
                    return !(t.coordinates[1] < n[0][0] || t.coordinates[1] > n[1][0] || t.coordinates[0] < n[0][1] || t.coordinates[0] > n[1][1])
                }, a.pointInPolygon = function(o, r) {
                    for (var e = "Polygon" == r.type ? [r.coordinates] : r.coordinates, i = !1, s = 0; s < e.length; s++) a.pointInBoundingBox(o, t(e[s])) && (i = !0);
                    if (!i) return !1;
                    for (var c = !1, s = 0; s < e.length; s++) n(o.coordinates[1], o.coordinates[0], e[s]) && (c = !0);
                    return c
                }, a.numberToRadius = function(t) {
                    return t * Math.PI / 180
                }, a.numberToDegree = function(t) {
                    return 180 * t / Math.PI
                }, a.drawCircle = function(t, n, o) {
                    for (var r = [n.coordinates[1], n.coordinates[0]], e = t / 1e3 / 6371, i = [a.numberToRadius(r[0]), a.numberToRadius(r[1])], o = o || 15, s = [
                            [r[0], r[1]]
                        ], c = 0; o > c; c++) {
                        var u = 2 * Math.PI * c / o,
                            h = Math.asin(Math.sin(i[0]) * Math.cos(e) + Math.cos(i[0]) * Math.sin(e) * Math.cos(u)),
                            d = i[1] + Math.atan2(Math.sin(u) * Math.sin(e) * Math.cos(i[0]), Math.cos(e) - Math.sin(i[0]) * Math.sin(h));
                        s[c] = [], s[c][1] = a.numberToDegree(h), s[c][0] = a.numberToDegree(d)
                    }
                    return {
                        type: "Polygon",
                        coordinates: [s]
                    }
                }, a.rectangleCentroid = function(t) {
                    var n = t.coordinates[0],
                        o = n[0][0],
                        a = n[0][1],
                        r = n[2][0],
                        e = n[2][1],
                        i = r - o,
                        s = e - a;
                    return {
                        type: "Point",
                        coordinates: [o + i / 2, a + s / 2]
                    }
                }, a.pointDistance = function(t, n) {
                    var o = t.coordinates[0],
                        r = t.coordinates[1],
                        e = n.coordinates[0],
                        i = n.coordinates[1],
                        s = a.numberToRadius(i - r),
                        c = a.numberToRadius(e - o),
                        u = Math.pow(Math.sin(s / 2), 2) + Math.cos(a.numberToRadius(r)) * Math.cos(a.numberToRadius(i)) * Math.pow(Math.sin(c / 2), 2),
                        h = 2 * Math.atan2(Math.sqrt(u), Math.sqrt(1 - u));
                    return 6371 * h * 1e3
                }, a.geometryWithinRadius = function(t, n, o) {
                    if ("Point" == t.type) return a.pointDistance(t, n) <= o;
                    if ("LineString" == t.type || "Polygon" == t.type) {
                        var r = {},
                            e;
                        e = "Polygon" == t.type ? t.coordinates[0] : t.coordinates;
                        for (var i in e)
                            if (r.coordinates = e[i], a.pointDistance(r, n) > o) return !1
                    }
                    return !0
                }, a.area = function(t) {
                    for (var n = 0, o = t.coordinates[0], a = o.length - 1, r, e, i = 0; i < o.length; a = i++) {
                        var r = {
                                x: o[i][1],
                                y: o[i][0]
                            },
                            e = {
                                x: o[a][1],
                                y: o[a][0]
                            };
                        n += r.x * e.y, n -= r.y * e.x
                    }
                    return n /= 2
                }, a.centroid = function(t) {
                    for (var n, o = 0, r = 0, e = t.coordinates[0], i = e.length - 1, s, c, u = 0; u < e.length; i = u++) {
                        var s = {
                                x: e[u][1],
                                y: e[u][0]
                            },
                            c = {
                                x: e[i][1],
                                y: e[i][0]
                            };
                        n = s.x * c.y - c.x * s.y, o += (s.x + c.x) * n, r += (s.y + c.y) * n
                    }
                    return n = 6 * a.area(t), {
                        type: "Point",
                        coordinates: [r / n, o / n]
                    }
                }, a.simplify = function(t, n) {
                    n = n || 20, t = t.map(function(t) {
                        return {
                            lng: t.coordinates[0],
                            lat: t.coordinates[1]
                        }
                    });
                    var o, a, r, e, i, s, c, u, h, d, l, y, M, f, g, x, p, v, P, b = Math.PI / 180 * .5,
                        m = new Array,
                        T = new Array,
                        I = new Array;
                    if (t.length < 3) return t;
                    for (o = t.length, d = 360 * n / (2 * Math.PI * 6378137), d *= d, r = 0, T[0] = 0, I[0] = o - 1, a = 1; a > 0;)
                        if (e = T[a - 1], i = I[a - 1], a--, i - e > 1) {
                            for (l = t[i].lng() - t[e].lng(), y = t[i].lat() - t[e].lat(), Math.abs(l) > 180 && (l = 360 - Math.abs(l)), l *= Math.cos(b * (t[i].lat() + t[e].lat())), M = l * l + y * y, s = e + 1, c = e, h = -1; i > s; s++) f = t[s].lng() - t[e].lng(), g = t[s].lat() - t[e].lat(), Math.abs(f) > 180 && (f = 360 - Math.abs(f)), f *= Math.cos(b * (t[s].lat() + t[e].lat())), x = f * f + g * g, p = t[s].lng() - t[i].lng(), v = t[s].lat() - t[i].lat(), Math.abs(p) > 180 && (p = 360 - Math.abs(p)), p *= Math.cos(b * (t[s].lat() + t[i].lat())), P = p * p + v * v, u = x >= M + P ? P : P >= M + x ? x : (f * y - g * l) * (f * y - g * l) / M, u > h && (c = s, h = u);
                            d > h ? (m[r] = e, r++) : (a++, T[a - 1] = c, I[a - 1] = i, a++, T[a - 1] = e, I[a - 1] = c)
                        } else m[r] = e, r++;
                    m[r] = o - 1, r++;
                    for (var R = new Array, s = 0; r > s; s++) R.push(t[m[s]]);
                    return R.map(function(t) {
                        return {
                            type: "Point",
                            coordinates: [t.lng, t.lat]
                        }
                    })
                }, a.destinationPoint = function(t, n, o) {
                    o /= 6371, n = a.numberToRadius(n);
                    var r = a.numberToRadius(t.coordinates[0]),
                        e = a.numberToRadius(t.coordinates[1]),
                        i = Math.asin(Math.sin(r) * Math.cos(o) + Math.cos(r) * Math.sin(o) * Math.cos(n)),
                        s = e + Math.atan2(Math.sin(n) * Math.sin(o) * Math.cos(r), Math.cos(o) - Math.sin(r) * Math.sin(i));
                    return s = (s + 3 * Math.PI) % (2 * Math.PI) - Math.PI, {
                        type: "Point",
                        coordinates: [a.numberToDegree(i), a.numberToDegree(s)]
                    }
                }
            }()
        }.call(this),
        function() {
            n = o.exports
        }.call(this), "undefined" == typeof Package && (Package = {}), Package["geojson-utils"] = {
            GeoJSON: n
        }
}();

! function() {
    var e = Package.meteor.Meteor,
        r = Package.underscore._,
        t = Package.json.JSON,
        n = Package.ejson.EJSON,
        o = Package["id-map"].IdMap,
        i = Package["ordered-dict"].OrderedDict,
        a = Package.tracker.Tracker,
        s = Package.tracker.Deps,
        c = Package.random.Random,
        u = Package["geojson-utils"].GeoJSON,
        d, f, l, h, p, v, _, m, y, g, w, b, $, I, E, O;
    (function() {
        d = function(r) {
            var t = this;
            t.name = r, t._docs = new d._IdMap, t._observeQueue = new e._SynchronousQueue, t.next_qid = 1, t.queries = {}, t._savedOriginals = null, t.paused = !1
        }, f = {}, l = {}, d._applyChanges = function(e, t) {
            r.each(t, function(r, t) {
                void 0 === r ? delete e[t] : e[t] = r
            })
        }, h = function(e) {
            var r = new Error(e);
            return r.name = "MinimongoError", r
        }, d.prototype.find = function(e, r) {
            return 0 === arguments.length && (e = {}), new d.Cursor(this, e, r)
        }, d.Cursor = function(e, r, t) {
            var n = this;
            t || (t = {}), n.collection = e, n.sorter = null, d._selectorIsId(r) ? (n._selectorId = r, n.matcher = new f.Matcher(r)) : (n._selectorId = void 0, n.matcher = new f.Matcher(r), (n.matcher.hasGeoQuery() || t.sort) && (n.sorter = new f.Sorter(t.sort || [], {
                matcher: n.matcher
            }))), n.skip = t.skip, n.limit = t.limit, n.fields = t.fields, n._projectionFn = d._compileProjection(n.fields || {}), n._transform = d.wrapTransform(t.transform), "undefined" != typeof a && (n.reactive = void 0 === t.reactive ? !0 : t.reactive)
        }, d.Cursor.prototype.rewind = function() {}, d.prototype.findOne = function(e, r) {
            return 0 === arguments.length && (e = {}), r = r || {}, r.limit = 1, this.find(e, r).fetch()[0]
        }, d.Cursor.prototype.forEach = function(e, t) {
            var n = this,
                o = n._getRawObjects({
                    ordered: !0
                });
            n.reactive && n._depend({
                addedBefore: !0,
                removed: !0,
                changed: !0,
                movedBefore: !0
            }), r.each(o, function(r, o) {
                r = n._projectionFn(r), n._transform && (r = n._transform(r)), e.call(t, r, o, n)
            })
        }, d.Cursor.prototype.getTransform = function() {
            return this._transform
        }, d.Cursor.prototype.map = function(e, r) {
            var t = this,
                n = [];
            return t.forEach(function(o, i) {
                n.push(e.call(r, o, i, t))
            }), n
        }, d.Cursor.prototype.fetch = function() {
            var e = this,
                r = [];
            return e.forEach(function(e) {
                r.push(e)
            }), r
        }, d.Cursor.prototype.count = function() {
            var e = this;
            return e.reactive && e._depend({
                added: !0,
                removed: !0
            }, !0), e._getRawObjects({
                ordered: !0
            }).length
        }, d.Cursor.prototype._publishCursor = function(e) {
            var r = this;
            if (!r.collection.name) throw new Error("Can't publish a cursor from a collection without a name.");
            var t = r.collection.name;
            return Mongo.Collection._publishCursor(r, e, t)
        }, d.Cursor.prototype._getCollectionName = function() {
            var e = this;
            return e.collection.name
        }, d._observeChangesCallbacksAreOrdered = function(e) {
            if (e.added && e.addedBefore) throw new Error("Please specify only one of added() and addedBefore()");
            return !(!e.addedBefore && !e.movedBefore)
        }, d._observeCallbacksAreOrdered = function(e) {
            if (e.addedAt && e.added) throw new Error("Please specify only one of added() and addedAt()");
            if (e.changedAt && e.changed) throw new Error("Please specify only one of changed() and changedAt()");
            if (e.removed && e.removedAt) throw new Error("Please specify only one of removed() and removedAt()");
            return !!(e.addedAt || e.movedTo || e.changedAt || e.removedAt)
        }, d.ObserveHandle = function() {}, r.extend(d.Cursor.prototype, {
            observe: function(e) {
                var r = this;
                return d._observeFromObserveChanges(r, e)
            },
            observeChanges: function(e) {
                var t = this,
                    o = d._observeChangesCallbacksAreOrdered(e);
                if (!e._allow_unordered && !o && (t.skip || t.limit)) throw new Error("must use ordered observe (ie, 'addedBefore' instead of 'added') with skip or limit");
                if (t.fields && (0 === t.fields._id || t.fields._id === !1)) throw Error("You may not observe a cursor with {fields: {_id: 0}}");
                var i = {
                        matcher: t.matcher,
                        sorter: o && t.sorter,
                        distances: t.matcher.hasGeoQuery() && o && new d._IdMap,
                        resultsSnapshot: null,
                        ordered: o,
                        cursor: t,
                        projectionFn: t._projectionFn
                    },
                    s;
                t.reactive && (s = t.collection.next_qid++, t.collection.queries[s] = i), i.results = t._getRawObjects({
                    ordered: o,
                    distances: i.distances
                }), t.collection.paused && (i.resultsSnapshot = o ? [] : new d._IdMap);
                var c = function(e) {
                    return e ? function() {
                        var r = this,
                            n = arguments;
                        t.collection.paused || t.collection._observeQueue.queueTask(function() {
                            e.apply(r, n)
                        })
                    } : function() {}
                };
                if (i.added = c(e.added), i.changed = c(e.changed), i.removed = c(e.removed), o && (i.addedBefore = c(e.addedBefore), i.movedBefore = c(e.movedBefore)), !e._suppress_initial && !t.collection.paused) {
                    var u = o ? r.bind(r.each, null, i.results) : r.bind(i.results.forEach, i.results);
                    u(function(e) {
                        var r = n.clone(e);
                        delete r._id, o && i.addedBefore(e._id, t._projectionFn(r), null), i.added(e._id, t._projectionFn(r))
                    })
                }
                var f = new d.ObserveHandle;
                return r.extend(f, {
                    collection: t.collection,
                    stop: function() {
                        t.reactive && delete t.collection.queries[s]
                    }
                }), t.reactive && a.active && a.onInvalidate(function() {
                    f.stop()
                }), t.collection._observeQueue.drain(), f
            }
        }), d.Cursor.prototype._getRawObjects = function(e) {
            var r = this;
            e = e || {};
            var t = e.ordered ? [] : new d._IdMap;
            if (void 0 !== r._selectorId) {
                if (r.skip) return t;
                var n = r.collection._docs.get(r._selectorId);
                return n && (e.ordered ? t.push(n) : t.set(r._selectorId, n)), t
            }
            var o;
            if (r.matcher.hasGeoQuery() && e.ordered && (e.distances ? (o = e.distances, o.clear()) : o = new d._IdMap), r.collection._docs.forEach(function(n, i) {
                    var a = r.matcher.documentMatches(n);
                    return a.result && (e.ordered ? (t.push(n), o && void 0 !== a.distance && o.set(i, a.distance)) : t.set(i, n)), !r.limit || r.skip || r.sorter || t.length !== r.limit ? !0 : !1
                }), !e.ordered) return t;
            if (r.sorter) {
                var i = r.sorter.getComparator({
                    distances: o
                });
                t.sort(i)
            }
            var a = r.skip || 0,
                s = r.limit ? r.limit + a : t.length;
            return t.slice(a, s)
        }, d.Cursor.prototype._depend = function(e, t) {
            var n = this;
            if (a.active) {
                var o = new a.Dependency;
                o.depend();
                var i = r.bind(o.changed, o),
                    s = {
                        _suppress_initial: !0,
                        _allow_unordered: t
                    };
                r.each(["added", "changed", "removed", "addedBefore", "movedBefore"], function(r) {
                    e[r] && (s[r] = i)
                }), n.observeChanges(s)
            }
        }, d.prototype.insert = function(t, o) {
            var i = this;
            t = n.clone(t), r.has(t, "_id") || (t._id = d._useOID ? new d._ObjectID : c.id());
            var a = t._id;
            if (i._docs.has(a)) throw h("Duplicate _id '" + a + "'");
            i._saveOriginal(a, void 0), i._docs.set(a, t);
            var s = [];
            for (var u in i.queries) {
                var f = i.queries[u],
                    l = f.matcher.documentMatches(t);
                l.result && (f.distances && void 0 !== l.distance && f.distances.set(a, l.distance), f.cursor.skip || f.cursor.limit ? s.push(u) : d._insertInResults(f, t))
            }
            return r.each(s, function(e) {
                i.queries[e] && i._recomputeResults(i.queries[e])
            }), i._observeQueue.drain(), o && e.defer(function() {
                o(null, a)
            }), a
        }, d.prototype._eachPossiblyMatchingDoc = function(e, r) {
            var t = this,
                n = d._idsMatchedBySelector(e);
            if (n)
                for (var o = 0; o < n.length; ++o) {
                    var i = n[o],
                        a = t._docs.get(i);
                    if (a) {
                        var s = r(a, i);
                        if (s === !1) break
                    }
                } else t._docs.forEach(r)
        }, d.prototype.remove = function(t, o) {
            var i = this;
            if (i.paused && !i._savedOriginals && n.equals(t, {})) {
                var a = i._docs.size();
                return i._docs.clear(), r.each(i.queries, function(e) {
                    e.ordered ? e.results = [] : e.results.clear()
                }), o && e.defer(function() {
                    o(null, a)
                }), a
            }
            var s = new f.Matcher(t),
                c = [];
            i._eachPossiblyMatchingDoc(t, function(e, r) {
                s.documentMatches(e).result && c.push(r)
            });
            for (var u = [], l = [], h = 0; h < c.length; h++) {
                var p = c[h],
                    v = i._docs.get(p);
                r.each(i.queries, function(e, r) {
                    e.matcher.documentMatches(v).result && (e.cursor.skip || e.cursor.limit ? u.push(r) : l.push({
                        qid: r,
                        doc: v
                    }))
                }), i._saveOriginal(p, v), i._docs.remove(p)
            }
            return r.each(l, function(e) {
                var r = i.queries[e.qid];
                r && (r.distances && r.distances.remove(e.doc._id), d._removeFromResults(r, e.doc))
            }), r.each(u, function(e) {
                var r = i.queries[e];
                r && i._recomputeResults(r)
            }), i._observeQueue.drain(), a = c.length, o && e.defer(function() {
                o(null, a)
            }), a
        }, d.prototype.update = function(t, o, i, a) {
            var s = this;
            !a && i instanceof Function && (a = i, i = null), i || (i = {});
            var c = new f.Matcher(t),
                u = {};
            r.each(s.queries, function(e, r) {
                !e.cursor.skip && !e.cursor.limit || s.paused || (u[r] = n.clone(e.results))
            });
            var l = {},
                h = 0;
            s._eachPossiblyMatchingDoc(t, function(e, r) {
                var t = c.documentMatches(e);
                return t.result && (s._saveOriginal(r, e), s._modifyAndNotify(e, o, l, t.arrayIndices), ++h, !i.multi) ? !1 : !0
            }), r.each(l, function(e, r) {
                var t = s.queries[r];
                t && s._recomputeResults(t, u[r])
            }), s._observeQueue.drain();
            var p;
            if (0 === h && i.upsert) {
                var v = d._removeDollarOperators(t);
                d._modify(v, o, {
                    isInsert: !0
                }), !v._id && i.insertedId && (v._id = i.insertedId), p = s.insert(v), h = 1
            }
            var _;
            return i._returnObject ? (_ = {
                numberAffected: h
            }, void 0 !== p && (_.insertedId = p)) : _ = h, a && e.defer(function() {
                a(null, _)
            }), _
        }, d.prototype.upsert = function(e, t, n, o) {
            var i = this;
            return o || "function" != typeof n || (o = n, n = {}), i.update(e, t, r.extend({}, n, {
                upsert: !0,
                _returnObject: !0
            }), o)
        }, d.prototype._modifyAndNotify = function(e, r, t, o) {
            var i = this,
                a = {};
            for (var s in i.queries) {
                var c = i.queries[s];
                a[s] = c.ordered ? c.matcher.documentMatches(e).result : c.results.has(e._id)
            }
            var u = n.clone(e);
            d._modify(e, r, {
                arrayIndices: o
            });
            for (s in i.queries) {
                c = i.queries[s];
                var f = a[s],
                    l = c.matcher.documentMatches(e),
                    h = l.result;
                h && c.distances && void 0 !== l.distance && c.distances.set(e._id, l.distance), c.cursor.skip || c.cursor.limit ? (f || h) && (t[s] = !0) : f && !h ? d._removeFromResults(c, e) : !f && h ? d._insertInResults(c, e) : f && h && d._updateInResults(c, e, u)
            }
        }, d._insertInResults = function(e, r) {
            var t = n.clone(r);
            if (delete t._id, e.ordered) {
                if (e.sorter) {
                    var o = d._insertInSortedList(e.sorter.getComparator({
                            distances: e.distances
                        }), e.results, r),
                        i = e.results[o + 1];
                    i = i ? i._id : null, e.addedBefore(r._id, e.projectionFn(t), i)
                } else e.addedBefore(r._id, e.projectionFn(t), null), e.results.push(r);
                e.added(r._id, e.projectionFn(t))
            } else e.added(r._id, e.projectionFn(t)), e.results.set(r._id, r)
        }, d._removeFromResults = function(e, r) {
            if (e.ordered) {
                var t = d._findInOrderedResults(e, r);
                e.removed(r._id), e.results.splice(t, 1)
            } else {
                var n = r._id;
                e.removed(r._id), e.results.remove(n)
            }
        }, d._updateInResults = function(e, t, o) {
            if (!n.equals(t._id, o._id)) throw new Error("Can't change a doc's _id while updating");
            var i = e.projectionFn,
                a = d._makeChangedFields(i(t), i(o));
            if (!e.ordered) return void(r.isEmpty(a) || (e.changed(t._id, a), e.results.set(t._id, t)));
            var s = d._findInOrderedResults(e, t);
            if (r.isEmpty(a) || e.changed(t._id, a), e.sorter) {
                e.results.splice(s, 1);
                var c = d._insertInSortedList(e.sorter.getComparator({
                    distances: e.distances
                }), e.results, t);
                if (s !== c) {
                    var u = e.results[c + 1];
                    u = u ? u._id : null, e.movedBefore && e.movedBefore(t._id, u)
                }
            }
        }, d.prototype._recomputeResults = function(e, r) {
            var t = this;
            t.paused || r || (r = e.results), e.distances && e.distances.clear(), e.results = e.cursor._getRawObjects({
                ordered: e.ordered,
                distances: e.distances
            }), t.paused || d._diffQueryChanges(e.ordered, r, e.results, e, {
                projectionFn: e.projectionFn
            })
        }, d._findInOrderedResults = function(e, r) {
            if (!e.ordered) throw new Error("Can't call _findInOrderedResults on unordered query");
            for (var t = 0; t < e.results.length; t++)
                if (e.results[t] === r) return t;
            throw Error("object missing from query")
        }, d._binarySearch = function(e, r, t) {
            for (var n = 0, o = r.length; o > 0;) {
                var i = Math.floor(o / 2);
                e(t, r[n + i]) >= 0 ? (n += i + 1, o -= i + 1) : o = i
            }
            return n
        }, d._insertInSortedList = function(e, r, t) {
            if (0 === r.length) return r.push(t), 0;
            var n = d._binarySearch(e, r, t);
            return r.splice(n, 0, t), n
        }, d.prototype.saveOriginals = function() {
            var e = this;
            if (e._savedOriginals) throw new Error("Called saveOriginals twice without retrieveOriginals");
            e._savedOriginals = new d._IdMap
        }, d.prototype.retrieveOriginals = function() {
            var e = this;
            if (!e._savedOriginals) throw new Error("Called retrieveOriginals without saveOriginals");
            var r = e._savedOriginals;
            return e._savedOriginals = null, r
        }, d.prototype._saveOriginal = function(e, r) {
            var t = this;
            t._savedOriginals && (t._savedOriginals.has(e) || t._savedOriginals.set(e, n.clone(r)))
        }, d.prototype.pauseObservers = function() {
            if (!this.paused) {
                this.paused = !0;
                for (var e in this.queries) {
                    var r = this.queries[e];
                    r.resultsSnapshot = n.clone(r.results)
                }
            }
        }, d.prototype.resumeObservers = function() {
            var e = this;
            if (this.paused) {
                this.paused = !1;
                for (var r in this.queries) {
                    var t = e.queries[r];
                    d._diffQueryChanges(t.ordered, t.resultsSnapshot, t.results, t, {
                        projectionFn: t.projectionFn
                    }), t.resultsSnapshot = null
                }
                e._observeQueue.drain()
            }
        }, d._idStringify = function(e) {
            if (e instanceof d._ObjectID) return e.valueOf();
            if ("string" == typeof e) return "" === e ? e : "-" === e.substr(0, 1) || "~" === e.substr(0, 1) || d._looksLikeObjectID(e) || "{" === e.substr(0, 1) ? "-" + e : e;
            if (void 0 === e) return "-";
            if ("object" == typeof e && null !== e) throw new Error("Meteor does not currently support objects other than ObjectID as ids");
            return "~" + t.stringify(e)
        }, d._idParse = function(e) {
            return "" === e ? e : "-" === e ? void 0 : "-" === e.substr(0, 1) ? e.substr(1) : "~" === e.substr(0, 1) ? t.parse(e.substr(1)) : d._looksLikeObjectID(e) ? new d._ObjectID(e) : e
        }, d._makeChangedFields = function(e, r) {
            var t = {};
            return d._diffObjects(r, e, {
                leftOnly: function(e, r) {
                    t[e] = void 0
                },
                rightOnly: function(e, r) {
                    t[e] = r
                },
                both: function(e, r, o) {
                    n.equals(r, o) || (t[e] = o)
                }
            }), t
        }
    }).call(this),
        function() {
            d.wrapTransform = function(e) {
                if (!e) return null;
                if (e.__wrappedTransform__) return e;
                var t = function(t) {
                    if (!r.has(t, "_id")) throw new Error("can only transform documents with _id");
                    var o = t._id,
                        i = a.nonreactive(function() {
                            return e(t)
                        });
                    if (!v(i)) throw new Error("transform must return object");
                    if (r.has(i, "_id")) {
                        if (!n.equals(i._id, o)) throw new Error("transformed document can't have different _id")
                    } else i._id = o;
                    return i
                };
                return t.__wrappedTransform__ = !0, t
            }
        }.call(this),
        function() {
            p = function(e) {
                return r.isArray(e) && !n.isBinary(e)
            }, v = d._isPlainObject = function(e) {
                return e && 3 === d._f._type(e)
            }, _ = function(e) {
                return p(e) || v(e)
            }, m = function(e, n) {
                if (!v(e)) return !1;
                var o = void 0;
                return r.each(e, function(r, i) {
                    var a = "$" === i.substr(0, 1);
                    if (void 0 === o) o = a;
                    else if (o !== a) {
                        if (!n) throw new Error("Inconsistent operator: " + t.stringify(e));
                        o = !1
                    }
                }), !!o
            }, y = function(e) {
                return /^[0-9]+$/.test(e)
            }
        }.call(this),
        function() {
            f.Matcher = function(e) {
                var r = this;
                r._paths = {}, r._hasGeoQuery = !1, r._hasWhere = !1, r._isSimple = !0, r._matchingDocument = void 0, r._selector = null, r._docMatcher = r._compileSelector(e)
            }, r.extend(f.Matcher.prototype, {
                documentMatches: function(e) {
                    if (!e || "object" != typeof e) throw Error("documentMatches needs a document");
                    return this._docMatcher(e)
                },
                hasGeoQuery: function() {
                    return this._hasGeoQuery
                },
                hasWhere: function() {
                    return this._hasWhere
                },
                isSimple: function() {
                    return this._isSimple
                },
                _compileSelector: function(r) {
                    var t = this;
                    if (r instanceof Function) return t._isSimple = !1, t._selector = r, t._recordPathUsed(""),
                        function(e) {
                            return {
                                result: !!r.call(e)
                            }
                        };
                    if (d._selectorIsId(r)) return t._selector = {
                            _id: r
                        }, t._recordPathUsed("_id"),
                        function(e) {
                            return {
                                result: n.equals(e._id, r)
                            }
                        };
                    if (!r || "_id" in r && !r._id) return t._isSimple = !1, C;
                    if ("boolean" == typeof r || p(r) || n.isBinary(r)) throw new Error("Invalid selector: " + r);
                    return t._selector = n.clone(r), e(r, t, {
                        isRoot: !0
                    })
                },
                _recordPathUsed: function(e) {
                    this._paths[e] = !0
                },
                _getPaths: function() {
                    return r.keys(this._paths)
                }
            });
            var e = function(e, n, o) {
                    o = o || {};
                    var i = [];
                    return r.each(e, function(e, a) {
                        if ("$" === a.substr(0, 1)) {
                            if (!r.has(s, a)) throw new Error("Unrecognized logical operator: " + a);
                            n._isSimple = !1, i.push(s[a](e, n, o.inElemMatch))
                        } else {
                            o.inElemMatch || n._recordPathUsed(a);
                            var c = $(a),
                                u = t(e, n, o.isRoot);
                            i.push(function(e) {
                                var r = c(e);
                                return u(r)
                            })
                        }
                    }), A(i)
                },
                t = function(e, r, t) {
                    return e instanceof RegExp ? (r._isSimple = !1, o(g(e))) : m(e) ? i(e, r, t) : o(w(e))
                },
                o = function(e, t) {
                    return t = t || {},
                        function(n) {
                            var o = n;
                            t.dontExpandLeafArrays || (o = I(n, t.dontIncludeLeafArrays));
                            var i = {};
                            return i.result = r.any(o, function(r) {
                                var t = e(r.value);
                                return "number" == typeof t && (r.arrayIndices || (r.arrayIndices = [t]), t = !0), t && r.arrayIndices && (i.arrayIndices = r.arrayIndices), t
                            }), i
                        }
                };
            g = function(e) {
                return function(t) {
                    return t instanceof RegExp ? r.isEqual(t, e) : "string" != typeof t ? !1 : (e.lastIndex = 0, e.test(t))
                }
            }, w = function(e) {
                if (m(e)) throw Error("Can't create equalityValueSelector for operator object");
                return null == e ? function(e) {
                    return null == e
                } : function(r) {
                    return d._f._equal(e, r)
                }
            };
            var i = function(e, t, n) {
                    var i = [];
                    return r.each(e, function(a, s) {
                        var c = r.contains(["$lt", "$lte", "$gt", "$gte"], s) && r.isNumber(a),
                            u = "$ne" === s && !r.isObject(a),
                            d = r.contains(["$in", "$nin"], s) && r.isArray(a) && !r.any(a, r.isObject);
                        if ("$eq" === s || c || d || u || (t._isSimple = !1), r.has(h, s)) i.push(h[s](a, e, t, n));
                        else {
                            if (!r.has(b, s)) throw new Error("Unrecognized operator: " + s);
                            var f = b[s];
                            i.push(o(f.compileElementSelector(a, e, t), f))
                        }
                    }), M(i)
                },
                a = function(t, n, o) {
                    if (!p(t) || r.isEmpty(t)) throw Error("$and/$or/$nor must be nonempty array");
                    return r.map(t, function(r) {
                        if (!v(r)) throw Error("$or/$and/$nor entries need to be full objects");
                        return e(r, n, {
                            inElemMatch: o
                        })
                    })
                },
                s = {
                    $and: function(e, r, t) {
                        var n = a(e, r, t);
                        return A(n)
                    },
                    $or: function(e, t, n) {
                        var o = a(e, t, n);
                        return 1 === o.length ? o[0] : function(e) {
                            var t = r.any(o, function(r) {
                                return r(e).result
                            });
                            return {
                                result: t
                            }
                        }
                    },
                    $nor: function(e, t, n) {
                        var o = a(e, t, n);
                        return function(e) {
                            var t = r.all(o, function(r) {
                                return !r(e).result
                            });
                            return {
                                result: t
                            }
                        }
                    },
                    $where: function(e, r) {
                        return r._recordPathUsed(""), r._hasWhere = !0, e instanceof Function || (e = Function("obj", "return " + e)),
                            function(r) {
                                return {
                                    result: e.call(r, r)
                                }
                            }
                    },
                    $comment: function() {
                        return function() {
                            return {
                                result: !0
                            }
                        }
                    }
                },
                c = function(e) {
                    return function(r) {
                        var t = e(r);
                        return {
                            result: !t.result
                        }
                    }
                },
                h = {
                    $not: function(e, r, n) {
                        return c(t(e, n))
                    },
                    $ne: function(e) {
                        return c(o(w(e)))
                    },
                    $nin: function(e) {
                        return c(o(b.$in.compileElementSelector(e)))
                    },
                    $exists: function(e) {
                        var r = o(function(e) {
                            return void 0 !== e
                        });
                        return e ? r : c(r)
                    },
                    $options: function(e, t) {
                        if (!r.has(t, "$regex")) throw Error("$options needs a $regex");
                        return k
                    },
                    $maxDistance: function(e, r) {
                        if (!r.$near) throw Error("$maxDistance needs a $near");
                        return k
                    },
                    $all: function(e, n, o) {
                        if (!p(e)) throw Error("$all requires array");
                        if (r.isEmpty(e)) return C;
                        var i = [];
                        return r.each(e, function(e) {
                            if (m(e)) throw Error("no $ expressions in $all");
                            i.push(t(e, o))
                        }), M(i)
                    },
                    $near: function(e, t, n, o) {
                        if (!o) throw Error("$near can't be inside another $ operator");
                        n._hasGeoQuery = !0;
                        var i, a, s;
                        if (v(e) && r.has(e, "$geometry")) i = e.$maxDistance, a = e.$geometry, s = function(e) {
                            return e && e.type ? "Point" === e.type ? u.pointDistance(a, e) : u.geometryWithinRadius(e, a, i) ? 0 : i + 1 : null
                        };
                        else {
                            if (i = t.$maxDistance, !p(e) && !v(e)) throw Error("$near argument must be coordinate pair or GeoJSON");
                            a = O(e), s = function(e) {
                                return p(e) || v(e) ? E(a, e) : null
                            }
                        }
                        return function(e) {
                            e = I(e);
                            var t = {
                                result: !1
                            };
                            return r.each(e, function(e) {
                                var r = s(e.value);
                                null === r || r > i || void 0 !== t.distance && t.distance <= r || (t.result = !0, t.distance = r, e.arrayIndices ? t.arrayIndices = e.arrayIndices : delete t.arrayIndices)
                            }), t
                        }
                    }
                },
                E = function(e, t) {
                    e = O(e), t = O(t);
                    var n = e[0] - t[0],
                        o = e[1] - t[1];
                    return r.isNaN(n) || r.isNaN(o) ? null : Math.sqrt(n * n + o * o)
                },
                O = function(e) {
                    return r.map(e, r.identity)
                },
                j = function(e) {
                    return {
                        compileElementSelector: function(r) {
                            if (p(r)) return function() {
                                return !1
                            };
                            void 0 === r && (r = null);
                            var t = d._f._type(r);
                            return function(n) {
                                return void 0 === n && (n = null), d._f._type(n) !== t ? !1 : e(d._f._cmp(n, r))
                            }
                        }
                    }
                };
            b = {
                $lt: j(function(e) {
                    return 0 > e
                }),
                $gt: j(function(e) {
                    return e > 0
                }),
                $lte: j(function(e) {
                    return 0 >= e
                }),
                $gte: j(function(e) {
                    return e >= 0
                }),
                $mod: {
                    compileElementSelector: function(e) {
                        if (!p(e) || 2 !== e.length || "number" != typeof e[0] || "number" != typeof e[1]) throw Error("argument to $mod must be an array of two numbers");
                        var r = e[0],
                            t = e[1];
                        return function(e) {
                            return "number" == typeof e && e % r === t
                        }
                    }
                },
                $in: {
                    compileElementSelector: function(e) {
                        if (!p(e)) throw Error("$in needs an array");
                        var t = [];
                        return r.each(e, function(e) {
                                if (e instanceof RegExp) t.push(g(e));
                                else {
                                    if (m(e)) throw Error("cannot nest $ under $in");
                                    t.push(w(e))
                                }
                            }),
                            function(e) {
                                return void 0 === e && (e = null), r.any(t, function(r) {
                                    return r(e)
                                })
                            }
                    }
                },
                $size: {
                    dontExpandLeafArrays: !0,
                    compileElementSelector: function(e) {
                        if ("string" == typeof e) e = 0;
                        else if ("number" != typeof e) throw Error("$size needs a number");
                        return function(r) {
                            return p(r) && r.length === e
                        }
                    }
                },
                $type: {
                    dontIncludeLeafArrays: !0,
                    compileElementSelector: function(e) {
                        if ("number" != typeof e) throw Error("$type needs a number");
                        return function(r) {
                            return void 0 !== r && d._f._type(r) === e
                        }
                    }
                },
                $regex: {
                    compileElementSelector: function(e, r) {
                        if (!("string" == typeof e || e instanceof RegExp)) throw Error("$regex has to be a string or RegExp");
                        var t;
                        if (void 0 !== r.$options) {
                            if (/[^gim]/.test(r.$options)) throw new Error("Only the i, m, and g regexp options are supported");
                            var n = e instanceof RegExp ? e.source : e;
                            t = new RegExp(n, r.$options)
                        } else t = e instanceof RegExp ? e : new RegExp(e);
                        return g(t)
                    }
                },
                $elemMatch: {
                    dontExpandLeafArrays: !0,
                    compileElementSelector: function(r, n, o) {
                        if (!v(r)) throw Error("$elemMatch need an object");
                        var i, a;
                        return m(r, !0) ? (i = t(r, o), a = !1) : (i = e(r, o, {
                                inElemMatch: !0
                            }), a = !0),
                            function(e) {
                                if (!p(e)) return !1;
                                for (var r = 0; r < e.length; ++r) {
                                    var t = e[r],
                                        n;
                                    if (a) {
                                        if (!v(t) && !p(t)) return !1;
                                        n = t
                                    } else n = [{
                                        value: t,
                                        dontIterate: !0
                                    }];
                                    if (i(n).result) return r
                                }
                                return !1
                            }
                    }
                }
            }, $ = function(e, t) {
                t = t || {};
                var n = e.split("."),
                    o = n.length ? n[0] : "",
                    i = y(o),
                    a = n.length >= 2 && y(n[1]),
                    s;
                n.length > 1 && (s = $(n.slice(1).join(".")));
                var c = function(e) {
                    return e.dontIterate || delete e.dontIterate, e.arrayIndices && !e.arrayIndices.length && delete e.arrayIndices, e
                };
                return function(e, n) {
                    if (n || (n = []), p(e)) {
                        if (!(i && o < e.length)) return [];
                        n = n.concat(+o, "x")
                    }
                    var u = e[o];
                    if (!s) return [c({
                        value: u,
                        dontIterate: p(e) && p(u),
                        arrayIndices: n
                    })];
                    if (!_(u)) return p(e) ? [] : [c({
                        value: void 0,
                        arrayIndices: n
                    })];
                    var d = [],
                        f = function(e) {
                            Array.prototype.push.apply(d, e)
                        };
                    return f(s(u, n)), !p(u) || a && t.forSort || r.each(u, function(e, r) {
                        v(e) && f(s(e, n.concat(r)))
                    }), d
                }
            }, l.makeLookupFunction = $, I = function(e, t) {
                var n = [];
                return r.each(e, function(e) {
                    var o = p(e.value);
                    t && o && !e.dontIterate || n.push({
                        value: e.value,
                        arrayIndices: e.arrayIndices
                    }), o && !e.dontIterate && r.each(e.value, function(r, t) {
                        n.push({
                            value: r,
                            arrayIndices: (e.arrayIndices || []).concat(t)
                        })
                    })
                }), n
            };
            var C = function(e) {
                    return {
                        result: !1
                    }
                },
                k = function(e) {
                    return {
                        result: !0
                    }
                },
                S = function(e) {
                    return 0 === e.length ? k : 1 === e.length ? e[0] : function(t) {
                        var n = {};
                        return n.result = r.all(e, function(e) {
                            var r = e(t);
                            return r.result && void 0 !== r.distance && void 0 === n.distance && (n.distance = r.distance), r.result && r.arrayIndices && (n.arrayIndices = r.arrayIndices), r.result
                        }), n.result || (delete n.distance, delete n.arrayIndices), n
                    }
                },
                A = S,
                M = S;
            d._f = {
                _type: function(e) {
                    return "number" == typeof e ? 1 : "string" == typeof e ? 2 : "boolean" == typeof e ? 8 : p(e) ? 4 : null === e ? 10 : e instanceof RegExp ? 11 : "function" == typeof e ? 13 : e instanceof Date ? 9 : n.isBinary(e) ? 5 : e instanceof d._ObjectID ? 7 : 3
                },
                _equal: function(e, r) {
                    return n.equals(e, r, {
                        keyOrderSensitive: !0
                    })
                },
                _typeorder: function(e) {
                    return [-1, 1, 2, 3, 4, 5, -1, 6, 7, 8, 0, 9, -1, 100, 2, 100, 1, 8, 1][e]
                },
                _cmp: function(e, r) {
                    if (void 0 === e) return void 0 === r ? 0 : -1;
                    if (void 0 === r) return 1;
                    var t = d._f._type(e),
                        n = d._f._type(r),
                        o = d._f._typeorder(t),
                        i = d._f._typeorder(n);
                    if (o !== i) return i > o ? -1 : 1;
                    if (t !== n) throw Error("Missing type coercion logic in _cmp");
                    if (7 === t && (t = n = 2, e = e.toHexString(), r = r.toHexString()), 9 === t && (t = n = 1, e = e.getTime(), r = r.getTime()), 1 === t) return e - r;
                    if (2 === n) return r > e ? -1 : e === r ? 0 : 1;
                    if (3 === t) {
                        var a = function(e) {
                            var r = [];
                            for (var t in e) r.push(t), r.push(e[t]);
                            return r
                        };
                        return d._f._cmp(a(e), a(r))
                    }
                    if (4 === t)
                        for (var s = 0;; s++) {
                            if (s === e.length) return s === r.length ? 0 : -1;
                            if (s === r.length) return 1;
                            var c = d._f._cmp(e[s], r[s]);
                            if (0 !== c) return c
                        }
                    if (5 === t) {
                        if (e.length !== r.length) return e.length - r.length;
                        for (s = 0; s < e.length; s++) {
                            if (e[s] < r[s]) return -1;
                            if (e[s] > r[s]) return 1
                        }
                        return 0
                    }
                    if (8 === t) return e ? r ? 0 : 1 : r ? -1 : 0;
                    if (10 === t) return 0;
                    if (11 === t) throw Error("Sorting not supported on regular expression");
                    if (13 === t) throw Error("Sorting not supported on Javascript code");
                    throw Error("Unknown type to sort")
                }
            }, d._removeDollarOperators = function(e) {
                var r = {};
                for (var t in e) "$" !== t.substr(0, 1) && (r[t] = e[t]);
                return r
            }
        }.call(this),
        function() {
            f.Sorter = function(n, o) {
                var i = this;
                o = o || {}, i._sortSpecParts = [];
                var a = function(e, r) {
                    if (!e) throw Error("sort keys must be non-empty");
                    if ("$" === e.charAt(0)) throw Error("unsupported sort key: " + e);
                    i._sortSpecParts.push({
                        path: e,
                        lookup: $(e, {
                            forSort: !0
                        }),
                        ascending: r
                    })
                };
                if (n instanceof Array)
                    for (var s = 0; s < n.length; s++) "string" == typeof n[s] ? a(n[s], !0) : a(n[s][0], "desc" !== n[s][1]);
                else {
                    if ("object" != typeof n) throw Error("Bad sort specification: " + t.stringify(n));
                    r.each(n, function(e, r) {
                        a(r, e >= 0)
                    })
                }
                if (i.affectedByModifier) {
                    var c = {};
                    r.each(i._sortSpecParts, function(e) {
                        c[e.path] = 1
                    }), i._selectorForAffectedByModifier = new f.Matcher(c)
                }
                i._keyComparator = e(r.map(i._sortSpecParts, function(e, r) {
                    return i._keyFieldComparator(r)
                })), i._keyFilter = null, o.matcher && i._useWithMatcher(o.matcher)
            }, r.extend(f.Sorter.prototype, {
                getComparator: function(r) {
                    var t = this;
                    if (!r || !r.distances) return t._getBaseComparator();
                    var n = r.distances;
                    return e([t._getBaseComparator(), function(e, r) {
                        if (!n.has(e._id)) throw Error("Missing distance for " + e._id);
                        if (!n.has(r._id)) throw Error("Missing distance for " + r._id);
                        return n.get(e._id) - n.get(r._id)
                    }])
                },
                _getPaths: function() {
                    var e = this;
                    return r.pluck(e._sortSpecParts, "path")
                },
                _getMinKeyFromDoc: function(e) {
                    var r = this,
                        t = null;
                    if (r._generateKeysFromDoc(e, function(e) {
                            return r._keyCompatibleWithSelector(e) ? null === t ? void(t = e) : void(r._compareKeys(e, t) < 0 && (t = e)) : void 0
                        }), null === t) throw Error("sort selector found no keys in doc?");
                    return t
                },
                _keyCompatibleWithSelector: function(e) {
                    var r = this;
                    return !r._keyFilter || r._keyFilter(e)
                },
                _generateKeysFromDoc: function(e, t) {
                    var n = this;
                    if (0 === n._sortSpecParts.length) throw new Error("can't generate keys without a spec");
                    var o = [],
                        i = function(e) {
                            return e.join(",") + ","
                        },
                        a = null;
                    if (r.each(n._sortSpecParts, function(t, n) {
                            var s = I(t.lookup(e), !0);
                            s.length || (s = [{
                                value: null
                            }]);
                            var c = !1;
                            if (o[n] = {}, r.each(s, function(e) {
                                    if (!e.arrayIndices) {
                                        if (s.length > 1) throw Error("multiple branches but no array used?");
                                        return void(o[n][""] = e.value)
                                    }
                                    c = !0;
                                    var t = i(e.arrayIndices);
                                    if (r.has(o[n], t)) throw Error("duplicate path: " + t);
                                    if (o[n][t] = e.value, a && !r.has(a, t)) throw Error("cannot index parallel arrays")
                                }), a) {
                                if (!r.has(o[n], "") && r.size(a) !== r.size(o[n])) throw Error("cannot index parallel arrays!")
                            } else c && (a = {}, r.each(o[n], function(e, r) {
                                a[r] = !0
                            }))
                        }), !a) {
                        var s = r.map(o, function(e) {
                            if (!r.has(e, "")) throw Error("no value in sole key case?");
                            return e[""]
                        });
                        return void t(s)
                    }
                    r.each(a, function(e, n) {
                        var i = r.map(o, function(e) {
                            if (r.has(e, "")) return e[""];
                            if (!r.has(e, n)) throw Error("missing path?");
                            return e[n]
                        });
                        t(i)
                    })
                },
                _compareKeys: function(e, r) {
                    var t = this;
                    if (e.length !== t._sortSpecParts.length || r.length !== t._sortSpecParts.length) throw Error("Key has wrong length");
                    return t._keyComparator(e, r)
                },
                _keyFieldComparator: function(e) {
                    var r = this,
                        t = !r._sortSpecParts[e].ascending;
                    return function(r, n) {
                        var o = d._f._cmp(r[e], n[e]);
                        return t && (o = -o), o
                    }
                },
                _getBaseComparator: function() {
                    var e = this;
                    return e._sortSpecParts.length ? function(r, t) {
                        var n = e._getMinKeyFromDoc(r),
                            o = e._getMinKeyFromDoc(t);
                        return e._compareKeys(n, o)
                    } : function(e, r) {
                        return 0
                    }
                },
                _useWithMatcher: function(e) {
                    var t = this;
                    if (t._keyFilter) throw Error("called _useWithMatcher twice?");
                    if (!r.isEmpty(t._sortSpecParts)) {
                        var n = e._selector;
                        if (!(n instanceof Function)) {
                            var o = {};
                            r.each(t._sortSpecParts, function(e, r) {
                                o[e.path] = []
                            }), r.each(n, function(e, t) {
                                var n = o[t];
                                if (n) {
                                    if (e instanceof RegExp) {
                                        if (e.ignoreCase || e.multiline) return;
                                        return void n.push(g(e))
                                    }
                                    return m(e) ? void r.each(e, function(t, o) {
                                        r.contains(["$lt", "$lte", "$gt", "$gte"], o) && n.push(b[o].compileElementSelector(t)), "$regex" !== o || e.$options || n.push(b.$regex.compileElementSelector(t, e))
                                    }) : void n.push(w(e))
                                }
                            }), r.isEmpty(o[t._sortSpecParts[0].path]) || (t._keyFilter = function(e) {
                                return r.all(t._sortSpecParts, function(t, n) {
                                    return r.all(o[t.path], function(r) {
                                        return r(e[n])
                                    })
                                })
                            })
                        }
                    }
                }
            });
            var e = function(e) {
                return function(r, t) {
                    for (var n = 0; n < e.length; ++n) {
                        var o = e[n](r, t);
                        if (0 !== o) return o
                    }
                    return 0
                }
            }
        }.call(this),
        function() {
            d._compileProjection = function(e) {
                d._checkSupportedProjection(e);
                var t = r.isUndefined(e._id) ? !0 : e._id,
                    o = E(e),
                    i = function(e, t) {
                        if (r.isArray(e)) return r.map(e, function(e) {
                            return i(e, t)
                        });
                        var a = o.including ? {} : n.clone(e);
                        return r.each(t, function(t, s) {
                            r.has(e, s) && (r.isObject(t) ? r.isObject(e[s]) && (a[s] = i(e[s], t)) : o.including ? a[s] = n.clone(e[s]) : delete a[s])
                        }), a
                    };
                return function(e) {
                    var n = i(e, o.tree);
                    return t && r.has(e, "_id") && (n._id = e._id), !t && r.has(n, "_id") && delete n._id, n
                }
            }, E = function(e) {
                var t = r.keys(e).sort();
                t.length > 0 && (1 !== t.length || "_id" !== t[0]) && (t = r.reject(t, function(e) {
                    return "_id" === e
                }));
                var n = null;
                r.each(t, function(r) {
                    var t = !!e[r];
                    if (null === n && (n = t), n !== t) throw h("You cannot currently mix including and excluding fields.")
                });
                var o = O(t, function(e) {
                    return n
                }, function(e, r, t) {
                    var n = t,
                        o = r;
                    throw h("both " + n + " and " + o + " found in fields option, using both of them may trigger unexpected behavior. Did you mean to use only one of them?")
                });
                return {
                    tree: o,
                    including: n
                }
            }, O = function(e, t, n, o) {
                return o = o || {}, r.each(e, function(e) {
                    var i = o,
                        a = e.split("."),
                        s = r.all(a.slice(0, -1), function(t, o) {
                            if (r.has(i, t)) {
                                if (!r.isObject(i[t]) && (i[t] = n(i[t], a.slice(0, o + 1).join("."), e), !r.isObject(i[t]))) return !1
                            } else i[t] = {};
                            return i = i[t], !0
                        });
                    if (s) {
                        var c = r.last(a);
                        i[c] = r.has(i, c) ? n(i[c], e, e) : t(e)
                    }
                }), o
            }, d._checkSupportedProjection = function(e) {
                if (!r.isObject(e) || r.isArray(e)) throw h("fields option must be an object");
                r.each(e, function(e, t) {
                    if (r.contains(t.split("."), "$")) throw h("Minimongo doesn't support $ operator in projections yet.");
                    if (-1 === r.indexOf([1, 0, !0, !1], e)) throw h("Projection values should be one of 1, 0, true, or false")
                })
            }
        }.call(this),
        function() {
            d._modify = function(t, a, s) {
                if (s = s || {}, !v(a)) throw h("Modifier must be an object");
                var c = m(a),
                    u;
                if (c) u = n.clone(t), r.each(a, function(t, n) {
                    var a = i[n];
                    if (s.isInsert && "$setOnInsert" === n && (a = i.$set), !a) throw h("Invalid modifier specified " + n);
                    r.each(t, function(t, i) {
                        if ("" === i) throw h("An empty update path is not valid.");
                        if ("_id" === i) throw h("Mod on _id not allowed");
                        var c = i.split(".");
                        if (!r.all(c, r.identity)) throw h("The update path '" + i + "' contains an empty field name, which is not allowed.");
                        var d = r.has(o, n),
                            f = "$rename" === n,
                            l = e(u, c, {
                                noCreate: o[n],
                                forbidArray: "$rename" === n,
                                arrayIndices: s.arrayIndices
                            }),
                            p = c.pop();
                        a(l, p, t, i, u)
                    })
                });
                else {
                    if (a._id && !n.equals(t._id, a._id)) throw h("Cannot change the _id of a document");
                    for (var d in a)
                        if (/\./.test(d)) throw h("When replacing document, field name may not contain '.'");
                    u = a
                }
                r.each(r.keys(t), function(e) {
                    "_id" !== e && delete t[e]
                }), r.each(u, function(e, r) {
                    t[r] = e
                })
            };
            var e = function(e, r, n) {
                    n = n || {};
                    for (var o = !1, i = 0; i < r.length; i++) {
                        var a = i === r.length - 1,
                            s = r[i],
                            c = _(e);
                        if (!c) {
                            if (n.noCreate) return void 0;
                            var u = h("cannot use the part '" + s + "' to traverse " + e);
                            throw u.setPropertyError = !0, u
                        }
                        if (e instanceof Array) {
                            if (n.forbidArray) return null;
                            if ("$" === s) {
                                if (o) throw h("Too many positional (i.e. '$') elements");
                                if (!n.arrayIndices || !n.arrayIndices.length) throw h("The positional operator did not find the match needed from the query");
                                s = n.arrayIndices[0], o = !0
                            } else {
                                if (!y(s)) {
                                    if (n.noCreate) return void 0;
                                    throw h("can't append to array using string field name [" + s + "]")
                                }
                                s = parseInt(s)
                            }
                            if (a && (r[i] = s), n.noCreate && s >= e.length) return void 0;
                            for (; e.length < s;) e.push(null);
                            if (!a)
                                if (e.length === s) e.push({});
                                else if ("object" != typeof e[s]) throw h("can't modify field '" + r[i + 1] + "' of list value " + t.stringify(e[s]))
                        } else {
                            if (s.length && "$" === s.substr(0, 1)) throw h("can't set field named " + s);
                            if (!(s in e)) {
                                if (n.noCreate) return void 0;
                                a || (e[s] = {})
                            }
                        }
                        if (a) return e;
                        e = e[s]
                    }
                },
                o = {
                    $unset: !0,
                    $pop: !0,
                    $rename: !0,
                    $pull: !0,
                    $pullAll: !0
                },
                i = {
                    $inc: function(e, r, t) {
                        if ("number" != typeof t) throw h("Modifier $inc allowed for numbers only");
                        if (r in e) {
                            if ("number" != typeof e[r]) throw h("Cannot apply $inc modifier to non-number");
                            e[r] += t
                        } else e[r] = t
                    },
                    $set: function(e, t, o) {
                        if (!r.isObject(e)) {
                            var i = h("Cannot set property on non-object field");
                            throw i.setPropertyError = !0, i
                        }
                        if (null === e) {
                            var i = h("Cannot set property on null");
                            throw i.setPropertyError = !0, i
                        }
                        e[t] = n.clone(o)
                    },
                    $setOnInsert: function(e, r, t) {},
                    $unset: function(e, r, t) {
                        void 0 !== e && (e instanceof Array ? r in e && (e[r] = null) : delete e[r])
                    },
                    $push: function(e, r, t) {
                        if (void 0 === e[r] && (e[r] = []), !(e[r] instanceof Array)) throw h("Cannot apply $push modifier to non-array");
                        if (!t || !t.$each) return void e[r].push(n.clone(t));
                        var o = t.$each;
                        if (!(o instanceof Array)) throw h("$each must be an array");
                        var i = void 0;
                        if ("$slice" in t) {
                            if ("number" != typeof t.$slice) throw h("$slice must be a numeric value");
                            if (t.$slice > 0) throw h("$slice in $push must be zero or negative");
                            i = t.$slice
                        }
                        var a = void 0;
                        if (t.$sort) {
                            if (void 0 === i) throw h("$sort requires $slice to be present");
                            a = new f.Sorter(t.$sort).getComparator();
                            for (var s = 0; s < o.length; s++)
                                if (3 !== d._f._type(o[s])) throw h("$push like modifiers using $sort require all elements to be objects")
                        }
                        for (var c = 0; c < o.length; c++) e[r].push(n.clone(o[c]));
                        a && e[r].sort(a), void 0 !== i && (e[r] = 0 === i ? [] : e[r].slice(i))
                    },
                    $pushAll: function(e, r, t) {
                        if (!("object" == typeof t && t instanceof Array)) throw h("Modifier $pushAll/pullAll allowed for arrays only");
                        var n = e[r];
                        if (void 0 === n) e[r] = t;
                        else {
                            if (!(n instanceof Array)) throw h("Cannot apply $pushAll modifier to non-array");
                            for (var o = 0; o < t.length; o++) n.push(t[o])
                        }
                    },
                    $addToSet: function(e, t, o) {
                        var i = !1;
                        if ("object" == typeof o)
                            for (var a in o) {
                                "$each" === a && (i = !0);
                                break
                            }
                        var s = i ? o.$each : [o],
                            c = e[t];
                        if (void 0 === c) e[t] = s;
                        else {
                            if (!(c instanceof Array)) throw h("Cannot apply $addToSet modifier to non-array");
                            r.each(s, function(e) {
                                for (var r = 0; r < c.length; r++)
                                    if (d._f._equal(e, c[r])) return;
                                c.push(n.clone(e))
                            })
                        }
                    },
                    $pop: function(e, r, t) {
                        if (void 0 !== e) {
                            var n = e[r];
                            if (void 0 !== n) {
                                if (!(n instanceof Array)) throw h("Cannot apply $pop modifier to non-array");
                                "number" == typeof t && 0 > t ? n.splice(0, 1) : n.pop()
                            }
                        }
                    },
                    $pull: function(e, r, t) {
                        if (void 0 !== e) {
                            var n = e[r];
                            if (void 0 !== n) {
                                if (!(n instanceof Array)) throw h("Cannot apply $pull/pullAll modifier to non-array");
                                var o = [];
                                if ("object" != typeof t || t instanceof Array)
                                    for (var i = 0; i < n.length; i++) d._f._equal(n[i], t) || o.push(n[i]);
                                else
                                    for (var a = new f.Matcher(t), i = 0; i < n.length; i++) a.documentMatches(n[i]).result || o.push(n[i]);
                                e[r] = o
                            }
                        }
                    },
                    $pullAll: function(e, r, t) {
                        if (!("object" == typeof t && t instanceof Array)) throw h("Modifier $pushAll/pullAll allowed for arrays only");
                        if (void 0 !== e) {
                            var n = e[r];
                            if (void 0 !== n) {
                                if (!(n instanceof Array)) throw h("Cannot apply $pull/pullAll modifier to non-array");
                                for (var o = [], i = 0; i < n.length; i++) {
                                    for (var a = !1, s = 0; s < t.length; s++)
                                        if (d._f._equal(n[i], t[s])) {
                                            a = !0;
                                            break
                                        }
                                    a || o.push(n[i])
                                }
                                e[r] = o
                            }
                        }
                    },
                    $rename: function(r, t, n, o, i) {
                        if (o === n) throw h("$rename source must differ from target");
                        if (null === r) throw h("$rename source field invalid");
                        if ("string" != typeof n) throw h("$rename target must be a string");
                        if (void 0 !== r) {
                            var a = r[t];
                            delete r[t];
                            var s = n.split("."),
                                c = e(i, s, {
                                    forbidArray: !0
                                });
                            if (null === c) throw h("$rename target field invalid");
                            var u = s.pop();
                            c[u] = a
                        }
                    },
                    $bit: function(e, r, t) {
                        throw h("$bit is not supported")
                    }
                }
        }.call(this),
        function() {
            d._diffQueryChanges = function(e, r, t, n, o) {
                e ? d._diffQueryOrderedChanges(r, t, n, o) : d._diffQueryUnorderedChanges(r, t, n, o)
            }, d._diffQueryUnorderedChanges = function(e, t, o, i) {
                i = i || {};
                var a = i.projectionFn || n.clone;
                if (o.movedBefore) throw new Error("_diffQueryUnordered called with a movedBefore observer!");
                t.forEach(function(t, i) {
                    var s = e.get(i);
                    if (s) {
                        if (o.changed && !n.equals(s, t)) {
                            var c = a(t),
                                u = a(s),
                                f = d._makeChangedFields(c, u);
                            r.isEmpty(f) || o.changed(i, f)
                        }
                    } else if (o.added) {
                        var l = a(t);
                        delete l._id, o.added(t._id, l)
                    }
                }), o.removed && e.forEach(function(e, r) {
                    t.has(r) || o.removed(r)
                })
            }, d._diffQueryOrderedChanges = function(t, o, i, a) {
                a = a || {};
                var s = a.projectionFn || n.clone,
                    c = {};
                r.each(o, function(r) {
                    c[r._id] && e._debug("Duplicate _id in new_results"), c[r._id] = !0
                });
                var u = {};
                r.each(t, function(r, t) {
                    r._id in u && e._debug("Duplicate _id in old_results"), u[r._id] = t
                });
                for (var f = [], l = 0, h = o.length, p = new Array(h), v = new Array(h), _ = function(e) {
                        return u[o[e]._id]
                    }, m = 0; h > m; m++)
                    if (void 0 !== u[o[m]._id]) {
                        for (var y = l; y > 0 && !(_(p[y - 1]) < _(m));) y--;
                        v[m] = 0 === y ? -1 : p[y - 1], p[y] = m, y + 1 > l && (l = y + 1)
                    }
                for (var g = 0 === l ? -1 : p[l - 1]; g >= 0;) f.push(g), g = v[g];
                f.reverse(), f.push(o.length), r.each(t, function(e) {
                    c[e._id] || i.removed && i.removed(e._id)
                });
                var w = 0;
                r.each(f, function(e) {
                    for (var n = o[e] ? o[e]._id : null, a, c, f, l, h, p = w; e > p; p++) c = o[p], r.has(u, c._id) ? (a = t[u[c._id]], l = s(c), h = s(a), f = d._makeChangedFields(l, h), r.isEmpty(f) || i.changed && i.changed(c._id, f), i.movedBefore && i.movedBefore(c._id, n)) : (f = s(c), delete f._id, i.addedBefore && i.addedBefore(c._id, f, n), i.added && i.added(c._id, f));
                    n && (c = o[e], a = t[u[c._id]], l = s(c), h = s(a), f = d._makeChangedFields(l, h), r.isEmpty(f) || i.changed && i.changed(c._id, f)), w = e + 1
                })
            }, d._diffObjects = function(e, t, n) {
                r.each(e, function(e, o) {
                    r.has(t, o) ? n.both && n.both(o, e, t[o]) : n.leftOnly && n.leftOnly(o, e)
                }), n.rightOnly && r.each(t, function(t, o) {
                    r.has(e, o) || n.rightOnly(o, t)
                })
            }
        }.call(this),
        function() {
            d._IdMap = function() {
                var e = this;
                o.call(e, d._idStringify, d._idParse)
            }, e._inherits(d._IdMap, o)
        }.call(this),
        function() {
            d._CachingChangeObserver = function(e) {
                var t = this;
                e = e || {};
                var o = e.callbacks && d._observeChangesCallbacksAreOrdered(e.callbacks);
                if (r.has(e, "ordered")) {
                    if (t.ordered = e.ordered, e.callbacks && e.ordered !== o) throw Error("ordered option doesn't match callbacks")
                } else {
                    if (!e.callbacks) throw Error("must provide ordered or callbacks");
                    t.ordered = o
                }
                var a = e.callbacks || {};
                t.ordered ? (t.docs = new i(d._idStringify), t.applyChange = {
                    addedBefore: function(e, r, o) {
                        var i = n.clone(r);
                        i._id = e, a.addedBefore && a.addedBefore.call(t, e, r, o), a.added && a.added.call(t, e, r), t.docs.putBefore(e, i, o || null)
                    },
                    movedBefore: function(e, r) {
                        var n = t.docs.get(e);
                        a.movedBefore && a.movedBefore.call(t, e, r), t.docs.moveBefore(e, r || null)
                    }
                }) : (t.docs = new d._IdMap, t.applyChange = {
                    added: function(e, r) {
                        var o = n.clone(r);
                        a.added && a.added.call(t, e, r), o._id = e, t.docs.set(e, o)
                    }
                }), t.applyChange.changed = function(e, r) {
                    var o = t.docs.get(e);
                    if (!o) throw new Error("Unknown id for changed: " + e);
                    a.changed && a.changed.call(t, e, n.clone(r)), d._applyChanges(o, r)
                }, t.applyChange.removed = function(e) {
                    a.removed && a.removed.call(t, e), t.docs.remove(e)
                }
            }, d._observeFromObserveChanges = function(e, t) {
                var o = e.getTransform() || function(e) {
                        return e
                    },
                    i = !!t._suppress_initial,
                    a;
                if (d._observeCallbacksAreOrdered(t)) {
                    var s = !t._no_indices;
                    a = {
                        addedBefore: function(e, n, a) {
                            var c = this;
                            if (!i && (t.addedAt || t.added)) {
                                var u = o(r.extend(n, {
                                    _id: e
                                }));
                                if (t.addedAt) {
                                    var d = s ? a ? c.docs.indexOf(a) : c.docs.size() : -1;
                                    t.addedAt(u, d, a)
                                } else t.added(u)
                            }
                        },
                        changed: function(e, r) {
                            var i = this;
                            if (t.changedAt || t.changed) {
                                var a = n.clone(i.docs.get(e));
                                if (!a) throw new Error("Unknown id for changed: " + e);
                                var c = o(n.clone(a));
                                if (d._applyChanges(a, r), a = o(a), t.changedAt) {
                                    var u = s ? i.docs.indexOf(e) : -1;
                                    t.changedAt(a, c, u)
                                } else t.changed(a, c)
                            }
                        },
                        movedBefore: function(e, r) {
                            var i = this;
                            if (t.movedTo) {
                                var a = s ? i.docs.indexOf(e) : -1,
                                    c = s ? r ? i.docs.indexOf(r) : i.docs.size() : -1;
                                c > a && --c, t.movedTo(o(n.clone(i.docs.get(e))), a, c, r || null)
                            }
                        },
                        removed: function(e) {
                            var r = this;
                            if (t.removedAt || t.removed) {
                                var n = o(r.docs.get(e));
                                if (t.removedAt) {
                                    var i = s ? r.docs.indexOf(e) : -1;
                                    t.removedAt(n, i)
                                } else t.removed(n)
                            }
                        }
                    }
                } else a = {
                    added: function(e, n) {
                        if (!i && t.added) {
                            var a = r.extend(n, {
                                _id: e
                            });
                            t.added(o(a))
                        }
                    },
                    changed: function(e, r) {
                        var i = this;
                        if (t.changed) {
                            var a = i.docs.get(e),
                                s = n.clone(a);
                            d._applyChanges(s, r), t.changed(o(s), o(n.clone(a)))
                        }
                    },
                    removed: function(e) {
                        var r = this;
                        t.removed && t.removed(o(r.docs.get(e)))
                    }
                };
                var c = new d._CachingChangeObserver({
                        callbacks: a
                    }),
                    u = e.observeChanges(c.applyChange);
                return i = !1, u
            }
        }.call(this),
        function() {
            d._looksLikeObjectID = function(e) {
                return 24 === e.length && e.match(/^[0-9a-f]*$/)
            }, d._ObjectID = function(e) {
                var r = this;
                if (e) {
                    if (e = e.toLowerCase(), !d._looksLikeObjectID(e)) throw new Error("Invalid hexadecimal string for creating an ObjectID");
                    r._str = e
                } else r._str = c.hexString(24)
            }, d._ObjectID.prototype.toString = function() {
                var e = this;
                return 'ObjectID("' + e._str + '")'
            }, d._ObjectID.prototype.equals = function(e) {
                var r = this;
                return e instanceof d._ObjectID && r.valueOf() === e.valueOf()
            }, d._ObjectID.prototype.clone = function() {
                var e = this;
                return new d._ObjectID(e._str)
            }, d._ObjectID.prototype.typeName = function() {
                return "oid"
            }, d._ObjectID.prototype.getTimestamp = function() {
                var e = this;
                return parseInt(e._str.substr(0, 8), 16)
            }, d._ObjectID.prototype.valueOf = d._ObjectID.prototype.toJSONValue = d._ObjectID.prototype.toHexString = function() {
                return this._str
            }, d._selectorIsId = function(e) {
                return "string" == typeof e || "number" == typeof e || e instanceof d._ObjectID
            }, d._selectorIsIdPerhapsAsObject = function(e) {
                return d._selectorIsId(e) || e && "object" == typeof e && e._id && d._selectorIsId(e._id) && 1 === r.size(e)
            }, d._idsMatchedBySelector = function(e) {
                if (d._selectorIsId(e)) return [e];
                if (!e) return null;
                if (r.has(e, "_id")) return d._selectorIsId(e._id) ? [e._id] : e._id && e._id.$in && r.isArray(e._id.$in) && !r.isEmpty(e._id.$in) && r.all(e._id.$in, d._selectorIsId) ? e._id.$in : null;
                if (e.$and && r.isArray(e.$and))
                    for (var t = 0; t < e.$and.length; ++t) {
                        var n = d._idsMatchedBySelector(e.$and[t]);
                        if (n) return n
                    }
                return null
            }, n.addType("oid", function(e) {
                return new d._ObjectID(e)
            })
        }.call(this), "undefined" == typeof Package && (Package = {}), Package.minimongo = {
            LocalCollection: d,
            Minimongo: f,
            MinimongoTest: l
        }
}();

! function() {
    var e = Package.meteor.Meteor,
        t = Package.check.check,
        n = Package.check.Match,
        r = Package.random.Random,
        o = Package.ejson.EJSON,
        i = Package.json.JSON,
        a = Package.underscore._,
        s = Package.tracker.Tracker,
        u = Package.tracker.Deps,
        c = Package.logging.Log,
        l = Package.retry.Retry,
        d = Package.minimongo.LocalCollection,
        f = Package.minimongo.Minimongo,
        _, p, h, v, m, g, b, y, w, k, S, C, T;
    (function() {
        _ = {}, p = {}
    }).call(this),
        function() {
            h = function() {
                var e = document,
                    t = window,
                    n = {},
                    r = function() {};
                r.prototype.addEventListener = function(e, t) {
                    this._listeners || (this._listeners = {}), e in this._listeners || (this._listeners[e] = []);
                    var r = this._listeners[e]; - 1 === n.arrIndexOf(r, t) && r.push(t)
                }, r.prototype.removeEventListener = function(e, t) {
                    if (this._listeners && e in this._listeners) {
                        var r = this._listeners[e],
                            o = n.arrIndexOf(r, t);
                        return -1 !== o ? void(r.length > 1 ? this._listeners[e] = r.slice(0, o).concat(r.slice(o + 1)) : delete this._listeners[e]) : void 0
                    }
                }, r.prototype.dispatchEvent = function(e) {
                    var t = e.type,
                        n = Array.prototype.slice.call(arguments, 0);
                    if (this["on" + t] && this["on" + t].apply(this, n), this._listeners && t in this._listeners)
                        for (var r = 0; r < this._listeners[t].length; r++) this._listeners[t][r].apply(this, n)
                };
                var o = function(e, t) {
                    if (this.type = e, "undefined" != typeof t)
                        for (var n in t) t.hasOwnProperty(n) && (this[n] = t[n])
                };
                o.prototype.toString = function() {
                    var e = [];
                    for (var t in this)
                        if (this.hasOwnProperty(t)) {
                            var n = this[t];
                            "function" == typeof n && (n = "[function]"), e.push(t + "=" + n)
                        }
                    return "SimpleEvent(" + e.join(", ") + ")"
                };
                var a = function(e) {
                    var t = this;
                    t._events = e || [], t._listeners = {}
                };
                a.prototype.emit = function(e) {
                    var t = this;
                    if (t._verifyType(e), !t._nuked) {
                        var n = Array.prototype.slice.call(arguments, 1);
                        if (t["on" + e] && t["on" + e].apply(t, n), e in t._listeners)
                            for (var r = 0; r < t._listeners[e].length; r++) t._listeners[e][r].apply(t, n)
                    }
                }, a.prototype.on = function(e, t) {
                    var n = this;
                    n._verifyType(e), n._nuked || (e in n._listeners || (n._listeners[e] = []), n._listeners[e].push(t))
                }, a.prototype._verifyType = function(e) {
                    var t = this; - 1 === n.arrIndexOf(t._events, e) && n.log("Event " + i.stringify(e) + " not listed " + i.stringify(t._events) + " in " + t)
                }, a.prototype.nuke = function() {
                    var e = this;
                    e._nuked = !0;
                    for (var t = 0; t < e._events.length; t++) delete e[e._events[t]];
                    e._listeners = {}
                };
                var s = "abcdefghijklmnopqrstuvwxyz0123456789_";
                n.random_string = function(e, t) {
                    t = t || s.length;
                    var n, r = [];
                    for (n = 0; e > n; n++) r.push(s.substr(Math.floor(Math.random() * t), 1));
                    return r.join("")
                }, n.random_number = function(e) {
                    return Math.floor(Math.random() * e)
                }, n.random_number_string = function(e) {
                    var t = ("" + (e - 1)).length,
                        r = Array(t + 1).join("0");
                    return (r + n.random_number(e)).slice(-t)
                }, n.getOrigin = function(e) {
                    e += "/";
                    var t = e.split("/").slice(0, 3);
                    return t.join("/")
                }, n.isSameOriginUrl = function(e, n) {
                    return n || (n = t.location.href), e.split("/").slice(0, 3).join("/") === n.split("/").slice(0, 3).join("/")
                }, n.isSameOriginScheme = function(e, n) {
                    return n || (n = t.location.href), e.split(":")[0] === n.split(":")[0]
                }, n.getParentDomain = function(e) {
                    if (/^[0-9.]*$/.test(e)) return e;
                    if (/^\[/.test(e)) return e;
                    if (!/[.]/.test(e)) return e;
                    var t = e.split(".").slice(1);
                    return t.join(".")
                }, n.objectExtend = function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                    return e
                };
                var u = "_jp";
                n.polluteGlobalNamespace = function() {
                    u in t || (t[u] = {})
                }, n.closeFrame = function(e, t) {
                    return "c" + i.stringify([e, t])
                }, n.userSetCode = function(e) {
                    return 1e3 === e || e >= 3e3 && 4999 >= e
                }, n.countRTO = function(e) {
                    var t;
                    return t = e > 100 ? 3 * e : e + 200
                }, n.log = function() {
                    t.console && console.log && console.log.apply && console.log.apply(console, arguments)
                }, n.bind = function(e, t) {
                    return e.bind ? e.bind(t) : function() {
                        return e.apply(t, arguments)
                    }
                }, n.flatUrl = function(e) {
                    return -1 === e.indexOf("?") && -1 === e.indexOf("#")
                }, n.amendUrl = function(t, r) {
                    var o;
                    if (void 0 === r) o = e.location;
                    else {
                        var i = /^([a-z0-9.+-]+:)/i.exec(r);
                        if (i) {
                            var a = i[0].toLowerCase(),
                                s = r.substring(a.length),
                                u = /[a-z0-9\.-]+(:[0-9]+)?/.exec(s);
                            if (u) var c = u[0]
                        }
                        if (!a || !c) throw new Error("relativeTo must be an absolute url");
                        o = {
                            protocol: a,
                            host: c
                        }
                    }
                    if (!t) throw new Error("Wrong url for SockJS");
                    if (!n.flatUrl(t)) throw new Error("Only basic urls are supported in SockJS");
                    0 === t.indexOf("//") && (t = o.protocol + t), 0 === t.indexOf("/") && (t = o.protocol + "//" + o.host + t), t = t.replace(/[/]+$/, "");
                    var l = t.split("/");
                    return ("http:" === l[0] && /:80$/.test(l[2]) || "https:" === l[0] && /:443$/.test(l[2])) && (l[2] = l[2].replace(/:(80|443)$/, "")), t = l.join("/")
                }, n.arrIndexOf = function(e, t) {
                    for (var n = 0; n < e.length; n++)
                        if (e[n] === t) return n;
                    return -1
                }, n.arrSkip = function(e, t) {
                    var r = n.arrIndexOf(e, t);
                    if (-1 === r) return e.slice();
                    var o = e.slice(0, r);
                    return o.concat(e.slice(r + 1))
                }, n.isArray = Array.isArray || function(e) {
                    return {}.toString.call(e).indexOf("Array") >= 0
                }, n.delay = function(e, t) {
                    return "function" == typeof e && (t = e, e = 0), setTimeout(t, e)
                };
                var c = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                    l = {
                        "\x00": "\\u0000",
                        "": "\\u0001",
                        "": "\\u0002",
                        "": "\\u0003",
                        "": "\\u0004",
                        "": "\\u0005",
                        "": "\\u0006",
                        "": "\\u0007",
                        "\b": "\\b",
                        "	": "\\t",
                        "\n": "\\n",
                        "": "\\u000b",
                        "\f": "\\f",
                        "\r": "\\r",
                        "": "\\u000e",
                        "": "\\u000f",
                        "": "\\u0010",
                        "": "\\u0011",
                        "": "\\u0012",
                        "": "\\u0013",
                        "": "\\u0014",
                        "": "\\u0015",
                        "": "\\u0016",
                        "": "\\u0017",
                        "": "\\u0018",
                        "": "\\u0019",
                        "": "\\u001a",
                        "": "\\u001b",
                        "": "\\u001c",
                        "": "\\u001d",
                        "": "\\u001e",
                        "": "\\u001f",
                        '"': '\\"',
                        "\\": "\\\\",
                        "": "\\u007f",
                        "": "\\u0080",
                        "": "\\u0081",
                        "": "\\u0082",
                        "": "\\u0083",
                        "": "\\u0084",
                        "": "\\u0085",
                        "": "\\u0086",
                        "": "\\u0087",
                        "": "\\u0088",
                        "": "\\u0089",
                        "": "\\u008a",
                        "": "\\u008b",
                        "": "\\u008c",
                        "": "\\u008d",
                        "": "\\u008e",
                        "": "\\u008f",
                        "": "\\u0090",
                        "": "\\u0091",
                        "": "\\u0092",
                        "": "\\u0093",
                        "": "\\u0094",
                        "": "\\u0095",
                        "": "\\u0096",
                        "": "\\u0097",
                        "": "\\u0098",
                        "": "\\u0099",
                        "": "\\u009a",
                        "": "\\u009b",
                        "": "\\u009c",
                        "": "\\u009d",
                        "": "\\u009e",
                        "": "\\u009f",
                        "­": "\\u00ad",
                        "؀": "\\u0600",
                        "؁": "\\u0601",
                        "؂": "\\u0602",
                        "؃": "\\u0603",
                        "؄": "\\u0604",
                        "܏": "\\u070f",
                        "឴": "\\u17b4",
                        "឵": "\\u17b5",
                        "‌": "\\u200c",
                        "‍": "\\u200d",
                        "‎": "\\u200e",
                        "‏": "\\u200f",
                        "\u2028": "\\u2028",
                        "\u2029": "\\u2029",
                        "‪": "\\u202a",
                        "‫": "\\u202b",
                        "‬": "\\u202c",
                        "‭": "\\u202d",
                        "‮": "\\u202e",
                        " ": "\\u202f",
                        "⁠": "\\u2060",
                        "⁡": "\\u2061",
                        "⁢": "\\u2062",
                        "⁣": "\\u2063",
                        "⁤": "\\u2064",
                        "⁥": "\\u2065",
                        "⁦": "\\u2066",
                        "⁧": "\\u2067",
                        "⁨": "\\u2068",
                        "⁩": "\\u2069",
                        "⁪": "\\u206a",
                        "⁫": "\\u206b",
                        "⁬": "\\u206c",
                        "⁭": "\\u206d",
                        "⁮": "\\u206e",
                        "⁯": "\\u206f",
                        "\ufeff": "\\ufeff",
                        "￰": "\\ufff0",
                        "￱": "\\ufff1",
                        "￲": "\\ufff2",
                        "￳": "\\ufff3",
                        "￴": "\\ufff4",
                        "￵": "\\ufff5",
                        "￶": "\\ufff6",
                        "￷": "\\ufff7",
                        "￸": "\\ufff8",
                        "￹": "\\ufff9",
                        "￺": "\\ufffa",
                        "￻": "\\ufffb",
                        "￼": "\\ufffc",
                        "�": "\\ufffd",
                        "￾": "\\ufffe",
                        "￿": "\\uffff"
                    },
                    d = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g,
                    f, _ = i && i.stringify || function(e) {
                        return c.lastIndex = 0, c.test(e) && (e = e.replace(c, function(e) {
                            return l[e]
                        })), '"' + e + '"'
                    },
                    p = function(e) {
                        var t, n = {},
                            r = [];
                        for (t = 0; 65536 > t; t++) r.push(String.fromCharCode(t));
                        return e.lastIndex = 0, r.join("").replace(e, function(e) {
                            return n[e] = "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4), ""
                        }), e.lastIndex = 0, n
                    };
                n.quote = function(e) {
                    var t = _(e);
                    return d.lastIndex = 0, d.test(t) ? (f || (f = p(d)), t.replace(d, function(e) {
                        return f[e]
                    })) : t
                };
                var h = ["websocket", "xdr-streaming", "xhr-streaming", "iframe-eventsource", "iframe-htmlfile", "xdr-polling", "xhr-polling", "iframe-xhr-polling", "jsonp-polling"];
                n.probeProtocols = function() {
                    for (var e = {}, t = 0; t < h.length; t++) {
                        var n = h[t];
                        e[n] = T[n] && T[n].enabled()
                    }
                    return e
                }, n.detectProtocols = function(e, t, n) {
                    var r = {},
                        o = [];
                    t || (t = h);
                    for (var i = 0; i < t.length; i++) {
                        var a = t[i];
                        r[a] = e[a]
                    }
                    var s = function(e) {
                        var t = e.shift();
                        r[t] ? o.push(t) : e.length > 0 && s(e)
                    };
                    return n.websocket !== !1 && s(["websocket"]), r["xhr-streaming"] && !n.null_origin ? o.push("xhr-streaming") : !r["xdr-streaming"] || n.cookie_needed || n.null_origin ? s(["iframe-eventsource", "iframe-htmlfile"]) : o.push("xdr-streaming"), r["xhr-polling"] && !n.null_origin ? o.push("xhr-polling") : !r["xdr-polling"] || n.cookie_needed || n.null_origin ? s(["iframe-xhr-polling", "jsonp-polling"]) : o.push("xdr-polling"), o
                };
                var v = "_sockjs_global";
                n.createHook = function() {
                    var e = "a" + n.random_string(8);
                    if (!(v in t)) {
                        var r = {};
                        t[v] = function(e) {
                            return e in r || (r[e] = {
                                id: e,
                                del: function() {
                                    delete r[e]
                                }
                            }), r[e]
                        }
                    }
                    return t[v](e)
                }, n.attachMessage = function(e) {
                    n.attachEvent("message", e)
                }, n.attachEvent = function(n, r) {
                    "undefined" != typeof t.addEventListener ? t.addEventListener(n, r, !1) : (e.attachEvent("on" + n, r), t.attachEvent("on" + n, r))
                }, n.detachMessage = function(e) {
                    n.detachEvent("message", e)
                }, n.detachEvent = function(n, r) {
                    "undefined" != typeof t.addEventListener ? t.removeEventListener(n, r, !1) : (e.detachEvent("on" + n, r), t.detachEvent("on" + n, r))
                };
                var m = {},
                    g = !1,
                    b = function() {
                        for (var e in m) m[e](), delete m[e]
                    },
                    y = function() {
                        g || (g = !0, b())
                    };
                n.attachEvent("unload", y), n.unload_add = function(e) {
                    var t = n.random_string(8);
                    return m[t] = e, g && n.delay(b), t
                }, n.unload_del = function(e) {
                    e in m && delete m[e]
                }, n.createIframe = function(t, r) {
                    var o = e.createElement("iframe"),
                        i, a, s = function() {
                            clearTimeout(i);
                            try {
                                o.onload = null
                            } catch (e) {}
                            o.onerror = null
                        },
                        u = function() {
                            o && (s(), setTimeout(function() {
                                o && o.parentNode.removeChild(o), o = null
                            }, 0), n.unload_del(a))
                        },
                        c = function(e) {
                            o && (u(), r(e))
                        },
                        l = function(e, t) {
                            try {
                                o && o.contentWindow && o.contentWindow.postMessage(e, t)
                            } catch (n) {}
                        };
                    return o.src = t, o.style.display = "none", o.style.position = "absolute", o.onerror = function() {
                        c("onerror")
                    }, o.onload = function() {
                        clearTimeout(i), i = setTimeout(function() {
                            c("onload timeout")
                        }, 2e3)
                    }, e.body.appendChild(o), i = setTimeout(function() {
                        c("timeout")
                    }, 15e3), a = n.unload_add(u), {
                        post: l,
                        cleanup: u,
                        loaded: s
                    }
                }, n.createHtmlfile = function(e, r) {
                    var o = new ActiveXObject("htmlfile"),
                        i, a, s, c = function() {
                            clearTimeout(i)
                        },
                        l = function() {
                            o && (c(), n.unload_del(a), s.parentNode.removeChild(s), s = o = null, CollectGarbage())
                        },
                        d = function(e) {
                            o && (l(), r(e))
                        },
                        f = function(e, t) {
                            try {
                                s && s.contentWindow && s.contentWindow.postMessage(e, t)
                            } catch (n) {}
                        };
                    o.open(), o.write('<html><script>document.domain="' + document.domain + '";</script></html>'), o.close(), o.parentWindow[u] = t[u];
                    var _ = o.createElement("div");
                    return o.body.appendChild(_), s = o.createElement("iframe"), _.appendChild(s), s.src = e, i = setTimeout(function() {
                        d("timeout")
                    }, 15e3), a = n.unload_add(l), {
                        post: f,
                        cleanup: l,
                        loaded: c
                    }
                };
                var w = function() {};
                w.prototype = new a(["chunk", "finish"]), w.prototype._start = function(e, r, o, i) {
                    var a = this;
                    try {
                        a.xhr = new XMLHttpRequest
                    } catch (s) {}
                    if (!a.xhr) try {
                        a.xhr = new t.ActiveXObject("Microsoft.XMLHTTP")
                    } catch (s) {}(t.ActiveXObject || t.XDomainRequest) && (r += (-1 === r.indexOf("?") ? "?" : "&") + "t=" + +new Date), a.unload_ref = n.unload_add(function() {
                        a._cleanup(!0)
                    });
                    try {
                        a.xhr.open(e, r, !0)
                    } catch (u) {
                        return a.emit("finish", 0, ""), void a._cleanup()
                    }
                    if (i && i.no_credentials || (a.xhr.withCredentials = "true"), i && i.headers)
                        for (var c in i.headers) a.xhr.setRequestHeader(c, i.headers[c]);
                    a.xhr.onreadystatechange = function() {
                        if (a.xhr) {
                            var e = a.xhr;
                            switch (e.readyState) {
                                case 3:
                                    try {
                                        var t = e.status,
                                            n = e.responseText
                                    } catch (e) {}
                                    1223 === t && (t = 204), n && n.length > 0 && a.emit("chunk", t, n);
                                    break;
                                case 4:
                                    var t = e.status;
                                    1223 === t && (t = 204), a.emit("finish", t, e.responseText), a._cleanup(!1)
                            }
                        }
                    }, a.xhr.send(o)
                }, w.prototype._cleanup = function(e) {
                    var t = this;
                    if (t.xhr) {
                        if (n.unload_del(t.unload_ref), t.xhr.onreadystatechange = function() {}, e) try {
                            t.xhr.abort()
                        } catch (r) {}
                        t.unload_ref = t.xhr = null
                    }
                }, w.prototype.close = function() {
                    var e = this;
                    e.nuke(), e._cleanup(!0)
                };
                var k = n.XHRCorsObject = function() {
                    var e = this,
                        t = arguments;
                    n.delay(function() {
                        e._start.apply(e, t)
                    })
                };
                k.prototype = new w;
                var S = n.XHRLocalObject = function(e, t, r) {
                    var o = this;
                    n.delay(function() {
                        o._start(e, t, r, {
                            no_credentials: !0
                        })
                    })
                };
                S.prototype = new w;
                var C = n.XDRObject = function(e, t, r) {
                    var o = this;
                    n.delay(function() {
                        o._start(e, t, r)
                    })
                };
                C.prototype = new a(["chunk", "finish"]), C.prototype._start = function(e, t, r) {
                    var o = this,
                        i = new XDomainRequest;
                    t += (-1 === t.indexOf("?") ? "?" : "&") + "t=" + +new Date;
                    var a = i.ontimeout = i.onerror = function() {
                        o.emit("finish", 0, ""), o._cleanup(!1)
                    };
                    i.onprogress = function() {
                        o.emit("chunk", 200, i.responseText)
                    }, i.onload = function() {
                        o.emit("finish", 200, i.responseText), o._cleanup(!1)
                    }, o.xdr = i, o.unload_ref = n.unload_add(function() {
                        o._cleanup(!0)
                    });
                    try {
                        o.xdr.open(e, t), o.xdr.send(r)
                    } catch (s) {
                        a()
                    }
                }, C.prototype._cleanup = function(e) {
                    var t = this;
                    if (t.xdr) {
                        if (n.unload_del(t.unload_ref), t.xdr.ontimeout = t.xdr.onerror = t.xdr.onprogress = t.xdr.onload = null, e) try {
                            t.xdr.abort()
                        } catch (r) {}
                        t.unload_ref = t.xdr = null
                    }
                }, C.prototype.close = function() {
                    var e = this;
                    e.nuke(), e._cleanup(!0)
                }, n.isXHRCorsCapable = function() {
                    return t.XMLHttpRequest && "withCredentials" in new XMLHttpRequest ? 1 : t.XDomainRequest && e.domain ? 2 : B.enabled() ? 3 : 4
                };
                var T = function(e, t, r) {
                    if (!(this instanceof T)) return new T(e, t, r);
                    var o = this,
                        i;
                    o._options = {
                        devel: !1,
                        debug: !1,
                        protocols_whitelist: [],
                        info: void 0,
                        rtt: void 0
                    }, r && n.objectExtend(o._options, r), o._base_url = n.amendUrl(e), o._server = o._options.server || n.random_number_string(1e3), o._options.protocols_whitelist && o._options.protocols_whitelist.length ? i = o._options.protocols_whitelist : (i = "string" == typeof t && t.length > 0 ? [t] : n.isArray(t) ? t : null, i && o._debug('Deprecated API: Use "protocols_whitelist" option instead of supplying protocol list as a second parameter to SockJS constructor.')), o._protocols = [], o.protocol = null, o.readyState = T.CONNECTING, o._ir = q(o._base_url), o._ir.onfinish = function(e, t) {
                        o._ir = null, e ? (o._options.info && (e = n.objectExtend(e, o._options.info)), o._options.rtt && (t = o._options.rtt), o._applyInfo(e, t, i), o._didClose()) : o._didClose(1002, "Can't connect to server", !0)
                    }
                };
                T.prototype = new r, T.version = "0.3.4", T.CONNECTING = 0, T.OPEN = 1, T.CLOSING = 2, T.CLOSED = 3, T.prototype._debug = function() {
                    this._options.debug && n.log.apply(n, arguments)
                }, T.prototype._dispatchOpen = function() {
                    var e = this;
                    e.readyState === T.CONNECTING ? (e._transport_tref && (clearTimeout(e._transport_tref), e._transport_tref = null), e.readyState = T.OPEN, e.dispatchEvent(new o("open"))) : e._didClose(1006, "Server lost session")
                }, T.prototype._dispatchMessage = function(e) {
                    var t = this;
                    t.readyState === T.OPEN && t.dispatchEvent(new o("message", {
                        data: e
                    }))
                }, T.prototype._dispatchHeartbeat = function(e) {
                    var t = this;
                    t.readyState === T.OPEN && t.dispatchEvent(new o("heartbeat", {}))
                }, T.prototype._didClose = function(e, t, r) {
                    var i = this;
                    if (i.readyState !== T.CONNECTING && i.readyState !== T.OPEN && i.readyState !== T.CLOSING) throw new Error("INVALID_STATE_ERR");
                    i._ir && (i._ir.nuke(), i._ir = null), i._transport && (i._transport.doCleanup(), i._transport = null);
                    var a = new o("close", {
                        code: e,
                        reason: t,
                        wasClean: n.userSetCode(e)
                    });
                    if (!n.userSetCode(e) && i.readyState === T.CONNECTING && !r) {
                        if (i._try_next_protocol(a)) return;
                        a = new o("close", {
                            code: 2e3,
                            reason: "All transports failed",
                            wasClean: !1,
                            last_event: a
                        })
                    }
                    i.readyState = T.CLOSED, n.delay(function() {
                        i.dispatchEvent(a)
                    })
                }, T.prototype._didMessage = function(e) {
                    var t = this,
                        n = e.slice(0, 1);
                    switch (n) {
                        case "o":
                            t._dispatchOpen();
                            break;
                        case "a":
                            for (var r = i.parse(e.slice(1) || "[]"), o = 0; o < r.length; o++) t._dispatchMessage(r[o]);
                            break;
                        case "m":
                            var r = i.parse(e.slice(1) || "null");
                            t._dispatchMessage(r);
                            break;
                        case "c":
                            var r = i.parse(e.slice(1) || "[]");
                            t._didClose(r[0], r[1]);
                            break;
                        case "h":
                            t._dispatchHeartbeat()
                    }
                }, T.prototype._try_next_protocol = function(t) {
                    var r = this;
                    for (r.protocol && (r._debug("Closed transport:", r.protocol, "" + t), r.protocol = null), r._transport_tref && (clearTimeout(r._transport_tref), r._transport_tref = null);;) {
                        var o = r.protocol = r._protocols.shift();
                        if (!o) return !1;
                        if (T[o] && T[o].need_body === !0 && (!e.body || "undefined" != typeof e.readyState && "complete" !== e.readyState)) return r._protocols.unshift(o), r.protocol = "waiting-for-load", n.attachEvent("load", function() {
                            r._try_next_protocol()
                        }), !0;
                        if (T[o] && T[o].enabled(r._options)) {
                            var i = T[o].roundTrips || 1,
                                a = (r._options.rto || 0) * i || 5e3;
                            r._transport_tref = n.delay(a, function() {
                                r.readyState === T.CONNECTING && r._didClose(2007, "Transport timeouted")
                            });
                            var s = n.random_string(8),
                                u = r._base_url + "/" + r._server + "/" + s;
                            return r._debug("Opening transport:", o, " url:" + u, " RTO:" + r._options.rto), r._transport = new T[o](r, u, r._base_url), !0
                        }
                        r._debug("Skipping transport:", o)
                    }
                }, T.prototype.close = function(e, t) {
                    var r = this;
                    if (e && !n.userSetCode(e)) throw new Error("INVALID_ACCESS_ERR");
                    return r.readyState !== T.CONNECTING && r.readyState !== T.OPEN ? !1 : (r.readyState = T.CLOSING, r._didClose(e || 1e3, t || "Normal closure"), !0)
                }, T.prototype.send = function(e) {
                    var t = this;
                    if (t.readyState === T.CONNECTING) throw new Error("INVALID_STATE_ERR");
                    return t.readyState === T.OPEN && t._transport.doSend(n.quote("" + e)), !0
                }, T.prototype._applyInfo = function(t, r, o) {
                    var i = this;
                    i._options.info = t, i._options.rtt = r, i._options.rto = n.countRTO(r), i._options.info.null_origin = !e.domain, t.base_url && (i._base_url = n.amendUrl(t.base_url, i._base_url));
                    var a = n.probeProtocols();
                    i._protocols = n.detectProtocols(a, o, t), n.isSameOriginScheme(i._base_url) || 2 !== n.isXHRCorsCapable() || (i._protocols = ["jsonp-polling"])
                };
                var E = T.websocket = function(e, r) {
                    var o = this,
                        i = r + "/websocket";
                    i = "https" === i.slice(0, 5) ? "wss" + i.slice(5) : "ws" + i.slice(4), o.ri = e, o.url = i;
                    var a = t.WebSocket || t.MozWebSocket;
                    o.ws = new a(o.url), o.ws.onmessage = function(e) {
                        o.ri._didMessage(e.data)
                    }, o.unload_ref = n.unload_add(function() {
                        o.ws.close()
                    }), o.ws.onclose = function() {
                        o.ri._didMessage(n.closeFrame(1006, "WebSocket connection broken"))
                    }
                };
                E.prototype.doSend = function(e) {
                    this.ws.send("[" + e + "]")
                }, E.prototype.doCleanup = function() {
                    var e = this,
                        t = e.ws;
                    t && (t.onmessage = t.onclose = null, t.close(), n.unload_del(e.unload_ref), e.unload_ref = e.ri = e.ws = null)
                }, E.enabled = function() {
                    return !(!t.WebSocket && !t.MozWebSocket)
                }, E.roundTrips = 2;
                var O = function() {};
                O.prototype.send_constructor = function(e) {
                    var t = this;
                    t.send_buffer = [], t.sender = e
                }, O.prototype.doSend = function(e) {
                    var t = this;
                    t.send_buffer.push(e), t.send_stop || t.send_schedule()
                }, O.prototype.send_schedule_wait = function() {
                    var e = this,
                        t;
                    e.send_stop = function() {
                        e.send_stop = null, clearTimeout(t)
                    }, t = n.delay(25, function() {
                        e.send_stop = null, e.send_schedule()
                    })
                }, O.prototype.send_schedule = function() {
                    var e = this;
                    if (e.send_buffer.length > 0) {
                        var t = "[" + e.send_buffer.join(",") + "]";
                        e.send_stop = e.sender(e.trans_url, t, function(t, n) {
                            e.send_stop = null, t === !1 ? e.ri._didClose(1006, "Sending error " + n) : e.send_schedule_wait()
                        }), e.send_buffer = []
                    }
                }, O.prototype.send_destructor = function() {
                    var e = this;
                    e._send_stop && e._send_stop(), e._send_stop = null
                };
                var x = function(t, r, o) {
                        var i = this;
                        if (!("_send_form" in i)) {
                            var a = i._send_form = e.createElement("form"),
                                s = i._send_area = e.createElement("textarea");
                            s.name = "d", a.style.display = "none", a.style.position = "absolute", a.method = "POST", a.enctype = "application/x-www-form-urlencoded", a.acceptCharset = "UTF-8", a.appendChild(s), e.body.appendChild(a)
                        }
                        var a = i._send_form,
                            s = i._send_area,
                            u = "a" + n.random_string(8);
                        a.target = u, a.action = t + "/jsonp_send?i=" + u;
                        var c;
                        try {
                            c = e.createElement('<iframe name="' + u + '">')
                        } catch (l) {
                            c = e.createElement("iframe"), c.name = u
                        }
                        c.id = u, a.appendChild(c), c.style.display = "none";
                        try {
                            s.value = r
                        } catch (d) {
                            n.log("Your browser is seriously broken. Go home! " + d.message)
                        }
                        a.submit();
                        var f = function(e) {
                            c.onerror && (c.onreadystatechange = c.onerror = c.onload = null, n.delay(500, function() {
                                c.parentNode.removeChild(c), c = null
                            }), s.value = "", o(!0))
                        };
                        return c.onerror = c.onload = f, c.onreadystatechange = function(e) {
                            "complete" == c.readyState && f()
                        }, f
                    },
                    I = function(e) {
                        return function(t, n, r) {
                            var o = new e("POST", t + "/xhr_send", n);
                            return o.onfinish = function(e, t) {
                                    r(200 === e || 204 === e, "http status " + e)
                                },
                                function(e) {
                                    r(!1, e)
                                }
                        }
                    },
                    M = function(t, r) {
                        var o, i = e.createElement("script"),
                            a, s = function(e) {
                                a && (a.parentNode.removeChild(a), a = null), i && (clearTimeout(o), i.parentNode.removeChild(i), i.onreadystatechange = i.onerror = i.onload = i.onclick = null, i = null, r(e), r = null)
                            },
                            u = !1,
                            c = null;
                        if (i.id = "a" + n.random_string(8), i.src = t, i.type = "text/javascript", i.charset = "UTF-8", i.onerror = function(e) {
                                c || (c = setTimeout(function() {
                                    u || s(n.closeFrame(1006, "JSONP script loaded abnormally (onerror)"))
                                }, 1e3))
                            }, i.onload = function(e) {
                                s(n.closeFrame(1006, "JSONP script loaded abnormally (onload)"))
                            }, i.onreadystatechange = function(e) {
                                if (/loaded|closed/.test(i.readyState)) {
                                    if (i && i.htmlFor && i.onclick) {
                                        u = !0;
                                        try {
                                            i.onclick()
                                        } catch (t) {}
                                    }
                                    i && s(n.closeFrame(1006, "JSONP script loaded abnormally (onreadystatechange)"))
                                }
                            }, "undefined" == typeof i.async && e.attachEvent)
                            if (/opera/i.test(navigator.userAgent)) a = e.createElement("script"), a.text = "try{var a = document.getElementById('" + i.id + "'); if(a)a.onerror();}catch(x){};", i.async = a.async = !1;
                            else {
                                try {
                                    i.htmlFor = i.id, i.event = "onclick"
                                } catch (l) {}
                                i.async = !0
                            }
                            "undefined" != typeof i.async && (i.async = !0), o = setTimeout(function() {
                            s(n.closeFrame(1006, "JSONP script loaded abnormally (timeout)"))
                        }, 35e3);
                        var d = e.getElementsByTagName("head")[0];
                        return d.insertBefore(i, d.firstChild), a && d.insertBefore(a, d.firstChild), s
                    },
                    D = T["jsonp-polling"] = function(e, t) {
                        n.polluteGlobalNamespace();
                        var r = this;
                        r.ri = e, r.trans_url = t, r.send_constructor(x), r._schedule_recv()
                    };
                D.prototype = new O, D.prototype._schedule_recv = function() {
                    var e = this,
                        t = function(t) {
                            e._recv_stop = null, t && (e._is_closing || e.ri._didMessage(t)), e._is_closing || e._schedule_recv()
                        };
                    e._recv_stop = R(e.trans_url + "/jsonp", M, t)
                }, D.enabled = function() {
                    return !0
                }, D.need_body = !0, D.prototype.doCleanup = function() {
                    var e = this;
                    e._is_closing = !0, e._recv_stop && e._recv_stop(), e.ri = e._recv_stop = null, e.send_destructor()
                };
                var R = function(e, r, o) {
                        var i = "a" + n.random_string(6),
                            a = e + "?c=" + escape(u + "." + i),
                            s = 0,
                            c = function(e) {
                                switch (s) {
                                    case 0:
                                        delete t[u][i], o(e);
                                        break;
                                    case 1:
                                        o(e), s = 2;
                                        break;
                                    case 2:
                                        delete t[u][i]
                                }
                            },
                            l = r(a, c);
                        t[u][i] = l;
                        var d = function() {
                            t[u][i] && (s = 1, t[u][i](n.closeFrame(1e3, "JSONP user aborted read")))
                        };
                        return d
                    },
                    P = function() {};
                P.prototype = new O, P.prototype.run = function(e, t, n, r, o) {
                    var i = this;
                    i.ri = e, i.trans_url = t, i.send_constructor(I(o)), i.poll = new Z(e, r, t + n, o)
                }, P.prototype.doCleanup = function() {
                    var e = this;
                    e.poll && (e.poll.abort(), e.poll = null)
                };
                var N = T["xhr-streaming"] = function(e, t) {
                    this.run(e, t, "/xhr_streaming", oe, n.XHRCorsObject)
                };
                N.prototype = new P, N.enabled = function() {
                    return t.XMLHttpRequest && "withCredentials" in new XMLHttpRequest && !/opera/i.test(navigator.userAgent)
                }, N.roundTrips = 2, N.need_body = !0;
                var j = T["xdr-streaming"] = function(e, t) {
                    this.run(e, t, "/xhr_streaming", oe, n.XDRObject)
                };
                j.prototype = new P, j.enabled = function() {
                    return !!t.XDomainRequest
                }, j.roundTrips = 2;
                var U = T["xhr-polling"] = function(e, t) {
                    this.run(e, t, "/xhr", oe, n.XHRCorsObject)
                };
                U.prototype = new P, U.enabled = N.enabled, U.roundTrips = 2;
                var A = T["xdr-polling"] = function(e, t) {
                    this.run(e, t, "/xhr", oe, n.XDRObject)
                };
                A.prototype = new P, A.enabled = j.enabled, A.roundTrips = 2;
                var B = function() {};
                B.prototype.i_constructor = function(e, t, r) {
                    var o = this;
                    o.ri = e, o.origin = n.getOrigin(r), o.base_url = r, o.trans_url = t;
                    var i = r + "/iframe.html";
                    o.ri._options.devel && (i += "?t=" + +new Date), o.window_id = n.random_string(8), i += "#" + o.window_id, o.iframeObj = n.createIframe(i, function(e) {
                        o.ri._didClose(1006, "Unable to load an iframe (" + e + ")")
                    }), o.onmessage_cb = n.bind(o.onmessage, o), n.attachMessage(o.onmessage_cb)
                }, B.prototype.doCleanup = function() {
                    var e = this;
                    if (e.iframeObj) {
                        n.detachMessage(e.onmessage_cb);
                        try {
                            e.iframeObj.iframe.contentWindow && e.postMessage("c")
                        } catch (t) {}
                        e.iframeObj.cleanup(), e.iframeObj = null, e.onmessage_cb = e.iframeObj = null
                    }
                }, B.prototype.onmessage = function(e) {
                    var t = this;
                    if (e.origin === t.origin) {
                        var n = e.data.slice(0, 8),
                            r = e.data.slice(8, 9),
                            o = e.data.slice(9);
                        if (n === t.window_id) switch (r) {
                            case "s":
                                t.iframeObj.loaded(), t.postMessage("s", i.stringify([T.version, t.protocol, t.trans_url, t.base_url]));
                                break;
                            case "t":
                                t.ri._didMessage(o)
                        }
                    }
                }, B.prototype.postMessage = function(e, t) {
                    var n = this;
                    n.iframeObj.post(n.window_id + e + (t || ""), n.origin)
                }, B.prototype.doSend = function(e) {
                    this.postMessage("m", e)
                }, B.enabled = function() {
                    var e = navigator && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Konqueror");
                    return ("function" == typeof t.postMessage || "object" == typeof t.postMessage) && !e
                };
                var H, L = function(e, r) {
                        parent !== t ? parent.postMessage(H + e + (r || ""), "*") : n.log("Can't postMessage, no parent window.", e, r)
                    },
                    F = function() {};
                F.prototype._didClose = function(e, t) {
                    L("t", n.closeFrame(e, t))
                }, F.prototype._didMessage = function(e) {
                    L("t", e)
                }, F.prototype._doSend = function(e) {
                    this._transport.doSend(e)
                }, F.prototype._doCleanup = function() {
                    this._transport.doCleanup()
                }, n.parent_origin = void 0, T.bootstrap_iframe = function() {
                    var r;
                    H = e.location.hash.slice(1);
                    var o = function(e) {
                        if (e.source === parent && ("undefined" == typeof n.parent_origin && (n.parent_origin = e.origin), e.origin === n.parent_origin)) {
                            var o = e.data.slice(0, 8),
                                a = e.data.slice(8, 9),
                                s = e.data.slice(9);
                            if (o === H) switch (a) {
                                case "s":
                                    var u = i.parse(s),
                                        c = u[0],
                                        l = u[1],
                                        d = u[2],
                                        f = u[3];
                                    if (c !== T.version && n.log('Incompatibile SockJS! Main site uses: "' + c + '", the iframe: "' + T.version + '".'), !n.flatUrl(d) || !n.flatUrl(f)) return void n.log("Only basic urls are supported in SockJS");
                                    if (!n.isSameOriginUrl(d) || !n.isSameOriginUrl(f)) return void n.log("Can't connect to different domain from within an iframe. (" + i.stringify([t.location.href, d, f]) + ")");
                                    r = new F, r._transport = new F[l](r, d, f);
                                    break;
                                case "m":
                                    r._doSend(s);
                                    break;
                                case "c":
                                    r && r._doCleanup(), r = null
                            }
                        }
                    };
                    n.attachMessage(o), L("s")
                };
                var X = function(e, t) {
                    var r = this;
                    n.delay(function() {
                        r.doXhr(e, t)
                    })
                };
                X.prototype = new a(["finish"]), X.prototype.doXhr = function(e, t) {
                    var r = this,
                        o = (new Date).getTime(),
                        a = new t("GET", e + "/info?cb=" + n.random_string(10)),
                        s = n.delay(8e3, function() {
                            a.ontimeout()
                        });
                    a.onfinish = function(e, t) {
                        if (clearTimeout(s), s = null, 200 === e) {
                            var n = (new Date).getTime() - o,
                                a = i.parse(t);
                            "object" != typeof a && (a = {}), r.emit("finish", a, n)
                        } else r.emit("finish")
                    }, a.ontimeout = function() {
                        a.close(), r.emit("finish")
                    }
                };
                var V = function(t) {
                    var r = this,
                        o = function() {
                            var e = new B;
                            e.protocol = "w-iframe-info-receiver";
                            var n = function(t) {
                                    if ("string" == typeof t && "m" === t.substr(0, 1)) {
                                        var n = i.parse(t.substr(1)),
                                            o = n[0],
                                            a = n[1];
                                        r.emit("finish", o, a)
                                    } else r.emit("finish");
                                    e.doCleanup(), e = null
                                },
                                o = {
                                    _options: {},
                                    _didClose: n,
                                    _didMessage: n
                                };
                            e.i_constructor(o, t, t)
                        };
                    e.body ? o() : n.attachEvent("load", o)
                };
                V.prototype = new a(["finish"]);
                var W = function() {
                    var e = this;
                    n.delay(function() {
                        e.emit("finish", {}, 2e3)
                    })
                };
                W.prototype = new a(["finish"]);
                var q = function(e) {
                        if (n.isSameOriginUrl(e)) return new X(e, n.XHRLocalObject);
                        switch (n.isXHRCorsCapable()) {
                            case 1:
                                return new X(e, n.XHRLocalObject);
                            case 2:
                                return n.isSameOriginScheme(e) ? new X(e, n.XDRObject) : new W;
                            case 3:
                                return new V(e);
                            default:
                                return new W
                        }
                    },
                    G = F["w-iframe-info-receiver"] = function(e, t, r) {
                        var o = new X(r, n.XHRLocalObject);
                        o.onfinish = function(t, n) {
                            e._didMessage("m" + i.stringify([t, n])), e._didClose()
                        }
                    };
                G.prototype.doCleanup = function() {};
                var J = T["iframe-eventsource"] = function() {
                    var e = this;
                    e.protocol = "w-iframe-eventsource", e.i_constructor.apply(e, arguments)
                };
                J.prototype = new B, J.enabled = function() {
                    return "EventSource" in t && B.enabled()
                }, J.need_body = !0, J.roundTrips = 3;
                var Q = F["w-iframe-eventsource"] = function(e, t) {
                    this.run(e, t, "/eventsource", ee, n.XHRLocalObject)
                };
                Q.prototype = new P;
                var z = T["iframe-xhr-polling"] = function() {
                    var e = this;
                    e.protocol = "w-iframe-xhr-polling", e.i_constructor.apply(e, arguments)
                };
                z.prototype = new B, z.enabled = function() {
                    return t.XMLHttpRequest && B.enabled()
                }, z.need_body = !0, z.roundTrips = 3;
                var $ = F["w-iframe-xhr-polling"] = function(e, t) {
                    this.run(e, t, "/xhr", oe, n.XHRLocalObject)
                };
                $.prototype = new P;
                var Y = T["iframe-htmlfile"] = function() {
                    var e = this;
                    e.protocol = "w-iframe-htmlfile", e.i_constructor.apply(e, arguments)
                };
                Y.prototype = new B, Y.enabled = function() {
                    return B.enabled()
                }, Y.need_body = !0, Y.roundTrips = 3;
                var K = F["w-iframe-htmlfile"] = function(e, t) {
                    this.run(e, t, "/htmlfile", re, n.XHRLocalObject)
                };
                K.prototype = new P;
                var Z = function(e, t, n, r) {
                    var o = this;
                    o.ri = e, o.Receiver = t, o.recv_url = n, o.AjaxObject = r, o._scheduleRecv()
                };
                Z.prototype._scheduleRecv = function() {
                    var e = this,
                        t = e.poll = new e.Receiver(e.recv_url, e.AjaxObject),
                        n = 0;
                    t.onmessage = function(t) {
                        n += 1, e.ri._didMessage(t.data)
                    }, t.onclose = function(n) {
                        e.poll = t = t.onmessage = t.onclose = null, e.poll_is_closing || ("permanent" === n.reason ? e.ri._didClose(1006, "Polling error (" + n.reason + ")") : e._scheduleRecv())
                    }
                }, Z.prototype.abort = function() {
                    var e = this;
                    e.poll_is_closing = !0, e.poll && e.poll.abort()
                };
                var ee = function(e) {
                    var t = this,
                        r = new EventSource(e);
                    r.onmessage = function(e) {
                        t.dispatchEvent(new o("message", {
                            data: unescape(e.data)
                        }))
                    }, t.es_close = r.onerror = function(e, i) {
                        var a = i ? "user" : 2 !== r.readyState ? "network" : "permanent";
                        t.es_close = r.onmessage = r.onerror = null, r.close(), r = null, n.delay(200, function() {
                            t.dispatchEvent(new o("close", {
                                reason: a
                            }))
                        })
                    }
                };
                ee.prototype = new r, ee.prototype.abort = function() {
                    var e = this;
                    e.es_close && e.es_close({}, !0)
                };
                var te, ne = function() {
                        if (void 0 === te)
                            if ("ActiveXObject" in t) try {
                                te = !!new ActiveXObject("htmlfile")
                            } catch (e) {} else te = !1;
                        return te
                    },
                    re = function(e) {
                        var r = this;
                        n.polluteGlobalNamespace(), r.id = "a" + n.random_string(6, 26), e += (-1 === e.indexOf("?") ? "?" : "&") + "c=" + escape(u + "." + r.id);
                        var i = ne() ? n.createHtmlfile : n.createIframe,
                            a;
                        t[u][r.id] = {
                            start: function() {
                                a.loaded()
                            },
                            message: function(e) {
                                r.dispatchEvent(new o("message", {
                                    data: e
                                }))
                            },
                            stop: function() {
                                r.iframe_close({}, "network")
                            }
                        }, r.iframe_close = function(e, n) {
                            a.cleanup(), r.iframe_close = a = null, delete t[u][r.id], r.dispatchEvent(new o("close", {
                                reason: n
                            }))
                        }, a = i(e, function(e) {
                            r.iframe_close({}, "permanent")
                        })
                    };
                re.prototype = new r, re.prototype.abort = function() {
                    var e = this;
                    e.iframe_close && e.iframe_close({}, "user")
                };
                var oe = function(e, t) {
                    var n = this,
                        r = 0;
                    n.xo = new t("POST", e, null), n.xo.onchunk = function(e, t) {
                        if (200 === e)
                            for (;;) {
                                var i = t.slice(r),
                                    a = i.indexOf("\n");
                                if (-1 === a) break;
                                r += a + 1;
                                var s = i.slice(0, a);
                                n.dispatchEvent(new o("message", {
                                    data: s
                                }))
                            }
                    }, n.xo.onfinish = function(e, t) {
                        n.xo.onchunk(e, t), n.xo = null;
                        var r = 200 === e ? "network" : "permanent";
                        n.dispatchEvent(new o("close", {
                            reason: r
                        }))
                    }
                };
                return oe.prototype = new r, oe.prototype.abort = function() {
                    var e = this;
                    e.xo && (e.xo.close(), e.dispatchEvent(new o("close", {
                        reason: "user"
                    })), e.xo = null)
                }, T.getUtils = function() {
                    return n
                }, T.getIframeTransport = function() {
                    return B
                }, T
            }(), "_sockjs_onload" in window && setTimeout(_sockjs_onload, 1), "function" == typeof define && define.amd && define("sockjs", [], function() {
                return h
            })
        }.call(this),
        function() {
            p.ClientStream = function(e, t) {
                var n = this;
                n.options = a.extend({
                    retry: !0
                }, t), n._initCommon(n.options), n.HEARTBEAT_TIMEOUT = 1e5, n.rawUrl = e, n.socket = null, n.heartbeatTimer = null, "undefined" != typeof window && window.addEventListener && window.addEventListener("online", a.bind(n._online, n), !1), n._launchConnection()
            }, a.extend(p.ClientStream.prototype, {
                send: function(e) {
                    var t = this;
                    t.currentStatus.connected && t.socket.send(e)
                },
                _changeUrl: function(e) {
                    var t = this;
                    t.rawUrl = e
                },
                _connected: function() {
                    var e = this;
                    e.connectionTimer && (clearTimeout(e.connectionTimer), e.connectionTimer = null), e.currentStatus.connected || (e.currentStatus.status = "connected", e.currentStatus.connected = !0, e.currentStatus.retryCount = 0, e.statusChanged(), a.each(e.eventCallbacks.reset, function(e) {
                        e()
                    }))
                },
                _cleanup: function(e) {
                    var t = this;
                    t._clearConnectionAndHeartbeatTimers(), t.socket && (t.socket.onmessage = t.socket.onclose = t.socket.onerror = t.socket.onheartbeat = function() {}, t.socket.close(), t.socket = null), a.each(t.eventCallbacks.disconnect, function(t) {
                        t(e)
                    })
                },
                _clearConnectionAndHeartbeatTimers: function() {
                    var e = this;
                    e.connectionTimer && (clearTimeout(e.connectionTimer), e.connectionTimer = null), e.heartbeatTimer && (clearTimeout(e.heartbeatTimer), e.heartbeatTimer = null)
                },
                _heartbeat_timeout: function() {
                    var t = this;
                    e._debug("Connection timeout. No sockjs heartbeat received."), t._lostConnection(new _.ConnectionError("Heartbeat timed out"))
                },
                _heartbeat_received: function() {
                    var e = this;
                    e._forcedToDisconnect || (e.heartbeatTimer && clearTimeout(e.heartbeatTimer), e.heartbeatTimer = setTimeout(a.bind(e._heartbeat_timeout, e), e.HEARTBEAT_TIMEOUT))
                },
                _sockjsProtocolsWhitelist: function() {
                    var e = ["xdr-polling", "xhr-polling", "iframe-xhr-polling", "jsonp-polling"],
                        t = navigator && /iPhone|iPad|iPod/.test(navigator.userAgent) && /OS 4_|OS 5_/.test(navigator.userAgent);

                    return t || (e = ["websocket"].concat(e)), e
                },
                _launchConnection: function() {
                    var t = this;
                    t._cleanup();
                    var n = a.extend({
                        protocols_whitelist: t._sockjsProtocolsWhitelist()
                    }, t.options._sockjsOptions);
                    t.socket = new h(v(t.rawUrl), void 0, n), t.socket.onopen = function(e) {
                        t._connected()
                    }, t.socket.onmessage = function(e) {
                        t._heartbeat_received(), t.currentStatus.connected && a.each(t.eventCallbacks.message, function(t) {
                            t(e.data)
                        })
                    }, t.socket.onclose = function() {
                        t._lostConnection()
                    }, t.socket.onerror = function() {
                        e._debug("stream error", a.toArray(arguments), (new Date).toDateString())
                    }, t.socket.onheartbeat = function() {
                        t._heartbeat_received()
                    }, t.connectionTimer && clearTimeout(t.connectionTimer), t.connectionTimer = setTimeout(function() {
                        t._lostConnection(new _.ConnectionError("DDP connection timed out"))
                    }, t.CONNECT_TIMEOUT)
                }
            })
        }.call(this),
        function() {
            var t = function(e, t) {
                    return e.length >= t.length && e.substring(0, t.length) === t
                },
                n = function(e, t) {
                    return e.length >= t.length && e.substring(e.length - t.length) === t
                },
                o = function(o, i, a) {
                    i || (i = "http");
                    var s = o.match(/^ddp(i?)\+sockjs:\/\//),
                        u = o.match(/^http(s?):\/\//),
                        c;
                    if (s) {
                        var l = o.substr(s[0].length);
                        c = "i" === s[1] ? i : i + "s";
                        var d = l.indexOf("/"),
                            f = -1 === d ? l : l.substr(0, d),
                            _ = -1 === d ? "" : l.substr(d);
                        return f = f.replace(/\*/g, function() {
                            return Math.floor(10 * r.fraction())
                        }), c + "://" + f + _
                    }
                    if (u) {
                        c = u[1] ? i + "s" : i;
                        var p = o.substr(u[0].length);
                        o = c + "://" + p
                    }
                    return -1 !== o.indexOf("://") || t(o, "/") || (o = i + "://" + o), o = e._relativeToSiteRootUrl(o), n(o, "/") ? o + a : o + "/" + a
                };
            v = function(e) {
                return o(e, "http", "sockjs")
            }, m = function(e) {
                var t = o(e, "ws", "websocket");
                return t
            }, p.toSockjsUrl = v, a.extend(p.ClientStream.prototype, {
                on: function(e, t) {
                    var n = this;
                    if ("message" !== e && "reset" !== e && "disconnect" !== e) throw new Error("unknown event type: " + e);
                    n.eventCallbacks[e] || (n.eventCallbacks[e] = []), n.eventCallbacks[e].push(t)
                },
                _initCommon: function(e) {
                    var t = this;
                    e = e || {}, t.CONNECT_TIMEOUT = e.connectTimeoutMs || 1e4, t.eventCallbacks = {}, t._forcedToDisconnect = !1, t.currentStatus = {
                        status: "connecting",
                        connected: !1,
                        retryCount: 0
                    }, t.statusListeners = "undefined" != typeof s && new s.Dependency, t.statusChanged = function() {
                        t.statusListeners && t.statusListeners.changed()
                    }, t._retry = new l, t.connectionTimer = null
                },
                reconnect: function(e) {
                    var t = this;
                    return e = e || {}, e.url && t._changeUrl(e.url), e._sockjsOptions && (t.options._sockjsOptions = e._sockjsOptions), t.currentStatus.connected ? void((e._force || e.url) && t._lostConnection(new _.ForcedReconnectError)) : ("connecting" === t.currentStatus.status && t._lostConnection(), t._retry.clear(), t.currentStatus.retryCount -= 1, void t._retryNow())
                },
                disconnect: function(e) {
                    var t = this;
                    e = e || {}, t._forcedToDisconnect || (e._permanent && (t._forcedToDisconnect = !0), t._cleanup(), t._retry.clear(), t.currentStatus = {
                        status: e._permanent ? "failed" : "offline",
                        connected: !1,
                        retryCount: 0
                    }, e._permanent && e._error && (t.currentStatus.reason = e._error), t.statusChanged())
                },
                _lostConnection: function(e) {
                    var t = this;
                    t._cleanup(e), t._retryLater(e)
                },
                _online: function() {
                    "offline" != this.currentStatus.status && this.reconnect()
                },
                _retryLater: function(e) {
                    var t = this,
                        n = 0;
                    t.options.retry || e && "DDP.ForcedReconnectError" === e.errorType ? (n = t._retry.retryLater(t.currentStatus.retryCount, a.bind(t._retryNow, t)), t.currentStatus.status = "waiting", t.currentStatus.retryTime = (new Date).getTime() + n) : (t.currentStatus.status = "failed", delete t.currentStatus.retryTime), t.currentStatus.connected = !1, t.statusChanged()
                },
                _retryNow: function() {
                    var e = this;
                    e._forcedToDisconnect || (e.currentStatus.retryCount += 1, e.currentStatus.status = "connecting", e.currentStatus.connected = !1, delete e.currentStatus.retryTime, e.statusChanged(), e._launchConnection())
                },
                status: function() {
                    var e = this;
                    return e.statusListeners && e.statusListeners.depend(), e.currentStatus
                }
            }), _.ConnectionError = e.makeErrorType("DDP.ConnectionError", function(e) {
                var t = this;
                t.message = e
            }), _.ForcedReconnectError = e.makeErrorType("DDP.ForcedReconnectError", function() {})
        }.call(this),
        function() {
            g = function(e) {
                var t = this;
                t.heartbeatInterval = e.heartbeatInterval, t.heartbeatTimeout = e.heartbeatTimeout, t._sendPing = e.sendPing, t._onTimeout = e.onTimeout, t._heartbeatIntervalHandle = null, t._heartbeatTimeoutHandle = null
            }, a.extend(g.prototype, {
                stop: function() {
                    var e = this;
                    e._clearHeartbeatIntervalTimer(), e._clearHeartbeatTimeoutTimer()
                },
                start: function() {
                    var e = this;
                    e.stop(), e._startHeartbeatIntervalTimer()
                },
                _startHeartbeatIntervalTimer: function() {
                    var t = this;
                    t._heartbeatIntervalHandle = e.setTimeout(a.bind(t._heartbeatIntervalFired, t), t.heartbeatInterval)
                },
                _startHeartbeatTimeoutTimer: function() {
                    var t = this;
                    t._heartbeatTimeoutHandle = e.setTimeout(a.bind(t._heartbeatTimeoutFired, t), t.heartbeatTimeout)
                },
                _clearHeartbeatIntervalTimer: function() {
                    var t = this;
                    t._heartbeatIntervalHandle && (e.clearTimeout(t._heartbeatIntervalHandle), t._heartbeatIntervalHandle = null)
                },
                _clearHeartbeatTimeoutTimer: function() {
                    var t = this;
                    t._heartbeatTimeoutHandle && (e.clearTimeout(t._heartbeatTimeoutHandle), t._heartbeatTimeoutHandle = null)
                },
                _heartbeatIntervalFired: function() {
                    var e = this;
                    e._heartbeatIntervalHandle = null, e._sendPing(), e._startHeartbeatTimeoutTimer()
                },
                _heartbeatTimeoutFired: function() {
                    var e = this;
                    e._heartbeatTimeoutHandle = null, e._onTimeout()
                },
                pingReceived: function() {
                    var e = this;
                    e._heartbeatIntervalHandle && (e._clearHeartbeatIntervalTimer(), e._startHeartbeatIntervalTimer())
                },
                pongReceived: function() {
                    var e = this;
                    e._heartbeatTimeoutHandle && (e._clearHeartbeatTimeoutTimer(), e._startHeartbeatIntervalTimer())
                }
            })
        }.call(this),
        function() {
            b = ["1", "pre2", "pre1"], p.SUPPORTED_DDP_VERSIONS = b, y = function(e) {
                var t = this;
                this.isSimulation = e.isSimulation, this._unblock = e.unblock || function() {}, this._calledUnblock = !1, this.userId = e.userId, this._setUserId = e.setUserId || function() {}, this.connection = e.connection, this.randomSeed = e.randomSeed, this.randomStream = null
            }, a.extend(y.prototype, {
                unblock: function() {
                    var e = this;
                    e._calledUnblock = !0, e._unblock()
                },
                setUserId: function(e) {
                    var t = this;
                    if (t._calledUnblock) throw new Error("Can't call setUserId in a method after calling unblock");
                    t.userId = e, t._setUserId(e)
                }
            }), w = function(t) {
                try {
                    var n = i.parse(t)
                } catch (r) {
                    return e._debug("Discarding message with invalid JSON", t), null
                }
                return null === n || "object" != typeof n ? (e._debug("Discarding non-object DDP message", t), null) : (a.has(n, "cleared") && (a.has(n, "fields") || (n.fields = {}), a.each(n.cleared, function(e) {
                    n.fields[e] = void 0
                }), delete n.cleared), a.each(["fields", "params", "result"], function(e) {
                    a.has(n, e) && (n[e] = o._adjustTypesFromJSONValue(n[e]))
                }), n)
            }, k = function(e) {
                var t = o.clone(e);
                if (a.has(e, "fields")) {
                    var n = [];
                    a.each(e.fields, function(e, r) {
                        void 0 === e && (n.push(r), delete t.fields[r])
                    }), a.isEmpty(n) || (t.cleared = n), a.isEmpty(t.fields) && delete t.fields
                }
                if (a.each(["fields", "params", "result"], function(e) {
                        a.has(t, e) && (t[e] = o._adjustTypesToJSONValue(t[e]))
                    }), e.id && "string" != typeof e.id) throw new Error("Message id is not a string");
                return i.stringify(t)
            }, _._CurrentInvocation = new e.EnvironmentVariable
        }.call(this),
        function() {
            function e() {
                return r.hexString(20)
            }
            S = function(t) {
                var n = this;
                this.seed = [].concat(t.seed || e()), this.sequences = {}
            }, S.get = function(e, t) {
                if (t || (t = "default"), !e) return r;
                var n = e.randomStream;
                return n || (e.randomStream = n = new S({
                    seed: e.randomSeed
                })), n._sequence(t)
            }, _.randomStream = function(e) {
                var t = _._CurrentInvocation.get();
                return S.get(t, e)
            }, C = function(e, t) {
                var n = S.get(e, "/rpc/" + t);
                return n.hexString(20)
            }, a.extend(S.prototype, {
                _sequence: function(e) {
                    var t = this,
                        n = t.sequences[e] || null;
                    if (null === n) {
                        for (var o = t.seed.concat(e), i = 0; i < o.length; i++) a.isFunction(o[i]) && (o[i] = o[i]());
                        t.sequences[e] = n = r.createWithSeeds.apply(null, o)
                    }
                    return n
                }
            })
        }.call(this),
        function() {
            if (e.isServer) var t = Npm.require("path"),
                n = Npm.require("fibers"),
                u = Npm.require(t.join("fibers", "future"));
            var c = function(t, n) {
                    var r = this;
                    n = a.extend({
                        onConnected: function() {},
                        onDDPVersionNegotiationFailure: function(t) {
                            e._debug(t)
                        },
                        heartbeatInterval: 35e3,
                        heartbeatTimeout: 15e3,
                        reloadWithOutstanding: !1,
                        supportedDDPVersions: b,
                        retry: !0,
                        respondToPings: !0
                    }, n), r.onReconnect = null, r._stream = "object" == typeof t ? t : new p.ClientStream(t, {
                        retry: n.retry,
                        headers: n.headers,
                        _sockjsOptions: n._sockjsOptions,
                        _dontPrintErrors: n._dontPrintErrors,
                        connectTimeoutMs: n.connectTimeoutMs
                    }), r._lastSessionId = null, r._versionSuggestion = null, r._version = null, r._stores = {}, r._methodHandlers = {}, r._nextMethodId = 1, r._supportedDDPVersions = n.supportedDDPVersions, r._heartbeatInterval = n.heartbeatInterval, r._heartbeatTimeout = n.heartbeatTimeout, r._methodInvokers = {}, r._outstandingMethodBlocks = [], r._documentsWrittenByStub = {}, r._serverDocuments = {}, r._afterUpdateCallbacks = [], r._messagesBufferedUntilQuiescence = [], r._methodsBlockingQuiescence = {}, r._subsBeingRevived = {}, r._resetStores = !1, r._updatesForUnknownStores = {}, r._retryMigrate = null, r._subscriptions = {}, r._userId = null, r._userIdDeps = new s.Dependency, e.isClient && Package.reload && !n.reloadWithOutstanding && Package.reload.Reload._onMigrate(function(e) {
                        if (r._readyToMigrate()) return [!0];
                        if (r._retryMigrate) throw new Error("Two migrations in progress?");
                        return r._retryMigrate = e, !1
                    });
                    var o = function(t) {
                            try {
                                var o = w(t)
                            } catch (i) {
                                return void e._debug("Exception while parsing DDP", i)
                            }
                            if (null === o || !o.msg) return void(o && o.server_id || e._debug("discarding invalid livedata message", o));
                            if ("connected" === o.msg) r._version = r._versionSuggestion, r._livedata_connected(o), n.onConnected();
                            else if ("failed" == o.msg)
                                if (a.contains(r._supportedDDPVersions, o.version)) r._versionSuggestion = o.version, r._stream.reconnect({
                                    _force: !0
                                });
                                else {
                                    var s = "DDP version negotiation failed; server requested version " + o.version;
                                    r._stream.disconnect({
                                        _permanent: !0,
                                        _error: s
                                    }), n.onDDPVersionNegotiationFailure(s)
                                } else "ping" === o.msg ? (n.respondToPings && r._send({
                                msg: "pong",
                                id: o.id
                            }), r._heartbeat && r._heartbeat.pingReceived()) : "pong" === o.msg ? r._heartbeat && r._heartbeat.pongReceived() : a.include(["added", "changed", "removed", "ready", "updated"], o.msg) ? r._livedata_data(o) : "nosub" === o.msg ? r._livedata_nosub(o) : "result" === o.msg ? r._livedata_result(o) : "error" === o.msg ? r._livedata_error(o) : e._debug("discarding unknown livedata message type", o)
                        },
                        i = function() {
                            var e = {
                                msg: "connect"
                            };
                            r._lastSessionId && (e.session = r._lastSessionId), e.version = r._versionSuggestion || r._supportedDDPVersions[0], r._versionSuggestion = e.version, e.support = r._supportedDDPVersions, r._send(e), !a.isEmpty(r._outstandingMethodBlocks) && a.isEmpty(r._outstandingMethodBlocks[0].methods) && r._outstandingMethodBlocks.shift(), a.each(r._methodInvokers, function(e) {
                                e.sentMessage = !1
                            }), r.onReconnect ? r._callOnReconnectAndSendAppropriateOutstandingMethods() : r._sendOutstandingMethods(), a.each(r._subscriptions, function(e, t) {
                                r._send({
                                    msg: "sub",
                                    id: t,
                                    name: e.name,
                                    params: e.params
                                })
                            })
                        },
                        u = function() {
                            r._heartbeat && (r._heartbeat.stop(), r._heartbeat = null)
                        };
                    e.isServer ? (r._stream.on("message", e.bindEnvironment(o, e._debug)), r._stream.on("reset", e.bindEnvironment(i, e._debug)), r._stream.on("disconnect", e.bindEnvironment(u, e._debug))) : (r._stream.on("message", o), r._stream.on("reset", i), r._stream.on("disconnect", u))
                },
                l = function(e) {
                    var t = this;
                    t.methodId = e.methodId, t.sentMessage = !1, t._callback = e.callback, t._connection = e.connection, t._message = e.message, t._onResultReceived = e.onResultReceived || function() {}, t._wait = e.wait, t._methodResult = null, t._dataVisible = !1, t._connection._methodInvokers[t.methodId] = t
                };
            a.extend(l.prototype, {
                sendMessage: function() {
                    var e = this;
                    if (e.gotResult()) throw new Error("sendingMethod is called on method with result");
                    e._dataVisible = !1, e.sentMessage = !0, e._wait && (e._connection._methodsBlockingQuiescence[e.methodId] = !0), e._connection._send(e._message)
                },
                _maybeInvokeCallback: function() {
                    var e = this;
                    e._methodResult && e._dataVisible && (e._callback(e._methodResult[0], e._methodResult[1]), delete e._connection._methodInvokers[e.methodId], e._connection._outstandingMethodFinished())
                },
                receiveResult: function(e, t) {
                    var n = this;
                    if (n.gotResult()) throw new Error("Methods should only receive results once");
                    n._methodResult = [e, t], n._onResultReceived(e, t), n._maybeInvokeCallback()
                },
                dataVisible: function() {
                    var e = this;
                    e._dataVisible = !0, e._maybeInvokeCallback()
                },
                gotResult: function() {
                    var e = this;
                    return !!e._methodResult
                }
            }), a.extend(c.prototype, {
                registerStore: function(e, t) {
                    var n = this;
                    if (e in n._stores) return !1;
                    var r = {};
                    a.each(["update", "beginUpdate", "endUpdate", "saveOriginals", "retrieveOriginals"], function(e) {
                        r[e] = function() {
                            return t[e] ? t[e].apply(t, arguments) : void 0
                        }
                    }), n._stores[e] = r;
                    var o = n._updatesForUnknownStores[e];
                    return o && (r.beginUpdate(o.length, !1), a.each(o, function(e) {
                        r.update(e)
                    }), r.endUpdate(), delete n._updatesForUnknownStores[e]), !0
                },
                subscribe: function(e) {
                    var t = this,
                        n = Array.prototype.slice.call(arguments, 1),
                        i = {};
                    if (n.length) {
                        var u = n[n.length - 1];
                        a.isFunction(u) ? i.onReady = n.pop() : u && a.any([u.onReady, u.onError, u.onStop], a.isFunction) && (i = n.pop())
                    }
                    var c = a.find(t._subscriptions, function(t) {
                            return t.inactive && t.name === e && o.equals(t.params, n)
                        }),
                        l;
                    c ? (l = c.id, c.inactive = !1, i.onReady && (c.ready || (c.readyCallback = i.onReady)), i.onError && (c.errorCallback = i.onError), i.onStop && (c.stopCallback = i.onStop)) : (l = r.id(), t._subscriptions[l] = {
                        id: l,
                        name: e,
                        params: o.clone(n),
                        inactive: !1,
                        ready: !1,
                        readyDeps: new s.Dependency,
                        readyCallback: i.onReady,
                        errorCallback: i.onError,
                        stopCallback: i.onStop,
                        connection: t,
                        remove: function() {
                            delete this.connection._subscriptions[this.id], this.ready && this.readyDeps.changed()
                        },
                        stop: function() {
                            this.connection._send({
                                msg: "unsub",
                                id: l
                            }), this.remove(), i.onStop && i.onStop()
                        }
                    }, t._send({
                        msg: "sub",
                        id: l,
                        name: e,
                        params: n
                    }));
                    var d = {
                        stop: function() {
                            a.has(t._subscriptions, l) && t._subscriptions[l].stop()
                        },
                        ready: function() {
                            if (!a.has(t._subscriptions, l)) return !1;
                            var e = t._subscriptions[l];
                            return e.readyDeps.depend(), e.ready
                        },
                        subscriptionId: l
                    };
                    return s.active && s.onInvalidate(function(e) {
                        a.has(t._subscriptions, l) && (t._subscriptions[l].inactive = !0), s.afterFlush(function() {
                            a.has(t._subscriptions, l) && t._subscriptions[l].inactive && d.stop()
                        })
                    }), d
                },
                _subscribeAndWait: function(e, t, n) {
                    var r = this,
                        o = new u,
                        i = !1,
                        a;
                    return t = t || [], t.push({
                        onReady: function() {
                            i = !0, o["return"]()
                        },
                        onError: function(e) {
                            i ? n && n.onLateError && n.onLateError(e) : o["throw"](e)
                        }
                    }), a = r.subscribe.apply(r, [e].concat(t)), o.wait(), a
                },
                methods: function(e) {
                    var t = this;
                    a.each(e, function(e, n) {
                        if (t._methodHandlers[n]) throw new Error("A method named '" + n + "' is already defined");
                        t._methodHandlers[n] = e
                    })
                },
                call: function(e) {
                    var t = Array.prototype.slice.call(arguments, 1);
                    if (t.length && "function" == typeof t[t.length - 1]) var n = t.pop();
                    return this.apply(e, t, n)
                },
                apply: function(t, n, r, i) {
                    var s = this;
                    i || "function" != typeof r || (i = r, r = {}), r = r || {}, i && (i = e.bindEnvironment(i, "delivering result of invoking '" + t + "'")), n = o.clone(n);
                    var c = function() {
                            var e;
                            return function() {
                                return void 0 === e && (e = "" + s._nextMethodId++), e
                            }
                        }(),
                        d = _._CurrentInvocation.get(),
                        f = d && d.isSimulation,
                        p = null,
                        h = function() {
                            return null === p && (p = C(d, t)), p
                        },
                        v = s._methodHandlers[t];
                    if (v) {
                        var m = function(e) {
                                s.setUserId(e)
                            },
                            g = new y({
                                isSimulation: !0,
                                userId: s.userId(),
                                setUserId: m,
                                randomSeed: function() {
                                    return h()
                                }
                            });
                        f || s._saveOriginals();
                        try {
                            var b = _._CurrentInvocation.withValue(g, function() {
                                return e.isServer ? e._noYieldsAllowed(function() {
                                    return v.apply(g, o.clone(n))
                                }) : v.apply(g, o.clone(n))
                            })
                        } catch (w) {
                            var k = w
                        }
                        f || s._retrieveAndStoreOriginals(c())
                    }
                    if (f) {
                        if (i) return void i(k, b);
                        if (k) throw k;
                        return b
                    }
                    if (k && !k.expected && e._debug("Exception while simulating the effect of invoking '" + t + "'", k, k.stack), !i)
                        if (e.isClient) i = function(n) {
                            n && e._debug("Error invoking Method '" + t + "':", n.message)
                        };
                        else {
                            var S = new u;
                            i = S.resolver()
                        }
                    var T = {
                        msg: "method",
                        method: t,
                        params: n,
                        id: c()
                    };
                    null !== p && (T.randomSeed = p);
                    var E = new l({
                        methodId: c(),
                        callback: i,
                        connection: s,
                        onResultReceived: r.onResultReceived,
                        wait: !!r.wait,
                        message: T
                    });
                    return r.wait ? s._outstandingMethodBlocks.push({
                        wait: !0,
                        methods: [E]
                    }) : ((a.isEmpty(s._outstandingMethodBlocks) || a.last(s._outstandingMethodBlocks).wait) && s._outstandingMethodBlocks.push({
                        wait: !1,
                        methods: []
                    }), a.last(s._outstandingMethodBlocks).methods.push(E)), 1 === s._outstandingMethodBlocks.length && E.sendMessage(), S ? S.wait() : r.returnStubValue ? b : void 0
                },
                _saveOriginals: function() {
                    var e = this;
                    a.each(e._stores, function(e) {
                        e.saveOriginals()
                    })
                },
                _retrieveAndStoreOriginals: function(e) {
                    var t = this;
                    if (t._documentsWrittenByStub[e]) throw new Error("Duplicate methodId in _retrieveAndStoreOriginals");
                    var n = [];
                    a.each(t._stores, function(r, o) {
                        var i = r.retrieveOriginals();
                        i && i.forEach(function(r, i) {
                            n.push({
                                collection: o,
                                id: i
                            }), a.has(t._serverDocuments, o) || (t._serverDocuments[o] = new d._IdMap);
                            var s = t._serverDocuments[o].setDefault(i, {});
                            s.writtenByStubs ? s.writtenByStubs[e] = !0 : (s.document = r, s.flushCallbacks = [], s.writtenByStubs = {}, s.writtenByStubs[e] = !0)
                        })
                    }), a.isEmpty(n) || (t._documentsWrittenByStub[e] = n)
                },
                _unsubscribeAll: function() {
                    var e = this;
                    a.each(a.clone(e._subscriptions), function(t, n) {
                        "meteor_autoupdate_clientVersions" !== t.name && e._subscriptions[n].stop()
                    })
                },
                _send: function(e) {
                    var t = this;
                    t._stream.send(k(e))
                },
                _lostConnection: function(e) {
                    var t = this;
                    t._stream._lostConnection(e)
                },
                status: function() {
                    var e = this;
                    return e._stream.status.apply(e._stream, arguments)
                },
                reconnect: function() {
                    var e = this;
                    return e._stream.reconnect.apply(e._stream, arguments)
                },
                disconnect: function() {
                    var e = this;
                    return e._stream.disconnect.apply(e._stream, arguments)
                },
                close: function() {
                    var e = this;
                    return e._stream.disconnect({
                        _permanent: !0
                    })
                },
                userId: function() {
                    var e = this;
                    return e._userIdDeps && e._userIdDeps.depend(), e._userId
                },
                setUserId: function(e) {
                    var t = this;
                    t._userId !== e && (t._userId = e, t._userIdDeps && t._userIdDeps.changed())
                },
                _waitingForQuiescence: function() {
                    var e = this;
                    return !a.isEmpty(e._subsBeingRevived) || !a.isEmpty(e._methodsBlockingQuiescence)
                },
                _anyMethodsAreOutstanding: function() {
                    var e = this;
                    return a.any(a.pluck(e._methodInvokers, "sentMessage"))
                },
                _livedata_connected: function(e) {
                    var t = this;
                    if ("pre1" !== t._version && 0 !== t._heartbeatInterval && (t._heartbeat = new g({
                            heartbeatInterval: t._heartbeatInterval,
                            heartbeatTimeout: t._heartbeatTimeout,
                            onTimeout: function() {
                                t._lostConnection(new _.ConnectionError("DDP heartbeat timed out"))
                            },
                            sendPing: function() {
                                t._send({
                                    msg: "ping"
                                })
                            }
                        }), t._heartbeat.start()), t._lastSessionId && (t._resetStores = !0), "string" == typeof e.session) {
                        var n = t._lastSessionId === e.session;
                        t._lastSessionId = e.session
                    }
                    n || (t._updatesForUnknownStores = {}, t._resetStores && (t._documentsWrittenByStub = {}, t._serverDocuments = {}), t._afterUpdateCallbacks = [], t._subsBeingRevived = {}, a.each(t._subscriptions, function(e, n) {
                        e.ready && (t._subsBeingRevived[n] = !0)
                    }), t._methodsBlockingQuiescence = {}, t._resetStores && a.each(t._methodInvokers, function(e) {
                        e.gotResult() ? t._afterUpdateCallbacks.push(a.bind(e.dataVisible, e)) : e.sentMessage && (t._methodsBlockingQuiescence[e.methodId] = !0)
                    }), t._messagesBufferedUntilQuiescence = [], t._waitingForQuiescence() || (t._resetStores && (a.each(t._stores, function(e) {
                        e.beginUpdate(0, !0), e.endUpdate()
                    }), t._resetStores = !1), t._runAfterUpdateCallbacks()))
                },
                _processOneDataMessage: function(e, t) {
                    var n = this;
                    n["_process_" + e.msg](e, t)
                },
                _livedata_data: function(e) {
                    var t = this,
                        n = {};
                    if (t._waitingForQuiescence()) {
                        if (t._messagesBufferedUntilQuiescence.push(e), "nosub" === e.msg && delete t._subsBeingRevived[e.id], a.each(e.subs || [], function(e) {
                                delete t._subsBeingRevived[e]
                            }), a.each(e.methods || [], function(e) {
                                delete t._methodsBlockingQuiescence[e]
                            }), t._waitingForQuiescence()) return;
                        a.each(t._messagesBufferedUntilQuiescence, function(e) {
                            t._processOneDataMessage(e, n)
                        }), t._messagesBufferedUntilQuiescence = []
                    } else t._processOneDataMessage(e, n);
                    (t._resetStores || !a.isEmpty(n)) && (a.each(t._stores, function(e, r) {
                        e.beginUpdate(a.has(n, r) ? n[r].length : 0, t._resetStores)
                    }), t._resetStores = !1, a.each(n, function(e, n) {
                        var r = t._stores[n];
                        r ? a.each(e, function(e) {
                            r.update(e)
                        }) : (a.has(t._updatesForUnknownStores, n) || (t._updatesForUnknownStores[n] = []), Array.prototype.push.apply(t._updatesForUnknownStores[n], e))
                    }), a.each(t._stores, function(e) {
                        e.endUpdate()
                    })), t._runAfterUpdateCallbacks()
                },
                _runAfterUpdateCallbacks: function() {
                    var e = this,
                        t = e._afterUpdateCallbacks;
                    e._afterUpdateCallbacks = [], a.each(t, function(e) {
                        e()
                    })
                },
                _pushUpdate: function(e, t, n) {
                    var r = this;
                    a.has(e, t) || (e[t] = []), e[t].push(n)
                },
                _getServerDoc: function(e, t) {
                    var n = this;
                    if (!a.has(n._serverDocuments, e)) return null;
                    var r = n._serverDocuments[e];
                    return r.get(t) || null
                },
                _process_added: function(e, t) {
                    var n = this,
                        r = d._idParse(e.id),
                        o = n._getServerDoc(e.collection, r);
                    if (o) {
                        if (void 0 !== o.document) throw new Error("Server sent add for existing id: " + e.id);
                        o.document = e.fields || {}, o.document._id = r
                    } else n._pushUpdate(t, e.collection, e)
                },
                _process_changed: function(e, t) {
                    var n = this,
                        r = n._getServerDoc(e.collection, d._idParse(e.id));
                    if (r) {
                        if (void 0 === r.document) throw new Error("Server sent changed for nonexisting id: " + e.id);
                        d._applyChanges(r.document, e.fields)
                    } else n._pushUpdate(t, e.collection, e)
                },
                _process_removed: function(e, t) {
                    var n = this,
                        r = n._getServerDoc(e.collection, d._idParse(e.id));
                    if (r) {
                        if (void 0 === r.document) throw new Error("Server sent removed for nonexisting id:" + e.id);
                        r.document = void 0
                    } else n._pushUpdate(t, e.collection, {
                        msg: "removed",
                        collection: e.collection,
                        id: e.id
                    })
                },
                _process_updated: function(e, t) {
                    var n = this;
                    a.each(e.methods, function(e) {
                        a.each(n._documentsWrittenByStub[e], function(r) {
                            var o = n._getServerDoc(r.collection, r.id);
                            if (!o) throw new Error("Lost serverDoc for " + i.stringify(r));
                            if (!o.writtenByStubs[e]) throw new Error("Doc " + i.stringify(r) + " not written by  method " + e);
                            delete o.writtenByStubs[e], a.isEmpty(o.writtenByStubs) && (n._pushUpdate(t, r.collection, {
                                msg: "replace",
                                id: d._idStringify(r.id),
                                replace: o.document
                            }), a.each(o.flushCallbacks, function(e) {
                                e()
                            }), n._serverDocuments[r.collection].remove(r.id))
                        }), delete n._documentsWrittenByStub[e];
                        var r = n._methodInvokers[e];
                        if (!r) throw new Error("No callback invoker for method " + e);
                        n._runWhenAllServerDocsAreFlushed(a.bind(r.dataVisible, r))
                    })
                },
                _process_ready: function(e, t) {
                    var n = this;
                    a.each(e.subs, function(e) {
                        n._runWhenAllServerDocsAreFlushed(function() {
                            var t = n._subscriptions[e];
                            t && (t.ready || (t.readyCallback && t.readyCallback(), t.ready = !0, t.readyDeps.changed()))
                        })
                    })
                },
                _runWhenAllServerDocsAreFlushed: function(e) {
                    var t = this,
                        n = function() {
                            t._afterUpdateCallbacks.push(e)
                        },
                        r = 0,
                        o = function() {
                            --r, 0 === r && n()
                        };
                    a.each(t._serverDocuments, function(e) {
                        e.forEach(function(e) {
                            var n = a.any(e.writtenByStubs, function(e, n) {
                                var r = t._methodInvokers[n];
                                return r && r.sentMessage
                            });
                            n && (++r, e.flushCallbacks.push(o))
                        })
                    }), 0 === r && n()
                },
                _livedata_nosub: function(t) {
                    var n = this;
                    if (n._livedata_data(t), a.has(n._subscriptions, t.id)) {
                        var r = n._subscriptions[t.id].errorCallback,
                            o = n._subscriptions[t.id].stopCallback;
                        n._subscriptions[t.id].remove();
                        var i = function(t) {
                            return t && t.error && new e.Error(t.error.error, t.error.reason, t.error.details)
                        };
                        r && t.error && r(i(t)), o && o(i(t))
                    }
                },
                _process_nosub: function() {},
                _livedata_result: function(t) {
                    var n = this;
                    if (a.isEmpty(n._outstandingMethodBlocks)) return void e._debug("Received method result but no methods outstanding");
                    for (var r = n._outstandingMethodBlocks[0].methods, o, i = 0; i < r.length && (o = r[i], o.methodId !== t.id); i++);
                    return o ? (r.splice(i, 1), void(a.has(t, "error") ? o.receiveResult(new e.Error(t.error.error, t.error.reason, t.error.details)) : o.receiveResult(void 0, t.result))) : void e._debug("Can't match method response to original method call", t)
                },
                _outstandingMethodFinished: function() {
                    var e = this;
                    if (!e._anyMethodsAreOutstanding()) {
                        if (!a.isEmpty(e._outstandingMethodBlocks)) {
                            var t = e._outstandingMethodBlocks.shift();
                            if (!a.isEmpty(t.methods)) throw new Error("No methods outstanding but nonempty block: " + i.stringify(t));
                            a.isEmpty(e._outstandingMethodBlocks) || e._sendOutstandingMethods()
                        }
                        e._maybeMigrate()
                    }
                },
                _sendOutstandingMethods: function() {
                    var e = this;
                    a.isEmpty(e._outstandingMethodBlocks) || a.each(e._outstandingMethodBlocks[0].methods, function(e) {
                        e.sendMessage()
                    })
                },
                _livedata_error: function(t) {
                    e._debug("Received error from server: ", t.reason), t.offendingMessage && e._debug("For: ", t.offendingMessage)
                },
                _callOnReconnectAndSendAppropriateOutstandingMethods: function() {
                    var e = this,
                        t = e._outstandingMethodBlocks;
                    if (e._outstandingMethodBlocks = [], e.onReconnect(), !a.isEmpty(t)) {
                        if (a.isEmpty(e._outstandingMethodBlocks)) return e._outstandingMethodBlocks = t, void e._sendOutstandingMethods();
                        a.last(e._outstandingMethodBlocks).wait || t[0].wait || (a.each(t[0].methods, function(t) {
                            a.last(e._outstandingMethodBlocks).methods.push(t), 1 === e._outstandingMethodBlocks.length && t.sendMessage()
                        }), t.shift()), a.each(t, function(t) {
                            e._outstandingMethodBlocks.push(t)
                        })
                    }
                },
                _readyToMigrate: function() {
                    var e = this;
                    return a.isEmpty(e._methodInvokers)
                },
                _maybeMigrate: function() {
                    var e = this;
                    e._retryMigrate && e._readyToMigrate() && (e._retryMigrate(), e._retryMigrate = null)
                }
            }), p.Connection = c, _.connect = function(e, t) {
                var n = new c(e, t);
                return T.push(n), n
            }, T = [], _._allSubscriptionsReady = function() {
                return a.all(T, function(e) {
                    return a.all(e._subscriptions, function(e) {
                        return e.ready
                    })
                })
            }
        }.call(this),
        function() {
            if (e.refresh = function(e) {}, e.isClient) {
                var t = "/";
                "undefined" != typeof __meteor_runtime_config__ && __meteor_runtime_config__.DDP_DEFAULT_CONNECTION_URL && (t = __meteor_runtime_config__.DDP_DEFAULT_CONNECTION_URL);
                var n = new l,
                    r = function(t) {
                        if (e._debug(t), Package.reload) {
                            var r = Package.reload.Reload._migrationData("livedata") || {},
                                o = r.DDPVersionNegotiationFailures || 0;
                            ++o, Package.reload.Reload._onMigrate("livedata", function() {
                                return [!0, {
                                    DDPVersionNegotiationFailures: o
                                }]
                            }), n.retryLater(o, function() {
                                Package.reload.Reload._reload()
                            })
                        }
                    };
                e.connection = _.connect(t, {
                    onDDPVersionNegotiationFailure: r
                }), a.each(["subscribe", "methods", "call", "apply", "status", "reconnect", "disconnect"], function(t) {
                    e[t] = a.bind(e.connection[t], e.connection)
                })
            } else e.connection = null;
            e.default_connection = e.connection, e.connect = _.connect
        }.call(this), "undefined" == typeof Package && (Package = {}), Package.ddp = {
            DDP: _,
            LivedataTest: p
        }
}();

DDP = Package.ddp.DDP, LocalCollection = Package.minimongo.LocalCollection, Minimongo = Package.minimongo.Minimongo;
