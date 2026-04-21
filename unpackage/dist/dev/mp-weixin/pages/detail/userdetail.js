"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      isfriend: false,
      id: "",
      nickname: "",
      username: ""
    };
  },
  onLoad(options) {
    this.id = options.id, this.nickname = options.nickname, this.username = options.username;
  },
  methods: {
    onAddTap() {
      const addData = {
        contactUserId: this.id,
        contactType: "real"
      };
      console.log(this.id);
      common_vendor.index.request({
        url: `https://gal-chat-test-970e995e1901.herokuapp.com/api/contacts`,
        method: "POST",
        header: {
          "Content-Type": "application/json",
          "authorization": common_vendor.index.getStorageSync("token")
        },
        data: addData,
        success: (res) => {
          const resData = res.data;
          if (resData.status)
            this.isfriend = true;
          common_vendor.index.showToast({
            title: resData.message,
            icon: "none"
          });
        }
      });
    }
  }
  // async onShow() {
  // 	try {
  // 		const res = await new Promise((resolve, reject) => {
  // 			uni.request({
  // 				url: `https://gal-chat-test-970e995e1901.herokuapp.com/api/profile/byUsername/${this.username}`,
  // 				method: 'GET',
  // 				header: {
  // 					'Content-Type': 'application/json',
  // 					'authorization': uni.getStorageSync('token')
  // 				},
  // 				success: (res) => resolve(res),
  // 				fail: (err) => reject(err)
  // 			});
  // 		});
  // 		const profile = res.data;
  // 		// 更新数据
  // 		this.nickname = profile.value.nickname;
  // 		this.username = profile.value.username;
  // 	} catch (error) {
  // 		uni.showModal({
  // 			title: '错误',
  // 			content: '获取用户信息失败',
  // 			showCancel: false,
  // 		});
  // 	}
  // },
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$1,
    b: common_vendor.t($data.nickname),
    c: common_vendor.t($data.username),
    d: common_vendor.t($data.isfriend ? "已添加" : "添加好友"),
    e: common_vendor.o((...args) => $options.onAddTap && $options.onAddTap(...args)),
    f: $data.isfriend
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-97e00947"]]);
wx.createPage(MiniProgramPage);
