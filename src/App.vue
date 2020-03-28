<template>
    <div id="app" class="uk-position-relative">
        <router-view />
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {

        }
    },
}
</script>

<style lang="less">
body {
    font-family: 'Open Sans', sans-serif;
    height: 100%;
}

/* width */
::-webkit-scrollbar {
    width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #FFCDD2;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #F44336;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #E53935;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

.uk-card {
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12) !important;
}
</style>
