import request from '../http.js'

export function getHomeTopArticle(){
	return request.get("article/top/json")
}