<template>
   
        <div v-if="props.featured" class="grid grid-cols-1 pb-8 text-center">
            <h3 class=" md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Weekend Getaways
            </h3>

            <p class="text-slate-400 max-w-xl mx-auto">A great plateform to explore.</p>
        </div><!--end grid-->
        

        <div v-if="props.featureds"  :class="featuredgrid">
            <div v-for="item in datas.slice(0, 6)" :key="item"
                class="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                <div class="relative">
                    <img :src="item.image" alt="">

                    <div class="absolute top-4 end-4">
                        <!-- <a href="javascript:void(0)"
                            class="btn btn-icon bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600"><i
                                class="mdi mdi-heart text-[20px]"></i></a> -->
                                <!-- <p class="text-lg pa-10 font-medium bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-orange-400 dark:text-orange-400 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600">{{ item.discount }}</p> -->
                    </div>
                </div>

                <div class="p-6">
                    <div class=" flex justify-between">
                        <!-- <router-link :to="{name: 'property-detail-two', params: {id: item.id}}"
                            class="text-lg hover:text-orange-400 font-medium ease-in-out duration-500">{{ item.name}}</router-link> -->
                        <div>
                        <p class="text-lg md:text-sm hover:text-orange-400 font-medium ease-in-out duration-500">{{ item.name }}</p>
                        
                        <ul class=" flex items-center list-none">
                        <!-- <li class="flex items-center me-4">
                            <i class="uil uil-compress-arrows text-2xl me-2 text-orange-400"></i>
                            <span>{{ item.sqf }}</span>
                        </li> -->

                        <li class="flex items-center me-4">
                            <i class="uil uil-bed-double text-2xl md:text-sm me-2 text-orange-400"></i>
                            <span class="md:text-sm">{{ item.day }}</span>
                        </li>

                        <li class="flex items-center ">
                            <!-- <i class="uil uil-bath text-2xl me-2 text-orange-400"></i> -->
                            <span class="text-sm md:text-sm me-2 text-orange-400">{{ item.discount }}</span>
                        </li>
                        
                    </ul>
                        </div>
                        <div>
                            <!-- <span class="text-slate-400">Price</span> -->
                            <p class="text-sm md:text-sm font-small"><del>{{ item.price }}</del></p>
                            <p class="text-lg md:text-sm font-medium">{{ item.mrp }}</p>
                        </div>
                    </div>

                    

                    <!-- <ul class="pt-6 flex justify-between items-center list-none"> -->
                        <!-- <li>
                            <span class="text-slate-400">Price</span>
                            <p class="text-lg font-medium"><del>{{ item.price }}</del></p>
                            <p class="text-lg font-medium">{{ item.mrp }}</p>
                        </li> -->

                        <!-- <li>
                            <span class="text-slate-400">Rating</span>
                            <ul class="text-lg font-medium text-amber-400 list-none">
                                <li v-for="star in item.star" :key="star" class="inline me-1"><i :class="star"></i></li>
                                <li class="inline text-black dark:text-white">{{ item.rating}}</li>
                            </ul>
                        </li> -->
                    <!-- </ul> -->
                </div>
            </div><!--end property content-->
        </div><!--en grid-->
 
        <div v-else :class="grids">
            <div v-for="item in datas" :key="item"
                class="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                <div class="relative">
                    <img :src="item.image" alt="">

                    <div class="absolute top-4 end-4">
                        <a href="javascript:void(0)"
                            class="btn btn-icon bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600"><i
                                class="mdi mdi-heart text-[20px]"></i></a>
                    </div>
                </div>

                <div class="p-6">
                    <div class="pb-6">
                        <router-link :to="{name: 'property-detail', params: {id: item.id}}"
                            class="text-lg hover:text-green-600 font-medium ease-in-out duration-500">{{ item.name}}</router-link>
                    </div>

                    <ul class="py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
                        <!-- <li class="flex items-center me-4">
                            <i class="uil uil-compress-arrows text-2xl me-2 text-green-600"></i>
                            <span>{{ item.sqf }}</span>
                        </li> -->

                        <li class="flex items-center me-4">
                            <i class="uil uil-bed-double text-2xl me-2 text-green-600"></i>
                            <span>{{ item.day}}</span>
                        </li>

                        <!-- <li class="flex items-center">
                            <i class="uil uil-bath text-2xl me-2 text-green-600"></i>
                            <span>{{ item.baths }}</span>
                        </li> -->
                    </ul>

                    <ul class="pt-6 flex justify-between items-center list-none">
                        <li>
                            <span class="text-slate-400">Price</span>
                            <p class="text-lg font-medium">{{ item.price }}</p>
                            <p class="text-lg font-medium">{{ item.mrp }}</p>
                        </li>

                        <li>
                            <span class="text-slate-400">Rating</span>
                            <ul class="text-lg font-medium text-amber-400 list-none">
                                <li v-for="star in item.star" :key="star" class="inline me-1"><i :class="star"></i></li>
                                <li class="inline text-black dark:text-white">{{ item.rating}}</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div><!--end property content-->
        </div><!--en grid-->
        
</template>

<script setup>
import { ref, defineProps} from 'vue';

const props = defineProps({
    featured: {
        type: Boolean,
        required: true
    },
    featureds: {
        type: Boolean,
        required: true
    },
    grids: {
        type: String,
        required: true
    },
    featuredgrid: {
        type: String,
        required: true
    }
})

const datas = ref([
    {
        id: 1,
        image: require('../../assets/images/property/1.jpg'),
        name: 'Harishchandragad Trek',
        day: '1 day',
        mrp: '₹949',
        price: '₹1299',
        discount: '27% off',
        rating: '5.0(30)',
        star: ['mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star']
    },
    {
        id: 2,
        image: require('../../assets/images/property/2.jpg'),
        name: 'Kalsubai Trek',
        day: '1 day',
        mrp: '₹949',
        price: '₹1299',
        discount: '27% off',
        rating: '5.0(30)',
        star: ['mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star']
    },
    {
        id: 3,
        image: require('../../assets/images/property/3.jpg'),
        name: 'Devkund Trek',
        day: '1 day',
        mrp: '₹949',
        price: '₹1299',
        discount: '27% off',
        rating: '5.0(30)',
        star: ['mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star']
    },
    {
        id: 4,
        image: require('../../assets/images/property/4.jpg'),
        name: 'Raigad Trek',
        day: '1 day',
        mrp: '₹999',
        price: '₹1299',
        discount: '27% off',
        rating: '5.0(30)',
        star: ['mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star']
    },
])
</script>

<style lang="scss" scoped></style>