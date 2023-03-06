import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, b as insert_hydration, I as append_hydration, C as noop } from "../../../chunks/index-dc20fbb7.js";
const _page_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let h1;
  let t0;
  let t1;
  let p;
  let t2;
  let t3;
  let a;
  let t4;
  return {
    c() {
      h1 = element("h1");
      t0 = text("About");
      t1 = space();
      p = element("p");
      t2 = text("Reload this page");
      t3 = space();
      a = element("a");
      t4 = text("Home");
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "About");
      h1_nodes.forEach(detach);
      t1 = claim_space(nodes);
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t2 = claim_text(p_nodes, "Reload this page");
      p_nodes.forEach(detach);
      t3 = claim_space(nodes);
      a = claim_element(nodes, "A", { href: true, class: true });
      var a_nodes = children(a);
      t4 = claim_text(a_nodes, "Home");
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", "/");
      attr(a, "class", "svelte-p7em2g");
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      append_hydration(h1, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, p, anchor);
      append_hydration(p, t2);
      insert_hydration(target, t3, anchor);
      insert_hydration(target, a, anchor);
      append_hydration(a, t4);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(h1);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(p);
      if (detaching)
        detach(t3);
      if (detaching)
        detach(a);
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
