import { S as SvelteComponent, i as init, s as safe_not_equal, q as text, k as element, a as space, r as claim_text, l as claim_element, m as children, h as detach, c as claim_space, n as attr, b as insert_hydration, H as append_hydration, C as noop } from "../../../chunks/index-e98e3991.js";
function create_fragment(ctx) {
  let t0;
  let a0;
  let t1;
  let t2;
  let a1;
  let t3;
  return {
    c() {
      t0 = text("It is 404 Page\r\n");
      a0 = element("a");
      t1 = text("About");
      t2 = space();
      a1 = element("a");
      t3 = text("Home");
      this.h();
    },
    l(nodes) {
      t0 = claim_text(nodes, "It is 404 Page\r\n");
      a0 = claim_element(nodes, "A", { href: true });
      var a0_nodes = children(a0);
      t1 = claim_text(a0_nodes, "About");
      a0_nodes.forEach(detach);
      t2 = claim_space(nodes);
      a1 = claim_element(nodes, "A", { href: true });
      var a1_nodes = children(a1);
      t3 = claim_text(a1_nodes, "Home");
      a1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a0, "href", "/about");
      attr(a1, "href", "/");
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, a0, anchor);
      append_hydration(a0, t1);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, a1, anchor);
      append_hydration(a1, t3);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(a0);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(a1);
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
