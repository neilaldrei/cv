<template>
    <div class="uk-container-large uk-margin-auto uk-margin-large-top uk-margin-large-bottom">
        <div class="uk-card uk-card-default uk-width-1">
            <div class="uk-flex uk-flex-between" style="background: #F44336;">
                <h3 class="uk-padding-small uk-text-left uk-margin-auto-vertical" style="color: #fff;">Portfolio</h3>
            </div>

            <div class="uk-card-body">
                <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin-medium-bottom" uk-grid v-for="(webApp, index) in webApps" :key="index">
                    <div class="uk-card-media-left uk-cover-container">
                        <div class="uk-animation-reverse uk-transform-origin-top-left" uk-scrollspy="cls: uk-animation-kenburns; repeat: true">
                            <img :src="webApp.image" alt="" uk-cover>
                            <canvas width="600" height="400"></canvas>
                        </div>
                    </div>

                    <div>
                        <div class="uk-card-body">
                            <a :href="webApp.url" target="_blank" class="uk-button uk-button-text uk-card-badge uk-label" uk-icon="link" uk-scrollspy="cls: uk-animation-slide-right-small; repeat: true">Visit</a>
                            <h1 class="uk-card-title uk-text-light" v-text="webApp.title" uk-scrollspy="cls: uk-animation-slide-top-small; repeat: true"></h1>
                            <h3 class="uk-text-light" v-text="webApp.description" uk-scrollspy="cls: uk-animation-slide-left-small; repeat: true"></h3>
                            <h5 class="uk-text-light" v-text="webApp.deployed" uk-scrollspy="cls: uk-animation-slide-bottom-small; repeat: true"></h5>
                        </div>

                        <div class="uk-flex uk-flex-center@s uk-margin-auto uk-padding-small" uk-scrollspy="cls: uk-animation-fade; target: .language-used-pill; delay: 500; repeat: true">
                            <div class="language-used-pill" :style="`border: 2px solid ${lang.iconColor}`" v-for="(lang, index) in webApp.languages" :key="index">
                                <span :class="`mdi ${lang.icon} mdi-16px`" :style="`color: ${lang.iconColor};`"></span> &nbsp;
                                <p v-text="lang.name"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Portfolio",
    data() {
        return {
            showList: true,
            webApps: [
                {
                    title: "MAADDS Enterprise",
                    description: "A promotion website for NCF Students that will be used to promote their product for their thesis.",
                    image: require("../assets/images/maadds.png"),
                    url: "https://maaddsenterprise.firebaseapp.com/",
                    deployed: "JUNE 2018",
                    languages: [
                        {
                            icon: "mdi-vuejs",
                            name: "Vue.JS",
                            iconColor: "#42b883"
                        },
                        {
                            icon: "mdi-firebase",
                            name: "Firebase",
                            iconColor: "#FFA000"
                        },
                    ]
                },
                {
                    title: "Triton Swim Club",
                    description: "A Web App for promoting, managing athletes and marketplace for their swimming equipments.",
                    image: require("../assets/images/triton.png"),
                    url: "http://triton-swim-club.herokuapp.com/",
                    deployed: "OCT 2018",
                    languages: [
                        {
                            icon: "mdi-vuejs",
                            name: "Vue.JS",
                            iconColor: "#42b883"
                        },
                        {
                            icon: "mdi-laravel",
                            name: "Laravel",
                            iconColor: "#F05340"
                        },
                    ]
                },
                // {
                //     title: "CBSUA Mr. and Ms. College of Vet Med Poll",
                //     description: "A poll web app that will be used for CBSUA 2019 Pageant",
                //     image: require("../assets/images/cbsua-poll.png"),
                //     url: "https://cbsua-cvm-poll.firebaseapp.com/",
                //     deployed: "FEB 2019",
                //     languages: [
                //         {
                //             icon: "mdi-vuejs",
                //             name: "Vue.JS",
                //             iconColor: "#42b883"
                //         },
                //         {
                //             icon: "mdi-firebase",
                //             name: "Firebase",
                //             iconColor: "#FFA000"
                //         },
                //     ]
                // },
                {
                    title: "Anchovies Lumpia Express",
                    description: "A website for NCF students to promote their project.",
                    image: require("../assets/images/anchovies.png"),
                    url: "https://anchovies-lumpia-enterprise.firebaseapp.com/",
                    deployed: "NOV 2019",
                    languages: [
                        {
                            icon: "mdi-vuejs",
                            name: "Vue.JS",
                            iconColor: "#42b883"
                        },
                        {
                            icon: "mdi-firebase",
                            name: "Firebase",
                            iconColor: "#FFA000"
                        },
                    ]
                },
                {
                    title: "NCF CBA Annex",
                    description: "A promotion website to showcase the new NCF Annex building for the CBA Students.",
                    image: require("../assets/images/ncf-annex.png"),
                    url: "https://ncf-cba-annex.firebaseapp.com/",
                    deployed: "NOV 2019",
                    languages: [
                        {
                            icon: "mdi-vuejs",
                            name: "Vue.JS",
                            iconColor: "#42b883"
                        },
                        {
                            icon: "mdi-firebase",
                            name: "Firebase",
                            iconColor: "#FFA000"
                        },
                    ]
                },
                {
                    title: "JTTNet Messenger",
                    description: "A messaging app to manage payment status of applicant's reference number",
                    image: require("../assets/images/jttnet.png"),
                    url: "http://flippy-dippy.herokuapp.com/",
                    deployed: "DEC 2019 | ALPHA ONLY",
                    languages: [
                        {
                            icon: "mdi-vuejs",
                            name: "Vue.JS",
                            iconColor: "#42b883"
                        },
                        {
                            icon: "mdi-laravel",
                            name: "Laravel",
                            iconColor: "#F05340"
                        },
                    ]
                },
                // {
                //     title: "CBSUA Pageant 2020",
                //     description: "A web app for CBSUA Pageant 2020 that will be used by judges to instantly calculate their given scores.",
                //     image: require("../assets/images/cbsua-2020.png"),
                //     url: "https://cbsua-pageant-2020.herokuapp.com/",
                //     deployed: "FEB 2020",
                //     languages: [
                //         {
                //             icon: "mdi-vuejs",
                //             name: "Vue.JS",
                //             iconColor: "#42b883"
                //         },
                //         {
                //             icon: "mdi-laravel",
                //             name: "Laravel",
                //             iconColor: "#F05340"
                //         },
                //     ]
                // },
                // {
                //     title: "CBSUA MLBB",
                //     description: "A web app for the CBSUA MLBB tounament that will handle the registration and randomize all match-ups as well as score management.",
                //     image: require("../assets/images/cbsua-mlbb.png"),
                //     url: "https://cbsua-ml.firebaseapp.com/",
                //     deployed: "FEB 2020",
                //     languages: [
                //         {
                //             icon: "mdi-vuejs",
                //             name: "Vue.JS",
                //             iconColor: "#42b883"
                //         },
                //         {
                //             icon: "mdi-firebase",
                //             name: "Firebase",
                //             iconColor: "#FFA000"
                //         },
                //     ]
                // },
                {
                    title: "Starshop",
                    description: "A web & mobile app for online selling and other delivery services.",
                    image: require("../assets/images/shoppers.jpg"),
                    url: "http://nshop.herokuapp.com/",
                    deployed: "JULY 2020 | ALPHA",
                    languages: [
                        {
                            icon: "mdi-vuejs",
                            name: "Vue.JS",
                            iconColor: "#42b883"
                        },
                        {
                            icon: "mdi-laravel",
                            name: "Laravel",
                            iconColor: "#F05340"
                        },
                    ]
                },
                {
                    title: "JJ AQUAFRANCIA",
                    description: "A web app for payroll and taking customer orders.",
                    image: require("../assets/images/ss.jpg"),
                    url: "http://jjaquafrancia.herokuapp.com/",
                    deployed: "AUGUST 2020 | ALPHA ONLY",
                    languages: [
                        {
                            icon: "mdi-vuejs",
                            name: "Vue.JS",
                            iconColor: "#42b883"
                        },
                        {
                            icon: "mdi-laravel",
                            name: "Laravel",
                            iconColor: "#F05340"
                        },
                    ]
                },
            ]
        }
    },
}
</script>

<style scoped>
.uk-card .uk-card-default .uk-card-body > h1 {
    font-size: 24pt;
    margin: 0;
    text-align: left;
}

.uk-card .uk-card-default .uk-card-body > h3 {
    font-size: 16pt;
    margin: 0;
    text-align: left;
}

.uk-card .uk-card-default .uk-card-body > h5 {
    font-size: 11pt;
    text-align: left;
}

.language-used-pill {
    margin: 0 18px;
    border-radius: 50px;
    padding: 10px 15px;
}

.language-used-pill > * {
    display: inline;
    margin: 0;
    padding: 0;
}

.uk-label:hover {
    color: #FFF!important;
}
</style>