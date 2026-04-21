"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  name: "ProfilePage",
  data() {
    return {
      id: common_vendor.index.getStorageSync("id") ?? "",
      nickname: common_vendor.index.getStorageSync("nickname") ?? "",
      username: common_vendor.index.getStorageSync("username") ?? "",
      mood: common_vendor.index.getStorageSync("mood") ?? "",
      status: common_vendor.index.getStorageSync("status") ?? "",
      calender: ""
    };
  },
  async onShow() {
    try {
      const res = await new Promise((resolve, reject) => {
        common_vendor.index.request({
          url: "https://gal-chat-test-970e995e1901.herokuapp.com/api/profile",
          method: "GET",
          header: {
            "Content-Type": "application/json",
            "authorization": common_vendor.index.getStorageSync("token")
            // 使用uni的存储API
          },
          success: (res2) => resolve(res2),
          fail: (err) => reject(err)
        });
      });
      const profile = res.data;
      this.id = profile.value.id;
      this.nickname = profile.value.nickname;
      this.username = profile.value.username;
      this.mood = profile.value.mood ?? "添加心情";
      this.status = profile.value.status ?? "添加状态";
      common_vendor.index.setStorageSync("id", this.id);
      common_vendor.index.setStorageSync("nickname", this.nickname);
      common_vendor.index.setStorageSync("username", this.username);
      common_vendor.index.setStorageSync("mood", this.mood);
      common_vendor.index.setStorageSync("status", this.status);
    } catch (error) {
      common_vendor.index.showModal({
        title: "错误",
        content: "获取用户信息失败，请重新登录",
        showCancel: false,
        success: () => {
          common_vendor.index.redirectTo({
            url: "/pages/log/log/log"
          });
        }
      });
    }
  },
  methods: {
    onMoodTap() {
      common_vendor.index.navigateTo({
        url: "/pages/accountsetting/setmood"
      });
    },
    onStatusTap() {
      common_vendor.index.navigateTo({
        url: "/pages/accountsetting/setstatus"
      });
    },
    onAccountSettingTap() {
      common_vendor.index.navigateTo({
        url: "/pages/tabBar/me/accountSetting"
      });
    },
    onScheduleTap() {
      common_vendor.index.navigateTo({
        url: "/pages/accountsetting/setcal"
      });
    },
    onPicturesTap() {
      common_vendor.index.showToast({
        title: "Tapped on My pictures",
        icon: "none"
      });
    },
    onPrivacyTap() {
      common_vendor.index.showToast({
        title: "Tapped on Privacy management",
        icon: "none"
      });
    },
    onLogoutTap() {
      common_vendor.index.removeStorageSync("token");
      common_vendor.index.removeStorageSync("refresh");
      common_vendor.index.redirectTo({
        url: "/pages/log/log/log"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_vendor.t($data.nickname),
    c: common_vendor.t($data.username),
    d: common_vendor.t($data.mood),
    e: common_vendor.o((...args) => $options.onMoodTap && $options.onMoodTap(...args)),
    f: common_vendor.t($data.status),
    g: common_vendor.o((...args) => $options.onStatusTap && $options.onStatusTap(...args)),
    h: common_vendor.o((...args) => $options.onAccountSettingTap && $options.onAccountSettingTap(...args)),
    i: common_vendor.o((...args) => $options.onScheduleTap && $options.onScheduleTap(...args)),
    j: common_vendor.o((...args) => $options.onPicturesTap && $options.onPicturesTap(...args)),
    k: common_vendor.o((...args) => $options.onPrivacyTap && $options.onPrivacyTap(...args)),
    l: common_vendor.o((...args) => $options.onLogoutTap && $options.onLogoutTap(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-635a3669"]]);
wx.createPage(MiniProgramPage);
