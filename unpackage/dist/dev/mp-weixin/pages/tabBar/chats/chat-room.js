"use strict";
const common_vendor = require("../../../common/vendor.js");
const stores_profile = require("../../../stores/profile.js");
const _sfc_main = {
  data() {
    return {
      profile: null,
      inputMessage: "",
      // 输入框消息
      scrollTop: 0,
      // 滚动条位置
      messages: null
    };
  },
  onLoad(options) {
    this.chatId = options.chatId;
    this.initializeProfile();
  },
  methods: {
    async initializeProfile() {
      const store = stores_profile.useProfileStore();
      this.profile = store.profile;
      if (this.profile) {
        await this.fetchInitialMessages();
        this.setupSocketConnection();
      } else {
        console.error("Profile not loaded. Please check authentication.");
      }
    },
    async fetchInitialMessages() {
      try {
        const messages = await this.fetchNewMessages(1);
        this.messages = messages.value;
        this.scrollToBottom();
      } catch (error) {
        console.error("Error fetching initial messages:", error);
      }
    },
    async fetchNewMessages(page = 1) {
      try {
        const res = await new Promise((resolve, reject) => {
          common_vendor.index.request({
            url: `https://gal-chat-test-970e995e1901.herokuapp.com/api/chat/messages/${this.chatId}?page=${page}&limit=30`,
            method: "GET",
            header: {
              "Content-Type": "application/json",
              authorization: common_vendor.index.getStorageSync("token")
            },
            success: (res2) => resolve(res2),
            fail: (err) => reject(err)
          });
        });
        return res.data;
      } catch (err) {
        console.error("Error fetching messages:", err);
        return {
          data: []
        };
      }
    },
    // 发送消息
    sendMessage() {
      if (!this.inputMessage.trim())
        return;
      this.socket.emit("sendMessage", {
        chatId: this.chatId,
        userId: this.profile.id,
        message: this.inputMessage.trim()
      });
      this.inputMessage = "";
      this.$nextTick(() => {
        this.scrollToBottom();
      });
    },
    // 滚动到底部
    scrollToBottom() {
      const query = common_vendor.index.createSelectorQuery().in(this);
      query.select(".message-list").boundingClientRect((data) => {
        this.scrollTop = data.height;
      }).exec();
    },
    // 加载更多消息
    async loadMoreMessages() {
      if (this.messages.totalPages > this.messages.currentPage) {
        try {
          const newMessages = await this.fetchNewMessages(this.messages.currentPage + 1);
          const prevMessages = [...this.messages.data];
          this.messages = newMessages.value;
          this.messages.data = [...this.messages.data, ...prevMessages];
        } catch (error) {
          console.error("Error loading more messages:", error);
        }
      }
    },
    setupSocketConnection() {
      try {
        this.socket = common_vendor.lookup("https://gal-chat-test-970e995e1901.herokuapp.com");
        this.socket.emit("joinChat", this.chatId, this.profile.id);
        this.socket.on("newMessage", (newMessage) => {
          this.messages.data = [...this.messages.data, newMessage];
          this.scrollToBottom();
        });
      } catch (error) {
        console.error("Socket connection error:", error);
      }
    }
  },
  onUnload() {
    if (this.socket) {
      this.socket.off("receive_message");
      this.socket.disconnect();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  return {
    a: common_vendor.f(((_a = $data.messages) == null ? void 0 : _a.data) || [], (item, index, i0) => {
      var _a2;
      return {
        a: item.avatar,
        b: common_vendor.t(item.sender),
        c: common_vendor.t(item.message),
        d: index,
        e: common_vendor.n((item == null ? void 0 : item.userId) === ((_a2 = $data.profile) == null ? void 0 : _a2.id) ? "message-right" : "message-left")
      };
    }),
    b: $data.scrollTop,
    c: common_vendor.o((...args) => $options.loadMoreMessages && $options.loadMoreMessages(...args)),
    d: common_vendor.o((...args) => $options.sendMessage && $options.sendMessage(...args)),
    e: $data.inputMessage,
    f: common_vendor.o(($event) => $data.inputMessage = $event.detail.value),
    g: $data.inputMessage.length > 0 ? 1 : "",
    h: common_vendor.o((...args) => $options.sendMessage && $options.sendMessage(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
