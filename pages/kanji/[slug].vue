<template>
	<div v-if="!data?.kanji" class="loading"></div>
	<div v-else class="page container">
		<div class="aside">
			<div class="kanji-aside-wrap">
				<div class="kanji__image">{{ data?.kanji?.character }}</div>
				<div class="kanji__info"><span class="w-700">{{ data?.kanji?.strokes?.count }}</span> strokes</div>
				<div v-if="data?.kanji?.kunyomi?.hiragana" class="kanji__info">Kun: <span class="w-700">{{ data?.kanji?.kunyomi?.hiragana}}</span></div>
				<div v-if="data?.kanji?.onyomi?.katakana" class="kanji__info">On: <span class="w-700">{{ data?.kanji?.onyomi?.katakana }}</span></div>
			</div>
		</div>
		<div class="content">
			<div class="content-table">
				<div class="content-table-col">
					<div class="kanji__title">Meaning</div>
					<div class="kanji__info">{{ data?.kanji?.meaning?.english }}</div>
					<div class="kanji__title">Examples</div>
					<div class="kanji__info" v-for="(example) in data?.examples">{{ `${$filters.crescentBrackets(example.japanese)}${example.meaning.english}` }}</div>
				</div>
				<div class="content-table-col">
					<div class="kanji__title">References</div>
					<div class="kanji__info">Grade: <span class="w-700">{{ data?.references?.grade }}</span></div>
					<div class="kanji__info">Kodansha Dictionary: <span class="w-700">{{ data?.references?.kodansha }}</span></div>
					<div class="kanji__info">Nelson Japanese-English Dictionary: <span class="w-700">{{ data?.references?.classic_nelson }}</span></div>
					<div class="kanji__title">Video</div>
					<UiVideo 
						:srcMp4="data?.kanji?.video?.mp4"
						:srcWebm="data?.kanji?.video?.webm"
						:srcPoster="data?.kanji?.video?.poster"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { useStore } from '~/stores/index';
    
    const route = useRoute();
	const store = useStore();

	const data = computed(() => {
		return store.data?.kanji?.[route.params.slug] || []
	})

	await useAsyncData('kanji', () => {
		if (!store.data?.kanji?.[route.params.slug]) {
			store.fetchDynamicAdditionData('kanji', route.params.slug)
		}
	});
</script>

<style lang="scss" scoped>
	.kanji {
		&-aside-wrap {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 4rem;
			border: .1rem solid $gray-light;
			border-radius: 1.2rem;
            box-shadow: rgba(17, 12, 46, 7%) 0 2.4rem 5rem 0;
		}

		&__image {
			font-size: 8rem;

			@include respond-to(mobile) {
				font-size: 12rem;
			}
		}

		&__info {
			font-size: 1.7rem;
			line-height: 3.1rem;

			@include respond-to(mobile) {
				font-size: 1.6rem;
				line-height: 1.5;
			}
		}

		&__title {
			font-size: 2.3rem;
			line-height: 3.1rem;
			font-weight: 700;
			text-transform: uppercase;
			letter-spacing: .3rem;
			margin-bottom: 1.7rem;

			@include respond-to(mobile) {
				font-size: 2rem;
				letter-spacing: 0;
				margin-bottom: .8rem;
			}

			&:not(:first-child) {
				margin-top: 2.4rem;
			}
		}
	}

</style>
