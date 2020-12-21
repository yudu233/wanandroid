<template>
	<div class="left">
		<el-carousel indicator-position="outside">
			<el-carousel-item v-for="item in banner" :key="item.id">
				<el-image class="banner_iamge" :src="item.imagePath"></el-image>
			</el-carousel-item>
		</el-carousel>
		<AnnouncementView></AnnouncementView>
		<el-tabs v-model="hot" @tab-click="tabSelect">
			<el-tab-pane label="热门博文" name="hotArticle">
				<div v-for="articleItem in topArticles">
					<HotArticleItem :data="articleItem"></HotArticleItem>
				</div>
			</el-tab-pane>
			<el-tab-pane label="热门项目" name="hotProject">热门项目</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	import AnnouncementView from './AnnouncementView.vue'
	import HotArticleItem from '../../components/HotArticleItem.vue'
	import {getHomeTopArticle} from '../../api/home.js'

	export default {
		components: {
			AnnouncementView,
			HotArticleItem
		},
		data() {
			return {
				banner: [],
				topArticles:[],
				hot: "hotArticle"
			}
		},
		methods: {
			tabSelect(tab, event) {
				console.log(tab, event);
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
