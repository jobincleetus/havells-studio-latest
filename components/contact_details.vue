<template>
    <section id="contact_details">
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <h4 class="sub-gold reveal-text">OUR CORPORATE OFFICE</h4>
                    <h2 class="head-level-3">Noida, India</h2>
                    <div class="contact-pointer contact-pin">
                        QRG Towers, 2D, Sec- 126, Expressway Noida - 201304 U.P. ( India)
                    </div>
                    <div class="contact-pointer contact-phone">
                        <a href="tel:+91-120-4771000">+91 - 120 - 4771000</a>
                        <a href="tel:+91-120-4772000">+91 - 120 - 4772000</a>
                    </div>
                    <div class="contact-pointer contact-mail">
                        marketing@havells.com
                        CIN: L31900DL1983PLC016304
                    </div>
                </div>
                <div class="col-sm-4">
                    <h4 class="sub-gold reveal-text">REGISTERED OFFICE</h4>
                    <div class="contact-pointer contact-pin">
                        904, 9th Floor Surya Kiran Building K.G. Marg Connaught Place New Delhi – 110001
                    </div>
                    <div class="contact-pointer contact-phone">
                        <a href="tel:+91-120-4771000">+91 - 120 - 4771000</a>
                        <a href="tel:+91-120-4772000">+91 - 120 - 4772000</a>
                    </div>
                    <div class="contact-pointer contact-mail">
                        marketing@havells.com
                        CIN: L31900DL1983PLC016304
                    </div>
                </div>
                <div class="col-sm-4">
                    <h4 class="sub-gold reveal-text">FOR CONSUMER COMPLAINT </h4>
                    <div class="contact-pointer contact-pin">
                        QRG Towers, 2D, Sector-126, Expressway, Noida - 201304. U.P. (India)
                    </div>
                    <div class="contact-pointer contact-phone">
                        <a href="tel:08045-77-1313">08045 77 1313</a>
                    </div>
                    <div class="contact-pointer contact-mail">
                        customercare@havells.com
                    </div>
                    <div class="contact-pointer contact-web">
                        www.havells.com
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #contact_details {
        padding-top: 130px;
        padding-bottom: 130px;
        background-color: #FDEDB4;
        .sub-gold {
            font-size: 16px;
            margin-bottom: 20px;
        }
        .contact-pointer {
            position: relative;
            padding-left: 30px;
            padding-right: 30px;
            font-size: 16px;
            color: #332b29c4;
            &:not(:last-child) {
                margin-bottom: 15px;
            }
            a {
                color: #332b29c4;
                display: block;
                width: fit-content;
            }
            &:before {
                content: '';
                position: absolute;
                width: 20px;
                height: 20px;
                left: 0;
                top: 1px;
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
            }
        }
        .contact-pin:before {
            background-image: url('~/assets/imgs/pin.png');
        }
        .contact-mail:before {
            background-image: url('~/assets/imgs/mail.png');
        }
        .contact-web:before {
            background-image: url('~/assets/imgs/web.png');
            height: 25px;
        }
        .contact-phone:before {
            background-image: url('~/assets/imgs/phone.png');
        }
    }
    @media only screen and (max-width: 768px) {
        #contact_details {
            .col-sm-4:not(:last-child) {
                margin-bottom: 40px;
            }
        }
    }
</style>

<script>
export default {
    name: 'contact-details'
}
</script>