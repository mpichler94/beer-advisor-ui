import axios from 'axios'
import { useAuthStore } from '@/stores/auth'
import { useToast } from 'primevue/usetoast'

export default class UserService {
  store = useAuthStore()
  toast = useToast()

  async login(username: string, password: string) {
    await axios.post(
      'api/user/login',
      {
        username,
        password
      },
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    )
    const result = await axios.get('/api/user')
    this.store.user = result.data
  }

  async logout() {
    await axios.post('api/user/logout')
    this.store.user = ''
  }

  async signup(username: string, password: string) {
    try {
      await axios.post(
        'api/user/register',
        {
          username,
          password
        },
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      )
      this.toast.add({
        severity: 'success',
        summary: 'User registered',
        life: 3000
      })
    } catch (e: any) {
      this.toast.add({
        severity: 'error',
        summary: 'Error in user registration',
        detail: e.message,
        life: 5000
      })
    }
  }
}
