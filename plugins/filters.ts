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
                    const newArray = [...array];
                    for (let i = newArray.length - 1; i > 0; i--) {
                        let j = Math.floor(Math.random() * (i + 1));
                        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
                    }
                    return newArray;
                }
            }
        }
    }
})
