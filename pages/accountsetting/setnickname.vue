<template>
	<view class="register">
		<uni-forms class="form" :modelValue="dataForm" :rules="rules" validate-trigger="bind" label-width="80px">
			<uni-forms-item name="nickName" label="昵称">
				<uni-easyinput type="text" v-model="dataForm.nickName" placeholder="昵称" />
				<text class="tip-text">一个好的昵称可以让好友轻松记住你</text>
			</uni-forms-item>
			<button class="btn-submit" :disabled="!isValid" @click="submit" type="primary">保存</button>
		</uni-forms>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isValid: false,
				oldnickname: uni.getStorageSync('nickname') ?? '',
				dataForm: {
					nickName: uni.getStorageSync('nickname') ?? ''
				},
				rules: {
					nickName: {
						rules: [{
							required: true,
							errorMessage: '请输入昵称',
						}]
					}
				}
			}
		},
		onLoad() {
			this.dataForm = {
				nickName: uni.getStorageSync('nickname')
			}
		},
		watch: {
			// 深度监听整个对象
			dataForm: {
				handler(newValue, oldValue) {
					if (this.dataForm.nickName != this.oldnickname && this.dataForm.nickName != '')
						this.isValid = true
					else
						this.isValid = false
				},
				deep: true // 深度监听
			}
		},
		methods: {
			submit() {
				const regData = {
					username: uni.getStorageSync('username'),
					nickname: this.dataForm.nickName,
					password: uni.getStorageSync('password'),
					confirmPassword: uni.getStorageSync('password')
				};

				uni.request({
					url: 'https://gal-chat-test-970e995e1901.herokuapp.com/api/profile/update',
					method: 'PUT',
					header: {
						'Content-Type': 'application/json',
						'authorization': uni.getStorageSync('token')
					},
					data: regData,
					success: (res) => {
						const regInfo = res.data;

						if (regInfo.status) {
							uni.setStorageSync('nickname', this.dataForm.nickName);
							uni.showToast({
								title: '修改成功',
								icon: 'success',
								duration: 2000
							});
							uni.navigateBack();
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