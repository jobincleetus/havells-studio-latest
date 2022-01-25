<template>
    <footer class="footer-container">
        <div class="container">
            <div class="row widgets-holder">
                <div class="col-sm-6">
                    <img src="~/assets/imgs/havells-logo.svg" alt="Havells Studio" class="footer-logo" />
                    <p>
                        Havells Studio is a Premium Brand with a unique offering of aesthetically beautiful, modern products backed by futuristic and innovative technology.
                    </p>
                </div>
                <div class="col-sm-2 menu-col">
                    <h5 class="menu-title text-uppercase">
                        PRODUCTS
                    </h5>
                    <ul class="footer-menu">
                        <li><NuxtLink to="/">MEDITATE</NuxtLink></li>
                        <li><NuxtLink to="/">HALO</NuxtLink></li>
                        <li><NuxtLink to="/">ESSENCE</NuxtLink></li>
                    </ul>
                </div>
                <div class="col-sm-2 menu-col">
                    <h5 class="menu-title text-uppercase">
                        COMPANY
                    </h5>
                    <ul class="footer-menu">
                        <li><NuxtLink to="/">ABOUT US</NuxtLink></li>
                        <li><NuxtLink to="/">CONTACT US</NuxtLink></li>
                    </ul>
                </div>
                <div class="col-sm-2 menu-col">
                    <h5 class="menu-title text-uppercase">
                        LEGAL
                    </h5>
                    <ul class="footer-menu">
                        <li><NuxtLink to="/">TERMS OF USE</NuxtLink></li>
                        <li><NuxtLink to="/">PRIVACY POLICY</NuxtLink></li>
                    </ul>
                </div>
            </div>
            <div class="row copyright-row align-items-center">
                <div class="col-sm-6">
                    <p class="gold-text">© Havells Studio 2021</p>
                </div>
                <div class="col-sm-6 text-right">
                    <ul class="social-icons">
                        <li>
                            <a href="#" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="#" target="_blank"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="#" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="#" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="#" target="_blank"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
    </footer>
</template>

<script>
export default{
    name: 'footer-main',
    mounted() {
        if(window.innerWidth < 768) {
            $('.menu-title').click(function(){
                console.log('test');
                $(this).toggleClass('active-menu');
                $(this).parents('.menu-col').toggleClass('expanded-menu');
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .footer-container {
        .widgets-holder p {
            max-width: 450px;
            margin: 0 auto;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        .footer-logo {
            height: 20px;
            margin-bottom: 20px;
        }
        .menu-title {
            margin-bottom: 20px;
            font-weight: 800;
            letter-spacing: 2px;
            font-size: 16px;
        }

        .footer-menu li {
            margin: 10px auto;
            font-size: 14px;
            a {
                color: #332B29;
            }
        }
        .social-icons {
            display: grid;
            grid-template-columns: repeat(5, max-content);
            justify-content: flex-end;
            grid-gap: 20px;
        }
        .gold-text {
            font-size: 14px;
        }
    }
</style>
