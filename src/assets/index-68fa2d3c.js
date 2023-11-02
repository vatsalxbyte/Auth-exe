(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function ka(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function Vw(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      if (this instanceof r) {
        var o = [null];
        o.push.apply(o, arguments);
        var i = Function.bind.apply(t, o);
        return new i();
      }
      return t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var o = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var Em = { exports: {} },
  Ou = {},
  Cm = { exports: {} },
  ae = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ra = Symbol.for("react.element"),
  Gw = Symbol.for("react.portal"),
  Yw = Symbol.for("react.fragment"),
  Xw = Symbol.for("react.strict_mode"),
  Jw = Symbol.for("react.profiler"),
  Zw = Symbol.for("react.provider"),
  eS = Symbol.for("react.context"),
  tS = Symbol.for("react.forward_ref"),
  nS = Symbol.for("react.suspense"),
  rS = Symbol.for("react.memo"),
  oS = Symbol.for("react.lazy"),
  Up = Symbol.iterator;
function iS(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Up && e[Up]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var bm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  km = Object.assign,
  Rm = {};
function Jo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Rm),
    (this.updater = n || bm);
}
Jo.prototype.isReactComponent = {};
Jo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Jo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Om() {}
Om.prototype = Jo.prototype;
function Gf(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Rm),
    (this.updater = n || bm);
}
var Yf = (Gf.prototype = new Om());
Yf.constructor = Gf;
km(Yf, Jo.prototype);
Yf.isPureReactComponent = !0;
var Bp = Array.isArray,
  Pm = Object.prototype.hasOwnProperty,
  Xf = { current: null },
  Tm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Nm(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Pm.call(t, r) && !Tm.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var u = Array(l), s = 0; s < l; s++) u[s] = arguments[s + 2];
    o.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: Ra,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: Xf.current,
  };
}
function aS(e, t) {
  return {
    $$typeof: Ra,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Jf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ra;
}
function lS(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Qp = /\/+/g;
function js(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? lS("" + e.key)
    : t.toString(36);
}
function wl(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ra:
          case Gw:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = r === "" ? "." + js(a, 0) : r),
      Bp(o)
        ? ((n = ""),
          e != null && (n = e.replace(Qp, "$&/") + "/"),
          wl(o, t, n, "", function (s) {
            return s;
          }))
        : o != null &&
          (Jf(o) &&
            (o = aS(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Qp, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), Bp(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var u = r + js(i, l);
      a += wl(i, t, n, u, o);
    }
  else if (((u = iS(e)), typeof u == "function"))
    for (e = u.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + js(i, l++)), (a += wl(i, t, n, u, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function Ha(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    wl(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function uS(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ut = { current: null },
  Sl = { transition: null },
  sS = {
    ReactCurrentDispatcher: ut,
    ReactCurrentBatchConfig: Sl,
    ReactCurrentOwner: Xf,
  };
ae.Children = {
  map: Ha,
  forEach: function (e, t, n) {
    Ha(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ha(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ha(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Jf(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
ae.Component = Jo;
ae.Fragment = Yw;
ae.Profiler = Jw;
ae.PureComponent = Gf;
ae.StrictMode = Xw;
ae.Suspense = nS;
ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sS;
ae.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = km({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = Xf.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (u in t)
      Pm.call(t, u) &&
        !Tm.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    l = Array(u);
    for (var s = 0; s < u; s++) l[s] = arguments[s + 2];
    r.children = l;
  }
  return { $$typeof: Ra, type: e.type, key: o, ref: i, props: r, _owner: a };
};
ae.createContext = function (e) {
  return (
    (e = {
      $$typeof: eS,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Zw, _context: e }),
    (e.Consumer = e)
  );
};
ae.createElement = Nm;
ae.createFactory = function (e) {
  var t = Nm.bind(null, e);
  return (t.type = e), t;
};
ae.createRef = function () {
  return { current: null };
};
ae.forwardRef = function (e) {
  return { $$typeof: tS, render: e };
};
ae.isValidElement = Jf;
ae.lazy = function (e) {
  return { $$typeof: oS, _payload: { _status: -1, _result: e }, _init: uS };
};
ae.memo = function (e, t) {
  return { $$typeof: rS, type: e, compare: t === void 0 ? null : t };
};
ae.startTransition = function (e) {
  var t = Sl.transition;
  Sl.transition = {};
  try {
    e();
  } finally {
    Sl.transition = t;
  }
};
ae.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
ae.useCallback = function (e, t) {
  return ut.current.useCallback(e, t);
};
ae.useContext = function (e) {
  return ut.current.useContext(e);
};
ae.useDebugValue = function () {};
ae.useDeferredValue = function (e) {
  return ut.current.useDeferredValue(e);
};
ae.useEffect = function (e, t) {
  return ut.current.useEffect(e, t);
};
ae.useId = function () {
  return ut.current.useId();
};
ae.useImperativeHandle = function (e, t, n) {
  return ut.current.useImperativeHandle(e, t, n);
};
ae.useInsertionEffect = function (e, t) {
  return ut.current.useInsertionEffect(e, t);
};
ae.useLayoutEffect = function (e, t) {
  return ut.current.useLayoutEffect(e, t);
};
ae.useMemo = function (e, t) {
  return ut.current.useMemo(e, t);
};
ae.useReducer = function (e, t, n) {
  return ut.current.useReducer(e, t, n);
};
ae.useRef = function (e) {
  return ut.current.useRef(e);
};
ae.useState = function (e) {
  return ut.current.useState(e);
};
ae.useSyncExternalStore = function (e, t, n) {
  return ut.current.useSyncExternalStore(e, t, n);
};
ae.useTransition = function () {
  return ut.current.useTransition();
};
ae.version = "18.2.0";
Cm.exports = ae;
var S = Cm.exports;
const ne = ka(S);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cS = S,
  fS = Symbol.for("react.element"),
  dS = Symbol.for("react.fragment"),
  pS = Object.prototype.hasOwnProperty,
  hS = cS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  vS = { key: !0, ref: !0, __self: !0, __source: !0 };
function Mm(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) pS.call(t, r) && !vS.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: fS,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: hS.current,
  };
}
Ou.Fragment = dS;
Ou.jsx = Mm;
Ou.jsxs = Mm;
Em.exports = Ou;
var O = Em.exports,
  Dm = { exports: {} },
  $t = {},
  $m = { exports: {} },
  jm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(D, _) {
    var L = D.length;
    D.push(_);
    e: for (; 0 < L; ) {
      var Q = (L - 1) >>> 1,
        q = D[Q];
      if (0 < o(q, _)) (D[Q] = _), (D[L] = q), (L = Q);
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var _ = D[0],
      L = D.pop();
    if (L !== _) {
      D[0] = L;
      e: for (var Q = 0, q = D.length, Y = q >>> 1; Q < Y; ) {
        var J = 2 * (Q + 1) - 1,
          H = D[J],
          ee = J + 1,
          le = D[ee];
        if (0 > o(H, L))
          ee < q && 0 > o(le, H)
            ? ((D[Q] = le), (D[ee] = L), (Q = ee))
            : ((D[Q] = H), (D[J] = L), (Q = J));
        else if (ee < q && 0 > o(le, L)) (D[Q] = le), (D[ee] = L), (Q = ee);
        else break e;
      }
    }
    return _;
  }
  function o(D, _) {
    var L = D.sortIndex - _.sortIndex;
    return L !== 0 ? L : D.id - _.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      l = a.now();
    e.unstable_now = function () {
      return a.now() - l;
    };
  }
  var u = [],
    s = [],
    c = 1,
    f = null,
    h = 3,
    p = !1,
    g = !1,
    y = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    v = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(D) {
    for (var _ = n(s); _ !== null; ) {
      if (_.callback === null) r(s);
      else if (_.startTime <= D)
        r(s), (_.sortIndex = _.expirationTime), t(u, _);
      else break;
      _ = n(s);
    }
  }
  function x(D) {
    if (((y = !1), m(D), !g))
      if (n(u) !== null) (g = !0), z(E);
      else {
        var _ = n(s);
        _ !== null && B(x, _.startTime - D);
      }
  }
  function E(D, _) {
    (g = !1), y && ((y = !1), d(k), (k = -1)), (p = !0);
    var L = h;
    try {
      for (
        m(_), f = n(u);
        f !== null && (!(f.expirationTime > _) || (D && !T()));

      ) {
        var Q = f.callback;
        if (typeof Q == "function") {
          (f.callback = null), (h = f.priorityLevel);
          var q = Q(f.expirationTime <= _);
          (_ = e.unstable_now()),
            typeof q == "function" ? (f.callback = q) : f === n(u) && r(u),
            m(_);
        } else r(u);
        f = n(u);
      }
      if (f !== null) var Y = !0;
      else {
        var J = n(s);
        J !== null && B(x, J.startTime - _), (Y = !1);
      }
      return Y;
    } finally {
      (f = null), (h = L), (p = !1);
    }
  }
  var C = !1,
    b = null,
    k = -1,
    P = 5,
    R = -1;
  function T() {
    return !(e.unstable_now() - R < P);
  }
  function N() {
    if (b !== null) {
      var D = e.unstable_now();
      R = D;
      var _ = !0;
      try {
        _ = b(!0, D);
      } finally {
        _ ? M() : ((C = !1), (b = null));
      }
    } else C = !1;
  }
  var M;
  if (typeof v == "function")
    M = function () {
      v(N);
    };
  else if (typeof MessageChannel < "u") {
    var I = new MessageChannel(),
      A = I.port2;
    (I.port1.onmessage = N),
      (M = function () {
        A.postMessage(null);
      });
  } else
    M = function () {
      w(N, 0);
    };
  function z(D) {
    (b = D), C || ((C = !0), M());
  }
  function B(D, _) {
    k = w(function () {
      D(e.unstable_now());
    }, _);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (D) {
      D.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || p || ((g = !0), z(E));
    }),
    (e.unstable_forceFrameRate = function (D) {
      0 > D || 125 < D || (P = 0 < D ? Math.floor(1e3 / D) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (D) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = h;
      }
      var L = h;
      h = _;
      try {
        return D();
      } finally {
        h = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (D, _) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var L = h;
      h = D;
      try {
        return _();
      } finally {
        h = L;
      }
    }),
    (e.unstable_scheduleCallback = function (D, _, L) {
      var Q = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? Q + L : Q))
          : (L = Q),
        D)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = L + q),
        (D = {
          id: c++,
          callback: _,
          priorityLevel: D,
          startTime: L,
          expirationTime: q,
          sortIndex: -1,
        }),
        L > Q
          ? ((D.sortIndex = L),
            t(s, D),
            n(u) === null &&
              D === n(s) &&
              (y ? (d(k), (k = -1)) : (y = !0), B(x, L - Q)))
          : ((D.sortIndex = q), t(u, D), g || p || ((g = !0), z(E))),
        D
      );
    }),
    (e.unstable_shouldYield = T),
    (e.unstable_wrapCallback = function (D) {
      var _ = h;
      return function () {
        var L = h;
        h = _;
        try {
          return D.apply(this, arguments);
        } finally {
          h = L;
        }
      };
    });
})(jm);
$m.exports = jm;
var mS = $m.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Im = S,
  Tt = mS;
function U(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Lm = new Set(),
  Gi = {};
function ro(e, t) {
  Ao(e, t), Ao(e + "Capture", t);
}
function Ao(e, t) {
  for (Gi[e] = t, e = 0; e < t.length; e++) Lm.add(t[e]);
}
var jn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  jc = Object.prototype.hasOwnProperty,
  yS =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Hp = {},
  Wp = {};
function gS(e) {
  return jc.call(Wp, e)
    ? !0
    : jc.call(Hp, e)
    ? !1
    : yS.test(e)
    ? (Wp[e] = !0)
    : ((Hp[e] = !0), !1);
}
function wS(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function SS(e, t, n, r) {
  if (t === null || typeof t > "u" || wS(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function st(e, t, n, r, o, i, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var Ze = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ze[e] = new st(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ze[t] = new st(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ze[e] = new st(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ze[e] = new st(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ze[e] = new st(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ze[e] = new st(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ze[e] = new st(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ze[e] = new st(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ze[e] = new st(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Zf = /[\-:]([a-z])/g;
function ed(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Zf, ed);
    Ze[t] = new st(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Zf, ed);
    Ze[t] = new st(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Zf, ed);
  Ze[t] = new st(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ze[e] = new st(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ze.xlinkHref = new st(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ze[e] = new st(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function td(e, t, n, r) {
  var o = Ze.hasOwnProperty(t) ? Ze[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (SS(t, n, o, r) && (n = null),
    r || o === null
      ? gS(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Un = Im.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Wa = Symbol.for("react.element"),
  mo = Symbol.for("react.portal"),
  yo = Symbol.for("react.fragment"),
  nd = Symbol.for("react.strict_mode"),
  Ic = Symbol.for("react.profiler"),
  Am = Symbol.for("react.provider"),
  _m = Symbol.for("react.context"),
  rd = Symbol.for("react.forward_ref"),
  Lc = Symbol.for("react.suspense"),
  Ac = Symbol.for("react.suspense_list"),
  od = Symbol.for("react.memo"),
  Gn = Symbol.for("react.lazy"),
  Fm = Symbol.for("react.offscreen"),
  qp = Symbol.iterator;
function si(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (qp && e[qp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ne = Object.assign,
  Is;
function Ei(e) {
  if (Is === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Is = (t && t[1]) || "";
    }
  return (
    `
` +
    Is +
    e
  );
}
var Ls = !1;
function As(e, t) {
  if (!e || Ls) return "";
  Ls = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var o = s.stack.split(`
`),
          i = r.stack.split(`
`),
          a = o.length - 1,
          l = i.length - 1;
        1 <= a && 0 <= l && o[a] !== i[l];

      )
        l--;
      for (; 1 <= a && 0 <= l; a--, l--)
        if (o[a] !== i[l]) {
          if (a !== 1 || l !== 1)
            do
              if ((a--, l--, 0 > l || o[a] !== i[l])) {
                var u =
                  `
` + o[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= a && 0 <= l);
          break;
        }
    }
  } finally {
    (Ls = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Ei(e) : "";
}
function xS(e) {
  switch (e.tag) {
    case 5:
      return Ei(e.type);
    case 16:
      return Ei("Lazy");
    case 13:
      return Ei("Suspense");
    case 19:
      return Ei("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = As(e.type, !1)), e;
    case 11:
      return (e = As(e.type.render, !1)), e;
    case 1:
      return (e = As(e.type, !0)), e;
    default:
      return "";
  }
}
function _c(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case yo:
      return "Fragment";
    case mo:
      return "Portal";
    case Ic:
      return "Profiler";
    case nd:
      return "StrictMode";
    case Lc:
      return "Suspense";
    case Ac:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case _m:
        return (e.displayName || "Context") + ".Consumer";
      case Am:
        return (e._context.displayName || "Context") + ".Provider";
      case rd:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case od:
        return (
          (t = e.displayName || null), t !== null ? t : _c(e.type) || "Memo"
        );
      case Gn:
        (t = e._payload), (e = e._init);
        try {
          return _c(e(t));
        } catch {}
    }
  return null;
}
function ES(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return _c(t);
    case 8:
      return t === nd ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function yr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function zm(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function CS(e) {
  var t = zm(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          (r = "" + a), i.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function qa(e) {
  e._valueTracker || (e._valueTracker = CS(e));
}
function Um(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = zm(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ll(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Fc(e, t) {
  var n = t.checked;
  return Ne({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Kp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = yr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Bm(e, t) {
  (t = t.checked), t != null && td(e, "checked", t, !1);
}
function zc(e, t) {
  Bm(e, t);
  var n = yr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Uc(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Uc(e, t.type, yr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Vp(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Uc(e, t, n) {
  (t !== "number" || Ll(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ci = Array.isArray;
function To(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + yr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Bc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(U(91));
  return Ne({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Gp(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(U(92));
      if (Ci(n)) {
        if (1 < n.length) throw Error(U(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: yr(n) };
}
function Qm(e, t) {
  var n = yr(t.value),
    r = yr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Yp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Hm(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Qc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Hm(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ka,
  Wm = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ka = Ka || document.createElement("div"),
          Ka.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ka.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Yi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ni = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  bS = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ni).forEach(function (e) {
  bS.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ni[t] = Ni[e]);
  });
});
function qm(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Ni.hasOwnProperty(e) && Ni[e])
    ? ("" + t).trim()
    : t + "px";
}
function Km(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = qm(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var kS = Ne(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Hc(e, t) {
  if (t) {
    if (kS[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(U(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(U(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(U(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(U(62));
  }
}
function Wc(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var qc = null;
function id(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Kc = null,
  No = null,
  Mo = null;
function Xp(e) {
  if ((e = Ta(e))) {
    if (typeof Kc != "function") throw Error(U(280));
    var t = e.stateNode;
    t && ((t = Du(t)), Kc(e.stateNode, e.type, t));
  }
}
function Vm(e) {
  No ? (Mo ? Mo.push(e) : (Mo = [e])) : (No = e);
}
function Gm() {
  if (No) {
    var e = No,
      t = Mo;
    if (((Mo = No = null), Xp(e), t)) for (e = 0; e < t.length; e++) Xp(t[e]);
  }
}
function Ym(e, t) {
  return e(t);
}
function Xm() {}
var _s = !1;
function Jm(e, t, n) {
  if (_s) return e(t, n);
  _s = !0;
  try {
    return Ym(e, t, n);
  } finally {
    (_s = !1), (No !== null || Mo !== null) && (Xm(), Gm());
  }
}
function Xi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Du(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(U(231, t, typeof n));
  return n;
}
var Vc = !1;
if (jn)
  try {
    var ci = {};
    Object.defineProperty(ci, "passive", {
      get: function () {
        Vc = !0;
      },
    }),
      window.addEventListener("test", ci, ci),
      window.removeEventListener("test", ci, ci);
  } catch {
    Vc = !1;
  }
function RS(e, t, n, r, o, i, a, l, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (c) {
    this.onError(c);
  }
}
var Mi = !1,
  Al = null,
  _l = !1,
  Gc = null,
  OS = {
    onError: function (e) {
      (Mi = !0), (Al = e);
    },
  };
function PS(e, t, n, r, o, i, a, l, u) {
  (Mi = !1), (Al = null), RS.apply(OS, arguments);
}
function TS(e, t, n, r, o, i, a, l, u) {
  if ((PS.apply(this, arguments), Mi)) {
    if (Mi) {
      var s = Al;
      (Mi = !1), (Al = null);
    } else throw Error(U(198));
    _l || ((_l = !0), (Gc = s));
  }
}
function oo(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Zm(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Jp(e) {
  if (oo(e) !== e) throw Error(U(188));
}
function NS(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = oo(e)), t === null)) throw Error(U(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Jp(o), e;
        if (i === r) return Jp(o), t;
        i = i.sibling;
      }
      throw Error(U(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var a = !1, l = o.child; l; ) {
        if (l === n) {
          (a = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (a = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!a) {
        for (l = i.child; l; ) {
          if (l === n) {
            (a = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (a = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!a) throw Error(U(189));
      }
    }
    if (n.alternate !== r) throw Error(U(190));
  }
  if (n.tag !== 3) throw Error(U(188));
  return n.stateNode.current === n ? e : t;
}
function ey(e) {
  return (e = NS(e)), e !== null ? ty(e) : null;
}
function ty(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ty(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ny = Tt.unstable_scheduleCallback,
  Zp = Tt.unstable_cancelCallback,
  MS = Tt.unstable_shouldYield,
  DS = Tt.unstable_requestPaint,
  $e = Tt.unstable_now,
  $S = Tt.unstable_getCurrentPriorityLevel,
  ad = Tt.unstable_ImmediatePriority,
  ry = Tt.unstable_UserBlockingPriority,
  Fl = Tt.unstable_NormalPriority,
  jS = Tt.unstable_LowPriority,
  oy = Tt.unstable_IdlePriority,
  Pu = null,
  vn = null;
function IS(e) {
  if (vn && typeof vn.onCommitFiberRoot == "function")
    try {
      vn.onCommitFiberRoot(Pu, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var tn = Math.clz32 ? Math.clz32 : _S,
  LS = Math.log,
  AS = Math.LN2;
function _S(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((LS(e) / AS) | 0)) | 0;
}
var Va = 64,
  Ga = 4194304;
function bi(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function zl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var l = a & ~o;
    l !== 0 ? (r = bi(l)) : ((i &= a), i !== 0 && (r = bi(i)));
  } else (a = n & ~o), a !== 0 ? (r = bi(a)) : i !== 0 && (r = bi(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - tn(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function FS(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function zS(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - tn(i),
      l = 1 << a,
      u = o[a];
    u === -1
      ? (!(l & n) || l & r) && (o[a] = FS(l, t))
      : u <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function Yc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function iy() {
  var e = Va;
  return (Va <<= 1), !(Va & 4194240) && (Va = 64), e;
}
function Fs(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Oa(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - tn(t)),
    (e[t] = n);
}
function US(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - tn(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function ld(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - tn(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var he = 0;
function ay(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ly,
  ud,
  uy,
  sy,
  cy,
  Xc = !1,
  Ya = [],
  ar = null,
  lr = null,
  ur = null,
  Ji = new Map(),
  Zi = new Map(),
  Jn = [],
  BS =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function eh(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ar = null;
      break;
    case "dragenter":
    case "dragleave":
      lr = null;
      break;
    case "mouseover":
    case "mouseout":
      ur = null;
      break;
    case "pointerover":
    case "pointerout":
      Ji.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Zi.delete(t.pointerId);
  }
}
function fi(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Ta(t)), t !== null && ud(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function QS(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (ar = fi(ar, e, t, n, r, o)), !0;
    case "dragenter":
      return (lr = fi(lr, e, t, n, r, o)), !0;
    case "mouseover":
      return (ur = fi(ur, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Ji.set(i, fi(Ji.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Zi.set(i, fi(Zi.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function fy(e) {
  var t = Ar(e.target);
  if (t !== null) {
    var n = oo(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Zm(n)), t !== null)) {
          (e.blockedOn = t),
            cy(e.priority, function () {
              uy(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function xl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Jc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (qc = r), n.target.dispatchEvent(r), (qc = null);
    } else return (t = Ta(n)), t !== null && ud(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function th(e, t, n) {
  xl(e) && n.delete(t);
}
function HS() {
  (Xc = !1),
    ar !== null && xl(ar) && (ar = null),
    lr !== null && xl(lr) && (lr = null),
    ur !== null && xl(ur) && (ur = null),
    Ji.forEach(th),
    Zi.forEach(th);
}
function di(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Xc ||
      ((Xc = !0),
      Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority, HS)));
}
function ea(e) {
  function t(o) {
    return di(o, e);
  }
  if (0 < Ya.length) {
    di(Ya[0], e);
    for (var n = 1; n < Ya.length; n++) {
      var r = Ya[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ar !== null && di(ar, e),
      lr !== null && di(lr, e),
      ur !== null && di(ur, e),
      Ji.forEach(t),
      Zi.forEach(t),
      n = 0;
    n < Jn.length;
    n++
  )
    (r = Jn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Jn.length && ((n = Jn[0]), n.blockedOn === null); )
    fy(n), n.blockedOn === null && Jn.shift();
}
var Do = Un.ReactCurrentBatchConfig,
  Ul = !0;
function WS(e, t, n, r) {
  var o = he,
    i = Do.transition;
  Do.transition = null;
  try {
    (he = 1), sd(e, t, n, r);
  } finally {
    (he = o), (Do.transition = i);
  }
}
function qS(e, t, n, r) {
  var o = he,
    i = Do.transition;
  Do.transition = null;
  try {
    (he = 4), sd(e, t, n, r);
  } finally {
    (he = o), (Do.transition = i);
  }
}
function sd(e, t, n, r) {
  if (Ul) {
    var o = Jc(e, t, n, r);
    if (o === null) Gs(e, t, r, Bl, n), eh(e, r);
    else if (QS(o, e, t, n, r)) r.stopPropagation();
    else if ((eh(e, r), t & 4 && -1 < BS.indexOf(e))) {
      for (; o !== null; ) {
        var i = Ta(o);
        if (
          (i !== null && ly(i),
          (i = Jc(e, t, n, r)),
          i === null && Gs(e, t, r, Bl, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Gs(e, t, r, null, n);
  }
}
var Bl = null;
function Jc(e, t, n, r) {
  if (((Bl = null), (e = id(r)), (e = Ar(e)), e !== null))
    if (((t = oo(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Zm(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Bl = e), null;
}
function dy(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch ($S()) {
        case ad:
          return 1;
        case ry:
          return 4;
        case Fl:
        case jS:
          return 16;
        case oy:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nr = null,
  cd = null,
  El = null;
function py() {
  if (El) return El;
  var e,
    t = cd,
    n = t.length,
    r,
    o = "value" in nr ? nr.value : nr.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
  return (El = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Cl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Xa() {
  return !0;
}
function nh() {
  return !1;
}
function jt(e) {
  function t(n, r, o, i, a) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Xa
        : nh),
      (this.isPropagationStopped = nh),
      this
    );
  }
  return (
    Ne(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Xa));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Xa));
      },
      persist: function () {},
      isPersistent: Xa,
    }),
    t
  );
}
var Zo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  fd = jt(Zo),
  Pa = Ne({}, Zo, { view: 0, detail: 0 }),
  KS = jt(Pa),
  zs,
  Us,
  pi,
  Tu = Ne({}, Pa, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: dd,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== pi &&
            (pi && e.type === "mousemove"
              ? ((zs = e.screenX - pi.screenX), (Us = e.screenY - pi.screenY))
              : (Us = zs = 0),
            (pi = e)),
          zs);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Us;
    },
  }),
  rh = jt(Tu),
  VS = Ne({}, Tu, { dataTransfer: 0 }),
  GS = jt(VS),
  YS = Ne({}, Pa, { relatedTarget: 0 }),
  Bs = jt(YS),
  XS = Ne({}, Zo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  JS = jt(XS),
  ZS = Ne({}, Zo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ex = jt(ZS),
  tx = Ne({}, Zo, { data: 0 }),
  oh = jt(tx),
  nx = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  rx = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  ox = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function ix(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ox[e]) ? !!t[e] : !1;
}
function dd() {
  return ix;
}
var ax = Ne({}, Pa, {
    key: function (e) {
      if (e.key) {
        var t = nx[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Cl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? rx[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: dd,
    charCode: function (e) {
      return e.type === "keypress" ? Cl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Cl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  lx = jt(ax),
  ux = Ne({}, Tu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ih = jt(ux),
  sx = Ne({}, Pa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: dd,
  }),
  cx = jt(sx),
  fx = Ne({}, Zo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  dx = jt(fx),
  px = Ne({}, Tu, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  hx = jt(px),
  vx = [9, 13, 27, 32],
  pd = jn && "CompositionEvent" in window,
  Di = null;
jn && "documentMode" in document && (Di = document.documentMode);
var mx = jn && "TextEvent" in window && !Di,
  hy = jn && (!pd || (Di && 8 < Di && 11 >= Di)),
  ah = String.fromCharCode(32),
  lh = !1;
function vy(e, t) {
  switch (e) {
    case "keyup":
      return vx.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function my(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var go = !1;
function yx(e, t) {
  switch (e) {
    case "compositionend":
      return my(t);
    case "keypress":
      return t.which !== 32 ? null : ((lh = !0), ah);
    case "textInput":
      return (e = t.data), e === ah && lh ? null : e;
    default:
      return null;
  }
}
function gx(e, t) {
  if (go)
    return e === "compositionend" || (!pd && vy(e, t))
      ? ((e = py()), (El = cd = nr = null), (go = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return hy && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var wx = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function uh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!wx[e.type] : t === "textarea";
}
function yy(e, t, n, r) {
  Vm(r),
    (t = Ql(t, "onChange")),
    0 < t.length &&
      ((n = new fd("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var $i = null,
  ta = null;
function Sx(e) {
  Py(e, 0);
}
function Nu(e) {
  var t = xo(e);
  if (Um(t)) return e;
}
function xx(e, t) {
  if (e === "change") return t;
}
var gy = !1;
if (jn) {
  var Qs;
  if (jn) {
    var Hs = "oninput" in document;
    if (!Hs) {
      var sh = document.createElement("div");
      sh.setAttribute("oninput", "return;"),
        (Hs = typeof sh.oninput == "function");
    }
    Qs = Hs;
  } else Qs = !1;
  gy = Qs && (!document.documentMode || 9 < document.documentMode);
}
function ch() {
  $i && ($i.detachEvent("onpropertychange", wy), (ta = $i = null));
}
function wy(e) {
  if (e.propertyName === "value" && Nu(ta)) {
    var t = [];
    yy(t, ta, e, id(e)), Jm(Sx, t);
  }
}
function Ex(e, t, n) {
  e === "focusin"
    ? (ch(), ($i = t), (ta = n), $i.attachEvent("onpropertychange", wy))
    : e === "focusout" && ch();
}
function Cx(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Nu(ta);
}
function bx(e, t) {
  if (e === "click") return Nu(t);
}
function kx(e, t) {
  if (e === "input" || e === "change") return Nu(t);
}
function Rx(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var rn = typeof Object.is == "function" ? Object.is : Rx;
function na(e, t) {
  if (rn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!jc.call(t, o) || !rn(e[o], t[o])) return !1;
  }
  return !0;
}
function fh(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function dh(e, t) {
  var n = fh(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = fh(n);
  }
}
function Sy(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Sy(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function xy() {
  for (var e = window, t = Ll(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ll(e.document);
  }
  return t;
}
function hd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Ox(e) {
  var t = xy(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Sy(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && hd(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = dh(n, i));
        var a = dh(n, r);
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Px = jn && "documentMode" in document && 11 >= document.documentMode,
  wo = null,
  Zc = null,
  ji = null,
  ef = !1;
function ph(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ef ||
    wo == null ||
    wo !== Ll(r) ||
    ((r = wo),
    "selectionStart" in r && hd(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ji && na(ji, r)) ||
      ((ji = r),
      (r = Ql(Zc, "onSelect")),
      0 < r.length &&
        ((t = new fd("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = wo))));
}
function Ja(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var So = {
    animationend: Ja("Animation", "AnimationEnd"),
    animationiteration: Ja("Animation", "AnimationIteration"),
    animationstart: Ja("Animation", "AnimationStart"),
    transitionend: Ja("Transition", "TransitionEnd"),
  },
  Ws = {},
  Ey = {};
jn &&
  ((Ey = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete So.animationend.animation,
    delete So.animationiteration.animation,
    delete So.animationstart.animation),
  "TransitionEvent" in window || delete So.transitionend.transition);
function Mu(e) {
  if (Ws[e]) return Ws[e];
  if (!So[e]) return e;
  var t = So[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ey) return (Ws[e] = t[n]);
  return e;
}
var Cy = Mu("animationend"),
  by = Mu("animationiteration"),
  ky = Mu("animationstart"),
  Ry = Mu("transitionend"),
  Oy = new Map(),
  hh =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function kr(e, t) {
  Oy.set(e, t), ro(t, [e]);
}
for (var qs = 0; qs < hh.length; qs++) {
  var Ks = hh[qs],
    Tx = Ks.toLowerCase(),
    Nx = Ks[0].toUpperCase() + Ks.slice(1);
  kr(Tx, "on" + Nx);
}
kr(Cy, "onAnimationEnd");
kr(by, "onAnimationIteration");
kr(ky, "onAnimationStart");
kr("dblclick", "onDoubleClick");
kr("focusin", "onFocus");
kr("focusout", "onBlur");
kr(Ry, "onTransitionEnd");
Ao("onMouseEnter", ["mouseout", "mouseover"]);
Ao("onMouseLeave", ["mouseout", "mouseover"]);
Ao("onPointerEnter", ["pointerout", "pointerover"]);
Ao("onPointerLeave", ["pointerout", "pointerover"]);
ro(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
ro(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
ro("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ro(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
ro(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
ro(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var ki =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Mx = new Set("cancel close invalid load scroll toggle".split(" ").concat(ki));
function vh(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), TS(r, t, void 0, e), (e.currentTarget = null);
}
function Py(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var l = r[a],
            u = l.instance,
            s = l.currentTarget;
          if (((l = l.listener), u !== i && o.isPropagationStopped())) break e;
          vh(o, l, s), (i = u);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((l = r[a]),
            (u = l.instance),
            (s = l.currentTarget),
            (l = l.listener),
            u !== i && o.isPropagationStopped())
          )
            break e;
          vh(o, l, s), (i = u);
        }
    }
  }
  if (_l) throw ((e = Gc), (_l = !1), (Gc = null), e);
}
function xe(e, t) {
  var n = t[af];
  n === void 0 && (n = t[af] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ty(t, e, 2, !1), n.add(r));
}
function Vs(e, t, n) {
  var r = 0;
  t && (r |= 4), Ty(n, e, r, t);
}
var Za = "_reactListening" + Math.random().toString(36).slice(2);
function ra(e) {
  if (!e[Za]) {
    (e[Za] = !0),
      Lm.forEach(function (n) {
        n !== "selectionchange" && (Mx.has(n) || Vs(n, !1, e), Vs(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Za] || ((t[Za] = !0), Vs("selectionchange", !1, t));
  }
}
function Ty(e, t, n, r) {
  switch (dy(t)) {
    case 1:
      var o = WS;
      break;
    case 4:
      o = qS;
      break;
    default:
      o = sd;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Vc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Gs(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var u = a.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = a.stateNode.containerInfo),
              u === o || (u.nodeType === 8 && u.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; l !== null; ) {
          if (((a = Ar(l)), a === null)) return;
          if (((u = a.tag), u === 5 || u === 6)) {
            r = i = a;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Jm(function () {
    var s = i,
      c = id(n),
      f = [];
    e: {
      var h = Oy.get(e);
      if (h !== void 0) {
        var p = fd,
          g = e;
        switch (e) {
          case "keypress":
            if (Cl(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = lx;
            break;
          case "focusin":
            (g = "focus"), (p = Bs);
            break;
          case "focusout":
            (g = "blur"), (p = Bs);
            break;
          case "beforeblur":
          case "afterblur":
            p = Bs;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = rh;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = GS;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = cx;
            break;
          case Cy:
          case by:
          case ky:
            p = JS;
            break;
          case Ry:
            p = dx;
            break;
          case "scroll":
            p = KS;
            break;
          case "wheel":
            p = hx;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = ex;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = ih;
        }
        var y = (t & 4) !== 0,
          w = !y && e === "scroll",
          d = y ? (h !== null ? h + "Capture" : null) : h;
        y = [];
        for (var v = s, m; v !== null; ) {
          m = v;
          var x = m.stateNode;
          if (
            (m.tag === 5 &&
              x !== null &&
              ((m = x),
              d !== null && ((x = Xi(v, d)), x != null && y.push(oa(v, x, m)))),
            w)
          )
            break;
          v = v.return;
        }
        0 < y.length &&
          ((h = new p(h, g, null, n, c)), f.push({ event: h, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          h &&
            n !== qc &&
            (g = n.relatedTarget || n.fromElement) &&
            (Ar(g) || g[In]))
        )
          break e;
        if (
          (p || h) &&
          ((h =
            c.window === c
              ? c
              : (h = c.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          p
            ? ((g = n.relatedTarget || n.toElement),
              (p = s),
              (g = g ? Ar(g) : null),
              g !== null &&
                ((w = oo(g)), g !== w || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((p = null), (g = s)),
          p !== g)
        ) {
          if (
            ((y = rh),
            (x = "onMouseLeave"),
            (d = "onMouseEnter"),
            (v = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = ih),
              (x = "onPointerLeave"),
              (d = "onPointerEnter"),
              (v = "pointer")),
            (w = p == null ? h : xo(p)),
            (m = g == null ? h : xo(g)),
            (h = new y(x, v + "leave", p, n, c)),
            (h.target = w),
            (h.relatedTarget = m),
            (x = null),
            Ar(c) === s &&
              ((y = new y(d, v + "enter", g, n, c)),
              (y.target = m),
              (y.relatedTarget = w),
              (x = y)),
            (w = x),
            p && g)
          )
            t: {
              for (y = p, d = g, v = 0, m = y; m; m = po(m)) v++;
              for (m = 0, x = d; x; x = po(x)) m++;
              for (; 0 < v - m; ) (y = po(y)), v--;
              for (; 0 < m - v; ) (d = po(d)), m--;
              for (; v--; ) {
                if (y === d || (d !== null && y === d.alternate)) break t;
                (y = po(y)), (d = po(d));
              }
              y = null;
            }
          else y = null;
          p !== null && mh(f, h, p, y, !1),
            g !== null && w !== null && mh(f, w, g, y, !0);
        }
      }
      e: {
        if (
          ((h = s ? xo(s) : window),
          (p = h.nodeName && h.nodeName.toLowerCase()),
          p === "select" || (p === "input" && h.type === "file"))
        )
          var E = xx;
        else if (uh(h))
          if (gy) E = kx;
          else {
            E = Cx;
            var C = Ex;
          }
        else
          (p = h.nodeName) &&
            p.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (E = bx);
        if (E && (E = E(e, s))) {
          yy(f, E, n, c);
          break e;
        }
        C && C(e, h, s),
          e === "focusout" &&
            (C = h._wrapperState) &&
            C.controlled &&
            h.type === "number" &&
            Uc(h, "number", h.value);
      }
      switch (((C = s ? xo(s) : window), e)) {
        case "focusin":
          (uh(C) || C.contentEditable === "true") &&
            ((wo = C), (Zc = s), (ji = null));
          break;
        case "focusout":
          ji = Zc = wo = null;
          break;
        case "mousedown":
          ef = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ef = !1), ph(f, n, c);
          break;
        case "selectionchange":
          if (Px) break;
        case "keydown":
        case "keyup":
          ph(f, n, c);
      }
      var b;
      if (pd)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        go
          ? vy(e, n) && (k = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      k &&
        (hy &&
          n.locale !== "ko" &&
          (go || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && go && (b = py())
            : ((nr = c),
              (cd = "value" in nr ? nr.value : nr.textContent),
              (go = !0))),
        (C = Ql(s, k)),
        0 < C.length &&
          ((k = new oh(k, e, null, n, c)),
          f.push({ event: k, listeners: C }),
          b ? (k.data = b) : ((b = my(n)), b !== null && (k.data = b)))),
        (b = mx ? yx(e, n) : gx(e, n)) &&
          ((s = Ql(s, "onBeforeInput")),
          0 < s.length &&
            ((c = new oh("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: s }),
            (c.data = b)));
    }
    Py(f, t);
  });
}
function oa(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ql(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Xi(e, n)),
      i != null && r.unshift(oa(e, i, o)),
      (i = Xi(e, t)),
      i != null && r.push(oa(e, i, o))),
      (e = e.return);
  }
  return r;
}
function po(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function mh(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var l = n,
      u = l.alternate,
      s = l.stateNode;
    if (u !== null && u === r) break;
    l.tag === 5 &&
      s !== null &&
      ((l = s),
      o
        ? ((u = Xi(n, i)), u != null && a.unshift(oa(n, u, l)))
        : o || ((u = Xi(n, i)), u != null && a.push(oa(n, u, l)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Dx = /\r\n?/g,
  $x = /\u0000|\uFFFD/g;
function yh(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Dx,
      `
`
    )
    .replace($x, "");
}
function el(e, t, n) {
  if (((t = yh(t)), yh(e) !== t && n)) throw Error(U(425));
}
function Hl() {}
var tf = null,
  nf = null;
function rf(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var of = typeof setTimeout == "function" ? setTimeout : void 0,
  jx = typeof clearTimeout == "function" ? clearTimeout : void 0,
  gh = typeof Promise == "function" ? Promise : void 0,
  Ix =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof gh < "u"
      ? function (e) {
          return gh.resolve(null).then(e).catch(Lx);
        }
      : of;
function Lx(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ys(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), ea(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  ea(t);
}
function sr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function wh(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ei = Math.random().toString(36).slice(2),
  pn = "__reactFiber$" + ei,
  ia = "__reactProps$" + ei,
  In = "__reactContainer$" + ei,
  af = "__reactEvents$" + ei,
  Ax = "__reactListeners$" + ei,
  _x = "__reactHandles$" + ei;
function Ar(e) {
  var t = e[pn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[In] || n[pn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = wh(e); e !== null; ) {
          if ((n = e[pn])) return n;
          e = wh(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ta(e) {
  return (
    (e = e[pn] || e[In]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function xo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(U(33));
}
function Du(e) {
  return e[ia] || null;
}
var lf = [],
  Eo = -1;
function Rr(e) {
  return { current: e };
}
function be(e) {
  0 > Eo || ((e.current = lf[Eo]), (lf[Eo] = null), Eo--);
}
function we(e, t) {
  Eo++, (lf[Eo] = e.current), (e.current = t);
}
var gr = {},
  it = Rr(gr),
  vt = Rr(!1),
  Vr = gr;
function _o(e, t) {
  var n = e.type.contextTypes;
  if (!n) return gr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function mt(e) {
  return (e = e.childContextTypes), e != null;
}
function Wl() {
  be(vt), be(it);
}
function Sh(e, t, n) {
  if (it.current !== gr) throw Error(U(168));
  we(it, t), we(vt, n);
}
function Ny(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(U(108, ES(e) || "Unknown", o));
  return Ne({}, n, r);
}
function ql(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || gr),
    (Vr = it.current),
    we(it, e),
    we(vt, vt.current),
    !0
  );
}
function xh(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(U(169));
  n
    ? ((e = Ny(e, t, Vr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      be(vt),
      be(it),
      we(it, e))
    : be(vt),
    we(vt, n);
}
var Rn = null,
  $u = !1,
  Xs = !1;
function My(e) {
  Rn === null ? (Rn = [e]) : Rn.push(e);
}
function Fx(e) {
  ($u = !0), My(e);
}
function Or() {
  if (!Xs && Rn !== null) {
    Xs = !0;
    var e = 0,
      t = he;
    try {
      var n = Rn;
      for (he = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Rn = null), ($u = !1);
    } catch (o) {
      throw (Rn !== null && (Rn = Rn.slice(e + 1)), ny(ad, Or), o);
    } finally {
      (he = t), (Xs = !1);
    }
  }
  return null;
}
var Co = [],
  bo = 0,
  Kl = null,
  Vl = 0,
  Ft = [],
  zt = 0,
  Gr = null,
  Tn = 1,
  Nn = "";
function Dr(e, t) {
  (Co[bo++] = Vl), (Co[bo++] = Kl), (Kl = e), (Vl = t);
}
function Dy(e, t, n) {
  (Ft[zt++] = Tn), (Ft[zt++] = Nn), (Ft[zt++] = Gr), (Gr = e);
  var r = Tn;
  e = Nn;
  var o = 32 - tn(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - tn(t) + o;
  if (30 < i) {
    var a = o - (o % 5);
    (i = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (o -= a),
      (Tn = (1 << (32 - tn(t) + o)) | (n << o) | r),
      (Nn = i + e);
  } else (Tn = (1 << i) | (n << o) | r), (Nn = e);
}
function vd(e) {
  e.return !== null && (Dr(e, 1), Dy(e, 1, 0));
}
function md(e) {
  for (; e === Kl; )
    (Kl = Co[--bo]), (Co[bo] = null), (Vl = Co[--bo]), (Co[bo] = null);
  for (; e === Gr; )
    (Gr = Ft[--zt]),
      (Ft[zt] = null),
      (Nn = Ft[--zt]),
      (Ft[zt] = null),
      (Tn = Ft[--zt]),
      (Ft[zt] = null);
}
var Pt = null,
  Ot = null,
  Re = !1,
  Zt = null;
function $y(e, t) {
  var n = Ut(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Eh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Pt = e), (Ot = sr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Pt = e), (Ot = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Gr !== null ? { id: Tn, overflow: Nn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ut(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Pt = e),
            (Ot = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function uf(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function sf(e) {
  if (Re) {
    var t = Ot;
    if (t) {
      var n = t;
      if (!Eh(e, t)) {
        if (uf(e)) throw Error(U(418));
        t = sr(n.nextSibling);
        var r = Pt;
        t && Eh(e, t)
          ? $y(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Re = !1), (Pt = e));
      }
    } else {
      if (uf(e)) throw Error(U(418));
      (e.flags = (e.flags & -4097) | 2), (Re = !1), (Pt = e);
    }
  }
}
function Ch(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Pt = e;
}
function tl(e) {
  if (e !== Pt) return !1;
  if (!Re) return Ch(e), (Re = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !rf(e.type, e.memoizedProps))),
    t && (t = Ot))
  ) {
    if (uf(e)) throw (jy(), Error(U(418)));
    for (; t; ) $y(e, t), (t = sr(t.nextSibling));
  }
  if ((Ch(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(U(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ot = sr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ot = null;
    }
  } else Ot = Pt ? sr(e.stateNode.nextSibling) : null;
  return !0;
}
function jy() {
  for (var e = Ot; e; ) e = sr(e.nextSibling);
}
function Fo() {
  (Ot = Pt = null), (Re = !1);
}
function yd(e) {
  Zt === null ? (Zt = [e]) : Zt.push(e);
}
var zx = Un.ReactCurrentBatchConfig;
function Yt(e, t) {
  if (e && e.defaultProps) {
    (t = Ne({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Gl = Rr(null),
  Yl = null,
  ko = null,
  gd = null;
function wd() {
  gd = ko = Yl = null;
}
function Sd(e) {
  var t = Gl.current;
  be(Gl), (e._currentValue = t);
}
function cf(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function $o(e, t) {
  (Yl = e),
    (gd = ko = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (pt = !0), (e.firstContext = null));
}
function Qt(e) {
  var t = e._currentValue;
  if (gd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ko === null)) {
      if (Yl === null) throw Error(U(308));
      (ko = e), (Yl.dependencies = { lanes: 0, firstContext: e });
    } else ko = ko.next = e;
  return t;
}
var _r = null;
function xd(e) {
  _r === null ? (_r = [e]) : _r.push(e);
}
function Iy(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), xd(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Ln(e, r)
  );
}
function Ln(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Yn = !1;
function Ed(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ly(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Mn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function cr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ce & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Ln(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), xd(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Ln(e, n)
  );
}
function bl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ld(e, n);
  }
}
function bh(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = a) : (i = i.next = a), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Xl(e, t, n, r) {
  var o = e.updateQueue;
  Yn = !1;
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var u = l,
      s = u.next;
    (u.next = null), a === null ? (i = s) : (a.next = s), (a = u);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== a &&
        (l === null ? (c.firstBaseUpdate = s) : (l.next = s),
        (c.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var f = o.baseState;
    (a = 0), (c = s = u = null), (l = i);
    do {
      var h = l.lane,
        p = l.eventTime;
      if ((r & h) === h) {
        c !== null &&
          (c = c.next =
            {
              eventTime: p,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var g = e,
            y = l;
          switch (((h = t), (p = n), y.tag)) {
            case 1:
              if (((g = y.payload), typeof g == "function")) {
                f = g.call(p, f, h);
                break e;
              }
              f = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = y.payload),
                (h = typeof g == "function" ? g.call(p, f, h) : g),
                h == null)
              )
                break e;
              f = Ne({}, f, h);
              break e;
            case 2:
              Yn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (h = o.effects),
          h === null ? (o.effects = [l]) : h.push(l));
      } else
        (p = {
          eventTime: p,
          lane: h,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((s = c = p), (u = f)) : (c = c.next = p),
          (a |= h);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (h = l),
          (l = h.next),
          (h.next = null),
          (o.lastBaseUpdate = h),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (u = f),
      (o.baseState = u),
      (o.firstBaseUpdate = s),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Xr |= a), (e.lanes = a), (e.memoizedState = f);
  }
}
function kh(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(U(191, o));
        o.call(r);
      }
    }
}
var Ay = new Im.Component().refs;
function ff(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ne({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ju = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? oo(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = lt(),
      o = dr(e),
      i = Mn(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = cr(e, i, o)),
      t !== null && (nn(t, e, o, r), bl(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = lt(),
      o = dr(e),
      i = Mn(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = cr(e, i, o)),
      t !== null && (nn(t, e, o, r), bl(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = lt(),
      r = dr(e),
      o = Mn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = cr(e, o, r)),
      t !== null && (nn(t, e, r, n), bl(t, e, r));
  },
};
function Rh(e, t, n, r, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !na(n, r) || !na(o, i)
      : !0
  );
}
function _y(e, t, n) {
  var r = !1,
    o = gr,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Qt(i))
      : ((o = mt(t) ? Vr : it.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? _o(e, o) : gr)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ju),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Oh(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ju.enqueueReplaceState(t, t.state, null);
}
function df(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Ay), Ed(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Qt(i))
    : ((i = mt(t) ? Vr : it.current), (o.context = _o(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (ff(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && ju.enqueueReplaceState(o, o.state, null),
      Xl(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function hi(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(U(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(U(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var l = o.refs;
            l === Ay && (l = o.refs = {}),
              a === null ? delete l[i] : (l[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(U(284));
    if (!n._owner) throw Error(U(290, e));
  }
  return e;
}
function nl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      U(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Ph(e) {
  var t = e._init;
  return t(e._payload);
}
function Fy(e) {
  function t(d, v) {
    if (e) {
      var m = d.deletions;
      m === null ? ((d.deletions = [v]), (d.flags |= 16)) : m.push(v);
    }
  }
  function n(d, v) {
    if (!e) return null;
    for (; v !== null; ) t(d, v), (v = v.sibling);
    return null;
  }
  function r(d, v) {
    for (d = new Map(); v !== null; )
      v.key !== null ? d.set(v.key, v) : d.set(v.index, v), (v = v.sibling);
    return d;
  }
  function o(d, v) {
    return (d = pr(d, v)), (d.index = 0), (d.sibling = null), d;
  }
  function i(d, v, m) {
    return (
      (d.index = m),
      e
        ? ((m = d.alternate),
          m !== null
            ? ((m = m.index), m < v ? ((d.flags |= 2), v) : m)
            : ((d.flags |= 2), v))
        : ((d.flags |= 1048576), v)
    );
  }
  function a(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function l(d, v, m, x) {
    return v === null || v.tag !== 6
      ? ((v = oc(m, d.mode, x)), (v.return = d), v)
      : ((v = o(v, m)), (v.return = d), v);
  }
  function u(d, v, m, x) {
    var E = m.type;
    return E === yo
      ? c(d, v, m.props.children, x, m.key)
      : v !== null &&
        (v.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === Gn &&
            Ph(E) === v.type))
      ? ((x = o(v, m.props)), (x.ref = hi(d, v, m)), (x.return = d), x)
      : ((x = Nl(m.type, m.key, m.props, null, d.mode, x)),
        (x.ref = hi(d, v, m)),
        (x.return = d),
        x);
  }
  function s(d, v, m, x) {
    return v === null ||
      v.tag !== 4 ||
      v.stateNode.containerInfo !== m.containerInfo ||
      v.stateNode.implementation !== m.implementation
      ? ((v = ic(m, d.mode, x)), (v.return = d), v)
      : ((v = o(v, m.children || [])), (v.return = d), v);
  }
  function c(d, v, m, x, E) {
    return v === null || v.tag !== 7
      ? ((v = qr(m, d.mode, x, E)), (v.return = d), v)
      : ((v = o(v, m)), (v.return = d), v);
  }
  function f(d, v, m) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (v = oc("" + v, d.mode, m)), (v.return = d), v;
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Wa:
          return (
            (m = Nl(v.type, v.key, v.props, null, d.mode, m)),
            (m.ref = hi(d, null, v)),
            (m.return = d),
            m
          );
        case mo:
          return (v = ic(v, d.mode, m)), (v.return = d), v;
        case Gn:
          var x = v._init;
          return f(d, x(v._payload), m);
      }
      if (Ci(v) || si(v))
        return (v = qr(v, d.mode, m, null)), (v.return = d), v;
      nl(d, v);
    }
    return null;
  }
  function h(d, v, m, x) {
    var E = v !== null ? v.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return E !== null ? null : l(d, v, "" + m, x);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Wa:
          return m.key === E ? u(d, v, m, x) : null;
        case mo:
          return m.key === E ? s(d, v, m, x) : null;
        case Gn:
          return (E = m._init), h(d, v, E(m._payload), x);
      }
      if (Ci(m) || si(m)) return E !== null ? null : c(d, v, m, x, null);
      nl(d, m);
    }
    return null;
  }
  function p(d, v, m, x, E) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (d = d.get(m) || null), l(v, d, "" + x, E);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Wa:
          return (d = d.get(x.key === null ? m : x.key) || null), u(v, d, x, E);
        case mo:
          return (d = d.get(x.key === null ? m : x.key) || null), s(v, d, x, E);
        case Gn:
          var C = x._init;
          return p(d, v, m, C(x._payload), E);
      }
      if (Ci(x) || si(x)) return (d = d.get(m) || null), c(v, d, x, E, null);
      nl(v, x);
    }
    return null;
  }
  function g(d, v, m, x) {
    for (
      var E = null, C = null, b = v, k = (v = 0), P = null;
      b !== null && k < m.length;
      k++
    ) {
      b.index > k ? ((P = b), (b = null)) : (P = b.sibling);
      var R = h(d, b, m[k], x);
      if (R === null) {
        b === null && (b = P);
        break;
      }
      e && b && R.alternate === null && t(d, b),
        (v = i(R, v, k)),
        C === null ? (E = R) : (C.sibling = R),
        (C = R),
        (b = P);
    }
    if (k === m.length) return n(d, b), Re && Dr(d, k), E;
    if (b === null) {
      for (; k < m.length; k++)
        (b = f(d, m[k], x)),
          b !== null &&
            ((v = i(b, v, k)), C === null ? (E = b) : (C.sibling = b), (C = b));
      return Re && Dr(d, k), E;
    }
    for (b = r(d, b); k < m.length; k++)
      (P = p(b, d, k, m[k], x)),
        P !== null &&
          (e && P.alternate !== null && b.delete(P.key === null ? k : P.key),
          (v = i(P, v, k)),
          C === null ? (E = P) : (C.sibling = P),
          (C = P));
    return (
      e &&
        b.forEach(function (T) {
          return t(d, T);
        }),
      Re && Dr(d, k),
      E
    );
  }
  function y(d, v, m, x) {
    var E = si(m);
    if (typeof E != "function") throw Error(U(150));
    if (((m = E.call(m)), m == null)) throw Error(U(151));
    for (
      var C = (E = null), b = v, k = (v = 0), P = null, R = m.next();
      b !== null && !R.done;
      k++, R = m.next()
    ) {
      b.index > k ? ((P = b), (b = null)) : (P = b.sibling);
      var T = h(d, b, R.value, x);
      if (T === null) {
        b === null && (b = P);
        break;
      }
      e && b && T.alternate === null && t(d, b),
        (v = i(T, v, k)),
        C === null ? (E = T) : (C.sibling = T),
        (C = T),
        (b = P);
    }
    if (R.done) return n(d, b), Re && Dr(d, k), E;
    if (b === null) {
      for (; !R.done; k++, R = m.next())
        (R = f(d, R.value, x)),
          R !== null &&
            ((v = i(R, v, k)), C === null ? (E = R) : (C.sibling = R), (C = R));
      return Re && Dr(d, k), E;
    }
    for (b = r(d, b); !R.done; k++, R = m.next())
      (R = p(b, d, k, R.value, x)),
        R !== null &&
          (e && R.alternate !== null && b.delete(R.key === null ? k : R.key),
          (v = i(R, v, k)),
          C === null ? (E = R) : (C.sibling = R),
          (C = R));
    return (
      e &&
        b.forEach(function (N) {
          return t(d, N);
        }),
      Re && Dr(d, k),
      E
    );
  }
  function w(d, v, m, x) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === yo &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Wa:
          e: {
            for (var E = m.key, C = v; C !== null; ) {
              if (C.key === E) {
                if (((E = m.type), E === yo)) {
                  if (C.tag === 7) {
                    n(d, C.sibling),
                      (v = o(C, m.props.children)),
                      (v.return = d),
                      (d = v);
                    break e;
                  }
                } else if (
                  C.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Gn &&
                    Ph(E) === C.type)
                ) {
                  n(d, C.sibling),
                    (v = o(C, m.props)),
                    (v.ref = hi(d, C, m)),
                    (v.return = d),
                    (d = v);
                  break e;
                }
                n(d, C);
                break;
              } else t(d, C);
              C = C.sibling;
            }
            m.type === yo
              ? ((v = qr(m.props.children, d.mode, x, m.key)),
                (v.return = d),
                (d = v))
              : ((x = Nl(m.type, m.key, m.props, null, d.mode, x)),
                (x.ref = hi(d, v, m)),
                (x.return = d),
                (d = x));
          }
          return a(d);
        case mo:
          e: {
            for (C = m.key; v !== null; ) {
              if (v.key === C)
                if (
                  v.tag === 4 &&
                  v.stateNode.containerInfo === m.containerInfo &&
                  v.stateNode.implementation === m.implementation
                ) {
                  n(d, v.sibling),
                    (v = o(v, m.children || [])),
                    (v.return = d),
                    (d = v);
                  break e;
                } else {
                  n(d, v);
                  break;
                }
              else t(d, v);
              v = v.sibling;
            }
            (v = ic(m, d.mode, x)), (v.return = d), (d = v);
          }
          return a(d);
        case Gn:
          return (C = m._init), w(d, v, C(m._payload), x);
      }
      if (Ci(m)) return g(d, v, m, x);
      if (si(m)) return y(d, v, m, x);
      nl(d, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        v !== null && v.tag === 6
          ? (n(d, v.sibling), (v = o(v, m)), (v.return = d), (d = v))
          : (n(d, v), (v = oc(m, d.mode, x)), (v.return = d), (d = v)),
        a(d))
      : n(d, v);
  }
  return w;
}
var zo = Fy(!0),
  zy = Fy(!1),
  Na = {},
  mn = Rr(Na),
  aa = Rr(Na),
  la = Rr(Na);
function Fr(e) {
  if (e === Na) throw Error(U(174));
  return e;
}
function Cd(e, t) {
  switch ((we(la, t), we(aa, e), we(mn, Na), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Qc(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Qc(t, e));
  }
  be(mn), we(mn, t);
}
function Uo() {
  be(mn), be(aa), be(la);
}
function Uy(e) {
  Fr(la.current);
  var t = Fr(mn.current),
    n = Qc(t, e.type);
  t !== n && (we(aa, e), we(mn, n));
}
function bd(e) {
  aa.current === e && (be(mn), be(aa));
}
var Pe = Rr(0);
function Jl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Js = [];
function kd() {
  for (var e = 0; e < Js.length; e++)
    Js[e]._workInProgressVersionPrimary = null;
  Js.length = 0;
}
var kl = Un.ReactCurrentDispatcher,
  Zs = Un.ReactCurrentBatchConfig,
  Yr = 0,
  Te = null,
  Fe = null,
  We = null,
  Zl = !1,
  Ii = !1,
  ua = 0,
  Ux = 0;
function tt() {
  throw Error(U(321));
}
function Rd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!rn(e[n], t[n])) return !1;
  return !0;
}
function Od(e, t, n, r, o, i) {
  if (
    ((Yr = i),
    (Te = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (kl.current = e === null || e.memoizedState === null ? Wx : qx),
    (e = n(r, o)),
    Ii)
  ) {
    i = 0;
    do {
      if (((Ii = !1), (ua = 0), 25 <= i)) throw Error(U(301));
      (i += 1),
        (We = Fe = null),
        (t.updateQueue = null),
        (kl.current = Kx),
        (e = n(r, o));
    } while (Ii);
  }
  if (
    ((kl.current = eu),
    (t = Fe !== null && Fe.next !== null),
    (Yr = 0),
    (We = Fe = Te = null),
    (Zl = !1),
    t)
  )
    throw Error(U(300));
  return e;
}
function Pd() {
  var e = ua !== 0;
  return (ua = 0), e;
}
function fn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return We === null ? (Te.memoizedState = We = e) : (We = We.next = e), We;
}
function Ht() {
  if (Fe === null) {
    var e = Te.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Fe.next;
  var t = We === null ? Te.memoizedState : We.next;
  if (t !== null) (We = t), (Fe = e);
  else {
    if (e === null) throw Error(U(310));
    (Fe = e),
      (e = {
        memoizedState: Fe.memoizedState,
        baseState: Fe.baseState,
        baseQueue: Fe.baseQueue,
        queue: Fe.queue,
        next: null,
      }),
      We === null ? (Te.memoizedState = We = e) : (We = We.next = e);
  }
  return We;
}
function sa(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ec(e) {
  var t = Ht(),
    n = t.queue;
  if (n === null) throw Error(U(311));
  n.lastRenderedReducer = e;
  var r = Fe,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = i.next), (i.next = a);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (a = null),
      u = null,
      s = i;
    do {
      var c = s.lane;
      if ((Yr & c) === c)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var f = {
          lane: c,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((l = u = f), (a = r)) : (u = u.next = f),
          (Te.lanes |= c),
          (Xr |= c);
      }
      s = s.next;
    } while (s !== null && s !== i);
    u === null ? (a = r) : (u.next = l),
      rn(r, t.memoizedState) || (pt = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Te.lanes |= i), (Xr |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function tc(e) {
  var t = Ht(),
    n = t.queue;
  if (n === null) throw Error(U(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (i = e(i, a.action)), (a = a.next);
    while (a !== o);
    rn(i, t.memoizedState) || (pt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function By() {}
function Qy(e, t) {
  var n = Te,
    r = Ht(),
    o = t(),
    i = !rn(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (pt = !0)),
    (r = r.queue),
    Td(qy.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (We !== null && We.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ca(9, Wy.bind(null, n, r, o, t), void 0, null),
      qe === null)
    )
      throw Error(U(349));
    Yr & 30 || Hy(n, t, o);
  }
  return o;
}
function Hy(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Te.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Wy(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ky(t) && Vy(e);
}
function qy(e, t, n) {
  return n(function () {
    Ky(t) && Vy(e);
  });
}
function Ky(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !rn(e, n);
  } catch {
    return !0;
  }
}
function Vy(e) {
  var t = Ln(e, 1);
  t !== null && nn(t, e, 1, -1);
}
function Th(e) {
  var t = fn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: sa,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Hx.bind(null, Te, e)),
    [t.memoizedState, e]
  );
}
function ca(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Te.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Gy() {
  return Ht().memoizedState;
}
function Rl(e, t, n, r) {
  var o = fn();
  (Te.flags |= e),
    (o.memoizedState = ca(1 | t, n, void 0, r === void 0 ? null : r));
}
function Iu(e, t, n, r) {
  var o = Ht();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Fe !== null) {
    var a = Fe.memoizedState;
    if (((i = a.destroy), r !== null && Rd(r, a.deps))) {
      o.memoizedState = ca(t, n, i, r);
      return;
    }
  }
  (Te.flags |= e), (o.memoizedState = ca(1 | t, n, i, r));
}
function Nh(e, t) {
  return Rl(8390656, 8, e, t);
}
function Td(e, t) {
  return Iu(2048, 8, e, t);
}
function Yy(e, t) {
  return Iu(4, 2, e, t);
}
function Xy(e, t) {
  return Iu(4, 4, e, t);
}
function Jy(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Zy(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Iu(4, 4, Jy.bind(null, t, e), n)
  );
}
function Nd() {}
function eg(e, t) {
  var n = Ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Rd(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function tg(e, t) {
  var n = Ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Rd(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ng(e, t, n) {
  return Yr & 21
    ? (rn(n, t) || ((n = iy()), (Te.lanes |= n), (Xr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (pt = !0)), (e.memoizedState = n));
}
function Bx(e, t) {
  var n = he;
  (he = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Zs.transition;
  Zs.transition = {};
  try {
    e(!1), t();
  } finally {
    (he = n), (Zs.transition = r);
  }
}
function rg() {
  return Ht().memoizedState;
}
function Qx(e, t, n) {
  var r = dr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    og(e))
  )
    ig(t, n);
  else if (((n = Iy(e, t, n, r)), n !== null)) {
    var o = lt();
    nn(n, e, r, o), ag(n, t, r);
  }
}
function Hx(e, t, n) {
  var r = dr(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (og(e)) ig(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          l = i(a, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), rn(l, a))) {
          var u = t.interleaved;
          u === null
            ? ((o.next = o), xd(t))
            : ((o.next = u.next), (u.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Iy(e, t, o, r)),
      n !== null && ((o = lt()), nn(n, e, r, o), ag(n, t, r));
  }
}
function og(e) {
  var t = e.alternate;
  return e === Te || (t !== null && t === Te);
}
function ig(e, t) {
  Ii = Zl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ag(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ld(e, n);
  }
}
var eu = {
    readContext: Qt,
    useCallback: tt,
    useContext: tt,
    useEffect: tt,
    useImperativeHandle: tt,
    useInsertionEffect: tt,
    useLayoutEffect: tt,
    useMemo: tt,
    useReducer: tt,
    useRef: tt,
    useState: tt,
    useDebugValue: tt,
    useDeferredValue: tt,
    useTransition: tt,
    useMutableSource: tt,
    useSyncExternalStore: tt,
    useId: tt,
    unstable_isNewReconciler: !1,
  },
  Wx = {
    readContext: Qt,
    useCallback: function (e, t) {
      return (fn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Qt,
    useEffect: Nh,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Rl(4194308, 4, Jy.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Rl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Rl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = fn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = fn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Qx.bind(null, Te, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = fn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Th,
    useDebugValue: Nd,
    useDeferredValue: function (e) {
      return (fn().memoizedState = e);
    },
    useTransition: function () {
      var e = Th(!1),
        t = e[0];
      return (e = Bx.bind(null, e[1])), (fn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Te,
        o = fn();
      if (Re) {
        if (n === void 0) throw Error(U(407));
        n = n();
      } else {
        if (((n = t()), qe === null)) throw Error(U(349));
        Yr & 30 || Hy(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Nh(qy.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        ca(9, Wy.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = fn(),
        t = qe.identifierPrefix;
      if (Re) {
        var n = Nn,
          r = Tn;
        (n = (r & ~(1 << (32 - tn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ua++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Ux++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  qx = {
    readContext: Qt,
    useCallback: eg,
    useContext: Qt,
    useEffect: Td,
    useImperativeHandle: Zy,
    useInsertionEffect: Yy,
    useLayoutEffect: Xy,
    useMemo: tg,
    useReducer: ec,
    useRef: Gy,
    useState: function () {
      return ec(sa);
    },
    useDebugValue: Nd,
    useDeferredValue: function (e) {
      var t = Ht();
      return ng(t, Fe.memoizedState, e);
    },
    useTransition: function () {
      var e = ec(sa)[0],
        t = Ht().memoizedState;
      return [e, t];
    },
    useMutableSource: By,
    useSyncExternalStore: Qy,
    useId: rg,
    unstable_isNewReconciler: !1,
  },
  Kx = {
    readContext: Qt,
    useCallback: eg,
    useContext: Qt,
    useEffect: Td,
    useImperativeHandle: Zy,
    useInsertionEffect: Yy,
    useLayoutEffect: Xy,
    useMemo: tg,
    useReducer: tc,
    useRef: Gy,
    useState: function () {
      return tc(sa);
    },
    useDebugValue: Nd,
    useDeferredValue: function (e) {
      var t = Ht();
      return Fe === null ? (t.memoizedState = e) : ng(t, Fe.memoizedState, e);
    },
    useTransition: function () {
      var e = tc(sa)[0],
        t = Ht().memoizedState;
      return [e, t];
    },
    useMutableSource: By,
    useSyncExternalStore: Qy,
    useId: rg,
    unstable_isNewReconciler: !1,
  };
function Bo(e, t) {
  try {
    var n = "",
      r = t;
    do (n += xS(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function nc(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function pf(e, t) {
  try {
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Vx = typeof WeakMap == "function" ? WeakMap : Map;
function lg(e, t, n) {
  (n = Mn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      nu || ((nu = !0), (Cf = r)), pf(e, t);
    }),
    n
  );
}
function ug(e, t, n) {
  (n = Mn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        pf(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        pf(e, t),
          typeof r != "function" &&
            (fr === null ? (fr = new Set([this])) : fr.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function Mh(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Vx();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = uE.bind(null, e, t, n)), t.then(e, e));
}
function Dh(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function $h(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Mn(-1, 1)), (t.tag = 2), cr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Gx = Un.ReactCurrentOwner,
  pt = !1;
function at(e, t, n, r) {
  t.child = e === null ? zy(t, null, n, r) : zo(t, e.child, n, r);
}
function jh(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    $o(t, o),
    (r = Od(e, t, n, r, i, o)),
    (n = Pd()),
    e !== null && !pt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        An(e, t, o))
      : (Re && n && vd(t), (t.flags |= 1), at(e, t, r, o), t.child)
  );
}
function Ih(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !_d(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), sg(e, t, i, r, o))
      : ((e = Nl(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var a = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : na), n(a, r) && e.ref === t.ref)
    )
      return An(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = pr(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function sg(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (na(i, r) && e.ref === t.ref)
      if (((pt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (pt = !0);
      else return (t.lanes = e.lanes), An(e, t, o);
  }
  return hf(e, t, n, r, o);
}
function cg(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        we(Oo, Rt),
        (Rt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          we(Oo, Rt),
          (Rt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        we(Oo, Rt),
        (Rt |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      we(Oo, Rt),
      (Rt |= r);
  return at(e, t, o, n), t.child;
}
function fg(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function hf(e, t, n, r, o) {
  var i = mt(n) ? Vr : it.current;
  return (
    (i = _o(t, i)),
    $o(t, o),
    (n = Od(e, t, n, r, i, o)),
    (r = Pd()),
    e !== null && !pt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        An(e, t, o))
      : (Re && r && vd(t), (t.flags |= 1), at(e, t, n, o), t.child)
  );
}
function Lh(e, t, n, r, o) {
  if (mt(n)) {
    var i = !0;
    ql(t);
  } else i = !1;
  if (($o(t, o), t.stateNode === null))
    Ol(e, t), _y(t, n, r), df(t, n, r, o), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      l = t.memoizedProps;
    a.props = l;
    var u = a.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = Qt(s))
      : ((s = mt(n) ? Vr : it.current), (s = _o(t, s)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== r || u !== s) && Oh(t, a, r, s)),
      (Yn = !1);
    var h = t.memoizedState;
    (a.state = h),
      Xl(t, r, a, o),
      (u = t.memoizedState),
      l !== r || h !== u || vt.current || Yn
        ? (typeof c == "function" && (ff(t, n, c, r), (u = t.memoizedState)),
          (l = Yn || Rh(t, n, l, r, h, u, s))
            ? (f ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (a.props = r),
          (a.state = u),
          (a.context = s),
          (r = l))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      Ly(e, t),
      (l = t.memoizedProps),
      (s = t.type === t.elementType ? l : Yt(t.type, l)),
      (a.props = s),
      (f = t.pendingProps),
      (h = a.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Qt(u))
        : ((u = mt(n) ? Vr : it.current), (u = _o(t, u)));
    var p = n.getDerivedStateFromProps;
    (c =
      typeof p == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== f || h !== u) && Oh(t, a, r, u)),
      (Yn = !1),
      (h = t.memoizedState),
      (a.state = h),
      Xl(t, r, a, o);
    var g = t.memoizedState;
    l !== f || h !== g || vt.current || Yn
      ? (typeof p == "function" && (ff(t, n, p, r), (g = t.memoizedState)),
        (s = Yn || Rh(t, n, s, r, h, g, u) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, g, u),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, g, u)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (a.props = r),
        (a.state = g),
        (a.context = u),
        (r = s))
      : (typeof a.componentDidUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return vf(e, t, n, r, i, o);
}
function vf(e, t, n, r, o, i) {
  fg(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return o && xh(t, n, !1), An(e, t, i);
  (r = t.stateNode), (Gx.current = t);
  var l =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = zo(t, e.child, null, i)), (t.child = zo(t, null, l, i)))
      : at(e, t, l, i),
    (t.memoizedState = r.state),
    o && xh(t, n, !0),
    t.child
  );
}
function dg(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Sh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Sh(e, t.context, !1),
    Cd(e, t.containerInfo);
}
function Ah(e, t, n, r, o) {
  return Fo(), yd(o), (t.flags |= 256), at(e, t, n, r), t.child;
}
var mf = { dehydrated: null, treeContext: null, retryLane: 0 };
function yf(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function pg(e, t, n) {
  var r = t.pendingProps,
    o = Pe.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    l;
  if (
    ((l = a) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    we(Pe, o & 1),
    e === null)
  )
    return (
      sf(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = _u(a, r, 0, null)),
              (e = qr(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = yf(n)),
              (t.memoizedState = mf),
              e)
            : Md(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return Yx(e, t, a, r, l, o, n);
  if (i) {
    (i = r.fallback), (a = t.mode), (o = e.child), (l = o.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = pr(o, u)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = pr(l, i)) : ((i = qr(i, a, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? yf(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = mf),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = pr(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Md(e, t) {
  return (
    (t = _u({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function rl(e, t, n, r) {
  return (
    r !== null && yd(r),
    zo(t, e.child, null, n),
    (e = Md(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Yx(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = nc(Error(U(422)))), rl(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = _u({ mode: "visible", children: r.children }, o, 0, null)),
        (i = qr(i, o, a, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && zo(t, e.child, null, a),
        (t.child.memoizedState = yf(a)),
        (t.memoizedState = mf),
        i);
  if (!(t.mode & 1)) return rl(e, t, a, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(U(419))), (r = nc(i, r, void 0)), rl(e, t, a, r);
  }
  if (((l = (a & e.childLanes) !== 0), pt || l)) {
    if (((r = qe), r !== null)) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | a) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Ln(e, o), nn(r, e, o, -1));
    }
    return Ad(), (r = nc(Error(U(421)))), rl(e, t, a, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = sE.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ot = sr(o.nextSibling)),
      (Pt = t),
      (Re = !0),
      (Zt = null),
      e !== null &&
        ((Ft[zt++] = Tn),
        (Ft[zt++] = Nn),
        (Ft[zt++] = Gr),
        (Tn = e.id),
        (Nn = e.overflow),
        (Gr = t)),
      (t = Md(t, r.children)),
      (t.flags |= 4096),
      t);
}
function _h(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), cf(e.return, t, n);
}
function rc(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function hg(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((at(e, t, r.children, n), (r = Pe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && _h(e, n, t);
        else if (e.tag === 19) _h(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((we(Pe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Jl(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          rc(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Jl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        rc(t, !0, n, null, i);
        break;
      case "together":
        rc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ol(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function An(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Xr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(U(153));
  if (t.child !== null) {
    for (
      e = t.child, n = pr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = pr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Xx(e, t, n) {
  switch (t.tag) {
    case 3:
      dg(t), Fo();
      break;
    case 5:
      Uy(t);
      break;
    case 1:
      mt(t.type) && ql(t);
      break;
    case 4:
      Cd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      we(Gl, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (we(Pe, Pe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? pg(e, t, n)
          : (we(Pe, Pe.current & 1),
            (e = An(e, t, n)),
            e !== null ? e.sibling : null);
      we(Pe, Pe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return hg(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        we(Pe, Pe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), cg(e, t, n);
  }
  return An(e, t, n);
}
var vg, gf, mg, yg;
vg = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
gf = function () {};
mg = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Fr(mn.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Fc(e, o)), (r = Fc(e, r)), (i = []);
        break;
      case "select":
        (o = Ne({}, o, { value: void 0 })),
          (r = Ne({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Bc(e, o)), (r = Bc(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Hl);
    }
    Hc(n, r);
    var a;
    n = null;
    for (s in o)
      if (!r.hasOwnProperty(s) && o.hasOwnProperty(s) && o[s] != null)
        if (s === "style") {
          var l = o[s];
          for (a in l) l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (Gi.hasOwnProperty(s)
              ? i || (i = [])
              : (i = i || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (
        ((l = o != null ? o[s] : void 0),
        r.hasOwnProperty(s) && u !== l && (u != null || l != null))
      )
        if (s === "style")
          if (l) {
            for (a in l)
              !l.hasOwnProperty(a) ||
                (u && u.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in u)
              u.hasOwnProperty(a) &&
                l[a] !== u[a] &&
                (n || (n = {}), (n[a] = u[a]));
          } else n || (i || (i = []), i.push(s, n)), (n = u);
        else
          s === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (l = l ? l.__html : void 0),
              u != null && l !== u && (i = i || []).push(s, u))
            : s === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (i = i || []).push(s, "" + u)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (Gi.hasOwnProperty(s)
                ? (u != null && s === "onScroll" && xe("scroll", e),
                  i || l === u || (i = []))
                : (i = i || []).push(s, u));
    }
    n && (i = i || []).push("style", n);
    var s = i;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
yg = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function vi(e, t) {
  if (!Re)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function nt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Jx(e, t, n) {
  var r = t.pendingProps;
  switch ((md(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return nt(t), null;
    case 1:
      return mt(t.type) && Wl(), nt(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Uo(),
        be(vt),
        be(it),
        kd(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (tl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Zt !== null && (Rf(Zt), (Zt = null)))),
        gf(e, t),
        nt(t),
        null
      );
    case 5:
      bd(t);
      var o = Fr(la.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        mg(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(U(166));
          return nt(t), null;
        }
        if (((e = Fr(mn.current)), tl(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[pn] = t), (r[ia] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              xe("cancel", r), xe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              xe("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < ki.length; o++) xe(ki[o], r);
              break;
            case "source":
              xe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              xe("error", r), xe("load", r);
              break;
            case "details":
              xe("toggle", r);
              break;
            case "input":
              Kp(r, i), xe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                xe("invalid", r);
              break;
            case "textarea":
              Gp(r, i), xe("invalid", r);
          }
          Hc(n, i), (o = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var l = i[a];
              a === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      el(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      el(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : Gi.hasOwnProperty(a) &&
                  l != null &&
                  a === "onScroll" &&
                  xe("scroll", r);
            }
          switch (n) {
            case "input":
              qa(r), Vp(r, i, !0);
              break;
            case "textarea":
              qa(r), Yp(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Hl);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Hm(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[pn] = t),
            (e[ia] = r),
            vg(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Wc(n, r)), n)) {
              case "dialog":
                xe("cancel", e), xe("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                xe("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < ki.length; o++) xe(ki[o], e);
                o = r;
                break;
              case "source":
                xe("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                xe("error", e), xe("load", e), (o = r);
                break;
              case "details":
                xe("toggle", e), (o = r);
                break;
              case "input":
                Kp(e, r), (o = Fc(e, r)), xe("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Ne({}, r, { value: void 0 })),
                  xe("invalid", e);
                break;
              case "textarea":
                Gp(e, r), (o = Bc(e, r)), xe("invalid", e);
                break;
              default:
                o = r;
            }
            Hc(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var u = l[i];
                i === "style"
                  ? Km(e, u)
                  : i === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && Wm(e, u))
                  : i === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Yi(e, u)
                    : typeof u == "number" && Yi(e, "" + u)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Gi.hasOwnProperty(i)
                      ? u != null && i === "onScroll" && xe("scroll", e)
                      : u != null && td(e, i, u, a));
              }
            switch (n) {
              case "input":
                qa(e), Vp(e, r, !1);
                break;
              case "textarea":
                qa(e), Yp(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + yr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? To(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      To(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Hl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return nt(t), null;
    case 6:
      if (e && t.stateNode != null) yg(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(U(166));
        if (((n = Fr(la.current)), Fr(mn.current), tl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[pn] = t),
            (i = r.nodeValue !== n) && ((e = Pt), e !== null))
          )
            switch (e.tag) {
              case 3:
                el(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  el(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[pn] = t),
            (t.stateNode = r);
      }
      return nt(t), null;
    case 13:
      if (
        (be(Pe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Re && Ot !== null && t.mode & 1 && !(t.flags & 128))
          jy(), Fo(), (t.flags |= 98560), (i = !1);
        else if (((i = tl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(U(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(U(317));
            i[pn] = t;
          } else
            Fo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          nt(t), (i = !1);
        } else Zt !== null && (Rf(Zt), (Zt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Pe.current & 1 ? ze === 0 && (ze = 3) : Ad())),
          t.updateQueue !== null && (t.flags |= 4),
          nt(t),
          null);
    case 4:
      return (
        Uo(), gf(e, t), e === null && ra(t.stateNode.containerInfo), nt(t), null
      );
    case 10:
      return Sd(t.type._context), nt(t), null;
    case 17:
      return mt(t.type) && Wl(), nt(t), null;
    case 19:
      if ((be(Pe), (i = t.memoizedState), i === null)) return nt(t), null;
      if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (r) vi(i, !1);
        else {
          if (ze !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Jl(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    vi(i, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return we(Pe, (Pe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            $e() > Qo &&
            ((t.flags |= 128), (r = !0), vi(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Jl(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              vi(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !Re)
            )
              return nt(t), null;
          } else
            2 * $e() - i.renderingStartTime > Qo &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), vi(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = i.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = $e()),
          (t.sibling = null),
          (n = Pe.current),
          we(Pe, r ? (n & 1) | 2 : n & 1),
          t)
        : (nt(t), null);
    case 22:
    case 23:
      return (
        Ld(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Rt & 1073741824 && (nt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : nt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(U(156, t.tag));
}
function Zx(e, t) {
  switch ((md(t), t.tag)) {
    case 1:
      return (
        mt(t.type) && Wl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Uo(),
        be(vt),
        be(it),
        kd(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return bd(t), null;
    case 13:
      if (
        (be(Pe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(U(340));
        Fo();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return be(Pe), null;
    case 4:
      return Uo(), null;
    case 10:
      return Sd(t.type._context), null;
    case 22:
    case 23:
      return Ld(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ol = !1,
  ot = !1,
  eE = typeof WeakSet == "function" ? WeakSet : Set,
  W = null;
function Ro(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Me(e, t, r);
      }
    else n.current = null;
}
function wf(e, t, n) {
  try {
    n();
  } catch (r) {
    Me(e, t, r);
  }
}
var Fh = !1;
function tE(e, t) {
  if (((tf = Ul), (e = xy()), hd(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            l = -1,
            u = -1,
            s = 0,
            c = 0,
            f = e,
            h = null;
          t: for (;;) {
            for (
              var p;
              f !== n || (o !== 0 && f.nodeType !== 3) || (l = a + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (u = a + r),
                f.nodeType === 3 && (a += f.nodeValue.length),
                (p = f.firstChild) !== null;

            )
              (h = f), (f = p);
            for (;;) {
              if (f === e) break t;
              if (
                (h === n && ++s === o && (l = a),
                h === i && ++c === r && (u = a),
                (p = f.nextSibling) !== null)
              )
                break;
              (f = h), (h = f.parentNode);
            }
            f = p;
          }
          n = l === -1 || u === -1 ? null : { start: l, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (nf = { focusedElem: e, selectionRange: n }, Ul = !1, W = t; W !== null; )
    if (((t = W), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (W = e);
    else
      for (; W !== null; ) {
        t = W;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var y = g.memoizedProps,
                    w = g.memoizedState,
                    d = t.stateNode,
                    v = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Yt(t.type, y),
                      w
                    );
                  d.__reactInternalSnapshotBeforeUpdate = v;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(U(163));
            }
        } catch (x) {
          Me(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (W = e);
          break;
        }
        W = t.return;
      }
  return (g = Fh), (Fh = !1), g;
}
function Li(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && wf(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Lu(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Sf(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function gg(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), gg(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[pn], delete t[ia], delete t[af], delete t[Ax], delete t[_x])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function wg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function zh(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || wg(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function xf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Hl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (xf(e, t, n), e = e.sibling; e !== null; ) xf(e, t, n), (e = e.sibling);
}
function Ef(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ef(e, t, n), e = e.sibling; e !== null; ) Ef(e, t, n), (e = e.sibling);
}
var Ye = null,
  Jt = !1;
function Kn(e, t, n) {
  for (n = n.child; n !== null; ) Sg(e, t, n), (n = n.sibling);
}
function Sg(e, t, n) {
  if (vn && typeof vn.onCommitFiberUnmount == "function")
    try {
      vn.onCommitFiberUnmount(Pu, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ot || Ro(n, t);
    case 6:
      var r = Ye,
        o = Jt;
      (Ye = null),
        Kn(e, t, n),
        (Ye = r),
        (Jt = o),
        Ye !== null &&
          (Jt
            ? ((e = Ye),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ye.removeChild(n.stateNode));
      break;
    case 18:
      Ye !== null &&
        (Jt
          ? ((e = Ye),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ys(e.parentNode, n)
              : e.nodeType === 1 && Ys(e, n),
            ea(e))
          : Ys(Ye, n.stateNode));
      break;
    case 4:
      (r = Ye),
        (o = Jt),
        (Ye = n.stateNode.containerInfo),
        (Jt = !0),
        Kn(e, t, n),
        (Ye = r),
        (Jt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ot &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && wf(n, t, a),
            (o = o.next);
        } while (o !== r);
      }
      Kn(e, t, n);
      break;
    case 1:
      if (
        !ot &&
        (Ro(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Me(n, t, l);
        }
      Kn(e, t, n);
      break;
    case 21:
      Kn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ot = (r = ot) || n.memoizedState !== null), Kn(e, t, n), (ot = r))
        : Kn(e, t, n);
      break;
    default:
      Kn(e, t, n);
  }
}
function Uh(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new eE()),
      t.forEach(function (r) {
        var o = cE.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Gt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          a = t,
          l = a;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Ye = l.stateNode), (Jt = !1);
              break e;
            case 3:
              (Ye = l.stateNode.containerInfo), (Jt = !0);
              break e;
            case 4:
              (Ye = l.stateNode.containerInfo), (Jt = !0);
              break e;
          }
          l = l.return;
        }
        if (Ye === null) throw Error(U(160));
        Sg(i, a, o), (Ye = null), (Jt = !1);
        var u = o.alternate;
        u !== null && (u.return = null), (o.return = null);
      } catch (s) {
        Me(o, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) xg(t, e), (t = t.sibling);
}
function xg(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Gt(t, e), cn(e), r & 4)) {
        try {
          Li(3, e, e.return), Lu(3, e);
        } catch (y) {
          Me(e, e.return, y);
        }
        try {
          Li(5, e, e.return);
        } catch (y) {
          Me(e, e.return, y);
        }
      }
      break;
    case 1:
      Gt(t, e), cn(e), r & 512 && n !== null && Ro(n, n.return);
      break;
    case 5:
      if (
        (Gt(t, e),
        cn(e),
        r & 512 && n !== null && Ro(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Yi(o, "");
        } catch (y) {
          Me(e, e.return, y);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          l = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            l === "input" && i.type === "radio" && i.name != null && Bm(o, i),
              Wc(l, a);
            var s = Wc(l, i);
            for (a = 0; a < u.length; a += 2) {
              var c = u[a],
                f = u[a + 1];
              c === "style"
                ? Km(o, f)
                : c === "dangerouslySetInnerHTML"
                ? Wm(o, f)
                : c === "children"
                ? Yi(o, f)
                : td(o, c, f, s);
            }
            switch (l) {
              case "input":
                zc(o, i);
                break;
              case "textarea":
                Qm(o, i);
                break;
              case "select":
                var h = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                p != null
                  ? To(o, !!i.multiple, p, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? To(o, !!i.multiple, i.defaultValue, !0)
                      : To(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ia] = i;
          } catch (y) {
            Me(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Gt(t, e), cn(e), r & 4)) {
        if (e.stateNode === null) throw Error(U(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (y) {
          Me(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Gt(t, e), cn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ea(t.containerInfo);
        } catch (y) {
          Me(e, e.return, y);
        }
      break;
    case 4:
      Gt(t, e), cn(e);
      break;
    case 13:
      Gt(t, e),
        cn(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (jd = $e())),
        r & 4 && Uh(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ot = (s = ot) || c), Gt(t, e), (ot = s)) : Gt(t, e),
        cn(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !c && e.mode & 1)
        )
          for (W = e, c = e.child; c !== null; ) {
            for (f = W = c; W !== null; ) {
              switch (((h = W), (p = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Li(4, h, h.return);
                  break;
                case 1:
                  Ro(h, h.return);
                  var g = h.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (y) {
                      Me(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Ro(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Qh(f);
                    continue;
                  }
              }
              p !== null ? ((p.return = h), (W = p)) : Qh(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (o = f.stateNode),
                  s
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = f.stateNode),
                      (u = f.memoizedProps.style),
                      (a =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (l.style.display = qm("display", a)));
              } catch (y) {
                Me(e, e.return, y);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = s ? "" : f.memoizedProps;
              } catch (y) {
                Me(e, e.return, y);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Gt(t, e), cn(e), r & 4 && Uh(e);
      break;
    case 21:
      break;
    default:
      Gt(t, e), cn(e);
  }
}
function cn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (wg(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(U(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Yi(o, ""), (r.flags &= -33));
          var i = zh(e);
          Ef(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            l = zh(e);
          xf(e, l, a);
          break;
        default:
          throw Error(U(161));
      }
    } catch (u) {
      Me(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function nE(e, t, n) {
  (W = e), Eg(e);
}
function Eg(e, t, n) {
  for (var r = (e.mode & 1) !== 0; W !== null; ) {
    var o = W,
      i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || ol;
      if (!a) {
        var l = o.alternate,
          u = (l !== null && l.memoizedState !== null) || ot;
        l = ol;
        var s = ot;
        if (((ol = a), (ot = u) && !s))
          for (W = o; W !== null; )
            (a = W),
              (u = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Hh(o)
                : u !== null
                ? ((u.return = a), (W = u))
                : Hh(o);
        for (; i !== null; ) (W = i), Eg(i), (i = i.sibling);
        (W = o), (ol = l), (ot = s);
      }
      Bh(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (W = i)) : Bh(e);
  }
}
function Bh(e) {
  for (; W !== null; ) {
    var t = W;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ot || Lu(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ot)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Yt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && kh(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                kh(t, a, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var c = s.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && ea(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(U(163));
          }
        ot || (t.flags & 512 && Sf(t));
      } catch (h) {
        Me(t, t.return, h);
      }
    }
    if (t === e) {
      W = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (W = n);
      break;
    }
    W = t.return;
  }
}
function Qh(e) {
  for (; W !== null; ) {
    var t = W;
    if (t === e) {
      W = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (W = n);
      break;
    }
    W = t.return;
  }
}
function Hh(e) {
  for (; W !== null; ) {
    var t = W;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Lu(4, t);
          } catch (u) {
            Me(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              Me(t, o, u);
            }
          }
          var i = t.return;
          try {
            Sf(t);
          } catch (u) {
            Me(t, i, u);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Sf(t);
          } catch (u) {
            Me(t, a, u);
          }
      }
    } catch (u) {
      Me(t, t.return, u);
    }
    if (t === e) {
      W = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (W = l);
      break;
    }
    W = t.return;
  }
}
var rE = Math.ceil,
  tu = Un.ReactCurrentDispatcher,
  Dd = Un.ReactCurrentOwner,
  Bt = Un.ReactCurrentBatchConfig,
  ce = 0,
  qe = null,
  je = null,
  Je = 0,
  Rt = 0,
  Oo = Rr(0),
  ze = 0,
  fa = null,
  Xr = 0,
  Au = 0,
  $d = 0,
  Ai = null,
  dt = null,
  jd = 0,
  Qo = 1 / 0,
  bn = null,
  nu = !1,
  Cf = null,
  fr = null,
  il = !1,
  rr = null,
  ru = 0,
  _i = 0,
  bf = null,
  Pl = -1,
  Tl = 0;
function lt() {
  return ce & 6 ? $e() : Pl !== -1 ? Pl : (Pl = $e());
}
function dr(e) {
  return e.mode & 1
    ? ce & 2 && Je !== 0
      ? Je & -Je
      : zx.transition !== null
      ? (Tl === 0 && (Tl = iy()), Tl)
      : ((e = he),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : dy(e.type))),
        e)
    : 1;
}
function nn(e, t, n, r) {
  if (50 < _i) throw ((_i = 0), (bf = null), Error(U(185)));
  Oa(e, n, r),
    (!(ce & 2) || e !== qe) &&
      (e === qe && (!(ce & 2) && (Au |= n), ze === 4 && Zn(e, Je)),
      yt(e, r),
      n === 1 && ce === 0 && !(t.mode & 1) && ((Qo = $e() + 500), $u && Or()));
}
function yt(e, t) {
  var n = e.callbackNode;
  zS(e, t);
  var r = zl(e, e === qe ? Je : 0);
  if (r === 0)
    n !== null && Zp(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Zp(n), t === 1))
      e.tag === 0 ? Fx(Wh.bind(null, e)) : My(Wh.bind(null, e)),
        Ix(function () {
          !(ce & 6) && Or();
        }),
        (n = null);
    else {
      switch (ay(r)) {
        case 1:
          n = ad;
          break;
        case 4:
          n = ry;
          break;
        case 16:
          n = Fl;
          break;
        case 536870912:
          n = oy;
          break;
        default:
          n = Fl;
      }
      n = Ng(n, Cg.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Cg(e, t) {
  if (((Pl = -1), (Tl = 0), ce & 6)) throw Error(U(327));
  var n = e.callbackNode;
  if (jo() && e.callbackNode !== n) return null;
  var r = zl(e, e === qe ? Je : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ou(e, r);
  else {
    t = r;
    var o = ce;
    ce |= 2;
    var i = kg();
    (qe !== e || Je !== t) && ((bn = null), (Qo = $e() + 500), Wr(e, t));
    do
      try {
        aE();
        break;
      } catch (l) {
        bg(e, l);
      }
    while (1);
    wd(),
      (tu.current = i),
      (ce = o),
      je !== null ? (t = 0) : ((qe = null), (Je = 0), (t = ze));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Yc(e)), o !== 0 && ((r = o), (t = kf(e, o)))), t === 1)
    )
      throw ((n = fa), Wr(e, 0), Zn(e, r), yt(e, $e()), n);
    if (t === 6) Zn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !oE(o) &&
          ((t = ou(e, r)),
          t === 2 && ((i = Yc(e)), i !== 0 && ((r = i), (t = kf(e, i)))),
          t === 1))
      )
        throw ((n = fa), Wr(e, 0), Zn(e, r), yt(e, $e()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(U(345));
        case 2:
          $r(e, dt, bn);
          break;
        case 3:
          if (
            (Zn(e, r), (r & 130023424) === r && ((t = jd + 500 - $e()), 10 < t))
          ) {
            if (zl(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              lt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = of($r.bind(null, e, dt, bn), t);
            break;
          }
          $r(e, dt, bn);
          break;
        case 4:
          if ((Zn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - tn(r);
            (i = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~i);
          }
          if (
            ((r = o),
            (r = $e() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * rE(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = of($r.bind(null, e, dt, bn), r);
            break;
          }
          $r(e, dt, bn);
          break;
        case 5:
          $r(e, dt, bn);
          break;
        default:
          throw Error(U(329));
      }
    }
  }
  return yt(e, $e()), e.callbackNode === n ? Cg.bind(null, e) : null;
}
function kf(e, t) {
  var n = Ai;
  return (
    e.current.memoizedState.isDehydrated && (Wr(e, t).flags |= 256),
    (e = ou(e, t)),
    e !== 2 && ((t = dt), (dt = n), t !== null && Rf(t)),
    e
  );
}
function Rf(e) {
  dt === null ? (dt = e) : dt.push.apply(dt, e);
}
function oE(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!rn(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Zn(e, t) {
  for (
    t &= ~$d,
      t &= ~Au,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - tn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Wh(e) {
  if (ce & 6) throw Error(U(327));
  jo();
  var t = zl(e, 0);
  if (!(t & 1)) return yt(e, $e()), null;
  var n = ou(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Yc(e);
    r !== 0 && ((t = r), (n = kf(e, r)));
  }
  if (n === 1) throw ((n = fa), Wr(e, 0), Zn(e, t), yt(e, $e()), n);
  if (n === 6) throw Error(U(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    $r(e, dt, bn),
    yt(e, $e()),
    null
  );
}
function Id(e, t) {
  var n = ce;
  ce |= 1;
  try {
    return e(t);
  } finally {
    (ce = n), ce === 0 && ((Qo = $e() + 500), $u && Or());
  }
}
function Jr(e) {
  rr !== null && rr.tag === 0 && !(ce & 6) && jo();
  var t = ce;
  ce |= 1;
  var n = Bt.transition,
    r = he;
  try {
    if (((Bt.transition = null), (he = 1), e)) return e();
  } finally {
    (he = r), (Bt.transition = n), (ce = t), !(ce & 6) && Or();
  }
}
function Ld() {
  (Rt = Oo.current), be(Oo);
}
function Wr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), jx(n)), je !== null))
    for (n = je.return; n !== null; ) {
      var r = n;
      switch ((md(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Wl();
          break;
        case 3:
          Uo(), be(vt), be(it), kd();
          break;
        case 5:
          bd(r);
          break;
        case 4:
          Uo();
          break;
        case 13:
          be(Pe);
          break;
        case 19:
          be(Pe);
          break;
        case 10:
          Sd(r.type._context);
          break;
        case 22:
        case 23:
          Ld();
      }
      n = n.return;
    }
  if (
    ((qe = e),
    (je = e = pr(e.current, null)),
    (Je = Rt = t),
    (ze = 0),
    (fa = null),
    ($d = Au = Xr = 0),
    (dt = Ai = null),
    _r !== null)
  ) {
    for (t = 0; t < _r.length; t++)
      if (((n = _r[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = o), (r.next = a);
        }
        n.pending = r;
      }
    _r = null;
  }
  return e;
}
function bg(e, t) {
  do {
    var n = je;
    try {
      if ((wd(), (kl.current = eu), Zl)) {
        for (var r = Te.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Zl = !1;
      }
      if (
        ((Yr = 0),
        (We = Fe = Te = null),
        (Ii = !1),
        (ua = 0),
        (Dd.current = null),
        n === null || n.return === null)
      ) {
        (ze = 1), (fa = t), (je = null);
        break;
      }
      e: {
        var i = e,
          a = n.return,
          l = n,
          u = t;
        if (
          ((t = Je),
          (l.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var s = u,
            c = l,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = c.alternate;
            h
              ? ((c.updateQueue = h.updateQueue),
                (c.memoizedState = h.memoizedState),
                (c.lanes = h.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var p = Dh(a);
          if (p !== null) {
            (p.flags &= -257),
              $h(p, a, l, i, t),
              p.mode & 1 && Mh(i, s, t),
              (t = p),
              (u = s);
            var g = t.updateQueue;
            if (g === null) {
              var y = new Set();
              y.add(u), (t.updateQueue = y);
            } else g.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Mh(i, s, t), Ad();
              break e;
            }
            u = Error(U(426));
          }
        } else if (Re && l.mode & 1) {
          var w = Dh(a);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              $h(w, a, l, i, t),
              yd(Bo(u, l));
            break e;
          }
        }
        (i = u = Bo(u, l)),
          ze !== 4 && (ze = 2),
          Ai === null ? (Ai = [i]) : Ai.push(i),
          (i = a);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var d = lg(i, u, t);
              bh(i, d);
              break e;
            case 1:
              l = u;
              var v = i.type,
                m = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof v.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (fr === null || !fr.has(m))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var x = ug(i, l, t);
                bh(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Og(n);
    } catch (E) {
      (t = E), je === n && n !== null && (je = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function kg() {
  var e = tu.current;
  return (tu.current = eu), e === null ? eu : e;
}
function Ad() {
  (ze === 0 || ze === 3 || ze === 2) && (ze = 4),
    qe === null || (!(Xr & 268435455) && !(Au & 268435455)) || Zn(qe, Je);
}
function ou(e, t) {
  var n = ce;
  ce |= 2;
  var r = kg();
  (qe !== e || Je !== t) && ((bn = null), Wr(e, t));
  do
    try {
      iE();
      break;
    } catch (o) {
      bg(e, o);
    }
  while (1);
  if ((wd(), (ce = n), (tu.current = r), je !== null)) throw Error(U(261));
  return (qe = null), (Je = 0), ze;
}
function iE() {
  for (; je !== null; ) Rg(je);
}
function aE() {
  for (; je !== null && !MS(); ) Rg(je);
}
function Rg(e) {
  var t = Tg(e.alternate, e, Rt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Og(e) : (je = t),
    (Dd.current = null);
}
function Og(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Zx(n, t)), n !== null)) {
        (n.flags &= 32767), (je = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ze = 6), (je = null);
        return;
      }
    } else if (((n = Jx(n, t, Rt)), n !== null)) {
      je = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      je = t;
      return;
    }
    je = t = e;
  } while (t !== null);
  ze === 0 && (ze = 5);
}
function $r(e, t, n) {
  var r = he,
    o = Bt.transition;
  try {
    (Bt.transition = null), (he = 1), lE(e, t, n, r);
  } finally {
    (Bt.transition = o), (he = r);
  }
  return null;
}
function lE(e, t, n, r) {
  do jo();
  while (rr !== null);
  if (ce & 6) throw Error(U(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(U(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (US(e, i),
    e === qe && ((je = qe = null), (Je = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      il ||
      ((il = !0),
      Ng(Fl, function () {
        return jo(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Bt.transition), (Bt.transition = null);
    var a = he;
    he = 1;
    var l = ce;
    (ce |= 4),
      (Dd.current = null),
      tE(e, n),
      xg(n, e),
      Ox(nf),
      (Ul = !!tf),
      (nf = tf = null),
      (e.current = n),
      nE(n),
      DS(),
      (ce = l),
      (he = a),
      (Bt.transition = i);
  } else e.current = n;
  if (
    (il && ((il = !1), (rr = e), (ru = o)),
    (i = e.pendingLanes),
    i === 0 && (fr = null),
    IS(n.stateNode),
    yt(e, $e()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (nu) throw ((nu = !1), (e = Cf), (Cf = null), e);
  return (
    ru & 1 && e.tag !== 0 && jo(),
    (i = e.pendingLanes),
    i & 1 ? (e === bf ? _i++ : ((_i = 0), (bf = e))) : (_i = 0),
    Or(),
    null
  );
}
function jo() {
  if (rr !== null) {
    var e = ay(ru),
      t = Bt.transition,
      n = he;
    try {
      if (((Bt.transition = null), (he = 16 > e ? 16 : e), rr === null))
        var r = !1;
      else {
        if (((e = rr), (rr = null), (ru = 0), ce & 6)) throw Error(U(331));
        var o = ce;
        for (ce |= 4, W = e.current; W !== null; ) {
          var i = W,
            a = i.child;
          if (W.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var u = 0; u < l.length; u++) {
                var s = l[u];
                for (W = s; W !== null; ) {
                  var c = W;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Li(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (W = f);
                  else
                    for (; W !== null; ) {
                      c = W;
                      var h = c.sibling,
                        p = c.return;
                      if ((gg(c), c === s)) {
                        W = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = p), (W = h);
                        break;
                      }
                      W = p;
                    }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var y = g.child;
                if (y !== null) {
                  g.child = null;
                  do {
                    var w = y.sibling;
                    (y.sibling = null), (y = w);
                  } while (y !== null);
                }
              }
              W = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (W = a);
          else
            e: for (; W !== null; ) {
              if (((i = W), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Li(9, i, i.return);
                }
              var d = i.sibling;
              if (d !== null) {
                (d.return = i.return), (W = d);
                break e;
              }
              W = i.return;
            }
        }
        var v = e.current;
        for (W = v; W !== null; ) {
          a = W;
          var m = a.child;
          if (a.subtreeFlags & 2064 && m !== null) (m.return = a), (W = m);
          else
            e: for (a = v; W !== null; ) {
              if (((l = W), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lu(9, l);
                  }
                } catch (E) {
                  Me(l, l.return, E);
                }
              if (l === a) {
                W = null;
                break e;
              }
              var x = l.sibling;
              if (x !== null) {
                (x.return = l.return), (W = x);
                break e;
              }
              W = l.return;
            }
        }
        if (
          ((ce = o), Or(), vn && typeof vn.onPostCommitFiberRoot == "function")
        )
          try {
            vn.onPostCommitFiberRoot(Pu, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (he = n), (Bt.transition = t);
    }
  }
  return !1;
}
function qh(e, t, n) {
  (t = Bo(n, t)),
    (t = lg(e, t, 1)),
    (e = cr(e, t, 1)),
    (t = lt()),
    e !== null && (Oa(e, 1, t), yt(e, t));
}
function Me(e, t, n) {
  if (e.tag === 3) qh(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        qh(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (fr === null || !fr.has(r)))
        ) {
          (e = Bo(n, e)),
            (e = ug(t, e, 1)),
            (t = cr(t, e, 1)),
            (e = lt()),
            t !== null && (Oa(t, 1, e), yt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function uE(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = lt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    qe === e &&
      (Je & n) === n &&
      (ze === 4 || (ze === 3 && (Je & 130023424) === Je && 500 > $e() - jd)
        ? Wr(e, 0)
        : ($d |= n)),
    yt(e, t);
}
function Pg(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ga), (Ga <<= 1), !(Ga & 130023424) && (Ga = 4194304))
      : (t = 1));
  var n = lt();
  (e = Ln(e, t)), e !== null && (Oa(e, t, n), yt(e, n));
}
function sE(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Pg(e, n);
}
function cE(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(U(314));
  }
  r !== null && r.delete(t), Pg(e, n);
}
var Tg;
Tg = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || vt.current) pt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (pt = !1), Xx(e, t, n);
      pt = !!(e.flags & 131072);
    }
  else (pt = !1), Re && t.flags & 1048576 && Dy(t, Vl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ol(e, t), (e = t.pendingProps);
      var o = _o(t, it.current);
      $o(t, n), (o = Od(null, t, r, e, o, n));
      var i = Pd();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            mt(r) ? ((i = !0), ql(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Ed(t),
            (o.updater = ju),
            (t.stateNode = o),
            (o._reactInternals = t),
            df(t, r, e, n),
            (t = vf(null, t, r, !0, i, n)))
          : ((t.tag = 0), Re && i && vd(t), at(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ol(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = dE(r)),
          (e = Yt(r, e)),
          o)
        ) {
          case 0:
            t = hf(null, t, r, e, n);
            break e;
          case 1:
            t = Lh(null, t, r, e, n);
            break e;
          case 11:
            t = jh(null, t, r, e, n);
            break e;
          case 14:
            t = Ih(null, t, r, Yt(r.type, e), n);
            break e;
        }
        throw Error(U(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Yt(r, o)),
        hf(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Yt(r, o)),
        Lh(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((dg(t), e === null)) throw Error(U(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Ly(e, t),
          Xl(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Bo(Error(U(423)), t)), (t = Ah(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Bo(Error(U(424)), t)), (t = Ah(e, t, r, n, o));
            break e;
          } else
            for (
              Ot = sr(t.stateNode.containerInfo.firstChild),
                Pt = t,
                Re = !0,
                Zt = null,
                n = zy(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Fo(), r === o)) {
            t = An(e, t, n);
            break e;
          }
          at(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Uy(t),
        e === null && sf(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        rf(r, o) ? (a = null) : i !== null && rf(r, i) && (t.flags |= 32),
        fg(e, t),
        at(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && sf(t), null;
    case 13:
      return pg(e, t, n);
    case 4:
      return (
        Cd(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = zo(t, null, r, n)) : at(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Yt(r, o)),
        jh(e, t, r, o, n)
      );
    case 7:
      return at(e, t, t.pendingProps, n), t.child;
    case 8:
      return at(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return at(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          we(Gl, r._currentValue),
          (r._currentValue = a),
          i !== null)
        )
          if (rn(i.value, a)) {
            if (i.children === o.children && !vt.current) {
              t = An(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                a = i.child;
                for (var u = l.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      (u = Mn(-1, n & -n)), (u.tag = 2);
                      var s = i.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var c = s.pending;
                        c === null
                          ? (u.next = u)
                          : ((u.next = c.next), (c.next = u)),
                          (s.pending = u);
                      }
                    }
                    (i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      cf(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(U(341));
                (a.lanes |= n),
                  (l = a.alternate),
                  l !== null && (l.lanes |= n),
                  cf(a, n, t),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        at(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        $o(t, n),
        (o = Qt(o)),
        (r = r(o)),
        (t.flags |= 1),
        at(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Yt(r, t.pendingProps)),
        (o = Yt(r.type, o)),
        Ih(e, t, r, o, n)
      );
    case 15:
      return sg(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Yt(r, o)),
        Ol(e, t),
        (t.tag = 1),
        mt(r) ? ((e = !0), ql(t)) : (e = !1),
        $o(t, n),
        _y(t, r, o),
        df(t, r, o, n),
        vf(null, t, r, !0, e, n)
      );
    case 19:
      return hg(e, t, n);
    case 22:
      return cg(e, t, n);
  }
  throw Error(U(156, t.tag));
};
function Ng(e, t) {
  return ny(e, t);
}
function fE(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ut(e, t, n, r) {
  return new fE(e, t, n, r);
}
function _d(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function dE(e) {
  if (typeof e == "function") return _d(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === rd)) return 11;
    if (e === od) return 14;
  }
  return 2;
}
function pr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ut(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Nl(e, t, n, r, o, i) {
  var a = 2;
  if (((r = e), typeof e == "function")) _d(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case yo:
        return qr(n.children, o, i, t);
      case nd:
        (a = 8), (o |= 8);
        break;
      case Ic:
        return (
          (e = Ut(12, n, t, o | 2)), (e.elementType = Ic), (e.lanes = i), e
        );
      case Lc:
        return (e = Ut(13, n, t, o)), (e.elementType = Lc), (e.lanes = i), e;
      case Ac:
        return (e = Ut(19, n, t, o)), (e.elementType = Ac), (e.lanes = i), e;
      case Fm:
        return _u(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Am:
              a = 10;
              break e;
            case _m:
              a = 9;
              break e;
            case rd:
              a = 11;
              break e;
            case od:
              a = 14;
              break e;
            case Gn:
              (a = 16), (r = null);
              break e;
          }
        throw Error(U(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ut(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function qr(e, t, n, r) {
  return (e = Ut(7, e, r, t)), (e.lanes = n), e;
}
function _u(e, t, n, r) {
  return (
    (e = Ut(22, e, r, t)),
    (e.elementType = Fm),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function oc(e, t, n) {
  return (e = Ut(6, e, null, t)), (e.lanes = n), e;
}
function ic(e, t, n) {
  return (
    (t = Ut(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function pE(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Fs(0)),
    (this.expirationTimes = Fs(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Fs(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Fd(e, t, n, r, o, i, a, l, u) {
  return (
    (e = new pE(e, t, n, l, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ut(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ed(i),
    e
  );
}
function hE(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: mo,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Mg(e) {
  if (!e) return gr;
  e = e._reactInternals;
  e: {
    if (oo(e) !== e || e.tag !== 1) throw Error(U(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (mt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(U(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (mt(n)) return Ny(e, n, t);
  }
  return t;
}
function Dg(e, t, n, r, o, i, a, l, u) {
  return (
    (e = Fd(n, r, !0, e, o, i, a, l, u)),
    (e.context = Mg(null)),
    (n = e.current),
    (r = lt()),
    (o = dr(n)),
    (i = Mn(r, o)),
    (i.callback = t ?? null),
    cr(n, i, o),
    (e.current.lanes = o),
    Oa(e, o, r),
    yt(e, r),
    e
  );
}
function Fu(e, t, n, r) {
  var o = t.current,
    i = lt(),
    a = dr(o);
  return (
    (n = Mg(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Mn(i, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = cr(o, t, a)),
    e !== null && (nn(e, o, a, i), bl(e, o, a)),
    a
  );
}
function iu(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Kh(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function zd(e, t) {
  Kh(e, t), (e = e.alternate) && Kh(e, t);
}
function vE() {
  return null;
}
var $g = typeof reportError == "function" ? reportError : function (e) {};
function Ud(e) {
  this._internalRoot = e;
}
zu.prototype.render = Ud.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(U(409));
  Fu(e, t, null, null);
};
zu.prototype.unmount = Ud.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Jr(function () {
      Fu(null, e, null, null);
    }),
      (t[In] = null);
  }
};
function zu(e) {
  this._internalRoot = e;
}
zu.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = sy();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Jn.length && t !== 0 && t < Jn[n].priority; n++);
    Jn.splice(n, 0, e), n === 0 && fy(e);
  }
};
function Bd(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Uu(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Vh() {}
function mE(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var s = iu(a);
        i.call(s);
      };
    }
    var a = Dg(t, r, e, 0, null, !1, !1, "", Vh);
    return (
      (e._reactRootContainer = a),
      (e[In] = a.current),
      ra(e.nodeType === 8 ? e.parentNode : e),
      Jr(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var s = iu(u);
      l.call(s);
    };
  }
  var u = Fd(e, 0, !1, null, null, !1, !1, "", Vh);
  return (
    (e._reactRootContainer = u),
    (e[In] = u.current),
    ra(e.nodeType === 8 ? e.parentNode : e),
    Jr(function () {
      Fu(t, u, n, r);
    }),
    u
  );
}
function Bu(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var u = iu(a);
        l.call(u);
      };
    }
    Fu(t, a, e, o);
  } else a = mE(n, t, e, o, r);
  return iu(a);
}
ly = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = bi(t.pendingLanes);
        n !== 0 &&
          (ld(t, n | 1), yt(t, $e()), !(ce & 6) && ((Qo = $e() + 500), Or()));
      }
      break;
    case 13:
      Jr(function () {
        var r = Ln(e, 1);
        if (r !== null) {
          var o = lt();
          nn(r, e, 1, o);
        }
      }),
        zd(e, 1);
  }
};
ud = function (e) {
  if (e.tag === 13) {
    var t = Ln(e, 134217728);
    if (t !== null) {
      var n = lt();
      nn(t, e, 134217728, n);
    }
    zd(e, 134217728);
  }
};
uy = function (e) {
  if (e.tag === 13) {
    var t = dr(e),
      n = Ln(e, t);
    if (n !== null) {
      var r = lt();
      nn(n, e, t, r);
    }
    zd(e, t);
  }
};
sy = function () {
  return he;
};
cy = function (e, t) {
  var n = he;
  try {
    return (he = e), t();
  } finally {
    he = n;
  }
};
Kc = function (e, t, n) {
  switch (t) {
    case "input":
      if ((zc(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Du(r);
            if (!o) throw Error(U(90));
            Um(r), zc(r, o);
          }
        }
      }
      break;
    case "textarea":
      Qm(e, n);
      break;
    case "select":
      (t = n.value), t != null && To(e, !!n.multiple, t, !1);
  }
};
Ym = Id;
Xm = Jr;
var yE = { usingClientEntryPoint: !1, Events: [Ta, xo, Du, Vm, Gm, Id] },
  mi = {
    findFiberByHostInstance: Ar,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  gE = {
    bundleType: mi.bundleType,
    version: mi.version,
    rendererPackageName: mi.rendererPackageName,
    rendererConfig: mi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Un.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ey(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: mi.findFiberByHostInstance || vE,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var al = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!al.isDisabled && al.supportsFiber)
    try {
      (Pu = al.inject(gE)), (vn = al);
    } catch {}
}
$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yE;
$t.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Bd(t)) throw Error(U(200));
  return hE(e, t, null, n);
};
$t.createRoot = function (e, t) {
  if (!Bd(e)) throw Error(U(299));
  var n = !1,
    r = "",
    o = $g;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Fd(e, 1, !1, null, null, n, !1, r, o)),
    (e[In] = t.current),
    ra(e.nodeType === 8 ? e.parentNode : e),
    new Ud(t)
  );
};
$t.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(U(188))
      : ((e = Object.keys(e).join(",")), Error(U(268, e)));
  return (e = ey(t)), (e = e === null ? null : e.stateNode), e;
};
$t.flushSync = function (e) {
  return Jr(e);
};
$t.hydrate = function (e, t, n) {
  if (!Uu(t)) throw Error(U(200));
  return Bu(null, e, t, !0, n);
};
$t.hydrateRoot = function (e, t, n) {
  if (!Bd(e)) throw Error(U(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    a = $g;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Dg(t, null, e, 1, n ?? null, o, !1, i, a)),
    (e[In] = t.current),
    ra(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new zu(t);
};
$t.render = function (e, t, n) {
  if (!Uu(t)) throw Error(U(200));
  return Bu(null, e, t, !1, n);
};
$t.unmountComponentAtNode = function (e) {
  if (!Uu(e)) throw Error(U(40));
  return e._reactRootContainer
    ? (Jr(function () {
        Bu(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[In] = null);
        });
      }),
      !0)
    : !1;
};
$t.unstable_batchedUpdates = Id;
$t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Uu(n)) throw Error(U(200));
  if (e == null || e._reactInternals === void 0) throw Error(U(38));
  return Bu(e, t, n, !1, r);
};
$t.version = "18.2.0-next-9e3b772b8-20220608";
function jg() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jg);
    } catch {}
}
jg(), (Dm.exports = $t);
var Qd = Dm.exports;
const zr = ka(Qd);
/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ue() {
  return (
    (ue = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ue.apply(this, arguments)
  );
}
var Ee;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Ee || (Ee = {}));
const Gh = "popstate";
function Ig(e) {
  e === void 0 && (e = {});
  let { initialEntries: t = ["/"], initialIndex: n, v5Compat: r = !1 } = e,
    o;
  o = t.map((p, g) =>
    c(p, typeof p == "string" ? null : p.state, g === 0 ? "default" : void 0)
  );
  let i = u(n ?? o.length - 1),
    a = Ee.Pop,
    l = null;
  function u(p) {
    return Math.min(Math.max(p, 0), o.length - 1);
  }
  function s() {
    return o[i];
  }
  function c(p, g, y) {
    g === void 0 && (g = null);
    let w = Zr(o ? s().pathname : "/", p, g, y);
    return (
      _n(
        w.pathname.charAt(0) === "/",
        "relative pathnames are not supported in memory history: " +
          JSON.stringify(p)
      ),
      w
    );
  }
  function f(p) {
    return typeof p == "string" ? p : on(p);
  }
  return {
    get index() {
      return i;
    },
    get action() {
      return a;
    },
    get location() {
      return s();
    },
    createHref: f,
    createURL(p) {
      return new URL(f(p), "http://localhost");
    },
    encodeLocation(p) {
      let g = typeof p == "string" ? Kt(p) : p;
      return {
        pathname: g.pathname || "",
        search: g.search || "",
        hash: g.hash || "",
      };
    },
    push(p, g) {
      a = Ee.Push;
      let y = c(p, g);
      (i += 1),
        o.splice(i, o.length, y),
        r && l && l({ action: a, location: y, delta: 1 });
    },
    replace(p, g) {
      a = Ee.Replace;
      let y = c(p, g);
      (o[i] = y), r && l && l({ action: a, location: y, delta: 0 });
    },
    go(p) {
      a = Ee.Pop;
      let g = u(i + p),
        y = o[g];
      (i = g), l && l({ action: a, location: y, delta: p });
    },
    listen(p) {
      return (
        (l = p),
        () => {
          l = null;
        }
      );
    },
  };
}
function Lg(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: a, hash: l } = r.location;
    return Zr(
      "",
      { pathname: i, search: a, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : on(o);
  }
  return _g(t, n, null, e);
}
function Ag(e) {
  e === void 0 && (e = {});
  function t(o, i) {
    let {
      pathname: a = "/",
      search: l = "",
      hash: u = "",
    } = Kt(o.location.hash.substr(1));
    return Zr(
      "",
      { pathname: a, search: l, hash: u },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(o, i) {
    let a = o.document.querySelector("base"),
      l = "";
    if (a && a.getAttribute("href")) {
      let u = o.location.href,
        s = u.indexOf("#");
      l = s === -1 ? u : u.slice(0, s);
    }
    return l + "#" + (typeof i == "string" ? i : on(i));
  }
  function r(o, i) {
    _n(
      o.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(i) +
        ")"
    );
  }
  return _g(t, n, r, e);
}
function X(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function _n(e, t) {
  if (!e)
    try {
      throw new Error(t);
    } catch {}
}
function wE() {
  return Math.random().toString(36).substr(2, 8);
}
function Yh(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Zr(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ue(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Kt(t) : t,
      { state: n, key: (t && t.key) || r || wE() }
    )
  );
}
function on(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Kt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function _g(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    a = o.history,
    l = Ee.Pop,
    u = null,
    s = c();
  s == null && ((s = 0), a.replaceState(ue({}, a.state, { idx: s }), ""));
  function c() {
    return (a.state || { idx: null }).idx;
  }
  function f() {
    l = Ee.Pop;
    let w = c(),
      d = w == null ? null : w - s;
    (s = w), u && u({ action: l, location: y.location, delta: d });
  }
  function h(w, d) {
    l = Ee.Push;
    let v = Zr(y.location, w, d);
    n && n(v, w), (s = c() + 1);
    let m = Yh(v, s),
      x = y.createHref(v);
    try {
      a.pushState(m, "", x);
    } catch {
      o.location.assign(x);
    }
    i && u && u({ action: l, location: y.location, delta: 1 });
  }
  function p(w, d) {
    l = Ee.Replace;
    let v = Zr(y.location, w, d);
    n && n(v, w), (s = c());
    let m = Yh(v, s),
      x = y.createHref(v);
    a.replaceState(m, "", x),
      i && u && u({ action: l, location: y.location, delta: 0 });
  }
  function g(w) {
    let d = o.location.origin !== "null" ? o.location.origin : o.location.href,
      v = typeof w == "string" ? w : on(w);
    return (
      X(
        d,
        "No window.location.(origin|href) available to create URL for href: " +
          v
      ),
      new URL(v, d)
    );
  }
  let y = {
    get action() {
      return l;
    },
    get location() {
      return e(o, a);
    },
    listen(w) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Gh, f),
        (u = w),
        () => {
          o.removeEventListener(Gh, f), (u = null);
        }
      );
    },
    createHref(w) {
      return t(o, w);
    },
    createURL: g,
    encodeLocation(w) {
      let d = g(w);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: h,
    replace: p,
    go(w) {
      return a.go(w);
    },
  };
  return y;
}
var _e;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(_e || (_e = {}));
const SE = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function xE(e) {
  return e.index === !0;
}
function Of(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((o, i) => {
      let a = [...n, i],
        l = typeof o.id == "string" ? o.id : a.join("-");
      if (
        (X(
          o.index !== !0 || !o.children,
          "Cannot specify children on an index route"
        ),
        X(
          !r[l],
          'Found a route id collision on id "' +
            l +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        xE(o))
      ) {
        let u = ue({}, o, t(o), { id: l });
        return (r[l] = u), u;
      } else {
        let u = ue({}, o, t(o), { id: l, children: void 0 });
        return (
          (r[l] = u), o.children && (u.children = Of(o.children, t, a, r)), u
        );
      }
    })
  );
}
function Ur(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Kt(t) : t,
    o = wr(r.pathname || "/", n);
  if (o == null) return null;
  let i = Fg(e);
  EE(i);
  let a = null;
  for (let l = 0; a == null && l < i.length; ++l) a = ME(i[l], jE(o));
  return a;
}
function Fg(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, a, l) => {
    let u = {
      relativePath: l === void 0 ? i.path || "" : l,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: a,
      route: i,
    };
    u.relativePath.startsWith("/") &&
      (X(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let s = yn([r, u.relativePath]),
      c = n.concat(u);
    i.children &&
      i.children.length > 0 &&
      (X(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + s + '".')
      ),
      Fg(i.children, t, c, s)),
      !(i.path == null && !i.index) &&
        t.push({ path: s, score: TE(s, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, a) => {
      var l;
      if (i.path === "" || !((l = i.path) != null && l.includes("?"))) o(i, a);
      else for (let u of zg(i.path)) o(i, a, u);
    }),
    t
  );
}
function zg(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let a = zg(r.join("/")),
    l = [];
  return (
    l.push(...a.map((u) => (u === "" ? i : [i, u].join("/")))),
    o && l.push(...a),
    l.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function EE(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : NE(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const CE = /^:\w+$/,
  bE = 3,
  kE = 2,
  RE = 1,
  OE = 10,
  PE = -2,
  Xh = (e) => e === "*";
function TE(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Xh) && (r += PE),
    t && (r += kE),
    n
      .filter((o) => !Xh(o))
      .reduce((o, i) => o + (CE.test(i) ? bE : i === "" ? RE : OE), r)
  );
}
function NE(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function ME(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let a = 0; a < n.length; ++a) {
    let l = n[a],
      u = a === n.length - 1,
      s = o === "/" ? t : t.slice(o.length) || "/",
      c = Hd(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        s
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let f = l.route;
    i.push({
      params: r,
      pathname: yn([o, c.pathname]),
      pathnameBase: AE(yn([o, c.pathnameBase])),
      route: f,
    }),
      c.pathnameBase !== "/" && (o = yn([o, c.pathnameBase]));
  }
  return i;
}
function DE(e, t) {
  t === void 0 && (t = {});
  let n = e;
  n.endsWith("*") &&
    n !== "*" &&
    !n.endsWith("/*") &&
    (_n(
      !1,
      'Route path "' +
        n +
        '" will be treated as if it were ' +
        ('"' + n.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + n.replace(/\*$/, "/*") + '".')
    ),
    (n = n.replace(/\*$/, "/*")));
  const r = n.startsWith("/") ? "/" : "",
    o = n
      .split(/\/+/)
      .map((i, a, l) => {
        if (a === l.length - 1 && i === "*") return t["*"];
        const s = i.match(/^:(\w+)(\??)$/);
        if (s) {
          const [, c, f] = s;
          let h = t[c];
          return f === "?"
            ? h ?? ""
            : (h == null && X(!1, 'Missing ":' + c + '" param'), h);
        }
        return i.replace(/\?$/g, "");
      })
      .filter((i) => !!i);
  return r + o.join("/");
}
function Hd(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = $E(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    a = i.replace(/(.)\/+$/, "$1"),
    l = o.slice(1);
  return {
    params: r.reduce((s, c, f) => {
      if (c === "*") {
        let h = l[f] || "";
        a = i.slice(0, i.length - h.length).replace(/(.)\/+$/, "$1");
      }
      return (s[c] = IE(l[f] || "", c)), s;
    }, {}),
    pathname: i,
    pathnameBase: a,
    pattern: e,
  };
}
function $E(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    _n(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (a, l) => (r.push(l), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function jE(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      _n(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function IE(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      _n(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function wr(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Ug(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? Kt(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : LE(n, t)) : t,
    search: _E(r),
    hash: FE(o),
  };
}
function LE(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function ac(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Ma(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Qu(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = Kt(e))
    : ((o = ue({}, e)),
      X(
        !o.pathname || !o.pathname.includes("?"),
        ac("?", "pathname", "search", o)
      ),
      X(
        !o.pathname || !o.pathname.includes("#"),
        ac("#", "pathname", "hash", o)
      ),
      X(!o.search || !o.search.includes("#"), ac("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    a = i ? "/" : o.pathname,
    l;
  if (r || a == null) l = n;
  else {
    let f = t.length - 1;
    if (a.startsWith("..")) {
      let h = a.split("/");
      for (; h[0] === ".."; ) h.shift(), (f -= 1);
      o.pathname = h.join("/");
    }
    l = f >= 0 ? t[f] : "/";
  }
  let u = Ug(o, l),
    s = a && a !== "/" && a.endsWith("/"),
    c = (i || a === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (s || c) && (u.pathname += "/"), u;
}
const yn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  AE = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  _E = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  FE = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e),
  zE = function (t, n) {
    n === void 0 && (n = {});
    let r = typeof n == "number" ? { status: n } : n,
      o = new Headers(r.headers);
    return (
      o.has("Content-Type") ||
        o.set("Content-Type", "application/json; charset=utf-8"),
      new Response(JSON.stringify(t), ue({}, r, { headers: o }))
    );
  };
class au extends Error {}
class UE {
  constructor(t, n) {
    (this.pendingKeysSet = new Set()),
      (this.subscribers = new Set()),
      (this.deferredKeys = []),
      X(
        t && typeof t == "object" && !Array.isArray(t),
        "defer() only accepts plain objects"
      );
    let r;
    (this.abortPromise = new Promise((i, a) => (r = a))),
      (this.controller = new AbortController());
    let o = () => r(new au("Deferred data aborted"));
    (this.unlistenAbortSignal = () =>
      this.controller.signal.removeEventListener("abort", o)),
      this.controller.signal.addEventListener("abort", o),
      (this.data = Object.entries(t).reduce((i, a) => {
        let [l, u] = a;
        return Object.assign(i, { [l]: this.trackPromise(l, u) });
      }, {})),
      this.done && this.unlistenAbortSignal(),
      (this.init = n);
  }
  trackPromise(t, n) {
    if (!(n instanceof Promise)) return n;
    this.deferredKeys.push(t), this.pendingKeysSet.add(t);
    let r = Promise.race([n, this.abortPromise]).then(
      (o) => this.onSettle(r, t, null, o),
      (o) => this.onSettle(r, t, o)
    );
    return (
      r.catch(() => {}),
      Object.defineProperty(r, "_tracked", { get: () => !0 }),
      r
    );
  }
  onSettle(t, n, r, o) {
    return this.controller.signal.aborted && r instanceof au
      ? (this.unlistenAbortSignal(),
        Object.defineProperty(t, "_error", { get: () => r }),
        Promise.reject(r))
      : (this.pendingKeysSet.delete(n),
        this.done && this.unlistenAbortSignal(),
        r
          ? (Object.defineProperty(t, "_error", { get: () => r }),
            this.emit(!1, n),
            Promise.reject(r))
          : (Object.defineProperty(t, "_data", { get: () => o }),
            this.emit(!1, n),
            o));
  }
  emit(t, n) {
    this.subscribers.forEach((r) => r(t, n));
  }
  subscribe(t) {
    return this.subscribers.add(t), () => this.subscribers.delete(t);
  }
  cancel() {
    this.controller.abort(),
      this.pendingKeysSet.forEach((t, n) => this.pendingKeysSet.delete(n)),
      this.emit(!0);
  }
  async resolveData(t) {
    let n = !1;
    if (!this.done) {
      let r = () => this.cancel();
      t.addEventListener("abort", r),
        (n = await new Promise((o) => {
          this.subscribe((i) => {
            t.removeEventListener("abort", r), (i || this.done) && o(i);
          });
        }));
    }
    return n;
  }
  get done() {
    return this.pendingKeysSet.size === 0;
  }
  get unwrappedData() {
    return (
      X(
        this.data !== null && this.done,
        "Can only unwrap data on initialized and settled deferreds"
      ),
      Object.entries(this.data).reduce((t, n) => {
        let [r, o] = n;
        return Object.assign(t, { [r]: QE(o) });
      }, {})
    );
  }
  get pendingKeys() {
    return Array.from(this.pendingKeysSet);
  }
}
function BE(e) {
  return e instanceof Promise && e._tracked === !0;
}
function QE(e) {
  if (!BE(e)) return e;
  if (e._error) throw e._error;
  return e._data;
}
const HE = function (t, n) {
    n === void 0 && (n = {});
    let r = typeof n == "number" ? { status: n } : n;
    return new UE(t, r);
  },
  WE = function (t, n) {
    n === void 0 && (n = 302);
    let r = n;
    typeof r == "number"
      ? (r = { status: r })
      : typeof r.status > "u" && (r.status = 302);
    let o = new Headers(r.headers);
    return o.set("Location", t), new Response(null, ue({}, r, { headers: o }));
  };
class Wd {
  constructor(t, n, r, o) {
    o === void 0 && (o = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = o),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function qd(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Bg = ["post", "put", "patch", "delete"],
  qE = new Set(Bg),
  KE = ["get", ...Bg],
  VE = new Set(KE),
  GE = new Set([301, 302, 303, 307, 308]),
  YE = new Set([307, 308]),
  lc = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  XE = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  Jh = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Qg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Hg =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  JE = !Hg,
  ZE = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary });
function Kd(e) {
  X(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let t;
  if (e.mapRouteProperties) t = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let $ = e.detectErrorBoundary;
    t = (j) => ({ hasErrorBoundary: $(j) });
  } else t = ZE;
  let n = {},
    r = Of(e.routes, t, void 0, n),
    o,
    i = e.basename || "/",
    a = ue({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, e.future),
    l = null,
    u = new Set(),
    s = null,
    c = null,
    f = null,
    h = e.hydrationData != null,
    p = Ur(r, e.history.location, i),
    g = null;
  if (p == null) {
    let $ = Xt(404, { pathname: e.history.location.pathname }),
      { matches: j, route: F } = iv(r);
    (p = j), (g = { [F.id]: $ });
  }
  let y =
      !p.some(($) => $.route.lazy) &&
      (!p.some(($) => $.route.loader) || e.hydrationData != null),
    w,
    d = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: p,
      initialized: y,
      navigation: lc,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || g,
      fetchers: new Map(),
      blockers: new Map(),
    },
    v = Ee.Pop,
    m = !1,
    x,
    E = !1,
    C = !1,
    b = [],
    k = [],
    P = new Map(),
    R = 0,
    T = -1,
    N = new Map(),
    M = new Set(),
    I = new Map(),
    A = new Map(),
    z = new Map(),
    B = !1;
  function D() {
    return (
      (l = e.history.listen(($) => {
        let { action: j, location: F, delta: K } = $;
        if (B) {
          B = !1;
          return;
        }
        _n(
          z.size === 0 || K != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let V = so({
          currentLocation: d.location,
          nextLocation: F,
          historyAction: j,
        });
        if (V && K != null) {
          (B = !0),
            e.history.go(K * -1),
            Mr(V, {
              state: "blocked",
              location: F,
              proceed() {
                Mr(V, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: F,
                }),
                  e.history.go(K);
              },
              reset() {
                Ae(V), Q({ blockers: new Map(w.state.blockers) });
              },
            });
          return;
        }
        return H(j, F);
      })),
      d.initialized || H(Ee.Pop, d.location),
      w
    );
  }
  function _() {
    l && l(),
      u.clear(),
      x && x.abort(),
      d.fetchers.forEach(($, j) => sn(j)),
      d.blockers.forEach(($, j) => Ae(j));
  }
  function L($) {
    return u.add($), () => u.delete($);
  }
  function Q($) {
    (d = ue({}, d, $)), u.forEach((j) => j(d));
  }
  function q($, j) {
    var F, K;
    let V =
        d.actionData != null &&
        d.navigation.formMethod != null &&
        kn(d.navigation.formMethod) &&
        d.navigation.state === "loading" &&
        ((F = $.state) == null ? void 0 : F._isRedirect) !== !0,
      te;
    j.actionData
      ? Object.keys(j.actionData).length > 0
        ? (te = j.actionData)
        : (te = null)
      : V
      ? (te = d.actionData)
      : (te = null);
    let re = j.loaderData
      ? ov(d.loaderData, j.loaderData, j.matches || [], j.errors)
      : d.loaderData;
    for (let [G] of z) Ae(G);
    let Z =
      m === !0 ||
      (d.navigation.formMethod != null &&
        kn(d.navigation.formMethod) &&
        ((K = $.state) == null ? void 0 : K._isRedirect) !== !0);
    o && ((r = o), (o = void 0)),
      Q(
        ue({}, j, {
          actionData: te,
          loaderData: re,
          historyAction: v,
          location: $,
          initialized: !0,
          navigation: lc,
          revalidation: "idle",
          restoreScrollPosition: li($, j.matches || d.matches),
          preventScrollReset: Z,
          blockers: new Map(d.blockers),
        })
      ),
      E ||
        v === Ee.Pop ||
        (v === Ee.Push
          ? e.history.push($, $.state)
          : v === Ee.Replace && e.history.replace($, $.state)),
      (v = Ee.Pop),
      (m = !1),
      (E = !1),
      (C = !1),
      (b = []),
      (k = []);
  }
  async function Y($, j) {
    if (typeof $ == "number") {
      e.history.go($);
      return;
    }
    let F = Pf(
        d.location,
        d.matches,
        i,
        a.v7_prependBasename,
        $,
        j == null ? void 0 : j.fromRouteId,
        j == null ? void 0 : j.relative
      ),
      {
        path: K,
        submission: V,
        error: te,
      } = Zh(a.v7_normalizeFormMethod, !1, F, j),
      re = d.location,
      Z = Zr(d.location, K, j && j.state);
    Z = ue({}, Z, e.history.encodeLocation(Z));
    let G = j && j.replace != null ? j.replace : void 0,
      pe = Ee.Push;
    G === !0
      ? (pe = Ee.Replace)
      : G === !1 ||
        (V != null &&
          kn(V.formMethod) &&
          V.formAction === d.location.pathname + d.location.search &&
          (pe = Ee.Replace));
    let me =
        j && "preventScrollReset" in j ? j.preventScrollReset === !0 : void 0,
      et = so({ currentLocation: re, nextLocation: Z, historyAction: pe });
    if (et) {
      Mr(et, {
        state: "blocked",
        location: Z,
        proceed() {
          Mr(et, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: Z,
          }),
            Y($, j);
        },
        reset() {
          Ae(et), Q({ blockers: new Map(d.blockers) });
        },
      });
      return;
    }
    return await H(pe, Z, {
      submission: V,
      pendingError: te,
      preventScrollReset: me,
      replace: j && j.replace,
    });
  }
  function J() {
    if (
      (de(),
      Q({ revalidation: "loading" }),
      d.navigation.state !== "submitting")
    ) {
      if (d.navigation.state === "idle") {
        H(d.historyAction, d.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      H(v || d.historyAction, d.navigation.location, {
        overrideNavigation: d.navigation,
      });
    }
  }
  async function H($, j, F) {
    x && x.abort(),
      (x = null),
      (v = $),
      (E = (F && F.startUninterruptedRevalidation) === !0),
      za(d.location, d.matches),
      (m = (F && F.preventScrollReset) === !0);
    let K = o || r,
      V = F && F.overrideNavigation,
      te = Ur(K, j, i);
    if (!te) {
      let Qe = Xt(404, { pathname: j.pathname }),
        { matches: He, route: Lt } = iv(K);
      co(), q(j, { matches: He, loaderData: {}, errors: { [Lt.id]: Qe } });
      return;
    }
    if (
      d.initialized &&
      oC(d.location, j) &&
      !(F && F.submission && kn(F.submission.formMethod))
    ) {
      q(j, { matches: te });
      return;
    }
    x = new AbortController();
    let re = gi(e.history, j, x.signal, F && F.submission),
      Z,
      G;
    if (F && F.pendingError) G = { [Po(te).route.id]: F.pendingError };
    else if (F && F.submission && kn(F.submission.formMethod)) {
      let Qe = await ee(re, j, F.submission, te, { replace: F.replace });
      if (Qe.shortCircuited) return;
      (Z = Qe.pendingActionData),
        (G = Qe.pendingActionError),
        (V = ue({ state: "loading", location: j }, F.submission)),
        (re = new Request(re.url, { signal: re.signal }));
    }
    let {
      shortCircuited: pe,
      loaderData: me,
      errors: et,
    } = await le(
      re,
      j,
      te,
      V,
      F && F.submission,
      F && F.fetcherSubmission,
      F && F.replace,
      Z,
      G
    );
    pe ||
      ((x = null),
      q(
        j,
        ue({ matches: te }, Z ? { actionData: Z } : {}, {
          loaderData: me,
          errors: et,
        })
      ));
  }
  async function ee($, j, F, K, V) {
    de();
    let te = ue({ state: "submitting", location: j }, F);
    Q({ navigation: te });
    let re,
      Z = Tf(K, j);
    if (!Z.route.action && !Z.route.lazy)
      re = {
        type: _e.error,
        error: Xt(405, {
          method: $.method,
          pathname: j.pathname,
          routeId: Z.route.id,
        }),
      };
    else if (((re = await yi("action", $, Z, K, n, t, i)), $.signal.aborted))
      return { shortCircuited: !0 };
    if (Io(re)) {
      let G;
      return (
        V && V.replace != null
          ? (G = V.replace)
          : (G = re.location === d.location.pathname + d.location.search),
        await oe(d, re, { submission: F, replace: G }),
        { shortCircuited: !0 }
      );
    }
    if (Fi(re)) {
      let G = Po(K, Z.route.id);
      return (
        (V && V.replace) !== !0 && (v = Ee.Push),
        {
          pendingActionData: {},
          pendingActionError: { [G.route.id]: re.error },
        }
      );
    }
    if (Br(re)) throw Xt(400, { type: "defer-action" });
    return { pendingActionData: { [Z.route.id]: re.data } };
  }
  async function le($, j, F, K, V, te, re, Z, G) {
    let pe = K;
    pe ||
      (pe = ue(
        {
          state: "loading",
          location: j,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        },
        V
      ));
    let me =
        V || te
          ? V || te
          : pe.formMethod && pe.formAction && pe.formData && pe.formEncType
          ? {
              formMethod: pe.formMethod,
              formAction: pe.formAction,
              formData: pe.formData,
              formEncType: pe.formEncType,
            }
          : void 0,
      et = o || r,
      [Qe, He] = ev(e.history, d, F, me, j, C, b, k, I, et, i, Z, G);
    if (
      (co(
        (Oe) =>
          !(F && F.some((At) => At.route.id === Oe)) ||
          (Qe && Qe.some((At) => At.route.id === Oe))
      ),
      Qe.length === 0 && He.length === 0)
    ) {
      let Oe = Wn();
      return (
        q(
          j,
          ue(
            { matches: F, loaderData: {}, errors: G || null },
            Z ? { actionData: Z } : {},
            Oe ? { fetchers: new Map(d.fetchers) } : {}
          )
        ),
        { shortCircuited: !0 }
      );
    }
    if (!E) {
      He.forEach((At) => {
        let fo = d.fetchers.get(At.key),
          Ds = {
            state: "loading",
            data: fo && fo.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            " _hasFetcherDoneAnything ": !0,
          };
        d.fetchers.set(At.key, Ds);
      });
      let Oe = Z || d.actionData;
      Q(
        ue(
          { navigation: pe },
          Oe
            ? Object.keys(Oe).length === 0
              ? { actionData: null }
              : { actionData: Oe }
            : {},
          He.length > 0 ? { fetchers: new Map(d.fetchers) } : {}
        )
      );
    }
    (T = ++R),
      He.forEach((Oe) => {
        Oe.controller && P.set(Oe.key, Oe.controller);
      });
    let Lt = () => He.forEach((Oe) => ft(Oe.key));
    x && x.signal.addEventListener("abort", Lt);
    let {
      results: ui,
      loaderResults: Ps,
      fetcherResults: Ua,
    } = await Le(d.matches, F, Qe, He, $);
    if ($.signal.aborted) return { shortCircuited: !0 };
    x && x.signal.removeEventListener("abort", Lt),
      He.forEach((Oe) => P.delete(Oe.key));
    let qn = av(ui);
    if (qn) return await oe(d, qn, { replace: re }), { shortCircuited: !0 };
    let { loaderData: Ba, errors: Ts } = rv(d, F, Qe, Ps, G, He, Ua, A);
    A.forEach((Oe, At) => {
      Oe.subscribe((fo) => {
        (fo || Oe.done) && A.delete(At);
      });
    });
    let Ns = Wn(),
      Ms = Ct(T),
      Qa = Ns || Ms || He.length > 0;
    return ue(
      { loaderData: Ba, errors: Ts },
      Qa ? { fetchers: new Map(d.fetchers) } : {}
    );
  }
  function Se($) {
    return d.fetchers.get($) || XE;
  }
  function Ve($, j, F, K) {
    if (JE)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    P.has($) && ft($);
    let V = o || r,
      te = Pf(
        d.location,
        d.matches,
        i,
        a.v7_prependBasename,
        F,
        j,
        K == null ? void 0 : K.relative
      ),
      re = Ur(V, te, i);
    if (!re) {
      Qn($, j, Xt(404, { pathname: te }));
      return;
    }
    let { path: Z, submission: G } = Zh(a.v7_normalizeFormMethod, !0, te, K),
      pe = Tf(re, Z);
    if (((m = (K && K.preventScrollReset) === !0), G && kn(G.formMethod))) {
      Ue($, j, Z, pe, re, G);
      return;
    }
    I.set($, { routeId: j, path: Z }), Be($, j, Z, pe, re, G);
  }
  async function Ue($, j, F, K, V, te) {
    if ((de(), I.delete($), !K.route.action && !K.route.lazy)) {
      let bt = Xt(405, { method: te.formMethod, pathname: F, routeId: j });
      Qn($, j, bt);
      return;
    }
    let re = d.fetchers.get($),
      Z = ue({ state: "submitting" }, te, {
        data: re && re.data,
        " _hasFetcherDoneAnything ": !0,
      });
    d.fetchers.set($, Z), Q({ fetchers: new Map(d.fetchers) });
    let G = new AbortController(),
      pe = gi(e.history, F, G.signal, te);
    P.set($, G);
    let me = await yi("action", pe, K, V, n, t, i);
    if (pe.signal.aborted) {
      P.get($) === G && P.delete($);
      return;
    }
    if (Io(me)) {
      P.delete($), M.add($);
      let bt = ue({ state: "loading" }, te, {
        data: void 0,
        " _hasFetcherDoneAnything ": !0,
      });
      return (
        d.fetchers.set($, bt),
        Q({ fetchers: new Map(d.fetchers) }),
        oe(d, me, { submission: te, isFetchActionRedirect: !0 })
      );
    }
    if (Fi(me)) {
      Qn($, j, me.error);
      return;
    }
    if (Br(me)) throw Xt(400, { type: "defer-action" });
    let et = d.navigation.location || d.location,
      Qe = gi(e.history, et, G.signal),
      He = o || r,
      Lt =
        d.navigation.state !== "idle"
          ? Ur(He, d.navigation.location, i)
          : d.matches;
    X(Lt, "Didn't find any matches after fetcher action");
    let ui = ++R;
    N.set($, ui);
    let Ps = ue({ state: "loading", data: me.data }, te, {
      " _hasFetcherDoneAnything ": !0,
    });
    d.fetchers.set($, Ps);
    let [Ua, qn] = ev(
      e.history,
      d,
      Lt,
      te,
      et,
      C,
      b,
      k,
      I,
      He,
      i,
      { [K.route.id]: me.data },
      void 0
    );
    qn
      .filter((bt) => bt.key !== $)
      .forEach((bt) => {
        let $s = bt.key,
          zp = d.fetchers.get($s),
          Kw = {
            state: "loading",
            data: zp && zp.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            " _hasFetcherDoneAnything ": !0,
          };
        d.fetchers.set($s, Kw), bt.controller && P.set($s, bt.controller);
      }),
      Q({ fetchers: new Map(d.fetchers) });
    let Ba = () => qn.forEach((bt) => ft(bt.key));
    G.signal.addEventListener("abort", Ba);
    let {
      results: Ts,
      loaderResults: Ns,
      fetcherResults: Ms,
    } = await Le(d.matches, Lt, Ua, qn, Qe);
    if (G.signal.aborted) return;
    G.signal.removeEventListener("abort", Ba),
      N.delete($),
      P.delete($),
      qn.forEach((bt) => P.delete(bt.key));
    let Qa = av(Ts);
    if (Qa) return oe(d, Qa);
    let { loaderData: Oe, errors: At } = rv(
        d,
        d.matches,
        Ua,
        Ns,
        void 0,
        qn,
        Ms,
        A
      ),
      fo = {
        state: "idle",
        data: me.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        " _hasFetcherDoneAnything ": !0,
      };
    d.fetchers.set($, fo);
    let Ds = Ct(ui);
    d.navigation.state === "loading" && ui > T
      ? (X(v, "Expected pending action"),
        x && x.abort(),
        q(d.navigation.location, {
          matches: Lt,
          loaderData: Oe,
          errors: At,
          fetchers: new Map(d.fetchers),
        }))
      : (Q(
          ue(
            { errors: At, loaderData: ov(d.loaderData, Oe, Lt, At) },
            Ds ? { fetchers: new Map(d.fetchers) } : {}
          )
        ),
        (C = !1));
  }
  async function Be($, j, F, K, V, te) {
    let re = d.fetchers.get($),
      Z = ue(
        {
          state: "loading",
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        },
        te,
        { data: re && re.data, " _hasFetcherDoneAnything ": !0 }
      );
    d.fetchers.set($, Z), Q({ fetchers: new Map(d.fetchers) });
    let G = new AbortController(),
      pe = gi(e.history, F, G.signal);
    P.set($, G);
    let me = await yi("loader", pe, K, V, n, t, i);
    if (
      (Br(me) && (me = (await Vg(me, pe.signal, !0)) || me),
      P.get($) === G && P.delete($),
      pe.signal.aborted)
    )
      return;
    if (Io(me)) {
      M.add($), await oe(d, me);
      return;
    }
    if (Fi(me)) {
      let Qe = Po(d.matches, j);
      d.fetchers.delete($),
        Q({
          fetchers: new Map(d.fetchers),
          errors: { [Qe.route.id]: me.error },
        });
      return;
    }
    X(!Br(me), "Unhandled fetcher deferred data");
    let et = {
      state: "idle",
      data: me.data,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      " _hasFetcherDoneAnything ": !0,
    };
    d.fetchers.set($, et), Q({ fetchers: new Map(d.fetchers) });
  }
  async function oe($, j, F) {
    var K;
    let {
      submission: V,
      replace: te,
      isFetchActionRedirect: re,
    } = F === void 0 ? {} : F;
    j.revalidate && (C = !0);
    let Z = Zr(
      $.location,
      j.location,
      ue({ _isRedirect: !0 }, re ? { _isFetchActionRedirect: !0 } : {})
    );
    if (
      (X(Z, "Expected a location on the redirect navigation"),
      Qg.test(j.location) &&
        Hg &&
        typeof ((K = window) == null ? void 0 : K.location) < "u")
    ) {
      let He = e.history.createURL(j.location),
        Lt = wr(He.pathname, i) == null;
      if (window.location.origin !== He.origin || Lt) {
        te
          ? window.location.replace(j.location)
          : window.location.assign(j.location);
        return;
      }
    }
    x = null;
    let G = te === !0 ? Ee.Replace : Ee.Push,
      {
        formMethod: pe,
        formAction: me,
        formEncType: et,
        formData: Qe,
      } = $.navigation;
    !V &&
      pe &&
      me &&
      Qe &&
      et &&
      (V = { formMethod: pe, formAction: me, formEncType: et, formData: Qe }),
      YE.has(j.status) && V && kn(V.formMethod)
        ? await H(G, Z, {
            submission: ue({}, V, { formAction: j.location }),
            preventScrollReset: m,
          })
        : re
        ? await H(G, Z, {
            overrideNavigation: {
              state: "loading",
              location: Z,
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0,
            },
            fetcherSubmission: V,
            preventScrollReset: m,
          })
        : await H(G, Z, {
            overrideNavigation: {
              state: "loading",
              location: Z,
              formMethod: V ? V.formMethod : void 0,
              formAction: V ? V.formAction : void 0,
              formEncType: V ? V.formEncType : void 0,
              formData: V ? V.formData : void 0,
            },
            preventScrollReset: m,
          });
  }
  async function Le($, j, F, K, V) {
    let te = await Promise.all([
        ...F.map((G) => yi("loader", V, G, j, n, t, i)),
        ...K.map((G) =>
          G.matches && G.match && G.controller
            ? yi(
                "loader",
                gi(e.history, G.path, G.controller.signal),
                G.match,
                G.matches,
                n,
                t,
                i
              )
            : { type: _e.error, error: Xt(404, { pathname: G.path }) }
        ),
      ]),
      re = te.slice(0, F.length),
      Z = te.slice(F.length);
    return (
      await Promise.all([
        lv(
          $,
          F,
          re,
          re.map(() => V.signal),
          !1,
          d.loaderData
        ),
        lv(
          $,
          K.map((G) => G.match),
          Z,
          K.map((G) => (G.controller ? G.controller.signal : null)),
          !0
        ),
      ]),
      { results: te, loaderResults: re, fetcherResults: Z }
    );
  }
  function de() {
    (C = !0),
      b.push(...co()),
      I.forEach(($, j) => {
        P.has(j) && (k.push(j), ft(j));
      });
  }
  function Qn($, j, F) {
    let K = Po(d.matches, j);
    sn($), Q({ errors: { [K.route.id]: F }, fetchers: new Map(d.fetchers) });
  }
  function sn($) {
    P.has($) && ft($),
      I.delete($),
      N.delete($),
      M.delete($),
      d.fetchers.delete($);
  }
  function ft($) {
    let j = P.get($);
    X(j, "Expected fetch controller: " + $), j.abort(), P.delete($);
  }
  function Hn($) {
    for (let j of $) {
      let K = {
        state: "idle",
        data: Se(j).data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        " _hasFetcherDoneAnything ": !0,
      };
      d.fetchers.set(j, K);
    }
  }
  function Wn() {
    let $ = [],
      j = !1;
    for (let F of M) {
      let K = d.fetchers.get(F);
      X(K, "Expected fetcher: " + F),
        K.state === "loading" && (M.delete(F), $.push(F), (j = !0));
    }
    return Hn($), j;
  }
  function Ct($) {
    let j = [];
    for (let [F, K] of N)
      if (K < $) {
        let V = d.fetchers.get(F);
        X(V, "Expected fetcher: " + F),
          V.state === "loading" && (ft(F), N.delete(F), j.push(F));
      }
    return Hn(j), j.length > 0;
  }
  function Ge($, j) {
    let F = d.blockers.get($) || Jh;
    return z.get($) !== j && z.set($, j), F;
  }
  function Ae($) {
    d.blockers.delete($), z.delete($);
  }
  function Mr($, j) {
    let F = d.blockers.get($) || Jh;
    X(
      (F.state === "unblocked" && j.state === "blocked") ||
        (F.state === "blocked" && j.state === "blocked") ||
        (F.state === "blocked" && j.state === "proceeding") ||
        (F.state === "blocked" && j.state === "unblocked") ||
        (F.state === "proceeding" && j.state === "unblocked"),
      "Invalid blocker state transition: " + F.state + " -> " + j.state
    ),
      d.blockers.set($, j),
      Q({ blockers: new Map(d.blockers) });
  }
  function so($) {
    let { currentLocation: j, nextLocation: F, historyAction: K } = $;
    if (z.size === 0) return;
    z.size > 1 && _n(!1, "A router only supports one blocker at a time");
    let V = Array.from(z.entries()),
      [te, re] = V[V.length - 1],
      Z = d.blockers.get(te);
    if (
      !(Z && Z.state === "proceeding") &&
      re({ currentLocation: j, nextLocation: F, historyAction: K })
    )
      return te;
  }
  function co($) {
    let j = [];
    return (
      A.forEach((F, K) => {
        (!$ || $(K)) && (F.cancel(), j.push(K), A.delete(K));
      }),
      j
    );
  }
  function Fa($, j, F) {
    if (
      ((s = $), (f = j), (c = F || ((K) => K.key)), !h && d.navigation === lc)
    ) {
      h = !0;
      let K = li(d.location, d.matches);
      K != null && Q({ restoreScrollPosition: K });
    }
    return () => {
      (s = null), (f = null), (c = null);
    };
  }
  function za($, j) {
    if (s && c && f) {
      let F = j.map((V) => uv(V, d.loaderData)),
        K = c($, F) || $.key;
      s[K] = f();
    }
  }
  function li($, j) {
    if (s && c && f) {
      let F = j.map((te) => uv(te, d.loaderData)),
        K = c($, F) || $.key,
        V = s[K];
      if (typeof V == "number") return V;
    }
    return null;
  }
  function qw($) {
    (n = {}), (o = Of($, t, void 0, n));
  }
  return (
    (w = {
      get basename() {
        return i;
      },
      get state() {
        return d;
      },
      get routes() {
        return r;
      },
      initialize: D,
      subscribe: L,
      enableScrollRestoration: Fa,
      navigate: Y,
      fetch: Ve,
      revalidate: J,
      createHref: ($) => e.history.createHref($),
      encodeLocation: ($) => e.history.encodeLocation($),
      getFetcher: Se,
      deleteFetcher: sn,
      dispose: _,
      getBlocker: Ge,
      deleteBlocker: Ae,
      _internalFetchControllers: P,
      _internalActiveDeferreds: A,
      _internalSetRoutes: qw,
    }),
    w
  );
}
function eC(e) {
  return e != null && "formData" in e;
}
function Pf(e, t, n, r, o, i, a) {
  let l, u;
  if (i != null && a !== "path") {
    l = [];
    for (let c of t)
      if ((l.push(c), c.route.id === i)) {
        u = c;
        break;
      }
  } else (l = t), (u = t[t.length - 1]);
  let s = Qu(
    o || ".",
    Ma(l).map((c) => c.pathnameBase),
    wr(e.pathname, n) || e.pathname,
    a === "path"
  );
  return (
    o == null && ((s.search = e.search), (s.hash = e.hash)),
    (o == null || o === "" || o === ".") &&
      u &&
      u.route.index &&
      !Vd(s.search) &&
      (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (s.pathname = s.pathname === "/" ? n : yn([n, s.pathname])),
    on(s)
  );
}
function Zh(e, t, n, r) {
  if (!r || !eC(r)) return { path: n };
  if (r.formMethod && !lC(r.formMethod))
    return { path: n, error: Xt(405, { method: r.formMethod }) };
  let o;
  if (r.formData) {
    let l = r.formMethod || "get";
    if (
      ((o = {
        formMethod: e ? l.toUpperCase() : l.toLowerCase(),
        formAction: Kg(n),
        formEncType:
          (r && r.formEncType) || "application/x-www-form-urlencoded",
        formData: r.formData,
      }),
      kn(o.formMethod))
    )
      return { path: n, submission: o };
  }
  let i = Kt(n),
    a = qg(r.formData);
  return (
    t && i.search && Vd(i.search) && a.append("index", ""),
    (i.search = "?" + a),
    { path: on(i), submission: o }
  );
}
function tC(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((o) => o.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function ev(e, t, n, r, o, i, a, l, u, s, c, f, h) {
  let p = h ? Object.values(h)[0] : f ? Object.values(f)[0] : void 0,
    g = e.createURL(t.location),
    y = e.createURL(o),
    w = h ? Object.keys(h)[0] : void 0,
    v = tC(n, w).filter((x, E) => {
      if (x.route.lazy) return !0;
      if (x.route.loader == null) return !1;
      if (nC(t.loaderData, t.matches[E], x) || a.some((k) => k === x.route.id))
        return !0;
      let C = t.matches[E],
        b = x;
      return tv(
        x,
        ue(
          {
            currentUrl: g,
            currentParams: C.params,
            nextUrl: y,
            nextParams: b.params,
          },
          r,
          {
            actionResult: p,
            defaultShouldRevalidate:
              i ||
              g.pathname + g.search === y.pathname + y.search ||
              g.search !== y.search ||
              Wg(C, b),
          }
        )
      );
    }),
    m = [];
  return (
    u.forEach((x, E) => {
      if (!n.some((P) => P.route.id === x.routeId)) return;
      let C = Ur(s, x.path, c);
      if (!C) {
        m.push({
          key: E,
          routeId: x.routeId,
          path: x.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let b = Tf(C, x.path);
      if (l.includes(E)) {
        m.push({
          key: E,
          routeId: x.routeId,
          path: x.path,
          matches: C,
          match: b,
          controller: new AbortController(),
        });
        return;
      }
      tv(
        b,
        ue(
          {
            currentUrl: g,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: y,
            nextParams: n[n.length - 1].params,
          },
          r,
          { actionResult: p, defaultShouldRevalidate: i }
        )
      ) &&
        m.push({
          key: E,
          routeId: x.routeId,
          path: x.path,
          matches: C,
          match: b,
          controller: new AbortController(),
        });
    }),
    [v, m]
  );
}
function nC(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    o = e[n.route.id] === void 0;
  return r || o;
}
function Wg(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function tv(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function nv(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let o = n[e.id];
  X(o, "No route found in manifest");
  let i = {};
  for (let a in r) {
    let u = o[a] !== void 0 && a !== "hasErrorBoundary";
    _n(
      !u,
      'Route "' +
        o.id +
        '" has a static property "' +
        a +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + a + '" will be ignored.')
    ),
      !u && !SE.has(a) && (i[a] = r[a]);
  }
  Object.assign(o, i), Object.assign(o, ue({}, t(o), { lazy: void 0 }));
}
async function yi(e, t, n, r, o, i, a, l, u, s) {
  l === void 0 && (l = !1), u === void 0 && (u = !1);
  let c,
    f,
    h,
    p = (w) => {
      let d,
        v = new Promise((m, x) => (d = x));
      return (
        (h = () => d()),
        t.signal.addEventListener("abort", h),
        Promise.race([w({ request: t, params: n.params, context: s }), v])
      );
    };
  try {
    let w = n.route[e];
    if (n.route.lazy)
      if (w) f = (await Promise.all([p(w), nv(n.route, i, o)]))[0];
      else if ((await nv(n.route, i, o), (w = n.route[e]), w)) f = await p(w);
      else if (e === "action") {
        let d = new URL(t.url),
          v = d.pathname + d.search;
        throw Xt(405, { method: t.method, pathname: v, routeId: n.route.id });
      } else return { type: _e.data, data: void 0 };
    else if (w) f = await p(w);
    else {
      let d = new URL(t.url),
        v = d.pathname + d.search;
      throw Xt(404, { pathname: v });
    }
    X(
      f !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (w) {
    (c = _e.error), (f = w);
  } finally {
    h && t.signal.removeEventListener("abort", h);
  }
  if (aC(f)) {
    let w = f.status;
    if (GE.has(w)) {
      let m = f.headers.get("Location");
      if (
        (X(
          m,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        !Qg.test(m))
      )
        m = Pf(new URL(t.url), r.slice(0, r.indexOf(n) + 1), a, !0, m);
      else if (!l) {
        let x = new URL(t.url),
          E = m.startsWith("//") ? new URL(x.protocol + m) : new URL(m),
          C = wr(E.pathname, a) != null;
        E.origin === x.origin && C && (m = E.pathname + E.search + E.hash);
      }
      if (l) throw (f.headers.set("Location", m), f);
      return {
        type: _e.redirect,
        status: w,
        location: m,
        revalidate: f.headers.get("X-Remix-Revalidate") !== null,
      };
    }
    if (u) throw { type: c || _e.data, response: f };
    let d,
      v = f.headers.get("Content-Type");
    return (
      v && /\bapplication\/json\b/.test(v)
        ? (d = await f.json())
        : (d = await f.text()),
      c === _e.error
        ? { type: c, error: new Wd(w, f.statusText, d), headers: f.headers }
        : { type: _e.data, data: d, statusCode: f.status, headers: f.headers }
    );
  }
  if (c === _e.error) return { type: c, error: f };
  if (iC(f)) {
    var g, y;
    return {
      type: _e.deferred,
      deferredData: f,
      statusCode: (g = f.init) == null ? void 0 : g.status,
      headers:
        ((y = f.init) == null ? void 0 : y.headers) &&
        new Headers(f.init.headers),
    };
  }
  return { type: _e.data, data: f };
}
function gi(e, t, n, r) {
  let o = e.createURL(Kg(t)).toString(),
    i = { signal: n };
  if (r && kn(r.formMethod)) {
    let { formMethod: a, formEncType: l, formData: u } = r;
    (i.method = a.toUpperCase()),
      (i.body = l === "application/x-www-form-urlencoded" ? qg(u) : u);
  }
  return new Request(o, i);
}
function qg(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries()) t.append(n, r instanceof File ? r.name : r);
  return t;
}
function rC(e, t, n, r, o) {
  let i = {},
    a = null,
    l,
    u = !1,
    s = {};
  return (
    n.forEach((c, f) => {
      let h = t[f].route.id;
      if (
        (X(!Io(c), "Cannot handle redirect results in processLoaderData"),
        Fi(c))
      ) {
        let p = Po(e, h),
          g = c.error;
        r && ((g = Object.values(r)[0]), (r = void 0)),
          (a = a || {}),
          a[p.route.id] == null && (a[p.route.id] = g),
          (i[h] = void 0),
          u || ((u = !0), (l = qd(c.error) ? c.error.status : 500)),
          c.headers && (s[h] = c.headers);
      } else
        Br(c)
          ? (o.set(h, c.deferredData), (i[h] = c.deferredData.data))
          : (i[h] = c.data),
          c.statusCode != null &&
            c.statusCode !== 200 &&
            !u &&
            (l = c.statusCode),
          c.headers && (s[h] = c.headers);
    }),
    r && ((a = r), (i[Object.keys(r)[0]] = void 0)),
    { loaderData: i, errors: a, statusCode: l || 200, loaderHeaders: s }
  );
}
function rv(e, t, n, r, o, i, a, l) {
  let { loaderData: u, errors: s } = rC(t, n, r, o, l);
  for (let c = 0; c < i.length; c++) {
    let { key: f, match: h, controller: p } = i[c];
    X(
      a !== void 0 && a[c] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let g = a[c];
    if (!(p && p.signal.aborted))
      if (Fi(g)) {
        let y = Po(e.matches, h == null ? void 0 : h.route.id);
        (s && s[y.route.id]) || (s = ue({}, s, { [y.route.id]: g.error })),
          e.fetchers.delete(f);
      } else if (Io(g)) X(!1, "Unhandled fetcher revalidation redirect");
      else if (Br(g)) X(!1, "Unhandled fetcher deferred data");
      else {
        let y = {
          state: "idle",
          data: g.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          " _hasFetcherDoneAnything ": !0,
        };
        e.fetchers.set(f, y);
      }
  }
  return { loaderData: u, errors: s };
}
function ov(e, t, n, r) {
  let o = ue({}, t);
  for (let i of n) {
    let a = i.route.id;
    if (
      (t.hasOwnProperty(a)
        ? t[a] !== void 0 && (o[a] = t[a])
        : e[a] !== void 0 && i.route.loader && (o[a] = e[a]),
      r && r.hasOwnProperty(a))
    )
      break;
  }
  return o;
}
function Po(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function iv(e) {
  let t = e.find((n) => n.index || !n.path || n.path === "/") || {
    id: "__shim-error-route__",
  };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function Xt(e, t) {
  let { pathname: n, routeId: r, method: o, type: i } = t === void 0 ? {} : t,
    a = "Unknown Server Error",
    l = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((a = "Bad Request"),
        o && n && r
          ? (l =
              "You made a " +
              o +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i === "defer-action" && (l = "defer() is not supported in actions"))
      : e === 403
      ? ((a = "Forbidden"),
        (l = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((a = "Not Found"), (l = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((a = "Method Not Allowed"),
        o && n && r
          ? (l =
              "You made a " +
              o.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o && (l = 'Invalid request method "' + o.toUpperCase() + '"')),
    new Wd(e || 500, a, new Error(l), !0)
  );
}
function av(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Io(n)) return n;
  }
}
function Kg(e) {
  let t = typeof e == "string" ? Kt(e) : e;
  return on(ue({}, t, { hash: "" }));
}
function oC(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function Br(e) {
  return e.type === _e.deferred;
}
function Fi(e) {
  return e.type === _e.error;
}
function Io(e) {
  return (e && e.type) === _e.redirect;
}
function iC(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function aC(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function lC(e) {
  return VE.has(e.toLowerCase());
}
function kn(e) {
  return qE.has(e.toLowerCase());
}
async function lv(e, t, n, r, o, i) {
  for (let a = 0; a < n.length; a++) {
    let l = n[a],
      u = t[a];
    if (!u) continue;
    let s = e.find((f) => f.route.id === u.route.id),
      c = s != null && !Wg(s, u) && (i && i[u.route.id]) !== void 0;
    if (Br(l) && (o || c)) {
      let f = r[a];
      X(f, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Vg(l, f, o).then((h) => {
          h && (n[a] = h || n[a]);
        });
    }
  }
}
async function Vg(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: _e.data, data: e.deferredData.unwrappedData };
      } catch (o) {
        return { type: _e.error, error: o };
      }
    return { type: _e.data, data: e.deferredData.data };
  }
}
function Vd(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function uv(e, t) {
  let { route: n, pathname: r, params: o } = e;
  return { id: n.id, pathname: r, params: o, data: t[n.id], handle: n.handle };
}
function Tf(e, t) {
  let n = typeof t == "string" ? Kt(t).search : t.search;
  if (e[e.length - 1].route.index && Vd(n || "")) return e[e.length - 1];
  let r = Ma(e);
  return r[r.length - 1];
}
/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function da() {
  return (
    (da = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    da.apply(this, arguments)
  );
}
const ti = S.createContext(null),
  Da = S.createContext(null),
  lu = S.createContext(null),
  En = S.createContext(null),
  ni = S.createContext(null),
  Et = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Gg = S.createContext(null);
function Yg(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Pr() || X(!1);
  let { basename: r, navigator: o } = S.useContext(En),
    { hash: i, pathname: a, search: l } = $a(e, { relative: n }),
    u = a;
  return (
    r !== "/" && (u = a === "/" ? r : yn([r, a])),
    o.createHref({ pathname: u, search: l, hash: i })
  );
}
function Pr() {
  return S.useContext(ni) != null;
}
function un() {
  return Pr() || X(!1), S.useContext(ni).location;
}
function uC() {
  return S.useContext(ni).navigationType;
}
function sC(e) {
  Pr() || X(!1);
  let { pathname: t } = un();
  return S.useMemo(() => Hd(e, t), [t, e]);
}
function Xg(e) {
  S.useContext(En).static || S.useLayoutEffect(e);
}
function io() {
  let { isDataRoute: e } = S.useContext(Et);
  return e ? bC() : cC();
}
function cC() {
  Pr() || X(!1);
  let e = S.useContext(ti),
    { basename: t, navigator: n } = S.useContext(En),
    { matches: r } = S.useContext(Et),
    { pathname: o } = un(),
    i = JSON.stringify(Ma(r).map((u) => u.pathnameBase)),
    a = S.useRef(!1);
  return (
    Xg(() => {
      a.current = !0;
    }),
    S.useCallback(
      function (u, s) {
        if ((s === void 0 && (s = {}), !a.current)) return;
        if (typeof u == "number") {
          n.go(u);
          return;
        }
        let c = Qu(u, JSON.parse(i), o, s.relative === "path");
        e == null &&
          t !== "/" &&
          (c.pathname = c.pathname === "/" ? t : yn([t, c.pathname])),
          (s.replace ? n.replace : n.push)(c, s.state, s);
      },
      [t, n, i, o, e]
    )
  );
}
const Jg = S.createContext(null);
function fC() {
  return S.useContext(Jg);
}
function Zg(e) {
  let t = S.useContext(Et).outlet;
  return t && S.createElement(Jg.Provider, { value: e }, t);
}
function dC() {
  let { matches: e } = S.useContext(Et),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function $a(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = S.useContext(Et),
    { pathname: o } = un(),
    i = JSON.stringify(Ma(r).map((a) => a.pathnameBase));
  return S.useMemo(() => Qu(e, JSON.parse(i), o, n === "path"), [e, i, o, n]);
}
function e0(e, t) {
  return t0(e, t);
}
function t0(e, t, n) {
  Pr() || X(!1);
  let { navigator: r } = S.useContext(En),
    { matches: o } = S.useContext(Et),
    i = o[o.length - 1],
    a = i ? i.params : {};
  i && i.pathname;
  let l = i ? i.pathnameBase : "/";
  i && i.route;
  let u = un(),
    s;
  if (t) {
    var c;
    let y = typeof t == "string" ? Kt(t) : t;
    l === "/" || ((c = y.pathname) != null && c.startsWith(l)) || X(!1),
      (s = y);
  } else s = u;
  let f = s.pathname || "/",
    h = l === "/" ? f : f.slice(l.length) || "/",
    p = Ur(e, { pathname: h }),
    g = n0(
      p &&
        p.map((y) =>
          Object.assign({}, y, {
            params: Object.assign({}, a, y.params),
            pathname: yn([
              l,
              r.encodeLocation
                ? r.encodeLocation(y.pathname).pathname
                : y.pathname,
            ]),
            pathnameBase:
              y.pathnameBase === "/"
                ? l
                : yn([
                    l,
                    r.encodeLocation
                      ? r.encodeLocation(y.pathnameBase).pathname
                      : y.pathnameBase,
                  ]),
          })
        ),
      o,
      n
    );
  return t && g
    ? S.createElement(
        ni.Provider,
        {
          value: {
            location: da(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              s
            ),
            navigationType: Ee.Pop,
          },
        },
        g
      )
    : g;
}
function pC() {
  let e = a0(),
    t = qd(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    i = null;
  return S.createElement(
    S.Fragment,
    null,
    S.createElement("h2", null, "Unexpected Application Error!"),
    S.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? S.createElement("pre", { style: o }, n) : null,
    i
  );
}
const hC = S.createElement(pC, null);
class vC extends S.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {}
  render() {
    return this.state.error
      ? S.createElement(
          Et.Provider,
          { value: this.props.routeContext },
          S.createElement(Gg.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function mC(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = S.useContext(ti);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    S.createElement(Et.Provider, { value: t }, r)
  );
}
function n0(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let i = e,
    a = (r = n) == null ? void 0 : r.errors;
  if (a != null) {
    let l = i.findIndex(
      (u) => u.route.id && (a == null ? void 0 : a[u.route.id])
    );
    l >= 0 || X(!1), (i = i.slice(0, Math.min(i.length, l + 1)));
  }
  return i.reduceRight((l, u, s) => {
    let c = u.route.id ? (a == null ? void 0 : a[u.route.id]) : null,
      f = null;
    n && (f = u.route.errorElement || hC);
    let h = t.concat(i.slice(0, s + 1)),
      p = () => {
        let g;
        return (
          c
            ? (g = f)
            : u.route.Component
            ? (g = S.createElement(u.route.Component, null))
            : u.route.element
            ? (g = u.route.element)
            : (g = l),
          S.createElement(mC, {
            match: u,
            routeContext: { outlet: l, matches: h, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (u.route.ErrorBoundary || u.route.errorElement || s === 0)
      ? S.createElement(vC, {
          location: n.location,
          revalidation: n.revalidation,
          component: f,
          error: c,
          children: p(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var pa;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate");
})(pa || (pa = {}));
var xt;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId");
})(xt || (xt = {}));
function Gd(e) {
  let t = S.useContext(ti);
  return t || X(!1), t;
}
function Tr(e) {
  let t = S.useContext(Da);
  return t || X(!1), t;
}
function yC(e) {
  let t = S.useContext(Et);
  return t || X(!1), t;
}
function Hu(e) {
  let t = yC(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || X(!1), n.route.id;
}
function r0() {
  return Hu(xt.UseRouteId);
}
function o0() {
  return Tr(xt.UseNavigation).navigation;
}
function gC() {
  let e = Gd(pa.UseRevalidator),
    t = Tr(xt.UseRevalidator);
  return { revalidate: e.router.revalidate, state: t.revalidation };
}
function i0() {
  let { matches: e, loaderData: t } = Tr(xt.UseMatches);
  return S.useMemo(
    () =>
      e.map((n) => {
        let { pathname: r, params: o } = n;
        return {
          id: n.route.id,
          pathname: r,
          params: o,
          data: t[n.route.id],
          handle: n.route.handle,
        };
      }),
    [e, t]
  );
}
function wC() {
  let e = Tr(xt.UseLoaderData),
    t = Hu(xt.UseLoaderData);
  if (!(e.errors && e.errors[t] != null)) return e.loaderData[t];
}
function SC(e) {
  return Tr(xt.UseRouteLoaderData).loaderData[e];
}
function xC() {
  let e = Tr(xt.UseActionData);
  return (
    S.useContext(Et) || X(!1),
    Object.values((e == null ? void 0 : e.actionData) || {})[0]
  );
}
function a0() {
  var e;
  let t = S.useContext(Gg),
    n = Tr(xt.UseRouteError),
    r = Hu(xt.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function l0() {
  let e = S.useContext(lu);
  return e == null ? void 0 : e._data;
}
function EC() {
  let e = S.useContext(lu);
  return e == null ? void 0 : e._error;
}
let CC = 0;
function u0(e) {
  let { router: t } = Gd(pa.UseBlocker),
    n = Tr(xt.UseBlocker),
    [r] = S.useState(() => String(++CC)),
    o = S.useCallback((a) => (typeof e == "function" ? !!e(a) : !!e), [e]),
    i = t.getBlocker(r, o);
  return (
    S.useEffect(() => () => t.deleteBlocker(r), [t, r]), n.blockers.get(r) || i
  );
}
function bC() {
  let { router: e } = Gd(pa.UseNavigateStable),
    t = Hu(xt.UseNavigateStable),
    n = S.useRef(!1);
  return (
    Xg(() => {
      n.current = !0;
    }),
    S.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, da({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function s0(e) {
  let { fallbackElement: t, router: n } = e,
    [r, o] = S.useState(n.state);
  S.useLayoutEffect(() => n.subscribe(o), [n, o]);
  let i = S.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (u) => n.navigate(u),
        push: (u, s, c) =>
          n.navigate(u, {
            state: s,
            preventScrollReset: c == null ? void 0 : c.preventScrollReset,
          }),
        replace: (u, s, c) =>
          n.navigate(u, {
            replace: !0,
            state: s,
            preventScrollReset: c == null ? void 0 : c.preventScrollReset,
          }),
      }),
      [n]
    ),
    a = n.basename || "/",
    l = S.useMemo(
      () => ({ router: n, navigator: i, static: !1, basename: a }),
      [n, i, a]
    );
  return S.createElement(
    S.Fragment,
    null,
    S.createElement(
      ti.Provider,
      { value: l },
      S.createElement(
        Da.Provider,
        { value: r },
        S.createElement(
          ri,
          {
            basename: n.basename,
            location: n.state.location,
            navigationType: n.state.historyAction,
            navigator: i,
          },
          n.state.initialized
            ? S.createElement(kC, { routes: n.routes, state: r })
            : t
        )
      )
    ),
    null
  );
}
function kC(e) {
  let { routes: t, state: n } = e;
  return t0(t, void 0, n);
}
function RC(e) {
  let { basename: t, children: n, initialEntries: r, initialIndex: o } = e,
    i = S.useRef();
  i.current == null &&
    (i.current = Ig({ initialEntries: r, initialIndex: o, v5Compat: !0 }));
  let a = i.current,
    [l, u] = S.useState({ action: a.action, location: a.location });
  return (
    S.useLayoutEffect(() => a.listen(u), [a]),
    S.createElement(ri, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: a,
    })
  );
}
function c0(e) {
  let { to: t, replace: n, state: r, relative: o } = e;
  Pr() || X(!1);
  let { matches: i } = S.useContext(Et),
    { pathname: a } = un(),
    l = io(),
    u = Qu(
      t,
      Ma(i).map((c) => c.pathnameBase),
      a,
      o === "path"
    ),
    s = JSON.stringify(u);
  return (
    S.useEffect(
      () => l(JSON.parse(s), { replace: n, state: r, relative: o }),
      [l, s, o, n, r]
    ),
    null
  );
}
function Yd(e) {
  return Zg(e.context);
}
function dn(e) {
  X(!1);
}
function ri(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Ee.Pop,
    navigator: i,
    static: a = !1,
  } = e;
  Pr() && X(!1);
  let l = t.replace(/^\/*/, "/"),
    u = S.useMemo(() => ({ basename: l, navigator: i, static: a }), [l, i, a]);
  typeof r == "string" && (r = Kt(r));
  let {
      pathname: s = "/",
      search: c = "",
      hash: f = "",
      state: h = null,
      key: p = "default",
    } = r,
    g = S.useMemo(() => {
      let y = wr(s, l);
      return y == null
        ? null
        : {
            location: { pathname: y, search: c, hash: f, state: h, key: p },
            navigationType: o,
          };
    }, [l, s, c, f, h, p, o]);
  return g == null
    ? null
    : S.createElement(
        En.Provider,
        { value: u },
        S.createElement(ni.Provider, { children: n, value: g })
      );
}
function OC(e) {
  let { children: t, location: n } = e;
  return e0(Ho(t), n);
}
function PC(e) {
  let { children: t, errorElement: n, resolve: r } = e;
  return S.createElement(
    NC,
    { resolve: r, errorElement: n },
    S.createElement(MC, null, t)
  );
}
var kt;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(kt || (kt = {}));
const TC = new Promise(() => {});
class NC extends S.Component {
  constructor(t) {
    super(t), (this.state = { error: null });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  componentDidCatch(t, n) {}
  render() {
    let { children: t, errorElement: n, resolve: r } = this.props,
      o = null,
      i = kt.pending;
    if (!(r instanceof Promise))
      (i = kt.success),
        (o = Promise.resolve()),
        Object.defineProperty(o, "_tracked", { get: () => !0 }),
        Object.defineProperty(o, "_data", { get: () => r });
    else if (this.state.error) {
      i = kt.error;
      let a = this.state.error;
      (o = Promise.reject().catch(() => {})),
        Object.defineProperty(o, "_tracked", { get: () => !0 }),
        Object.defineProperty(o, "_error", { get: () => a });
    } else
      r._tracked
        ? ((o = r),
          (i =
            o._error !== void 0
              ? kt.error
              : o._data !== void 0
              ? kt.success
              : kt.pending))
        : ((i = kt.pending),
          Object.defineProperty(r, "_tracked", { get: () => !0 }),
          (o = r.then(
            (a) => Object.defineProperty(r, "_data", { get: () => a }),
            (a) => Object.defineProperty(r, "_error", { get: () => a })
          )));
    if (i === kt.error && o._error instanceof au) throw TC;
    if (i === kt.error && !n) throw o._error;
    if (i === kt.error)
      return S.createElement(lu.Provider, { value: o, children: n });
    if (i === kt.success)
      return S.createElement(lu.Provider, { value: o, children: t });
    throw o;
  }
}
function MC(e) {
  let { children: t } = e,
    n = l0(),
    r = typeof t == "function" ? t(n) : t;
  return S.createElement(S.Fragment, null, r);
}
function Ho(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    S.Children.forEach(e, (r, o) => {
      if (!S.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === S.Fragment) {
        n.push.apply(n, Ho(r.props.children, i));
        return;
      }
      r.type !== dn && X(!1), !r.props.index || !r.props.children || X(!1);
      let a = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (a.children = Ho(r.props.children, i)), n.push(a);
    }),
    n
  );
}
function DC(e) {
  return n0(e);
}
function Xd(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: S.createElement(e.Component),
        Component: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: S.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
function $C(e, t) {
  return Kd({
    basename: t == null ? void 0 : t.basename,
    future: da({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: Ig({
      initialEntries: t == null ? void 0 : t.initialEntries,
      initialIndex: t == null ? void 0 : t.initialIndex,
    }),
    hydrationData: t == null ? void 0 : t.hydrationData,
    routes: e,
    mapRouteProperties: Xd,
  }).initialize();
}
/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Nt() {
  return (
    (Nt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Nt.apply(this, arguments)
  );
}
function Jd(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const Ml = "get",
  uc = "application/x-www-form-urlencoded";
function Wu(e) {
  return e != null && typeof e.tagName == "string";
}
function jC(e) {
  return Wu(e) && e.tagName.toLowerCase() === "button";
}
function IC(e) {
  return Wu(e) && e.tagName.toLowerCase() === "form";
}
function LC(e) {
  return Wu(e) && e.tagName.toLowerCase() === "input";
}
function AC(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function _C(e, t) {
  return e.button === 0 && (!t || t === "_self") && !AC(e);
}
function uu(e) {
  return (
    e === void 0 && (e = ""),
    new URLSearchParams(
      typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams
        ? e
        : Object.keys(e).reduce((t, n) => {
            let r = e[n];
            return t.concat(Array.isArray(r) ? r.map((o) => [n, o]) : [[n, r]]);
          }, [])
    )
  );
}
function FC(e, t) {
  let n = uu(e);
  if (t)
    for (let r of t.keys())
      n.has(r) ||
        t.getAll(r).forEach((o) => {
          n.append(r, o);
        });
  return n;
}
function zC(e, t, n) {
  let r,
    o = null,
    i,
    a;
  if (IC(e)) {
    let l = t.submissionTrigger;
    if (t.action) o = t.action;
    else {
      let u = e.getAttribute("action");
      o = u ? wr(u, n) : null;
    }
    (r = t.method || e.getAttribute("method") || Ml),
      (i = t.encType || e.getAttribute("enctype") || uc),
      (a = new FormData(e)),
      l && l.name && a.append(l.name, l.value);
  } else if (jC(e) || (LC(e) && (e.type === "submit" || e.type === "image"))) {
    let l = e.form;
    if (l == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    if (t.action) o = t.action;
    else {
      let u = e.getAttribute("formaction") || l.getAttribute("action");
      o = u ? wr(u, n) : null;
    }
    (r =
      t.method ||
      e.getAttribute("formmethod") ||
      l.getAttribute("method") ||
      Ml),
      (i =
        t.encType ||
        e.getAttribute("formenctype") ||
        l.getAttribute("enctype") ||
        uc),
      (a = new FormData(l)),
      e.name && a.append(e.name, e.value);
  } else {
    if (Wu(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    if (
      ((r = t.method || Ml),
      (o = t.action || null),
      (i = t.encType || uc),
      e instanceof FormData)
    )
      a = e;
    else if (((a = new FormData()), e instanceof URLSearchParams))
      for (let [l, u] of e) a.append(l, u);
    else if (e != null) for (let l of Object.keys(e)) a.append(l, e[l]);
  }
  return { action: o, method: r.toLowerCase(), encType: i, formData: a };
}
const UC = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  BC = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "children",
  ],
  QC = [
    "reloadDocument",
    "replace",
    "method",
    "action",
    "onSubmit",
    "fetcherKey",
    "routeId",
    "relative",
    "preventScrollReset",
  ];
function HC(e, t) {
  return Kd({
    basename: t == null ? void 0 : t.basename,
    future: Nt({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: Lg({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || d0(),
    routes: e,
    mapRouteProperties: Xd,
  }).initialize();
}
function f0(e, t) {
  return Kd({
    basename: t == null ? void 0 : t.basename,
    future: Nt({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: Ag({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || d0(),
    routes: e,
    mapRouteProperties: Xd,
  }).initialize();
}
function d0() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Nt({}, t, { errors: WC(t.errors) })), t;
}
function WC(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, o] of t)
    if (o && o.__type === "RouteErrorResponse")
      n[r] = new Wd(o.status, o.statusText, o.data, o.internal === !0);
    else if (o && o.__type === "Error") {
      let i = new Error(o.message);
      (i.stack = ""), (n[r] = i);
    } else n[r] = o;
  return n;
}
function qC(e) {
  let { basename: t, children: n, window: r } = e,
    o = S.useRef();
  o.current == null && (o.current = Lg({ window: r, v5Compat: !0 }));
  let i = o.current,
    [a, l] = S.useState({ action: i.action, location: i.location });
  return (
    S.useLayoutEffect(() => i.listen(l), [i]),
    S.createElement(ri, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: i,
    })
  );
}
function KC(e) {
  let { basename: t, children: n, window: r } = e,
    o = S.useRef();
  o.current == null && (o.current = Ag({ window: r, v5Compat: !0 }));
  let i = o.current,
    [a, l] = S.useState({ action: i.action, location: i.location });
  return (
    S.useLayoutEffect(() => i.listen(l), [i]),
    S.createElement(ri, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: i,
    })
  );
}
function VC(e) {
  let { basename: t, children: n, history: r } = e;
  const [o, i] = S.useState({ action: r.action, location: r.location });
  return (
    S.useLayoutEffect(() => r.listen(i), [r]),
    S.createElement(ri, {
      basename: t,
      children: n,
      location: o.location,
      navigationType: o.action,
      navigator: r,
    })
  );
}
const GC =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  YC = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  qu = S.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: a,
        state: l,
        target: u,
        to: s,
        preventScrollReset: c,
      } = t,
      f = Jd(t, UC),
      { basename: h } = S.useContext(En),
      p,
      g = !1;
    if (typeof s == "string" && YC.test(s) && ((p = s), GC))
      try {
        let v = new URL(window.location.href),
          m = s.startsWith("//") ? new URL(v.protocol + s) : new URL(s),
          x = wr(m.pathname, h);
        m.origin === v.origin && x != null
          ? (s = x + m.search + m.hash)
          : (g = !0);
      } catch {}
    let y = Yg(s, { relative: o }),
      w = v0(s, {
        replace: a,
        state: l,
        target: u,
        preventScrollReset: c,
        relative: o,
      });
    function d(v) {
      r && r(v), v.defaultPrevented || w(v);
    }
    return S.createElement(
      "a",
      Nt({}, f, { href: p || y, onClick: g || i ? r : d, ref: n, target: u })
    );
  }),
  XC = S.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: o = !1,
        className: i = "",
        end: a = !1,
        style: l,
        to: u,
        children: s,
      } = t,
      c = Jd(t, BC),
      f = $a(u, { relative: c.relative }),
      h = un(),
      p = S.useContext(Da),
      { navigator: g } = S.useContext(En),
      y = g.encodeLocation ? g.encodeLocation(f).pathname : f.pathname,
      w = h.pathname,
      d =
        p && p.navigation && p.navigation.location
          ? p.navigation.location.pathname
          : null;
    o ||
      ((w = w.toLowerCase()),
      (d = d ? d.toLowerCase() : null),
      (y = y.toLowerCase()));
    let v = w === y || (!a && w.startsWith(y) && w.charAt(y.length) === "/"),
      m =
        d != null &&
        (d === y || (!a && d.startsWith(y) && d.charAt(y.length) === "/")),
      x = v ? r : void 0,
      E;
    typeof i == "function"
      ? (E = i({ isActive: v, isPending: m }))
      : (E = [i, v ? "active" : null, m ? "pending" : null]
          .filter(Boolean)
          .join(" "));
    let C = typeof l == "function" ? l({ isActive: v, isPending: m }) : l;
    return S.createElement(
      qu,
      Nt({}, c, { "aria-current": x, className: E, ref: n, style: C, to: u }),
      typeof s == "function" ? s({ isActive: v, isPending: m }) : s
    );
  }),
  JC = S.forwardRef((e, t) => S.createElement(p0, Nt({}, e, { ref: t }))),
  p0 = S.forwardRef((e, t) => {
    let {
        reloadDocument: n,
        replace: r,
        method: o = Ml,
        action: i,
        onSubmit: a,
        fetcherKey: l,
        routeId: u,
        relative: s,
        preventScrollReset: c,
      } = e,
      f = Jd(e, QC),
      h = ep(l, u),
      p = o.toLowerCase() === "get" ? "get" : "post",
      g = m0(i, { relative: s }),
      y = (w) => {
        if ((a && a(w), w.defaultPrevented)) return;
        w.preventDefault();
        let d = w.nativeEvent.submitter,
          v = (d == null ? void 0 : d.getAttribute("formmethod")) || o;
        h(d || w.currentTarget, {
          method: v,
          replace: r,
          relative: s,
          preventScrollReset: c,
        });
      };
    return S.createElement(
      "form",
      Nt({ ref: t, method: p, action: g, onSubmit: n ? a : y }, f)
    );
  });
function ZC(e) {
  let { getKey: t, storageKey: n } = e;
  return y0({ getKey: t, storageKey: n }), null;
}
var ha;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(ha || (ha = {}));
var su;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(su || (su = {}));
function Zd(e) {
  let t = S.useContext(ti);
  return t || X(!1), t;
}
function h0(e) {
  let t = S.useContext(Da);
  return t || X(!1), t;
}
function v0(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: a,
    } = t === void 0 ? {} : t,
    l = io(),
    u = un(),
    s = $a(e, { relative: a });
  return S.useCallback(
    (c) => {
      if (_C(c, n)) {
        c.preventDefault();
        let f = r !== void 0 ? r : on(u) === on(s);
        l(e, { replace: f, state: o, preventScrollReset: i, relative: a });
      }
    },
    [u, l, s, r, o, n, e, i, a]
  );
}
function eb(e) {
  let t = S.useRef(uu(e)),
    n = S.useRef(!1),
    r = un(),
    o = S.useMemo(() => FC(r.search, n.current ? null : t.current), [r.search]),
    i = io(),
    a = S.useCallback(
      (l, u) => {
        const s = uu(typeof l == "function" ? l(o) : l);
        (n.current = !0), i("?" + s, u);
      },
      [i, o]
    );
  return [o, a];
}
function tb() {
  return ep();
}
function ep(e, t) {
  let { router: n } = Zd(ha.UseSubmitImpl),
    { basename: r } = S.useContext(En),
    o = r0();
  return S.useCallback(
    function (i, a) {
      if ((a === void 0 && (a = {}), typeof document > "u"))
        throw new Error(
          "You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead."
        );
      let { action: l, method: u, encType: s, formData: c } = zC(i, a, r),
        f = {
          preventScrollReset: a.preventScrollReset,
          formData: c,
          formMethod: u,
          formEncType: s,
        };
      e
        ? (t == null && X(!1), n.fetch(e, t, l, f))
        : n.navigate(l, Nt({}, f, { replace: a.replace, fromRouteId: o }));
    },
    [n, r, e, t, o]
  );
}
function m0(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { basename: r } = S.useContext(En),
    o = S.useContext(Et);
  o || X(!1);
  let [i] = o.matches.slice(-1),
    a = Nt({}, $a(e || ".", { relative: n })),
    l = un();
  if (e == null && ((a.search = l.search), (a.hash = l.hash), i.route.index)) {
    let u = new URLSearchParams(a.search);
    u.delete("index"), (a.search = u.toString() ? "?" + u.toString() : "");
  }
  return (
    (!e || e === ".") &&
      i.route.index &&
      (a.search = a.search ? a.search.replace(/^\?/, "?index&") : "?index"),
    r !== "/" && (a.pathname = a.pathname === "/" ? r : yn([r, a.pathname])),
    on(a)
  );
}
function nb(e, t) {
  return S.forwardRef((r, o) =>
    S.createElement(p0, Nt({}, r, { ref: o, fetcherKey: e, routeId: t }))
  );
}
let rb = 0;
function ob() {
  var e;
  let { router: t } = Zd(ha.UseFetcher),
    n = S.useContext(Et);
  n || X(!1);
  let r = (e = n.matches[n.matches.length - 1]) == null ? void 0 : e.route.id;
  r == null && X(!1);
  let [o] = S.useState(() => String(++rb)),
    [i] = S.useState(() => (r || X(!1), nb(o, r))),
    [a] = S.useState(() => (c) => {
      t || X(!1), r || X(!1), t.fetch(o, r, c);
    }),
    l = ep(o, r),
    u = t.getFetcher(o),
    s = S.useMemo(() => Nt({ Form: i, submit: l, load: a }, u), [u, i, l, a]);
  return (
    S.useEffect(
      () => () => {
        t && t.deleteFetcher(o);
      },
      [t, o]
    ),
    s
  );
}
function ib() {
  return [...h0(su.UseFetchers).fetchers.values()];
}
const sv = "react-router-scroll-positions";
let ll = {};
function y0(e) {
  let { getKey: t, storageKey: n } = e === void 0 ? {} : e,
    { router: r } = Zd(ha.UseScrollRestoration),
    { restoreScrollPosition: o, preventScrollReset: i } = h0(
      su.UseScrollRestoration
    ),
    a = un(),
    l = i0(),
    u = o0();
  S.useEffect(
    () => (
      (window.history.scrollRestoration = "manual"),
      () => {
        window.history.scrollRestoration = "auto";
      }
    ),
    []
  ),
    lb(
      S.useCallback(() => {
        if (u.state === "idle") {
          let s = (t ? t(a, l) : null) || a.key;
          ll[s] = window.scrollY;
        }
        sessionStorage.setItem(n || sv, JSON.stringify(ll)),
          (window.history.scrollRestoration = "auto");
      }, [n, t, u.state, a, l])
    ),
    typeof document < "u" &&
      (S.useLayoutEffect(() => {
        try {
          let s = sessionStorage.getItem(n || sv);
          s && (ll = JSON.parse(s));
        } catch {}
      }, [n]),
      S.useLayoutEffect(() => {
        let s =
          r == null
            ? void 0
            : r.enableScrollRestoration(ll, () => window.scrollY, t);
        return () => s && s();
      }, [r, t]),
      S.useLayoutEffect(() => {
        if (o !== !1) {
          if (typeof o == "number") {
            window.scrollTo(0, o);
            return;
          }
          if (a.hash) {
            let s = document.getElementById(a.hash.slice(1));
            if (s) {
              s.scrollIntoView();
              return;
            }
          }
          i !== !0 && window.scrollTo(0, 0);
        }
      }, [a, o, i]));
}
function ab(e, t) {
  let { capture: n } = t || {};
  S.useEffect(() => {
    let r = n != null ? { capture: n } : void 0;
    return (
      window.addEventListener("beforeunload", e, r),
      () => {
        window.removeEventListener("beforeunload", e, r);
      }
    );
  }, [e, n]);
}
function lb(e, t) {
  let { capture: n } = t || {};
  S.useEffect(() => {
    let r = n != null ? { capture: n } : void 0;
    return (
      window.addEventListener("pagehide", e, r),
      () => {
        window.removeEventListener("pagehide", e, r);
      }
    );
  }, [e, n]);
}
function ub(e) {
  let { when: t, message: n } = e,
    r = u0(t);
  S.useEffect(() => {
    r.state === "blocked" && !t && r.reset();
  }, [r, t]),
    S.useEffect(() => {
      r.state === "blocked" &&
        (window.confirm(n) ? setTimeout(r.proceed, 0) : r.reset());
    }, [r, n]);
}
const sb = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      AbortedDeferredError: au,
      Await: PC,
      BrowserRouter: qC,
      Form: JC,
      HashRouter: KC,
      Link: qu,
      MemoryRouter: RC,
      NavLink: XC,
      Navigate: c0,
      get NavigationType() {
        return Ee;
      },
      Outlet: Yd,
      Route: dn,
      Router: ri,
      RouterProvider: s0,
      Routes: OC,
      ScrollRestoration: ZC,
      UNSAFE_DataRouterContext: ti,
      UNSAFE_DataRouterStateContext: Da,
      UNSAFE_LocationContext: ni,
      UNSAFE_NavigationContext: En,
      UNSAFE_RouteContext: Et,
      UNSAFE_useRouteId: r0,
      UNSAFE_useScrollRestoration: y0,
      createBrowserRouter: HC,
      createHashRouter: f0,
      createMemoryRouter: $C,
      createPath: on,
      createRoutesFromChildren: Ho,
      createRoutesFromElements: Ho,
      createSearchParams: uu,
      defer: HE,
      generatePath: DE,
      isRouteErrorResponse: qd,
      json: zE,
      matchPath: Hd,
      matchRoutes: Ur,
      parsePath: Kt,
      redirect: WE,
      renderMatches: DC,
      resolvePath: Ug,
      unstable_HistoryRouter: VC,
      unstable_useBlocker: u0,
      unstable_usePrompt: ub,
      useActionData: xC,
      useAsyncError: EC,
      useAsyncValue: l0,
      useBeforeUnload: ab,
      useFetcher: ob,
      useFetchers: ib,
      useFormAction: m0,
      useHref: Yg,
      useInRouterContext: Pr,
      useLinkClickHandler: v0,
      useLoaderData: wC,
      useLocation: un,
      useMatch: sC,
      useMatches: i0,
      useNavigate: io,
      useNavigation: o0,
      useNavigationType: uC,
      useOutlet: Zg,
      useOutletContext: fC,
      useParams: dC,
      useResolvedPath: $a,
      useRevalidator: gC,
      useRouteError: a0,
      useRouteLoaderData: SC,
      useRoutes: e0,
      useSearchParams: eb,
      useSubmit: tb,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
var g0 = { exports: {} },
  w0 = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wo = S;
function cb(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var fb = typeof Object.is == "function" ? Object.is : cb,
  db = Wo.useState,
  pb = Wo.useEffect,
  hb = Wo.useLayoutEffect,
  vb = Wo.useDebugValue;
function mb(e, t) {
  var n = t(),
    r = db({ inst: { value: n, getSnapshot: t } }),
    o = r[0].inst,
    i = r[1];
  return (
    hb(
      function () {
        (o.value = n), (o.getSnapshot = t), sc(o) && i({ inst: o });
      },
      [e, n, t]
    ),
    pb(
      function () {
        return (
          sc(o) && i({ inst: o }),
          e(function () {
            sc(o) && i({ inst: o });
          })
        );
      },
      [e]
    ),
    vb(n),
    n
  );
}
function sc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !fb(e, n);
  } catch {
    return !0;
  }
}
function yb(e, t) {
  return t();
}
var gb =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? yb
    : mb;
w0.useSyncExternalStore =
  Wo.useSyncExternalStore !== void 0 ? Wo.useSyncExternalStore : gb;
g0.exports = w0;
var wb = g0.exports,
  S0 = { exports: {} },
  x0 = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ku = S,
  Sb = wb;
function xb(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Eb = typeof Object.is == "function" ? Object.is : xb,
  Cb = Sb.useSyncExternalStore,
  bb = Ku.useRef,
  kb = Ku.useEffect,
  Rb = Ku.useMemo,
  Ob = Ku.useDebugValue;
x0.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var i = bb(null);
  if (i.current === null) {
    var a = { hasValue: !1, value: null };
    i.current = a;
  } else a = i.current;
  i = Rb(
    function () {
      function u(p) {
        if (!s) {
          if (((s = !0), (c = p), (p = r(p)), o !== void 0 && a.hasValue)) {
            var g = a.value;
            if (o(g, p)) return (f = g);
          }
          return (f = p);
        }
        if (((g = f), Eb(c, p))) return g;
        var y = r(p);
        return o !== void 0 && o(g, y) ? g : ((c = p), (f = y));
      }
      var s = !1,
        c,
        f,
        h = n === void 0 ? null : n;
      return [
        function () {
          return u(t());
        },
        h === null
          ? void 0
          : function () {
              return u(h());
            },
      ];
    },
    [t, n, r, o]
  );
  var l = Cb(e, i[0], i[1]);
  return (
    kb(
      function () {
        (a.hasValue = !0), (a.value = l);
      },
      [l]
    ),
    Ob(l),
    l
  );
};
S0.exports = x0;
var Pb = S0.exports;
function Tb(e) {
  e();
}
let E0 = Tb;
const Nb = (e) => (E0 = e),
  Mb = () => E0;
let cc = null;
function Db() {
  return cc || (cc = S.createContext(null)), cc;
}
const Sr = new Proxy(
  {},
  new Proxy(
    {},
    {
      get(e, t) {
        const n = Db();
        return (r, ...o) => Reflect[t](n, ...o);
      },
    }
  )
);
function tp(e = Sr) {
  return function () {
    return S.useContext(e);
  };
}
const C0 = tp(),
  $b = () => {
    throw new Error("uSES not initialized!");
  };
let b0 = $b;
const jb = (e) => {
    b0 = e;
  },
  Ib = (e, t) => e === t;
function Lb(e = Sr) {
  const t = e === Sr ? C0 : tp(e);
  return function (r, o = {}) {
    const {
        equalityFn: i = Ib,
        stabilityCheck: a = void 0,
        noopCheck: l = void 0,
      } = typeof o == "function" ? { equalityFn: o } : o,
      {
        store: u,
        subscription: s,
        getServerState: c,
        stabilityCheck: f,
        noopCheck: h,
      } = t();
    S.useRef(!0);
    const p = S.useCallback(
        {
          [r.name](y) {
            return r(y);
          },
        }[r.name],
        [r, f, a]
      ),
      g = b0(s.addNestedSub, u.getState, c || u.getState, p, i);
    return S.useDebugValue(g), g;
  };
}
const ao = Lb();
function Nf() {
  return (
    (Nf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Nf.apply(this, arguments)
  );
}
function k0(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var R0 = { exports: {} },
  ve = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ke = typeof Symbol == "function" && Symbol.for,
  np = Ke ? Symbol.for("react.element") : 60103,
  rp = Ke ? Symbol.for("react.portal") : 60106,
  Vu = Ke ? Symbol.for("react.fragment") : 60107,
  Gu = Ke ? Symbol.for("react.strict_mode") : 60108,
  Yu = Ke ? Symbol.for("react.profiler") : 60114,
  Xu = Ke ? Symbol.for("react.provider") : 60109,
  Ju = Ke ? Symbol.for("react.context") : 60110,
  op = Ke ? Symbol.for("react.async_mode") : 60111,
  Zu = Ke ? Symbol.for("react.concurrent_mode") : 60111,
  es = Ke ? Symbol.for("react.forward_ref") : 60112,
  ts = Ke ? Symbol.for("react.suspense") : 60113,
  Ab = Ke ? Symbol.for("react.suspense_list") : 60120,
  ns = Ke ? Symbol.for("react.memo") : 60115,
  rs = Ke ? Symbol.for("react.lazy") : 60116,
  _b = Ke ? Symbol.for("react.block") : 60121,
  Fb = Ke ? Symbol.for("react.fundamental") : 60117,
  zb = Ke ? Symbol.for("react.responder") : 60118,
  Ub = Ke ? Symbol.for("react.scope") : 60119;
function It(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case np:
        switch (((e = e.type), e)) {
          case op:
          case Zu:
          case Vu:
          case Yu:
          case Gu:
          case ts:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Ju:
              case es:
              case rs:
              case ns:
              case Xu:
                return e;
              default:
                return t;
            }
        }
      case rp:
        return t;
    }
  }
}
function O0(e) {
  return It(e) === Zu;
}
ve.AsyncMode = op;
ve.ConcurrentMode = Zu;
ve.ContextConsumer = Ju;
ve.ContextProvider = Xu;
ve.Element = np;
ve.ForwardRef = es;
ve.Fragment = Vu;
ve.Lazy = rs;
ve.Memo = ns;
ve.Portal = rp;
ve.Profiler = Yu;
ve.StrictMode = Gu;
ve.Suspense = ts;
ve.isAsyncMode = function (e) {
  return O0(e) || It(e) === op;
};
ve.isConcurrentMode = O0;
ve.isContextConsumer = function (e) {
  return It(e) === Ju;
};
ve.isContextProvider = function (e) {
  return It(e) === Xu;
};
ve.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === np;
};
ve.isForwardRef = function (e) {
  return It(e) === es;
};
ve.isFragment = function (e) {
  return It(e) === Vu;
};
ve.isLazy = function (e) {
  return It(e) === rs;
};
ve.isMemo = function (e) {
  return It(e) === ns;
};
ve.isPortal = function (e) {
  return It(e) === rp;
};
ve.isProfiler = function (e) {
  return It(e) === Yu;
};
ve.isStrictMode = function (e) {
  return It(e) === Gu;
};
ve.isSuspense = function (e) {
  return It(e) === ts;
};
ve.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Vu ||
    e === Zu ||
    e === Yu ||
    e === Gu ||
    e === ts ||
    e === Ab ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === rs ||
        e.$$typeof === ns ||
        e.$$typeof === Xu ||
        e.$$typeof === Ju ||
        e.$$typeof === es ||
        e.$$typeof === Fb ||
        e.$$typeof === zb ||
        e.$$typeof === Ub ||
        e.$$typeof === _b))
  );
};
ve.typeOf = It;
R0.exports = ve;
var Bb = R0.exports,
  P0 = Bb,
  Qb = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Hb = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  T0 = {};
T0[P0.ForwardRef] = Qb;
T0[P0.Memo] = Hb;
var ge = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ip = Symbol.for("react.element"),
  ap = Symbol.for("react.portal"),
  os = Symbol.for("react.fragment"),
  is = Symbol.for("react.strict_mode"),
  as = Symbol.for("react.profiler"),
  ls = Symbol.for("react.provider"),
  us = Symbol.for("react.context"),
  Wb = Symbol.for("react.server_context"),
  ss = Symbol.for("react.forward_ref"),
  cs = Symbol.for("react.suspense"),
  fs = Symbol.for("react.suspense_list"),
  ds = Symbol.for("react.memo"),
  ps = Symbol.for("react.lazy"),
  qb = Symbol.for("react.offscreen"),
  N0;
N0 = Symbol.for("react.module.reference");
function Vt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case ip:
        switch (((e = e.type), e)) {
          case os:
          case as:
          case is:
          case cs:
          case fs:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Wb:
              case us:
              case ss:
              case ps:
              case ds:
              case ls:
                return e;
              default:
                return t;
            }
        }
      case ap:
        return t;
    }
  }
}
ge.ContextConsumer = us;
ge.ContextProvider = ls;
ge.Element = ip;
ge.ForwardRef = ss;
ge.Fragment = os;
ge.Lazy = ps;
ge.Memo = ds;
ge.Portal = ap;
ge.Profiler = as;
ge.StrictMode = is;
ge.Suspense = cs;
ge.SuspenseList = fs;
ge.isAsyncMode = function () {
  return !1;
};
ge.isConcurrentMode = function () {
  return !1;
};
ge.isContextConsumer = function (e) {
  return Vt(e) === us;
};
ge.isContextProvider = function (e) {
  return Vt(e) === ls;
};
ge.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === ip;
};
ge.isForwardRef = function (e) {
  return Vt(e) === ss;
};
ge.isFragment = function (e) {
  return Vt(e) === os;
};
ge.isLazy = function (e) {
  return Vt(e) === ps;
};
ge.isMemo = function (e) {
  return Vt(e) === ds;
};
ge.isPortal = function (e) {
  return Vt(e) === ap;
};
ge.isProfiler = function (e) {
  return Vt(e) === as;
};
ge.isStrictMode = function (e) {
  return Vt(e) === is;
};
ge.isSuspense = function (e) {
  return Vt(e) === cs;
};
ge.isSuspenseList = function (e) {
  return Vt(e) === fs;
};
ge.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === os ||
    e === as ||
    e === is ||
    e === cs ||
    e === fs ||
    e === qb ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === ps ||
        e.$$typeof === ds ||
        e.$$typeof === ls ||
        e.$$typeof === us ||
        e.$$typeof === ss ||
        e.$$typeof === N0 ||
        e.getModuleId !== void 0))
  );
};
ge.typeOf = Vt;
function Kb() {
  const e = Mb();
  let t = null,
    n = null;
  return {
    clear() {
      (t = null), (n = null);
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      let r = [],
        o = t;
      for (; o; ) r.push(o), (o = o.next);
      return r;
    },
    subscribe(r) {
      let o = !0,
        i = (n = { callback: r, next: null, prev: n });
      return (
        i.prev ? (i.prev.next = i) : (t = i),
        function () {
          !o ||
            t === null ||
            ((o = !1),
            i.next ? (i.next.prev = i.prev) : (n = i.prev),
            i.prev ? (i.prev.next = i.next) : (t = i.next));
        }
      );
    },
  };
}
const cv = { notify() {}, get: () => [] };
function Vb(e, t) {
  let n,
    r = cv;
  function o(f) {
    return u(), r.subscribe(f);
  }
  function i() {
    r.notify();
  }
  function a() {
    c.onStateChange && c.onStateChange();
  }
  function l() {
    return !!n;
  }
  function u() {
    n || ((n = t ? t.addNestedSub(a) : e.subscribe(a)), (r = Kb()));
  }
  function s() {
    n && (n(), (n = void 0), r.clear(), (r = cv));
  }
  const c = {
    addNestedSub: o,
    notifyNestedSubs: i,
    handleChangeWrapper: a,
    isSubscribed: l,
    trySubscribe: u,
    tryUnsubscribe: s,
    getListeners: () => r,
  };
  return c;
}
const Gb =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Yb = Gb ? S.useLayoutEffect : S.useEffect;
function fv(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function cu(e, t) {
  if (fv(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !fv(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
function Xb({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  noopCheck: i = "once",
}) {
  const a = S.useMemo(() => {
      const s = Vb(e);
      return {
        store: e,
        subscription: s,
        getServerState: r ? () => r : void 0,
        stabilityCheck: o,
        noopCheck: i,
      };
    }, [e, r, o, i]),
    l = S.useMemo(() => e.getState(), [e]);
  Yb(() => {
    const { subscription: s } = a;
    return (
      (s.onStateChange = s.notifyNestedSubs),
      s.trySubscribe(),
      l !== e.getState() && s.notifyNestedSubs(),
      () => {
        s.tryUnsubscribe(), (s.onStateChange = void 0);
      }
    );
  }, [a, l]);
  const u = t || Sr;
  return ne.createElement(u.Provider, { value: a }, n);
}
function M0(e = Sr) {
  const t = e === Sr ? C0 : tp(e);
  return function () {
    const { store: r } = t();
    return r;
  };
}
const D0 = M0();
function Jb(e = Sr) {
  const t = e === Sr ? D0 : M0(e);
  return function () {
    return t().dispatch;
  };
}
const hs = Jb();
jb(Pb.useSyncExternalStoreWithSelector);
Nb(Qd.unstable_batchedUpdates);
function Xe(e) {
  for (
    var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw Error(
    "[Immer] minified error nr: " +
      e +
      (n.length
        ? " " +
          n
            .map(function (o) {
              return "'" + o + "'";
            })
            .join(",")
        : "") +
      ". Find the full error at: https://bit.ly/3cXEKWf"
  );
}
function an(e) {
  return !!e && !!e[Ce];
}
function ln(e) {
  var t;
  return (
    !!e &&
    ((function (n) {
      if (!n || typeof n != "object") return !1;
      var r = Object.getPrototypeOf(n);
      if (r === null) return !0;
      var o = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
      return (
        o === Object ||
        (typeof o == "function" && Function.toString.call(o) === lk)
      );
    })(e) ||
      Array.isArray(e) ||
      !!e[zi] ||
      !!(!((t = e.constructor) === null || t === void 0) && t[zi]) ||
      vs(e) ||
      ms(e))
  );
}
function Zb(e) {
  return an(e) || Xe(23, e), e[Ce].t;
}
function xr(e, t, n) {
  n === void 0 && (n = !1),
    Er(e) === 0
      ? (n ? Object.keys : Lo)(e).forEach(function (r) {
          (n && typeof r == "symbol") || t(r, e[r], e);
        })
      : e.forEach(function (r, o) {
          return t(o, r, e);
        });
}
function Er(e) {
  var t = e[Ce];
  return t
    ? t.i > 3
      ? t.i - 4
      : t.i
    : Array.isArray(e)
    ? 1
    : vs(e)
    ? 2
    : ms(e)
    ? 3
    : 0;
}
function hr(e, t) {
  return Er(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Dl(e, t) {
  return Er(e) === 2 ? e.get(t) : e[t];
}
function $0(e, t, n) {
  var r = Er(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function j0(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function vs(e) {
  return ik && e instanceof Map;
}
function ms(e) {
  return ak && e instanceof Set;
}
function jr(e) {
  return e.o || e.t;
}
function lp(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = L0(e);
  delete t[Ce];
  for (var n = Lo(t), r = 0; r < n.length; r++) {
    var o = n[r],
      i = t[o];
    i.writable === !1 && ((i.writable = !0), (i.configurable = !0)),
      (i.get || i.set) &&
        (t[o] = {
          configurable: !0,
          writable: !0,
          enumerable: i.enumerable,
          value: e[o],
        });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function up(e, t) {
  return (
    t === void 0 && (t = !1),
    sp(e) ||
      an(e) ||
      !ln(e) ||
      (Er(e) > 1 && (e.set = e.add = e.clear = e.delete = ek),
      Object.freeze(e),
      t &&
        xr(
          e,
          function (n, r) {
            return up(r, !0);
          },
          !0
        )),
    e
  );
}
function ek() {
  Xe(2);
}
function sp(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function gn(e) {
  var t = jf[e];
  return t || Xe(18, e), t;
}
function I0(e, t) {
  jf[e] || (jf[e] = t);
}
function Mf() {
  return va;
}
function fc(e, t) {
  t && (gn("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function fu(e) {
  Df(e), e.p.forEach(tk), (e.p = null);
}
function Df(e) {
  e === va && (va = e.l);
}
function dv(e) {
  return (va = { p: [], l: va, h: e, m: !0, _: 0 });
}
function tk(e) {
  var t = e[Ce];
  t.i === 0 || t.i === 1 ? t.j() : (t.g = !0);
}
function dc(e, t) {
  t._ = t.p.length;
  var n = t.p[0],
    r = e !== void 0 && e !== n;
  return (
    t.h.O || gn("ES5").S(t, e, r),
    r
      ? (n[Ce].P && (fu(t), Xe(4)),
        ln(e) && ((e = du(t, e)), t.l || pu(t, e)),
        t.u && gn("Patches").M(n[Ce].t, e, t.u, t.s))
      : (e = du(t, n, [])),
    fu(t),
    t.u && t.v(t.u, t.s),
    e !== fp ? e : void 0
  );
}
function du(e, t, n) {
  if (sp(t)) return t;
  var r = t[Ce];
  if (!r)
    return (
      xr(
        t,
        function (l, u) {
          return pv(e, r, t, l, u, n);
        },
        !0
      ),
      t
    );
  if (r.A !== e) return t;
  if (!r.P) return pu(e, r.t, !0), r.t;
  if (!r.I) {
    (r.I = !0), r.A._--;
    var o = r.i === 4 || r.i === 5 ? (r.o = lp(r.k)) : r.o,
      i = o,
      a = !1;
    r.i === 3 && ((i = new Set(o)), o.clear(), (a = !0)),
      xr(i, function (l, u) {
        return pv(e, r, o, l, u, n, a);
      }),
      pu(e, o, !1),
      n && e.u && gn("Patches").N(r, n, e.u, e.s);
  }
  return r.o;
}
function pv(e, t, n, r, o, i, a) {
  if (an(o)) {
    var l = du(e, o, i && t && t.i !== 3 && !hr(t.R, r) ? i.concat(r) : void 0);
    if (($0(n, r, l), !an(l))) return;
    e.m = !1;
  } else a && n.add(o);
  if (ln(o) && !sp(o)) {
    if (!e.h.D && e._ < 1) return;
    du(e, o), (t && t.A.l) || pu(e, o);
  }
}
function pu(e, t, n) {
  n === void 0 && (n = !1), !e.l && e.h.D && e.m && up(t, n);
}
function pc(e, t) {
  var n = e[Ce];
  return (n ? jr(n) : e)[t];
}
function hv(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var r = Object.getOwnPropertyDescriptor(n, t);
      if (r) return r;
      n = Object.getPrototypeOf(n);
    }
}
function er(e) {
  e.P || ((e.P = !0), e.l && er(e.l));
}
function hc(e) {
  e.o || (e.o = lp(e.t));
}
function $f(e, t, n) {
  var r = vs(t)
    ? gn("MapSet").F(t, n)
    : ms(t)
    ? gn("MapSet").T(t, n)
    : e.O
    ? (function (o, i) {
        var a = Array.isArray(o),
          l = {
            i: a ? 1 : 0,
            A: i ? i.A : Mf(),
            P: !1,
            I: !1,
            R: {},
            l: i,
            t: o,
            k: null,
            o: null,
            j: null,
            C: !1,
          },
          u = l,
          s = ma;
        a && ((u = [l]), (s = Ri));
        var c = Proxy.revocable(u, s),
          f = c.revoke,
          h = c.proxy;
        return (l.k = h), (l.j = f), h;
      })(t, n)
    : gn("ES5").J(t, n);
  return (n ? n.A : Mf()).p.push(r), r;
}
function nk(e) {
  return (
    an(e) || Xe(22, e),
    (function t(n) {
      if (!ln(n)) return n;
      var r,
        o = n[Ce],
        i = Er(n);
      if (o) {
        if (!o.P && (o.i < 4 || !gn("ES5").K(o))) return o.t;
        (o.I = !0), (r = vv(n, i)), (o.I = !1);
      } else r = vv(n, i);
      return (
        xr(r, function (a, l) {
          (o && Dl(o.t, a) === l) || $0(r, a, t(l));
        }),
        i === 3 ? new Set(r) : r
      );
    })(e)
  );
}
function vv(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return lp(e);
}
function rk() {
  function e(i, a) {
    var l = o[i];
    return (
      l
        ? (l.enumerable = a)
        : (o[i] = l =
            {
              configurable: !0,
              enumerable: a,
              get: function () {
                var u = this[Ce];
                return ma.get(u, i);
              },
              set: function (u) {
                var s = this[Ce];
                ma.set(s, i, u);
              },
            }),
      l
    );
  }
  function t(i) {
    for (var a = i.length - 1; a >= 0; a--) {
      var l = i[a][Ce];
      if (!l.P)
        switch (l.i) {
          case 5:
            r(l) && er(l);
            break;
          case 4:
            n(l) && er(l);
        }
    }
  }
  function n(i) {
    for (var a = i.t, l = i.k, u = Lo(l), s = u.length - 1; s >= 0; s--) {
      var c = u[s];
      if (c !== Ce) {
        var f = a[c];
        if (f === void 0 && !hr(a, c)) return !0;
        var h = l[c],
          p = h && h[Ce];
        if (p ? p.t !== f : !j0(h, f)) return !0;
      }
    }
    var g = !!a[Ce];
    return u.length !== Lo(a).length + (g ? 0 : 1);
  }
  function r(i) {
    var a = i.k;
    if (a.length !== i.t.length) return !0;
    var l = Object.getOwnPropertyDescriptor(a, a.length - 1);
    if (l && !l.get) return !0;
    for (var u = 0; u < a.length; u++) if (!a.hasOwnProperty(u)) return !0;
    return !1;
  }
  var o = {};
  I0("ES5", {
    J: function (i, a) {
      var l = Array.isArray(i),
        u = (function (c, f) {
          if (c) {
            for (var h = Array(f.length), p = 0; p < f.length; p++)
              Object.defineProperty(h, "" + p, e(p, !0));
            return h;
          }
          var g = L0(f);
          delete g[Ce];
          for (var y = Lo(g), w = 0; w < y.length; w++) {
            var d = y[w];
            g[d] = e(d, c || !!g[d].enumerable);
          }
          return Object.create(Object.getPrototypeOf(f), g);
        })(l, i),
        s = {
          i: l ? 5 : 4,
          A: a ? a.A : Mf(),
          P: !1,
          I: !1,
          R: {},
          l: a,
          t: i,
          k: u,
          o: null,
          g: !1,
          C: !1,
        };
      return Object.defineProperty(u, Ce, { value: s, writable: !0 }), u;
    },
    S: function (i, a, l) {
      l
        ? an(a) && a[Ce].A === i && t(i.p)
        : (i.u &&
            (function u(s) {
              if (s && typeof s == "object") {
                var c = s[Ce];
                if (c) {
                  var f = c.t,
                    h = c.k,
                    p = c.R,
                    g = c.i;
                  if (g === 4)
                    xr(h, function (m) {
                      m !== Ce &&
                        (f[m] !== void 0 || hr(f, m)
                          ? p[m] || u(h[m])
                          : ((p[m] = !0), er(c)));
                    }),
                      xr(f, function (m) {
                        h[m] !== void 0 || hr(h, m) || ((p[m] = !1), er(c));
                      });
                  else if (g === 5) {
                    if ((r(c) && (er(c), (p.length = !0)), h.length < f.length))
                      for (var y = h.length; y < f.length; y++) p[y] = !1;
                    else for (var w = f.length; w < h.length; w++) p[w] = !0;
                    for (
                      var d = Math.min(h.length, f.length), v = 0;
                      v < d;
                      v++
                    )
                      h.hasOwnProperty(v) || (p[v] = !0),
                        p[v] === void 0 && u(h[v]);
                  }
                }
              }
            })(i.p[0]),
          t(i.p));
    },
    K: function (i) {
      return i.i === 4 ? n(i) : r(i);
    },
  });
}
function ok() {
  function e(r) {
    if (!ln(r)) return r;
    if (Array.isArray(r)) return r.map(e);
    if (vs(r))
      return new Map(
        Array.from(r.entries()).map(function (a) {
          return [a[0], e(a[1])];
        })
      );
    if (ms(r)) return new Set(Array.from(r).map(e));
    var o = Object.create(Object.getPrototypeOf(r));
    for (var i in r) o[i] = e(r[i]);
    return hr(r, zi) && (o[zi] = r[zi]), o;
  }
  function t(r) {
    return an(r) ? e(r) : r;
  }
  var n = "add";
  I0("Patches", {
    $: function (r, o) {
      return (
        o.forEach(function (i) {
          for (var a = i.path, l = i.op, u = r, s = 0; s < a.length - 1; s++) {
            var c = Er(u),
              f = a[s];
            typeof f != "string" && typeof f != "number" && (f = "" + f),
              (c !== 0 && c !== 1) ||
                (f !== "__proto__" && f !== "constructor") ||
                Xe(24),
              typeof u == "function" && f === "prototype" && Xe(24),
              typeof (u = Dl(u, f)) != "object" && Xe(15, a.join("/"));
          }
          var h = Er(u),
            p = e(i.value),
            g = a[a.length - 1];
          switch (l) {
            case "replace":
              switch (h) {
                case 2:
                  return u.set(g, p);
                case 3:
                  Xe(16);
                default:
                  return (u[g] = p);
              }
            case n:
              switch (h) {
                case 1:
                  return g === "-" ? u.push(p) : u.splice(g, 0, p);
                case 2:
                  return u.set(g, p);
                case 3:
                  return u.add(p);
                default:
                  return (u[g] = p);
              }
            case "remove":
              switch (h) {
                case 1:
                  return u.splice(g, 1);
                case 2:
                  return u.delete(g);
                case 3:
                  return u.delete(i.value);
                default:
                  return delete u[g];
              }
            default:
              Xe(17, l);
          }
        }),
        r
      );
    },
    N: function (r, o, i, a) {
      switch (r.i) {
        case 0:
        case 4:
        case 2:
          return (function (l, u, s, c) {
            var f = l.t,
              h = l.o;
            xr(l.R, function (p, g) {
              var y = Dl(f, p),
                w = Dl(h, p),
                d = g ? (hr(f, p) ? "replace" : n) : "remove";
              if (y !== w || d !== "replace") {
                var v = u.concat(p);
                s.push(
                  d === "remove"
                    ? { op: d, path: v }
                    : { op: d, path: v, value: w }
                ),
                  c.push(
                    d === n
                      ? { op: "remove", path: v }
                      : d === "remove"
                      ? { op: n, path: v, value: t(y) }
                      : { op: "replace", path: v, value: t(y) }
                  );
              }
            });
          })(r, o, i, a);
        case 5:
        case 1:
          return (function (l, u, s, c) {
            var f = l.t,
              h = l.R,
              p = l.o;
            if (p.length < f.length) {
              var g = [p, f];
              (f = g[0]), (p = g[1]);
              var y = [c, s];
              (s = y[0]), (c = y[1]);
            }
            for (var w = 0; w < f.length; w++)
              if (h[w] && p[w] !== f[w]) {
                var d = u.concat([w]);
                s.push({ op: "replace", path: d, value: t(p[w]) }),
                  c.push({ op: "replace", path: d, value: t(f[w]) });
              }
            for (var v = f.length; v < p.length; v++) {
              var m = u.concat([v]);
              s.push({ op: n, path: m, value: t(p[v]) });
            }
            f.length < p.length &&
              c.push({
                op: "replace",
                path: u.concat(["length"]),
                value: f.length,
              });
          })(r, o, i, a);
        case 3:
          return (function (l, u, s, c) {
            var f = l.t,
              h = l.o,
              p = 0;
            f.forEach(function (g) {
              if (!h.has(g)) {
                var y = u.concat([p]);
                s.push({ op: "remove", path: y, value: g }),
                  c.unshift({ op: n, path: y, value: g });
              }
              p++;
            }),
              (p = 0),
              h.forEach(function (g) {
                if (!f.has(g)) {
                  var y = u.concat([p]);
                  s.push({ op: n, path: y, value: g }),
                    c.unshift({ op: "remove", path: y, value: g });
                }
                p++;
              });
          })(r, o, i, a);
      }
    },
    M: function (r, o, i, a) {
      i.push({ op: "replace", path: [], value: o === fp ? void 0 : o }),
        a.push({ op: "replace", path: [], value: r });
    },
  });
}
var mv,
  va,
  cp = typeof Symbol < "u" && typeof Symbol("x") == "symbol",
  ik = typeof Map < "u",
  ak = typeof Set < "u",
  yv = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u",
  fp = cp
    ? Symbol.for("immer-nothing")
    : (((mv = {})["immer-nothing"] = !0), mv),
  zi = cp ? Symbol.for("immer-draftable") : "__$immer_draftable",
  Ce = cp ? Symbol.for("immer-state") : "__$immer_state",
  lk = "" + Object.prototype.constructor,
  Lo =
    typeof Reflect < "u" && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e)
          );
        }
      : Object.getOwnPropertyNames,
  L0 =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        Lo(e).forEach(function (n) {
          t[n] = Object.getOwnPropertyDescriptor(e, n);
        }),
        t
      );
    },
  jf = {},
  ma = {
    get: function (e, t) {
      if (t === Ce) return e;
      var n = jr(e);
      if (!hr(n, t))
        return (function (o, i, a) {
          var l,
            u = hv(i, a);
          return u
            ? "value" in u
              ? u.value
              : (l = u.get) === null || l === void 0
              ? void 0
              : l.call(o.k)
            : void 0;
        })(e, n, t);
      var r = n[t];
      return e.I || !ln(r)
        ? r
        : r === pc(e.t, t)
        ? (hc(e), (e.o[t] = $f(e.A.h, r, e)))
        : r;
    },
    has: function (e, t) {
      return t in jr(e);
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(jr(e));
    },
    set: function (e, t, n) {
      var r = hv(jr(e), t);
      if (r != null && r.set) return r.set.call(e.k, n), !0;
      if (!e.P) {
        var o = pc(jr(e), t),
          i = o == null ? void 0 : o[Ce];
        if (i && i.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
        if (j0(n, o) && (n !== void 0 || hr(e.t, t))) return !0;
        hc(e), er(e);
      }
      return (
        (e.o[t] === n && (n !== void 0 || t in e.o)) ||
          (Number.isNaN(n) && Number.isNaN(e.o[t])) ||
          ((e.o[t] = n), (e.R[t] = !0)),
        !0
      );
    },
    deleteProperty: function (e, t) {
      return (
        pc(e.t, t) !== void 0 || t in e.t
          ? ((e.R[t] = !1), hc(e), er(e))
          : delete e.R[t],
        e.o && delete e.o[t],
        !0
      );
    },
    getOwnPropertyDescriptor: function (e, t) {
      var n = jr(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.i !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty: function () {
      Xe(11);
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t);
    },
    setPrototypeOf: function () {
      Xe(12);
    },
  },
  Ri = {};
xr(ma, function (e, t) {
  Ri[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
}),
  (Ri.deleteProperty = function (e, t) {
    return Ri.set.call(this, e, t, void 0);
  }),
  (Ri.set = function (e, t, n) {
    return ma.set.call(this, e[0], t, n, e[0]);
  });
var uk = (function () {
    function e(n) {
      var r = this;
      (this.O = yv),
        (this.D = !0),
        (this.produce = function (o, i, a) {
          if (typeof o == "function" && typeof i != "function") {
            var l = i;
            i = o;
            var u = r;
            return function (y) {
              var w = this;
              y === void 0 && (y = l);
              for (
                var d = arguments.length, v = Array(d > 1 ? d - 1 : 0), m = 1;
                m < d;
                m++
              )
                v[m - 1] = arguments[m];
              return u.produce(y, function (x) {
                var E;
                return (E = i).call.apply(E, [w, x].concat(v));
              });
            };
          }
          var s;
          if (
            (typeof i != "function" && Xe(6),
            a !== void 0 && typeof a != "function" && Xe(7),
            ln(o))
          ) {
            var c = dv(r),
              f = $f(r, o, void 0),
              h = !0;
            try {
              (s = i(f)), (h = !1);
            } finally {
              h ? fu(c) : Df(c);
            }
            return typeof Promise < "u" && s instanceof Promise
              ? s.then(
                  function (y) {
                    return fc(c, a), dc(y, c);
                  },
                  function (y) {
                    throw (fu(c), y);
                  }
                )
              : (fc(c, a), dc(s, c));
          }
          if (!o || typeof o != "object") {
            if (
              ((s = i(o)) === void 0 && (s = o),
              s === fp && (s = void 0),
              r.D && up(s, !0),
              a)
            ) {
              var p = [],
                g = [];
              gn("Patches").M(o, s, p, g), a(p, g);
            }
            return s;
          }
          Xe(21, o);
        }),
        (this.produceWithPatches = function (o, i) {
          if (typeof o == "function")
            return function (s) {
              for (
                var c = arguments.length, f = Array(c > 1 ? c - 1 : 0), h = 1;
                h < c;
                h++
              )
                f[h - 1] = arguments[h];
              return r.produceWithPatches(s, function (p) {
                return o.apply(void 0, [p].concat(f));
              });
            };
          var a,
            l,
            u = r.produce(o, i, function (s, c) {
              (a = s), (l = c);
            });
          return typeof Promise < "u" && u instanceof Promise
            ? u.then(function (s) {
                return [s, a, l];
              })
            : [u, a, l];
        }),
        typeof (n == null ? void 0 : n.useProxies) == "boolean" &&
          this.setUseProxies(n.useProxies),
        typeof (n == null ? void 0 : n.autoFreeze) == "boolean" &&
          this.setAutoFreeze(n.autoFreeze);
    }
    var t = e.prototype;
    return (
      (t.createDraft = function (n) {
        ln(n) || Xe(8), an(n) && (n = nk(n));
        var r = dv(this),
          o = $f(this, n, void 0);
        return (o[Ce].C = !0), Df(r), o;
      }),
      (t.finishDraft = function (n, r) {
        var o = n && n[Ce],
          i = o.A;
        return fc(i, r), dc(void 0, i);
      }),
      (t.setAutoFreeze = function (n) {
        this.D = n;
      }),
      (t.setUseProxies = function (n) {
        n && !yv && Xe(20), (this.O = n);
      }),
      (t.applyPatches = function (n, r) {
        var o;
        for (o = r.length - 1; o >= 0; o--) {
          var i = r[o];
          if (i.path.length === 0 && i.op === "replace") {
            n = i.value;
            break;
          }
        }
        o > -1 && (r = r.slice(o + 1));
        var a = gn("Patches").$;
        return an(n)
          ? a(n, r)
          : this.produce(n, function (l) {
              return a(l, r);
            });
      }),
      e
    );
  })(),
  Mt = new uk(),
  ja = Mt.produce,
  A0 = Mt.produceWithPatches.bind(Mt);
Mt.setAutoFreeze.bind(Mt);
Mt.setUseProxies.bind(Mt);
var gv = Mt.applyPatches.bind(Mt);
Mt.createDraft.bind(Mt);
Mt.finishDraft.bind(Mt);
function ya(e) {
  "@babel/helpers - typeof";
  return (
    (ya =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ya(e)
  );
}
function sk(e, t) {
  if (ya(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (ya(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ck(e) {
  var t = sk(e, "string");
  return ya(t) === "symbol" ? t : String(t);
}
function fk(e, t, n) {
  return (
    (t = ck(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function wv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Sv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? wv(Object(n), !0).forEach(function (r) {
          fk(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : wv(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function rt(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var xv = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  vc = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  hu = {
    INIT: "@@redux/INIT" + vc(),
    REPLACE: "@@redux/REPLACE" + vc(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + vc();
    },
  };
function dk(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function _0(e, t, n) {
  var r;
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(rt(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(rt(1));
    return n(_0)(e, t);
  }
  if (typeof e != "function") throw new Error(rt(2));
  var o = e,
    i = t,
    a = [],
    l = a,
    u = !1;
  function s() {
    l === a && (l = a.slice());
  }
  function c() {
    if (u) throw new Error(rt(3));
    return i;
  }
  function f(y) {
    if (typeof y != "function") throw new Error(rt(4));
    if (u) throw new Error(rt(5));
    var w = !0;
    return (
      s(),
      l.push(y),
      function () {
        if (w) {
          if (u) throw new Error(rt(6));
          (w = !1), s();
          var v = l.indexOf(y);
          l.splice(v, 1), (a = null);
        }
      }
    );
  }
  function h(y) {
    if (!dk(y)) throw new Error(rt(7));
    if (typeof y.type > "u") throw new Error(rt(8));
    if (u) throw new Error(rt(9));
    try {
      (u = !0), (i = o(i, y));
    } finally {
      u = !1;
    }
    for (var w = (a = l), d = 0; d < w.length; d++) {
      var v = w[d];
      v();
    }
    return y;
  }
  function p(y) {
    if (typeof y != "function") throw new Error(rt(10));
    (o = y), h({ type: hu.REPLACE });
  }
  function g() {
    var y,
      w = f;
    return (
      (y = {
        subscribe: function (v) {
          if (typeof v != "object" || v === null) throw new Error(rt(11));
          function m() {
            v.next && v.next(c());
          }
          m();
          var x = w(m);
          return { unsubscribe: x };
        },
      }),
      (y[xv] = function () {
        return this;
      }),
      y
    );
  }
  return (
    h({ type: hu.INIT }),
    (r = { dispatch: h, subscribe: f, getState: c, replaceReducer: p }),
    (r[xv] = g),
    r
  );
}
function pk(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: hu.INIT });
    if (typeof r > "u") throw new Error(rt(12));
    if (typeof n(void 0, { type: hu.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(rt(13));
  });
}
function F0(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var o = t[r];
    typeof e[o] == "function" && (n[o] = e[o]);
  }
  var i = Object.keys(n),
    a;
  try {
    pk(n);
  } catch (l) {
    a = l;
  }
  return function (u, s) {
    if ((u === void 0 && (u = {}), a)) throw a;
    for (var c = !1, f = {}, h = 0; h < i.length; h++) {
      var p = i[h],
        g = n[p],
        y = u[p],
        w = g(y, s);
      if (typeof w > "u") throw (s && s.type, new Error(rt(14)));
      (f[p] = w), (c = c || w !== y);
    }
    return (c = c || i.length !== Object.keys(u).length), c ? f : u;
  };
}
function vu() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0
    ? function (r) {
        return r;
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (r, o) {
        return function () {
          return r(o.apply(void 0, arguments));
        };
      });
}
function hk() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return function () {
      var o = r.apply(void 0, arguments),
        i = function () {
          throw new Error(rt(15));
        },
        a = {
          getState: o.getState,
          dispatch: function () {
            return i.apply(void 0, arguments);
          },
        },
        l = t.map(function (u) {
          return u(a);
        });
      return (
        (i = vu.apply(void 0, l)(o.dispatch)),
        Sv(Sv({}, o), {}, { dispatch: i })
      );
    };
  };
}
var mu = "NOT_FOUND";
function vk(e) {
  var t;
  return {
    get: function (r) {
      return t && e(t.key, r) ? t.value : mu;
    },
    put: function (r, o) {
      t = { key: r, value: o };
    },
    getEntries: function () {
      return t ? [t] : [];
    },
    clear: function () {
      t = void 0;
    },
  };
}
function mk(e, t) {
  var n = [];
  function r(l) {
    var u = n.findIndex(function (c) {
      return t(l, c.key);
    });
    if (u > -1) {
      var s = n[u];
      return u > 0 && (n.splice(u, 1), n.unshift(s)), s.value;
    }
    return mu;
  }
  function o(l, u) {
    r(l) === mu && (n.unshift({ key: l, value: u }), n.length > e && n.pop());
  }
  function i() {
    return n;
  }
  function a() {
    n = [];
  }
  return { get: r, put: o, getEntries: i, clear: a };
}
var yk = function (t, n) {
  return t === n;
};
function gk(e) {
  return function (n, r) {
    if (n === null || r === null || n.length !== r.length) return !1;
    for (var o = n.length, i = 0; i < o; i++) if (!e(n[i], r[i])) return !1;
    return !0;
  };
}
function If(e, t) {
  var n = typeof t == "object" ? t : { equalityCheck: t },
    r = n.equalityCheck,
    o = r === void 0 ? yk : r,
    i = n.maxSize,
    a = i === void 0 ? 1 : i,
    l = n.resultEqualityCheck,
    u = gk(o),
    s = a === 1 ? vk(u) : mk(a, u);
  function c() {
    var f = s.get(arguments);
    if (f === mu) {
      if (((f = e.apply(null, arguments)), l)) {
        var h = s.getEntries(),
          p = h.find(function (g) {
            return l(g.value, f);
          });
        p && (f = p.value);
      }
      s.put(arguments, f);
    }
    return f;
  }
  return (
    (c.clearCache = function () {
      return s.clear();
    }),
    c
  );
}
function wk(e) {
  var t = Array.isArray(e[0]) ? e[0] : e;
  if (
    !t.every(function (r) {
      return typeof r == "function";
    })
  ) {
    var n = t
      .map(function (r) {
        return typeof r == "function"
          ? "function " + (r.name || "unnamed") + "()"
          : typeof r;
      })
      .join(", ");
    throw new Error(
      "createSelector expects all input-selectors to be functions, but received the following types: [" +
        n +
        "]"
    );
  }
  return t;
}
function Sk(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var o = function () {
    for (var a = arguments.length, l = new Array(a), u = 0; u < a; u++)
      l[u] = arguments[u];
    var s = 0,
      c,
      f = { memoizeOptions: void 0 },
      h = l.pop();
    if (
      (typeof h == "object" && ((f = h), (h = l.pop())), typeof h != "function")
    )
      throw new Error(
        "createSelector expects an output function after the inputs, but received: [" +
          typeof h +
          "]"
      );
    var p = f,
      g = p.memoizeOptions,
      y = g === void 0 ? n : g,
      w = Array.isArray(y) ? y : [y],
      d = wk(l),
      v = e.apply(
        void 0,
        [
          function () {
            return s++, h.apply(null, arguments);
          },
        ].concat(w)
      ),
      m = e(function () {
        for (var E = [], C = d.length, b = 0; b < C; b++)
          E.push(d[b].apply(null, arguments));
        return (c = v.apply(null, E)), c;
      });
    return (
      Object.assign(m, {
        resultFunc: h,
        memoizedResultFunc: v,
        dependencies: d,
        lastResult: function () {
          return c;
        },
        recomputations: function () {
          return s;
        },
        resetRecomputations: function () {
          return (s = 0);
        },
      }),
      m
    );
  };
  return o;
}
var Ui = Sk(If);
function z0(e) {
  var t = function (r) {
    var o = r.dispatch,
      i = r.getState;
    return function (a) {
      return function (l) {
        return typeof l == "function" ? l(o, i, e) : a(l);
      };
    };
  };
  return t;
}
var U0 = z0();
U0.withExtraArgument = z0;
const Ev = U0;
var B0 =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, o) {
                r.__proto__ = o;
              }) ||
            function (r, o) {
              for (var i in o)
                Object.prototype.hasOwnProperty.call(o, i) && (r[i] = o[i]);
            }),
          e(t, n)
        );
      };
      return function (t, n) {
        if (typeof n != "function" && n !== null)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        e(t, n);
        function r() {
          this.constructor = t;
        }
        t.prototype =
          n === null
            ? Object.create(n)
            : ((r.prototype = n.prototype), new r());
      };
    })(),
  xk =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (i[0] & 1) throw i[1];
            return i[1];
          },
          trys: [],
          ops: [],
        },
        r,
        o,
        i,
        a;
      return (
        (a = { next: l(0), throw: l(1), return: l(2) }),
        typeof Symbol == "function" &&
          (a[Symbol.iterator] = function () {
            return this;
          }),
        a
      );
      function l(s) {
        return function (c) {
          return u([s, c]);
        };
      }
      function u(s) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; n; )
          try {
            if (
              ((r = 1),
              o &&
                (i =
                  s[0] & 2
                    ? o.return
                    : s[0]
                    ? o.throw || ((i = o.return) && i.call(o), 0)
                    : o.next) &&
                !(i = i.call(o, s[1])).done)
            )
              return i;
            switch (((o = 0), i && (s = [s[0] & 2, i.value]), s[0])) {
              case 0:
              case 1:
                i = s;
                break;
              case 4:
                return n.label++, { value: s[1], done: !1 };
              case 5:
                n.label++, (o = s[1]), (s = [0]);
                continue;
              case 7:
                (s = n.ops.pop()), n.trys.pop();
                continue;
              default:
                if (
                  ((i = n.trys),
                  !(i = i.length > 0 && i[i.length - 1]) &&
                    (s[0] === 6 || s[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (s[0] === 3 && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                  n.label = s[1];
                  break;
                }
                if (s[0] === 6 && n.label < i[1]) {
                  (n.label = i[1]), (i = s);
                  break;
                }
                if (i && n.label < i[2]) {
                  (n.label = i[2]), n.ops.push(s);
                  break;
                }
                i[2] && n.ops.pop(), n.trys.pop();
                continue;
            }
            s = t.call(e, n);
          } catch (c) {
            (s = [6, c]), (o = 0);
          } finally {
            r = i = 0;
          }
        if (s[0] & 5) throw s[1];
        return { value: s[0] ? s[1] : void 0, done: !0 };
      }
    },
  qo =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n];
      return e;
    },
  Ek = Object.defineProperty,
  Ck = Object.defineProperties,
  bk = Object.getOwnPropertyDescriptors,
  Cv = Object.getOwnPropertySymbols,
  kk = Object.prototype.hasOwnProperty,
  Rk = Object.prototype.propertyIsEnumerable,
  bv = function (e, t, n) {
    return t in e
      ? Ek(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  vr = function (e, t) {
    for (var n in t || (t = {})) kk.call(t, n) && bv(e, n, t[n]);
    if (Cv)
      for (var r = 0, o = Cv(t); r < o.length; r++) {
        var n = o[r];
        Rk.call(t, n) && bv(e, n, t[n]);
      }
    return e;
  },
  mc = function (e, t) {
    return Ck(e, bk(t));
  },
  Ok = function (e, t, n) {
    return new Promise(function (r, o) {
      var i = function (u) {
          try {
            l(n.next(u));
          } catch (s) {
            o(s);
          }
        },
        a = function (u) {
          try {
            l(n.throw(u));
          } catch (s) {
            o(s);
          }
        },
        l = function (u) {
          return u.done ? r(u.value) : Promise.resolve(u.value).then(i, a);
        };
      l((n = n.apply(e, t)).next());
    });
  },
  Pk =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? vu
              : vu.apply(null, arguments);
        };
function Cr(e) {
  if (typeof e != "object" || e === null) return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  for (var n = t; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
var Tk = (function (e) {
    B0(t, e);
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      var o = e.apply(this, n) || this;
      return Object.setPrototypeOf(o, t.prototype), o;
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return e.prototype.concat.apply(this, n);
      }),
      (t.prototype.prepend = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return n.length === 1 && Array.isArray(n[0])
          ? new (t.bind.apply(t, qo([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, qo([void 0], n.concat(this))))();
      }),
      t
    );
  })(Array),
  Nk = (function (e) {
    B0(t, e);
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      var o = e.apply(this, n) || this;
      return Object.setPrototypeOf(o, t.prototype), o;
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return e.prototype.concat.apply(this, n);
      }),
      (t.prototype.prepend = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return n.length === 1 && Array.isArray(n[0])
          ? new (t.bind.apply(t, qo([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, qo([void 0], n.concat(this))))();
      }),
      t
    );
  })(Array);
function Lf(e) {
  return ln(e) ? ja(e, function () {}) : e;
}
function Mk(e) {
  return typeof e == "boolean";
}
function Dk() {
  return function (t) {
    return $k(t);
  };
}
function $k(e) {
  e === void 0 && (e = {});
  var t = e.thunk,
    n = t === void 0 ? !0 : t;
  e.immutableCheck, e.serializableCheck;
  var r = new Tk();
  return (
    n && (Mk(n) ? r.push(Ev) : r.push(Ev.withExtraArgument(n.extraArgument))), r
  );
}
var jk = !0;
function Ik(e) {
  var t = Dk(),
    n = e || {},
    r = n.reducer,
    o = r === void 0 ? void 0 : r,
    i = n.middleware,
    a = i === void 0 ? t() : i,
    l = n.devTools,
    u = l === void 0 ? !0 : l,
    s = n.preloadedState,
    c = s === void 0 ? void 0 : s,
    f = n.enhancers,
    h = f === void 0 ? void 0 : f,
    p;
  if (typeof o == "function") p = o;
  else if (Cr(o)) p = F0(o);
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    );
  var g = a;
  typeof g == "function" && (g = g(t));
  var y = hk.apply(void 0, g),
    w = vu;
  u && (w = Pk(vr({ trace: !jk }, typeof u == "object" && u)));
  var d = new Nk(y),
    v = d;
  Array.isArray(h) ? (v = qo([y], h)) : typeof h == "function" && (v = h(d));
  var m = w.apply(void 0, v);
  return _0(p, c, m);
}
function gt(e, t) {
  function n() {
    for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
    if (t) {
      var i = t.apply(void 0, r);
      if (!i) throw new Error("prepareAction did not return an object");
      return vr(
        vr({ type: e, payload: i.payload }, "meta" in i && { meta: i.meta }),
        "error" in i && { error: i.error }
      );
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = function () {
      return "" + e;
    }),
    (n.type = e),
    (n.match = function (r) {
      return r.type === e;
    }),
    n
  );
}
function Q0(e) {
  var t = {},
    n = [],
    r,
    o = {
      addCase: function (i, a) {
        var l = typeof i == "string" ? i : i.type;
        if (l in t)
          throw new Error(
            "addCase cannot be called with two reducers for the same action type"
          );
        return (t[l] = a), o;
      },
      addMatcher: function (i, a) {
        return n.push({ matcher: i, reducer: a }), o;
      },
      addDefaultCase: function (i) {
        return (r = i), o;
      },
    };
  return e(o), [t, n, r];
}
function Lk(e) {
  return typeof e == "function";
}
function Ak(e, t, n, r) {
  n === void 0 && (n = []);
  var o = typeof t == "function" ? Q0(t) : [t, n, r],
    i = o[0],
    a = o[1],
    l = o[2],
    u;
  if (Lk(e))
    u = function () {
      return Lf(e());
    };
  else {
    var s = Lf(e);
    u = function () {
      return s;
    };
  }
  function c(f, h) {
    f === void 0 && (f = u());
    var p = qo(
      [i[h.type]],
      a
        .filter(function (g) {
          var y = g.matcher;
          return y(h);
        })
        .map(function (g) {
          var y = g.reducer;
          return y;
        })
    );
    return (
      p.filter(function (g) {
        return !!g;
      }).length === 0 && (p = [l]),
      p.reduce(function (g, y) {
        if (y)
          if (an(g)) {
            var w = g,
              d = y(w, h);
            return d === void 0 ? g : d;
          } else {
            if (ln(g))
              return ja(g, function (v) {
                return y(v, h);
              });
            var d = y(g, h);
            if (d === void 0) {
              if (g === null) return g;
              throw Error(
                "A case reducer on a non-draftable value must not return undefined"
              );
            }
            return d;
          }
        return g;
      }, f)
    );
  }
  return (c.getInitialState = u), c;
}
function _k(e, t) {
  return e + "/" + t;
}
function Ir(e) {
  var t = e.name;
  if (!t) throw new Error("`name` is a required option for createSlice");
  typeof process < "u";
  var n =
      typeof e.initialState == "function" ? e.initialState : Lf(e.initialState),
    r = e.reducers || {},
    o = Object.keys(r),
    i = {},
    a = {},
    l = {};
  o.forEach(function (c) {
    var f = r[c],
      h = _k(t, c),
      p,
      g;
    "reducer" in f ? ((p = f.reducer), (g = f.prepare)) : (p = f),
      (i[c] = p),
      (a[h] = p),
      (l[c] = g ? gt(h, g) : gt(h));
  });
  function u() {
    var c =
        typeof e.extraReducers == "function"
          ? Q0(e.extraReducers)
          : [e.extraReducers],
      f = c[0],
      h = f === void 0 ? {} : f,
      p = c[1],
      g = p === void 0 ? [] : p,
      y = c[2],
      w = y === void 0 ? void 0 : y,
      d = vr(vr({}, h), a);
    return Ak(n, function (v) {
      for (var m in d) v.addCase(m, d[m]);
      for (var x = 0, E = g; x < E.length; x++) {
        var C = E[x];
        v.addMatcher(C.matcher, C.reducer);
      }
      w && v.addDefaultCase(w);
    });
  }
  var s;
  return {
    name: t,
    reducer: function (c, f) {
      return s || (s = u()), s(c, f);
    },
    actions: l,
    caseReducers: i,
    getInitialState: function () {
      return s || (s = u()), s.getInitialState();
    },
  };
}
var Fk = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  H0 = function (e) {
    e === void 0 && (e = 21);
    for (var t = "", n = e; n--; ) t += Fk[(Math.random() * 64) | 0];
    return t;
  },
  zk = ["name", "message", "stack", "code"],
  yc = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  kv = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  Uk = function (e) {
    if (typeof e == "object" && e !== null) {
      for (var t = {}, n = 0, r = zk; n < r.length; n++) {
        var o = r[n];
        typeof e[o] == "string" && (t[o] = e[o]);
      }
      return t;
    }
    return { message: String(e) };
  },
  Rv = (function () {
    function e(t, n, r) {
      var o = gt(t + "/fulfilled", function (s, c, f, h) {
          return {
            payload: s,
            meta: mc(vr({}, h || {}), {
              arg: f,
              requestId: c,
              requestStatus: "fulfilled",
            }),
          };
        }),
        i = gt(t + "/pending", function (s, c, f) {
          return {
            payload: void 0,
            meta: mc(vr({}, f || {}), {
              arg: c,
              requestId: s,
              requestStatus: "pending",
            }),
          };
        }),
        a = gt(t + "/rejected", function (s, c, f, h, p) {
          return {
            payload: h,
            error: ((r && r.serializeError) || Uk)(s || "Rejected"),
            meta: mc(vr({}, p || {}), {
              arg: f,
              requestId: c,
              rejectedWithValue: !!h,
              requestStatus: "rejected",
              aborted: (s == null ? void 0 : s.name) === "AbortError",
              condition: (s == null ? void 0 : s.name) === "ConditionError",
            }),
          };
        }),
        l =
          typeof AbortController < "u"
            ? AbortController
            : (function () {
                function s() {
                  this.signal = {
                    aborted: !1,
                    addEventListener: function () {},
                    dispatchEvent: function () {
                      return !1;
                    },
                    onabort: function () {},
                    removeEventListener: function () {},
                    reason: void 0,
                    throwIfAborted: function () {},
                  };
                }
                return (s.prototype.abort = function () {}), s;
              })();
      function u(s) {
        return function (c, f, h) {
          var p = r != null && r.idGenerator ? r.idGenerator(s) : H0(),
            g = new l(),
            y;
          function w(v) {
            (y = v), g.abort();
          }
          var d = (function () {
            return Ok(this, null, function () {
              var v, m, x, E, C, b, k;
              return xk(this, function (P) {
                switch (P.label) {
                  case 0:
                    return (
                      P.trys.push([0, 4, , 5]),
                      (E =
                        (v = r == null ? void 0 : r.condition) == null
                          ? void 0
                          : v.call(r, s, { getState: f, extra: h })),
                      Qk(E) ? [4, E] : [3, 2]
                    );
                  case 1:
                    (E = P.sent()), (P.label = 2);
                  case 2:
                    if (E === !1 || g.signal.aborted)
                      throw {
                        name: "ConditionError",
                        message:
                          "Aborted due to condition callback returning false.",
                      };
                    return (
                      (C = new Promise(function (R, T) {
                        return g.signal.addEventListener("abort", function () {
                          return T({
                            name: "AbortError",
                            message: y || "Aborted",
                          });
                        });
                      })),
                      c(
                        i(
                          p,
                          s,
                          (m = r == null ? void 0 : r.getPendingMeta) == null
                            ? void 0
                            : m.call(
                                r,
                                { requestId: p, arg: s },
                                { getState: f, extra: h }
                              )
                        )
                      ),
                      [
                        4,
                        Promise.race([
                          C,
                          Promise.resolve(
                            n(s, {
                              dispatch: c,
                              getState: f,
                              extra: h,
                              requestId: p,
                              signal: g.signal,
                              abort: w,
                              rejectWithValue: function (R, T) {
                                return new yc(R, T);
                              },
                              fulfillWithValue: function (R, T) {
                                return new kv(R, T);
                              },
                            })
                          ).then(function (R) {
                            if (R instanceof yc) throw R;
                            return R instanceof kv
                              ? o(R.payload, p, s, R.meta)
                              : o(R, p, s);
                          }),
                        ]),
                      ]
                    );
                  case 3:
                    return (x = P.sent()), [3, 5];
                  case 4:
                    return (
                      (b = P.sent()),
                      (x =
                        b instanceof yc
                          ? a(null, p, s, b.payload, b.meta)
                          : a(b, p, s)),
                      [3, 5]
                    );
                  case 5:
                    return (
                      (k =
                        r &&
                        !r.dispatchConditionRejection &&
                        a.match(x) &&
                        x.meta.condition),
                      k || c(x),
                      [2, x]
                    );
                }
              });
            });
          })();
          return Object.assign(d, {
            abort: w,
            requestId: p,
            arg: s,
            unwrap: function () {
              return d.then(Bk);
            },
          });
        };
      }
      return Object.assign(u, {
        pending: i,
        rejected: a,
        fulfilled: o,
        typePrefix: t,
      });
    }
    return (
      (e.withTypes = function () {
        return e;
      }),
      e
    );
  })();
function Bk(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function Qk(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Hk = function (e) {
    return e && typeof e.match == "function";
  },
  W0 = function (e, t) {
    return Hk(e) ? e.match(t) : e(t);
  };
function oi() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return function (n) {
    return e.some(function (r) {
      return W0(r, n);
    });
  };
}
function Bi() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return function (n) {
    return e.every(function (r) {
      return W0(r, n);
    });
  };
}
function ys(e, t) {
  if (!e || !e.meta) return !1;
  var n = typeof e.meta.requestId == "string",
    r = t.indexOf(e.meta.requestStatus) > -1;
  return n && r;
}
function Ia(e) {
  return (
    typeof e[0] == "function" &&
    "pending" in e[0] &&
    "fulfilled" in e[0] &&
    "rejected" in e[0]
  );
}
function dp() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return ys(n, ["pending"]);
      }
    : Ia(e)
    ? function (n) {
        var r = e.map(function (i) {
            return i.pending;
          }),
          o = oi.apply(void 0, r);
        return o(n);
      }
    : dp()(e[0]);
}
function ga() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return ys(n, ["rejected"]);
      }
    : Ia(e)
    ? function (n) {
        var r = e.map(function (i) {
            return i.rejected;
          }),
          o = oi.apply(void 0, r);
        return o(n);
      }
    : ga()(e[0]);
}
function gs() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  var n = function (r) {
    return r && r.meta && r.meta.rejectedWithValue;
  };
  return e.length === 0
    ? function (r) {
        var o = Bi(ga.apply(void 0, e), n);
        return o(r);
      }
    : Ia(e)
    ? function (r) {
        var o = Bi(ga.apply(void 0, e), n);
        return o(r);
      }
    : gs()(e[0]);
}
function lo() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return ys(n, ["fulfilled"]);
      }
    : Ia(e)
    ? function (n) {
        var r = e.map(function (i) {
            return i.fulfilled;
          }),
          o = oi.apply(void 0, r);
        return o(n);
      }
    : lo()(e[0]);
}
function Af() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return ys(n, ["pending", "fulfilled", "rejected"]);
      }
    : Ia(e)
    ? function (n) {
        for (var r = [], o = 0, i = e; o < i.length; o++) {
          var a = i[o];
          r.push(a.pending, a.rejected, a.fulfilled);
        }
        var l = oi.apply(void 0, r);
        return l(n);
      }
    : Af()(e[0]);
}
var pp = "listenerMiddleware";
gt(pp + "/add");
gt(pp + "/removeAll");
gt(pp + "/remove");
var Oi = "RTK_autoBatch",
  gc = function () {
    return function (e) {
      var t;
      return { payload: e, meta: ((t = {}), (t[Oi] = !0), t) };
    };
  },
  Ov;
typeof queueMicrotask == "function" &&
  queueMicrotask.bind(
    typeof window < "u" ? window : typeof global < "u" ? global : globalThis
  );
rk();
const Wk = {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  q0 = Ir({
    name: "auth",
    initialState: Wk,
    reducers: {
      setCredentials: (e, t) => {
        (e.userInfo = t.payload),
          localStorage.setItem("userInfo", JSON.stringify(t.payload));
      },
      logout: (e) => {
        (e.userInfo = null), localStorage.removeItem("userInfo");
      },
    },
  }),
  { setCredentials: hp, logout: qk } = q0.actions,
  Kk = q0.reducer;
var yu =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (i[0] & 1) throw i[1];
            return i[1];
          },
          trys: [],
          ops: [],
        },
        r,
        o,
        i,
        a;
      return (
        (a = { next: l(0), throw: l(1), return: l(2) }),
        typeof Symbol == "function" &&
          (a[Symbol.iterator] = function () {
            return this;
          }),
        a
      );
      function l(s) {
        return function (c) {
          return u([s, c]);
        };
      }
      function u(s) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; n; )
          try {
            if (
              ((r = 1),
              o &&
                (i =
                  s[0] & 2
                    ? o.return
                    : s[0]
                    ? o.throw || ((i = o.return) && i.call(o), 0)
                    : o.next) &&
                !(i = i.call(o, s[1])).done)
            )
              return i;
            switch (((o = 0), i && (s = [s[0] & 2, i.value]), s[0])) {
              case 0:
              case 1:
                i = s;
                break;
              case 4:
                return n.label++, { value: s[1], done: !1 };
              case 5:
                n.label++, (o = s[1]), (s = [0]);
                continue;
              case 7:
                (s = n.ops.pop()), n.trys.pop();
                continue;
              default:
                if (
                  ((i = n.trys),
                  !(i = i.length > 0 && i[i.length - 1]) &&
                    (s[0] === 6 || s[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (s[0] === 3 && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                  n.label = s[1];
                  break;
                }
                if (s[0] === 6 && n.label < i[1]) {
                  (n.label = i[1]), (i = s);
                  break;
                }
                if (i && n.label < i[2]) {
                  (n.label = i[2]), n.ops.push(s);
                  break;
                }
                i[2] && n.ops.pop(), n.trys.pop();
                continue;
            }
            s = t.call(e, n);
          } catch (c) {
            (s = [6, c]), (o = 0);
          } finally {
            r = i = 0;
          }
        if (s[0] & 5) throw s[1];
        return { value: s[0] ? s[1] : void 0, done: !0 };
      }
    },
  gu =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n];
      return e;
    },
  Vk = Object.defineProperty,
  Gk = Object.defineProperties,
  Yk = Object.getOwnPropertyDescriptors,
  wu = Object.getOwnPropertySymbols,
  K0 = Object.prototype.hasOwnProperty,
  V0 = Object.prototype.propertyIsEnumerable,
  Pv = function (e, t, n) {
    return t in e
      ? Vk(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  De = function (e, t) {
    for (var n in t || (t = {})) K0.call(t, n) && Pv(e, n, t[n]);
    if (wu)
      for (var r = 0, o = wu(t); r < o.length; r++) {
        var n = o[r];
        V0.call(t, n) && Pv(e, n, t[n]);
      }
    return e;
  },
  hn = function (e, t) {
    return Gk(e, Yk(t));
  },
  Tv = function (e, t) {
    var n = {};
    for (var r in e) K0.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && wu)
      for (var o = 0, i = wu(e); o < i.length; o++) {
        var r = i[o];
        t.indexOf(r) < 0 && V0.call(e, r) && (n[r] = e[r]);
      }
    return n;
  },
  Su = function (e, t, n) {
    return new Promise(function (r, o) {
      var i = function (u) {
          try {
            l(n.next(u));
          } catch (s) {
            o(s);
          }
        },
        a = function (u) {
          try {
            l(n.throw(u));
          } catch (s) {
            o(s);
          }
        },
        l = function (u) {
          return u.done ? r(u.value) : Promise.resolve(u.value).then(i, a);
        };
      l((n = n.apply(e, t)).next());
    });
  },
  ke;
(function (e) {
  (e.uninitialized = "uninitialized"),
    (e.pending = "pending"),
    (e.fulfilled = "fulfilled"),
    (e.rejected = "rejected");
})(ke || (ke = {}));
function Xk(e) {
  return {
    status: e,
    isUninitialized: e === ke.uninitialized,
    isLoading: e === ke.pending,
    isSuccess: e === ke.fulfilled,
    isError: e === ke.rejected,
  };
}
function Jk(e) {
  return new RegExp("(^|:)//").test(e);
}
var Zk = function (e) {
    return e.replace(/\/$/, "");
  },
  eR = function (e) {
    return e.replace(/^\//, "");
  };
function tR(e, t) {
  if (!e) return t;
  if (!t) return e;
  if (Jk(t)) return t;
  var n = e.endsWith("/") || !t.startsWith("?") ? "/" : "";
  return (e = Zk(e)), (t = eR(t)), "" + e + n + t;
}
var Nv = function (e) {
  return [].concat.apply([], e);
};
function nR() {
  return typeof navigator > "u" || navigator.onLine === void 0
    ? !0
    : navigator.onLine;
}
function rR() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
var Mv = Cr;
function G0(e, t) {
  if (e === t || !((Mv(e) && Mv(t)) || (Array.isArray(e) && Array.isArray(t))))
    return t;
  for (
    var n = Object.keys(t),
      r = Object.keys(e),
      o = n.length === r.length,
      i = Array.isArray(t) ? [] : {},
      a = 0,
      l = n;
    a < l.length;
    a++
  ) {
    var u = l[a];
    (i[u] = G0(e[u], t[u])), o && (o = e[u] === i[u]);
  }
  return o ? e : i;
}
var Dv = function () {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return fetch.apply(void 0, e);
  },
  oR = function (e) {
    return e.status >= 200 && e.status <= 299;
  },
  iR = function (e) {
    return /ion\/(vnd\.api\+)?json/.test(e.get("content-type") || "");
  };
function $v(e) {
  if (!Cr(e)) return e;
  for (var t = De({}, e), n = 0, r = Object.entries(t); n < r.length; n++) {
    var o = r[n],
      i = o[0],
      a = o[1];
    a === void 0 && delete t[i];
  }
  return t;
}
function aR(e) {
  var t = this;
  e === void 0 && (e = {});
  var n = e,
    r = n.baseUrl,
    o = n.prepareHeaders,
    i =
      o === void 0
        ? function (m) {
            return m;
          }
        : o,
    a = n.fetchFn,
    l = a === void 0 ? Dv : a,
    u = n.paramsSerializer,
    s = n.isJsonContentType,
    c = s === void 0 ? iR : s,
    f = n.jsonContentType,
    h = f === void 0 ? "application/json" : f,
    p = n.jsonReplacer,
    g = n.timeout,
    y = n.responseHandler,
    w = n.validateStatus,
    d = Tv(n, [
      "baseUrl",
      "prepareHeaders",
      "fetchFn",
      "paramsSerializer",
      "isJsonContentType",
      "jsonContentType",
      "jsonReplacer",
      "timeout",
      "responseHandler",
      "validateStatus",
    ]);
  return function (m, x) {
    return Su(t, null, function () {
      var E,
        C,
        b,
        k,
        P,
        R,
        T,
        N,
        M,
        I,
        A,
        z,
        B,
        D,
        _,
        L,
        Q,
        q,
        Y,
        J,
        H,
        ee,
        le,
        Se,
        Ve,
        Ue,
        Be,
        oe,
        Le,
        de,
        Qn,
        sn,
        ft,
        Hn,
        Wn,
        Ct;
      return yu(this, function (Ge) {
        switch (Ge.label) {
          case 0:
            return (
              (E = x.signal),
              (C = x.getState),
              (b = x.extra),
              (k = x.endpoint),
              (P = x.forced),
              (R = x.type),
              (N = typeof m == "string" ? { url: m } : m),
              (M = N.url),
              (I = N.headers),
              (A = I === void 0 ? new Headers(d.headers) : I),
              (z = N.params),
              (B = z === void 0 ? void 0 : z),
              (D = N.responseHandler),
              (_ = D === void 0 ? y ?? "json" : D),
              (L = N.validateStatus),
              (Q = L === void 0 ? w ?? oR : L),
              (q = N.timeout),
              (Y = q === void 0 ? g : q),
              (J = Tv(N, [
                "url",
                "headers",
                "params",
                "responseHandler",
                "validateStatus",
                "timeout",
              ])),
              (H = De(hn(De({}, d), { signal: E }), J)),
              (A = new Headers($v(A))),
              (ee = H),
              [
                4,
                i(A, {
                  getState: C,
                  extra: b,
                  endpoint: k,
                  forced: P,
                  type: R,
                }),
              ]
            );
          case 1:
            (ee.headers = Ge.sent() || A),
              (le = function (Ae) {
                return (
                  typeof Ae == "object" &&
                  (Cr(Ae) ||
                    Array.isArray(Ae) ||
                    typeof Ae.toJSON == "function")
                );
              }),
              !H.headers.has("content-type") &&
                le(H.body) &&
                H.headers.set("content-type", h),
              le(H.body) &&
                c(H.headers) &&
                (H.body = JSON.stringify(H.body, p)),
              B &&
                ((Se = ~M.indexOf("?") ? "&" : "?"),
                (Ve = u ? u(B) : new URLSearchParams($v(B))),
                (M += Se + Ve)),
              (M = tR(r, M)),
              (Ue = new Request(M, H)),
              (Be = Ue.clone()),
              (T = { request: Be }),
              (Le = !1),
              (de =
                Y &&
                setTimeout(function () {
                  (Le = !0), x.abort();
                }, Y)),
              (Ge.label = 2);
          case 2:
            return Ge.trys.push([2, 4, 5, 6]), [4, l(Ue)];
          case 3:
            return (oe = Ge.sent()), [3, 6];
          case 4:
            return (
              (Qn = Ge.sent()),
              [
                2,
                {
                  error: {
                    status: Le ? "TIMEOUT_ERROR" : "FETCH_ERROR",
                    error: String(Qn),
                  },
                  meta: T,
                },
              ]
            );
          case 5:
            return de && clearTimeout(de), [7];
          case 6:
            (sn = oe.clone()), (T.response = sn), (Hn = ""), (Ge.label = 7);
          case 7:
            return (
              Ge.trys.push([7, 9, , 10]),
              [
                4,
                Promise.all([
                  v(oe, _).then(
                    function (Ae) {
                      return (ft = Ae);
                    },
                    function (Ae) {
                      return (Wn = Ae);
                    }
                  ),
                  sn.text().then(
                    function (Ae) {
                      return (Hn = Ae);
                    },
                    function () {}
                  ),
                ]),
              ]
            );
          case 8:
            if ((Ge.sent(), Wn)) throw Wn;
            return [3, 10];
          case 9:
            return (
              (Ct = Ge.sent()),
              [
                2,
                {
                  error: {
                    status: "PARSING_ERROR",
                    originalStatus: oe.status,
                    data: Hn,
                    error: String(Ct),
                  },
                  meta: T,
                },
              ]
            );
          case 10:
            return [
              2,
              Q(oe, ft)
                ? { data: ft, meta: T }
                : { error: { status: oe.status, data: ft }, meta: T },
            ];
        }
      });
    });
  };
  function v(m, x) {
    return Su(this, null, function () {
      var E;
      return yu(this, function (C) {
        switch (C.label) {
          case 0:
            return typeof x == "function"
              ? [2, x(m)]
              : (x === "content-type" && (x = c(m.headers) ? "json" : "text"),
                x !== "json" ? [3, 2] : [4, m.text()]);
          case 1:
            return (E = C.sent()), [2, E.length ? JSON.parse(E) : null];
          case 2:
            return [2, m.text()];
        }
      });
    });
  }
}
var jv = (function () {
    function e(t, n) {
      n === void 0 && (n = void 0), (this.value = t), (this.meta = n);
    }
    return e;
  })(),
  vp = gt("__rtkq/focused"),
  Y0 = gt("__rtkq/unfocused"),
  mp = gt("__rtkq/online"),
  X0 = gt("__rtkq/offline"),
  xn;
(function (e) {
  (e.query = "query"), (e.mutation = "mutation");
})(xn || (xn = {}));
function J0(e) {
  return e.type === xn.query;
}
function lR(e) {
  return e.type === xn.mutation;
}
function Z0(e, t, n, r, o, i) {
  return uR(e)
    ? e(t, n, r, o).map(_f).map(i)
    : Array.isArray(e)
    ? e.map(_f).map(i)
    : [];
}
function uR(e) {
  return typeof e == "function";
}
function _f(e) {
  return typeof e == "string" ? { type: e } : e;
}
function wc(e) {
  return e != null;
}
var wa = Symbol("forceQueryFn"),
  Ff = function (e) {
    return typeof e[wa] == "function";
  };
function sR(e) {
  var t = e.serializeQueryArgs,
    n = e.queryThunk,
    r = e.mutationThunk,
    o = e.api,
    i = e.context,
    a = new Map(),
    l = new Map(),
    u = o.internalActions,
    s = u.unsubscribeQueryResult,
    c = u.removeMutationResult,
    f = u.updateSubscriptionOptions;
  return {
    buildInitiateQuery: v,
    buildInitiateMutation: m,
    getRunningQueryThunk: g,
    getRunningMutationThunk: y,
    getRunningQueriesThunk: w,
    getRunningMutationsThunk: d,
    getRunningOperationPromises: p,
    removalWarning: h,
  };
  function h() {
    throw new Error(`This method had to be removed due to a conceptual bug in RTK.
       Please see https://github.com/reduxjs/redux-toolkit/pull/2481 for details.
       See https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering for new guidance on SSR.`);
  }
  function p() {
    typeof process < "u";
    var x = function (E) {
      return Array.from(E.values()).flatMap(function (C) {
        return C ? Object.values(C) : [];
      });
    };
    return gu(gu([], x(a)), x(l)).filter(wc);
  }
  function g(x, E) {
    return function (C) {
      var b,
        k = i.endpointDefinitions[x],
        P = t({ queryArgs: E, endpointDefinition: k, endpointName: x });
      return (b = a.get(C)) == null ? void 0 : b[P];
    };
  }
  function y(x, E) {
    return function (C) {
      var b;
      return (b = l.get(C)) == null ? void 0 : b[E];
    };
  }
  function w() {
    return function (x) {
      return Object.values(a.get(x) || {}).filter(wc);
    };
  }
  function d() {
    return function (x) {
      return Object.values(l.get(x) || {}).filter(wc);
    };
  }
  function v(x, E) {
    var C = function (b, k) {
      var P = k === void 0 ? {} : k,
        R = P.subscribe,
        T = R === void 0 ? !0 : R,
        N = P.forceRefetch,
        M = P.subscriptionOptions,
        I = wa,
        A = P[I];
      return function (z, B) {
        var D,
          _,
          L = t({ queryArgs: b, endpointDefinition: E, endpointName: x }),
          Q = n(
            ((D = {
              type: "query",
              subscribe: T,
              forceRefetch: N,
              subscriptionOptions: M,
              endpointName: x,
              originalArgs: b,
              queryCacheKey: L,
            }),
            (D[wa] = A),
            D)
          ),
          q = o.endpoints[x].select(b),
          Y = z(Q),
          J = q(B()),
          H = Y.requestId,
          ee = Y.abort,
          le = J.requestId !== H,
          Se = (_ = a.get(z)) == null ? void 0 : _[L],
          Ve = function () {
            return q(B());
          },
          Ue = Object.assign(
            A
              ? Y.then(Ve)
              : le && !Se
              ? Promise.resolve(J)
              : Promise.all([Se, Y]).then(Ve),
            {
              arg: b,
              requestId: H,
              subscriptionOptions: M,
              queryCacheKey: L,
              abort: ee,
              unwrap: function () {
                return Su(this, null, function () {
                  var oe;
                  return yu(this, function (Le) {
                    switch (Le.label) {
                      case 0:
                        return [4, Ue];
                      case 1:
                        if (((oe = Le.sent()), oe.isError)) throw oe.error;
                        return [2, oe.data];
                    }
                  });
                });
              },
              refetch: function () {
                return z(C(b, { subscribe: !1, forceRefetch: !0 }));
              },
              unsubscribe: function () {
                T && z(s({ queryCacheKey: L, requestId: H }));
              },
              updateSubscriptionOptions: function (oe) {
                (Ue.subscriptionOptions = oe),
                  z(
                    f({
                      endpointName: x,
                      requestId: H,
                      queryCacheKey: L,
                      options: oe,
                    })
                  );
              },
            }
          );
        if (!Se && !le && !A) {
          var Be = a.get(z) || {};
          (Be[L] = Ue),
            a.set(z, Be),
            Ue.then(function () {
              delete Be[L], Object.keys(Be).length || a.delete(z);
            });
        }
        return Ue;
      };
    };
    return C;
  }
  function m(x) {
    return function (E, C) {
      var b = C === void 0 ? {} : C,
        k = b.track,
        P = k === void 0 ? !0 : k,
        R = b.fixedCacheKey;
      return function (T, N) {
        var M = r({
            type: "mutation",
            endpointName: x,
            originalArgs: E,
            track: P,
            fixedCacheKey: R,
          }),
          I = T(M),
          A = I.requestId,
          z = I.abort,
          B = I.unwrap,
          D = I.unwrap()
            .then(function (q) {
              return { data: q };
            })
            .catch(function (q) {
              return { error: q };
            }),
          _ = function () {
            T(c({ requestId: A, fixedCacheKey: R }));
          },
          L = Object.assign(D, {
            arg: I.arg,
            requestId: A,
            abort: z,
            unwrap: B,
            unsubscribe: _,
            reset: _,
          }),
          Q = l.get(T) || {};
        return (
          l.set(T, Q),
          (Q[A] = L),
          L.then(function () {
            delete Q[A], Object.keys(Q).length || l.delete(T);
          }),
          R &&
            ((Q[R] = L),
            L.then(function () {
              Q[R] === L && (delete Q[R], Object.keys(Q).length || l.delete(T));
            })),
          L
        );
      };
    };
  }
}
function Iv(e) {
  return e;
}
function cR(e) {
  var t = this,
    n = e.reducerPath,
    r = e.baseQuery,
    o = e.context.endpointDefinitions,
    i = e.serializeQueryArgs,
    a = e.api,
    l = function (m, x, E) {
      return function (C) {
        var b = o[m];
        C(
          a.internalActions.queryResultPatched({
            queryCacheKey: i({
              queryArgs: x,
              endpointDefinition: b,
              endpointName: m,
            }),
            patches: E,
          })
        );
      };
    },
    u = function (m, x, E) {
      return function (C, b) {
        var k,
          P,
          R = a.endpoints[m].select(x)(b()),
          T = {
            patches: [],
            inversePatches: [],
            undo: function () {
              return C(a.util.patchQueryData(m, x, T.inversePatches));
            },
          };
        if (R.status === ke.uninitialized) return T;
        if ("data" in R)
          if (ln(R.data)) {
            var N = A0(R.data, E),
              M = N[1],
              I = N[2];
            (k = T.patches).push.apply(k, M),
              (P = T.inversePatches).push.apply(P, I);
          } else {
            var A = E(R.data);
            T.patches.push({ op: "replace", path: [], value: A }),
              T.inversePatches.push({ op: "replace", path: [], value: R.data });
          }
        return C(a.util.patchQueryData(m, x, T.patches)), T;
      };
    },
    s = function (m, x, E) {
      return function (C) {
        var b;
        return C(
          a.endpoints[m].initiate(
            x,
            ((b = { subscribe: !1, forceRefetch: !0 }),
            (b[wa] = function () {
              return { data: E };
            }),
            b)
          )
        );
      };
    },
    c = function (m, x) {
      return Su(t, [m, x], function (E, C) {
        var b,
          k,
          P,
          R,
          T,
          N,
          M,
          I,
          A,
          z,
          B,
          D,
          _,
          L,
          Q,
          q,
          Y,
          J,
          H = C.signal,
          ee = C.abort,
          le = C.rejectWithValue,
          Se = C.fulfillWithValue,
          Ve = C.dispatch,
          Ue = C.getState,
          Be = C.extra;
        return yu(this, function (oe) {
          switch (oe.label) {
            case 0:
              (b = o[E.endpointName]), (oe.label = 1);
            case 1:
              return (
                oe.trys.push([1, 8, , 13]),
                (k = Iv),
                (P = void 0),
                (R = {
                  signal: H,
                  abort: ee,
                  dispatch: Ve,
                  getState: Ue,
                  extra: Be,
                  endpoint: E.endpointName,
                  type: E.type,
                  forced: E.type === "query" ? f(E, Ue()) : void 0,
                }),
                (T = E.type === "query" ? E[wa] : void 0),
                T ? ((P = T()), [3, 6]) : [3, 2]
              );
            case 2:
              return b.query
                ? [4, r(b.query(E.originalArgs), R, b.extraOptions)]
                : [3, 4];
            case 3:
              return (
                (P = oe.sent()),
                b.transformResponse && (k = b.transformResponse),
                [3, 6]
              );
            case 4:
              return [
                4,
                b.queryFn(E.originalArgs, R, b.extraOptions, function (Le) {
                  return r(Le, R, b.extraOptions);
                }),
              ];
            case 5:
              (P = oe.sent()), (oe.label = 6);
            case 6:
              if ((typeof process < "u", P.error))
                throw new jv(P.error, P.meta);
              return (B = Se), [4, k(P.data, P.meta, E.originalArgs)];
            case 7:
              return [
                2,
                B.apply(void 0, [
                  oe.sent(),
                  ((Y = {
                    fulfilledTimeStamp: Date.now(),
                    baseQueryMeta: P.meta,
                  }),
                  (Y[Oi] = !0),
                  Y),
                ]),
              ];
            case 8:
              if (((D = oe.sent()), (_ = D), !(_ instanceof jv)))
                return [3, 12];
              (L = Iv),
                b.query &&
                  b.transformErrorResponse &&
                  (L = b.transformErrorResponse),
                (oe.label = 9);
            case 9:
              return (
                oe.trys.push([9, 11, , 12]),
                (Q = le),
                [4, L(_.value, _.meta, E.originalArgs)]
              );
            case 10:
              return [
                2,
                Q.apply(void 0, [
                  oe.sent(),
                  ((J = { baseQueryMeta: _.meta }), (J[Oi] = !0), J),
                ]),
              ];
            case 11:
              return (q = oe.sent()), (_ = q), [3, 12];
            case 12:
              throw (typeof process < "u", _);
            case 13:
              return [2];
          }
        });
      });
    };
  function f(m, x) {
    var E,
      C,
      b,
      k,
      P =
        (C = (E = x[n]) == null ? void 0 : E.queries) == null
          ? void 0
          : C[m.queryCacheKey],
      R = (b = x[n]) == null ? void 0 : b.config.refetchOnMountOrArgChange,
      T = P == null ? void 0 : P.fulfilledTimeStamp,
      N = (k = m.forceRefetch) != null ? k : m.subscribe && R;
    return N ? N === !0 || (Number(new Date()) - Number(T)) / 1e3 >= N : !1;
  }
  var h = Rv(n + "/executeQuery", c, {
      getPendingMeta: function () {
        var m;
        return (m = { startedTimeStamp: Date.now() }), (m[Oi] = !0), m;
      },
      condition: function (m, x) {
        var E = x.getState,
          C,
          b,
          k,
          P = E(),
          R =
            (b = (C = P[n]) == null ? void 0 : C.queries) == null
              ? void 0
              : b[m.queryCacheKey],
          T = R == null ? void 0 : R.fulfilledTimeStamp,
          N = m.originalArgs,
          M = R == null ? void 0 : R.originalArgs,
          I = o[m.endpointName];
        return Ff(m)
          ? !0
          : (R == null ? void 0 : R.status) === "pending"
          ? !1
          : f(m, P) ||
            (J0(I) &&
              (k = I == null ? void 0 : I.forceRefetch) != null &&
              k.call(I, {
                currentArg: N,
                previousArg: M,
                endpointState: R,
                state: P,
              }))
          ? !0
          : !T;
      },
      dispatchConditionRejection: !0,
    }),
    p = Rv(n + "/executeMutation", c, {
      getPendingMeta: function () {
        var m;
        return (m = { startedTimeStamp: Date.now() }), (m[Oi] = !0), m;
      },
    }),
    g = function (m) {
      return "force" in m;
    },
    y = function (m) {
      return "ifOlderThan" in m;
    },
    w = function (m, x, E) {
      return function (C, b) {
        var k = g(E) && E.force,
          P = y(E) && E.ifOlderThan,
          R = function (I) {
            return (
              I === void 0 && (I = !0),
              a.endpoints[m].initiate(x, { forceRefetch: I })
            );
          },
          T = a.endpoints[m].select(x)(b());
        if (k) C(R());
        else if (P) {
          var N = T == null ? void 0 : T.fulfilledTimeStamp;
          if (!N) {
            C(R());
            return;
          }
          var M = (Number(new Date()) - Number(new Date(N))) / 1e3 >= P;
          M && C(R());
        } else C(R(!1));
      };
    };
  function d(m) {
    return function (x) {
      var E, C;
      return (
        ((C = (E = x == null ? void 0 : x.meta) == null ? void 0 : E.arg) ==
        null
          ? void 0
          : C.endpointName) === m
      );
    };
  }
  function v(m, x) {
    return {
      matchPending: Bi(dp(m), d(x)),
      matchFulfilled: Bi(lo(m), d(x)),
      matchRejected: Bi(ga(m), d(x)),
    };
  }
  return {
    queryThunk: h,
    mutationThunk: p,
    prefetch: w,
    updateQueryData: u,
    upsertQueryData: s,
    patchQueryData: l,
    buildMatchThunkActions: v,
  };
}
function e1(e, t, n, r) {
  return Z0(
    n[e.meta.arg.endpointName][t],
    lo(e) ? e.payload : void 0,
    gs(e) ? e.payload : void 0,
    e.meta.arg.originalArgs,
    "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0,
    r
  );
}
function ul(e, t, n) {
  var r = e[t];
  r && n(r);
}
function Sa(e) {
  var t;
  return (t = "arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) != null
    ? t
    : e.requestId;
}
function Lv(e, t, n) {
  var r = e[Sa(t)];
  r && n(r);
}
var wi = {};
function fR(e) {
  var t = e.reducerPath,
    n = e.queryThunk,
    r = e.mutationThunk,
    o = e.context,
    i = o.endpointDefinitions,
    a = o.apiUid,
    l = o.extractRehydrationInfo,
    u = o.hasRehydrationInfo,
    s = e.assertTagType,
    c = e.config,
    f = gt(t + "/resetApiState"),
    h = Ir({
      name: t + "/queries",
      initialState: wi,
      reducers: {
        removeQueryResult: {
          reducer: function (E, C) {
            var b = C.payload.queryCacheKey;
            delete E[b];
          },
          prepare: gc(),
        },
        queryResultPatched: function (E, C) {
          var b = C.payload,
            k = b.queryCacheKey,
            P = b.patches;
          ul(E, k, function (R) {
            R.data = gv(R.data, P.concat());
          });
        },
      },
      extraReducers: function (E) {
        E.addCase(n.pending, function (C, b) {
          var k = b.meta,
            P = b.meta.arg,
            R,
            T,
            N = Ff(P);
          (P.subscribe || N) &&
            ((T = C[(R = P.queryCacheKey)]) != null ||
              (C[R] = {
                status: ke.uninitialized,
                endpointName: P.endpointName,
              })),
            ul(C, P.queryCacheKey, function (M) {
              (M.status = ke.pending),
                (M.requestId = N && M.requestId ? M.requestId : k.requestId),
                P.originalArgs !== void 0 && (M.originalArgs = P.originalArgs),
                (M.startedTimeStamp = k.startedTimeStamp);
            });
        })
          .addCase(n.fulfilled, function (C, b) {
            var k = b.meta,
              P = b.payload;
            ul(C, k.arg.queryCacheKey, function (R) {
              var T;
              if (!(R.requestId !== k.requestId && !Ff(k.arg))) {
                var N = i[k.arg.endpointName].merge;
                if (((R.status = ke.fulfilled), N))
                  if (R.data !== void 0) {
                    var M = k.fulfilledTimeStamp,
                      I = k.arg,
                      A = k.baseQueryMeta,
                      z = k.requestId,
                      B = ja(R.data, function (D) {
                        return N(D, P, {
                          arg: I.originalArgs,
                          baseQueryMeta: A,
                          fulfilledTimeStamp: M,
                          requestId: z,
                        });
                      });
                    R.data = B;
                  } else R.data = P;
                else
                  R.data =
                    (T = i[k.arg.endpointName].structuralSharing) == null || T
                      ? G0(an(R.data) ? Zb(R.data) : R.data, P)
                      : P;
                delete R.error, (R.fulfilledTimeStamp = k.fulfilledTimeStamp);
              }
            });
          })
          .addCase(n.rejected, function (C, b) {
            var k = b.meta,
              P = k.condition,
              R = k.arg,
              T = k.requestId,
              N = b.error,
              M = b.payload;
            ul(C, R.queryCacheKey, function (I) {
              if (!P) {
                if (I.requestId !== T) return;
                (I.status = ke.rejected), (I.error = M ?? N);
              }
            });
          })
          .addMatcher(u, function (C, b) {
            for (
              var k = l(b).queries, P = 0, R = Object.entries(k);
              P < R.length;
              P++
            ) {
              var T = R[P],
                N = T[0],
                M = T[1];
              ((M == null ? void 0 : M.status) === ke.fulfilled ||
                (M == null ? void 0 : M.status) === ke.rejected) &&
                (C[N] = M);
            }
          });
      },
    }),
    p = Ir({
      name: t + "/mutations",
      initialState: wi,
      reducers: {
        removeMutationResult: {
          reducer: function (E, C) {
            var b = C.payload,
              k = Sa(b);
            k in E && delete E[k];
          },
          prepare: gc(),
        },
      },
      extraReducers: function (E) {
        E.addCase(r.pending, function (C, b) {
          var k = b.meta,
            P = b.meta,
            R = P.requestId,
            T = P.arg,
            N = P.startedTimeStamp;
          T.track &&
            (C[Sa(k)] = {
              requestId: R,
              status: ke.pending,
              endpointName: T.endpointName,
              startedTimeStamp: N,
            });
        })
          .addCase(r.fulfilled, function (C, b) {
            var k = b.payload,
              P = b.meta;
            P.arg.track &&
              Lv(C, P, function (R) {
                R.requestId === P.requestId &&
                  ((R.status = ke.fulfilled),
                  (R.data = k),
                  (R.fulfilledTimeStamp = P.fulfilledTimeStamp));
              });
          })
          .addCase(r.rejected, function (C, b) {
            var k = b.payload,
              P = b.error,
              R = b.meta;
            R.arg.track &&
              Lv(C, R, function (T) {
                T.requestId === R.requestId &&
                  ((T.status = ke.rejected), (T.error = k ?? P));
              });
          })
          .addMatcher(u, function (C, b) {
            for (
              var k = l(b).mutations, P = 0, R = Object.entries(k);
              P < R.length;
              P++
            ) {
              var T = R[P],
                N = T[0],
                M = T[1];
              ((M == null ? void 0 : M.status) === ke.fulfilled ||
                (M == null ? void 0 : M.status) === ke.rejected) &&
                N !== (M == null ? void 0 : M.requestId) &&
                (C[N] = M);
            }
          });
      },
    }),
    g = Ir({
      name: t + "/invalidation",
      initialState: wi,
      reducers: {},
      extraReducers: function (E) {
        E.addCase(h.actions.removeQueryResult, function (C, b) {
          for (
            var k = b.payload.queryCacheKey, P = 0, R = Object.values(C);
            P < R.length;
            P++
          )
            for (var T = R[P], N = 0, M = Object.values(T); N < M.length; N++) {
              var I = M[N],
                A = I.indexOf(k);
              A !== -1 && I.splice(A, 1);
            }
        })
          .addMatcher(u, function (C, b) {
            for (
              var k, P, R, T, N = l(b).provided, M = 0, I = Object.entries(N);
              M < I.length;
              M++
            )
              for (
                var A = I[M], z = A[0], B = A[1], D = 0, _ = Object.entries(B);
                D < _.length;
                D++
              )
                for (
                  var L = _[D],
                    Q = L[0],
                    q = L[1],
                    Y =
                      (T = (P = (k = C[z]) != null ? k : (C[z] = {}))[
                        (R = Q || "__internal_without_id")
                      ]) != null
                        ? T
                        : (P[R] = []),
                    J = 0,
                    H = q;
                  J < H.length;
                  J++
                ) {
                  var ee = H[J],
                    le = Y.includes(ee);
                  le || Y.push(ee);
                }
          })
          .addMatcher(oi(lo(n), gs(n)), function (C, b) {
            for (
              var k,
                P,
                R,
                T,
                N = e1(b, "providesTags", i, s),
                M = b.meta.arg.queryCacheKey,
                I = 0,
                A = Object.values(C);
              I < A.length;
              I++
            )
              for (
                var z = A[I], B = 0, D = Object.values(z);
                B < D.length;
                B++
              ) {
                var _ = D[B],
                  L = _.indexOf(M);
                L !== -1 && _.splice(L, 1);
              }
            for (var Q = 0, q = N; Q < q.length; Q++) {
              var Y = q[Q],
                J = Y.type,
                H = Y.id,
                ee =
                  (T = (P = (k = C[J]) != null ? k : (C[J] = {}))[
                    (R = H || "__internal_without_id")
                  ]) != null
                    ? T
                    : (P[R] = []),
                le = ee.includes(M);
              le || ee.push(M);
            }
          });
      },
    }),
    y = Ir({
      name: t + "/subscriptions",
      initialState: wi,
      reducers: {
        updateSubscriptionOptions: function (E, C) {},
        unsubscribeQueryResult: function (E, C) {},
        internal_probeSubscription: function (E, C) {},
      },
    }),
    w = Ir({
      name: t + "/internalSubscriptions",
      initialState: wi,
      reducers: {
        subscriptionsUpdated: {
          reducer: function (E, C) {
            return gv(E, C.payload);
          },
          prepare: gc(),
        },
      },
    }),
    d = Ir({
      name: t + "/config",
      initialState: De(
        { online: nR(), focused: rR(), middlewareRegistered: !1 },
        c
      ),
      reducers: {
        middlewareRegistered: function (E, C) {
          var b = C.payload;
          E.middlewareRegistered =
            E.middlewareRegistered === "conflict" || a !== b ? "conflict" : !0;
        },
      },
      extraReducers: function (E) {
        E.addCase(mp, function (C) {
          C.online = !0;
        })
          .addCase(X0, function (C) {
            C.online = !1;
          })
          .addCase(vp, function (C) {
            C.focused = !0;
          })
          .addCase(Y0, function (C) {
            C.focused = !1;
          })
          .addMatcher(u, function (C) {
            return De({}, C);
          });
      },
    }),
    v = F0({
      queries: h.reducer,
      mutations: p.reducer,
      provided: g.reducer,
      subscriptions: w.reducer,
      config: d.reducer,
    }),
    m = function (E, C) {
      return v(f.match(C) ? void 0 : E, C);
    },
    x = hn(
      De(
        De(De(De(De({}, d.actions), h.actions), y.actions), w.actions),
        p.actions
      ),
      {
        unsubscribeMutationResult: p.actions.removeMutationResult,
        resetApiState: f,
      }
    );
  return { reducer: m, actions: x };
}
var Qr = Symbol.for("RTKQ/skipToken"),
  t1 = { status: ke.uninitialized },
  Av = ja(t1, function () {}),
  _v = ja(t1, function () {});
function dR(e) {
  var t = e.serializeQueryArgs,
    n = e.reducerPath,
    r = function (c) {
      return Av;
    },
    o = function (c) {
      return _v;
    };
  return {
    buildQuerySelector: l,
    buildMutationSelector: u,
    selectInvalidatedBy: s,
  };
  function i(c) {
    return De(De({}, c), Xk(c.status));
  }
  function a(c) {
    var f = c[n];
    return f;
  }
  function l(c, f) {
    return function (h) {
      var p = t({ queryArgs: h, endpointDefinition: f, endpointName: c }),
        g = function (w) {
          var d, v, m;
          return (m =
            (v = (d = a(w)) == null ? void 0 : d.queries) == null
              ? void 0
              : v[p]) != null
            ? m
            : Av;
        },
        y = h === Qr ? r : g;
      return Ui(y, i);
    };
  }
  function u() {
    return function (c) {
      var f, h;
      typeof c == "object" ? (h = (f = Sa(c)) != null ? f : Qr) : (h = c);
      var p = function (y) {
          var w, d, v;
          return (v =
            (d = (w = a(y)) == null ? void 0 : w.mutations) == null
              ? void 0
              : d[h]) != null
            ? v
            : _v;
        },
        g = h === Qr ? o : p;
      return Ui(g, i);
    };
  }
  function s(c, f) {
    for (
      var h, p = c[n], g = new Set(), y = 0, w = f.map(_f);
      y < w.length;
      y++
    ) {
      var d = w[y],
        v = p.provided[d.type];
      if (v)
        for (
          var m =
              (h = d.id !== void 0 ? v[d.id] : Nv(Object.values(v))) != null
                ? h
                : [],
            x = 0,
            E = m;
          x < E.length;
          x++
        ) {
          var C = E[x];
          g.add(C);
        }
    }
    return Nv(
      Array.from(g.values()).map(function (b) {
        var k = p.queries[b];
        return k
          ? [
              {
                queryCacheKey: b,
                endpointName: k.endpointName,
                originalArgs: k.originalArgs,
              },
            ]
          : [];
      })
    );
  }
}
var sl = WeakMap ? new WeakMap() : void 0,
  Fv = function (e) {
    var t = e.endpointName,
      n = e.queryArgs,
      r = "",
      o = sl == null ? void 0 : sl.get(n);
    if (typeof o == "string") r = o;
    else {
      var i = JSON.stringify(n, function (a, l) {
        return Cr(l)
          ? Object.keys(l)
              .sort()
              .reduce(function (u, s) {
                return (u[s] = l[s]), u;
              }, {})
          : l;
      });
      Cr(n) && (sl == null || sl.set(n, i)), (r = i);
    }
    return t + "(" + r + ")";
  };
function pR() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return function (r) {
    var o = If(function (c) {
        var f, h;
        return (h = r.extractRehydrationInfo) == null
          ? void 0
          : h.call(r, c, {
              reducerPath: (f = r.reducerPath) != null ? f : "api",
            });
      }),
      i = hn(
        De(
          {
            reducerPath: "api",
            keepUnusedDataFor: 60,
            refetchOnMountOrArgChange: !1,
            refetchOnFocus: !1,
            refetchOnReconnect: !1,
          },
          r
        ),
        {
          extractRehydrationInfo: o,
          serializeQueryArgs: function (c) {
            var f = Fv;
            if ("serializeQueryArgs" in c.endpointDefinition) {
              var h = c.endpointDefinition.serializeQueryArgs;
              f = function (p) {
                var g = h(p);
                return typeof g == "string"
                  ? g
                  : Fv(hn(De({}, p), { queryArgs: g }));
              };
            } else r.serializeQueryArgs && (f = r.serializeQueryArgs);
            return f(c);
          },
          tagTypes: gu([], r.tagTypes || []),
        }
      ),
      a = {
        endpointDefinitions: {},
        batch: function (c) {
          c();
        },
        apiUid: H0(),
        extractRehydrationInfo: o,
        hasRehydrationInfo: If(function (c) {
          return o(c) != null;
        }),
      },
      l = {
        injectEndpoints: s,
        enhanceEndpoints: function (c) {
          var f = c.addTagTypes,
            h = c.endpoints;
          if (f)
            for (var p = 0, g = f; p < g.length; p++) {
              var y = g[p];
              i.tagTypes.includes(y) || i.tagTypes.push(y);
            }
          if (h)
            for (var w = 0, d = Object.entries(h); w < d.length; w++) {
              var v = d[w],
                m = v[0],
                x = v[1];
              typeof x == "function"
                ? x(a.endpointDefinitions[m])
                : Object.assign(a.endpointDefinitions[m] || {}, x);
            }
          return l;
        },
      },
      u = e.map(function (c) {
        return c.init(l, i, a);
      });
    function s(c) {
      for (
        var f = c.endpoints({
            query: function (x) {
              return hn(De({}, x), { type: xn.query });
            },
            mutation: function (x) {
              return hn(De({}, x), { type: xn.mutation });
            },
          }),
          h = 0,
          p = Object.entries(f);
        h < p.length;
        h++
      ) {
        var g = p[h],
          y = g[0],
          w = g[1];
        if (!c.overrideExisting && y in a.endpointDefinitions) {
          typeof process < "u";
          continue;
        }
        a.endpointDefinitions[y] = w;
        for (var d = 0, v = u; d < v.length; d++) {
          var m = v[d];
          m.injectEndpoint(y, w);
        }
      }
      return l;
    }
    return l.injectEndpoints({ endpoints: r.endpoints });
  };
}
function hR(e) {
  for (var t in e) return !1;
  return !0;
}
var vR = 2147483647 / 1e3 - 1,
  mR = function (e) {
    var t = e.reducerPath,
      n = e.api,
      r = e.context,
      o = e.internalState,
      i = n.internalActions,
      a = i.removeQueryResult,
      l = i.unsubscribeQueryResult;
    function u(h) {
      var p = o.currentSubscriptions[h];
      return !!p && !hR(p);
    }
    var s = {},
      c = function (h, p, g) {
        var y;
        if (l.match(h)) {
          var w = p.getState()[t],
            d = h.payload.queryCacheKey;
          f(
            d,
            (y = w.queries[d]) == null ? void 0 : y.endpointName,
            p,
            w.config
          );
        }
        if (n.util.resetApiState.match(h))
          for (var v = 0, m = Object.entries(s); v < m.length; v++) {
            var x = m[v],
              E = x[0],
              C = x[1];
            C && clearTimeout(C), delete s[E];
          }
        if (r.hasRehydrationInfo(h))
          for (
            var w = p.getState()[t],
              b = r.extractRehydrationInfo(h).queries,
              k = 0,
              P = Object.entries(b);
            k < P.length;
            k++
          ) {
            var R = P[k],
              d = R[0],
              T = R[1];
            f(d, T == null ? void 0 : T.endpointName, p, w.config);
          }
      };
    function f(h, p, g, y) {
      var w,
        d = r.endpointDefinitions[p],
        v =
          (w = d == null ? void 0 : d.keepUnusedDataFor) != null
            ? w
            : y.keepUnusedDataFor;
      if (v !== 1 / 0) {
        var m = Math.max(0, Math.min(v, vR));
        if (!u(h)) {
          var x = s[h];
          x && clearTimeout(x),
            (s[h] = setTimeout(function () {
              u(h) || g.dispatch(a({ queryCacheKey: h })), delete s[h];
            }, m * 1e3));
        }
      }
    }
    return c;
  },
  yR = function (e) {
    var t = e.reducerPath,
      n = e.context,
      r = e.context.endpointDefinitions,
      o = e.mutationThunk,
      i = e.api,
      a = e.assertTagType,
      l = e.refetchQuery,
      u = i.internalActions.removeQueryResult,
      s = oi(lo(o), gs(o)),
      c = function (h, p) {
        s(h) && f(e1(h, "invalidatesTags", r, a), p),
          i.util.invalidateTags.match(h) &&
            f(Z0(h.payload, void 0, void 0, void 0, void 0, a), p);
      };
    function f(h, p) {
      var g = p.getState(),
        y = g[t],
        w = i.util.selectInvalidatedBy(g, h);
      n.batch(function () {
        for (
          var d, v = Array.from(w.values()), m = 0, x = v;
          m < x.length;
          m++
        ) {
          var E = x[m].queryCacheKey,
            C = y.queries[E],
            b = (d = y.subscriptions[E]) != null ? d : {};
          C &&
            (Object.keys(b).length === 0
              ? p.dispatch(u({ queryCacheKey: E }))
              : C.status !== ke.uninitialized && p.dispatch(l(C, E)));
        }
      });
    }
    return c;
  },
  gR = function (e) {
    var t = e.reducerPath,
      n = e.queryThunk,
      r = e.api,
      o = e.refetchQuery,
      i = e.internalState,
      a = {},
      l = function (p, g) {
        (r.internalActions.updateSubscriptionOptions.match(p) ||
          r.internalActions.unsubscribeQueryResult.match(p)) &&
          s(p.payload, g),
          (n.pending.match(p) || (n.rejected.match(p) && p.meta.condition)) &&
            s(p.meta.arg, g),
          (n.fulfilled.match(p) ||
            (n.rejected.match(p) && !p.meta.condition)) &&
            u(p.meta.arg, g),
          r.util.resetApiState.match(p) && f();
      };
    function u(p, g) {
      var y = p.queryCacheKey,
        w = g.getState()[t],
        d = w.queries[y],
        v = i.currentSubscriptions[y];
      if (!(!d || d.status === ke.uninitialized)) {
        var m = h(v);
        if (Number.isFinite(m)) {
          var x = a[y];
          x != null &&
            x.timeout &&
            (clearTimeout(x.timeout), (x.timeout = void 0));
          var E = Date.now() + m,
            C = (a[y] = {
              nextPollTimestamp: E,
              pollingInterval: m,
              timeout: setTimeout(function () {
                (C.timeout = void 0), g.dispatch(o(d, y));
              }, m),
            });
        }
      }
    }
    function s(p, g) {
      var y = p.queryCacheKey,
        w = g.getState()[t],
        d = w.queries[y],
        v = i.currentSubscriptions[y];
      if (!(!d || d.status === ke.uninitialized)) {
        var m = h(v);
        if (!Number.isFinite(m)) {
          c(y);
          return;
        }
        var x = a[y],
          E = Date.now() + m;
        (!x || E < x.nextPollTimestamp) && u({ queryCacheKey: y }, g);
      }
    }
    function c(p) {
      var g = a[p];
      g != null && g.timeout && clearTimeout(g.timeout), delete a[p];
    }
    function f() {
      for (var p = 0, g = Object.keys(a); p < g.length; p++) {
        var y = g[p];
        c(y);
      }
    }
    function h(p) {
      p === void 0 && (p = {});
      var g = Number.POSITIVE_INFINITY;
      for (var y in p)
        p[y].pollingInterval && (g = Math.min(p[y].pollingInterval, g));
      return g;
    }
    return l;
  },
  wR = function (e) {
    var t = e.reducerPath,
      n = e.context,
      r = e.api,
      o = e.refetchQuery,
      i = e.internalState,
      a = r.internalActions.removeQueryResult,
      l = function (s, c) {
        vp.match(s) && u(c, "refetchOnFocus"),
          mp.match(s) && u(c, "refetchOnReconnect");
      };
    function u(s, c) {
      var f = s.getState()[t],
        h = f.queries,
        p = i.currentSubscriptions;
      n.batch(function () {
        for (var g = 0, y = Object.keys(p); g < y.length; g++) {
          var w = y[g],
            d = h[w],
            v = p[w];
          if (!(!v || !d)) {
            var m =
              Object.values(v).some(function (x) {
                return x[c] === !0;
              }) ||
              (Object.values(v).every(function (x) {
                return x[c] === void 0;
              }) &&
                f.config[c]);
            m &&
              (Object.keys(v).length === 0
                ? s.dispatch(a({ queryCacheKey: w }))
                : d.status !== ke.uninitialized && s.dispatch(o(d, w)));
          }
        }
      });
    }
    return l;
  },
  zv = new Error("Promise never resolved before cacheEntryRemoved."),
  SR = function (e) {
    var t = e.api,
      n = e.reducerPath,
      r = e.context,
      o = e.queryThunk,
      i = e.mutationThunk;
    e.internalState;
    var a = Af(o),
      l = Af(i),
      u = lo(o, i),
      s = {},
      c = function (p, g, y) {
        var w = f(p);
        if (o.pending.match(p)) {
          var d = y[n].queries[w],
            v = g.getState()[n].queries[w];
          !d &&
            v &&
            h(
              p.meta.arg.endpointName,
              p.meta.arg.originalArgs,
              w,
              g,
              p.meta.requestId
            );
        } else if (i.pending.match(p)) {
          var v = g.getState()[n].mutations[w];
          v &&
            h(
              p.meta.arg.endpointName,
              p.meta.arg.originalArgs,
              w,
              g,
              p.meta.requestId
            );
        } else if (u(p)) {
          var m = s[w];
          m != null &&
            m.valueResolved &&
            (m.valueResolved({ data: p.payload, meta: p.meta.baseQueryMeta }),
            delete m.valueResolved);
        } else if (
          t.internalActions.removeQueryResult.match(p) ||
          t.internalActions.removeMutationResult.match(p)
        ) {
          var m = s[w];
          m && (delete s[w], m.cacheEntryRemoved());
        } else if (t.util.resetApiState.match(p))
          for (var x = 0, E = Object.entries(s); x < E.length; x++) {
            var C = E[x],
              b = C[0],
              m = C[1];
            delete s[b], m.cacheEntryRemoved();
          }
      };
    function f(p) {
      return a(p)
        ? p.meta.arg.queryCacheKey
        : l(p)
        ? p.meta.requestId
        : t.internalActions.removeQueryResult.match(p)
        ? p.payload.queryCacheKey
        : t.internalActions.removeMutationResult.match(p)
        ? Sa(p.payload)
        : "";
    }
    function h(p, g, y, w, d) {
      var v = r.endpointDefinitions[p],
        m = v == null ? void 0 : v.onCacheEntryAdded;
      if (m) {
        var x = {},
          E = new Promise(function (T) {
            x.cacheEntryRemoved = T;
          }),
          C = Promise.race([
            new Promise(function (T) {
              x.valueResolved = T;
            }),
            E.then(function () {
              throw zv;
            }),
          ]);
        C.catch(function () {}), (s[y] = x);
        var b = t.endpoints[p].select(v.type === xn.query ? g : y),
          k = w.dispatch(function (T, N, M) {
            return M;
          }),
          P = hn(De({}, w), {
            getCacheEntry: function () {
              return b(w.getState());
            },
            requestId: d,
            extra: k,
            updateCachedData:
              v.type === xn.query
                ? function (T) {
                    return w.dispatch(t.util.updateQueryData(p, g, T));
                  }
                : void 0,
            cacheDataLoaded: C,
            cacheEntryRemoved: E,
          }),
          R = m(g, P);
        Promise.resolve(R).catch(function (T) {
          if (T !== zv) throw T;
        });
      }
    }
    return c;
  },
  xR = function (e) {
    var t = e.api,
      n = e.context,
      r = e.queryThunk,
      o = e.mutationThunk,
      i = dp(r, o),
      a = ga(r, o),
      l = lo(r, o),
      u = {},
      s = function (c, f) {
        var h, p, g;
        if (i(c)) {
          var y = c.meta,
            w = y.requestId,
            d = y.arg,
            v = d.endpointName,
            m = d.originalArgs,
            x = n.endpointDefinitions[v],
            E = x == null ? void 0 : x.onQueryStarted;
          if (E) {
            var C = {},
              b = new Promise(function (A, z) {
                (C.resolve = A), (C.reject = z);
              });
            b.catch(function () {}), (u[w] = C);
            var k = t.endpoints[v].select(x.type === xn.query ? m : w),
              P = f.dispatch(function (A, z, B) {
                return B;
              }),
              R = hn(De({}, f), {
                getCacheEntry: function () {
                  return k(f.getState());
                },
                requestId: w,
                extra: P,
                updateCachedData:
                  x.type === xn.query
                    ? function (A) {
                        return f.dispatch(t.util.updateQueryData(v, m, A));
                      }
                    : void 0,
                queryFulfilled: b,
              });
            E(m, R);
          }
        } else if (l(c)) {
          var T = c.meta,
            w = T.requestId,
            N = T.baseQueryMeta;
          (h = u[w]) == null || h.resolve({ data: c.payload, meta: N }),
            delete u[w];
        } else if (a(c)) {
          var M = c.meta,
            w = M.requestId,
            I = M.rejectedWithValue,
            N = M.baseQueryMeta;
          (g = u[w]) == null ||
            g.reject({
              error: (p = c.payload) != null ? p : c.error,
              isUnhandledError: !I,
              meta: N,
            }),
            delete u[w];
        }
      };
    return s;
  },
  ER = function (e) {
    var t = e.api,
      n = e.context.apiUid,
      r = e.reducerPath;
    return function (o, i) {
      var a, l;
      t.util.resetApiState.match(o) &&
        i.dispatch(t.internalActions.middlewareRegistered(n)),
        typeof process < "u";
    };
  },
  Uv,
  CR =
    typeof queueMicrotask == "function"
      ? queueMicrotask.bind(
          typeof window < "u"
            ? window
            : typeof global < "u"
            ? global
            : globalThis
        )
      : function (e) {
          return (Uv || (Uv = Promise.resolve())).then(e).catch(function (t) {
            return setTimeout(function () {
              throw t;
            }, 0);
          });
        },
  bR = function (e) {
    var t = e.api,
      n = e.queryThunk,
      r = e.internalState,
      o = t.reducerPath + "/subscriptions",
      i = null,
      a = !1,
      l = t.internalActions,
      u = l.updateSubscriptionOptions,
      s = l.unsubscribeQueryResult,
      c = function (f, h) {
        var p, g, y, w, d, v, m, x, E;
        if (u.match(h)) {
          var C = h.payload,
            b = C.queryCacheKey,
            k = C.requestId,
            P = C.options;
          return (
            (p = f == null ? void 0 : f[b]) != null && p[k] && (f[b][k] = P), !0
          );
        }
        if (s.match(h)) {
          var R = h.payload,
            b = R.queryCacheKey,
            k = R.requestId;
          return f[b] && delete f[b][k], !0;
        }
        if (t.internalActions.removeQueryResult.match(h))
          return delete f[h.payload.queryCacheKey], !0;
        if (n.pending.match(h)) {
          var T = h.meta,
            N = T.arg,
            k = T.requestId;
          if (N.subscribe) {
            var M = (y = f[(g = N.queryCacheKey)]) != null ? y : (f[g] = {});
            return (
              (M[k] =
                (d = (w = N.subscriptionOptions) != null ? w : M[k]) != null
                  ? d
                  : {}),
              !0
            );
          }
        }
        if (n.rejected.match(h)) {
          var I = h.meta,
            A = I.condition,
            N = I.arg,
            k = I.requestId;
          if (A && N.subscribe) {
            var M = (m = f[(v = N.queryCacheKey)]) != null ? m : (f[v] = {});
            return (
              (M[k] =
                (E = (x = N.subscriptionOptions) != null ? x : M[k]) != null
                  ? E
                  : {}),
              !0
            );
          }
        }
        return !1;
      };
    return function (f, h) {
      var p, g;
      if (
        (i || (i = JSON.parse(JSON.stringify(r.currentSubscriptions))),
        t.util.resetApiState.match(f))
      )
        return (i = r.currentSubscriptions = {}), [!0, !1];
      if (t.internalActions.internal_probeSubscription.match(f)) {
        var y = f.payload,
          w = y.queryCacheKey,
          d = y.requestId,
          v = !!((p = r.currentSubscriptions[w]) != null && p[d]);
        return [!1, v];
      }
      var m = c(r.currentSubscriptions, f);
      if (m) {
        a ||
          (CR(function () {
            var b = JSON.parse(JSON.stringify(r.currentSubscriptions)),
              k = A0(i, function () {
                return b;
              }),
              P = k[1];
            h.next(t.internalActions.subscriptionsUpdated(P)),
              (i = b),
              (a = !1);
          }),
          (a = !0));
        var x = !!((g = f.type) != null && g.startsWith(o)),
          E = n.rejected.match(f) && f.meta.condition && !!f.meta.arg.subscribe,
          C = !x && !E;
        return [C, !1];
      }
      return [!0, !1];
    };
  };
function kR(e) {
  var t = e.reducerPath,
    n = e.queryThunk,
    r = e.api,
    o = e.context,
    i = o.apiUid,
    a = { invalidateTags: gt(t + "/invalidateTags") },
    l = function (f) {
      return !!f && typeof f.type == "string" && f.type.startsWith(t + "/");
    },
    u = [ER, mR, yR, gR, SR, xR],
    s = function (f) {
      var h = !1,
        p = { currentSubscriptions: {} },
        g = hn(De({}, e), { internalState: p, refetchQuery: c }),
        y = u.map(function (v) {
          return v(g);
        }),
        w = bR(g),
        d = wR(g);
      return function (v) {
        return function (m) {
          h ||
            ((h = !0), f.dispatch(r.internalActions.middlewareRegistered(i)));
          var x = hn(De({}, f), { next: v }),
            E = f.getState(),
            C = w(m, x, E),
            b = C[0],
            k = C[1],
            P;
          if (
            (b ? (P = v(m)) : (P = k),
            f.getState()[t] && (d(m, x, E), l(m) || o.hasRehydrationInfo(m)))
          )
            for (var R = 0, T = y; R < T.length; R++) {
              var N = T[R];
              N(m, x, E);
            }
          return P;
        };
      };
    };
  return { middleware: s, actions: a };
  function c(f, h, p) {
    return (
      p === void 0 && (p = {}),
      n(
        De(
          {
            type: "query",
            endpointName: f.endpointName,
            originalArgs: f.originalArgs,
            subscribe: !1,
            forceRefetch: !0,
            queryCacheKey: h,
          },
          p
        )
      )
    );
  }
}
function Vn(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  Object.assign.apply(Object, gu([e], t));
}
var Bv = Symbol(),
  RR = function () {
    return {
      name: Bv,
      init: function (e, t, n) {
        var r = t.baseQuery,
          o = t.tagTypes,
          i = t.reducerPath,
          a = t.serializeQueryArgs,
          l = t.keepUnusedDataFor,
          u = t.refetchOnMountOrArgChange,
          s = t.refetchOnFocus,
          c = t.refetchOnReconnect;
        ok();
        var f = function (Y) {
          return typeof process < "u", Y;
        };
        Object.assign(e, {
          reducerPath: i,
          endpoints: {},
          internalActions: {
            onOnline: mp,
            onOffline: X0,
            onFocus: vp,
            onFocusLost: Y0,
          },
          util: {},
        });
        var h = cR({
            baseQuery: r,
            reducerPath: i,
            context: n,
            api: e,
            serializeQueryArgs: a,
          }),
          p = h.queryThunk,
          g = h.mutationThunk,
          y = h.patchQueryData,
          w = h.updateQueryData,
          d = h.upsertQueryData,
          v = h.prefetch,
          m = h.buildMatchThunkActions,
          x = fR({
            context: n,
            queryThunk: p,
            mutationThunk: g,
            reducerPath: i,
            assertTagType: f,
            config: {
              refetchOnFocus: s,
              refetchOnReconnect: c,
              refetchOnMountOrArgChange: u,
              keepUnusedDataFor: l,
              reducerPath: i,
            },
          }),
          E = x.reducer,
          C = x.actions;
        Vn(e.util, {
          patchQueryData: y,
          updateQueryData: w,
          upsertQueryData: d,
          prefetch: v,
          resetApiState: C.resetApiState,
        }),
          Vn(e.internalActions, C);
        var b = kR({
            reducerPath: i,
            context: n,
            queryThunk: p,
            mutationThunk: g,
            api: e,
            assertTagType: f,
          }),
          k = b.middleware,
          P = b.actions;
        Vn(e.util, P), Vn(e, { reducer: E, middleware: k });
        var R = dR({ serializeQueryArgs: a, reducerPath: i }),
          T = R.buildQuerySelector,
          N = R.buildMutationSelector,
          M = R.selectInvalidatedBy;
        Vn(e.util, { selectInvalidatedBy: M });
        var I = sR({
            queryThunk: p,
            mutationThunk: g,
            api: e,
            serializeQueryArgs: a,
            context: n,
          }),
          A = I.buildInitiateQuery,
          z = I.buildInitiateMutation,
          B = I.getRunningMutationThunk,
          D = I.getRunningMutationsThunk,
          _ = I.getRunningQueriesThunk,
          L = I.getRunningQueryThunk,
          Q = I.getRunningOperationPromises,
          q = I.removalWarning;
        return (
          Vn(e.util, {
            getRunningOperationPromises: Q,
            getRunningOperationPromise: q,
            getRunningMutationThunk: B,
            getRunningMutationsThunk: D,
            getRunningQueryThunk: L,
            getRunningQueriesThunk: _,
          }),
          {
            name: Bv,
            injectEndpoint: function (Y, J) {
              var H,
                ee,
                le = e;
              (ee = (H = le.endpoints)[Y]) != null || (H[Y] = {}),
                J0(J)
                  ? Vn(
                      le.endpoints[Y],
                      { name: Y, select: T(Y, J), initiate: A(Y, J) },
                      m(p, Y)
                    )
                  : lR(J) &&
                    Vn(
                      le.endpoints[Y],
                      { name: Y, select: N(), initiate: z(Y) },
                      m(g, Y)
                    );
            },
          }
        );
      },
    };
  },
  OR =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n];
      return e;
    },
  PR = Object.defineProperty,
  TR = Object.defineProperties,
  NR = Object.getOwnPropertyDescriptors,
  Qv = Object.getOwnPropertySymbols,
  MR = Object.prototype.hasOwnProperty,
  DR = Object.prototype.propertyIsEnumerable,
  Hv = function (e, t, n) {
    return t in e
      ? PR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  Cn = function (e, t) {
    for (var n in t || (t = {})) MR.call(t, n) && Hv(e, n, t[n]);
    if (Qv)
      for (var r = 0, o = Qv(t); r < o.length; r++) {
        var n = o[r];
        DR.call(t, n) && Hv(e, n, t[n]);
      }
    return e;
  },
  $l = function (e, t) {
    return TR(e, NR(t));
  };
function Wv(e, t, n, r) {
  var o = S.useMemo(
      function () {
        return {
          queryArgs: e,
          serialized:
            typeof e == "object"
              ? t({ queryArgs: e, endpointDefinition: n, endpointName: r })
              : e,
        };
      },
      [e, t, n, r]
    ),
    i = S.useRef(o);
  return (
    S.useEffect(
      function () {
        i.current.serialized !== o.serialized && (i.current = o);
      },
      [o]
    ),
    i.current.serialized === o.serialized ? i.current.queryArgs : e
  );
}
var Sc = Symbol();
function xc(e) {
  var t = S.useRef(e);
  return (
    S.useEffect(
      function () {
        cu(t.current, e) || (t.current = e);
      },
      [e]
    ),
    cu(t.current, e) ? t.current : e
  );
}
var cl = WeakMap ? new WeakMap() : void 0,
  $R = function (e) {
    var t = e.endpointName,
      n = e.queryArgs,
      r = "",
      o = cl == null ? void 0 : cl.get(n);
    if (typeof o == "string") r = o;
    else {
      var i = JSON.stringify(n, function (a, l) {
        return Cr(l)
          ? Object.keys(l)
              .sort()
              .reduce(function (u, s) {
                return (u[s] = l[s]), u;
              }, {})
          : l;
      });
      Cr(n) && (cl == null || cl.set(n, i)), (r = i);
    }
    return t + "(" + r + ")";
  },
  jR =
    typeof window < "u" && window.document && window.document.createElement
      ? S.useLayoutEffect
      : S.useEffect,
  IR = function (e) {
    return e;
  },
  LR = function (e) {
    return e.isUninitialized
      ? $l(Cn({}, e), {
          isUninitialized: !1,
          isFetching: !0,
          isLoading: e.data === void 0,
          status: ke.pending,
        })
      : e;
  };
function AR(e) {
  var t = e.api,
    n = e.moduleOptions,
    r = n.batch,
    o = n.useDispatch,
    i = n.useSelector,
    a = n.useStore,
    l = n.unstable__sideEffectsInRender,
    u = e.serializeQueryArgs,
    s = e.context,
    c = l
      ? function (y) {
          return y();
        }
      : S.useEffect;
  return { buildQueryHooks: p, buildMutationHook: g, usePrefetch: h };
  function f(y, w, d) {
    if (w != null && w.endpointName && y.isUninitialized) {
      var v = w.endpointName,
        m = s.endpointDefinitions[v];
      u({
        queryArgs: w.originalArgs,
        endpointDefinition: m,
        endpointName: v,
      }) === u({ queryArgs: d, endpointDefinition: m, endpointName: v }) &&
        (w = void 0);
    }
    var x = y.isSuccess ? y.data : w == null ? void 0 : w.data;
    x === void 0 && (x = y.data);
    var E = x !== void 0,
      C = y.isLoading,
      b = !E && C,
      k = y.isSuccess || (C && E);
    return $l(Cn({}, y), {
      data: x,
      currentData: y.data,
      isFetching: C,
      isLoading: b,
      isSuccess: k,
    });
  }
  function h(y, w) {
    var d = o(),
      v = xc(w);
    return S.useCallback(
      function (m, x) {
        return d(t.util.prefetch(y, m, Cn(Cn({}, v), x)));
      },
      [y, d, v]
    );
  }
  function p(y) {
    var w = function (m, x) {
        var E = x === void 0 ? {} : x,
          C = E.refetchOnReconnect,
          b = E.refetchOnFocus,
          k = E.refetchOnMountOrArgChange,
          P = E.skip,
          R = P === void 0 ? !1 : P,
          T = E.pollingInterval,
          N = T === void 0 ? 0 : T,
          M = t.endpoints[y].initiate,
          I = o(),
          A = Wv(R ? Qr : m, $R, s.endpointDefinitions[y], y),
          z = xc({
            refetchOnReconnect: C,
            refetchOnFocus: b,
            pollingInterval: N,
          }),
          B = S.useRef(!1),
          D = S.useRef(),
          _ = D.current || {},
          L = _.queryCacheKey,
          Q = _.requestId,
          q = !1;
        if (L && Q) {
          var Y = I(
            t.internalActions.internal_probeSubscription({
              queryCacheKey: L,
              requestId: Q,
            })
          );
          q = !!Y;
        }
        var J = !q && B.current;
        return (
          c(function () {
            B.current = q;
          }),
          c(
            function () {
              J && (D.current = void 0);
            },
            [J]
          ),
          c(
            function () {
              var H,
                ee = D.current;
              if ((typeof process < "u", A === Qr)) {
                ee == null || ee.unsubscribe(), (D.current = void 0);
                return;
              }
              var le = (H = D.current) == null ? void 0 : H.subscriptionOptions;
              if (!ee || ee.arg !== A) {
                ee == null || ee.unsubscribe();
                var Se = I(M(A, { subscriptionOptions: z, forceRefetch: k }));
                D.current = Se;
              } else z !== le && ee.updateSubscriptionOptions(z);
            },
            [I, M, k, A, z, J]
          ),
          S.useEffect(function () {
            return function () {
              var H;
              (H = D.current) == null || H.unsubscribe(), (D.current = void 0);
            };
          }, []),
          S.useMemo(function () {
            return {
              refetch: function () {
                var H;
                if (!D.current)
                  throw new Error(
                    "Cannot refetch a query that has not been started yet."
                  );
                return (H = D.current) == null ? void 0 : H.refetch();
              },
            };
          }, [])
        );
      },
      d = function (m) {
        var x = m === void 0 ? {} : m,
          E = x.refetchOnReconnect,
          C = x.refetchOnFocus,
          b = x.pollingInterval,
          k = b === void 0 ? 0 : b,
          P = t.endpoints[y].initiate,
          R = o(),
          T = S.useState(Sc),
          N = T[0],
          M = T[1],
          I = S.useRef(),
          A = xc({
            refetchOnReconnect: E,
            refetchOnFocus: C,
            pollingInterval: k,
          });
        c(
          function () {
            var D,
              _,
              L = (D = I.current) == null ? void 0 : D.subscriptionOptions;
            A !== L &&
              ((_ = I.current) == null || _.updateSubscriptionOptions(A));
          },
          [A]
        );
        var z = S.useRef(A);
        c(
          function () {
            z.current = A;
          },
          [A]
        );
        var B = S.useCallback(
          function (D, _) {
            _ === void 0 && (_ = !1);
            var L;
            return (
              r(function () {
                var Q;
                (Q = I.current) == null || Q.unsubscribe(),
                  (I.current = L =
                    R(
                      P(D, { subscriptionOptions: z.current, forceRefetch: !_ })
                    )),
                  M(D);
              }),
              L
            );
          },
          [R, P]
        );
        return (
          S.useEffect(function () {
            return function () {
              var D;
              (D = I == null ? void 0 : I.current) == null || D.unsubscribe();
            };
          }, []),
          S.useEffect(
            function () {
              N !== Sc && !I.current && B(N, !0);
            },
            [N, B]
          ),
          S.useMemo(
            function () {
              return [B, N];
            },
            [B, N]
          )
        );
      },
      v = function (m, x) {
        var E = x === void 0 ? {} : x,
          C = E.skip,
          b = C === void 0 ? !1 : C,
          k = E.selectFromResult,
          P = t.endpoints[y].select,
          R = Wv(b ? Qr : m, u, s.endpointDefinitions[y], y),
          T = S.useRef(),
          N = S.useMemo(
            function () {
              return Ui(
                [
                  P(R),
                  function (B, D) {
                    return D;
                  },
                  function (B) {
                    return R;
                  },
                ],
                f
              );
            },
            [P, R]
          ),
          M = S.useMemo(
            function () {
              return k ? Ui([N], k) : N;
            },
            [N, k]
          ),
          I = i(function (B) {
            return M(B, T.current);
          }, cu),
          A = a(),
          z = N(A.getState(), T.current);
        return (
          jR(
            function () {
              T.current = z;
            },
            [z]
          ),
          I
        );
      };
    return {
      useQueryState: v,
      useQuerySubscription: w,
      useLazyQuerySubscription: d,
      useLazyQuery: function (m) {
        var x = d(m),
          E = x[0],
          C = x[1],
          b = v(C, $l(Cn({}, m), { skip: C === Sc })),
          k = S.useMemo(
            function () {
              return { lastArg: C };
            },
            [C]
          );
        return S.useMemo(
          function () {
            return [E, b, k];
          },
          [E, b, k]
        );
      },
      useQuery: function (m, x) {
        var E = w(m, x),
          C = v(
            m,
            Cn(
              {
                selectFromResult:
                  m === Qr || (x != null && x.skip) ? void 0 : LR,
              },
              x
            )
          ),
          b = C.data,
          k = C.status,
          P = C.isLoading,
          R = C.isSuccess,
          T = C.isError,
          N = C.error;
        return (
          S.useDebugValue({
            data: b,
            status: k,
            isLoading: P,
            isSuccess: R,
            isError: T,
            error: N,
          }),
          S.useMemo(
            function () {
              return Cn(Cn({}, C), E);
            },
            [C, E]
          )
        );
      },
    };
  }
  function g(y) {
    return function (w) {
      var d = w === void 0 ? {} : w,
        v = d.selectFromResult,
        m = v === void 0 ? IR : v,
        x = d.fixedCacheKey,
        E = t.endpoints[y],
        C = E.select,
        b = E.initiate,
        k = o(),
        P = S.useState(),
        R = P[0],
        T = P[1];
      S.useEffect(
        function () {
          return function () {
            (R != null && R.arg.fixedCacheKey) || R == null || R.reset();
          };
        },
        [R]
      );
      var N = S.useCallback(
          function (ee) {
            var le = k(b(ee, { fixedCacheKey: x }));
            return T(le), le;
          },
          [k, b, x]
        ),
        M = (R || {}).requestId,
        I = S.useMemo(
          function () {
            return Ui(
              [
                C({
                  fixedCacheKey: x,
                  requestId: R == null ? void 0 : R.requestId,
                }),
              ],
              m
            );
          },
          [C, R, m, x]
        ),
        A = i(I, cu),
        z = x == null ? (R == null ? void 0 : R.arg.originalArgs) : void 0,
        B = S.useCallback(
          function () {
            r(function () {
              R && T(void 0),
                x &&
                  k(
                    t.internalActions.removeMutationResult({
                      requestId: M,
                      fixedCacheKey: x,
                    })
                  );
            });
          },
          [k, x, R, M]
        ),
        D = A.endpointName,
        _ = A.data,
        L = A.status,
        Q = A.isLoading,
        q = A.isSuccess,
        Y = A.isError,
        J = A.error;
      S.useDebugValue({
        endpointName: D,
        data: _,
        status: L,
        isLoading: Q,
        isSuccess: q,
        isError: Y,
        error: J,
      });
      var H = S.useMemo(
        function () {
          return $l(Cn({}, A), { originalArgs: z, reset: B });
        },
        [A, z, B]
      );
      return S.useMemo(
        function () {
          return [N, H];
        },
        [N, H]
      );
    };
  }
}
var xu;
(function (e) {
  (e.query = "query"), (e.mutation = "mutation");
})(xu || (xu = {}));
function _R(e) {
  return e.type === xu.query;
}
function FR(e) {
  return e.type === xu.mutation;
}
function Ec(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
function fl(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  Object.assign.apply(Object, OR([e], t));
}
var zR = Symbol(),
  UR = function (e) {
    var t = e === void 0 ? {} : e,
      n = t.batch,
      r = n === void 0 ? Qd.unstable_batchedUpdates : n,
      o = t.useDispatch,
      i = o === void 0 ? hs : o,
      a = t.useSelector,
      l = a === void 0 ? ao : a,
      u = t.useStore,
      s = u === void 0 ? D0 : u,
      c = t.unstable__sideEffectsInRender,
      f = c === void 0 ? !1 : c;
    return {
      name: zR,
      init: function (h, p, g) {
        var y = p.serializeQueryArgs,
          w = h,
          d = AR({
            api: h,
            moduleOptions: {
              batch: r,
              useDispatch: i,
              useSelector: l,
              useStore: s,
              unstable__sideEffectsInRender: f,
            },
            serializeQueryArgs: y,
            context: g,
          }),
          v = d.buildQueryHooks,
          m = d.buildMutationHook,
          x = d.usePrefetch;
        return (
          fl(w, { usePrefetch: x }),
          fl(g, { batch: r }),
          {
            injectEndpoint: function (E, C) {
              if (_R(C)) {
                var b = v(E),
                  k = b.useQuery,
                  P = b.useLazyQuery,
                  R = b.useLazyQuerySubscription,
                  T = b.useQueryState,
                  N = b.useQuerySubscription;
                fl(w.endpoints[E], {
                  useQuery: k,
                  useLazyQuery: P,
                  useLazyQuerySubscription: R,
                  useQueryState: T,
                  useQuerySubscription: N,
                }),
                  (h["use" + Ec(E) + "Query"] = k),
                  (h["useLazy" + Ec(E) + "Query"] = P);
              } else if (FR(C)) {
                var M = m(E);
                fl(w.endpoints[E], { useMutation: M }),
                  (h["use" + Ec(E) + "Mutation"] = M);
              }
            },
          }
        );
      },
    };
  },
  BR = pR(RR(), UR());
const Qi = BR({
    baseQuery: aR({ baseUrl: "" }),
    tagTypes: ["User"],
    endpoints: (e) => ({}),
  }),
  QR = Ik({
    reducer: { auth: Kk, [Qi.reducerPath]: Qi.reducer },
    middleware: (e) => e().concat(Qi.middleware),
    devtools: !0,
  });
var n1 = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], o = 0; o < arguments.length; o++) {
        var i = arguments[o];
        if (i) {
          var a = typeof i;
          if (a === "string" || a === "number") r.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var l = n.apply(null, i);
              l && r.push(l);
            }
          } else if (a === "object") {
            if (
              i.toString !== Object.prototype.toString &&
              !i.toString.toString().includes("[native code]")
            ) {
              r.push(i.toString());
              continue;
            }
            for (var u in i) t.call(i, u) && i[u] && r.push(u);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(n1);
var HR = n1.exports;
const ie = ka(HR);
function qv(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function WR(e) {
  var t = qR(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function qR(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function KR(e, t, n) {
  var r = S.useRef(e !== void 0),
    o = S.useState(t),
    i = o[0],
    a = o[1],
    l = e !== void 0,
    u = r.current;
  return (
    (r.current = l),
    !l && u && i !== t && a(t),
    [
      l ? e : i,
      S.useCallback(
        function (s) {
          for (
            var c = arguments.length, f = new Array(c > 1 ? c - 1 : 0), h = 1;
            h < c;
            h++
          )
            f[h - 1] = arguments[h];
          n && n.apply(void 0, [s].concat(f)), a(s);
        },
        [n]
      ),
    ]
  );
}
function yp(e, t) {
  return Object.keys(t).reduce(function (n, r) {
    var o,
      i = n,
      a = i[qv(r)],
      l = i[r],
      u = k0(i, [qv(r), r].map(WR)),
      s = t[r],
      c = KR(l, a, e[s]),
      f = c[0],
      h = c[1];
    return Nf({}, u, ((o = {}), (o[r] = f), (o[s] = h), o));
  }, e);
}
function zf(e, t) {
  return (
    (zf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    zf(e, t)
  );
}
function VR(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    zf(e, t);
}
const GR = ["xxl", "xl", "lg", "md", "sm", "xs"],
  YR = "xs",
  ws = S.createContext({ prefixes: {}, breakpoints: GR, minBreakpoint: YR });
function fe(e, t) {
  const { prefixes: n } = S.useContext(ws);
  return e || n[t] || t;
}
function r1() {
  const { breakpoints: e } = S.useContext(ws);
  return e;
}
function o1() {
  const { minBreakpoint: e } = S.useContext(ws);
  return e;
}
function XR() {
  const { dir: e } = S.useContext(ws);
  return e === "rtl";
}
function Ss(e) {
  return (e && e.ownerDocument) || document;
}
function JR(e) {
  var t = Ss(e);
  return (t && t.defaultView) || window;
}
function ZR(e, t) {
  return JR(e).getComputedStyle(e, t);
}
var eO = /([A-Z])/g;
function tO(e) {
  return e.replace(eO, "-$1").toLowerCase();
}
var nO = /^ms-/;
function dl(e) {
  return tO(e).replace(nO, "-ms-");
}
var rO =
  /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function oO(e) {
  return !!(e && rO.test(e));
}
function Dn(e, t) {
  var n = "",
    r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(dl(t)) || ZR(e).getPropertyValue(dl(t));
  Object.keys(t).forEach(function (o) {
    var i = t[o];
    !i && i !== 0
      ? e.style.removeProperty(dl(o))
      : oO(o)
      ? (r += o + "(" + i + ") ")
      : (n += dl(o) + ": " + i + ";");
  }),
    r && (n += "transform: " + r + ";"),
    (e.style.cssText += ";" + n);
}
var i1 = { exports: {} },
  iO = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  aO = iO,
  lO = aO;
function a1() {}
function l1() {}
l1.resetWarningCache = a1;
var uO = function () {
  function e(r, o, i, a, l, u) {
    if (u !== lO) {
      var s = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((s.name = "Invariant Violation"), s);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
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
    checkPropTypes: l1,
    resetWarningCache: a1,
  };
  return (n.PropTypes = n), n;
};
i1.exports = uO();
var u1 = i1.exports;
const $n = ka(u1),
  Kv = { disabled: !1 },
  s1 = ne.createContext(null);
var sO = function (t) {
    return t.scrollTop;
  },
  Pi = "unmounted",
  Xn = "exited",
  en = "entering",
  Pn = "entered",
  xa = "exiting",
  Bn = (function (e) {
    VR(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var a = o,
        l = a && !a.isMounting ? r.enter : r.appear,
        u;
      return (
        (i.appearStatus = null),
        r.in
          ? l
            ? ((u = Xn), (i.appearStatus = en))
            : (u = Pn)
          : r.unmountOnExit || r.mountOnEnter
          ? (u = Pi)
          : (u = Xn),
        (i.state = { status: u }),
        (i.nextCallback = null),
        i
      );
    }
    t.getDerivedStateFromProps = function (o, i) {
      var a = o.in;
      return a && i.status === Pi ? { status: Xn } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (o) {
        var i = null;
        if (o !== this.props) {
          var a = this.state.status;
          this.props.in
            ? a !== en && a !== Pn && (i = en)
            : (a === en || a === Pn) && (i = xa);
        }
        this.updateStatus(!1, i);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var o = this.props.timeout,
          i,
          a,
          l;
        return (
          (i = a = l = o),
          o != null &&
            typeof o != "number" &&
            ((i = o.exit),
            (a = o.enter),
            (l = o.appear !== void 0 ? o.appear : a)),
          { exit: i, enter: a, appear: l }
        );
      }),
      (n.updateStatus = function (o, i) {
        if ((o === void 0 && (o = !1), i !== null))
          if ((this.cancelNextCallback(), i === en)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var a = this.props.nodeRef
                ? this.props.nodeRef.current
                : zr.findDOMNode(this);
              a && sO(a);
            }
            this.performEnter(o);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === Xn &&
            this.setState({ status: Pi });
      }),
      (n.performEnter = function (o) {
        var i = this,
          a = this.props.enter,
          l = this.context ? this.context.isMounting : o,
          u = this.props.nodeRef ? [l] : [zr.findDOMNode(this), l],
          s = u[0],
          c = u[1],
          f = this.getTimeouts(),
          h = l ? f.appear : f.enter;
        if ((!o && !a) || Kv.disabled) {
          this.safeSetState({ status: Pn }, function () {
            i.props.onEntered(s);
          });
          return;
        }
        this.props.onEnter(s, c),
          this.safeSetState({ status: en }, function () {
            i.props.onEntering(s, c),
              i.onTransitionEnd(h, function () {
                i.safeSetState({ status: Pn }, function () {
                  i.props.onEntered(s, c);
                });
              });
          });
      }),
      (n.performExit = function () {
        var o = this,
          i = this.props.exit,
          a = this.getTimeouts(),
          l = this.props.nodeRef ? void 0 : zr.findDOMNode(this);
        if (!i || Kv.disabled) {
          this.safeSetState({ status: Xn }, function () {
            o.props.onExited(l);
          });
          return;
        }
        this.props.onExit(l),
          this.safeSetState({ status: xa }, function () {
            o.props.onExiting(l),
              o.onTransitionEnd(a.exit, function () {
                o.safeSetState({ status: Xn }, function () {
                  o.props.onExited(l);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (o, i) {
        (i = this.setNextCallback(i)), this.setState(o, i);
      }),
      (n.setNextCallback = function (o) {
        var i = this,
          a = !0;
        return (
          (this.nextCallback = function (l) {
            a && ((a = !1), (i.nextCallback = null), o(l));
          }),
          (this.nextCallback.cancel = function () {
            a = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (o, i) {
        this.setNextCallback(i);
        var a = this.props.nodeRef
            ? this.props.nodeRef.current
            : zr.findDOMNode(this),
          l = o == null && !this.props.addEndListener;
        if (!a || l) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var u = this.props.nodeRef
              ? [this.nextCallback]
              : [a, this.nextCallback],
            s = u[0],
            c = u[1];
          this.props.addEndListener(s, c);
        }
        o != null && setTimeout(this.nextCallback, o);
      }),
      (n.render = function () {
        var o = this.state.status;
        if (o === Pi) return null;
        var i = this.props,
          a = i.children;
        i.in,
          i.mountOnEnter,
          i.unmountOnExit,
          i.appear,
          i.enter,
          i.exit,
          i.timeout,
          i.addEndListener,
          i.onEnter,
          i.onEntering,
          i.onEntered,
          i.onExit,
          i.onExiting,
          i.onExited,
          i.nodeRef;
        var l = k0(i, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return ne.createElement(
          s1.Provider,
          { value: null },
          typeof a == "function"
            ? a(o, l)
            : ne.cloneElement(ne.Children.only(a), l)
        );
      }),
      t
    );
  })(ne.Component);
Bn.contextType = s1;
Bn.propTypes = {};
function ho() {}
Bn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: ho,
  onEntering: ho,
  onEntered: ho,
  onExit: ho,
  onExiting: ho,
  onExited: ho,
};
Bn.UNMOUNTED = Pi;
Bn.EXITED = Xn;
Bn.ENTERING = en;
Bn.ENTERED = Pn;
Bn.EXITING = xa;
const cO = Bn,
  xs = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
var Uf = !1,
  Bf = !1;
try {
  var Cc = {
    get passive() {
      return (Uf = !0);
    },
    get once() {
      return (Bf = Uf = !0);
    },
  };
  xs &&
    (window.addEventListener("test", Cc, Cc),
    window.removeEventListener("test", Cc, !0));
} catch {}
function c1(e, t, n, r) {
  if (r && typeof r != "boolean" && !Bf) {
    var o = r.once,
      i = r.capture,
      a = n;
    !Bf &&
      o &&
      ((a =
        n.__once ||
        function l(u) {
          this.removeEventListener(t, l, i), n.call(this, u);
        }),
      (n.__once = a)),
      e.addEventListener(t, a, Uf ? r : i);
  }
  e.addEventListener(t, n, r);
}
function fO(e, t, n, r) {
  var o = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, o),
    n.__once && e.removeEventListener(t, n.__once, o);
}
function or(e, t, n, r) {
  return (
    c1(e, t, n, r),
    function () {
      fO(e, t, n, r);
    }
  );
}
function dO(e, t, n, r) {
  if ((n === void 0 && (n = !1), r === void 0 && (r = !0), e)) {
    var o = document.createEvent("HTMLEvents");
    o.initEvent(t, n, r), e.dispatchEvent(o);
  }
}
function pO(e) {
  var t = Dn(e, "transitionDuration") || "",
    n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function hO(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1,
    o = setTimeout(function () {
      r || dO(e, "transitionend", !0);
    }, t + n),
    i = or(
      e,
      "transitionend",
      function () {
        r = !0;
      },
      { once: !0 }
    );
  return function () {
    clearTimeout(o), i();
  };
}
function vO(e, t, n, r) {
  n == null && (n = pO(e) || 0);
  var o = hO(e, n, r),
    i = or(e, "transitionend", t);
  return function () {
    o(), i();
  };
}
function Vv(e, t) {
  const n = Dn(e, t) || "",
    r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function gp(e, t) {
  const n = Vv(e, "transitionDuration"),
    r = Vv(e, "transitionDelay"),
    o = vO(
      e,
      (i) => {
        i.target === e && (o(), t(i));
      },
      n + r
    );
}
function Si(...e) {
  return e
    .filter((t) => t != null)
    .reduce((t, n) => {
      if (typeof n != "function")
        throw new Error(
          "Invalid Argument Type, must only provide functions, undefined, or null."
        );
      return t === null
        ? n
        : function (...o) {
            t.apply(this, o), n.apply(this, o);
          };
    }, null);
}
function f1(e) {
  e.offsetHeight;
}
var Gv = function (t) {
  return !t || typeof t == "function"
    ? t
    : function (n) {
        t.current = n;
      };
};
function mO(e, t) {
  var n = Gv(e),
    r = Gv(t);
  return function (o) {
    n && n(o), r && r(o);
  };
}
function ii(e, t) {
  return S.useMemo(
    function () {
      return mO(e, t);
    },
    [e, t]
  );
}
function yO(e) {
  return e && "setState" in e ? zr.findDOMNode(e) : e ?? null;
}
const gO = ne.forwardRef(
    (
      {
        onEnter: e,
        onEntering: t,
        onEntered: n,
        onExit: r,
        onExiting: o,
        onExited: i,
        addEndListener: a,
        children: l,
        childRef: u,
        ...s
      },
      c
    ) => {
      const f = S.useRef(null),
        h = ii(f, u),
        p = (C) => {
          h(yO(C));
        },
        g = (C) => (b) => {
          C && f.current && C(f.current, b);
        },
        y = S.useCallback(g(e), [e]),
        w = S.useCallback(g(t), [t]),
        d = S.useCallback(g(n), [n]),
        v = S.useCallback(g(r), [r]),
        m = S.useCallback(g(o), [o]),
        x = S.useCallback(g(i), [i]),
        E = S.useCallback(g(a), [a]);
      return O.jsx(cO, {
        ref: c,
        ...s,
        onEnter: y,
        onEntered: d,
        onEntering: w,
        onExit: v,
        onExited: x,
        onExiting: m,
        addEndListener: E,
        nodeRef: f,
        children:
          typeof l == "function"
            ? (C, b) => l(C, { ...b, ref: p })
            : ne.cloneElement(l, { ref: p }),
      });
    }
  ),
  wp = gO,
  wO = {
    height: ["marginTop", "marginBottom"],
    width: ["marginLeft", "marginRight"],
  };
function SO(e, t) {
  const n = `offset${e[0].toUpperCase()}${e.slice(1)}`,
    r = t[n],
    o = wO[e];
  return r + parseInt(Dn(t, o[0]), 10) + parseInt(Dn(t, o[1]), 10);
}
const xO = {
    [Xn]: "collapse",
    [xa]: "collapsing",
    [en]: "collapsing",
    [Pn]: "collapse show",
  },
  EO = ne.forwardRef(
    (
      {
        onEnter: e,
        onEntering: t,
        onEntered: n,
        onExit: r,
        onExiting: o,
        className: i,
        children: a,
        dimension: l = "height",
        in: u = !1,
        timeout: s = 300,
        mountOnEnter: c = !1,
        unmountOnExit: f = !1,
        appear: h = !1,
        getDimensionValue: p = SO,
        ...g
      },
      y
    ) => {
      const w = typeof l == "function" ? l() : l,
        d = S.useMemo(
          () =>
            Si((C) => {
              C.style[w] = "0";
            }, e),
          [w, e]
        ),
        v = S.useMemo(
          () =>
            Si((C) => {
              const b = `scroll${w[0].toUpperCase()}${w.slice(1)}`;
              C.style[w] = `${C[b]}px`;
            }, t),
          [w, t]
        ),
        m = S.useMemo(
          () =>
            Si((C) => {
              C.style[w] = null;
            }, n),
          [w, n]
        ),
        x = S.useMemo(
          () =>
            Si((C) => {
              (C.style[w] = `${p(w, C)}px`), f1(C);
            }, r),
          [r, p, w]
        ),
        E = S.useMemo(
          () =>
            Si((C) => {
              C.style[w] = null;
            }, o),
          [w, o]
        );
      return O.jsx(wp, {
        ref: y,
        addEndListener: gp,
        ...g,
        "aria-expanded": g.role ? u : null,
        onEnter: d,
        onEntering: v,
        onEntered: m,
        onExit: x,
        onExiting: E,
        childRef: a.ref,
        in: u,
        timeout: s,
        mountOnEnter: c,
        unmountOnExit: f,
        appear: h,
        children: (C, b) =>
          ne.cloneElement(a, {
            ...b,
            className: ie(
              i,
              a.props.className,
              xO[C],
              w === "width" && "collapse-horizontal"
            ),
          }),
      });
    }
  ),
  CO = EO;
function bO(e) {
  var t = S.useRef(e);
  return (
    S.useEffect(
      function () {
        t.current = e;
      },
      [e]
    ),
    t
  );
}
function Ie(e) {
  var t = bO(e);
  return S.useCallback(
    function () {
      return t.current && t.current.apply(t, arguments);
    },
    [t]
  );
}
function kO() {
  return S.useState(null);
}
function RO(e, t, n, r) {
  r === void 0 && (r = !1);
  var o = Ie(n);
  S.useEffect(
    function () {
      var i = typeof e == "function" ? e() : e;
      return (
        i.addEventListener(t, o, r),
        function () {
          return i.removeEventListener(t, o, r);
        }
      );
    },
    [e]
  );
}
function d1() {
  var e = S.useRef(!0),
    t = S.useRef(function () {
      return e.current;
    });
  return (
    S.useEffect(function () {
      return (
        (e.current = !0),
        function () {
          e.current = !1;
        }
      );
    }, []),
    t.current
  );
}
function p1(e) {
  var t = S.useRef(null);
  return (
    S.useEffect(function () {
      t.current = e;
    }),
    t.current
  );
}
var OO =
    typeof global < "u" &&
    global.navigator &&
    global.navigator.product === "ReactNative",
  PO = typeof document < "u";
const Eu = PO || OO ? S.useLayoutEffect : S.useEffect,
  TO = ["as", "disabled"];
function NO(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function MO(e) {
  return !e || e.trim() === "#";
}
function Sp({
  tagName: e,
  disabled: t,
  href: n,
  target: r,
  rel: o,
  role: i,
  onClick: a,
  tabIndex: l = 0,
  type: u,
}) {
  e || (n != null || r != null || o != null ? (e = "a") : (e = "button"));
  const s = { tagName: e };
  if (e === "button") return [{ type: u || "button", disabled: t }, s];
  const c = (h) => {
      if (((t || (e === "a" && MO(n))) && h.preventDefault(), t)) {
        h.stopPropagation();
        return;
      }
      a == null || a(h);
    },
    f = (h) => {
      h.key === " " && (h.preventDefault(), c(h));
    };
  return (
    e === "a" && (n || (n = "#"), t && (n = void 0)),
    [
      {
        role: i ?? "button",
        disabled: void 0,
        tabIndex: t ? void 0 : l,
        href: n,
        target: e === "a" ? r : void 0,
        "aria-disabled": t || void 0,
        rel: e === "a" ? o : void 0,
        onClick: c,
        onKeyDown: f,
      },
      s,
    ]
  );
}
const xp = S.forwardRef((e, t) => {
  let { as: n, disabled: r } = e,
    o = NO(e, TO);
  const [i, { tagName: a }] = Sp(Object.assign({ tagName: n, disabled: r }, o));
  return O.jsx(a, Object.assign({}, o, i, { ref: t }));
});
xp.displayName = "Button";
const DO = ["onKeyDown"];
function $O(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function jO(e) {
  return !e || e.trim() === "#";
}
const h1 = S.forwardRef((e, t) => {
  let { onKeyDown: n } = e,
    r = $O(e, DO);
  const [o] = Sp(Object.assign({ tagName: "a" }, r)),
    i = Ie((a) => {
      o.onKeyDown(a), n == null || n(a);
    });
  return jO(r.href) || r.role === "button"
    ? O.jsx("a", Object.assign({ ref: t }, r, o, { onKeyDown: i }))
    : O.jsx("a", Object.assign({ ref: t }, r, { onKeyDown: n }));
});
h1.displayName = "Anchor";
const v1 = h1,
  IO = { [en]: "show", [Pn]: "show" },
  m1 = S.forwardRef(
    (
      {
        className: e,
        children: t,
        transitionClasses: n = {},
        onEnter: r,
        ...o
      },
      i
    ) => {
      const a = {
          in: !1,
          timeout: 300,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          ...o,
        },
        l = S.useCallback(
          (u, s) => {
            f1(u), r == null || r(u, s);
          },
          [r]
        );
      return O.jsx(wp, {
        ref: i,
        addEndListener: gp,
        ...a,
        onEnter: l,
        childRef: t.ref,
        children: (u, s) =>
          S.cloneElement(t, {
            ...s,
            className: ie("fade", e, t.props.className, IO[u], n[u]),
          }),
      });
    }
  );
m1.displayName = "Fade";
const LO = m1,
  AO = {
    "aria-label": $n.string,
    onClick: $n.func,
    variant: $n.oneOf(["white"]),
  },
  Ep = S.forwardRef(
    ({ className: e, variant: t, "aria-label": n = "Close", ...r }, o) =>
      O.jsx("button", {
        ref: o,
        type: "button",
        className: ie("btn-close", t && `btn-close-${t}`, e),
        "aria-label": n,
        ...r,
      })
  );
Ep.displayName = "CloseButton";
Ep.propTypes = AO;
const _O = Ep,
  Cp = (e) =>
    S.forwardRef((t, n) =>
      O.jsx("div", { ...t, ref: n, className: ie(t.className, e) })
    );
var FO = /-(.)/g;
function zO(e) {
  return e.replace(FO, function (t, n) {
    return n.toUpperCase();
  });
}
const UO = (e) => e[0].toUpperCase() + zO(e).slice(1);
function ct(e, { displayName: t = UO(e), Component: n, defaultProps: r } = {}) {
  const o = S.forwardRef(
    ({ className: i, bsPrefix: a, as: l = n || "div", ...u }, s) => {
      const c = { ...r, ...u },
        f = fe(a, e);
      return O.jsx(l, { ref: s, className: ie(i, f), ...c });
    }
  );
  return (o.displayName = t), o;
}
const y1 = S.forwardRef(
  (
    {
      as: e,
      bsPrefix: t,
      variant: n = "primary",
      size: r,
      active: o = !1,
      disabled: i = !1,
      className: a,
      ...l
    },
    u
  ) => {
    const s = fe(t, "btn"),
      [c, { tagName: f }] = Sp({ tagName: e, disabled: i, ...l }),
      h = f;
    return O.jsx(h, {
      ...c,
      ...l,
      ref: u,
      disabled: i,
      className: ie(
        a,
        s,
        o && "active",
        n && `${s}-${n}`,
        r && `${s}-${r}`,
        l.href && i && "disabled"
      ),
    });
  }
);
y1.displayName = "Button";
const Ko = y1,
  g1 = S.forwardRef(
    ({ bsPrefix: e, className: t, variant: n, as: r = "img", ...o }, i) => {
      const a = fe(e, "card-img");
      return O.jsx(r, { ref: i, className: ie(n ? `${a}-${n}` : a, t), ...o });
    }
  );
g1.displayName = "CardImg";
const BO = g1,
  w1 = S.createContext(null);
w1.displayName = "CardHeaderContext";
const S1 = w1,
  x1 = S.forwardRef(({ bsPrefix: e, className: t, as: n = "div", ...r }, o) => {
    const i = fe(e, "card-header"),
      a = S.useMemo(() => ({ cardHeaderBsPrefix: i }), [i]);
    return O.jsx(S1.Provider, {
      value: a,
      children: O.jsx(n, { ref: o, ...r, className: ie(t, i) }),
    });
  });
x1.displayName = "CardHeader";
const QO = x1,
  HO = Cp("h5"),
  WO = Cp("h6"),
  E1 = ct("card-body"),
  qO = ct("card-title", { Component: HO }),
  KO = ct("card-subtitle", { Component: WO }),
  VO = ct("card-link", { Component: "a" }),
  GO = ct("card-text", { Component: "p" }),
  YO = ct("card-footer"),
  XO = ct("card-img-overlay"),
  C1 = S.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        bg: n,
        text: r,
        border: o,
        body: i = !1,
        children: a,
        as: l = "div",
        ...u
      },
      s
    ) => {
      const c = fe(e, "card");
      return O.jsx(l, {
        ref: s,
        ...u,
        className: ie(
          t,
          c,
          n && `bg-${n}`,
          r && `text-${r}`,
          o && `border-${o}`
        ),
        children: i ? O.jsx(E1, { children: a }) : a,
      });
    }
  );
C1.displayName = "Card";
const JO = Object.assign(C1, {
  Img: BO,
  Title: qO,
  Subtitle: KO,
  Body: E1,
  Link: VO,
  Text: GO,
  Header: QO,
  Footer: YO,
  ImgOverlay: XO,
});
function ZO(e) {
  var t = S.useRef(e);
  return (t.current = e), t;
}
function eP(e) {
  var t = ZO(e);
  S.useEffect(function () {
    return function () {
      return t.current();
    };
  }, []);
}
function tP(e, t) {
  return S.Children.toArray(e).some((n) => S.isValidElement(n) && n.type === t);
}
function nP({ as: e, bsPrefix: t, className: n, ...r }) {
  t = fe(t, "col");
  const o = r1(),
    i = o1(),
    a = [],
    l = [];
  return (
    o.forEach((u) => {
      const s = r[u];
      delete r[u];
      let c, f, h;
      typeof s == "object" && s != null
        ? ({ span: c, offset: f, order: h } = s)
        : (c = s);
      const p = u !== i ? `-${u}` : "";
      c && a.push(c === !0 ? `${t}${p}` : `${t}${p}-${c}`),
        h != null && l.push(`order${p}-${h}`),
        f != null && l.push(`offset${p}-${f}`);
    }),
    [
      { ...r, className: ie(n, ...a, ...l) },
      { as: e, bsPrefix: t, spans: a },
    ]
  );
}
const b1 = S.forwardRef((e, t) => {
  const [{ className: n, ...r }, { as: o = "div", bsPrefix: i, spans: a }] =
    nP(e);
  return O.jsx(o, { ...r, ref: t, className: ie(n, !a.length && i) });
});
b1.displayName = "Col";
const Es = b1;
var rP = Function.prototype.bind.call(Function.prototype.call, [].slice);
function On(e, t) {
  return rP(e.querySelectorAll(t));
}
function oP(e, t, n) {
  const r = S.useRef(e !== void 0),
    [o, i] = S.useState(t),
    a = e !== void 0,
    l = r.current;
  return (
    (r.current = a),
    !a && l && o !== t && i(t),
    [
      a ? e : o,
      S.useCallback(
        (u, ...s) => {
          n && n(u, ...s), i(u);
        },
        [n]
      ),
    ]
  );
}
function k1() {
  var e = S.useReducer(function (n) {
      return !n;
    }, !1),
    t = e[1];
  return t;
}
const iP = S.createContext(null),
  Cs = iP;
var Yv = Object.prototype.hasOwnProperty;
function Xv(e, t, n) {
  for (n of e.keys()) if (Hi(n, t)) return n;
}
function Hi(e, t) {
  var n, r, o;
  if (e === t) return !0;
  if (e && t && (n = e.constructor) === t.constructor) {
    if (n === Date) return e.getTime() === t.getTime();
    if (n === RegExp) return e.toString() === t.toString();
    if (n === Array) {
      if ((r = e.length) === t.length) for (; r-- && Hi(e[r], t[r]); );
      return r === -1;
    }
    if (n === Set) {
      if (e.size !== t.size) return !1;
      for (r of e)
        if (
          ((o = r),
          (o && typeof o == "object" && ((o = Xv(t, o)), !o)) || !t.has(o))
        )
          return !1;
      return !0;
    }
    if (n === Map) {
      if (e.size !== t.size) return !1;
      for (r of e)
        if (
          ((o = r[0]),
          (o && typeof o == "object" && ((o = Xv(t, o)), !o)) ||
            !Hi(r[1], t.get(o)))
        )
          return !1;
      return !0;
    }
    if (n === ArrayBuffer) (e = new Uint8Array(e)), (t = new Uint8Array(t));
    else if (n === DataView) {
      if ((r = e.byteLength) === t.byteLength)
        for (; r-- && e.getInt8(r) === t.getInt8(r); );
      return r === -1;
    }
    if (ArrayBuffer.isView(e)) {
      if ((r = e.byteLength) === t.byteLength) for (; r-- && e[r] === t[r]; );
      return r === -1;
    }
    if (!n || typeof e == "object") {
      r = 0;
      for (n in e)
        if (
          (Yv.call(e, n) && ++r && !Yv.call(t, n)) ||
          !(n in t) ||
          !Hi(e[n], t[n])
        )
          return !1;
      return Object.keys(t).length === r;
    }
  }
  return e !== e && t !== t;
}
function aP(e) {
  var t = d1();
  return [
    e[0],
    S.useCallback(
      function (n) {
        if (t()) return e[1](n);
      },
      [t, e[1]]
    ),
  ];
}
var wt = "top",
  Wt = "bottom",
  qt = "right",
  St = "left",
  bp = "auto",
  La = [wt, Wt, qt, St],
  Vo = "start",
  Ea = "end",
  lP = "clippingParents",
  R1 = "viewport",
  xi = "popper",
  uP = "reference",
  Jv = La.reduce(function (e, t) {
    return e.concat([t + "-" + Vo, t + "-" + Ea]);
  }, []),
  O1 = [].concat(La, [bp]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Vo, t + "-" + Ea]);
  }, []),
  sP = "beforeRead",
  cP = "read",
  fP = "afterRead",
  dP = "beforeMain",
  pP = "main",
  hP = "afterMain",
  vP = "beforeWrite",
  mP = "write",
  yP = "afterWrite",
  gP = [sP, cP, fP, dP, pP, hP, vP, mP, yP];
function wn(e) {
  return e.split("-")[0];
}
function Dt(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function eo(e) {
  var t = Dt(e).Element;
  return e instanceof t || e instanceof Element;
}
function Sn(e) {
  var t = Dt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function kp(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Dt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Kr = Math.max,
  Cu = Math.min,
  Go = Math.round;
function Qf() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function P1() {
  return !/^((?!chrome|android).)*safari/i.test(Qf());
}
function Yo(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(),
    o = 1,
    i = 1;
  t &&
    Sn(e) &&
    ((o = (e.offsetWidth > 0 && Go(r.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && Go(r.height) / e.offsetHeight) || 1));
  var a = eo(e) ? Dt(e) : window,
    l = a.visualViewport,
    u = !P1() && n,
    s = (r.left + (u && l ? l.offsetLeft : 0)) / o,
    c = (r.top + (u && l ? l.offsetTop : 0)) / i,
    f = r.width / o,
    h = r.height / i;
  return {
    width: f,
    height: h,
    top: c,
    right: s + f,
    bottom: c + h,
    left: s,
    x: s,
    y: c,
  };
}
function Rp(e) {
  var t = Yo(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function T1(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && kp(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function br(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Fn(e) {
  return Dt(e).getComputedStyle(e);
}
function wP(e) {
  return ["table", "td", "th"].indexOf(br(e)) >= 0;
}
function Nr(e) {
  return ((eo(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function bs(e) {
  return br(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (kp(e) ? e.host : null) || Nr(e);
}
function Zv(e) {
  return !Sn(e) || Fn(e).position === "fixed" ? null : e.offsetParent;
}
function SP(e) {
  var t = /firefox/i.test(Qf()),
    n = /Trident/i.test(Qf());
  if (n && Sn(e)) {
    var r = Fn(e);
    if (r.position === "fixed") return null;
  }
  var o = bs(e);
  for (kp(o) && (o = o.host); Sn(o) && ["html", "body"].indexOf(br(o)) < 0; ) {
    var i = Fn(o);
    if (
      i.transform !== "none" ||
      i.perspective !== "none" ||
      i.contain === "paint" ||
      ["transform", "perspective"].indexOf(i.willChange) !== -1 ||
      (t && i.willChange === "filter") ||
      (t && i.filter && i.filter !== "none")
    )
      return o;
    o = o.parentNode;
  }
  return null;
}
function Aa(e) {
  for (var t = Dt(e), n = Zv(e); n && wP(n) && Fn(n).position === "static"; )
    n = Zv(n);
  return n &&
    (br(n) === "html" || (br(n) === "body" && Fn(n).position === "static"))
    ? t
    : n || SP(e) || t;
}
function Op(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Wi(e, t, n) {
  return Kr(e, Cu(t, n));
}
function xP(e, t, n) {
  var r = Wi(e, t, n);
  return r > n ? n : r;
}
function N1() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function M1(e) {
  return Object.assign({}, N1(), e);
}
function D1(e, t) {
  return t.reduce(function (n, r) {
    return (n[r] = e), n;
  }, {});
}
var EP = function (t, n) {
  return (
    (t =
      typeof t == "function"
        ? t(Object.assign({}, n.rects, { placement: n.placement }))
        : t),
    M1(typeof t != "number" ? t : D1(t, La))
  );
};
function CP(e) {
  var t,
    n = e.state,
    r = e.name,
    o = e.options,
    i = n.elements.arrow,
    a = n.modifiersData.popperOffsets,
    l = wn(n.placement),
    u = Op(l),
    s = [St, qt].indexOf(l) >= 0,
    c = s ? "height" : "width";
  if (!(!i || !a)) {
    var f = EP(o.padding, n),
      h = Rp(i),
      p = u === "y" ? wt : St,
      g = u === "y" ? Wt : qt,
      y =
        n.rects.reference[c] + n.rects.reference[u] - a[u] - n.rects.popper[c],
      w = a[u] - n.rects.reference[u],
      d = Aa(i),
      v = d ? (u === "y" ? d.clientHeight || 0 : d.clientWidth || 0) : 0,
      m = y / 2 - w / 2,
      x = f[p],
      E = v - h[c] - f[g],
      C = v / 2 - h[c] / 2 + m,
      b = Wi(x, C, E),
      k = u;
    n.modifiersData[r] = ((t = {}), (t[k] = b), (t.centerOffset = b - C), t);
  }
}
function bP(e) {
  var t = e.state,
    n = e.options,
    r = n.element,
    o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null &&
    ((typeof o == "string" && ((o = t.elements.popper.querySelector(o)), !o)) ||
      (T1(t.elements.popper, o) && (t.elements.arrow = o)));
}
const kP = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: CP,
  effect: bP,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Xo(e) {
  return e.split("-")[1];
}
var RP = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function OP(e, t) {
  var n = e.x,
    r = e.y,
    o = t.devicePixelRatio || 1;
  return { x: Go(n * o) / o || 0, y: Go(r * o) / o || 0 };
}
function em(e) {
  var t,
    n = e.popper,
    r = e.popperRect,
    o = e.placement,
    i = e.variation,
    a = e.offsets,
    l = e.position,
    u = e.gpuAcceleration,
    s = e.adaptive,
    c = e.roundOffsets,
    f = e.isFixed,
    h = a.x,
    p = h === void 0 ? 0 : h,
    g = a.y,
    y = g === void 0 ? 0 : g,
    w = typeof c == "function" ? c({ x: p, y }) : { x: p, y };
  (p = w.x), (y = w.y);
  var d = a.hasOwnProperty("x"),
    v = a.hasOwnProperty("y"),
    m = St,
    x = wt,
    E = window;
  if (s) {
    var C = Aa(n),
      b = "clientHeight",
      k = "clientWidth";
    if (
      (C === Dt(n) &&
        ((C = Nr(n)),
        Fn(C).position !== "static" &&
          l === "absolute" &&
          ((b = "scrollHeight"), (k = "scrollWidth"))),
      (C = C),
      o === wt || ((o === St || o === qt) && i === Ea))
    ) {
      x = Wt;
      var P = f && C === E && E.visualViewport ? E.visualViewport.height : C[b];
      (y -= P - r.height), (y *= u ? 1 : -1);
    }
    if (o === St || ((o === wt || o === Wt) && i === Ea)) {
      m = qt;
      var R = f && C === E && E.visualViewport ? E.visualViewport.width : C[k];
      (p -= R - r.width), (p *= u ? 1 : -1);
    }
  }
  var T = Object.assign({ position: l }, s && RP),
    N = c === !0 ? OP({ x: p, y }, Dt(n)) : { x: p, y };
  if (((p = N.x), (y = N.y), u)) {
    var M;
    return Object.assign(
      {},
      T,
      ((M = {}),
      (M[x] = v ? "0" : ""),
      (M[m] = d ? "0" : ""),
      (M.transform =
        (E.devicePixelRatio || 1) <= 1
          ? "translate(" + p + "px, " + y + "px)"
          : "translate3d(" + p + "px, " + y + "px, 0)"),
      M)
    );
  }
  return Object.assign(
    {},
    T,
    ((t = {}),
    (t[x] = v ? y + "px" : ""),
    (t[m] = d ? p + "px" : ""),
    (t.transform = ""),
    t)
  );
}
function PP(e) {
  var t = e.state,
    n = e.options,
    r = n.gpuAcceleration,
    o = r === void 0 ? !0 : r,
    i = n.adaptive,
    a = i === void 0 ? !0 : i,
    l = n.roundOffsets,
    u = l === void 0 ? !0 : l,
    s = {
      placement: wn(t.placement),
      variation: Xo(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: o,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      em(
        Object.assign({}, s, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: a,
          roundOffsets: u,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        em(
          Object.assign({}, s, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: u,
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    }));
}
const TP = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: PP,
  data: {},
};
var pl = { passive: !0 };
function NP(e) {
  var t = e.state,
    n = e.instance,
    r = e.options,
    o = r.scroll,
    i = o === void 0 ? !0 : o,
    a = r.resize,
    l = a === void 0 ? !0 : a,
    u = Dt(t.elements.popper),
    s = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    i &&
      s.forEach(function (c) {
        c.addEventListener("scroll", n.update, pl);
      }),
    l && u.addEventListener("resize", n.update, pl),
    function () {
      i &&
        s.forEach(function (c) {
          c.removeEventListener("scroll", n.update, pl);
        }),
        l && u.removeEventListener("resize", n.update, pl);
    }
  );
}
const MP = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: NP,
  data: {},
};
var DP = { left: "right", right: "left", bottom: "top", top: "bottom" };
function jl(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return DP[t];
  });
}
var $P = { start: "end", end: "start" };
function tm(e) {
  return e.replace(/start|end/g, function (t) {
    return $P[t];
  });
}
function Pp(e) {
  var t = Dt(e),
    n = t.pageXOffset,
    r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Tp(e) {
  return Yo(Nr(e)).left + Pp(e).scrollLeft;
}
function jP(e, t) {
  var n = Dt(e),
    r = Nr(e),
    o = n.visualViewport,
    i = r.clientWidth,
    a = r.clientHeight,
    l = 0,
    u = 0;
  if (o) {
    (i = o.width), (a = o.height);
    var s = P1();
    (s || (!s && t === "fixed")) && ((l = o.offsetLeft), (u = o.offsetTop));
  }
  return { width: i, height: a, x: l + Tp(e), y: u };
}
function IP(e) {
  var t,
    n = Nr(e),
    r = Pp(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = Kr(
      n.scrollWidth,
      n.clientWidth,
      o ? o.scrollWidth : 0,
      o ? o.clientWidth : 0
    ),
    a = Kr(
      n.scrollHeight,
      n.clientHeight,
      o ? o.scrollHeight : 0,
      o ? o.clientHeight : 0
    ),
    l = -r.scrollLeft + Tp(e),
    u = -r.scrollTop;
  return (
    Fn(o || n).direction === "rtl" &&
      (l += Kr(n.clientWidth, o ? o.clientWidth : 0) - i),
    { width: i, height: a, x: l, y: u }
  );
}
function Np(e) {
  var t = Fn(e),
    n = t.overflow,
    r = t.overflowX,
    o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function $1(e) {
  return ["html", "body", "#document"].indexOf(br(e)) >= 0
    ? e.ownerDocument.body
    : Sn(e) && Np(e)
    ? e
    : $1(bs(e));
}
function qi(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = $1(e),
    o = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    i = Dt(r),
    a = o ? [i].concat(i.visualViewport || [], Np(r) ? r : []) : r,
    l = t.concat(a);
  return o ? l : l.concat(qi(bs(a)));
}
function Hf(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function LP(e, t) {
  var n = Yo(e, !1, t === "fixed");
  return (
    (n.top = n.top + e.clientTop),
    (n.left = n.left + e.clientLeft),
    (n.bottom = n.top + e.clientHeight),
    (n.right = n.left + e.clientWidth),
    (n.width = e.clientWidth),
    (n.height = e.clientHeight),
    (n.x = n.left),
    (n.y = n.top),
    n
  );
}
function nm(e, t, n) {
  return t === R1 ? Hf(jP(e, n)) : eo(t) ? LP(t, n) : Hf(IP(Nr(e)));
}
function AP(e) {
  var t = qi(bs(e)),
    n = ["absolute", "fixed"].indexOf(Fn(e).position) >= 0,
    r = n && Sn(e) ? Aa(e) : e;
  return eo(r)
    ? t.filter(function (o) {
        return eo(o) && T1(o, r) && br(o) !== "body";
      })
    : [];
}
function _P(e, t, n, r) {
  var o = t === "clippingParents" ? AP(e) : [].concat(t),
    i = [].concat(o, [n]),
    a = i[0],
    l = i.reduce(function (u, s) {
      var c = nm(e, s, r);
      return (
        (u.top = Kr(c.top, u.top)),
        (u.right = Cu(c.right, u.right)),
        (u.bottom = Cu(c.bottom, u.bottom)),
        (u.left = Kr(c.left, u.left)),
        u
      );
    }, nm(e, a, r));
  return (
    (l.width = l.right - l.left),
    (l.height = l.bottom - l.top),
    (l.x = l.left),
    (l.y = l.top),
    l
  );
}
function j1(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    o = r ? wn(r) : null,
    i = r ? Xo(r) : null,
    a = t.x + t.width / 2 - n.width / 2,
    l = t.y + t.height / 2 - n.height / 2,
    u;
  switch (o) {
    case wt:
      u = { x: a, y: t.y - n.height };
      break;
    case Wt:
      u = { x: a, y: t.y + t.height };
      break;
    case qt:
      u = { x: t.x + t.width, y: l };
      break;
    case St:
      u = { x: t.x - n.width, y: l };
      break;
    default:
      u = { x: t.x, y: t.y };
  }
  var s = o ? Op(o) : null;
  if (s != null) {
    var c = s === "y" ? "height" : "width";
    switch (i) {
      case Vo:
        u[s] = u[s] - (t[c] / 2 - n[c] / 2);
        break;
      case Ea:
        u[s] = u[s] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return u;
}
function Ca(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = r === void 0 ? e.placement : r,
    i = n.strategy,
    a = i === void 0 ? e.strategy : i,
    l = n.boundary,
    u = l === void 0 ? lP : l,
    s = n.rootBoundary,
    c = s === void 0 ? R1 : s,
    f = n.elementContext,
    h = f === void 0 ? xi : f,
    p = n.altBoundary,
    g = p === void 0 ? !1 : p,
    y = n.padding,
    w = y === void 0 ? 0 : y,
    d = M1(typeof w != "number" ? w : D1(w, La)),
    v = h === xi ? uP : xi,
    m = e.rects.popper,
    x = e.elements[g ? v : h],
    E = _P(eo(x) ? x : x.contextElement || Nr(e.elements.popper), u, c, a),
    C = Yo(e.elements.reference),
    b = j1({ reference: C, element: m, strategy: "absolute", placement: o }),
    k = Hf(Object.assign({}, m, b)),
    P = h === xi ? k : C,
    R = {
      top: E.top - P.top + d.top,
      bottom: P.bottom - E.bottom + d.bottom,
      left: E.left - P.left + d.left,
      right: P.right - E.right + d.right,
    },
    T = e.modifiersData.offset;
  if (h === xi && T) {
    var N = T[o];
    Object.keys(R).forEach(function (M) {
      var I = [qt, Wt].indexOf(M) >= 0 ? 1 : -1,
        A = [wt, Wt].indexOf(M) >= 0 ? "y" : "x";
      R[M] += N[A] * I;
    });
  }
  return R;
}
function FP(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = n.boundary,
    i = n.rootBoundary,
    a = n.padding,
    l = n.flipVariations,
    u = n.allowedAutoPlacements,
    s = u === void 0 ? O1 : u,
    c = Xo(r),
    f = c
      ? l
        ? Jv
        : Jv.filter(function (g) {
            return Xo(g) === c;
          })
      : La,
    h = f.filter(function (g) {
      return s.indexOf(g) >= 0;
    });
  h.length === 0 && (h = f);
  var p = h.reduce(function (g, y) {
    return (
      (g[y] = Ca(e, { placement: y, boundary: o, rootBoundary: i, padding: a })[
        wn(y)
      ]),
      g
    );
  }, {});
  return Object.keys(p).sort(function (g, y) {
    return p[g] - p[y];
  });
}
function zP(e) {
  if (wn(e) === bp) return [];
  var t = jl(e);
  return [tm(e), t, tm(t)];
}
function UP(e) {
  var t = e.state,
    n = e.options,
    r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (
      var o = n.mainAxis,
        i = o === void 0 ? !0 : o,
        a = n.altAxis,
        l = a === void 0 ? !0 : a,
        u = n.fallbackPlacements,
        s = n.padding,
        c = n.boundary,
        f = n.rootBoundary,
        h = n.altBoundary,
        p = n.flipVariations,
        g = p === void 0 ? !0 : p,
        y = n.allowedAutoPlacements,
        w = t.options.placement,
        d = wn(w),
        v = d === w,
        m = u || (v || !g ? [jl(w)] : zP(w)),
        x = [w].concat(m).reduce(function (J, H) {
          return J.concat(
            wn(H) === bp
              ? FP(t, {
                  placement: H,
                  boundary: c,
                  rootBoundary: f,
                  padding: s,
                  flipVariations: g,
                  allowedAutoPlacements: y,
                })
              : H
          );
        }, []),
        E = t.rects.reference,
        C = t.rects.popper,
        b = new Map(),
        k = !0,
        P = x[0],
        R = 0;
      R < x.length;
      R++
    ) {
      var T = x[R],
        N = wn(T),
        M = Xo(T) === Vo,
        I = [wt, Wt].indexOf(N) >= 0,
        A = I ? "width" : "height",
        z = Ca(t, {
          placement: T,
          boundary: c,
          rootBoundary: f,
          altBoundary: h,
          padding: s,
        }),
        B = I ? (M ? qt : St) : M ? Wt : wt;
      E[A] > C[A] && (B = jl(B));
      var D = jl(B),
        _ = [];
      if (
        (i && _.push(z[N] <= 0),
        l && _.push(z[B] <= 0, z[D] <= 0),
        _.every(function (J) {
          return J;
        }))
      ) {
        (P = T), (k = !1);
        break;
      }
      b.set(T, _);
    }
    if (k)
      for (
        var L = g ? 3 : 1,
          Q = function (H) {
            var ee = x.find(function (le) {
              var Se = b.get(le);
              if (Se)
                return Se.slice(0, H).every(function (Ve) {
                  return Ve;
                });
            });
            if (ee) return (P = ee), "break";
          },
          q = L;
        q > 0;
        q--
      ) {
        var Y = Q(q);
        if (Y === "break") break;
      }
    t.placement !== P &&
      ((t.modifiersData[r]._skip = !0), (t.placement = P), (t.reset = !0));
  }
}
const BP = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: UP,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function rm(e, t, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x,
    }
  );
}
function om(e) {
  return [wt, qt, Wt, St].some(function (t) {
    return e[t] >= 0;
  });
}
function QP(e) {
  var t = e.state,
    n = e.name,
    r = t.rects.reference,
    o = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    a = Ca(t, { elementContext: "reference" }),
    l = Ca(t, { altBoundary: !0 }),
    u = rm(a, r),
    s = rm(l, o, i),
    c = om(u),
    f = om(s);
  (t.modifiersData[n] = {
    referenceClippingOffsets: u,
    popperEscapeOffsets: s,
    isReferenceHidden: c,
    hasPopperEscaped: f,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": c,
      "data-popper-escaped": f,
    }));
}
const HP = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: QP,
};
function WP(e, t, n) {
  var r = wn(e),
    o = [St, wt].indexOf(r) >= 0 ? -1 : 1,
    i = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n,
    a = i[0],
    l = i[1];
  return (
    (a = a || 0),
    (l = (l || 0) * o),
    [St, qt].indexOf(r) >= 0 ? { x: l, y: a } : { x: a, y: l }
  );
}
function qP(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.offset,
    i = o === void 0 ? [0, 0] : o,
    a = O1.reduce(function (c, f) {
      return (c[f] = WP(f, t.rects, i)), c;
    }, {}),
    l = a[t.placement],
    u = l.x,
    s = l.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += u),
    (t.modifiersData.popperOffsets.y += s)),
    (t.modifiersData[r] = a);
}
const KP = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: qP,
};
function VP(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = j1({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement,
  });
}
const GP = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: VP,
  data: {},
};
function YP(e) {
  return e === "x" ? "y" : "x";
}
function XP(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.mainAxis,
    i = o === void 0 ? !0 : o,
    a = n.altAxis,
    l = a === void 0 ? !1 : a,
    u = n.boundary,
    s = n.rootBoundary,
    c = n.altBoundary,
    f = n.padding,
    h = n.tether,
    p = h === void 0 ? !0 : h,
    g = n.tetherOffset,
    y = g === void 0 ? 0 : g,
    w = Ca(t, { boundary: u, rootBoundary: s, padding: f, altBoundary: c }),
    d = wn(t.placement),
    v = Xo(t.placement),
    m = !v,
    x = Op(d),
    E = YP(x),
    C = t.modifiersData.popperOffsets,
    b = t.rects.reference,
    k = t.rects.popper,
    P =
      typeof y == "function"
        ? y(Object.assign({}, t.rects, { placement: t.placement }))
        : y,
    R =
      typeof P == "number"
        ? { mainAxis: P, altAxis: P }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, P),
    T = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    N = { x: 0, y: 0 };
  if (C) {
    if (i) {
      var M,
        I = x === "y" ? wt : St,
        A = x === "y" ? Wt : qt,
        z = x === "y" ? "height" : "width",
        B = C[x],
        D = B + w[I],
        _ = B - w[A],
        L = p ? -k[z] / 2 : 0,
        Q = v === Vo ? b[z] : k[z],
        q = v === Vo ? -k[z] : -b[z],
        Y = t.elements.arrow,
        J = p && Y ? Rp(Y) : { width: 0, height: 0 },
        H = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : N1(),
        ee = H[I],
        le = H[A],
        Se = Wi(0, b[z], J[z]),
        Ve = m ? b[z] / 2 - L - Se - ee - R.mainAxis : Q - Se - ee - R.mainAxis,
        Ue = m
          ? -b[z] / 2 + L + Se + le + R.mainAxis
          : q + Se + le + R.mainAxis,
        Be = t.elements.arrow && Aa(t.elements.arrow),
        oe = Be ? (x === "y" ? Be.clientTop || 0 : Be.clientLeft || 0) : 0,
        Le = (M = T == null ? void 0 : T[x]) != null ? M : 0,
        de = B + Ve - Le - oe,
        Qn = B + Ue - Le,
        sn = Wi(p ? Cu(D, de) : D, B, p ? Kr(_, Qn) : _);
      (C[x] = sn), (N[x] = sn - B);
    }
    if (l) {
      var ft,
        Hn = x === "x" ? wt : St,
        Wn = x === "x" ? Wt : qt,
        Ct = C[E],
        Ge = E === "y" ? "height" : "width",
        Ae = Ct + w[Hn],
        Mr = Ct - w[Wn],
        so = [wt, St].indexOf(d) !== -1,
        co = (ft = T == null ? void 0 : T[E]) != null ? ft : 0,
        Fa = so ? Ae : Ct - b[Ge] - k[Ge] - co + R.altAxis,
        za = so ? Ct + b[Ge] + k[Ge] - co - R.altAxis : Mr,
        li = p && so ? xP(Fa, Ct, za) : Wi(p ? Fa : Ae, Ct, p ? za : Mr);
      (C[E] = li), (N[E] = li - Ct);
    }
    t.modifiersData[r] = N;
  }
}
const JP = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: XP,
  requiresIfExists: ["offset"],
};
function ZP(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function eT(e) {
  return e === Dt(e) || !Sn(e) ? Pp(e) : ZP(e);
}
function tT(e) {
  var t = e.getBoundingClientRect(),
    n = Go(t.width) / e.offsetWidth || 1,
    r = Go(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function nT(e, t, n) {
  n === void 0 && (n = !1);
  var r = Sn(t),
    o = Sn(t) && tT(t),
    i = Nr(t),
    a = Yo(e, o, n),
    l = { scrollLeft: 0, scrollTop: 0 },
    u = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((br(t) !== "body" || Np(i)) && (l = eT(t)),
      Sn(t)
        ? ((u = Yo(t, !0)), (u.x += t.clientLeft), (u.y += t.clientTop))
        : i && (u.x = Tp(i))),
    {
      x: a.left + l.scrollLeft - u.x,
      y: a.top + l.scrollTop - u.y,
      width: a.width,
      height: a.height,
    }
  );
}
function rT(e) {
  var t = new Map(),
    n = new Set(),
    r = [];
  e.forEach(function (i) {
    t.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function (l) {
      if (!n.has(l)) {
        var u = t.get(l);
        u && o(u);
      }
    }),
      r.push(i);
  }
  return (
    e.forEach(function (i) {
      n.has(i.name) || o(i);
    }),
    r
  );
}
function oT(e) {
  var t = rT(e);
  return gP.reduce(function (n, r) {
    return n.concat(
      t.filter(function (o) {
        return o.phase === r;
      })
    );
  }, []);
}
function iT(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            (t = void 0), n(e());
          });
        })),
      t
    );
  };
}
function aT(e) {
  var t = e.reduce(function (n, r) {
    var o = n[r.name];
    return (
      (n[r.name] = o
        ? Object.assign({}, o, r, {
            options: Object.assign({}, o.options, r.options),
            data: Object.assign({}, o.data, r.data),
          })
        : r),
      n
    );
  }, {});
  return Object.keys(t).map(function (n) {
    return t[n];
  });
}
var im = { placement: "bottom", modifiers: [], strategy: "absolute" };
function am() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function (r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function lT(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    o = t.defaultOptions,
    i = o === void 0 ? im : o;
  return function (l, u, s) {
    s === void 0 && (s = i);
    var c = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, im, i),
        modifiersData: {},
        elements: { reference: l, popper: u },
        attributes: {},
        styles: {},
      },
      f = [],
      h = !1,
      p = {
        state: c,
        setOptions: function (d) {
          var v = typeof d == "function" ? d(c.options) : d;
          y(),
            (c.options = Object.assign({}, i, c.options, v)),
            (c.scrollParents = {
              reference: eo(l)
                ? qi(l)
                : l.contextElement
                ? qi(l.contextElement)
                : [],
              popper: qi(u),
            });
          var m = oT(aT([].concat(r, c.options.modifiers)));
          return (
            (c.orderedModifiers = m.filter(function (x) {
              return x.enabled;
            })),
            g(),
            p.update()
          );
        },
        forceUpdate: function () {
          if (!h) {
            var d = c.elements,
              v = d.reference,
              m = d.popper;
            if (am(v, m)) {
              (c.rects = {
                reference: nT(v, Aa(m), c.options.strategy === "fixed"),
                popper: Rp(m),
              }),
                (c.reset = !1),
                (c.placement = c.options.placement),
                c.orderedModifiers.forEach(function (R) {
                  return (c.modifiersData[R.name] = Object.assign({}, R.data));
                });
              for (var x = 0; x < c.orderedModifiers.length; x++) {
                if (c.reset === !0) {
                  (c.reset = !1), (x = -1);
                  continue;
                }
                var E = c.orderedModifiers[x],
                  C = E.fn,
                  b = E.options,
                  k = b === void 0 ? {} : b,
                  P = E.name;
                typeof C == "function" &&
                  (c = C({ state: c, options: k, name: P, instance: p }) || c);
              }
            }
          }
        },
        update: iT(function () {
          return new Promise(function (w) {
            p.forceUpdate(), w(c);
          });
        }),
        destroy: function () {
          y(), (h = !0);
        },
      };
    if (!am(l, u)) return p;
    p.setOptions(s).then(function (w) {
      !h && s.onFirstUpdate && s.onFirstUpdate(w);
    });
    function g() {
      c.orderedModifiers.forEach(function (w) {
        var d = w.name,
          v = w.options,
          m = v === void 0 ? {} : v,
          x = w.effect;
        if (typeof x == "function") {
          var E = x({ state: c, name: d, instance: p, options: m }),
            C = function () {};
          f.push(E || C);
        }
      });
    }
    function y() {
      f.forEach(function (w) {
        return w();
      }),
        (f = []);
    }
    return p;
  };
}
const uT = lT({ defaultModifiers: [HP, GP, TP, MP, KP, BP, JP, kP] }),
  sT = ["enabled", "placement", "strategy", "modifiers"];
function cT(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const fT = {
    name: "applyStyles",
    enabled: !1,
    phase: "afterWrite",
    fn: () => {},
  },
  dT = {
    name: "ariaDescribedBy",
    enabled: !0,
    phase: "afterWrite",
    effect:
      ({ state: e }) =>
      () => {
        const { reference: t, popper: n } = e.elements;
        if ("removeAttribute" in t) {
          const r = (t.getAttribute("aria-describedby") || "")
            .split(",")
            .filter((o) => o.trim() !== n.id);
          r.length
            ? t.setAttribute("aria-describedby", r.join(","))
            : t.removeAttribute("aria-describedby");
        }
      },
    fn: ({ state: e }) => {
      var t;
      const { popper: n, reference: r } = e.elements,
        o = (t = n.getAttribute("role")) == null ? void 0 : t.toLowerCase();
      if (n.id && o === "tooltip" && "setAttribute" in r) {
        const i = r.getAttribute("aria-describedby");
        if (i && i.split(",").indexOf(n.id) !== -1) return;
        r.setAttribute("aria-describedby", i ? `${i},${n.id}` : n.id);
      }
    },
  },
  pT = [];
function hT(e, t, n = {}) {
  let {
      enabled: r = !0,
      placement: o = "bottom",
      strategy: i = "absolute",
      modifiers: a = pT,
    } = n,
    l = cT(n, sT);
  const u = S.useRef(a),
    s = S.useRef(),
    c = S.useCallback(() => {
      var w;
      (w = s.current) == null || w.update();
    }, []),
    f = S.useCallback(() => {
      var w;
      (w = s.current) == null || w.forceUpdate();
    }, []),
    [h, p] = aP(
      S.useState({
        placement: o,
        update: c,
        forceUpdate: f,
        attributes: {},
        styles: { popper: {}, arrow: {} },
      })
    ),
    g = S.useMemo(
      () => ({
        name: "updateStateModifier",
        enabled: !0,
        phase: "write",
        requires: ["computeStyles"],
        fn: ({ state: w }) => {
          const d = {},
            v = {};
          Object.keys(w.elements).forEach((m) => {
            (d[m] = w.styles[m]), (v[m] = w.attributes[m]);
          }),
            p({
              state: w,
              styles: d,
              attributes: v,
              update: c,
              forceUpdate: f,
              placement: w.placement,
            });
        },
      }),
      [c, f, p]
    ),
    y = S.useMemo(() => (Hi(u.current, a) || (u.current = a), u.current), [a]);
  return (
    S.useEffect(() => {
      !s.current ||
        !r ||
        s.current.setOptions({
          placement: o,
          strategy: i,
          modifiers: [...y, g, fT],
        });
    }, [i, o, g, r, y]),
    S.useEffect(() => {
      if (!(!r || e == null || t == null))
        return (
          (s.current = uT(
            e,
            t,
            Object.assign({}, l, {
              placement: o,
              strategy: i,
              modifiers: [...y, dT, g],
            })
          )),
          () => {
            s.current != null &&
              (s.current.destroy(),
              (s.current = void 0),
              p((w) =>
                Object.assign({}, w, { attributes: {}, styles: { popper: {} } })
              ));
          }
        );
    }, [r, e, t]),
    h
  );
}
function bu(e, t) {
  if (e.contains) return e.contains(t);
  if (e.compareDocumentPosition)
    return e === t || !!(e.compareDocumentPosition(t) & 16);
}
var vT = function () {},
  mT = vT;
const yT = ka(mT),
  lm = () => {};
function gT(e) {
  return e.button === 0;
}
function wT(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
const bc = (e) => e && ("current" in e ? e.current : e),
  um = { click: "mousedown", mouseup: "mousedown", pointerup: "pointerdown" };
function ST(e, t = lm, { disabled: n, clickTrigger: r = "click" } = {}) {
  const o = S.useRef(!1),
    i = S.useRef(!1),
    a = S.useCallback(
      (s) => {
        const c = bc(e);
        yT(
          !!c,
          "ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"
        ),
          (o.current = !c || wT(s) || !gT(s) || !!bu(c, s.target) || i.current),
          (i.current = !1);
      },
      [e]
    ),
    l = Ie((s) => {
      const c = bc(e);
      c && bu(c, s.target) && (i.current = !0);
    }),
    u = Ie((s) => {
      o.current || t(s);
    });
  S.useEffect(() => {
    var s, c;
    if (n || e == null) return;
    const f = Ss(bc(e)),
      h = f.defaultView || window;
    let p =
        (s = h.event) != null ? s : (c = h.parent) == null ? void 0 : c.event,
      g = null;
    um[r] && (g = or(f, um[r], l, !0));
    const y = or(f, r, a, !0),
      w = or(f, r, (v) => {
        if (v === p) {
          p = void 0;
          return;
        }
        u(v);
      });
    let d = [];
    return (
      "ontouchstart" in f.documentElement &&
        (d = [].slice.call(f.body.children).map((v) => or(v, "mousemove", lm))),
      () => {
        g == null || g(), y(), w(), d.forEach((v) => v());
      }
    );
  }, [e, n, r, a, l, u]);
}
function xT(e) {
  const t = {};
  return Array.isArray(e)
    ? (e == null ||
        e.forEach((n) => {
          t[n.name] = n;
        }),
      t)
    : e || t;
}
function ET(e = {}) {
  return Array.isArray(e)
    ? e
    : Object.keys(e).map((t) => ((e[t].name = t), e[t]));
}
function CT({
  enabled: e,
  enableEvents: t,
  placement: n,
  flip: r,
  offset: o,
  fixed: i,
  containerPadding: a,
  arrowElement: l,
  popperConfig: u = {},
}) {
  var s, c, f, h, p;
  const g = xT(u.modifiers);
  return Object.assign({}, u, {
    placement: n,
    enabled: e,
    strategy: i ? "fixed" : u.strategy,
    modifiers: ET(
      Object.assign({}, g, {
        eventListeners: {
          enabled: t,
          options: (s = g.eventListeners) == null ? void 0 : s.options,
        },
        preventOverflow: Object.assign({}, g.preventOverflow, {
          options: a
            ? Object.assign(
                { padding: a },
                (c = g.preventOverflow) == null ? void 0 : c.options
              )
            : (f = g.preventOverflow) == null
            ? void 0
            : f.options,
        }),
        offset: {
          options: Object.assign(
            { offset: o },
            (h = g.offset) == null ? void 0 : h.options
          ),
        },
        arrow: Object.assign({}, g.arrow, {
          enabled: !!l,
          options: Object.assign(
            {},
            (p = g.arrow) == null ? void 0 : p.options,
            { element: l }
          ),
        }),
        flip: Object.assign({ enabled: !!r }, g.flip),
      })
    ),
  });
}
const bT = ["children"];
function kT(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const RT = () => {};
function I1(e = {}) {
  const t = S.useContext(Cs),
    [n, r] = kO(),
    o = S.useRef(!1),
    {
      flip: i,
      offset: a,
      rootCloseEvent: l,
      fixed: u = !1,
      placement: s,
      popperConfig: c = {},
      enableEventListeners: f = !0,
      usePopper: h = !!t,
    } = e,
    p = (t == null ? void 0 : t.show) == null ? !!e.show : t.show;
  p && !o.current && (o.current = !0);
  const g = (C) => {
      t == null || t.toggle(!1, C);
    },
    { placement: y, setMenu: w, menuElement: d, toggleElement: v } = t || {},
    m = hT(
      v,
      d,
      CT({
        placement: s || y || "bottom-start",
        enabled: h,
        enableEvents: f ?? p,
        offset: a,
        flip: i,
        fixed: u,
        arrowElement: n,
        popperConfig: c,
      })
    ),
    x = Object.assign(
      { ref: w || RT, "aria-labelledby": v == null ? void 0 : v.id },
      m.attributes.popper,
      { style: m.styles.popper }
    ),
    E = {
      show: p,
      placement: y,
      hasShown: o.current,
      toggle: t == null ? void 0 : t.toggle,
      popper: h ? m : null,
      arrowProps: h
        ? Object.assign({ ref: r }, m.attributes.arrow, {
            style: m.styles.arrow,
          })
        : {},
    };
  return ST(d, g, { clickTrigger: l, disabled: !p }), [x, E];
}
const OT = { usePopper: !0 };
function Mp(e) {
  let { children: t } = e,
    n = kT(e, bT);
  const [r, o] = I1(n);
  return O.jsx(O.Fragment, { children: t(r, o) });
}
Mp.displayName = "DropdownMenu";
Mp.defaultProps = OT;
const L1 = {
    prefix: String(Math.round(Math.random() * 1e10)),
    current: 0,
    isSSR: !1,
  },
  A1 = ne.createContext(L1);
let PT = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  ),
  kc = new WeakMap();
function TT(e = !1) {
  let t = S.useContext(A1),
    n = S.useRef(null);
  if (n.current === null && !e) {
    var r, o;
    let i =
      (r = ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null ||
      r === void 0 ||
      (o = r.ReactCurrentOwner) === null ||
      o === void 0
        ? void 0
        : o.current;
    if (i) {
      let a = kc.get(i);
      a == null
        ? kc.set(i, { id: t.current, state: i.memoizedState })
        : i.memoizedState !== a.state && ((t.current = a.id), kc.delete(i));
    }
    n.current = ++t.current;
  }
  return n.current;
}
function NT(e) {
  let t = S.useContext(A1),
    n = TT(!!e);
  return e || `react-aria${t.prefix}-${n}`;
}
const _1 = (e) => {
    var t;
    return (
      ((t = e.getAttribute("role")) == null ? void 0 : t.toLowerCase()) ===
      "menu"
    );
  },
  sm = () => {};
function F1() {
  const e = NT(),
    {
      show: t = !1,
      toggle: n = sm,
      setToggle: r,
      menuElement: o,
    } = S.useContext(Cs) || {},
    i = S.useCallback(
      (l) => {
        n(!t, l);
      },
      [t, n]
    ),
    a = { id: e, ref: r || sm, onClick: i, "aria-expanded": !!t };
  return o && _1(o) && (a["aria-haspopup"] = !0), [a, { show: t, toggle: n }];
}
function z1({ children: e }) {
  const [t, n] = F1();
  return O.jsx(O.Fragment, { children: e(t, n) });
}
z1.displayName = "DropdownToggle";
const MT = S.createContext(null),
  ba = (e, t = null) => (e != null ? String(e) : t || null),
  to = MT,
  U1 = S.createContext(null);
U1.displayName = "NavContext";
const Dp = U1,
  DT = "data-rr-ui-",
  $T = "rrUi";
function ai(e) {
  return `${DT}${e}`;
}
function jT(e) {
  return `${$T}${e}`;
}
const IT = ["eventKey", "disabled", "onClick", "active", "as"];
function LT(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function B1({ key: e, href: t, active: n, disabled: r, onClick: o }) {
  const i = S.useContext(to),
    a = S.useContext(Dp),
    { activeKey: l } = a || {},
    u = ba(e, t),
    s = n == null && e != null ? ba(l) === u : n;
  return [
    {
      onClick: Ie((f) => {
        r || (o == null || o(f), i && !f.isPropagationStopped() && i(u, f));
      }),
      "aria-disabled": r || void 0,
      "aria-selected": s,
      [ai("dropdown-item")]: "",
    },
    { isActive: s },
  ];
}
const Q1 = S.forwardRef((e, t) => {
  let { eventKey: n, disabled: r, onClick: o, active: i, as: a = xp } = e,
    l = LT(e, IT);
  const [u] = B1({ key: n, href: l.href, disabled: r, onClick: o, active: i });
  return O.jsx(a, Object.assign({}, l, { ref: t }, u));
});
Q1.displayName = "DropdownItem";
const H1 = S.createContext(xs ? window : void 0);
H1.Provider;
function $p() {
  return S.useContext(H1);
}
function cm() {
  const e = k1(),
    t = S.useRef(null),
    n = S.useCallback(
      (r) => {
        (t.current = r), e();
      },
      [e]
    );
  return [t, n];
}
function _a({
  defaultShow: e,
  show: t,
  onSelect: n,
  onToggle: r,
  itemSelector: o = `* [${ai("dropdown-item")}]`,
  focusFirstItemOnShow: i,
  placement: a = "bottom-start",
  children: l,
}) {
  const u = $p(),
    [s, c] = oP(t, e, r),
    [f, h] = cm(),
    p = f.current,
    [g, y] = cm(),
    w = g.current,
    d = p1(s),
    v = S.useRef(null),
    m = S.useRef(!1),
    x = S.useContext(to),
    E = S.useCallback(
      (T, N, M = N == null ? void 0 : N.type) => {
        c(T, { originalEvent: N, source: M });
      },
      [c]
    ),
    C = Ie((T, N) => {
      n == null || n(T, N),
        E(!1, N, "select"),
        N.isPropagationStopped() || x == null || x(T, N);
    }),
    b = S.useMemo(
      () => ({
        toggle: E,
        placement: a,
        show: s,
        menuElement: p,
        toggleElement: w,
        setMenu: h,
        setToggle: y,
      }),
      [E, a, s, p, w, h, y]
    );
  p && d && !s && (m.current = p.contains(p.ownerDocument.activeElement));
  const k = Ie(() => {
      w && w.focus && w.focus();
    }),
    P = Ie(() => {
      const T = v.current;
      let N = i;
      if (
        (N == null && (N = f.current && _1(f.current) ? "keyboard" : !1),
        N === !1 || (N === "keyboard" && !/^key.+$/.test(T)))
      )
        return;
      const M = On(f.current, o)[0];
      M && M.focus && M.focus();
    });
  S.useEffect(() => {
    s ? P() : m.current && ((m.current = !1), k());
  }, [s, m, k, P]),
    S.useEffect(() => {
      v.current = null;
    });
  const R = (T, N) => {
    if (!f.current) return null;
    const M = On(f.current, o);
    let I = M.indexOf(T) + N;
    return (I = Math.max(0, Math.min(I, M.length))), M[I];
  };
  return (
    RO(
      S.useCallback(() => u.document, [u]),
      "keydown",
      (T) => {
        var N, M;
        const { key: I } = T,
          A = T.target,
          z = (N = f.current) == null ? void 0 : N.contains(A),
          B = (M = g.current) == null ? void 0 : M.contains(A);
        if (
          (/input|textarea/i.test(A.tagName) &&
            (I === " " ||
              (I !== "Escape" && z) ||
              (I === "Escape" && A.type === "search"))) ||
          (!z && !B) ||
          (I === "Tab" && (!f.current || !s))
        )
          return;
        v.current = T.type;
        const _ = { originalEvent: T, source: T.type };
        switch (I) {
          case "ArrowUp": {
            const L = R(A, -1);
            L && L.focus && L.focus(), T.preventDefault();
            return;
          }
          case "ArrowDown":
            if ((T.preventDefault(), !s)) c(!0, _);
            else {
              const L = R(A, 1);
              L && L.focus && L.focus();
            }
            return;
          case "Tab":
            c1(
              A.ownerDocument,
              "keyup",
              (L) => {
                var Q;
                ((L.key === "Tab" && !L.target) ||
                  !((Q = f.current) != null && Q.contains(L.target))) &&
                  c(!1, _);
              },
              { once: !0 }
            );
            break;
          case "Escape":
            I === "Escape" && (T.preventDefault(), T.stopPropagation()),
              c(!1, _);
            break;
        }
      }
    ),
    O.jsx(to.Provider, {
      value: C,
      children: O.jsx(Cs.Provider, { value: b, children: l }),
    })
  );
}
_a.displayName = "Dropdown";
_a.Menu = Mp;
_a.Toggle = z1;
_a.Item = Q1;
const W1 = S.createContext({});
W1.displayName = "DropdownContext";
const q1 = W1,
  K1 = S.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        eventKey: n,
        disabled: r = !1,
        onClick: o,
        active: i,
        as: a = v1,
        ...l
      },
      u
    ) => {
      const s = fe(e, "dropdown-item"),
        [c, f] = B1({
          key: n,
          href: l.href,
          disabled: r,
          onClick: o,
          active: i,
        });
      return O.jsx(a, {
        ...l,
        ...c,
        ref: u,
        className: ie(t, s, f.isActive && "active", r && "disabled"),
      });
    }
  );
K1.displayName = "DropdownItem";
const AT = K1,
  V1 = S.createContext(null);
V1.displayName = "InputGroupContext";
const G1 = V1,
  Y1 = S.createContext(null);
Y1.displayName = "NavbarContext";
const uo = Y1;
function X1(e, t) {
  return e;
}
function J1(e, t, n) {
  const r = n ? "top-end" : "top-start",
    o = n ? "top-start" : "top-end",
    i = n ? "bottom-end" : "bottom-start",
    a = n ? "bottom-start" : "bottom-end",
    l = n ? "right-start" : "left-start",
    u = n ? "right-end" : "left-end",
    s = n ? "left-start" : "right-start",
    c = n ? "left-end" : "right-end";
  let f = e ? a : i;
  return (
    t === "up"
      ? (f = e ? o : r)
      : t === "end"
      ? (f = e ? c : s)
      : t === "start"
      ? (f = e ? u : l)
      : t === "down-centered"
      ? (f = "bottom")
      : t === "up-centered" && (f = "top"),
    f
  );
}
const Z1 = S.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      align: n,
      rootCloseEvent: r,
      flip: o = !0,
      show: i,
      renderOnMount: a,
      as: l = "div",
      popperConfig: u,
      variant: s,
      ...c
    },
    f
  ) => {
    let h = !1;
    const p = S.useContext(uo),
      g = fe(e, "dropdown-menu"),
      { align: y, drop: w, isRTL: d } = S.useContext(q1);
    n = n || y;
    const v = S.useContext(G1),
      m = [];
    if (n)
      if (typeof n == "object") {
        const T = Object.keys(n);
        if (T.length) {
          const N = T[0],
            M = n[N];
          (h = M === "start"), m.push(`${g}-${N}-${M}`);
        }
      } else n === "end" && (h = !0);
    const x = J1(h, w, d),
      [E, { hasShown: C, popper: b, show: k, toggle: P }] = I1({
        flip: o,
        rootCloseEvent: r,
        show: i,
        usePopper: !p && m.length === 0,
        offset: [0, 2],
        popperConfig: u,
        placement: x,
      });
    if (
      ((E.ref = ii(X1(f), E.ref)),
      Eu(() => {
        k && (b == null || b.update());
      }, [k]),
      !C && !a && !v)
    )
      return null;
    typeof l != "string" &&
      ((E.show = k),
      (E.close = () => (P == null ? void 0 : P(!1))),
      (E.align = n));
    let R = c.style;
    return (
      b != null &&
        b.placement &&
        ((R = { ...c.style, ...E.style }), (c["x-placement"] = b.placement)),
      O.jsx(l, {
        ...c,
        ...E,
        style: R,
        ...((m.length || p) && { "data-bs-popper": "static" }),
        className: ie(
          t,
          g,
          k && "show",
          h && `${g}-end`,
          s && `${g}-${s}`,
          ...m
        ),
      })
    );
  }
);
Z1.displayName = "DropdownMenu";
const _T = Z1,
  ew = S.forwardRef(
    (
      {
        bsPrefix: e,
        split: t,
        className: n,
        childBsPrefix: r,
        as: o = Ko,
        ...i
      },
      a
    ) => {
      const l = fe(e, "dropdown-toggle"),
        u = S.useContext(Cs);
      r !== void 0 && (i.bsPrefix = r);
      const [s] = F1();
      return (
        (s.ref = ii(s.ref, X1(a))),
        O.jsx(o, {
          className: ie(
            n,
            l,
            t && `${l}-split`,
            (u == null ? void 0 : u.show) && "show"
          ),
          ...s,
          ...i,
        })
      );
    }
  );
ew.displayName = "DropdownToggle";
const FT = ew,
  zT = ct("dropdown-header", { defaultProps: { role: "heading" } }),
  UT = ct("dropdown-divider", {
    Component: "hr",
    defaultProps: { role: "separator" },
  }),
  BT = ct("dropdown-item-text", { Component: "span" }),
  tw = S.forwardRef((e, t) => {
    const {
        bsPrefix: n,
        drop: r = "down",
        show: o,
        className: i,
        align: a = "start",
        onSelect: l,
        onToggle: u,
        focusFirstItemOnShow: s,
        as: c = "div",
        navbar: f,
        autoClose: h = !0,
        ...p
      } = yp(e, { show: "onToggle" }),
      g = S.useContext(G1),
      y = fe(n, "dropdown"),
      w = XR(),
      d = (b) =>
        h === !1
          ? b === "click"
          : h === "inside"
          ? b !== "rootClose"
          : h === "outside"
          ? b !== "select"
          : !0,
      v = Ie((b, k) => {
        k.originalEvent.currentTarget === document &&
          (k.source !== "keydown" || k.originalEvent.key === "Escape") &&
          (k.source = "rootClose"),
          d(k.source) && (u == null || u(b, k));
      }),
      x = J1(a === "end", r, w),
      E = S.useMemo(() => ({ align: a, drop: r, isRTL: w }), [a, r, w]),
      C = {
        down: y,
        "down-centered": `${y}-center`,
        up: "dropup",
        "up-centered": "dropup-center dropup",
        end: "dropend",
        start: "dropstart",
      };
    return O.jsx(q1.Provider, {
      value: E,
      children: O.jsx(_a, {
        placement: x,
        show: o,
        onSelect: l,
        onToggle: v,
        focusFirstItemOnShow: s,
        itemSelector: `.${y}-item:not(.disabled):not(:disabled)`,
        children: g
          ? p.children
          : O.jsx(c, { ...p, ref: t, className: ie(i, o && "show", C[r]) }),
      }),
    });
  });
tw.displayName = "Dropdown";
const Hr = Object.assign(tw, {
    Toggle: FT,
    Menu: _T,
    Item: AT,
    ItemText: BT,
    Divider: UT,
    Header: zT,
  }),
  QT = { type: $n.string, tooltip: $n.bool, as: $n.elementType },
  jp = S.forwardRef(
    (
      { as: e = "div", className: t, type: n = "valid", tooltip: r = !1, ...o },
      i
    ) =>
      O.jsx(e, {
        ...o,
        ref: i,
        className: ie(t, `${n}-${r ? "tooltip" : "feedback"}`),
      })
  );
jp.displayName = "Feedback";
jp.propTypes = QT;
const nw = jp,
  HT = S.createContext({}),
  zn = HT,
  rw = S.forwardRef(
    (
      {
        id: e,
        bsPrefix: t,
        className: n,
        type: r = "checkbox",
        isValid: o = !1,
        isInvalid: i = !1,
        as: a = "input",
        ...l
      },
      u
    ) => {
      const { controlId: s } = S.useContext(zn);
      return (
        (t = fe(t, "form-check-input")),
        O.jsx(a, {
          ...l,
          ref: u,
          type: r,
          id: e || s,
          className: ie(n, t, o && "is-valid", i && "is-invalid"),
        })
      );
    }
  );
rw.displayName = "FormCheckInput";
const ow = rw,
  iw = S.forwardRef(({ bsPrefix: e, className: t, htmlFor: n, ...r }, o) => {
    const { controlId: i } = S.useContext(zn);
    return (
      (e = fe(e, "form-check-label")),
      O.jsx("label", { ...r, ref: o, htmlFor: n || i, className: ie(t, e) })
    );
  });
iw.displayName = "FormCheckLabel";
const Wf = iw,
  aw = S.forwardRef(
    (
      {
        id: e,
        bsPrefix: t,
        bsSwitchPrefix: n,
        inline: r = !1,
        reverse: o = !1,
        disabled: i = !1,
        isValid: a = !1,
        isInvalid: l = !1,
        feedbackTooltip: u = !1,
        feedback: s,
        feedbackType: c,
        className: f,
        style: h,
        title: p = "",
        type: g = "checkbox",
        label: y,
        children: w,
        as: d = "input",
        ...v
      },
      m
    ) => {
      (t = fe(t, "form-check")), (n = fe(n, "form-switch"));
      const { controlId: x } = S.useContext(zn),
        E = S.useMemo(() => ({ controlId: e || x }), [x, e]),
        C = (!w && y != null && y !== !1) || tP(w, Wf),
        b = O.jsx(ow, {
          ...v,
          type: g === "switch" ? "checkbox" : g,
          ref: m,
          isValid: a,
          isInvalid: l,
          disabled: i,
          as: d,
        });
      return O.jsx(zn.Provider, {
        value: E,
        children: O.jsx("div", {
          style: h,
          className: ie(
            f,
            C && t,
            r && `${t}-inline`,
            o && `${t}-reverse`,
            g === "switch" && n
          ),
          children:
            w ||
            O.jsxs(O.Fragment, {
              children: [
                b,
                C && O.jsx(Wf, { title: p, children: y }),
                s && O.jsx(nw, { type: c, tooltip: u, children: s }),
              ],
            }),
        }),
      });
    }
  );
aw.displayName = "FormCheck";
const ku = Object.assign(aw, { Input: ow, Label: Wf }),
  lw = S.forwardRef(
    (
      {
        bsPrefix: e,
        type: t,
        size: n,
        htmlSize: r,
        id: o,
        className: i,
        isValid: a = !1,
        isInvalid: l = !1,
        plaintext: u,
        readOnly: s,
        as: c = "input",
        ...f
      },
      h
    ) => {
      const { controlId: p } = S.useContext(zn);
      e = fe(e, "form-control");
      let g;
      return (
        u
          ? (g = { [`${e}-plaintext`]: !0 })
          : (g = { [e]: !0, [`${e}-${n}`]: n }),
        O.jsx(c, {
          ...f,
          type: t,
          size: r,
          ref: h,
          readOnly: s,
          id: o || p,
          className: ie(
            i,
            g,
            a && "is-valid",
            l && "is-invalid",
            t === "color" && `${e}-color`
          ),
        })
      );
    }
  );
lw.displayName = "FormControl";
const WT = Object.assign(lw, { Feedback: nw }),
  qT = ct("form-floating"),
  uw = S.forwardRef(({ controlId: e, as: t = "div", ...n }, r) => {
    const o = S.useMemo(() => ({ controlId: e }), [e]);
    return O.jsx(zn.Provider, {
      value: o,
      children: O.jsx(t, { ...n, ref: r }),
    });
  });
uw.displayName = "FormGroup";
const sw = uw,
  cw = S.forwardRef(
    (
      {
        as: e = "label",
        bsPrefix: t,
        column: n = !1,
        visuallyHidden: r = !1,
        className: o,
        htmlFor: i,
        ...a
      },
      l
    ) => {
      const { controlId: u } = S.useContext(zn);
      t = fe(t, "form-label");
      let s = "col-form-label";
      typeof n == "string" && (s = `${s} ${s}-${n}`);
      const c = ie(o, t, r && "visually-hidden", n && s);
      return (
        (i = i || u),
        n
          ? O.jsx(Es, { ref: l, as: "label", className: c, htmlFor: i, ...a })
          : O.jsx(e, { ref: l, className: c, htmlFor: i, ...a })
      );
    }
  );
cw.displayName = "FormLabel";
const KT = cw,
  fw = S.forwardRef(({ bsPrefix: e, className: t, id: n, ...r }, o) => {
    const { controlId: i } = S.useContext(zn);
    return (
      (e = fe(e, "form-range")),
      O.jsx("input", {
        ...r,
        type: "range",
        ref: o,
        className: ie(t, e),
        id: n || i,
      })
    );
  });
fw.displayName = "FormRange";
const VT = fw,
  dw = S.forwardRef(
    (
      {
        bsPrefix: e,
        size: t,
        htmlSize: n,
        className: r,
        isValid: o = !1,
        isInvalid: i = !1,
        id: a,
        ...l
      },
      u
    ) => {
      const { controlId: s } = S.useContext(zn);
      return (
        (e = fe(e, "form-select")),
        O.jsx("select", {
          ...l,
          size: n,
          ref: u,
          className: ie(
            r,
            e,
            t && `${e}-${t}`,
            o && "is-valid",
            i && "is-invalid"
          ),
          id: a || s,
        })
      );
    }
  );
dw.displayName = "FormSelect";
const GT = dw,
  pw = S.forwardRef(
    ({ bsPrefix: e, className: t, as: n = "small", muted: r, ...o }, i) => (
      (e = fe(e, "form-text")),
      O.jsx(n, { ...o, ref: i, className: ie(t, e, r && "text-muted") })
    )
  );
pw.displayName = "FormText";
const YT = pw,
  hw = S.forwardRef((e, t) => O.jsx(ku, { ...e, ref: t, type: "switch" }));
hw.displayName = "Switch";
const XT = Object.assign(hw, { Input: ku.Input, Label: ku.Label }),
  vw = S.forwardRef(
    (
      { bsPrefix: e, className: t, children: n, controlId: r, label: o, ...i },
      a
    ) => (
      (e = fe(e, "form-floating")),
      O.jsxs(sw, {
        ref: a,
        className: ie(t, e),
        controlId: r,
        ...i,
        children: [n, O.jsx("label", { htmlFor: r, children: o })],
      })
    )
  );
vw.displayName = "FloatingLabel";
const JT = vw,
  ZT = { _ref: $n.any, validated: $n.bool, as: $n.elementType },
  Ip = S.forwardRef(({ className: e, validated: t, as: n = "form", ...r }, o) =>
    O.jsx(n, { ...r, ref: o, className: ie(e, t && "was-validated") })
  );
Ip.displayName = "Form";
Ip.propTypes = ZT;
const se = Object.assign(Ip, {
    Group: sw,
    Control: WT,
    Floating: qT,
    Check: ku,
    Switch: XT,
    Label: KT,
    Text: YT,
    Range: VT,
    Select: GT,
    FloatingLabel: JT,
  }),
  mw = S.forwardRef(
    ({ bsPrefix: e, fluid: t = !1, as: n = "div", className: r, ...o }, i) => {
      const a = fe(e, "container"),
        l = typeof t == "string" ? `-${t}` : "-fluid";
      return O.jsx(n, { ref: i, ...o, className: ie(r, t ? `${a}${l}` : a) });
    }
  );
mw.displayName = "Container";
const ks = mw,
  e2 = S.createContext(null),
  yw = e2,
  t2 = ["as", "active", "eventKey"];
function n2(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function gw({ key: e, onClick: t, active: n, id: r, role: o, disabled: i }) {
  const a = S.useContext(to),
    l = S.useContext(Dp),
    u = S.useContext(yw);
  let s = n;
  const c = { role: o };
  if (l) {
    !o && l.role === "tablist" && (c.role = "tab");
    const f = l.getControllerId(e ?? null),
      h = l.getControlledId(e ?? null);
    (c[ai("event-key")] = e),
      (c.id = f || r),
      (s = n == null && e != null ? l.activeKey === e : n),
      (s ||
        (!(u != null && u.unmountOnExit) && !(u != null && u.mountOnEnter))) &&
        (c["aria-controls"] = h);
  }
  return (
    c.role === "tab" &&
      ((c["aria-selected"] = s),
      s || (c.tabIndex = -1),
      i && ((c.tabIndex = -1), (c["aria-disabled"] = !0))),
    (c.onClick = Ie((f) => {
      i ||
        (t == null || t(f),
        e != null && a && !f.isPropagationStopped() && a(e, f));
    })),
    [c, { isActive: s }]
  );
}
const ww = S.forwardRef((e, t) => {
  let { as: n = xp, active: r, eventKey: o } = e,
    i = n2(e, t2);
  const [a, l] = gw(Object.assign({ key: ba(o, i.href), active: r }, i));
  return (
    (a[ai("active")] = l.isActive),
    O.jsx(n, Object.assign({}, i, a, { ref: t }))
  );
});
ww.displayName = "NavItem";
const r2 = ww,
  o2 = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
function i2(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const fm = () => {},
  dm = ai("event-key"),
  Sw = S.forwardRef((e, t) => {
    let { as: n = "div", onSelect: r, activeKey: o, role: i, onKeyDown: a } = e,
      l = i2(e, o2);
    const u = k1(),
      s = S.useRef(!1),
      c = S.useContext(to),
      f = S.useContext(yw);
    let h, p;
    f &&
      ((i = i || "tablist"),
      (o = f.activeKey),
      (h = f.getControlledId),
      (p = f.getControllerId));
    const g = S.useRef(null),
      y = (m) => {
        const x = g.current;
        if (!x) return null;
        const E = On(x, `[${dm}]:not([aria-disabled=true])`),
          C = x.querySelector("[aria-selected=true]");
        if (!C || C !== document.activeElement) return null;
        const b = E.indexOf(C);
        if (b === -1) return null;
        let k = b + m;
        return k >= E.length && (k = 0), k < 0 && (k = E.length - 1), E[k];
      },
      w = (m, x) => {
        m != null && (r == null || r(m, x), c == null || c(m, x));
      },
      d = (m) => {
        if ((a == null || a(m), !f)) return;
        let x;
        switch (m.key) {
          case "ArrowLeft":
          case "ArrowUp":
            x = y(-1);
            break;
          case "ArrowRight":
          case "ArrowDown":
            x = y(1);
            break;
          default:
            return;
        }
        x &&
          (m.preventDefault(),
          w(x.dataset[jT("EventKey")] || null, m),
          (s.current = !0),
          u());
      };
    S.useEffect(() => {
      if (g.current && s.current) {
        const m = g.current.querySelector(`[${dm}][aria-selected=true]`);
        m == null || m.focus();
      }
      s.current = !1;
    });
    const v = ii(t, g);
    return O.jsx(to.Provider, {
      value: w,
      children: O.jsx(Dp.Provider, {
        value: {
          role: i,
          activeKey: ba(o),
          getControlledId: h || fm,
          getControllerId: p || fm,
        },
        children: O.jsx(
          n,
          Object.assign({}, l, { onKeyDown: d, ref: v, role: i })
        ),
      }),
    });
  });
Sw.displayName = "Nav";
const a2 = Object.assign(Sw, { Item: r2 });
function Rc(e) {
  e === void 0 && (e = Ss());
  try {
    var t = e.activeElement;
    return !t || !t.nodeName ? null : t;
  } catch {
    return e.body;
  }
}
function l2(e = document) {
  const t = e.defaultView;
  return Math.abs(t.innerWidth - e.documentElement.clientWidth);
}
const pm = ai("modal-open");
class u2 {
  constructor({
    ownerDocument: t,
    handleContainerOverflow: n = !0,
    isRTL: r = !1,
  } = {}) {
    (this.handleContainerOverflow = n),
      (this.isRTL = r),
      (this.modals = []),
      (this.ownerDocument = t);
  }
  getScrollbarWidth() {
    return l2(this.ownerDocument);
  }
  getElement() {
    return (this.ownerDocument || document).body;
  }
  setModalAttributes(t) {}
  removeModalAttributes(t) {}
  setContainerStyle(t) {
    const n = { overflow: "hidden" },
      r = this.isRTL ? "paddingLeft" : "paddingRight",
      o = this.getElement();
    (t.style = { overflow: o.style.overflow, [r]: o.style[r] }),
      t.scrollBarWidth &&
        (n[r] = `${parseInt(Dn(o, r) || "0", 10) + t.scrollBarWidth}px`),
      o.setAttribute(pm, ""),
      Dn(o, n);
  }
  reset() {
    [...this.modals].forEach((t) => this.remove(t));
  }
  removeContainerStyle(t) {
    const n = this.getElement();
    n.removeAttribute(pm), Object.assign(n.style, t.style);
  }
  add(t) {
    let n = this.modals.indexOf(t);
    return (
      n !== -1 ||
        ((n = this.modals.length),
        this.modals.push(t),
        this.setModalAttributes(t),
        n !== 0) ||
        ((this.state = { scrollBarWidth: this.getScrollbarWidth(), style: {} }),
        this.handleContainerOverflow && this.setContainerStyle(this.state)),
      n
    );
  }
  remove(t) {
    const n = this.modals.indexOf(t);
    n !== -1 &&
      (this.modals.splice(n, 1),
      !this.modals.length &&
        this.handleContainerOverflow &&
        this.removeContainerStyle(this.state),
      this.removeModalAttributes(t));
  }
  isTopModal(t) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === t;
  }
}
const Lp = u2,
  Oc = (e, t) =>
    xs
      ? e == null
        ? (t || Ss()).body
        : (typeof e == "function" && (e = e()),
          e && "current" in e && (e = e.current),
          e && ("nodeType" in e || e.getBoundingClientRect) ? e : null)
      : null;
function s2(e, t) {
  const n = $p(),
    [r, o] = S.useState(() => Oc(e, n == null ? void 0 : n.document));
  if (!r) {
    const i = Oc(e);
    i && o(i);
  }
  return (
    S.useEffect(() => {
      t && r && t(r);
    }, [t, r]),
    S.useEffect(() => {
      const i = Oc(e);
      i !== r && o(i);
    }, [e, r]),
    r
  );
}
function c2({
  children: e,
  in: t,
  onExited: n,
  mountOnEnter: r,
  unmountOnExit: o,
}) {
  const i = S.useRef(null),
    a = S.useRef(t),
    l = Ie(n);
  S.useEffect(() => {
    t ? (a.current = !0) : l(i.current);
  }, [t, l]);
  const u = ii(i, e.ref),
    s = S.cloneElement(e, { ref: u });
  return t ? s : o || (!a.current && r) ? null : s;
}
function f2({ in: e, onTransition: t }) {
  const n = S.useRef(null),
    r = S.useRef(!0),
    o = Ie(t);
  return (
    Eu(() => {
      if (!n.current) return;
      let i = !1;
      return (
        o({ in: e, element: n.current, initial: r.current, isStale: () => i }),
        () => {
          i = !0;
        }
      );
    }, [e, o]),
    Eu(
      () => (
        (r.current = !1),
        () => {
          r.current = !0;
        }
      ),
      []
    ),
    n
  );
}
function d2({ children: e, in: t, onExited: n, onEntered: r, transition: o }) {
  const [i, a] = S.useState(!t);
  t && i && a(!1);
  const l = f2({
      in: !!t,
      onTransition: (s) => {
        const c = () => {
          s.isStale() ||
            (s.in
              ? r == null || r(s.element, s.initial)
              : (a(!0), n == null || n(s.element)));
        };
        Promise.resolve(o(s)).then(c, (f) => {
          throw (s.in || a(!0), f);
        });
      },
    }),
    u = ii(l, e.ref);
  return i && !t ? null : S.cloneElement(e, { ref: u });
}
function hm(e, t, n) {
  return e
    ? O.jsx(e, Object.assign({}, n))
    : t
    ? O.jsx(d2, Object.assign({}, n, { transition: t }))
    : O.jsx(c2, Object.assign({}, n));
}
function p2(e) {
  return e.code === "Escape" || e.keyCode === 27;
}
const h2 = [
  "show",
  "role",
  "className",
  "style",
  "children",
  "backdrop",
  "keyboard",
  "onBackdropClick",
  "onEscapeKeyDown",
  "transition",
  "runTransition",
  "backdropTransition",
  "runBackdropTransition",
  "autoFocus",
  "enforceFocus",
  "restoreFocus",
  "restoreFocusOptions",
  "renderDialog",
  "renderBackdrop",
  "manager",
  "container",
  "onShow",
  "onHide",
  "onExit",
  "onExited",
  "onExiting",
  "onEnter",
  "onEntering",
  "onEntered",
];
function v2(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
let Pc;
function m2(e) {
  return (
    Pc || (Pc = new Lp({ ownerDocument: e == null ? void 0 : e.document })), Pc
  );
}
function y2(e) {
  const t = $p(),
    n = e || m2(t),
    r = S.useRef({ dialog: null, backdrop: null });
  return Object.assign(r.current, {
    add: () => n.add(r.current),
    remove: () => n.remove(r.current),
    isTopModal: () => n.isTopModal(r.current),
    setDialogRef: S.useCallback((o) => {
      r.current.dialog = o;
    }, []),
    setBackdropRef: S.useCallback((o) => {
      r.current.backdrop = o;
    }, []),
  });
}
const xw = S.forwardRef((e, t) => {
  let {
      show: n = !1,
      role: r = "dialog",
      className: o,
      style: i,
      children: a,
      backdrop: l = !0,
      keyboard: u = !0,
      onBackdropClick: s,
      onEscapeKeyDown: c,
      transition: f,
      runTransition: h,
      backdropTransition: p,
      runBackdropTransition: g,
      autoFocus: y = !0,
      enforceFocus: w = !0,
      restoreFocus: d = !0,
      restoreFocusOptions: v,
      renderDialog: m,
      renderBackdrop: x = (de) => O.jsx("div", Object.assign({}, de)),
      manager: E,
      container: C,
      onShow: b,
      onHide: k = () => {},
      onExit: P,
      onExited: R,
      onExiting: T,
      onEnter: N,
      onEntering: M,
      onEntered: I,
    } = e,
    A = v2(e, h2);
  const z = s2(C),
    B = y2(E),
    D = d1(),
    _ = p1(n),
    [L, Q] = S.useState(!n),
    q = S.useRef(null);
  S.useImperativeHandle(t, () => B, [B]),
    xs && !_ && n && (q.current = Rc()),
    n && L && Q(!1);
  const Y = Ie(() => {
      if (
        (B.add(),
        (Ve.current = or(document, "keydown", le)),
        (Se.current = or(document, "focus", () => setTimeout(H), !0)),
        b && b(),
        y)
      ) {
        const de = Rc(document);
        B.dialog &&
          de &&
          !bu(B.dialog, de) &&
          ((q.current = de), B.dialog.focus());
      }
    }),
    J = Ie(() => {
      if (
        (B.remove(),
        Ve.current == null || Ve.current(),
        Se.current == null || Se.current(),
        d)
      ) {
        var de;
        (de = q.current) == null || de.focus == null || de.focus(v),
          (q.current = null);
      }
    });
  S.useEffect(() => {
    !n || !z || Y();
  }, [n, z, Y]),
    S.useEffect(() => {
      L && J();
    }, [L, J]),
    eP(() => {
      J();
    });
  const H = Ie(() => {
      if (!w || !D() || !B.isTopModal()) return;
      const de = Rc();
      B.dialog && de && !bu(B.dialog, de) && B.dialog.focus();
    }),
    ee = Ie((de) => {
      de.target === de.currentTarget && (s == null || s(de), l === !0 && k());
    }),
    le = Ie((de) => {
      u &&
        p2(de) &&
        B.isTopModal() &&
        (c == null || c(de), de.defaultPrevented || k());
    }),
    Se = S.useRef(),
    Ve = S.useRef(),
    Ue = (...de) => {
      Q(!0), R == null || R(...de);
    };
  if (!z) return null;
  const Be = Object.assign(
    {
      role: r,
      ref: B.setDialogRef,
      "aria-modal": r === "dialog" ? !0 : void 0,
    },
    A,
    { style: i, className: o, tabIndex: -1 }
  );
  let oe = m
    ? m(Be)
    : O.jsx(
        "div",
        Object.assign({}, Be, {
          children: S.cloneElement(a, { role: "document" }),
        })
      );
  oe = hm(f, h, {
    unmountOnExit: !0,
    mountOnEnter: !0,
    appear: !0,
    in: !!n,
    onExit: P,
    onExiting: T,
    onExited: Ue,
    onEnter: N,
    onEntering: M,
    onEntered: I,
    children: oe,
  });
  let Le = null;
  return (
    l &&
      ((Le = x({ ref: B.setBackdropRef, onClick: ee })),
      (Le = hm(p, g, {
        in: !!n,
        appear: !0,
        mountOnEnter: !0,
        unmountOnExit: !0,
        children: Le,
      }))),
    O.jsx(O.Fragment, {
      children: zr.createPortal(O.jsxs(O.Fragment, { children: [Le, oe] }), z),
    })
  );
});
xw.displayName = "Modal";
const g2 = Object.assign(xw, { Manager: Lp });
function w2(e, t) {
  return e.classList
    ? !!t && e.classList.contains(t)
    : (" " + (e.className.baseVal || e.className) + " ").indexOf(
        " " + t + " "
      ) !== -1;
}
function S2(e, t) {
  e.classList
    ? e.classList.add(t)
    : w2(e, t) ||
      (typeof e.className == "string"
        ? (e.className = e.className + " " + t)
        : e.setAttribute(
            "class",
            ((e.className && e.className.baseVal) || "") + " " + t
          ));
}
function vm(e, t) {
  return e
    .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
    .replace(/\s+/g, " ")
    .replace(/^\s*|\s*$/g, "");
}
function x2(e, t) {
  e.classList
    ? e.classList.remove(t)
    : typeof e.className == "string"
    ? (e.className = vm(e.className, t))
    : e.setAttribute(
        "class",
        vm((e.className && e.className.baseVal) || "", t)
      );
}
const vo = {
  FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  STICKY_CONTENT: ".sticky-top",
  NAVBAR_TOGGLER: ".navbar-toggler",
};
class Ew extends Lp {
  adjustAndStore(t, n, r) {
    const o = n.style[t];
    (n.dataset[t] = o), Dn(n, { [t]: `${parseFloat(Dn(n, t)) + r}px` });
  }
  restore(t, n) {
    const r = n.dataset[t];
    r !== void 0 && (delete n.dataset[t], Dn(n, { [t]: r }));
  }
  setContainerStyle(t) {
    super.setContainerStyle(t);
    const n = this.getElement();
    if ((S2(n, "modal-open"), !t.scrollBarWidth)) return;
    const r = this.isRTL ? "paddingLeft" : "paddingRight",
      o = this.isRTL ? "marginLeft" : "marginRight";
    On(n, vo.FIXED_CONTENT).forEach((i) =>
      this.adjustAndStore(r, i, t.scrollBarWidth)
    ),
      On(n, vo.STICKY_CONTENT).forEach((i) =>
        this.adjustAndStore(o, i, -t.scrollBarWidth)
      ),
      On(n, vo.NAVBAR_TOGGLER).forEach((i) =>
        this.adjustAndStore(o, i, t.scrollBarWidth)
      );
  }
  removeContainerStyle(t) {
    super.removeContainerStyle(t);
    const n = this.getElement();
    x2(n, "modal-open");
    const r = this.isRTL ? "paddingLeft" : "paddingRight",
      o = this.isRTL ? "marginLeft" : "marginRight";
    On(n, vo.FIXED_CONTENT).forEach((i) => this.restore(r, i)),
      On(n, vo.STICKY_CONTENT).forEach((i) => this.restore(o, i)),
      On(n, vo.NAVBAR_TOGGLER).forEach((i) => this.restore(o, i));
  }
}
let Tc;
function E2(e) {
  return Tc || (Tc = new Ew(e)), Tc;
}
const C2 = Ew,
  b2 = S.createContext({ onHide() {} }),
  Cw = b2,
  k2 = S.forwardRef(
    (
      {
        closeLabel: e = "Close",
        closeVariant: t,
        closeButton: n = !1,
        onHide: r,
        children: o,
        ...i
      },
      a
    ) => {
      const l = S.useContext(Cw),
        u = Ie(() => {
          l == null || l.onHide(), r == null || r();
        });
      return O.jsxs("div", {
        ref: a,
        ...i,
        children: [
          o,
          n && O.jsx(_O, { "aria-label": e, variant: t, onClick: u }),
        ],
      });
    }
  ),
  R2 = k2;
var mm = { exports: {} },
  qf = { exports: {} };
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = n);
  function n(r) {
    function o(a, l, u, s, c, f) {
      var h = s || "<<anonymous>>",
        p = f || u;
      if (l[u] == null)
        return a
          ? new Error(
              "Required " +
                c +
                " `" +
                p +
                "` was not specified " +
                ("in `" + h + "`.")
            )
          : null;
      for (
        var g = arguments.length, y = Array(g > 6 ? g - 6 : 0), w = 6;
        w < g;
        w++
      )
        y[w - 6] = arguments[w];
      return r.apply(void 0, [l, u, h, c, p].concat(y));
    }
    var i = o.bind(null, !1);
    return (i.isRequired = o.bind(null, !0)), i;
  }
  e.exports = t.default;
})(qf, qf.exports);
var O2 = qf.exports;
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i);
  var n = O2,
    r = o(n);
  function o(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i() {
    for (var a = arguments.length, l = Array(a), u = 0; u < a; u++)
      l[u] = arguments[u];
    function s() {
      for (var c = arguments.length, f = Array(c), h = 0; h < c; h++)
        f[h] = arguments[h];
      var p = null;
      return (
        l.forEach(function (g) {
          if (p == null) {
            var y = g.apply(void 0, f);
            y != null && (p = y);
          }
        }),
        p
      );
    }
    return (0, r.default)(s);
  }
  e.exports = t.default;
})(mm, mm.exports);
const P2 = ct("nav-item"),
  bw = S.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        as: n = v1,
        active: r,
        eventKey: o,
        disabled: i = !1,
        ...a
      },
      l
    ) => {
      e = fe(e, "nav-link");
      const [u, s] = gw({ key: ba(o, a.href), active: r, disabled: i, ...a });
      return O.jsx(n, {
        ...a,
        ...u,
        ref: l,
        disabled: i,
        className: ie(t, e, i && "disabled", s.isActive && "active"),
      });
    }
  );
bw.displayName = "NavLink";
const kw = bw,
  Rw = S.forwardRef((e, t) => {
    const {
        as: n = "div",
        bsPrefix: r,
        variant: o,
        fill: i = !1,
        justify: a = !1,
        navbar: l,
        navbarScroll: u,
        className: s,
        activeKey: c,
        ...f
      } = yp(e, { activeKey: "onSelect" }),
      h = fe(r, "nav");
    let p,
      g,
      y = !1;
    const w = S.useContext(uo),
      d = S.useContext(S1);
    return (
      w
        ? ((p = w.bsPrefix), (y = l ?? !0))
        : d && ({ cardHeaderBsPrefix: g } = d),
      O.jsx(a2, {
        as: n,
        ref: t,
        activeKey: c,
        className: ie(s, {
          [h]: !y,
          [`${p}-nav`]: y,
          [`${p}-nav-scroll`]: y && u,
          [`${g}-${o}`]: !!g,
          [`${h}-${o}`]: !!o,
          [`${h}-fill`]: i,
          [`${h}-justified`]: a,
        }),
        ...f,
      })
    );
  });
Rw.displayName = "Nav";
const hl = Object.assign(Rw, { Item: P2, Link: kw }),
  Ow = S.forwardRef(({ bsPrefix: e, className: t, as: n, ...r }, o) => {
    e = fe(e, "navbar-brand");
    const i = n || (r.href ? "a" : "span");
    return O.jsx(i, { ...r, ref: o, className: ie(t, e) });
  });
Ow.displayName = "NavbarBrand";
const T2 = Ow,
  Pw = S.forwardRef(({ children: e, bsPrefix: t, ...n }, r) => {
    t = fe(t, "navbar-collapse");
    const o = S.useContext(uo);
    return O.jsx(CO, {
      in: !!(o && o.expanded),
      ...n,
      children: O.jsx("div", { ref: r, className: t, children: e }),
    });
  });
Pw.displayName = "NavbarCollapse";
const N2 = Pw,
  Tw = S.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        children: n,
        label: r = "Toggle navigation",
        as: o = "button",
        onClick: i,
        ...a
      },
      l
    ) => {
      e = fe(e, "navbar-toggler");
      const { onToggle: u, expanded: s } = S.useContext(uo) || {},
        c = Ie((f) => {
          i && i(f), u && u();
        });
      return (
        o === "button" && (a.type = "button"),
        O.jsx(o, {
          ...a,
          ref: l,
          onClick: c,
          "aria-label": r,
          className: ie(t, e, !s && "collapsed"),
          children: n || O.jsx("span", { className: `${e}-icon` }),
        })
      );
    }
  );
Tw.displayName = "NavbarToggle";
const M2 = Tw;
var Kf = new WeakMap(),
  ym = function (t, n) {
    if (!(!t || !n)) {
      var r = Kf.get(n) || new Map();
      Kf.set(n, r);
      var o = r.get(t);
      return (
        o || ((o = n.matchMedia(t)), (o.refCount = 0), r.set(o.media, o)), o
      );
    }
  };
function D2(e, t) {
  t === void 0 && (t = typeof window > "u" ? void 0 : window);
  var n = ym(e, t),
    r = S.useState(function () {
      return n ? n.matches : !1;
    }),
    o = r[0],
    i = r[1];
  return (
    Eu(
      function () {
        var a = ym(e, t);
        if (!a) return i(!1);
        var l = Kf.get(t),
          u = function () {
            i(a.matches);
          };
        return (
          a.refCount++,
          a.addListener(u),
          u(),
          function () {
            a.removeListener(u),
              a.refCount--,
              a.refCount <= 0 && (l == null || l.delete(a.media)),
              (a = void 0);
          }
        );
      },
      [e]
    ),
    o
  );
}
function $2(e) {
  var t = Object.keys(e);
  function n(l, u) {
    return l === u ? u : l ? l + " and " + u : u;
  }
  function r(l) {
    return t[Math.min(t.indexOf(l) + 1, t.length - 1)];
  }
  function o(l) {
    var u = r(l),
      s = e[u];
    return (
      typeof s == "number"
        ? (s = s - 0.2 + "px")
        : (s = "calc(" + s + " - 0.2px)"),
      "(max-width: " + s + ")"
    );
  }
  function i(l) {
    var u = e[l];
    return typeof u == "number" && (u = u + "px"), "(min-width: " + u + ")";
  }
  function a(l, u, s) {
    var c;
    if (typeof l == "object") (c = l), (s = u), (u = !0);
    else {
      var f;
      (u = u || !0), (c = ((f = {}), (f[l] = u), f));
    }
    var h = S.useMemo(
      function () {
        return Object.entries(c).reduce(function (p, g) {
          var y = g[0],
            w = g[1];
          return (
            (w === "up" || w === !0) && (p = n(p, i(y))),
            (w === "down" || w === !0) && (p = n(p, o(y))),
            p
          );
        }, "");
      },
      [JSON.stringify(c)]
    );
    return D2(h, s);
  }
  return a;
}
var j2 = $2({ xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 });
const I2 = ct("offcanvas-body"),
  L2 = { [en]: "show", [Pn]: "show" },
  Nw = S.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        children: n,
        in: r = !1,
        mountOnEnter: o = !1,
        unmountOnExit: i = !1,
        appear: a = !1,
        ...l
      },
      u
    ) => (
      (e = fe(e, "offcanvas")),
      O.jsx(wp, {
        ref: u,
        addEndListener: gp,
        in: r,
        mountOnEnter: o,
        unmountOnExit: i,
        appear: a,
        ...l,
        childRef: n.ref,
        children: (s, c) =>
          S.cloneElement(n, {
            ...c,
            className: ie(
              t,
              n.props.className,
              (s === en || s === xa) && `${e}-toggling`,
              L2[s]
            ),
          }),
      })
    )
  );
Nw.displayName = "OffcanvasToggling";
const A2 = Nw,
  Mw = S.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        closeLabel: n = "Close",
        closeButton: r = !1,
        ...o
      },
      i
    ) => (
      (e = fe(e, "offcanvas-header")),
      O.jsx(R2, {
        ref: i,
        ...o,
        className: ie(t, e),
        closeLabel: n,
        closeButton: r,
      })
    )
  );
Mw.displayName = "OffcanvasHeader";
const _2 = Mw,
  F2 = Cp("h5"),
  z2 = ct("offcanvas-title", { Component: F2 });
function U2(e) {
  return O.jsx(A2, { ...e });
}
function B2(e) {
  return O.jsx(LO, { ...e });
}
const Dw = S.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      children: n,
      "aria-labelledby": r,
      placement: o = "start",
      responsive: i,
      show: a = !1,
      backdrop: l = !0,
      keyboard: u = !0,
      scroll: s = !1,
      onEscapeKeyDown: c,
      onShow: f,
      onHide: h,
      container: p,
      autoFocus: g = !0,
      enforceFocus: y = !0,
      restoreFocus: w = !0,
      restoreFocusOptions: d,
      onEntered: v,
      onExit: m,
      onExiting: x,
      onEnter: E,
      onEntering: C,
      onExited: b,
      backdropClassName: k,
      manager: P,
      renderStaticNode: R = !1,
      ...T
    },
    N
  ) => {
    const M = S.useRef();
    e = fe(e, "offcanvas");
    const { onToggle: I } = S.useContext(uo) || {},
      [A, z] = S.useState(!1),
      B = j2(i || "xs", "up");
    S.useEffect(() => {
      z(i ? a && !B : a);
    }, [a, i, B]);
    const D = Ie(() => {
        I == null || I(), h == null || h();
      }),
      _ = S.useMemo(() => ({ onHide: D }), [D]);
    function L() {
      return (
        P ||
        (s
          ? (M.current || (M.current = new C2({ handleContainerOverflow: !1 })),
            M.current)
          : E2())
      );
    }
    const Q = (H, ...ee) => {
        H && (H.style.visibility = "visible"), E == null || E(H, ...ee);
      },
      q = (H, ...ee) => {
        H && (H.style.visibility = ""), b == null || b(...ee);
      },
      Y = S.useCallback(
        (H) => O.jsx("div", { ...H, className: ie(`${e}-backdrop`, k) }),
        [k, e]
      ),
      J = (H) =>
        O.jsx("div", {
          ...H,
          ...T,
          className: ie(t, i ? `${e}-${i}` : e, `${e}-${o}`),
          "aria-labelledby": r,
          children: n,
        });
    return O.jsxs(O.Fragment, {
      children: [
        !A && (i || R) && J({}),
        O.jsx(Cw.Provider, {
          value: _,
          children: O.jsx(g2, {
            show: A,
            ref: N,
            backdrop: l,
            container: p,
            keyboard: u,
            autoFocus: g,
            enforceFocus: y && !s,
            restoreFocus: w,
            restoreFocusOptions: d,
            onEscapeKeyDown: c,
            onShow: f,
            onHide: D,
            onEnter: Q,
            onEntering: C,
            onEntered: v,
            onExit: m,
            onExiting: x,
            onExited: q,
            manager: L(),
            transition: U2,
            backdropTransition: B2,
            renderBackdrop: Y,
            renderDialog: J,
          }),
        }),
      ],
    });
  }
);
Dw.displayName = "Offcanvas";
const Q2 = Object.assign(Dw, { Body: I2, Header: _2, Title: z2 }),
  $w = S.forwardRef((e, t) => {
    const n = S.useContext(uo);
    return O.jsx(Q2, {
      ref: t,
      show: !!(n != null && n.expanded),
      ...e,
      renderStaticNode: !0,
    });
  });
$w.displayName = "NavbarOffcanvas";
const H2 = $w,
  W2 = ct("navbar-text", { Component: "span" }),
  jw = S.forwardRef((e, t) => {
    const {
        bsPrefix: n,
        expand: r = !0,
        variant: o = "light",
        bg: i,
        fixed: a,
        sticky: l,
        className: u,
        as: s = "nav",
        expanded: c,
        onToggle: f,
        onSelect: h,
        collapseOnSelect: p = !1,
        ...g
      } = yp(e, { expanded: "onToggle" }),
      y = fe(n, "navbar"),
      w = S.useCallback(
        (...m) => {
          h == null || h(...m), p && c && (f == null || f(!1));
        },
        [h, p, c, f]
      );
    g.role === void 0 && s !== "nav" && (g.role = "navigation");
    let d = `${y}-expand`;
    typeof r == "string" && (d = `${d}-${r}`);
    const v = S.useMemo(
      () => ({
        onToggle: () => (f == null ? void 0 : f(!c)),
        bsPrefix: y,
        expanded: !!c,
        expand: r,
      }),
      [y, c, r, f]
    );
    return O.jsx(uo.Provider, {
      value: v,
      children: O.jsx(to.Provider, {
        value: w,
        children: O.jsx(s, {
          ref: t,
          ...g,
          className: ie(
            u,
            y,
            r && d,
            o && `${y}-${o}`,
            i && `bg-${i}`,
            l && `sticky-${l}`,
            a && `fixed-${a}`
          ),
        }),
      }),
    });
  });
jw.displayName = "Navbar";
const vl = Object.assign(jw, {
    Brand: T2,
    Collapse: N2,
    Offcanvas: H2,
    Text: W2,
    Toggle: M2,
  }),
  Iw = S.forwardRef(
    (
      {
        id: e,
        title: t,
        children: n,
        bsPrefix: r,
        className: o,
        rootCloseEvent: i,
        menuRole: a,
        disabled: l,
        active: u,
        renderMenuOnMount: s,
        menuVariant: c,
        ...f
      },
      h
    ) => {
      const p = fe(void 0, "nav-item");
      return O.jsxs(Hr, {
        ref: h,
        ...f,
        className: ie(o, p),
        children: [
          O.jsx(Hr.Toggle, {
            id: e,
            eventKey: null,
            active: u,
            disabled: l,
            childBsPrefix: r,
            as: kw,
            children: t,
          }),
          O.jsx(Hr.Menu, {
            role: a,
            renderOnMount: s,
            rootCloseEvent: i,
            variant: c,
            children: n,
          }),
        ],
      });
    }
  );
Iw.displayName = "NavDropdown";
const Nc = Object.assign(Iw, {
    Item: Hr.Item,
    ItemText: Hr.ItemText,
    Divider: Hr.Divider,
    Header: Hr.Header,
  }),
  Lw = S.forwardRef(({ bsPrefix: e, className: t, as: n = "div", ...r }, o) => {
    const i = fe(e, "row"),
      a = r1(),
      l = o1(),
      u = `${i}-cols`,
      s = [];
    return (
      a.forEach((c) => {
        const f = r[c];
        delete r[c];
        let h;
        f != null && typeof f == "object" ? ({ cols: h } = f) : (h = f);
        const p = c !== l ? `-${c}` : "";
        h != null && s.push(`${u}${p}-${h}`);
      }),
      O.jsx(n, { ref: o, ...r, className: ie(t, i, ...s) })
    );
  });
Lw.displayName = "Row";
const Ap = Lw,
  Aw = S.forwardRef(
    (
      {
        bsPrefix: e,
        variant: t,
        animation: n = "border",
        size: r,
        as: o = "div",
        className: i,
        ...a
      },
      l
    ) => {
      e = fe(e, "spinner");
      const u = `${e}-${n}`;
      return O.jsx(o, {
        ref: l,
        ...a,
        className: ie(i, u, r && `${u}-${r}`, t && `text-${t}`),
      });
    }
  );
Aw.displayName = "Spinner";
const q2 = Aw;
var _w = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  gm = ne.createContext && ne.createContext(_w),
  mr =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (mr =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }
            return e;
          }),
        mr.apply(this, arguments)
      );
    },
  K2 =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
            (n[r[o]] = e[r[o]]);
      return n;
    };
function Fw(e) {
  return (
    e &&
    e.map(function (t, n) {
      return ne.createElement(t.tag, mr({ key: n }, t.attr), Fw(t.child));
    })
  );
}
function zw(e) {
  return function (t) {
    return ne.createElement(V2, mr({ attr: mr({}, e.attr) }, t), Fw(e.child));
  };
}
function V2(e) {
  var t = function (n) {
    var r = e.attr,
      o = e.size,
      i = e.title,
      a = K2(e, ["attr", "size", "title"]),
      l = o || n.size || "1em",
      u;
    return (
      n.className && (u = n.className),
      e.className && (u = (u ? u + " " : "") + e.className),
      ne.createElement(
        "svg",
        mr(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          a,
          {
            className: u,
            style: mr(mr({ color: e.color || n.color }, n.style), e.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i && ne.createElement("title", null, i),
        e.children
      )
    );
  };
  return gm !== void 0
    ? ne.createElement(gm.Consumer, null, function (n) {
        return t(n);
      })
    : t(_w);
}
function G2(e) {
  return zw({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z",
        },
      },
    ],
  })(e);
}
function Y2(e) {
  return zw({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z",
        },
      },
    ],
  })(e);
}
var tr = {},
  Uw = {};
const X2 = Vw(sb);
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var t = i(S),
    n = i(u1),
    r = X2,
    o = [
      "children",
      "onClick",
      "replace",
      "to",
      "state",
      "activeClassName",
      "className",
      "activeStyle",
      "style",
      "isActive",
    ];
  function i(y) {
    return y && y.__esModule ? y : { default: y };
  }
  function a(y, w) {
    var d = Object.keys(y);
    if (Object.getOwnPropertySymbols) {
      var v = Object.getOwnPropertySymbols(y);
      w &&
        (v = v.filter(function (m) {
          return Object.getOwnPropertyDescriptor(y, m).enumerable;
        })),
        d.push.apply(d, v);
    }
    return d;
  }
  function l(y) {
    for (var w = 1; w < arguments.length; w++) {
      var d = arguments[w] != null ? arguments[w] : {};
      w % 2
        ? a(Object(d), !0).forEach(function (v) {
            u(y, v, d[v]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(d))
        : a(Object(d)).forEach(function (v) {
            Object.defineProperty(y, v, Object.getOwnPropertyDescriptor(d, v));
          });
    }
    return y;
  }
  function u(y, w, d) {
    return (
      w in y
        ? Object.defineProperty(y, w, {
            value: d,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (y[w] = d),
      y
    );
  }
  function s(y) {
    "@babel/helpers - typeof";
    return (
      (s =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (w) {
              return typeof w;
            }
          : function (w) {
              return w &&
                typeof Symbol == "function" &&
                w.constructor === Symbol &&
                w !== Symbol.prototype
                ? "symbol"
                : typeof w;
            }),
      s(y)
    );
  }
  function c(y, w) {
    if (y == null) return {};
    var d = f(y, w),
      v,
      m;
    if (Object.getOwnPropertySymbols) {
      var x = Object.getOwnPropertySymbols(y);
      for (m = 0; m < x.length; m++)
        (v = x[m]),
          !(w.indexOf(v) >= 0) &&
            Object.prototype.propertyIsEnumerable.call(y, v) &&
            (d[v] = y[v]);
    }
    return d;
  }
  function f(y, w) {
    if (y == null) return {};
    var d = {},
      v = Object.keys(y),
      m,
      x;
    for (x = 0; x < v.length; x++)
      (m = v[x]), !(w.indexOf(m) >= 0) && (d[m] = y[m]);
    return d;
  }
  var h = function (w) {
      return !!(w.metaKey || w.altKey || w.ctrlKey || w.shiftKey);
    },
    p = function (w) {
      var d = w.children,
        v = w.onClick,
        m = w.replace,
        x = w.to,
        E = w.state,
        C = w.activeClassName,
        b = w.className,
        k = w.activeStyle,
        P = w.style,
        R = w.isActive,
        T = c(w, o),
        N = s(x) === "object" ? x.pathname || "" : x,
        M = (0, r.useNavigate)(),
        I = (0, r.useHref)(typeof x == "string" ? { pathname: x } : x),
        A = (0, r.useMatch)(N),
        z = (0, r.useLocation)(),
        B = t.default.Children.only(d),
        D = !!(R ? (typeof R == "function" ? R(A, z) : R) : A),
        _ = function (Q) {
          d.props.onClick && d.props.onClick(Q),
            v && v(Q),
            !Q.defaultPrevented &&
              Q.button === 0 &&
              !h(Q) &&
              (Q.preventDefault(), M(x, { replace: m, state: E }));
        };
      return t.default.cloneElement(
        B,
        l(
          l({}, T),
          {},
          {
            className: [b, B.props.className, D ? C : null].join(" ").trim(),
            style: D ? l(l({}, P), k) : P,
            href: I,
            onClick: _,
          }
        )
      );
    };
  (p.propTypes = {
    children: n.default.element.isRequired,
    onClick: n.default.func,
    replace: n.default.bool,
    to: n.default.oneOfType([n.default.string, n.default.object]).isRequired,
    state: n.default.object,
    className: n.default.string,
    activeClassName: n.default.string,
    style: n.default.objectOf(
      n.default.oneOfType([n.default.string, n.default.number])
    ),
    activeStyle: n.default.objectOf(
      n.default.oneOfType([n.default.string, n.default.number])
    ),
    isActive: n.default.oneOfType([n.default.func, n.default.bool]),
  }),
    (p.defaultProps = {
      replace: !1,
      activeClassName: "active",
      onClick: null,
      className: null,
      style: null,
      activeStyle: null,
      isActive: null,
    });
  var g = p;
  e.default = g;
})(Uw);
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    Object.defineProperty(e, "LinkContainer", {
      enumerable: !0,
      get: function () {
        return t.default;
      },
    });
  var t = n(Uw);
  function n(r) {
    return r && r.__esModule ? r : { default: r };
  }
})(tr);
const ml = "/api/users",
  J2 = Qi.injectEndpoints({
    endpoints: (e) => ({
      login: e.mutation({
        query: (t) => ({ url: `${ml}/auth`, method: "POST", body: t }),
      }),
      register: e.mutation({
        query: (t) => ({ url: `${ml}/register`, method: "POST", body: t }),
      }),
      sendLogout: e.mutation({
        query: () => ({ url: `${ml}/logout`, method: "POST" }),
        async onQueryStarted(t, { dispatch: n, queryFulfilled: r }) {
          try {
            await r, n(qk()), n(Qi.util.resetApiState());
          } catch {}
        },
      }),
      updateProfile: e.mutation({
        query: (t) => ({ url: `${ml}/profile`, method: "PUT", body: t }),
      }),
    }),
  }),
  {
    useLoginMutation: Z2,
    useRegisterMutation: eN,
    useSendLogoutMutation: tN,
    useUpdateProfileMutation: nN,
  } = J2,
  rN = () => {
    const { userInfo: e } = ao((i) => i.auth),
      [t] = tN(),
      n = io(),
      r = async () => {
        try {
          t(), n("/");
        } catch {}
      },
      o = () =>
        e
          ? O.jsxs(O.Fragment, {
              children: [
                O.jsx(tr.LinkContainer, {
                  to: "/dashboard",
                  children: O.jsx(hl.Link, { children: "Dashboard" }),
                }),
                O.jsxs(Nc, {
                  title: e.name,
                  id: "username",
                  children: [
                    O.jsx(tr.LinkContainer, {
                      to: "/profile",
                      children: O.jsx(Nc.Item, { children: "Profile" }),
                    }),
                    O.jsx(Nc.Item, { onClick: r, children: "Logout" }),
                  ],
                }),
              ],
            })
          : O.jsxs(O.Fragment, {
              children: [
                O.jsx(tr.LinkContainer, {
                  to: "/login",
                  children: O.jsxs(hl.Link, {
                    children: [O.jsx(G2, {}), " Sign In"],
                  }),
                }),
                O.jsx(tr.LinkContainer, {
                  to: "/register",
                  children: O.jsxs(hl.Link, {
                    children: [O.jsx(Y2, {}), " Sign Up"],
                  }),
                }),
              ],
            });
    return O.jsx("header", {
      children: O.jsx(vl, {
        bg: "dark",
        variant: "dark",
        expand: "lg",
        collapseOnSelect: !0,
        children: O.jsxs(ks, {
          children: [
            O.jsx(tr.LinkContainer, {
              to: "/",
              children: O.jsx(vl.Brand, { children: "MERN Auth" }),
            }),
            O.jsx(vl.Toggle, { "aria-controls": "basic-navbar-nav" }),
            O.jsx(vl.Collapse, {
              id: "basic-navbar-nav",
              children: O.jsx(hl, { className: "ms-auto", children: o() }),
            }),
          ],
        }),
      }),
    });
  };
function Bw(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Bw(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function ir() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Bw(e)) && (r && (r += " "), (r += t));
  return r;
}
const Ki = (e) => typeof e == "number" && !isNaN(e),
  no = (e) => typeof e == "string",
  ht = (e) => typeof e == "function",
  Il = (e) => (no(e) || ht(e) ? e : null),
  Mc = (e) => S.isValidElement(e) || no(e) || ht(e) || Ki(e);
function oN(e, t, n) {
  n === void 0 && (n = 300);
  const { scrollHeight: r, style: o } = e;
  requestAnimationFrame(() => {
    (o.minHeight = "initial"),
      (o.height = r + "px"),
      (o.transition = `all ${n}ms`),
      requestAnimationFrame(() => {
        (o.height = "0"), (o.padding = "0"), (o.margin = "0"), setTimeout(t, n);
      });
  });
}
function Rs(e) {
  let {
    enter: t,
    exit: n,
    appendPosition: r = !1,
    collapse: o = !0,
    collapseDuration: i = 300,
  } = e;
  return function (a) {
    let {
      children: l,
      position: u,
      preventExitTransition: s,
      done: c,
      nodeRef: f,
      isIn: h,
    } = a;
    const p = r ? `${t}--${u}` : t,
      g = r ? `${n}--${u}` : n,
      y = S.useRef(0);
    return (
      S.useLayoutEffect(() => {
        const w = f.current,
          d = p.split(" "),
          v = (m) => {
            m.target === f.current &&
              (w.dispatchEvent(new Event("d")),
              w.removeEventListener("animationend", v),
              w.removeEventListener("animationcancel", v),
              y.current === 0 &&
                m.type !== "animationcancel" &&
                w.classList.remove(...d));
          };
        w.classList.add(...d),
          w.addEventListener("animationend", v),
          w.addEventListener("animationcancel", v);
      }, []),
      S.useEffect(() => {
        const w = f.current,
          d = () => {
            w.removeEventListener("animationend", d), o ? oN(w, c, i) : c();
          };
        h ||
          (s
            ? d()
            : ((y.current = 1),
              (w.className += ` ${g}`),
              w.addEventListener("animationend", d)));
      }, [h]),
      ne.createElement(ne.Fragment, null, l)
    );
  };
}
function wm(e, t) {
  return e != null
    ? {
        content: e.content,
        containerId: e.props.containerId,
        id: e.props.toastId,
        theme: e.props.theme,
        type: e.props.type,
        data: e.props.data || {},
        isLoading: e.props.isLoading,
        icon: e.props.icon,
        status: t,
      }
    : {};
}
const _t = {
    list: new Map(),
    emitQueue: new Map(),
    on(e, t) {
      return (
        this.list.has(e) || this.list.set(e, []), this.list.get(e).push(t), this
      );
    },
    off(e, t) {
      if (t) {
        const n = this.list.get(e).filter((r) => r !== t);
        return this.list.set(e, n), this;
      }
      return this.list.delete(e), this;
    },
    cancelEmit(e) {
      const t = this.emitQueue.get(e);
      return t && (t.forEach(clearTimeout), this.emitQueue.delete(e)), this;
    },
    emit(e) {
      this.list.has(e) &&
        this.list.get(e).forEach((t) => {
          const n = setTimeout(() => {
            t(...[].slice.call(arguments, 1));
          }, 0);
          this.emitQueue.has(e) || this.emitQueue.set(e, []),
            this.emitQueue.get(e).push(n);
        });
    },
  },
  yl = (e) => {
    let { theme: t, type: n, ...r } = e;
    return ne.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "100%",
      height: "100%",
      fill:
        t === "colored" ? "currentColor" : `var(--toastify-icon-color-${n})`,
      ...r,
    });
  },
  Dc = {
    info: function (e) {
      return ne.createElement(
        yl,
        { ...e },
        ne.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
        })
      );
    },
    warning: function (e) {
      return ne.createElement(
        yl,
        { ...e },
        ne.createElement("path", {
          d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
        })
      );
    },
    success: function (e) {
      return ne.createElement(
        yl,
        { ...e },
        ne.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
        })
      );
    },
    error: function (e) {
      return ne.createElement(
        yl,
        { ...e },
        ne.createElement("path", {
          d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
        })
      );
    },
    spinner: function () {
      return ne.createElement("div", { className: "Toastify__spinner" });
    },
  };
function iN(e) {
  const [, t] = S.useReducer((p) => p + 1, 0),
    [n, r] = S.useState([]),
    o = S.useRef(null),
    i = S.useRef(new Map()).current,
    a = (p) => n.indexOf(p) !== -1,
    l = S.useRef({
      toastKey: 1,
      displayedToast: 0,
      count: 0,
      queue: [],
      props: e,
      containerId: null,
      isToastActive: a,
      getToast: (p) => i.get(p),
    }).current;
  function u(p) {
    let { containerId: g } = p;
    const { limit: y } = l.props;
    !y ||
      (g && l.containerId !== g) ||
      ((l.count -= l.queue.length), (l.queue = []));
  }
  function s(p) {
    r((g) => (p == null ? [] : g.filter((y) => y !== p)));
  }
  function c() {
    const { toastContent: p, toastProps: g, staleId: y } = l.queue.shift();
    h(p, g, y);
  }
  function f(p, g) {
    let { delay: y, staleId: w, ...d } = g;
    if (
      !Mc(p) ||
      (function (N) {
        return (
          !o.current ||
          (l.props.enableMultiContainer &&
            N.containerId !== l.props.containerId) ||
          (i.has(N.toastId) && N.updateId == null)
        );
      })(d)
    )
      return;
    const { toastId: v, updateId: m, data: x } = d,
      { props: E } = l,
      C = () => s(v),
      b = m == null;
    b && l.count++;
    const k = {
      ...E,
      style: E.toastStyle,
      key: l.toastKey++,
      ...Object.fromEntries(
        Object.entries(d).filter((N) => {
          let [M, I] = N;
          return I != null;
        })
      ),
      toastId: v,
      updateId: m,
      data: x,
      closeToast: C,
      isIn: !1,
      className: Il(d.className || E.toastClassName),
      bodyClassName: Il(d.bodyClassName || E.bodyClassName),
      progressClassName: Il(d.progressClassName || E.progressClassName),
      autoClose:
        !d.isLoading &&
        ((P = d.autoClose),
        (R = E.autoClose),
        P === !1 || (Ki(P) && P > 0) ? P : R),
      deleteToast() {
        const N = wm(i.get(v), "removed");
        i.delete(v), _t.emit(4, N);
        const M = l.queue.length;
        if (
          ((l.count = v == null ? l.count - l.displayedToast : l.count - 1),
          l.count < 0 && (l.count = 0),
          M > 0)
        ) {
          const I = v == null ? l.props.limit : 1;
          if (M === 1 || I === 1) l.displayedToast++, c();
          else {
            const A = I > M ? M : I;
            l.displayedToast = A;
            for (let z = 0; z < A; z++) c();
          }
        } else t();
      },
    };
    var P, R;
    (k.iconOut = (function (N) {
      let { theme: M, type: I, isLoading: A, icon: z } = N,
        B = null;
      const D = { theme: M, type: I };
      return (
        z === !1 ||
          (ht(z)
            ? (B = z(D))
            : S.isValidElement(z)
            ? (B = S.cloneElement(z, D))
            : no(z) || Ki(z)
            ? (B = z)
            : A
            ? (B = Dc.spinner())
            : ((_) => _ in Dc)(I) && (B = Dc[I](D))),
        B
      );
    })(k)),
      ht(d.onOpen) && (k.onOpen = d.onOpen),
      ht(d.onClose) && (k.onClose = d.onClose),
      (k.closeButton = E.closeButton),
      d.closeButton === !1 || Mc(d.closeButton)
        ? (k.closeButton = d.closeButton)
        : d.closeButton === !0 &&
          (k.closeButton = !Mc(E.closeButton) || E.closeButton);
    let T = p;
    S.isValidElement(p) && !no(p.type)
      ? (T = S.cloneElement(p, { closeToast: C, toastProps: k, data: x }))
      : ht(p) && (T = p({ closeToast: C, toastProps: k, data: x })),
      E.limit && E.limit > 0 && l.count > E.limit && b
        ? l.queue.push({ toastContent: T, toastProps: k, staleId: w })
        : Ki(y)
        ? setTimeout(() => {
            h(T, k, w);
          }, y)
        : h(T, k, w);
  }
  function h(p, g, y) {
    const { toastId: w } = g;
    y && i.delete(y);
    const d = { content: p, props: g };
    i.set(w, d),
      r((v) => [...v, w].filter((m) => m !== y)),
      _t.emit(4, wm(d, d.props.updateId == null ? "added" : "updated"));
  }
  return (
    S.useEffect(
      () => (
        (l.containerId = e.containerId),
        _t
          .cancelEmit(3)
          .on(0, f)
          .on(1, (p) => o.current && s(p))
          .on(5, u)
          .emit(2, l),
        () => {
          i.clear(), _t.emit(3, l);
        }
      ),
      []
    ),
    S.useEffect(() => {
      (l.props = e), (l.isToastActive = a), (l.displayedToast = n.length);
    }),
    {
      getToastToRender: function (p) {
        const g = new Map(),
          y = Array.from(i.values());
        return (
          e.newestOnTop && y.reverse(),
          y.forEach((w) => {
            const { position: d } = w.props;
            g.has(d) || g.set(d, []), g.get(d).push(w);
          }),
          Array.from(g, (w) => p(w[0], w[1]))
        );
      },
      containerRef: o,
      isToastActive: a,
    }
  );
}
function Sm(e) {
  return e.targetTouches && e.targetTouches.length >= 1
    ? e.targetTouches[0].clientX
    : e.clientX;
}
function xm(e) {
  return e.targetTouches && e.targetTouches.length >= 1
    ? e.targetTouches[0].clientY
    : e.clientY;
}
function aN(e) {
  const [t, n] = S.useState(!1),
    [r, o] = S.useState(!1),
    i = S.useRef(null),
    a = S.useRef({
      start: 0,
      x: 0,
      y: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      boundingRect: null,
      didMove: !1,
    }).current,
    l = S.useRef(e),
    {
      autoClose: u,
      pauseOnHover: s,
      closeToast: c,
      onClick: f,
      closeOnClick: h,
    } = e;
  function p(x) {
    if (e.draggable) {
      x.nativeEvent.type === "touchstart" && x.nativeEvent.preventDefault(),
        (a.didMove = !1),
        document.addEventListener("mousemove", d),
        document.addEventListener("mouseup", v),
        document.addEventListener("touchmove", d),
        document.addEventListener("touchend", v);
      const E = i.current;
      (a.canCloseOnClick = !0),
        (a.canDrag = !0),
        (a.boundingRect = E.getBoundingClientRect()),
        (E.style.transition = ""),
        (a.x = Sm(x.nativeEvent)),
        (a.y = xm(x.nativeEvent)),
        e.draggableDirection === "x"
          ? ((a.start = a.x),
            (a.removalDistance = E.offsetWidth * (e.draggablePercent / 100)))
          : ((a.start = a.y),
            (a.removalDistance =
              E.offsetHeight *
              (e.draggablePercent === 80
                ? 1.5 * e.draggablePercent
                : e.draggablePercent / 100)));
    }
  }
  function g(x) {
    if (a.boundingRect) {
      const { top: E, bottom: C, left: b, right: k } = a.boundingRect;
      x.nativeEvent.type !== "touchend" &&
      e.pauseOnHover &&
      a.x >= b &&
      a.x <= k &&
      a.y >= E &&
      a.y <= C
        ? w()
        : y();
    }
  }
  function y() {
    n(!0);
  }
  function w() {
    n(!1);
  }
  function d(x) {
    const E = i.current;
    a.canDrag &&
      E &&
      ((a.didMove = !0),
      t && w(),
      (a.x = Sm(x)),
      (a.y = xm(x)),
      (a.delta = e.draggableDirection === "x" ? a.x - a.start : a.y - a.start),
      a.start !== a.x && (a.canCloseOnClick = !1),
      (E.style.transform = `translate${e.draggableDirection}(${a.delta}px)`),
      (E.style.opacity = "" + (1 - Math.abs(a.delta / a.removalDistance))));
  }
  function v() {
    document.removeEventListener("mousemove", d),
      document.removeEventListener("mouseup", v),
      document.removeEventListener("touchmove", d),
      document.removeEventListener("touchend", v);
    const x = i.current;
    if (a.canDrag && a.didMove && x) {
      if (((a.canDrag = !1), Math.abs(a.delta) > a.removalDistance))
        return o(!0), void e.closeToast();
      (x.style.transition = "transform 0.2s, opacity 0.2s"),
        (x.style.transform = `translate${e.draggableDirection}(0)`),
        (x.style.opacity = "1");
    }
  }
  S.useEffect(() => {
    l.current = e;
  }),
    S.useEffect(
      () => (
        i.current && i.current.addEventListener("d", y, { once: !0 }),
        ht(e.onOpen) &&
          e.onOpen(S.isValidElement(e.children) && e.children.props),
        () => {
          const x = l.current;
          ht(x.onClose) &&
            x.onClose(S.isValidElement(x.children) && x.children.props);
        }
      ),
      []
    ),
    S.useEffect(
      () => (
        e.pauseOnFocusLoss &&
          (document.hasFocus() || w(),
          window.addEventListener("focus", y),
          window.addEventListener("blur", w)),
        () => {
          e.pauseOnFocusLoss &&
            (window.removeEventListener("focus", y),
            window.removeEventListener("blur", w));
        }
      ),
      [e.pauseOnFocusLoss]
    );
  const m = { onMouseDown: p, onTouchStart: p, onMouseUp: g, onTouchEnd: g };
  return (
    u && s && ((m.onMouseEnter = w), (m.onMouseLeave = y)),
    h &&
      (m.onClick = (x) => {
        f && f(x), a.canCloseOnClick && c();
      }),
    {
      playToast: y,
      pauseToast: w,
      isRunning: t,
      preventExitTransition: r,
      toastRef: i,
      eventHandlers: m,
    }
  );
}
function Qw(e) {
  let { closeToast: t, theme: n, ariaLabel: r = "close" } = e;
  return ne.createElement(
    "button",
    {
      className: `Toastify__close-button Toastify__close-button--${n}`,
      type: "button",
      onClick: (o) => {
        o.stopPropagation(), t(o);
      },
      "aria-label": r,
    },
    ne.createElement(
      "svg",
      { "aria-hidden": "true", viewBox: "0 0 14 16" },
      ne.createElement("path", {
        fillRule: "evenodd",
        d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
      })
    )
  );
}
function lN(e) {
  let {
    delay: t,
    isRunning: n,
    closeToast: r,
    type: o = "default",
    hide: i,
    className: a,
    style: l,
    controlledProgress: u,
    progress: s,
    rtl: c,
    isIn: f,
    theme: h,
  } = e;
  const p = i || (u && s === 0),
    g = {
      ...l,
      animationDuration: `${t}ms`,
      animationPlayState: n ? "running" : "paused",
      opacity: p ? 0 : 1,
    };
  u && (g.transform = `scaleX(${s})`);
  const y = ir(
      "Toastify__progress-bar",
      u
        ? "Toastify__progress-bar--controlled"
        : "Toastify__progress-bar--animated",
      `Toastify__progress-bar-theme--${h}`,
      `Toastify__progress-bar--${o}`,
      { "Toastify__progress-bar--rtl": c }
    ),
    w = ht(a) ? a({ rtl: c, type: o, defaultClassName: y }) : ir(y, a);
  return ne.createElement("div", {
    role: "progressbar",
    "aria-hidden": p ? "true" : "false",
    "aria-label": "notification timer",
    className: w,
    style: g,
    [u && s >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
      u && s < 1
        ? null
        : () => {
            f && r();
          },
  });
}
const uN = (e) => {
    const {
        isRunning: t,
        preventExitTransition: n,
        toastRef: r,
        eventHandlers: o,
      } = aN(e),
      {
        closeButton: i,
        children: a,
        autoClose: l,
        onClick: u,
        type: s,
        hideProgressBar: c,
        closeToast: f,
        transition: h,
        position: p,
        className: g,
        style: y,
        bodyClassName: w,
        bodyStyle: d,
        progressClassName: v,
        progressStyle: m,
        updateId: x,
        role: E,
        progress: C,
        rtl: b,
        toastId: k,
        deleteToast: P,
        isIn: R,
        isLoading: T,
        iconOut: N,
        closeOnClick: M,
        theme: I,
      } = e,
      A = ir(
        "Toastify__toast",
        `Toastify__toast-theme--${I}`,
        `Toastify__toast--${s}`,
        { "Toastify__toast--rtl": b },
        { "Toastify__toast--close-on-click": M }
      ),
      z = ht(g)
        ? g({ rtl: b, position: p, type: s, defaultClassName: A })
        : ir(A, g),
      B = !!C || !l,
      D = { closeToast: f, type: s, theme: I };
    let _ = null;
    return (
      i === !1 ||
        (_ = ht(i) ? i(D) : S.isValidElement(i) ? S.cloneElement(i, D) : Qw(D)),
      ne.createElement(
        h,
        { isIn: R, done: P, position: p, preventExitTransition: n, nodeRef: r },
        ne.createElement(
          "div",
          { id: k, onClick: u, className: z, ...o, style: y, ref: r },
          ne.createElement(
            "div",
            {
              ...(R && { role: E }),
              className: ht(w) ? w({ type: s }) : ir("Toastify__toast-body", w),
              style: d,
            },
            N != null &&
              ne.createElement(
                "div",
                {
                  className: ir("Toastify__toast-icon", {
                    "Toastify--animate-icon Toastify__zoom-enter": !T,
                  }),
                },
                N
              ),
            ne.createElement("div", null, a)
          ),
          _,
          ne.createElement(lN, {
            ...(x && !B ? { key: `pb-${x}` } : {}),
            rtl: b,
            theme: I,
            delay: l,
            isRunning: t,
            isIn: R,
            closeToast: f,
            hide: c,
            type: s,
            style: m,
            className: v,
            controlledProgress: B,
            progress: C || 0,
          })
        )
      )
    );
  },
  Os = function (e, t) {
    return (
      t === void 0 && (t = !1),
      {
        enter: `Toastify--animate Toastify__${e}-enter`,
        exit: `Toastify--animate Toastify__${e}-exit`,
        appendPosition: t,
      }
    );
  },
  sN = Rs(Os("bounce", !0));
Rs(Os("slide", !0));
Rs(Os("zoom"));
Rs(Os("flip"));
const Vf = S.forwardRef((e, t) => {
  const { getToastToRender: n, containerRef: r, isToastActive: o } = iN(e),
    { className: i, style: a, rtl: l, containerId: u } = e;
  function s(c) {
    const f = ir(
      "Toastify__toast-container",
      `Toastify__toast-container--${c}`,
      { "Toastify__toast-container--rtl": l }
    );
    return ht(i)
      ? i({ position: c, rtl: l, defaultClassName: f })
      : ir(f, Il(i));
  }
  return (
    S.useEffect(() => {
      t && (t.current = r.current);
    }, []),
    ne.createElement(
      "div",
      { ref: r, className: "Toastify", id: u },
      n((c, f) => {
        const h = f.length ? { ...a } : { ...a, pointerEvents: "none" };
        return ne.createElement(
          "div",
          { className: s(c), style: h, key: `container-${c}` },
          f.map((p, g) => {
            let { content: y, props: w } = p;
            return ne.createElement(
              uN,
              {
                ...w,
                isIn: o(w.toastId),
                style: { ...w.style, "--nth": g + 1, "--len": f.length },
                key: `toast-${w.key}`,
              },
              y
            );
          })
        );
      })
    )
  );
});
(Vf.displayName = "ToastContainer"),
  (Vf.defaultProps = {
    position: "top-right",
    transition: sN,
    autoClose: 5e3,
    closeButton: Qw,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    closeOnClick: !0,
    draggable: !0,
    draggablePercent: 80,
    draggableDirection: "x",
    role: "alert",
    theme: "light",
  });
let $c,
  Lr = new Map(),
  Ti = [],
  cN = 1;
function Hw() {
  return "" + cN++;
}
function fN(e) {
  return e && (no(e.toastId) || Ki(e.toastId)) ? e.toastId : Hw();
}
function Vi(e, t) {
  return (
    Lr.size > 0 ? _t.emit(0, e, t) : Ti.push({ content: e, options: t }),
    t.toastId
  );
}
function Ru(e, t) {
  return { ...t, type: (t && t.type) || e, toastId: fN(t) };
}
function gl(e) {
  return (t, n) => Vi(t, Ru(e, n));
}
function ye(e, t) {
  return Vi(e, Ru("default", t));
}
(ye.loading = (e, t) =>
  Vi(
    e,
    Ru("default", {
      isLoading: !0,
      autoClose: !1,
      closeOnClick: !1,
      closeButton: !1,
      draggable: !1,
      ...t,
    })
  )),
  (ye.promise = function (e, t, n) {
    let r,
      { pending: o, error: i, success: a } = t;
    o && (r = no(o) ? ye.loading(o, n) : ye.loading(o.render, { ...n, ...o }));
    const l = {
        isLoading: null,
        autoClose: null,
        closeOnClick: null,
        closeButton: null,
        draggable: null,
      },
      u = (c, f, h) => {
        if (f == null) return void ye.dismiss(r);
        const p = { type: c, ...l, ...n, data: h },
          g = no(f) ? { render: f } : f;
        return (
          r ? ye.update(r, { ...p, ...g }) : ye(g.render, { ...p, ...g }), h
        );
      },
      s = ht(e) ? e() : e;
    return s.then((c) => u("success", a, c)).catch((c) => u("error", i, c)), s;
  }),
  (ye.success = gl("success")),
  (ye.info = gl("info")),
  (ye.error = gl("error")),
  (ye.warning = gl("warning")),
  (ye.warn = ye.warning),
  (ye.dark = (e, t) => Vi(e, Ru("default", { theme: "dark", ...t }))),
  (ye.dismiss = (e) => {
    Lr.size > 0
      ? _t.emit(1, e)
      : (Ti = Ti.filter((t) => e != null && t.options.toastId !== e));
  }),
  (ye.clearWaitingQueue = function (e) {
    return e === void 0 && (e = {}), _t.emit(5, e);
  }),
  (ye.isActive = (e) => {
    let t = !1;
    return (
      Lr.forEach((n) => {
        n.isToastActive && n.isToastActive(e) && (t = !0);
      }),
      t
    );
  }),
  (ye.update = function (e, t) {
    t === void 0 && (t = {}),
      setTimeout(() => {
        const n = (function (r, o) {
          let { containerId: i } = o;
          const a = Lr.get(i || $c);
          return a && a.getToast(r);
        })(e, t);
        if (n) {
          const { props: r, content: o } = n,
            i = {
              delay: 100,
              ...r,
              ...t,
              toastId: t.toastId || e,
              updateId: Hw(),
            };
          i.toastId !== e && (i.staleId = e);
          const a = i.render || o;
          delete i.render, Vi(a, i);
        }
      }, 0);
  }),
  (ye.done = (e) => {
    ye.update(e, { progress: 1 });
  }),
  (ye.onChange = (e) => (
    _t.on(4, e),
    () => {
      _t.off(4, e);
    }
  )),
  (ye.POSITION = {
    TOP_LEFT: "top-left",
    TOP_RIGHT: "top-right",
    TOP_CENTER: "top-center",
    BOTTOM_LEFT: "bottom-left",
    BOTTOM_RIGHT: "bottom-right",
    BOTTOM_CENTER: "bottom-center",
  }),
  (ye.TYPE = {
    INFO: "info",
    SUCCESS: "success",
    WARNING: "warning",
    ERROR: "error",
    DEFAULT: "default",
  }),
  _t
    .on(2, (e) => {
      ($c = e.containerId || e),
        Lr.set($c, e),
        Ti.forEach((t) => {
          _t.emit(0, t.content, t.options);
        }),
        (Ti = []);
    })
    .on(3, (e) => {
      Lr.delete(e.containerId || e), Lr.size === 0 && _t.off(0).off(1).off(5);
    });
const dN = () =>
  O.jsxs(O.Fragment, {
    children: [
      O.jsx(rN, {}),
      O.jsx(Vf, {}),
      O.jsx(ks, { children: O.jsx(Yd, {}) }),
    ],
  });
const Ww = () => {
    const { userInfo: e } = ao((t) => t.auth);
    return O.jsx("div", {
      className: " py-5",
      children: O.jsx(ks, {
        className: "d-flex justify-content-center",
        children: O.jsx(JO, {
          className:
            "p-5 d-flex flex-column align-items-center hero-card bg-light w-75",
          children: e
            ? O.jsxs("h1", {
                className: "text-center mb-4",
                children: ["Welcome ", e == null ? void 0 : e.name],
              })
            : O.jsxs(O.Fragment, {
                children: [
                  O.jsx("h1", {
                    className: "text-center mb-4",
                    children: "MERN Authentication",
                  }),
                  O.jsx("p", {
                    className: "text-center mb-4",
                    children:
                      "This is a boilerplate for MERN authentication that stores a JWT in an HTTP-Only cookie. It also uses Redux Toolkit and the React Bootstrap library",
                  }),
                  O.jsxs("div", {
                    className: "d-flex",
                    children: [
                      O.jsx(tr.LinkContainer, {
                        to: "/login",
                        children: O.jsx(Ko, {
                          variant: "primary",
                          className: "me-3",
                          children: "Sign In",
                        }),
                      }),
                      O.jsx(tr.LinkContainer, {
                        to: "/register",
                        children: O.jsx(Ko, {
                          variant: "secondary",
                          children: "Register",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
        }),
      }),
    });
  },
  pN = () => O.jsx(Ww, {}),
  hN = () => O.jsx("div", { children: "AboutScreen" }),
  _p = ({ children: e }) =>
    O.jsx(ks, {
      children: O.jsx(Ap, {
        className: "justify-content-md-center mt-5",
        children: O.jsx(Es, {
          xs: 12,
          md: 6,
          className: "card p-5",
          children: e,
        }),
      }),
    }),
  Fp = () =>
    O.jsx(q2, {
      animation: "border",
      role: "status",
      style: { width: "15px", height: "15px" },
    }),
  vN = () => {
    const [e, t] = S.useState(""),
      [n, r] = S.useState(""),
      o = io(),
      i = hs(),
      [a, { isLoading: l }] = Z2(),
      { userInfo: u } = ao((f) => f.auth),
      s = async () => {
        var f;
        try {
          const h = await a({ email: e, password: n }).unwrap();
          i(hp({ ...h })), o("/dashboard");
        } catch (h) {
          ye.error(
            ((f = h == null ? void 0 : h.data) == null ? void 0 : f.message) ||
              "Invalid login"
          );
        }
      },
      c = async (f) => {
        f.preventDefault(), s();
      };
    return (
      S.useEffect(() => {
        u && o("/dashboard");
      }, [o, u]),
      O.jsxs(_p, {
        children: [
          O.jsx("h1", { children: "Sign In" }),
          O.jsxs(se, {
            onSubmit: c,
            children: [
              O.jsxs(se.Group, {
                className: "my-2",
                controlId: "email",
                children: [
                  O.jsx(se.Label, { children: "Email Address" }),
                  O.jsx(se.Control, {
                    type: "email",
                    placeholder: "Enter Email",
                    value: e,
                    onChange: (f) => t(f.target.value),
                  }),
                ],
              }),
              O.jsxs(se.Group, {
                className: "my-2",
                controlId: "password",
                children: [
                  O.jsx(se.Label, { children: "Password" }),
                  O.jsx(se.Control, {
                    type: "password",
                    placeholder: "Enter Password",
                    value: n,
                    onChange: (f) => r(f.target.value),
                  }),
                ],
              }),
              O.jsx(Ko, {
                type: "submit",
                variant: "primary",
                className: "mt-3",
                children: l ? O.jsx(Fp, {}) : "Sign In",
              }),
              O.jsx(Ap, {
                className: "py-3",
                children: O.jsxs(Es, {
                  children: [
                    "New Customer? ",
                    O.jsx(qu, { to: "/register", children: " Register" }),
                  ],
                }),
              }),
            ],
          }),
        ],
      })
    );
  },
  mN = () => {
    const [e, t] = S.useState(""),
      [n, r] = S.useState(""),
      [o, i] = S.useState(""),
      [a, l] = S.useState(""),
      u = io(),
      s = hs(),
      [c, { isLoading: f }] = eN(),
      { userInfo: h } = ao((y) => y.auth),
      p = async () => {
        var y;
        try {
          const w = await c({ name: e, email: n, password: o }).unwrap();
          s(hp({ ...w })), u("/dashboard");
        } catch (w) {
          ye.error(
            ((y = w == null ? void 0 : w.data) == null ? void 0 : y.message) ||
              "Invalid login"
          );
        }
      },
      g = async (y) => {
        y.preventDefault(),
          o !== a ? ye.error("Password is not matching!") : p();
      };
    return (
      S.useEffect(() => {
        h && u("/dashboard");
      }, [u, h]),
      O.jsxs(_p, {
        children: [
          O.jsx("h1", { children: "Sign Up" }),
          O.jsxs(se, {
            onSubmit: g,
            children: [
              O.jsxs(se.Group, {
                className: "my-2",
                controlId: "name",
                children: [
                  O.jsx(se.Label, { children: "Name" }),
                  O.jsx(se.Control, {
                    type: "name",
                    placeholder: "Enter Name",
                    value: e,
                    onChange: (y) => t(y.target.value),
                  }),
                ],
              }),
              O.jsxs(se.Group, {
                className: "my-2",
                controlId: "email",
                children: [
                  O.jsx(se.Label, { children: "Email Address" }),
                  O.jsx(se.Control, {
                    type: "email",
                    placeholder: "Enter Email",
                    value: n,
                    onChange: (y) => r(y.target.value),
                  }),
                ],
              }),
              O.jsxs(se.Group, {
                className: "my-2",
                controlId: "password",
                children: [
                  O.jsx(se.Label, { children: "Password" }),
                  O.jsx(se.Control, {
                    type: "password",
                    placeholder: "Enter Password",
                    value: o,
                    onChange: (y) => i(y.target.value),
                  }),
                ],
              }),
              O.jsxs(se.Group, {
                className: "my-2",
                controlId: "confirmPassword",
                children: [
                  O.jsx(se.Label, { children: "Confirm Password" }),
                  O.jsx(se.Control, {
                    type: "password",
                    placeholder: "Confirm Password",
                    value: a,
                    onChange: (y) => l(y.target.value),
                  }),
                ],
              }),
              O.jsx(Ko, {
                type: "submit",
                variant: "primary",
                className: "mt-3",
                children: f ? O.jsx(Fp, {}) : "Sign Up",
              }),
              O.jsx(Ap, {
                className: "py-3",
                children: O.jsxs(Es, {
                  children: [
                    "Already have an account? ",
                    O.jsx(qu, { to: "/login", children: " Login" }),
                  ],
                }),
              }),
            ],
          }),
        ],
      })
    );
  },
  yN = () => {
    const [e, t] = S.useState(""),
      [n, r] = S.useState(""),
      [o, i] = S.useState(""),
      [a, l] = S.useState(""),
      u = hs(),
      { userInfo: s } = ao((g) => g.auth),
      [c, { isLoading: f }] = nN(),
      h = async () => {
        var g;
        try {
          const y = await c({
            _id: s._id,
            name: e,
            email: n,
            password: o,
          }).unwrap();
          u(hp({ ...y }));
        } catch (y) {
          ye.error(
            ((g = y == null ? void 0 : y.data) == null ? void 0 : g.message) ||
              "Invalid login"
          );
        }
      },
      p = async (g) => {
        g.preventDefault(),
          o !== a ? ye.error("Password is not matching!") : h();
      };
    return (
      S.useEffect(() => {
        t(s.name), r(s.email);
      }, [s.email, s.name]),
      O.jsxs(_p, {
        children: [
          O.jsx("h1", { children: "Update Profile" }),
          O.jsxs(se, {
            onSubmit: p,
            children: [
              O.jsxs(se.Group, {
                className: "my-2",
                controlId: "name",
                children: [
                  O.jsx(se.Label, { children: "Name" }),
                  O.jsx(se.Control, {
                    type: "name",
                    placeholder: "Enter Name",
                    value: e,
                    onChange: (g) => t(g.target.value),
                  }),
                ],
              }),
              O.jsxs(se.Group, {
                className: "my-2",
                controlId: "email",
                children: [
                  O.jsx(se.Label, { children: "Email Address" }),
                  O.jsx(se.Control, {
                    type: "email",
                    placeholder: "Enter Email",
                    value: n,
                    onChange: (g) => r(g.target.value),
                  }),
                ],
              }),
              O.jsxs(se.Group, {
                className: "my-2",
                controlId: "password",
                children: [
                  O.jsx(se.Label, { children: "Password" }),
                  O.jsx(se.Control, {
                    type: "password",
                    placeholder: "Enter Password",
                    value: o,
                    onChange: (g) => i(g.target.value),
                  }),
                ],
              }),
              O.jsxs(se.Group, {
                className: "my-2",
                controlId: "confirmPassword",
                children: [
                  O.jsx(se.Label, { children: "Confirm Password" }),
                  O.jsx(se.Control, {
                    type: "password",
                    placeholder: "Confirm Password",
                    value: a,
                    onChange: (g) => l(g.target.value),
                  }),
                ],
              }),
              O.jsx(Ko, {
                type: "submit",
                variant: "primary",
                className: "mt-3",
                children: f ? O.jsx(Fp, {}) : "Update",
              }),
            ],
          }),
        ],
      })
    );
  },
  gN = () => O.jsx(Ww, {}),
  wN = () => {
    const { userInfo: e } = ao((t) => t.auth);
    return e ? O.jsx(Yd, {}) : O.jsx(c0, { to: "/login", replace: !0 });
  },
  SN = f0(
    Ho(
      O.jsxs(dn, {
        path: "/*",
        element: O.jsx(dN, {}),
        children: [
          O.jsx(dn, { index: !0, element: O.jsx(pN, {}) }),
          O.jsx(dn, { path: "about", element: O.jsx(hN, {}) }),
          O.jsx(dn, { path: "login", element: O.jsx(vN, {}) }),
          O.jsx(dn, { path: "register", element: O.jsx(mN, {}) }),
          O.jsxs(dn, {
            element: O.jsx(wN, {}),
            children: [
              O.jsx(dn, { path: "profile", element: O.jsx(yN, {}) }),
              O.jsx(dn, { path: "dashboard", element: O.jsx(gN, {}) }),
            ],
          }),
        ],
      })
    )
  );
zr.createRoot(document.getElementById("root")).render(
  O.jsx(ne.StrictMode, {
    children: O.jsx(Xb, { store: QR, children: O.jsx(s0, { router: SN }) }),
  })
);
