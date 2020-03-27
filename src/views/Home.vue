<template>
    <div class="home">
        <portfolio-banner></portfolio-banner>
        <portfolio-skills></portfolio-skills>
        <portfolio-timeline></portfolio-timeline>
    </div>
</template>

<script>
import Skills from "@/components/Skills";
import Banner from "@/components/Banner";
import Timeline from "@/components/Timeline";

export default {
    name: "Home",
    components: {
        "portfolio-banner": Banner,
        "portfolio-skills": Skills,
        "portfolio-timeline": Timeline,
    }
};
</script>