import { defineStore } from "pinia";

const state = () => ({
    api: {
        kanji: '/api/public/search/advanced/'
    },
    data: {
        kanji: [],
    },
})

const getters = {}

const actions = {
    async fetchData(name, params) {
        const {HEADER_KEY, HEADER_HOST, BASE_URL} = useRuntimeConfig();
        const options = {
            headers: {
                'X-RapidAPI-Key': HEADER_KEY,
                'X-RapidAPI-Host': HEADER_HOST,
            },
            params: params,
        };
        const data = await $fetch(BASE_URL + this.api[name], options)
        console.log('Fetched data: ', data);
        this.data[name] = data;
    },
}

export const useStore = defineStore('store', {
    state,
    getters,
    actions
})