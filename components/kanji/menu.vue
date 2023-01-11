<template>
    <div class="kanji-menu">
        <ul class="kanji-menu-list">
            <li v-for="(level) in levelNumbers"
                :key="'kanji-menu-list-item-'+level" 
                class="kanji-menu-list-item"
            >
                <NuxtLink :href="`/kanji/${level}/`">Grade level {{level}}</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
    defineProps({
        levelNumbers: {
            type: Number,
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
