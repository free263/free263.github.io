import {
	r as x,
	c as ro,
	e as nt,
	g as Fn,
	f as io,
	R as L
} from "./react-D2HaOZHF.js";
import {
	_ as G,
	a as V,
	b as ge,
	c as oo,
	d as ao,
	e as ci,
	t as so,
	f as uo,
	l as lo,
	A as co,
	C as fo,
	g as po,
	h as ho,
	S as go,
	M as vo,
	P as mo,
	i as yo,
	j as bo,
	k as xo,
	m as wo,
	n as jo,
	o as So,
	p as Oo,
	q as _o,
	r as Eo,
	s as Mo,
	u as Po,
	v as $o,
	w as Ro,
	x as No,
	y as Co,
	z as To,
	B as zo,
	D as ko,
	E as Io,
	F as Lo,
	G as Ao,
	H as Fo,
	I as Bo,
	J as Do,
	K as ur,
	L as Ho,
	N as Wo,
	O as qo,
	Q as Uo,
	R as Vo,
	T as Go,
	U as Yo,
	V as Jo,
	W as Xo,
	X as Zo,
	Y as Ko,
	Z as Qo,
	$ as ea,
	a0 as ta,
	a1 as na,
	a2 as ra,
	a3 as ia,
	a4 as oa,
	a5 as fi,
	a6 as aa,
	a7 as sa,
	a8 as ua,
	a9 as la,
	aa as ca,
	ab as fa,
	ac as da,
	ad as pa,
	ae as ha,
	af as ga,
	ag as va,
	ah as ma,
	ai as ya
} from "./echarts-CcS31_AO.js";
import {
	I as Nt,
	_ as Ct,
	R as Ee,
	C as Z,
	T as rt,
	F as di,
	a as Me,
	P as it,
	B as pi,
	M as Bn,
	b as ba,
	S as xa,
	c as wa,
	s as ja,
	d as Sa,
	e as lr,
	f as Oa,
	g as Ht,
	h as _a,
	i as Ea
} from "./antd-CEwkQD2R.js";
import {
	i as Ye
} from "./lodash-D5Lll7Uz.js";
(function() {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
	new MutationObserver(i => {
		for (const o of i)
			if (o.type === "childList")
				for (const a of o.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && r(a)
	}).observe(document, {
		childList: !0,
		subtree: !0
	});

	function n(i) {
		const o = {};
		return i.integrity && (o.integrity = i.integrity), i.referrerPolicy && (o.referrerPolicy = i
			.referrerPolicy), i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin ===
			"anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
	}

	function r(i) {
		if (i.ep) return;
		i.ep = !0;
		const o = n(i);
		fetch(i.href, o)
	}
})();
var hi = {
		exports: {}
	},
	Tt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ma = x,
	Pa = Symbol.for("react.element"),
	$a = Symbol.for("react.fragment"),
	Ra = Object.prototype.hasOwnProperty,
	Na = Ma.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	Ca = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};

function gi(e, t, n) {
	var r, i = {},
		o = null,
		a = null;
	n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (a = t.ref);
	for (r in t) Ra.call(t, r) && !Ca.hasOwnProperty(r) && (i[r] = t[r]);
	if (e && e.defaultProps)
		for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
	return {
		$$typeof: Pa,
		type: e,
		key: o,
		ref: a,
		props: i,
		_owner: Na.current
	}
}
Tt.Fragment = $a;
Tt.jsx = gi;
Tt.jsxs = gi;
hi.exports = Tt;
var m = hi.exports,
	on = {},
	cr = ro;
on.createRoot = cr.createRoot, on.hydrateRoot = cr.hydrateRoot;
var Ta = {
		icon: {
			tag: "svg",
			attrs: {
				viewBox: "0 0 1024 1024",
				focusable: "false"
			},
			children: [{
				tag: "path",
				attrs: {
					d: "M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"
				}
			}]
		},
		name: "caret-right",
		theme: "outlined"
	},
	za = function(t, n) {
		return x.createElement(Nt, Ct({}, t, {
			ref: n,
			icon: Ta
		}))
	},
	ka = x.forwardRef(za),
	Ia = {
		icon: {
			tag: "svg",
			attrs: {
				viewBox: "64 64 896 896",
				focusable: "false"
			},
			children: [{
				tag: "path",
				attrs: {
					d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm5.6-532.7c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z"
				}
			}]
		},
		name: "copyright-circle",
		theme: "outlined"
	},
	La = function(t, n) {
		return x.createElement(Nt, Ct({}, t, {
			ref: n,
			icon: Ia
		}))
	},
	Aa = x.forwardRef(La),
	Fa = {
		icon: {
			tag: "svg",
			attrs: {
				viewBox: "64 64 896 896",
				focusable: "false"
			},
			children: [{
				tag: "path",
				attrs: {
					d: "M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM305.8 637.7c3.1 3.1 8.1 3.1 11.3 0l138.3-137.6L583 628.5c3.1 3.1 8.2 3.1 11.3 0l275.4-275.3c3.1-3.1 3.1-8.2 0-11.3l-39.6-39.6a8.03 8.03 0 00-11.3 0l-230 229.9L461.4 404a8.03 8.03 0 00-11.3 0L266.3 586.7a8.03 8.03 0 000 11.3l39.5 39.7z"
				}
			}]
		},
		name: "line-chart",
		theme: "outlined"
	},
	Ba = function(t, n) {
		return x.createElement(Nt, Ct({}, t, {
			ref: n,
			icon: Fa
		}))
	},
	Da = x.forwardRef(Ba),
	Ha = {
		icon: {
			tag: "svg",
			attrs: {
				viewBox: "64 64 896 896",
				focusable: "false"
			},
			children: [{
				tag: "path",
				attrs: {
					d: "M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"
				}
			}]
		},
		name: "lock",
		theme: "outlined"
	},
	Wa = function(t, n) {
		return x.createElement(Nt, Ct({}, t, {
			ref: n,
			icon: Ha
		}))
	},
	qa = x.forwardRef(Wa),
	Ua = function(e) {
		return function(t, n) {
			var r = x.useRef(!1);
			e(function() {
				return function() {
					r.current = !1
				}
			}, []), e(function() {
				if (!r.current) r.current = !0;
				else return t()
			}, n)
		}
	},
	Va = function(e) {
		return typeof e == "function"
	};

function ve(e) {
	var t = x.useRef(e);
	t.current = x.useMemo(function() {
		return e
	}, [e]);
	var n = x.useRef();
	return n.current || (n.current = function() {
		for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
		return t.current.apply(this, r)
	}), n.current
}
const an = Ua(x.useEffect);
var vi = function(e, t) {
	var n = t.manual,
		r = t.ready,
		i = r === void 0 ? !0 : r,
		o = t.defaultParams,
		a = o === void 0 ? [] : o,
		l = t.refreshDeps,
		f = l === void 0 ? [] : l,
		s = t.refreshDepsAction,
		c = x.useRef(!1);
	return c.current = !1, an(function() {
		!n && i && (c.current = !0, e.run.apply(e, G([], V(a), !1)))
	}, [i]), an(function() {
		c.current || n || (c.current = !0, s ? s() : e.refresh())
	}, G([], V(f), !1)), {
		onBefore: function() {
			if (!i) return {
				stopNow: !0
			}
		}
	}
};
vi.onInit = function(e) {
	var t = e.ready,
		n = t === void 0 ? !0 : t,
		r = e.manual;
	return {
		loading: !r && n
	}
};

function Ga(e, t) {
	if (e === t) return !0;
	for (var n = 0; n < e.length; n++)
		if (!Object.is(e[n], t[n])) return !1;
	return !0
}

function mi(e, t) {
	var n = x.useRef({
		deps: t,
		obj: void 0,
		initialized: !1
	}).current;
	return (n.initialized === !1 || !Ga(n.deps, t)) && (n.deps = t, n.obj = e(), n.initialized = !0), n.obj
}

function Re(e) {
	var t = x.useRef(e);
	return t.current = e, t
}
var zt = function(e) {
		var t = Re(e);
		x.useEffect(function() {
			return function() {
				t.current()
			}
		}, [])
	},
	ht = new Map,
	Ya = function(e, t, n) {
		var r = ht.get(e);
		r != null && r.timer && clearTimeout(r.timer);
		var i = void 0;
		t > -1 && (i = setTimeout(function() {
			ht.delete(e)
		}, t)), ht.set(e, ge(ge({}, n), {
			timer: i
		}))
	},
	Ja = function(e) {
		return ht.get(e)
	},
	gt = new Map,
	Xa = function(e) {
		return gt.get(e)
	},
	Za = function(e, t) {
		gt.set(e, t), t.then(function(n) {
			return gt.delete(e), n
		}).catch(function() {
			gt.delete(e)
		})
	},
	xe = {},
	Ka = function(e, t) {
		xe[e] && xe[e].forEach(function(n) {
			return n(t)
		})
	},
	Wt = function(e, t) {
		return xe[e] || (xe[e] = []), xe[e].push(t),
			function() {
				var r = xe[e].indexOf(t);
				xe[e].splice(r, 1)
			}
	},
	Qa = function(e, t) {
		var n = t.cacheKey,
			r = t.cacheTime,
			i = r === void 0 ? 5 * 60 * 1e3 : r,
			o = t.staleTime,
			a = o === void 0 ? 0 : o,
			l = t.setCache,
			f = t.getCache,
			s = x.useRef(),
			c = x.useRef(),
			u = function(p, h) {
				l ? l(h) : Ya(p, i, h), Ka(p, h.data)
			},
			d = function(p, h) {
				return h === void 0 && (h = []), f ? f(h) : Ja(p)
			};
		return mi(function() {
			if (n) {
				var p = d(n);
				p && Object.hasOwnProperty.call(p, "data") && (e.state.data = p.data, e.state.params = p.params,
						(a === -1 || new Date().getTime() - p.time <= a) && (e.state.loading = !1)), s.current =
					Wt(n, function(h) {
						e.setState({
							data: h
						})
					})
			}
		}, []), zt(function() {
			var p;
			(p = s.current) === null || p === void 0 || p.call(s)
		}), n ? {
			onBefore: function(p) {
				var h = d(n, p);
				return !h || !Object.hasOwnProperty.call(h, "data") ? {} : a === -1 || new Date().getTime() - h
					.time <= a ? {
						loading: !1,
						data: h == null ? void 0 : h.data,
						error: void 0,
						returnNow: !0
					} : {
						data: h == null ? void 0 : h.data,
						error: void 0
					}
			},
			onRequest: function(p, h) {
				var v = Xa(n);
				return v && v !== c.current ? {
					servicePromise: v
				} : (v = p.apply(void 0, G([], V(h), !1)), c.current = v, Za(n, v), {
					servicePromise: v
				})
			},
			onSuccess: function(p, h) {
				var v;
				n && ((v = s.current) === null || v === void 0 || v.call(s), u(n, {
					data: p,
					params: h,
					time: new Date().getTime()
				}), s.current = Wt(n, function(y) {
					e.setState({
						data: y
					})
				}))
			},
			onMutate: function(p) {
				var h;
				n && ((h = s.current) === null || h === void 0 || h.call(s), u(n, {
					data: p,
					params: e.state.params,
					time: new Date().getTime()
				}), s.current = Wt(n, function(v) {
					e.setState({
						data: v
					})
				}))
			}
		} : {}
	};

function es(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function")
}
var Dn = es,
	ts = typeof nt == "object" && nt && nt.Object === Object && nt,
	ns = ts,
	rs = ns,
	is = typeof self == "object" && self && self.Object === Object && self,
	os = rs || is || Function("return this")(),
	yi = os,
	as = yi,
	ss = function() {
		return as.Date.now()
	},
	us = ss,
	ls = /\s/;

function cs(e) {
	for (var t = e.length; t-- && ls.test(e.charAt(t)););
	return t
}
var fs = cs,
	ds = fs,
	ps = /^\s+/;

function hs(e) {
	return e && e.slice(0, ds(e) + 1).replace(ps, "")
}
var gs = hs,
	vs = yi,
	ms = vs.Symbol,
	bi = ms,
	fr = bi,
	xi = Object.prototype,
	ys = xi.hasOwnProperty,
	bs = xi.toString,
	Ie = fr ? fr.toStringTag : void 0;

function xs(e) {
	var t = ys.call(e, Ie),
		n = e[Ie];
	try {
		e[Ie] = void 0;
		var r = !0
	} catch {}
	var i = bs.call(e);
	return r && (t ? e[Ie] = n : delete e[Ie]), i
}
var ws = xs,
	js = Object.prototype,
	Ss = js.toString;

function Os(e) {
	return Ss.call(e)
}
var _s = Os,
	dr = bi,
	Es = ws,
	Ms = _s,
	Ps = "[object Null]",
	$s = "[object Undefined]",
	pr = dr ? dr.toStringTag : void 0;

function Rs(e) {
	return e == null ? e === void 0 ? $s : Ps : pr && pr in Object(e) ? Es(e) : Ms(e)
}
var Ns = Rs;

function Cs(e) {
	return e != null && typeof e == "object"
}
var Ts = Cs,
	zs = Ns,
	ks = Ts,
	Is = "[object Symbol]";

function Ls(e) {
	return typeof e == "symbol" || ks(e) && zs(e) == Is
}
var As = Ls,
	Fs = gs,
	hr = Dn,
	Bs = As,
	gr = NaN,
	Ds = /^[-+]0x[0-9a-f]+$/i,
	Hs = /^0b[01]+$/i,
	Ws = /^0o[0-7]+$/i,
	qs = parseInt;

function Us(e) {
	if (typeof e == "number") return e;
	if (Bs(e)) return gr;
	if (hr(e)) {
		var t = typeof e.valueOf == "function" ? e.valueOf() : e;
		e = hr(t) ? t + "" : t
	}
	if (typeof e != "string") return e === 0 ? e : +e;
	e = Fs(e);
	var n = Hs.test(e);
	return n || Ws.test(e) ? qs(e.slice(2), n ? 2 : 8) : Ds.test(e) ? gr : +e
}
var Vs = Us,
	Gs = Dn,
	qt = us,
	vr = Vs,
	Ys = "Expected a function",
	Js = Math.max,
	Xs = Math.min;

function Zs(e, t, n) {
	var r, i, o, a, l, f, s = 0,
		c = !1,
		u = !1,
		d = !0;
	if (typeof e != "function") throw new TypeError(Ys);
	t = vr(t) || 0, Gs(n) && (c = !!n.leading, u = "maxWait" in n, o = u ? Js(vr(n.maxWait) || 0, t) : o, d =
		"trailing" in n ? !!n.trailing : d);

	function p(j) {
		var P = r,
			$ = i;
		return r = i = void 0, s = j, a = e.apply($, P), a
	}

	function h(j) {
		return s = j, l = setTimeout(_, t), c ? p(j) : a
	}

	function v(j) {
		var P = j - f,
			$ = j - s,
			N = t - P;
		return u ? Xs(N, o - $) : N
	}

	function y(j) {
		var P = j - f,
			$ = j - s;
		return f === void 0 || P >= t || P < 0 || u && $ >= o
	}

	function _() {
		var j = qt();
		if (y(j)) return E(j);
		l = setTimeout(_, v(j))
	}

	function E(j) {
		return l = void 0, d && r ? p(j) : (r = i = void 0, a)
	}

	function b() {
		l !== void 0 && clearTimeout(l), s = 0, r = f = i = l = void 0
	}

	function S() {
		return l === void 0 ? a : E(qt())
	}

	function O() {
		var j = qt(),
			P = y(j);
		if (r = arguments, i = this, f = j, P) {
			if (l === void 0) return h(f);
			if (u) return clearTimeout(l), l = setTimeout(_, t), p(f)
		}
		return l === void 0 && (l = setTimeout(_, t)), a
	}
	return O.cancel = b, O.flush = S, O
}
var wi = Zs;
const Ks = Fn(wi);
var Qs = function(e, t) {
		var n = t.debounceWait,
			r = t.debounceLeading,
			i = t.debounceTrailing,
			o = t.debounceMaxWait,
			a = x.useRef(),
			l = x.useMemo(function() {
				var f = {};
				return r !== void 0 && (f.leading = r), i !== void 0 && (f.trailing = i), o !== void 0 && (f
					.maxWait = o), f
			}, [r, i, o]);
		return x.useEffect(function() {
			if (n) {
				var f = e.runAsync.bind(e);
				return a.current = Ks(function(s) {
						s()
					}, n, l), e.runAsync = function() {
						for (var s = [], c = 0; c < arguments.length; c++) s[c] = arguments[c];
						return new Promise(function(u, d) {
							var p;
							(p = a.current) === null || p === void 0 || p.call(a, function() {
								f.apply(void 0, G([], V(s), !1)).then(u).catch(d)
							})
						})
					},
					function() {
						var s;
						(s = a.current) === null || s === void 0 || s.cancel(), e.runAsync = f
					}
			}
		}, [n, l]), n ? {
			onCancel: function() {
				var f;
				(f = a.current) === null || f === void 0 || f.cancel()
			}
		} : {}
	},
	eu = function(e, t) {
		var n = t.loadingDelay,
			r = t.ready,
			i = x.useRef();
		if (!n) return {};
		var o = function() {
			i.current && clearTimeout(i.current)
		};
		return {
			onBefore: function() {
				return o(), r !== !1 && (i.current = setTimeout(function() {
					e.setState({
						loading: !0
					})
				}, n)), {
					loading: !1
				}
			},
			onFinally: function() {
				o()
			},
			onCancel: function() {
				o()
			}
		}
	},
	kt = !!(typeof window < "u" && window.document && window.document.createElement);

function Hn() {
	return kt ? document.visibilityState !== "hidden" : !0
}
var He = [];

function tu(e) {
	return He.push(e),
		function() {
			var n = He.indexOf(e);
			He.splice(n, 1)
		}
}
if (kt) {
	var nu = function() {
		if (Hn())
			for (var e = 0; e < He.length; e++) {
				var t = He[e];
				t()
			}
	};
	window.addEventListener("visibilitychange", nu, !1)
}
var ru = function(e, t) {
	var n = t.pollingInterval,
		r = t.pollingWhenHidden,
		i = r === void 0 ? !0 : r,
		o = t.pollingErrorRetryCount,
		a = o === void 0 ? -1 : o,
		l = x.useRef(),
		f = x.useRef(),
		s = x.useRef(0),
		c = function() {
			var u;
			l.current && clearTimeout(l.current), (u = f.current) === null || u === void 0 || u.call(f)
		};
	return an(function() {
		n || c()
	}, [n]), n ? {
		onBefore: function() {
			c()
		},
		onError: function() {
			s.current += 1
		},
		onSuccess: function() {
			s.current = 0
		},
		onFinally: function() {
			a === -1 || a !== -1 && s.current <= a ? l.current = setTimeout(function() {
				!i && !Hn() ? f.current = tu(function() {
					e.refresh()
				}) : e.refresh()
			}, n) : s.current = 0
		},
		onCancel: function() {
			c()
		}
	} : {}
};

function iu(e, t) {
	var n = !1;
	return function() {
		for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
		n || (n = !0, e.apply(void 0, G([], V(r), !1)), setTimeout(function() {
			n = !1
		}, t))
	}
}

