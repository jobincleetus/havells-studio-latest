<template>
    <div class="page-container">
        <category-banner />
        <category-about />
        <category-products />
    </div>
</template>

<script>
export default {
    mounted() {
        var categoryBanner = gsap.timeline({
            scrollTrigger:{
            trigger: "#category_banner",
            start: "0% 0%",
            end: "90% 40%",
            scrub: 1,
            // markers: true
        }
        });

        categoryBanner.to("#category_banner .container-first-half", {xPercent:"-15", duration: 2, transformOrigin: "50% 50%"}, "first-scroll");
        categoryBanner.from("#category_banner .container-second-half", {xPercent:"-15", duration: 2, transformOrigin: "50% 50%"}, "first-scroll");

        var havellsLogoCat = gsap.timeline({
            scrollTrigger:{
            trigger: "#category_about",
            start: "-10% 0%",
            toggleActions: "restart none none reverse",
            // markers: true
        }
        });

        havellsLogoCat.to("#category_about .logo-holder-1", {xPercent:"-15", duration: 2, transformOrigin: "50% 50%"}, "first-scroll");
        havellsLogoCat.from("#category_about .logo-holder-2", {xPercent:"-15", duration: 2, transformOrigin: "50% 50%"}, "first-scroll");

        if(window.innerWidth > 768) {
            var havellsLogoCatDown = gsap.timeline({
                scrollTrigger:{
                trigger: "#category_about",
                start: "0% 0%",
                end: "100% 0%",
                scrub: true,
                // markers: true
            }
            });

            havellsLogoCatDown.to(".comp-container", {yPercent:"70", duration: 2, transformOrigin: "50% 50%"}, "first-scroll");
        }

        
        var bgColorOne = $('#category_meditate').data( "color" );
        var bgColorTwo = $('#category_halo').data( "color" );
        var bgColorThree = $('#category_essence').data( "color" );

        console.log(bgColorOne + bgColorTwo + bgColorThree)

        var bgChangeOne = gsap.timeline({
            scrollTrigger:{
            trigger: "#category_halo",
            start: "45% 60%",
            toggleActions: "restart none none reverse",
            // markers: true
        }
        });

        bgChangeOne.to(".category-products", {backgroundColor: bgColorTwo, duration: 1});

        var bgChangeTwo = gsap.timeline({
            scrollTrigger:{
            trigger: "#category_essence",
            start: "45% 60%",
            toggleActions: "restart none none reverse",
            // markers: true
        }
        });

        bgChangeTwo.to(".category-products", {backgroundColor: bgColorThree, duration: 1});

    }
}
</script>