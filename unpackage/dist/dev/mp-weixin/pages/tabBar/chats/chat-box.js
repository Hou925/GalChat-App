"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      inputMessage: "",
      // 输入框消息
      scrollTop: 0,
      // 滚动条位置
      messageList: [
        {
          id: 1,
          content: "你好！",
          isSelf: false,
          avatar: "/static/c1.png",
          time: /* @__PURE__ */ new Date()
        },
        {
          id: 2,
          content: "你好！很高兴见到你！",
          isSelf: true,
          avatar: "/static/c2.png",
          time: /* @__PURE__ */ new Date()
        }
      ]
    };
  },
  methods: {
    // 发送消息
    sendMessage() {
      if (!this.inputMessage.trim())
        return;
      this.messageList.push({
        id: this.messageList.length + 1,
        content: this.inputMessage,
        isSelf: true,
        avatar: "/static/c2.png",
        time: /* @__PURE__ */ new Date()
      });
      this.inputMessage = "";
      this.$nextTick(() => {
        this.scrollToBottom();
      });
      setTimeout(() => {
        this.messageList.push({
          id: this.messageList.length + 1,
          content: "收到你的消息了！",
          isSelf: false,
          avatar: "/static/c1.png",
          time: /* @__PURE__ */ new Date()
        });
        this.scrollToBottom();
      }, 1e3);
    },
    // 滚动到底部
    scrollToBottom() {
      const query = common_vendor.index.createSelectorQuery().in(this);
      query.select(".message-list").boundingClientRect((data) => {
        this.scrollTop = data.height;
      }).exec();
    },
    // 加载更多消息
    loadMoreMessages() {
      console.log("加载更多消息");
    }
  },
  mounted() {
    this.scrollToBottom();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.messageList, (item, index, i0) => {
      return {
        a: item.avatar,
        b: common_vendor.t(item.content),
        c: index,
        d: common_vendor.n(item.isSelf ? "message-right" : "message-left")
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