function ou() {
	return kt && typeof navigator.onLine < "u" ? navigator.onLine : !0
}
var We = [];

function au(e) {
	return We.push(e),
		function() {
			var n = We.indexOf(e);
			n > -1 && We.splice(n, 1)
		}
}
if (kt) {
	var mr = function() {
		if (!(!Hn() || !ou()))
			for (var e = 0; e < We.length; e++) {
				var t = We[e];
				t()
			}
	};
	window.addEventListener("visibilitychange", mr, !1), window.addEventListener("focus", mr, !1)
}
var su = function(e, t) {
		var n = t.refreshOnWindowFocus,
			r = t.focusTimespan,
			i = r === void 0 ? 5e3 : r,
			o = x.useRef(),
			a = function() {
				var l;
				(l = o.current) === null || l === void 0 || l.call(o)
			};
		return x.useEffect(function() {
			if (n) {
				var l = iu(e.refresh.bind(e), i);
				o.current = au(function() {
					l()
				})
			}
			return function() {
				a()
			}
		}, [n, i]), zt(function() {
			a()
		}), {}
	},
	uu = function(e, t) {
		var n = t.retryInterval,
			r = t.retryCount,
			i = x.useRef(),
			o = x.useRef(0),
			a = x.useRef(!1);
		return r ? {
			onBefore: function() {
				a.current || (o.current = 0), a.current = !1, i.current && clearTimeout(i.current)
			},
			onSuccess: function() {
				o.current = 0
			},
			onError: function() {
				if (o.current += 1, r === -1 || o.current <= r) {
					var l = n ?? Math.min(1e3 * Math.pow(2, o.current), 3e4);
					i.current = setTimeout(function() {
						a.current = !0, e.refresh()
					}, l)
				} else o.current = 0
			},
			onCancel: function() {
				o.current = 0, i.current && clearTimeout(i.current)
			}
		} : {}
	},
	lu = wi,
	cu = Dn,
	fu = "Expected a function";

function du(e, t, n) {
	var r = !0,
		i = !0;
	if (typeof e != "function") throw new TypeError(fu);
	return cu(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), lu(e, t, {
		leading: r,
		maxWait: t,
		trailing: i
	})
}
var pu = du;
const hu = Fn(pu);
var gu = function(e, t) {
		var n = t.throttleWait,
			r = t.throttleLeading,
			i = t.throttleTrailing,
			o = x.useRef(),
			a = {};
		return r !== void 0 && (a.leading = r), i !== void 0 && (a.trailing = i), x.useEffect(function() {
			if (n) {
				var l = e.runAsync.bind(e);
				return o.current = hu(function(f) {
						f()
					}, n, a), e.runAsync = function() {
						for (var f = [], s = 0; s < arguments.length; s++) f[s] = arguments[s];
						return new Promise(function(c, u) {
							var d;
							(d = o.current) === null || d === void 0 || d.call(o, function() {
								l.apply(void 0, G([], V(f), !1)).then(c).catch(u)
							})
						})
					},
					function() {
						var f;
						e.runAsync = l, (f = o.current) === null || f === void 0 || f.cancel()
					}
			}
		}, [n, r, i]), n ? {
			onCancel: function() {
				var l;
				(l = o.current) === null || l === void 0 || l.cancel()
			}
		} : {}
	},
	vu = function(e) {
		x.useEffect(function() {
			e == null || e()
		}, [])
	},
	mu = function() {
		var e = V(x.useState({}), 2),
			t = e[1];
		return x.useCallback(function() {
			return t({})
		}, [])
	},
	yu = function() {
		function e(t, n, r, i) {
			i === void 0 && (i = {}), this.serviceRef = t, this.options = n, this.subscribe = r, this.initState = i,
				this.count = 0, this.state = {
					loading: !1,
					params: void 0,
					data: void 0,
					error: void 0
				}, this.state = ge(ge(ge({}, this.state), {
					loading: !n.manual
				}), i)
		}
		return e.prototype.setState = function(t) {
			t === void 0 && (t = {}), this.state = ge(ge({}, this.state), t), this.subscribe()
		}, e.prototype.runPluginHandler = function(t) {
			for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
			var i = this.pluginImpls.map(function(o) {
				var a;
				return (a = o[t]) === null || a === void 0 ? void 0 : a.call.apply(a, G([o], V(n), !1))
			}).filter(Boolean);
			return Object.assign.apply(Object, G([{}], V(i), !1))
		}, e.prototype.runAsync = function() {
			for (var t, n, r, i, o, a, l, f, s, c, u = [], d = 0; d < arguments.length; d++) u[d] = arguments[d];
			return oo(this, void 0, void 0, function() {
				var p, h, v, y, _, E, b, S, O, j, P;
				return ao(this, function($) {
					switch ($.label) {
						case 0:
							if (this.count += 1, p = this.count, h = this.runPluginHandler(
									"onBefore", u), v = h.stopNow, y = v === void 0 ? !1 : v, _ = h
								.returnNow, E = _ === void 0 ? !1 : _, b = ci(h, ["stopNow",
									"returnNow"
								]), y) return [2, new Promise(function() {})];
							if (this.setState(ge({
									loading: !0,
									params: u
								}, b)), E) return [2, Promise.resolve(b.data)];
							(n = (t = this.options).onBefore) === null || n === void 0 || n.call(t,
								u), $.label = 1;
						case 1:
							return $.trys.push([1, 3, , 4]), S = this.runPluginHandler("onRequest",
								this.serviceRef.current, u).servicePromise, S || (S = (P = this
								.serviceRef).current.apply(P, G([], V(u), !1))), [4, S];
						case 2:
							return O = $.sent(), p !== this.count ? [2, new Promise(
							function() {})] : (this.setState({
										data: O,
										error: void 0,
										loading: !1
									}), (i = (r = this.options).onSuccess) === null || i ===
									void 0 || i.call(r, O, u), this.runPluginHandler("onSuccess", O,
										u), (a = (o = this.options).onFinally) === null || a ===
									void 0 || a.call(o, u, O, void 0), p === this.count && this
									.runPluginHandler("onFinally", u, O, void 0), [2, O]);
						case 3:
							if (j = $.sent(), p !== this.count) return [2, new Promise(
							function() {})];
							throw this.setState({
									error: j,
									loading: !1
								}), (f = (l = this.options).onError) === null || f === void 0 || f
								.call(l, j, u), this.runPluginHandler("onError", j, u), (c = (s =
									this.options).onFinally) === null || c === void 0 || c.call(s,
									u, void 0, j), p === this.count && this.runPluginHandler(
									"onFinally", u, void 0, j), j;
						case 4:
							return [2]
					}
				})
			})
		}, e.prototype.run = function() {
			for (var t = this, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
			this.runAsync.apply(this, G([], V(n), !1)).catch(function(i) {
				t.options.onError || console.error(i)
			})
		}, e.prototype.cancel = function() {
			this.count += 1, this.setState({
				loading: !1
			}), this.runPluginHandler("onCancel")
		}, e.prototype.refresh = function() {
			this.run.apply(this, G([], V(this.state.params || []), !1))
		}, e.prototype.refreshAsync = function() {
			return this.runAsync.apply(this, G([], V(this.state.params || []), !1))
		}, e.prototype.mutate = function(t) {
			var n = Va(t) ? t(this.state.data) : t;
			this.runPluginHandler("onMutate", n), this.setState({
				data: n
			})
		}, e
	}();

function bu(e, t, n) {
	t === void 0 && (t = {}), n === void 0 && (n = []);
	var r = t.manual,
		i = r === void 0 ? !1 : r,
		o = ci(t, ["manual"]),
		a = ge({
			manual: i
		}, o),
		l = Re(e),
		f = mu(),
		s = mi(function() {
			var c = n.map(function(u) {
				var d;
				return (d = u == null ? void 0 : u.onInit) === null || d === void 0 ? void 0 : d.call(u, a)
			}).filter(Boolean);
			return new yu(l, a, f, Object.assign.apply(Object, G([{}], V(c), !1)))
		}, []);
	return s.options = a, s.pluginImpls = n.map(function(c) {
		return c(s, a)
	}), vu(function() {
		if (!i) {
			var c = s.state.params || t.defaultParams || [];
			s.run.apply(s, G([], V(c), !1))
		}
	}), zt(function() {
		s.cancel()
	}), {
		loading: s.state.loading,
		data: s.state.data,
		error: s.state.error,
		params: s.state.params || [],
		cancel: ve(s.cancel.bind(s)),
		refresh: ve(s.refresh.bind(s)),
		refreshAsync: ve(s.refreshAsync.bind(s)),
		run: ve(s.run.bind(s)),
		runAsync: ve(s.runAsync.bind(s)),
		mutate: ve(s.mutate.bind(s))
	}
}

function Wn(e, t, n) {
	return bu(e, t, G(G([], V([]), !1), [Qs, eu, ru, su, gu, vi, Qa, uu], !1))
}
var he;
(function(e) {
	e[e.Connecting = 0] = "Connecting", e[e.Open = 1] = "Open", e[e.Closing = 2] = "Closing", e[e.Closed = 3] =
		"Closed"
})(he || (he = {}));

function xu(e, t) {
	t === void 0 && (t = {});
	var n = t.reconnectLimit,
		r = n === void 0 ? 3 : n,
		i = t.reconnectInterval,
		o = i === void 0 ? 3 * 1e3 : i,
		a = t.manual,
		l = a === void 0 ? !1 : a,
		f = t.onOpen,
		s = t.onClose,
		c = t.onMessage,
		u = t.onError,
		d = t.protocols,
		p = Re(f),
		h = Re(s),
		v = Re(c),
		y = Re(u),
		_ = x.useRef(0),
		E = x.useRef(),
		b = x.useRef(),
		S = V(x.useState(), 2),
		O = S[0],
		j = S[1],
		P = V(x.useState(he.Closed), 2),
		$ = P[0],
		N = P[1],
		C = function() {
			var g;
			_.current < r && ((g = b.current) === null || g === void 0 ? void 0 : g.readyState) !== he.Open && (E
				.current && clearTimeout(E.current), E.current = setTimeout(function() {
					w(), _.current++
				}, o))
		},
		w = function() {
			E.current && clearTimeout(E.current), b.current && b.current.close();
			var g = new WebSocket(e, d);
			N(he.Connecting), g.onerror = function(R) {
				var z;
				b.current === g && (C(), (z = y.current) === null || z === void 0 || z.call(y, R, g), N(g
					.readyState || he.Closed))
			}, g.onopen = function(R) {
				var z;
				b.current === g && ((z = p.current) === null || z === void 0 || z.call(p, R, g), _.current = 0, N(g
					.readyState || he.Open))
			}, g.onmessage = function(R) {
				var z;
				b.current === g && ((z = v.current) === null || z === void 0 || z.call(v, R, g), j(R))
			}, g.onclose = function(R) {
				var z;
				(z = h.current) === null || z === void 0 || z.call(h, R, g), b.current === g && C(), (!b.current ||
					b.current === g) && N(g.readyState || he.Closed)
			}, b.current = g
		},
		k = function(g) {
			var R;
			if ($ === he.Open)(R = b.current) === null || R === void 0 || R.send(g);
			else throw new Error("WebSocket disconnected")
		},
		T = function() {
			_.current = 0, w()
		},
		I = function() {
			var g;
			E.current && clearTimeout(E.current), _.current = r, (g = b.current) === null || g === void 0 || g.close(),
				b.current = void 0
		};
	return x.useEffect(function() {
		!l && e && T()
	}, [e, l]), zt(function() {
		I()
	}), {
		latestMessage: O,
		sendMessage: ve(k),
		connect: ve(T),
		disconnect: ve(I),
		readyState: $,
		webSocketIns: b.current
	}
}
var sn = {},
	ji = {
		exports: {}
	};
(function(e) {
	function t(n) {
		return n && n.__esModule ? n : {
			default: n
		}
	}
	e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
})(ji);
var It = ji.exports;
const qn = io(so);
var Ut = {},
	yr;

function Si() {
	return yr || (yr = 1, function(e) {
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var t = x;

		function n(i) {
			var o = (0, t.useRef)(i);
			return o.current = i, o
		}
		var r = n;
		e.default = r
	}(Ut)), Ut
}
var Vt = {},
	Gt = {
		exports: {}
	},
	br;

function Un() {
	return br || (br = 1, function(e) {
		function t(n) {
			"@babel/helpers - typeof";
			return e.exports = t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(
				r) {
				return typeof r
			} : function(r) {
				return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol
					.prototype ? "symbol" : typeof r
			}, e.exports.__esModule = !0, e.exports.default = e.exports, t(n)
		}
		e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
	}(Gt)), Gt.exports
}
var J = {},
	xr;

function Oi() {
	if (xr) return J;
	xr = 1;
	var e = It;
	Object.defineProperty(J, "__esModule", {
		value: !0
	}), J.isUndef = J.isString = J.isObject = J.isNumber = J.isFunction = J.isBoolean = void 0;
	var t = e(Un()),
		n = function(s) {
			return s !== null && (0, t.default)(s) === "object"
		};
	J.isObject = n;
	var r = function(s) {
		return typeof s == "function"
	};
	J.isFunction = r;
	var i = function(s) {
		return typeof s == "string"
	};
	J.isString = i;
	var o = function(s) {
		return typeof s == "boolean"
	};
	J.isBoolean = o;
	var a = function(s) {
		return typeof s == "number"
	};
	J.isNumber = a;
	var l = function(s) {
		return typeof s > "u"
	};
	return J.isUndef = l, J
}
var Yt = {},
	wr;

function _i() {
	return wr || (wr = 1, function(e) {
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var t = !1,
			n = t;
		e.default = n
	}(Yt)), Yt
}
var jr;

function wu() {
	return jr || (jr = 1, function(e) {
		var t = It;
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var n = t(Un()),
			r = x,
			i = Oi(),
			o = t(_i());

		function a(f) {
			o.default && ((0, i.isFunction)(f) || console.error(
				"useMemoizedFn expected parameter is a function, got ".concat((0, n.default)(f))));
			var s = (0, r.useRef)(f);
			s.current = (0, r.useMemo)(function() {
				return f
			}, [f]);
			var c = (0, r.useRef)();
			return c.current || (c.current = function() {
				for (var u = [], d = 0; d < arguments.length; d++) u[d] = arguments[d];
				return s.current.apply(this, u)
			}), c.current
		}
		var l = a;
		e.default = l
	}(Vt)), Vt
}
var Jt = {},
	Sr;

function ju() {
	return Sr || (Sr = 1, function(e) {
		var t = It;
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var n = t(Un()),
			r = x,
			i = t(Si()),
			o = Oi(),
			a = t(_i()),
			l = function(c) {
				a.default && ((0, o.isFunction)(c) || console.error(
					"useUnmount expected parameter is a function, got ".concat((0, n.default)(c))));
				var u = (0, i.default)(c);
				(0, r.useEffect)(function() {
					return function() {
						u.current()
					}
				}, [])
			},
			f = l;
		e.default = f
	}(Jt)), Jt
}(function(e) {
	var t = It;
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.ReadyState = void 0, e.default = f;
	var n = qn,
		r = x,
		i = t(Si()),
		o = t(wu()),
		a = t(ju()),
		l;
	e.ReadyState = l,
		function(s) {
			s[s.Connecting = 0] = "Connecting", s[s.Open = 1] = "Open", s[s.Closing = 2] = "Closing", s[s.Closed =
				3] = "Closed"
		}(l || (e.ReadyState = l = {}));

	function f(s, c) {
		c === void 0 && (c = {});
		var u = c.reconnectLimit,
			d = u === void 0 ? 3 : u,
			p = c.reconnectInterval,
			h = p === void 0 ? 3 * 1e3 : p,
			v = c.manual,
			y = v === void 0 ? !1 : v,
			_ = c.onOpen,
			E = c.onClose,
			b = c.onMessage,
			S = c.onError,
			O = c.protocols,
			j = (0, i.default)(_),
			P = (0, i.default)(E),
			$ = (0, i.default)(b),
			N = (0, i.default)(S),
			C = (0, r.useRef)(0),
			w = (0, r.useRef)(),
			k = (0, r.useRef)(),
			T = (0, n.__read)((0, r.useState)(), 2),
			I = T[0],
			g = T[1],
			R = (0, n.__read)((0, r.useState)(l.Closed), 2),
			z = R[0],
			H = R[1],
			D = function() {
				var A;
				C.current < d && ((A = k.current) === null || A === void 0 ? void 0 : A.readyState) !== l.Open && (w
					.current && clearTimeout(w.current), w.current = setTimeout(function() {
						ye(), C.current++
					}, h))
			},
			ye = function() {
				w.current && clearTimeout(w.current), k.current && k.current.close();
				var A = new WebSocket(s, O);
				H(l.Connecting), A.onerror = function(ee) {
					var Y;
					k.current === A && (D(), (Y = N.current) === null || Y === void 0 || Y.call(N, ee, A), H(A
						.readyState || l.Closed))
				}, A.onopen = function(ee) {
					var Y;
					k.current === A && ((Y = j.current) === null || Y === void 0 || Y.call(j, ee, A), C
						.current = 0, H(A.readyState || l.Open))
				}, A.onmessage = function(ee) {
					var Y;
					k.current === A && ((Y = $.current) === null || Y === void 0 || Y.call($, ee, A), g(ee))
				}, A.onclose = function(ee) {
					var Y;
					(Y = P.current) === null || Y === void 0 || Y.call(P, ee, A), k.current === A && D(), (!k
						.current || k.current === A) && H(A.readyState || l.Closed)
				}, k.current = A
			},
			oe = function(A) {
				var ee;
				if (z === l.Open)(ee = k.current) === null || ee === void 0 || ee.send(A);
				else throw new Error("WebSocket disconnected")
			},
			se = function() {
				C.current = 0, ye()
			},
			Q = function() {
				var A;
				w.current && clearTimeout(w.current), C.current = d, (A = k.current) === null || A === void 0 || A
					.close(), k.current = void 0
			};
		return (0, r.useEffect)(function() {
			!y && s && se()
		}, [s, y]), (0, a.default)(function() {
			Q()
		}), {
			latestMessage: I,
			sendMessage: (0, o.default)(oe),
			connect: (0, o.default)(se),
			disconnect: (0, o.default)(Q),
			readyState: z,
			webSocketIns: k.current
		}
	}
})(sn);
var Ei = {
		exports: {}
	},
	Su = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
	Ou = Su,
	_u = Ou;

function Mi() {}

function Pi() {}
Pi.resetWarningCache = Mi;
var Eu = function() {
	function e(r, i, o, a, l, f) {
		if (f !== _u) {
			var s = new Error(
				"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
				);
			throw s.name = "Invariant Violation", s
		}
	}
	e.isRequired = e;

	function t() {
		return e
	}
	var n = {
		array: e,
		bigint: e,
		bool: e,
		func: e,
		number: e,
		object: e,
		string: e,
		symbol: e,
		any: e,
		arrayOf: t,
		element: e,
		elementType: e,
		instanceOf: t,
		node: e,
		objectOf: t,
		oneOf: t,
		oneOfType: t,
		shape: t,
		exact: t,
		checkPropTypes: Pi,
		resetWarningCache: Mi
	};
	return n.PropTypes = n, n
};
Ei.exports = Eu();
var Mu = Ei.exports;
const M = Fn(Mu);
var Pu = ["color", "size", "title", "className"];

function un() {
	return un = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	}, un.apply(this, arguments)
}

