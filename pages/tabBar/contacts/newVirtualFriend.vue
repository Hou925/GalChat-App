<template>
	<view class="container">
		<view class="form-group">
			<text class="label">Character Name:</text>
			<input v-model="character.name" type="text" placeholder="Enter character name" class="input" />
			<text v-if="nameError" class="error">Name is required</text>
		</view>

		<view class="form-group" v-for="(value, key) in character.personality" :key="key">
			<text class="label">{{ translateKey(key) }}:</text>
			<picker mode="selector" :range="range" :value="value - 1" @change="updatePersonality(key, $event)"
				class="selector">
				<view class="picker-text">{{ value }}</view>
			</picker>
		</view>

		<button @click="submitCharacter" class="submit-button" :disabled="isSubmitting">
			<view v-if="isSubmitting">Creating...</view>
			<view v-else>Create Character</view>
		</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				range: Array.from({
					length: 10
				}, (_, i) => i + 1),
				character: {
					name: '',
					personality: {
						sociability: 5,
						shyness: 5,
						calmness: 5,
						optimism: 5,
						empathy: 5,
						curiosity: 5,
						logic: 5,
						creativity: 5,
						patience: 5,
						aggressiveness: 5,
						humor: 5,
						ambition: 5,
						resilience: 5,
						trustworthiness: 5,
					},
				},
				isSubmitting: false,
				nameError: false,
			};
		},
		methods: {
			updatePersonality(key, event) {
				const value = this.range[event.detail.value];
				this.character.personality[key] = value;
			},

			translateKey(key) {
				const translations = {
					sociability: 'Sociability',
					shyness: 'Shyness',
					calmness: 'Calmness',
					optimism: 'Optimism',
					empathy: 'Empathy',
					curiosity: 'Curiosity',
					logic: 'Logic',
					creativity: 'Creativity',
					patience: 'Patience',
					aggressiveness: 'Aggressiveness',
					humor: 'Humor',
					ambition: 'Ambition',
					resilience: 'Resilience',
					trustworthiness: 'Trustworthiness',
				};

				return translations[key] || key;
			},

			async submitCharacter() {
				if (!this.character.name.trim()) {
					this.nameError = true;
					return;
				}
				this.nameError = false;
				this.isSubmitting = true;

				try {
					console.log('Created character:', this.character);

					const res = await uni.request({
						url: 'https://gal-chat-test-970e995e1901.herokuapp.com/api/characters',
						method: 'POST',
						data: {
							name: this.character.name,
							personality: this.character.personality,
						},
						header: {
							'Content-Type': 'application/json',
							authorization: uni.getStorageSync('token'),
						},
					});

					uni.showToast({
						title: 'Character created!',
						icon: 'success',
					});
					
					uni.navigateTo({
						url: `/pages/tabBar/chats/chat-room?chatId=${res.data.value.chatId}&actionType=virtual&characterId=${res.data.value.id}`,
					});
				} catch (error) {
					console.error('Error creating character:', error);
					uni.showToast({
						title: 'Error creating character',
						icon: 'error',
					});
				} finally {
					this.isSubmitting = false;
				}
			},
		},
	};
</script>

<style scoped>
	.container {
		padding: 16px;
	}

	.form-group {
		margin-bottom: 24px;
	}

	.label {
		font-size: 16px;
		font-weight: bold;
		margin-bottom: 8px;
		display: block;
	}

	.input {
		width: 100%;
		height: 40px;
		border: 1px solid #ddd;
		border-radius: 4px;
		padding: 8px;
		font-size: 16px;
	}

	.error {
		color: red;
		font-size: 14px;
		margin-top: 4px;
	}

	.selector {
		width: 100%;
		border: 1px solid #ddd;
		border-radius: 4px;
		padding: 8px;
		font-size: 16px;
		background-color: #f9f9f9;
	}

	.picker-text {
		font-size: 16px;
	}

	.submit-button {
		background-color: #007aff;
		color: white;
		padding: 12px;
		text-align: center;
		font-size: 16px;
		border-radius: 4px;
	}

	.submit-button:disabled {
		opacity: 0.6;
	}
</style>