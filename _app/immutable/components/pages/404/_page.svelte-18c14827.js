import { S as SvelteComponent, i as init, s as safe_not_equal, q as text, r as claim_text, b as insert_hydration, C as noop, h as detach } from "../../../chunks/index-e98e3991.js";
function create_fragment(ctx) {
  let t;
  return {
    c() {
      t = text("It is 404 Page");
    },
    l(nodes) {
      t = claim_text(nodes, "It is 404 Page");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
