import { S as SvelteComponent, i as init, s as safe_not_equal, D as create_slot, q as text, a as space, r as claim_text, c as claim_space, b as insert_hydration, u as set_data, E as update_slot_base, F as get_all_dirty_from_scope, G as get_slot_changes, f as transition_in, t as transition_out, h as detach, H as component_subscribe } from "../../chunks/index-998ba592.js";
import { p as page } from "../../chunks/stores-4454ebb5.js";
import { j as client } from "../../chunks/singletons-8f3027e7.js";
client.disable_scroll_handling;
const goto = client.goto;
client.invalidate;
client.invalidateAll;
client.preload_data;
client.preload_code;
client.before_navigate;
client.after_navigate;
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
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[2].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[1],
    null
  );
  return {
    c() {
      t0 = text(t0_value);
      t1 = space();
      t2 = text(t2_value);
      t3 = space();
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      t0 = claim_text(nodes, t0_value);
      t1 = claim_space(nodes);
      t2 = claim_text(nodes, t2_value);
      t3 = claim_space(nodes);
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, t3, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if ((!current || dirty & /*$page*/
      1) && t0_value !== (t0_value = /*$page*/
      ctx2[0].url.pathname + ""))
        set_data(t0, t0_value);
      if ((!current || dirty & /*$page*/
      1) && t2_value !== (t2_value = /*$page*/
      ctx2[0].route.id + ""))
        set_data(t2, t2_value);
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        2)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[1],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[1]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[1],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(t3);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $page;
  component_subscribe($$self, page, ($$value) => $$invalidate(0, $page = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(1, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$page*/
    1) {
      if ($page.url.pathname.includes(".html")) {
        goto($page.url.pathname.replace(".html", ""), { replaceState: true });
      }
    }
  };
  return [$page, $$scope, slots];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Layout as default
};
