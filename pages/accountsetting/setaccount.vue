<template>
	<view class="register">
		<uni-forms class="form" :modelValue="dataForm" :rules="rules" validate-trigger="bind" label-width="80px">
			<uni-forms-item name="userName" label="用户名">
<<<<<<< HEAD
				<uni-easyinput type="text" v-model="dataForm.userName" placeholder="用户名" />
=======
				<uni-easyinput type="text" v-model="dataForm.username" placeholder="用户名" />
>>>>>>> 9b9fc38 (last version)
				<text class="tip-text">用户名是账号的唯一凭证，用于登录，请牢记</text>
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
<<<<<<< HEAD
				olduserName: uni.getStorageSync('userName') ?? '',
				dataForm: {
					userName: uni.getStorageSync('userName') ?? ''
				},
				rules: {
					userName: {
=======
				oldusername: uni.getStorageSync('username') ?? '',
				dataForm: {
					username: uni.getStorageSync('username') ?? ''
				},
				rules: {
					username: {
>>>>>>> 9b9fc38 (last version)
						rules: [{
							required: true,
							errorMessage: '请输入用户名',
						}, {
							minLength: 6, // 添加最小长度限制
							errorMessage: '用户名不能少于6个字符'
						}]
					}
				}
			}
		},
		onLoad() {
			this.dataForm = {
<<<<<<< HEAD
				userName: uni.getStorageSync('userName')
=======
				username: uni.getStorageSync('username')
>>>>>>> 9b9fc38 (last version)
			}
		},
		watch: {
			// 深度监听整个对象
			dataForm: {
				handler(newValue, oldValue) {
<<<<<<< HEAD
					if (this.dataForm.userName != this.olduserName && this.dataForm.userName != '')
=======
					if (this.dataForm.username != this.oldusername && this.dataForm.username != '')
>>>>>>> 9b9fc38 (last version)
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
<<<<<<< HEAD
					username: this.dataForm.userName,
=======
					username: this.dataForm.username,
>>>>>>> 9b9fc38 (last version)
					nickname: uni.getStorageSync('nickname'),
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
<<<<<<< HEAD
							uni.setStorageSync('userName', this.dataForm.userName);
=======
							uni.setStorageSync('username', this.dataForm.username);
>>>>>>> 9b9fc38 (last version)
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