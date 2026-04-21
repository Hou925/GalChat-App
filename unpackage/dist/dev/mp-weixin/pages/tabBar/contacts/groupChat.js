"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_uni_search_bar2 + _easycom_uni_icons2)();
}
const _easycom_uni_search_bar = () => "../../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_uni_icons)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.o(($event) => _ctx.searchText = $event),
    b: common_vendor.p({
      radius: "100",
      cancelButton: "none",
      placeholder: "点击搜索群聊",
      modelValue: _ctx.searchText
    }),
    c: common_vendor.p({
      type: "personadd",
      size: "35"
    }),
    d: common_vendor.o(($event) => _ctx.onAddNewFriends())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
