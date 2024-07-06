<template>
    <nav id="topnav"  class="defaultscroll is-sticky">
        <div class="relative" :class="container">
            <!-- Logo container-->
            <router-link v-if="props.logoLight" class="logo" to="/">
                <span class="inline-block dark:hidden">
                    <img src="../../assets/images/logo.png" class="l-dark w-24" height="24" alt="">
                    <img src="../../assets/images/logo.png" class="l-light w-24" height="24" alt="">
                </span>
                <img src="../../assets/images/logo.png" height="24" class="hidden dark:inline-block" alt="">
            </router-link>


            <router-link v-else class="logo" to="/">
                <img src="../../assets/images/logo-dark.png" class="inline-block dark:hidden" alt="">
                <img src="../../assets/images/logo-light.png" class="hidden dark:inline-block" alt="">
            </router-link>
            <!-- End Logo container-->

            <!-- Start Mobile Toggle -->
            <div class="menu-extras" @click="handler">
                <div class="menu-item">
                    <a class="navbar-toggle" id="isToggle" :class="toggle === false ? '' : 'open'">
                        <div class="lines">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </a>
                </div>
            </div>
            <!-- End Mobile Toggle -->

            <!--Login button Start-->
            <ul class="buy-button list-none mb-0">
                <!-- <li class="inline mb-0">
                    <router-link to="/auth-login"
                        class="btn btn-icon bg-orange-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full"><i
                            data-feather="user" class="size-4 stroke-[3]"></i></router-link>
                </li> -->
                <li class="sm:inline ps-1 mb-0 hidden">
                    <a href="tel:88888 40295"
                    class="btn bg-orange-400 hover:bg-orange-500 border-orange-400 dark:border-orange-400 text-white rounded"> +91 88888 40295  </a>
                    <!-- <router-link to="/auth-signup"
                        class="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full">Signup</router-link> -->
                </li>
            </ul>
            <!--Login button End-->

            <div id="navigation" :class="toggle === false ? 'none' : 'block'">
                <!-- Navigation Menu-->
                <ul class="navigation-menu" :class="navLight">
                    <li :class="activeIndex === '/' ? 'active' : ''"><router-link to="/"
                            class="sub-menu-item ">Home</router-link></li>
                    <!-- <li class="has-submenu parent-menu-item"
                        :class="['/home', '/', '/index-two', '/index-three', '/index-four', '/index-five', '/index-six', '/index-seven', '/index-eight'].includes(activeIndex) ? 'active' : ''">
                        <router-link to="" @click="submenu(openMenu === '/home' ? '' : '/home')">Home</router-link><span
                            class="menu-arrow"></span>
                        <ul class="submenu"
                            :class="['/home', '/', '/index-two', '/index-three', '/index-four', '/index-five', '/index-six', '/index-seven', '/index-eight'].includes(openMenu) ? 'open' : ''">
                            <li :class="activeIndex === '/' ? 'active' : ''"><router-link to="/"
                                    class="sub-menu-item">Hero One</router-link></li>
                            <li :class="activeIndex === '/index-two' ? 'active' : ''"><router-link to="/index-two"
                                    class="sub-menu-item">Hero Two</router-link></li>
                            <li :class="activeIndex === '/index-three' ? 'active' : ''"><router-link to="/index-three"
                                    class="sub-menu-item">Hero Three</router-link></li>
                            <li :class="activeIndex === '/index-four' ? 'active' : ''"><router-link to="/index-four"
                                    class="sub-menu-item">Hero Four</router-link></li>
                            <li :class="activeIndex === '/index-five' ? 'active' : ''"><router-link to="/index-five"
                                    class="sub-menu-item">Hero Five</router-link></li>
                            <li :class="activeIndex === '/index-six' ? 'active' : ''"><router-link to="/index-six"
                                    class="sub-menu-item">Hero Six</router-link></li>
                            <li :class="activeIndex === '/index-seven' ? 'active' : ''"><router-link to="/index-seven"
                                    class="sub-menu-item">Hero Seven</router-link></li>
                            <li :class="activeIndex === '/index-eight' ? 'active' : ''"><router-link to="/index-eight"
                                    class="sub-menu-item">Hero Eight </router-link></li>
                        </ul>
                    </li> -->
                    <li class="has-submenu parent-menu-item"
                        :class="['/home', '/yyyyy', '/index-two', '/index-three', '/index-four', '/index-five', '/index-six', '/index-seven', '/index-eight'].includes(activeIndex) ? 'active' : ''">
                        <router-link to="" @click="submenu(openMenu === '/home' ? '' : '/home')">Destination</router-link><span
                            class="menu-arrow"></span>
                        <ul class="submenu"
                            :class="['/home', '/uytuy', '/index-two', '/index-three', '/index-four', '/index-five', '/index-six', '/index-seven', '/index-eight'].includes(openMenu) ? 'open' : ''">
                            <li :class="activeIndex === '/' ? 'active' : ''">
                            <router-link to="/"
                                    class="sub-menu-item">Sahyadri Trek</router-link></li>
                            <li :class="activeIndex === '/index-two' ? 'active' : ''"><router-link to="/"
                                    class="sub-menu-item">North Tour</router-link></li>
                            <li :class="activeIndex === '/index-three' ? 'active' : ''"><router-link to="/"
                                    class="sub-menu-item">East Tour</router-link></li>
                            <li :class="activeIndex === '/index-three' ? 'active' : ''"><router-link to="/"
                                    class="sub-menu-item">West Tour</router-link></li>
                            <li :class="activeIndex === '/index-three' ? 'active' : ''"><router-link to="/"
                                    class="sub-menu-item">South Tour</router-link></li>     
                        </ul>
                    </li>
                    <li :class="activeIndex === '/buy' ? 'active' : ''"><router-link to="/"
                            class="sub-menu-item">Blog</router-link></li>
                    <li :class="activeIndex === '/sell' ? 'active' : ''"><router-link to="/"
                            class="sub-menu-item">About us</router-link></li>
                    <li :class="activeIndex === '/contact' ? 'active' : ''"><router-link to="/"
                            class="sub-menu-item">Contact</router-link></li>
                </ul><!--end navigation menu-->
            </div><!--end navigation-->
        </div><!--end container-->
    </nav><!--end header-->
    <!-- End Navbar -->
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineProps, computed, } from 'vue';
import feather from 'feather-icons'
const menu = ref(true);
const current = ref('');
const toggle = ref(false);
const activeIndex = computed(() => window.location.pathname);
const openMenu = ref('');

const props = defineProps({
    logoLight: {
        type: Boolean,
        required: true
    },
    navLight: {
        type: String,
        required: true
    },
    container: {
        type: String,
        required: true
    }
})

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', onscroll);
    scrollToTop()
    feather.replace();

});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('scroll', onscroll);
});

function handler() {
    toggle.value = !toggle.value;
}

function submenu(item) {
    menu.value = !menu.value;
    openMenu.value = item;
}

function handleScroll() {
    const navbar = document.getElementById("topnav");
    if (window.scrollY >= 50) {
        navbar.classList.add("nav-sticky");
    } else {
        navbar.classList.remove("nav-sticky");
    }
}

function onscroll() {
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll("nav.container.collapse ul li");
    let currentSectionId = ''; // Define a variable to store the current section's id
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
            currentSectionId = section.getAttribute("id");
        }
    });
    navItems.forEach((li) => {
        if (li.classList.contains(currentSectionId)) {
            li.classList.add("active");
        } else {
            li.classList.remove("active");
        }
    });
    current.value = currentSectionId; // Update the current ref
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

</script>

<style lang="scss" scoped></style>