<script setup lang="ts">
import UserService from '@/scripts/UserService'
import { useForm } from 'vee-validate'
import FormInput from '@/components/FormInput.vue'

interface LoginForm {
  username: string
  password: string
}

const service = new UserService()

const { handleSubmit } = useForm<LoginForm>()

const onSubmit = handleSubmit(async (values, action) => {
  try {
    await service.login(values.username, values.password)
  } catch (e: any) {
    action.setFieldError('username', 'Invalid login')
  }
})
</script>

<template>
  <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
    <div class="text-center mb-5">
      <img src="../assets/logo.svg" alt="Image" height="50" class="mb-3" />
      <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
      <span class="text-600 font-medium line-height-3">Don't have an account?</span>
      <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
    </div>

    <form @submit="onSubmit">
      <FormInput id="username" label="User Name" class="w-full mb-3" />
      <FormInput id="password" label="Password" type="password" class="w-full mb-3" />

      <div class="flex align-items-center justify-content-between mb-6">
        <div class="flex align-items-center">
          <PvCheckbox id="rememberme" :binary="true" class="mr-2"></PvCheckbox>
          <label for="rememberme">Remember me</label>
        </div>
        <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer"
          >Forgot password?</a
        >
      </div>

      <PvButton type="submit" label="Sign In" icon="pi pi-user" class="w-full"></PvButton>
    </form>
  </div>
</template>

<style scoped></style>