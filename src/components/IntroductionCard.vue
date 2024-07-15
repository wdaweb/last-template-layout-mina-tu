<template>
  <v-container fluid class="pa-5">
    <v-row no-gutters class="align-center">
      <v-col cols="2" class="d-flex justify-start">
        <div class="title-box">
          <h1 class="ShopList">Shop List</h1>
          <h3 class="sub-title">/店舗一覧</h3>
        </div>
      </v-col>
      <v-col cols="8" class="d-flex justify-center">
        <div class="line"></div>
      </v-col>
    </v-row>
    <v-row no-gutters class="full-width">
      <v-col
        cols="12"
        md="6"
        class="d-flex justify-center"
        style="padding: 5rem"
      >
        <v-card class="full-height">
          <template v-slot:title>
            <img class="about_picture" src="../assets/about_picture-04.png" />
          </template>

          <template v-slot:subtitle>
            <h1>代官山店</h1>
          </template>

          <template v-slot:text>
            皆様に愛されているお弁当やスイーツなどの商品が生まれたのは、フードロスの削減がきっかけでした。
            いつでも店舗に陳列しているお野菜や果物は新鮮なものを、そんな思いから、形の悪いお野菜や果物を使った商品展開を目指して、日々開発を進めています。
          </template>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        md="6"
        class="d-flex justify-center"
        style="padding: 5rem"
      >
        <v-card class="full-height">
          <template v-slot:title>
            <img class="about_picture" src="../assets/about_picture-05.png" />
          </template>

          <template v-slot:subtitle>
            <h1>どこよりも八百屋らしく。</h1>
          </template>

          <template v-slot:text>
            代官山という都心部で、八百屋を営むということ。
            スタッフはできる限りの笑顔で、温かくお出迎えいたします。
            商品への思い入れの強さ、生産者様へのリスペクト、
            そして大切なお客様への想い。
            どれをとっても、どこよりも八百屋らしい八百屋でいようというのが、
            私たちのポリシーです。
          </template>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.about_picture {
  width: 100%;
}

.line {
  background: #000;
  width: 80vw;
  height: 1px;
  margin: 0 auto;
}

.full-height {
  height: 100%;
}

.v-container,
.v-row,
.v-col {
  margin: 0;
  padding: 0;
}

.title-box {
  text-align: left;
}

.ShopList {
  font-size: 25px;
}

.sub-title {
  font-size: 16px;
}
</style>
