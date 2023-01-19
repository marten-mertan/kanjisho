<template>
    <Transition name="bottom-fade">
        <button v-if="show" class="ui-button" @click="onClick">
            {{ text }}
        </button>
    </Transition>
</template>

<script setup>
    const props = defineProps({
        text: {
            type: String,
            default: 'text',
        },
        show: {
            type: Boolean,
            default: true,
        },
    });

    const emit = defineEmits(['onClick'])

    const onClick = () => {
        if (!props.show) {
            return
        }

        emit('onClick');
    }
</script>

<style lang="scss" scoped>
    .ui-button {
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
