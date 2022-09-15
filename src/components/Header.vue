<template>

  <div>
    <v-app-bar dense app color="white" elevation="3" light>
      <v-toolbar-title>
        <span class="font-weight-light grey--text">SORP</span>
        <span class="mx-1"></span>
        <span>Bechar</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-list class="d-flex align-center" style="background-color: transparent">
          <v-list-item v-for="(menu, index) in menus" :key="index" link :to="menu.route">
            <v-list-item-title>{{menu.title}}</v-list-item-title>
          </v-list-item>
          <v-spacer></v-spacer>
        </v-list>
      </v-toolbar-items>
      <div class="hidden-md-and-up">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in menus" :key="index" link :to="item.route">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
  </div>

</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Header',

    data: () => ({
      menus: [
        {title: "Home", route:"/"},
        {title: "Contact", route:"/contact"},
        {title: "Join-US", route:"/join-us"}
      ]
    })
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>