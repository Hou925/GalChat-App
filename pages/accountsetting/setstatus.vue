<template>
	<view class="register">
		<uni-forms class="form" :modelValue="dataForm" :rules="rules" validate-trigger="bind" label-width="80px">
			<uni-forms-item name="status" label="状态">
				<uni-easyinput type="text" v-model="dataForm.status" placeholder="无状态" />
				<text class="tip-text">将你的状态告诉你的好友</text>
			</uni-forms-item>
			<button class="btn-submit" @click="submit" type="primary">保存</button>
		</uni-forms>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataForm: {
					status: uni.getStorageSync('status') === "添加状态" ? "" : uni.getStorageSync('status')
				}
			}
		},
		onLoad() {
			this.dataForm = {
				status: uni.getStorageSync('status') === "添加状态" ? "" : uni.getStorageSync('status')
			}
		},
		methods: {
			submit() {
				const regData = {
					status: this.dataForm.status === "" ? "添加状态" : this.dataForm.status
				};

				uni.request({
					url: 'https://gal-chat-test-970e995e1901.herokuapp.com/api/profile/status',
					method: 'PUT',
					header: {
						'Content-Type': 'application/json',
						'authorization': uni.getStorageSync('token')
					},
					data: regData,
					success: (res) => {
						const regInfo = res.data;

						if (regInfo.status) {
							uni.setStorageSync('status', this.dataForm.status);
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


		}
	}
</script>

<style lang="scss" scoped>
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

			&[disabled] {
				background-color: white;
				color: grey;
			}
		}

		.tip-text {
			color: #666;
			font-size: 12px;
			white-space: nowrap;
		}

	}
</style>