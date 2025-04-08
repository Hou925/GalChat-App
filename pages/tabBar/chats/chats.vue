<template>
	<view class="tab-page">
		<view v-if="loading" class="chat-loading">
			<view :size="50" :mask="false">
				<view>消息接收中...</view>
			</view>
		</view>
<<<<<<< HEAD
		<view class="nav-bar">
			<view class="nav-search">
				<uni-search-bar radius="100" v-model="searchText" cancelButton="none" placeholder="搜索"></uni-search-bar>
			</view>
		</view>
=======
		<!-- <view class="nav-bar">
			<view class="nav-search">
				<uni-search-bar radius="100" v-model="searchText" cancelButton="none" placeholder="搜索"></uni-search-bar>
			</view>
		</view> -->
>>>>>>> 9b9fc38 (last version)
		<view class="chat-tip" v-if="!loading && chats.length==0">
			温馨提示：您现在还没有任何聊天消息，快跟您的好友发起聊天吧~
		</view>

		<!-- <uni-list v-else>
		    <uni-list-item v-for="(chat,index) in chats" :key="index">
		        <template v-if="isShowChat(chat)">
		            <pop-menu :items="menu.items" @select="onSelectMenu($event,index)">
		                <chat-item :chat="chat" 
		                          :index="index" 
		                          :active="menu.chatIdx==index">
		                </chat-item>
		            </pop-menu>
		        </template>
		    </uni-list-item>
		</uni-list> -->

		<scroll-view class="scroll-bar" v-else scroll-with-animation="true" scroll-y="true">
			<view v-for="(chat,index) in chats" :key="index">
				<pop-menu v-if="isShowChat(chat)" :items="menu.items" @select="onSelectMenu($event,index)">
					<chat-item :chat="chat" :index="index" :active="menu.chatIdx==index" clickable
						@click="navigateToChatRoom(chat)"></chat-item>
				</pop-menu>
			</view>
		</scroll-view>



	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchText: "",
				loading: false,
<<<<<<< HEAD
				chats: [
					// {
					// 	id: 1,
					// 	showName: '张三AI',
					// 	lastMessage: '收到你的消息了！',
					// 	timestamp: '10:30',
					// 	avatar: '/static/c3.png',
					// 	unreadCount: 0,
					// 	delete: false
					// },
					// {
					// 	id: 2,
					// 	showName: '李四的群',
					// 	lastMessage: '送他们房子',
					// 	timestamp: '09:13',
					// 	avatar: '/static/c4.png',
					// 	unreadCount: 0,
					// 	delete: false
					// },
					// {
					// 	id: 3,
					// 	showName: '王五',
					// 	lastMessage: 'Niko, hello~',
					// 	timestamp: '昨天',
					// 	avatar: '/static/c5.png',
					// 	unreadCount: 0,
					// 	delete: false
					// }
				],
=======
				chats: [],
>>>>>>> 9b9fc38 (last version)
				menu: {
					show: false,
					style: "",
					chatIdx: -1,
					isTouchMove: false,
					items: [{
							key: 'DELETE',
							name: '删除该聊天',
							icon: 'trash',
							color: '#e64e4e'
						},
						{
							key: 'TOP',
							name: '置顶该聊天',
							icon: 'arrow-up'
						}
					]
				}
			}
		},
		methods: {
			navigateToChatRoom(chat) {
				if (chat) {
					uni.navigateTo({
						url: `/pages/tabBar/chats/chat-room?chatId=${chat.id}&actionType=${chat.type}`
					})
				}
			},
			async fetchChats() {
				const res = await new Promise((resolve, reject) => {
					uni.request({
						url: `https://gal-chat-test-970e995e1901.herokuapp.com/api/chat`,
						method: 'GET',
						header: {
							'Content-Type': 'application/json',
							'authorization': uni.getStorageSync('token'),
						},
						success: (res) => resolve(res),
						fail: (err) => reject(err)
					});
				});

<<<<<<< HEAD
=======
				console.log(res.data)
				if (res.data === 'Unauthorized') {
					uni.showModal({
						title: 'GalChat',
						content: '欢迎使用GalChat，请先登录',
						showCancel: false,
						success: () => {
							uni.redirectTo({
								url: '/pages/log/log/log'
							});
						}
					});
				}


>>>>>>> 9b9fc38 (last version)
				return res.data
			},
			onSelectMenu(item, chatIdx) {
				switch (item.key) {
					case 'DELETE':
						this.removeChat(chatIdx);
						break;
					case 'TOP':
						this.moveToTop(chatIdx);
						break;
					default:
						break;
				}
				this.menu.show = false;
			},
			removeChat(chatIdx) {
				this.chats[chatIdx].delete = true;
			},
			moveToTop(chatIdx) {
				const chat = this.chats[chatIdx];
				this.chats.splice(chatIdx, 1);
				this.chats.unshift(chat);
			},
			isShowChat(chat) {
				if (chat.delete) {
					return false;
				}
				return !this.searchText || chat.showName.includes(this.searchText)
			},
			refreshUnreadBadge() {
				if (this.unreadCount > 0) {
					uni.setTabBarBadge({
						index: 0,
						text: this.unreadCount + ""
					})
				} else {
					uni.removeTabBarBadge({
						index: 0,
						complete: () => {}
					})
				}
			}
		},
		computed: {
			unreadCount() {
				let count = 0;
				this.chats.forEach(chat => {
					if (!chat.delete) {
						count += chat.unreadCount;
					}
				})
				return count;
			}
		},
		watch: {
			unreadCount(newCount, oldCount) {
				this.refreshUnreadBadge();
			}
		},
		async onShow() {
			this.refreshUnreadBadge();
			this.loading = true
			console.log("asdasdasd")
			const chats = await this.fetchChats()
			this.loading = false

			this.chats = chats.value
			console.log(chats)
		}
	}
</script>

<style scoped lang="scss">
	.tab-page {
		position: relative;
		border: #dddddd solid 1px;
		display: flex;
		flex-direction: column;
		height: 100vh;

		.nav-bar {
			padding: 2rpx 20rpx;
			display: flex;
			align-items: center;
			background-color: white;
			border-bottom: 1px solid #ddd;
			height: 110rpx;

			.nav-search {
				flex: 1;
				height: 110rpx;
			}
		}

		.chat-tip {
			position: absolute;
			top: 400rpx;
			padding: 50rpx;
			line-height: 50rpx;
			text-align: left;
			color: darkblue;
			font-size: 30rpx;
		}

		.chat-loading {
			display: block;
			width: 100%;
			height: 120rpx;
			background: white;
			position: fixed;
			top: 0;
			z-index: 999;
			color: blue;
		}

		.scroll-bar {
			flex: 1;
			height: 100%;
		}
	}
</style>