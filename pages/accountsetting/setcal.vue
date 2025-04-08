<template>
	<view class="register">
		<uni-forms class="form" :modelValue="dataForm" :rules="rules" validate-trigger="bind" label-width="80px">
			<uni-forms-item name="cal" label="日程">
				<textarea class="cal-textarea" v-model="dataForm.cal" placeholder="无日程" />
				<text class="tip-text">将你的日程告诉你的好友</text>
			</uni-forms-item>
			<button class="btn-submit" v-if="!isexist" @click="submit" type="primary">添加日程</button>
			<button class="btn-submit" v-if="isexist" @click="alter" type="primary">保存修改</button>
			<button class="btn-submit" @click="remove" type="warn">删除日程</button>
		</uni-forms>
	</view>
</template>


<script>
	export default {
		data() {
			return {
<<<<<<< HEAD
				isexist: uni.getStorageSync('cal') === 'null' ? false : true,
				dataForm: {
					cal: uni.getStorageSync('cal') === 'null' ? "" : uni.getStorageSync('cal')
=======
				isexist: uni.getStorageSync('cal') === '' ? false : true,
				dataForm: {
					cal: uni.getStorageSync('cal') === '' ? "" : uni.getStorageSync('cal')
>>>>>>> 9b9fc38 (last version)
				}
			}
		},
		onLoad() {
			this.dataForm = {
<<<<<<< HEAD
				cal: uni.getStorageSync('cal') === 'null' ? "" : uni.getStorageSync('cal')
=======
				cal: uni.getStorageSync('cal') === '' ? "" : uni.getStorageSync('cal')
>>>>>>> 9b9fc38 (last version)
			}
		},
		methods: {

			submit() {
				const regData = {
<<<<<<< HEAD
					content: this.dataForm.cal === "" ? 'null' : this.dataForm.cal,
=======
					content: this.dataForm.cal === "" ? '' : this.dataForm.cal,
>>>>>>> 9b9fc38 (last version)
					userIds: [uni.getStorageSync('id')]
				};

				uni.request({
					url: 'https://gal-chat-test-970e995e1901.herokuapp.com/api/profile/calendar',
					method: 'POST',
					header: {
						'Content-Type': 'application/json',
						'authorization': uni.getStorageSync('token')
					},
					data: regData,
					success: (res) => {
						const regInfo = res.data;

						if (regInfo.status) {
							uni.setStorageSync('cal', this.dataForm.cal);
							uni.showToast({
								title: '添加成功',
								icon: 'success',
								duration: 2000
							});
							uni.switchTab({
								url: '/pages/tabBar/me/me'
							});
						} else {
							uni.showModal({
								title: '添加失败',
								content: regInfo.message,
								showCancel: false
							});
						}
					},
					fail: (err) => {
						uni.showModal({
							title: '错误',
							content: '网络请求失败，请稍后重试',
							showCancel: false
						});
						console.error('请求失败：', err);
					}
				});
			},
			alter() {
				const regData = {
					content: this.dataForm.cal === "" ? 'null' : this.dataForm.cal,
					userIds: [uni.getStorageSync('id')]
				};

				uni.request({
					url: 'https://gal-chat-test-970e995e1901.herokuapp.com/api/profile/calendar',
					method: 'PUT',
					header: {
						'Content-Type': 'application/json',
						'authorization': uni.getStorageSync('token')
					},
					data: regData,
					success: (res) => {
						const regInfo = res.data;

						if (regInfo.status) {
							uni.setStorageSync('cal', this.dataForm.cal);
							uni.showToast({
								title: '修改成功',
								icon: 'success',
								duration: 2000
							});
							uni.switchTab({
								url: '/pages/tabBar/me/me'
							});
						} else {
							uni.showModal({
								title: '修改失败',
								content: regInfo.message,
								showCancel: false
							});
						}
					},
					fail: (err) => {
						uni.showModal({
							title: '错误',
							content: '网络请求失败，请稍后重试',
							showCancel: false
						});
						console.error('请求失败：', err);
					}
				});
			},
			remove() {
				uni.request({
					url: 'https://gal-chat-test-970e995e1901.herokuapp.com/api/profile/calendar',
					method: 'DELETE',
					header: {
						'Content-Type': 'application/json',
						'authorization': uni.getStorageSync('token')
					},

					success: (res) => {
						const regInfo = res.data;
				
						if (regInfo.status) {
							uni.setStorageSync('cal', 'null');
							uni.showToast({
								title: '删除成功',
								icon: 'success',
								duration: 2000
							});
							uni.switchTab({
								url: '/pages/tabBar/me/me'
							});
						} else {
							uni.showModal({
								title: '删除失败',
								content: regInfo.message,
								showCancel: false
							});
						}
					},
					fail: (err) => {
						uni.showModal({
							title: '错误',
							content: '网络请求失败，请稍后重试',
							showCancel: false
						});
						console.error('请求失败：', err);
					}
				});
				
				
			}


		}
	}
</script>

<style lang="scss" scoped>
	.cal-textarea {
		width: 100%;
		height: 120px;
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 4px;
		font-size: 14px;
	}

	.register {
		.title {
			padding-top: 150rpx;
			padding-bottom: 50rpx;
			color: royalblue;
			text-align: center;
			font-size: 60rpx;
			font-weight: 600;
		}

		.form {
			padding: 50rpx;

			.btn-submit {
				margin-top: 80rpx;
				border-radius: 50rpx;
			}
		}

		.nav-login {
			position: fixed;
			width: 100%;
			bottom: 100rpx;
			color: royalblue;
			text-align: center;
			font-size: 32rpx;
		}

		.btn-get-code {
			background-color: white;
			color: black;
			border: none;
			border-radius: 5px;
			padding: 10rpx 20rpx;
			font-size: 20rpx;
			cursor: pointer;
		}

		.tip-text {
			color: #666;
			font-size: 12px;
			white-space: nowrap;
		}



	}
</style>