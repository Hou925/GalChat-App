"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      isValid: false,
      dataForm: {
        oldpassword: "",
        password: "",
        confirmPassword: ""
      },
      rules: {
        oldpassword: {
          rules: [{
            required: true,
            errorMessage: "请输入旧密码"
          }]
        },
        password: {
          rules: [{
            required: true,
            errorMessage: "请输入新密码"
          }, {
            minLength: 6,
            // 添加最小长度限制
            errorMessage: "密码不能少于6个字符"
          }]
        },
        confirmPassword: {
          rules: [{
            required: true,
            errorMessage: "请输入确认密码"
          }, {
            validateFunction: (rule, value, data, callback) => {
              if (data.password != value) {
                callback("两次密码输入不一致");
              }
              return true;
            }
          }]
        }
      }
    };
  },
  watch: {
    // 深度监听整个对象
    dataForm: {
      handler(newValue, oldValue) {
        if (this.dataForm.oldpassword != "" && this.dataForm.password != "" && this.dataForm.password == this.dataForm.confirmPassword)
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
        username: common_vendor.index.getStorageSync("username"),
        nickname: common_vendor.index.getStorageSync("nickname"),
        password: this.dataForm.password,
        confirmPassword: this.dataForm.oldpassword
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
            common_vendor.index.setStorageSync("password", this.dataForm.password);
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
    a: common_vendor.o(($event) => $data.dataForm.oldpassword = $event),
    b: common_vendor.p({
      type: "password",
      placeholder: "旧密码",
      modelValue: $data.dataForm.oldpassword
    }),
    c: common_vendor.p({
      name: "oldpassword",
      label: "旧密码"
    }),
    d: common_vendor.o(($event) => $data.dataForm.password = $event),
    e: common_vendor.p({
      type: "password",
      placeholder: "新密码",
      modelValue: $data.dataForm.password
    }),
    f: common_vendor.p({
      name: "password",
      label: "新密码"
    }),
    g: common_vendor.o(($event) => $data.dataForm.confirmPassword = $event),
    h: common_vendor.p({
      type: "password",
      placeholder: "确认密码",
      modelValue: $data.dataForm.confirmPassword
    }),
    i: common_vendor.p({
      name: "confirmPassword",
      label: "确认密码"
    }),
    j: !$data.isValid,
    k: common_vendor.o((...args) => $options.submit && $options.submit(...args)),
    l: common_vendor.p({
      modelValue: $data.dataForm,
      rules: $data.rules,
      ["validate-trigger"]: "bind",
      ["label-width"]: "80px"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6db36944"]]);
wx.createPage(MiniProgramPage);
