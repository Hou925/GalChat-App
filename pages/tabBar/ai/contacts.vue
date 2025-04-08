<template>
	<view class="container">
		<view v-if="loading" class="chat-loading">
			<view :size="50" :mask="false">
				<view>Starting AI chat, please wait...</view>
			</view>
		</view>

		<view class="nav-bar">
			<view class="nav-search">
				<uni-search-bar v-model="searchText" radius="100" cancelButton="none" placeholder="Search virtual chats"
					@confirm="onSearch" />
			</view>
			<view class="nav-startAi" @click="createChat">
				Start now with AI
			</view>
			<view class="nav-add" @click="onAddNewFriends">
				<uni-icons type="personadd" size="35"></uni-icons>
			</view>
		</view>

		<view class="chat-list" v-if="chats.length > 0">
			<view v-for="chat in filteredChats" :key="chat.id" class="chat-item" @click="openChatRoom(chat)">
				<view class="chat-name">{{ chat.name }}</view>
			</view>
		</view>

		<view v-else>
			<view class="no-chats">No virtual chats found.</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading: false,
				searchText: '',
				chats: [],
				filteredChats: [],
			};
		},

		methods: {
			async loadChats() {
				this.loading = true;

				try {
					const res = await uni.request({
						url: 'https://gal-chat-test-970e995e1901.herokuapp.com/api/characters',
						method: 'GET',
						header: {
							'Content-Type': 'application/json',
							authorization: uni.getStorageSync('token'),
						},
					});
					this.chats = res.data.value || [];
					this.filteredChats = this.chats;
				} catch (error) {
					console.error('Failed to load chats:', error);
					uni.showToast({
						title: 'Error loading chats',
						icon: 'none',
					});
				} finally {
					this.loading = false;
				}
			},

			async createChat() {
				this.loading = true;

				try {
					const res = await uni.request({
						url: `https://gal-chat-test-970e995e1901.herokuapp.com/api/chat`,
						method: 'POST',
						data: {
							chatName: 'chat with AI',
							type: 'virtual',
						},
						header: {
							'Content-Type': 'application/json',
							authorization: uni.getStorageSync('token'),
						},
					});
					uni.navigateTo({
						url: `/pages/tabBar/chats/chat-room?chatId=${res.data.value.id}&actionType=virtual`,
					});
				} catch (error) {
					console.error('Failed to create AI chat:', error);
					uni.showToast({
						title: 'Error creating chat',
						icon: 'none',
					});
				} finally {
					this.loading = false;
				}
			},

			onSearch() {
				if (this.searchText.trim() === '') {
					this.filteredChats = this.chats;
				} else {
					this.filteredChats = this.chats.filter(chat =>
						chat.chatName.toLowerCase().includes(this.searchText.toLowerCase())
					);
				}
			},

			openChatRoom(character) {
				if (character.chatId) {
					uni.navigateTo({
						url: `/pages/tabBar/chats/chat-room?chatId=${character.chatId}&characterId=${character.id}&actionType=virtual`,
					});
				} else {
					uni.showToast({
						title: 'Character error',
						icon: 'error',
					});
				}
			},

			onAddNewFriends() {
				uni.navigateTo({
					url: '/pages/tabBar/contacts/add-friend',
				});
			},
		},
		created() {
			this.loadChats();
		},
	};
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.nav-bar {
		padding: 10rpx;
		display: flex;
		align-items: center;
		background-color: white;
	}

	.nav-search {
		flex: 1;
	}

	.nav-startAi,
	.nav-add {
		cursor: pointer;
		margin-left: 10rpx;
	}

	.chat-list {
		margin-top: 20rpx;
		flex: 1;
		padding: 10rpx;
	}

	.chat-item {
		padding: 15rpx;
		background-color: #f7f7f7;
		margin-bottom: 10rpx;
		border-radius: 8rpx;
		display: flex;
		align-items: center;
		cursor: pointer;
	}

	.chat-name {
		font-size: 16px;
		color: #333;
	}

	.no-chats {
		text-align: center;
		color: #888;
	}

	.chat-loading {
		text-align: center;
		margin-top: 50%;
		font-size: 18px;
	}
</style>