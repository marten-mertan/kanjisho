export function useMobile() {
    let width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const isMobile = ref(width <= 767 ? true : false);

    function update() {
        width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        isMobile.value = width <= 767 ? true : false;
    }

    onMounted(() => window.addEventListener('resize', update))
    onUnmounted(() => window.removeEventListener('resize', update))

    return isMobile
}
