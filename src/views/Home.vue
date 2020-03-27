<template>
    <div class="home">
        <portfolio-banner></portfolio-banner>
        <portfolio-skills></portfolio-skills>
    </div>
</template>

<script>
import Skills from "@/components/Skills";
import Banner from "@/components/Banner";

export default {
    name: "Home",
    components: {
        "portfolio-banner": Banner,
        "portfolio-skills": Skills,
    }
};
</script>
