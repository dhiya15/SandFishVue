<template>
    <div class="why-us" id="why-us">
        <v-container >
            <v-row class="pt-15 pb-15">
                <v-col lg="7" sm="12" md="6">
                    <p class="why-us-brand">{{why_us_header.title}}</p>
                    <h1 class="why-us-title">{{why_us_content.title}}</h1>
                    <p class="pt-5 pl-10">
<!--                        <v-row class="why-us-content">-->
<!--                            <v-icon color="#249088" size="30">mdi-check</v-icon>-->
<!--                            <span class="mx-2"></span>-->
<!--                            <span>Excellence in Healthcare every.</span>-->
<!--                        </v-row>-->
                        <v-row class="why-us-content">
                            <span v-html="why_us_content.content"></span>
                        </v-row>
                    </p>
                </v-col>
                <v-col align-self="center" lg="5" md="6" align="center" class="text-center hidden-sm-and-down">
                    <img class="why-us-image" alt="why-us image" height="300" src="../assets/child.png">
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "WhyUS",
        props: {
            why_us_header: Object,
            why_us_content: Object
        }
    }
</script>

<style scoped>
    .why-us {
        background-image: linear-gradient(to right, #FFFBC8, rgb(252, 242, 155));
    }
    .why-us-brand {
        background-color: #FFF157;
        padding: 18px;
        font-size: 20px;
        font-weight: bold;
        border-top-left-radius: 30px;
        border-bottom-right-radius: 30px;
        display: inline-block;
        color: #66666a;
    }
    .why-us-title {
        font-size: 35px;
        color: #66666a;
    }
    .why-us-content{
        font-size: 18px;
        color: #66666a;
    }
    .why-us-image {
        margin: 0 auto;
        max-width: 400px;
        width: 100%;
        height: auto;
        border-radius: 2.25rem;
        box-shadow: 0 16px 32px 8px rgba(223, 105, 81, .25);
    }
</style>