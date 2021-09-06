<template>
  <div>
    <p>메인 페이지입니다.</p>
    {{ products }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Mainhome',
  async asyncData(context) {
    const response = await axios.get('http://localhost:3000/products')
    const products = response
    return { products }
  },

  data() {
    return {
      products: ''
    }
  },

  created() {

  }
}
</script>

<style scoped>

</style>
