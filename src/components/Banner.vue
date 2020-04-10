<template>
    <div class="profile-banner uk-height-1-1 uk-width-1-1 uk-flex uk-flex-column uk-flex-between" uk-height-viewport>
        <div class="banner-row uk-margin-auto uk-flex-1 uk-flex uk-flex-center@m uk-flex-left@s">
            <div class="uk-margin-auto-vertical uk-width-1-3@m uk-expand@s">
                <div class="banner-avatar uk-margin-auto" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                    <img src="../assets/images/epic-neil-gamer.jpg" alt="" uk-scrollspy="cls: uk-animation-kenburns; repeat: true">
                </div>
            </div>
            
            <div class="uk-margin-auto-vertical uk-expand@s uk-width-1-3@m uk-expand@s" uk-scrollspy="cls: uk-animation-fade; target: .banner-text; delay: 500; repeat: true">
                <h1 class="banner-text lastname uk-margin-small uk-text-light">PERALTA</h1>
                <h1 class="banner-text firstname uk-margin-small uk-text-light">NEIL ALDREI</h1>
                <h4 class="banner-text title uk-margin-small uk-text-light"><i>WEB DEVELOPER</i></h4>
                <h3 class="banner-text intro">
                    Hello! My name is Neil. I'm a self taught developer.
                    I do freelance web development work from time to time. 
                    If you need help creating or finishing your website, I'll be glad to help.
                </h3>
                
                <a href="https://drive.google.com/open?id=1kYPEWclLakqYq8lX2ArYBFdjL-r4O15h" target="_blank" class="banner-text intro uk-button uk-button-text"><span class="mdi mdi-file-account"></span> RESUME</a>
            </div>
        </div>

        <profile-contacts></profile-contacts>
    </div>
</template>

<script>
import Contacts from "./Contacts";
export default {
    name: "ProfileBanner",
    components: {
        "profile-contacts": Contacts
    }
}
</script>

<style>
@media only screen and (max-width: 430px) {
    .banner-row {
        flex-flow: column!important;
        margin-top: 20px;
    }

    .banner-row>div {
        margin: 15px 0;
    }

    .banner-row h1, 
    .banner-row h4, 
    .banner-row h3,
    .banner-row a {
        text-align: center!important;
    }
}
.banner-avatar {
    height: 275px;
    width: 275px;
    background: #F44336;
    border-radius: 50%;
    overflow: hidden;
}

div.uk-margin-auto-vertical>*{
    text-align: left;
}

.lastname {
    font-size: 22pt;
}

.firstname {
    font-size: 32pt;
}

.title {    
    font-size: 9pt;
    letter-spacing: 2px;
}

.intro {
    font-size: 12pt;
}

a.banner-text {
    transition: color 500ms;
}

a.banner-text:hover {
    color: #F44336;
}
</style>