<template>
	<view class="chat-item">
		<image class="avatar" :src="chat.avatar"></image>
		<view class="content">
			<view class="top-line">
				<text
					class="name">{{ chat.chatName ? `${chat.chatName} ${index}` : chat.members.map(member => member.nickname).join(', ') }}</text>
				<text class="time">{{chat.createdAt}}</text>
			</view>
			<view class="bottom-line">
				<text class="message">{{chat.lastMessage}}</text>
				<view v-if="chat.unreadCount > 0" class="badge">
					{{chat.unreadCount}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			chat: {
				type: Object,
				required: true
			},
			index: {
				type: Number,
				required: true
			},
			active: {
				type: Boolean,
				default: false
			}
		}
	}
</script>

<style scoped lang="scss">
	.chat-item {
		display: flex;
		padding: 12rpx 16rpx;
		background-color: white;
		border-bottom: 1rpx solid #f0f0f0;

		.avatar {
			width: 80rpx;
			height: 80rpx;
			border-radius: 8rpx;
			margin-right: 16rpx;
		}

		.content {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.top-line {
				display: flex;
				justify-content: space-between;
				margin-bottom: 4rpx;

				.name {
					font-size: 28rpx;
					color: #333;
				}

				.time {
					font-size: 22rpx;
					color: #999;
				}
			}

			.bottom-line {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.message {
					font-size: 24rpx;
					color: #666;
				}

				.badge {
					background-color: #ff4d4f;
					color: white;
					font-size: 20rpx;
					height: 32rpx;
					min-width: 32rpx;
					border-radius: 16rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					padding: 0 8rpx;
				}
			}
		}
	}
</style>