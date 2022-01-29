<template>
    <div class="page-container dark-header">
        <contact-details />
        <contact-banner />
        <contact-form />
    </div>
</template>

<script>
export default {
    mounted() {
        var contactBanner = gsap.timeline({
            scrollTrigger:{
                trigger: "#contact_banner",
                start: "0% 100%",
                end: "100% 50%",
                toggleActions: "restart none none reverse",
                scrub: 0.5
            }
        });

        contactBanner.from("#contact_banner .bg-img-holder", {scale:"1.2", duration: 1.3, transformOrigin: "50% 50%"}, "0.5");
    }
}
</script>