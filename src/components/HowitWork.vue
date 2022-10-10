<template>
    <div class="how-it-work pt-15 pb-15 text-center" id="services">
        <v-container>
            <h1 class="how-it-work-title">{{how_it_work_header.title}}</h1>
            <p class="how-it-work-content">
                {{how_it_work_header.description}}
            </p>
            <v-row class="how-it-work-row text-center" align="center" align-content="center" justify="center">
                <v-col md="3" sm="6" cols="12" v-for="index in paginationLength" :key="index">
                    <div class="how-it-work-item" @click="$router.push({path: '/details/' + how_it_work_content[page * paginationLength - paginationLength + index - 1].id})" v-if="index <= how_it_work_content.length">
                        <img class="how-it-work-item-image" alt="service image" height="150" :src="'https://sandfish.club/Dashboard/SandFishBack/public/' + how_it_work_content[page * paginationLength - paginationLength + index - 1].image">
    <!--                    <img class="how-it-work-item-image" alt="service image" height="150" :src="'http://localhost:8000/' + how_it_work_content[page * paginationLength - paginationLength + index - 1].image">-->
    <!--                    -->
                        <h3 style="text-overflow: ellipsis; padding-left: 10px; padding-right: 10px" class="how-it-work-item-title">{{how_it_work_content[page * paginationLength - paginationLength + index - 1].title}}</h3>
                        <p style="text-overflow: fade; padding-left: 10px; padding-right: 10px" class="how-it-work-item-content">
                            {{how_it_work_content[page * paginationLength - paginationLength + index - 1].description}}
                        </p>
                    </div>
                </v-col>
            </v-row>
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
            paginationLength: 3,
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
    .how-it-work-item {
        padding-top: 30px;
        padding-bottom: 30px;
        background-color: #fafaca;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        height: 380px;
    }
    .how-it-work-item-title {
        margin-top: 10px;
    }
    .how-it-work-item-content {
        margin-top: 10px;
    }
    .how-it-work-item:hover {
        cursor: pointer;
        background-color: #fff4b9;
    }
</style>