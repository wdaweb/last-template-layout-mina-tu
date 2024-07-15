<template>
  <v-app>
    <v-app-bar>
      <v-container class="d-flex align-center">
        <v-app-bar-title>
          <v-img style="width:180px" src="./assets/logo.png"></v-img>
        </v-app-bar-title>

        <v-btn
          style="background-color: #071122; color: white; border-radius: 5px"
          >カタログ</v-btn
        >
        <v-btn class="custom-btn">会員登錄</v-btn>
        <v-btn class="custom-btn">買い物リスト</v-btn>
      </v-container>
    </v-app-bar>
    <v-main>
      <!-- Component = 目前路由應該顯示的元件 -->
      <router-view v-slot="{ Component }">
        <!-- keep-alive 保持被包住的元件不被銷毀 -->
        <!-- 使用 include 指定只有 index 這個元件不被銷毀 -->
        <!--
          component 動態元件
          is = 要使用的元件
        -->
        <keep-alive include="index">
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
    </v-main>
  </v-app>
</template>

<script setup>
//
</script>
