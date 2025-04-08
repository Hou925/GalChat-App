<template>
	<view class="chat-container">
		<view v-if="loading" class="chat-loading">
			<view :size="50" :mask="false">
				<view>Starting chat, please wait...</view>
			</view>
		</view>
		<!-- 顶部导航栏 -->
		<view class="chat-header">
<<<<<<< HEAD
			<text class="header-title">张三AI</text>
=======
			<text class="header-title">聊天室</text>
>>>>>>> 9b9fc38 (last version)
		</view>

		<!-- 消息列表区域 -->
		<scroll-view class="chat-messages" scroll-y="true" :scroll-top="scrollTop" :scroll-with-animation="true"
			@scrolltoupper="loadMoreMessages">
			<view class="message-list">
				<view v-for="(item, index) in messages?.data || []" :key="index" class="message-item"
					:class="item?.userId === profile?.id ? 'message-right' : 'message-left'">
					<!-- 头像 -->
<<<<<<< HEAD
					<image class="avatar" :src="item.avatar" mode="aspectFill"></image>
=======
					<image class="avatar" src="/static/head.png" mode="aspectFill"></image>
>>>>>>> 9b9fc38 (last version)

					<!-- 消息内容 -->

					<view class="message-box">
						<view class="sender-box">
							<text class="sender-text">{{item.sender}}</text>
						</view>
						<view class="message-content">
							<text class="message-text">{{item.message}}</text>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>

		<!-- 底部输入区域 -->
		<view class="chat-footer">
			<view class="input-box">
				<input type="text" v-model="inputMessage" confirm-type="send" @confirm="sendMessage" placeholder="请输入消息"
					class="message-input" />
				<button :disabled="loading" class="send-btn" :class="{active: inputMessage.length > 0}" @tap="sendMessage">发送</button>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		useProfileStore
	} from '@/stores/profile';

	export default {
		data() {
			return {
				profile: null,
				inputMessage: '', // 输入框消息
				scrollTop: 0, // 滚动条位置
				messages: null,
				loading: true
			}
		},

		onLoad(options) {
			this.chatId = options.chatId;
			this.actionType = options.actionType === 'virtual' ? 'sendOpenai' : 'sendMessage';
			this.characterId = options.characterId || null;

			this.initializeProfile();
		},

		methods: {
			async initializeProfile() {
				const store = useProfileStore();
				this.profile = store.profile;

				if (this.profile) {
					await this.fetchInitialMessages();
					this.setupSocketConnection();
				} else {
					console.error('Profile not loaded. Please check authentication.');
				}
			},

			async fetchInitialMessages() {
				try {
					const messages = await this.fetchNewMessages(1);
					this.messages = messages.value;
					this.scrollToBottom();
				} catch (error) {
					console.error('Error fetching initial messages:', error);
				}
			},

			async fetchNewMessages(page = 1) {
				try {
					const res = await new Promise((resolve, reject) => {
						uni.request({
							url: `https://gal-chat-test-970e995e1901.herokuapp.com/api/chat/messages/${this.chatId}?page=${page}&limit=30`,
							method: 'GET',
							header: {
								'Content-Type': 'application/json',
								authorization: uni.getStorageSync('token'),
							},
							success: (res) => resolve(res),
							fail: (err) => reject(err),
						});
					});

					return res.data;
				} catch (err) {
					console.error('Error fetching messages:', err);
					return {
						data: []
					};
				}
			},

			// 发送消息
			sendMessage() {
				if (!this.inputMessage.trim()) return;

				this.socketTask.send({
					data: JSON.stringify({
						event: this.actionType,
						data: {
							chatId: this.chatId,
							userId: this.profile.id,
							characterId: this.characterId,
							message: this.inputMessage.trim(),
						},
					}),
				});

				console.log(this.actionType, this.inputMessage.trim())
				this.inputMessage = '';

				// Scroll to the bottom
				this.$nextTick(() => {
					this.scrollToBottom();
				});
			},

			// 滚动到底部
			scrollToBottom() {
				const query = uni.createSelectorQuery().in(this)
				query.select('.message-list').boundingClientRect(data => {
					this.scrollTop = data.height
				}).exec()
			},

			// 加载更多消息
			async loadMoreMessages() {
				if (this.messages.totalPages > this.messages.currentPage) {
					try {
						const newMessages = await this.fetchNewMessages(this.messages.currentPage + 1);

						const prevMessages = [...this.messages.data];
						this.messages = newMessages.value;
						this.messages.data = [...this.messages.data, ...prevMessages];
					} catch (error) {
						console.error('Error loading more messages:', error);
					}
				}
			},

			setupSocketConnection() {
				try {
					this.socketTask = uni.connectSocket({
						url: 'https://gal-chat-test-970e995e1901.herokuapp.com',
						complete: (a) => console.log('complete', a),
						success: () => {
							console.log('WebSocket connection initiated');
							this.loading = false;
						},
					});
					console.log("this.socketTask", this.socketTask)
					this.socketTask.onOpen(() => {
						console.log('WebSocket connection opened');

						this.socketTask.send({
							data: JSON.stringify({
								event: 'joinChat',
								data: {
									chatId: this.chatId,
									userId: this.profile.id,
								},
							}),
						});
					});
					this.socketTask.onMessage((res) => {
						try {
							const message = JSON.parse(res.data);

							if (message.event === 'newMessage') {
								console.log('New message received:', message.data);
								this.messages.data = [...this.messages.data, message.data];
							}
						} catch (error) {
							console.error('Error parsing message:', error);
						}
					});

					console.log('setupSocketConnection')
				} catch (error) {
					console.error('Socket connection error:', error);
				}
			},
		},

		onUnload() {
			if (this.socketTask) {
				this.socketTask.close({
					success: () => {
						console.log('WebSocket connection closed');
					},
					fail: (err) => {
						console.error('Failed to close WebSocket connection:', err);
					},
				});

				this.socketTask.onOpen(null);
				this.socketTask.onMessage(null);
				this.socketTask.onError(null);
				this.socketTask.onClose(null);
			}
		},
	}
