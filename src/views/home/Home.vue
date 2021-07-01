<template>
  <!-- <h2>主页</h2> -->
  <nav-bar class="home-nav">
    <div slot="center">购物街</div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar
  },
  data() {
    return {
      result: null,
    }
  },
  created() {
    getHomeMultidata().then(res => {
      this.result = res;
      console.log(res)
    })
  }
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
