<template>
    <div class="faq pt-15 pb-15">
        <v-container>
            <h1 class="faq-title">{{faq_header.title}}</h1>
            <p class="faq-content">
                {{faq_header.description}}
            </p>
            <v-row class="faq-row">
                <v-col lg="7" md="6" cols="12">
                    <v-expansion-panels flat>
                        <v-expansion-panel v-for="(item,i) in faq_content" :key="i">
                            <v-expansion-panel-header class="faq-header">
                                {{item.title}}
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <div>
                                    <p>{{item.description}}</p>
                                </div>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-col>
                <v-col lg="5" md="6" align-self="center" align="center" class="text-center hidden-sm-and-down">
<!--                    <img class="faq-image" alt="hero image" height="300" :src="'http://localhost:8000/' + faq_header.image">-->
                   <img class="faq-image" alt="hero image" height="300" :src="'https://sandfish.club/Dashboard/SandFishBack/public/' + faq_header.image">
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Faq",
        props:{
            faq_header: Object,
            faq_content: Array
        },
    }
</script>

<style scoped>
    .faq{
        background-image: linear-gradient(to right, rgb(255, 255, 255), rgb(255, 254, 233));
    }
    .faq-row {
        margin-top: 30px;
    }
    .faq-content {
        margin-top: 15px;
        font-size: 20px;
    }
    .faq-title {
        font-size: 40px;
    }
    .faq-image {
        border-radius: 20px;
        box-shadow: 6px 6px 6px 6px #FFFBC8;
    }
    .faq-header {
        background-color: #FFFEE9;
        margin: 5px;
    }
</style>