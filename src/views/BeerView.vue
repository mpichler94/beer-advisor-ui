<script setup lang="ts">
import { ref } from 'vue'
import { type Review, ReviewService } from '@/scripts/ReviewService'
import BeerReview from '@/components/BeerReview.vue'

const reviews = ref<Review[]>()
const service = new ReviewService(1)
</script>

<template>
  <PvPanel header="Murauer Bier">
    <div class="flex flex-wrap justify-content-around gap-3"></div>
  </PvPanel>
  <beer-review
    class="review"
    v-for="review in reviews"
    :author="review.author"
    :stars="review.stars"
    :content="review.content"
    :key="review.id"
  />
</template>

<style scoped>
.review:first-of-type {
  margin-top: 1rem;
}

.review:not(:last-of-type) {
  margin-bottom: 1rem;
}
</style>