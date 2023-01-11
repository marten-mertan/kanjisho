<template>
    <div class="kanji-catalog">
        <div v-for="(item, index) in items"
                :key="'kanji-catalog-item-'+index" 
                class="kanji-catalog-item">
            {{ item.kanji.character }}
        </div>
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
            font-size: 2rem;;
            padding: 1rem;
        }
    }

</style>
