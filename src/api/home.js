import request from '../http.js'

/* 热门博文置顶文章 */
export function getHomeTopArticle(){
	return request.get("article/top/json")
}

/* 热门博文列表文章 */
export function getHomeHotArticle(page){
	return request.get(`/article/list/${page}/json`)
}

//* 热门项目列表文章 */
export function getHomeHotProject(page){
	return request.get(`article/listproject/${page}/json`)
}