function $u(e, t) {
	if (e == null) return {};
	var n = Ru(e, t),
		r, i;
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		for (i = 0; i < o.length; i++) r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e,
			r) && (n[r] = e[r])
	}
	return n
}

function Ru(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		i, o;
	for (o = 0; o < r.length; o++) i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n
}
var Vn = x.forwardRef(function(e, t) {
	var n = e.color,
		r = e.size,
		i = e.title,
		o = e.className,
		a = $u(e, Pu);
	return L.createElement("svg", un({
		ref: t,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 16 16",
		width: r,
		height: r,
		fill: n,
		className: ["bi", "bi-arrow-down-circle-fill", o].filter(Boolean).join(" ")
	}, a), i ? L.createElement("title", null, i) : null, L.createElement("path", {
		d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"
	}))
});
Vn.propTypes = {
	color: M.string,
	size: M.oneOfType([M.string, M.number]),
	title: M.string,
	className: M.string
};
Vn.defaultProps = {
	color: "currentColor",
	size: "1em",
	title: null,
	className: ""
};
var Nu = ["color", "size", "title", "className"];

function ln() {
	return ln = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	}, ln.apply(this, arguments)
}

function Cu(e, t) {
	if (e == null) return {};
	var n = Tu(e, t),
		r, i;
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		for (i = 0; i < o.length; i++) r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e,
			r) && (n[r] = e[r])
	}
	return n
}

function Tu(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		i, o;
	for (o = 0; o < r.length; o++) i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n
}
var Gn = x.forwardRef(function(e, t) {
	var n = e.color,
		r = e.size,
		i = e.title,
		o = e.className,
		a = Cu(e, Nu);
	return L.createElement("svg", ln({
		ref: t,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 16 16",
		width: r,
		height: r,
		fill: n,
		className: ["bi", "bi-arrow-repeat", o].filter(Boolean).join(" ")
	}, a), i ? L.createElement("title", null, i) : null, L.createElement("path", {
		d: "M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"
	}), L.createElement("path", {
		fillRule: "evenodd",
		d: "M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"
	}))
});
Gn.propTypes = {
	color: M.string,
	size: M.oneOfType([M.string, M.number]),
	title: M.string,
	className: M.string
};
Gn.defaultProps = {
	color: "currentColor",
	size: "1em",
	title: null,
	className: ""
};
var zu = ["color", "size", "title", "className"];

function cn() {
	return cn = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	}, cn.apply(this, arguments)
}

function ku(e, t) {
	if (e == null) return {};
	var n = Iu(e, t),
		r, i;
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		for (i = 0; i < o.length; i++) r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e,
			r) && (n[r] = e[r])
	}
	return n
}

function Iu(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		i, o;
	for (o = 0; o < r.length; o++) i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n
}
var Yn = x.forwardRef(function(e, t) {
	var n = e.color,
		r = e.size,
		i = e.title,
		o = e.className,
		a = ku(e, zu);
	return L.createElement("svg", cn({
		ref: t,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 16 16",
		width: r,
		height: r,
		fill: n,
		className: ["bi", "bi-arrow-up-circle-fill", o].filter(Boolean).join(" ")
	}, a), i ? L.createElement("title", null, i) : null, L.createElement("path", {
		d: "M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"
	}))
});
Yn.propTypes = {
	color: M.string,
	size: M.oneOfType([M.string, M.number]),
	title: M.string,
	className: M.string
};
Yn.defaultProps = {
	color: "currentColor",
	size: "1em",
	title: null,
	className: ""
};
var Lu = ["color", "size", "title", "className"];

function fn() {
	return fn = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	}, fn.apply(this, arguments)
}

function Au(e, t) {
	if (e == null) return {};
	var n = Fu(e, t),
		r, i;
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		for (i = 0; i < o.length; i++) r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e,
			r) && (n[r] = e[r])
	}
	return n
}

function Fu(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		i, o;
	for (o = 0; o < r.length; o++) i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n
}
var Jn = x.forwardRef(function(e, t) {
	var n = e.color,
		r = e.size,
		i = e.title,
		o = e.className,
		a = Au(e, Lu);
	return L.createElement("svg", fn({
		ref: t,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 16 16",
		width: r,
		height: r,
		fill: n,
		className: ["bi", "bi-clock", o].filter(Boolean).join(" ")
	}, a), i ? L.createElement("title", null, i) : null, L.createElement("path", {
		d: "M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"
	}), L.createElement("path", {
		d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"
	}))
});
Jn.propTypes = {
	color: M.string,
	size: M.oneOfType([M.string, M.number]),
	title: M.string,
	className: M.string
};
Jn.defaultProps = {
	color: "currentColor",
	size: "1em",
	title: null,
	className: ""
};
var Bu = ["color", "size", "title", "className"];

function dn() {
	return dn = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	}, dn.apply(this, arguments)
}

function Du(e, t) {
	if (e == null) return {};
	var n = Hu(e, t),
		r, i;
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		for (i = 0; i < o.length; i++) r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e,
			r) && (n[r] = e[r])
	}
	return n
}

function Hu(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		i, o;
	for (o = 0; o < r.length; o++) i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n
}
var Xn = x.forwardRef(function(e, t) {
	var n = e.color,
		r = e.size,
		i = e.title,
		o = e.className,
		a = Du(e, Bu);
	return L.createElement("svg", dn({
		ref: t,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 16 16",
		width: r,
		height: r,
		fill: n,
		className: ["bi", "bi-cpu", o].filter(Boolean).join(" ")
	}, a), i ? L.createElement("title", null, i) : null, L.createElement("path", {
		d: "M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0m-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"
	}))
});
Xn.propTypes = {
	color: M.string,
	size: M.oneOfType([M.string, M.number]),
	title: M.string,
	className: M.string
};
Xn.defaultProps = {
	color: "currentColor",
	size: "1em",
	title: null,
	className: ""
};
var Wu = ["color", "size", "title", "className"];

function pn() {
	return pn = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	}, pn.apply(this, arguments)
}

function qu(e, t) {
	if (e == null) return {};
	var n = Uu(e, t),
		r, i;
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		for (i = 0; i < o.length; i++) r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e,
			r) && (n[r] = e[r])
	}
	return n
}

function Uu(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		i, o;
	for (o = 0; o < r.length; o++) i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n
}
var Zn = x.forwardRef(function(e, t) {
	var n = e.color,
		r = e.size,
		i = e.title,
		o = e.className,
		a = qu(e, Wu);
	return L.createElement("svg", pn({
		ref: t,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 16 16",
		width: r,
		height: r,
		fill: n,
		className: ["bi", "bi-database-fill-down", o].filter(Boolean).join(" ")
	}, a), i ? L.createElement("title", null, i) : null, L.createElement("path", {
		d: "M12.5 9a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m.354 5.854 1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V10.5a.5.5 0 0 0-1 0v2.793l-.646-.647a.5.5 0 0 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0M8 1c-1.573 0-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4s.875 1.755 1.904 2.223C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777C13.125 5.755 14 5.007 14 4s-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1"
	}), L.createElement("path", {
		d: "M2 7v-.839c.457.432 1.004.751 1.49.972C4.722 7.693 6.318 8 8 8s3.278-.307 4.51-.867c.486-.22 1.033-.54 1.49-.972V7c0 .424-.155.802-.411 1.133a4.51 4.51 0 0 0-4.815 1.843A12 12 0 0 1 8 10c-1.573 0-3.022-.289-4.096-.777C2.875 8.755 2 8.007 2 7m6.257 3.998L8 11c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13h.027a4.55 4.55 0 0 1 .23-2.002m-.002 3L8 14c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.5 4.5 0 0 1-1.3-1.905"
	}))
});
Zn.propTypes = {
	color: M.string,
	size: M.oneOfType([M.string, M.number]),
	title: M.string,
	className: M.string
};
Zn.defaultProps = {
	color: "currentColor",
	size: "1em",
	title: null,
	className: ""
};
var Vu = ["color", "size", "title", "className"];

function hn() {
	return hn = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	}, hn.apply(this, arguments)
}

function Gu(e, t) {
	if (e == null) return {};
	var n = Yu(e, t),
		r, i;
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		for (i = 0; i < o.length; i++) r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e,
			r) && (n[r] = e[r])
	}
	return n
}

function Yu(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		i, o;
	for (o = 0; o < r.length; o++) i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n
}
var Kn = x.forwardRef(function(e, t) {
	var n = e.color,
		r = e.size,
		i = e.title,
		o = e.className,
		a = Gu(e, Vu);
	return L.createElement("svg", hn({
		ref: t,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 16 16",
		width: r,
		height: r,
		fill: n,
		className: ["bi", "bi-database-fill-up", o].filter(Boolean).join(" ")
	}, a), i ? L.createElement("title", null, i) : null, L.createElement("path", {
		d: "M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.854 1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 0 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0M8 1c-1.573 0-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4s.875 1.755 1.904 2.223C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777C13.125 5.755 14 5.007 14 4s-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1"
	}), L.createElement("path", {
		d: "M2 7v-.839c.457.432 1.004.751 1.49.972C4.722 7.693 6.318 8 8 8s3.278-.307 4.51-.867c.486-.22 1.033-.54 1.49-.972V7c0 .424-.155.802-.411 1.133a4.51 4.51 0 0 0-4.815 1.843A12 12 0 0 1 8 10c-1.573 0-3.022-.289-4.096-.777C2.875 8.755 2 8.007 2 7m6.257 3.998L8 11c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13h.027a4.55 4.55 0 0 1 .23-2.002m-.002 3L8 14c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.5 4.5 0 0 1-1.3-1.905"
	}))
});
Kn.propTypes = {
	color: M.string,
	size: M.oneOfType([M.string, M.number]),
	title: M.string,
	className: M.string
};
Kn.defaultProps = {
	color: "currentColor",
	size: "1em",
	title: null,
	className: ""
};
var Ju = ["color", "size", "title", "className"];

function gn() {
	return gn = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	}, gn.apply(this, arguments)
}

function Xu(e, t) {
	if (e == null) return {};
	var n = Zu(e, t),
		r, i;
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		for (i = 0; i < o.length; i++) r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e,
			r) && (n[r] = e[r])
	}
	return n
}

function Zu(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		i, o;
	for (o = 0; o < r.length; o++) i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n
}
var Qn = x.forwardRef(function(e, t) {
	var n = e.color,
		r = e.size,
		i = e.title,
		o = e.className,
		a = Xu(e, Ju);
	return L.createElement("svg", gn({
		ref: t,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 16 16",
		width: r,
		height: r,
		fill: n,
		className: ["bi", "bi-disc", o].filter(Boolean).join(" ")
	}, a), i ? L.createElement("title", null, i) : null, L.createElement("path", {
		d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
	}), L.createElement("path", {
		d: "M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0M8 4a4 4 0 0 0-4 4 .5.5 0 0 1-1 0 5 5 0 0 1 5-5 .5.5 0 0 1 0 1m4.5 3.5a.5.5 0 0 1 .5.5 5 5 0 0 1-5 5 .5.5 0 0 1 0-1 4 4 0 0 0 4-4 .5.5 0 0 1 .5-.5"
	}))
});
Qn.propTypes = {
	color: M.string,
	size: M.oneOfType([M.string, M.number]),
	title: M.string,
	className: M.string
};
Qn.defaultProps = {
	color: "currentColor",
	size: "1em",
	title: null,
	className: ""
};
var Ku = ["color", "size", "title", "className"];

function vn() {
	return vn = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	}, vn.apply(this, arguments)
}

function Qu(e, t) {
	if (e == null) return {};
	var n = el(e, t),
		r, i;
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		for (i = 0; i < o.length; i++) r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e,
			r) && (n[r] = e[r])
	}
	return n
}

function el(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		i, o;
	for (o = 0; o < r.length; o++) i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n
}
var er = x.forwardRef(function(e, t) {
	var n = e.color,
		r = e.size,
		i = e.title,
		o = e.className,
		a = Qu(e, Ku);
	return L.createElement("svg", vn({
		ref: t,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 16 16",
		width: r,
		height: r,
		fill: n,
		className: ["bi", "bi-hdd", o].filter(Boolean).join(" ")
	}, a), i ? L.createElement("title", null, i) : null, L.createElement("path", {
		d: "M4.5 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M3 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
	}), L.createElement("path", {
		d: "M16 11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V9.51c0-.418.105-.83.305-1.197l2.472-4.531A1.5 1.5 0 0 1 4.094 3h7.812a1.5 1.5 0 0 1 1.317.782l2.472 4.53c.2.368.305.78.305 1.198zM3.655 4.26 1.592 8.043Q1.79 8 2 8h12q.21 0 .408.042L12.345 4.26a.5.5 0 0 0-.439-.26H4.094a.5.5 0 0 0-.44.26zM1 10v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1"
	}))
});
er.propTypes = {
	color: M.string,
	size: M.oneOfType([M.string, M.number]),
	title: M.string,
	className: M.string
};
er.defaultProps = {
	color: "currentColor",
	size: "1em",
	title: null,
	className: ""
};
var tl = ["color", "size", "title", "className"];

function mn() {
	return mn = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	}, mn.apply(this, arguments)
}

function nl(e, t) {
	if (e == null) return {};
	var n = rl(e, t),
		r, i;
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		for (i = 0; i < o.length; i++) r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e,
			r) && (n[r] = e[r])
	}
	return n
}

function rl(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		i, o;
	for (o = 0; o < r.length; o++) i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n
}
var tr = x.forwardRef(function(e, t) {
	var n = e.color,
		r = e.size,
		i = e.title,
		o = e.className,
		a = nl(e, tl);
	return L.createElement("svg", mn({
		ref: t,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 16 16",
		width: r,
		height: r,
		fill: n,
		className: ["bi", "bi-info-circle-fill", o].filter(Boolean).join(" ")
	}, a), i ? L.createElement("title", null, i) : null, L.createElement("path", {
		d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
	}))
});
tr.propTypes = {
	color: M.string,
	size: M.oneOfType([M.string, M.number]),
	title: M.string,
	className: M.string
};
tr.defaultProps = {
	color: "currentColor",
	size: "1em",
	title: null,
	className: ""
};
var il = ["color", "size", "title", "className"];

function yn() {
	return yn = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	}, yn.apply(this, arguments)
}

function ol(e, t) {
	if (e == null) return {};
	var n = al(e, t),
		r, i;
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		for (i = 0; i < o.length; i++) r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e,
			r) && (n[r] = e[r])
	}
	return n
}

function al(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		i, o;
	for (o = 0; o < r.length; o++) i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n
}
var nr = x.forwardRef(function(e, t) {
	var n = e.color,
		r = e.size,
		i = e.title,
		o = e.className,
		a = ol(e, il);
	return L.createElement("svg", yn({
		ref: t,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 16 16",
		width: r,
		height: r,
		fill: n,
		className: ["bi", "bi-memory", o].filter(Boolean).join(" ")
	}, a), i ? L.createElement("title", null, i) : null, L.createElement("path", {
		d: "M1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707-.293l.353-.353a.5.5 0 0 1 .708 0l.353.353a1 1 0 0 0 .707.293H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm.5 1h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5m5 0h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5m4.5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zM2 10v2H1v-2zm2 0v2H3v-2zm2 0v2H5v-2zm3 0v2H8v-2zm2 0v2h-1v-2zm2 0v2h-1v-2zm2 0v2h-1v-2z"
	}))
});
nr.propTypes = {
	color: M.string,
	size: M.oneOfType([M.string, M.number]),
	title: M.string,
	className: M.string
};
nr.defaultProps = {
	color: "currentColor",
	size: "1em",
	title: null,
	className: ""
};
const sl = x.memo(function({
		country: t,
		data: n,
		networkRef: r
	}) {
		return m.jsxs("div", {
			className: `card${n.live?"":" card-offline"}`,
			children: [m.jsxs(Ee, {
				align: "middle",
				wrap: !1,
				children: [m.jsxs(Z, {
					className: "name",
					flex: 1,
					children: [m.jsx(rt, {
						title: t.zh,
						children: m.jsx("span", {
							className: `fi fi-${n.countryCode||"xx"}`
						})
					}), " ", n.name]
				}), m.jsx(Z, {
					children: m.jsx(rt, {
						align: {
							offset: [12, 8]
						},
						placement: "bottomRight",
						title: m.jsxs(m.Fragment, {
							children: ["负载：", n.load, m.jsx(
									"br", {}), "进程数：", n
								.processCount, m.jsx("br", {}),
								"连接数：", n.connectionCount, m
								.jsx("br", {}), "启动：", n
								.bootTime, m.jsx("br", {}),
								"活动：", n.lastActive, m.jsx(
								"br", {}), "版本：", n.version
							]
						}),
						children: m.jsx(tr, {
							className: "bi bi-info"
						})
					})
				})]
			}), m.jsxs(di, {
				className: "tags",
				gap: 4,
				wrap: "wrap",
				children: [m.jsx(rt, {
					title: n.cpu,
					children: m.jsx(Me, {
						bordered: !1,
						icon: m.jsx(Xn, {
							className: "bi"
						}),
						color: "red",
						children: n.cpuCore
					})
				}), m.jsx(Me, {
					bordered: !1,
					icon: m.jsx(nr, {
						className: "bi"
					}),
					color: "green",
					children: n.memoryTotal
				}), m.jsx(Me, {
					bordered: !1,
					icon: m.jsx(er, {
						className: "bi"
					}),
					color: "blue",
					children: n.diskTotal
				}), m.jsx(Me, {
					bordered: !1,
					icon: m.jsx(Gn, {
						className: "bi"
					}),
					color: "purple",
					children: n.swapTotal
				}), m.jsx(rt, {
					title: n.platformInfo,
					children: m.jsx(Me, {
						bordered: !1,
						icon: m.jsx(Qn, {
							className: "bi"
						}),
						color: "cyan",
						children: n.platform
					})
				}), m.jsx(Me, {
					bordered: !1,
					icon: m.jsx(Jn, {
						className: "bi"
					}),
					color: "gold",
					children: n.uptime
				})]
			}), m.jsxs(Ee, {
				justify: "space-between",
				children: [m.jsx(Z, {
					children: "CPU"
				}), m.jsxs(Z, {
					children: [n.cpuPercent, "%"]
				})]
			}), m.jsx(it, {
				className: ot(n.cpuPercent),
				percent: n.cpuPercent,
				showInfo: !1
			}), m.jsxs(Ee, {
				justify: "space-between",
				children: [m.jsx(Z, {
					children: "内存"
				}), m.jsxs(Z, {
					children: [n.memoryPercent, "% (", n.memoryUsed, ")"]
				})]
			}), m.jsx(it, {
				className: ot(n.memoryPercent),
				percent: n.memoryPercent,
				showInfo: !1
			}), m.jsxs(Ee, {
				justify: "space-between",
				children: [m.jsx(Z, {
					children: "硬盘"
				}), m.jsxs(Z, {
					children: [n.diskPercent, "% (", n.diskUsed, ")"]
				})]
			}), m.jsx(it, {
				className: ot(n.diskPercent),
				percent: n.diskPercent,
				showInfo: !1
			}), m.jsxs(Ee, {
				justify: "space-between",
				children: [m.jsx(Z, {
					children: "交换"
				}), m.jsxs(Z, {
					children: [n.swapPercent, "% (", n.swapUsed, ")"]
				})]
			}), m.jsx(it, {
				className: ot(n.swapPercent),
				percent: n.swapPercent,
				showInfo: !1
			}), m.jsxs(Ee, {
				align: "middle",
				children: [m.jsxs(Z, {
					className: "network-in",
					children: [m.jsxs("div", {
						children: [m.jsx(Vn, {
							className: "bi"
						}), " ", n.netInSpeed]
					}), m.jsxs("div", {
						children: [m.jsx(Zn, {
							className: "bi"
						}), " ", n.netInTransfer]
					})]
				}), m.jsx(Z, {
					children: m.jsx(pi, {
						icon: m.jsx(Da, {}),
						type: "link",
						onClick: () => r.current.show(n.id, n.name)
					})
				}), m.jsxs(Z, {
					className: "network-out",
					children: [m.jsxs("div", {
						children: [n.netOutSpeed, " ", m.jsx(Yn, {
							className: "bi"
						})]
					}), m.jsxs("div", {
						children: [n.netOutTransfer, " ", m.jsx(Kn, {
							className: "bi"
						})]
					})]
				})]
			})]
		})
	}, function(t, n) {
		return Ye(t.country, n.country) && Ye(t.data, n.data)
	}),
	ot = e => e < 51 ? "fine" : e < 81 ? "warning" : "error",
	{
		Link: Xt,
		Text: ul
	} = ba,
	ll = x.forwardRef(function(t, n) {
		x.useImperativeHandle(n, () => ({
			show: o
		}));
		const [r, i] = x.useState(!1), o = () => {
			i(!0)
		}, a = () => {
			i(!1)
		};
		return m.jsx(Bn, {
			centered: !0,
			footer: null,
			open: r,
			title: `© ${new Date().getFullYear()} ${document.title}`,
			onCancel: a,
			children: m.jsxs(ul, {
				children: ["Powered by", " ", m.jsx(Xt, {
					href: "https://github.com/naiba/nezha",
					target: "_blank",
					children: "Nezha"
				}), ", Designed by", " ", m.jsx(Xt, {
					href: "https://blog.amzayo.com",
					target: "_blank",
					children: "Amzayo"
				}), " & ", m.jsx(Xt, {
					href: "https://github.com/reg233/nezha-theme-world-map",
					target: "_blank",
					children: "Reg233"
				})]
			})
		})
	}),
	cl = x.memo(ll);
