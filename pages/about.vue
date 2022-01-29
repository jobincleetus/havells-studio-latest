<template>
    <div class="page-container dark-header">
        <about-banner />
        <company-overview />
        <vision-mission />
        <our-values />
        <about-cta />
    </div>
</template>

<script>
export default {
    mounted() {
        var categoryBanner = gsap.timeline();

        categoryBanner.from("#about_banner .bg-img-holder", {scale:"1.2", duration: 1.3, transformOrigin: "50% 50%"}, "0.5");

        
        var vmBanner = gsap.timeline({
            scrollTrigger:{
                trigger: "#vision_mission",
                start: "0% 100%",
                end: "50% 30%",
                toggleActions: "restart none none reverse",
                scrub: 0.5
            }
        });

        vmBanner.from("#vision_mission .bg-img-holder", {scale:"1.2", duration: 1.3, transformOrigin: "50% 50%"}, "0.5");

        
        var aboutCtaBanner = gsap.timeline({
            scrollTrigger:{
                trigger: "#about_cta",
                start: "0% 100%",
                end: "50% 50%",
                toggleActions: "restart none none reverse",
                scrub: 0.5
            }
        });

        aboutCtaBanner.from("#about_cta .bg-img-holder", {scale:"1.2", duration: 1.3, transformOrigin: "50% 50%"}, "0.5");
    }
}
</script>
