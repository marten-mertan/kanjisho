<template>
    <div v-if="srcMp4 || srcWebm" class="ui-video">
        <video ref="video" class="ui-video-content" muted="muted" loop :poster="srcPoster">
            <source :src="srcMp4" type="video/mp4">
            <source :src="srcWebm" type="video/webm">
        </video>
        <div class="ui-video-controls">
            <div v-if="!isPlaying" class="ui-video-controls__play" @click="play">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256,0C114.608,0,0,114.608,0,256s114.608,256,256,256s256-114.608,256-256S397.392,0,256,0z M256,496 C123.664,496,16,388.336,16,256S123.664,16,256,16s240,107.664,240,240S388.336,496,256,496z"></path>
                    <polygon points="189.776,141.328 189.776,370.992 388.672,256.16 "></polygon> 
                </svg>
            </div>
            <div v-if="isPlaying" class="ui-video-controls__pause"  @click="pause">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                    <path stroke-width="2" stroke-miterlimit="10" d="M53.92,10.081 c12.107,12.105,12.107,31.732,0,43.838c-12.106,12.108-31.734,12.108-43.839,0c-12.107-12.105-12.107-31.732,0-43.838 C22.186-2.027,41.813-2.027,53.92,10.081z"></path> 
                    <line stroke-width="2" stroke-miterlimit="10" x1="25" y1="23" x2="25" y2="41"></line> 
                    <line stroke-width="2" stroke-miterlimit="10" x1="38" y1="23" x2="38" y2="41"></line> 
                </svg>
            </div>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        srcMp4: {
            type: String,
            default: null
        },
        srcWebm: {
            type: String,
            default: null
        },
        srcPoster: {
            type: String,
            default: null
        },
    });

    const isPlaying = ref(false);
    const video = ref(null)

    const play = () => {
        video.value.play();
        isPlaying.value = true;
    }

    const pause = () => {
        video.value.pause();
        isPlaying.value = false;
    }
</script>

<style lang="scss" scoped>
    .ui-video {
        position: relative;
        width: 30rem;
        height: 30rem;
        margin-top: 2rem;

        &:hover {
            .ui-video-controls {
                opacity: 1;
                transform: translateY(0);
            }
        }

        &-content {
            width: 100%;
            height: 100%;
        }

        &-controls {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            transform: translateY(.3rem);
            transition: opacity .22s ease, transform .22s ease;

            &__play {
                position: absolute;
                top: calc(50% - 2.5rem);
                left: calc(50% - 2.5rem);
                width: 5rem;
                height: 5rem;
                cursor: pointer;
                transform: scale(1, 1);
                transition: transform .22s ease;

                &:hover {
                    transform: scale(1.1, 1.1);
                }

                svg {
                    width: 100%;
                    height: 100%;
                    fill: $pink;
                }
            }

            &__pause {
                position: absolute;
                top: calc(50% - 2.5rem);
                left: calc(50% - 2.5rem);
                width: 5rem;
                height: 5rem;
                cursor: pointer;
                transform: scale(1, 1);
                transition: transform .22s ease;

                &:hover {
                    transform: scale(1.1, 1.1);
                }

                svg {
                    width: 100%;
                    height: 100%;
                    stroke: $pink;
                    fill: none;
                }
            }
        }
    }
</style>