var $i = {},
	Lt = {};
Object.defineProperty(Lt, "__esModule", {
	value: !0
});
Lt.pick = void 0;

function fl(e, t) {
	var n = {};
	return t.forEach(function(r) {
		n[r] = e[r]
	}), n
}
Lt.pick = fl;
var At = {};
Object.defineProperty(At, "__esModule", {
	value: !0
});
At.isFunction = void 0;

function dl(e) {
	return typeof e == "function"
}
At.isFunction = dl;
var Ft = {};
Object.defineProperty(Ft, "__esModule", {
	value: !0
});
Ft.isString = void 0;

function pl(e) {
	return typeof e == "string"
}
Ft.isString = pl;
var Bt = {};
Object.defineProperty(Bt, "__esModule", {
	value: !0
});
Bt.isEqual = void 0;
var hl = qn,
	gl = (0, hl.__importDefault)(uo);
Bt.isEqual = gl.default;
Object.defineProperty($i, "__esModule", {
	value: !0
});
var bn = qn,
	Or = (0, bn.__importStar)(x),
	_r = lo,
	Er = Lt,
	Zt = At,
	vl = Ft,
	Pe = Bt,
	ml = function(e) {
		(0, bn.__extends)(t, e);

		function t(n) {
			var r = e.call(this, n) || this;
			return r.echarts = n.echarts, r.ele = null, r.isInitialResize = !0, r
		}
		return t.prototype.componentDidMount = function() {
			this.renderNewEcharts()
		}, t.prototype.componentDidUpdate = function(n) {
			var r = this.props.shouldSetOption;
			if (!((0, Zt.isFunction)(r) && !r(n, this.props))) {
				if (!(0, Pe.isEqual)(n.theme, this.props.theme) || !(0, Pe.isEqual)(n.opts, this.props.opts) || !(0,
						Pe.isEqual)(n.onEvents, this.props.onEvents)) {
					this.dispose(), this.renderNewEcharts();
					return
				}
				var i = ["option", "notMerge", "lazyUpdate", "showLoading", "loadingOption"];
				(0, Pe.isEqual)((0, Er.pick)(this.props, i), (0, Er.pick)(n, i)) || this.updateEChartsOption(), (!(
					0, Pe.isEqual)(n.style, this.props.style) || !(0, Pe.isEqual)(n.className, this.props
					.className)) && this.resize()
			}
		}, t.prototype.componentWillUnmount = function() {
			this.dispose()
		}, t.prototype.getEchartsInstance = function() {
			return this.echarts.getInstanceByDom(this.ele) || this.echarts.init(this.ele, this.props.theme, this
				.props.opts)
		}, t.prototype.dispose = function() {
			if (this.ele) {
				try {
					(0, _r.clear)(this.ele)
				} catch (n) {
					console.warn(n)
				}
				this.echarts.dispose(this.ele)
			}
		}, t.prototype.renderNewEcharts = function() {
			var n = this,
				r = this.props,
				i = r.onEvents,
				o = r.onChartReady,
				a = this.updateEChartsOption();
			this.bindEvents(a, i || {}), (0, Zt.isFunction)(o) && o(a), this.ele && (0, _r.bind)(this.ele,
			function() {
				n.resize()
			})
		}, t.prototype.bindEvents = function(n, r) {
			function i(a, l) {
				(0, vl.isString)(a) && (0, Zt.isFunction)(l) && n.on(a, function(f) {
					l(f, n)
				})
			}
			for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && i(o, r[o])
		}, t.prototype.updateEChartsOption = function() {
			var n = this.props,
				r = n.option,
				i = n.notMerge,
				o = i === void 0 ? !1 : i,
				a = n.lazyUpdate,
				l = a === void 0 ? !1 : a,
				f = n.showLoading,
				s = n.loadingOption,
				c = s === void 0 ? null : s,
				u = this.getEchartsInstance();
			return u.setOption(r, o, l), f ? u.showLoading(c) : u.hideLoading(), u
		}, t.prototype.resize = function() {
			var n = this.getEchartsInstance();
			if (!this.isInitialResize) try {
				n.resize()
			} catch (r) {
				console.warn(r)
			}
			this.isInitialResize = !1
		}, t.prototype.render = function() {
			var n = this,
				r = this.props,
				i = r.style,
				o = r.className,
				a = o === void 0 ? "" : o,
				l = (0, bn.__assign)({
					height: 300
				}, i);
			return Or.default.createElement("div", {
				ref: function(f) {
					n.ele = f
				},
				style: l,
				className: "echarts-for-react " + a
			})
		}, t
	}(Or.PureComponent),
	yl = $i.default = ml;
const bl = Object.freeze(Object.defineProperty({
	__proto__: null,
	Axis: co,
	ChartView: fo,
	ComponentModel: po,
	ComponentView: ho,
	List: go,
	Model: vo,
	PRIORITY: mo,
	SeriesModel: yo,
	color: bo,
	connect: xo,
	dataTool: wo,
	dependencies: jo,
	disConnect: So,
	disconnect: Oo,
	dispose: _o,
	env: Eo,
	extendChartView: Mo,
	extendComponentModel: Po,
	extendComponentView: $o,
	extendSeriesModel: Ro,
	format: No,
	getCoordinateSystemDimensions: Co,
	getInstanceByDom: To,
	getInstanceById: zo,
	getMap: ko,
	graphic: Io,
	helper: Lo,
	init: Ao,
	innerDrawElementOnCanvas: Fo,
	matrix: Bo,
	number: Do,
	parseGeoJSON: ur,
	parseGeoJson: ur,
	registerAction: Ho,
	registerCoordinateSystem: Wo,
	registerLayout: qo,
	registerLoading: Uo,
	registerLocale: Vo,
	registerMap: Go,
	registerPostInit: Yo,
	registerPostUpdate: Jo,
	registerPreprocessor: Xo,
	registerProcessor: Zo,
	registerTheme: Ko,
	registerTransform: Qo,
	registerUpdateLifecycle: ea,
	registerVisual: ta,
	setCanvasCreator: na,
	setPlatformAPI: ra,
	throttle: ia,
	time: oa,
	use: fi,
	util: aa,
	vector: sa,
	version: ua,
	zrUtil: la,
	zrender: ca
}, Symbol.toStringTag, {
	value: "Module"
}));
fi([fa, da, pa, ha, ga, va, ma, ya]);
const xl = x.forwardRef(function(t, n) {
		x.useImperativeHandle(n, () => ({
			show: r
		}));
		const r = (h, v) => {
				a(!0), f(h), c(v)
			},
			i = () => {
				a(!1), f(), c(), d({})
			},
			[o, a] = x.useState(!1),
			[l, f] = x.useState(),
			[s, c] = x.useState(),
			[u, d] = x.useState({}),
			{
				loading: p
			} = Wn(async () => {
				const h = await fetch(`/api/v1/service/${l}`);
				if (h.status === 200) return h.json()
			}, {
				ready: !!l,
				onSuccess: h => {
					let {
						data: v = []
					} = h || {}, y = [], _ = [];
					for (const b of v) {
						let S = 0,
							O = [],
							j = [];
						for (let N = 0; N < b.created_at.length; N++) {
							const C = Math.round(b.avg_delay[N]);
							C > 0 && C < 1e3 ? O.push([b.created_at[N], C]) : (S += 1, j.push({
								xAxis: b.created_at[N]
							}))
						}
						const P = (S / b.created_at.length * 100).toFixed(1),
							$ = `${b.monitor_name} ${P}%`;
						_.push($), y.push({
							data: O,
							lineStyle: {
								width: 1
							},
							markLine: {
								data: j,
								label: {
									show: !1
								},
								lineStyle: {
									opacity: .5,
									width: .5
								},
								silent: !0,
								symbol: "none"
							},
							markPoint: {
								data: [{
									name: "Max",
									type: "max"
								}, {
									label: {
										offset: [0, 8]
									},
									name: "Min",
									symbolRotate: 180,
									type: "min"
								}],
								label: {
									fontSize: 10,
									offset: [0, -1]
								},
								symbolSize: 40
							},
							name: $,
							smooth: !0,
							symbol: "none",
							type: "line"
						})
					}
					d({
						dataZoom: [{
							brushSelect: !1,
							end: 100,
							minSpan: 5,
							start: 0
						}],
						legend: {
							data: _,
							pageButtonItemGap: 0,
							pageButtonGap: 8,
							pageIconSize: 12,
							type: "scroll"
						},
						series: y,
						xAxis: {
							boundaryGap: !1,
							type: "time"
						},
						yAxis: {
							axisLabel: {
								formatter: b => b
							},
							boundaryGap: !1,
							type: "value"
						},
						tooltip: {
							confine: !0,
							transitionDuration: 0,
							trigger: "axis"
						}
					})
				}
			});
		return m.jsx(Bn, {
			centered: !0,
			footer: null,
			forceRender: !0,
			open: o,
			title: s,
			width: 1e3,
			onCancel: i,
			children: m.jsx(yl, {
				echarts: bl,
				lazyUpdate: !0,
				loadingOption: {
					color: "#007fff",
					lineWidth: 4,
					spinnerRadius: 16,
					text: ""
				},
				notMerge: !0,
				option: u,
				showLoading: p,
				style: {
					height: 500
				}
			})
		})
	}),
	wl = x.memo(xl),
	jl = x.forwardRef(function(t, n) {
		x.useImperativeHandle(n, () => ({
			show: l
		}));
		const [r, i] = x.useState(!1), [o, a] = x.useState(""), l = () => {
			i(!0)
		}, f = () => {
			i(!1)
		}, {
			loading: s,
			run: c
		} = Wn(async () => {
			const u = await fetch("/view-password", {
				body: JSON.stringify({
					Password: o
				}),
				headers: {
					"Content-Type": "application/json"
				},
				method: "POST",
				redirect: "follow"
			});
			return u.ok && u.redirected
		}, {
			manual: !0,
			onSuccess: u => {
				u ? f() : ja.error("密码错误")
			}
		});
		return m.jsx(Bn, {
			centered: !0,
			footer: null,
			open: r,
			title: "密码",
			onCancel: f,
			children: m.jsxs(xa.Compact, {
				style: {
					marginTop: 8,
					width: "100%"
				},
				children: [m.jsx(wa.Password, {
					allowClear: !0,
					onChange: u => a(u.target.value),
					onPressEnter: c
				}), m.jsx(pi, {
					disabled: !o,
					loading: s,
					type: "primary",
					onClick: c,
					children: "确认"
				})]
			})
		})
	}),
	Sl = x.memo(jl),
	Ol = x.memo(function({
		items: t
	}) {
		const [n, r] = _l();
		return m.jsx(Sa, {
			animated: !1,
			indicator: {
				align: "center",
				size: 16
			},
			items: t,
			renderTabBar: (i, o) => m.jsx("div", {
				className: `ant-tabs-nav-sticky${n?" stickied":""}`,
				ref: r,
				children: m.jsx(o, {
					...i
				})
			}),
			tabBarGutter: 0
		})
	}, function(t, n) {
		return Ye(t.items, n.items)
	}),
	_l = e => {
		const [t, n] = x.useState(!1), r = x.useRef();
		return e || (e = r), x.useEffect(() => {
			const i = e.current,
				o = new IntersectionObserver(([a]) => n(a.boundingClientRect.top < 0), {
					threshold: [1]
				});
			return o.observe(i), () => {
				o.unobserve(i)
			}
		}, []), [t, e, n]
	};

function El(e, t) {
	let n, r;
	for (const i of e) i != null && (n === void 0 ? i >= i && (n = r = i) : (n > i && (n = i), r < i && (r = i)));
	return [n, r]
}
class Se {
	constructor() {
		this._partials = new Float64Array(32), this._n = 0
	}
	add(t) {
		const n = this._partials;
		let r = 0;
		for (let i = 0; i < this._n && i < 32; i++) {
			const o = n[i],
				a = t + o,
				l = Math.abs(t) < Math.abs(o) ? t - (a - o) : o - (a - t);
			l && (n[r++] = l), t = a
		}
		return n[r] = t, this._n = r + 1, this
	}
	valueOf() {
		const t = this._partials;
		let n = this._n,
			r, i, o, a = 0;
		if (n > 0) {
			for (a = t[--n]; n > 0 && (r = a, i = t[--n], a = r + i, o = i - (a - r), !o););
			n > 0 && (o < 0 && t[n - 1] < 0 || o > 0 && t[n - 1] > 0) && (i = o * 2, r = a + i, i == r - a && (a =
				r))
		}
		return a
	}
}
const Ml = Math.sqrt(50),
	Pl = Math.sqrt(10),
	$l = Math.sqrt(2);

function mt(e, t, n) {
	const r = (t - e) / Math.max(0, n),
		i = Math.floor(Math.log10(r)),
		o = r / Math.pow(10, i),
		a = o >= Ml ? 10 : o >= Pl ? 5 : o >= $l ? 2 : 1;
	let l, f, s;
	return i < 0 ? (s = Math.pow(10, -i) / a, l = Math.round(e * s), f = Math.round(t * s), l / s < e && ++l, f / s >
		t && --f, s = -s) : (s = Math.pow(10, i) * a, l = Math.round(e / s), f = Math.round(t / s), l * s < e && ++
		l, f * s > t && --f), f < l && .5 <= n && n < 2 ? mt(e, t, n * 2) : [l, f, s]
}

function Rl(e, t, n) {
	if (t = +t, e = +e, n = +n, !(n > 0)) return [];
	if (e === t) return [e];
	const r = t < e,
		[i, o, a] = r ? mt(t, e, n) : mt(e, t, n);
	if (!(o >= i)) return [];
	const l = o - i + 1,
		f = new Array(l);
	if (r)
		if (a < 0)
			for (let s = 0; s < l; ++s) f[s] = (o - s) / -a;
		else
			for (let s = 0; s < l; ++s) f[s] = (o - s) * a;
	else if (a < 0)
		for (let s = 0; s < l; ++s) f[s] = (i + s) / -a;
	else
		for (let s = 0; s < l; ++s) f[s] = (i + s) * a;
	return f
}

function xn(e, t, n) {
	return t = +t, e = +e, n = +n, mt(e, t, n)[2]
}

function Nl(e, t, n) {
	t = +t, e = +e, n = +n;
	const r = t < e,
		i = r ? xn(t, e, n) : xn(e, t, n);
	return (r ? -1 : 1) * (i < 0 ? 1 / -i : i)
}

function* Cl(e) {
	for (const t of e) yield* t
}

function Ri(e) {
	return Array.from(Cl(e))
}
var B = 1e-6,
	Ni = 1e-12,
	F = Math.PI,
	ne = F / 2,
	Mr = F / 4,
	ie = F * 2,
	pe = 180 / F,
	K = F / 180,
	W = Math.abs,
	Tl = Math.atan,
	Je = Math.atan2,
	q = Math.cos,
	U = Math.sin,
	zl = Math.sign || function(e) {
		return e > 0 ? 1 : e < 0 ? -1 : 0
	},
	be = Math.sqrt;

function kl(e) {
	return e > 1 ? 0 : e < -1 ? F : Math.acos(e)
}

function Oe(e) {
	return e > 1 ? ne : e < -1 ? -ne : Math.asin(e)
}

function re() {}

function yt(e, t) {
	e && $r.hasOwnProperty(e.type) && $r[e.type](e, t)
}
var Pr = {
		Feature: function(e, t) {
			yt(e.geometry, t)
		},
		FeatureCollection: function(e, t) {
			for (var n = e.features, r = -1, i = n.length; ++r < i;) yt(n[r].geometry, t)
		}
	},
	$r = {
		Sphere: function(e, t) {
			t.sphere()
		},
		Point: function(e, t) {
			e = e.coordinates, t.point(e[0], e[1], e[2])
		},
		MultiPoint: function(e, t) {
			for (var n = e.coordinates, r = -1, i = n.length; ++r < i;) e = n[r], t.point(e[0], e[1], e[2])
		},
		LineString: function(e, t) {
			wn(e.coordinates, t, 0)
		},
		MultiLineString: function(e, t) {
			for (var n = e.coordinates, r = -1, i = n.length; ++r < i;) wn(n[r], t, 0)
		},
		Polygon: function(e, t) {
			Rr(e.coordinates, t)
		},
		MultiPolygon: function(e, t) {
			for (var n = e.coordinates, r = -1, i = n.length; ++r < i;) Rr(n[r], t)
		},
		GeometryCollection: function(e, t) {
			for (var n = e.geometries, r = -1, i = n.length; ++r < i;) yt(n[r], t)
		}
	};

