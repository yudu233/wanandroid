<template>
	<div class="announcement">
		<span>
			你可以自己<a class="tag_link" href="https://www.baidu.com" target="_blank">写一个app</a>，<a  class="tag_link" href="https://www.baidu.com" target="_blank">分享文章</a>给大家，
			看看<a class="tag_link" href="https://www.baidu.com" target="_blank">面试题</a>，学习<a class="tag_link" href="https://www.baidu.com" target="_blank">每日一问</a>，
			观摩<a class="tag_link" href="https://www.baidu.com" target="_blank">大厂对外分享</a>，<a class="tag_link" href="https://www.baidu.com" target="_blank">速查</a>一些信息。
		</span>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.announcement {
		background-color: white;
		border-radius: 0.1875rem;
		margin: 1.25rem 0px;
		padding: 0.625rem;
	}
	.tag_link {
		cursor: pointer;
		display: inline-block;
		background-color: #1b93fb;
		border-radius: 0.1875rem;
		font-size: 0.75rem;
		color: #FFFFFF;
		padding: 0.1875rem;
		margin: 0.3125rem;
		text-decoration: none;
	}
	span {
		font-size: 0.75rem;
	}
	span::before{
		content: "";
		float: left;
		width: 0.375rem;
		height: 0.375rem;
		margin-right: 0.3125rem;
		margin-top: 0.9rem;
		border-radius: 50%;
		background-color: rgb(52,152,219);
	}
</style>
