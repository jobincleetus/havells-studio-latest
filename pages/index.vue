<template>
  <main>
    <navbar />
    <banner />
    <home-tech />
    <highlights />
  </main>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style lang="scss" scoped>
   .grid-section {
    min-height: 100vh;
    padding: 90px 0;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
