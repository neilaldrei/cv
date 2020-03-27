<template>
    <div class="uk-container-large uk-margin-auto uk-margin-large-top uk-margin-large-bottom">
        <div class="uk-card uk-card-default uk-width-1">
            <h3 class="uk-padding-small uk-text-left" style="background: #F44336; color: #fff;">Skills</h3>
            <div class="uk-card-body">
                <div class="uk-grid-small uk-grid-row-large uk-child-width-1-3 uk-child-width-expand@s" uk-grid>
                    <div class="uk-width-1-4@m" v-for="(skill, index) in primarySkills" :key="index">
                        <span :class="`mdi ${skill.icon} mdi-24px`" :style="`color: ${skill.avatarColor}`"></span>
                        <h3 class="uk-text-uppercase uk-text-small uk-text-light uk-margin-small-top">{{ skill.name }}</h3>
                    </div>
                </div>

                <div class="uk-grid-small uk-grid-row-large uk-child-width-1-3 uk-child-width-expand@s" uk-grid v-if="showAllSkills">
                    <div class="uk-width-1-4@m" v-for="(skill, index) in nonPrimarySkills" :key="index">
                        <span :class="`mdi ${skill.icon} mdi-24px`" :style="`color: ${skill.avatarColor}`"></span>
                        <h3 class="uk-text-uppercase uk-text-small uk-text-light uk-margin-small-top">{{ skill.name }}</h3>
                    </div>
                </div>
            </div>

            <div class="uk-card-footer">
                <button type="button" class="uk-button uk-button-text" @click="showAllSkills = !showAllSkills">See More &nbsp; <span :class="`mdi ${showAllSkills ? 'mdi-arrow-collapse' : 'mdi-arrow-expand'}`"></span></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Skills",
    data() {
        return {
            showAllSkills: false,
            skills: [
                {
                    name: "Vue.Js",
                    icon: "mdi-vuejs",
                    progress: "90%",
                    isPrimary: true,
                    avatarColor: "#41B883",
                    contentColor: "#34495E"
                },
                {
                    name: "Laravel",
                    icon: "mdi-laravel",
                    progress: "85%",
                    isPrimary: true,
                    avatarColor: "#F05340",
                    contentColor: "#6C6C6C"
                },
                {
                    name: "Flutter",
                    icon: "mdi-material-ui",
                    progress: "60%",
                    isPrimary: true,
                    avatarColor: "blue",
                    contentColor: "blue darken-2"
                },
                {
                    name: "Firebase",
                    icon: "mdi-firebase",
                    progress: "80%",
                    isPrimary: true,
                    avatarColor: "#FFA000",
                    contentColor: "#F57C00"
                },
                {
                    name: "JavaScript",
                    icon: "mdi-language-javascript",
                    progress: "80%",
                    isPrimary: true,
                    avatarColor: "#f0db4f",
                    contentColor: "#323330"
                },
                {
                    name: "PHP",
                    icon: "mdi-language-php",
                    progress: "60%",
                    isPrimary: true,
                    avatarColor: "#4f5b93",
                    contentColor: "#99cc99"
                },
                {
                    name: "HTML5",
                    icon: "mdi-language-html5",
                    progress: "85%",
                    isPrimary: true,
                    avatarColor: "#E44D26",
                    contentColor: "grey"
                },
                {
                    name: "CSS3",
                    icon: "mdi-language-css3",
                    progress: "85%",
                    isPrimary: true,
                    avatarColor: "#264de4",
                    contentColor: "#264de4"
                },
                
                {
                    name: "Git",
                    icon: "mdi-git",
                    progress: "75%",
                    isPrimary: false,
                    avatarColor: "#F1502F",
                    contentColor: "#3E2C00"
                },
                {
                    name: "MySQL",
                    icon: "mdi-database",
                    progress: "75%",
                    isPrimary: false,
                    avatarColor: "#f29111",
                    contentColor: "#00758f"
                },
                {
                    name: "C#",
                    icon: "mdi-language-csharp",
                    progress: "50%",
                    isPrimary: false,
                    avatarColor: "#FFA000",
                    contentColor: "#F57C00"
                },
                {
                    name: "ASP.Net MVC",
                    icon: "mdi-dot-net",
                    progress: "40%",
                    isPrimary: false,
                    avatarColor: "indigo",
                    contentColor: "indigo darken-2"
                },
                {
                    name: "Python",
                    icon: "mdi-language-python",
                    progress: "50%",
                    isPrimary: false,
                    avatarColor: "#306998",
                    contentColor: "#FFD43B"
                },
                {
                    name: "React.Js",
                    icon: "mdi-react",
                    progress: "40%",
                    isPrimary: false,
                    avatarColor: "#61dbfb",
                    contentColor: "grey darken-1"
                },
                {
                    name: "React Native",
                    icon: "mdi-nativescript",
                    progress: "30%",
                    isPrimary: false,
                    avatarColor: "#61dbfb",
                    contentColor: "grey darken-1"
                },
                {
                    name: "SEO",
                    icon: "mdi-magnify",
                    progress: "75%",
                    isPrimary: false,
                    avatarColor: "teal",
                    contentColor: "grey darken-2"
                },
                {
                    name: "Responsive",
                    icon: "mdi-responsive",
                    progress: "90%",
                    isPrimary: false,
                    avatarColor: "indigo",
                    contentColor: "indigo darken-3"
                },
                {
                    name: "Photoshop",
                    icon: "mdi-adobe",
                    progress: "65%",
                    isPrimary: false,
                    avatarColor: "#3C327B",
                    contentColor: "#8BC3FC"
                },
                {
                    name: "Unity",
                    icon: "mdi-unity",
                    progress: "70%",
                    isPrimary: false,
                    avatarColor: "red",
                    contentColor: "grey darken-1"
                },
            ],
        }
    },

    computed: {
        primarySkills() {
            return this.skills.filter(skill => skill.isPrimary)
        },

        nonPrimarySkills() {
            return this.skills.filter(skill => !skill.isPrimary)
        }
    }
}
</script>

<style>

</style>