function wn(e, t, n) {
	var r = -1,
		i = e.length - n,
		o;
	for (t.lineStart(); ++r < i;) o = e[r], t.point(o[0], o[1], o[2]);
	t.lineEnd()
}

function Rr(e, t) {
	var n = -1,
		r = e.length;
	for (t.polygonStart(); ++n < r;) wn(e[n], t, 1);
	t.polygonEnd()
}

function $e(e, t) {
	e && Pr.hasOwnProperty(e.type) ? Pr[e.type](e, t) : yt(e, t)
}

function jn(e) {
	return [Je(e[1], e[0]), Oe(e[2])]
}

function Te(e) {
	var t = e[0],
		n = e[1],
		r = q(n);
	return [r * q(t), r * U(t), U(n)]
}

function at(e, t) {
	return e[0] * t[0] + e[1] * t[1] + e[2] * t[2]
}

function bt(e, t) {
	return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]]
}

function Kt(e, t) {
	e[0] += t[0], e[1] += t[1], e[2] += t[2]
}

function st(e, t) {
	return [e[0] * t, e[1] * t, e[2] * t]
}

function Sn(e) {
	var t = be(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
	e[0] /= t, e[1] /= t, e[2] /= t
}

function On(e, t) {
	function n(r, i) {
		return r = e(r, i), t(r[0], r[1])
	}
	return e.invert && t.invert && (n.invert = function(r, i) {
		return r = t.invert(r, i), r && e.invert(r[0], r[1])
	}), n
}

function _n(e, t) {
	return W(e) > F && (e -= Math.round(e / ie) * ie), [e, t]
}
_n.invert = _n;

function Il(e, t, n) {
	return (e %= ie) ? t || n ? On(Cr(e), Tr(t, n)) : Cr(e) : t || n ? Tr(t, n) : _n
}

function Nr(e) {
	return function(t, n) {
		return t += e, W(t) > F && (t -= Math.round(t / ie) * ie), [t, n]
	}
}

function Cr(e) {
	var t = Nr(e);
	return t.invert = Nr(-e), t
}

function Tr(e, t) {
	var n = q(e),
		r = U(e),
		i = q(t),
		o = U(t);

	function a(l, f) {
		var s = q(f),
			c = q(l) * s,
			u = U(l) * s,
			d = U(f),
			p = d * n + c * r;
		return [Je(u * i - p * o, c * n - d * r), Oe(p * i + u * o)]
	}
	return a.invert = function(l, f) {
		var s = q(f),
			c = q(l) * s,
			u = U(l) * s,
			d = U(f),
			p = d * i - u * o;
		return [Je(u * i + d * o, c * n + p * r), Oe(p * n - c * r)]
	}, a
}

function Ll(e, t, n, r, i, o) {
	if (n) {
		var a = q(t),
			l = U(t),
			f = r * n;
		i == null ? (i = t + r * ie, o = t - f / 2) : (i = zr(a, i), o = zr(a, o), (r > 0 ? i < o : i > o) && (i += r *
			ie));
		for (var s, c = i; r > 0 ? c > o : c < o; c -= f) s = jn([a, -l * q(c), -l * U(c)]), e.point(s[0], s[1])
	}
}

function zr(e, t) {
	t = Te(t), t[0] -= e, Sn(t);
	var n = kl(-t[1]);
	return ((-t[2] < 0 ? -n : n) + ie - B) % ie
}

function Ci() {
	var e = [],
		t;
	return {
		point: function(n, r, i) {
			t.push([n, r, i])
		},
		lineStart: function() {
			e.push(t = [])
		},
		lineEnd: re,
		rejoin: function() {
			e.length > 1 && e.push(e.pop().concat(e.shift()))
		},
		result: function() {
			var n = e;
			return e = [], t = null, n
		}
	}
}

function vt(e, t) {
	return W(e[0] - t[0]) < B && W(e[1] - t[1]) < B
}

function ut(e, t, n, r) {
	this.x = e, this.z = t, this.o = n, this.e = r, this.v = !1, this.n = this.p = null
}

function Ti(e, t, n, r, i) {
	var o = [],
		a = [],
		l, f;
	if (e.forEach(function(h) {
			if (!((v = h.length - 1) <= 0)) {
				var v, y = h[0],
					_ = h[v],
					E;
				if (vt(y, _)) {
					if (!y[2] && !_[2]) {
						for (i.lineStart(), l = 0; l < v; ++l) i.point((y = h[l])[0], y[1]);
						i.lineEnd();
						return
					}
					_[0] += 2 * B
				}
				o.push(E = new ut(y, h, null, !0)), a.push(E.o = new ut(y, null, E, !1)), o.push(E = new ut(_, h,
					null, !1)), a.push(E.o = new ut(_, null, E, !0))
			}
		}), !!o.length) {
		for (a.sort(t), kr(o), kr(a), l = 0, f = a.length; l < f; ++l) a[l].e = n = !n;
		for (var s = o[0], c, u;;) {
			for (var d = s, p = !0; d.v;)
				if ((d = d.n) === s) return;
			c = d.z, i.lineStart();
			do {
				if (d.v = d.o.v = !0, d.e) {
					if (p)
						for (l = 0, f = c.length; l < f; ++l) i.point((u = c[l])[0], u[1]);
					else r(d.x, d.n.x, 1, i);
					d = d.n
				} else {
					if (p)
						for (c = d.p.z, l = c.length - 1; l >= 0; --l) i.point((u = c[l])[0], u[1]);
					else r(d.x, d.p.x, -1, i);
					d = d.p
				}
				d = d.o, c = d.z, p = !p
			} while (!d.v);
			i.lineEnd()
		}
	}
}

function kr(e) {
	if (t = e.length) {
		for (var t, n = 0, r = e[0], i; ++n < t;) r.n = i = e[n], i.p = r, r = i;
		r.n = i = e[0], i.p = r
	}
}

function Qt(e) {
	return W(e[0]) <= F ? e[0] : zl(e[0]) * ((W(e[0]) + F) % ie - F)
}

function Al(e, t) {
	var n = Qt(t),
		r = t[1],
		i = U(r),
		o = [U(n), -q(n), 0],
		a = 0,
		l = 0,
		f = new Se;
	i === 1 ? r = ne + B : i === -1 && (r = -ne - B);
	for (var s = 0, c = e.length; s < c; ++s)
		if (d = (u = e[s]).length)
			for (var u, d, p = u[d - 1], h = Qt(p), v = p[1] / 2 + Mr, y = U(v), _ = q(v), E = 0; E < d; ++E, h = S, y =
				j, _ = P, p = b) {
				var b = u[E],
					S = Qt(b),
					O = b[1] / 2 + Mr,
					j = U(O),
					P = q(O),
					$ = S - h,
					N = $ >= 0 ? 1 : -1,
					C = N * $,
					w = C > F,
					k = y * j;
				if (f.add(Je(k * N * U(C), _ * P + k * q(C))), a += w ? $ + N * ie : $, w ^ h >= n ^ S >= n) {
					var T = bt(Te(p), Te(b));
					Sn(T);
					var I = bt(o, T);
					Sn(I);
					var g = (w ^ $ >= 0 ? -1 : 1) * Oe(I[2]);
					(r > g || r === g && (T[0] || T[1])) && (l += w ^ $ >= 0 ? 1 : -1)
				}
			}
	return (a < -B || a < B && f < -Ni) ^ l & 1
}

function zi(e, t, n, r) {
	return function(i) {
		var o = t(i),
			a = Ci(),
			l = t(a),
			f = !1,
			s, c, u, d = {
				point: p,
				lineStart: v,
				lineEnd: y,
				polygonStart: function() {
					d.point = _, d.lineStart = E, d.lineEnd = b, c = [], s = []
				},
				polygonEnd: function() {
					d.point = p, d.lineStart = v, d.lineEnd = y, c = Ri(c);
					var S = Al(s, r);
					c.length ? (f || (i.polygonStart(), f = !0), Ti(c, Bl, S, n, i)) : S && (f || (i
						.polygonStart(), f = !0), i.lineStart(), n(null, null, 1, i), i.lineEnd()), f && (i
						.polygonEnd(), f = !1), c = s = null
				},
				sphere: function() {
					i.polygonStart(), i.lineStart(), n(null, null, 1, i), i.lineEnd(), i.polygonEnd()
				}
			};

		function p(S, O) {
			e(S, O) && i.point(S, O)
		}

		function h(S, O) {
			o.point(S, O)
		}

		function v() {
			d.point = h, o.lineStart()
		}

		function y() {
			d.point = p, o.lineEnd()
		}

		function _(S, O) {
			u.push([S, O]), l.point(S, O)
		}

		function E() {
			l.lineStart(), u = []
		}

		function b() {
			_(u[0][0], u[0][1]), l.lineEnd();
			var S = l.clean(),
				O = a.result(),
				j, P = O.length,
				$, N, C;
			if (u.pop(), s.push(u), u = null, !!P) {
				if (S & 1) {
					if (N = O[0], ($ = N.length - 1) > 0) {
						for (f || (i.polygonStart(), f = !0), i.lineStart(), j = 0; j < $; ++j) i.point((C = N[j])[
							0], C[1]);
						i.lineEnd()
					}
					return
				}
				P > 1 && S & 2 && O.push(O.pop().concat(O.shift())), c.push(O.filter(Fl))
			}
		}
		return d
	}
}

function Fl(e) {
	return e.length > 1
}

function Bl(e, t) {
	return ((e = e.x)[0] < 0 ? e[1] - ne - B : ne - e[1]) - ((t = t.x)[0] < 0 ? t[1] - ne - B : ne - t[1])
}
const Ir = zi(function() {
	return !0
}, Dl, Wl, [-F, -ne]);

function Dl(e) {
	var t = NaN,
		n = NaN,
		r = NaN,
		i;
	return {
		lineStart: function() {
			e.lineStart(), i = 1
		},
		point: function(o, a) {
			var l = o > 0 ? F : -F,
				f = W(o - t);
			W(f - F) < B ? (e.point(t, n = (n + a) / 2 > 0 ? ne : -ne), e.point(r, n), e.lineEnd(), e.lineStart(), e
				.point(l, n), e.point(o, n), i = 0) : r !== l && f >= F && (W(t - r) < B && (t -= r * B), W(o -
					l) < B && (o -= l * B), n = Hl(t, n, o, a), e.point(r, n), e.lineEnd(), e.lineStart(), e
				.point(l, n), i = 0), e.point(t = o, n = a), r = l
		},
		lineEnd: function() {
			e.lineEnd(), t = n = NaN
		},
		clean: function() {
			return 2 - i
		}
	}
}

function Hl(e, t, n, r) {
	var i, o, a = U(e - n);
	return W(a) > B ? Tl((U(t) * (o = q(r)) * U(n) - U(r) * (i = q(t)) * U(e)) / (i * o * a)) : (t + r) / 2
}

function Wl(e, t, n, r) {
	var i;
	if (e == null) i = n * ne, r.point(-F, i), r.point(0, i), r.point(F, i), r.point(F, 0), r.point(F, -i), r.point(0, -
		i), r.point(-F, -i), r.point(-F, 0), r.point(-F, i);
	else if (W(e[0] - t[0]) > B) {
		var o = e[0] < t[0] ? F : -F;
		i = n * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i)
	} else r.point(t[0], t[1])
}

function ql(e) {
	var t = q(e),
		n = 2 * K,
		r = t > 0,
		i = W(t) > B;

	function o(c, u, d, p) {
		Ll(p, e, n, d, c, u)
	}

	function a(c, u) {
		return q(c) * q(u) > t
	}

	function l(c) {
		var u, d, p, h, v;
		return {
			lineStart: function() {
				h = p = !1, v = 1
			},
			point: function(y, _) {
				var E = [y, _],
					b, S = a(y, _),
					O = r ? S ? 0 : s(y, _) : S ? s(y + (y < 0 ? F : -F), _) : 0;
				if (!u && (h = p = S) && c.lineStart(), S !== p && (b = f(u, E), (!b || vt(u, b) || vt(E, b)) && (E[
						2] = 1)), S !== p) v = 0, S ? (c.lineStart(), b = f(E, u), c.point(b[0], b[1])) : (b = f(u,
					E), c.point(b[0], b[1], 2), c.lineEnd()), u = b;
				else if (i && u && r ^ S) {
					var j;
					!(O & d) && (j = f(E, u, !0)) && (v = 0, r ? (c.lineStart(), c.point(j[0][0], j[0][1]), c.point(
						j[1][0], j[1][1]), c.lineEnd()) : (c.point(j[1][0], j[1][1]), c.lineEnd(), c
					.lineStart(), c.point(j[0][0], j[0][1], 3)))
				}
				S && (!u || !vt(u, E)) && c.point(E[0], E[1]), u = E, p = S, d = O
			},
			lineEnd: function() {
				p && c.lineEnd(), u = null
			},
			clean: function() {
				return v | (h && p) << 1
			}
		}
	}

	function f(c, u, d) {
		var p = Te(c),
			h = Te(u),
			v = [1, 0, 0],
			y = bt(p, h),
			_ = at(y, y),
			E = y[0],
			b = _ - E * E;
		if (!b) return !d && c;
		var S = t * _ / b,
			O = -t * E / b,
			j = bt(v, y),
			P = st(v, S),
			$ = st(y, O);
		Kt(P, $);
		var N = j,
			C = at(P, N),
			w = at(N, N),
			k = C * C - w * (at(P, P) - 1);
		if (!(k < 0)) {
			var T = be(k),
				I = st(N, (-C - T) / w);
			if (Kt(I, P), I = jn(I), !d) return I;
			var g = c[0],
				R = u[0],
				z = c[1],
				H = u[1],
				D;
			R < g && (D = g, g = R, R = D);
			var ye = R - g,
				oe = W(ye - F) < B,
				se = oe || ye < B;
			if (!oe && H < z && (D = z, z = H, H = D), se ? oe ? z + H > 0 ^ I[1] < (W(I[0] - g) < B ? z : H) : z <= I[
					1] && I[1] <= H : ye > F ^ (g <= I[0] && I[0] <= R)) {
				var Q = st(N, (-C + T) / w);
				return Kt(Q, P), [I, jn(Q)]
			}
		}
	}

	function s(c, u) {
		var d = r ? e : F - e,
			p = 0;
		return c < -d ? p |= 1 : c > d && (p |= 2), u < -d ? p |= 4 : u > d && (p |= 8), p
	}
	return zi(a, l, o, r ? [0, -e] : [-F, e - F])
}

function Ul(e, t, n, r, i, o) {
	var a = e[0],
		l = e[1],
		f = t[0],
		s = t[1],
		c = 0,
		u = 1,
		d = f - a,
		p = s - l,
		h;
	if (h = n - a, !(!d && h > 0)) {
		if (h /= d, d < 0) {
			if (h < c) return;
			h < u && (u = h)
		} else if (d > 0) {
			if (h > u) return;
			h > c && (c = h)
		}
		if (h = i - a, !(!d && h < 0)) {
			if (h /= d, d < 0) {
				if (h > u) return;
				h > c && (c = h)
			} else if (d > 0) {
				if (h < c) return;
				h < u && (u = h)
			}
			if (h = r - l, !(!p && h > 0)) {
				if (h /= p, p < 0) {
					if (h < c) return;
					h < u && (u = h)
				} else if (p > 0) {
					if (h > u) return;
					h > c && (c = h)
				}
				if (h = o - l, !(!p && h < 0)) {
					if (h /= p, p < 0) {
						if (h > u) return;
						h > c && (c = h)
					} else if (p > 0) {
						if (h < c) return;
						h < u && (u = h)
					}
					return c > 0 && (e[0] = a + c * d, e[1] = l + c * p), u < 1 && (t[0] = a + u * d, t[1] = l + u * p),
						!0
				}
			}
		}
	}
}
var Le = 1e9,
	lt = -Le;

function Vl(e, t, n, r) {
	function i(s, c) {
		return e <= s && s <= n && t <= c && c <= r
	}

	function o(s, c, u, d) {
		var p = 0,
			h = 0;
		if (s == null || (p = a(s, u)) !== (h = a(c, u)) || f(s, c) < 0 ^ u > 0)
			do d.point(p === 0 || p === 3 ? e : n, p > 1 ? r : t); while ((p = (p + u + 4) % 4) !== h);
		else d.point(c[0], c[1])
	}

	function a(s, c) {
		return W(s[0] - e) < B ? c > 0 ? 0 : 3 : W(s[0] - n) < B ? c > 0 ? 2 : 1 : W(s[1] - t) < B ? c > 0 ? 1 : 0 : c >
			0 ? 3 : 2
	}

	function l(s, c) {
		return f(s.x, c.x)
	}

	function f(s, c) {
		var u = a(s, 1),
			d = a(c, 1);
		return u !== d ? u - d : u === 0 ? c[1] - s[1] : u === 1 ? s[0] - c[0] : u === 2 ? s[1] - c[1] : c[0] - s[0]
	}
	return function(s) {
		var c = s,
			u = Ci(),
			d, p, h, v, y, _, E, b, S, O, j, P = {
				point: $,
				lineStart: k,
				lineEnd: T,
				polygonStart: C,
				polygonEnd: w
			};

		function $(g, R) {
			i(g, R) && c.point(g, R)
		}

		function N() {
			for (var g = 0, R = 0, z = p.length; R < z; ++R)
				for (var H = p[R], D = 1, ye = H.length, oe = H[0], se, Q, de = oe[0], A = oe[1]; D < ye; ++D) se =
					de, Q = A, oe = H[D], de = oe[0], A = oe[1], Q <= r ? A > r && (de - se) * (r - Q) > (A - Q) * (
						e - se) && ++g : A <= r && (de - se) * (r - Q) < (A - Q) * (e - se) && --g;
			return g
		}

		function C() {
			c = u, d = [], p = [], j = !0
		}

		function w() {
			var g = N(),
				R = j && g,
				z = (d = Ri(d)).length;
			(R || z) && (s.polygonStart(), R && (s.lineStart(), o(null, null, 1, s), s.lineEnd()), z && Ti(d, l, g,
				o, s), s.polygonEnd()), c = s, d = p = h = null
		}

		function k() {
			P.point = I, p && p.push(h = []), O = !0, S = !1, E = b = NaN
		}

		function T() {
			d && (I(v, y), _ && S && u.rejoin(), d.push(u.result())), P.point = $, S && c.lineEnd()
		}

		function I(g, R) {
			var z = i(g, R);
			if (p && h.push([g, R]), O) v = g, y = R, _ = z, O = !1, z && (c.lineStart(), c.point(g, R));
			else if (z && S) c.point(g, R);
			else {
				var H = [E = Math.max(lt, Math.min(Le, E)), b = Math.max(lt, Math.min(Le, b))],
					D = [g = Math.max(lt, Math.min(Le, g)), R = Math.max(lt, Math.min(Le, R))];
				Ul(H, D, e, t, n, r) ? (S || (c.lineStart(), c.point(H[0], H[1])), c.point(D[0], D[1]), z || c
					.lineEnd(), j = !1) : z && (c.lineStart(), c.point(g, R), j = !1)
			}
			E = g, b = R, S = z
		}
		return P
	}
}
const En = e => e;
var en = new Se,
	Mn = new Se,
	ki, Ii, Pn, $n, me = {
		point: re,
		lineStart: re,
		lineEnd: re,
		polygonStart: function() {
			me.lineStart = Gl, me.lineEnd = Jl
		},
		polygonEnd: function() {
			me.lineStart = me.lineEnd = me.point = re, en.add(W(Mn)), Mn = new Se
		},
		result: function() {
			var e = en / 2;
			return en = new Se, e
		}
	};

