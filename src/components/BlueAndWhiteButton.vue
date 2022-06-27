<template>
<button @click="cb()" type="submit" class="border-2 bg-blue-600 rounded-full border-white py-2 px-4 hover:text-blue-600 transition-colors duration-300 hover:bg-white">
    <slot>

    </slot>
</button>
</template>
<script setup>
import { defineEmits } from 'vue';
const emit = defineEmits(['cb'])
const cb = () => emit('cb')
</script>