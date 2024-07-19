使用vuetify框架

輪播圖使用了 swiper
使用步驟：
1.先在終端機安裝 swiper
2.在輪播圖的main.vue檔案裡引入 import { Swiper, SwiperSlide } from "swiper/vue";
3.使用 Swiper 元件：在模板中使用 <swiper> 和 <swiper-slide> 標籤來建立 Swiper 滑動效果

詳細資訊的部分使用了AOS
使用步驟：
1.先在終端機安裝 aos
2.在plugins資料夾 引入
import AOS from "aos";
import "aos/dist/aos.css";
.use(AOS)
3.在 Vue 組件中使用 AOS 的 data-aos 屬性來設定動畫效果
