<template>
	<div class="home">
		<div class="header">
			<el-menu v-model="select" class="navigation" mode="horizontal" :default-active="'/home'" router unique-opened>
				<template v-for="(item,index) in menuData">
					<el-menu-item name="item.path" :index="item.path" :key="index">{{item.name}}</el-menu-item>
				</template>
			</el-menu>
		</div>
		<router-view name="/home"></router-view>

	</div>
</template>

<script>
	import Navigation from '../components/Navigation.vue'
	import menuRouter from '../router/menu_router.js'
	export default {
		components: {
			Navigation
		},
		async created() {
			this.menuData = await menuRouter
		},
		data() {
			return {
				select: "home",
				menuData: []
			}
		}
	}
</script>

<style scoped="scoped">
	.home {
		height: 100%;
		display: flex;
		flex-direction: column;
	}
</style>