function Gl() {
	me.point = Yl
}

function Yl(e, t) {
	me.point = Li, ki = Pn = e, Ii = $n = t
}

function Li(e, t) {
	Mn.add($n * e - Pn * t), Pn = e, $n = t
}

function Jl() {
	Li(ki, Ii)
}
var ze = 1 / 0,
	xt = ze,
	Xe = -ze,
	wt = Xe,
	jt = {
		point: Xl,
		lineStart: re,
		lineEnd: re,
		polygonStart: re,
		polygonEnd: re,
		result: function() {
			var e = [
				[ze, xt],
				[Xe, wt]
			];
			return Xe = wt = -(xt = ze = 1 / 0), e
		}
	};

function Xl(e, t) {
	e < ze && (ze = e), e > Xe && (Xe = e), t < xt && (xt = t), t > wt && (wt = t)
}
var Rn = 0,
	Nn = 0,
	Ae = 0,
	St = 0,
	Ot = 0,
	Ne = 0,
	Cn = 0,
	Tn = 0,
	Fe = 0,
	Ai, Fi, le, ce, te = {
		point: _e,
		lineStart: Lr,
		lineEnd: Ar,
		polygonStart: function() {
			te.lineStart = Ql, te.lineEnd = ec
		},
		polygonEnd: function() {
			te.point = _e, te.lineStart = Lr, te.lineEnd = Ar
		},
		result: function() {
			var e = Fe ? [Cn / Fe, Tn / Fe] : Ne ? [St / Ne, Ot / Ne] : Ae ? [Rn / Ae, Nn / Ae] : [NaN, NaN];
			return Rn = Nn = Ae = St = Ot = Ne = Cn = Tn = Fe = 0, e
		}
	};

function _e(e, t) {
	Rn += e, Nn += t, ++Ae
}

function Lr() {
	te.point = Zl
}

function Zl(e, t) {
	te.point = Kl, _e(le = e, ce = t)
}

function Kl(e, t) {
	var n = e - le,
		r = t - ce,
		i = be(n * n + r * r);
	St += i * (le + e) / 2, Ot += i * (ce + t) / 2, Ne += i, _e(le = e, ce = t)
}

function Ar() {
	te.point = _e
}

function Ql() {
	te.point = tc
}

function ec() {
	Bi(Ai, Fi)
}

function tc(e, t) {
	te.point = Bi, _e(Ai = le = e, Fi = ce = t)
}

function Bi(e, t) {
	var n = e - le,
		r = t - ce,
		i = be(n * n + r * r);
	St += i * (le + e) / 2, Ot += i * (ce + t) / 2, Ne += i, i = ce * e - le * t, Cn += i * (le + e), Tn += i * (ce +
		t), Fe += i * 3, _e(le = e, ce = t)
}

function Di(e) {
	this._context = e
}
Di.prototype = {
	_radius: 4.5,
	pointRadius: function(e) {
		return this._radius = e, this
	},
	polygonStart: function() {
		this._line = 0
	},
	polygonEnd: function() {
		this._line = NaN
	},
	lineStart: function() {
		this._point = 0
	},
	lineEnd: function() {
		this._line === 0 && this._context.closePath(), this._point = NaN
	},
	point: function(e, t) {
		switch (this._point) {
			case 0: {
				this._context.moveTo(e, t), this._point = 1;
				break
			}
			case 1: {
				this._context.lineTo(e, t);
				break
			}
			default: {
				this._context.moveTo(e + this._radius, t), this._context.arc(e, t, this._radius, 0, ie);
				break
			}
		}
	},
	result: re
};
var zn = new Se,
	tn, Hi, Wi, Be, De, Ze = {
		point: re,
		lineStart: function() {
			Ze.point = nc
		},
		lineEnd: function() {
			tn && qi(Hi, Wi), Ze.point = re
		},
		polygonStart: function() {
			tn = !0
		},
		polygonEnd: function() {
			tn = null
		},
		result: function() {
			var e = +zn;
			return zn = new Se, e
		}
	};

function nc(e, t) {
	Ze.point = qi, Hi = Be = e, Wi = De = t
}

function qi(e, t) {
	Be -= e, De -= t, zn.add(be(Be * Be + De * De)), Be = e, De = t
}
let Fr, _t, Br, Dr;
class Hr {
	constructor(t) {
		this._append = t == null ? Ui : rc(t), this._radius = 4.5, this._ = ""
	}
	pointRadius(t) {
		return this._radius = +t, this
	}
	polygonStart() {
		this._line = 0
	}
	polygonEnd() {
		this._line = NaN
	}
	lineStart() {
		this._point = 0
	}
	lineEnd() {
		this._line === 0 && (this._ += "Z"), this._point = NaN
	}
	point(t, n) {
		switch (this._point) {
			case 0: {
				this._append`M${t},${n}`, this._point = 1;
				break
			}
			case 1: {
				this._append`L${t},${n}`;
				break
			}
			default: {
				if (this._append`M${t},${n}`, this._radius !== Br || this._append !== _t) {
					const r = this._radius,
						i = this._;
					this._ = "", this._append`m0,${r}a${r},${r} 0 1,1 0,${-2*r}a${r},${r} 0 1,1 0,${2*r}z`, Br = r,
						_t = this._append, Dr = this._, this._ = i
				}
				this._ += Dr;
				break
			}
		}
	}
	result() {
		const t = this._;
		return this._ = "", t.length ? t : null
	}
}

function Ui(e) {
	let t = 1;
	this._ += e[0];
	for (const n = e.length; t < n; ++t) this._ += arguments[t] + e[t]
}

function rc(e) {
	const t = Math.floor(e);
	if (!(t >= 0)) throw new RangeError(`invalid digits: ${e}`);
	if (t > 15) return Ui;
	if (t !== Fr) {
		const n = 10 ** t;
		Fr = t, _t = function(i) {
			let o = 1;
			this._ += i[0];
			for (const a = i.length; o < a; ++o) this._ += Math.round(arguments[o] * n) / n + i[o]
		}
	}
	return _t
}

function ic(e, t) {
	let n = 3,
		r = 4.5,
		i, o;

	function a(l) {
		return l && (typeof r == "function" && o.pointRadius(+r.apply(this, arguments)), $e(l, i(o))), o.result()
	}
	return a.area = function(l) {
		return $e(l, i(me)), me.result()
	}, a.measure = function(l) {
		return $e(l, i(Ze)), Ze.result()
	}, a.bounds = function(l) {
		return $e(l, i(jt)), jt.result()
	}, a.centroid = function(l) {
		return $e(l, i(te)), te.result()
	}, a.projection = function(l) {
		return arguments.length ? (i = l == null ? (e = null, En) : (e = l).stream, a) : e
	}, a.context = function(l) {
		return arguments.length ? (o = l == null ? (t = null, new Hr(n)) : new Di(t = l), typeof r != "function" &&
			o.pointRadius(r), a) : t
	}, a.pointRadius = function(l) {
		return arguments.length ? (r = typeof l == "function" ? l : (o.pointRadius(+l), +l), a) : r
	}, a.digits = function(l) {
		if (!arguments.length) return n;
		if (l == null) n = null;
		else {
			const f = Math.floor(l);
			if (!(f >= 0)) throw new RangeError(`invalid digits: ${l}`);
			n = f
		}
		return t === null && (o = new Hr(n)), a
	}, a.projection(e).digits(n).context(t)
}

function rr(e) {
	return function(t) {
		var n = new kn;
		for (var r in e) n[r] = e[r];
		return n.stream = t, n
	}
}

function kn() {}
kn.prototype = {
	constructor: kn,
	point: function(e, t) {
		this.stream.point(e, t)
	},
	sphere: function() {
		this.stream.sphere()
	},
	lineStart: function() {
		this.stream.lineStart()
	},
	lineEnd: function() {
		this.stream.lineEnd()
	},
	polygonStart: function() {
		this.stream.polygonStart()
	},
	polygonEnd: function() {
		this.stream.polygonEnd()
	}
};

function ir(e, t, n) {
	var r = e.clipExtent && e.clipExtent();
	return e.scale(150).translate([0, 0]), r != null && e.clipExtent(null), $e(n, e.stream(jt)), t(jt.result()), r !=
		null && e.clipExtent(r), e
}

function Vi(e, t, n) {
	return ir(e, function(r) {
		var i = t[1][0] - t[0][0],
			o = t[1][1] - t[0][1],
			a = Math.min(i / (r[1][0] - r[0][0]), o / (r[1][1] - r[0][1])),
			l = +t[0][0] + (i - a * (r[1][0] + r[0][0])) / 2,
			f = +t[0][1] + (o - a * (r[1][1] + r[0][1])) / 2;
		e.scale(150 * a).translate([l, f])
	}, n)
}

function oc(e, t, n) {
	return Vi(e, [
		[0, 0], t
	], n)
}

function ac(e, t, n) {
	return ir(e, function(r) {
		var i = +t,
			o = i / (r[1][0] - r[0][0]),
			a = (i - o * (r[1][0] + r[0][0])) / 2,
			l = -o * r[0][1];
		e.scale(150 * o).translate([a, l])
	}, n)
}

function sc(e, t, n) {
	return ir(e, function(r) {
		var i = +t,
			o = i / (r[1][1] - r[0][1]),
			a = -o * r[0][0],
			l = (i - o * (r[1][1] + r[0][1])) / 2;
		e.scale(150 * o).translate([a, l])
	}, n)
}
var Wr = 16,
	uc = q(30 * K);

function qr(e, t) {
	return +t ? cc(e, t) : lc(e)
}

function lc(e) {
	return rr({
		point: function(t, n) {
			t = e(t, n), this.stream.point(t[0], t[1])
		}
	})
}

function cc(e, t) {
	function n(r, i, o, a, l, f, s, c, u, d, p, h, v, y) {
		var _ = s - r,
			E = c - i,
			b = _ * _ + E * E;
		if (b > 4 * t && v--) {
			var S = a + d,
				O = l + p,
				j = f + h,
				P = be(S * S + O * O + j * j),
				$ = Oe(j /= P),
				N = W(W(j) - 1) < B || W(o - u) < B ? (o + u) / 2 : Je(O, S),
				C = e(N, $),
				w = C[0],
				k = C[1],
				T = w - r,
				I = k - i,
				g = E * T - _ * I;
			(g * g / b > t || W((_ * T + E * I) / b - .5) > .3 || a * d + l * p + f * h < uc) && (n(r, i, o, a, l, f, w,
				k, N, S /= P, O /= P, j, v, y), y.point(w, k), n(w, k, N, S, O, j, s, c, u, d, p, h, v, y))
		}
	}
	return function(r) {
		var i, o, a, l, f, s, c, u, d, p, h, v, y = {
			point: _,
			lineStart: E,
			lineEnd: S,
			polygonStart: function() {
				r.polygonStart(), y.lineStart = O
			},
			polygonEnd: function() {
				r.polygonEnd(), y.lineStart = E
			}
		};

		function _($, N) {
			$ = e($, N), r.point($[0], $[1])
		}

		function E() {
			u = NaN, y.point = b, r.lineStart()
		}

		function b($, N) {
			var C = Te([$, N]),
				w = e($, N);
			n(u, d, c, p, h, v, u = w[0], d = w[1], c = $, p = C[0], h = C[1], v = C[2], Wr, r), r.point(u, d)
		}

		function S() {
			y.point = _, r.lineEnd()
		}

		function O() {
			E(), y.point = j, y.lineEnd = P
		}

		function j($, N) {
			b(i = $, N), o = u, a = d, l = p, f = h, s = v, y.point = b
		}

		function P() {
			n(u, d, c, p, h, v, o, a, i, l, f, s, Wr, r), y.lineEnd = S, S()
		}
		return y
	}
}
var fc = rr({
	point: function(e, t) {
		this.stream.point(e * K, t * K)
	}
});

function dc(e) {
	return rr({
		point: function(t, n) {
			var r = e(t, n);
			return this.stream.point(r[0], r[1])
		}
	})
}

function pc(e, t, n, r, i) {
	function o(a, l) {
		return a *= r, l *= i, [t + e * a, n - e * l]
	}
	return o.invert = function(a, l) {
		return [(a - t) / e * r, (n - l) / e * i]
	}, o
}

function Ur(e, t, n, r, i, o) {
	if (!o) return pc(e, t, n, r, i);
	var a = q(o),
		l = U(o),
		f = a * e,
		s = l * e,
		c = a / e,
		u = l / e,
		d = (l * n - a * t) / e,
		p = (l * t + a * n) / e;

	function h(v, y) {
		return v *= r, y *= i, [f * v - s * y + t, n - s * v - f * y]
	}
	return h.invert = function(v, y) {
		return [r * (c * v - u * y + d), i * (p - u * v - c * y)]
	}, h
}

function hc(e) {
	return gc(function() {
		return e
	})()
}

function gc(e) {
	var t, n = 150,
		r = 480,
		i = 250,
		o = 0,
		a = 0,
		l = 0,
		f = 0,
		s = 0,
		c, u = 0,
		d = 1,
		p = 1,
		h = null,
		v = Ir,
		y = null,
		_, E, b, S = En,
		O = .5,
		j, P, $, N, C;

	function w(g) {
		return $(g[0] * K, g[1] * K)
	}

	function k(g) {
		return g = $.invert(g[0], g[1]), g && [g[0] * pe, g[1] * pe]
	}
	w.stream = function(g) {
		return N && C === g ? N : N = fc(dc(c)(v(j(S(C = g)))))
	}, w.preclip = function(g) {
		return arguments.length ? (v = g, h = void 0, I()) : v
	}, w.postclip = function(g) {
		return arguments.length ? (S = g, y = _ = E = b = null, I()) : S
	}, w.clipAngle = function(g) {
		return arguments.length ? (v = +g ? ql(h = g * K) : (h = null, Ir), I()) : h * pe
	}, w.clipExtent = function(g) {
		return arguments.length ? (S = g == null ? (y = _ = E = b = null, En) : Vl(y = +g[0][0], _ = +g[0][1], E = +
			g[1][0], b = +g[1][1]), I()) : y == null ? null : [
			[y, _],
			[E, b]
		]
	}, w.scale = function(g) {
		return arguments.length ? (n = +g, T()) : n
	}, w.translate = function(g) {
		return arguments.length ? (r = +g[0], i = +g[1], T()) : [r, i]
	}, w.center = function(g) {
		return arguments.length ? (o = g[0] % 360 * K, a = g[1] % 360 * K, T()) : [o * pe, a * pe]
	}, w.rotate = function(g) {
		return arguments.length ? (l = g[0] % 360 * K, f = g[1] % 360 * K, s = g.length > 2 ? g[2] % 360 * K : 0,
		T()) : [l * pe, f * pe, s * pe]
	}, w.angle = function(g) {
		return arguments.length ? (u = g % 360 * K, T()) : u * pe
	}, w.reflectX = function(g) {
		return arguments.length ? (d = g ? -1 : 1, T()) : d < 0
	}, w.reflectY = function(g) {
		return arguments.length ? (p = g ? -1 : 1, T()) : p < 0
	}, w.precision = function(g) {
		return arguments.length ? (j = qr(P, O = g * g), I()) : be(O)
	}, w.fitExtent = function(g, R) {
		return Vi(w, g, R)
	}, w.fitSize = function(g, R) {
		return oc(w, g, R)
	}, w.fitWidth = function(g, R) {
		return ac(w, g, R)
	}, w.fitHeight = function(g, R) {
		return sc(w, g, R)
	};

	function T() {
		var g = Ur(n, 0, 0, d, p, u).apply(null, t(o, a)),
			R = Ur(n, r - g[0], i - g[1], d, p, u);
		return c = Il(l, f, s), P = On(t, R), $ = On(c, P), j = qr(P, O), I()
	}

	function I() {
		return N = C = null, w
	}
	return function() {
		return t = e.apply(this, arguments), w.invert = t.invert && k, T()
	}
}
var qe = 1.340264,
	Ue = -.081106,
	Ve = 893e-6,
	Ge = .003796,
	Et = be(3) / 2,
	vc = 12;

function Gi(e, t) {
	var n = Oe(Et * U(t)),
		r = n * n,
		i = r * r * r;
	return [e * q(n) / (Et * (qe + 3 * Ue * r + i * (7 * Ve + 9 * Ge * r))), n * (qe + Ue * r + i * (Ve + Ge * r))]
}
Gi.invert = function(e, t) {
	for (var n = t, r = n * n, i = r * r * r, o = 0, a, l, f; o < vc && (l = n * (qe + Ue * r + i * (Ve + Ge * r)) -
			t, f = qe + 3 * Ue * r + i * (7 * Ve + 9 * Ge * r), n -= a = l / f, r = n * n, i = r * r * r, !(W(a) <
				Ni)); ++o);
	return [Et * e * (qe + 3 * Ue * r + i * (7 * Ve + 9 * Ge * r)) / q(n), Oe(U(n) / Et)]
};

function mc() {
	return hc(Gi).scale(177.158)
}

function or(e, t, n) {
	e.prototype = t.prototype = n, n.constructor = e
}

function Yi(e, t) {
	var n = Object.create(e.prototype);
	for (var r in t) n[r] = t[r];
	return n
}

