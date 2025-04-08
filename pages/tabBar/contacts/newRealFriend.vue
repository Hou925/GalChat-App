<template>
	<view class="nav-bar">
		<view class="nav-search">
			<uni-search-bar v-model="searchText" radius="100" cancelButton="none"
				placeholder="点击搜索新的好友"></uni-search-bar>
		</view>

		<!-- 	<view class="nav-add" @click="onAddNewFriends()">
			<uni-icons type="personadd" size="35"></uni-icons>
		</view> -->
	</view>

	<view>
		<!-- 搜索结果列表 -->
		<view class="search-results" v-if="searchResults.length != 0">
			<view class="user-item" @click="showdetail()">
<<<<<<< HEAD
				<image class="user-avatar" :src="searchResults.avatar" mode="aspectFill" />
=======
				<image class="user-avatar" src="/static/head.png" mode="aspectFill" />
>>>>>>> 9b9fc38 (last version)
				<text class="user-name">{{ searchResults.username }}</text>
			</view>
		</view>

		<!-- 无搜索结果提示 -->
		<view class="no-results" v-if="searchText && searchResults.length === 0">
			<text>未找到相关用户</text>
		</view>
		
<<<<<<< HEAD
		<text>没有待处理的好友请求</text>
=======
		<!-- <text>没有待处理的好友请求</text> -->
>>>>>>> 9b9fc38 (last version)
	</view>

</template>

<script>
	export default {
		data() {
			return {
				searchText: '',
				searchResults: [],
				searchTimer: null,
				hasSearched: false,
			}
		},
		watch: {
			"searchText": {
				handler(newValue, oldValue) {
					if (this.searchTimer) {
						clearTimeout(this.searchTimer);
					}

					// 如果输入为空，清空搜索结果
					if (!this.searchText.trim()) {
						this.searchResults = [];
						this.hasSearched = false;
						return;
					}

					// 设置新的定时器，延迟500ms执行搜索
					this.searchTimer = setTimeout(() => {
						this.searchUser();
					}, 500);
				}
			}
		},
		methods: {
			// 搜索用户
			async searchUser() {
				try {
					const res = await uni.request({
						url: `https://gal-chat-test-970e995e1901.herokuapp.com/api/profile/byUsername/${this.searchText}`,
						method: 'GET',
						header: {
							'Content-Type': 'application/json',
							'authorization': uni.getStorageSync('token')
						},
						success: (res) => {
							const userInfo = res.data
							this.hasSearched = true;
							if (userInfo.status) {
								this.searchResults = userInfo.value;
								console.log(this.searchResults)
							} else {
								this.searchResults = [];
							}
						}
					})
				} catch (error) {
					this.searchResults = [];
					uni.showToast({
						title: '网络错误',
						icon: 'none'
					});
				}
			},


			showdetail() {
				uni.navigateTo({
					url: `/pages/detail/userdetail?id=${this.searchResults.id}&username=${this.searchText}&nickname=${this.searchResults.nickname}`,
				});
			}

		}
	}
</script>

<style>
	.nav-bar {
		padding: 2rpx 10rpx;
		display: flex;
		align-items: center;
		background-color: white;

		.nav-search {
			flex: 1;
		}

		.nav-add {
			cursor: pointer;
		}
	}

	.search-results {
		padding: 10px;
	}

	.user-list {
		display: flex;
		flex-direction: column;
	}

	.user-item {
		display: flex;
		align-items: center;
		padding: 10px;
		background-color: #ffffff;
		border-bottom: 1px solid #eee;
	}

	.user-avatar {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		margin-right: 10px;
	}

	.user-name {
		font-size: 16px;
		color: #333;
	}
</style>