</script>

<style lang="scss">
	.chat-container {
		display: flex;
		flex-direction: column;
		height: 100vh;
		background-color: #f5f5f5;

		.chat-header {
			height: 88rpx;
			background-color: #ffffff;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0 30rpx;
			border-bottom: 1rpx solid #eaeaea;

			.header-title {
				font-size: 32rpx;
				font-weight: bold;
			}
		}

		.chat-messages {
			flex: 1;
			padding: 20rpx;

			.message-list {
				.message-item {
					display: flex;
					align-items: center;
					column-gap: 10px;
					margin-bottom: 30rpx;
					padding: 0 20rpx;

					.avatar {
						width: 80rpx;
						height: 80rpx;
						border-radius: 50%;
						flex-shrink: 0;
					}

					.message-box {
						max-width: 60%;
						display: flex;
						flex-direction: column;
					}

					.sender-box {
						margin: 0 0 2rpx;

						.sender-text {
							font-size: 26rpx;
							line-height: 1.5;
						}
					}

					.message-content {
						max-width: 100%;
						margin: 0;
						background-color: #ffffff;
						border-radius: 10rpx;
						padding: 20rpx;
						word-break: break-all;

						.message-text {
							font-size: 28rpx;
							line-height: 1.5;
						}
					}
				}

				.message-left {
					.message-box {
						max-width: 60%;
					}

					.message-content {
						background-color: #ffffff;
					}
				}

				.message-right {
					flex-direction: row-reverse;

					.message-box {
						align-items: flex-end;
					}

					.message-content {
						background-color: #95ec69;
					}
				}
			}
		}

		.chat-footer {
			background-color: #ffffff;
			padding: 20rpx;

			.input-box {
				display: flex;
				align-items: center;

				.message-input {
					flex: 1;
					height: 72rpx;
					background-color: #f5f5f5;
					border-radius: 36rpx;
					padding: 0 30rpx;
					font-size: 28rpx;
				}

				.send-btn {
					margin-left: 20rpx;
					width: 120rpx;
					height: 72rpx;
					line-height: 72rpx;
					text-align: center;
					background-color: #cccccc;
					color: #ffffff;
					border-radius: 36rpx;
					font-size: 28rpx;

					&.active {
						background-color: #07c160;
					}
				}
			}
		}
	}
</style>