function tt() {}
var Ke = .7,
	Mt = 1 / Ke,
	Ce = "\\s*([+-]?\\d+)\\s*",
	Qe = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
	fe = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
	yc = /^#([0-9a-f]{3,8})$/,
	bc = new RegExp(`^rgb\\(${Ce},${Ce},${Ce}\\)$`),
	xc = new RegExp(`^rgb\\(${fe},${fe},${fe}\\)$`),
	wc = new RegExp(`^rgba\\(${Ce},${Ce},${Ce},${Qe}\\)$`),
	jc = new RegExp(`^rgba\\(${fe},${fe},${fe},${Qe}\\)$`),
	Sc = new RegExp(`^hsl\\(${Qe},${fe},${fe}\\)$`),
	Oc = new RegExp(`^hsla\\(${Qe},${fe},${fe},${Qe}\\)$`),
	Vr = {
		aliceblue: 15792383,
		antiquewhite: 16444375,
		aqua: 65535,
		aquamarine: 8388564,
		azure: 15794175,
		beige: 16119260,
		bisque: 16770244,
		black: 0,
		blanchedalmond: 16772045,
		blue: 255,
		blueviolet: 9055202,
		brown: 10824234,
		burlywood: 14596231,
		cadetblue: 6266528,
		chartreuse: 8388352,
		chocolate: 13789470,
		coral: 16744272,
		cornflowerblue: 6591981,
		cornsilk: 16775388,
		crimson: 14423100,
		cyan: 65535,
		darkblue: 139,
		darkcyan: 35723,
		darkgoldenrod: 12092939,
		darkgray: 11119017,
		darkgreen: 25600,
		darkgrey: 11119017,
		darkkhaki: 12433259,
		darkmagenta: 9109643,
		darkolivegreen: 5597999,
		darkorange: 16747520,
		darkorchid: 10040012,
		darkred: 9109504,
		darksalmon: 15308410,
		darkseagreen: 9419919,
		darkslateblue: 4734347,
		darkslategray: 3100495,
		darkslategrey: 3100495,
		darkturquoise: 52945,
		darkviolet: 9699539,
		deeppink: 16716947,
		deepskyblue: 49151,
		dimgray: 6908265,
		dimgrey: 6908265,
		dodgerblue: 2003199,
		firebrick: 11674146,
		floralwhite: 16775920,
		forestgreen: 2263842,
		fuchsia: 16711935,
		gainsboro: 14474460,
		ghostwhite: 16316671,
		gold: 16766720,
		goldenrod: 14329120,
		gray: 8421504,
		green: 32768,
		greenyellow: 11403055,
		grey: 8421504,
		honeydew: 15794160,
		hotpink: 16738740,
		indianred: 13458524,
		indigo: 4915330,
		ivory: 16777200,
		khaki: 15787660,
		lavender: 15132410,
		lavenderblush: 16773365,
		lawngreen: 8190976,
		lemonchiffon: 16775885,
		lightblue: 11393254,
		lightcoral: 15761536,
		lightcyan: 14745599,
		lightgoldenrodyellow: 16448210,
		lightgray: 13882323,
		lightgreen: 9498256,
		lightgrey: 13882323,
		lightpink: 16758465,
		lightsalmon: 16752762,
		lightseagreen: 2142890,
		lightskyblue: 8900346,
		lightslategray: 7833753,
		lightslategrey: 7833753,
		lightsteelblue: 11584734,
		lightyellow: 16777184,
		lime: 65280,
		limegreen: 3329330,
		linen: 16445670,
		magenta: 16711935,
		maroon: 8388608,
		mediumaquamarine: 6737322,
		mediumblue: 205,
		mediumorchid: 12211667,
		mediumpurple: 9662683,
		mediumseagreen: 3978097,
		mediumslateblue: 8087790,
		mediumspringgreen: 64154,
		mediumturquoise: 4772300,
		mediumvioletred: 13047173,
		midnightblue: 1644912,
		mintcream: 16121850,
		mistyrose: 16770273,
		moccasin: 16770229,
		navajowhite: 16768685,
		navy: 128,
		oldlace: 16643558,
		olive: 8421376,
		olivedrab: 7048739,
		orange: 16753920,
		orangered: 16729344,
		orchid: 14315734,
		palegoldenrod: 15657130,
		palegreen: 10025880,
		paleturquoise: 11529966,
		palevioletred: 14381203,
		papayawhip: 16773077,
		peachpuff: 16767673,
		peru: 13468991,
		pink: 16761035,
		plum: 14524637,
		powderblue: 11591910,
		purple: 8388736,
		rebeccapurple: 6697881,
		red: 16711680,
		rosybrown: 12357519,
		royalblue: 4286945,
		saddlebrown: 9127187,
		salmon: 16416882,
		sandybrown: 16032864,
		seagreen: 3050327,
		seashell: 16774638,
		sienna: 10506797,
		silver: 12632256,
		skyblue: 8900331,
		slateblue: 6970061,
		slategray: 7372944,
		slategrey: 7372944,
		snow: 16775930,
		springgreen: 65407,
		steelblue: 4620980,
		tan: 13808780,
		teal: 32896,
		thistle: 14204888,
		tomato: 16737095,
		turquoise: 4251856,
		violet: 15631086,
		wheat: 16113331,
		white: 16777215,
		whitesmoke: 16119285,
		yellow: 16776960,
		yellowgreen: 10145074
	};
or(tt, et, {
	copy(e) {
		return Object.assign(new this.constructor, this, e)
	},
	displayable() {
		return this.rgb().displayable()
	},
	hex: Gr,
	formatHex: Gr,
	formatHex8: _c,
	formatHsl: Ec,
	formatRgb: Yr,
	toString: Yr
});

function Gr() {
	return this.rgb().formatHex()
}

function _c() {
	return this.rgb().formatHex8()
}

function Ec() {
	return Ji(this).formatHsl()
}

function Yr() {
	return this.rgb().formatRgb()
}

function et(e) {
	var t, n;
	return e = (e + "").trim().toLowerCase(), (t = yc.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Jr(
				t) : n === 3 ? new X(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) :
			n === 8 ? ct(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? ct(t >> 12 & 15 | t >>
				8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (
			t = bc.exec(e)) ? new X(t[1], t[2], t[3], 1) : (t = xc.exec(e)) ? new X(t[1] * 255 / 100, t[2] * 255 / 100,
			t[3] * 255 / 100, 1) : (t = wc.exec(e)) ? ct(t[1], t[2], t[3], t[4]) : (t = jc.exec(e)) ? ct(t[1] * 255 /
			100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Sc.exec(e)) ? Kr(t[1], t[2] / 100, t[3] / 100, 1) : (
			t = Oc.exec(e)) ? Kr(t[1], t[2] / 100, t[3] / 100, t[4]) : Vr.hasOwnProperty(e) ? Jr(Vr[e]) : e ===
		"transparent" ? new X(NaN, NaN, NaN, 0) : null
}

function Jr(e) {
	return new X(e >> 16 & 255, e >> 8 & 255, e & 255, 1)
}

function ct(e, t, n, r) {
	return r <= 0 && (e = t = n = NaN), new X(e, t, n, r)
}

function Mc(e) {
	return e instanceof tt || (e = et(e)), e ? (e = e.rgb(), new X(e.r, e.g, e.b, e.opacity)) : new X
}

function In(e, t, n, r) {
	return arguments.length === 1 ? Mc(e) : new X(e, t, n, r ?? 1)
}

function X(e, t, n, r) {
	this.r = +e, this.g = +t, this.b = +n, this.opacity = +r
}
or(X, In, Yi(tt, {
	brighter(e) {
		return e = e == null ? Mt : Math.pow(Mt, e), new X(this.r * e, this.g * e, this.b * e, this.opacity)
	},
	darker(e) {
		return e = e == null ? Ke : Math.pow(Ke, e), new X(this.r * e, this.g * e, this.b * e, this.opacity)
	},
	rgb() {
		return this
	},
	clamp() {
		return new X(je(this.r), je(this.g), je(this.b), Pt(this.opacity))
	},
	displayable() {
		return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this
			.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
	},
	hex: Xr,
	formatHex: Xr,
	formatHex8: Pc,
	formatRgb: Zr,
	toString: Zr
}));

function Xr() {
	return `#${we(this.r)}${we(this.g)}${we(this.b)}`
}

function Pc() {
	return `#${we(this.r)}${we(this.g)}${we(this.b)}${we((isNaN(this.opacity)?1:this.opacity)*255)}`
}

function Zr() {
	const e = Pt(this.opacity);
	return `${e===1?"rgb(":"rgba("}${je(this.r)}, ${je(this.g)}, ${je(this.b)}${e===1?")":`, ${e})`}`
}

function Pt(e) {
	return isNaN(e) ? 1 : Math.max(0, Math.min(1, e))
}

function je(e) {
	return Math.max(0, Math.min(255, Math.round(e) || 0))
}

function we(e) {
	return e = je(e), (e < 16 ? "0" : "") + e.toString(16)
}

function Kr(e, t, n, r) {
	return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new ae(e, t, n, r)
}

function Ji(e) {
	if (e instanceof ae) return new ae(e.h, e.s, e.l, e.opacity);
	if (e instanceof tt || (e = et(e)), !e) return new ae;
	if (e instanceof ae) return e;
	e = e.rgb();
	var t = e.r / 255,
		n = e.g / 255,
		r = e.b / 255,
		i = Math.min(t, n, r),
		o = Math.max(t, n, r),
		a = NaN,
		l = o - i,
		f = (o + i) / 2;
	return l ? (t === o ? a = (n - r) / l + (n < r) * 6 : n === o ? a = (r - t) / l + 2 : a = (t - n) / l + 4, l /= f <
		.5 ? o + i : 2 - o - i, a *= 60) : l = f > 0 && f < 1 ? 0 : a, new ae(a, l, f, e.opacity)
}

function $c(e, t, n, r) {
	return arguments.length === 1 ? Ji(e) : new ae(e, t, n, r ?? 1)
}

function ae(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r
}
or(ae, $c, Yi(tt, {
	brighter(e) {
		return e = e == null ? Mt : Math.pow(Mt, e), new ae(this.h, this.s, this.l * e, this.opacity)
	},
	darker(e) {
		return e = e == null ? Ke : Math.pow(Ke, e), new ae(this.h, this.s, this.l * e, this.opacity)
	},
	rgb() {
		var e = this.h % 360 + (this.h < 0) * 360,
			t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
			n = this.l,
			r = n + (n < .5 ? n : 1 - n) * t,
			i = 2 * n - r;
		return new X(nn(e >= 240 ? e - 240 : e + 120, i, r), nn(e, i, r), nn(e < 120 ? e + 240 : e - 120, i,
			r), this.opacity)
	},
	clamp() {
		return new ae(Qr(this.h), ft(this.s), ft(this.l), Pt(this.opacity))
	},
	displayable() {
		return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this
			.opacity && this.opacity <= 1
	},
	formatHsl() {
		const e = Pt(this.opacity);
		return `${e===1?"hsl(":"hsla("}${Qr(this.h)}, ${ft(this.s)*100}%, ${ft(this.l)*100}%${e===1?")":`, ${e})`}`
	}
}));

function Qr(e) {
	return e = (e || 0) % 360, e < 0 ? e + 360 : e
}

function ft(e) {
	return Math.max(0, Math.min(1, e || 0))
}

function nn(e, t, n) {
	return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255
}
const ar = e => () => e;

function Rc(e, t) {
	return function(n) {
		return e + n * t
	}
}

function Nc(e, t, n) {
	return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n,
		function(r) {
			return Math.pow(e + r * t, n)
		}
}

function Cc(e) {
	return (e = +e) == 1 ? Xi : function(t, n) {
		return n - t ? Nc(t, n, e) : ar(isNaN(t) ? n : t)
	}
}

function Xi(e, t) {
	var n = t - e;
	return n ? Rc(e, n) : ar(isNaN(e) ? t : e)
}
const ei = function e(t) {
	var n = Cc(t);

	function r(i, o) {
		var a = n((i = In(i)).r, (o = In(o)).r),
			l = n(i.g, o.g),
			f = n(i.b, o.b),
			s = Xi(i.opacity, o.opacity);
		return function(c) {
			return i.r = a(c), i.g = l(c), i.b = f(c), i.opacity = s(c), i + ""
		}
	}
	return r.gamma = e, r
}(1);

function Tc(e, t) {
	t || (t = []);
	var n = e ? Math.min(t.length, e.length) : 0,
		r = t.slice(),
		i;
	return function(o) {
		for (i = 0; i < n; ++i) r[i] = e[i] * (1 - o) + t[i] * o;
		return r
	}
}

function zc(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView)
}

function kc(e, t) {
	var n = t ? t.length : 0,
		r = e ? Math.min(n, e.length) : 0,
		i = new Array(r),
		o = new Array(n),
		a;
	for (a = 0; a < r; ++a) i[a] = Dt(e[a], t[a]);
	for (; a < n; ++a) o[a] = t[a];
	return function(l) {
		for (a = 0; a < r; ++a) o[a] = i[a](l);
		return o
	}
}

function Ic(e, t) {
	var n = new Date;
	return e = +e, t = +t,
		function(r) {
			return n.setTime(e * (1 - r) + t * r), n
		}
}

function Ln(e, t) {
	return e = +e, t = +t,
		function(n) {
			return e * (1 - n) + t * n
		}
}

function Lc(e, t) {
	var n = {},
		r = {},
		i;
	(e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
	for (i in t) i in e ? n[i] = Dt(e[i], t[i]) : r[i] = t[i];
	return function(o) {
		for (i in n) r[i] = n[i](o);
		return r
	}
}
var An = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
	rn = new RegExp(An.source, "g");

function Ac(e) {
	return function() {
		return e
	}
}

function Fc(e) {
	return function(t) {
		return e(t) + ""
	}
}

function Bc(e, t) {
	var n = An.lastIndex = rn.lastIndex = 0,
		r, i, o, a = -1,
		l = [],
		f = [];
	for (e = e + "", t = t + "";
		(r = An.exec(e)) && (i = rn.exec(t));)(o = i.index) > n && (o = t.slice(n, o), l[a] ? l[a] += o : l[++a] = o), (
		r = r[0]) === (i = i[0]) ? l[a] ? l[a] += i : l[++a] = i : (l[++a] = null, f.push({
		i: a,
		x: Ln(r, i)
	})), n = rn.lastIndex;
	return n < t.length && (o = t.slice(n), l[a] ? l[a] += o : l[++a] = o), l.length < 2 ? f[0] ? Fc(f[0].x) : Ac(t) : (
		t = f.length,
		function(s) {
			for (var c = 0, u; c < t; ++c) l[(u = f[c]).i] = u.x(s);
			return l.join("")
		})
}

function Dt(e, t) {
	var n = typeof t,
		r;
	return t == null || n === "boolean" ? ar(t) : (n === "number" ? Ln : n === "string" ? (r = et(t)) ? (t = r, ei) :
		Bc : t instanceof et ? ei : t instanceof Date ? Ic : zc(t) ? Tc : Array.isArray(t) ? kc : typeof t
		.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Lc : Ln)(e, t)
}

function Dc(e, t) {
	return e = +e, t = +t,
		function(n) {
			return Math.round(e * (1 - n) + t * n)
		}
}

function Hc(e, t) {
	switch (arguments.length) {
		case 0:
			break;
		case 1: {
			typeof e == "function" ? this.interpolator(e) : this.range(e);
			break
		}
		default: {
			this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
			break
		}
	}
	return this
}

function Zi(e) {
	return e
}

function Wc(e) {
	return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10)
}

function $t(e, t) {
	if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
	var n, r = e.slice(0, n);
	return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)]
}

function ke(e) {
	return e = $t(Math.abs(e)), e ? e[1] : NaN
}

function qc(e, t) {
	return function(n, r) {
		for (var i = n.length, o = [], a = 0, l = e[0], f = 0; i > 0 && l > 0 && (f + l + 1 > r && (l = Math.max(1,
				r - f)), o.push(n.substring(i -= l, i + l)), !((f += l + 1) > r));) l = e[a = (a + 1) % e.length];
		return o.reverse().join(t)
	}
}

function Uc(e) {
	return function(t) {
		return t.replace(/[0-9]/g, function(n) {
			return e[+n]
		})
	}
}
var Vc = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function Rt(e) {
	if (!(t = Vc.exec(e))) throw new Error("invalid format: " + e);
	var t;
	return new sr({
		fill: t[1],
		align: t[2],
		sign: t[3],
		symbol: t[4],
		zero: t[5],
		width: t[6],
		comma: t[7],
		precision: t[8] && t[8].slice(1),
		trim: t[9],
		type: t[10]
	})
}
Rt.prototype = sr.prototype;

function sr(e) {
	this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign =
		e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e
		.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e
		.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e
		.type + ""
}
sr.prototype.toString = function() {
	return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" :
		Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math
		.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type
};

function Gc(e) {
	e: for (var t = e.length, n = 1, r = -1, i; n < t; ++n) switch (e[n]) {
		case ".":
			r = i = n;
			break;
		case "0":
			r === 0 && (r = n), i = n;
			break;
		default:
			if (!+e[n]) break e;
			r > 0 && (r = 0);
			break
	}
	return r > 0 ? e.slice(0, r) + e.slice(i + 1) : e
}
var Ki;

function Yc(e, t) {
	var n = $t(e, t);
	if (!n) return e + "";
	var r = n[0],
		i = n[1],
		o = i - (Ki = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
		a = r.length;
	return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." +
		new Array(1 - o).join("0") + $t(e, Math.max(0, t + o - 1))[0]
}

function ti(e, t) {
	var n = $t(e, t);
	if (!n) return e + "";
	var r = n[0],
		i = n[1];
	return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) :
		r + new Array(i - r.length + 2).join("0")
}
const ni = {
	"%": (e, t) => (e * 100).toFixed(t),
	b: e => Math.round(e).toString(2),
	c: e => e + "",
	d: Wc,
	e: (e, t) => e.toExponential(t),
	f: (e, t) => e.toFixed(t),
	g: (e, t) => e.toPrecision(t),
	o: e => Math.round(e).toString(8),
	p: (e, t) => ti(e * 100, t),
	r: ti,
	s: Yc,
	X: e => Math.round(e).toString(16).toUpperCase(),
	x: e => Math.round(e).toString(16)
};

function ri(e) {
	return e
}
var ii = Array.prototype.map,
	oi = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

function Jc(e) {
	var t = e.grouping === void 0 || e.thousands === void 0 ? ri : qc(ii.call(e.grouping, Number), e.thousands + ""),
		n = e.currency === void 0 ? "" : e.currency[0] + "",
		r = e.currency === void 0 ? "" : e.currency[1] + "",
		i = e.decimal === void 0 ? "." : e.decimal + "",
		o = e.numerals === void 0 ? ri : Uc(ii.call(e.numerals, String)),
		a = e.percent === void 0 ? "%" : e.percent + "",
		l = e.minus === void 0 ? "−" : e.minus + "",
		f = e.nan === void 0 ? "NaN" : e.nan + "";

	function s(u) {
		u = Rt(u);
		var d = u.fill,
			p = u.align,
			h = u.sign,
			v = u.symbol,
			y = u.zero,
			_ = u.width,
			E = u.comma,
			b = u.precision,
			S = u.trim,
			O = u.type;
		O === "n" ? (E = !0, O = "g") : ni[O] || (b === void 0 && (b = 12), S = !0, O = "g"), (y || d === "0" && p ===
			"=") && (y = !0, d = "0", p = "=");
		var j = v === "$" ? n : v === "#" && /[boxX]/.test(O) ? "0" + O.toLowerCase() : "",
			P = v === "$" ? r : /[%p]/.test(O) ? a : "",
			$ = ni[O],
			N = /[defgprs%]/.test(O);
		b = b === void 0 ? 6 : /[gprs]/.test(O) ? Math.max(1, Math.min(21, b)) : Math.max(0, Math.min(20, b));

		function C(w) {
			var k = j,
				T = P,
				I, g, R;
			if (O === "c") T = $(w) + T, w = "";
			else {
				w = +w;
				var z = w < 0 || 1 / w < 0;
				if (w = isNaN(w) ? f : $(Math.abs(w), b), S && (w = Gc(w)), z && +w == 0 && h !== "+" && (z = !1), k = (
						z ? h === "(" ? h : l : h === "-" || h === "(" ? "" : h) + k, T = (O === "s" ? oi[8 + Ki / 3] :
						"") + T + (z && h === "(" ? ")" : ""), N) {
					for (I = -1, g = w.length; ++I < g;)
						if (R = w.charCodeAt(I), 48 > R || R > 57) {
							T = (R === 46 ? i + w.slice(I + 1) : w.slice(I)) + T, w = w.slice(0, I);
							break
						}
				}
			}
			E && !y && (w = t(w, 1 / 0));
			var H = k.length + w.length + T.length,
				D = H < _ ? new Array(_ - H + 1).join(d) : "";
			switch (E && y && (w = t(D + w, D.length ? _ - T.length : 1 / 0), D = ""), p) {
				case "<":
					w = k + w + T + D;
					break;
				case "=":
					w = k + D + w + T;
					break;
				case "^":
					w = D.slice(0, H = D.length >> 1) + k + w + T + D.slice(H);
					break;
				default:
					w = D + k + w + T;
					break
			}
			return o(w)
		}
		return C.toString = function() {
			return u + ""
		}, C
	}

	function c(u, d) {
		var p = s((u = Rt(u), u.type = "f", u)),
			h = Math.max(-8, Math.min(8, Math.floor(ke(d) / 3))) * 3,
			v = Math.pow(10, -h),
			y = oi[8 + h / 3];
		return function(_) {
			return p(v * _) + y
		}
	}
	return {
		format: s,
		formatPrefix: c
	}
}
var dt, Qi, eo;
Xc({
	thousands: ",",
	grouping: [3],
	currency: ["$", ""]
});

