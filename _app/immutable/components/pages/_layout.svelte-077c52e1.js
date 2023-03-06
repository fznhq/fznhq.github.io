import { S as SvelteComponent, i as init, s as safe_not_equal, e as empty, b as insert_hydration, f as transition_in, t as transition_out, d as check_outros, h as detach, D as component_subscribe, E as create_slot, q as text, a as space, r as claim_text, c as claim_space, u as set_data, F as update_slot_base, G as get_all_dirty_from_scope, H as get_slot_changes, g as group_outros } from "../../chunks/index-dc20fbb7.js";
import { p as page } from "../../chunks/stores-f65b2bb4.js";
import { j as client } from "../../chunks/singletons-7965ec75.js";
client.disable_scroll_handling;
const goto = client.goto;
client.invalidate;
client.invalidateAll;
client.preload_data;
client.preload_code;
client.before_navigate;
client.after_navigate;
function create_if_block(ctx) {
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
    p(ctx2, dirty) {
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
function create_fragment(ctx) {
  let show_if = !/*$page*/
  ctx[0].url.pathname.includes(".html");
  let if_block_anchor;
  let current;
  let if_block = show_if && create_if_block(ctx);
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (dirty & /*$page*/
      1)
        show_if = !/*$page*/
        ctx2[0].url.pathname.includes(".html");
      if (show_if) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*$page*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
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
