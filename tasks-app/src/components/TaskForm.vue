<script lang="ts" setup>
import { ref } from 'vue';

const newTask = ref('');
const error = ref('');
const emit = defineEmits<{
    addTask: [newTask: string]
}>();

function addTask() {
    if (newTask.value.trim()) {
        emit('addTask', newTask.value.trim());
        newTask.value = '';
    } else {
        error.value = 'Task cannot be empty';
    }
}

</script>

<template>
    <form @submit.prevent="addTask">
        <label>
            New Task
            <input type="text" v-model="newTask" name="newTask" :aria-invalid="!!error || undefined"
                @input="error = ''" />
            <small v-if="error" id="invalid-helper">{{ error }}</small>
        </label>
        <div class="button-container">
            <button>Add Task</button>
        </div>
    </form>
</template>