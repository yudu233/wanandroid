<template>
	<el-menu class="navigation" mode="horizontal" :default-active="activeIndex" @select="navSelect">
		<el-menu-item index="1">首页</el-menu-item>
		<el-menu-item index="2">广场</el-menu-item>
		<el-menu-item index="3">导航</el-menu-item>
		<el-menu-item index="4">问答</el-menu-item>
		<el-menu-item index="5">体系</el-menu-item>
		<el-menu-item index="6">项目</el-menu-item>
		<el-menu-item index="7">公众号</el-menu-item>
		<el-menu-item index="8">项目分类</el-menu-item>
		<el-menu-item index="9">工具</el-menu-item>
		<el-menu-item index="10">收藏</el-menu-item>
	</el-menu>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: "1"
			}
		},
		methods: {
			navSelect(key, keyPath) {
				console.log(key, keyPath);
			}
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
