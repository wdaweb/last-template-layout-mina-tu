<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters class="justify-center">
      <div class="line"></div>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12">
        <v-card class="full-width" elevation="0">
          <v-row no-gutters>
            <v-col cols="6" class="d-flex justify-center align-center">
              <div class="text-container">
                <!-- 放置在卡片內的左上角 -->
                <div class="title-box">
                  <h1 class="number">02</h1>
                  <h3 class="sub-title">Our Pride</h3>
                </div>
                <v-card-title class="card-text">
                  <h2
                    style="line-height: 1.5; margin-bottom: 7%"
                    data-aos="fade-right"
                    data-aos-offset="700"
                    data-aos-duration="900"
                  >
                    新鮮で季節の<br />
                    美味しい野菜が並ぶ
                  </h2>
                </v-card-title>
                <v-card-text class="info">
                  <p>
                    私たちは毎朝市場に出向き、自分たちの目利きで、野菜や果物などの商品を買い付けてい<br />
                    ます。中には直接お付き合いのある農家さんもいらっしゃいます。<br />
                    例えば、HATAKEYAさん(三重県)や青木農園さん(神奈川県)。その時採れた一番美味しい<br />
                    ものを美味しい時期に仕入れて、美味しく召し上がっていただく。<br />
                    新鮮で、安心安全な季節の美味しい野菜だけを店舗に並べる。<br />
                    これが私たちの商品へのこだわりです。
                  </p>
                </v-card-text>
              </div>
            </v-col>
            <v-col cols="6">
              <v-img
                src="../assets/static_about_caption_2_1000x.jpg"
                class="image"
                style="height: 85%"
                data-aos="fade-left"
                data-aos-offset="900"
                data-aos-duration="1200"
              ></v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HorizontalCard",
};
</script>

<style scoped>
.info {
  margin-top: 2%;
  font-size: 10px;
  line-height: 2.5;
}

v-col {
  display: flex;
  justify-content: center;
  align-items: center;
}

.full-width {
  width: 100%;
  height: 100%;
}

.v-container,
.v-row {
  margin: 0;
  padding: 0;
}

.line {
  background: #000;
  width: 80vw;
  height: 1px;
  margin: 0 auto; /* 確保線條置中 */
}

.text-container {
  position: relative;
  margin-left: 0px; /* 調整這個值來移動文字的水平位置 */
}

.title-box {
  position: absolute;
  top: -83%;
  left: -30px;
  display: flex;
  align-items: center;
}

.number {
  font-size: 24px;
}

.sub-title {
  font-size: 16px;
  margin-left: 8px; /* 調整這個值來控制 "01" 和 "Our Mission" 之間的距離 */
}
</style>
