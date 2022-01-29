<template>
    <section id="contact_form">
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <h4 class="sub-gold reveal-text">REGISTERED OFFICE</h4>
                    <h2 class="head-level-4 reveal-text">Get in Touch</h2>
                    <p class="reveal-text">Subscribe for updates and announcements.</p>
                </div>
                <div class="col-sm-6">
                    <form class="form-horizontal">
                            <input v-model="name" type="text" name="name" placeholder="NAME" class="validate-required">
                            <input v-model="email" placeholder="EMAIL" type="email" name="email" class="validate-required validate-email">
                            <input v-model="phone" type="number" name="phone" placeholder="CONTACT" class="validate-required">
                            <textarea v-model="message" placeholder="YOUR QUERY" rows="4" name="message" class="validate-required"></textarea>
                            <!-- <button type="submit" class="btn btn--alt">SUBMIT QUERY</button> -->
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #contact_form {
        .sub-gold {
            font-size: 16px;
        }
    }
</style>

<script>
export default {
    name: 'contact-form'
}
</script>