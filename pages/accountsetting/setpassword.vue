<template>
	<view class="register">
		<uni-forms class="form" :modelValue="dataForm" :rules="rules" validate-trigger="bind" label-width="80px">
			<uni-forms-item name="oldpassword" label="旧密码">
				<uni-easyinput type="password" v-model="dataForm.oldpassword" placeholder="旧密码" />
			</uni-forms-item>
			<uni-forms-item name="password" label="新密码">
				<uni-easyinput type="password" v-model="dataForm.password" placeholder="新密码" />
			</uni-forms-item>
			<uni-forms-item name="confirmPassword" label="确认密码">
				<uni-easyinput type="password" v-model="dataForm.confirmPassword" placeholder="确认密码" />
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
				dataForm: {
					oldpassword: '',
					password: '',
					confirmPassword: ''
				},
				rules: {
					oldpassword: {
						rules: [{
							required: true,
							errorMessage: '请输入旧密码',
						}]
					},
					password: {
						rules: [{
							required: true,
							errorMessage: '请输入新密码',
						}, {
							minLength: 6, // 添加最小长度限制
							errorMessage: '密码不能少于6个字符'
						}]
					},
					confirmPassword: {
						rules: [{
							required: true,
							errorMessage: '请输入确认密码',
						}, {
							validateFunction: (rule, value, data, callback) => {
								if (data.password != value) {
									callback('两次密码输入不一致')
								}
								return true;
							}
						}]
					}
				}
			}
		},
		watch: {
			// 深度监听整个对象
			dataForm: {
				handler(newValue, oldValue) {
					if (this.dataForm.oldpassword != '' && this.dataForm.password != '' && this
						.dataForm.password == this.dataForm.confirmPassword)
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
					nickname: uni.getStorageSync('nickname'),
					password: this.dataForm.password,
					confirmPassword: this.dataForm.oldpassword
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
							uni.setStorageSync('password', this.dataForm.password);
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


	}
</style>