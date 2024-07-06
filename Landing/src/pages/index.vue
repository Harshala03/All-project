<template>
    <navbar :logoLight=true :navLight="'nav-light justify-start'" :container="'container'" />
    <!-- Start Hero -->
    <section class="swiper-slider-hero relative block h-screen" id="home">
        <div class="swiper-container absolute end-0 top-0 w-full h-full">
            <swiper class="swiper-wrapper duration-500" :modules="setup().modules"  :autoplay="autoplay" :speed="2000" >
                <swiper-slide class="swiper-slide flex items-center overflow-hidden ">
                    <div
                        class="slide-inner absolute end-0 top-0 w-full h-full slide-bg-image flex items-center bg-[url('../../assets/images/bg/01.jpg')] bg-center">
                        <div class="absolute inset-0 bg-black/70"></div>
                        <div class="container relative">
                            <div class="grid grid-cols-1">
                                <div class="text-center">
                                    <h1
                                        class="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">
                                        Easy way to find your <br> dream</h1>
                                    <p class="text-white/70 text-xl max-w-xl mx-auto">A great plateform to book your trek.</p>

                                    <!-- <div class="mt-6">
                                        <a href="" class="btn bg-orange-400 hover:bg-orange-400 text-white rounded-md">See
                                            More</a>
                                    </div> -->
                                </div>
                            </div><!--end grid-->
                        </div><!--end container-->
                    </div><!-- end slide-inner -->
                </swiper-slide> <!-- end swiper-slide -->

                <swiper-slide class="swiper-slide flex items-center overflow-hidden">
                    <div
                        class="slide-inner absolute end-0 top-0 w-full h-full slide-bg-image flex items-center bg-[url('../../assets/images/bg/02.jpg')] bg-center bg-cover;">
                        <div class="absolute inset-0 bg-black/70"></div>
                        <div class="container relative">
                            <div class="grid grid-cols-1">
                                <div class="text-center">
                                    <h1
                                        class="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">
                                        We will help you find <br> your Wonderful Trek</h1>
                                    <p class="text-white/70 text-xl max-w-xl mx-auto">A great plateform to book your trek.</p>

                                    <!-- <div class="mt-6">
                                        <a href="" class="btn bg-orange-400 hover:bg-orange-400 text-white rounded-md">See
                                            More</a>
                                    </div> -->
                                </div>
                            </div>
                            <!--end grid-->
                        </div>
                        <!--end container-->
                    </div><!-- end slide-inner -->
                </swiper-slide> <!-- end swiper-slide -->
            </swiper>
            <!-- end swiper-wrapper -->

            <!-- swipper controls -->
            <!-- <div class="swiper-pagination"></div> -->
            <!-- <div
                class="swiper-button-next bg-transparent size-[35px] leading-[35px] -mt-[30px] bg-none border border-solid border-white/50 text-white hover:bg-green-600 hover:border-green-600 rounded-full text-center">
            </div>
            <div
                class="swiper-button-prev bg-transparent size-[35px] leading-[35px] -mt-[30px] bg-none border border-solid border-white/50 text-white hover:bg-green-600 hover:border-green-600 rounded-full text-center">
            </div> -->
        </div><!--end container-->
    </section><!--end section-->
    <!-- Hero End -->
    <section class="relative lg:py-24 py-16">
        <div class="container relative">
           <properties :featured=true :featureds=true  :featuredgrid="'grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]'" />
        </div>
    </section>
    <section class="relative md:pb-24 pb-16">
        <div class="container relative">
            <blogs :grids="'grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-[30px]'"/>
        </div>
    </section>
    <!-- <switcher /> -->
    <footers />
</template>

<script setup>
import {ref} from 'vue'
import navbar from '@/components/navbar/navbar.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
// import buysell from '@/components/buy-sell-rent/buy-sell-rent.vue';
// import transparency from '@/components/transparency-control.vue';
// import howitwork from '@/components/how-it-work.vue';
import properties from '@/components/featured-properties/featured-properties.vue';
import blogs from '@/components/blog/blogs.vue';
// import buy from '@/components/buy-sell-rent/price-list.vue';
// import users from '@/components/trusted-users.vue';
// import agents from '@/components/agent-team.vue';
// import client from '@/components/clients/client.vue';
// import getintouch from '@/components/get-in-touch.vue';
// import switcher from '@/components/switcher.vue';
// import agencies from '@/components/agencies/agencies.vue';
import footers from '@/components/footers/footer.vue'

const autoplay = ref({
        delay: 4000,
        disableOnInteraction: true
      })

const setup = () => {
    return {
        modules: [Autoplay,],
    };
};

</script>

<style lang="scss" scoped></style>