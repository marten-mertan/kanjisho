<template>
    <div class="kanjilist-menu-list">
        <div 
            class="kanjilist-menu-list__title"
        >{{title}}</div>
        <ul class="kanjilist-menu-list-content">
            <li v-for="(level) in endLevel - startLevel + 1"
                :key="`kanjilist-menu-list-content-item-${level+startLevel-1}`" 
                class="kanjilist-menu-list-content-item"
                :class="{'__current': route.params.slug === `${level+startLevel-1}`}"
            >
                <NuxtLink class="kanjilist-menu-list-content-item__link" 
                          :href="`/kanjigrades/${level+startLevel-1}/`"
                >
                    Grade level {{level+startLevel-1}}
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
    const route = useRoute();

    defineProps({
        title: {
            type: String,
            required: true,
        },
        startLevel: {
            type: Number,
            required: true,
        },
        endLevel: {
            type: Number,
            required: true,
        },
    });
</script>

<style lang="scss" scoped>
    .kanjilist-menu-list {
        &__title {
            padding: 1rem 0;
            border-bottom: .1rem solid $gray-light;
            font-weight: 700;
            font-size: 1.7rem;
        }

        &-content {
            display: flex;
            flex-wrap: wrap;
            padding: 1rem 0;

            &-item {
                padding: .4rem 0 .4rem 1.2rem;
                font-size: 1.4rem;
                width: 50%;

                @include respond-to(mobile) {
                    width: 13rem;
                }

                &.__current {
                    pointer-events: none;
                    color: $pink;
                }

                &__link {
                    transition: color .22s ease;

                    &:hover {
                        color: $pink;
                    }

                }
            }
        } 
    }
</style>
