<template>
	<view class="pop-menu" @longpress="showMenu">
		<slot></slot>
		<view v-if="menuVisible" class="menu-overlay" @tap="hideMenu">
			<view class="menu-content" @tap.stop>
				<view v-for="(item, index) in items" 
					:key="index"
					class="menu-item"
					:style="{color: item.color || '#333'}"
					@tap="onSelect(item)">
					<uni-icons :type="item.icon" size="16"></uni-icons>
					<text>{{item.name}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			items: {
				type: Array,
				required: true
			}
		},
		data() {
			return {
				menuVisible: false
			}
		},
		methods: {
			showMenu() {
				this.menuVisible = true;
			},
			hideMenu() {
				this.menuVisible = false;
			},
			onSelect(item) {
				this.$emit('select', item);
				this.hideMenu();
			}
		}
	}
</script>

<style scoped lang="scss">
	.pop-menu {
		position: relative;
		
		.menu-overlay {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: rgba(0,0,0,0.5);
			z-index: 999;
			
			.menu-content {
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				background-color: white;
				border-radius: 20rpx 20rpx 0 0;
				padding: 20rpx;
				
				.menu-item {
					display: flex;
					align-items: center;
					padding: 30rpx;
					font-size: 32rpx;
					
					.uni-icons {
						margin-right: 20rpx;
					}
				}
			}
		}
	}
</style>