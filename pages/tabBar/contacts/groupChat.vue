<template>
	<view class="nav-bar">
		<view class="nav-search">
			<uni-search-bar v-model="searchText" radius="100" cancelButton="none" placeholder="点击搜索群聊"></uni-search-bar>
		</view>
		<view class="nav-add" @click="onAddNewFriends()">
			<uni-icons type="personadd" size="35"></uni-icons>
		</view>
	</view>
	
</template>

<script>
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
</style>