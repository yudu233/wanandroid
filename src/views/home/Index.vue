<template>
	<div class="home">
		<div class="header">
			<Navigation></Navigation>
		</div>
		<div class="container">
			<LeftView></LeftView>
			<RightView></RightView>
		</div>
	</div>
</template>

<script>
	import Navigation from '../../components/Navigation.vue'
	import LeftView from './LeftView.vue'
	import RightView from './RightView.vue'

	export default {
		components: {
			Navigation,
			LeftView,
			RightView
		}
	}
</script>

<style scoped="scoped">
	.home {
		height: 100%;
		display: flex;
		justify-content: center;
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
