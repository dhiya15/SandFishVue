<template>
    <div class="footer">
        <v-row class="text-center">
            <v-col class="footer-item" md="4" cols="12">
                <h3 class="footer-item-title">{{magasin.name}}</h3>
                <p class="footer-item-content">{{magasin.footer_short_des}}<p/>
            </v-col>
            <v-col class="footer-item" md="4" cols="12">
                <h3 class="footer-item-title">Address & Contact</h3>
                <p class="footer-item-content">
                    <span><v-icon>mdi-email</v-icon> {{magasin.email}}</span>
                    <br>
                    <span><v-icon>mdi-phone</v-icon> {{magasin.phone}}</span>
                    <br>
                    <span><v-icon>mdi-map-marker</v-icon> {{magasin.address}}</span>
                </p>
            </v-col>
            <v-col class="footer-item" md="4" cols="12">
                <h3 class="footer-item-title">Be Social with US</h3>
                <p class="footer-item-content pt-2">
                    <v-row class="text-center" justify="center">
                        <v-col cols="1"><a :href="'//' + magasin.facebook" target="_blank"><v-icon color="blue">mdi-facebook</v-icon></a></v-col>
                        <v-col cols="1"><a :href="'//' + magasin.twitter" target="_blank"><v-icon color="blue">mdi-twitter</v-icon></a></v-col>
                        <v-col cols="1"><a :href="'//' + magasin.instagram"><v-icon>mdi-instagram</v-icon></a></v-col>
                        <v-col cols="1"><a :href="'//' + magasin.google_plus"><v-icon color="red">mdi-youtube</v-icon></a></v-col>
                    </v-row>
                </p>
                <p>
                    Copyright © {{magasin.name}} - {{new Date().getFullYear() }}
                </p>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Footer",
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

<style scoped>
    .footer {
        padding: 30px;
        background-image: linear-gradient(to right, #fff4b9, rgb(255, 254, 233));
    }
    .footer-item-content {
        margin-top: 10px;
    }
    a {
        text-decoration: none;
    }
</style>