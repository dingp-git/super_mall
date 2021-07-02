<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <recommend-view :recommend="recommend"></recommend-view>
    <feature-view></feature-view>
    <tab-control :titles="['流行', '新款', '精选']" class="tab-control"></tab-control>
    <ul>
      <li>list 1</li>
      <li>list 2</li>
      <li>list 3</li>
      <li>list 4</li>
      <li>list 5</li>
      <li>list 6</li>
      <li>list 7</li>
      <li>list 8</li>
      <li>list 9</li>
      <li>list 10</li>
      <li>list 11</li>
      <li>list 12</li>
      <li>list 13</li>
      <li>list 14</li>
      <li>list 15</li>
      <li>list 16</li>
      <li>list 17</li>
      <li>list 18</li>
      <li>list 19</li>
      <li>list 20</li>
      <li>list 21</li>
      <li>list 12</li>
      <li>list 13</li>
      <li>list 14</li>
      <li>list 15</li>
      <li>list 16</li>
      <li>list 17</li>
      <li>list 18</li>
      <li>list 19</li>
      <li>list 20</li>
      <li>list 21</li>
    </ul>
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from "components/common/navbar/NavBar"
import TabControl from 'components/content/tabControl/TabControl'

import { getHomeMultidata, getHomeGoods } from "network/home"


export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl
  },
  data() {
    return {
      banner: [],
      recommend: []
    }
  },
  created() {
    getHomeMultidata().then(res => {
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
      console.log(res)
    })
    getHomeGoods('pop', 1).then(res => {
      console.log(res)
    })
  }
};
</script>

<style scoped>
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
}
</style>
