<template>
    <div>
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Must do Trips
            </h3>

            <!-- <p class="text-slate-400 max-w-xl mx-auto">A great plateform to explore.</p> -->
        </div><!--end grid-->
    
        <div :class="grids">
            
            <div v-for="item in datas" :key="item"
                class="group relative h-fit hover:-mt-[5px] overflow-hidden bg-white dark:bg-slate-900 rounded-xl shadow dark:shadow-gray-700 transition delay-150 duration-300 hover:delay-300">
                <div class="relative overflow-hidden ">
                    <img :src="item.image" class="" alt="">
                    <div class="absolute inset-0 bg-black/70 flex items-center">
                        <div class="container relative ">
                            <div class="grid grid-cols-1">
                                <div class="text-center ">
                                    <!-- <p class="text-white text-[20px] text-center px-2.5 py-1 font-medium  h-15 justify-center">{{ item.title }}</p> -->
                                    <p class=" text-white lg:leading-normal leading-normal ">{{ item.title }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- <div class="relative p-6">
                    <div class="">
                        <div class="flex justify-between mb-4">
                            <span class="text-slate-400 text-sm"><i
                                    class="uil uil-calendar-alt text-slate-900 dark:text-white me-2"></i>{{ item.date }}</span>
                            <span class="text-slate-400 text-sm ms-3"><i
                                    class="uil uil-clock text-slate-900 dark:text-white me-2"></i>{{ item.time }}</span>
                        </div>

                        <router-link :to="{ name: '', params: { id: item.id } }"
                            class="title text-xl font-medium hover:text-orange-400 duration-500 ease-in-out">{{ item.title }}</router-link>

                        <div class="mt-3">
                            <router-link :to="{ name: 'blog-detail', params: { id: item.id } }"
                                class="btn btn-link hover:text-green-600 after:bg-green-600 duration-500 ease-in-out">Read
                                More <i class="uil uil-arrow-right"></i></router-link>
                        </div>
                    </div>
                </div> -->
            </div>
            <!--end content-->
        </div><!--end grid-->
    </div>
        <!-- <pagination /> -->
   
</template>

<script setup>
import { ref, defineProps } from 'vue'
// import pagination from '@/components/pagination.vue';

defineProps({
    grids:{
        type: String,
        required: true
    }
})
const datas = ref([
    {
        id: 1,
        image: require('../../assets/images/property/1.jpg'),
        category: 'Residential',
        date: '3rd March, 2023',
        time: '5 min read',
        title: 'NORTH'
    },
    {
        id: 2,
        image: require('../../assets/images/property/2.jpg'),
        category: 'Land',
        date: '3rd March, 2023',
        time: '5 min read',
        title: 'MAHARASHTRA'
    },
    {
        id: 3,
        image: require('../../assets/images/property/3.jpg'),
        category: 'Commercial',
        date: '3rd March, 2023',
        time: '5 min read',
        title: 'WEST'
    },
    {
        id: 4,
        image: require('../../assets/images/property/4.jpg'),
        category: 'Industrial',
        date: '3rd March, 2023',
        time: '5 min read',
        title: 'SOUTH'
    },
   
])

</script>


<style lang="scss" scoped></style>