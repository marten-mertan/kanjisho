<template>
	<div class="page container">
		<div class="aside">
			<KanjigradesMenu 
				title="Kanji Grade levels"
				name="ap"
				:startLevel = 1
				:endLevel = 6
			/>
		</div>
		<div class="content">
			<KanjiCatalog 
				:items="kanjiArray"
			/>
		</div>
	</div>
</template>

<script setup>
	import { useStore } from '~/stores/index';
    
    const route = useRoute();
	const store = useStore();

	await useAsyncData('kanjigrades', () => {
		if (!store.data?.kanjigrades?.[route.params.slug]) {
			store.fetchDynamicData('kanjigrades', route.params.slug, {grade: route.params.slug})
		}
	});

	const kanjiArray = computed(() => {
		return store.data?.kanjigrades?.[route.params.slug] || []
	})
</script>

<style lang="scss" scoped>

</style>
