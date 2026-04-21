"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      searchText: "",
      loading: false,
      chats: [
        // {
        // 	id: 1,
        // 	showName: '张三AI',
        // 	lastMessage: '收到你的消息了！',
        // 	timestamp: '10:30',
        // 	avatar: '/static/c3.png',
        // 	unreadCount: 0,
        // 	delete: false
        // },
        // {
        // 	id: 2,
        // 	showName: '李四的群',
        // 	lastMessage: '送他们房子',
        // 	timestamp: '09:13',
        // 	avatar: '/static/c4.png',
        // 	unreadCount: 0,
        // 	delete: false
        // },
        // {
        // 	id: 3,
        // 	showName: '王五',
        // 	lastMessage: 'Niko, hello~',
        // 	timestamp: '昨天',
        // 	avatar: '/static/c5.png',
        // 	unreadCount: 0,
        // 	delete: false
        // }
      ],
      menu: {
        show: false,
        style: "",
        chatIdx: -1,
        isTouchMove: false,
        items: [
          {
            key: "DELETE",
            name: "删除该聊天",
            icon: "trash",
            color: "#e64e4e"
          },
          {
            key: "TOP",
            name: "置顶该聊天",
            icon: "arrow-up"
          }
        ]
      }
    };
  },
  methods: {
    navigateToChatRoom(chatId) {
      if (chatId) {
        common_vendor.index.navigateTo({
          url: `/pages/tabBar/chats/chat-room?chatId=${chatId}`
        });
      }
    },
    async fetchChats() {
      const res = await new Promise((resolve, reject) => {
        common_vendor.index.request({
          url: `https://gal-chat-test-970e995e1901.herokuapp.com/api/chat`,
          method: "GET",
          header: {
            "Content-Type": "application/json",
            "authorization": common_vendor.index.getStorageSync("token")
          },
          success: (res2) => resolve(res2),
          fail: (err) => reject(err)
        });
      });
      return res.data;
    },
    onSelectMenu(item, chatIdx) {
      switch (item.key) {
        case "DELETE":
          this.removeChat(chatIdx);
          break;
        case "TOP":
          this.moveToTop(chatIdx);
          break;
      }
      this.menu.show = false;
    },
    removeChat(chatIdx) {
      this.chats[chatIdx].delete = true;
    },
    moveToTop(chatIdx) {
      const chat = this.chats[chatIdx];
      this.chats.splice(chatIdx, 1);
      this.chats.unshift(chat);
    },
    isShowChat(chat) {
      if (chat.delete) {
        return false;
      }
      return !this.searchText || chat.showName.includes(this.searchText);
    },
    refreshUnreadBadge() {
      if (this.unreadCount > 0) {
        common_vendor.index.setTabBarBadge({
          index: 0,
          text: this.unreadCount + ""
        });
      } else {
        common_vendor.index.removeTabBarBadge({
          index: 0,
          complete: () => {
          }
        });
      }
    }
  },
  computed: {
    unreadCount() {
      let count = 0;
      this.chats.forEach((chat) => {
        if (!chat.delete) {
          count += chat.unreadCount;
        }
      });
      return count;
    }
  },
  watch: {
    unreadCount(newCount, oldCount) {
      this.refreshUnreadBadge();
    }
  },
  async onShow() {
    this.refreshUnreadBadge();
    this.loading = true;
    console.log("asdasdasd");
    const chats = await this.fetchChats();
    this.loading = false;
    this.chats = chats.value;
    console.log(chats);
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_chat_item2 = common_vendor.resolveComponent("chat-item");
  const _easycom_pop_menu2 = common_vendor.resolveComponent("pop-menu");
  (_easycom_uni_search_bar2 + _easycom_chat_item2 + _easycom_pop_menu2)();
}
const _easycom_uni_search_bar = () => "../../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_chat_item = () => "../../../components/chat-item/chat-item.js";
const _easycom_pop_menu = () => "../../../components/pop-menu/pop-menu.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_chat_item + _easycom_pop_menu)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.loading
  }, $data.loading ? {} : {}, {
    b: common_vendor.o(($event) => $data.searchText = $event),
    c: common_vendor.p({
      radius: "100",
      cancelButton: "none",
      placeholder: "搜索",
      modelValue: $data.searchText
    }),
    d: !$data.loading && $data.chats.length == 0
  }, !$data.loading && $data.chats.length == 0 ? {} : {
    e: common_vendor.f($data.chats, (chat, index, i0) => {
      return common_vendor.e({
        a: $options.isShowChat(chat)
      }, $options.isShowChat(chat) ? {
        b: common_vendor.o(($event) => $options.navigateToChatRoom(chat.id), index),
        c: "d15b82ac-2-" + i0 + "," + ("d15b82ac-1-" + i0),
        d: common_vendor.p({
          chat,
          index,
          active: $data.menu.chatIdx == index,
          clickable: true
        }),
        e: common_vendor.o(($event) => $options.onSelectMenu($event, index), index),
        f: "d15b82ac-1-" + i0,
        g: common_vendor.p({
          items: $data.menu.items
        })
      } : {}, {
        h: index
      });
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d15b82ac"]]);
wx.createPage(MiniProgramPage);
