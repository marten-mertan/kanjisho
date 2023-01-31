import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: 'static',
    ssr: false,

    /**
     * переменные окружения из .env
     */

    runtimeConfig: {
        public: {
            BASE_URL: process.env.BASE_URL,
            HEADER_KEY: process.env.HEADER_KEY,
            HEADER_HOST: process.env.HEADER_HOST,
        },
    },

    app: {
        baseURL: '/kanjisho/',
        buildAssetsDir: '/kanjisho/n/',

        /**
         * Метатеги, фавиконки и т.п
         * Для генерации фавиконок - https://realfavicongenerator.net/
         */

        head: {
            htmlAttrs: {
                lang: 'en',
            },
            title: 'Kanjisho',
            meta: [
                {
                    charset: 'utf-8'
                },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Kanjisho description',
                },
                /* Favicons */
                {
                    name: 'msapplication-TileColor',
                    content: '#e7609e'
                },
                {
                    name: 'theme-color',
                    content: '#ffffff'
                },
            ],
            link: [
                /* Favicons */
                {rel: 'icon', type: 'image/x-icon', href: '/kanjisho/favicons/favicon.ico'},
                {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/kanjisho/favicons/favicon-32x32.png'},
                {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/kanjisho/favicons/favicon-16x16.png'},
                {rel: 'apple-touch-icon', sizes: '180x180', href: '/kanjisho/favicons/apple-touch-icon.png'},
                {rel: 'manifest', href: '/kanjisho/favicons/site.webmanifest'},
                {rel: 'mask-icon', href: '/kanjisho/favicons/safari-pinned-tab.svg', color: '#e7609e'},
            ],
        },
    },

    /**
     * Подключаем модули
     */

    modules: [
      [
        '@pinia/nuxt',
        {
          autoImports: [
            'defineStore', // import { defineStore } from 'pinia'
            ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
          ],
        },
      ],
    ],

    /**
     * Подключаем плагины
     */

    plugins: [
        {src: '~/plugins/filters'},
    ],

    /**
     * Подключаем файл с вендорными стилями и файл с общими стилями
     */

    css: [
        '~/assets/scss/vendors.scss',
        '~/assets/scss/common.scss'
    ],

    /**
     * Миксины и переменные доступны во всех компонентах и во всех scss файлах
     */
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: [
                        '@import "@/assets/scss/shared/_variables.scss";',
                        '@import "@/assets/scss/shared/_mixins.scss";',
                    ].join(''),
                },
            },
        },
    },
})
