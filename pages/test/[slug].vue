<template>
	<div class="page container">
		<div class="content">
            <div v-if="!questions[currentQuestion]" class="loading"></div>
            <div v-else class="test">
                <div class="test__info">
                    Question {{ currentQuestion+1 }} / {{ kanjiArray.length }}
                </div>
                <div class="test__kanji">
                    {{ questions[currentQuestion].kanji }}
                </div>
                <div :class="['test-variants', {'__not-answered': questions[currentQuestion].status === 'notAnswered'}]">
                    <div v-for="(variant, index) in questions[currentQuestion].variants"
                    :key="'test-variants-item-'+index" 
                    :class="['test-variants__item', {'__correct': currentAnswer === index && questions[currentQuestion].status === 'correct'}, {'__wrong': currentAnswer === index && questions[currentQuestion].status === 'wrong'}]"
                    @click="selectAnswer(index)"
                    >
                        {{ variant }}
                    </div>
                </div>
                <button v-if="questions[currentQuestion].status !== 'notAnswered' && currentQuestion + 1 < kanjiArray.length" class="test__next" @click="currentQuestion++">Next</button>
                
                <div v-if="currentQuestion+1 === kanjiArray.length && questions[currentQuestion].status !== 'notAnswered'" class="test-results">
                    <div class="test-results__title">Results</div>
                    <div class="test-results-table">
                        <NuxtLink v-for="(question, index) in questions"
                            :key="'test-results-table-item-'+index" 
                            :href="`/kanji/${question.kanji}/`"
                            target="_blank"
                            :class="['test-results-table-item', {'__correct': question.status === 'correct' }, {'__wrong': question.status === 'wrong' }]">
                            {{ question.kanji }}
                        </NuxtLink>
                    </div>
                </div>
            </div>
		</div>
	</div>
</template>

<script setup>
	import { useStore } from '~/stores/index';
    const { words } = await import('~/assets/json/words.json')
    
    const route = useRoute();
	const store = useStore();
    const { $filters } = useNuxtApp()

    const optionIndex = computed(() => {
        return route.params.slug.split("-")[0] || 'kanjigrades'
    })

    const optionName = computed(() => {
        return route.params.slug.split("-")[1] || 'ap'
    })

    const optionNumber = computed(() => {
        return route.params.slug.split("-")[2] || '0'
    })

    const optionQuery = computed(() => {
        return optionIndex.value === 'kanjigrades' ? optionName.value : `${optionName.value}:c${optionNumber.value}` || 'ap:c1'
    })

    await useAsyncData('kanjilists', () => {
        if (optionIndex.value === 'kanjigrades') {
            if (!store.data?.[optionIndex.value]?.[optionQuery.value]) {
                store.fetchDynamicData(optionIndex.value, optionQuery.value, {grade: optionQuery.value})
            }
        }
        if (optionIndex.value === 'kanjilists') {
            if (!store.data?.[optionIndex.value]?.[optionQuery.value]) {
                store.fetchDynamicData(optionIndex.value, optionQuery.value, {list: optionQuery.value})
            }
        }
    });

    const kanjiArray = computed(() => {
        return store.data?.[optionIndex.value]?.[optionQuery.value] || []
    })

    const questions = ref([]);

    const currentQuestion = ref(0);

    const currentAnswer = ref(-1);

    const fetchQuestion = (index, kanjiList) => {
        console.log('fetchQuestion', index, kanjiList);
		if (!store.data?.kanji?.[kanjiList[index].kanji.character]) {
			store.fetchDynamicAdditionData('kanji', kanjiList[index].kanji.character).then(data => {
                const meanings = $filters.shuffle(data.kanji.meaning.english.split(', '));
                let variants = [meanings[0]];
                for(let i = 0; i < 7; i++) {
                    const rand = Math.floor(Math.random() * words.length);
                    if (variants.includes(words[rand])) {
                        i--;
                        continue;
                    }
                    variants.push(words[rand]);
                }
                variants = $filters.shuffle(variants);
                questions.value[index] = {
                    'kanji': data.kanji.character,
                    'meanings': meanings,
                    'variants': variants,
                    'status': 'notAnswered',
                }
                console.log(questions.value);
            })
		} else {
            const data = store.data?.kanji?.[kanjiList[index].kanji.character];
            const meanings = $filters.shuffle(data.kanji.meaning.english.split(', '));
            let variants = [meanings[0]];
            for(let i = 0; i < 7; i++) {
                const rand = Math.floor(Math.random() * words.length);
                if (variants.includes(words[rand])) {
                    i--;
                    continue;
                }
                variants.push(words[rand]);
            }
            variants = $filters.shuffle(variants);
            questions.value[index] = {
                'kanji': data.kanji.character,
                'meanings': meanings,
                'variants': variants,
                'status': 'notAnswered',
            }
            
            console.log(questions.value);
        }
    }

    if(kanjiArray.value.length) {
        fetchQuestion(0, kanjiArray.value);
    }

    watch([currentQuestion, () => kanjiArray.value], ([index, kanjiList]) => {
        console.log('asd', index, kanjiList[index].kanji.character);
        fetchQuestion(index, kanjiList);
    })

    const selectAnswer = (index) => {
        currentAnswer.value = index;
        if (questions.value[currentQuestion.value].meanings.includes(questions.value[currentQuestion.value].variants[index])) {
            questions.value[currentQuestion.value].status = 'correct'
        } else {
            questions.value[currentQuestion.value].status = 'wrong'
        }
    }

</script>

<style lang="scss" scoped>
    .test {
        display: flex;
        flex-direction: column;
        align-items: center;

        &__info {
            font-size: 2.2rem;
            font-weight: 700;
            text-transform: uppercase;
        }

        &__kanji {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 16rem;
            padding: 8rem;
            margin-top: 5rem;
            border: 0.1rem solid $gray-light;
            border-radius: 1.2rem;
        }

        &-variants {
            display: flex;
            flex-wrap: wrap;
            margin-top: 5rem;

            &.__not-answered {
                .test-variants__item {
                    pointer-events: all;

                    &:hover {
                        background-color: $gray-light;
                        cursor: pointer;
                    }
                }
            }

            &__item {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: calc(25% - 1.2rem);
                padding: 2rem;
                border: 0.1rem solid $gray-light;
                border-radius: 1.2rem;
                font-size: 1.8rem;
                text-align: center;
                margin: 0 .6rem .8rem;
                background-color: $white;
                pointer-events: none;
                transition: background-color .22s ease, color .22s ease;

                &.__correct {
                    background-color: $green;
                    color: $white;
                }

                &.__wrong {
                    background-color: $red;
                    color: $white;
                }
            }
        }

        &__next {
            font-size: 2.6rem;
            margin-top: 5rem;
            transition: color .22s ease;
            cursor: pointer;

            &:hover {
                color: $pink;
            }
        }

        &-results {
            &__title {
                font-size: 2.2rem;
                margin-top: 5rem;
                text-align: center;
                font-weight: 700;
                text-transform: uppercase;
            }

            &-table {
                display: flex;
                flex-wrap: wrap;
                margin-top: 2rem;

                &-item {
                    padding: 2rem;
                    font-size: 3.2rem;
                    margin: .4rem;
                    border-radius: 1.2rem;
                    color: $white;
                    transform: scale(1, 1);
                    transition: transform .22s ease;

                    &:hover {
                        transform: scale(1.1, 1.1);
                    }

                    &.__correct {
                        background-color: $green;
                    }

                    &.__wrong {
                        background-color: $red;
                    }
                }
            }
        }
    }

</style>
