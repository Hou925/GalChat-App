"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "HomePage",
  methods: {
    goToLogin() {
      common_vendor.index.navigateTo({
        url: "/pages/log/login/login"
      });
    },
    goToRegister() {
      common_vendor.index.navigateTo({
        url: "/pages/log/register/register"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.goToLogin && $options.goToLogin(...args)),
    b: common_vendor.o((...args) => $options.goToRegister && $options.goToRegister(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-89f1962c"]]);
wx.createPage(MiniProgramPage);
