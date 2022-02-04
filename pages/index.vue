<template>
  <div class="page-container">
    <banner />
    <home-tech />
    <highlights />
    <product-showcase />
    <testimonials />
    <youtube-video />
  </div>
</template>


<style lang="scss" scoped>
  .page-container {
    position: relative;
    z-index: 1;
  }
</style>

<script>
export default {
  name: 'IndexPage',
  head () {
    return {
      title: 'Home | Havells Studio'
    }
  },
  mounted() {
    
  }
}
</script>
