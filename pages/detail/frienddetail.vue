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

		<view class="middle-section">
			<button class="mood" @tap="onMoodTap">{{ mood }}</button>
			<button class="status" @tap="onStatusTap">{{ status }}</button>
		</view>

<<<<<<< HEAD
=======
		<!-- <uni-forms-item name="cal" label="日程">
			<textarea class="cal-textarea" v-model="calendar" disabled placeholder="无日程" />
		</uni-forms-item> -->

>>>>>>> 9b9fc38 (last version)
		<!-- 添加按钮 -->
		<view class="add-friend">
			<button class="add-button" clickable @click="navigateToChatRoom()">发消息</button>
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				id: '',
				nickname: '',
				username: '',
				mood: '',
<<<<<<< HEAD
				status: ''
=======
				status: '',
				calendar: ''
>>>>>>> 9b9fc38 (last version)
			}
		},
		onLoad(options) {
			this.id = options.id;
			this.nickname = options.nickname;
			this.username = options.username;
			this.chatId = options.chatId;
			if (options.mood === 'null' || options.mood === '添加心情')
				this.mood = '无心情';
			else
				this.mood = options.mood;

			if (options.status === 'null' || options.status === '添加状态')
				this.status = '无状态';
			else
				this.status = options.status;

<<<<<<< HEAD

=======
			console.log(options.calendar)
			if (options.calendar === '')
				this.calendar = '无日程';
			else
				this.calendar = options.calendar.content;

			console.log(this.calendar)
>>>>>>> 9b9fc38 (last version)

		},
		methods: {
			navigateToChatRoom() {
				uni.navigateTo({
					url: `/pages/tabBar/chats/chat-room?chatId=${this.chatId}`
				})
			}
		}
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

<<<<<<< HEAD
=======
	.cal-textarea {
		width: 100%;
		height: 120px;
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 4px;
		font-size: 14px;
	}

>>>>>>> 9b9fc38 (last version)
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