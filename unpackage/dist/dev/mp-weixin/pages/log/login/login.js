"use strict";
const common_vendor = require("../../../common/vendor.js");
const stores_profile = require("../../../stores/profile.js");
const _sfc_main = {
  data() {
    return {
      loginForm: {
        phoneNum: "",
        password: ""
      },
      rules: {
        phoneNum: {
          rules: [{
            required: true,
            errorMessage: "请输入用户名"
          }]
        },
        password: {
          rules: [{
            required: true,
            errorMessage: "请输入密码"
          }]
        }
      }
    };
  },
  methods: {
    submit() {
      const loginData = {
        username: this.loginForm.phoneNum,
        password: this.loginForm.password
      };
      common_vendor.index.request({
        url: "https://gal-chat-test-970e995e1901.herokuapp.com/api/identity/login",
        method: "POST",
        header: {
          "Content-Type": "application/json"
        },
        data: loginData,
        // 网络请求成功
        success: (res) => {
          const loginInfo = res.data;
          if (loginInfo.status) {
            common_vendor.index.showToast({
              title: "登录成功",
              icon: "success"
            });
            common_vendor.index.setStorageSync("token", loginInfo.value.accessToken);
            common_vendor.index.setStorageSync("refresh", loginInfo.value.accessToken);
            const profileStore = stores_profile.useProfileStore();
            profileStore.getProfile();
            common_vendor.index.request({
              url: "https://gal-chat-test-970e995e1901.herokuapp.com/api/profile",
              method: "GET",
              header: {
                "Content-Type": "application/json",
                "authorization": common_vendor.index.getStorageSync("token")
                // 使用uni的存储API
              },
              success: (res2) => {
                const profile = res2.data;
                common_vendor.index.setStorageSync("id", profile.value.id);
                common_vendor.index.setStorageSync("nickname", profile.value.nickname);
                common_vendor.index.setStorageSync("username", profile.value.username);
                common_vendor.index.setStorageSync("password", loginData.password);
              }
            });
            common_vendor.index.switchTab({
              url: "/pages/tabBar/chats/chats"
            });
          } else {
            common_vendor.index.showModal({
              title: "提示",
              content: loginInfo.message,
              showCancel: false
            });
          }
        },
        // 网络请求失败
        fail: (err) => {
          common_vendor.index.showToast({
            title: "网络请求失败",
            icon: "error"
          });
          console.error("请求失败：", err);
        }
      });
    }
  }
  // onLoad() {
  // 	this.loginForm.phoneNum = uni.getStorageSync("phoneNum");
  // 	this.loginForm.password = uni.getStorageSync("password");
  // }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.loginForm.phoneNum = $event),
    b: common_vendor.p({
      type: "text",
      ["prefix-icon"]: "person",
      placeholder: "用户名",
      modelValue: $data.loginForm.phoneNum
    }),
    c: common_vendor.p({
      name: "phoneNum"
    }),
    d: common_vendor.o(($event) => $data.loginForm.password = $event),
    e: common_vendor.p({
      type: "password",
      ["prefix-icon"]: "locked",
      placeholder: "密码",
      modelValue: $data.loginForm.password
    }),
    f: common_vendor.p({
      name: "password"
    }),
    g: common_vendor.o((...args) => $options.submit && $options.submit(...args)),
    h: common_vendor.p({
      modelValue: $data.loginForm,
      rules: $data.rules,
      ["validate-trigger"]: "bind"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1fa4d8f7"]]);
wx.createPage(MiniProgramPage);
