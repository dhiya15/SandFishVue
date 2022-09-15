<template>
    <div class="department pt-15 pb-15">
        <v-container>
            <h1 class="department-title">{{department_header.title}}</h1>
            <p class="department-content">
                {{department_header.description}}
            </p>
            <v-row class="department-row">
                <v-slide-group>
                    <div @click="$router.push({path: '/details/' + item.id})" class="department-item" v-for="(item, i) in department_content" :key="i">
                        <v-row class="pt-3">
                            <v-icon color="#32ABA3" size="50">mdi-check-circle</v-icon>
                            <span class="mx-3"></span>
                            <div>
                                <h3 style="padding-right: 25px">{{item.title}}</h3>
                                <p class="mt-2">
                                    {{item.description}}
                                </p>
                            </div>
                        </v-row>
                    </div>
                </v-slide-group>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Department",
        props: {
            department_header: Object,
            department_content: Array,
        }
    }
</script>

<style scoped>
    .department{
        background-color: #f0fff7;
    }
    .department-item {
        padding: 20px;
        background-color: #AFE0DA;
        border-radius: 15px;
        margin: 10px;
    }
    .department-item:hover {
        background-color: #88e0d5;
        cursor: pointer;
    }
    .department-row {
        margin-top: 30px;
    }
    .department-content {
        margin-top: 15px;
        font-size: 20px;
    }
    .department-title {
        font-size: 40px;
    }
</style>