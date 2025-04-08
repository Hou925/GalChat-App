<template>
	<view>	
		<uni-list>
			<uni-list-item v-for="(item, index) in listData" :key="index" :title="item.title"
				clickable @click="navigateTo(item.url)" />
		</uni-list>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				listData: [{
						title: '昵称',
						url: '/pages/accountsetting/setnickname'
					},
					{
						title: '用户名',
						url: '/pages/accountsetting/setaccount'
					},
					{
						title: '修改密码',
						url: '/pages/accountsetting/setpassword'
					}
				]
			}
		},
		methods: {
			// 点击列表项跳转到指定页面
			navigateTo(url) {
				uni.navigateTo({
					url: url,
				})
			},


		},
	};
</script>

<style>
</style>