<template>
    <nav class="header-menu">
        <div class="header-menu-background"
             :class="{'__open' : isMenuOpen && isMobile}"
             @click="closeMenu"
        ></div>
        <div class="header-menu-burger"
                :class="{'__open' : isMenuOpen && isMobile}"
                @click="toggleMenu">
            <span class="header-menu-burger-line"></span>
            <span class="header-menu-burger-line"></span>
            <span class="header-menu-burger-line"></span>
        </div>
        <Transition name="menu-fade">
            <ul v-if="isMenuOpen || !isMobile" class="header-menu-list">
                <li v-for="(item, index) of items" 
                    :key="'header-menu-list-item-'+index" 
                    class="header-menu-list-item"
                >
                    <NuxtLink :href="item.link" 
                              class="header-menu-list-item__link" 
                              active-class="menu-link-active"
                              @click.native="onLink(item)"
                    >
                        {{item.title}}
                    </NuxtLink>
                </li>
            </ul>
        </Transition>
    </nav>
</template>

<script setup>
    defineProps({
        items: {
            type: Array,
            required: true,
        },
    })

    const route = useRoute();
    const isMobile = useMobile();

    const isMenuOpen = ref(false);

    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
        document.documentElement.style.overflowY = isMenuOpen.value ? 'hidden' : 'auto';
    }

    const closeMenu = () => {
        isMenuOpen.value = false;
        document.documentElement.style.overflowY = 'auto';
    }

    const onLink = (item) => {
        if (item.link === route.path) {
            return;
        }
        closeMenu();
    }
</script>

<style lang="scss" scoped>
    .header-menu {
        margin-left: 2rem;

        &-background {
            position: absolute;
            top: $header-h-m;
            left: 0;
            height: calc(100vh - $header-h-m);
            width: 100%;
            background: $black;
            opacity: 0;
            visibility: hidden;
            transition: all .6s ease;

            &.__open {
                opacity: .7;
                visibility: visible;
            }
        }

        &-list {
            display: flex;

            @include respond-to(mobile) {
                position: absolute;
                top: calc($header-h-m - 1rem);
                left: 0;
                width: 100%;
                padding: 2.5rem 0;
                flex-direction: column;
                background: $white;
                z-index: 1000;
                border-bottom: .1rem solid $gray-light;
            }

            &-item {
                display: flex;

                &__link {
                    font-size: 1.2rem;
                    font-weight: 600;
                    padding: 1rem;
                    text-transform: uppercase;
                    transition: color .22s ease;

                    @include respond-to(mobile) {
                        font-size: 2rem;
                        padding: .8rem $mobile-padding;
                    }

                    &:hover {
                        color: $pink;
                    }
                }
            }
        }

        &-burger {
            position: relative;
            width: calc($mobile-padding * 2 + $burger-line-w);
            height: $header-h-m;
            margin-left: auto;
            display: none;

            @include respond-to(mobile) {
                display: flex;
            }

            &.__open {
                .header-menu-burger-line {
                    opacity: 0;
                    transform: rotate(-180deg);
                    top: calc($header-h-m / 2 - .1rem);

                    &:first-child {
                        opacity: 1;
                        transform: rotate(135deg);
                    }

                    &:last-child {
                        opacity: 1;
                        transform: rotate(225deg);
                    }
                }
            }

            &-line {
                position: absolute;
                height: $burger-line-h;
                width: $burger-line-w;
                background-color: $pink;
                top: calc(($header-h-m - $burger-line-h) / 2);
                left: $mobile-padding;
                border-radius: .2rem;
                transition: all .6s cubic-bezier(.9,-0.74,0,1.65);

                &:first-child {
                    top: calc($header-h-m/2 - .9rem);
                }

                &:last-child {
                    top: calc($header-h-m/2 + .7rem);
                }
            }
        }
    }
</style>
