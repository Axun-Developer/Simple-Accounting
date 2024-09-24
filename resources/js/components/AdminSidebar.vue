<template>

    <aside class="sidebar">

        <!-- Header -->
        <section class="header">

            <div>
                <img src="" alt="">
                <h4>簡易記帳系統</h4>
            </div>

            <i class="fa fa-bars"></i>

        </section>

        <!-- Search Box -->
        <section class="search-box">

            <div class="inputbox">
                <i class="fa fa-search"></i>
                <input name="terms" type="text" placeholder="搜索">
            </div>

        </section>

        <!-- List -->
        <section class="list">

            <ul class="routes-link">
                <li class="route-link" v-for="route in routes" >
                    <a :href="route.href">
                        <i :class='["fa", route.class]'></i>
                        <p>{{ route.name }}</p>
                    </a>
                </li>
            </ul>

            <div class="account">
                你好
            </div>

        </section>

    </aside>

</template>

<script setup>
import { ref, defineProps, defineEmits, defineExpose } from "vue";
import routeLinks from "../navbar.js";

const routes = ref(routeLinks);
</script>

<style lang="scss" scoped>

aside.sidebar {
    @apply flex flex-col bg-primary min-w-48 h-screen shadow;
    section.header {
        @apply flex justify-between items-center px-5 py-4 bg-green-800;
    }
    section.search-box{
        @apply px-6 pt-8;
        div.inputbox {
            @apply rounded p-3 bg-primary-darker;
            i {
                @apply ps-2;
            }
            input {
                @apply rounded ps-3;
            }
        }
    }
    section.list {
        @apply flex flex-col flex-1 text-sm justify-between;
        ul.routes-link {
            @apply flex flex-col justify-center gap-y-1 px-6 py-5;
            li.route-link {
                @apply rounded px-4 py-4 cursor-pointer hover:bg-primary-darker;
                a {
                    @apply flex items-center;
                }
            }
        }
        div.account {
            @apply bg-primary-dark p-3;
        }
    }
}

</style>
