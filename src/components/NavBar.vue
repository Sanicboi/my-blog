<template>
<nav class="sticky text-white bg-blue-600 py-2 top-0 flex items-center justify-between font-mono">
    <h1 class="font-bold cursor-pointer text-2xl transition-colors hover:text-red-300 duration-300" @click="$router.push('/')">My-blog.com</h1>
    <span class="cursor-pointer hidden sm:inline transition-colors hover:text-red-300 duration-300" @click="$router.push('/browse/users')">Browse users</span>
    <span class="cursor-pointer hidden sm:inline transition-colors hover:text-red-300 duration-300" @click="$router.push('/browse/blogs')">Browse blogs</span>
    <span class="cursor-pointer sm:hidden transition-all relative" data-dropdown-parent>browse
        <div data-dropdown-child class="absolute left-1/2  -translate-x-1/2 flex-wrap">
            <span class="p-2 bg-white hover:text-white transition-colors duration-300 text-black hover:bg-red-300 cursor-pointer" @click="$router.push('/browse/users')">users</span>
            <span class="p-2 bg-white hover:text-white transition-colors duration-300 text-black hover:bg-red-300 cursor-pointer" @click="$router.push('/browse/blogs')">blogs</span>
        </div>
    </span>
    <blue-and-white-button @cb="$router.push('/signup')">Sign up</blue-and-white-button>
    <!--TODO: make sure that this is shown only when user is not logged in-->
</nav>
</template>
<script setup>
import BlueAndWhiteButton from './BlueAndWhiteButton.vue';
</script>
<style scoped lang="less">
[data-dropdown-parent]:hover [data-dropdown-child] {
    display: flex !important;
}

[data-dropdown-child] {
    display: none !important;
}
</style>