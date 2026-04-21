<template>
	<view class="container">
		<!-- 头像和昵称、账号 -->
		<view class="top-section">
			<view class="head-sculpture">
<<<<<<< HEAD
				<image src="/static/uni.png"></image>
=======
				<image src="/static/head.png"></image>
>>>>>>> 9b9fc38 (last version)
			</view>
			<view class="right-section">
				<view class="nickname"> 昵称：{{ nickname }}</view>
				<view class="username"> 用户名：{{ username }}</view>
			</view>
		</view>

		<!-- 心情和状态 -->
		<view class="middle-section">
			<button class="mood" @tap="onMoodTap">{{ mood }}</button>
			<button class="status" @tap="onStatusTap">{{ status }}</button>
		</view>

		<!-- 其他设置选项 -->
		<view class="settings-section">
			<button class="setting-item" @tap="onAccountSettingTap">账号设置</button>
			<button class="setting-item" @tap="onScheduleTap">我的日程</button>
<<<<<<< HEAD
			<button class="setting-item" @tap="onPicturesTap">我的图片</button>
			<button class="setting-item" @tap="onPrivacyTap">隐私设置</button>
=======
	<!-- 		<button class="setting-item" @tap="onPicturesTap">我的图片</button>
			<button class="setting-item" @tap="onPrivacyTap">隐私设置</button> -->
>>>>>>> 9b9fc38 (last version)
		</view>

		<!-- 登出按钮 -->
		<view class="logout-section">
			<button class="logout-button" @tap="onLogoutTap">登出</button>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'ProfilePage',
		data() {
			return {
				id: uni.getStorageSync('id') ?? '',
				nickname: uni.getStorageSync('nickname') ?? '',
				username: uni.getStorageSync('username') ?? '',
				mood: uni.getStorageSync('mood') ?? '',
				status: uni.getStorageSync('status') ?? '',
<<<<<<< HEAD
				calender: ''
=======
				calendar: ''
>>>>>>> 9b9fc38 (last version)
			}
		},

		async onShow() {
			try {
				const res = await new Promise((resolve, reject) => {
					uni.request({
						url: 'https://gal-chat-test-970e995e1901.herokuapp.com/api/profile',
						method: 'GET',
						header: {
							'Content-Type': 'application/json',
							'authorization': uni.getStorageSync('token') // 使用uni的存储API
						},
						success: (res) => resolve(res),
						fail: (err) => reject(err)
					});
				});

				const profile = res.data;

				// 更新数据
				this.id = profile.value.id;
				this.nickname = profile.value.nickname;
				this.username = profile.value.username;
				this.mood = profile.value.mood ?? "添加心情"; // 使用空值合并运算符
				this.status = profile.value.status ?? "添加状态";

<<<<<<< HEAD
=======
				console.log(profile.value.calendar)
				this.calendar = profile.value.calendar ?? '';
				console.log(this.calendar);

				if (this.calendar === '')
					this.calendar = '';
				else
					this.calendar = this.calendar.content;

				console.log(this.calendar);
				console.log(uni.getStorageSync('cal'));

>>>>>>> 9b9fc38 (last version)
				// 保存到本地
				uni.setStorageSync('id', this.id)
				uni.setStorageSync('nickname', this.nickname)
				uni.setStorageSync('username', this.username)
				uni.setStorageSync('mood', this.mood)
				uni.setStorageSync('status', this.status)
<<<<<<< HEAD
=======
				uni.setStorageSync('cal', this.calendar)
>>>>>>> 9b9fc38 (last version)


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
			onMoodTap() {
				uni.navigateTo({
					url: '/pages/accountsetting/setmood'
				});
			},
			onStatusTap() {
				uni.navigateTo({
					url: '/pages/accountsetting/setstatus'
				});
			},
			onAccountSettingTap() {
				uni.navigateTo({
					url: '/pages/tabBar/me/accountSetting'
				});
			},
			onScheduleTap() {
				uni.navigateTo({
					url: '/pages/accountsetting/setcal'
				});
			},
			onPicturesTap() {
				// 我的图片点击事件
				uni.showToast({
					title: 'Tapped on My pictures',
					icon: 'none',
				});
			},
			onPrivacyTap() {
				// 隐私管理点击事件
				uni.showToast({
					title: 'Tapped on Privacy management',
					icon: 'none',
				});
			},
			onLogoutTap() {
				uni.removeStorageSync('token');
				uni.removeStorageSync('refresh');
				// 登出点击事件
				uni.redirectTo({
					url: '/pages/log/log/log'
				});
			},
		},
	};
</script>






<style scoped>
	.container {
		padding: 20px;
		background-color: #f5f5f5;
	}

	.top-section {
		display: flex;
		margin-bottom: 20px;
		align-items: center;
	}

	.head-sculpture {
		width: 80px;
		height: 80px;
	}

	.head-sculpture image {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		/* 如果需要圆形头像 */
		object-fit: cover;
		/* 确保图片填充整个容器且不变形 */
	}


	.right-section {
		margin-left: 20px;
	}

	.nickname,
	.account {
		font-size: 16px;
		margin-bottom: 5px;
		color: #333;
	}

	button {
		width: 100%;
		height: 50px;
		background-color: #4CAF50;
		/* 新的默认背景色 */
		border: none;
		border-radius: 5px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		margin-bottom: 10px;
		color: white;
		/* 按钮文字颜色 */
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	button:hover {
		background-color: #45a049;
		/* 悬停时的背景色 */
	}

	button:active {
		background-color: #3e8e41;
		/* 点击时的背景色 */
	}

	/* 单独修改登出按钮背景色 */
	.logout-button {
		background-color: #f44336;
		/* 红色背景 */
	}

	.logout-button:hover {
		background-color: #d32f2f;
		/* 悬停时的深红色 */
	}

	.logout-button:active {
		background-color: #c62828;
		/* 点击时的深红色 */
	}

	.middle-section {
		display: flex;
		justify-content: space-between;
		margin-bottom: 20px;
	}

	.mood,
	.status {
		width: 48%;
		height: 50px;
		background-color: #2196F3;
		/* 给心情和状态按钮添加背景色 */
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 14px;
	}

	.mood:hover,
	.status:hover {
		background-color: #1976D2;
		/* 悬停时的背景色 */
	}

	.mood:active,
	.status:active {
		background-color: #1565C0;
		/* 点击时的背景色 */
	}

	.settings-section {
		margin-bottom: 20px;
	}

	.setting-item {
		width: 100%;
		height: 50px;
		background-color: #FF9800;
		/* 给所有设置按钮背景色 */
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		margin-bottom: 10px;
		border: none;
		border-radius: 5px;
		transition: background-color 0.3s ease;
	}

	.setting-item:hover {
		background-color: #FB8C00;
		/* 悬停时的背景色 */
	}

	.setting-item:active {
		background-color: #F57C00;
		/* 点击时的背景色 */
	}
</style>