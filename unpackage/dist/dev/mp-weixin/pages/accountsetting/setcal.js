"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      isexist: common_vendor.index.getStorageSync("cal") === "null" ? false : true,
      dataForm: {
        cal: common_vendor.index.getStorageSync("cal") === "null" ? "" : common_vendor.index.getStorageSync("cal")
      }
    };
  },
  onLoad() {
    this.dataForm = {
      cal: common_vendor.index.getStorageSync("cal") === "null" ? "" : common_vendor.index.getStorageSync("cal")
    };
  },
  methods: {
    submit() {
      const regData = {
        content: this.dataForm.cal === "" ? "null" : this.dataForm.cal,
        userIds: [common_vendor.index.getStorageSync("id")]
      };
      common_vendor.index.request({
        url: "https://gal-chat-test-970e995e1901.herokuapp.com/api/profile/calendar",
        method: "POST",
        header: {
          "Content-Type": "application/json",
          "authorization": common_vendor.index.getStorageSync("token")
        },
        data: regData,
        success: (res) => {
          const regInfo = res.data;
          if (regInfo.status) {
            common_vendor.index.setStorageSync("cal", this.dataForm.cal);
            common_vendor.index.showToast({
              title: "添加成功",
              icon: "success",
              duration: 2e3
            });
            common_vendor.index.switchTab({
              url: "/pages/tabBar/me/me"
            });
          } else {
            common_vendor.index.showModal({
              title: "添加失败",
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
    },
    alter() {
      const regData = {
        content: this.dataForm.cal === "" ? "null" : this.dataForm.cal,
        userIds: [common_vendor.index.getStorageSync("id")]
      };
      common_vendor.index.request({
        url: "https://gal-chat-test-970e995e1901.herokuapp.com/api/profile/calendar",
        method: "PUT",
        header: {
          "Content-Type": "application/json",
          "authorization": common_vendor.index.getStorageSync("token")
        },
        data: regData,
        success: (res) => {
          const regInfo = res.data;
          if (regInfo.status) {
            common_vendor.index.setStorageSync("cal", this.dataForm.cal);
            common_vendor.index.showToast({
              title: "修改成功",
              icon: "success",
              duration: 2e3
            });
            common_vendor.index.switchTab({
              url: "/pages/tabBar/me/me"
            });
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
    },
    remove() {
      common_vendor.index.request({
        url: "https://gal-chat-test-970e995e1901.herokuapp.com/api/profile/calendar",
        method: "DELETE",
        header: {
          "Content-Type": "application/json",
          "authorization": common_vendor.index.getStorageSync("token")
        },
        success: (res) => {
          const regInfo = res.data;
          if (regInfo.status) {
            common_vendor.index.setStorageSync("cal", "null");
            common_vendor.index.showToast({
              title: "删除成功",
              icon: "success",
              duration: 2e3
            });
            common_vendor.index.switchTab({
              url: "/pages/tabBar/me/me"
            });
          } else {
            common_vendor.index.showModal({
              title: "删除失败",
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
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_forms_item + _easycom_uni_forms)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.dataForm.cal,
    b: common_vendor.o(($event) => $data.dataForm.cal = $event.detail.value),
    c: common_vendor.p({
      name: "cal",
      label: "日程"
    }),
    d: !$data.isexist
  }, !$data.isexist ? {
    e: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  } : {}, {
    f: $data.isexist
  }, $data.isexist ? {
    g: common_vendor.o((...args) => $options.alter && $options.alter(...args))
  } : {}, {
    h: common_vendor.o((...args) => $options.remove && $options.remove(...args)),
    i: common_vendor.p({
      modelValue: $data.dataForm,
      rules: _ctx.rules,
      ["validate-trigger"]: "bind",
      ["label-width"]: "80px"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9ccbb0de"]]);
wx.createPage(MiniProgramPage);
