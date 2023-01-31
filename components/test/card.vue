<template>
    <Transition name="bottom-fade">
        <div v-if="show" class="test-card">
            <div class="test-card__info">
                Question {{ currentQuestion+1 }} / {{ kanjiArray.length }}
            </div>
            <div class="test-card__kanji">
                {{ questions[currentQuestion].kanji }}
            </div>
            <div :class="['test-card-variants', {'__not-answered': questions[currentQuestion].status === 'notAnswered'}]">
                <div v-for="(variant, index) in questions[currentQuestion].variants"
                :key="'test-card-variants-item-'+index" 
                :class="['test-card-variants__item', {'__correct': questions[currentQuestion].userAnswerIndex === index && questions[currentQuestion].status === 'correct'}, {'__wrong': questions[currentQuestion].userAnswerIndex === index && questions[currentQuestion].status === 'wrong'}]"
                @click="selectAnswer(index)"
                >
                    {{ variant }}
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
    const props = defineProps({
        kanjiArray: {
            type: Array,
            required: true,
        },
        questions: {
            type: Array,
            required: true,
        },
        currentQuestion: {
            type: Number,
            required: true,
        },
        show: {
            type: Boolean,
            default: true,
        },
    });

    const emit = defineEmits(['selectAnswer'])

    const selectAnswer = (index) => {
        emit('selectAnswer', index);
    }
</script>

<style lang="scss" scoped>
.test-card {
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

        @include respond-to(mobile) {
            width: 100%;
            font-size: 12rem;
            padding: 2rem;
            margin-top: 2rem;
        }
    }

    &-variants {
        display: flex;
        flex-wrap: wrap;
        margin-top: 5rem;

        @include respond-to(mobile) {
            margin-top: 2rem;
        }

        &.__not-answered {
            .test-card-variants__item {
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
            border-radius: 3.4rem;
            font-size: 1.8rem;
            text-align: center;
            margin: 0 .6rem .8rem;
            background-color: $white;
            pointer-events: none;
            transition: background-color .22s ease, color .22s ease;

            @include respond-to(mobile) {
                width: calc(50% - 1.2rem);
                padding: 1.4rem 1.2rem;
                font-size: 1.6rem;
            }

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
}
</style>
