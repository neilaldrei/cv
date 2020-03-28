<template>
    <div class="home">
        <portfolio-banner></portfolio-banner>
        <portfolio-skills></portfolio-skills>
        <portfolio-timeline></portfolio-timeline>
        <portfolio-portfolio></portfolio-portfolio>
    </div>
</template>

<script>
import Skills from "@/components/Skills";
import Banner from "@/components/Banner";
import Timeline from "@/components/Timeline";
import Portfolio from "@/components/Portfolio";

export default {
    name: "Home",
    components: {
        "portfolio-banner": Banner,
        "portfolio-skills": Skills,
        "portfolio-timeline": Timeline,
        "portfolio-portfolio": Portfolio,
    }
};
</script>