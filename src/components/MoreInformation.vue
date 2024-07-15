<template>
  <v-container fluid class="pa-0 $error-color">
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
                  <h1 class="number">01</h1>
                  <h3 class="sub-title">Our Mission</h3>
                </div>
                <v-card-title class="card-text">
                  <h2
                    style="line-height: 1.5; margin-bottom: 7%"
                    data-aos="fade-right"
                    data-aos-offset="700"
                    data-aos-duration="900"
                  >
                    野菜の消費量が<br />
                    少し続ける日本人に。<br />
                    代官山に身を置き<br />
                    都心に新鮮なお野菜を。
                  </h2>
                </v-card-title>
                <v-card-text
                  class="info"
                  data-aos="fade-right"
                  data-aos-offset="800"
                  data-aos-duration="900"
                >
                  <p>
                    1人1年当たりの野菜消費量（㎏/年・人）は、昭和60(1985)年と比べて令和元(2019)年で<br />
                    は約2割減少しています。
                  </p>

                  <p>
                    かつての農業大国日本で暮らす私たちは、野菜を食べる習慣がどんどん薄れてきてしまって<br />
                    います。安心できない野菜の情報が飛び交ったり、外食も増えた生活習慣の中でも、本当<br />
                    に美味しいと思える野菜を心ゆくままに食べられたら。
                  </p>

                  <p>
                    そのような願いを込めながら、東京代官山の小さな八百屋「代官山青果店」は、今日も新<br />
                    鮮なお野菜を提供しています。
                  </p>
                </v-card-text>
              </div>
            </v-col>
            <v-col cols="6">
              <v-img
                src="../assets/static_about_caption_1_1000x-01.jpg"
                class="image"
                style="height: 85%"
                data-aos="fade-left"
                data-aos-offset="900"
                data-aos-duration="1000"
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

<style lang="scss" scoped>
@import "../styles/settings.scss";
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
  top: -33%;
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
