<script lang="ts" setup>
import type { TaskFilter } from '../types';

const props = defineProps<{
    filter: TaskFilter,
    currentFilter: TaskFilter
}>();

const emits = defineEmits<{
    updateFilter: [filter: TaskFilter]
}>();

</script>

<template>
    <button class="secondary" @click="emits('updateFilter', props.filter)"
        :class="{ contrast: props.filter === props.currentFilter }">{{ props.filter }}</button>
</template>

<style scoped>
button {
    text-transform: capitalize;
}
</style>