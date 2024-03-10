import { defineComponent as M, useCssVars as O, ref as a, computed as m, nextTick as x, openBlock as N, createBlock as R, Teleport as z, createElementVNode as r, createVNode as W, Transition as P, withCtx as j, withDirectives as q, vShow as G, normalizeClass as J, renderSlot as _, pushScopeId as K, popScopeId as Q } from "vue";
import s from "hammerjs";
const U = (n) => (K("data-v-05788d3a"), n = n(), Q(), n), X = ["aria-hidden"], Z = /* @__PURE__ */ U(() => /* @__PURE__ */ r("div", { class: "bottom-sheet__draggable-thumb" }, null, -1)), ee = [
  Z
], te = /* @__PURE__ */ M({
  __name: "VueBottomSheet",
  props: {
    overlay: { type: Boolean, default: !0 },
    overlayColor: { default: "#0000004D" },
    maxWidth: { default: 640 },
    maxHeight: {},
    transitionDuration: { default: 0.5 },
    overlayClickClose: { type: Boolean, default: !0 },
    canSwipe: { type: Boolean, default: !0 }
  },
  emits: ["opened", "closed", "dragging-up", "dragging-down"],
  setup(n, { expose: p, emit: i }) {
    const t = n;
    O((e) => ({
      dcc98260: D.value,
      "457cfef2": t.overlayColor,
      "2a983d0a": B.value,
      "5b22d081": T.value,
      "29fc8049": $.value,
      "260b8b86": V.value
    }));
    const c = a(!1), u = a(0), l = a(100), f = a(!1), b = a(0), y = a(null), S = a(null), d = a(null), w = a(null), k = a(null), C = a(null), E = (e) => document.activeElement === e;
    window.addEventListener("keyup", (e) => {
      const o = y.value.contains(e.target) && E(e.target);
      e.key === "Escape" && !o && v();
    });
    const I = m(() => [
      "bottom-sheet__content",
      {
        "bottom-sheet__content--fullscreen": u.value >= window.innerHeight,
        "bottom-sheet__content--dragging": f.value
      }
    ]), D = m(() => `${t.transitionDuration}s`), T = m(() => u.value && u.value > 0 ? `${u.value + 1}px` : "auto"), V = m(() => t.maxHeight ? `${t.maxHeight}px` : "inherit"), B = m(() => `${l.value}%`), $ = m(() => `${t.maxWidth}px`), Y = async () => {
      await x(), u.value = S.value.offsetHeight + d.value.clientHeight + w.value.offsetHeight;
    }, H = (e, o) => {
      if (t.canSwipe) {
        f.value = !0;
        const h = (L) => {
          L.preventDefault();
        };
        e.deltaY > 0 && (o === "main" && e.type === "panup" && (l.value = g(e.deltaY), e.cancelable && d.value.addEventListener("touchmove", h)), o === "main" && e.type === "pandown" && b.value === 0 && (l.value = g(e.deltaY)), o === "area" && (l.value = g(e.deltaY)), e.type === "panup" && i("dragging-up"), e.type === "pandown" && i("dragging-down")), e.isFinal && (d.value.removeEventListener("touchmove", h), o === "main" && (b.value = d.value.scrollTop), f.value = !1, l.value >= 10 ? v() : l.value = 0);
      }
    };
    x(() => {
      Y();
      const e = new s(C.value, {
        inputClass: s.TouchMouseInput,
        recognizers: [[s.Pan, { direction: s.DIRECTION_VERTICAL }]]
      }), o = new s(d.value, {
        inputClass: s.TouchMouseInput,
        recognizers: [[s.Pan, { direction: s.DIRECTION_VERTICAL }]]
      });
      e.on("panstart panup pandown panend", (h) => {
        H(h, "area");
      }), o.on("panstart panup pandown panend", (h) => {
        H(h, "main");
      });
    });
    const A = () => {
      l.value = 0, document.documentElement.style.overflowY = "hidden", document.documentElement.style.overscrollBehavior = "none", c.value = !0, i("opened");
    }, v = async () => {
      c.value = !1, l.value = 100, setTimeout(() => {
        document.documentElement.style.overflowY = "auto", document.documentElement.style.overscrollBehavior = "", i("closed");
      }, t.transitionDuration * 1e3);
    }, F = () => {
      t.overlayClickClose && v();
    }, g = (e) => {
      const o = t.maxHeight && t.maxHeight <= u.value ? t.maxHeight : u.value;
      return e / o * 100;
    };
    return p({ open: A, close: v }), (e, o) => (N(), R(z, { to: "body" }, [
      r("div", {
        class: "bottom-sheet",
        ref_key: "bottomSheet",
        ref: y,
        "aria-hidden": !c.value,
        role: "dialog"
      }, [
        W(P, null, {
          default: j(() => [
            q(r("div", {
              onClick: F,
              class: "bottom-sheet__overlay"
            }, null, 512), [
              [G, e.overlay && c.value]
            ])
          ]),
          _: 1
        }),
        r("div", {
          ref_key: "bottomSheetContent",
          ref: k,
          class: J(I.value)
        }, [
          r("header", {
            ref_key: "bottomSheetHeader",
            ref: S,
            class: "bottom-sheet__header"
          }, [
            r("div", {
              class: "bottom-sheet__draggable-area",
              ref_key: "bottomSheetDraggableArea",
              ref: C
            }, ee, 512),
            _(e.$slots, "header", {}, void 0, !0)
          ], 512),
          r("main", {
            ref_key: "bottomSheetMain",
            ref: d,
            class: "bottom-sheet__main"
          }, [
            _(e.$slots, "default", {}, void 0, !0)
          ], 512),
          r("footer", {
            ref_key: "bottomSheetFooter",
            ref: w,
            class: "bottom-sheet__footer"
          }, [
            _(e.$slots, "footer", {}, void 0, !0)
          ], 512)
        ], 2)
      ], 8, X)
    ]));
  }
});
const oe = (n, p) => {
  const i = n.__vccOpts || n;
  for (const [t, c] of p)
    i[t] = c;
  return i;
}, le = /* @__PURE__ */ oe(te, [["__scopeId", "data-v-05788d3a"]]);
export {
  le as default
};
