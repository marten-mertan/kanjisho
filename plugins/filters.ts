/**
 * Глобальные фильтры
 */

export default defineNuxtPlugin(() => {
    return {
        provide: {
            filters: {
                crescentBrackets(text: String) {
                    return text.replace('（', '【').replace('）', '】');
                },

                shuffle(array: Array<any>) {
                    for (let i = array.length - 1; i > 0; i--) {
                        let j = Math.floor(Math.random() * (i + 1));
                        [array[i], array[j]] = [array[j], array[i]];
                    }
                    return array;
                }
            }
        }
    }
})
