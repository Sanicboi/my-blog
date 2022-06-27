<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import NavBar from './components/NavBar.vue'
import MyFooter from './components/MyFooter.vue';
</script>

<template>
<NavBar/>
<router-view></router-view>
<MyFooter/>
</template>

<style>
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#app {
    min-height: 100vh;
}
</style>
