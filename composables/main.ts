export function useMobile() {
    const isMobile = ref(screen.width <= 767 ? true : false);

    function update() {
        isMobile.value = screen.width <= 767 ? true : false;
    }

    onMounted(() => window.addEventListener('resize', update))
    onUnmounted(() => window.removeEventListener('resize', update))

    return isMobile
}
