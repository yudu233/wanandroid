<template>
	<div class="home">
		<div class="container">
			<LeftView></LeftView>
			<RightView :show="show"></RightView>
		</div>
	</div>
</template>
<script>
	import LeftView from './LeftView.vue'
	import RightView from './RightView.vue'

	export default {
		components: {
			LeftView,
			RightView
		},
		props: {
			//右侧展示内容
			show: String
		}
	}
</script>

<style scoped="scoped">
	.home {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.container {
		margin: auto;
		margin-top: 1.25rem;
		display: flex;
		justify-content: center;
		flex-direction: row;
		width: 80%;
		height: 100%;
	}
</style>
