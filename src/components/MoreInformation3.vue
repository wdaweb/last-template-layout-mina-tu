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
                  <h1 class="number">03</h1>
                  <h3 class="sub-title">Our Item</h3>
                </div>
                <v-card-title class="card-text">
                  <h2
                    style="line-height: 1.5; margin-bottom: 7%"
                    data-aos="fade-right"
                    data-aos-offset="900"
                    data-aos-duration="1300"
                  >
                    ワクワクするお店。<br />
                    食卓を彩る“さまざま”を激選。
                  </h2>
                </v-card-title>
                <v-card-text
                  class="info"
                  data-aos="fade-right"
                  data-aos-offset="700"
                  data-aos-duration="900"
                >
                  <p>
                    「代官山青果店に来るとどれも美味しそうでワクワクする。」<br />
                    お客様からよくそんなお言葉をいただきます。<br />
                    それは野菜や果物だけでなく、加工食品から調味料まで、仕入れる商品の一つ一つにこだ<br />
                    わり抜いて厳選しているから。<br />
                    ECサイトに並べる商品も、お客様の手元に100%美味しい状態で届くものだけに厳選して<br />
                    います。(一部商品は、配送日指定の限定販売とさせていただいています。)<br />
                    野菜の配送も美味しくお届けできる方法を模索しているため、もう少々お待ちください。
                  </p>
                </v-card-text>
              </div>
            </v-col>
            <v-col cols="6">
              <v-img
                src="../assets/static_about_caption_5_1000x-01.jpg"
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
  top: -55%;
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
