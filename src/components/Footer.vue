<template>
    <div>
        <portfolio-contacts></portfolio-contacts>
        <hr>
        <h3 class="uk-text-light">
            <strong>
                {{ new Date().getFullYear() }} — 
                <div class="animate-letters" uk-scrollspy="cls: uk-animation-fade; target: .letters; delay: 300; repeat: true">
                    <span class="letters">N</span> 
                    <span class="letters">e</span> 
                    <span class="letters">i</span>
                    <span class="letters">l</span>
                    <span class="letters" style="margin: 0 4px;"> &nbsp; </span> 
                    <span class="letters">A</span>
                    <span class="letters">l</span> 
                    <span class="letters">d</span>
                    <span class="letters">r</span>
                    <span class="letters">e</span> 
                    <span class="letters">i</span> 
                </div>
            </strong>
        </h3>
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
.animate-letters {
    display: inline-block;
}
</style>