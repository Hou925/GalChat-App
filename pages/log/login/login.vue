<template>
	<view class="page login">
		<view class="title">欢迎登录</view>
		<uni-forms class="form" :modelValue="loginForm" :rules="rules" validate-trigger="bind">
			<uni-forms-item name="phoneNum">
				<uni-easyinput type="text" v-model="loginForm.phoneNum" prefix-icon="person" placeholder="用户名" />
			</uni-forms-item>
			<uni-forms-item name="password">
				<uni-easyinput type="password" v-model="loginForm.password" prefix-icon="locked" placeholder="密码" />
			</uni-forms-item>
			<button class="btn-submit" @click="submit" type="primary">登录</button>
		</uni-forms>

		<navigator class="nav-register" url="/pages/log/register/register" open-type="redirect">
			没有账号？前往注册
		</navigator>

	</view>
</template>

<script>
	import {
		useProfileStore
	} from '@/stores/profile';


	export default {
		data() {
			return {
				loginForm: {
					phoneNum: '',
					password: ''
				},
				rules: {
					phoneNum: {
						rules: [{
							required: true,
							errorMessage: '请输入用户名',
						}]
					},
					password: {
						rules: [{
							required: true,
							errorMessage: '请输入密码',
						}]
					}
				}
			}
		},
		methods: {
			submit() {
				// 登录输入
				const loginData = {
					username: this.loginForm.phoneNum,
					password: this.loginForm.password
				};
				// 登录输入

				// 登录请求
				uni.request({
					url: 'https://gal-chat-test-970e995e1901.herokuapp.com/api/identity/login',
					method: 'POST',
					header: {
						'Content-Type': 'application/json'
					},
					data: loginData,
					// 网络请求成功
					success: (res) => {
						const loginInfo = res.data;
						// 登录成功
						if (loginInfo.status) {
							uni.showToast({
								title: '登录成功',
								icon: 'success'
							});
							// 保存信息到本地
							uni.setStorageSync("token", loginInfo.value.accessToken);
							uni.setStorageSync("refresh", loginInfo.value.accessToken);

							const profileStore = useProfileStore();
							profileStore.getProfile();
							uni.request({
								url: 'https://gal-chat-test-970e995e1901.herokuapp.com/api/profile',
								method: 'GET',
								header: {
									'Content-Type': 'application/json',
									'authorization': uni.getStorageSync('token') // 使用uni的存储API
								},
								success: (res) => {
									const profile = res.data;
									uni.setStorageSync('id', profile.value.id)
									uni.setStorageSync('nickname', profile.value.nickname)
									uni.setStorageSync('username', profile.value.username)
									uni.setStorageSync('password', loginData.password)
								}
							});

							uni.switchTab({
								url: "/pages/tabBar/chats/chats"
							});
						} else { // 登录失败
							uni.showModal({
								title: '提示',
								content: loginInfo.message,
								showCancel: false
							});
						}
					},
					// 网络请求失败
					fail: (err) => {
						uni.showToast({
							title: '网络请求失败',
							icon: 'error'
						});
						console.error('请求失败：', err);
					}
				});
				// 登录请求	

			}
		},

		// onLoad() {
		// 	this.loginForm.phoneNum = uni.getStorageSync("phoneNum");
		// 	this.loginForm.password = uni.getStorageSync("password");

		// }
	}
</script>

<style lang="scss" scoped>
	.login {
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

		.nav-register {
			position: fixed;
			width: 100%;
			bottom: 100rpx;
			color: royalblue;
			text-align: center;
			font-size: 32rpx;
		}
	}
</style>