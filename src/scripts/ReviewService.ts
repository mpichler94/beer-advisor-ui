import { useToast } from 'primevue/usetoast'
import axios from 'axios'

export interface Review {
  id: number
  author: string
  stars: number
  content: string
}

export class ReviewService {
  private toast = useToast()
  private readonly beerId: number

  constructor(beerId: number) {
    this.beerId = beerId
  }

  async createReview(stars: number, content?: string) {
    await axios.post(`/api/reviews/${this.beerId}`, { stars, content })
  }

  async getReviews(): Promise<Review[]> {
    try {
      const result = await axios.get(`/api/reviews/${this.beerId}`)
      return result.data
    } catch (e: any) {
      this.toast.add({
        severity: 'error',
        summary: 'Error fetching reviews',
        detail: e.message,
        life: 5000
      })
      return []
    }
  }
}
