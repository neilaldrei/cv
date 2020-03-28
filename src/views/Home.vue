<template>
    <div class="home">
        <portfolio-banner></portfolio-banner>
        <portfolio-skills></portfolio-skills>
        <portfolio-timeline></portfolio-timeline>
        <portfolio-portfolio></portfolio-portfolio>
        <portfolio-footer></portfolio-footer>
    </div>
</template>

<script>
import Skills from "@/components/Skills";
import Banner from "@/components/Banner";
import Timeline from "@/components/Timeline";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export default {
    name: "Home",
    components: {
        "portfolio-banner": Banner,
        "portfolio-skills": Skills,
        "portfolio-timeline": Timeline,
        "portfolio-portfolio": Portfolio,
        "portfolio-footer": Footer,
    }
};
</script>