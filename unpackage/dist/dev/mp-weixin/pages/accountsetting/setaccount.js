"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      isValid: false,
      olduserName: common_vendor.index.getStorageSync("userName") ?? "",
      dataForm: {
        userName: common_vendor.index.getStorageSync("userName") ?? ""
      },
      rules: {
        userName: {
          rules: [{
            required: true,
            errorMessage: "请输入用户名"
          }, {
            minLength: 6,
            // 添加最小长度限制
            errorMessage: "用户名不能少于6个字符"
          }]
        }
      }
    };
  },
  onLoad() {
    this.dataForm = {
      userName: common_vendor.index.getStorageSync("userName")
    };
  },
  watch: {
    // 深度监听整个对象
    dataForm: {
      handler(newValue, oldValue) {
        if (this.dataForm.userName != this.olduserName && this.dataForm.userName != "")
          this.isValid = true;
        else
          this.isValid = false;
      },
      deep: true
      // 深度监听
    }
  },
  methods: {
    submit() {
      const regData = {
        username: this.dataForm.userName,
        nickname: common_vendor.index.getStorageSync("nickname"),
        password: common_vendor.index.getStorageSync("password"),
        confirmPassword: common_vendor.index.getStorageSync("password")
      };
      common_vendor.index.request({
        url: "https://gal-chat-test-970e995e1901.herokuapp.com/api/profile/update",
        method: "PUT",
        header: {
          "Content-Type": "application/json",
          "authorization": common_vendor.index.getStorageSync("token")
        },
        data: regData,
        success: (res) => {
          const regInfo = res.data;
          if (regInfo.status) {
            common_vendor.index.setStorageSync("userName", this.dataForm.userName);
            common_vendor.index.showToast({
              title: "修改成功",
              icon: "success",
              duration: 2e3
            });
            common_vendor.index.navigateBack();
          } else {
            common_vendor.index.showModal({
              title: "修改失败",
              content: regInfo.message,
              showCancel: false
            });
          }
        },
        fail: (err) => {
          common_vendor.index.showModal({
            title: "错误",
            content: "网络请求失败，请稍后重试",
            showCancel: false
          });
          console.error("请求失败：", err);
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.dataForm.userName = $event),
    b: common_vendor.p({
      type: "text",
      placeholder: "用户名",
      modelValue: $data.dataForm.userName
    }),
    c: common_vendor.p({
      name: "userName",
      label: "用户名"
    }),
    d: !$data.isValid,
    e: common_vendor.o((...args) => $options.submit && $options.submit(...args)),
    f: common_vendor.p({
      modelValue: $data.dataForm,
      rules: $data.rules,
      ["validate-trigger"]: "bind",
      ["label-width"]: "80px"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3c87e4c2"]]);
wx.createPage(MiniProgramPage);
