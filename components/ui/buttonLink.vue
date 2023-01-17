<template>
    <NuxtLink :href="link" class="ui-button-link">
        {{ text }}
    </NuxtLink>
</template>

<script setup>
    defineProps({
        text: {
            type: String,
            default: 'text',
        },
        link: {
            type: String,
            default: '/',
        },
    });
</script>

<style lang="scss" scoped>
    .ui-button-link {
        position: relative;
        display: block;
        width: 100%;
        max-width: 30rem;
        padding: 1.4rem 2.4rem;
        margin: 1.8rem auto 0 auto;
        text-align: center;
        font-size: 1.6rem;
        color: $white;
        border-radius: 2.4rem;
        background-size: 300% 100%;
        background-image: linear-gradient(to left, $pink, $pink, $pink-light, $pink, $pink);
        transition: all .3s ease-in-out;
        cursor: pointer; 

        &:hover {
            background-position: 100% 0;
        }
    }
</style>
