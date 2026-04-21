<!-- pages/chat/chat.vue -->
<template>
	<view class="chat-container">
		<!-- 顶部导航栏 -->
		<view class="chat-header">
			<text class="header-title">聊天</text>
		</view>
		
		<!-- 消息列表区域 -->
		<scroll-view 
			class="chat-messages" 
			scroll-y="true" 
			:scroll-top="scrollTop"
			:scroll-with-animation="true"
			@scrolltoupper="loadMoreMessages"
		>
			<view class="message-list">
				<view 
					v-for="(item, index) in messageList" 
					:key="index" 
					class="message-item"
					:class="item.isSelf ? 'message-right' : 'message-left'"
				>
					<!-- 头像 -->
					<image class="avatar" :src="item.avatar" mode="aspectFill"></image>
					
					<!-- 消息内容 -->
					<view class="message-content">
						<text class="message-text">{{item.content}}</text>
					</view>
				</view>
			</view>
		</scroll-view>
		
		<!-- 底部输入区域 -->
		<view class="chat-footer">
			<view class="input-box">
				<input 
					type="text" 
					v-model="inputMessage"
					confirm-type="send"
					@confirm="sendMessage"
					placeholder="请输入消息"
					class="message-input"
				/>
				<button 
					class="send-btn" 
					:class="{active: inputMessage.length > 0}"
					@tap="sendMessage"
				>发送</button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			inputMessage: '', // 输入框消息
			scrollTop: 0, // 滚动条位置
			messageList: [
				{
					id: 1,
					content: '你好！',
					isSelf: false,
					avatar: '/static/c1.png',
					time: new Date()
				},
				{
					id: 2,
					content: '你好！很高兴见到你！',
					isSelf: true,
					avatar: '/static/c2.png',
					time: new Date()
				}
			]
		}
	},
	methods: {
		// 发送消息
		sendMessage() {
			if (!this.inputMessage.trim()) return
			
			// 添加新消息
			this.messageList.push({
				id: this.messageList.length + 1,
				content: this.inputMessage,
				isSelf: true,
				avatar: '/static/c2.png',
				time: new Date()
			})
			
			// 清空输入框
			this.inputMessage = ''
			
			// 滚动到底部
			this.$nextTick(() => {
				this.scrollToBottom()
			})
			
			// 模拟回复
			setTimeout(() => {
				this.messageList.push({
					id: this.messageList.length + 1,
					content: '收到你的消息了！',
					isSelf: false,
					avatar: '/static/c1.png',
					time: new Date()
				})
				this.scrollToBottom()
			}, 1000)
		},
		
		// 滚动到底部
		scrollToBottom() {
			const query = uni.createSelectorQuery().in(this)
			query.select('.message-list').boundingClientRect(data => {
				this.scrollTop = data.height
			}).exec()
		},
		
		// 加载更多消息
		loadMoreMessages() {
			// 这里添加加载历史消息的逻辑
			console.log('加载更多消息')
		}
	},
	mounted() {
		this.scrollToBottom()
	}
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
				margin-bottom: 30rpx;
				
				.avatar {
					width: 80rpx;
					height: 80rpx;
					border-radius: 50%;
				}
				
				.message-content {
					max-width: 60%;
					margin: 0 20rpx;
					background-color: #ffffff;
					border-radius: 10rpx;
					padding: 20rpx;
					
					.message-text {
						font-size: 28rpx;
						line-height: 1.5;
					}
				}
			}
			
			.message-left {
				.message-content {
					background-color: #ffffff;
				}
			}
			
			.message-right {
				flex-direction: row-reverse;
				
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