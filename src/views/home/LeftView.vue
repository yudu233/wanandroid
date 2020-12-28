<template>
	<div class="left">
		<!-- 轮播图 -->
		<el-carousel indicator-position="outside">
			<el-carousel-item v-for="item in banner" :key="item.id">
				<el-image class="banner_iamge" :src="item.imagePath"></el-image>
			</el-carousel-item>
		</el-carousel>
		<!-- 公告 -->
		<AnnouncementView></AnnouncementView>
		<el-tabs v-model="select" :before-leave="tabSelect">
			<el-tab-pane label="热门博文" name="hotArticle">
				<HotArticle></HotArticle>
			</el-tab-pane>
			<el-tab-pane label="热门项目" name="hotProject">
				<HotProject></HotProject>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	import AnnouncementView from './AnnouncementView.vue'
	import HotProject from './HotProject.vue'
	import HotArticle from './HotArticle.vue'
	export default {
		components: {
			AnnouncementView,
			HotProject,
			HotArticle
		},
		data() {
			return {
				banner: [],
				select: "hotArticle"
			}
		},
		methods: {
			async tabSelect(activeName) {
				if (activeName === "hotArticle") {
					// const topArticles = await getHomeTopArticle()
					// this.topArticles = topArticles.data
				} else if (activeName === "hotProject") {
					// this.$router.push("/hotProject")
				}
			}
		},

		async created() {
			const data = await this.$http.get("banner/json")
			this.banner = data.data
		}
	}
</script>

<style>
	.left {
		width: 60%;
	}

	.banner_iamge {
		width: 100%;
		height: 20rem;
	}
</style>
