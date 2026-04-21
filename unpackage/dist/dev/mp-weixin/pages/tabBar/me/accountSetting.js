"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      listData: [
        {
          title: "昵称",
          url: "/pages/accountsetting/setnickname"
        },
        {
          title: "用户名",
          url: "/pages/accountsetting/setaccount"
        },
        {
          title: "修改密码",
          url: "/pages/accountsetting/setpassword"
        }
      ]
    };
  },
  methods: {
    // 点击列表项跳转到指定页面
    navigateTo(url) {
      common_vendor.index.navigateTo({
        url
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.listData, (item, index, i0) => {
      return {
        a: index,
        b: common_vendor.o(($event) => $options.navigateTo(item.url), index),
        c: "0631e813-1-" + i0 + ",0631e813-0",
        d: common_vendor.p({
          title: item.title,
          clickable: true
        })
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
