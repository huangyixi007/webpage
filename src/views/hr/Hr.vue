<template>
  <div class="hr">
    <div class="banner">
      <img src="https://static.weibangong.com/files/5d1431469fcc4747067ad8ba-big" alt="霖珑云科 -- 打造专业的学习、交流平台" />
      <div class="text">
        <h1>打造专业的学习、交流平台</h1>
        <!-- <p>打造专业的学习、交流平台</p> -->
      </div>
    </div>
    <div class="d-tabs">
      <Tabs :labels="labels" @getTabIndex = "getTabIndex"></Tabs>
    </div>
    <div v-if="tabIndex == 1">
      <keep-alive>
        <Industry />
      </keep-alive>
    </div>
    <div v-if="tabIndex == 2">
      <keep-alive>
        <Community />
      </keep-alive>
    </div>
  </div>
</template>
<script>

import Tabs from '../../components/Tabs';
import Industry from './Industry';
import Community from './Community';

export default {
  name: 'Hr',
  components: { Tabs, Industry, Community },
  data: function(){
    return {
      labels:[
        {id: 1, label: '行业资讯'},
        {id: 2, label: 'HR社群'},
      ],
      tabIndex: 1,
    }
  },
  mounted() {
    
  },
  methods: {
    // tab切换
    getTabIndex(item){
      this.tabIndex = item.id;
    }
  },
}
</script>
<style lang="scss" scoped>
    .hr{
      width: 100%;
      margin-bottom: 128px;
      margin-top: 74px;
      .banner{
        width: 100%;
        position: relative;
        .text{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          h1{
            font-size:50px;
            font-weight:600;
            color:rgba(255,255,255,1);
            line-height:56px;
            letter-spacing:2px;
          }
          p{
            font-size:20px;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:28px;
            letter-spacing:1px;
            margin-top: 22px;
            font-family:"PingFangSC-Light";
          }
        }
        img{
          width: 100%;
          display: block;
        }
      }
    }
</style>