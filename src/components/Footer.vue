<template>
    <div>
        <portfolio-contacts></portfolio-contacts>
        <hr>
        <h5><strong>{{ new Date().getFullYear() }} — Neil Aldrei</strong></h5>
    </div>
</template>

<script>
import Contacts from "./Contacts";

export default {
    name: "Footer",
    components: {
        "portfolio-contacts": Contacts,
    }
}
</script>

<style>

</style>