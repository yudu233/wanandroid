<template>
	<el-menu class="navigation" mode="horizontal" :default-active="'/home'" router unique-opened>
		<template v-for="(item,index) in menuData">
			<el-menu-item :index="item.path"  :key="index">{{item.name}}</el-menu-item>
		</template>
	</el-menu>
</template>

<script>
	import menuRouter from '../router/menu_router.js'
	
	export default {
		data() {
			return {
				 menuData:[]
			}
		},
		async created() {
			this.menuData  = await menuRouter
		}
	}
</script>

<style>
	.navigation {
		width: 100%;
		display: flex;
		justify-content: center;
	}
</style>
