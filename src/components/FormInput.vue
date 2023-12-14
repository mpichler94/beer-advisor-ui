<script setup lang="ts">
import { useField } from 'vee-validate'

const props = defineProps<{
  id: string
  label: string
}>()

const { value, errorMessage } = useField<string>(props.id)
</script>

<template>
  <div class="p-float-label">
    <InputText v-bind="$attrs" v-model="value" :class="{ 'p-invalid': errorMessage }" />
    <label>{{ label }}</label>
  </div>
</template>
<style scoped></style>