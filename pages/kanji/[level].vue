<template>
	<div class="page container">
		<div class="aside">
			<KanjiMenu 
				title="Kanji List Grade levels"
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

	await useAsyncData('kanji', () => {
		if (!store.data?.kanji?.[route.params.level]) {
			store.fetchDynamicData('kanji', route.params.level, {grade: route.params.level})
		}
	});

	const kanjiArray = computed(() => {
		return store.data?.kanji?.[route.params.level] || []
	})
</script>

<style lang="scss" scoped>

</style>
