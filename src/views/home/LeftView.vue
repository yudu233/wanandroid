<template>
	<div class="left">
		<el-carousel indicator-position="outside">
			<el-carousel-item v-for="item in banner" :key="item.id">
				<el-image class="banner_iamge" :src="item.imagePath"></el-image>
			</el-carousel-item>
		</el-carousel>
		<AnnouncementView></AnnouncementView>
		<banner></banner>
		<el-tabs v-model="select" :before-leave="tabSelect">
			<el-tab-pane label="热门博文" name="hotArticle">
				<HotArticle></HotArticle>
				<!-- <router-view name="hotArticle">
					<div v-for="articleItem in topArticles">
						<HotArticleItem :data="articleItem"></HotArticleItem>
					</div>
				</router-view> -->
			</el-tab-pane>
			<el-tab-pane label="热门项目" name="hotProject">
				<HotProject></HotProject>
				<!-- <router-view name="hotProject">
					
				</router-view> -->
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	import AnnouncementView from './AnnouncementView.vue'
	import HotArticleItem from '../../components/HotArticleItem.vue'
	import HotProject from './HotProject.vue'
	import HotArticle from './HotArticle.vue'
	import {
		getHomeTopArticle
	} from '../../api/home.js'

	export default {
		components: {
			AnnouncementView,
			HotArticleItem,
			HotProject,
			HotArticle
		},
		data() {
			return {
				banner: [],
				topArticles: [],
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
			const topArticles = await getHomeTopArticle()
			this.topArticles = topArticles.data
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
