<template>
    <div class="home">
        <portfolio-skills></portfolio-skills>
    </div>
</template>

<script>
import Skills from "@/components/Skills";

export default {
    name: "Home",
    components: {
        "portfolio-skills": Skills,
    }
};
</script>