function Xc(e) {
	return dt = Jc(e), Qi = dt.format, eo = dt.formatPrefix, dt
}

function Zc(e) {
	return Math.max(0, -ke(Math.abs(e)))
}

function Kc(e, t) {
	return Math.max(0, Math.max(-8, Math.min(8, Math.floor(ke(t) / 3))) * 3 - ke(Math.abs(e)))
}

function Qc(e, t) {
	return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, ke(t) - ke(e)) + 1
}

function ef(e, t, n, r) {
	var i = Nl(e, t, n),
		o;
	switch (r = Rt(r ?? ",f"), r.type) {
		case "s": {
			var a = Math.max(Math.abs(e), Math.abs(t));
			return r.precision == null && !isNaN(o = Kc(i, a)) && (r.precision = o), eo(r, a)
		}
		case "":
		case "e":
		case "g":
		case "p":
		case "r": {
			r.precision == null && !isNaN(o = Qc(i, Math.max(Math.abs(e), Math.abs(t)))) && (r.precision = o - (r
				.type === "e"));
			break
		}
		case "f":
		case "%": {
			r.precision == null && !isNaN(o = Zc(i)) && (r.precision = o - (r.type === "%") * 2);
			break
		}
	}
	return Qi(r)
}

function tf(e) {
	var t = e.domain;
	return e.ticks = function(n) {
		var r = t();
		return Rl(r[0], r[r.length - 1], n ?? 10)
	}, e.tickFormat = function(n, r) {
		var i = t();
		return ef(i[0], i[i.length - 1], n ?? 10, r)
	}, e.nice = function(n) {
		n == null && (n = 10);
		var r = t(),
			i = 0,
			o = r.length - 1,
			a = r[i],
			l = r[o],
			f, s, c = 10;
		for (l < a && (s = a, a = l, l = s, s = i, i = o, o = s); c-- > 0;) {
			if (s = xn(a, l, n), s === f) return r[i] = a, r[o] = l, t(r);
			if (s > 0) a = Math.floor(a / s) * s, l = Math.ceil(l / s) * s;
			else if (s < 0) a = Math.ceil(a * s) / s, l = Math.floor(l * s) / s;
			else break;
			f = s
		}
		return e
	}, e
}

function nf() {
	var e = 0,
		t = 1,
		n, r, i, o, a = Zi,
		l = !1,
		f;

	function s(u) {
		return u == null || isNaN(u = +u) ? f : a(i === 0 ? .5 : (u = (o(u) - n) * i, l ? Math.max(0, Math.min(1, u)) :
			u))
	}
	s.domain = function(u) {
		return arguments.length ? ([e, t] = u, n = o(e = +e), r = o(t = +t), i = n === r ? 0 : 1 / (r - n), s) : [e,
			t
		]
	}, s.clamp = function(u) {
		return arguments.length ? (l = !!u, s) : l
	}, s.interpolator = function(u) {
		return arguments.length ? (a = u, s) : a
	};

	function c(u) {
		return function(d) {
			var p, h;
			return arguments.length ? ([p, h] = d, a = u(p, h), s) : [a(0), a(1)]
		}
	}
	return s.range = c(Dt), s.rangeRound = c(Dc), s.unknown = function(u) {
			return arguments.length ? (f = u, s) : f
		},
		function(u) {
			return o = u, n = u(e), r = u(t), i = n === r ? 0 : 1 / (r - n), s
		}
}

function rf(e, t) {
	return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())
}

function to() {
	var e = tf(nf()(Zi));
	return e.copy = function() {
		return rf(e, to())
	}, Hc.apply(e, arguments)
}

function of(e) {
	return e
}

function af(e) {
	if (e == null) return of;
	var t, n, r = e.scale[0],
		i = e.scale[1],
		o = e.translate[0],
		a = e.translate[1];
	return function(l, f) {
		f || (t = n = 0);
		var s = 2,
			c = l.length,
			u = new Array(c);
		for (u[0] = (t += l[0]) * r + o, u[1] = (n += l[1]) * i + a; s < c;) u[s] = l[s], ++s;
		return u
	}
}

function sf(e, t) {
	for (var n, r = e.length, i = r - t; i < --r;) n = e[i], e[i++] = e[r], e[r] = n
}

function ai(e, t) {
	return typeof t == "string" && (t = e.objects[t]), t.type === "GeometryCollection" ? {
		type: "FeatureCollection",
		features: t.geometries.map(function(n) {
			return si(e, n)
		})
	} : si(e, t)
}

function si(e, t) {
	var n = t.id,
		r = t.bbox,
		i = t.properties == null ? {} : t.properties,
		o = no(e, t);
	return n == null && r == null ? {
		type: "Feature",
		properties: i,
		geometry: o
	} : r == null ? {
		type: "Feature",
		id: n,
		properties: i,
		geometry: o
	} : {
		type: "Feature",
		id: n,
		bbox: r,
		properties: i,
		geometry: o
	}
}

function no(e, t) {
	var n = af(e.transform),
		r = e.arcs;

	function i(c, u) {
		u.length && u.pop();
		for (var d = r[c < 0 ? ~c : c], p = 0, h = d.length; p < h; ++p) u.push(n(d[p], p));
		c < 0 && sf(u, h)
	}

	function o(c) {
		return n(c)
	}

	function a(c) {
		for (var u = [], d = 0, p = c.length; d < p; ++d) i(c[d], u);
		return u.length < 2 && u.push(u[0]), u
	}

	function l(c) {
		for (var u = a(c); u.length < 4;) u.push(u[0]);
		return u
	}

	function f(c) {
		return c.map(l)
	}

	function s(c) {
		var u = c.type,
			d;
		switch (u) {
			case "GeometryCollection":
				return {
					type: u, geometries: c.geometries.map(s)
				};
			case "Point":
				d = o(c.coordinates);
				break;
			case "MultiPoint":
				d = c.coordinates.map(o);
				break;
			case "LineString":
				d = a(c.arcs);
				break;
			case "MultiLineString":
				d = c.arcs.map(a);
				break;
			case "Polygon":
				d = f(c.arcs);
				break;
			case "MultiPolygon":
				d = c.arcs.map(f);
				break;
			default:
				return null
		}
		return {
			type: u,
			coordinates: d
		}
	}
	return s(t)
}

function uf(e, t) {
	var n = {},
		r = {},
		i = {},
		o = [],
		a = -1;
	t.forEach(function(s, c) {
		var u = e.arcs[s < 0 ? ~s : s],
			d;
		u.length < 3 && !u[1][0] && !u[1][1] && (d = t[++a], t[a] = s, t[c] = d)
	}), t.forEach(function(s) {
		var c = l(s),
			u = c[0],
			d = c[1],
			p, h;
		if (p = i[u])
			if (delete i[p.end], p.push(s), p.end = d, h = r[d]) {
				delete r[h.start];
				var v = h === p ? p : p.concat(h);
				r[v.start = p.start] = i[v.end = h.end] = v
			} else r[p.start] = i[p.end] = p;
		else if (p = r[d])
			if (delete r[p.start], p.unshift(s), p.start = u, h = i[u]) {
				delete i[h.end];
				var y = h === p ? p : h.concat(p);
				r[y.start = h.start] = i[y.end = p.end] = y
			} else r[p.start] = i[p.end] = p;
		else p = [s], r[p.start = u] = i[p.end = d] = p
	});

	function l(s) {
		var c = e.arcs[s < 0 ? ~s : s],
			u = c[0],
			d;
		return e.transform ? (d = [0, 0], c.forEach(function(p) {
			d[0] += p[0], d[1] += p[1]
		})) : d = c[c.length - 1], s < 0 ? [d, u] : [u, d]
	}

	function f(s, c) {
		for (var u in s) {
			var d = s[u];
			delete c[d.start], delete d.start, delete d.end, d.forEach(function(p) {
				n[p < 0 ? ~p : p] = 1
			}), o.push(d)
		}
	}
	return f(i, r), f(r, i), t.forEach(function(s) {
		n[s < 0 ? ~s : s] || o.push([s])
	}), o
}

function ui(e) {
	return no(e, lf.apply(this, arguments))
}

function lf(e, t, n) {
	var r, i, o;
	if (arguments.length > 1) r = cf(e, t, n);
	else
		for (i = 0, r = new Array(o = e.arcs.length); i < o; ++i) r[i] = i;
	return {
		type: "MultiLineString",
		arcs: uf(e, r)
	}
}

function cf(e, t, n) {
	var r = [],
		i = [],
		o;

	function a(u) {
		var d = u < 0 ? ~u : u;
		(i[d] || (i[d] = [])).push({
			i: u,
			g: o
		})
	}

	function l(u) {
		u.forEach(a)
	}

	function f(u) {
		u.forEach(l)
	}

	function s(u) {
		u.forEach(f)
	}

	function c(u) {
		switch (o = u, u.type) {
			case "GeometryCollection":
				u.geometries.forEach(c);
				break;
			case "LineString":
				l(u.arcs);
				break;
			case "MultiLineString":
			case "Polygon":
				f(u.arcs);
				break;
			case "MultiPolygon":
				s(u.arcs);
				break
		}
	}
	return c(t), i.forEach(n == null ? function(u) {
		r.push(u[0].i)
	} : function(u) {
		n(u[0].g, u[u.length - 1].g) && r.push(u[0].i)
	}), r
}
const ff = x.memo(function({
		checkedCountries: t,
		zhCountries: n
	}) {
		const [r, i] = x.useState([]), [o, a] = x.useState({});
		x.useEffect(() => {
			l()
		}, []);
		const l = async () => {
			const p = localStorage.getItem("countries-50m");
			if (p) {
				const v = JSON.parse(p);
				i(ai(v, v.objects.countries).features), a(ui(v, v.objects.countries, (y, _) => y !== _))
			}
			const h = await fetch("https://api.7zz.cn/element/nezha/countries-50m.json");
			if (h.status === 200) {
				const v = await h.json();
				i(ai(v, v.objects.countries).features), a(ui(v, v.objects.countries, (y, _) => y !== _)),
					localStorage.setItem("countries-50m", JSON.stringify(v))
			}
		}, f = 1024, s = f / 2.05, c = mc().fitExtent([
			[0, 0],
			[f, s]
		], {
			type: "Sphere"
		}), u = ic(c), d = to(El(t.values()), Dt("#87ceeb", "#007fff"));
		return m.jsxs("svg", {
			className: "world-map",
			height: s,
			width: f,
			viewBox: [0, 0, f, s],
			children: [m.jsx("path", {
				className: "world-map-sphere",
				d: u({
					type: "Sphere"
				})
			}), m.jsx("g", {
				children: r.map((p, h) => {
					const v = p.properties.name,
						y = t.get(v);
					let _ = n[v] || v;
					return y && (_ = `${_}
${y}`), m.jsx("path", {
						className: `world-map-country${y?"-checked":""}`,
						d: u(p),
						fill: d(y),
						children: m.jsx("title", {
							children: _
						})
					}, `path-${h}`)
				})
			}), m.jsx("path", {
				className: "world-map-interior",
				d: u(o)
			})]
		})
	}, function(t, n) {
		return Ye(t.checkedCountries, n.checkedCountries) && Ye(t.zhCountries, n.zhCountries)
	}),
	df = (e, t) => {
		let {
			country_code: n = "",
			host: {
				arch: r = "",
				boot_time: i = 0,
				cpu: o = [],
				disk_total: a = 0,
				mem_total: l = 0,
				platform: f = "",
				platform_version: s = "",
				swap_total: c = 0,
				version: u = "",
				virtualization: d = ""
			} = {},
			id: p = "",
			last_active: h = "",
			name: v = "",
			state: {
				cpu: y = 0,
				disk_used: _ = 0,
				load_1: E = 0,
				load_5: b = 0,
				load_15: S = 0,
				mem_used: O = 0,
				net_in_speed: j = 0,
				net_in_transfer: P = 0,
				net_out_speed: $ = 0,
				net_out_transfer: N = 0,
				process_count: C = 0,
				swap_used: w = 0,
				tcp_conn_count: k = 0,
				udp_conn_count: T = 0,
				uptime: I = 0
			} = {}
		} = t, g = !1;
		return t.host && (g = e - new Date(h).getTime() < 10 * 1e3), d = d && `${d}:`, {
			bootTime: lr.unix(i).format("YYYY-MM-DD HH:mm:ss"),
			connectionCount: `TCP ${k} / UDP ${T}`,
			countryCode: n,
			cpu: o,
			cpuCore: pf(o),
			cpuPercent: pt(y, 100),
			diskPercent: pt(_, a),
			diskTotal: ue(a),
			diskUsed: ue(_),
			id: p,
			lastActive: lr(h).format("YYYY-MM-DD HH:mm:ss"),
			live: g,
			load: `${E.toFixed(2)} / ${b.toFixed(2)} / ${S.toFixed(2)}`,
			memoryPercent: pt(O, l),
			memoryTotal: ue(l),
			memoryUsed: ue(O),
			name: v,
			netInSpeed: `${ue(j)}/s`,
			netInTransfer: ue(P),
			netOutSpeed: `${ue($)}/s`,
			netOutTransfer: ue(N),
			platform: f.includes("Windows") ? "Windows" : li(f),
			platformInfo: f && `${li(f)}-${s} [${d}${r}]`,
			processCount: C,
			swapPercent: pt(w, c),
			swapTotal: ue(c),
			swapUsed: ue(w),
			uptime: hf(I),
			version: u
		}
	},
	pf = e => {
		if (!(e || []).length) return "?";
		e = e[0];
		let t = e.match(/(\d|\.)+(?= Physical Core)/g);
		return t = t && t.length ? t[0] : "?", t === "?" ? (t = e.match(/(\d|\.)+(?= Virtual Core)/g), t = t && t
			.length ? t[0] : "?", t === "?" ? "?" : `${t}C`) : `${t}C`
	},
	ue = e => {
		if (!+e) return "0B";
		const t = 1024,
			n = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
			r = Math.floor(Math.log(e) / Math.log(t));
		return `${parseFloat((e/Math.pow(t,r)).toFixed(2))}${n[r]}`
	},
	li = e => e && e[0].toUpperCase() + e.slice(1) || "?",
	hf = e => e > 60 * 60 * 24 ? `${Math.floor(e/(60*60*24))}天` : e > 60 * 60 ? `${Math.floor(e/(60*60))}时` : e > 60 ?
	`${Math.floor(e/60)}分` : `${e}秒`,
	pt = (e, t) => parseInt(e / t * 100) || 0,
	gf = () => {
		x.useEffect(() => {
			o()
		}, []);
		const [e, t] = x.useState({}), n = x.useRef(), r = x.useRef(), i = x.useRef(), o = async () => {
			const d = await fetch("https://api.7zz.cn/element/nezha/countries.json");
			if (d.status === 200) {
				const p = await d.json();
				t(p)
			}
		}, a = x.useMemo(() => Object.entries(e).reduce((d, [, {
			en: p,
			zh: h
		}]) => (d[p] = h, d), {}), [e]), {
			data: {
				data: l = []
			} = {}
		} = Wn(async () => {
			const d = await fetch("/api/v1/server-group");
			if (d.status === 200) return d.json()
		}), {
			latestMessage: {
				data: f
			} = {},
			readyState: s
		} = xu(vf(), {
			reconnectLimit: 1 / 0
		}), [c, u] = x.useMemo(() => {
			const {
				now: d = 0,
				servers: p = []
			} = JSON.parse(f || "{}"), h = new Map, v = new Map;
			for (const E of p) {
				const b = df(d, E),
					S = l.find(P => P.servers && P.servers.includes(b.id));
				S ? (b.groupId = S.group.id, b.groupName = S.group.name) : (b.groupId = -1, b.groupName =
					"默认");
				const O = b.groupId;
				h.has(O) ? h.get(O).push(b) : h.set(O, [b]);
				const j = e[b.countryCode];
				if (j) {
					const P = v.get(j.en);
					P ? v.set(j.en, P + 1) : v.set(j.en, 1)
				}
			}
			const y = [{
					children: m.jsx(ff, {
						checkedCountries: v,
						zhCountries: a
					}),
					key: "WorldMap",
					label: "世界地图"
				}],
				_ = Array.from(h, ([E, b]) => ({
					children: m.jsx(di, {
						gap: 16,
						justify: "center",
						wrap: "wrap",
						children: b.map(S => m.jsx(sl, {
							country: e[S.countryCode] || {
								en: "",
								zh: ""
							},
							data: S,
							networkRef: i
						}, S.id))
					}),
					key: E,
					label: b[0].groupName
				}));
			return [y, _]
		}, [f, l, e, a]);
		return m.jsxs(m.Fragment, {
			children: [m.jsx(Oa, {
				bordered: !1,
				defaultActiveKey: "WorldMap",
				expandIcon: ({
					isActive: d
				}) => m.jsx(ka, {
					rotate: d ? 90 : 0
				}),
				items: c
			}), m.jsx("div", {
				className: "tabs",
				children: !!u.length && m.jsx(Ol, {
					items: u
				})
			}), m.jsxs(Ht.Group, {
				children: [s !== sn.ReadyState.Open && m.jsx(Ht, {
					icon: m.jsx(qa, {}),
					onClick: () => n.current.show()
				}), m.jsx(Ht, {
					icon: s === sn.ReadyState.Connecting ? m.jsx(_a, {}) : m.jsx(
						Aa, {}),
					onClick: () => r.current.show()
				})]
			}), m.jsx(Sl, {
				ref: n
			}), m.jsx(cl, {
				ref: r
			}), m.jsx(wl, {
				ref: i
			})]
		})
	},
	vf = () => `${window.location.protocol==="https:"?"wss":"ws"}://${window.location.host}/api/v1/ws/server`;
on.createRoot(document.getElementById("root")).render(m.jsx(L.StrictMode, {
	children: m.jsx(Ea, {
		theme: {
			token: {
				colorLink: "#007fff",
				colorPrimary: "#007fff"
			}
		},
		children: m.jsx(gf, {})
	})
}));