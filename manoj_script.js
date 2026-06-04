(function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const T of document.querySelectorAll('link[rel="modulepreload"]')) r(T);
  new MutationObserver((T) => {
    for (const _ of T)
      if (_.type === "childList")
        for (const w of _.addedNodes)
          w.tagName === "LINK" && w.rel === "modulepreload" && r(w);
  }).observe(document, { childList: !0, subtree: !0 });
  function S(T) {
    const _ = {};
    return (
      T.integrity && (_.integrity = T.integrity),
      T.referrerPolicy && (_.referrerPolicy = T.referrerPolicy),
      T.crossOrigin === "use-credentials"
        ? (_.credentials = "include")
        : T.crossOrigin === "anonymous"
          ? (_.credentials = "omit")
          : (_.credentials = "same-origin"),
      _
    );
  }
  function r(T) {
    if (T.ep) return;
    T.ep = !0;
    const _ = S(T);
    fetch(T.href, _);
  }
})();
function bh(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default")
    ? h.default
    : h;
}
var hs = { exports: {} },
  Nn = {};
var Ed;
function Sh() {
  if (Ed) return Nn;
  Ed = 1;
  var h = Symbol.for("react.transitional.element"),
    o = Symbol.for("react.fragment");
  function S(r, T, _) {
    var w = null;
    if (
      (_ !== void 0 && (w = "" + _),
      T.key !== void 0 && (w = "" + T.key),
      "key" in T)
    ) {
      _ = {};
      for (var D in T) D !== "key" && (_[D] = T[D]);
    } else _ = T;
    return (
      (T = _.ref),
      { $$typeof: h, type: r, key: w, ref: T !== void 0 ? T : null, props: _ }
    );
  }
  return ((Nn.Fragment = o), (Nn.jsx = S), (Nn.jsxs = S), Nn);
}
var Td;
function jh() {
  return (Td || ((Td = 1), (hs.exports = Sh())), hs.exports);
}
var c = jh(),
  ys = { exports: {} },
  Z = {};
var Md;
function zh() {
  if (Md) return Z;
  Md = 1;
  var h = Symbol.for("react.transitional.element"),
    o = Symbol.for("react.portal"),
    S = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    T = Symbol.for("react.profiler"),
    _ = Symbol.for("react.consumer"),
    w = Symbol.for("react.context"),
    D = Symbol.for("react.forward_ref"),
    E = Symbol.for("react.suspense"),
    v = Symbol.for("react.memo"),
    O = Symbol.for("react.lazy"),
    C = Symbol.for("react.activity"),
    B = Symbol.iterator;
  function ue(m) {
    return m === null || typeof m != "object"
      ? null
      : ((m = (B && m[B]) || m["@@iterator"]),
        typeof m == "function" ? m : null);
  }
  var I = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    P = Object.assign,
    J = {};
  function Q(m, M, R) {
    ((this.props = m),
      (this.context = M),
      (this.refs = J),
      (this.updater = R || I));
  }
  ((Q.prototype.isReactComponent = {}),
    (Q.prototype.setState = function (m, M) {
      if (typeof m != "object" && typeof m != "function" && m != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, m, M, "setState");
    }),
    (Q.prototype.forceUpdate = function (m) {
      this.updater.enqueueForceUpdate(this, m, "forceUpdate");
    }));
  function K() {}
  K.prototype = Q.prototype;
  function re(m, M, R) {
    ((this.props = m),
      (this.context = M),
      (this.refs = J),
      (this.updater = R || I));
  }
  var ye = (re.prototype = new K());
  ((ye.constructor = re), P(ye, Q.prototype), (ye.isPureReactComponent = !0));
  var Ee = Array.isArray;
  function qe() {}
  var V = { H: null, A: null, T: null, S: null },
    be = Object.prototype.hasOwnProperty;
  function Ge(m, M, R) {
    var L = R.ref;
    return {
      $$typeof: h,
      type: m,
      key: M,
      ref: L !== void 0 ? L : null,
      props: R,
    };
  }
  function _e(m, M) {
    return Ge(m.type, M, m.props);
  }
  function vt(m) {
    return typeof m == "object" && m !== null && m.$$typeof === h;
  }
  function Le(m) {
    var M = { "=": "=0", ":": "=2" };
    return (
      "$" +
      m.replace(/[=:]/g, function (R) {
        return M[R];
      })
    );
  }
  var gt = /\/+/g;
  function Ot(m, M) {
    return typeof m == "object" && m !== null && m.key != null
      ? Le("" + m.key)
      : M.toString(36);
  }
  function Mt(m) {
    switch (m.status) {
      case "fulfilled":
        return m.value;
      case "rejected":
        throw m.reason;
      default:
        switch (
          (typeof m.status == "string"
            ? m.then(qe, qe)
            : ((m.status = "pending"),
              m.then(
                function (M) {
                  m.status === "pending" &&
                    ((m.status = "fulfilled"), (m.value = M));
                },
                function (M) {
                  m.status === "pending" &&
                    ((m.status = "rejected"), (m.reason = M));
                },
              )),
          m.status)
        ) {
          case "fulfilled":
            return m.value;
          case "rejected":
            throw m.reason;
        }
    }
    throw m;
  }
  function z(m, M, R, L, W) {
    var ee = typeof m;
    (ee === "undefined" || ee === "boolean") && (m = null);
    var oe = !1;
    if (m === null) oe = !0;
    else
      switch (ee) {
        case "bigint":
        case "string":
        case "number":
          oe = !0;
          break;
        case "object":
          switch (m.$$typeof) {
            case h:
            case o:
              oe = !0;
              break;
            case O:
              return ((oe = m._init), z(oe(m._payload), M, R, L, W));
          }
      }
    if (oe)
      return (
        (W = W(m)),
        (oe = L === "" ? "." + Ot(m, 0) : L),
        Ee(W)
          ? ((R = ""),
            oe != null && (R = oe.replace(gt, "$&/") + "/"),
            z(W, M, R, "", function (Da) {
              return Da;
            }))
          : W != null &&
            (vt(W) &&
              (W = _e(
                W,
                R +
                  (W.key == null || (m && m.key === W.key)
                    ? ""
                    : ("" + W.key).replace(gt, "$&/") + "/") +
                  oe,
              )),
            M.push(W)),
        1
      );
    oe = 0;
    var We = L === "" ? "." : L + ":";
    if (Ee(m))
      for (var De = 0; De < m.length; De++)
        ((L = m[De]), (ee = We + Ot(L, De)), (oe += z(L, M, R, ee, W)));
    else if (((De = ue(m)), typeof De == "function"))
      for (m = De.call(m), De = 0; !(L = m.next()).done; )
        ((L = L.value), (ee = We + Ot(L, De++)), (oe += z(L, M, R, ee, W)));
    else if (ee === "object") {
      if (typeof m.then == "function") return z(Mt(m), M, R, L, W);
      throw (
        (M = String(m)),
        Error(
          "Objects are not valid as a React child (found: " +
            (M === "[object Object]"
              ? "object with keys {" + Object.keys(m).join(", ") + "}"
              : M) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return oe;
  }
  function H(m, M, R) {
    if (m == null) return m;
    var L = [],
      W = 0;
    return (
      z(m, L, "", "", function (ee) {
        return M.call(R, ee, W++);
      }),
      L
    );
  }
  function X(m) {
    if (m._status === -1) {
      var M = m._result;
      ((M = M()),
        M.then(
          function (R) {
            (m._status === 0 || m._status === -1) &&
              ((m._status = 1), (m._result = R));
          },
          function (R) {
            (m._status === 0 || m._status === -1) &&
              ((m._status = 2), (m._result = R));
          },
        ),
        m._status === -1 && ((m._status = 0), (m._result = M)));
    }
    if (m._status === 1) return m._result.default;
    throw m._result;
  }
  var ve =
      typeof reportError == "function"
        ? reportError
        : function (m) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var M = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof m == "object" &&
                  m !== null &&
                  typeof m.message == "string"
                    ? String(m.message)
                    : String(m),
                error: m,
              });
              if (!window.dispatchEvent(M)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", m);
              return;
            }
            console.error(m);
          },
    Se = {
      map: H,
      forEach: function (m, M, R) {
        H(
          m,
          function () {
            M.apply(this, arguments);
          },
          R,
        );
      },
      count: function (m) {
        var M = 0;
        return (
          H(m, function () {
            M++;
          }),
          M
        );
      },
      toArray: function (m) {
        return (
          H(m, function (M) {
            return M;
          }) || []
        );
      },
      only: function (m) {
        if (!vt(m))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return m;
      },
    };
  return (
    (Z.Activity = C),
    (Z.Children = Se),
    (Z.Component = Q),
    (Z.Fragment = S),
    (Z.Profiler = T),
    (Z.PureComponent = re),
    (Z.StrictMode = r),
    (Z.Suspense = E),
    (Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = V),
    (Z.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (m) {
        return V.H.useMemoCache(m);
      },
    }),
    (Z.cache = function (m) {
      return function () {
        return m.apply(null, arguments);
      };
    }),
    (Z.cacheSignal = function () {
      return null;
    }),
    (Z.cloneElement = function (m, M, R) {
      if (m == null)
        throw Error(
          "The argument must be a React element, but you passed " + m + ".",
        );
      var L = P({}, m.props),
        W = m.key;
      if (M != null)
        for (ee in (M.key !== void 0 && (W = "" + M.key), M))
          !be.call(M, ee) ||
            ee === "key" ||
            ee === "__self" ||
            ee === "__source" ||
            (ee === "ref" && M.ref === void 0) ||
            (L[ee] = M[ee]);
      var ee = arguments.length - 2;
      if (ee === 1) L.children = R;
      else if (1 < ee) {
        for (var oe = Array(ee), We = 0; We < ee; We++)
          oe[We] = arguments[We + 2];
        L.children = oe;
      }
      return Ge(m.type, W, L);
    }),
    (Z.createContext = function (m) {
      return (
        (m = {
          $$typeof: w,
          _currentValue: m,
          _currentValue2: m,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (m.Provider = m),
        (m.Consumer = { $$typeof: _, _context: m }),
        m
      );
    }),
    (Z.createElement = function (m, M, R) {
      var L,
        W = {},
        ee = null;
      if (M != null)
        for (L in (M.key !== void 0 && (ee = "" + M.key), M))
          be.call(M, L) &&
            L !== "key" &&
            L !== "__self" &&
            L !== "__source" &&
            (W[L] = M[L]);
      var oe = arguments.length - 2;
      if (oe === 1) W.children = R;
      else if (1 < oe) {
        for (var We = Array(oe), De = 0; De < oe; De++)
          We[De] = arguments[De + 2];
        W.children = We;
      }
      if (m && m.defaultProps)
        for (L in ((oe = m.defaultProps), oe))
          W[L] === void 0 && (W[L] = oe[L]);
      return Ge(m, ee, W);
    }),
    (Z.createRef = function () {
      return { current: null };
    }),
    (Z.forwardRef = function (m) {
      return { $$typeof: D, render: m };
    }),
    (Z.isValidElement = vt),
    (Z.lazy = function (m) {
      return { $$typeof: O, _payload: { _status: -1, _result: m }, _init: X };
    }),
    (Z.memo = function (m, M) {
      return { $$typeof: v, type: m, compare: M === void 0 ? null : M };
    }),
    (Z.startTransition = function (m) {
      var M = V.T,
        R = {};
      V.T = R;
      try {
        var L = m(),
          W = V.S;
        (W !== null && W(R, L),
          typeof L == "object" &&
            L !== null &&
            typeof L.then == "function" &&
            L.then(qe, ve));
      } catch (ee) {
        ve(ee);
      } finally {
        (M !== null && R.types !== null && (M.types = R.types), (V.T = M));
      }
    }),
    (Z.unstable_useCacheRefresh = function () {
      return V.H.useCacheRefresh();
    }),
    (Z.use = function (m) {
      return V.H.use(m);
    }),
    (Z.useActionState = function (m, M, R) {
      return V.H.useActionState(m, M, R);
    }),
    (Z.useCallback = function (m, M) {
      return V.H.useCallback(m, M);
    }),
    (Z.useContext = function (m) {
      return V.H.useContext(m);
    }),
    (Z.useDebugValue = function () {}),
    (Z.useDeferredValue = function (m, M) {
      return V.H.useDeferredValue(m, M);
    }),
    (Z.useEffect = function (m, M) {
      return V.H.useEffect(m, M);
    }),
    (Z.useEffectEvent = function (m) {
      return V.H.useEffectEvent(m);
    }),
    (Z.useId = function () {
      return V.H.useId();
    }),
    (Z.useImperativeHandle = function (m, M, R) {
      return V.H.useImperativeHandle(m, M, R);
    }),
    (Z.useInsertionEffect = function (m, M) {
      return V.H.useInsertionEffect(m, M);
    }),
    (Z.useLayoutEffect = function (m, M) {
      return V.H.useLayoutEffect(m, M);
    }),
    (Z.useMemo = function (m, M) {
      return V.H.useMemo(m, M);
    }),
    (Z.useOptimistic = function (m, M) {
      return V.H.useOptimistic(m, M);
    }),
    (Z.useReducer = function (m, M, R) {
      return V.H.useReducer(m, M, R);
    }),
    (Z.useRef = function (m) {
      return V.H.useRef(m);
    }),
    (Z.useState = function (m) {
      return V.H.useState(m);
    }),
    (Z.useSyncExternalStore = function (m, M, R) {
      return V.H.useSyncExternalStore(m, M, R);
    }),
    (Z.useTransition = function () {
      return V.H.useTransition();
    }),
    (Z.version = "19.2.4"),
    Z
  );
}
var _d;
function js() {
  return (_d || ((_d = 1), (ys.exports = zh())), ys.exports);
}
var U = js();
const Nh = bh(U);
var vs = { exports: {} },
  An = {},
  gs = { exports: {} },
  ps = {};
var Dd;
function Ah() {
  return (
    Dd ||
      ((Dd = 1),
      (function (h) {
        function o(z, H) {
          var X = z.length;
          z.push(H);
          e: for (; 0 < X; ) {
            var ve = (X - 1) >>> 1,
              Se = z[ve];
            if (0 < T(Se, H)) ((z[ve] = H), (z[X] = Se), (X = ve));
            else break e;
          }
        }
        function S(z) {
          return z.length === 0 ? null : z[0];
        }
        function r(z) {
          if (z.length === 0) return null;
          var H = z[0],
            X = z.pop();
          if (X !== H) {
            z[0] = X;
            e: for (var ve = 0, Se = z.length, m = Se >>> 1; ve < m; ) {
              var M = 2 * (ve + 1) - 1,
                R = z[M],
                L = M + 1,
                W = z[L];
              if (0 > T(R, X))
                L < Se && 0 > T(W, R)
                  ? ((z[ve] = W), (z[L] = X), (ve = L))
                  : ((z[ve] = R), (z[M] = X), (ve = M));
              else if (L < Se && 0 > T(W, X))
                ((z[ve] = W), (z[L] = X), (ve = L));
              else break e;
            }
          }
          return H;
        }
        function T(z, H) {
          var X = z.sortIndex - H.sortIndex;
          return X !== 0 ? X : z.id - H.id;
        }
        if (
          ((h.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var _ = performance;
          h.unstable_now = function () {
            return _.now();
          };
        } else {
          var w = Date,
            D = w.now();
          h.unstable_now = function () {
            return w.now() - D;
          };
        }
        var E = [],
          v = [],
          O = 1,
          C = null,
          B = 3,
          ue = !1,
          I = !1,
          P = !1,
          J = !1,
          Q = typeof setTimeout == "function" ? setTimeout : null,
          K = typeof clearTimeout == "function" ? clearTimeout : null,
          re = typeof setImmediate < "u" ? setImmediate : null;
        function ye(z) {
          for (var H = S(v); H !== null; ) {
            if (H.callback === null) r(v);
            else if (H.startTime <= z)
              (r(v), (H.sortIndex = H.expirationTime), o(E, H));
            else break;
            H = S(v);
          }
        }
        function Ee(z) {
          if (((P = !1), ye(z), !I))
            if (S(E) !== null) ((I = !0), qe || ((qe = !0), Le()));
            else {
              var H = S(v);
              H !== null && Mt(Ee, H.startTime - z);
            }
        }
        var qe = !1,
          V = -1,
          be = 5,
          Ge = -1;
        function _e() {
          return J ? !0 : !(h.unstable_now() - Ge < be);
        }
        function vt() {
          if (((J = !1), qe)) {
            var z = h.unstable_now();
            Ge = z;
            var H = !0;
            try {
              e: {
                ((I = !1), P && ((P = !1), K(V), (V = -1)), (ue = !0));
                var X = B;
                try {
                  t: {
                    for (
                      ye(z), C = S(E);
                      C !== null && !(C.expirationTime > z && _e());
                    ) {
                      var ve = C.callback;
                      if (typeof ve == "function") {
                        ((C.callback = null), (B = C.priorityLevel));
                        var Se = ve(C.expirationTime <= z);
                        if (((z = h.unstable_now()), typeof Se == "function")) {
                          ((C.callback = Se), ye(z), (H = !0));
                          break t;
                        }
                        (C === S(E) && r(E), ye(z));
                      } else r(E);
                      C = S(E);
                    }
                    if (C !== null) H = !0;
                    else {
                      var m = S(v);
                      (m !== null && Mt(Ee, m.startTime - z), (H = !1));
                    }
                  }
                  break e;
                } finally {
                  ((C = null), (B = X), (ue = !1));
                }
                H = void 0;
              }
            } finally {
              H ? Le() : (qe = !1);
            }
          }
        }
        var Le;
        if (typeof re == "function")
          Le = function () {
            re(vt);
          };
        else if (typeof MessageChannel < "u") {
          var gt = new MessageChannel(),
            Ot = gt.port2;
          ((gt.port1.onmessage = vt),
            (Le = function () {
              Ot.postMessage(null);
            }));
        } else
          Le = function () {
            Q(vt, 0);
          };
        function Mt(z, H) {
          V = Q(function () {
            z(h.unstable_now());
          }, H);
        }
        ((h.unstable_IdlePriority = 5),
          (h.unstable_ImmediatePriority = 1),
          (h.unstable_LowPriority = 4),
          (h.unstable_NormalPriority = 3),
          (h.unstable_Profiling = null),
          (h.unstable_UserBlockingPriority = 2),
          (h.unstable_cancelCallback = function (z) {
            z.callback = null;
          }),
          (h.unstable_forceFrameRate = function (z) {
            0 > z || 125 < z
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (be = 0 < z ? Math.floor(1e3 / z) : 5);
          }),
          (h.unstable_getCurrentPriorityLevel = function () {
            return B;
          }),
          (h.unstable_next = function (z) {
            switch (B) {
              case 1:
              case 2:
              case 3:
                var H = 3;
                break;
              default:
                H = B;
            }
            var X = B;
            B = H;
            try {
              return z();
            } finally {
              B = X;
            }
          }),
          (h.unstable_requestPaint = function () {
            J = !0;
          }),
          (h.unstable_runWithPriority = function (z, H) {
            switch (z) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                z = 3;
            }
            var X = B;
            B = z;
            try {
              return H();
            } finally {
              B = X;
            }
          }),
          (h.unstable_scheduleCallback = function (z, H, X) {
            var ve = h.unstable_now();
            switch (
              (typeof X == "object" && X !== null
                ? ((X = X.delay),
                  (X = typeof X == "number" && 0 < X ? ve + X : ve))
                : (X = ve),
              z)
            ) {
              case 1:
                var Se = -1;
                break;
              case 2:
                Se = 250;
                break;
              case 5:
                Se = 1073741823;
                break;
              case 4:
                Se = 1e4;
                break;
              default:
                Se = 5e3;
            }
            return (
              (Se = X + Se),
              (z = {
                id: O++,
                callback: H,
                priorityLevel: z,
                startTime: X,
                expirationTime: Se,
                sortIndex: -1,
              }),
              X > ve
                ? ((z.sortIndex = X),
                  o(v, z),
                  S(E) === null &&
                    z === S(v) &&
                    (P ? (K(V), (V = -1)) : (P = !0), Mt(Ee, X - ve)))
                : ((z.sortIndex = Se),
                  o(E, z),
                  I || ue || ((I = !0), qe || ((qe = !0), Le()))),
              z
            );
          }),
          (h.unstable_shouldYield = _e),
          (h.unstable_wrapCallback = function (z) {
            var H = B;
            return function () {
              var X = B;
              B = H;
              try {
                return z.apply(this, arguments);
              } finally {
                B = X;
              }
            };
          }));
      })(ps)),
    ps
  );
}
var wd;
function Eh() {
  return (wd || ((wd = 1), (gs.exports = Ah())), gs.exports);
}
var xs = { exports: {} },
  Je = {};
var Od;
function Th() {
  if (Od) return Je;
  Od = 1;
  var h = js();
  function o(E) {
    var v = "https://react.dev/errors/" + E;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var O = 2; O < arguments.length; O++)
        v += "&args[]=" + encodeURIComponent(arguments[O]);
    }
    return (
      "Minified React error #" +
      E +
      "; visit " +
      v +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function S() {}
  var r = {
      d: {
        f: S,
        r: function () {
          throw Error(o(522));
        },
        D: S,
        C: S,
        L: S,
        m: S,
        X: S,
        S,
        M: S,
      },
      p: 0,
      findDOMNode: null,
    },
    T = Symbol.for("react.portal");
  function _(E, v, O) {
    var C =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: T,
      key: C == null ? null : "" + C,
      children: E,
      containerInfo: v,
      implementation: O,
    };
  }
  var w = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function D(E, v) {
    if (E === "font") return "";
    if (typeof v == "string") return v === "use-credentials" ? v : "";
  }
  return (
    (Je.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (Je.createPortal = function (E, v) {
      var O =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!v || (v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11))
        throw Error(o(299));
      return _(E, v, null, O);
    }),
    (Je.flushSync = function (E) {
      var v = w.T,
        O = r.p;
      try {
        if (((w.T = null), (r.p = 2), E)) return E();
      } finally {
        ((w.T = v), (r.p = O), r.d.f());
      }
    }),
    (Je.preconnect = function (E, v) {
      typeof E == "string" &&
        (v
          ? ((v = v.crossOrigin),
            (v =
              typeof v == "string"
                ? v === "use-credentials"
                  ? v
                  : ""
                : void 0))
          : (v = null),
        r.d.C(E, v));
    }),
    (Je.prefetchDNS = function (E) {
      typeof E == "string" && r.d.D(E);
    }),
    (Je.preinit = function (E, v) {
      if (typeof E == "string" && v && typeof v.as == "string") {
        var O = v.as,
          C = D(O, v.crossOrigin),
          B = typeof v.integrity == "string" ? v.integrity : void 0,
          ue = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
        O === "style"
          ? r.d.S(E, typeof v.precedence == "string" ? v.precedence : void 0, {
              crossOrigin: C,
              integrity: B,
              fetchPriority: ue,
            })
          : O === "script" &&
            r.d.X(E, {
              crossOrigin: C,
              integrity: B,
              fetchPriority: ue,
              nonce: typeof v.nonce == "string" ? v.nonce : void 0,
            });
      }
    }),
    (Je.preinitModule = function (E, v) {
      if (typeof E == "string")
        if (typeof v == "object" && v !== null) {
          if (v.as == null || v.as === "script") {
            var O = D(v.as, v.crossOrigin);
            r.d.M(E, {
              crossOrigin: O,
              integrity: typeof v.integrity == "string" ? v.integrity : void 0,
              nonce: typeof v.nonce == "string" ? v.nonce : void 0,
            });
          }
        } else v == null && r.d.M(E);
    }),
    (Je.preload = function (E, v) {
      if (
        typeof E == "string" &&
        typeof v == "object" &&
        v !== null &&
        typeof v.as == "string"
      ) {
        var O = v.as,
          C = D(O, v.crossOrigin);
        r.d.L(E, O, {
          crossOrigin: C,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0,
          nonce: typeof v.nonce == "string" ? v.nonce : void 0,
          type: typeof v.type == "string" ? v.type : void 0,
          fetchPriority:
            typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
          referrerPolicy:
            typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
          imageSrcSet:
            typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
          imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
          media: typeof v.media == "string" ? v.media : void 0,
        });
      }
    }),
    (Je.preloadModule = function (E, v) {
      if (typeof E == "string")
        if (v) {
          var O = D(v.as, v.crossOrigin);
          r.d.m(E, {
            as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
            crossOrigin: O,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
          });
        } else r.d.m(E);
    }),
    (Je.requestFormReset = function (E) {
      r.d.r(E);
    }),
    (Je.unstable_batchedUpdates = function (E, v) {
      return E(v);
    }),
    (Je.useFormState = function (E, v, O) {
      return w.H.useFormState(E, v, O);
    }),
    (Je.useFormStatus = function () {
      return w.H.useHostTransitionStatus();
    }),
    (Je.version = "19.2.4"),
    Je
  );
}
var Cd;
function Mh() {
  if (Cd) return xs.exports;
  Cd = 1;
  function h() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h);
      } catch (o) {
        console.error(o);
      }
  }
  return (h(), (xs.exports = Th()), xs.exports);
}
var Hd;
function _h() {
  if (Hd) return An;
  Hd = 1;
  var h = Eh(),
    o = js(),
    S = Mh();
  function r(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function T(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function _(e) {
    var t = e,
      l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (l = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function w(e) {
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
  function D(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function E(e) {
    if (_(e) !== e) throw Error(r(188));
  }
  function v(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = _(e)), t === null)) throw Error(r(188));
      return t !== e ? null : e;
    }
    for (var l = e, a = t; ; ) {
      var n = l.return;
      if (n === null) break;
      var i = n.alternate;
      if (i === null) {
        if (((a = n.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === i.child) {
        for (i = n.child; i; ) {
          if (i === l) return (E(n), e);
          if (i === a) return (E(n), t);
          i = i.sibling;
        }
        throw Error(r(188));
      }
      if (l.return !== a.return) ((l = n), (a = i));
      else {
        for (var u = !1, s = n.child; s; ) {
          if (s === l) {
            ((u = !0), (l = n), (a = i));
            break;
          }
          if (s === a) {
            ((u = !0), (a = n), (l = i));
            break;
          }
          s = s.sibling;
        }
        if (!u) {
          for (s = i.child; s; ) {
            if (s === l) {
              ((u = !0), (l = i), (a = n));
              break;
            }
            if (s === a) {
              ((u = !0), (a = i), (l = n));
              break;
            }
            s = s.sibling;
          }
          if (!u) throw Error(r(189));
        }
      }
      if (l.alternate !== a) throw Error(r(190));
    }
    if (l.tag !== 3) throw Error(r(188));
    return l.stateNode.current === l ? e : t;
  }
  function O(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = O(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var C = Object.assign,
    B = Symbol.for("react.element"),
    ue = Symbol.for("react.transitional.element"),
    I = Symbol.for("react.portal"),
    P = Symbol.for("react.fragment"),
    J = Symbol.for("react.strict_mode"),
    Q = Symbol.for("react.profiler"),
    K = Symbol.for("react.consumer"),
    re = Symbol.for("react.context"),
    ye = Symbol.for("react.forward_ref"),
    Ee = Symbol.for("react.suspense"),
    qe = Symbol.for("react.suspense_list"),
    V = Symbol.for("react.memo"),
    be = Symbol.for("react.lazy"),
    Ge = Symbol.for("react.activity"),
    _e = Symbol.for("react.memo_cache_sentinel"),
    vt = Symbol.iterator;
  function Le(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (vt && e[vt]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var gt = Symbol.for("react.client.reference");
  function Ot(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === gt ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case P:
        return "Fragment";
      case Q:
        return "Profiler";
      case J:
        return "StrictMode";
      case Ee:
        return "Suspense";
      case qe:
        return "SuspenseList";
      case Ge:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case I:
          return "Portal";
        case re:
          return e.displayName || "Context";
        case K:
          return (e._context.displayName || "Context") + ".Consumer";
        case ye:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case V:
          return (
            (t = e.displayName || null),
            t !== null ? t : Ot(e.type) || "Memo"
          );
        case be:
          ((t = e._payload), (e = e._init));
          try {
            return Ot(e(t));
          } catch {}
      }
    return null;
  }
  var Mt = Array.isArray,
    z = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    H = S.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    X = { pending: !1, data: null, method: null, action: null },
    ve = [],
    Se = -1;
  function m(e) {
    return { current: e };
  }
  function M(e) {
    0 > Se || ((e.current = ve[Se]), (ve[Se] = null), Se--);
  }
  function R(e, t) {
    (Se++, (ve[Se] = e.current), (e.current = t));
  }
  var L = m(null),
    W = m(null),
    ee = m(null),
    oe = m(null);
  function We(e, t) {
    switch ((R(ee, t), R(W, e), R(L, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Wo(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = Wo(t)), (e = $o(t, e)));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (M(L), R(L, e));
  }
  function De() {
    (M(L), M(W), M(ee));
  }
  function Da(e) {
    e.memoizedState !== null && R(oe, e);
    var t = L.current,
      l = $o(t, e.type);
    t !== l && (R(W, e), R(L, l));
  }
  function _n(e) {
    (W.current === e && (M(L), M(W)),
      oe.current === e && (M(oe), (bn._currentValue = X)));
  }
  var $i, zs;
  function Tl(e) {
    if ($i === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        (($i = (t && t[1]) || ""),
          (zs =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      $i +
      e +
      zs
    );
  }
  var Fi = !1;
  function Ii(e, t) {
    if (!e || Fi) return "";
    Fi = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var A = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(A.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(A, []);
                } catch (b) {
                  var x = b;
                }
                Reflect.construct(e, [], A);
              } else {
                try {
                  A.call();
                } catch (b) {
                  x = b;
                }
                e.call(A.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (b) {
                x = b;
              }
              (A = e()) &&
                typeof A.catch == "function" &&
                A.catch(function () {});
            }
          } catch (b) {
            if (b && x && typeof b.stack == "string") return [b.stack, x.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name",
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var i = a.DetermineComponentFrameRoot(),
        u = i[0],
        s = i[1];
      if (u && s) {
        var f = u.split(`
`),
          p = s.split(`
`);
        for (
          n = a = 0;
          a < f.length && !f[a].includes("DetermineComponentFrameRoot");
        )
          a++;
        for (; n < p.length && !p[n].includes("DetermineComponentFrameRoot"); )
          n++;
        if (a === f.length || n === p.length)
          for (
            a = f.length - 1, n = p.length - 1;
            1 <= a && 0 <= n && f[a] !== p[n];
          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (f[a] !== p[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || f[a] !== p[n])) {
                  var j =
                    `
` + f[a].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      j.includes("<anonymous>") &&
                      (j = j.replace("<anonymous>", e.displayName)),
                    j
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      ((Fi = !1), (Error.prepareStackTrace = l));
    }
    return (l = e ? e.displayName || e.name : "") ? Tl(l) : "";
  }
  function Fd(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Tl(e.type);
      case 16:
        return Tl("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? Tl("Suspense Fallback")
          : Tl("Suspense");
      case 19:
        return Tl("SuspenseList");
      case 0:
      case 15:
        return Ii(e.type, !1);
      case 11:
        return Ii(e.type.render, !1);
      case 1:
        return Ii(e.type, !0);
      case 31:
        return Tl("Activity");
      default:
        return "";
    }
  }
  function Ns(e) {
    try {
      var t = "",
        l = null;
      do ((t += Fd(e, l)), (l = e), (e = e.return));
      while (e);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var Pi = Object.prototype.hasOwnProperty,
    eu = h.unstable_scheduleCallback,
    tu = h.unstable_cancelCallback,
    Id = h.unstable_shouldYield,
    Pd = h.unstable_requestPaint,
    it = h.unstable_now,
    e0 = h.unstable_getCurrentPriorityLevel,
    As = h.unstable_ImmediatePriority,
    Es = h.unstable_UserBlockingPriority,
    Dn = h.unstable_NormalPriority,
    t0 = h.unstable_LowPriority,
    Ts = h.unstable_IdlePriority,
    l0 = h.log,
    a0 = h.unstable_setDisableYieldValue,
    wa = null,
    ut = null;
  function ll(e) {
    if (
      (typeof l0 == "function" && a0(e),
      ut && typeof ut.setStrictMode == "function")
    )
      try {
        ut.setStrictMode(wa, e);
      } catch {}
  }
  var ct = Math.clz32 ? Math.clz32 : u0,
    n0 = Math.log,
    i0 = Math.LN2;
  function u0(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((n0(e) / i0) | 0)) | 0);
  }
  var wn = 256,
    On = 262144,
    Cn = 4194304;
  function Ml(e) {
    var t = e & 42;
    if (t !== 0) return t;
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
        return 64;
      case 128:
        return 128;
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
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Hn(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      i = e.suspendedLanes,
      u = e.pingedLanes;
    e = e.warmLanes;
    var s = a & 134217727;
    return (
      s !== 0
        ? ((a = s & ~i),
          a !== 0
            ? (n = Ml(a))
            : ((u &= s),
              u !== 0
                ? (n = Ml(u))
                : l || ((l = s & ~e), l !== 0 && (n = Ml(l)))))
        : ((s = a & ~i),
          s !== 0
            ? (n = Ml(s))
            : u !== 0
              ? (n = Ml(u))
              : l || ((l = a & ~e), l !== 0 && (n = Ml(l)))),
      n === 0
        ? 0
        : t !== 0 &&
            t !== n &&
            (t & i) === 0 &&
            ((i = n & -n),
            (l = t & -t),
            i >= l || (i === 32 && (l & 4194048) !== 0))
          ? t
          : n
    );
  }
  function Oa(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function c0(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
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
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ms() {
    var e = Cn;
    return ((Cn <<= 1), (Cn & 62914560) === 0 && (Cn = 4194304), e);
  }
  function lu(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function Ca(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function s0(e, t, l, a, n, i) {
    var u = e.pendingLanes;
    ((e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= l),
      (e.entangledLanes &= l),
      (e.errorRecoveryDisabledLanes &= l),
      (e.shellSuspendCounter = 0));
    var s = e.entanglements,
      f = e.expirationTimes,
      p = e.hiddenUpdates;
    for (l = u & ~l; 0 < l; ) {
      var j = 31 - ct(l),
        A = 1 << j;
      ((s[j] = 0), (f[j] = -1));
      var x = p[j];
      if (x !== null)
        for (p[j] = null, j = 0; j < x.length; j++) {
          var b = x[j];
          b !== null && (b.lane &= -536870913);
        }
      l &= ~A;
    }
    (a !== 0 && _s(e, a, 0),
      i !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(u & ~t)));
  }
  function _s(e, t, l) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var a = 31 - ct(t);
    ((e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (l & 261930)));
  }
  function Ds(e, t) {
    var l = (e.entangledLanes |= t);
    for (e = e.entanglements; l; ) {
      var a = 31 - ct(l),
        n = 1 << a;
      ((n & t) | (e[a] & t) && (e[a] |= t), (l &= ~n));
    }
  }
  function ws(e, t) {
    var l = t & -t;
    return (
      (l = (l & 42) !== 0 ? 1 : au(l)),
      (l & (e.suspendedLanes | t)) !== 0 ? 0 : l
    );
  }
  function au(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
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
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function nu(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Os() {
    var e = H.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : xd(e.type));
  }
  function Cs(e, t) {
    var l = H.p;
    try {
      return ((H.p = e), t());
    } finally {
      H.p = l;
    }
  }
  var al = Math.random().toString(36).slice(2),
    Qe = "__reactFiber$" + al,
    Ie = "__reactProps$" + al,
    Zl = "__reactContainer$" + al,
    iu = "__reactEvents$" + al,
    f0 = "__reactListeners$" + al,
    r0 = "__reactHandles$" + al,
    Hs = "__reactResources$" + al,
    Ha = "__reactMarker$" + al;
  function uu(e) {
    (delete e[Qe], delete e[Ie], delete e[iu], delete e[f0], delete e[r0]);
  }
  function Kl(e) {
    var t = e[Qe];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if ((t = l[Zl] || l[Qe])) {
        if (
          ((l = t.alternate),
          t.child !== null || (l !== null && l.child !== null))
        )
          for (e = ad(e); e !== null; ) {
            if ((l = e[Qe])) return l;
            e = ad(e);
          }
        return t;
      }
      ((e = l), (l = e.parentNode));
    }
    return null;
  }
  function Jl(e) {
    if ((e = e[Qe] || e[Zl])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function Ra(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(r(33));
  }
  function Wl(e) {
    var t = e[Hs];
    return (
      t ||
        (t = e[Hs] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function ke(e) {
    e[Ha] = !0;
  }
  var Rs = new Set(),
    Us = {};
  function _l(e, t) {
    ($l(e, t), $l(e + "Capture", t));
  }
  function $l(e, t) {
    for (Us[e] = t, e = 0; e < t.length; e++) Rs.add(t[e]);
  }
  var o0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Bs = {},
    qs = {};
  function d0(e) {
    return Pi.call(qs, e)
      ? !0
      : Pi.call(Bs, e)
        ? !1
        : o0.test(e)
          ? (qs[e] = !0)
          : ((Bs[e] = !0), !1);
  }
  function Rn(e, t, l) {
    if (d0(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
  }
  function Un(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + l);
    }
  }
  function Bt(e, t, l, a) {
    if (a === null) e.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, "" + a);
    }
  }
  function pt(e) {
    switch (typeof e) {
      case "bigint":
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
  function Ls(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function m0(e, t, l) {
    var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var n = a.get,
        i = a.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (u) {
            ((l = "" + u), i.call(this, u));
          },
        }),
        Object.defineProperty(e, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (u) {
            l = "" + u;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function cu(e) {
    if (!e._valueTracker) {
      var t = Ls(e) ? "checked" : "value";
      e._valueTracker = m0(e, t, "" + e[t]);
    }
  }
  function ks(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      a = "";
    return (
      e && (a = Ls(e) ? (e.checked ? "true" : "false") : e.value),
      (e = a),
      e !== l ? (t.setValue(e), !0) : !1
    );
  }
  function Bn(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var h0 = /[\n"\\]/g;
  function xt(e) {
    return e.replace(h0, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function su(e, t, l, a, n, i, u, s) {
    ((e.name = ""),
      u != null &&
      typeof u != "function" &&
      typeof u != "symbol" &&
      typeof u != "boolean"
        ? (e.type = u)
        : e.removeAttribute("type"),
      t != null
        ? u === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + pt(t))
          : e.value !== "" + pt(t) && (e.value = "" + pt(t))
        : (u !== "submit" && u !== "reset") || e.removeAttribute("value"),
      t != null
        ? fu(e, u, pt(t))
        : l != null
          ? fu(e, u, pt(l))
          : a != null && e.removeAttribute("value"),
      n == null && i != null && (e.defaultChecked = !!i),
      n != null &&
        (e.checked = n && typeof n != "function" && typeof n != "symbol"),
      s != null &&
      typeof s != "function" &&
      typeof s != "symbol" &&
      typeof s != "boolean"
        ? (e.name = "" + pt(s))
        : e.removeAttribute("name"));
  }
  function Ys(e, t, l, a, n, i, u, s) {
    if (
      (i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (e.type = i),
      t != null || l != null)
    ) {
      if (!((i !== "submit" && i !== "reset") || t != null)) {
        cu(e);
        return;
      }
      ((l = l != null ? "" + pt(l) : ""),
        (t = t != null ? "" + pt(t) : l),
        s || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((a = a ?? n),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (e.checked = s ? e.checked : !!a),
      (e.defaultChecked = !!a),
      u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (e.name = u),
      cu(e));
  }
  function fu(e, t, l) {
    (t === "number" && Bn(e.ownerDocument) === e) ||
      e.defaultValue === "" + l ||
      (e.defaultValue = "" + l);
  }
  function Fl(e, t, l, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var n = 0; n < l.length; n++) t["$" + l[n]] = !0;
      for (l = 0; l < e.length; l++)
        ((n = t.hasOwnProperty("$" + e[l].value)),
          e[l].selected !== n && (e[l].selected = n),
          n && a && (e[l].defaultSelected = !0));
    } else {
      for (l = "" + pt(l), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === l) {
          ((e[n].selected = !0), a && (e[n].defaultSelected = !0));
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Gs(e, t, l) {
    if (
      t != null &&
      ((t = "" + pt(t)), t !== e.value && (e.value = t), l == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + pt(l) : "";
  }
  function Qs(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(r(92));
        if (Mt(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        l = a;
      }
      (l == null && (l = ""), (t = l));
    }
    ((l = pt(t)),
      (e.defaultValue = l),
      (a = e.textContent),
      a === l && a !== "" && a !== null && (e.value = a),
      cu(e));
  }
  function Il(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var y0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Xs(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? a
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : a
        ? e.setProperty(t, l)
        : typeof l != "number" || l === 0 || y0.has(t)
          ? t === "float"
            ? (e.cssFloat = l)
            : (e[t] = ("" + l).trim())
          : (e[t] = l + "px");
  }
  function Vs(e, t, l) {
    if (t != null && typeof t != "object") throw Error(r(62));
    if (((e = e.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? e.setProperty(a, "")
            : a === "float"
              ? (e.cssFloat = "")
              : (e[a] = ""));
      for (var n in t)
        ((a = t[n]), t.hasOwnProperty(n) && l[n] !== a && Xs(e, n, a));
    } else for (var i in t) t.hasOwnProperty(i) && Xs(e, i, t[i]);
  }
  function ru(e) {
    if (e.indexOf("-") === -1) return !1;
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
  var v0 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    g0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function qn(e) {
    return g0.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function qt() {}
  var ou = null;
  function du(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Pl = null,
    ea = null;
  function Zs(e) {
    var t = Jl(e);
    if (t && (e = t.stateNode)) {
      var l = e[Ie] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (su(
              e,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name,
            ),
            (t = l.name),
            l.type === "radio" && t != null)
          ) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + xt("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < l.length;
              t++
            ) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var n = a[Ie] || null;
                if (!n) throw Error(r(90));
                su(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name,
                );
              }
            }
            for (t = 0; t < l.length; t++)
              ((a = l[t]), a.form === e.form && ks(a));
          }
          break e;
        case "textarea":
          Gs(e, l.value, l.defaultValue);
          break e;
        case "select":
          ((t = l.value), t != null && Fl(e, !!l.multiple, t, !1));
      }
    }
  }
  var mu = !1;
  function Ks(e, t, l) {
    if (mu) return e(t, l);
    mu = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((mu = !1),
        (Pl !== null || ea !== null) &&
          (Ai(), Pl && ((t = Pl), (e = ea), (ea = Pl = null), Zs(t), e)))
      )
        for (t = 0; t < e.length; t++) Zs(e[t]);
    }
  }
  function Ua(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[Ie] || null;
    if (a === null) return null;
    l = a[t];
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
        ((a = !a.disabled) ||
          ((e = e.type),
          (a = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !a));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function") throw Error(r(231, t, typeof l));
    return l;
  }
  var Lt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    hu = !1;
  if (Lt)
    try {
      var Ba = {};
      (Object.defineProperty(Ba, "passive", {
        get: function () {
          hu = !0;
        },
      }),
        window.addEventListener("test", Ba, Ba),
        window.removeEventListener("test", Ba, Ba));
    } catch {
      hu = !1;
    }
  var nl = null,
    yu = null,
    Ln = null;
  function Js() {
    if (Ln) return Ln;
    var e,
      t = yu,
      l = t.length,
      a,
      n = "value" in nl ? nl.value : nl.textContent,
      i = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++);
    var u = l - e;
    for (a = 1; a <= u && t[l - a] === n[i - a]; a++);
    return (Ln = n.slice(e, 1 < a ? 1 - a : void 0));
  }
  function kn(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Yn() {
    return !0;
  }
  function Ws() {
    return !1;
  }
  function Pe(e) {
    function t(l, a, n, i, u) {
      ((this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = i),
        (this.target = u),
        (this.currentTarget = null));
      for (var s in e)
        e.hasOwnProperty(s) && ((l = e[s]), (this[s] = l ? l(i) : i[s]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? Yn
          : Ws),
        (this.isPropagationStopped = Ws),
        this
      );
    }
    return (
      C(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = Yn));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = Yn));
        },
        persist: function () {},
        isPersistent: Yn,
      }),
      t
    );
  }
  var Dl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Gn = Pe(Dl),
    qa = C({}, Dl, { view: 0, detail: 0 }),
    p0 = Pe(qa),
    vu,
    gu,
    La,
    Qn = C({}, qa, {
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
      getModifierState: xu,
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
          : (e !== La &&
              (La && e.type === "mousemove"
                ? ((vu = e.screenX - La.screenX), (gu = e.screenY - La.screenY))
                : (gu = vu = 0),
              (La = e)),
            vu);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : gu;
      },
    }),
    $s = Pe(Qn),
    x0 = C({}, Qn, { dataTransfer: 0 }),
    b0 = Pe(x0),
    S0 = C({}, qa, { relatedTarget: 0 }),
    pu = Pe(S0),
    j0 = C({}, Dl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    z0 = Pe(j0),
    N0 = C({}, Dl, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    A0 = Pe(N0),
    E0 = C({}, Dl, { data: 0 }),
    Fs = Pe(E0),
    T0 = {
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
    M0 = {
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
    _0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function D0(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = _0[e])
        ? !!t[e]
        : !1;
  }
  function xu() {
    return D0;
  }
  var w0 = C({}, qa, {
      key: function (e) {
        if (e.key) {
          var t = T0[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = kn(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? M0[e.keyCode] || "Unidentified"
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
      getModifierState: xu,
      charCode: function (e) {
        return e.type === "keypress" ? kn(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? kn(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    O0 = Pe(w0),
    C0 = C({}, Qn, {
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
    Is = Pe(C0),
    H0 = C({}, qa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: xu,
    }),
    R0 = Pe(H0),
    U0 = C({}, Dl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    B0 = Pe(U0),
    q0 = C({}, Qn, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
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
    L0 = Pe(q0),
    k0 = C({}, Dl, { newState: 0, oldState: 0 }),
    Y0 = Pe(k0),
    G0 = [9, 13, 27, 32],
    bu = Lt && "CompositionEvent" in window,
    ka = null;
  Lt && "documentMode" in document && (ka = document.documentMode);
  var Q0 = Lt && "TextEvent" in window && !ka,
    Ps = Lt && (!bu || (ka && 8 < ka && 11 >= ka)),
    ef = " ",
    tf = !1;
  function lf(e, t) {
    switch (e) {
      case "keyup":
        return G0.indexOf(t.keyCode) !== -1;
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
  function af(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var ta = !1;
  function X0(e, t) {
    switch (e) {
      case "compositionend":
        return af(t);
      case "keypress":
        return t.which !== 32 ? null : ((tf = !0), ef);
      case "textInput":
        return ((e = t.data), e === ef && tf ? null : e);
      default:
        return null;
    }
  }
  function V0(e, t) {
    if (ta)
      return e === "compositionend" || (!bu && lf(e, t))
        ? ((e = Js()), (Ln = yu = nl = null), (ta = !1), e)
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
        return Ps && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Z0 = {
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
  function nf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Z0[e.type] : t === "textarea";
  }
  function uf(e, t, l, a) {
    (Pl ? (ea ? ea.push(a) : (ea = [a])) : (Pl = a),
      (t = Oi(t, "onChange")),
      0 < t.length &&
        ((l = new Gn("onChange", "change", null, l, a)),
        e.push({ event: l, listeners: t })));
  }
  var Ya = null,
    Ga = null;
  function K0(e) {
    Qo(e, 0);
  }
  function Xn(e) {
    var t = Ra(e);
    if (ks(t)) return e;
  }
  function cf(e, t) {
    if (e === "change") return t;
  }
  var sf = !1;
  if (Lt) {
    var Su;
    if (Lt) {
      var ju = "oninput" in document;
      if (!ju) {
        var ff = document.createElement("div");
        (ff.setAttribute("oninput", "return;"),
          (ju = typeof ff.oninput == "function"));
      }
      Su = ju;
    } else Su = !1;
    sf = Su && (!document.documentMode || 9 < document.documentMode);
  }
  function rf() {
    Ya && (Ya.detachEvent("onpropertychange", of), (Ga = Ya = null));
  }
  function of(e) {
    if (e.propertyName === "value" && Xn(Ga)) {
      var t = [];
      (uf(t, Ga, e, du(e)), Ks(K0, t));
    }
  }
  function J0(e, t, l) {
    e === "focusin"
      ? (rf(), (Ya = t), (Ga = l), Ya.attachEvent("onpropertychange", of))
      : e === "focusout" && rf();
  }
  function W0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Xn(Ga);
  }
  function $0(e, t) {
    if (e === "click") return Xn(t);
  }
  function F0(e, t) {
    if (e === "input" || e === "change") return Xn(t);
  }
  function I0(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var st = typeof Object.is == "function" ? Object.is : I0;
  function Qa(e, t) {
    if (st(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var l = Object.keys(e),
      a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!Pi.call(t, n) || !st(e[n], t[n])) return !1;
    }
    return !0;
  }
  function df(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function mf(e, t) {
    var l = df(e);
    e = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = e + l.textContent.length), e <= t && a >= t))
          return { node: l, offset: t - e };
        e = a;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = df(l);
    }
  }
  function hf(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? hf(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function yf(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Bn(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = Bn(e.document);
    }
    return t;
  }
  function zu(e) {
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
  var P0 = Lt && "documentMode" in document && 11 >= document.documentMode,
    la = null,
    Nu = null,
    Xa = null,
    Au = !1;
  function vf(e, t, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Au ||
      la == null ||
      la !== Bn(a) ||
      ((a = la),
      "selectionStart" in a && zu(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Xa && Qa(Xa, a)) ||
        ((Xa = a),
        (a = Oi(Nu, "onSelect")),
        0 < a.length &&
          ((t = new Gn("onSelect", "select", null, t, l)),
          e.push({ event: t, listeners: a }),
          (t.target = la))));
  }
  function wl(e, t) {
    var l = {};
    return (
      (l[e.toLowerCase()] = t.toLowerCase()),
      (l["Webkit" + e] = "webkit" + t),
      (l["Moz" + e] = "moz" + t),
      l
    );
  }
  var aa = {
      animationend: wl("Animation", "AnimationEnd"),
      animationiteration: wl("Animation", "AnimationIteration"),
      animationstart: wl("Animation", "AnimationStart"),
      transitionrun: wl("Transition", "TransitionRun"),
      transitionstart: wl("Transition", "TransitionStart"),
      transitioncancel: wl("Transition", "TransitionCancel"),
      transitionend: wl("Transition", "TransitionEnd"),
    },
    Eu = {},
    gf = {};
  Lt &&
    ((gf = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete aa.animationend.animation,
      delete aa.animationiteration.animation,
      delete aa.animationstart.animation),
    "TransitionEvent" in window || delete aa.transitionend.transition);
  function Ol(e) {
    if (Eu[e]) return Eu[e];
    if (!aa[e]) return e;
    var t = aa[e],
      l;
    for (l in t) if (t.hasOwnProperty(l) && l in gf) return (Eu[e] = t[l]);
    return e;
  }
  var pf = Ol("animationend"),
    xf = Ol("animationiteration"),
    bf = Ol("animationstart"),
    em = Ol("transitionrun"),
    tm = Ol("transitionstart"),
    lm = Ol("transitioncancel"),
    Sf = Ol("transitionend"),
    jf = new Map(),
    Tu =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Tu.push("scrollEnd");
  function _t(e, t) {
    (jf.set(e, t), _l(t, [e]));
  }
  var Vn =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    bt = [],
    na = 0,
    Mu = 0;
  function Zn() {
    for (var e = na, t = (Mu = na = 0); t < e; ) {
      var l = bt[t];
      bt[t++] = null;
      var a = bt[t];
      bt[t++] = null;
      var n = bt[t];
      bt[t++] = null;
      var i = bt[t];
      if (((bt[t++] = null), a !== null && n !== null)) {
        var u = a.pending;
        (u === null ? (n.next = n) : ((n.next = u.next), (u.next = n)),
          (a.pending = n));
      }
      i !== 0 && zf(l, n, i);
    }
  }
  function Kn(e, t, l, a) {
    ((bt[na++] = e),
      (bt[na++] = t),
      (bt[na++] = l),
      (bt[na++] = a),
      (Mu |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a));
  }
  function _u(e, t, l, a) {
    return (Kn(e, t, l, a), Jn(e));
  }
  function Cl(e, t) {
    return (Kn(e, null, null, t), Jn(e));
  }
  function zf(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, i = e.return; i !== null; )
      ((i.childLanes |= l),
        (a = i.alternate),
        a !== null && (a.childLanes |= l),
        i.tag === 22 &&
          ((e = i.stateNode), e === null || e._visibility & 1 || (n = !0)),
        (e = i),
        (i = i.return));
    return e.tag === 3
      ? ((i = e.stateNode),
        n &&
          t !== null &&
          ((n = 31 - ct(l)),
          (e = i.hiddenUpdates),
          (a = e[n]),
          a === null ? (e[n] = [t]) : a.push(t),
          (t.lane = l | 536870912)),
        i)
      : null;
  }
  function Jn(e) {
    if (50 < mn) throw ((mn = 0), (qc = null), Error(r(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var ia = {};
  function am(e, t, l, a) {
    ((this.tag = e),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function ft(e, t, l, a) {
    return new am(e, t, l, a);
  }
  function Du(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function kt(e, t) {
    var l = e.alternate;
    return (
      l === null
        ? ((l = ft(e.tag, t, e.key, e.mode)),
          (l.elementType = e.elementType),
          (l.type = e.type),
          (l.stateNode = e.stateNode),
          (l.alternate = e),
          (e.alternate = l))
        : ((l.pendingProps = t),
          (l.type = e.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = e.flags & 65011712),
      (l.childLanes = e.childLanes),
      (l.lanes = e.lanes),
      (l.child = e.child),
      (l.memoizedProps = e.memoizedProps),
      (l.memoizedState = e.memoizedState),
      (l.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (l.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (l.sibling = e.sibling),
      (l.index = e.index),
      (l.ref = e.ref),
      (l.refCleanup = e.refCleanup),
      l
    );
  }
  function Nf(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return (
      l === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = l.childLanes),
          (e.lanes = l.lanes),
          (e.child = l.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = l.memoizedProps),
          (e.memoizedState = l.memoizedState),
          (e.updateQueue = l.updateQueue),
          (e.type = l.type),
          (t = l.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Wn(e, t, l, a, n, i) {
    var u = 0;
    if (((a = e), typeof e == "function")) Du(e) && (u = 1);
    else if (typeof e == "string")
      u = sh(e, l, L.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case Ge:
          return (
            (e = ft(31, l, t, n)),
            (e.elementType = Ge),
            (e.lanes = i),
            e
          );
        case P:
          return Hl(l.children, n, i, t);
        case J:
          ((u = 8), (n |= 24));
          break;
        case Q:
          return (
            (e = ft(12, l, t, n | 2)),
            (e.elementType = Q),
            (e.lanes = i),
            e
          );
        case Ee:
          return (
            (e = ft(13, l, t, n)),
            (e.elementType = Ee),
            (e.lanes = i),
            e
          );
        case qe:
          return (
            (e = ft(19, l, t, n)),
            (e.elementType = qe),
            (e.lanes = i),
            e
          );
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case re:
                u = 10;
                break e;
              case K:
                u = 9;
                break e;
              case ye:
                u = 11;
                break e;
              case V:
                u = 14;
                break e;
              case be:
                ((u = 16), (a = null));
                break e;
            }
          ((u = 29),
            (l = Error(r(130, e === null ? "null" : typeof e, ""))),
            (a = null));
      }
    return (
      (t = ft(u, l, t, n)),
      (t.elementType = e),
      (t.type = a),
      (t.lanes = i),
      t
    );
  }
  function Hl(e, t, l, a) {
    return ((e = ft(7, e, a, t)), (e.lanes = l), e);
  }
  function wu(e, t, l) {
    return ((e = ft(6, e, null, t)), (e.lanes = l), e);
  }
  function Af(e) {
    var t = ft(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function Ou(e, t, l) {
    return (
      (t = ft(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = l),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var Ef = new WeakMap();
  function St(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = Ef.get(e);
      return l !== void 0
        ? l
        : ((t = { value: e, source: t, stack: Ns(t) }), Ef.set(e, t), t);
    }
    return { value: e, source: t, stack: Ns(t) };
  }
  var ua = [],
    ca = 0,
    $n = null,
    Va = 0,
    jt = [],
    zt = 0,
    il = null,
    Ct = 1,
    Ht = "";
  function Yt(e, t) {
    ((ua[ca++] = Va), (ua[ca++] = $n), ($n = e), (Va = t));
  }
  function Tf(e, t, l) {
    ((jt[zt++] = Ct), (jt[zt++] = Ht), (jt[zt++] = il), (il = e));
    var a = Ct;
    e = Ht;
    var n = 32 - ct(a) - 1;
    ((a &= ~(1 << n)), (l += 1));
    var i = 32 - ct(t) + n;
    if (30 < i) {
      var u = n - (n % 5);
      ((i = (a & ((1 << u) - 1)).toString(32)),
        (a >>= u),
        (n -= u),
        (Ct = (1 << (32 - ct(t) + n)) | (l << n) | a),
        (Ht = i + e));
    } else ((Ct = (1 << i) | (l << n) | a), (Ht = e));
  }
  function Cu(e) {
    e.return !== null && (Yt(e, 1), Tf(e, 1, 0));
  }
  function Hu(e) {
    for (; e === $n; )
      (($n = ua[--ca]), (ua[ca] = null), (Va = ua[--ca]), (ua[ca] = null));
    for (; e === il; )
      ((il = jt[--zt]),
        (jt[zt] = null),
        (Ht = jt[--zt]),
        (jt[zt] = null),
        (Ct = jt[--zt]),
        (jt[zt] = null));
  }
  function Mf(e, t) {
    ((jt[zt++] = Ct),
      (jt[zt++] = Ht),
      (jt[zt++] = il),
      (Ct = t.id),
      (Ht = t.overflow),
      (il = e));
  }
  var Xe = null,
    ze = null,
    ie = !1,
    ul = null,
    Nt = !1,
    Ru = Error(r(519));
  function cl(e) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Za(St(t, e)), Ru);
  }
  function _f(e) {
    var t = e.stateNode,
      l = e.type,
      a = e.memoizedProps;
    switch (((t[Qe] = e), (t[Ie] = a), l)) {
      case "dialog":
        (le("cancel", t), le("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        le("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < yn.length; l++) le(yn[l], t);
        break;
      case "source":
        le("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (le("error", t), le("load", t));
        break;
      case "details":
        le("toggle", t);
        break;
      case "input":
        (le("invalid", t),
          Ys(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          ));
        break;
      case "select":
        le("invalid", t);
        break;
      case "textarea":
        (le("invalid", t), Qs(t, a.value, a.defaultValue, a.children));
    }
    ((l = a.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      t.textContent === "" + l ||
      a.suppressHydrationWarning === !0 ||
      Ko(t.textContent, l)
        ? (a.popover != null && (le("beforetoggle", t), le("toggle", t)),
          a.onScroll != null && le("scroll", t),
          a.onScrollEnd != null && le("scrollend", t),
          a.onClick != null && (t.onclick = qt),
          (t = !0))
        : (t = !1),
      t || cl(e, !0));
  }
  function Df(e) {
    for (Xe = e.return; Xe; )
      switch (Xe.tag) {
        case 5:
        case 31:
        case 13:
          Nt = !1;
          return;
        case 27:
        case 3:
          Nt = !0;
          return;
        default:
          Xe = Xe.return;
      }
  }
  function sa(e) {
    if (e !== Xe) return !1;
    if (!ie) return (Df(e), (ie = !0), !1);
    var t = e.tag,
      l;
    if (
      ((l = t !== 3 && t !== 27) &&
        ((l = t === 5) &&
          ((l = e.type),
          (l =
            !(l !== "form" && l !== "button") || Pc(e.type, e.memoizedProps))),
        (l = !l)),
      l && ze && cl(e),
      Df(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(r(317));
      ze = ld(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(r(317));
      ze = ld(e);
    } else
      t === 27
        ? ((t = ze), Sl(e.type) ? ((e = ns), (ns = null), (ze = e)) : (ze = t))
        : (ze = Xe ? Et(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Rl() {
    ((ze = Xe = null), (ie = !1));
  }
  function Uu() {
    var e = ul;
    return (
      e !== null &&
        (at === null ? (at = e) : at.push.apply(at, e), (ul = null)),
      e
    );
  }
  function Za(e) {
    ul === null ? (ul = [e]) : ul.push(e);
  }
  var Bu = m(null),
    Ul = null,
    Gt = null;
  function sl(e, t, l) {
    (R(Bu, t._currentValue), (t._currentValue = l));
  }
  function Qt(e) {
    ((e._currentValue = Bu.current), M(Bu));
  }
  function qu(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        e === l)
      )
        break;
      e = e.return;
    }
  }
  function Lu(e, t, l, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var i = n.dependencies;
      if (i !== null) {
        var u = n.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var s = i;
          i = n;
          for (var f = 0; f < t.length; f++)
            if (s.context === t[f]) {
              ((i.lanes |= l),
                (s = i.alternate),
                s !== null && (s.lanes |= l),
                qu(i.return, l, e),
                a || (u = null));
              break e;
            }
          i = s.next;
        }
      } else if (n.tag === 18) {
        if (((u = n.return), u === null)) throw Error(r(341));
        ((u.lanes |= l),
          (i = u.alternate),
          i !== null && (i.lanes |= l),
          qu(u, l, e),
          (u = null));
      } else u = n.child;
      if (u !== null) u.return = n;
      else
        for (u = n; u !== null; ) {
          if (u === e) {
            u = null;
            break;
          }
          if (((n = u.sibling), n !== null)) {
            ((n.return = u.return), (u = n));
            break;
          }
          u = u.return;
        }
      n = u;
    }
  }
  function fa(e, t, l, a) {
    e = null;
    for (var n = t, i = !1; n !== null; ) {
      if (!i) {
        if ((n.flags & 524288) !== 0) i = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var u = n.alternate;
        if (u === null) throw Error(r(387));
        if (((u = u.memoizedProps), u !== null)) {
          var s = n.type;
          st(n.pendingProps.value, u.value) ||
            (e !== null ? e.push(s) : (e = [s]));
        }
      } else if (n === oe.current) {
        if (((u = n.alternate), u === null)) throw Error(r(387));
        u.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (e !== null ? e.push(bn) : (e = [bn]));
      }
      n = n.return;
    }
    (e !== null && Lu(t, e, l, a), (t.flags |= 262144));
  }
  function Fn(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!st(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Bl(e) {
    ((Ul = e),
      (Gt = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function Ve(e) {
    return wf(Ul, e);
  }
  function In(e, t) {
    return (Ul === null && Bl(e), wf(e, t));
  }
  function wf(e, t) {
    var l = t._currentValue;
    if (((t = { context: t, memoizedValue: l, next: null }), Gt === null)) {
      if (e === null) throw Error(r(308));
      ((Gt = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else Gt = Gt.next = t;
    return l;
  }
  var nm =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  e.push(a);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (l) {
                  return l();
                }));
            };
          },
    im = h.unstable_scheduleCallback,
    um = h.unstable_NormalPriority,
    Ce = {
      $$typeof: re,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function ku() {
    return { controller: new nm(), data: new Map(), refCount: 0 };
  }
  function Ka(e) {
    (e.refCount--,
      e.refCount === 0 &&
        im(um, function () {
          e.controller.abort();
        }));
  }
  var Ja = null,
    Yu = 0,
    ra = 0,
    oa = null;
  function cm(e, t) {
    if (Ja === null) {
      var l = (Ja = []);
      ((Yu = 0),
        (ra = Xc()),
        (oa = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        }));
    }
    return (Yu++, t.then(Of, Of), t);
  }
  function Of() {
    if (--Yu === 0 && Ja !== null) {
      oa !== null && (oa.status = "fulfilled");
      var e = Ja;
      ((Ja = null), (ra = 0), (oa = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function sm(e, t) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          l.push(n);
        },
      };
    return (
      e.then(
        function () {
          ((a.status = "fulfilled"), (a.value = t));
          for (var n = 0; n < l.length; n++) (0, l[n])(t);
        },
        function (n) {
          for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
            (0, l[n])(void 0);
        },
      ),
      a
    );
  }
  var Cf = z.S;
  z.S = function (e, t) {
    ((go = it()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        cm(e, t),
      Cf !== null && Cf(e, t));
  };
  var ql = m(null);
  function Gu() {
    var e = ql.current;
    return e !== null ? e : je.pooledCache;
  }
  function Pn(e, t) {
    t === null ? R(ql, ql.current) : R(ql, t.pool);
  }
  function Hf() {
    var e = Gu();
    return e === null ? null : { parent: Ce._currentValue, pool: e };
  }
  var da = Error(r(460)),
    Qu = Error(r(474)),
    ei = Error(r(542)),
    ti = { then: function () {} };
  function Rf(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function Uf(e, t, l) {
    switch (
      ((l = e[l]),
      l === void 0 ? e.push(t) : l !== t && (t.then(qt, qt), (t = l)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), qf(e), e);
      default:
        if (typeof t.status == "string") t.then(qt, qt);
        else {
          if (((e = je), e !== null && 100 < e.shellSuspendCounter))
            throw Error(r(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  ((n.status = "fulfilled"), (n.value = a));
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  ((n.status = "rejected"), (n.reason = a));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), qf(e), e);
        }
        throw ((kl = t), da);
    }
  }
  function Ll(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function"
        ? ((kl = l), da)
        : l;
    }
  }
  var kl = null;
  function Bf() {
    if (kl === null) throw Error(r(459));
    var e = kl;
    return ((kl = null), e);
  }
  function qf(e) {
    if (e === da || e === ei) throw Error(r(483));
  }
  var ma = null,
    Wa = 0;
  function li(e) {
    var t = Wa;
    return ((Wa += 1), ma === null && (ma = []), Uf(ma, e, t));
  }
  function $a(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function ai(e, t) {
    throw t.$$typeof === B
      ? Error(r(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          r(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ));
  }
  function Lf(e) {
    function t(y, d) {
      if (e) {
        var g = y.deletions;
        g === null ? ((y.deletions = [d]), (y.flags |= 16)) : g.push(d);
      }
    }
    function l(y, d) {
      if (!e) return null;
      for (; d !== null; ) (t(y, d), (d = d.sibling));
      return null;
    }
    function a(y) {
      for (var d = new Map(); y !== null; )
        (y.key !== null ? d.set(y.key, y) : d.set(y.index, y), (y = y.sibling));
      return d;
    }
    function n(y, d) {
      return ((y = kt(y, d)), (y.index = 0), (y.sibling = null), y);
    }
    function i(y, d, g) {
      return (
        (y.index = g),
        e
          ? ((g = y.alternate),
            g !== null
              ? ((g = g.index), g < d ? ((y.flags |= 67108866), d) : g)
              : ((y.flags |= 67108866), d))
          : ((y.flags |= 1048576), d)
      );
    }
    function u(y) {
      return (e && y.alternate === null && (y.flags |= 67108866), y);
    }
    function s(y, d, g, N) {
      return d === null || d.tag !== 6
        ? ((d = wu(g, y.mode, N)), (d.return = y), d)
        : ((d = n(d, g)), (d.return = y), d);
    }
    function f(y, d, g, N) {
      var Y = g.type;
      return Y === P
        ? j(y, d, g.props.children, N, g.key)
        : d !== null &&
            (d.elementType === Y ||
              (typeof Y == "object" &&
                Y !== null &&
                Y.$$typeof === be &&
                Ll(Y) === d.type))
          ? ((d = n(d, g.props)), $a(d, g), (d.return = y), d)
          : ((d = Wn(g.type, g.key, g.props, null, y.mode, N)),
            $a(d, g),
            (d.return = y),
            d);
    }
    function p(y, d, g, N) {
      return d === null ||
        d.tag !== 4 ||
        d.stateNode.containerInfo !== g.containerInfo ||
        d.stateNode.implementation !== g.implementation
        ? ((d = Ou(g, y.mode, N)), (d.return = y), d)
        : ((d = n(d, g.children || [])), (d.return = y), d);
    }
    function j(y, d, g, N, Y) {
      return d === null || d.tag !== 7
        ? ((d = Hl(g, y.mode, N, Y)), (d.return = y), d)
        : ((d = n(d, g)), (d.return = y), d);
    }
    function A(y, d, g) {
      if (
        (typeof d == "string" && d !== "") ||
        typeof d == "number" ||
        typeof d == "bigint"
      )
        return ((d = wu("" + d, y.mode, g)), (d.return = y), d);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case ue:
            return (
              (g = Wn(d.type, d.key, d.props, null, y.mode, g)),
              $a(g, d),
              (g.return = y),
              g
            );
          case I:
            return ((d = Ou(d, y.mode, g)), (d.return = y), d);
          case be:
            return ((d = Ll(d)), A(y, d, g));
        }
        if (Mt(d) || Le(d))
          return ((d = Hl(d, y.mode, g, null)), (d.return = y), d);
        if (typeof d.then == "function") return A(y, li(d), g);
        if (d.$$typeof === re) return A(y, In(y, d), g);
        ai(y, d);
      }
      return null;
    }
    function x(y, d, g, N) {
      var Y = d !== null ? d.key : null;
      if (
        (typeof g == "string" && g !== "") ||
        typeof g == "number" ||
        typeof g == "bigint"
      )
        return Y !== null ? null : s(y, d, "" + g, N);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case ue:
            return g.key === Y ? f(y, d, g, N) : null;
          case I:
            return g.key === Y ? p(y, d, g, N) : null;
          case be:
            return ((g = Ll(g)), x(y, d, g, N));
        }
        if (Mt(g) || Le(g)) return Y !== null ? null : j(y, d, g, N, null);
        if (typeof g.then == "function") return x(y, d, li(g), N);
        if (g.$$typeof === re) return x(y, d, In(y, g), N);
        ai(y, g);
      }
      return null;
    }
    function b(y, d, g, N, Y) {
      if (
        (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
      )
        return ((y = y.get(g) || null), s(d, y, "" + N, Y));
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case ue:
            return (
              (y = y.get(N.key === null ? g : N.key) || null),
              f(d, y, N, Y)
            );
          case I:
            return (
              (y = y.get(N.key === null ? g : N.key) || null),
              p(d, y, N, Y)
            );
          case be:
            return ((N = Ll(N)), b(y, d, g, N, Y));
        }
        if (Mt(N) || Le(N))
          return ((y = y.get(g) || null), j(d, y, N, Y, null));
        if (typeof N.then == "function") return b(y, d, g, li(N), Y);
        if (N.$$typeof === re) return b(y, d, g, In(d, N), Y);
        ai(d, N);
      }
      return null;
    }
    function q(y, d, g, N) {
      for (
        var Y = null, ce = null, k = d, F = (d = 0), ne = null;
        k !== null && F < g.length;
        F++
      ) {
        k.index > F ? ((ne = k), (k = null)) : (ne = k.sibling);
        var se = x(y, k, g[F], N);
        if (se === null) {
          k === null && (k = ne);
          break;
        }
        (e && k && se.alternate === null && t(y, k),
          (d = i(se, d, F)),
          ce === null ? (Y = se) : (ce.sibling = se),
          (ce = se),
          (k = ne));
      }
      if (F === g.length) return (l(y, k), ie && Yt(y, F), Y);
      if (k === null) {
        for (; F < g.length; F++)
          ((k = A(y, g[F], N)),
            k !== null &&
              ((d = i(k, d, F)),
              ce === null ? (Y = k) : (ce.sibling = k),
              (ce = k)));
        return (ie && Yt(y, F), Y);
      }
      for (k = a(k); F < g.length; F++)
        ((ne = b(k, y, F, g[F], N)),
          ne !== null &&
            (e &&
              ne.alternate !== null &&
              k.delete(ne.key === null ? F : ne.key),
            (d = i(ne, d, F)),
            ce === null ? (Y = ne) : (ce.sibling = ne),
            (ce = ne)));
      return (
        e &&
          k.forEach(function (El) {
            return t(y, El);
          }),
        ie && Yt(y, F),
        Y
      );
    }
    function G(y, d, g, N) {
      if (g == null) throw Error(r(151));
      for (
        var Y = null, ce = null, k = d, F = (d = 0), ne = null, se = g.next();
        k !== null && !se.done;
        F++, se = g.next()
      ) {
        k.index > F ? ((ne = k), (k = null)) : (ne = k.sibling);
        var El = x(y, k, se.value, N);
        if (El === null) {
          k === null && (k = ne);
          break;
        }
        (e && k && El.alternate === null && t(y, k),
          (d = i(El, d, F)),
          ce === null ? (Y = El) : (ce.sibling = El),
          (ce = El),
          (k = ne));
      }
      if (se.done) return (l(y, k), ie && Yt(y, F), Y);
      if (k === null) {
        for (; !se.done; F++, se = g.next())
          ((se = A(y, se.value, N)),
            se !== null &&
              ((d = i(se, d, F)),
              ce === null ? (Y = se) : (ce.sibling = se),
              (ce = se)));
        return (ie && Yt(y, F), Y);
      }
      for (k = a(k); !se.done; F++, se = g.next())
        ((se = b(k, y, F, se.value, N)),
          se !== null &&
            (e &&
              se.alternate !== null &&
              k.delete(se.key === null ? F : se.key),
            (d = i(se, d, F)),
            ce === null ? (Y = se) : (ce.sibling = se),
            (ce = se)));
      return (
        e &&
          k.forEach(function (xh) {
            return t(y, xh);
          }),
        ie && Yt(y, F),
        Y
      );
    }
    function xe(y, d, g, N) {
      if (
        (typeof g == "object" &&
          g !== null &&
          g.type === P &&
          g.key === null &&
          (g = g.props.children),
        typeof g == "object" && g !== null)
      ) {
        switch (g.$$typeof) {
          case ue:
            e: {
              for (var Y = g.key; d !== null; ) {
                if (d.key === Y) {
                  if (((Y = g.type), Y === P)) {
                    if (d.tag === 7) {
                      (l(y, d.sibling),
                        (N = n(d, g.props.children)),
                        (N.return = y),
                        (y = N));
                      break e;
                    }
                  } else if (
                    d.elementType === Y ||
                    (typeof Y == "object" &&
                      Y !== null &&
                      Y.$$typeof === be &&
                      Ll(Y) === d.type)
                  ) {
                    (l(y, d.sibling),
                      (N = n(d, g.props)),
                      $a(N, g),
                      (N.return = y),
                      (y = N));
                    break e;
                  }
                  l(y, d);
                  break;
                } else t(y, d);
                d = d.sibling;
              }
              g.type === P
                ? ((N = Hl(g.props.children, y.mode, N, g.key)),
                  (N.return = y),
                  (y = N))
                : ((N = Wn(g.type, g.key, g.props, null, y.mode, N)),
                  $a(N, g),
                  (N.return = y),
                  (y = N));
            }
            return u(y);
          case I:
            e: {
              for (Y = g.key; d !== null; ) {
                if (d.key === Y)
                  if (
                    d.tag === 4 &&
                    d.stateNode.containerInfo === g.containerInfo &&
                    d.stateNode.implementation === g.implementation
                  ) {
                    (l(y, d.sibling),
                      (N = n(d, g.children || [])),
                      (N.return = y),
                      (y = N));
                    break e;
                  } else {
                    l(y, d);
                    break;
                  }
                else t(y, d);
                d = d.sibling;
              }
              ((N = Ou(g, y.mode, N)), (N.return = y), (y = N));
            }
            return u(y);
          case be:
            return ((g = Ll(g)), xe(y, d, g, N));
        }
        if (Mt(g)) return q(y, d, g, N);
        if (Le(g)) {
          if (((Y = Le(g)), typeof Y != "function")) throw Error(r(150));
          return ((g = Y.call(g)), G(y, d, g, N));
        }
        if (typeof g.then == "function") return xe(y, d, li(g), N);
        if (g.$$typeof === re) return xe(y, d, In(y, g), N);
        ai(y, g);
      }
      return (typeof g == "string" && g !== "") ||
        typeof g == "number" ||
        typeof g == "bigint"
        ? ((g = "" + g),
          d !== null && d.tag === 6
            ? (l(y, d.sibling), (N = n(d, g)), (N.return = y), (y = N))
            : (l(y, d), (N = wu(g, y.mode, N)), (N.return = y), (y = N)),
          u(y))
        : l(y, d);
    }
    return function (y, d, g, N) {
      try {
        Wa = 0;
        var Y = xe(y, d, g, N);
        return ((ma = null), Y);
      } catch (k) {
        if (k === da || k === ei) throw k;
        var ce = ft(29, k, null, y.mode);
        return ((ce.lanes = N), (ce.return = y), ce);
      }
    };
  }
  var Yl = Lf(!0),
    kf = Lf(!1),
    fl = !1;
  function Xu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Vu(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function rl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ol(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (fe & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (a.pending = t),
        (t = Jn(e)),
        zf(e, null, l),
        t
      );
    }
    return (Kn(e, a, t, l), Jn(e));
  }
  function Fa(e, t, l) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))
    ) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (l |= a), (t.lanes = l), Ds(e, l));
    }
  }
  function Zu(e, t) {
    var l = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        i = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var u = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          (i === null ? (n = i = u) : (i = i.next = u), (l = l.next));
        } while (l !== null);
        i === null ? (n = i = t) : (i = i.next = t);
      } else n = i = t;
      ((l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: i,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (e.updateQueue = l));
      return;
    }
    ((e = l.lastBaseUpdate),
      e === null ? (l.firstBaseUpdate = t) : (e.next = t),
      (l.lastBaseUpdate = t));
  }
  var Ku = !1;
  function Ia() {
    if (Ku) {
      var e = oa;
      if (e !== null) throw e;
    }
  }
  function Pa(e, t, l, a) {
    Ku = !1;
    var n = e.updateQueue;
    fl = !1;
    var i = n.firstBaseUpdate,
      u = n.lastBaseUpdate,
      s = n.shared.pending;
    if (s !== null) {
      n.shared.pending = null;
      var f = s,
        p = f.next;
      ((f.next = null), u === null ? (i = p) : (u.next = p), (u = f));
      var j = e.alternate;
      j !== null &&
        ((j = j.updateQueue),
        (s = j.lastBaseUpdate),
        s !== u &&
          (s === null ? (j.firstBaseUpdate = p) : (s.next = p),
          (j.lastBaseUpdate = f)));
    }
    if (i !== null) {
      var A = n.baseState;
      ((u = 0), (j = p = f = null), (s = i));
      do {
        var x = s.lane & -536870913,
          b = x !== s.lane;
        if (b ? (ae & x) === x : (a & x) === x) {
          (x !== 0 && x === ra && (Ku = !0),
            j !== null &&
              (j = j.next =
                {
                  lane: 0,
                  tag: s.tag,
                  payload: s.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var q = e,
              G = s;
            x = t;
            var xe = l;
            switch (G.tag) {
              case 1:
                if (((q = G.payload), typeof q == "function")) {
                  A = q.call(xe, A, x);
                  break e;
                }
                A = q;
                break e;
              case 3:
                q.flags = (q.flags & -65537) | 128;
              case 0:
                if (
                  ((q = G.payload),
                  (x = typeof q == "function" ? q.call(xe, A, x) : q),
                  x == null)
                )
                  break e;
                A = C({}, A, x);
                break e;
              case 2:
                fl = !0;
            }
          }
          ((x = s.callback),
            x !== null &&
              ((e.flags |= 64),
              b && (e.flags |= 8192),
              (b = n.callbacks),
              b === null ? (n.callbacks = [x]) : b.push(x)));
        } else
          ((b = {
            lane: x,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          }),
            j === null ? ((p = j = b), (f = A)) : (j = j.next = b),
            (u |= x));
        if (((s = s.next), s === null)) {
          if (((s = n.shared.pending), s === null)) break;
          ((b = s),
            (s = b.next),
            (b.next = null),
            (n.lastBaseUpdate = b),
            (n.shared.pending = null));
        }
      } while (!0);
      (j === null && (f = A),
        (n.baseState = f),
        (n.firstBaseUpdate = p),
        (n.lastBaseUpdate = j),
        i === null && (n.shared.lanes = 0),
        (vl |= u),
        (e.lanes = u),
        (e.memoizedState = A));
    }
  }
  function Yf(e, t) {
    if (typeof e != "function") throw Error(r(191, e));
    e.call(t);
  }
  function Gf(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++) Yf(l[e], t);
  }
  var ha = m(null),
    ni = m(0);
  function Qf(e, t) {
    ((e = It), R(ni, e), R(ha, t), (It = e | t.baseLanes));
  }
  function Ju() {
    (R(ni, It), R(ha, ha.current));
  }
  function Wu() {
    ((It = ni.current), M(ha), M(ni));
  }
  var rt = m(null),
    At = null;
  function dl(e) {
    var t = e.alternate;
    (R(we, we.current & 1),
      R(rt, e),
      At === null &&
        (t === null || ha.current !== null || t.memoizedState !== null) &&
        (At = e));
  }
  function $u(e) {
    (R(we, we.current), R(rt, e), At === null && (At = e));
  }
  function Xf(e) {
    e.tag === 22
      ? (R(we, we.current), R(rt, e), At === null && (At = e))
      : ml();
  }
  function ml() {
    (R(we, we.current), R(rt, rt.current));
  }
  function ot(e) {
    (M(rt), At === e && (At = null), M(we));
  }
  var we = m(0);
  function ii(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || ls(l) || as(l)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Xt = 0,
    $ = null,
    ge = null,
    He = null,
    ui = !1,
    ya = !1,
    Gl = !1,
    ci = 0,
    en = 0,
    va = null,
    fm = 0;
  function Te() {
    throw Error(r(321));
  }
  function Fu(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!st(e[l], t[l])) return !1;
    return !0;
  }
  function Iu(e, t, l, a, n, i) {
    return (
      (Xt = i),
      ($ = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (z.H = e === null || e.memoizedState === null ? Tr : mc),
      (Gl = !1),
      (i = l(a, n)),
      (Gl = !1),
      ya && (i = Zf(t, l, a, n)),
      Vf(e),
      i
    );
  }
  function Vf(e) {
    z.H = an;
    var t = ge !== null && ge.next !== null;
    if (((Xt = 0), (He = ge = $ = null), (ui = !1), (en = 0), (va = null), t))
      throw Error(r(300));
    e === null ||
      Re ||
      ((e = e.dependencies), e !== null && Fn(e) && (Re = !0));
  }
  function Zf(e, t, l, a) {
    $ = e;
    var n = 0;
    do {
      if ((ya && (va = null), (en = 0), (ya = !1), 25 <= n))
        throw Error(r(301));
      if (((n += 1), (He = ge = null), e.updateQueue != null)) {
        var i = e.updateQueue;
        ((i.lastEffect = null),
          (i.events = null),
          (i.stores = null),
          i.memoCache != null && (i.memoCache.index = 0));
      }
      ((z.H = Mr), (i = t(l, a)));
    } while (ya);
    return i;
  }
  function rm() {
    var e = z.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? tn(t) : t),
      (e = e.useState()[0]),
      (ge !== null ? ge.memoizedState : null) !== e && ($.flags |= 1024),
      t
    );
  }
  function Pu() {
    var e = ci !== 0;
    return ((ci = 0), e);
  }
  function ec(e, t, l) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l));
  }
  function tc(e) {
    if (ui) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      ui = !1;
    }
    ((Xt = 0), (He = ge = $ = null), (ya = !1), (en = ci = 0), (va = null));
  }
  function $e() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (He === null ? ($.memoizedState = He = e) : (He = He.next = e), He);
  }
  function Oe() {
    if (ge === null) {
      var e = $.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ge.next;
    var t = He === null ? $.memoizedState : He.next;
    if (t !== null) ((He = t), (ge = e));
    else {
      if (e === null)
        throw $.alternate === null ? Error(r(467)) : Error(r(310));
      ((ge = e),
        (e = {
          memoizedState: ge.memoizedState,
          baseState: ge.baseState,
          baseQueue: ge.baseQueue,
          queue: ge.queue,
          next: null,
        }),
        He === null ? ($.memoizedState = He = e) : (He = He.next = e));
    }
    return He;
  }
  function si() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function tn(e) {
    var t = en;
    return (
      (en += 1),
      va === null && (va = []),
      (e = Uf(va, e, t)),
      (t = $),
      (He === null ? t.memoizedState : He.next) === null &&
        ((t = t.alternate),
        (z.H = t === null || t.memoizedState === null ? Tr : mc)),
      e
    );
  }
  function fi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return tn(e);
      if (e.$$typeof === re) return Ve(e);
    }
    throw Error(r(438, String(e)));
  }
  function lc(e) {
    var t = null,
      l = $.updateQueue;
    if ((l !== null && (t = l.memoCache), t == null)) {
      var a = $.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      l === null && ((l = si()), ($.updateQueue = l)),
      (l.memoCache = t),
      (l = t.data[t.index]),
      l === void 0)
    )
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = _e;
    return (t.index++, l);
  }
  function Vt(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ri(e) {
    var t = Oe();
    return ac(t, ge, e);
  }
  function ac(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = l;
    var n = e.baseQueue,
      i = a.pending;
    if (i !== null) {
      if (n !== null) {
        var u = n.next;
        ((n.next = i.next), (i.next = u));
      }
      ((t.baseQueue = n = i), (a.pending = null));
    }
    if (((i = e.baseState), n === null)) e.memoizedState = i;
    else {
      t = n.next;
      var s = (u = null),
        f = null,
        p = t,
        j = !1;
      do {
        var A = p.lane & -536870913;
        if (A !== p.lane ? (ae & A) === A : (Xt & A) === A) {
          var x = p.revertLane;
          if (x === 0)
            (f !== null &&
              (f = f.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: p.action,
                  hasEagerState: p.hasEagerState,
                  eagerState: p.eagerState,
                  next: null,
                }),
              A === ra && (j = !0));
          else if ((Xt & x) === x) {
            ((p = p.next), x === ra && (j = !0));
            continue;
          } else
            ((A = {
              lane: 0,
              revertLane: p.revertLane,
              gesture: null,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null,
            }),
              f === null ? ((s = f = A), (u = i)) : (f = f.next = A),
              ($.lanes |= x),
              (vl |= x));
          ((A = p.action),
            Gl && l(i, A),
            (i = p.hasEagerState ? p.eagerState : l(i, A)));
        } else
          ((x = {
            lane: A,
            revertLane: p.revertLane,
            gesture: p.gesture,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null,
          }),
            f === null ? ((s = f = x), (u = i)) : (f = f.next = x),
            ($.lanes |= A),
            (vl |= A));
        p = p.next;
      } while (p !== null && p !== t);
      if (
        (f === null ? (u = i) : (f.next = s),
        !st(i, e.memoizedState) && ((Re = !0), j && ((l = oa), l !== null)))
      )
        throw l;
      ((e.memoizedState = i),
        (e.baseState = u),
        (e.baseQueue = f),
        (a.lastRenderedState = i));
    }
    return (n === null && (a.lanes = 0), [e.memoizedState, a.dispatch]);
  }
  function nc(e) {
    var t = Oe(),
      l = t.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch,
      n = l.pending,
      i = t.memoizedState;
    if (n !== null) {
      l.pending = null;
      var u = (n = n.next);
      do ((i = e(i, u.action)), (u = u.next));
      while (u !== n);
      (st(i, t.memoizedState) || (Re = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (l.lastRenderedState = i));
    }
    return [i, a];
  }
  function Kf(e, t, l) {
    var a = $,
      n = Oe(),
      i = ie;
    if (i) {
      if (l === void 0) throw Error(r(407));
      l = l();
    } else l = t();
    var u = !st((ge || n).memoizedState, l);
    if (
      (u && ((n.memoizedState = l), (Re = !0)),
      (n = n.queue),
      cc($f.bind(null, a, n, e), [e]),
      n.getSnapshot !== t || u || (He !== null && He.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        ga(9, { destroy: void 0 }, Wf.bind(null, a, n, l, t), null),
        je === null)
      )
        throw Error(r(349));
      i || (Xt & 127) !== 0 || Jf(a, t, l);
    }
    return l;
  }
  function Jf(e, t, l) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: l }),
      (t = $.updateQueue),
      t === null
        ? ((t = si()), ($.updateQueue = t), (t.stores = [e]))
        : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e)));
  }
  function Wf(e, t, l, a) {
    ((t.value = l), (t.getSnapshot = a), Ff(t) && If(e));
  }
  function $f(e, t, l) {
    return l(function () {
      Ff(t) && If(e);
    });
  }
  function Ff(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !st(e, l);
    } catch {
      return !0;
    }
  }
  function If(e) {
    var t = Cl(e, 2);
    t !== null && nt(t, e, 2);
  }
  function ic(e) {
    var t = $e();
    if (typeof e == "function") {
      var l = e;
      if (((e = l()), Gl)) {
        ll(!0);
        try {
          l();
        } finally {
          ll(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vt,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Pf(e, t, l, a) {
    return ((e.baseState = l), ac(e, ge, typeof a == "function" ? a : Vt));
  }
  function om(e, t, l, a, n) {
    if (mi(e)) throw Error(r(485));
    if (((e = t.action), e !== null)) {
      var i = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (u) {
          i.listeners.push(u);
        },
      };
      (z.T !== null ? l(!0) : (i.isTransition = !1),
        a(i),
        (l = t.pending),
        l === null
          ? ((i.next = t.pending = i), er(t, i))
          : ((i.next = l.next), (t.pending = l.next = i)));
    }
  }
  function er(e, t) {
    var l = t.action,
      a = t.payload,
      n = e.state;
    if (t.isTransition) {
      var i = z.T,
        u = {};
      z.T = u;
      try {
        var s = l(n, a),
          f = z.S;
        (f !== null && f(u, s), tr(e, t, s));
      } catch (p) {
        uc(e, t, p);
      } finally {
        (i !== null && u.types !== null && (i.types = u.types), (z.T = i));
      }
    } else
      try {
        ((i = l(n, a)), tr(e, t, i));
      } catch (p) {
        uc(e, t, p);
      }
  }
  function tr(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (a) {
            lr(e, t, a);
          },
          function (a) {
            return uc(e, t, a);
          },
        )
      : lr(e, t, l);
  }
  function lr(e, t, l) {
    ((t.status = "fulfilled"),
      (t.value = l),
      ar(t),
      (e.state = l),
      (t = e.pending),
      t !== null &&
        ((l = t.next),
        l === t ? (e.pending = null) : ((l = l.next), (t.next = l), er(e, l))));
  }
  function uc(e, t, l) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do ((t.status = "rejected"), (t.reason = l), ar(t), (t = t.next));
      while (t !== a);
    }
    e.action = null;
  }
  function ar(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function nr(e, t) {
    return t;
  }
  function ir(e, t) {
    if (ie) {
      var l = je.formState;
      if (l !== null) {
        e: {
          var a = $;
          if (ie) {
            if (ze) {
              t: {
                for (var n = ze, i = Nt; n.nodeType !== 8; ) {
                  if (!i) {
                    n = null;
                    break t;
                  }
                  if (((n = Et(n.nextSibling)), n === null)) {
                    n = null;
                    break t;
                  }
                }
                ((i = n.data), (n = i === "F!" || i === "F" ? n : null));
              }
              if (n) {
                ((ze = Et(n.nextSibling)), (a = n.data === "F!"));
                break e;
              }
            }
            cl(a);
          }
          a = !1;
        }
        a && (t = l[0]);
      }
    }
    return (
      (l = $e()),
      (l.memoizedState = l.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: nr,
        lastRenderedState: t,
      }),
      (l.queue = a),
      (l = Nr.bind(null, $, a)),
      (a.dispatch = l),
      (a = ic(!1)),
      (i = dc.bind(null, $, !1, a.queue)),
      (a = $e()),
      (n = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = n),
      (l = om.bind(null, $, n, i, l)),
      (n.dispatch = l),
      (a.memoizedState = e),
      [t, l, !1]
    );
  }
  function ur(e) {
    var t = Oe();
    return cr(t, ge, e);
  }
  function cr(e, t, l) {
    if (
      ((t = ac(e, t, nr)[0]),
      (e = ri(Vt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var a = tn(t);
      } catch (u) {
        throw u === da ? ei : u;
      }
    else a = t;
    t = Oe();
    var n = t.queue,
      i = n.dispatch;
    return (
      l !== t.memoizedState &&
        (($.flags |= 2048),
        ga(9, { destroy: void 0 }, dm.bind(null, n, l), null)),
      [a, i, e]
    );
  }
  function dm(e, t) {
    e.action = t;
  }
  function sr(e) {
    var t = Oe(),
      l = ge;
    if (l !== null) return cr(t, l, e);
    (Oe(), (t = t.memoizedState), (l = Oe()));
    var a = l.queue.dispatch;
    return ((l.memoizedState = e), [t, a, !1]);
  }
  function ga(e, t, l, a) {
    return (
      (e = { tag: e, create: l, deps: a, inst: t, next: null }),
      (t = $.updateQueue),
      t === null && ((t = si()), ($.updateQueue = t)),
      (l = t.lastEffect),
      l === null
        ? (t.lastEffect = e.next = e)
        : ((a = l.next), (l.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function fr() {
    return Oe().memoizedState;
  }
  function oi(e, t, l, a) {
    var n = $e();
    (($.flags |= e),
      (n.memoizedState = ga(
        1 | t,
        { destroy: void 0 },
        l,
        a === void 0 ? null : a,
      )));
  }
  function di(e, t, l, a) {
    var n = Oe();
    a = a === void 0 ? null : a;
    var i = n.memoizedState.inst;
    ge !== null && a !== null && Fu(a, ge.memoizedState.deps)
      ? (n.memoizedState = ga(t, i, l, a))
      : (($.flags |= e), (n.memoizedState = ga(1 | t, i, l, a)));
  }
  function rr(e, t) {
    oi(8390656, 8, e, t);
  }
  function cc(e, t) {
    di(2048, 8, e, t);
  }
  function mm(e) {
    $.flags |= 4;
    var t = $.updateQueue;
    if (t === null) ((t = si()), ($.updateQueue = t), (t.events = [e]));
    else {
      var l = t.events;
      l === null ? (t.events = [e]) : l.push(e);
    }
  }
  function or(e) {
    var t = Oe().memoizedState;
    return (
      mm({ ref: t, nextImpl: e }),
      function () {
        if ((fe & 2) !== 0) throw Error(r(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function dr(e, t) {
    return di(4, 2, e, t);
  }
  function mr(e, t) {
    return di(4, 4, e, t);
  }
  function hr(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function () {
        typeof l == "function" ? l() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function yr(e, t, l) {
    ((l = l != null ? l.concat([e]) : null), di(4, 4, hr.bind(null, t, e), l));
  }
  function sc() {}
  function vr(e, t) {
    var l = Oe();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && Fu(t, a[1]) ? a[0] : ((l.memoizedState = [e, t]), e);
  }
  function gr(e, t) {
    var l = Oe();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && Fu(t, a[1])) return a[0];
    if (((a = e()), Gl)) {
      ll(!0);
      try {
        e();
      } finally {
        ll(!1);
      }
    }
    return ((l.memoizedState = [a, t]), a);
  }
  function fc(e, t, l) {
    return l === void 0 || ((Xt & 1073741824) !== 0 && (ae & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = l), (e = xo()), ($.lanes |= e), (vl |= e), l);
  }
  function pr(e, t, l, a) {
    return st(l, t)
      ? l
      : ha.current !== null
        ? ((e = fc(e, l, a)), st(e, t) || (Re = !0), e)
        : (Xt & 42) === 0 || ((Xt & 1073741824) !== 0 && (ae & 261930) === 0)
          ? ((Re = !0), (e.memoizedState = l))
          : ((e = xo()), ($.lanes |= e), (vl |= e), t);
  }
  function xr(e, t, l, a, n) {
    var i = H.p;
    H.p = i !== 0 && 8 > i ? i : 8;
    var u = z.T,
      s = {};
    ((z.T = s), dc(e, !1, t, l));
    try {
      var f = n(),
        p = z.S;
      if (
        (p !== null && p(s, f),
        f !== null && typeof f == "object" && typeof f.then == "function")
      ) {
        var j = sm(f, a);
        ln(e, t, j, ht(e));
      } else ln(e, t, a, ht(e));
    } catch (A) {
      ln(e, t, { then: function () {}, status: "rejected", reason: A }, ht());
    } finally {
      ((H.p = i),
        u !== null && s.types !== null && (u.types = s.types),
        (z.T = u));
    }
  }
  function hm() {}
  function rc(e, t, l, a) {
    if (e.tag !== 5) throw Error(r(476));
    var n = br(e).queue;
    xr(
      e,
      n,
      t,
      X,
      l === null
        ? hm
        : function () {
            return (Sr(e), l(a));
          },
    );
  }
  function br(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: X,
      baseState: X,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vt,
        lastRenderedState: X,
      },
      next: null,
    };
    var l = {};
    return (
      (t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Vt,
          lastRenderedState: l,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Sr(e) {
    var t = br(e);
    (t.next === null && (t = e.alternate.memoizedState),
      ln(e, t.next.queue, {}, ht()));
  }
  function oc() {
    return Ve(bn);
  }
  function jr() {
    return Oe().memoizedState;
  }
  function zr() {
    return Oe().memoizedState;
  }
  function ym(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = ht();
          e = rl(l);
          var a = ol(t, e, l);
          (a !== null && (nt(a, t, l), Fa(a, t, l)),
            (t = { cache: ku() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function vm(e, t, l) {
    var a = ht();
    ((l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      mi(e)
        ? Ar(t, l)
        : ((l = _u(e, t, l, a)), l !== null && (nt(l, e, a), Er(l, t, a))));
  }
  function Nr(e, t, l) {
    var a = ht();
    ln(e, t, l, a);
  }
  function ln(e, t, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (mi(e)) Ar(t, n);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var u = t.lastRenderedState,
            s = i(u, l);
          if (((n.hasEagerState = !0), (n.eagerState = s), st(s, u)))
            return (Kn(e, t, n, 0), je === null && Zn(), !1);
        } catch {}
      if (((l = _u(e, t, n, a)), l !== null))
        return (nt(l, e, a), Er(l, t, a), !0);
    }
    return !1;
  }
  function dc(e, t, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Xc(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      mi(e))
    ) {
      if (t) throw Error(r(479));
    } else ((t = _u(e, l, a, 2)), t !== null && nt(t, e, 2));
  }
  function mi(e) {
    var t = e.alternate;
    return e === $ || (t !== null && t === $);
  }
  function Ar(e, t) {
    ya = ui = !0;
    var l = e.pending;
    (l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (e.pending = t));
  }
  function Er(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (l |= a), (t.lanes = l), Ds(e, l));
    }
  }
  var an = {
    readContext: Ve,
    use: fi,
    useCallback: Te,
    useContext: Te,
    useEffect: Te,
    useImperativeHandle: Te,
    useLayoutEffect: Te,
    useInsertionEffect: Te,
    useMemo: Te,
    useReducer: Te,
    useRef: Te,
    useState: Te,
    useDebugValue: Te,
    useDeferredValue: Te,
    useTransition: Te,
    useSyncExternalStore: Te,
    useId: Te,
    useHostTransitionStatus: Te,
    useFormState: Te,
    useActionState: Te,
    useOptimistic: Te,
    useMemoCache: Te,
    useCacheRefresh: Te,
  };
  an.useEffectEvent = Te;
  var Tr = {
      readContext: Ve,
      use: fi,
      useCallback: function (e, t) {
        return (($e().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Ve,
      useEffect: rr,
      useImperativeHandle: function (e, t, l) {
        ((l = l != null ? l.concat([e]) : null),
          oi(4194308, 4, hr.bind(null, t, e), l));
      },
      useLayoutEffect: function (e, t) {
        return oi(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        oi(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var l = $e();
        t = t === void 0 ? null : t;
        var a = e();
        if (Gl) {
          ll(!0);
          try {
            e();
          } finally {
            ll(!1);
          }
        }
        return ((l.memoizedState = [a, t]), a);
      },
      useReducer: function (e, t, l) {
        var a = $e();
        if (l !== void 0) {
          var n = l(t);
          if (Gl) {
            ll(!0);
            try {
              l(t);
            } finally {
              ll(!1);
            }
          }
        } else n = t;
        return (
          (a.memoizedState = a.baseState = n),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (a.queue = e),
          (e = e.dispatch = vm.bind(null, $, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = $e();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = ic(e);
        var t = e.queue,
          l = Nr.bind(null, $, t);
        return ((t.dispatch = l), [e.memoizedState, l]);
      },
      useDebugValue: sc,
      useDeferredValue: function (e, t) {
        var l = $e();
        return fc(l, e, t);
      },
      useTransition: function () {
        var e = ic(!1);
        return (
          (e = xr.bind(null, $, e.queue, !0, !1)),
          ($e().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, l) {
        var a = $,
          n = $e();
        if (ie) {
          if (l === void 0) throw Error(r(407));
          l = l();
        } else {
          if (((l = t()), je === null)) throw Error(r(349));
          (ae & 127) !== 0 || Jf(a, t, l);
        }
        n.memoizedState = l;
        var i = { value: l, getSnapshot: t };
        return (
          (n.queue = i),
          rr($f.bind(null, a, i, e), [e]),
          (a.flags |= 2048),
          ga(9, { destroy: void 0 }, Wf.bind(null, a, i, l, t), null),
          l
        );
      },
      useId: function () {
        var e = $e(),
          t = je.identifierPrefix;
        if (ie) {
          var l = Ht,
            a = Ct;
          ((l = (a & ~(1 << (32 - ct(a) - 1))).toString(32) + l),
            (t = "_" + t + "R_" + l),
            (l = ci++),
            0 < l && (t += "H" + l.toString(32)),
            (t += "_"));
        } else ((l = fm++), (t = "_" + t + "r_" + l.toString(32) + "_"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: oc,
      useFormState: ir,
      useActionState: ir,
      useOptimistic: function (e) {
        var t = $e();
        t.memoizedState = t.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = l),
          (t = dc.bind(null, $, !0, l)),
          (l.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: lc,
      useCacheRefresh: function () {
        return ($e().memoizedState = ym.bind(null, $));
      },
      useEffectEvent: function (e) {
        var t = $e(),
          l = { impl: e };
        return (
          (t.memoizedState = l),
          function () {
            if ((fe & 2) !== 0) throw Error(r(440));
            return l.impl.apply(void 0, arguments);
          }
        );
      },
    },
    mc = {
      readContext: Ve,
      use: fi,
      useCallback: vr,
      useContext: Ve,
      useEffect: cc,
      useImperativeHandle: yr,
      useInsertionEffect: dr,
      useLayoutEffect: mr,
      useMemo: gr,
      useReducer: ri,
      useRef: fr,
      useState: function () {
        return ri(Vt);
      },
      useDebugValue: sc,
      useDeferredValue: function (e, t) {
        var l = Oe();
        return pr(l, ge.memoizedState, e, t);
      },
      useTransition: function () {
        var e = ri(Vt)[0],
          t = Oe().memoizedState;
        return [typeof e == "boolean" ? e : tn(e), t];
      },
      useSyncExternalStore: Kf,
      useId: jr,
      useHostTransitionStatus: oc,
      useFormState: ur,
      useActionState: ur,
      useOptimistic: function (e, t) {
        var l = Oe();
        return Pf(l, ge, e, t);
      },
      useMemoCache: lc,
      useCacheRefresh: zr,
    };
  mc.useEffectEvent = or;
  var Mr = {
    readContext: Ve,
    use: fi,
    useCallback: vr,
    useContext: Ve,
    useEffect: cc,
    useImperativeHandle: yr,
    useInsertionEffect: dr,
    useLayoutEffect: mr,
    useMemo: gr,
    useReducer: nc,
    useRef: fr,
    useState: function () {
      return nc(Vt);
    },
    useDebugValue: sc,
    useDeferredValue: function (e, t) {
      var l = Oe();
      return ge === null ? fc(l, e, t) : pr(l, ge.memoizedState, e, t);
    },
    useTransition: function () {
      var e = nc(Vt)[0],
        t = Oe().memoizedState;
      return [typeof e == "boolean" ? e : tn(e), t];
    },
    useSyncExternalStore: Kf,
    useId: jr,
    useHostTransitionStatus: oc,
    useFormState: sr,
    useActionState: sr,
    useOptimistic: function (e, t) {
      var l = Oe();
      return ge !== null
        ? Pf(l, ge, e, t)
        : ((l.baseState = e), [e, l.queue.dispatch]);
    },
    useMemoCache: lc,
    useCacheRefresh: zr,
  };
  Mr.useEffectEvent = or;
  function hc(e, t, l, a) {
    ((t = e.memoizedState),
      (l = l(a, t)),
      (l = l == null ? t : C({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l));
  }
  var yc = {
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals;
      var a = ht(),
        n = rl(a);
      ((n.payload = t),
        l != null && (n.callback = l),
        (t = ol(e, n, a)),
        t !== null && (nt(t, e, a), Fa(t, e, a)));
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals;
      var a = ht(),
        n = rl(a);
      ((n.tag = 1),
        (n.payload = t),
        l != null && (n.callback = l),
        (t = ol(e, n, a)),
        t !== null && (nt(t, e, a), Fa(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var l = ht(),
        a = rl(l);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = ol(e, a, l)),
        t !== null && (nt(t, e, l), Fa(t, e, l)));
    },
  };
  function _r(e, t, l, a, n, i, u) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(a, i, u)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Qa(l, a) || !Qa(n, i)
          : !0
    );
  }
  function Dr(e, t, l, a) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(l, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(l, a),
      t.state !== e && yc.enqueueReplaceState(t, t.state, null));
  }
  function Ql(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var a in t) a !== "ref" && (l[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
      l === t && (l = C({}, l));
      for (var n in e) l[n] === void 0 && (l[n] = e[n]);
    }
    return l;
  }
  function wr(e) {
    Vn(e);
  }
  function Or(e) {
    console.error(e);
  }
  function Cr(e) {
    Vn(e);
  }
  function hi(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Hr(e, t, l) {
    try {
      var a = e.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function vc(e, t, l) {
    return (
      (l = rl(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        hi(e, t);
      }),
      l
    );
  }
  function Rr(e) {
    return ((e = rl(e)), (e.tag = 3), e);
  }
  function Ur(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = a.value;
      ((e.payload = function () {
        return n(i);
      }),
        (e.callback = function () {
          Hr(t, l, a);
        }));
    }
    var u = l.stateNode;
    u !== null &&
      typeof u.componentDidCatch == "function" &&
      (e.callback = function () {
        (Hr(t, l, a),
          typeof n != "function" &&
            (gl === null ? (gl = new Set([this])) : gl.add(this)));
        var s = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: s !== null ? s : "",
        });
      });
  }
  function gm(e, t, l, a, n) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = l.alternate),
        t !== null && fa(t, l, n, !0),
        (l = rt.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              At === null ? Ei() : l.alternate === null && Me === 0 && (Me = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === ti
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null ? (l.updateQueue = new Set([a])) : t.add(a),
                  Yc(e, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === ti
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = t))
                    : ((l = t.retryQueue),
                      l === null ? (t.retryQueue = new Set([a])) : l.add(a)),
                  Yc(e, a, n)),
              !1
            );
        }
        throw Error(r(435, l.tag));
      }
      return (Yc(e, a, n), Ei(), !1);
    }
    if (ie)
      return (
        (t = rt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = n),
            a !== Ru && ((e = Error(r(422), { cause: a })), Za(St(e, l))))
          : (a !== Ru && ((t = Error(r(423), { cause: a })), Za(St(t, l))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (n &= -n),
            (e.lanes |= n),
            (a = St(a, l)),
            (n = vc(e.stateNode, a, n)),
            Zu(e, n),
            Me !== 4 && (Me = 2)),
        !1
      );
    var i = Error(r(520), { cause: a });
    if (
      ((i = St(i, l)),
      dn === null ? (dn = [i]) : dn.push(i),
      Me !== 4 && (Me = 2),
      t === null)
    )
      return !0;
    ((a = St(a, l)), (l = t));
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (e = n & -n),
            (l.lanes |= e),
            (e = vc(l.stateNode, a, e)),
            Zu(l, e),
            !1
          );
        case 1:
          if (
            ((t = l.type),
            (i = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (i !== null &&
                  typeof i.componentDidCatch == "function" &&
                  (gl === null || !gl.has(i)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = Rr(n)),
              Ur(n, e, l, a),
              Zu(l, n),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var gc = Error(r(461)),
    Re = !1;
  function Ze(e, t, l, a) {
    t.child = e === null ? kf(t, null, l, a) : Yl(t, e.child, l, a);
  }
  function Br(e, t, l, a, n) {
    l = l.render;
    var i = t.ref;
    if ("ref" in a) {
      var u = {};
      for (var s in a) s !== "ref" && (u[s] = a[s]);
    } else u = a;
    return (
      Bl(t),
      (a = Iu(e, t, l, u, i, n)),
      (s = Pu()),
      e !== null && !Re
        ? (ec(e, t, n), Zt(e, t, n))
        : (ie && s && Cu(t), (t.flags |= 1), Ze(e, t, a, n), t.child)
    );
  }
  function qr(e, t, l, a, n) {
    if (e === null) {
      var i = l.type;
      return typeof i == "function" &&
        !Du(i) &&
        i.defaultProps === void 0 &&
        l.compare === null
        ? ((t.tag = 15), (t.type = i), Lr(e, t, i, a, n))
        : ((e = Wn(l.type, null, a, t, t.mode, n)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), !Ac(e, n))) {
      var u = i.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : Qa), l(u, a) && e.ref === t.ref)
      )
        return Zt(e, t, n);
    }
    return (
      (t.flags |= 1),
      (e = kt(i, a)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Lr(e, t, l, a, n) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Qa(i, a) && e.ref === t.ref)
        if (((Re = !1), (t.pendingProps = a = i), Ac(e, n)))
          (e.flags & 131072) !== 0 && (Re = !0);
        else return ((t.lanes = e.lanes), Zt(e, t, n));
    }
    return pc(e, t, l, a, n);
  }
  function kr(e, t, l, a) {
    var n = a.children,
      i = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((i = i !== null ? i.baseLanes | l : l), e !== null)) {
          for (a = t.child = e.child, n = 0; a !== null; )
            ((n = n | a.lanes | a.childLanes), (a = a.sibling));
          a = n & ~i;
        } else ((a = 0), (t.child = null));
        return Yr(e, t, i, l, a);
      }
      if ((l & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Pn(t, i !== null ? i.cachePool : null),
          i !== null ? Qf(t, i) : Ju(),
          Xf(t));
      else
        return (
          (a = t.lanes = 536870912),
          Yr(e, t, i !== null ? i.baseLanes | l : l, l, a)
        );
    } else
      i !== null
        ? (Pn(t, i.cachePool), Qf(t, i), ml(), (t.memoizedState = null))
        : (e !== null && Pn(t, null), Ju(), ml());
    return (Ze(e, t, n, l), t.child);
  }
  function nn(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function Yr(e, t, l, a, n) {
    var i = Gu();
    return (
      (i = i === null ? null : { parent: Ce._currentValue, pool: i }),
      (t.memoizedState = { baseLanes: l, cachePool: i }),
      e !== null && Pn(t, null),
      Ju(),
      Xf(t),
      e !== null && fa(e, t, a, !0),
      (t.childLanes = n),
      null
    );
  }
  function yi(e, t) {
    return (
      (t = gi({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Gr(e, t, l) {
    return (
      Yl(t, e.child, null, l),
      (e = yi(t, t.pendingProps)),
      (e.flags |= 2),
      ot(t),
      (t.memoizedState = null),
      e
    );
  }
  function pm(e, t, l) {
    var a = t.pendingProps,
      n = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (ie) {
        if (a.mode === "hidden")
          return ((e = yi(t, a)), (t.lanes = 536870912), nn(null, e));
        if (
          ($u(t),
          (e = ze)
            ? ((e = td(e, Nt)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: il !== null ? { id: Ct, overflow: Ht } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = Af(e)),
                (l.return = t),
                (t.child = l),
                (Xe = t),
                (ze = null)))
            : (e = null),
          e === null)
        )
          throw cl(t);
        return ((t.lanes = 536870912), null);
      }
      return yi(t, a);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var u = i.dehydrated;
      if (($u(t), n))
        if (t.flags & 256) ((t.flags &= -257), (t = Gr(e, t, l)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(r(558));
      else if (
        (Re || fa(e, t, l, !1), (n = (l & e.childLanes) !== 0), Re || n)
      ) {
        if (
          ((a = je),
          a !== null && ((u = ws(a, l)), u !== 0 && u !== i.retryLane))
        )
          throw ((i.retryLane = u), Cl(e, u), nt(a, e, u), gc);
        (Ei(), (t = Gr(e, t, l)));
      } else
        ((e = i.treeContext),
          (ze = Et(u.nextSibling)),
          (Xe = t),
          (ie = !0),
          (ul = null),
          (Nt = !1),
          e !== null && Mf(t, e),
          (t = yi(t, a)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = kt(e.child, { mode: a.mode, children: a.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function vi(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(r(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function pc(e, t, l, a, n) {
    return (
      Bl(t),
      (l = Iu(e, t, l, a, void 0, n)),
      (a = Pu()),
      e !== null && !Re
        ? (ec(e, t, n), Zt(e, t, n))
        : (ie && a && Cu(t), (t.flags |= 1), Ze(e, t, l, n), t.child)
    );
  }
  function Qr(e, t, l, a, n, i) {
    return (
      Bl(t),
      (t.updateQueue = null),
      (l = Zf(t, a, l, n)),
      Vf(e),
      (a = Pu()),
      e !== null && !Re
        ? (ec(e, t, i), Zt(e, t, i))
        : (ie && a && Cu(t), (t.flags |= 1), Ze(e, t, l, i), t.child)
    );
  }
  function Xr(e, t, l, a, n) {
    if ((Bl(t), t.stateNode === null)) {
      var i = ia,
        u = l.contextType;
      (typeof u == "object" && u !== null && (i = Ve(u)),
        (i = new l(a, i)),
        (t.memoizedState =
          i.state !== null && i.state !== void 0 ? i.state : null),
        (i.updater = yc),
        (t.stateNode = i),
        (i._reactInternals = t),
        (i = t.stateNode),
        (i.props = a),
        (i.state = t.memoizedState),
        (i.refs = {}),
        Xu(t),
        (u = l.contextType),
        (i.context = typeof u == "object" && u !== null ? Ve(u) : ia),
        (i.state = t.memoizedState),
        (u = l.getDerivedStateFromProps),
        typeof u == "function" && (hc(t, l, u, a), (i.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function" ||
          (typeof i.UNSAFE_componentWillMount != "function" &&
            typeof i.componentWillMount != "function") ||
          ((u = i.state),
          typeof i.componentWillMount == "function" && i.componentWillMount(),
          typeof i.UNSAFE_componentWillMount == "function" &&
            i.UNSAFE_componentWillMount(),
          u !== i.state && yc.enqueueReplaceState(i, i.state, null),
          Pa(t, a, i, n),
          Ia(),
          (i.state = t.memoizedState)),
        typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0));
    } else if (e === null) {
      i = t.stateNode;
      var s = t.memoizedProps,
        f = Ql(l, s);
      i.props = f;
      var p = i.context,
        j = l.contextType;
      ((u = ia), typeof j == "object" && j !== null && (u = Ve(j)));
      var A = l.getDerivedStateFromProps;
      ((j =
        typeof A == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function"),
        (s = t.pendingProps !== s),
        j ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((s || p !== u) && Dr(t, i, a, u)),
        (fl = !1));
      var x = t.memoizedState;
      ((i.state = x),
        Pa(t, a, i, n),
        Ia(),
        (p = t.memoizedState),
        s || x !== p || fl
          ? (typeof A == "function" && (hc(t, l, A, a), (p = t.memoizedState)),
            (f = fl || _r(t, l, f, a, x, p, u))
              ? (j ||
                  (typeof i.UNSAFE_componentWillMount != "function" &&
                    typeof i.componentWillMount != "function") ||
                  (typeof i.componentWillMount == "function" &&
                    i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == "function" &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof i.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = p)),
            (i.props = a),
            (i.state = p),
            (i.context = u),
            (a = f))
          : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1)));
    } else {
      ((i = t.stateNode),
        Vu(e, t),
        (u = t.memoizedProps),
        (j = Ql(l, u)),
        (i.props = j),
        (A = t.pendingProps),
        (x = i.context),
        (p = l.contextType),
        (f = ia),
        typeof p == "object" && p !== null && (f = Ve(p)),
        (s = l.getDerivedStateFromProps),
        (p =
          typeof s == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function") ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((u !== A || x !== f) && Dr(t, i, a, f)),
        (fl = !1),
        (x = t.memoizedState),
        (i.state = x),
        Pa(t, a, i, n),
        Ia());
      var b = t.memoizedState;
      u !== A ||
      x !== b ||
      fl ||
      (e !== null && e.dependencies !== null && Fn(e.dependencies))
        ? (typeof s == "function" && (hc(t, l, s, a), (b = t.memoizedState)),
          (j =
            fl ||
            _r(t, l, j, a, x, b, f) ||
            (e !== null && e.dependencies !== null && Fn(e.dependencies)))
            ? (p ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" &&
                  i.componentWillUpdate(a, b, f),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(a, b, f)),
              typeof i.componentDidUpdate == "function" && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (u === e.memoizedProps && x === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (u === e.memoizedProps && x === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = b)),
          (i.props = a),
          (i.state = b),
          (i.context = f),
          (a = j))
        : (typeof i.componentDidUpdate != "function" ||
            (u === e.memoizedProps && x === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (u === e.memoizedProps && x === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (i = a),
      vi(e, t),
      (a = (t.flags & 128) !== 0),
      i || a
        ? ((i = t.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != "function"
              ? null
              : i.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = Yl(t, e.child, null, n)),
              (t.child = Yl(t, null, l, n)))
            : Ze(e, t, l, n),
          (t.memoizedState = i.state),
          (e = t.child))
        : (e = Zt(e, t, n)),
      e
    );
  }
  function Vr(e, t, l, a) {
    return (Rl(), (t.flags |= 256), Ze(e, t, l, a), t.child);
  }
  var xc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function bc(e) {
    return { baseLanes: e, cachePool: Hf() };
  }
  function Sc(e, t, l) {
    return ((e = e !== null ? e.childLanes & ~l : 0), t && (e |= mt), e);
  }
  function Zr(e, t, l) {
    var a = t.pendingProps,
      n = !1,
      i = (t.flags & 128) !== 0,
      u;
    if (
      ((u = i) ||
        (u =
          e !== null && e.memoizedState === null ? !1 : (we.current & 2) !== 0),
      u && ((n = !0), (t.flags &= -129)),
      (u = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (ie) {
        if (
          (n ? dl(t) : ml(),
          (e = ze)
            ? ((e = td(e, Nt)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: il !== null ? { id: Ct, overflow: Ht } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = Af(e)),
                (l.return = t),
                (t.child = l),
                (Xe = t),
                (ze = null)))
            : (e = null),
          e === null)
        )
          throw cl(t);
        return (as(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var s = a.children;
      return (
        (a = a.fallback),
        n
          ? (ml(),
            (n = t.mode),
            (s = gi({ mode: "hidden", children: s }, n)),
            (a = Hl(a, n, l, null)),
            (s.return = t),
            (a.return = t),
            (s.sibling = a),
            (t.child = s),
            (a = t.child),
            (a.memoizedState = bc(l)),
            (a.childLanes = Sc(e, u, l)),
            (t.memoizedState = xc),
            nn(null, a))
          : (dl(t), jc(t, s))
      );
    }
    var f = e.memoizedState;
    if (f !== null && ((s = f.dehydrated), s !== null)) {
      if (i)
        t.flags & 256
          ? (dl(t), (t.flags &= -257), (t = zc(e, t, l)))
          : t.memoizedState !== null
            ? (ml(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (ml(),
              (s = a.fallback),
              (n = t.mode),
              (a = gi({ mode: "visible", children: a.children }, n)),
              (s = Hl(s, n, l, null)),
              (s.flags |= 2),
              (a.return = t),
              (s.return = t),
              (a.sibling = s),
              (t.child = a),
              Yl(t, e.child, null, l),
              (a = t.child),
              (a.memoizedState = bc(l)),
              (a.childLanes = Sc(e, u, l)),
              (t.memoizedState = xc),
              (t = nn(null, a)));
      else if ((dl(t), as(s))) {
        if (((u = s.nextSibling && s.nextSibling.dataset), u)) var p = u.dgst;
        ((u = p),
          (a = Error(r(419))),
          (a.stack = ""),
          (a.digest = u),
          Za({ value: a, source: null, stack: null }),
          (t = zc(e, t, l)));
      } else if (
        (Re || fa(e, t, l, !1), (u = (l & e.childLanes) !== 0), Re || u)
      ) {
        if (
          ((u = je),
          u !== null && ((a = ws(u, l)), a !== 0 && a !== f.retryLane))
        )
          throw ((f.retryLane = a), Cl(e, a), nt(u, e, a), gc);
        (ls(s) || Ei(), (t = zc(e, t, l)));
      } else
        ls(s)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = f.treeContext),
            (ze = Et(s.nextSibling)),
            (Xe = t),
            (ie = !0),
            (ul = null),
            (Nt = !1),
            e !== null && Mf(t, e),
            (t = jc(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return n
      ? (ml(),
        (s = a.fallback),
        (n = t.mode),
        (f = e.child),
        (p = f.sibling),
        (a = kt(f, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = f.subtreeFlags & 65011712),
        p !== null ? (s = kt(p, s)) : ((s = Hl(s, n, l, null)), (s.flags |= 2)),
        (s.return = t),
        (a.return = t),
        (a.sibling = s),
        (t.child = a),
        nn(null, a),
        (a = t.child),
        (s = e.child.memoizedState),
        s === null
          ? (s = bc(l))
          : ((n = s.cachePool),
            n !== null
              ? ((f = Ce._currentValue),
                (n = n.parent !== f ? { parent: f, pool: f } : n))
              : (n = Hf()),
            (s = { baseLanes: s.baseLanes | l, cachePool: n })),
        (a.memoizedState = s),
        (a.childLanes = Sc(e, u, l)),
        (t.memoizedState = xc),
        nn(e.child, a))
      : (dl(t),
        (l = e.child),
        (e = l.sibling),
        (l = kt(l, { mode: "visible", children: a.children })),
        (l.return = t),
        (l.sibling = null),
        e !== null &&
          ((u = t.deletions),
          u === null ? ((t.deletions = [e]), (t.flags |= 16)) : u.push(e)),
        (t.child = l),
        (t.memoizedState = null),
        l);
  }
  function jc(e, t) {
    return (
      (t = gi({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function gi(e, t) {
    return ((e = ft(22, e, null, t)), (e.lanes = 0), e);
  }
  function zc(e, t, l) {
    return (
      Yl(t, e.child, null, l),
      (e = jc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Kr(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    (a !== null && (a.lanes |= t), qu(e.return, t, l));
  }
  function Nc(e, t, l, a, n, i) {
    var u = e.memoizedState;
    u === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: n,
          treeForkCount: i,
        })
      : ((u.isBackwards = t),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = a),
        (u.tail = l),
        (u.tailMode = n),
        (u.treeForkCount = i));
  }
  function Jr(e, t, l) {
    var a = t.pendingProps,
      n = a.revealOrder,
      i = a.tail;
    a = a.children;
    var u = we.current,
      s = (u & 2) !== 0;
    if (
      (s ? ((u = (u & 1) | 2), (t.flags |= 128)) : (u &= 1),
      R(we, u),
      Ze(e, t, a, l),
      (a = ie ? Va : 0),
      !s && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Kr(e, l, t);
        else if (e.tag === 19) Kr(e, l, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (n) {
      case "forwards":
        for (l = t.child, n = null; l !== null; )
          ((e = l.alternate),
            e !== null && ii(e) === null && (n = l),
            (l = l.sibling));
        ((l = n),
          l === null
            ? ((n = t.child), (t.child = null))
            : ((n = l.sibling), (l.sibling = null)),
          Nc(t, !1, n, l, i, a));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, n = t.child, t.child = null; n !== null; ) {
          if (((e = n.alternate), e !== null && ii(e) === null)) {
            t.child = n;
            break;
          }
          ((e = n.sibling), (n.sibling = l), (l = n), (n = e));
        }
        Nc(t, !0, l, null, i, a);
        break;
      case "together":
        Nc(t, !1, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Zt(e, t, l) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (vl |= t.lanes),
      (l & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((fa(e, t, l, !1), (l & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(r(153));
    if (t.child !== null) {
      for (
        e = t.child, l = kt(e, e.pendingProps), t.child = l, l.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (l = l.sibling = kt(e, e.pendingProps)),
          (l.return = t));
      l.sibling = null;
    }
    return t.child;
  }
  function Ac(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && Fn(e)));
  }
  function xm(e, t, l) {
    switch (t.tag) {
      case 3:
        (We(t, t.stateNode.containerInfo),
          sl(t, Ce, e.memoizedState.cache),
          Rl());
        break;
      case 27:
      case 5:
        Da(t);
        break;
      case 4:
        We(t, t.stateNode.containerInfo);
        break;
      case 10:
        sl(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), $u(t), null);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (dl(t), (t.flags |= 128), null)
            : (l & t.child.childLanes) !== 0
              ? Zr(e, t, l)
              : (dl(t), (e = Zt(e, t, l)), e !== null ? e.sibling : null);
        dl(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (
          ((a = (l & t.childLanes) !== 0),
          a || (fa(e, t, l, !1), (a = (l & t.childLanes) !== 0)),
          n)
        ) {
          if (a) return Jr(e, t, l);
          t.flags |= 128;
        }
        if (
          ((n = t.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          R(we, we.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), kr(e, t, l, t.pendingProps));
      case 24:
        sl(t, Ce, e.memoizedState.cache);
    }
    return Zt(e, t, l);
  }
  function Wr(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Re = !0;
      else {
        if (!Ac(e, l) && (t.flags & 128) === 0) return ((Re = !1), xm(e, t, l));
        Re = (e.flags & 131072) !== 0;
      }
    else ((Re = !1), ie && (t.flags & 1048576) !== 0 && Tf(t, Va, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (((e = Ll(t.elementType)), (t.type = e), typeof e == "function"))
            Du(e)
              ? ((a = Ql(e, a)), (t.tag = 1), (t = Xr(null, t, e, a, l)))
              : ((t.tag = 0), (t = pc(null, t, e, a, l)));
          else {
            if (e != null) {
              var n = e.$$typeof;
              if (n === ye) {
                ((t.tag = 11), (t = Br(null, t, e, a, l)));
                break e;
              } else if (n === V) {
                ((t.tag = 14), (t = qr(null, t, e, a, l)));
                break e;
              }
            }
            throw ((t = Ot(e) || e), Error(r(306, t, "")));
          }
        }
        return t;
      case 0:
        return pc(e, t, t.type, t.pendingProps, l);
      case 1:
        return ((a = t.type), (n = Ql(a, t.pendingProps)), Xr(e, t, a, n, l));
      case 3:
        e: {
          if ((We(t, t.stateNode.containerInfo), e === null))
            throw Error(r(387));
          a = t.pendingProps;
          var i = t.memoizedState;
          ((n = i.element), Vu(e, t), Pa(t, a, null, l));
          var u = t.memoizedState;
          if (
            ((a = u.cache),
            sl(t, Ce, a),
            a !== i.cache && Lu(t, [Ce], l, !0),
            Ia(),
            (a = u.element),
            i.isDehydrated)
          )
            if (
              ((i = { element: a, isDehydrated: !1, cache: u.cache }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              t = Vr(e, t, a, l);
              break e;
            } else if (a !== n) {
              ((n = St(Error(r(424)), t)), Za(n), (t = Vr(e, t, a, l)));
              break e;
            } else
              for (
                e = t.stateNode.containerInfo,
                  e.nodeType === 9
                    ? (e = e.body)
                    : (e = e.nodeName === "HTML" ? e.ownerDocument.body : e),
                  ze = Et(e.firstChild),
                  Xe = t,
                  ie = !0,
                  ul = null,
                  Nt = !0,
                  l = kf(t, null, a, l),
                  t.child = l;
                l;
              )
                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
          else {
            if ((Rl(), a === n)) {
              t = Zt(e, t, l);
              break e;
            }
            Ze(e, t, a, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          vi(e, t),
          e === null
            ? (l = cd(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = l)
              : ie ||
                ((l = t.type),
                (e = t.pendingProps),
                (a = Ci(ee.current).createElement(l)),
                (a[Qe] = t),
                (a[Ie] = e),
                Ke(a, l, e),
                ke(a),
                (t.stateNode = a))
            : (t.memoizedState = cd(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Da(t),
          e === null &&
            ie &&
            ((a = t.stateNode = nd(t.type, t.pendingProps, ee.current)),
            (Xe = t),
            (Nt = !0),
            (n = ze),
            Sl(t.type) ? ((ns = n), (ze = Et(a.firstChild))) : (ze = n)),
          Ze(e, t, t.pendingProps.children, l),
          vi(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            ie &&
            ((n = a = ze) &&
              ((a = Wm(a, t.type, t.pendingProps, Nt)),
              a !== null
                ? ((t.stateNode = a),
                  (Xe = t),
                  (ze = Et(a.firstChild)),
                  (Nt = !1),
                  (n = !0))
                : (n = !1)),
            n || cl(t)),
          Da(t),
          (n = t.type),
          (i = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (a = i.children),
          Pc(n, i) ? (a = null) : u !== null && Pc(n, u) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((n = Iu(e, t, rm, null, null, l)), (bn._currentValue = n)),
          vi(e, t),
          Ze(e, t, a, l),
          t.child
        );
      case 6:
        return (
          e === null &&
            ie &&
            ((e = l = ze) &&
              ((l = $m(l, t.pendingProps, Nt)),
              l !== null
                ? ((t.stateNode = l), (Xe = t), (ze = null), (e = !0))
                : (e = !1)),
            e || cl(t)),
          null
        );
      case 13:
        return Zr(e, t, l);
      case 4:
        return (
          We(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = Yl(t, null, a, l)) : Ze(e, t, a, l),
          t.child
        );
      case 11:
        return Br(e, t, t.type, t.pendingProps, l);
      case 7:
        return (Ze(e, t, t.pendingProps, l), t.child);
      case 8:
        return (Ze(e, t, t.pendingProps.children, l), t.child);
      case 12:
        return (Ze(e, t, t.pendingProps.children, l), t.child);
      case 10:
        return (
          (a = t.pendingProps),
          sl(t, t.type, a.value),
          Ze(e, t, a.children, l),
          t.child
        );
      case 9:
        return (
          (n = t.type._context),
          (a = t.pendingProps.children),
          Bl(t),
          (n = Ve(n)),
          (a = a(n)),
          (t.flags |= 1),
          Ze(e, t, a, l),
          t.child
        );
      case 14:
        return qr(e, t, t.type, t.pendingProps, l);
      case 15:
        return Lr(e, t, t.type, t.pendingProps, l);
      case 19:
        return Jr(e, t, l);
      case 31:
        return pm(e, t, l);
      case 22:
        return kr(e, t, l, t.pendingProps);
      case 24:
        return (
          Bl(t),
          (a = Ve(Ce)),
          e === null
            ? ((n = Gu()),
              n === null &&
                ((n = je),
                (i = ku()),
                (n.pooledCache = i),
                i.refCount++,
                i !== null && (n.pooledCacheLanes |= l),
                (n = i)),
              (t.memoizedState = { parent: a, cache: n }),
              Xu(t),
              sl(t, Ce, n))
            : ((e.lanes & l) !== 0 && (Vu(e, t), Pa(t, null, null, l), Ia()),
              (n = e.memoizedState),
              (i = t.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (t.memoizedState = n),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = n),
                  sl(t, Ce, a))
                : ((a = i.cache),
                  sl(t, Ce, a),
                  a !== n.cache && Lu(t, [Ce], l, !0))),
          Ze(e, t, t.pendingProps.children, l),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function Kt(e) {
    e.flags |= 4;
  }
  function Ec(e, t, l, a, n) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (n & 335544128) === n))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (zo()) e.flags |= 8192;
        else throw ((kl = ti), Qu);
    } else e.flags &= -16777217;
  }
  function $r(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !dd(t)))
      if (zo()) e.flags |= 8192;
      else throw ((kl = ti), Qu);
  }
  function pi(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? Ms() : 536870912), (e.lanes |= t), (Sa |= t)));
  }
  function un(e, t) {
    if (!ie)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; )
            (t.alternate !== null && (l = t), (t = t.sibling));
          l === null ? (e.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = e.tail;
          for (var a = null; l !== null; )
            (l.alternate !== null && (a = l), (l = l.sibling));
          a === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Ne(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      a = 0;
    if (t)
      for (var n = e.child; n !== null; )
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = e),
          (n = n.sibling));
    else
      for (n = e.child; n !== null; )
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = e),
          (n = n.sibling));
    return ((e.subtreeFlags |= a), (e.childLanes = l), t);
  }
  function bm(e, t, l) {
    var a = t.pendingProps;
    switch ((Hu(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Ne(t), null);
      case 1:
        return (Ne(t), null);
      case 3:
        return (
          (l = t.stateNode),
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Qt(Ce),
          De(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (sa(t)
              ? Kt(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Uu())),
          Ne(t),
          null
        );
      case 26:
        var n = t.type,
          i = t.memoizedState;
        return (
          e === null
            ? (Kt(t),
              i !== null ? (Ne(t), $r(t, i)) : (Ne(t), Ec(t, n, null, a, l)))
            : i
              ? i !== e.memoizedState
                ? (Kt(t), Ne(t), $r(t, i))
                : (Ne(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== a && Kt(t),
                Ne(t),
                Ec(t, n, e, a, l)),
          null
        );
      case 27:
        if (
          (_n(t),
          (l = ee.current),
          (n = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== a && Kt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(r(166));
            return (Ne(t), null);
          }
          ((e = L.current),
            sa(t) ? _f(t) : ((e = nd(n, a, l)), (t.stateNode = e), Kt(t)));
        }
        return (Ne(t), null);
      case 5:
        if ((_n(t), (n = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && Kt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(r(166));
            return (Ne(t), null);
          }
          if (((i = L.current), sa(t))) _f(t);
          else {
            var u = Ci(ee.current);
            switch (i) {
              case 1:
                i = u.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                i = u.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    i = u.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    i = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n,
                    );
                    break;
                  case "script":
                    ((i = u.createElement("div")),
                      (i.innerHTML = "<script><\/script>"),
                      (i = i.removeChild(i.firstChild)));
                    break;
                  case "select":
                    ((i =
                      typeof a.is == "string"
                        ? u.createElement("select", { is: a.is })
                        : u.createElement("select")),
                      a.multiple
                        ? (i.multiple = !0)
                        : a.size && (i.size = a.size));
                    break;
                  default:
                    i =
                      typeof a.is == "string"
                        ? u.createElement(n, { is: a.is })
                        : u.createElement(n);
                }
            }
            ((i[Qe] = t), (i[Ie] = a));
            e: for (u = t.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) i.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                ((u.child.return = u), (u = u.child));
                continue;
              }
              if (u === t) break e;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === t) break e;
                u = u.return;
              }
              ((u.sibling.return = u.return), (u = u.sibling));
            }
            t.stateNode = i;
            e: switch ((Ke(i, n, a), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break e;
              case "img":
                a = !0;
                break e;
              default:
                a = !1;
            }
            a && Kt(t);
          }
        }
        return (
          Ne(t),
          Ec(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && Kt(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(r(166));
          if (((e = ee.current), sa(t))) {
            if (
              ((e = t.stateNode),
              (l = t.memoizedProps),
              (a = null),
              (n = Xe),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            ((e[Qe] = t),
              (e = !!(
                e.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Ko(e.nodeValue, l)
              )),
              e || cl(t, !0));
          } else
            ((e = Ci(e).createTextNode(a)), (e[Qe] = t), (t.stateNode = e));
        }
        return (Ne(t), null);
      case 31:
        if (((l = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((a = sa(t)), l !== null)) {
            if (e === null) {
              if (!a) throw Error(r(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(r(557));
              e[Qe] = t;
            } else
              (Rl(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Ne(t), (e = !1));
          } else
            ((l = Uu()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = l),
              (e = !0));
          if (!e) return t.flags & 256 ? (ot(t), t) : (ot(t), null);
          if ((t.flags & 128) !== 0) throw Error(r(558));
        }
        return (Ne(t), null);
      case 13:
        if (
          ((a = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((n = sa(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!n) throw Error(r(318));
              if (
                ((n = t.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(r(317));
              n[Qe] = t;
            } else
              (Rl(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Ne(t), (n = !1));
          } else
            ((n = Uu()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (n = !0));
          if (!n) return t.flags & 256 ? (ot(t), t) : (ot(t), null);
        }
        return (
          ot(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = l), t)
            : ((l = a !== null),
              (e = e !== null && e.memoizedState !== null),
              l &&
                ((a = t.child),
                (n = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (n = a.alternate.memoizedState.cachePool.pool),
                (i = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (i = a.memoizedState.cachePool.pool),
                i !== n && (a.flags |= 2048)),
              l !== e && l && (t.child.flags |= 8192),
              pi(t, t.updateQueue),
              Ne(t),
              null)
        );
      case 4:
        return (De(), e === null && Jc(t.stateNode.containerInfo), Ne(t), null);
      case 10:
        return (Qt(t.type), Ne(t), null);
      case 19:
        if ((M(we), (a = t.memoizedState), a === null)) return (Ne(t), null);
        if (((n = (t.flags & 128) !== 0), (i = a.rendering), i === null))
          if (n) un(a, !1);
          else {
            if (Me !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((i = ii(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      un(a, !1),
                      e = i.updateQueue,
                      t.updateQueue = e,
                      pi(t, e),
                      t.subtreeFlags = 0,
                      e = l,
                      l = t.child;
                    l !== null;
                  )
                    (Nf(l, e), (l = l.sibling));
                  return (
                    R(we, (we.current & 1) | 2),
                    ie && Yt(t, a.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            a.tail !== null &&
              it() > zi &&
              ((t.flags |= 128), (n = !0), un(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!n)
            if (((e = ii(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (n = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                pi(t, e),
                un(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !i.alternate &&
                  !ie)
              )
                return (Ne(t), null);
            } else
              2 * it() - a.renderingStartTime > zi &&
                l !== 536870912 &&
                ((t.flags |= 128), (n = !0), un(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : ((e = a.last),
              e !== null ? (e.sibling = i) : (t.child = i),
              (a.last = i));
        }
        return a.tail !== null
          ? ((e = a.tail),
            (a.rendering = e),
            (a.tail = e.sibling),
            (a.renderingStartTime = it()),
            (e.sibling = null),
            (l = we.current),
            R(we, n ? (l & 1) | 2 : l & 1),
            ie && Yt(t, a.treeForkCount),
            e)
          : (Ne(t), null);
      case 22:
      case 23:
        return (
          ot(t),
          Wu(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ne(t),
          (l = t.updateQueue),
          l !== null && pi(t, l.retryQueue),
          (l = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== l && (t.flags |= 2048),
          e !== null && M(ql),
          null
        );
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          Qt(Ce),
          Ne(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function Sm(e, t) {
    switch ((Hu(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Qt(Ce),
          De(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (_n(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((ot(t), t.alternate === null)) throw Error(r(340));
          Rl();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (ot(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(r(340));
          Rl();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (M(we), null);
      case 4:
        return (De(), null);
      case 10:
        return (Qt(t.type), null);
      case 22:
      case 23:
        return (
          ot(t),
          Wu(),
          e !== null && M(ql),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (Qt(Ce), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Fr(e, t) {
    switch ((Hu(t), t.tag)) {
      case 3:
        (Qt(Ce), De());
        break;
      case 26:
      case 27:
      case 5:
        _n(t);
        break;
      case 4:
        De();
        break;
      case 31:
        t.memoizedState !== null && ot(t);
        break;
      case 13:
        ot(t);
        break;
      case 19:
        M(we);
        break;
      case 10:
        Qt(t.type);
        break;
      case 22:
      case 23:
        (ot(t), Wu(), e !== null && M(ql));
        break;
      case 24:
        Qt(Ce);
    }
  }
  function cn(e, t) {
    try {
      var l = t.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var i = l.create,
              u = l.inst;
            ((a = i()), (u.destroy = a));
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (s) {
      he(t, t.return, s);
    }
  }
  function hl(e, t, l) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        a = i;
        do {
          if ((a.tag & e) === e) {
            var u = a.inst,
              s = u.destroy;
            if (s !== void 0) {
              ((u.destroy = void 0), (n = t));
              var f = l,
                p = s;
              try {
                p();
              } catch (j) {
                he(n, f, j);
              }
            }
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (j) {
      he(t, t.return, j);
    }
  }
  function Ir(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        Gf(t, l);
      } catch (a) {
        he(e, e.return, a);
      }
    }
  }
  function Pr(e, t, l) {
    ((l.props = Ql(e.type, e.memoizedProps)), (l.state = e.memoizedState));
    try {
      l.componentWillUnmount();
    } catch (a) {
      he(e, t, a);
    }
  }
  function sn(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof l == "function" ? (e.refCleanup = l(a)) : (l.current = a);
      }
    } catch (n) {
      he(e, t, n);
    }
  }
  function Rt(e, t) {
    var l = e.ref,
      a = e.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          he(e, t, n);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          he(e, t, n);
        }
      else l.current = null;
  }
  function eo(e) {
    var t = e.type,
      l = e.memoizedProps,
      a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break e;
        case "img":
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      he(e, e.return, n);
    }
  }
  function Tc(e, t, l) {
    try {
      var a = e.stateNode;
      (Qm(a, e.type, l, t), (a[Ie] = t));
    } catch (n) {
      he(e, e.return, n);
    }
  }
  function to(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Sl(e.type)) ||
      e.tag === 4
    );
  }
  function Mc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || to(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && Sl(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function _c(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      ((e = e.stateNode),
        t
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l
            ).insertBefore(e, t)
          : ((t =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l),
            t.appendChild(e),
            (l = l._reactRootContainer),
            l != null || t.onclick !== null || (t.onclick = qt)));
    else if (
      a !== 4 &&
      (a === 27 && Sl(e.type) && ((l = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (_c(e, t, l), e = e.sibling; e !== null; )
        (_c(e, t, l), (e = e.sibling));
  }
  function xi(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      ((e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e));
    else if (
      a !== 4 &&
      (a === 27 && Sl(e.type) && (l = e.stateNode), (e = e.child), e !== null)
    )
      for (xi(e, t, l), e = e.sibling; e !== null; )
        (xi(e, t, l), (e = e.sibling));
  }
  function lo(e) {
    var t = e.stateNode,
      l = e.memoizedProps;
    try {
      for (var a = e.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      (Ke(t, a, l), (t[Qe] = e), (t[Ie] = l));
    } catch (i) {
      he(e, e.return, i);
    }
  }
  var Jt = !1,
    Ue = !1,
    Dc = !1,
    ao = typeof WeakSet == "function" ? WeakSet : Set,
    Ye = null;
  function jm(e, t) {
    if (((e = e.containerInfo), (Fc = ki), (e = yf(e)), zu(e))) {
      if ("selectionStart" in e)
        var l = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          l = ((l = e.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset,
              i = a.focusNode;
            a = a.focusOffset;
            try {
              (l.nodeType, i.nodeType);
            } catch {
              l = null;
              break e;
            }
            var u = 0,
              s = -1,
              f = -1,
              p = 0,
              j = 0,
              A = e,
              x = null;
            t: for (;;) {
              for (
                var b;
                A !== l || (n !== 0 && A.nodeType !== 3) || (s = u + n),
                  A !== i || (a !== 0 && A.nodeType !== 3) || (f = u + a),
                  A.nodeType === 3 && (u += A.nodeValue.length),
                  (b = A.firstChild) !== null;
              )
                ((x = A), (A = b));
              for (;;) {
                if (A === e) break t;
                if (
                  (x === l && ++p === n && (s = u),
                  x === i && ++j === a && (f = u),
                  (b = A.nextSibling) !== null)
                )
                  break;
                ((A = x), (x = A.parentNode));
              }
              A = b;
            }
            l = s === -1 || f === -1 ? null : { start: s, end: f };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      Ic = { focusedElem: e, selectionRange: l }, ki = !1, Ye = t;
      Ye !== null;
    )
      if (
        ((t = Ye), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = t), (Ye = e));
      else
        for (; Ye !== null; ) {
          switch (((t = Ye), (i = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (l = 0; l < e.length; l++)
                  ((n = e[l]), (n.ref.impl = n.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && i !== null) {
                ((e = void 0),
                  (l = t),
                  (n = i.memoizedProps),
                  (i = i.memoizedState),
                  (a = l.stateNode));
                try {
                  var q = Ql(l.type, n);
                  ((e = a.getSnapshotBeforeUpdate(q, i)),
                    (a.__reactInternalSnapshotBeforeUpdate = e));
                } catch (G) {
                  he(l, l.return, G);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)
                )
                  ts(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ts(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(r(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (Ye = e));
            break;
          }
          Ye = t.return;
        }
  }
  function no(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ($t(e, l), a & 4 && cn(5, l));
        break;
      case 1:
        if (($t(e, l), a & 4))
          if (((e = l.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (u) {
              he(l, l.return, u);
            }
          else {
            var n = Ql(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (u) {
              he(l, l.return, u);
            }
          }
        (a & 64 && Ir(l), a & 512 && sn(l, l.return));
        break;
      case 3:
        if (($t(e, l), a & 64 && ((e = l.updateQueue), e !== null))) {
          if (((t = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            Gf(e, t);
          } catch (u) {
            he(l, l.return, u);
          }
        }
        break;
      case 27:
        t === null && a & 4 && lo(l);
      case 26:
      case 5:
        ($t(e, l), t === null && a & 4 && eo(l), a & 512 && sn(l, l.return));
        break;
      case 12:
        $t(e, l);
        break;
      case 31:
        ($t(e, l), a & 4 && co(e, l));
        break;
      case 13:
        ($t(e, l),
          a & 4 && so(e, l),
          a & 64 &&
            ((e = l.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((l = wm.bind(null, l)), Fm(e, l)))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || Jt), !a)) {
          ((t = (t !== null && t.memoizedState !== null) || Ue), (n = Jt));
          var i = Ue;
          ((Jt = a),
            (Ue = t) && !i ? Ft(e, l, (l.subtreeFlags & 8772) !== 0) : $t(e, l),
            (Jt = n),
            (Ue = i));
        }
        break;
      case 30:
        break;
      default:
        $t(e, l);
    }
  }
  function io(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), io(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && uu(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var Ae = null,
    et = !1;
  function Wt(e, t, l) {
    for (l = l.child; l !== null; ) (uo(e, t, l), (l = l.sibling));
  }
  function uo(e, t, l) {
    if (ut && typeof ut.onCommitFiberUnmount == "function")
      try {
        ut.onCommitFiberUnmount(wa, l);
      } catch {}
    switch (l.tag) {
      case 26:
        (Ue || Rt(l, t),
          Wt(e, t, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
        break;
      case 27:
        Ue || Rt(l, t);
        var a = Ae,
          n = et;
        (Sl(l.type) && ((Ae = l.stateNode), (et = !1)),
          Wt(e, t, l),
          gn(l.stateNode),
          (Ae = a),
          (et = n));
        break;
      case 5:
        Ue || Rt(l, t);
      case 6:
        if (
          ((a = Ae),
          (n = et),
          (Ae = null),
          Wt(e, t, l),
          (Ae = a),
          (et = n),
          Ae !== null)
        )
          if (et)
            try {
              (Ae.nodeType === 9
                ? Ae.body
                : Ae.nodeName === "HTML"
                  ? Ae.ownerDocument.body
                  : Ae
              ).removeChild(l.stateNode);
            } catch (i) {
              he(l, t, i);
            }
          else
            try {
              Ae.removeChild(l.stateNode);
            } catch (i) {
              he(l, t, i);
            }
        break;
      case 18:
        Ae !== null &&
          (et
            ? ((e = Ae),
              Po(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                l.stateNode,
              ),
              _a(e))
            : Po(Ae, l.stateNode));
        break;
      case 4:
        ((a = Ae),
          (n = et),
          (Ae = l.stateNode.containerInfo),
          (et = !0),
          Wt(e, t, l),
          (Ae = a),
          (et = n));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (hl(2, l, t), Ue || hl(4, l, t), Wt(e, t, l));
        break;
      case 1:
        (Ue ||
          (Rt(l, t),
          (a = l.stateNode),
          typeof a.componentWillUnmount == "function" && Pr(l, t, a)),
          Wt(e, t, l));
        break;
      case 21:
        Wt(e, t, l);
        break;
      case 22:
        ((Ue = (a = Ue) || l.memoizedState !== null), Wt(e, t, l), (Ue = a));
        break;
      default:
        Wt(e, t, l);
    }
  }
  function co(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        _a(e);
      } catch (l) {
        he(t, t.return, l);
      }
    }
  }
  function so(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        _a(e);
      } catch (l) {
        he(t, t.return, l);
      }
  }
  function zm(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new ao()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new ao()),
          t
        );
      default:
        throw Error(r(435, e.tag));
    }
  }
  function bi(e, t) {
    var l = zm(e);
    t.forEach(function (a) {
      if (!l.has(a)) {
        l.add(a);
        var n = Om.bind(null, e, a);
        a.then(n, n);
      }
    });
  }
  function tt(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          i = e,
          u = t,
          s = u;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (Sl(s.type)) {
                ((Ae = s.stateNode), (et = !1));
                break e;
              }
              break;
            case 5:
              ((Ae = s.stateNode), (et = !1));
              break e;
            case 3:
            case 4:
              ((Ae = s.stateNode.containerInfo), (et = !0));
              break e;
          }
          s = s.return;
        }
        if (Ae === null) throw Error(r(160));
        (uo(i, u, n),
          (Ae = null),
          (et = !1),
          (i = n.alternate),
          i !== null && (i.return = null),
          (n.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (fo(t, e), (t = t.sibling));
  }
  var Dt = null;
  function fo(e, t) {
    var l = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (tt(t, e),
          lt(e),
          a & 4 && (hl(3, e, e.return), cn(3, e), hl(5, e, e.return)));
        break;
      case 1:
        (tt(t, e),
          lt(e),
          a & 512 && (Ue || l === null || Rt(l, l.return)),
          a & 64 &&
            Jt &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? a : l.concat(a))))));
        break;
      case 26:
        var n = Dt;
        if (
          (tt(t, e),
          lt(e),
          a & 512 && (Ue || l === null || Rt(l, l.return)),
          a & 4)
        ) {
          var i = l !== null ? l.memoizedState : null;
          if (((a = e.memoizedState), l === null))
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  ((a = e.type),
                    (l = e.memoizedProps),
                    (n = n.ownerDocument || n));
                  t: switch (a) {
                    case "title":
                      ((i = n.getElementsByTagName("title")[0]),
                        (!i ||
                          i[Ha] ||
                          i[Qe] ||
                          i.namespaceURI === "http://www.w3.org/2000/svg" ||
                          i.hasAttribute("itemprop")) &&
                          ((i = n.createElement(a)),
                          n.head.insertBefore(
                            i,
                            n.querySelector("head > title"),
                          )),
                        Ke(i, a, l),
                        (i[Qe] = e),
                        ke(i),
                        (a = i));
                      break e;
                    case "link":
                      var u = rd("link", "href", n).get(a + (l.href || ""));
                      if (u) {
                        for (var s = 0; s < u.length; s++)
                          if (
                            ((i = u[s]),
                            i.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              i.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              i.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              i.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            u.splice(s, 1);
                            break t;
                          }
                      }
                      ((i = n.createElement(a)),
                        Ke(i, a, l),
                        n.head.appendChild(i));
                      break;
                    case "meta":
                      if (
                        (u = rd("meta", "content", n).get(
                          a + (l.content || ""),
                        ))
                      ) {
                        for (s = 0; s < u.length; s++)
                          if (
                            ((i = u[s]),
                            i.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              i.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              i.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              i.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              i.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            u.splice(s, 1);
                            break t;
                          }
                      }
                      ((i = n.createElement(a)),
                        Ke(i, a, l),
                        n.head.appendChild(i));
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  ((i[Qe] = e), ke(i), (a = i));
                }
                e.stateNode = a;
              } else od(n, e.type, e.stateNode);
            else e.stateNode = fd(n, a, e.memoizedProps);
          else
            i !== a
              ? (i === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : i.count--,
                a === null
                  ? od(n, e.type, e.stateNode)
                  : fd(n, a, e.memoizedProps))
              : a === null &&
                e.stateNode !== null &&
                Tc(e, e.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        (tt(t, e),
          lt(e),
          a & 512 && (Ue || l === null || Rt(l, l.return)),
          l !== null && a & 4 && Tc(e, e.memoizedProps, l.memoizedProps));
        break;
      case 5:
        if (
          (tt(t, e),
          lt(e),
          a & 512 && (Ue || l === null || Rt(l, l.return)),
          e.flags & 32)
        ) {
          n = e.stateNode;
          try {
            Il(n, "");
          } catch (q) {
            he(e, e.return, q);
          }
        }
        (a & 4 &&
          e.stateNode != null &&
          ((n = e.memoizedProps), Tc(e, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (Dc = !0));
        break;
      case 6:
        if ((tt(t, e), lt(e), a & 4)) {
          if (e.stateNode === null) throw Error(r(162));
          ((a = e.memoizedProps), (l = e.stateNode));
          try {
            l.nodeValue = a;
          } catch (q) {
            he(e, e.return, q);
          }
        }
        break;
      case 3:
        if (
          ((Ui = null),
          (n = Dt),
          (Dt = Hi(t.containerInfo)),
          tt(t, e),
          (Dt = n),
          lt(e),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            _a(t.containerInfo);
          } catch (q) {
            he(e, e.return, q);
          }
        Dc && ((Dc = !1), ro(e));
        break;
      case 4:
        ((a = Dt),
          (Dt = Hi(e.stateNode.containerInfo)),
          tt(t, e),
          lt(e),
          (Dt = a));
        break;
      case 12:
        (tt(t, e), lt(e));
        break;
      case 31:
        (tt(t, e),
          lt(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), bi(e, a))));
        break;
      case 13:
        (tt(t, e),
          lt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (ji = it()),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), bi(e, a))));
        break;
      case 22:
        n = e.memoizedState !== null;
        var f = l !== null && l.memoizedState !== null,
          p = Jt,
          j = Ue;
        if (
          ((Jt = p || n),
          (Ue = j || f),
          tt(t, e),
          (Ue = j),
          (Jt = p),
          lt(e),
          a & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = n ? t._visibility & -2 : t._visibility | 1,
              n && (l === null || f || Jt || Ue || Xl(e)),
              l = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                f = l = t;
                try {
                  if (((i = f.stateNode), n))
                    ((u = i.style),
                      typeof u.setProperty == "function"
                        ? u.setProperty("display", "none", "important")
                        : (u.display = "none"));
                  else {
                    s = f.stateNode;
                    var A = f.memoizedProps.style,
                      x =
                        A != null && A.hasOwnProperty("display")
                          ? A.display
                          : null;
                    s.style.display =
                      x == null || typeof x == "boolean" ? "" : ("" + x).trim();
                  }
                } catch (q) {
                  he(f, f.return, q);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                f = t;
                try {
                  f.stateNode.nodeValue = n ? "" : f.memoizedProps;
                } catch (q) {
                  he(f, f.return, q);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                f = t;
                try {
                  var b = f.stateNode;
                  n ? ed(b, !0) : ed(f.stateNode, !1);
                } catch (q) {
                  he(f, f.return, q);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (l === t && (l = null), (t = t.return));
            }
            (l === t && (l = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        a & 4 &&
          ((a = e.updateQueue),
          a !== null &&
            ((l = a.retryQueue),
            l !== null && ((a.retryQueue = null), bi(e, l))));
        break;
      case 19:
        (tt(t, e),
          lt(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), bi(e, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (tt(t, e), lt(e));
    }
  }
  function lt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null; ) {
          if (to(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(r(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              i = Mc(e);
            xi(e, i, n);
            break;
          case 5:
            var u = l.stateNode;
            l.flags & 32 && (Il(u, ""), (l.flags &= -33));
            var s = Mc(e);
            xi(e, s, u);
            break;
          case 3:
          case 4:
            var f = l.stateNode.containerInfo,
              p = Mc(e);
            _c(e, p, f);
            break;
          default:
            throw Error(r(161));
        }
      } catch (j) {
        he(e, e.return, j);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function ro(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (ro(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function $t(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (no(e, t.alternate, t), (t = t.sibling));
  }
  function Xl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (hl(4, t, t.return), Xl(t));
          break;
        case 1:
          Rt(t, t.return);
          var l = t.stateNode;
          (typeof l.componentWillUnmount == "function" && Pr(t, t.return, l),
            Xl(t));
          break;
        case 27:
          gn(t.stateNode);
        case 26:
        case 5:
          (Rt(t, t.return), Xl(t));
          break;
        case 22:
          t.memoizedState === null && Xl(t);
          break;
        case 30:
          Xl(t);
          break;
        default:
          Xl(t);
      }
      e = e.sibling;
    }
  }
  function Ft(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        n = e,
        i = t,
        u = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (Ft(n, i, l), cn(4, i));
          break;
        case 1:
          if (
            (Ft(n, i, l),
            (a = i),
            (n = a.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (p) {
              he(a, a.return, p);
            }
          if (((a = i), (n = a.updateQueue), n !== null)) {
            var s = a.stateNode;
            try {
              var f = n.shared.hiddenCallbacks;
              if (f !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < f.length; n++)
                  Yf(f[n], s);
            } catch (p) {
              he(a, a.return, p);
            }
          }
          (l && u & 64 && Ir(i), sn(i, i.return));
          break;
        case 27:
          lo(i);
        case 26:
        case 5:
          (Ft(n, i, l), l && a === null && u & 4 && eo(i), sn(i, i.return));
          break;
        case 12:
          Ft(n, i, l);
          break;
        case 31:
          (Ft(n, i, l), l && u & 4 && co(n, i));
          break;
        case 13:
          (Ft(n, i, l), l && u & 4 && so(n, i));
          break;
        case 22:
          (i.memoizedState === null && Ft(n, i, l), sn(i, i.return));
          break;
        case 30:
          break;
        default:
          Ft(n, i, l);
      }
      t = t.sibling;
    }
  }
  function wc(e, t) {
    var l = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && Ka(l)));
  }
  function Oc(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Ka(e)));
  }
  function wt(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (oo(e, t, l, a), (t = t.sibling));
  }
  function oo(e, t, l, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (wt(e, t, l, a), n & 2048 && cn(9, t));
        break;
      case 1:
        wt(e, t, l, a);
        break;
      case 3:
        (wt(e, t, l, a),
          n & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Ka(e))));
        break;
      case 12:
        if (n & 2048) {
          (wt(e, t, l, a), (e = t.stateNode));
          try {
            var i = t.memoizedProps,
              u = i.id,
              s = i.onPostCommit;
            typeof s == "function" &&
              s(
                u,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (f) {
            he(t, t.return, f);
          }
        } else wt(e, t, l, a);
        break;
      case 31:
        wt(e, t, l, a);
        break;
      case 13:
        wt(e, t, l, a);
        break;
      case 23:
        break;
      case 22:
        ((i = t.stateNode),
          (u = t.alternate),
          t.memoizedState !== null
            ? i._visibility & 2
              ? wt(e, t, l, a)
              : fn(e, t)
            : i._visibility & 2
              ? wt(e, t, l, a)
              : ((i._visibility |= 2),
                pa(e, t, l, a, (t.subtreeFlags & 10256) !== 0 || !1)),
          n & 2048 && wc(u, t));
        break;
      case 24:
        (wt(e, t, l, a), n & 2048 && Oc(t.alternate, t));
        break;
      default:
        wt(e, t, l, a);
    }
  }
  function pa(e, t, l, a, n) {
    for (
      n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var i = e,
        u = t,
        s = l,
        f = a,
        p = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (pa(i, u, s, f, n), cn(8, u));
          break;
        case 23:
          break;
        case 22:
          var j = u.stateNode;
          (u.memoizedState !== null
            ? j._visibility & 2
              ? pa(i, u, s, f, n)
              : fn(i, u)
            : ((j._visibility |= 2), pa(i, u, s, f, n)),
            n && p & 2048 && wc(u.alternate, u));
          break;
        case 24:
          (pa(i, u, s, f, n), n && p & 2048 && Oc(u.alternate, u));
          break;
        default:
          pa(i, u, s, f, n);
      }
      t = t.sibling;
    }
  }
  function fn(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e,
          a = t,
          n = a.flags;
        switch (a.tag) {
          case 22:
            (fn(l, a), n & 2048 && wc(a.alternate, a));
            break;
          case 24:
            (fn(l, a), n & 2048 && Oc(a.alternate, a));
            break;
          default:
            fn(l, a);
        }
        t = t.sibling;
      }
  }
  var rn = 8192;
  function xa(e, t, l) {
    if (e.subtreeFlags & rn)
      for (e = e.child; e !== null; ) (mo(e, t, l), (e = e.sibling));
  }
  function mo(e, t, l) {
    switch (e.tag) {
      case 26:
        (xa(e, t, l),
          e.flags & rn &&
            e.memoizedState !== null &&
            fh(l, Dt, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        xa(e, t, l);
        break;
      case 3:
      case 4:
        var a = Dt;
        ((Dt = Hi(e.stateNode.containerInfo)), xa(e, t, l), (Dt = a));
        break;
      case 22:
        e.memoizedState === null &&
          ((a = e.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = rn), (rn = 16777216), xa(e, t, l), (rn = a))
            : xa(e, t, l));
        break;
      default:
        xa(e, t, l);
    }
  }
  function ho(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function on(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          ((Ye = a), vo(a, e));
        }
      ho(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (yo(e), (e = e.sibling));
  }
  function yo(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (on(e), e.flags & 2048 && hl(9, e, e.return));
        break;
      case 3:
        on(e);
        break;
      case 12:
        on(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Si(e))
          : on(e);
        break;
      default:
        on(e);
    }
  }
  function Si(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          ((Ye = a), vo(a, e));
        }
      ho(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (hl(8, t, t.return), Si(t));
          break;
        case 22:
          ((l = t.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), Si(t)));
          break;
        default:
          Si(t);
      }
      e = e.sibling;
    }
  }
  function vo(e, t) {
    for (; Ye !== null; ) {
      var l = Ye;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          hl(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Ka(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) ((a.return = l), (Ye = a));
      else
        e: for (l = e; Ye !== null; ) {
          a = Ye;
          var n = a.sibling,
            i = a.return;
          if ((io(a), a === l)) {
            Ye = null;
            break e;
          }
          if (n !== null) {
            ((n.return = i), (Ye = n));
            break e;
          }
          Ye = i;
        }
    }
  }
  var Nm = {
      getCacheForType: function (e) {
        var t = Ve(Ce),
          l = t.data.get(e);
        return (l === void 0 && ((l = e()), t.data.set(e, l)), l);
      },
      cacheSignal: function () {
        return Ve(Ce).controller.signal;
      },
    },
    Am = typeof WeakMap == "function" ? WeakMap : Map,
    fe = 0,
    je = null,
    te = null,
    ae = 0,
    me = 0,
    dt = null,
    yl = !1,
    ba = !1,
    Cc = !1,
    It = 0,
    Me = 0,
    vl = 0,
    Vl = 0,
    Hc = 0,
    mt = 0,
    Sa = 0,
    dn = null,
    at = null,
    Rc = !1,
    ji = 0,
    go = 0,
    zi = 1 / 0,
    Ni = null,
    gl = null,
    Be = 0,
    pl = null,
    ja = null,
    Pt = 0,
    Uc = 0,
    Bc = null,
    po = null,
    mn = 0,
    qc = null;
  function ht() {
    return (fe & 2) !== 0 && ae !== 0 ? ae & -ae : z.T !== null ? Xc() : Os();
  }
  function xo() {
    if (mt === 0)
      if ((ae & 536870912) === 0 || ie) {
        var e = On;
        ((On <<= 1), (On & 3932160) === 0 && (On = 262144), (mt = e));
      } else mt = 536870912;
    return ((e = rt.current), e !== null && (e.flags |= 32), mt);
  }
  function nt(e, t, l) {
    (((e === je && (me === 2 || me === 9)) || e.cancelPendingCommit !== null) &&
      (za(e, 0), xl(e, ae, mt, !1)),
      Ca(e, l),
      ((fe & 2) === 0 || e !== je) &&
        (e === je &&
          ((fe & 2) === 0 && (Vl |= l), Me === 4 && xl(e, ae, mt, !1)),
        Ut(e)));
  }
  function bo(e, t, l) {
    if ((fe & 6) !== 0) throw Error(r(327));
    var a = (!l && (t & 127) === 0 && (t & e.expiredLanes) === 0) || Oa(e, t),
      n = a ? Mm(e, t) : kc(e, t, !0),
      i = a;
    do {
      if (n === 0) {
        ba && !a && xl(e, t, 0, !1);
        break;
      } else {
        if (((l = e.current.alternate), i && !Em(l))) {
          ((n = kc(e, t, !1)), (i = !1));
          continue;
        }
        if (n === 2) {
          if (((i = t), e.errorRecoveryDisabledLanes & i)) var u = 0;
          else
            ((u = e.pendingLanes & -536870913),
              (u = u !== 0 ? u : u & 536870912 ? 536870912 : 0));
          if (u !== 0) {
            t = u;
            e: {
              var s = e;
              n = dn;
              var f = s.current.memoizedState.isDehydrated;
              if ((f && (za(s, u).flags |= 256), (u = kc(s, u, !1)), u !== 2)) {
                if (Cc && !f) {
                  ((s.errorRecoveryDisabledLanes |= i), (Vl |= i), (n = 4));
                  break e;
                }
                ((i = at),
                  (at = n),
                  i !== null &&
                    (at === null ? (at = i) : at.push.apply(at, i)));
              }
              n = u;
            }
            if (((i = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          (za(e, 0), xl(e, t, 0, !0));
          break;
        }
        e: {
          switch (((a = e), (i = n), i)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              xl(a, t, mt, !yl);
              break e;
            case 2:
              at = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && ((n = ji + 300 - it()), 10 < n)) {
            if ((xl(a, t, mt, !yl), Hn(a, 0, !0) !== 0)) break e;
            ((Pt = t),
              (a.timeoutHandle = Fo(
                So.bind(
                  null,
                  a,
                  l,
                  at,
                  Ni,
                  Rc,
                  t,
                  mt,
                  Vl,
                  Sa,
                  yl,
                  i,
                  "Throttled",
                  -0,
                  0,
                ),
                n,
              )));
            break e;
          }
          So(a, l, at, Ni, Rc, t, mt, Vl, Sa, yl, i, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Ut(e);
  }
  function So(e, t, l, a, n, i, u, s, f, p, j, A, x, b) {
    if (
      ((e.timeoutHandle = -1),
      (A = t.subtreeFlags),
      A & 8192 || (A & 16785408) === 16785408)
    ) {
      ((A = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: qt,
      }),
        mo(t, i, A));
      var q =
        (i & 62914560) === i ? ji - it() : (i & 4194048) === i ? go - it() : 0;
      if (((q = rh(A, q)), q !== null)) {
        ((Pt = i),
          (e.cancelPendingCommit = q(
            _o.bind(null, e, t, i, l, a, n, u, s, f, j, A, null, x, b),
          )),
          xl(e, i, u, !p));
        return;
      }
    }
    _o(e, t, i, l, a, n, u, s, f);
  }
  function Em(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        t.flags & 16384 &&
        ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            i = n.getSnapshot;
          n = n.value;
          try {
            if (!st(i(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = t.child), t.subtreeFlags & 16384 && l !== null))
        ((l.return = t), (t = l));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function xl(e, t, l, a) {
    ((t &= ~Hc),
      (t &= ~Vl),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes));
    for (var n = t; 0 < n; ) {
      var i = 31 - ct(n),
        u = 1 << i;
      ((a[i] = -1), (n &= ~u));
    }
    l !== 0 && _s(e, l, t);
  }
  function Ai() {
    return (fe & 6) === 0 ? (hn(0), !1) : !0;
  }
  function Lc() {
    if (te !== null) {
      if (me === 0) var e = te.return;
      else ((e = te), (Gt = Ul = null), tc(e), (ma = null), (Wa = 0), (e = te));
      for (; e !== null; ) (Fr(e.alternate, e), (e = e.return));
      te = null;
    }
  }
  function za(e, t) {
    var l = e.timeoutHandle;
    (l !== -1 && ((e.timeoutHandle = -1), Zm(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      (Pt = 0),
      Lc(),
      (je = e),
      (te = l = kt(e.current, null)),
      (ae = t),
      (me = 0),
      (dt = null),
      (yl = !1),
      (ba = Oa(e, t)),
      (Cc = !1),
      (Sa = mt = Hc = Vl = vl = Me = 0),
      (at = dn = null),
      (Rc = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var n = 31 - ct(a),
          i = 1 << n;
        ((t |= e[n]), (a &= ~i));
      }
    return ((It = t), Zn(), l);
  }
  function jo(e, t) {
    (($ = null),
      (z.H = an),
      t === da || t === ei
        ? ((t = Bf()), (me = 3))
        : t === Qu
          ? ((t = Bf()), (me = 4))
          : (me =
              t === gc
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (dt = t),
      te === null && ((Me = 1), hi(e, St(t, e.current))));
  }
  function zo() {
    var e = rt.current;
    return e === null
      ? !0
      : (ae & 4194048) === ae
        ? At === null
        : (ae & 62914560) === ae || (ae & 536870912) !== 0
          ? e === At
          : !1;
  }
  function No() {
    var e = z.H;
    return ((z.H = an), e === null ? an : e);
  }
  function Ao() {
    var e = z.A;
    return ((z.A = Nm), e);
  }
  function Ei() {
    ((Me = 4),
      yl || ((ae & 4194048) !== ae && rt.current !== null) || (ba = !0),
      ((vl & 134217727) === 0 && (Vl & 134217727) === 0) ||
        je === null ||
        xl(je, ae, mt, !1));
  }
  function kc(e, t, l) {
    var a = fe;
    fe |= 2;
    var n = No(),
      i = Ao();
    ((je !== e || ae !== t) && ((Ni = null), za(e, t)), (t = !1));
    var u = Me;
    e: do
      try {
        if (me !== 0 && te !== null) {
          var s = te,
            f = dt;
          switch (me) {
            case 8:
              (Lc(), (u = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              rt.current === null && (t = !0);
              var p = me;
              if (((me = 0), (dt = null), Na(e, s, f, p), l && ba)) {
                u = 0;
                break e;
              }
              break;
            default:
              ((p = me), (me = 0), (dt = null), Na(e, s, f, p));
          }
        }
        (Tm(), (u = Me));
        break;
      } catch (j) {
        jo(e, j);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Gt = Ul = null),
      (fe = a),
      (z.H = n),
      (z.A = i),
      te === null && ((je = null), (ae = 0), Zn()),
      u
    );
  }
  function Tm() {
    for (; te !== null; ) Eo(te);
  }
  function Mm(e, t) {
    var l = fe;
    fe |= 2;
    var a = No(),
      n = Ao();
    je !== e || ae !== t
      ? ((Ni = null), (zi = it() + 500), za(e, t))
      : (ba = Oa(e, t));
    e: do
      try {
        if (me !== 0 && te !== null) {
          t = te;
          var i = dt;
          t: switch (me) {
            case 1:
              ((me = 0), (dt = null), Na(e, t, i, 1));
              break;
            case 2:
            case 9:
              if (Rf(i)) {
                ((me = 0), (dt = null), To(t));
                break;
              }
              ((t = function () {
                ((me !== 2 && me !== 9) || je !== e || (me = 7), Ut(e));
              }),
                i.then(t, t));
              break e;
            case 3:
              me = 7;
              break e;
            case 4:
              me = 5;
              break e;
            case 7:
              Rf(i)
                ? ((me = 0), (dt = null), To(t))
                : ((me = 0), (dt = null), Na(e, t, i, 7));
              break;
            case 5:
              var u = null;
              switch (te.tag) {
                case 26:
                  u = te.memoizedState;
                case 5:
                case 27:
                  var s = te;
                  if (u ? dd(u) : s.stateNode.complete) {
                    ((me = 0), (dt = null));
                    var f = s.sibling;
                    if (f !== null) te = f;
                    else {
                      var p = s.return;
                      p !== null ? ((te = p), Ti(p)) : (te = null);
                    }
                    break t;
                  }
              }
              ((me = 0), (dt = null), Na(e, t, i, 5));
              break;
            case 6:
              ((me = 0), (dt = null), Na(e, t, i, 6));
              break;
            case 8:
              (Lc(), (Me = 6));
              break e;
            default:
              throw Error(r(462));
          }
        }
        _m();
        break;
      } catch (j) {
        jo(e, j);
      }
    while (!0);
    return (
      (Gt = Ul = null),
      (z.H = a),
      (z.A = n),
      (fe = l),
      te !== null ? 0 : ((je = null), (ae = 0), Zn(), Me)
    );
  }
  function _m() {
    for (; te !== null && !Id(); ) Eo(te);
  }
  function Eo(e) {
    var t = Wr(e.alternate, e, It);
    ((e.memoizedProps = e.pendingProps), t === null ? Ti(e) : (te = t));
  }
  function To(e) {
    var t = e,
      l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Qr(l, t, t.pendingProps, t.type, void 0, ae);
        break;
      case 11:
        t = Qr(l, t, t.pendingProps, t.type.render, t.ref, ae);
        break;
      case 5:
        tc(t);
      default:
        (Fr(l, t), (t = te = Nf(t, It)), (t = Wr(l, t, It)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Ti(e) : (te = t));
  }
  function Na(e, t, l, a) {
    ((Gt = Ul = null), tc(t), (ma = null), (Wa = 0));
    var n = t.return;
    try {
      if (gm(e, n, t, l, ae)) {
        ((Me = 1), hi(e, St(l, e.current)), (te = null));
        return;
      }
    } catch (i) {
      if (n !== null) throw ((te = n), i);
      ((Me = 1), hi(e, St(l, e.current)), (te = null));
      return;
    }
    t.flags & 32768
      ? (ie || a === 1
          ? (e = !0)
          : ba || (ae & 536870912) !== 0
            ? (e = !1)
            : ((yl = e = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = rt.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        Mo(t, e))
      : Ti(t);
  }
  function Ti(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Mo(t, yl);
        return;
      }
      e = t.return;
      var l = bm(t.alternate, t, It);
      if (l !== null) {
        te = l;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        te = t;
        return;
      }
      te = t = e;
    } while (t !== null);
    Me === 0 && (Me = 5);
  }
  function Mo(e, t) {
    do {
      var l = Sm(e.alternate, e);
      if (l !== null) {
        ((l.flags &= 32767), (te = l));
        return;
      }
      if (
        ((l = e.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        te = e;
        return;
      }
      te = e = l;
    } while (e !== null);
    ((Me = 6), (te = null));
  }
  function _o(e, t, l, a, n, i, u, s, f) {
    e.cancelPendingCommit = null;
    do Mi();
    while (Be !== 0);
    if ((fe & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === e.current) throw Error(r(177));
      if (
        ((i = t.lanes | t.childLanes),
        (i |= Mu),
        s0(e, l, i, u, s, f),
        e === je && ((te = je = null), (ae = 0)),
        (ja = t),
        (pl = e),
        (Pt = l),
        (Uc = i),
        (Bc = n),
        (po = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            Cm(Dn, function () {
              return (Ho(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = z.T), (z.T = null), (n = H.p), (H.p = 2), (u = fe), (fe |= 4));
        try {
          jm(e, t, l);
        } finally {
          ((fe = u), (H.p = n), (z.T = a));
        }
      }
      ((Be = 1), Do(), wo(), Oo());
    }
  }
  function Do() {
    if (Be === 1) {
      Be = 0;
      var e = pl,
        t = ja,
        l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        ((l = z.T), (z.T = null));
        var a = H.p;
        H.p = 2;
        var n = fe;
        fe |= 4;
        try {
          fo(t, e);
          var i = Ic,
            u = yf(e.containerInfo),
            s = i.focusedElem,
            f = i.selectionRange;
          if (
            u !== s &&
            s &&
            s.ownerDocument &&
            hf(s.ownerDocument.documentElement, s)
          ) {
            if (f !== null && zu(s)) {
              var p = f.start,
                j = f.end;
              if ((j === void 0 && (j = p), "selectionStart" in s))
                ((s.selectionStart = p),
                  (s.selectionEnd = Math.min(j, s.value.length)));
              else {
                var A = s.ownerDocument || document,
                  x = (A && A.defaultView) || window;
                if (x.getSelection) {
                  var b = x.getSelection(),
                    q = s.textContent.length,
                    G = Math.min(f.start, q),
                    xe = f.end === void 0 ? G : Math.min(f.end, q);
                  !b.extend && G > xe && ((u = xe), (xe = G), (G = u));
                  var y = mf(s, G),
                    d = mf(s, xe);
                  if (
                    y &&
                    d &&
                    (b.rangeCount !== 1 ||
                      b.anchorNode !== y.node ||
                      b.anchorOffset !== y.offset ||
                      b.focusNode !== d.node ||
                      b.focusOffset !== d.offset)
                  ) {
                    var g = A.createRange();
                    (g.setStart(y.node, y.offset),
                      b.removeAllRanges(),
                      G > xe
                        ? (b.addRange(g), b.extend(d.node, d.offset))
                        : (g.setEnd(d.node, d.offset), b.addRange(g)));
                  }
                }
              }
            }
            for (A = [], b = s; (b = b.parentNode); )
              b.nodeType === 1 &&
                A.push({ element: b, left: b.scrollLeft, top: b.scrollTop });
            for (
              typeof s.focus == "function" && s.focus(), s = 0;
              s < A.length;
              s++
            ) {
              var N = A[s];
              ((N.element.scrollLeft = N.left), (N.element.scrollTop = N.top));
            }
          }
          ((ki = !!Fc), (Ic = Fc = null));
        } finally {
          ((fe = n), (H.p = a), (z.T = l));
        }
      }
      ((e.current = t), (Be = 2));
    }
  }
  function wo() {
    if (Be === 2) {
      Be = 0;
      var e = pl,
        t = ja,
        l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        ((l = z.T), (z.T = null));
        var a = H.p;
        H.p = 2;
        var n = fe;
        fe |= 4;
        try {
          no(e, t.alternate, t);
        } finally {
          ((fe = n), (H.p = a), (z.T = l));
        }
      }
      Be = 3;
    }
  }
  function Oo() {
    if (Be === 4 || Be === 3) {
      ((Be = 0), Pd());
      var e = pl,
        t = ja,
        l = Pt,
        a = po;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Be = 5)
        : ((Be = 0), (ja = pl = null), Co(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (
        (n === 0 && (gl = null),
        nu(l),
        (t = t.stateNode),
        ut && typeof ut.onCommitFiberRoot == "function")
      )
        try {
          ut.onCommitFiberRoot(wa, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((t = z.T), (n = H.p), (H.p = 2), (z.T = null));
        try {
          for (var i = e.onRecoverableError, u = 0; u < a.length; u++) {
            var s = a[u];
            i(s.value, { componentStack: s.stack });
          }
        } finally {
          ((z.T = t), (H.p = n));
        }
      }
      ((Pt & 3) !== 0 && Mi(),
        Ut(e),
        (n = e.pendingLanes),
        (l & 261930) !== 0 && (n & 42) !== 0
          ? e === qc
            ? mn++
            : ((mn = 0), (qc = e))
          : (mn = 0),
        hn(0));
    }
  }
  function Co(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Ka(t)));
  }
  function Mi() {
    return (Do(), wo(), Oo(), Ho());
  }
  function Ho() {
    if (Be !== 5) return !1;
    var e = pl,
      t = Uc;
    Uc = 0;
    var l = nu(Pt),
      a = z.T,
      n = H.p;
    try {
      ((H.p = 32 > l ? 32 : l), (z.T = null), (l = Bc), (Bc = null));
      var i = pl,
        u = Pt;
      if (((Be = 0), (ja = pl = null), (Pt = 0), (fe & 6) !== 0))
        throw Error(r(331));
      var s = fe;
      if (
        ((fe |= 4),
        yo(i.current),
        oo(i, i.current, u, l),
        (fe = s),
        hn(0, !1),
        ut && typeof ut.onPostCommitFiberRoot == "function")
      )
        try {
          ut.onPostCommitFiberRoot(wa, i);
        } catch {}
      return !0;
    } finally {
      ((H.p = n), (z.T = a), Co(e, t));
    }
  }
  function Ro(e, t, l) {
    ((t = St(l, t)),
      (t = vc(e.stateNode, t, 2)),
      (e = ol(e, t, 2)),
      e !== null && (Ca(e, 2), Ut(e)));
  }
  function he(e, t, l) {
    if (e.tag === 3) Ro(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Ro(t, e, l);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (gl === null || !gl.has(a)))
          ) {
            ((e = St(l, e)),
              (l = Rr(2)),
              (a = ol(t, l, 2)),
              a !== null && (Ur(l, a, t, e), Ca(a, 2), Ut(a)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Yc(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Am();
      var n = new Set();
      a.set(t, n);
    } else ((n = a.get(t)), n === void 0 && ((n = new Set()), a.set(t, n)));
    n.has(l) ||
      ((Cc = !0), n.add(l), (e = Dm.bind(null, e, t, l)), t.then(e, e));
  }
  function Dm(e, t, l) {
    var a = e.pingCache;
    (a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      je === e &&
        (ae & l) === l &&
        (Me === 4 || (Me === 3 && (ae & 62914560) === ae && 300 > it() - ji)
          ? (fe & 2) === 0 && za(e, 0)
          : (Hc |= l),
        Sa === ae && (Sa = 0)),
      Ut(e));
  }
  function Uo(e, t) {
    (t === 0 && (t = Ms()), (e = Cl(e, t)), e !== null && (Ca(e, t), Ut(e)));
  }
  function wm(e) {
    var t = e.memoizedState,
      l = 0;
    (t !== null && (l = t.retryLane), Uo(e, l));
  }
  function Om(e, t) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode,
          n = e.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    (a !== null && a.delete(t), Uo(e, l));
  }
  function Cm(e, t) {
    return eu(e, t);
  }
  var _i = null,
    Aa = null,
    Gc = !1,
    Di = !1,
    Qc = !1,
    bl = 0;
  function Ut(e) {
    (e !== Aa &&
      e.next === null &&
      (Aa === null ? (_i = Aa = e) : (Aa = Aa.next = e)),
      (Di = !0),
      Gc || ((Gc = !0), Rm()));
  }
  function hn(e, t) {
    if (!Qc && Di) {
      Qc = !0;
      do
        for (var l = !1, a = _i; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var u = a.suspendedLanes,
                s = a.pingedLanes;
              ((i = (1 << (31 - ct(42 | e) + 1)) - 1),
                (i &= n & ~(u & ~s)),
                (i = i & 201326741 ? (i & 201326741) | 1 : i ? i | 2 : 0));
            }
            i !== 0 && ((l = !0), ko(a, i));
          } else
            ((i = ae),
              (i = Hn(
                a,
                a === je ? i : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (i & 3) === 0 || Oa(a, i) || ((l = !0), ko(a, i)));
          a = a.next;
        }
      while (l);
      Qc = !1;
    }
  }
  function Hm() {
    Bo();
  }
  function Bo() {
    Di = Gc = !1;
    var e = 0;
    bl !== 0 && Vm() && (e = bl);
    for (var t = it(), l = null, a = _i; a !== null; ) {
      var n = a.next,
        i = qo(a, t);
      (i === 0
        ? ((a.next = null),
          l === null ? (_i = n) : (l.next = n),
          n === null && (Aa = l))
        : ((l = a), (e !== 0 || (i & 3) !== 0) && (Di = !0)),
        (a = n));
    }
    ((Be !== 0 && Be !== 5) || hn(e), bl !== 0 && (bl = 0));
  }
  function qo(e, t) {
    for (
      var l = e.suspendedLanes,
        a = e.pingedLanes,
        n = e.expirationTimes,
        i = e.pendingLanes & -62914561;
      0 < i;
    ) {
      var u = 31 - ct(i),
        s = 1 << u,
        f = n[u];
      (f === -1
        ? ((s & l) === 0 || (s & a) !== 0) && (n[u] = c0(s, t))
        : f <= t && (e.expiredLanes |= s),
        (i &= ~s));
    }
    if (
      ((t = je),
      (l = ae),
      (l = Hn(
        e,
        e === t ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (a = e.callbackNode),
      l === 0 ||
        (e === t && (me === 2 || me === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && tu(a),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((l & 3) === 0 || Oa(e, l)) {
      if (((t = l & -l), t === e.callbackPriority)) return t;
      switch ((a !== null && tu(a), nu(l))) {
        case 2:
        case 8:
          l = Es;
          break;
        case 32:
          l = Dn;
          break;
        case 268435456:
          l = Ts;
          break;
        default:
          l = Dn;
      }
      return (
        (a = Lo.bind(null, e)),
        (l = eu(l, a)),
        (e.callbackPriority = t),
        (e.callbackNode = l),
        t
      );
    }
    return (
      a !== null && a !== null && tu(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Lo(e, t) {
    if (Be !== 0 && Be !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var l = e.callbackNode;
    if (Mi() && e.callbackNode !== l) return null;
    var a = ae;
    return (
      (a = Hn(
        e,
        e === je ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (bo(e, a, t),
          qo(e, it()),
          e.callbackNode != null && e.callbackNode === l
            ? Lo.bind(null, e)
            : null)
    );
  }
  function ko(e, t) {
    if (Mi()) return null;
    bo(e, t, !0);
  }
  function Rm() {
    Km(function () {
      (fe & 6) !== 0 ? eu(As, Hm) : Bo();
    });
  }
  function Xc() {
    if (bl === 0) {
      var e = ra;
      (e === 0 && ((e = wn), (wn <<= 1), (wn & 261888) === 0 && (wn = 256)),
        (bl = e));
    }
    return bl;
  }
  function Yo(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : qn("" + e);
  }
  function Go(e, t) {
    var l = t.ownerDocument.createElement("input");
    return (
      (l.name = t.name),
      (l.value = t.value),
      e.id && l.setAttribute("form", e.id),
      t.parentNode.insertBefore(l, t),
      (e = new FormData(e)),
      l.parentNode.removeChild(l),
      e
    );
  }
  function Um(e, t, l, a, n) {
    if (t === "submit" && l && l.stateNode === n) {
      var i = Yo((n[Ie] || null).action),
        u = a.submitter;
      u &&
        ((t = (t = u[Ie] || null)
          ? Yo(t.formAction)
          : u.getAttribute("formAction")),
        t !== null && ((i = t), (u = null)));
      var s = new Gn("action", "action", null, a, n);
      e.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (bl !== 0) {
                  var f = u ? Go(n, u) : new FormData(n);
                  rc(
                    l,
                    { pending: !0, data: f, method: n.method, action: i },
                    null,
                    f,
                  );
                }
              } else
                typeof i == "function" &&
                  (s.preventDefault(),
                  (f = u ? Go(n, u) : new FormData(n)),
                  rc(
                    l,
                    { pending: !0, data: f, method: n.method, action: i },
                    i,
                    f,
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var Vc = 0; Vc < Tu.length; Vc++) {
    var Zc = Tu[Vc],
      Bm = Zc.toLowerCase(),
      qm = Zc[0].toUpperCase() + Zc.slice(1);
    _t(Bm, "on" + qm);
  }
  (_t(pf, "onAnimationEnd"),
    _t(xf, "onAnimationIteration"),
    _t(bf, "onAnimationStart"),
    _t("dblclick", "onDoubleClick"),
    _t("focusin", "onFocus"),
    _t("focusout", "onBlur"),
    _t(em, "onTransitionRun"),
    _t(tm, "onTransitionStart"),
    _t(lm, "onTransitionCancel"),
    _t(Sf, "onTransitionEnd"),
    $l("onMouseEnter", ["mouseout", "mouseover"]),
    $l("onMouseLeave", ["mouseout", "mouseover"]),
    $l("onPointerEnter", ["pointerout", "pointerover"]),
    $l("onPointerLeave", ["pointerout", "pointerover"]),
    _l(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    _l(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    _l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    _l(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    _l(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    _l(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var yn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Lm = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(yn),
    );
  function Qo(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l],
        n = a.event;
      a = a.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var u = a.length - 1; 0 <= u; u--) {
            var s = a[u],
              f = s.instance,
              p = s.currentTarget;
            if (((s = s.listener), f !== i && n.isPropagationStopped()))
              break e;
            ((i = s), (n.currentTarget = p));
            try {
              i(n);
            } catch (j) {
              Vn(j);
            }
            ((n.currentTarget = null), (i = f));
          }
        else
          for (u = 0; u < a.length; u++) {
            if (
              ((s = a[u]),
              (f = s.instance),
              (p = s.currentTarget),
              (s = s.listener),
              f !== i && n.isPropagationStopped())
            )
              break e;
            ((i = s), (n.currentTarget = p));
            try {
              i(n);
            } catch (j) {
              Vn(j);
            }
            ((n.currentTarget = null), (i = f));
          }
      }
    }
  }
  function le(e, t) {
    var l = t[iu];
    l === void 0 && (l = t[iu] = new Set());
    var a = e + "__bubble";
    l.has(a) || (Xo(t, e, 2, !1), l.add(a));
  }
  function Kc(e, t, l) {
    var a = 0;
    (t && (a |= 4), Xo(l, e, a, t));
  }
  var wi = "_reactListening" + Math.random().toString(36).slice(2);
  function Jc(e) {
    if (!e[wi]) {
      ((e[wi] = !0),
        Rs.forEach(function (l) {
          l !== "selectionchange" && (Lm.has(l) || Kc(l, !1, e), Kc(l, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[wi] || ((t[wi] = !0), Kc("selectionchange", !1, t));
    }
  }
  function Xo(e, t, l, a) {
    switch (xd(t)) {
      case 2:
        var n = mh;
        break;
      case 8:
        n = hh;
        break;
      default:
        n = fs;
    }
    ((l = n.bind(null, t, l, e)),
      (n = void 0),
      !hu ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (n = !0),
      a
        ? n !== void 0
          ? e.addEventListener(t, l, { capture: !0, passive: n })
          : e.addEventListener(t, l, !0)
        : n !== void 0
          ? e.addEventListener(t, l, { passive: n })
          : e.addEventListener(t, l, !1));
  }
  function Wc(e, t, l, a, n) {
    var i = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var u = a.tag;
        if (u === 3 || u === 4) {
          var s = a.stateNode.containerInfo;
          if (s === n) break;
          if (u === 4)
            for (u = a.return; u !== null; ) {
              var f = u.tag;
              if ((f === 3 || f === 4) && u.stateNode.containerInfo === n)
                return;
              u = u.return;
            }
          for (; s !== null; ) {
            if (((u = Kl(s)), u === null)) return;
            if (((f = u.tag), f === 5 || f === 6 || f === 26 || f === 27)) {
              a = i = u;
              continue e;
            }
            s = s.parentNode;
          }
        }
        a = a.return;
      }
    Ks(function () {
      var p = i,
        j = du(l),
        A = [];
      e: {
        var x = jf.get(e);
        if (x !== void 0) {
          var b = Gn,
            q = e;
          switch (e) {
            case "keypress":
              if (kn(l) === 0) break e;
            case "keydown":
            case "keyup":
              b = O0;
              break;
            case "focusin":
              ((q = "focus"), (b = pu));
              break;
            case "focusout":
              ((q = "blur"), (b = pu));
              break;
            case "beforeblur":
            case "afterblur":
              b = pu;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              b = $s;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              b = b0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              b = R0;
              break;
            case pf:
            case xf:
            case bf:
              b = z0;
              break;
            case Sf:
              b = B0;
              break;
            case "scroll":
            case "scrollend":
              b = p0;
              break;
            case "wheel":
              b = L0;
              break;
            case "copy":
            case "cut":
            case "paste":
              b = A0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              b = Is;
              break;
            case "toggle":
            case "beforetoggle":
              b = Y0;
          }
          var G = (t & 4) !== 0,
            xe = !G && (e === "scroll" || e === "scrollend"),
            y = G ? (x !== null ? x + "Capture" : null) : x;
          G = [];
          for (var d = p, g; d !== null; ) {
            var N = d;
            if (
              ((g = N.stateNode),
              (N = N.tag),
              (N !== 5 && N !== 26 && N !== 27) ||
                g === null ||
                y === null ||
                ((N = Ua(d, y)), N != null && G.push(vn(d, N, g))),
              xe)
            )
              break;
            d = d.return;
          }
          0 < G.length &&
            ((x = new b(x, q, null, l, j)), A.push({ event: x, listeners: G }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((x = e === "mouseover" || e === "pointerover"),
            (b = e === "mouseout" || e === "pointerout"),
            x &&
              l !== ou &&
              (q = l.relatedTarget || l.fromElement) &&
              (Kl(q) || q[Zl]))
          )
            break e;
          if (
            (b || x) &&
            ((x =
              j.window === j
                ? j
                : (x = j.ownerDocument)
                  ? x.defaultView || x.parentWindow
                  : window),
            b
              ? ((q = l.relatedTarget || l.toElement),
                (b = p),
                (q = q ? Kl(q) : null),
                q !== null &&
                  ((xe = _(q)),
                  (G = q.tag),
                  q !== xe || (G !== 5 && G !== 27 && G !== 6)) &&
                  (q = null))
              : ((b = null), (q = p)),
            b !== q)
          ) {
            if (
              ((G = $s),
              (N = "onMouseLeave"),
              (y = "onMouseEnter"),
              (d = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((G = Is),
                (N = "onPointerLeave"),
                (y = "onPointerEnter"),
                (d = "pointer")),
              (xe = b == null ? x : Ra(b)),
              (g = q == null ? x : Ra(q)),
              (x = new G(N, d + "leave", b, l, j)),
              (x.target = xe),
              (x.relatedTarget = g),
              (N = null),
              Kl(j) === p &&
                ((G = new G(y, d + "enter", q, l, j)),
                (G.target = g),
                (G.relatedTarget = xe),
                (N = G)),
              (xe = N),
              b && q)
            )
              t: {
                for (G = km, y = b, d = q, g = 0, N = y; N; N = G(N)) g++;
                N = 0;
                for (var Y = d; Y; Y = G(Y)) N++;
                for (; 0 < g - N; ) ((y = G(y)), g--);
                for (; 0 < N - g; ) ((d = G(d)), N--);
                for (; g--; ) {
                  if (y === d || (d !== null && y === d.alternate)) {
                    G = y;
                    break t;
                  }
                  ((y = G(y)), (d = G(d)));
                }
                G = null;
              }
            else G = null;
            (b !== null && Vo(A, x, b, G, !1),
              q !== null && xe !== null && Vo(A, xe, q, G, !0));
          }
        }
        e: {
          if (
            ((x = p ? Ra(p) : window),
            (b = x.nodeName && x.nodeName.toLowerCase()),
            b === "select" || (b === "input" && x.type === "file"))
          )
            var ce = cf;
          else if (nf(x))
            if (sf) ce = F0;
            else {
              ce = W0;
              var k = J0;
            }
          else
            ((b = x.nodeName),
              !b ||
              b.toLowerCase() !== "input" ||
              (x.type !== "checkbox" && x.type !== "radio")
                ? p && ru(p.elementType) && (ce = cf)
                : (ce = $0));
          if (ce && (ce = ce(e, p))) {
            uf(A, ce, l, j);
            break e;
          }
          (k && k(e, x, p),
            e === "focusout" &&
              p &&
              x.type === "number" &&
              p.memoizedProps.value != null &&
              fu(x, "number", x.value));
        }
        switch (((k = p ? Ra(p) : window), e)) {
          case "focusin":
            (nf(k) || k.contentEditable === "true") &&
              ((la = k), (Nu = p), (Xa = null));
            break;
          case "focusout":
            Xa = Nu = la = null;
            break;
          case "mousedown":
            Au = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Au = !1), vf(A, l, j));
            break;
          case "selectionchange":
            if (P0) break;
          case "keydown":
          case "keyup":
            vf(A, l, j);
        }
        var F;
        if (bu)
          e: {
            switch (e) {
              case "compositionstart":
                var ne = "onCompositionStart";
                break e;
              case "compositionend":
                ne = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ne = "onCompositionUpdate";
                break e;
            }
            ne = void 0;
          }
        else
          ta
            ? lf(e, l) && (ne = "onCompositionEnd")
            : e === "keydown" &&
              l.keyCode === 229 &&
              (ne = "onCompositionStart");
        (ne &&
          (Ps &&
            l.locale !== "ko" &&
            (ta || ne !== "onCompositionStart"
              ? ne === "onCompositionEnd" && ta && (F = Js())
              : ((nl = j),
                (yu = "value" in nl ? nl.value : nl.textContent),
                (ta = !0))),
          (k = Oi(p, ne)),
          0 < k.length &&
            ((ne = new Fs(ne, e, null, l, j)),
            A.push({ event: ne, listeners: k }),
            F ? (ne.data = F) : ((F = af(l)), F !== null && (ne.data = F)))),
          (F = Q0 ? X0(e, l) : V0(e, l)) &&
            ((ne = Oi(p, "onBeforeInput")),
            0 < ne.length &&
              ((k = new Fs("onBeforeInput", "beforeinput", null, l, j)),
              A.push({ event: k, listeners: ne }),
              (k.data = F))),
          Um(A, e, p, l, j));
      }
      Qo(A, t);
    });
  }
  function vn(e, t, l) {
    return { instance: e, listener: t, currentTarget: l };
  }
  function Oi(e, t) {
    for (var l = t + "Capture", a = []; e !== null; ) {
      var n = e,
        i = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          i === null ||
          ((n = Ua(e, l)),
          n != null && a.unshift(vn(e, n, i)),
          (n = Ua(e, t)),
          n != null && a.push(vn(e, n, i))),
        e.tag === 3)
      )
        return a;
      e = e.return;
    }
    return [];
  }
  function km(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Vo(e, t, l, a, n) {
    for (var i = t._reactName, u = []; l !== null && l !== a; ) {
      var s = l,
        f = s.alternate,
        p = s.stateNode;
      if (((s = s.tag), f !== null && f === a)) break;
      ((s !== 5 && s !== 26 && s !== 27) ||
        p === null ||
        ((f = p),
        n
          ? ((p = Ua(l, i)), p != null && u.unshift(vn(l, p, f)))
          : n || ((p = Ua(l, i)), p != null && u.push(vn(l, p, f)))),
        (l = l.return));
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var Ym = /\r\n?/g,
    Gm = /\u0000|\uFFFD/g;
  function Zo(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Ym,
        `
`,
      )
      .replace(Gm, "");
  }
  function Ko(e, t) {
    return ((t = Zo(t)), Zo(e) === t);
  }
  function pe(e, t, l, a, n, i) {
    switch (l) {
      case "children":
        typeof a == "string"
          ? t === "body" || (t === "textarea" && a === "") || Il(e, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            t !== "body" &&
            Il(e, "" + a);
        break;
      case "className":
        Un(e, "class", a);
        break;
      case "tabIndex":
        Un(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Un(e, l, a);
        break;
      case "style":
        Vs(e, a, i);
        break;
      case "data":
        if (t !== "object") {
          Un(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          e.removeAttribute(l);
          break;
        }
        ((a = qn("" + a)), e.setAttribute(l, a));
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof i == "function" &&
            (l === "formAction"
              ? (t !== "input" && pe(e, t, "name", n.name, n, null),
                pe(e, t, "formEncType", n.formEncType, n, null),
                pe(e, t, "formMethod", n.formMethod, n, null),
                pe(e, t, "formTarget", n.formTarget, n, null))
              : (pe(e, t, "encType", n.encType, n, null),
                pe(e, t, "method", n.method, n, null),
                pe(e, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        ((a = qn("" + a)), e.setAttribute(l, a));
        break;
      case "onClick":
        a != null && (e.onclick = qt);
        break;
      case "onScroll":
        a != null && le("scroll", e);
        break;
      case "onScrollEnd":
        a != null && le("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(r(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((l = qn("" + a)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(l, "" + a)
          : e.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(l, "")
          : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0
          ? e.setAttribute(l, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? e.setAttribute(l, a)
            : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? e.setAttribute(l, a)
          : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? e.removeAttribute(l)
          : e.setAttribute(l, a);
        break;
      case "popover":
        (le("beforetoggle", e), le("toggle", e), Rn(e, "popover", a));
        break;
      case "xlinkActuate":
        Bt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Bt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Bt(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Bt(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Bt(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Bt(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Bt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Bt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Bt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Rn(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = v0.get(l) || l), Rn(e, l, a));
    }
  }
  function $c(e, t, l, a, n, i) {
    switch (l) {
      case "style":
        Vs(e, a, i);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(r(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? Il(e, a)
          : (typeof a == "number" || typeof a == "bigint") && Il(e, "" + a);
        break;
      case "onScroll":
        a != null && le("scroll", e);
        break;
      case "onScrollEnd":
        a != null && le("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = qt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Us.hasOwnProperty(l))
          e: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((n = l.endsWith("Capture")),
              (t = l.slice(2, n ? l.length - 7 : void 0)),
              (i = e[Ie] || null),
              (i = i != null ? i[l] : null),
              typeof i == "function" && e.removeEventListener(t, i, n),
              typeof a == "function")
            ) {
              (typeof i != "function" &&
                i !== null &&
                (l in e
                  ? (e[l] = null)
                  : e.hasAttribute(l) && e.removeAttribute(l)),
                e.addEventListener(t, a, n));
              break e;
            }
            l in e
              ? (e[l] = a)
              : a === !0
                ? e.setAttribute(l, "")
                : Rn(e, l, a);
          }
    }
  }
  function Ke(e, t, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (le("error", e), le("load", e));
        var a = !1,
          n = !1,
          i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var u = l[i];
            if (u != null)
              switch (i) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  pe(e, t, i, u, l, null);
              }
          }
        (n && pe(e, t, "srcSet", l.srcSet, l, null),
          a && pe(e, t, "src", l.src, l, null));
        return;
      case "input":
        le("invalid", e);
        var s = (i = u = n = null),
          f = null,
          p = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var j = l[a];
            if (j != null)
              switch (a) {
                case "name":
                  n = j;
                  break;
                case "type":
                  u = j;
                  break;
                case "checked":
                  f = j;
                  break;
                case "defaultChecked":
                  p = j;
                  break;
                case "value":
                  i = j;
                  break;
                case "defaultValue":
                  s = j;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (j != null) throw Error(r(137, t));
                  break;
                default:
                  pe(e, t, a, j, l, null);
              }
          }
        Ys(e, i, s, f, p, u, n, !1);
        return;
      case "select":
        (le("invalid", e), (a = u = i = null));
        for (n in l)
          if (l.hasOwnProperty(n) && ((s = l[n]), s != null))
            switch (n) {
              case "value":
                i = s;
                break;
              case "defaultValue":
                u = s;
                break;
              case "multiple":
                a = s;
              default:
                pe(e, t, n, s, l, null);
            }
        ((t = i),
          (l = u),
          (e.multiple = !!a),
          t != null ? Fl(e, !!a, t, !1) : l != null && Fl(e, !!a, l, !0));
        return;
      case "textarea":
        (le("invalid", e), (i = n = a = null));
        for (u in l)
          if (l.hasOwnProperty(u) && ((s = l[u]), s != null))
            switch (u) {
              case "value":
                a = s;
                break;
              case "defaultValue":
                n = s;
                break;
              case "children":
                i = s;
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(r(91));
                break;
              default:
                pe(e, t, u, s, l, null);
            }
        Qs(e, a, n, i);
        return;
      case "option":
        for (f in l)
          l.hasOwnProperty(f) &&
            ((a = l[f]), a != null) &&
            (f === "selected"
              ? (e.selected =
                  a && typeof a != "function" && typeof a != "symbol")
              : pe(e, t, f, a, l, null));
        return;
      case "dialog":
        (le("beforetoggle", e),
          le("toggle", e),
          le("cancel", e),
          le("close", e));
        break;
      case "iframe":
      case "object":
        le("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < yn.length; a++) le(yn[a], e);
        break;
      case "image":
        (le("error", e), le("load", e));
        break;
      case "details":
        le("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (le("error", e), le("load", e));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (p in l)
          if (l.hasOwnProperty(p) && ((a = l[p]), a != null))
            switch (p) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                pe(e, t, p, a, l, null);
            }
        return;
      default:
        if (ru(t)) {
          for (j in l)
            l.hasOwnProperty(j) &&
              ((a = l[j]), a !== void 0 && $c(e, t, j, a, l, void 0));
          return;
        }
    }
    for (s in l)
      l.hasOwnProperty(s) && ((a = l[s]), a != null && pe(e, t, s, a, l, null));
  }
  function Qm(e, t, l, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          i = null,
          u = null,
          s = null,
          f = null,
          p = null,
          j = null;
        for (b in l) {
          var A = l[b];
          if (l.hasOwnProperty(b) && A != null)
            switch (b) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = A;
              default:
                a.hasOwnProperty(b) || pe(e, t, b, null, a, A);
            }
        }
        for (var x in a) {
          var b = a[x];
          if (((A = l[x]), a.hasOwnProperty(x) && (b != null || A != null)))
            switch (x) {
              case "type":
                i = b;
                break;
              case "name":
                n = b;
                break;
              case "checked":
                p = b;
                break;
              case "defaultChecked":
                j = b;
                break;
              case "value":
                u = b;
                break;
              case "defaultValue":
                s = b;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (b != null) throw Error(r(137, t));
                break;
              default:
                b !== A && pe(e, t, x, b, a, A);
            }
        }
        su(e, u, s, f, p, j, i, n);
        return;
      case "select":
        b = u = s = x = null;
        for (i in l)
          if (((f = l[i]), l.hasOwnProperty(i) && f != null))
            switch (i) {
              case "value":
                break;
              case "multiple":
                b = f;
              default:
                a.hasOwnProperty(i) || pe(e, t, i, null, a, f);
            }
        for (n in a)
          if (
            ((i = a[n]),
            (f = l[n]),
            a.hasOwnProperty(n) && (i != null || f != null))
          )
            switch (n) {
              case "value":
                x = i;
                break;
              case "defaultValue":
                s = i;
                break;
              case "multiple":
                u = i;
              default:
                i !== f && pe(e, t, n, i, a, f);
            }
        ((t = s),
          (l = u),
          (a = b),
          x != null
            ? Fl(e, !!l, x, !1)
            : !!a != !!l &&
              (t != null ? Fl(e, !!l, t, !0) : Fl(e, !!l, l ? [] : "", !1)));
        return;
      case "textarea":
        b = x = null;
        for (s in l)
          if (
            ((n = l[s]),
            l.hasOwnProperty(s) && n != null && !a.hasOwnProperty(s))
          )
            switch (s) {
              case "value":
                break;
              case "children":
                break;
              default:
                pe(e, t, s, null, a, n);
            }
        for (u in a)
          if (
            ((n = a[u]),
            (i = l[u]),
            a.hasOwnProperty(u) && (n != null || i != null))
          )
            switch (u) {
              case "value":
                x = n;
                break;
              case "defaultValue":
                b = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(r(91));
                break;
              default:
                n !== i && pe(e, t, u, n, a, i);
            }
        Gs(e, x, b);
        return;
      case "option":
        for (var q in l)
          ((x = l[q]),
            l.hasOwnProperty(q) &&
              x != null &&
              !a.hasOwnProperty(q) &&
              (q === "selected" ? (e.selected = !1) : pe(e, t, q, null, a, x)));
        for (f in a)
          ((x = a[f]),
            (b = l[f]),
            a.hasOwnProperty(f) &&
              x !== b &&
              (x != null || b != null) &&
              (f === "selected"
                ? (e.selected =
                    x && typeof x != "function" && typeof x != "symbol")
                : pe(e, t, f, x, a, b)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var G in l)
          ((x = l[G]),
            l.hasOwnProperty(G) &&
              x != null &&
              !a.hasOwnProperty(G) &&
              pe(e, t, G, null, a, x));
        for (p in a)
          if (
            ((x = a[p]),
            (b = l[p]),
            a.hasOwnProperty(p) && x !== b && (x != null || b != null))
          )
            switch (p) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (x != null) throw Error(r(137, t));
                break;
              default:
                pe(e, t, p, x, a, b);
            }
        return;
      default:
        if (ru(t)) {
          for (var xe in l)
            ((x = l[xe]),
              l.hasOwnProperty(xe) &&
                x !== void 0 &&
                !a.hasOwnProperty(xe) &&
                $c(e, t, xe, void 0, a, x));
          for (j in a)
            ((x = a[j]),
              (b = l[j]),
              !a.hasOwnProperty(j) ||
                x === b ||
                (x === void 0 && b === void 0) ||
                $c(e, t, j, x, a, b));
          return;
        }
    }
    for (var y in l)
      ((x = l[y]),
        l.hasOwnProperty(y) &&
          x != null &&
          !a.hasOwnProperty(y) &&
          pe(e, t, y, null, a, x));
    for (A in a)
      ((x = a[A]),
        (b = l[A]),
        !a.hasOwnProperty(A) ||
          x === b ||
          (x == null && b == null) ||
          pe(e, t, A, x, a, b));
  }
  function Jo(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Xm() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0;
        a < l.length;
        a++
      ) {
        var n = l[a],
          i = n.transferSize,
          u = n.initiatorType,
          s = n.duration;
        if (i && s && Jo(u)) {
          for (u = 0, s = n.responseEnd, a += 1; a < l.length; a++) {
            var f = l[a],
              p = f.startTime;
            if (p > s) break;
            var j = f.transferSize,
              A = f.initiatorType;
            j &&
              Jo(A) &&
              ((f = f.responseEnd), (u += j * (f < s ? 1 : (s - p) / (f - p))));
          }
          if ((--a, (t += (8 * (i + u)) / (n.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var Fc = null,
    Ic = null;
  function Ci(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Wo(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function $o(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Pc(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var es = null;
  function Vm() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === es
        ? !1
        : ((es = e), !0)
      : ((es = null), !1);
  }
  var Fo = typeof setTimeout == "function" ? setTimeout : void 0,
    Zm = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Io = typeof Promise == "function" ? Promise : void 0,
    Km =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Io < "u"
          ? function (e) {
              return Io.resolve(null).then(e).catch(Jm);
            }
          : Fo;
  function Jm(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Sl(e) {
    return e === "head";
  }
  function Po(e, t) {
    var l = t,
      a = 0;
    do {
      var n = l.nextSibling;
      if ((e.removeChild(l), n && n.nodeType === 8))
        if (((l = n.data), l === "/$" || l === "/&")) {
          if (a === 0) {
            (e.removeChild(n), _a(t));
            return;
          }
          a--;
        } else if (
          l === "$" ||
          l === "$?" ||
          l === "$~" ||
          l === "$!" ||
          l === "&"
        )
          a++;
        else if (l === "html") gn(e.ownerDocument.documentElement);
        else if (l === "head") {
          ((l = e.ownerDocument.head), gn(l));
          for (var i = l.firstChild; i; ) {
            var u = i.nextSibling,
              s = i.nodeName;
            (i[Ha] ||
              s === "SCRIPT" ||
              s === "STYLE" ||
              (s === "LINK" && i.rel.toLowerCase() === "stylesheet") ||
              l.removeChild(i),
              (i = u));
          }
        } else l === "body" && gn(e.ownerDocument.body);
      l = n;
    } while (l);
    _a(t);
  }
  function ed(e, t) {
    var l = e;
    e = 0;
    do {
      var a = l.nextSibling;
      if (
        (l.nodeType === 1
          ? t
            ? ((l._stashedDisplay = l.style.display),
              (l.style.display = "none"))
            : ((l.style.display = l._stashedDisplay || ""),
              l.getAttribute("style") === "" && l.removeAttribute("style"))
          : l.nodeType === 3 &&
            (t
              ? ((l._stashedText = l.nodeValue), (l.nodeValue = ""))
              : (l.nodeValue = l._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((l = a.data), l === "/$")) {
          if (e === 0) break;
          e--;
        } else (l !== "$" && l !== "$?" && l !== "$~" && l !== "$!") || e++;
      l = a;
    } while (l);
  }
  function ts(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (((t = t.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (ts(l), uu(l));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function Wm(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var n = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (a) {
        if (!e[Ha])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((i = e.getAttribute("rel")),
                i === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                i !== n.rel ||
                e.getAttribute("href") !==
                  (n.href == null || n.href === "" ? null : n.href) ||
                e.getAttribute("crossorigin") !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                e.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((i = e.getAttribute("src")),
                (i !== (n.src == null ? null : n.src) ||
                  e.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  e.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  i &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var i = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && e.getAttribute("name") === i) return e;
      } else return e;
      if (((e = Et(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function $m(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !l) ||
        ((e = Et(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function td(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = Et(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function ls(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function as(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function Fm(e, t) {
    var l = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || l.readyState !== "loading") t();
    else {
      var a = function () {
        (t(), l.removeEventListener("DOMContentLoaded", a));
      };
      (l.addEventListener("DOMContentLoaded", a), (e._reactRetry = a));
    }
  }
  function Et(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var ns = null;
  function ld(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0) return Et(e.nextSibling);
          t--;
        } else
          (l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function ad(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (t === 0) return e;
          t--;
        } else (l !== "/$" && l !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function nd(e, t, l) {
    switch (((t = Ci(l)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(r(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(r(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(r(454));
        return e;
      default:
        throw Error(r(451));
    }
  }
  function gn(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    uu(e);
  }
  var Tt = new Map(),
    id = new Set();
  function Hi(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var el = H.d;
  H.d = { f: Im, r: Pm, D: eh, C: th, L: lh, m: ah, X: ih, S: nh, M: uh };
  function Im() {
    var e = el.f(),
      t = Ai();
    return e || t;
  }
  function Pm(e) {
    var t = Jl(e);
    t !== null && t.tag === 5 && t.type === "form" ? Sr(t) : el.r(e);
  }
  var Ea = typeof document > "u" ? null : document;
  function ud(e, t, l) {
    var a = Ea;
    if (a && typeof t == "string" && t) {
      var n = xt(t);
      ((n = 'link[rel="' + e + '"][href="' + n + '"]'),
        typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
        id.has(n) ||
          (id.add(n),
          (e = { rel: e, crossOrigin: l, href: t }),
          a.querySelector(n) === null &&
            ((t = a.createElement("link")),
            Ke(t, "link", e),
            ke(t),
            a.head.appendChild(t))));
    }
  }
  function eh(e) {
    (el.D(e), ud("dns-prefetch", e, null));
  }
  function th(e, t) {
    (el.C(e, t), ud("preconnect", e, t));
  }
  function lh(e, t, l) {
    el.L(e, t, l);
    var a = Ea;
    if (a && e && t) {
      var n = 'link[rel="preload"][as="' + xt(t) + '"]';
      t === "image" && l && l.imageSrcSet
        ? ((n += '[imagesrcset="' + xt(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (n += '[imagesizes="' + xt(l.imageSizes) + '"]'))
        : (n += '[href="' + xt(e) + '"]');
      var i = n;
      switch (t) {
        case "style":
          i = Ta(e);
          break;
        case "script":
          i = Ma(e);
      }
      Tt.has(i) ||
        ((e = C(
          {
            rel: "preload",
            href: t === "image" && l && l.imageSrcSet ? void 0 : e,
            as: t,
          },
          l,
        )),
        Tt.set(i, e),
        a.querySelector(n) !== null ||
          (t === "style" && a.querySelector(pn(i))) ||
          (t === "script" && a.querySelector(xn(i))) ||
          ((t = a.createElement("link")),
          Ke(t, "link", e),
          ke(t),
          a.head.appendChild(t)));
    }
  }
  function ah(e, t) {
    el.m(e, t);
    var l = Ea;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        n =
          'link[rel="modulepreload"][as="' + xt(a) + '"][href="' + xt(e) + '"]',
        i = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = Ma(e);
      }
      if (
        !Tt.has(i) &&
        ((e = C({ rel: "modulepreload", href: e }, t)),
        Tt.set(i, e),
        l.querySelector(n) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(xn(i))) return;
        }
        ((a = l.createElement("link")),
          Ke(a, "link", e),
          ke(a),
          l.head.appendChild(a));
      }
    }
  }
  function nh(e, t, l) {
    el.S(e, t, l);
    var a = Ea;
    if (a && e) {
      var n = Wl(a).hoistableStyles,
        i = Ta(e);
      t = t || "default";
      var u = n.get(i);
      if (!u) {
        var s = { loading: 0, preload: null };
        if ((u = a.querySelector(pn(i)))) s.loading = 5;
        else {
          ((e = C({ rel: "stylesheet", href: e, "data-precedence": t }, l)),
            (l = Tt.get(i)) && is(e, l));
          var f = (u = a.createElement("link"));
          (ke(f),
            Ke(f, "link", e),
            (f._p = new Promise(function (p, j) {
              ((f.onload = p), (f.onerror = j));
            })),
            f.addEventListener("load", function () {
              s.loading |= 1;
            }),
            f.addEventListener("error", function () {
              s.loading |= 2;
            }),
            (s.loading |= 4),
            Ri(u, t, a));
        }
        ((u = { type: "stylesheet", instance: u, count: 1, state: s }),
          n.set(i, u));
      }
    }
  }
  function ih(e, t) {
    el.X(e, t);
    var l = Ea;
    if (l && e) {
      var a = Wl(l).hoistableScripts,
        n = Ma(e),
        i = a.get(n);
      i ||
        ((i = l.querySelector(xn(n))),
        i ||
          ((e = C({ src: e, async: !0 }, t)),
          (t = Tt.get(n)) && us(e, t),
          (i = l.createElement("script")),
          ke(i),
          Ke(i, "link", e),
          l.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        a.set(n, i));
    }
  }
  function uh(e, t) {
    el.M(e, t);
    var l = Ea;
    if (l && e) {
      var a = Wl(l).hoistableScripts,
        n = Ma(e),
        i = a.get(n);
      i ||
        ((i = l.querySelector(xn(n))),
        i ||
          ((e = C({ src: e, async: !0, type: "module" }, t)),
          (t = Tt.get(n)) && us(e, t),
          (i = l.createElement("script")),
          ke(i),
          Ke(i, "link", e),
          l.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        a.set(n, i));
    }
  }
  function cd(e, t, l, a) {
    var n = (n = ee.current) ? Hi(n) : null;
    if (!n) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((t = Ta(l.href)),
            (l = Wl(n).hoistableStyles),
            (a = l.get(t)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              l.set(t, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          e = Ta(l.href);
          var i = Wl(n).hoistableStyles,
            u = i.get(e);
          if (
            (u ||
              ((n = n.ownerDocument || n),
              (u = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              i.set(e, u),
              (i = n.querySelector(pn(e))) &&
                !i._p &&
                ((u.instance = i), (u.state.loading = 5)),
              Tt.has(e) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                Tt.set(e, l),
                i || ch(n, e, l, u.state))),
            t && a === null)
          )
            throw Error(r(528, ""));
          return u;
        }
        if (t && a !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (t = l.async),
          (l = l.src),
          typeof l == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Ma(l)),
              (l = Wl(n).hoistableScripts),
              (a = l.get(t)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(t, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, e));
    }
  }
  function Ta(e) {
    return 'href="' + xt(e) + '"';
  }
  function pn(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function sd(e) {
    return C({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function ch(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (a.loading = 1)
      : ((t = e.createElement("link")),
        (a.preload = t),
        t.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Ke(t, "link", l),
        ke(t),
        e.head.appendChild(t));
  }
  function Ma(e) {
    return '[src="' + xt(e) + '"]';
  }
  function xn(e) {
    return "script[async]" + e;
  }
  function fd(e, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = e.querySelector('style[data-href~="' + xt(l.href) + '"]');
          if (a) return ((t.instance = a), ke(a), a);
          var n = C({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement("style")),
            ke(a),
            Ke(a, "style", n),
            Ri(a, l.precedence, e),
            (t.instance = a)
          );
        case "stylesheet":
          n = Ta(l.href);
          var i = e.querySelector(pn(n));
          if (i) return ((t.state.loading |= 4), (t.instance = i), ke(i), i);
          ((a = sd(l)),
            (n = Tt.get(n)) && is(a, n),
            (i = (e.ownerDocument || e).createElement("link")),
            ke(i));
          var u = i;
          return (
            (u._p = new Promise(function (s, f) {
              ((u.onload = s), (u.onerror = f));
            })),
            Ke(i, "link", a),
            (t.state.loading |= 4),
            Ri(i, l.precedence, e),
            (t.instance = i)
          );
        case "script":
          return (
            (i = Ma(l.src)),
            (n = e.querySelector(xn(i)))
              ? ((t.instance = n), ke(n), n)
              : ((a = l),
                (n = Tt.get(i)) && ((a = C({}, l)), us(a, n)),
                (e = e.ownerDocument || e),
                (n = e.createElement("script")),
                ke(n),
                Ke(n, "link", a),
                e.head.appendChild(n),
                (t.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), Ri(a, l.precedence, e));
    return t.instance;
  }
  function Ri(e, t, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        n = a.length ? a[a.length - 1] : null,
        i = n,
        u = 0;
      u < a.length;
      u++
    ) {
      var s = a[u];
      if (s.dataset.precedence === t) i = s;
      else if (i !== n) break;
    }
    i
      ? i.parentNode.insertBefore(e, i.nextSibling)
      : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
  }
  function is(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function us(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var Ui = null;
  function rd(e, t, l) {
    if (Ui === null) {
      var a = new Map(),
        n = (Ui = new Map());
      n.set(l, a);
    } else ((n = Ui), (a = n.get(l)), a || ((a = new Map()), n.set(l, a)));
    if (a.has(e)) return a;
    for (
      a.set(e, null), l = l.getElementsByTagName(e), n = 0;
      n < l.length;
      n++
    ) {
      var i = l[n];
      if (
        !(
          i[Ha] ||
          i[Qe] ||
          (e === "link" && i.getAttribute("rel") === "stylesheet")
        ) &&
        i.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var u = i.getAttribute(t) || "";
        u = e + u;
        var s = a.get(u);
        s ? s.push(i) : a.set(u, [i]);
      }
    }
    return a;
  }
  function od(e, t, l) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        l,
        t === "title" ? e.querySelector("head > title") : null,
      ));
  }
  function sh(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        return t.rel === "stylesheet"
          ? ((e = t.disabled), typeof t.precedence == "string" && e == null)
          : !0;
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function dd(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function fh(e, t, l, a) {
    if (
      l.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var n = Ta(a.href),
          i = t.querySelector(pn(n));
        if (i) {
          ((t = i._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = Bi.bind(e)), t.then(e, e)),
            (l.state.loading |= 4),
            (l.instance = i),
            ke(i));
          return;
        }
        ((i = t.ownerDocument || t),
          (a = sd(a)),
          (n = Tt.get(n)) && is(a, n),
          (i = i.createElement("link")),
          ke(i));
        var u = i;
        ((u._p = new Promise(function (s, f) {
          ((u.onload = s), (u.onerror = f));
        })),
          Ke(i, "link", a),
          (l.instance = i));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(l, t),
        (t = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (e.count++,
          (l = Bi.bind(e)),
          t.addEventListener("load", l),
          t.addEventListener("error", l)));
    }
  }
  var cs = 0;
  function rh(e, t) {
    return (
      e.stylesheets && e.count === 0 && Li(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (l) {
            var a = setTimeout(function () {
              if ((e.stylesheets && Li(e, e.stylesheets), e.unsuspend)) {
                var i = e.unsuspend;
                ((e.unsuspend = null), i());
              }
            }, 6e4 + t);
            0 < e.imgBytes && cs === 0 && (cs = 62500 * Xm());
            var n = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && Li(e, e.stylesheets), e.unsuspend))
                ) {
                  var i = e.unsuspend;
                  ((e.unsuspend = null), i());
                }
              },
              (e.imgBytes > cs ? 50 : 800) + t,
            );
            return (
              (e.unsuspend = l),
              function () {
                ((e.unsuspend = null), clearTimeout(a), clearTimeout(n));
              }
            );
          }
        : null
    );
  }
  function Bi() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Li(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var qi = null;
  function Li(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (qi = new Map()),
        t.forEach(oh, e),
        (qi = null),
        Bi.call(e)));
  }
  function oh(e, t) {
    if (!(t.state.loading & 4)) {
      var l = qi.get(e);
      if (l) var a = l.get(null);
      else {
        ((l = new Map()), qi.set(e, l));
        for (
          var n = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            i = 0;
          i < n.length;
          i++
        ) {
          var u = n[i];
          (u.nodeName === "LINK" || u.getAttribute("media") !== "not all") &&
            (l.set(u.dataset.precedence, u), (a = u));
        }
        a && l.set(null, a);
      }
      ((n = t.instance),
        (u = n.getAttribute("data-precedence")),
        (i = l.get(u) || a),
        i === a && l.set(null, n),
        l.set(u, n),
        this.count++,
        (a = Bi.bind(this)),
        n.addEventListener("load", a),
        n.addEventListener("error", a),
        i
          ? i.parentNode.insertBefore(n, i.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(n, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var bn = {
    $$typeof: re,
    Provider: null,
    Consumer: null,
    _currentValue: X,
    _currentValue2: X,
    _threadCount: 0,
  };
  function dh(e, t, l, a, n, i, u, s, f) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = lu(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = lu(0)),
      (this.hiddenUpdates = lu(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = i),
      (this.onRecoverableError = u),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = f),
      (this.incompleteTransitions = new Map()));
  }
  function md(e, t, l, a, n, i, u, s, f, p, j, A) {
    return (
      (e = new dh(e, t, l, u, f, p, j, A, s)),
      (t = 1),
      i === !0 && (t |= 24),
      (i = ft(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (t = ku()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (i.memoizedState = { element: a, isDehydrated: l, cache: t }),
      Xu(i),
      e
    );
  }
  function hd(e) {
    return e ? ((e = ia), e) : ia;
  }
  function yd(e, t, l, a, n, i) {
    ((n = hd(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = rl(t)),
      (a.payload = { element: l }),
      (i = i === void 0 ? null : i),
      i !== null && (a.callback = i),
      (l = ol(e, a, t)),
      l !== null && (nt(l, e, t), Fa(l, e, t)));
  }
  function vd(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function ss(e, t) {
    (vd(e, t), (e = e.alternate) && vd(e, t));
  }
  function gd(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Cl(e, 67108864);
      (t !== null && nt(t, e, 67108864), ss(e, 67108864));
    }
  }
  function pd(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = ht();
      t = au(t);
      var l = Cl(e, t);
      (l !== null && nt(l, e, t), ss(e, t));
    }
  }
  var ki = !0;
  function mh(e, t, l, a) {
    var n = z.T;
    z.T = null;
    var i = H.p;
    try {
      ((H.p = 2), fs(e, t, l, a));
    } finally {
      ((H.p = i), (z.T = n));
    }
  }
  function hh(e, t, l, a) {
    var n = z.T;
    z.T = null;
    var i = H.p;
    try {
      ((H.p = 8), fs(e, t, l, a));
    } finally {
      ((H.p = i), (z.T = n));
    }
  }
  function fs(e, t, l, a) {
    if (ki) {
      var n = rs(a);
      if (n === null) (Wc(e, t, a, Yi, l), bd(e, a));
      else if (vh(n, e, t, l, a)) a.stopPropagation();
      else if ((bd(e, a), t & 4 && -1 < yh.indexOf(e))) {
        for (; n !== null; ) {
          var i = Jl(n);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (((i = i.stateNode), i.current.memoizedState.isDehydrated)) {
                  var u = Ml(i.pendingLanes);
                  if (u !== 0) {
                    var s = i;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; u; ) {
                      var f = 1 << (31 - ct(u));
                      ((s.entanglements[1] |= f), (u &= ~f));
                    }
                    (Ut(i), (fe & 6) === 0 && ((zi = it() + 500), hn(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((s = Cl(i, 2)), s !== null && nt(s, i, 2), Ai(), ss(i, 2));
            }
          if (((i = rs(a)), i === null && Wc(e, t, a, Yi, l), i === n)) break;
          n = i;
        }
        n !== null && a.stopPropagation();
      } else Wc(e, t, a, null, l);
    }
  }
  function rs(e) {
    return ((e = du(e)), os(e));
  }
  var Yi = null;
  function os(e) {
    if (((Yi = null), (e = Kl(e)), e !== null)) {
      var t = _(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (((e = w(t)), e !== null)) return e;
          e = null;
        } else if (l === 31) {
          if (((e = D(t)), e !== null)) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((Yi = e), null);
  }
  function xd(e) {
    switch (e) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (e0()) {
          case As:
            return 2;
          case Es:
            return 8;
          case Dn:
          case t0:
            return 32;
          case Ts:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ds = !1,
    jl = null,
    zl = null,
    Nl = null,
    Sn = new Map(),
    jn = new Map(),
    Al = [],
    yh =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function bd(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        jl = null;
        break;
      case "dragenter":
      case "dragleave":
        zl = null;
        break;
      case "mouseover":
      case "mouseout":
        Nl = null;
        break;
      case "pointerover":
      case "pointerout":
        Sn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        jn.delete(t.pointerId);
    }
  }
  function zn(e, t, l, a, n, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: i,
          targetContainers: [n],
        }),
        t !== null && ((t = Jl(t)), t !== null && gd(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        n !== null && t.indexOf(n) === -1 && t.push(n),
        e);
  }
  function vh(e, t, l, a, n) {
    switch (t) {
      case "focusin":
        return ((jl = zn(jl, e, t, l, a, n)), !0);
      case "dragenter":
        return ((zl = zn(zl, e, t, l, a, n)), !0);
      case "mouseover":
        return ((Nl = zn(Nl, e, t, l, a, n)), !0);
      case "pointerover":
        var i = n.pointerId;
        return (Sn.set(i, zn(Sn.get(i) || null, e, t, l, a, n)), !0);
      case "gotpointercapture":
        return (
          (i = n.pointerId),
          jn.set(i, zn(jn.get(i) || null, e, t, l, a, n)),
          !0
        );
    }
    return !1;
  }
  function Sd(e) {
    var t = Kl(e.target);
    if (t !== null) {
      var l = _(t);
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = w(l)), t !== null)) {
            ((e.blockedOn = t),
              Cs(e.priority, function () {
                pd(l);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = D(l)), t !== null)) {
            ((e.blockedOn = t),
              Cs(e.priority, function () {
                pd(l);
              }));
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Gi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = rs(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(l.type, l);
        ((ou = a), l.target.dispatchEvent(a), (ou = null));
      } else return ((t = Jl(l)), t !== null && gd(t), (e.blockedOn = l), !1);
      t.shift();
    }
    return !0;
  }
  function jd(e, t, l) {
    Gi(e) && l.delete(t);
  }
  function gh() {
    ((ds = !1),
      jl !== null && Gi(jl) && (jl = null),
      zl !== null && Gi(zl) && (zl = null),
      Nl !== null && Gi(Nl) && (Nl = null),
      Sn.forEach(jd),
      jn.forEach(jd));
  }
  function Qi(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      ds ||
        ((ds = !0),
        h.unstable_scheduleCallback(h.unstable_NormalPriority, gh)));
  }
  var Xi = null;
  function zd(e) {
    Xi !== e &&
      ((Xi = e),
      h.unstable_scheduleCallback(h.unstable_NormalPriority, function () {
        Xi === e && (Xi = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t],
            a = e[t + 1],
            n = e[t + 2];
          if (typeof a != "function") {
            if (os(a || l) === null) continue;
            break;
          }
          var i = Jl(l);
          i !== null &&
            (e.splice(t, 3),
            (t -= 3),
            rc(i, { pending: !0, data: n, method: l.method, action: a }, a, n));
        }
      }));
  }
  function _a(e) {
    function t(f) {
      return Qi(f, e);
    }
    (jl !== null && Qi(jl, e),
      zl !== null && Qi(zl, e),
      Nl !== null && Qi(Nl, e),
      Sn.forEach(t),
      jn.forEach(t));
    for (var l = 0; l < Al.length; l++) {
      var a = Al[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Al.length && ((l = Al[0]), l.blockedOn === null); )
      (Sd(l), l.blockedOn === null && Al.shift());
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          i = l[a + 1],
          u = n[Ie] || null;
        if (typeof i == "function") u || zd(l);
        else if (u) {
          var s = null;
          if (i && i.hasAttribute("formAction")) {
            if (((n = i), (u = i[Ie] || null))) s = u.formAction;
            else if (os(n) !== null) continue;
          } else s = u.action;
          (typeof s == "function" ? (l[a + 1] = s) : (l.splice(a, 3), (a -= 3)),
            zd(l));
        }
      }
  }
  function Nd() {
    function e(i) {
      i.canIntercept &&
        i.info === "react-transition" &&
        i.intercept({
          handler: function () {
            return new Promise(function (u) {
              return (n = u);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (n !== null && (n(), (n = null)), a || setTimeout(l, 20));
    }
    function l() {
      if (!a && !navigation.transition) {
        var i = navigation.currentEntry;
        i &&
          i.url != null &&
          navigation.navigate(i.url, {
            state: i.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        n = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(l, 100),
        function () {
          ((a = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            n !== null && (n(), (n = null)));
        }
      );
    }
  }
  function ms(e) {
    this._internalRoot = e;
  }
  ((Vi.prototype.render = ms.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(r(409));
      var l = t.current,
        a = ht();
      yd(l, a, e, t, null, null);
    }),
    (Vi.prototype.unmount = ms.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (yd(e.current, 2, null, e, null, null), Ai(), (t[Zl] = null));
        }
      }));
  function Vi(e) {
    this._internalRoot = e;
  }
  Vi.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Os();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Al.length && t !== 0 && t < Al[l].priority; l++);
      (Al.splice(l, 0, e), l === 0 && Sd(e));
    }
  };
  var Ad = o.version;
  if (Ad !== "19.2.4") throw Error(r(527, Ad, "19.2.4"));
  H.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(r(188))
        : ((e = Object.keys(e).join(",")), Error(r(268, e)));
    return (
      (e = v(t)),
      (e = e !== null ? O(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var ph = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: z,
    reconcilerVersion: "19.2.4",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Zi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Zi.isDisabled && Zi.supportsFiber)
      try {
        ((wa = Zi.inject(ph)), (ut = Zi));
      } catch {}
  }
  return (
    (An.createRoot = function (e, t) {
      if (!T(e)) throw Error(r(299));
      var l = !1,
        a = "",
        n = wr,
        i = Or,
        u = Cr;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (i = t.onCaughtError),
          t.onRecoverableError !== void 0 && (u = t.onRecoverableError)),
        (t = md(e, 1, !1, null, null, l, a, null, n, i, u, Nd)),
        (e[Zl] = t.current),
        Jc(e),
        new ms(t)
      );
    }),
    (An.hydrateRoot = function (e, t, l) {
      if (!T(e)) throw Error(r(299));
      var a = !1,
        n = "",
        i = wr,
        u = Or,
        s = Cr,
        f = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (i = l.onUncaughtError),
          l.onCaughtError !== void 0 && (u = l.onCaughtError),
          l.onRecoverableError !== void 0 && (s = l.onRecoverableError),
          l.formState !== void 0 && (f = l.formState)),
        (t = md(e, 1, !0, t, l ?? null, a, n, f, i, u, s, Nd)),
        (t.context = hd(null)),
        (l = t.current),
        (a = ht()),
        (a = au(a)),
        (n = rl(a)),
        (n.callback = null),
        ol(l, n, a),
        (l = a),
        (t.current.lanes = l),
        Ca(t, l),
        Ut(t),
        (e[Zl] = t.current),
        Jc(e),
        new Vi(t)
      );
    }),
    (An.version = "19.2.4"),
    An
  );
}
var Rd;
function Dh() {
  if (Rd) return vs.exports;
  Rd = 1;
  function h() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h);
      } catch (o) {
        console.error(o);
      }
  }
  return (h(), (vs.exports = _h()), vs.exports);
}
var wh = Dh();
const Wd = U.createContext();
function Oh({ children: h }) {
  const [o, S] = U.useState(
    () => (typeof window < "u" && localStorage.getItem("theme")) || "dark",
  );
  U.useEffect(() => {
    (document.documentElement.classList.remove("light", "dark"),
      document.documentElement.classList.add(o),
      localStorage.setItem("theme", o));
  }, [o]);
  const r = () => S((T) => (T === "dark" ? "light" : "dark"));
  return c.jsx(Wd.Provider, {
    value: { theme: o, toggleTheme: r },
    children: h,
  });
}
function Ch() {
  const h = U.useContext(Wd);
  if (!h) throw new Error("useTheme must be used within ThemeProvider");
  return h;
}
const Fe = {
    name: "Manoj",
    fullName: "Manoj Hankare",
    location: "Hyderabad, India",
    summary: `Software Engineer with 3+ years of experience building backend-heavy enterprise systems, AI-powered platforms, and production agentic applications using Python. Hands-on with Flask, FastAPI, LangGraph, and Spring Boot across PostgreSQL, cloud services on AWS and Azure, and frontend integrations using React.

Experienced in owning features end-to-end - from database design and API development to agentic workflow orchestration, real-time voice AI, deployment, and production support. Actively building with LLMs, RAG pipelines, vector databases, and scalable cloud architectures.`,
    skills: {
      languages: [
        "Python",
        "JavaScript (ES6+)",
        "Java",
        "SQL",
        "Bash",
        "Typescript",
      ],
      backend: [
        "Flask",
        "FastAPI",
        "Spring Boot",
        "Spring Framework",
        "Hibernate",
        "REST API design",
        "JWT Auth",
        "Modular monolith",
        "Async workflows",
        "Blueprints architecture",
      ],
      frontend: [
        "React (Vite)",
        "Tailwind CSS",
        "Angular",
        "Bootstrap",
        "Material UI",
        "PrimeNG",
        "PrimeReact",
        "Recharts",
        "HTML5 / CSS3",
        "Axios",
        "Admin dashboards",
      ],
      databases: [
        "PostgreSQL",
        "MySQL",
        "Oracle DB",
        "MongoDB",
        "SQLite",
        "SQLAlchemy ORM",
        "Elasticsearch",
        "Vector DB",
        "ChromaDB",
        "pgvector",
        "Schema design",
        "Query optimization",
      ],
      cloud: [
        "AWS S3",
        "AWS IAM",
        "Azure (Certified)",
        "Ubuntu VPS",
        "Vercel",
        "Nginx",
        "Docker",
      ],
      aiVoice: [
        "LiveKit",
        "OpenAI API",
        "Gemini API",
        "Deepgram (STT)",
        "Twilio SIP",
        "TTS / STT pipelines",
        "LangGraph",
        "LangChain",
        "LlamaIndex",
        "Agentic workflows",
        "State graph design",
        "Celery task queues",
        "Valkey broker",
        "RAG pipelines",
        "Embeddings",
        "LLM function tools",
      ],
      realtime: [
        "Pusher",
        "Event-based notifications",
        "Live dashboards",
        "WebSockets",
      ],
      scheduling: [
        "Apache Airflow",
        "DAG scheduling",
        "SFTP integrations",
        "Managed File Transfer",
      ],
    },
    experience: [
      {
        role: "Software Engineer",
        company: "VKRAFT Software Services Pvt Ltd",
        location: "Hyderabad, Telangana, India",
        period: "December 2023 – Present",
        responsibilities: [
          "Worked on multiple in-house products focused on cloud automation, AI-assisted communication, and scalable backend APIs",
          "Dwani AI (Voice Agent Platform) – Built modular Flask APIs integrating LiveKit, Twilio, and OpenAI for real-time voice agents deployed on AWS",
          "HospitalMetrics & MFT Automation – Developed healthcare analytics backend with Flask + Elasticsearch and automated file transfer pipelines using Airflow + S3",
          "Dynamic Flask Module Loader – Designed plugin-style backend architecture enabling on-demand module import/export via REST APIs",
        ],
      },
      {
        role: "Freelancer Software Engineer",
        company: "Freelance",
        location: "",
        period: "April 2023 – October 2023 (7 months)",
        responsibilities: [
          "Delivered custom backend and full-stack solutions for small businesses using Flask, Spring Boot, and Angular",
          "Developed lightweight inventory, booking, and billing applications with PostgreSQL and REST APIs",
          "Assisted with AWS deployment and maintenance, including S3 and EC2 setup",
        ],
      },
      {
        role: "Software Engineer",
        company: "Acute Learning",
        location: "Bengaluru, Karnataka, India",
        period: "June 2022 – March 2023 (10 months)",
        responsibilities: [
          "Developed interactive e-books and automated content conversion workflows using Python, HTML5, and JavaScript",
          "Managed MySQL databases and integrated APIs for seamless data retrieval and interaction",
          "Built and maintained software solutions across Java, Python, and JavaScript projects",
        ],
      },
      {
        role: "Internship Trainee",
        company: "SEED Infotech Ltd",
        location: "Pune, Maharashtra, India",
        period: "January 2022 – May 2022 (5 months)",
        responsibilities: [
          "Built web applications using Java, Spring Boot, and Hibernate",
          "Developed front-end interfaces with Angular, HTML, CSS, and Bootstrap",
          "Managed MySQL databases and integrated third-party APIs to enhance application functionality",
        ],
      },
    ],
    projects: [
      {
        name: "AI Voice Agent Platform",
        description:
          "Voice agent platform for automated calls and conversations.",
        contributions: [
          "Built agent dispatch APIs",
          "Integrated LiveKit voice rooms",
          "Enabled SIP calling using Twilio",
          "Implemented transcript storage and call recordings to AWS S3",
          "Added per-call cost calculation for LLM, TTS, and STT usage",
        ],
        stack: ["LiveKit", "Twilio", "OpenAI", "AWS S3"],
        type: "professional",
      },
      {
        name: "AI Customer Support Agent",
        description:
          "Production-grade agentic system for automated customer support ticket processing using LangGraph state machines.",
        contributions: [
          "Designed cyclic state graph for ticket classification, routing, and resolution",
          "Built containerized Python worker with Celery + Valkey broker",
          "Persisted agent checkpointer state in PostgreSQL for resumable workflows",
          "Full docker-compose setup with app-worker, Valkey, and DB services",
        ],
        stack: ["LangGraph", "Celery", "Valkey", "PostgreSQL", "Docker"],
        type: "professional",
      },
      {
        name: "Healthcare Analytics Platform",
        description:
          "Analytics platform for tracking patient journeys and hospital operational metrics.",
        contributions: [
          "Developed backend APIs using Flask",
          "Designed and optimized PostgreSQL data models",
          "Integrated Elasticsearch for analytics and fast querying",
          "Implemented real-time updates using Pusher",
          "Enabled live dashboards for OPD, appointments, and department metrics",
        ],
        stack: ["Flask", "PostgreSQL", "Elasticsearch", "Pusher", "React"],
        type: "professional",
      },
      {
        name: "Hospital Management System",
        description:
          "End-to-end hospital management platform aligned with NABH accreditation and maturity stages.",
        contributions: [
          "Designed PostgreSQL database schemas for complete hospital operations",
          "Built Flask-based backend APIs for OPD, IPD, appointments, admissions, discharge, billing",
          "Implemented end-to-end backend workflows and validations",
          "Ensured NABH-compliant data structures and audit readiness",
        ],
        stack: ["Flask", "PostgreSQL", "SQLAlchemy"],
        type: "professional",
      },
      {
        name: "Enterprise Invoicing Platform",
        description:
          "Invoicing system for managing invoices and billing workflows.",
        contributions: [
          "Developed REST APIs for invoice creation, validation, and lifecycle management",
          "Implemented invoice status tracking and audit logic",
          "Designed database schemas for invoices and transactions",
          "Integrated frontend forms and reports",
        ],
        stack: ["Flask", "PostgreSQL", "SQLAlchemy"],
        type: "professional",
      },
      {
        name: "Managed File Transfer (MFT)",
        description: "Scheduled file workflows and cloud sync.",
        contributions: [
          "Built DAGs for SFTP and cloud sync",
          "Scheduled and monitored file workflows",
          "Used AWS S3 and Azure storage",
        ],
        stack: ["Apache Airflow", "AWS S3", "Azure"],
        type: "professional",
      },
      {
        name: "Analytics Dashboard",
        description:
          "Call metrics visualization and agent performance tracking.",
        contributions: [
          "Call metrics visualization",
          "Agent performance tracking",
          "React + Recharts",
        ],
        stack: ["React", "Recharts"],
        type: "professional",
      },
      {
        name: "MyTools Platform",
        description:
          "A comprehensive suite of utility tools like JSON Linter, Password Generator, and MD Viewer, sharing a consistent Cyberpunk theme.",
        contributions: [
          "Designed and implemented a unified utility platform",
          "Created a consistent design system with Hyperspeed background",
          "Developed custom interactive cursor modes for enhanced UX",
          "Built modular tool shell for easy integration of new utilities",
        ],
        stack: ["React", "Vite", "Tailwind CSS", "Canvas API"],
        type: "personal",
        url: "https://mytools.manojhankare.in/",
        inProgress: !0,
      },
      {
        name: "S3 File Explorer",
        description:
          "Secure file upload/download system with multi-credential AWS support.",
        contributions: [
          "Secure file upload/download system",
          "Multi-credential AWS support",
          "React frontend + Tailwind",
          "DB-based authentication",
        ],
        stack: ["FastAPI", "React", "Tailwind CSS", "AWS S3"],
        type: "personal",
      },
      {
        name: "Modular Flask Backend Framework",
        description:
          "Plug-and-play backend features with dynamic module loading.",
        contributions: [
          "ZIP-based module architecture",
          "Dynamic imports and Blueprint registration",
          "Plug-and-play backend features",
        ],
        stack: ["Flask", "Python"],
        type: "personal",
      },
      {
        name: "SleepSlapper",
        description: "Python tray application to prevent system sleep.",
        contributions: [
          "Python tray application",
          "Prevents system sleep",
          "GitHub Gist-based update checks",
        ],
        stack: ["Python"],
        type: "personal",
        url: "https://github.com/Manojhankare/SleepSlapper/releases/tag/v1.1.0",
      },
      {
        name: "Chat DOM Optimizer",
        description:
          "Chrome/Brave extension that virtualizes long ChatGPT and Claude threads so only messages near the viewport stay fully rendered—lighter scrolling and less browser work.",
        contributions: [
          "Virtualized message list similar to long feeds on social apps",
          "Off-screen content stays lightweight until you scroll to it",
          "Open source; no tracking, ads, or data collection",
        ],
        stack: ["JavaScript", "Chrome Extension", "Web Performance"],
        type: "personal",
        url: "https://github.com/manojhankare/chat-optimizer-extension",
      },
    ],
    education: {
      degree: "Master of Computer Science",
      institution: "Dr. Babasaheb Ambedkar Marathwada University",
      university: "Aurangabad",
      year: "2019 – 2021",
    },
    certifications: [
      {
        name: "AWS Certified Cloud Practitioner",
        url: "https://www.credly.com/badges/6fdfc671-e424-4edc-89b9-01cae1956286/",
      },
      {
        name: "Microsoft Certified: Azure AI Fundamentals",
        url: "https://learn.microsoft.com/en-us/users/manojhankare/credentials/41bb867e7d171015",
      },
      {
        name: "Microsoft Certified: Azure Developer Associate",
        url: "https://learn.microsoft.com/en-us/users/manojhankare/credentials/20aa4021981a5bcb",
      },
      {
        name: "Microsoft Certified: Azure Fundamentals",
        url: "https://learn.microsoft.com/en-us/users/manojhankare/credentials/a1d4012ff58e1d74",
      },
      {
        name: "Capgemini Certification Program in Java Full Stack",
        url: "https://www.edubridgeindia.com/certificate-detail?enrollment_number=EBEON0823828591",
      },
    ],
    practices: [
      "Clean, maintainable code",
      "Modular architecture",
      "Separation of concerns",
      "Config-driven systems",
      "Defensive programming",
      "Cost-aware AI design",
      "Logging & debugging",
    ],
    interests: [
      "Backend / Platform Engineering",
      "AI & Voice Systems",
      "Cloud-native applications",
      "Full-stack product development",
    ],
    contact: {
      email: "manojhankare2@gmail.com",
      linkedin: "https://www.linkedin.com/in/manojhankare",
      github: "https://github.com/Manojhankare",
      medium: "https://manojhankare.medium.com/",
      calendly: "https://calendly.com/manojhankare/let-s-connect",
      resumeUrl: "/manoj-hankare-resume.pdf",
      formspreeId: "xzdaynkd",
    },
    availability: "Open to opportunities",
    blog: [
      {
        title: "Building REST APIs with FastAPI",
        url: "#",
        date: "2025",
        excerpt: "Best practices for async APIs and validation.",
      },
      {
        title: "PostgreSQL Schema Design for Healthcare",
        url: "#",
        date: "2025",
        excerpt: "NABH-compliant data structures and audit trails.",
      },
    ],
    openSource: [
      {
        name: "SleepSlapper",
        url: "https://github.com/Manojhankare/SleepSlapper/releases/tag/v1.1.0",
        description: "Python tray app to prevent system sleep",
      },
      {
        name: "Modular Flask Framework",
        url: "https://github.com/Manojhankare/modular-flask",
        description: "ZIP-based pluggable backend modules",
      },
      {
        name: "Chat DOM Optimizer",
        url: "https://github.com/manojhankare/chat-optimizer-extension",
        description:
          "Browser extension that virtualizes long AI chat threads for smoother performance",
      },
    ],
    awards: [
      { title: "Spot Award", org: "Vkraft", year: "2024" },
      { title: "POC Excellence", org: "Team Recognition", year: "2024" },
    ],
    metrics: {
      systemsDeployed: "8+",
      projectsDelivered: "9+",
      certifications: "5",
      yearsExperience: "3+",
    },
    quotes: [
      { text: "Simplicity is the ultimate sophistication." },
      { text: "First, solve the problem. Then, write the code." },
      { text: "Make it work, make it right, make it fast." },
      {
        text: "Clean code always looks like it was written by someone who cares.",
      },
      { text: "Talk is cheap. Show me the code." },
      {
        text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      },
      { text: "The only way to go fast is to go well." },
      { text: "The best error message is the one that never shows up." },
      {
        text: "Programming isn't about what you know; it's about what you can figure out.",
      },
      {
        text: "The function of good software is to make the complex appear simple.",
      },
      { text: "Before software can be reusable, it first has to be usable." },
      {
        text: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.",
      },
      { text: "Code is read more often than it is written." },
      {
        text: "The most important property of a program is whether it accomplishes the intention of its user.",
      },
      { text: "Good code is its own best documentation." },
      {
        text: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
      },
      {
        text: "The best time to plant a tree was 20 years ago. The second best time is now.",
      },
      { text: "It's not a bug, it's an undocumented feature." },
      { text: "Deleted code is debugged code." },
      {
        text: "One of my most productive days was throwing away 1,000 lines of code.",
      },
      {
        text: "Software is like entropy: it is difficult to grasp, weighs nothing, and obeys the second law of thermodynamics - it always increases.",
      },
      { text: "Fix the cause, not the symptom." },
      {
        text: "A good programmer is someone who always looks both ways before crossing a one-way street.",
      },
      {
        text: "The computer was born to solve problems that did not exist before.",
      },
      {
        text: "Walking on water and developing software from a specification are easy if both are frozen.",
      },
      {
        text: "In programming, the hard part isn't solving problems, but deciding what problems to solve.",
      },
      {
        text: "You can't have great software without a great team, and most software teams behave like dysfunctional families.",
      },
      {
        text: "Debugging is twice as hard as writing the code in the first place.",
      },
      {
        text: "The best performance improvement is the transition from the nonworking state to the working state.",
      },
      { text: "Experience is the name everyone gives to their mistakes." },
      {
        text: "Software and cathedrals are much the same - first we build them, then we pray.",
      },
      {
        text: "Give someone a program, you frustrate them for a day; teach them how to program, you frustrate them for a lifetime.",
      },
      {
        text: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
      },
      {
        text: "A language that doesn't affect the way you think about programming is not worth knowing.",
      },
      {
        text: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
      },
      { text: "Truth can only be found in one place: the code." },
      {
        text: "If debugging is the process of removing bugs, then programming must be the process of putting them in.",
      },
      {
        text: "The most disastrous thing that you can ever learn is your first programming language.",
      },
      {
        text: "Optimism is an occupational hazard of programming; feedback is the treatment.",
      },
      {
        text: "Without requirements or design, programming is the art of adding bugs to an empty text file.",
      },
      { text: "Java is to JavaScript what car is to carpet." },
    ],
    techBadges: [
      "LangGraph",
      "LangChain",
      "LlamaIndex",
      "Celery",
      "Valkey",
      "ChromaDB",
      "pgvector",
      "Vector DB",
      "RAG",
      "Agentic Workflows",
      "Spring Framework",
      "Material UI",
      "PrimeReact",
      "Typescript",
      "Oracle DB",
      "MongoDB",
      "Python",
      "Flask",
      "OpenAI",
      "Gemini",
      "LiveKit",
      "Deepgram",
      "Twilio",
      "Pusher",
      "AWS",
      "Azure",
      "Apache Airflow",
      "Nginx",
      "Vercel",
      "Docker",
      "Docker Compose",
      "Git",
      "Redis",
      "Django",
      "FastAPI",
      "Java",
      "Spring Boot",
      "Hibernate",
      "JavaScript",
      "React",
      "Angular",
      "Tailwind CSS",
      "Recharts",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "SQLAlchemy",
      "Elasticsearch",
      "REST API",
      "JWT",
      "SFTP",
      "Chrome Extension",
      "Web Performance",
    ],
  },
  Hh = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];
function Rh() {
  const [h, o] = U.useState(!1),
    { fullName: S, availability: r, contact: T } = Fe;
  return c.jsx("nav", {
    className:
      "fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50",
    children: c.jsx("div", {
      className: "max-w-6xl mx-auto px-6 py-4",
      children: c.jsxs("div", {
        className: "flex items-center justify-between gap-4",
        children: [
          c.jsxs("div", {
            className: "flex items-center gap-4",
            children: [
              c.jsx("a", {
                href: "#hero",
                className: "text-xl font-bold text-cyan-400",
                children: S,
              }),
              c.jsx("span", {
                className:
                  "hidden sm:inline px-2 py-0.5 text-xs rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30",
                children: r,
              }),
            ],
          }),
          c.jsx("div", {
            className: `${h ? "block" : "hidden"} md:flex md:items-center md:gap-1 absolute md:relative top-full left-0 right-0 md:top-0 bg-slate-900 md:bg-transparent py-4 md:py-0 md:flex-1 md:justify-center`,
            children: Hh.map((_) =>
              c.jsx(
                "a",
                {
                  href: _.href,
                  onClick: () => o(!1),
                  className:
                    "block px-6 md:px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 md:hover:bg-transparent transition-colors",
                  children: _.label,
                },
                _.href,
              ),
            ),
          }),
          c.jsxs("div", {
            className: "flex items-center gap-1",
            children: [
              c.jsx("a", {
                href: T.resumeUrl,
                download: !0,
                onClick: () => {
                  window.gtag &&
                    window.gtag("event", "resume_download", {
                      event_category: "engagement",
                      event_label: "Resume PDF",
                    });
                },
                className:
                  "hidden md:flex items-center gap-1 px-3 py-1.5 text-sm text-slate-300 hover:text-cyan-400 transition-colors",
                children: "Resume",
              }),
              c.jsx("button", {
                onClick: () => o(!h),
                className: "md:hidden p-2 text-slate-300 hover:text-white",
                "aria-label": "Toggle menu",
                children: c.jsx("svg", {
                  className: "w-6 h-6",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: h
                    ? c.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M6 18L18 6M6 6l12 12",
                      })
                    : c.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M4 6h16M4 12h16M4 18h16",
                      }),
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function Uh() {
  const [h, o] = U.useState(0),
    S = U.useRef(null);
  return (
    U.useEffect(() => {
      const r = () => {
        S.current ||
          (S.current = requestAnimationFrame(() => {
            const T = document.documentElement.scrollTop,
              _ = document.documentElement.scrollHeight - window.innerHeight;
            (o(_ > 0 ? (T / _) * 100 : 0), (S.current = null));
          }));
      };
      return (
        window.addEventListener("scroll", r, { passive: !0 }),
        r(),
        () => {
          (window.removeEventListener("scroll", r),
            S.current && cancelAnimationFrame(S.current));
        }
      );
    }, []),
    c.jsx("div", {
      className: "fixed top-0 left-0 right-0 h-1 bg-cyan-500/30 z-[60]",
      role: "progressbar",
      "aria-valuenow": Math.round(h),
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      children: c.jsx("div", {
        className: "h-full bg-cyan-500 transition-all duration-150",
        style: { width: `${h}%` },
      }),
    })
  );
}
function yt({ children: h, className: o = "" }) {
  const S = U.useRef(null),
    [r, T] = U.useState(!1);
  return (
    U.useEffect(() => {
      const _ = S.current;
      if (!_) return;
      const w = new IntersectionObserver(
        ([D]) => {
          D.isIntersecting && T(!0);
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
      );
      return (w.observe(_), () => w.disconnect());
    }, []),
    c.jsx("div", {
      ref: S,
      className: `transition-all duration-700 ${r ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${o}`,
      children: h,
    })
  );
}
const Bh = [
  "I build scalable backend systems and cloud architectures.",
  "I design AI voice platforms and agentic workflows.",
  "I ship production-grade full-stack applications.",
];
function qh(h, o = 45, S = 25, r = 1800) {
  const [T, _] = U.useState(0),
    [w, D] = U.useState(""),
    [E, v] = U.useState(!1),
    O = U.useCallback(() => {
      const C = h[T];
      if (E) {
        const B = C.slice(0, w.length - 1);
        if ((D(B), B === "")) {
          (v(!1), _((ue) => (ue + 1) % h.length));
          return;
        }
      } else {
        const B = C.slice(0, w.length + 1);
        if ((D(B), B === C)) {
          setTimeout(() => v(!0), r);
          return;
        }
      }
    }, [h, T, w, E, r]);
  return (
    U.useEffect(() => {
      const B = setTimeout(O, E ? S : o);
      return () => clearTimeout(B);
    }, [O, E, o, S]),
    w
  );
}
function Lh() {
  const { name: h, location: o, metrics: S, contact: r } = Fe,
    T = qh(Bh);
  return c.jsxs("section", {
    id: "hero",
    className:
      "min-h-screen flex flex-col items-center justify-center px-6 pt-20 bg-transparent relative overflow-hidden",
    children: [
      c.jsx("style", {
        children: `
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .hero-name-gradient {
          background: linear-gradient(270deg, #22d3ee, #a78bfa, #22d3ee);
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `,
      }),
      c.jsx("div", {
        className: "max-w-4xl mx-auto text-center",
        children: c.jsxs(yt, {
          children: [
            c.jsx("p", {
              className:
                "text-cyan-400 font-mono text-sm mb-4 tracking-wider uppercase",
              children: "Software Engineer",
            }),
            c.jsxs("h1", {
              className:
                "text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight",
              children: [
                "Hi, I'm ",
                c.jsx("span", { className: "hero-name-gradient", children: h }),
              ],
            }),
            c.jsxs("p", {
              className: "text-xl md:text-2xl text-slate-400 mb-2 h-9 md:h-10",
              children: [
                T,
                c.jsx("span", {
                  className:
                    "inline-block w-0.5 h-6 md:h-7 bg-cyan-400 ml-0.5 align-middle animate-pulse",
                }),
              ],
            }),
            c.jsxs("p", {
              className:
                "text-slate-500 flex items-center justify-center gap-2",
              children: [
                c.jsxs("svg", {
                  className: "w-5 h-5",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: [
                    c.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
                    }),
                    c.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                    }),
                  ],
                }),
                o,
              ],
            }),
            S &&
              c.jsxs("div", {
                className:
                  "flex flex-wrap justify-center gap-8 mt-8 text-slate-400",
                children: [
                  c.jsxs("div", {
                    children: [
                      c.jsx("span", {
                        className: "text-2xl font-bold text-cyan-400",
                        children: S.systemsDeployed,
                      }),
                      c.jsx("span", {
                        className: "text-sm ml-1",
                        children: "Systems deployed",
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    children: [
                      c.jsx("span", {
                        className: "text-2xl font-bold text-cyan-400",
                        children: S.projectsDelivered,
                      }),
                      c.jsx("span", {
                        className: "text-sm ml-1",
                        children: "Projects",
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    children: [
                      c.jsx("span", {
                        className: "text-2xl font-bold text-cyan-400",
                        children: S.certifications,
                      }),
                      c.jsx("span", {
                        className: "text-sm ml-1",
                        children: "Certifications",
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    children: [
                      c.jsx("span", {
                        className: "text-2xl font-bold text-cyan-400",
                        children: S.yearsExperience,
                      }),
                      c.jsx("span", {
                        className: "text-sm ml-1",
                        children: "Years exp.",
                      }),
                    ],
                  }),
                ],
              }),
            c.jsxs("div", {
              className:
                "flex gap-4 mt-12 justify-center flex-wrap items-center",
              children: [
                c.jsx("a", {
                  href: "#projects",
                  className:
                    "px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-colors",
                  children: "View Projects",
                }),
                c.jsx("a", {
                  href: "#contact",
                  className:
                    "px-6 py-3 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500 hover:text-slate-900 font-bold rounded-lg transition-all duration-300",
                  children: "Reach Out",
                }),
                c.jsx("a", {
                  href: r.github,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "p-3 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300",
                  "aria-label": "GitHub",
                  children: c.jsx("svg", {
                    className: "w-5 h-5",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    children: c.jsx("path", {
                      d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                    }),
                  }),
                }),
                c.jsx("a", {
                  href: r.linkedin,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "p-3 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300",
                  "aria-label": "LinkedIn",
                  children: c.jsx("svg", {
                    className: "w-5 h-5",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    children: c.jsx("path", {
                      d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      c.jsx("div", {
        className: "absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce",
        children: c.jsx("a", {
          href: "#about",
          className: "text-slate-500 hover:text-cyan-400 transition-colors",
          children: c.jsx("svg", {
            className: "w-8 h-8",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: c.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M19 14l-7 7m0 0l-7-7m7 7V3",
            }),
          }),
        }),
      }),
    ],
  });
}
function kh() {
  const { summary: h, practices: o, interests: S } = Fe;
  return c.jsx("section", {
    id: "about",
    className: "py-24 px-6 bg-transparent",
    children: c.jsxs("div", {
      className: "max-w-4xl mx-auto",
      children: [
        c.jsxs("h2", {
          className: "text-3xl md:text-4xl font-bold text-white mb-4",
          children: [
            "About ",
            c.jsx("span", { className: "text-cyan-400", children: "Me" }),
          ],
        }),
        c.jsx("div", {
          className: "space-y-6 text-slate-400 leading-relaxed",
          children: h
            .split(
              `

`,
            )
            .map((r, T) => c.jsx("p", { children: r }, T)),
        }),
        c.jsxs("div", {
          className: "mt-12 grid md:grid-cols-2 gap-8",
          children: [
            c.jsxs("div", {
              children: [
                c.jsx("h3", {
                  className: "text-lg font-semibold text-cyan-400 mb-4",
                  children: "Engineering Practices",
                }),
                c.jsx("ul", {
                  className: "space-y-2",
                  children: o.map((r, T) =>
                    c.jsxs(
                      "li",
                      {
                        className: "flex items-center gap-2 text-slate-400",
                        children: [
                          c.jsx("span", {
                            className: "text-cyan-500",
                            children: "▹",
                          }),
                          r,
                        ],
                      },
                      T,
                    ),
                  ),
                }),
              ],
            }),
            c.jsxs("div", {
              children: [
                c.jsx("h3", {
                  className: "text-lg font-semibold text-cyan-400 mb-4",
                  children: "Career Interests",
                }),
                c.jsx("ul", {
                  className: "space-y-2",
                  children: S.map((r, T) =>
                    c.jsxs(
                      "li",
                      {
                        className: "flex items-center gap-2 text-slate-400",
                        children: [
                          c.jsx("span", {
                            className: "text-cyan-500",
                            children: "▹",
                          }),
                          r,
                        ],
                      },
                      T,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const $d = (...h) =>
  h
    .filter((o, S, r) => !!o && o.trim() !== "" && r.indexOf(o) === S)
    .join(" ")
    .trim();
const Yh = (h) => h.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const Gh = (h) =>
  h.replace(/^([A-Z])|[\s-_]+(\w)/g, (o, S, r) =>
    r ? r.toUpperCase() : S.toLowerCase(),
  );
const Ud = (h) => {
  const o = Gh(h);
  return o.charAt(0).toUpperCase() + o.slice(1);
};
var Qh = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const Xh = (h) => {
  for (const o in h)
    if (o.startsWith("aria-") || o === "role" || o === "title") return !0;
  return !1;
};
const Vh = U.forwardRef(
  (
    {
      color: h = "currentColor",
      size: o = 24,
      strokeWidth: S = 2,
      absoluteStrokeWidth: r,
      className: T = "",
      children: _,
      iconNode: w,
      ...D
    },
    E,
  ) =>
    U.createElement(
      "svg",
      {
        ref: E,
        ...Qh,
        width: o,
        height: o,
        stroke: h,
        strokeWidth: r ? (Number(S) * 24) / Number(o) : S,
        className: $d("lucide", T),
        ...(!_ && !Xh(D) && { "aria-hidden": "true" }),
        ...D,
      },
      [
        ...w.map(([v, O]) => U.createElement(v, O)),
        ...(Array.isArray(_) ? _ : [_]),
      ],
    ),
);
const de = (h, o) => {
  const S = U.forwardRef(({ className: r, ...T }, _) =>
    U.createElement(Vh, {
      ref: _,
      iconNode: o,
      className: $d(`lucide-${Yh(Ud(h))}`, `lucide-${h}`, r),
      ...T,
    }),
  );
  return ((S.displayName = Ud(h)), S);
};
const Zh = [
    [
      "path",
      {
        d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
        key: "169zse",
      },
    ],
  ],
  Tn = de("activity", Zh);
const Kh = [
    ["path", { d: "M12 8V4H8", key: "hb8ula" }],
    [
      "rect",
      { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" },
    ],
    ["path", { d: "M2 14h2", key: "vft8re" }],
    ["path", { d: "M20 14h2", key: "4cs60a" }],
    ["path", { d: "M15 13v2", key: "1xurst" }],
    ["path", { d: "M9 13v2", key: "rq6x2g" }],
  ],
  Jh = de("bot", Kh);
const Wh = [
    [
      "path",
      {
        d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
        key: "hh9hay",
      },
    ],
    ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
    ["path", { d: "M12 22V12", key: "d0xqtd" }],
  ],
  Bd = de("box", Wh);
const $h = [
    [
      "path",
      {
        d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",
        key: "lc1i9w",
      },
    ],
    ["path", { d: "m7 16.5-4.74-2.85", key: "1o9zyk" }],
    ["path", { d: "m7 16.5 5-3", key: "va8pkn" }],
    ["path", { d: "M7 16.5v5.17", key: "jnp8gn" }],
    [
      "path",
      {
        d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",
        key: "8zsnat",
      },
    ],
    ["path", { d: "m17 16.5-5-3", key: "8arw3v" }],
    ["path", { d: "m17 16.5 4.74-2.85", key: "8rfmw" }],
    ["path", { d: "M17 16.5v5.17", key: "k6z78m" }],
    [
      "path",
      {
        d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",
        key: "1xygjf",
      },
    ],
    ["path", { d: "M12 8 7.26 5.15", key: "1vbdud" }],
    ["path", { d: "m12 8 4.74-2.85", key: "3rx089" }],
    ["path", { d: "M12 13.5V8", key: "1io7kd" }],
  ],
  Fh = de("boxes", $h);
const Ih = [
    ["path", { d: "M5 21v-6", key: "1hz6c0" }],
    ["path", { d: "M12 21V3", key: "1lcnhd" }],
    ["path", { d: "M19 21V9", key: "unv183" }],
  ],
  Ph = de("chart-no-axes-column", Ih);
const e1 = [
    [
      "path",
      {
        d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
        key: "p7xjir",
      },
    ],
  ],
  qd = de("cloud", e1);
const t1 = [
    ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
    ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
    ["path", { d: "m14.5 4-5 16", key: "e7oirm" }],
  ],
  l1 = de("code-xml", t1);
const a1 = [
    ["path", { d: "m16 18 6-6-6-6", key: "eg8j8" }],
    ["path", { d: "m8 6-6 6 6 6", key: "ppft3o" }],
  ],
  Ld = de("code", a1);
const n1 = [
    [
      "path",
      {
        d: "M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",
        key: "1t2lqe",
      },
    ],
    ["path", { d: "M10 21.9V14L2.1 9.1", key: "o7czzq" }],
    ["path", { d: "m10 14 11.9-6.9", key: "zm5e20" }],
    ["path", { d: "M14 19.8v-8.1", key: "159ecu" }],
    ["path", { d: "M18 17.5V9.4", key: "11uown" }],
  ],
  i1 = de("container", n1);
const u1 = [
    ["path", { d: "M12 20v2", key: "1lh1kg" }],
    ["path", { d: "M12 2v2", key: "tus03m" }],
    ["path", { d: "M17 20v2", key: "1rnc9c" }],
    ["path", { d: "M17 2v2", key: "11trls" }],
    ["path", { d: "M2 12h2", key: "1t8f8n" }],
    ["path", { d: "M2 17h2", key: "7oei6x" }],
    ["path", { d: "M2 7h2", key: "asdhe0" }],
    ["path", { d: "M20 12h2", key: "1q8mjw" }],
    ["path", { d: "M20 17h2", key: "1fpfkl" }],
    ["path", { d: "M20 7h2", key: "1o8tra" }],
    ["path", { d: "M7 20v2", key: "4gnj0m" }],
    ["path", { d: "M7 2v2", key: "1i4yhu" }],
    [
      "rect",
      { x: "4", y: "4", width: "16", height: "16", rx: "2", key: "1vbyd7" },
    ],
    [
      "rect",
      { x: "8", y: "8", width: "8", height: "8", rx: "1", key: "z9xiuo" },
    ],
  ],
  kd = de("cpu", u1);
const c1 = [
    ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
    ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
    ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
  ],
  tl = de("database", c1);
const s1 = [
    [
      "path",
      {
        d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
        key: "1oefj6",
      },
    ],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
    ["path", { d: "M10 9H8", key: "b1mrlr" }],
    ["path", { d: "M16 13H8", key: "t4e002" }],
    ["path", { d: "M16 17H8", key: "z1uh3a" }],
  ],
  f1 = de("file-text", s1);
const r1 = [
    [
      "path",
      {
        d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",
        key: "18mbvz",
      },
    ],
    ["path", { d: "M6.453 15h11.094", key: "3shlmq" }],
    ["path", { d: "M8.5 2h7", key: "csnxdl" }],
  ],
  o1 = de("flask-conical", r1);
const d1 = [
    ["path", { d: "M15 6a9 9 0 0 0-9 9V3", key: "1cii5b" }],
    ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
    ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ],
  En = de("git-branch", d1);
const m1 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    [
      "path",
      { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
    ],
    ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ],
  h1 = de("globe", m1);
const y1 = [
    ["path", { d: "M10 16h.01", key: "1bzywj" }],
    [
      "path",
      {
        d: "M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
        key: "18tbho",
      },
    ],
    ["path", { d: "M21.946 12.013H2.054", key: "zqlbp7" }],
    ["path", { d: "M6 16h.01", key: "1pmjb7" }],
  ],
  v1 = de("hard-drive", y1);
const g1 = [
    [
      "path",
      {
        d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
        key: "zw3jo",
      },
    ],
    [
      "path",
      {
        d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
        key: "1wduqc",
      },
    ],
    [
      "path",
      {
        d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
        key: "kqbvx6",
      },
    ],
  ],
  Yd = de("layers", g1);
const p1 = [
    [
      "rect",
      {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2",
        key: "1w4ew1",
      },
    ],
    ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
  ],
  x1 = de("lock", p1);
const b1 = [
    [
      "path",
      {
        d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
        key: "18887p",
      },
    ],
  ],
  Gd = de("message-square", b1);
const S1 = [
    ["path", { d: "M12 19v3", key: "npa21l" }],
    ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
    [
      "rect",
      { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" },
    ],
  ],
  j1 = de("mic", S1);
const z1 = [
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
    ],
    ["path", { d: "M3 9h18", key: "1pudct" }],
    ["path", { d: "M9 21V9", key: "1oto5p" }],
  ],
  bs = de("panels-top-left", z1);
const N1 = [
    [
      "path",
      {
        d: "M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",
        key: "w46dr5",
      },
    ],
  ],
  A1 = de("puzzle", N1);
const E1 = [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ],
  T1 = de("search", E1);
const M1 = [
    [
      "rect",
      {
        width: "20",
        height: "8",
        x: "2",
        y: "2",
        rx: "2",
        ry: "2",
        key: "ngkwjq",
      },
    ],
    [
      "rect",
      {
        width: "20",
        height: "8",
        x: "2",
        y: "14",
        rx: "2",
        ry: "2",
        key: "iecqi9",
      },
    ],
    ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
    ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }],
  ],
  Mn = de("server", M1);
const _1 = [
    ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
    ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
    ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
    [
      "line",
      { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" },
    ],
    [
      "line",
      { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" },
    ],
  ],
  D1 = de("share-2", _1);
const w1 = [
    [
      "path",
      {
        d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
        key: "1s2grr",
      },
    ],
    ["path", { d: "M20 2v4", key: "1rf3ol" }],
    ["path", { d: "M22 4h-4", key: "gwowj6" }],
    ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }],
  ],
  Ki = de("sparkles", w1);
const O1 = [
    ["path", { d: "M12 19h8", key: "baeox8" }],
    ["path", { d: "m4 17 6-6-6-6", key: "1yngyt" }],
  ],
  C1 = de("terminal", O1);
const H1 = [
    ["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2", key: "148xed" }],
    ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2", key: "1u4tom" }],
    ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2", key: "75valh" }],
  ],
  R1 = de("wind", H1);
const U1 = [
    [
      "path",
      {
        d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
        key: "1ngwbx",
      },
    ],
  ],
  B1 = de("wrench", U1);
const q1 = [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ],
  Ji = de("zap", q1),
  Qd = (h) => {
    const o = h.toLowerCase();
    return [
      "python",
      "typescript",
      "javascript",
      "java",
      "sql",
      "bash",
      "html5",
      "css3",
      "yaml",
    ].some((S) => o.includes(S))
      ? "language"
      : [
            "flask",
            "fastapi",
            "spring",
            "hibernate",
            "django",
            "celery",
            "rest api",
            "jwt",
          ].some((S) => o.includes(S))
        ? "backend"
        : [
              "react",
              "angular",
              "tailwind",
              "bootstrap",
              "recharts",
              "html",
              "css",
            ].some((S) => o.includes(S))
          ? "frontend"
          : [
                "postgresql",
                "mysql",
                "oracle",
                "mongodb",
                "sqlite",
                "sqlalchemy",
                "elasticsearch",
                "chromadb",
                "pgvector",
                "redis",
                "valkey",
              ].some((S) => o.includes(S))
            ? "database"
            : [
                  "aws",
                  "azure",
                  "docker",
                  "nginx",
                  "vercel",
                  "airflow",
                  "sftp",
                ].some((S) => o.includes(S))
              ? "cloud"
              : [
                    "openai",
                    "gemini",
                    "deepgram",
                    "livekit",
                    "twilio",
                    "pusher",
                    "langgraph",
                    "langchain",
                    "llamaindex",
                    "rag",
                    "embedding",
                  ].some((S) => o.includes(S))
                ? "ai"
                : ["git"].some((S) => o.includes(S))
                  ? "devtool"
                  : "other";
  },
  L1 = {
    all: "All",
    language: "Languages",
    backend: "Backend",
    frontend: "Frontend",
    database: "Databases",
    cloud: "Cloud & DevOps",
    ai: "AI / ML",
    devtool: "Dev Tools",
    other: "Other",
  },
  k1 = {
    language: "96,165,250",
    backend: "52,211,153",
    frontend: "34,211,238",
    database: "251,146,60",
    cloud: "250,204,21",
    ai: "192,132,252",
    devtool: "248,113,113",
    other: "148,163,184",
  },
  Y1 = (h) => {
    const o = h.toLowerCase();
    return o.includes("python")
      ? c.jsx(kd, { size: 16, className: "text-blue-400" })
      : o.includes("typescript")
        ? c.jsx(Ld, { size: 16, className: "text-blue-500" })
        : o.includes("javascript")
          ? c.jsx(Ld, { size: 16, className: "text-yellow-400" })
          : o.includes("java") && !o.includes("javascript")
            ? c.jsx(kd, { size: 16, className: "text-orange-400" })
            : o.includes("html")
              ? c.jsx(bs, { size: 16, className: "text-orange-400" })
              : o.includes("css")
                ? c.jsx(bs, { size: 16, className: "text-blue-400" })
                : o.includes("bash") || o.includes("yaml")
                  ? c.jsx(C1, { size: 16, className: "text-slate-400" })
                  : o.includes("sql") &&
                      !o.includes("mysql") &&
                      !o.includes("postgresql") &&
                      !o.includes("sqlite")
                    ? c.jsx(tl, { size: 16, className: "text-blue-400" })
                    : o.includes("flask")
                      ? c.jsx(o1, { size: 16, className: "text-green-400" })
                      : o.includes("fastapi")
                        ? c.jsx(Ji, { size: 16, className: "text-emerald-400" })
                        : o.includes("spring boot")
                          ? c.jsx(Yd, { size: 16, className: "text-green-500" })
                          : o.includes("spring")
                            ? c.jsx(Yd, {
                                size: 16,
                                className: "text-green-400",
                              })
                            : o.includes("hibernate")
                              ? c.jsx(tl, {
                                  size: 16,
                                  className: "text-amber-500",
                                })
                              : o.includes("django")
                                ? c.jsx(Mn, {
                                    size: 16,
                                    className: "text-green-700",
                                  })
                                : o.includes("celery")
                                  ? c.jsx(Tn, {
                                      size: 16,
                                      className: "text-green-400",
                                    })
                                  : o.includes("react")
                                    ? c.jsx(Bd, {
                                        size: 16,
                                        className: "text-cyan-400",
                                      })
                                    : o.includes("angular")
                                      ? c.jsx(Bd, {
                                          size: 16,
                                          className: "text-red-500",
                                        })
                                      : o.includes("tailwind")
                                        ? c.jsx(R1, {
                                            size: 16,
                                            className: "text-cyan-500",
                                          })
                                        : o.includes("bootstrap")
                                          ? c.jsx(bs, {
                                              size: 16,
                                              className: "text-purple-500",
                                            })
                                          : o.includes("recharts")
                                            ? c.jsx(Tn, {
                                                size: 16,
                                                className: "text-blue-400",
                                              })
                                            : o.includes("postgresql")
                                              ? c.jsx(tl, {
                                                  size: 16,
                                                  className: "text-blue-500",
                                                })
                                              : o.includes("mysql")
                                                ? c.jsx(tl, {
                                                    size: 16,
                                                    className:
                                                      "text-orange-500",
                                                  })
                                                : o.includes("oracle")
                                                  ? c.jsx(tl, {
                                                      size: 16,
                                                      className: "text-red-500",
                                                    })
                                                  : o.includes("mongodb")
                                                    ? c.jsx(tl, {
                                                        size: 16,
                                                        className:
                                                          "text-green-500",
                                                      })
                                                    : o.includes("sqlite")
                                                      ? c.jsx(tl, {
                                                          size: 16,
                                                          className:
                                                            "text-slate-400",
                                                        })
                                                      : o.includes("sqlalchemy")
                                                        ? c.jsx(tl, {
                                                            size: 16,
                                                            className:
                                                              "text-red-400",
                                                          })
                                                        : o.includes(
                                                              "elasticsearch",
                                                            )
                                                          ? c.jsx(T1, {
                                                              size: 16,
                                                              className:
                                                                "text-yellow-500",
                                                            })
                                                          : o.includes(
                                                                "chromadb",
                                                              )
                                                            ? c.jsx(Ki, {
                                                                size: 16,
                                                                className:
                                                                  "text-purple-400",
                                                              })
                                                            : o.includes(
                                                                  "pgvector",
                                                                )
                                                              ? c.jsx(Ki, {
                                                                  size: 16,
                                                                  className:
                                                                    "text-blue-400",
                                                                })
                                                              : o.includes(
                                                                    "redis",
                                                                  )
                                                                ? c.jsx(Ji, {
                                                                    size: 16,
                                                                    className:
                                                                      "text-red-500",
                                                                  })
                                                                : o.includes(
                                                                      "valkey",
                                                                    )
                                                                  ? c.jsx(Ji, {
                                                                      size: 16,
                                                                      className:
                                                                        "text-red-400",
                                                                    })
                                                                  : o.includes(
                                                                        "aws",
                                                                      )
                                                                    ? c.jsx(
                                                                        qd,
                                                                        {
                                                                          size: 16,
                                                                          className:
                                                                            "text-yellow-500",
                                                                        },
                                                                      )
                                                                    : o.includes(
                                                                          "azure",
                                                                        )
                                                                      ? c.jsx(
                                                                          qd,
                                                                          {
                                                                            size: 16,
                                                                            className:
                                                                              "text-sky-400",
                                                                          },
                                                                        )
                                                                      : o.includes(
                                                                            "docker",
                                                                          )
                                                                        ? c.jsx(
                                                                            i1,
                                                                            {
                                                                              size: 16,
                                                                              className:
                                                                                "text-blue-500",
                                                                            },
                                                                          )
                                                                        : o.includes(
                                                                              "nginx",
                                                                            )
                                                                          ? c.jsx(
                                                                              Mn,
                                                                              {
                                                                                size: 16,
                                                                                className:
                                                                                  "text-green-600",
                                                                              },
                                                                            )
                                                                          : o.includes(
                                                                                "vercel",
                                                                              )
                                                                            ? c.jsx(
                                                                                h1,
                                                                                {
                                                                                  size: 16,
                                                                                  className:
                                                                                    "text-slate-300",
                                                                                },
                                                                              )
                                                                            : o.includes(
                                                                                  "airflow",
                                                                                )
                                                                              ? c.jsx(
                                                                                  En,
                                                                                  {
                                                                                    size: 16,
                                                                                    className:
                                                                                      "text-cyan-400",
                                                                                  },
                                                                                )
                                                                              : o.includes(
                                                                                    "langgraph",
                                                                                  )
                                                                                ? c.jsx(
                                                                                    En,
                                                                                    {
                                                                                      size: 16,
                                                                                      className:
                                                                                        "text-purple-500",
                                                                                    },
                                                                                  )
                                                                                : o.includes(
                                                                                      "langchain",
                                                                                    )
                                                                                  ? c.jsx(
                                                                                      En,
                                                                                      {
                                                                                        size: 16,
                                                                                        className:
                                                                                          "text-purple-400",
                                                                                      },
                                                                                    )
                                                                                  : o.includes(
                                                                                        "llamaindex",
                                                                                      )
                                                                                    ? c.jsx(
                                                                                        En,
                                                                                        {
                                                                                          size: 16,
                                                                                          className:
                                                                                            "text-amber-400",
                                                                                        },
                                                                                      )
                                                                                    : o.includes(
                                                                                          "openai",
                                                                                        )
                                                                                      ? c.jsx(
                                                                                          Ki,
                                                                                          {
                                                                                            size: 16,
                                                                                            className:
                                                                                              "text-purple-400",
                                                                                          },
                                                                                        )
                                                                                      : o.includes(
                                                                                            "gemini",
                                                                                          )
                                                                                        ? c.jsx(
                                                                                            Ki,
                                                                                            {
                                                                                              size: 16,
                                                                                              className:
                                                                                                "text-blue-400",
                                                                                            },
                                                                                          )
                                                                                        : o.includes(
                                                                                              "deepgram",
                                                                                            )
                                                                                          ? c.jsx(
                                                                                              Gd,
                                                                                              {
                                                                                                size: 16,
                                                                                                className:
                                                                                                  "text-green-400",
                                                                                              },
                                                                                            )
                                                                                          : o.includes(
                                                                                                "livekit",
                                                                                              )
                                                                                            ? c.jsx(
                                                                                                Tn,
                                                                                                {
                                                                                                  size: 16,
                                                                                                  className:
                                                                                                    "text-cyan-400",
                                                                                                },
                                                                                              )
                                                                                            : o.includes(
                                                                                                  "twilio",
                                                                                                )
                                                                                              ? c.jsx(
                                                                                                  Gd,
                                                                                                  {
                                                                                                    size: 16,
                                                                                                    className:
                                                                                                      "text-red-400",
                                                                                                  },
                                                                                                )
                                                                                              : o.includes(
                                                                                                    "pusher",
                                                                                                  )
                                                                                                ? c.jsx(
                                                                                                    Tn,
                                                                                                    {
                                                                                                      size: 16,
                                                                                                      className:
                                                                                                        "text-purple-400",
                                                                                                    },
                                                                                                  )
                                                                                                : o.includes(
                                                                                                      "git",
                                                                                                    )
                                                                                                  ? c.jsx(
                                                                                                      En,
                                                                                                      {
                                                                                                        size: 16,
                                                                                                        className:
                                                                                                          "text-orange-500",
                                                                                                      },
                                                                                                    )
                                                                                                  : o.includes(
                                                                                                        "api",
                                                                                                      ) ||
                                                                                                      o.includes(
                                                                                                        "rest",
                                                                                                      )
                                                                                                    ? c.jsx(
                                                                                                        D1,
                                                                                                        {
                                                                                                          size: 16,
                                                                                                          className:
                                                                                                            "text-rose-400",
                                                                                                        },
                                                                                                      )
                                                                                                    : o.includes(
                                                                                                          "jwt",
                                                                                                        ) ||
                                                                                                        o.includes(
                                                                                                          "auth",
                                                                                                        )
                                                                                                      ? c.jsx(
                                                                                                          x1,
                                                                                                          {
                                                                                                            size: 16,
                                                                                                            className:
                                                                                                              "text-amber-400",
                                                                                                          },
                                                                                                        )
                                                                                                      : o.includes(
                                                                                                            "sftp",
                                                                                                          )
                                                                                                        ? c.jsx(
                                                                                                            Mn,
                                                                                                            {
                                                                                                              size: 16,
                                                                                                              className:
                                                                                                                "text-slate-400",
                                                                                                            },
                                                                                                          )
                                                                                                        : c.jsx(
                                                                                                            l1,
                                                                                                            {
                                                                                                              size: 16,
                                                                                                              className:
                                                                                                                "text-slate-400",
                                                                                                            },
                                                                                                          );
  },
  G1 = () => {
    const { techBadges: h } = Fe,
      o = U.useRef(null),
      S = U.useRef(!1),
      [r, T] = U.useState(!1),
      [_, w] = U.useState("all"),
      D = Nh.useMemo(() => {
        const B = new Set(h.map(Qd));
        return ["all", ...Array.from(B)];
      }, [h]);
    U.useEffect(() => {
      const B = o.current;
      if (!B) return;
      const ue = new IntersectionObserver(
        ([I]) => {
          I.isIntersecting && !S.current && ((S.current = !0), T(!0));
        },
        { threshold: 0.15 },
      );
      return (ue.observe(B), () => ue.disconnect());
    }, []);
    const E = Math.ceil(h.length / 2),
      v = h.slice(0, E),
      O = h.slice(E),
      C = (B, ue) =>
        c.jsx("div", {
          className: `marquee-track ${ue} ${r ? "marquee-entered" : ""}`,
          children: [...B, ...B, ...B].map((I, P) => {
            const J = Qd(I),
              Q = _ !== "all" && J !== _;
            return c.jsxs(
              "div",
              {
                className: `marquee-item ${Q ? "marquee-dimmed" : ""} ${_ !== "all" && J === _ ? "marquee-highlighted" : ""}`,
                "data-cat": J,
                style: {
                  transitionDelay:
                    r && P < B.length ? `${(P % B.length) * 30}ms` : "0ms",
                },
                children: [
                  c.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      c.jsx("span", {
                        className: "icon-wrapper",
                        children: Y1(I),
                      }),
                      c.jsx("span", { className: "tech-name", children: I }),
                    ],
                  }),
                  c.jsx("div", { className: "glow-effect" }),
                ],
              },
              `${I}-${P}`,
            );
          }),
        });
    return c.jsxs("section", {
      ref: o,
      className: "marquee-section overflow-hidden",
      children: [
        c.jsx("div", { className: "marquee-spotlight-css" }),
        c.jsxs("div", {
          className: "max-w-6xl mx-auto px-6 pt-10 mb-4",
          children: [
            c.jsx("p", { className: "marquee-title", children: "Tech Stack" }),
            c.jsx("div", {
              className: "filter-bar",
              children: D.map((B) =>
                c.jsx(
                  "button",
                  {
                    className: `filter-pill ${_ === B ? "filter-pill-active" : ""}`,
                    "data-cat": B,
                    onClick: () => w(B),
                    style:
                      B !== "all"
                        ? { "--pill-color": k1[B] || "148,163,184" }
                        : {},
                    children: L1[B] || B,
                  },
                  B,
                ),
              ),
            }),
          ],
        }),
        c.jsxs("div", {
          className: "marquee-container",
          children: [C(v, "marquee-row-1"), C(O, "marquee-row-2")],
        }),
      ],
    });
  },
  Q1 = [
    { key: "languages", title: "Programming Languages", icon: "💻" },
    { key: "backend", title: "Backend Engineering", icon: "⚙️" },
    { key: "frontend", title: "Frontend", icon: "🎨" },
    { key: "databases", title: "Databases & Search", icon: "🗄️" },
    { key: "cloud", title: "Cloud & Infrastructure", icon: "☁️" },
    { key: "aiVoice", title: "AI, Voice & Real-Time", icon: "🤖" },
    { key: "realtime", title: "Real-Time & Messaging", icon: "📡" },
    { key: "scheduling", title: "Scheduling & Data", icon: "📅" },
  ];
function X1() {
  const { skills: h } = Fe,
    o = U.useRef(null),
    [S, r] = U.useState(!1);
  return (
    U.useEffect(() => {
      const T = o.current;
      if (!T) return;
      const _ = new IntersectionObserver(
        ([w]) => {
          w.isIntersecting && (r(!0), _.disconnect());
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
      );
      return (_.observe(T), () => _.disconnect());
    }, []),
    c.jsx("section", {
      id: "skills",
      className: "py-24 px-6 bg-transparent",
      children: c.jsxs("div", {
        className: "max-w-6xl mx-auto",
        children: [
          c.jsxs("h2", {
            className: "text-3xl md:text-4xl font-bold text-white mb-4",
            children: [
              "Skills & ",
              c.jsx("span", {
                className: "text-cyan-400",
                children: "Expertise",
              }),
            ],
          }),
          c.jsx("p", {
            className: "text-slate-400 mb-12 max-w-2xl text-lg leading-relaxed",
            children:
              "Expertise in crafting modular backend systems, real-time AI agents, and high-performance cloud architectures.",
          }),
          c.jsx("div", {
            ref: o,
            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
            children: Q1.map(({ key: T, title: _, icon: w }, D) =>
              c.jsxs(
                "div",
                {
                  className:
                    "p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/5",
                  style: {
                    opacity: S ? 1 : 0,
                    transform: S
                      ? "translateY(0) scale(1)"
                      : "translateY(24px) scale(0.95)",
                    transitionDelay: `${D * 80}ms`,
                    transitionProperty: "opacity, transform",
                    transitionDuration: "0.6s",
                    transitionTimingFunction:
                      "cubic-bezier(0.34, 1.56, 0.64, 1)",
                  },
                  children: [
                    c.jsxs("div", {
                      className: "flex items-center gap-2 mb-4",
                      children: [
                        c.jsx("span", { className: "text-2xl", children: w }),
                        c.jsx("h3", {
                          className: "text-lg font-semibold text-cyan-400",
                          children: _,
                        }),
                      ],
                    }),
                    c.jsx("div", {
                      className: "flex flex-wrap gap-2",
                      children: h[T]?.map((E, v) =>
                        c.jsx(
                          "span",
                          {
                            className:
                              "px-3 py-1 text-sm bg-slate-800 text-slate-300 rounded-full",
                            children: E,
                          },
                          v,
                        ),
                      ),
                    }),
                  ],
                },
                T,
              ),
            ),
          }),
        ],
      }),
    })
  );
}
function Wi({
  children: h,
  className: o = "",
  scaleOnHover: S = 1.05,
  rotateAmplitude: r = 12,
}) {
  const T = U.useRef(null),
    _ = U.useRef(null);
  return (
    U.useEffect(() => {
      const w = T.current,
        D = _.current;
      if (!w || !D) return;
      const E = (C) => {
          const B = w.getBoundingClientRect(),
            ue = C.clientX - B.left,
            I = C.clientY - B.top,
            P = B.width / 2,
            J = B.height / 2,
            Q = ((I - J) / J) * -r,
            K = ((ue - P) / P) * r;
          ((D.style.transform = `rotateX(${Q}deg) rotateY(${K}deg) scale(${S})`),
            (D.style.transition = "none"));
        },
        v = () => {
          D.style.transition = "none";
        },
        O = () => {
          ((D.style.transform = ""),
            (D.style.transition =
              "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)"));
        };
      return (
        w.addEventListener("mousemove", E),
        w.addEventListener("mouseenter", v),
        w.addEventListener("mouseleave", O),
        () => {
          (w.removeEventListener("mousemove", E),
            w.removeEventListener("mouseenter", v),
            w.removeEventListener("mouseleave", O));
        }
      );
    }, [S, r]),
    c.jsx("div", {
      ref: T,
      className: `tilted-card-container ${o}`,
      style: {
        perspective: "1000px",
        transformStyle: "preserve-3d",
        width: "100%",
        height: "100%",
      },
      children: c.jsx("div", {
        ref: _,
        style: {
          transition: "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
          transformStyle: "preserve-3d",
          width: "100%",
          height: "100%",
        },
        children: c.jsx("div", {
          style: {
            transform: "translateZ(20px)",
            transformStyle: "preserve-3d",
            height: "100%",
          },
          children: h,
        }),
      }),
    })
  );
}
function V1() {
  const { experience: h } = Fe,
    o = U.useRef(null),
    [S, r] = U.useState(0),
    [T, _] = U.useState(!1),
    w = U.useRef(null);
  return (
    U.useEffect(() => {
      const D = o.current;
      if (!D) return;
      const E = new IntersectionObserver(
        ([O]) => {
          O.isIntersecting && (_(!0), E.disconnect());
        },
        { threshold: 0.05 },
      );
      E.observe(D);
      const v = () => {
        w.current ||
          (w.current = requestAnimationFrame(() => {
            const O = D.getBoundingClientRect(),
              C = O.top,
              B = O.height,
              ue = window.innerHeight,
              I = ue,
              P = -B + ue * 0.5,
              J = (I - C) / (I - P);
            (r(Math.min(1, Math.max(0, J))), (w.current = null));
          }));
      };
      return (
        window.addEventListener("scroll", v, { passive: !0 }),
        v(),
        () => {
          (E.disconnect(),
            window.removeEventListener("scroll", v),
            w.current && cancelAnimationFrame(w.current));
        }
      );
    }, []),
    c.jsxs("section", {
      id: "experience",
      ref: o,
      className: "py-24 px-6 bg-transparent",
      children: [
        c.jsx("style", {
          children: `
        @keyframes timeline-glow {
          0%, 100% { box-shadow: 0 0 6px rgba(34,211,238,0.4); }
          50% { box-shadow: 0 0 14px rgba(34,211,238,0.7); }
        }
      `,
        }),
        c.jsxs("div", {
          className: "max-w-4xl mx-auto",
          children: [
            c.jsxs("h2", {
              className: "text-3xl md:text-4xl font-bold text-white mb-4",
              children: [
                "Professional ",
                c.jsx("span", {
                  className: "text-cyan-400",
                  children: "Experience",
                }),
              ],
            }),
            c.jsx("p", {
              className: "text-slate-400 mb-12",
              children: "Building enterprise systems and AI-powered platforms.",
            }),
            c.jsxs("div", {
              className: "relative space-y-12",
              children: [
                c.jsx("div", {
                  className:
                    "absolute left-[7px] top-0 w-0.5 bg-gradient-to-b from-cyan-400 to-cyan-500/30 origin-top transition-transform duration-100 ease-out",
                  style: { height: "100%", transform: `scaleY(${S})` },
                }),
                c.jsx("div", {
                  className:
                    "absolute left-[7px] top-0 w-0.5 h-full bg-slate-800/50",
                }),
                h.map((D, E) =>
                  c.jsx(
                    "div",
                    {
                      style: {
                        opacity: T ? 1 : 0,
                        transform: T ? "translateY(0)" : "translateY(30px)",
                        transitionDelay: `${E * 150}ms`,
                        transitionProperty: "opacity, transform",
                        transitionDuration: "0.6s",
                        transitionTimingFunction:
                          "cubic-bezier(0.34, 1.56, 0.64, 1)",
                      },
                      children: c.jsx(Wi, {
                        className: "mb-12",
                        children: c.jsxs("div", {
                          className:
                            "relative pl-8 border-l-2 border-cyan-500/50 hover:border-cyan-400 transition-colors bg-slate-900/40 p-6 rounded-xl border border-slate-800/50",
                          children: [
                            c.jsx("div", {
                              className:
                                "absolute -left-2 top-0 w-4 h-4 rounded-full bg-cyan-500",
                              style: {
                                animation:
                                  "timeline-glow 2s ease-in-out infinite",
                              },
                            }),
                            c.jsxs("div", {
                              className: "mb-2",
                              children: [
                                c.jsx("h3", {
                                  className: "text-xl font-semibold text-white",
                                  children: D.role,
                                }),
                                c.jsx("p", {
                                  className: "text-cyan-400 font-medium",
                                  children: D.company,
                                }),
                                D.location &&
                                  c.jsx("p", {
                                    className: "text-slate-500 text-sm",
                                    children: D.location,
                                  }),
                                c.jsx("p", {
                                  className: "text-slate-500 text-sm mt-1",
                                  children: D.period,
                                }),
                              ],
                            }),
                            c.jsx("ul", {
                              className: "space-y-2 mt-4",
                              children: D.responsibilities.map((v, O) =>
                                c.jsxs(
                                  "li",
                                  {
                                    className: "text-slate-400 flex gap-2",
                                    children: [
                                      c.jsx("span", {
                                        className: "text-cyan-500 shrink-0",
                                        children: "▹",
                                      }),
                                      v,
                                    ],
                                  },
                                  O,
                                ),
                              ),
                            }),
                          ],
                        }),
                      }),
                    },
                    E,
                  ),
                ),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
const Z1 = {
    "AI Voice Agent Platform": {
      icon: c.jsx(j1, { size: 18 }),
      gradient: "from-purple-500/20 via-fuchsia-500/10 to-transparent",
      accent: "168,85,247",
    },
    "AI Customer Support Agent": {
      icon: c.jsx(Jh, { size: 18 }),
      gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
      accent: "139,92,246",
    },
    "Healthcare Analytics Platform": {
      icon: c.jsx(Tn, { size: 18 }),
      gradient: "from-emerald-500/20 via-green-500/10 to-transparent",
      accent: "52,211,153",
    },
    "Hospital Management System": {
      icon: c.jsx(tl, { size: 18 }),
      gradient: "from-teal-500/20 via-cyan-500/10 to-transparent",
      accent: "20,184,166",
    },
    "Enterprise Invoicing Platform": {
      icon: c.jsx(f1, { size: 18 }),
      gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
      accent: "245,158,11",
    },
    "Managed File Transfer (MFT)": {
      icon: c.jsx(Mn, { size: 18 }),
      gradient: "from-sky-500/20 via-blue-500/10 to-transparent",
      accent: "56,189,248",
    },
    "Analytics Dashboard": {
      icon: c.jsx(Ph, { size: 18 }),
      gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
      accent: "34,211,238",
    },
    "MyTools Platform": {
      icon: c.jsx(B1, { size: 18 }),
      gradient: "from-cyan-500/20 via-teal-500/10 to-transparent",
      accent: "34,211,238",
    },
    "S3 File Explorer": {
      icon: c.jsx(v1, { size: 18 }),
      gradient: "from-yellow-500/20 via-amber-500/10 to-transparent",
      accent: "250,204,21",
    },
    "Modular Flask Backend Framework": {
      icon: c.jsx(Fh, { size: 18 }),
      gradient: "from-green-500/20 via-emerald-500/10 to-transparent",
      accent: "34,197,94",
    },
    SleepSlapper: {
      icon: c.jsx(Ji, { size: 18 }),
      gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
      accent: "244,63,94",
    },
    "Chat DOM Optimizer": {
      icon: c.jsx(A1, { size: 18 }),
      gradient: "from-indigo-500/20 via-violet-500/10 to-transparent",
      accent: "129,140,248",
    },
  },
  K1 = {
    icon: c.jsx(Mn, { size: 18 }),
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    accent: "34,211,238",
  },
  Xd = ({ project: h, tilt: o = !0, revealDelay: S = 0, revealed: r = !0 }) => {
    const T = Z1[h.name] || K1,
      _ = c.jsxs("div", {
        className:
          "rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/5 h-full flex flex-col overflow-hidden",
        style: {
          opacity: r ? 1 : 0,
          transform: r
            ? "translateY(0) scale(1)"
            : "translateY(20px) scale(0.97)",
          transitionDelay: `${S}ms`,
          transitionProperty: "opacity, transform, border-color, box-shadow",
          transitionDuration: "0.55s",
          transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        },
        children: [
          c.jsx("div", {
            className: `h-1 w-full bg-gradient-to-r ${T.gradient}`,
          }),
          c.jsxs("div", {
            className: "p-6 flex flex-col flex-grow",
            children: [
              c.jsxs("div", {
                className: "flex justify-between items-start mb-2",
                children: [
                  c.jsxs("div", {
                    className: "flex items-center gap-2.5",
                    children: [
                      c.jsx("span", {
                        className:
                          "flex items-center justify-center w-8 h-8 rounded-lg transition-colors duration-300",
                        style: {
                          backgroundColor: `rgba(${T.accent}, 0.1)`,
                          color: `rgb(${T.accent})`,
                        },
                        children: T.icon,
                      }),
                      c.jsx("h3", {
                        className: "text-xl font-semibold text-white",
                        children: h.name,
                      }),
                    ],
                  }),
                  h.url &&
                    c.jsxs("a", {
                      href: h.url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "relative z-50 text-cyan-400 hover:text-cyan-300 transition-all p-2 -m-2 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-500/50 flex items-center gap-1.5 group/link",
                      title: "Launch Tool",
                      onClick: (w) => {
                        w.stopPropagation();
                      },
                      children: [
                        c.jsx("span", {
                          className:
                            "text-[10px] uppercase tracking-wider font-bold",
                          children: "Visit",
                        }),
                        c.jsx("svg", {
                          className:
                            "w-5 h-5 group-hover/link:scale-110 transition-transform",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: c.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14",
                          }),
                        }),
                      ],
                    }),
                ],
              }),
              h.inProgress &&
                c.jsx("div", {
                  className: "mb-3",
                  children: c.jsx("span", {
                    className:
                      "px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-500 border border-amber-500/30 rounded-full animate-pulse",
                    children: "In Progress",
                  }),
                }),
              c.jsx("p", {
                className: "text-slate-400 text-sm mb-4",
                children: h.description,
              }),
              c.jsx("ul", {
                className: "space-y-1 mb-4 flex-grow",
                children: h.contributions
                  .slice(0, 3)
                  .map((w, D) =>
                    c.jsxs(
                      "li",
                      {
                        className: "text-slate-500 text-sm flex gap-2",
                        children: [
                          c.jsx("span", {
                            className: "text-cyan-500 shrink-0",
                            children: "•",
                          }),
                          w,
                        ],
                      },
                      D,
                    ),
                  ),
              }),
              c.jsx("div", {
                className: "flex flex-wrap gap-2",
                children: h.stack.map((w, D) =>
                  c.jsx(
                    "span",
                    {
                      className:
                        "px-2 py-0.5 text-xs bg-cyan-500/20 text-cyan-400 rounded",
                      children: w,
                    },
                    D,
                  ),
                ),
              }),
            ],
          }),
        ],
      });
    return o ? c.jsx(Wi, { children: _ }) : _;
  };
function J1() {
  const { projects: h } = Fe,
    [o, S] = U.useState("all"),
    r = U.useRef(null),
    [T, _] = U.useState(!1),
    w = U.useMemo(() => {
      const v = new Set();
      return (
        h.forEach((O) => O.stack.forEach((C) => v.add(C))),
        Array.from(v).sort()
      );
    }, [h]),
    D = U.useMemo(() => {
      const v = h.filter((O) => O.type === "professional");
      return o === "all" ? v : v.filter((O) => O.stack.includes(o));
    }, [h, o]),
    E = U.useMemo(() => {
      const v = h.filter((O) => O.type === "personal");
      return o === "all" ? v : v.filter((O) => O.stack.includes(o));
    }, [h, o]);
  return (
    U.useEffect(() => {
      const v = r.current;
      if (!v) return;
      const O = new IntersectionObserver(
        ([C]) => {
          C.isIntersecting && (_(!0), O.disconnect());
        },
        { threshold: 0.05, rootMargin: "0px 0px -30px 0px" },
      );
      return (O.observe(v), () => O.disconnect());
    }, []),
    c.jsx("section", {
      id: "projects",
      className: "py-24 px-6 bg-transparent",
      children: c.jsx("div", {
        className: "max-w-6xl mx-auto",
        children: c.jsxs(yt, {
          children: [
            c.jsxs("h2", {
              className: "text-3xl md:text-4xl font-bold text-white mb-4",
              children: [
                "Featured ",
                c.jsx("span", {
                  className: "text-cyan-400",
                  children: "Projects",
                }),
              ],
            }),
            c.jsx("p", {
              className: "text-slate-400 mb-4 max-w-2xl",
              children:
                "End-to-end ownership from database design to deployment - healthcare, AI voice, invoicing, and more.",
            }),
            c.jsx("p", {
              className: "text-slate-500 text-sm mb-6 italic",
              children:
                "Professional work reflects my contributions; descriptions are simplified for portfolio purposes.",
            }),
            c.jsxs("div", {
              className: "mb-8",
              children: [
                c.jsx("p", {
                  className: "text-slate-400 text-sm mb-2",
                  children: "Filter by tech:",
                }),
                c.jsxs("div", {
                  className: "flex flex-wrap gap-2",
                  children: [
                    c.jsx("button", {
                      onClick: () => S("all"),
                      className: `px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${o === "all" ? "bg-cyan-500 text-slate-900" : "bg-slate-800 text-slate-300 hover:bg-slate-700"}`,
                      children: "All",
                    }),
                    w.map((v) =>
                      c.jsx(
                        "button",
                        {
                          onClick: () => S(v),
                          className: `px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${o === v ? "bg-cyan-500 text-slate-900" : "bg-slate-800 text-slate-300 hover:bg-slate-700"}`,
                          children: v,
                        },
                        v,
                      ),
                    ),
                  ],
                }),
              ],
            }),
            c.jsxs("div", {
              ref: r,
              children: [
                c.jsxs("div", {
                  className: "mb-16",
                  children: [
                    c.jsxs("h3", {
                      className:
                        "text-lg font-semibold text-cyan-400 mb-6 flex items-center gap-2",
                      children: [
                        c.jsx("span", { children: "💼" }),
                        " Professional Work",
                      ],
                    }),
                    c.jsx("div", {
                      className: "grid md:grid-cols-2 gap-6",
                      children:
                        D.length > 0
                          ? D.map((v, O) =>
                              c.jsx(
                                Xd,
                                {
                                  project: v,
                                  revealed: T,
                                  revealDelay: O * 100,
                                },
                                O,
                              ),
                            )
                          : c.jsx("p", {
                              className: "text-slate-500 col-span-2",
                              children: "No projects match this filter.",
                            }),
                    }),
                  ],
                }),
                c.jsxs("div", {
                  children: [
                    c.jsxs("h3", {
                      className:
                        "text-lg font-semibold text-cyan-400 mb-6 flex items-center gap-2",
                      children: [
                        c.jsx("span", { children: "🛠️" }),
                        " Personal & Side Projects",
                      ],
                    }),
                    c.jsx("div", {
                      className: "grid md:grid-cols-2 gap-6",
                      children:
                        E.length > 0
                          ? E.map((v, O) =>
                              c.jsx(
                                Xd,
                                {
                                  project: v,
                                  tilt: !1,
                                  revealed: T,
                                  revealDelay: (D.length + O) * 100,
                                },
                                O,
                              ),
                            )
                          : c.jsx("p", {
                              className: "text-slate-500 col-span-2",
                              children: "No projects match this filter.",
                            }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    })
  );
}
function W1() {
  return null;
}
function $1() {
  return null;
}
function F1() {
  const { education: h } = Fe;
  return c.jsx("section", {
    id: "education",
    className: "py-24 px-6 bg-transparent",
    children: c.jsxs("div", {
      className: "max-w-4xl mx-auto",
      children: [
        c.jsx("h2", {
          className: "text-3xl md:text-4xl font-bold text-white mb-4",
          children: c.jsx("span", {
            className: "text-cyan-400",
            children: "Education",
          }),
        }),
        c.jsx(Wi, {
          children: c.jsxs("div", {
            className: "p-6 rounded-xl bg-slate-800/50 border border-slate-700",
            children: [
              c.jsx("h3", {
                className: "text-xl font-semibold text-white",
                children: h.degree,
              }),
              c.jsx("p", {
                className: "text-cyan-400 mt-1",
                children: h.institution,
              }),
              c.jsx("p", {
                className: "text-slate-400 mt-1",
                children: h.university,
              }),
              c.jsxs("p", {
                className: "text-slate-500 text-sm mt-2",
                children: ["Year of Completion: ", h.year],
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
const Ss = {
    aws: c.jsxs("svg", {
      viewBox: "0 0 48 48",
      className: "w-7 h-7",
      fill: "none",
      children: [
        c.jsx("path", {
          d: "M13.5 21.13l-1.97 6.54h3.94l-1.97-6.54zm7.37-1.63l-1.53 5.03h3.05l-1.52-5.03z",
          fill: "#FF9900",
        }),
        c.jsx("path", {
          d: "M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4z",
          fill: "none",
          stroke: "#FF9900",
          strokeWidth: "2",
        }),
        c.jsx("text", {
          x: "24",
          y: "30",
          textAnchor: "middle",
          fill: "#FF9900",
          fontSize: "14",
          fontWeight: "700",
          fontFamily: "sans-serif",
          children: "AWS",
        }),
      ],
    }),
    azure: c.jsxs("svg", {
      viewBox: "0 0 48 48",
      className: "w-7 h-7",
      fill: "none",
      children: [
        c.jsx("path", {
          d: "M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4z",
          fill: "none",
          stroke: "#0078D4",
          strokeWidth: "2",
        }),
        c.jsx("path", {
          d: "M18 14l-6 18h6l3-9 3 9h6l-6-18",
          fill: "#0078D4",
          opacity: "0.2",
        }),
        c.jsx("text", {
          x: "24",
          y: "30",
          textAnchor: "middle",
          fill: "#0078D4",
          fontSize: "9",
          fontWeight: "700",
          fontFamily: "sans-serif",
          children: "Azure",
        }),
      ],
    }),
    java: c.jsxs("svg", {
      viewBox: "0 0 48 48",
      className: "w-7 h-7",
      fill: "none",
      children: [
        c.jsx("path", {
          d: "M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4z",
          fill: "none",
          stroke: "#E76F00",
          strokeWidth: "2",
        }),
        c.jsx("text", {
          x: "24",
          y: "30",
          textAnchor: "middle",
          fill: "#E76F00",
          fontSize: "11",
          fontWeight: "700",
          fontFamily: "serif",
          fontStyle: "italic",
          children: "Java",
        }),
      ],
    }),
  },
  Vd = (h) => {
    const o = h.toLowerCase();
    return o.includes("aws")
      ? Ss.aws
      : o.includes("azure") || o.includes("microsoft")
        ? Ss.azure
        : o.includes("java") || o.includes("capgemini")
          ? Ss.java
          : c.jsx("span", { className: "text-xl", children: "🏆" });
  },
  I1 = (h) => {
    const o = h.toLowerCase();
    return o.includes("aws")
      ? {
          border: "rgba(255,153,0,0.3)",
          bg: "rgba(255,153,0,0.08)",
          glow: "rgba(255,153,0,0.15)",
        }
      : o.includes("azure") || o.includes("microsoft")
        ? {
            border: "rgba(0,120,212,0.3)",
            bg: "rgba(0,120,212,0.08)",
            glow: "rgba(0,120,212,0.15)",
          }
        : o.includes("java") || o.includes("capgemini")
          ? {
              border: "rgba(231,111,0,0.3)",
              bg: "rgba(231,111,0,0.08)",
              glow: "rgba(231,111,0,0.15)",
            }
          : {
              border: "rgba(34,211,238,0.3)",
              bg: "rgba(34,211,238,0.06)",
              glow: "rgba(34,211,238,0.1)",
            };
  };
function P1() {
  const { certifications: h } = Fe;
  return c.jsx("section", {
    id: "certifications",
    className: "py-24 px-6 bg-slate-950",
    children: c.jsxs("div", {
      className: "max-w-4xl mx-auto",
      children: [
        c.jsx("h2", {
          className: "text-3xl md:text-4xl font-bold text-white mb-2",
          children: c.jsx("span", {
            className: "text-cyan-400",
            children: "Certifications",
          }),
        }),
        c.jsx("p", {
          className: "text-slate-400 mb-12",
          children:
            "Industry-recognized credentials in cloud and software development.",
        }),
        c.jsx("div", {
          className: "grid sm:grid-cols-1 md:grid-cols-2 gap-4",
          children: h.map((o, S) => {
            const r = typeof o == "string" ? o : o.name,
              T = typeof o == "object" ? o.url : null,
              _ = !!T,
              w = I1(r);
            return c.jsx(
              "div",
              {
                className: `group rounded-xl border overflow-hidden transition-all duration-300 ${_ ? "bg-gradient-to-br from-slate-900/80 to-slate-900/40 border-slate-700 hover:shadow-lg" : "bg-slate-900/50 border-slate-800"}`,
                style: _
                  ? {
                      "--cert-border": w.border,
                      "--cert-bg": w.bg,
                      "--cert-glow": w.glow,
                    }
                  : {},
                onMouseEnter: (D) => {
                  _ &&
                    ((D.currentTarget.style.borderColor = w.border),
                    (D.currentTarget.style.boxShadow = `0 8px 24px ${w.glow}`));
                },
                onMouseLeave: (D) => {
                  _ &&
                    ((D.currentTarget.style.borderColor = ""),
                    (D.currentTarget.style.boxShadow = ""));
                },
                children: _
                  ? c.jsxs("a", {
                      href: T,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "flex items-start gap-4 p-5 block h-full",
                      children: [
                        c.jsx("div", {
                          className:
                            "shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110",
                          style: { backgroundColor: w.bg },
                          children: Vd(r),
                        }),
                        c.jsxs("div", {
                          className: "min-w-0 flex-1",
                          children: [
                            c.jsx("p", {
                              className:
                                "text-slate-200 font-medium leading-snug group-hover:text-white transition-colors",
                              children: r,
                            }),
                            c.jsxs("p", {
                              className:
                                "text-cyan-400/80 text-sm mt-1 flex items-center gap-1",
                              children: [
                                "Verify credential",
                                c.jsx("span", {
                                  className:
                                    "text-cyan-400 group-hover:translate-x-0.5 translate-x-0 inline-block transition-transform",
                                  children: "→",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    })
                  : c.jsxs("div", {
                      className: "flex items-start gap-4 p-5",
                      children: [
                        c.jsx("div", {
                          className:
                            "shrink-0 w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400",
                          children: Vd(r),
                        }),
                        c.jsx("p", {
                          className:
                            "text-slate-300 font-medium leading-snug pt-1",
                          children: r,
                        }),
                      ],
                    }),
              },
              S,
            );
          }),
        }),
      ],
    }),
  });
}
function e2() {
  const { blog: h } = Fe;
  return c.jsx("section", {
    id: "blog",
    className: "py-24 px-6 bg-slate-950",
    children: c.jsxs("div", {
      className: "max-w-4xl mx-auto",
      children: [
        c.jsxs("h2", {
          className: "text-3xl md:text-4xl font-bold text-white mb-4",
          children: [
            c.jsx("span", { className: "text-cyan-400", children: "Blog" }),
            " & Articles",
          ],
        }),
        c.jsx("p", {
          className: "text-slate-400 mb-12",
          children: "Technical writing and knowledge sharing.",
        }),
        c.jsx("div", {
          className: "space-y-4",
          children: h.map((o, S) =>
            c.jsxs(
              "a",
              {
                href: o.url,
                target: o.url?.startsWith("http") ? "_blank" : void 0,
                rel: o.url?.startsWith("http") ? "noopener noreferrer" : void 0,
                className:
                  "block p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-colors group",
                children: [
                  c.jsx("h3", {
                    className:
                      "text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors",
                    children: o.title,
                  }),
                  c.jsx("p", {
                    className: "text-slate-500 text-sm mt-1",
                    children: o.excerpt,
                  }),
                  c.jsx("span", {
                    className: "text-cyan-500 text-xs mt-2 inline-block",
                    children: o.date,
                  }),
                ],
              },
              S,
            ),
          ),
        }),
        c.jsxs("a", {
          href: Fe.contact.medium,
          target: "_blank",
          rel: "noopener noreferrer",
          className:
            "mt-6 inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium",
          children: [
            c.jsx("span", { children: "Read more on Medium" }),
            c.jsx("span", { children: "→" }),
          ],
        }),
      ],
    }),
  });
}
function t2() {
  const { openSource: h } = Fe;
  return c.jsx("section", {
    id: "opensource",
    className: "py-24 px-6 bg-transparent",
    children: c.jsxs("div", {
      className: "max-w-4xl mx-auto",
      children: [
        c.jsxs("h2", {
          className: "text-3xl md:text-4xl font-bold text-white mb-4",
          children: [
            "Open ",
            c.jsx("span", { className: "text-cyan-400", children: "Source" }),
          ],
        }),
        c.jsx("p", {
          className: "text-slate-400 mb-12",
          children: "Projects and contributions on GitHub.",
        }),
        c.jsx("div", {
          className: "space-y-4",
          children: h.map((o, S) =>
            c.jsxs(
              "a",
              {
                href: o.url,
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "flex items-center justify-between p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-colors group",
                children: [
                  c.jsxs("div", {
                    children: [
                      c.jsx("h3", {
                        className:
                          "text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors",
                        children: o.name,
                      }),
                      c.jsx("p", {
                        className: "text-slate-500 text-sm mt-1",
                        children: o.description,
                      }),
                    ],
                  }),
                  c.jsx("span", {
                    className: "text-cyan-500 shrink-0",
                    children: "→",
                  }),
                ],
              },
              S,
            ),
          ),
        }),
      ],
    }),
  });
}
function l2() {
  const { awards: h } = Fe;
  return c.jsx("section", {
    id: "awards",
    className: "py-24 px-6 bg-transparent",
    children: c.jsxs("div", {
      className: "max-w-4xl mx-auto",
      children: [
        c.jsxs("h2", {
          className: "text-3xl md:text-4xl font-bold text-white mb-4",
          children: [
            c.jsx("span", { className: "text-cyan-400", children: "Awards" }),
            " & Recognition",
          ],
        }),
        c.jsx("div", {
          className: "flex flex-wrap gap-4",
          children: h.map((o, S) =>
            c.jsx(
              Wi,
              {
                children: c.jsxs("div", {
                  className:
                    "flex items-center gap-3 px-6 py-4 rounded-xl bg-slate-800/50 border border-slate-700",
                  children: [
                    c.jsx("span", { className: "text-2xl", children: "🏆" }),
                    c.jsxs("div", {
                      children: [
                        c.jsx("span", {
                          className: "text-white font-medium",
                          children: o.title,
                        }),
                        c.jsxs("span", {
                          className: "text-slate-500 text-sm ml-2",
                          children: ["- ", o.org, " (", o.year, ")"],
                        }),
                      ],
                    }),
                  ],
                }),
              },
              S,
            ),
          ),
        }),
      ],
    }),
  });
}
function a2() {
  const { contact: h } = Fe,
    [o, S] = U.useState(!1),
    [r, T] = U.useState("idle"),
    _ = async (D) => {
      D.preventDefault();
      try {
        (await navigator.clipboard.writeText(h.email),
          S(!0),
          setTimeout(() => S(!1), 2e3));
      } catch {}
    },
    w = async (D) => {
      (D.preventDefault(), T("sending"));
      const E = new FormData(D.target),
        v = Object.fromEntries(E.entries());
      try {
        (
          await fetch(`https://formspree.io/f/${h.formspreeId}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              ...v,
              subject: `Portfolio message from ${v.name}`,
            }),
          })
        ).ok
          ? (T("success"), D.target.reset())
          : T("error");
      } catch {
        T("error");
      }
    };
  return c.jsx("section", {
    id: "contact",
    className: "pt-12 pb-24 px-6 bg-transparent relative overflow-hidden",
    children: c.jsxs("div", {
      className: "max-w-4xl mx-auto",
      children: [
        c.jsxs("div", {
          className: "mb-8",
          children: [
            c.jsxs("h2", {
              className: "text-3xl md:text-5xl font-bold text-white mb-6",
              children: [
                "Get in ",
                c.jsx("span", {
                  className: "text-cyan-400",
                  children: "Touch",
                }),
              ],
            }),
            c.jsx("p", {
              className: "text-lg text-slate-400 max-w-4xl leading-relaxed",
              children:
                "Let's build something remarkable together! I'm passionate about backend magic, AI adventures, and architecting solutions in the cloud. Whether you want to brainstorm, collaborate, or just chat tech, drop me a message and let's make it happen!",
            }),
          ],
        }),
        c.jsxs("div", {
          className: "grid lg:grid-cols-2 gap-6 items-stretch",
          children: [
            c.jsx("div", {
              children: c.jsxs("div", {
                className:
                  "p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 h-full flex flex-col shadow-lg shadow-black/5",
                children: [
                  c.jsx("h3", {
                    className:
                      "text-sm font-mono text-cyan-400 uppercase tracking-widest mb-6",
                    children: "Connect",
                  }),
                  c.jsxs("div", {
                    className: "flex flex-col gap-4 flex-1",
                    children: [
                      c.jsxs("div", {
                        className: "relative",
                        children: [
                          c.jsxs("button", {
                            onClick: _,
                            className:
                              "group flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300 w-full text-left",
                            children: [
                              c.jsx("div", {
                                className:
                                  "w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-900 transition-colors",
                                children: c.jsx("svg", {
                                  className: "w-6 h-6",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  children: c.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                                  }),
                                }),
                              }),
                              c.jsxs("div", {
                                className: "text-left",
                                children: [
                                  c.jsx("p", {
                                    className:
                                      "text-xs text-slate-500 font-medium",
                                    children: "Email Me At",
                                  }),
                                  c.jsx("p", {
                                    className: "text-white font-semibold",
                                    children: h.email,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          o &&
                            c.jsx("div", {
                              className:
                                "absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-900 text-sm font-medium shadow-lg animate-in fade-in slide-in-from-top-1 duration-300 w-fit",
                              children: "Email copied!",
                            }),
                        ],
                      }),
                      c.jsxs("div", {
                        className: "flex gap-4",
                        children: [
                          c.jsxs("a", {
                            href: h.linkedin,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-all duration-300",
                            children: [
                              c.jsx("svg", {
                                className: "w-5 h-5",
                                fill: "currentColor",
                                viewBox: "0 0 24 24",
                                children: c.jsx("path", {
                                  d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                                }),
                              }),
                              "LinkedIn",
                            ],
                          }),
                          c.jsxs("a", {
                            href: h.github,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-all duration-300",
                            children: [
                              c.jsx("svg", {
                                className: "w-5 h-5",
                                fill: "currentColor",
                                viewBox: "0 0 24 24",
                                children: c.jsx("path", {
                                  d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                                }),
                              }),
                              "GitHub",
                            ],
                          }),
                        ],
                      }),
                      c.jsxs("a", {
                        href: h.calendly,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "flex items-center justify-center gap-2 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-all duration-300 font-semibold",
                        children: [
                          c.jsx("svg", {
                            className: "w-5 h-5",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: c.jsx("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                              d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
                            }),
                          }),
                          "Schedule a Meeting",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            c.jsx("div", {
              children: c.jsxs("div", {
                className:
                  "p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 h-full flex flex-col shadow-lg shadow-black/5",
                children: [
                  c.jsx("h3", {
                    className:
                      "text-sm font-mono text-cyan-400 uppercase tracking-widest mb-6",
                    children: "Send a Message",
                  }),
                  r === "success"
                    ? c.jsxs("div", {
                        className:
                          "flex-1 min-h-0 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500 py-2",
                        children: [
                          c.jsx("div", {
                            className:
                              "w-14 h-14 rounded-full bg-slate-900 border-4 border-amber-500/30 flex items-center justify-center mb-4 shadow-lg shadow-amber-500/20 shrink-0",
                            children: c.jsx("svg", {
                              className: "w-7 h-7 text-amber-500",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: c.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 3,
                                d: "M5 13l4 4L19 7",
                              }),
                            }),
                          }),
                          c.jsx("h3", {
                            className: "text-xl font-bold text-white mb-2",
                            children: "Message Received!",
                          }),
                          c.jsx("p", {
                            className:
                              "text-slate-400 max-w-sm mb-4 text-sm leading-relaxed",
                            children:
                              "Thank you for reaching out. I'll get back to you as soon as possible, usually within one business day.",
                          }),
                          c.jsx("button", {
                            onClick: () => T("idle"),
                            className:
                              "px-6 py-2.5 bg-slate-700 hover:bg-slate-600 text-amber-500 font-bold rounded-xl border border-slate-600 transition-all duration-300 shadow-xl text-sm",
                            children: "Send Another Message",
                          }),
                        ],
                      })
                    : c.jsxs("form", {
                        onSubmit: w,
                        className: "flex-1 flex flex-col justify-between",
                        children: [
                          c.jsxs("div", {
                            className: "space-y-4",
                            children: [
                              c.jsxs("div", {
                                className: "grid md:grid-cols-2 gap-4",
                                children: [
                                  c.jsxs("div", {
                                    className: "space-y-2",
                                    children: [
                                      c.jsx("label", {
                                        htmlFor: "name",
                                        className:
                                          "text-base font-medium text-slate-400 ml-1",
                                        children: "Name",
                                      }),
                                      c.jsx("input", {
                                        id: "name",
                                        type: "text",
                                        name: "name",
                                        placeholder: "John Doe",
                                        required: !0,
                                        className:
                                          "w-full px-4 py-2.5 rounded-xl bg-slate-900/50 border border-white/10 text-white text-base placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-all",
                                      }),
                                    ],
                                  }),
                                  c.jsxs("div", {
                                    className: "space-y-2",
                                    children: [
                                      c.jsx("label", {
                                        htmlFor: "email",
                                        className:
                                          "text-base font-medium text-slate-400 ml-1",
                                        children: "Email",
                                      }),
                                      c.jsx("input", {
                                        id: "email",
                                        type: "email",
                                        name: "email",
                                        placeholder: "john@example.com",
                                        required: !0,
                                        className:
                                          "w-full px-4 py-2.5 rounded-xl bg-slate-900/50 border border-white/10 text-white text-base placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-all",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                  c.jsx("label", {
                                    htmlFor: "message",
                                    className:
                                      "text-base font-medium text-slate-400 ml-1",
                                    children: "Message",
                                  }),
                                  c.jsx("textarea", {
                                    id: "message",
                                    name: "message",
                                    placeholder:
                                      "Tell me about your project/ideas/challenges...",
                                    rows: 2,
                                    required: !0,
                                    className:
                                      "w-full px-4 py-2.5 rounded-xl bg-slate-900/50 border border-white/10 text-white text-base placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-all resize-none",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          c.jsx("button", {
                            type: "submit",
                            disabled: r === "sending",
                            className:
                              "w-full group relative flex items-center justify-center gap-2 px-6 py-3.5 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-900 font-bold rounded-xl transition-all duration-300 overflow-hidden shadow-lg shadow-cyan-500/20 text-base",
                            children: c.jsx("span", {
                              className:
                                "relative z-10 flex items-center gap-2",
                              children:
                                r === "sending"
                                  ? c.jsxs(c.Fragment, {
                                      children: [
                                        c.jsxs("svg", {
                                          className: "animate-spin h-4 w-4",
                                          viewBox: "0 0 24 24",
                                          children: [
                                            c.jsx("circle", {
                                              className: "opacity-25",
                                              cx: "12",
                                              cy: "12",
                                              r: "10",
                                              stroke: "currentColor",
                                              strokeWidth: "4",
                                              fill: "none",
                                            }),
                                            c.jsx("path", {
                                              className: "opacity-75",
                                              fill: "currentColor",
                                              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                            }),
                                          ],
                                        }),
                                        "Sending...",
                                      ],
                                    })
                                  : c.jsxs(c.Fragment, {
                                      children: [
                                        "Send Message",
                                        c.jsx("svg", {
                                          className:
                                            "w-4 h-4 group-hover:translate-x-1 transition-transform",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          children: c.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M14 5l7 7m0 0l-7 7m7-7H3",
                                          }),
                                        }),
                                      ],
                                    }),
                            }),
                          }),
                          r === "error" &&
                            c.jsxs("div", {
                              className:
                                "p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-center gap-3 mt-4",
                              children: [
                                c.jsx("svg", {
                                  className: "w-5 h-5 shrink-0",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  children: c.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                                  }),
                                }),
                                "Error! Please email me at ",
                                h.email,
                                ".",
                              ],
                            }),
                        ],
                      }),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function n2() {
  const { fullName: h, quotes: o } = Fe,
    [S, r] = U.useState(null);
  return (
    U.useEffect(() => {
      if (o && o.length > 0) {
        const T = Math.floor(Math.random() * o.length);
        r(o[T]);
      }
    }, []),
    c.jsx("footer", {
      className:
        "relative z-10 py-10 px-6 border-t border-slate-700 bg-slate-900/90 backdrop-blur-sm",
      children: c.jsxs("div", {
        className: "max-w-6xl mx-auto",
        children: [
          S &&
            c.jsx("div", {
              className: "mb-8 text-center",
              children: c.jsxs("p", {
                className:
                  "text-slate-300 italic text-sm md:text-base max-w-2xl mx-auto",
                children: ['"', S.text, '"'],
              }),
            }),
          c.jsxs("div", {
            className:
              "flex flex-col md:flex-row items-center justify-between gap-4",
            children: [
              c.jsxs("p", {
                className: "text-slate-400 text-sm",
                children: [
                  "© ",
                  new Date().getFullYear(),
                  " ",
                  h,
                  ". Built with React & Tailwind.",
                ],
              }),
              c.jsx("div", {
                className: "flex gap-6",
                children: c.jsx("a", {
                  href: "#hero",
                  className:
                    "text-slate-400 hover:text-cyan-400 text-sm transition-colors",
                  children: "Back to top",
                }),
              }),
            ],
          }),
        ],
      }),
    })
  );
}
const i2 = ({
    starCount: h = 300,
    baseSpeed: o = 0.05,
    warpSpeed: S = 0.8,
    starColor: r = "#ffffff",
    className: T = "",
  }) => {
    const _ = U.useRef(null),
      w = U.useRef(o),
      D = U.useRef([]);
    return (
      U.useEffect(() => {
        const E = _.current,
          v = E.getContext("2d");
        let O;
        const C = () => {
            ((E.width = window.innerWidth),
              (E.height = window.innerHeight),
              B());
          },
          B = () => {
            D.current = [];
            for (let P = 0; P < h; P++)
              D.current.push({
                x: Math.random() * E.width - E.width / 2,
                y: Math.random() * E.height - E.height / 2,
                z: Math.random() * E.width,
                pz: 0,
              });
          },
          ue = () => {
            ((v.fillStyle = "rgba(0, 0, 0, 0.15)"),
              v.fillRect(0, 0, E.width, E.height));
            const P = E.width / 2,
              J = E.height / 2;
            ((v.strokeStyle = r),
              (v.lineWidth = 1),
              D.current.forEach((Q) => {
                const K = Q.x / (Q.z / E.width),
                  re = Q.y / (Q.z / E.width);
                if (Q.pz !== 0) {
                  const ye = P + K,
                    Ee = J + re,
                    qe = P + Q.x / (Q.pz / E.width),
                    V = J + Q.y / (Q.pz / E.width);
                  ye >= 0 &&
                    ye <= E.width &&
                    Ee >= 0 &&
                    Ee <= E.height &&
                    (v.beginPath(),
                    v.moveTo(qe, V),
                    v.lineTo(ye, Ee),
                    v.stroke());
                }
                ((Q.pz = Q.z),
                  (Q.z -= w.current * 10),
                  Q.z < 1 && ((Q.z = E.width), (Q.pz = 0)));
              }),
              (w.current += (o - w.current) * 0.05),
              (O = requestAnimationFrame(ue)));
          },
          I = () => {
            w.current = S;
          };
        return (
          window.addEventListener("resize", C),
          window.addEventListener("mousedown", I),
          window.addEventListener("touchstart", I, { passive: !0 }),
          window.addEventListener("scroll", I, { passive: !0 }),
          C(),
          ue(),
          () => {
            (window.removeEventListener("resize", C),
              window.removeEventListener("mousedown", I),
              window.removeEventListener("touchstart", I),
              window.removeEventListener("scroll", I),
              cancelAnimationFrame(O));
          }
        );
      }, [h, o, S, r]),
      c.jsx("canvas", {
        ref: _,
        className: `hyperspeed-canvas ${T}`,
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
          background: "black",
        },
      })
    );
  },
  Zd = 30,
  Kd = 40,
  u2 = ({ type: h = "constellation" }) => {
    const [o, S] = U.useState(!1),
      r = U.useRef(null),
      T = U.useRef(null),
      _ = U.useRef(null),
      w = U.useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 }),
      D = U.useRef({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        vx: 0,
        vy: 0,
      }),
      E = U.useRef([]),
      v = U.useRef([]),
      O = U.useRef(0),
      C = U.useRef(!1),
      B = U.useRef(null);
    return (
      U.useEffect(() => {
        ((E.current = []), (v.current = []), (O.current = 0));
      }, [h]),
      U.useEffect(() => {
        const ue = (K) => {
            const { clientX: re, clientY: ye } = K;
            if (
              ((w.current = { x: re, y: ye }),
              O.current === 0 && ((D.current.x = re), (D.current.y = ye)),
              r.current)
            ) {
              const Ee =
                h === "pen" ? "translate(-50%, 0)" : "translate(-50%, -50%)";
              r.current.style.transform = `translate3d(${re}px, ${ye}px, 0) ${Ee}`;
            }
            ((C.current = !0),
              clearTimeout(B.current),
              (B.current = setTimeout(() => {
                C.current = !1;
              }, 100)));
          },
          I = (K) => {
            K.target.closest(
              'a, button, [role="button"], .tilted-card-container',
            )
              ? S(!0)
              : S(!1);
          },
          P = () => {
            _.current &&
              ((_.current.width = window.innerWidth),
              (_.current.height = window.innerHeight));
          };
        let J;
        const Q = () => {
          const K = _.current?.getContext("2d");
          O.current++;
          const re = o ? 0.3 : 0.15,
            ye = 0.8,
            Ee = w.current.x - D.current.x,
            qe = w.current.y - D.current.y;
          if (
            ((D.current.vx = (D.current.vx + Ee * re) * ye),
            (D.current.vy = (D.current.vy + qe * re) * ye),
            (D.current.x += D.current.vx),
            (D.current.y += D.current.vy),
            T.current &&
              (T.current.style.transform = `translate3d(${D.current.x}px, ${D.current.y}px, 0) translate(-50%, -50%)`),
            K)
          ) {
            if (
              (K.clearRect(0, 0, _.current.width, _.current.height),
              h === "particles")
            ) {
              if (C.current)
                for (let V = 0; V < 2; V++)
                  E.current.push({
                    x: w.current.x,
                    y: w.current.y,
                    size: Math.random() * 5 + 2,
                    v: {
                      x: (Math.random() - 0.5) * 4,
                      y: (Math.random() - 0.5) * 4,
                    },
                    alpha: 1,
                  });
              E.current.length > Kd &&
                E.current.splice(0, E.current.length - Kd);
              for (let V = E.current.length - 1; V >= 0; V--) {
                const be = E.current[V];
                if (
                  ((be.x += be.v.x),
                  (be.y += be.v.y),
                  (be.alpha -= 0.015),
                  (be.size *= 0.98),
                  be.alpha <= 0)
                ) {
                  E.current.splice(V, 1);
                  continue;
                }
                (K.beginPath(),
                  K.arc(be.x, be.y, be.size, 0, Math.PI * 2),
                  (K.fillStyle = o ? "#fff" : "#22d3ee"),
                  (K.globalAlpha = be.alpha),
                  K.fill());
              }
              K.globalAlpha = 1;
            }
            if (h === "constellation") {
              (Math.hypot(D.current.vx, D.current.vy) > 1.5 &&
                O.current % 3 === 0 &&
                v.current.push({
                  x: w.current.x,
                  y: w.current.y,
                  v: {
                    x: (Math.random() - 0.5) * 1.5,
                    y: (Math.random() - 0.5) * 1.5,
                  },
                  life: 1,
                }),
                v.current.length > Zd &&
                  v.current.splice(0, v.current.length - Zd));
              for (let Ge = v.current.length - 1; Ge >= 0; Ge--) {
                const _e = v.current[Ge];
                if (
                  ((_e.x += _e.v.x),
                  (_e.y += _e.v.y),
                  (_e.life -= 0.01),
                  _e.life <= 0)
                ) {
                  v.current.splice(Ge, 1);
                  continue;
                }
                const vt = Math.min(Ge + 5, v.current.length);
                for (let Le = Ge + 1; Le < vt; Le++) {
                  const gt = v.current[Le];
                  Math.hypot(_e.x - gt.x, _e.y - gt.y) < 120 &&
                    (K.beginPath(),
                    K.moveTo(_e.x, _e.y),
                    K.lineTo(gt.x, gt.y),
                    (K.strokeStyle = `rgba(34, 211, 238, ${_e.life * 0.5})`),
                    (K.lineWidth = 1),
                    K.stroke());
                }
                (K.beginPath(),
                  K.arc(_e.x, _e.y, 2, 0, Math.PI * 2),
                  (K.fillStyle = `rgba(34, 211, 238, ${_e.life})`),
                  K.fill());
              }
            }
          }
          J = requestAnimationFrame(Q);
        };
        return (
          window.addEventListener("mousemove", ue),
          window.addEventListener("mouseover", I),
          window.addEventListener("resize", P),
          P(),
          (J = requestAnimationFrame(Q)),
          () => {
            (window.removeEventListener("mousemove", ue),
              window.removeEventListener("mouseover", I),
              window.removeEventListener("resize", P),
              clearTimeout(B.current),
              cancelAnimationFrame(J));
          }
        );
      }, [h, o]),
      c.jsxs(c.Fragment, {
        children: [
          c.jsxs("div", {
            className: `cursor-wrapper cursor-${h} ${o ? "hovering" : ""}`,
            children: [
              h === "pen" &&
                c.jsx("div", {
                  ref: r,
                  className: "cursor-pen-nib-container",
                  children: c.jsx("div", {
                    className: "cursor-pen-nib",
                    children: c.jsxs("svg", {
                      viewBox: "0 0 24 24",
                      width: "36",
                      height: "36",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      children: [
                        c.jsx("path", {
                          d: "M12 2L6 18l6-3 6 3-6-16z",
                          fill: "#22d3ee",
                          fillOpacity: "0.2",
                        }),
                        c.jsx("path", {
                          d: "M12 2L6 18l6-3 6 3-6-16z",
                          stroke: "#22d3ee",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                        c.jsx("path", {
                          d: "M12 15V2",
                          stroke: "#22d3ee",
                          strokeLinecap: "round",
                        }),
                        c.jsx("circle", {
                          cx: "12",
                          cy: "2",
                          r: "1.5",
                          fill: "#fff",
                          className: "nib-point",
                        }),
                      ],
                    }),
                  }),
                }),
              h === "orbital" &&
                c.jsxs(c.Fragment, {
                  children: [
                    c.jsx("div", { ref: r, className: "dot" }),
                    c.jsx("div", { ref: T, className: "ring" }),
                  ],
                }),
              h === "crosshair" &&
                c.jsxs("div", {
                  ref: r,
                  className: "cursor-crosshair",
                  children: [
                    c.jsx("div", { className: "dot" }),
                    c.jsx("div", { className: "line line-v" }),
                    c.jsx("div", { className: "line line-h" }),
                  ],
                }),
            ],
          }),
          ["particles", "constellation"].includes(h) &&
            c.jsx("canvas", {
              ref: _,
              className: "cursor-canvas",
              style: {
                position: "fixed",
                top: 0,
                left: 0,
                pointerEvents: "none",
                zIndex: 1e5,
              },
            }),
        ],
      })
    );
  },
  c2 = ({ current: h, onSelect: o }) => {
    const [S, r] = U.useState(!1),
      T = [
        { id: "constellation", label: "Constellation" },
        { id: "pen", label: "Fountain Pen" },
        { id: "particles", label: "Particles" },
        { id: "crosshair", label: "Crosshair" },
        { id: "orbital", label: "Orbital" },
      ];
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx("button", {
          className: "cursor-settings-toggle",
          onClick: () => r(!S),
          title: "Change Cursor Style",
          children: c.jsxs("svg", {
            viewBox: "0 0 24 24",
            width: "24",
            height: "24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              c.jsx("path", { d: "M12 19l7-7 3 3-7 7-3-3z" }),
              c.jsx("path", { d: "M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" }),
              c.jsx("path", { d: "M2 2l7.586 7.586" }),
              c.jsx("circle", { cx: "11", cy: "11", r: "2" }),
            ],
          }),
        }),
        c.jsx("div", {
          className: `cursor-menu ${S ? "" : "hidden"}`,
          children: T.map((_) =>
            c.jsx(
              "div",
              {
                className: `cursor-option ${h === _.id ? "active" : ""}`,
                onClick: () => {
                  (o(_.id), r(!1));
                },
                children: _.label,
              },
              _.id,
            ),
          ),
        }),
      ],
    });
  };
function s2() {
  const { theme: h } = Ch(),
    o = h === "dark",
    [S, r] = U.useState(
      () => localStorage.getItem("cursorType") || "constellation",
    ),
    T = (_) => {
      (r(_), localStorage.setItem("cursorType", _));
    };
  return c.jsxs("div", {
    className:
      "text-slate-200 selection:bg-cyan-500/30 multi-cursor-active overflow-x-hidden min-h-screen",
    children: [
      c.jsx(u2, { type: S }),
      c.jsx(c2, { current: S, onSelect: T }),
      c.jsx("div", {
        className:
          "fixed inset-0 z-0 h-full w-full pointer-events-none select-none overflow-hidden",
        children: c.jsx(i2, {
          starColor: o ? "rgba(34, 211, 238, 0.5)" : "rgba(34, 211, 238, 0.3)",
          baseSpeed: 0.05,
          warpSpeed: 1.2,
          starCount: 800,
        }),
      }),
      c.jsx(Uh, {}),
      c.jsx(Rh, {}),
      c.jsxs("main", {
        className: "relative z-10",
        children: [
          c.jsx(Lh, {}),
          c.jsx(yt, { children: c.jsx(kh, {}) }),
          c.jsx(G1, {}),
          c.jsx(yt, { children: c.jsx(X1, {}) }),
          c.jsx(yt, { children: c.jsx(V1, {}) }),
          c.jsx(J1, {}),
          c.jsx(yt, { children: c.jsx(W1, {}) }),
          c.jsx(yt, { children: c.jsx($1, {}) }),
          c.jsx(yt, { children: c.jsx(F1, {}) }),
          c.jsx(yt, { children: c.jsx(P1, {}) }),
          c.jsx(yt, { children: c.jsx(e2, {}) }),
          c.jsx(yt, { children: c.jsx(t2, {}) }),
          c.jsx(yt, { children: c.jsx(l2, {}) }),
          c.jsx(yt, { children: c.jsx(a2, {}) }),
        ],
      }),
      c.jsx(n2, {}),
    ],
  });
}
const f2 =
    "Restricted action detected. Developer tools and context menu are disabled on this site for security and integrity protection.",
  Jd = "securityLockAutoRefreshDone";
function r2(h) {
  const o = document.createElement("div");
  (o.setAttribute("id", "security-lock-overlay"),
    (o.style.position = "fixed"),
    (o.style.inset = "0"),
    (o.style.zIndex = "2147483647"),
    (o.style.background = "rgba(2, 6, 23, 0.97)"),
    (o.style.color = "#e2e8f0"),
    (o.style.display = "flex"),
    (o.style.alignItems = "center"),
    (o.style.justifyContent = "center"),
    (o.style.padding = "24px"),
    (o.style.fontFamily =
      "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"),
    (o.style.textAlign = "center"));
  const S = document.createElement("div");
  ((S.style.maxWidth = "640px"),
    (S.style.border = "1px solid rgba(56, 189, 248, 0.45)"),
    (S.style.borderRadius = "14px"),
    (S.style.padding = "24px"),
    (S.style.background = "rgba(15, 23, 42, 0.96)"),
    (S.style.boxShadow = "0 20px 50px rgba(0, 0, 0, 0.45)"));
  const r = document.createElement("h2");
  ((r.textContent = "Security Lock Enabled"),
    (r.style.margin = "0 0 10px"),
    (r.style.fontSize = "1.5rem"),
    (r.style.color = "#67e8f9"));
  const T = document.createElement("p");
  ((T.textContent = h),
    (T.style.margin = "0"),
    (T.style.lineHeight = "1.6"),
    (T.style.fontSize = "1rem"));
  const _ = document.createElement("p");
  return (
    _.setAttribute("id", "security-lock-countdown"),
    (_.style.margin = "14px 0 0"),
    (_.style.lineHeight = "1.6"),
    (_.style.fontSize = "0.95rem"),
    (_.style.color = "#a5f3fc"),
    S.appendChild(r),
    S.appendChild(T),
    S.appendChild(_),
    o.appendChild(S),
    o
  );
}
function o2({
  message: h = f2,
  dimensionThreshold: o = 150,
  checkIntervalMs: S = 1e3,
  enforceLock: r = !0,
  refreshDelaySeconds: T = 5,
} = {}) {
  if (typeof window > "u" || typeof document > "u") return () => {};
  let _ = !1,
    w = !1,
    D = null,
    E = null,
    v = null;
  const O = () => {
      if (_ || w) return;
      ((_ = !0),
        document.getElementById("security-lock-overlay") ||
          document.body.appendChild(r2(h)),
        (document.documentElement.style.overflow = "hidden"),
        (document.body.style.overflow = "hidden"),
        (document.body.style.pointerEvents = "none"));
      const Q = document.getElementById("security-lock-overlay");
      if ((Q && (Q.style.pointerEvents = "all"), r))
        try {
          sessionStorage.clear();
        } catch {}
      const K = (() => {
          try {
            return sessionStorage.getItem(Jd) !== "1";
          } catch {
            return !1;
          }
        })(),
        re = document.getElementById("security-lock-countdown");
      if (re) {
        let ye = T;
        const Ee = K
          ? "This page will auto-refresh in"
          : "Auto-refresh already used for this session.";
        ((re.textContent = K ? `${Ee} ${ye}s.` : Ee),
          K &&
            (E = window.setInterval(() => {
              ((ye -= 1), ye > 0 && re && (re.textContent = `${Ee} ${ye}s.`));
            }, 1e3)));
      }
      K &&
        (v = window.setTimeout(() => {
          try {
            sessionStorage.setItem(Jd, "1");
          } catch {}
          window.location.reload();
        }, T * 1e3));
    },
    C = (J) => {
      const Q = J.key.toLowerCase(),
        K = J.ctrlKey && J.shiftKey;
      return (
        Q === "f12" ||
        (K && (Q === "i" || Q === "j" || Q === "c")) ||
        (J.ctrlKey && Q === "u")
      );
    },
    B = (J) => {
      C(J) && (J.preventDefault(), J.stopPropagation());
    },
    ue = (J) => {
      (J.preventDefault(), J.stopPropagation());
    },
    I = () => {
      const J = performance.now();
      debugger;
      return performance.now() - J > 120;
    },
    P = () => {
      if (w || _) return;
      const J = window.outerWidth - window.innerWidth,
        Q = window.outerHeight - window.innerHeight;
      (J > o || Q > o || I()) && O();
    };
  return (
    document.addEventListener("keydown", B, !0),
    document.addEventListener("contextmenu", ue, !0),
    (D = window.setInterval(P, S)),
    P(),
    () => {
      ((w = !0),
        document.removeEventListener("keydown", B, !0),
        document.removeEventListener("contextmenu", ue, !0),
        D && clearInterval(D),
        E && clearInterval(E),
        v && clearTimeout(v));
    }
  );
}
o2();
wh.createRoot(document.getElementById("root")).render(
  c.jsx(U.StrictMode, { children: c.jsx(Oh, { children: c.jsx(s2, {}) }) }),
);
