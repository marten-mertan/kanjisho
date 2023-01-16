/**
 * Глобальные фильтры
 */

export default defineNuxtPlugin(() => {
    return {
        provide: {
            filters: {
                crescentBrackets(text: String) {
                    return text.replace('（', '【').replace('）', '】');
                }
            }
        }
    }
})
