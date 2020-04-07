<template>
    <div class="profile-contacts uk-margin-medium-bottom">
        <div class="uk-flex uk-flex-around uk-margin-small-bottom uk-grid-small" style="border-bottom: 1px solid #e5e5e5;" uk-scrollspy="cls: uk-animation-slide-top; target: .contacts; delay: 500; repeat: true" uk-grid>
            <div class="contacts uk-width-expand@s " v-for="(contact, index) in contacts" :key="index">
                <span :class="`mdi ${contact.icon} mdi-28px contact-icon`"></span>
                <h4 class="contact">{{ contact.title }}</h4>
            </div>
        </div>

        <div class="uk-flex uk-flex-around uk-margin-small-top" uk-scrollspy="cls: uk-animation-slide-bottom; target: .contacts; delay: 500; repeat: true">
            <div v-for="(social, index) in socials" :key="index" class="contacts">
                <a :href="social.url" target="_blank" :class="social.title" :style="`color: ${social.color}`">
                    <span :class="`mdi ${social.icon} mdi-36px`"></span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProfileContacts",
    data() {
        return {
            socials: [
                {
                    title: "github",
                    icon: "mdi-github",
                    color: "#333",
                    url: "https://github.com/neilaldrei",
                },
                {
                    title: "messenger",
                    icon: "mdi-facebook-messenger",
                    color: "#0084ff",
                    url: "https://www.messenger.com/t/neilaldrei",
                },
                {
                    title: "twitter",
                    icon: "mdi-twitter",
                    color: "#1da1f2",
                    url: "https://twitter.com/neilaldrei",
                },
                {
                    title: "linked-in",
                    icon: "mdi-linkedin",
                    color: "#0077b5",
                    url: "https://www.linkedin.com/in/neil-aldrei-091878144/",
                },
            ],

            contacts: [
                {
                    title: "NAGA CITY, CAMARINES SUR, PH",
                    icon: "mdi-map-marker"
                },
                {
                    title: "NEILALDREIII@GMAIL.COM",
                    icon: "mdi-at"
                },
                {
                    title: "+63915-204-4704",
                    icon: "mdi-cellphone"
                },
            ]
        }
    }
}
</script>

<style scoped>
.profile-contacts {
    width: 100%;
}

.contact {
    font-size: 12pt;
    margin-left: 0;
    margin-right: 0;
    margin-top: 8px;
    margin-bottom: 14px;
    letter-spacing: 2px;
}

.contact-icon {
    color: #F44336;
}
.github
.messenger
.twitter
.linked-in {
    text-decoration: none;
}
</style>