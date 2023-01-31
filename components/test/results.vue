<template>
    <Transition name="results">
        <div v-if="show" class="results">
            <div class="results__title">Results</div>
            <div class="results-table">
                <div class="results-row">
                    <div class="results-kanji">
                        Kanji
                    </div>
                    <div class="results-user-answer">
                        Your answer
                    </div>
                    <div class="results-answers">
                        Correct answers
                    </div>
                </div>
                <div :class="['results-row', {'__correct': question.status === 'correct'}]"
                    v-for="(question, index) in questions"
                    :key="'results-row-'+index" 
                >
                    <div class="results-kanji">
                        <NuxtLink 
                            :href="`/kanji/${question.kanji}/`"
                            target="_blank"
                            :class="['results-kanji__link']">
                            {{ question.kanji }}
                        </NuxtLink>
                    </div>
                    <div class="results-user-answer">
                        {{ question.variants[question.userAnswerIndex] }}
                    </div>
                    <div class="results-answers">
                        <span
                            v-for="(meaning, index) in question.meanings"
                            :key="'results-answers-'+index" 
                        >
                            {{ meaning }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
    const props = defineProps({
        questions: {
            type: Array,
            default: [],
        },
        show: {
            type: Boolean,
            default: true,
        },
    });
</script>

<style lang="scss" scoped>
.results {
    width: 100%;

    &__title {
        font-size: 2.2rem;
        text-align: center;
        font-weight: 700;
        text-transform: uppercase;

        @include respond-to(mobile) {
            font-size: 2rem;
        }
    }

    &-table {
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
    }

    &-row {
        position: relative;
        display: flex;
        align-items: center;
        border-bottom: .1rem solid $gray-light;

        &:before {
            content: '';
            position: absolute;
            width: .8rem;
            height: .8rem;
            top: calc(50% - .4rem);
            left: .8rem;
            background-color: $red;
            border-radius: 50%;
        }

        &:first-child {
            background-color: $pink;
            color: $white;

            &:before {
                display: none;
            }
        }

        &.__correct {
            &:before {
                background-color: $green;
            }
        }
    }

    &-kanji {
        width: 10%;
        padding: 1.2rem 1.2rem 1.2rem 3rem;

        @include respond-to(mobile) {
            width: 24%;
        }

        &__link {
            font-size: 2rem;
            transition: color .22s ease;

            &:hover {
                color: $pink;
            }
        }
    }

    &-user-answer {
        width: 45%;
        padding: 1.2rem;

        @include respond-to(mobile) {
            width: 38%;
        }
    }

    &-answers {
        width: 45%;
        padding: 1.2rem;

        span:not(:last-child) {
            &:after {
                content: ', ';
            }
        }
    }
}
</style>
