<template>
	<div class="page container">
		<div class="aside">
        	<KanjilistsMenu />
			<UiButtonLink 
				text="Start test"
				ref="/test/"
			/>
			<p class="text">* the test contains the kanji of the selected grade level</p>
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

	const kanjiArray = computed(() => {
		return store.data?.kanjilists?.[optionQuery.value] || []
	})

	const optionName = computed(() => {
		return route.params.slug.split("-")[0] || 'ap'
	})

	const optionNumber = computed(() => {
		return route.params.slug.split("-")[1] || '0'
	})

	const optionQuery = computed(() => {
		return `${optionName.value}:c${optionNumber.value}` || 'ap:c1'
	})

	await useAsyncData('kanjilists', () => {
		if (!store.data?.kanjilists?.[optionQuery.value]) {
			store.fetchDynamicData('kanjilists', optionQuery.value, {list: optionQuery.value})
		}
	});
</script>

<style lang="scss" scoped>

</style>
