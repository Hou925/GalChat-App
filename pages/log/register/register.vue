<template>
	<view class="register">
		<view class="title">欢迎注册</view>
		<uni-forms class="form" :modelValue="dataForm" :rules="rules" validate-trigger="bind" label-width="80px">
			<uni-forms-item name="userName" label="用户名">
				<uni-easyinput type="text" v-model="dataForm.userName" placeholder="用户名" />
			</uni-forms-item>
			<uni-forms-item name="nickName" label="昵称">
				<uni-easyinput type="text" v-model="dataForm.nickName" placeholder="昵称" />
			</uni-forms-item>
			<uni-forms-item name="phoneNum" label="手机号">
				<uni-easyinput type="number" v-model="dataForm.phoneNum" placeholder="手机号" />
			</uni-forms-item>
			<uni-forms-item name="code" label="验证码">
				<uni-easyinput type="number" v-model="dataForm.code" placeholder="验证码">
					<template #right>
						<button :disabled="dataForm.phoneNum.length != 11" @click="getVerificationCode"
							class="btn-get-code">获取验证码</button>
					</template>
				</uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="password" label="密码">
				<uni-easyinput type="password" v-model="dataForm.password" placeholder="密码" />
			</uni-forms-item>
			<uni-forms-item name="confirmPassword" label="确认密码">
				<uni-easyinput type="password" v-model="dataForm.confirmPassword" placeholder="确认密码" />
			</uni-forms-item>
			<button class="btn-submit" :disabled="!isValid" @click="submit" type="warn">注册并登录</button>
		</uni-forms>
		<navigator class="nav-login" url="/pages/log/login/login" open-type="redirect">
			已有账号？前往登录
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isValid: false,
				dataForm: {
					userName: '',
					nickName: '',
					phoneNum: '',
					code: '',
					password: '',
					confirmPassword: ''
				},
				rules: {
					userName: {
						rules: [{
							required: true,
							errorMessage: '请输入用户名',
						}, {
							minLength: 6, // 添加最小长度限制
							errorMessage: '用户名不能少于6个字符'
						}]
					},
					nickName: {
						rules: [{
							required: true,
							errorMessage: '请输入昵称',
						}]
					},
					phoneNum: {
						rules: [{
							required: true,
							errorMessage: '请输入手机号',
						}]
					},
					code: {
						rules: [{
							required: true,
							errorMessage: '请输入验证码',
						}]
					},
					password: {
						rules: [{
							required: true,
							errorMessage: '请输入密码',
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
								console.log("validateFunction")
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
					if (this.dataForm.userName != '' && this.dataForm.nickname != '' && this.dataForm.phoneNum != '' &&
						this.dataForm.code != '' && this.dataForm.password != '' && this.dataForm.password == this.dataForm
						.confirmPassword)
						this.isValid = true
					else
						this.isValid = false
				},
				deep: true // 深度监听
			}
		},
		methods: {
			submit() {
				console.log("submitted")
				const regData = {
					username: this.dataForm.userName,
					password: this.dataForm.password,
					nickname: this.dataForm.nickName,
					phone: this.dataForm.phoneNum,
					code: this.dataForm.code
				};

				uni.request({
					url: 'https://gal-chat-test-970e995e1901.herokuapp.com/api/identity/register',
					method: 'POST',
					header: {
						'Content-Type': 'application/json'
					},
					data: regData,
					success: (res) => {
						const regInfo = res.data;

						if (regInfo.status) {
							uni.showToast({
								title: '注册成功',
								icon: 'success',
								duration: 2000
							});
							this.login();
						} else {
							uni.showModal({
								title: '注册失败',
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
						console.error('注册请求失败：', err);
					}
				});


			},

			login() {	
				// the data to send
				const loginData = {
					username: this.dataForm.userName,
					password: this.dataForm.password
				}
				
				uni.request({
					url: 'https://gal-chat-test-970e995e1901.herokuapp.com/api/identity/login',
					method: 'POST',
					header: {
						'Content-Type': 'application/json'
					},
					data: loginData,
					success: (res) => {
						// get the data returned
						const loginInfo = res.data;

						// the operations you are going to do with the data
						if (loginInfo.status) {
							uni.showToast({
								title: loginInfo.message,
								icon: 'success'
							});
							uni.setStorageSync("token", loginInfo.value.accessToken); // 使用uni的存储API
							uni.setStorageSync("refresh", loginInfo.value.accessToken);
							uni.switchTab({
								url: "/pages/tabBar/chats/chats"
							});
						} else {
							uni.showModal({
								title: '提示',
								content: loginInfo.message,
								showCancel: false
							});
						}
					},
					fail: (err) => {
						uni.showToast({
							title: '网络请求失败',
							icon: 'error'
						});
						console.error('请求失败：', err);
					}
				});
			},

			getVerificationCode() {
	
				uni.request({
					url: 'https://gal-chat-test-970e995e1901.herokuapp.com/api/identity/sendCode',
					method: 'POST',
					header: {
						'Content-Type': 'application/json'
					},
					data: {
						phone: this.dataForm.phoneNum
					},
					success: (res) => {
						const data = res.data;
						if (data.status) {
							uni.showToast({
								title: '发送成功',
								icon: 'success',
								duration: 2000
							});
							
						} else {
							uni.showModal({
								title: '发送失败',
								content: data.message,
								showCancel: false
							});
						}
					},
					fail: (err) => {
						uni.showModal({
							title: '错误',
							content: '发送验证码失败，请稍后重试',
							showCancel: false
						});
						console.error('发送验证码失败：', err);
					}
				});

			}
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