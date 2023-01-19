<template>
	<div class="page container">
		<div class="content">
            <div v-if="!questions[currentQuestion]" class="loading"></div>
            <div v-else class="test">
                <TestCard 
                    :kanjiArray="kanjiArray"
                    :questions="questions"
                    :currentQuestion="currentQuestion"
                    :show="!showResults"
                    @selectAnswer="selectAnswer"
                
                />
                <UiButton :show="questions[currentQuestion].status !== 'notAnswered' && currentQuestion + 1 < kanjiArray.length" 
                          text="Next"
                          @onClick="nextQuestion"
                />
                <UiButton :show="!showResults && questions[currentQuestion].status !== 'notAnswered' && currentQuestion + 1 === kanjiArray.length" 
                          text="Show results"
                          @onClick="showResults = true"
                />
                <TestResults 
                    :show="showResults"
                    :questions="questions"
                />
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

    const showResults = ref(false);

    const fetchQuestion = (index, kanjiList) => {
        if (questions.value[index]) {
            return
        }
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
                    'userAnswerIndex': -1,
                }
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
                'userAnswerIndex': -1,
            }
        }
    }

    const nextQuestion = () => {
        currentQuestion.value += 1;
    }

    if(kanjiArray.value.length) {
        fetchQuestion(0, kanjiArray.value);
        fetchQuestion(1, kanjiArray.value);
    }

    watch([currentQuestion, () => kanjiArray.value], ([index, kanjiList]) => {
        console.log('asd', index, kanjiList[index].kanji.character);
        fetchQuestion(index, kanjiList);
        if (index + 1 < kanjiList.length) {
            fetchQuestion(index+1, kanjiList);
        }
    })

    const selectAnswer = (index) => {
        questions.value[currentQuestion.value].userAnswerIndex = index;
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
    }

</style>
