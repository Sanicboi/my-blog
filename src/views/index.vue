<template>
<main class="w-full bg-neutral-100 min-h-screen gap-12  pt-4 px-8 flex flex-col">
    <section class="flex gap-6 flex-wrap justify-between md:flex-nowrap shadow-lg p-6 bg-slate-50 rounded">
        <div class="md:w-1/3 md:flex md:flex-col md:justify-between">
            <h2 class="text-2xl font-bold">My-blog.com - the best blog site.</h2>
            <p class="lg:text-lg md:m-0 mt-4 lg:leading-10 font-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate excepturi mollitia harum? rinhronuhfdob lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum architecto veniam consectetur saepe maxime dolores ad minus, voluptas magni impedit ex cum incidunt totam recusandae animi dolorum fugit enim! Adipisci! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim nisi esse ut ratione quaerat.</p>
        </div>
        <figure class="md:w-1/2">
            <img src="/vectorpaint.svg" class="aspect-video" alt="Some image">
            <figcaption class="text-center text-sm font-thin text-slate-700">Some image</figcaption>
        </figure>
    </section>
    <section class="flex gap-6 flex-wrap justify-between md:flex-nowrap shadow-lg p-16 bg-slate-50 rounded">
        <p class="w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit incidunt, similique ad tempora pariatur adipisci nemo harum saepe natus dolor, quibusdam aliquam expedita qui culpa ipsam sit distinctio iste rem.</p>
        <div class="w-1/3 items-start gap-4 text-white flex flex-col justify-between">
            <h2 class="text-2xl font-bold text-black">Millions of daily viewers</h2>
            <BlueAndWhiteButton class="self-end" @cb="$router.push('/signup')">Sign up</BlueAndWhiteButton>
        </div>
    </section>
    <section class="flex gap-6 flex-wrap justify-between md:flex-nowrap shadow-lg p-16 bg-slate-50 rounded">
        <div class="w-1/3 items-start gap-4 text-white flex flex-col justify-between">
            <h2 class="text-2xl font-bold text-black">Millions of daily viewers</h2>
            <BlueAndWhiteButton class="self-end" @cb="$router.push('/signup')">Sign up</BlueAndWhiteButton>
        </div>
        <p class="w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit incidunt, similique ad tempora pariatur adipisci nemo harum saepe natus dolor, quibusdam aliquam expedita qui culpa ipsam sit distinctio iste rem.</p>
    </section>
</main>
</template>
<script setup>
import BlueAndWhiteButton from '../components/BLueAndWhiteButton.vue'
</script>
<style scoped lang="less">
</style>