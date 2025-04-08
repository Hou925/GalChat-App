import {
	defineStore
} from 'pinia';

export const useProfileStore = defineStore('profile', {
	state: () => ({
		profile: null
	}),
	actions: {
		async getProfile() {
			try {
				uni.request({
					url: 'https://gal-chat-test-970e995e1901.herokuapp.com/api/profile',
					method: 'GET',
					header: {
						'Content-Type': 'application/json',
						'authorization': uni.getStorageSync('token')
					},
					success: (res) => {
						this.profile = res.data.value;
					}
				});
			} catch (error) {
				console.error('Error fetching profile:', error);
			}
		},

		async initializeProfile() {
			if (!this.profile) {
				try {
					await this.getProfile();
				} catch (e) {
					console.log(e)
				}
			}
		}
	},
});