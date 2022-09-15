<template>
    <div class="services pt-15 pb-15">
        <v-container>
            <h1 class="services-title">{{services_header.title}}</h1>
            <p class="services-content">
                {{services_header.description}}
            </p>
            <v-row class="services-row">
                <v-col md="4" sm="6" cols="12" v-for="index in paginationLength" :key="index">
                    <img class="service-image" alt="service image" height="150" :src="'https://sandfish.club/Dashboard/SandFishBack/public/' + services_content[page * paginationLength - paginationLength + index - 1].image">
<!--                    <img class="service-image" alt="service image" height="150" :src="'http://localhost:8000/' + services_content[page * paginationLength - paginationLength + index - 1].image">-->
                    <h3 class="service-title">{{services_content[page * paginationLength - paginationLength + index - 1].title}}</h3>
                    <p class="service-content">
                        {{services_content[page * paginationLength - paginationLength + index - 1].description}} <br>
                        {{services_content[page * paginationLength - paginationLength + index - 1].created_at}}
                    </p>
                    <v-btn
                        class="service-button"
                        color="#F6B401"
                        outlined rounded
                        @click="$router.push({path: '/details/' + services_content[page * paginationLength - paginationLength + index - 1].id})"
                    >
                        Read more
                    </v-btn>
                </v-col>
            </v-row>
            <div class="text-center mt-6" v-if="services_content.length > 0">
                <v-pagination
                        color="#F6B401"
                        v-model="page"
                        :length="Math.ceil(services_content.length/paginationLength)"
                ></v-pagination>
            </div>
        </v-container>
    </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Services",
        props: {
            services_header: Object,
            services_content: Array,
        },
        data: () => ({
            paginationLength: 6,
            page: 1
        })
    }
</script>

<style scoped>
    .services{
        background-image: linear-gradient(to right, rgb(255, 255, 255), #fafaca);


    }
    .services-row {
        margin-top: 15px;
    }
    .services-content {
        margin-top: 15px;
        font-size: 20px;
    }
    .services-title {
        font-size: 40px;
    }
    .service-image {
        border-radius: 20px;
        width: 80%;
    }
    .service-title {
        margin-top: 10px;
    }
    .service-content {
        margin-top: 10px;
    }
</style>