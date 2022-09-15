<template>
    <div class="how-it-work pt-15 pb-15 text-center">
        <v-container>
            <h1 class="how-it-work-title">{{how_it_work_header.title}}</h1>
            <p class="how-it-work-content">
                {{how_it_work_header.description}}
            </p>
            <v-row class="how-it-work-row">
                <v-col class="how-it-work-item" md="3" sm="6" cols="12" v-for="index in paginationLength" :key="index" @click="$router.push({path: '/details/' + how_it_work_content[page * paginationLength - paginationLength + index - 1].id})">
                    <img class="how-it-work-item-image" alt="service image" height="150" :src="'http://sorp-bechar.byethost10.com/back-side/example-app/public/' + how_it_work_content[page * paginationLength - paginationLength + index - 1].image">
                    <h3 class="how-it-work-item-title">{{how_it_work_content[page * paginationLength - paginationLength + index - 1].title}}</h3>
                    <p class="how-it-work-item-content">
                        {{how_it_work_content[page * paginationLength - paginationLength + index - 1].description}}
                    </p>
                </v-col>
            </v-row>
<!--            <div class="text-center mt-6" v-if="how_it_work_content.length > 0">-->
<!--                <v-pagination-->
<!--                        v-model="page"-->
<!--                        :length="Math.ceil(how_it_work_content.length/paginationLength)"-->
<!--                ></v-pagination>-->
<!--            </div>-->
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "HowitWork",
        props: {
            how_it_work_header: Object,
            how_it_work_content: Array,
        },
        data: () => ({
            paginationLength: 4,
            page: 1
        })
    }
</script>

<style scoped>
    .how-it-work{
        background-color: #FFFEE9;
    }
    .how-it-work-row {
        margin-top: 15px;
    }
    .how-it-work-content {
        margin-top: 15px;
        font-size: 20px;
    }
    .how-it-work-title {
        font-size: 40px;
    }
    .how-it-work-item-image {
        border-radius: 5%;
        width: 80%;
    }
    .how-it-work-item-title {
        margin-top: 10px;
    }
    .how-it-work-item-content {
        margin-top: 10px;
    }
    .how-it-work-item:hover {
        cursor: pointer;
        border: solid 1px #FFF59E;
        border-radius: 15px;

    }
</style>