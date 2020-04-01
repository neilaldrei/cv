<template>
    <div class="uk-container">
        <div class="uk-card uk-card-default uk-width-1">
            <h3 class="uk-padding-small uk-text-left" style="background: #F44336; color: #fff;">Timeline</h3>
            <div class="uk-card-body">
                <div class="timeline">
                    <div class="entry" v-for="(year, index) in years" :key="index">
                        <div class="title" uk-scrollspy="cls: uk-animation-slide-left-small; repeat: true">
                            <h3>{{ year.year }}</h3>
                        </div>
                        
                        <div class="body" uk-scrollspy="cls: uk-animation-slide-right-small; delay: 500; repeat: true">
                            <h1 class="uk-text-uppercase" uk-scrollspy="cls: uk-animation-slide-top-small; delay: 600; repeat: true">{{ year.title }}</h1>
                            <h3 class="uk-text-uppercase" uk-scrollspy="cls: uk-animation-slide-right-small; delay: 600; repeat: true">{{ year.subtitle }}</h3>
                            <p class="uk-text-uppercase" uk-scrollspy="cls: uk-animation-slide-bottom-small; delay: 600; repeat: true">{{ year.loc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Timeline",
    data() {
        return {
            years: [
                {
                    year: "2001 - 2007",
                    icon: "mdi-school",
                    color: "indigo",
                    title: "Naga Central School I",
                    subtitle: "Grade School",
                    loc: "Naga City, Camarines Sur, PH"
                },
                {
                    year: "2007 - 2011",
                    icon: "mdi-school",
                    color: "indigo",
                    title: "Naga College Foundation",
                    subtitle: "Highschool",
                    loc: "Naga City, Camarines Sur, PH"
                },
                {
                    year: "2011 - 2013",
                    icon: "mdi-school",
                    color: "indigo",
                    title: "Naga College Foundation",
                    subtitle: "Bachelor of Science in Criminology",
                    loc: "Naga City, Camarines Sur, PH"
                },
                {
                    year: "2016 - 2017",
                    icon: "mdi-school",
                    color: "indigo",
                    title: "University of Nueva Caceres",
                    subtitle: "Bachelor of Science in Information & Technology",
                    loc: "Naga City, Camarines Sur, PH"
                },
                {
                    year: "2015 - 2019",
                    icon: "mdi-briefcase",
                    color: "indigo",
                    title: "JTTNet",
                    subtitle: "Encoder",
                    loc: "Naga City, Camarines Sur, PH"
                },
                {
                    year: "2018 - Present",
                    icon: "mdi-briefcase",
                    color: "indigo",
                    title: "Freelancer",
                    subtitle: "Full Stack Developer",
                    loc: "Naga City, Camarines Sur, PH"
                },
                {
                    year: "2019 - Present",
                    icon: "mdi-briefcase",
                    color: "indigo",
                    title: "Merge Point Systems Solution",
                    subtitle: "Full Stack Developer",
                    loc: "Naga City, Camarines Sur, PH"
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
@container-shadow: 0.5rem 0.5rem 2rem 0 rgba(black, 0.2);

@gutter: 30px;
@border-width: 4px;
@dot-diameter: 8px;

* {
    box-sizing: border-box;
}

.timeline {
    width:100%;
    max-width:75%;
    margin: auto;
    background:#fff;
    padding: 100px 50px;
    position: relative;
    &:before {
        content: '';
        position: absolute;
        top: 0px;
        left:calc(33% + 15px); //@gutter/2
        bottom: 0px;
        width: @border-width;
        background: #ddd;
    }
    &:after {
        content: "";
        display: table;
        clear: both;
    } 
}

.entry {
    clear: both;
    text-align: left;
    position: relative;
    .title {
        margin-bottom: .5em;
        float: left;
        width: 33%;
        padding-right: @gutter;
        text-align: right;
        position: relative;
        &:before {
            content: '';
            position: absolute;
            width: @dot-diameter;
            height: @dot-diameter;
            border: @border-width solid #F44336;
            background-color:#fff;
            border-radius:100%;
            top: 15%;
            right: -@dot-diameter;
            z-index: 99;
        }
        h3 {
            margin: 0;
            font-size: 14pt;
            font-family: 'Open Sans', sans-serif;
            font-weight: bolder;
            color: #F44336;
        }
        p {
            margin: 0;
            font-size: 100%;
        }
    }
    .body {
        margin: 0 0 3em;
        float: right;
        width: 66%;
        padding-left: @gutter;
        border-bottom: 1px solid #F44336;
        h1 {
            margin: 0;
            font-weight: normal;
            color: #505050;
            font-size: 22pt;
        }
        h3 {
            margin: 0;
            color: #444;
            font-size: 12pt;
        }

        p {
            margin: 20px 0;
            font-size: 9pt;
        }
    }
}
</style>