import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, l as claim_element, m as children, r as claim_text, h as detach, b as insert_hydration, H as append_hydration, u as set_data, C as noop, I as component_subscribe } from "../../../chunks/index-e98e3991.js";
import { p as page } from "../../../chunks/stores-86e64d94.js";
function create_fragment(ctx) {
  let h1;
  let t0_value = (
    /*$page*/
    ctx[0].status + ""
  );
  let t0;
  let t1;
  let t2_value = (
    /*$page*/
    ctx[0].error.message + ""
  );
  let t2;
  return {
    c() {
      h1 = element("h1");
      t0 = text(t0_value);
      t1 = text(": ");
      t2 = text(t2_value);
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, t0_value);
      t1 = claim_text(h1_nodes, ": ");
      t2 = claim_text(h1_nodes, t2_value);
      h1_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      append_hydration(h1, t0);
      append_hydration(h1, t1);
      append_hydration(h1, t2);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*$page*/
      1 && t0_value !== (t0_value = /*$page*/
      ctx2[0].status + ""))
        set_data(t0, t0_value);
      if (dirty & /*$page*/
      1 && t2_value !== (t2_value = /*$page*/
      ctx2[0].error.message + ""))
        set_data(t2, t2_value);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(h1);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $page;
  component_subscribe($$self, page, ($$value) => $$invalidate(0, $page = $$value));
  return [$page];
}
class Error extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Error as default
};
