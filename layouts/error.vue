<template>
	<div>
		<h1 v-if="error.statusCode === 404">Page not found!</h1>
		<h1 v-else>An error occurred</h1>
		<NuxtLink to="/">Home page</NuxtLink>
	</div>
</template>

<script>
//window.location.href = '/mahou-no-choukou/#!' + window.location.pathname.replace('/mahou-no-choukou', '');
export default {
	props: ['error'],
	layout: 'error'
}
</script>
