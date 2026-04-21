"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      id: "",
      nickname: "",
      username: "",
      mood: "",
      status: ""
    };
  },
  onLoad(options) {
    this.id = options.id;
    this.nickname = options.nickname;
    this.username = options.username;
    this.chatId = options.chatId;
    if (options.mood === "null" || options.mood === "添加心情")
      this.mood = "无心情";
    else
      this.mood = options.mood;
    if (options.status === "null" || options.status === "添加状态")
      this.status = "无状态";
    else
      this.status = options.status;
  },
  methods: {
    navigateToChatRoom() {
      common_vendor.index.navigateTo({
        url: `/pages/tabBar/chats/chat-room?chatId=${this.chatId}`
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$1,
    b: common_vendor.t($data.nickname),
    c: common_vendor.t($data.username),
    d: common_vendor.t($data.mood),
    e: common_vendor.o((...args) => _ctx.onMoodTap && _ctx.onMoodTap(...args)),
    f: common_vendor.t($data.status),
    g: common_vendor.o((...args) => _ctx.onStatusTap && _ctx.onStatusTap(...args)),
    h: common_vendor.o(($event) => $options.navigateToChatRoom())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-88dc242b"]]);
wx.createPage(MiniProgramPage);
