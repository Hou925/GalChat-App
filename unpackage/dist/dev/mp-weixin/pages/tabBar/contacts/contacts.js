"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      listData: [
        {
          title: "新的虚拟朋友",
          thumb: "/static/logo.png",
          url: "/pages/tabBar/contacts/newVirtualFriend"
        },
        {
          title: "新的真实朋友",
          thumb: "/static/logo.png",
          url: "/pages/tabBar/contacts/newRealFriend"
        },
        {
          title: "群聊",
          thumb: "/static/logo.png",
          url: "/pages/tabBar/contacts/groupChat"
        },
        {
          title: "我的AI",
          thumb: "/static/logo.png",
          url: "/pages/tabBar/contacts/groupChat"
        }
      ],
      friendData: []
    };
  },
  async onShow() {
    try {
      const res = await new Promise((resolve, reject) => {
        common_vendor.index.request({
          url: "https://gal-chat-test-970e995e1901.herokuapp.com/api/contacts",
          method: "GET",
          header: {
            "Content-Type": "application/json",
            "authorization": common_vendor.index.getStorageSync("token")
          },
          success: (res2) => resolve(res2),
          fail: (err) => reject(err)
        });
      });
      const profile = res.data;
      this.friendData = profile.value;
      console.log(this.friendData);
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
    // 点击列表项跳转到指定页面
    navigateTo(url) {
      common_vendor.index.navigateTo({
        url
      });
    },
    // 点击好友跳转到好友详情页面
    navigateToFriend(contact) {
      const friend = contact.contactprofile;
      console.log(friend);
      common_vendor.index.navigateTo({
        url: `/pages/detail/frienddetail?chatId=${contact.chatId}&username=${friend.username}&id=${friend.id}&mood=${friend.mood}&nickname=${friend.nickname}&status=${friend.status}`
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_search_bar2 + _easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_search_bar = () => "../../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_list_item = () => "../../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_uni_list_item + _easycom_uni_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => _ctx.searchText = $event),
    b: common_vendor.p({
      radius: "100",
      cancelButton: "none",
      placeholder: "搜索",
      modelValue: _ctx.searchText
    }),
    c: common_vendor.f($data.listData, (item, index, i0) => {
      return {
        a: index,
        b: common_vendor.o(($event) => $options.navigateTo(item.url), index),
        c: "32429930-2-" + i0 + ",32429930-1",
        d: common_vendor.p({
          title: item.title,
          thumb: item.thumb,
          clickable: true
        })
      };
    }),
    d: common_vendor.p({
      title: "我的好友",
      customStyle: {
        backgroundColor: "#f5f5f5"
      }
    }),
    e: common_vendor.f($data.friendData, (item, index, i0) => {
      return {
        a: index,
        b: common_vendor.o(($event) => $options.navigateToFriend(item), index),
        c: "32429930-5-" + i0 + ",32429930-3",
        d: common_vendor.p({
          title: item.contactprofile.username,
          thumb: item.contactprofile.avatar,
          clickable: true
        })
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
