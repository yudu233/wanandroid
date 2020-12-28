<template>
	<div class="home">
		<div v-for="projectItem in projectsData">
			<HotProjectItem :data="projectItem"></HotProjectItem>
		</div>
	</div>
</template>

<script>
	import HotProjectItem from '../../components/HotProjectItem.vue'
	import {
		getHomeHotProject
	} from '../../api/home.js'

	export default {
		components: {
			HotProjectItem
		},
		data() {
			return {
				projectsData: [],
			}
		},
		async created() {
			const topProjectsData = await getHomeHotProject(0)
			this.projectsData = topProjectsData.data.datas
			console.log(this.projectsData);
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
</style>
