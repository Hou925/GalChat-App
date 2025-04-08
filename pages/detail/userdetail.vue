<template>
	<view class="container">
		<!-- 头像和昵称、账号 -->
		<view class="top-section">
			<view class="head-sculpture">
<<<<<<< HEAD
				<image src="/static/me.jpg"></image>
=======
				<image src="/static/head.png"></image>
>>>>>>> 9b9fc38 (last version)
			</view>
			<view class="right-section">
				<view class="nickname">昵称：{{ nickname }}</view>
				<view class="username">用户名：{{ username }}</view>
			</view>
		</view>

		<!-- 添加按钮 -->
		<view class="add-friend">
			<button class="add-button" @tap="onAddTap" :disabled="isfriend"> {{ isfriend ? '已添加' : '添加好友' }}</button>
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				isfriend: false,
				id: '',
				nickname: '',
				username: '',
			}
		},
		onLoad(options) {
			this.id = options.id,
				this.nickname = options.nickname,
				this.username = options.username
		},
		methods: {
			onAddTap() {
				const addData = {
					contactUserId: this.id,
					contactType: 'real'
				};
				console.log(this.id);
				uni.request({
					url: `https://gal-chat-test-970e995e1901.herokuapp.com/api/contacts`,
					method: 'POST',
					header: {
						'Content-Type': 'application/json',
						'authorization': uni.getStorageSync('token')
					},
					data: addData,
					success: (res) => {

						const resData = res.data;
						if (resData.status)
							this.isfriend = true;
						uni.showToast({
							title: resData.message,
							icon: 'none'
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




	}
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