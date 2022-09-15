<template>
    <section>
        <v-container class="hero">
            <v-row>
                <v-col lg="7" md="7" cols="12" align-self="center">
                    <h1 class="hero-title">{{magasin.title}}</h1>
                    <p class="hero-content">
                        {{magasin.description}}
                    </p>
                    <v-btn class="hero-button" @click="$router.push({path: '/contact'})" x-large rounded>
                        Contact-US
                    </v-btn>
                </v-col>
                <v-col lg="5" md="5" cols="12" class="hidden-sm-and-down">
                    <img class="hero-image text-right" alt="hero image" src="../assets/children.jpg">
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Hero",
        data: () => ({

        }),
        props:{
            magasin: Object
        },
        created() {
            this.initialize()
        },
        methods: {
            initialize() {

            }
        },
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }
    section {
        position: relative;
        width: 100%;
        background-image: linear-gradient(to right, rgb(255, 255, 255), rgb(255, 254, 233));
        overflow: hidden;
        padding-top: 100px;
        padding-bottom: 100px;
    }
    .hero-title {
        font-size: 50px;
        color: #66666a;
    }
    .hero-content {
        font-size: 20px;
        color: #66666a;
    }
    .hero-button {
        padding: 50px;
    }
    @media screen and (max-width: 550px) {
        .hero-title {
            font-size: 40px;
        }
        .hero-content {
            font-size: 15px;
        }
    }
    @media screen and (max-width: 280px) {
        .hero-title {
            font-size: 40px;
        }
        .hero-content {
            font-size: 15px;
        }
    }

    .hero-image {
        margin: 0 auto;
        max-width: 400px;
        width: 100%;
        height: auto;
        border-radius: 2.25rem;
        box-shadow: 0 16px 32px 8px rgba(223, 105, 81, .25);
    }
</style>