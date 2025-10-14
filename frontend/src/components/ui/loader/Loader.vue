<template>
    <div v-if="isLoadingStore" class="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center">
        <Spinner class="size-8" />
    </div>
</template>
<script setup lang="ts">
import Spinner from '../spinner/Spinner.vue';

interface IProps {
    isLoadingStore: boolean
}

defineProps<IProps>()


</script>