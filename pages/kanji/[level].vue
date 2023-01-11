<template>
	<div class="container">
        <KanjiMenu 
            :levelNumbers=6
        
        />
		<KanjiCatalog 
			:items="store.data.kanji"
		/>
	</div>
</template>

<script setup>
	import { useStore } from '~/stores/index';
    
    const route = useRoute();
	const store = useStore();

	await useAsyncData('kanji', () => {
		store.fetchData('kanji', {grade: route.params.level})
	});
</script>

<style lang="scss" scoped>

</style>
