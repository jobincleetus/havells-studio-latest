<template>
    <section id="banner" class="grid-section">
        <div class="container">
            <h4 class="text-uppercase">Introducing</h4>
            <h1 class="head-level-2">Modern products backed by <br>futuristic & innovative <br>technology.</h1>
            <a href="#" class="btn play-btn mt-4">PLAY VIDEO</a>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #banner {
        background-image: url('~/assets/imgs/bg_desktop.jpg');
        background-size: cover;
        text-align: center;
        color: #fff;
    }
</style>

<script>
export default {
  name: 'banner'
}
</script>