<template>
	<div class="container">
        <KanjiMenu 
            :levelNumbers=6
        
        />
		<KanjiCatalog 
			:items="store.data['kanji'][route.params.level]"
		/>
	</div>
</template>

<script setup>
	import { useStore } from '~/stores/index';
    
    const route = useRoute();
	const store = useStore();

	await useAsyncData('kanji', () => {
		store.fetchDynamicData('kanji', route.params.level, {grade: route.params.level})
	});
</script>

<style lang="scss" scoped>

</style>
