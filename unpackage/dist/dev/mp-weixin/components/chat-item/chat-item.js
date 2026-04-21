"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    chat: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.chat.avatar,
    b: common_vendor.t($props.chat.members.map((member) => member.nickname).join(", ")),
    c: common_vendor.t($props.chat.createdAt),
    d: common_vendor.t($props.chat.lastMessage),
    e: $props.chat.unreadCount > 0
  }, $props.chat.unreadCount > 0 ? {
    f: common_vendor.t($props.chat.unreadCount)
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4025332e"]]);
wx.createComponent(Component);
