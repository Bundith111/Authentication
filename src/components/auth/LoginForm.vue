<!-- <template>
  <n-form
    class="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md mx-auto space-y-6"
    label-placement="top"
  >
    <h1 class="text-9xl font-semibold text-center text-gray-800">
      <n-gradient-text size="32" type="success"> Login </n-gradient-text>
    </h1>
    <n-form-item label="Email">
      <n-input v-model:value="email" placeholder="you@example.com" class="w-full" />
    </n-form-item>
    <n-form-item label="Password">
      <n-input
        v-model:value="password"
        type="password"
        show-password-on="click"
        placeholder="Your password"
        class="w-full"
      />
    </n-form-item>
    <n-button
      type="primary"
      block
      size="large"
      class="!bg-green-600 hover:!bg-green-700 transition-all"
      @click="handleLogin"
    >
      Login
    </n-button>
    <div class="text-center text-sm text-blue-600 mt-4">
      <button class="hover:underline" @click="goToRegister">Don't have an account? Register</button>
      <br />
      <button class="hover:underline" @click="goToForgotPassword">Forgot Password?</button>
    </div>
  </n-form>
</template> -->
<!-- <template>
  <div class="min-h-screen flex items-center justify-center pt-96">
    <n-form
      class="rounded-2xl w-[400px] h-[460px] max-w-md mx-auto space-y-6 p-6 shadow-[10px_10px_30px_rgba(0.2,0.2,0.2,0.2)]"
      label-placement="top"
    >
      <h1 class="text-9xl font-semibold text-center text-gray-800">
        <br />
        <n-gradient-text size="32" type="success"> Login </n-gradient-text>
      </h1>
      <br />

      <n-form-item label="Email">
        <n-input
          v-model:value="email"
          placeholder="you@example.com"
          class="w-full"
          @keydown.enter="handleLogin"
        />
      </n-form-item>

      <n-form-item label="Password">
        <n-input
          v-model:value="password"
          type="password"
          show-password-on="click"
          placeholder="Your password"
          class="w-full"
          @keydown.enter="handleLogin"
        />
      </n-form-item>

      <n-button
        type="primary"
        block
        size="large"
        class="!bg-green-600 hover:!bg-green-700 transition-all"
        @click="handleLogin"
      >
        Login
      </n-button>

      <br />
      <div class="text-center text-sm text-blue-600 mt-4">
        <button class="hover:underline" type="button" @click="goToRegister">
          Don't have an account? Register
        </button>
        <br />
        <button class="hover:underline" type="button" @click="goToForgotPassword">
          Forgot Password?
        </button>
      </div>
      <div class="">{{}}</div>
    </n-form>
  </div>
</template> -->

<template>
  <div class="bg-gray-200 w-full min-h-screen flex justify-center items-center">
    <n-card
      title="Card Segmented Demo"
      class="card rounded-2xl shadow-[10px_10px_30px_rgba(0.2,0.2,0.2,0.2)]"
      hoverable
    >
      <n-form class="form w-[400px] h-auto space-y-6" label-placement="top">
        <h1 class="text-9xl font-semibold text-center text-gray-800">
          <br />
          <n-gradient-text size="32" type="success"> LOGIN </n-gradient-text>
        </h1>
        <br /><br />
        <n-form-item label="Email">
          <n-input
            v-model:value="email"
            type="email"
            size="large"
            placeholder="you@example.com"
            class="field"
            @keydown.enter="handleLogin"
          />
        </n-form-item>

        <n-form-item label="Password">
          <n-input
            v-model:value="password"
            type="password"
            size="large"
            show-password-on="click"
            placeholder="Your password"
            class="field"
            @keydown.enter="handleLogin"
          />
        </n-form-item>

        <n-button
          type="primary"
          size="large"
          class="!bg-green-600 hover:!bg-green-700 transition-all btn-login"
          @click="handleLogin"
        >
          Login
        </n-button>
        <!-- <br />
        <div class="text-center text-sm text-blue-600 mt-4">
          <button class="hover:underline" @click="goToLogin">Already have an account? Login</button>
        </div> -->
      </n-form>
    </n-card>
  </div>
</template>

<style scoped>
.card {
  padding: 20px;
}
.form {
  background: transparent;
  padding-bottom: 15px;
}
.btn-login {
  margin-top: 20px;
  width: 100%;
  border-radius: 10px;
}
.field {
  border-radius: 10px;
}
</style>

<script>
import { ref } from 'vue'
import { useMessage } from 'naive-ui'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { useStore } from 'vuex'

export default {
  name: 'LoginTemplate',
  components: {},
  setup() {
    const email = ref('')
    const password = ref('')
    const message = useMessage()
    const router = useRouter()
    const store = useStore()

    const dataFromUserModule = ref('')

    // Read data from state in module
    console.log(store.getters['user/getName']) // => No Name
    // Set data to state in module
    store.commit('user/setName', 'Step 2') // Step 2 - Updated by commit
    console.log(store.getters['user/getName'])
    // call function to execute and request data from server
    store
      .dispatch('user/updateName', {})
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {})

    function handleLogin() {
      if (!email.value || !password.value) {
        message.error('Please fill in all fields')
        return
      }
      try {
        // Adjust the URL to your backend login endpoint
        // await axios.post('http://127.0.0.1:8000/api/login', {
        //   email: email.value,
        //   password: password.value
        // })
        // message.success('Login successful')
        // setTimeout(() => {
        //   router.push('/dashboard')
        // }, 1000)
      } catch (error) {
        message.error(
          error.response?.data?.message ||
            'Invalid credentials. Please check your email and password.',
        )
      }
    }

    const goToRegister = () => {
      router.push('/auth/register')
    }

    const goToForgotPassword = () => {
      router.push('/auth/forgot-password')
    }
    return {
      handleLogin,
      goToForgotPassword,
      goToRegister,
      email,
      password,
    }
  },
}
</script>
