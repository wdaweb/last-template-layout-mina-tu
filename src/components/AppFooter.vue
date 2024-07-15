<!-- src/components/Footer.vue -->
<template>
  <v-footer class="back">
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <h4>おしなもの</h4>
          <ul>
            <li>おすすめ</li>
            <li>ベストセラー</li>
            <li>スイーツ</li>
            <li>漬物</li>
            <li>雑貨・バッグ</li>
            <li>フルーツサンド</li>
            <li>ギフト</li>
            <li>お野菜・果物</li>
          </ul>
        </v-col>
        <v-col cols="12" md="3">
          <h4>代官山青果店について</h4>
          <ul>
            <li>お知らせ</li>
            <li>イベント</li>
          </ul>
        </v-col>
        <v-col cols="12" md="3">
          <h4>特定商取引法に基づく表記</h4>
          <ul>
            <li>プライバシーポリシー</li>
          </ul>
        </v-col>
        <v-col cols="12" md="3">
          <ul>
            <li>Login<br /><span>Login / 會員登録</span></li>
            <li>Bag<br /><span>買い物バッグを見る</span></li>
            <li>FAQ<br /><span>よくある質問</span></li>
            <li>Contact<br /><span>お問い合わせ</span></li>
          </ul>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="text-center">
          <v-img
            src="../assets/logo-2.png"
            class="my-4"
            max-width="200"
          ></v-img>
          <p>Copyright © 2023 代官山青果店 all rights reserved.</p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
.back {
  background: #091121;
  border-radius: 20px;
  margin: 1%;
}

h4 {
  color: white;
  font-weight: bold;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  color: white;
  margin-bottom: 10px;
  font-size: 20px;
}
.text-center {
  text-align: center;
}
p {
  color: white;
}
</style>
