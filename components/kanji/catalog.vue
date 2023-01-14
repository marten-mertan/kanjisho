<template>
    <div class="loading" v-if="items.length === 0"></div>
    <div v-else class="kanji-catalog">
        <NuxtLink v-for="(item, index) in items"
                :key="'kanji-catalog-item-'+index" 
                :href="`/kanji/${item.kanji.character}`"
                class="kanji-catalog-item">
            <span class="kanji-catalog-item__kanji">{{ item.kanji.character }}</span>
            <span class="kanji-catalog-item__strokes">strokes: {{ item.kanji.stroke }}</span>
        </NuxtLink>
    </div>
</template>

<script setup>
    defineProps({
        items: {
            type: Array,
            required: true,
        },
    })
</script>

<style lang="scss" scoped>
    .kanji-catalog {
        display: flex;
        flex-wrap: wrap;

        &-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 14rem;
            height: 14rem;
            border: .1rem solid $gray-light;
            margin-bottom: -.1rem;
            margin-right: -.1rem;
            background: $white;
            box-shadow: rgba(17, 12, 46, 7%) 0 0 0 0;
            transform: scale(1, 1);
            z-index: 1;
            cursor: pointer;
            transition: transform .22s ease, box-shadow .22s ease;

            &:hover {
                box-shadow: rgba(17, 12, 46, 7%) 0 2.4rem 5rem 0;
                transform: scale(1.2, 1.2);
                z-index: 2;
            }

            &__kanji {
                font-size: 3rem;
            }

            &__strokes {
                font-size: 1.4rem;
                margin-top: .8rem;
            }
        }
    }

</style>
