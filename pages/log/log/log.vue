<template>
	<view class="container">
		<!-- 登录和注册按钮 -->
		<view class="button-section">
			<button class="login-button" @tap="goToLogin">登录</button>
			<button class="register-button" @tap="goToRegister">注册</button>


			<!-- <navigator url="/pages/tabBar/chats/chats" open-type="switchTab">
				<text class="link">跳过登录</text>
<<<<<<< HEAD
			</navigator>


			<navigator url="/pages/test" open-type="navigate">
				<text class="link">test</text>
			</navigator> -->

=======
			</navigator> -->


>>>>>>> 9b9fc38 (last version)
		</view>
	</view>
</template>

<script>
	export default {
		name: 'HomePage',

		methods: {
			goToLogin() {
				// 跳转到登录页面
				uni.navigateTo({
					url: '/pages/log/login/login'
				});
			},
			goToRegister() {
				// 跳转到注册页面
				uni.navigateTo({
					url: '/pages/log/register/register'
				});
			}
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 90vh;
		background-color: #f5f5f5;
	}

	.button-section {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	button {
		width: 200px;
		height: 50px;
		background-color: #007aff;
		color: white;
		border: none;
		border-radius: 5px;
		font-size: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	button:active {
		background-color: #005bb5;
	}

	.login-button {
		background-color: #007aff;
	}

	.register-button {
		background-color: #34c759;
	}

	button:active {
		opacity: 0.8;
	}
</style>