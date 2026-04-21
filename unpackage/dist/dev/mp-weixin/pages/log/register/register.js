"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      isValid: false,
      dataForm: {
        userName: "",
        nickName: "",
        phoneNum: "",
        code: "",
        password: "",
        confirmPassword: ""
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
        },
        nickName: {
          rules: [{
            required: true,
            errorMessage: "请输入昵称"
          }]
        },
        phoneNum: {
          rules: [{
            required: true,
            errorMessage: "请输入手机号"
          }]
        },
        code: {
          rules: [{
            required: true,
            errorMessage: "请输入验证码"
          }]
        },
        password: {
          rules: [{
            required: true,
            errorMessage: "请输入密码"
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
              console.log("validateFunction");
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
        if (this.dataForm.userName != "" && this.dataForm.nickname != "" && this.dataForm.phoneNum != "" && this.dataForm.code != "" && this.dataForm.password != "" && this.dataForm.password == this.dataForm.confirmPassword)
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
      console.log("submitted");
      const regData = {
        username: this.dataForm.userName,
        password: this.dataForm.password,
        nickname: this.dataForm.nickName,
        phone: this.dataForm.phoneNum,
        code: this.dataForm.code
      };
      common_vendor.index.request({
        url: "https://gal-chat-test-970e995e1901.herokuapp.com/api/identity/register",
        method: "POST",
        header: {
          "Content-Type": "application/json"
        },
        data: regData,
        success: (res) => {
          const regInfo = res.data;
          if (regInfo.status) {
            common_vendor.index.showToast({
              title: "注册成功",
              icon: "success",
              duration: 2e3
            });
            this.login();
          } else {
            common_vendor.index.showModal({
              title: "注册失败",
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
          console.error("注册请求失败：", err);
        }
      });
    },
    login() {
      const loginData = {
        username: this.dataForm.userName,
        password: this.dataForm.password
      };
      common_vendor.index.request({
        url: "https://gal-chat-test-970e995e1901.herokuapp.com/api/identity/login",
        method: "POST",
        header: {
          "Content-Type": "application/json"
        },
        data: loginData,
        success: (res) => {
          const loginInfo = res.data;
          if (loginInfo.status) {
            common_vendor.index.showToast({
              title: loginInfo.message,
              icon: "success"
            });
            common_vendor.index.setStorageSync("token", loginInfo.value.accessToken);
            common_vendor.index.setStorageSync("refresh", loginInfo.value.accessToken);
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
        fail: (err) => {
          common_vendor.index.showToast({
            title: "网络请求失败",
            icon: "error"
          });
          console.error("请求失败：", err);
        }
      });
    },
    getVerificationCode() {
      common_vendor.index.request({
        url: "https://gal-chat-test-970e995e1901.herokuapp.com/api/identity/sendCode",
        method: "POST",
        header: {
          "Content-Type": "application/json"
        },
        data: {
          phone: this.dataForm.phoneNum
        },
        success: (res) => {
          const data = res.data;
          if (data.status) {
            common_vendor.index.showToast({
              title: "发送成功",
              icon: "success",
              duration: 2e3
            });
          } else {
            common_vendor.index.showModal({
              title: "发送失败",
              content: data.message,
              showCancel: false
            });
          }
        },
        fail: (err) => {
          common_vendor.index.showModal({
            title: "错误",
            content: "发送验证码失败，请稍后重试",
            showCancel: false
          });
          console.error("发送验证码失败：", err);
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
const _easycom_uni_easyinput = () => "../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
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
    d: common_vendor.o(($event) => $data.dataForm.nickName = $event),
    e: common_vendor.p({
      type: "text",
      placeholder: "昵称",
      modelValue: $data.dataForm.nickName
    }),
    f: common_vendor.p({
      name: "nickName",
      label: "昵称"
    }),
    g: common_vendor.o(($event) => $data.dataForm.phoneNum = $event),
    h: common_vendor.p({
      type: "number",
      placeholder: "手机号",
      modelValue: $data.dataForm.phoneNum
    }),
    i: common_vendor.p({
      name: "phoneNum",
      label: "手机号"
    }),
    j: $data.dataForm.phoneNum.length != 11,
    k: common_vendor.o((...args) => $options.getVerificationCode && $options.getVerificationCode(...args)),
    l: common_vendor.o(($event) => $data.dataForm.code = $event),
    m: common_vendor.p({
      type: "number",
      placeholder: "验证码",
      modelValue: $data.dataForm.code
    }),
    n: common_vendor.p({
      name: "code",
      label: "验证码"
    }),
    o: common_vendor.o(($event) => $data.dataForm.password = $event),
    p: common_vendor.p({
      type: "password",
      placeholder: "密码",
      modelValue: $data.dataForm.password
    }),
    q: common_vendor.p({
      name: "password",
      label: "密码"
    }),
    r: common_vendor.o(($event) => $data.dataForm.confirmPassword = $event),
    s: common_vendor.p({
      type: "password",
      placeholder: "确认密码",
      modelValue: $data.dataForm.confirmPassword
    }),
    t: common_vendor.p({
      name: "confirmPassword",
      label: "确认密码"
    }),
    v: !$data.isValid,
    w: common_vendor.o((...args) => $options.submit && $options.submit(...args)),
    x: common_vendor.p({
      modelValue: $data.dataForm,
      rules: $data.rules,
      ["validate-trigger"]: "bind",
      ["label-width"]: "80px"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-493020a3"]]);
wx.createPage(MiniProgramPage);
