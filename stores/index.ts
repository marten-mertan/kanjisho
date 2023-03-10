import { defineStore } from "pinia";

const state = () => ({
    api: {
        kanji: '/api/public/kanji/',
        kanjigrades: '/api/public/search/advanced/',
        kanjilists: '/api/public/search/advanced/',
    },
    data: {
        kanji: {},
        kanjigrades: {},
        kanjilists: {},
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

    async fetchDynamicData(name, index, params) {
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
        this.data[name][index] = data;
    },

    async fetchDynamicAdditionData(name, index, params) {
        const {HEADER_KEY, HEADER_HOST, BASE_URL} = useRuntimeConfig();
        const options = {
            headers: {
                'X-RapidAPI-Key': HEADER_KEY,
                'X-RapidAPI-Host': HEADER_HOST,
            },
            params: params,
        };
        const data = await $fetch(BASE_URL + this.api[name] + index + '/', options)
        console.log('Fetched data: ', data);
        this.data[name][index] = data;
        return data
    }
}

export const useStore = defineStore('store', {
    state,
    getters,
    actions
})