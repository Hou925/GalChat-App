"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const stores_profile = require("./stores/profile.js");
if (!Math) {
  "./pages/tabBar/chats/chats.js";
  "./pages/tabBar/contacts/contacts.js";
  "./pages/tabBar/me/me.js";
  "./pages/log/log/log.js";
  "./pages/log/login/login.js";
  "./pages/log/register/register.js";
  "./pages/tabBar/chats/chat-box.js";
  "./pages/tabBar/contacts/newVirtualFriend.js";
  "./pages/tabBar/contacts/newRealFriend.js";
  "./pages/tabBar/contacts/groupChat.js";
  "./pages/tabBar/me/accountSetting.js";
  "./pages/accountsetting/setnickname.js";
  "./pages/accountsetting/setaccount.js";
  "./pages/accountsetting/setpassword.js";
  "./pages/accountsetting/setmood.js";
  "./pages/accountsetting/setstatus.js";
  "./pages/accountsetting/setcal.js";
  "./pages/detail/userdetail.js";
  "./pages/detail/frienddetail.js";
  "./pages/tabBar/chats/chat-room.js";
}
const _sfc_main = {
  setup() {
    if (common_vendor.index.getStorageSync("token")) {
      const profileStore = stores_profile.useProfileStore();
      profileStore.initializeProfile();
    }
  },
  onLaunch: function() {
    console.warn("当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！");
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  app.use(common_vendor.createPinia());
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
