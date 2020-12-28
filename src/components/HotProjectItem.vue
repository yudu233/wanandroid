<template>
	<div class="projectItem">
		<span>{{data.title}}</span>
	</div>
</template>

<script>
	export default {
		props: {
			data: {
				type:Object,
				default:()=>{}
			}
		}
	}
</script>

<style>
</style>
