<template>
  <div>
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      :loop="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      ref="mySwiper"
    >
      <swiper-slide>
        <img src="../assets/top_02.png" id="static_about" />
        <div class="swiper-text">
          <h1>
            東京・代官山から<br />
            安心・安全<br />
            で体に優しい農産物を。<br />
            いろんな形で。
          </h1>
          <div class="info">
            <p>
              私たち代官山青果店は、東京・代官山にある小さな街<br />
              の八百屋です。 お店に並ぶ野菜や果物は、生産者様<br />
              と直接お会いし惚れ込んだ旬のものをメインに、市場<br />
              から厳選して仕入れさせて頂いております。 大地の力<br />
              で育った安心・安全な食材を、一番輝く旬の時期に。
            </p>

            手間と愛情のこもった野菜や食品を、生産者様に変わ<br />
            って地域の皆様にお届けします。次の食事が、いつも<br />
            より少し楽しみに、豊かになる事を願って。
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/top_03.png" id="static_about" />
      </swiper-slide>
      <div class="more">代官山青果店について詳しく見る</div>
    </swiper>

    <!-- 將 .more 元素放在 swiper 外部，使用 position: fixed; 和 right: 0; 來固定在畫面右側 -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    const modules = [Autoplay];
    return {
      onSwiper,
      onSlideChange,
      modules,
    };
  },
  mounted() {
    this.$nextTick(() => {
      const swiper = this.$refs.mySwiper.swiper;
      if (swiper && swiper.params) {
        swiper.params.autoplay = {
          delay: 6000,
          disableOnInteraction: false,
        };
        swiper.autoplay.start();
      }
    });
  },
};
</script>
<style scoped>
#static_about {
  height: 90vh;
}

.swiper-text {
  position: absolute;
  bottom: 70px;
  left: 90px;
  color: white;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

h1 {
  margin-bottom: 10%;
  font-size: 38px;
}

.info {
  font-size: 14px;
}

.more {
  position: fixed;
  bottom: 20px; /* 距離底部的距離，可以根據需要調整 */
  right: 20px; /* 距離右邊的距離，這裡調整為距離右邊 20px */
  background-color: #091121;
  border-radius: 8px;
  color: white;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
}
</style>
