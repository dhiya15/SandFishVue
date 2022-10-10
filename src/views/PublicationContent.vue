<template>
    <div>
        <Header/>
        <div class="content">
            <v-container>
                <h1>{{pub.title}}</h1>
                <small>{{pub.created_at}}</small>
                <p>{{pub.description}}</p>
<!--                <img height="200" width="300" :src="'http://sorp-bechar.byethost10.com/back-side/example-app/public/' + pub.image"/>-->
                <img height="200" width="300" :src="'https://sandfish.club/Dashboard/SandFishBack/public/' + pub.image"/>
                <div><p class="content-description" v-html="pub.content"></p></div>
            </v-container>
        </div>
        <Footer :magasin="magasin"/>
        <v-overlay :value="overlay" color="white" :opacity="1">
            <v-progress-circular
                indeterminate
                size="60"
                color="#FFF59E"
            ></v-progress-circular>
        </v-overlay>
    </div>

</template>

<script>
    import Header from "../components/Header";
    import Footer from "../components/Footer";

    export default {
        name: "PublicationContent",
        components: {Header, Footer},
        props: ['id'],
        data: () => ({
            overlay: false,
            magasin: {},
            pub: {}
        }),
        created() {
            this.initialize()
        },
        mounted() {
            document.title = 'Details'
        },
        methods: {
            initialize() {
                this.overlay = true
                this.$http.get("publication/" + this.id).then(response => {
                    this.overlay = false
                    if(response.data != null){
                        this.magasin = response.data.magasin
                        this.pub = response.data.pub[0]
                    }
                }).catch(error => {
                    console.log(error)
                    this.overlay = false
                })
            },
        }
    }
</script>

<style scoped>
    .content {
        background-color: #FFFEE9;
        padding: 30px;
    }
    .content-description img {
        height: 200px;
        width: 300px;
    }
</style>