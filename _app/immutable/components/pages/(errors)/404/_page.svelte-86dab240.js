import { S as SvelteComponent, i as init, s as safe_not_equal, q as text, a as space, k as element, r as claim_text, c as claim_space, l as claim_element, m as children, h as detach, n as attr, b as insert_hydration, H as append_hydration, u as set_data, C as noop, I as component_subscribe } from "../../../../chunks/index-e98e3991.js";
import { p as page } from "../../../../chunks/stores-519e4a96.js";
function create_fragment(ctx) {
  let t0_value = (
    /*$page*/
    ctx[0].url.pathname + ""
  );
  let t0;
  let t1;
  let t2_value = (
    /*$page*/
    ctx[0].route.id + ""
  );
  let t2;
  let t3;
  let a0;
  let t4;
  let t5;
  let a1;
  let t6;
  return {
    c() {
      t0 = text(t0_value);
      t1 = space();
      t2 = text(t2_value);
      t3 = text("\r\nIt is 404 Page\r\n");
      a0 = element("a");
      t4 = text("About");
      t5 = space();
      a1 = element("a");
      t6 = text("Home");
      this.h();
    },
    l(nodes) {
      t0 = claim_text(nodes, t0_value);
      t1 = claim_space(nodes);
      t2 = claim_text(nodes, t2_value);
      t3 = claim_text(nodes, "\r\nIt is 404 Page\r\n");
      a0 = claim_element(nodes, "A", { href: true });
      var a0_nodes = children(a0);
      t4 = claim_text(a0_nodes, "About");
      a0_nodes.forEach(detach);
      t5 = claim_space(nodes);
      a1 = claim_element(nodes, "A", { href: true });
      var a1_nodes = children(a1);
      t6 = claim_text(a1_nodes, "Home");
      a1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a0, "href", "/about");
      attr(a1, "href", "/");
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, t3, anchor);
      insert_hydration(target, a0, anchor);
      append_hydration(a0, t4);
      insert_hydration(target, t5, anchor);
      insert_hydration(target, a1, anchor);
      append_hydration(a1, t6);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*$page*/
      1 && t0_value !== (t0_value = /*$page*/
      ctx2[0].url.pathname + ""))
        set_data(t0, t0_value);
      if (dirty & /*$page*/
      1 && t2_value !== (t2_value = /*$page*/
      ctx2[0].route.id + ""))
        set_data(t2, t2_value);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(t3);
      if (detaching)
        detach(a0);
      if (detaching)
        detach(t5);
      if (detaching)
        detach(a1);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $page;
  component_subscribe($$self, page, ($$value) => $$invalidate(0, $page = $$value));
  return [$page];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
