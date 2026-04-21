"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      searchText: "",
      searchResults: [],
      searchTimer: null,
      hasSearched: false
    };
  },
  watch: {
    "searchText": {
      handler(newValue, oldValue) {
        if (this.searchTimer) {
          clearTimeout(this.searchTimer);
        }
        if (!this.searchText.trim()) {
          this.searchResults = [];
          this.hasSearched = false;
          return;
        }
        this.searchTimer = setTimeout(() => {
          this.searchUser();
        }, 500);
      }
    }
  },
  methods: {
    // 搜索用户
    async searchUser() {
      try {
        const res = await common_vendor.index.request({
          url: `https://gal-chat-test-970e995e1901.herokuapp.com/api/profile/byUsername/${this.searchText}`,
          method: "GET",
          header: {
            "Content-Type": "application/json",
            "authorization": common_vendor.index.getStorageSync("token")
          },
          success: (res2) => {
            const userInfo = res2.data;
            this.hasSearched = true;
            if (userInfo.status) {
              this.searchResults = userInfo.value;
              console.log(this.searchResults);
            } else {
              this.searchResults = [];
            }
          }
        });
      } catch (error) {
        this.searchResults = [];
        common_vendor.index.showToast({
          title: "网络错误",
          icon: "none"
        });
      }
    },
    showdetail() {
      common_vendor.index.navigateTo({
        url: `/pages/detail/userdetail?id=${this.searchResults.id}&username=${this.searchText}&nickname=${this.searchResults.nickname}`
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  _easycom_uni_search_bar2();
}
const _easycom_uni_search_bar = () => "../../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  _easycom_uni_search_bar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o(($event) => $data.searchText = $event),
    b: common_vendor.p({
      radius: "100",
      cancelButton: "none",
      placeholder: "点击搜索新的好友",
      modelValue: $data.searchText
    }),
    c: $data.searchResults.length != 0
  }, $data.searchResults.length != 0 ? {
    d: $data.searchResults.avatar,
    e: common_vendor.t($data.searchResults.username),
    f: common_vendor.o(($event) => $options.showdetail())
  } : {}, {
    g: $data.searchText && $data.searchResults.length === 0
  }, $data.searchText && $data.searchResults.length === 0 ? {} : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
