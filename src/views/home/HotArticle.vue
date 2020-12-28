<template>
	<div class="home">
		<div v-for="articleItem in articlesData">
			<HotArticleItem :data="articleItem"></HotArticleItem>
		</div>
		<infinite-loading @infinite="getHotArticles"></infinite-loading>
	</div>
</template>

<script>
	import HotArticleItem from '../../components/HotArticleItem.vue'
	import InfiniteLoading from 'vue-infinite-loading';
	import {
		getHomeTopArticle,
		getHomeHotArticle
	} from '../../api/home.js'

	export default {
		components: {
			HotArticleItem,
			InfiniteLoading,
		},
		data() {
			return {
				articlesData: [],
				topArticles: [],
				page: 0,
			}
		},
		methods: {
			getHotArticles($state) {
				if (this.page === 0) {
					//第一页的时候加载置顶文章和第一页数据
					getHomeTopArticle().then((response => {
						this.topArticles = this.topArticles.concat(response.data)
					}))
				}
				getHomeHotArticle(this.page).then((response => {

					let hotArticleData = response.data.datas
					if (hotArticleData.length) {
						this.page += 1
						this.articlesData = this.articlesData.concat(this.topArticles).concat(hotArticleData)
						$state.loaded()
					} else {
						$state.complete();
					}


				}))
				// console.log(this.page);
				// getHomeHotArticle(this.page).then((response) => {
				// 	let moreData = response.data.datas
				// 	console.log(moreData);
				// 	this.articlesData.concat(moreData)
				// 	console.log(this.articlesData.length);

				// })
				// console.log(this.articlesData.length);
				// if (hotArticles.data.datas.length > 0) {
				// 	this.busy = false
				// 	this.articlesData.concat(hotArticles.data.datas)
				// 	console.log(this.articlesData.length);
				// } else {
				// 	this.busy = true
				// }
			}
		},
		async created() {
			// const topArticles = await getHomeTopArticle()
			// const hotArticles = await getHomeHotArticle(this.page)
			// this.articlesData = topArticles.data.concat(hotArticles.data.datas)
			// console.log(this.articlesData.length + '-----------------');
			// this.busy = false
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
