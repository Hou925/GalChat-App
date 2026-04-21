"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      menuVisible: false
    };
  },
  methods: {
    showMenu() {
      this.menuVisible = true;
    },
    hideMenu() {
      this.menuVisible = false;
    },
    onSelect(item) {
      this.$emit("select", item);
      this.hideMenu();
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.menuVisible
  }, $data.menuVisible ? {
    b: common_vendor.f($props.items, (item, index, i0) => {
      return {
        a: "c37b8154-0-" + i0,
        b: common_vendor.p({
          type: item.icon,
          size: "16"
        }),
        c: common_vendor.t(item.name),
        d: index,
        e: item.color || "#333",
        f: common_vendor.o(($event) => $options.onSelect(item), index)
      };
    }),
    c: common_vendor.o(() => {
    }),
    d: common_vendor.o((...args) => $options.hideMenu && $options.hideMenu(...args))
  } : {}, {
    e: common_vendor.o((...args) => $options.showMenu && $options.showMenu(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c37b8154"]]);
wx.createComponent(Component);
