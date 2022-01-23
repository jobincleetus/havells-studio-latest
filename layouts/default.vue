<template>
    <main>
        <navbar />
        <Nuxt />
        <footer-main />
    </main>
</template>

<script>

export default {
    mounted() {
        var navbarAnim = gsap.timeline();

        navbarAnim.from(".navbar-container", 0.5, {autoAlpha:0}, "+=1");
    }
}
</script>
