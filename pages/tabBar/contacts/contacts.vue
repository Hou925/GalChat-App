<template>
	<view class="container">
<<<<<<< HEAD
		<view class="nav-bar">
			<view class="nav-search">
				<uni-search-bar radius="100" v-model="searchText" cancelButton="none" placeholder="搜索"></uni-search-bar>
			</view>
		</view>
=======
		<!-- <view class="nav-bar">
			<view class="nav-search">
				<uni-search-bar radius="100" v-model="searchText" cancelButton="none" placeholder="搜索"></uni-search-bar>
			</view>
		</view> -->
>>>>>>> 9b9fc38 (last version)

		<view>
			<uni-list>
				<uni-list-item v-for="(item, index) in listData" :key="index" :title="item.title" :thumb="item.thumb"
					clickable @click="navigateTo(item.url)" />
			</uni-list>
		</view>

		<view>
			<uni-list>
				<uni-list-item title="我的好友" :customStyle="{ backgroundColor: '#f5f5f5'}" />
				<uni-list-item v-for="(item, index) in friendData" :key="index" :title="item.contactprofile.username"
<<<<<<< HEAD
					:thumb="item.contactprofile.avatar" clickable @click="navigateToFriend(item)" />
=======
					thumb="/static/head.png" clickable @click="navigateToFriend(item)" />
>>>>>>> 9b9fc38 (last version)
			</uni-list>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				listData: [{
						title: '新的虚拟朋友',
						thumb: '/static/logo.png',
						url: '/pages/tabBar/contacts/newVirtualFriend'
					},
					{
						title: '新的真实朋友',
						thumb: '/static/logo.png',
						url: '/pages/tabBar/contacts/newRealFriend'
					},
<<<<<<< HEAD
					{
						title: '群聊',
						thumb: '/static/logo.png',
						url: '/pages/tabBar/contacts/groupChat'
					},
=======
					// {
					// 	title: '群聊',
					// 	thumb: '/static/logo.png',
					// 	url: '/pages/tabBar/contacts/groupChat'
					// },
>>>>>>> 9b9fc38 (last version)
					{
						title: '我的AI',
						thumb: '/static/logo.png',
						url: '/pages/tabBar/ai/contacts'
					}
				],
				friendData: []

			}
		},

		async onShow() {
			try {
				const res = await new Promise((resolve, reject) => {
					uni.request({
						url: 'https://gal-chat-test-970e995e1901.herokuapp.com/api/contacts',
						method: 'GET',
						header: {
							'Content-Type': 'application/json',
							'authorization': uni.getStorageSync('token')
						},
						success: (res) => resolve(res),
						fail: (err) => reject(err)
					});
				});

				const profile = res.data;

				this.friendData = profile.value;
				console.log(this.friendData)


			} catch (error) {
				uni.showModal({
					title: '错误',
					content: '获取用户信息失败，请重新登录',
					showCancel: false,
					success: () => {
						uni.redirectTo({
							url: '/pages/log/log/log'
						});
					}
				});
			}
		},

		methods: {
			// 点击列表项跳转到指定页面
			navigateTo(url) {
				uni.navigateTo({
					url: url,
				})
			},

			// 点击好友跳转到好友详情页面
			navigateToFriend(contact) {
				const friend = contact.contactprofile
<<<<<<< HEAD
				console.log(friend);
				uni.navigateTo({
					url: `/pages/detail/frienddetail?chatId=${contact.chatId}&username=${friend.username}&id=${friend.id}&mood=${friend.mood}&nickname=${friend.nickname}&status=${friend.status}`,
=======
				const cal = friend.calendar ?? ''
				console.log(friend)
				uni.navigateTo({
					url: `/pages/detail/frienddetail?chatId=${contact.chatId}&username=${friend.username}&id=${friend.id}&mood=${friend.mood}&nickname=${friend.nickname}&status=${friend.status}&calendar=${cal}`,
>>>>>>> 9b9fc38 (last version)
				});
			},
		},
	};
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		height: 100vh;
		/* 让主容器占满整个页面 */
	}

	/* 顶部快捷操作样式 */
	.top-actions {
		background-color: #ffffff;
		border-bottom: 1rpx solid #ccc;
	}

	/* 好友列表容器样式 */
	.friend-list-container {
		flex: 1;
		/* 让好友列表填充剩余空间 */
		padding: 10rpx;
	}

	/* 好友项样式 */
	.friend-item {
		display: flex;
		align-items: center;
		padding: 10rpx 0;
		border-bottom: 1rpx solid #f0f0f0;
		cursor: pointer;
	}

	.avatar {
		width: 60rpx;
		height: 60rpx;
		border-radius: 50%;
		margin-right: 20rpx;
	}

	.friend-name {
		font-size: 32rpx;
	}

	.nav-bar {
		padding: 2rpx 10rpx;
		display: flex;
		align-items: center;
		background-color: white;

		.nav-search {
			flex: 1;
		}

		.nav-add {
			cursor: pointer;
		}
	}
</style>