<template>
  <div class="about">
    <div class="banner">
      <img src="https://static.weibangong.com/files/5d1493b5933c57f3b76b6839-big" alt="霖珑云科  --  关于我们 -- 科技赋能管理" />
      <div class="text">
        <h1>科技赋能管理</h1>
        <!-- <p>科技赋能管理</p> -->
      </div>
    </div>
    <div class="d-tabs">
      <Tabs :labels="labels" @getTabIndex = "getTabIndex"></Tabs>
    </div>
    <div class="media" v-if="tabIndex == 1"><Introduction /></div>
    <!-- <div class="aptitude" v-if="tabIndex == 2"><Team /></div> -->
    <div class="business" v-if="tabIndex == 3"><Values /></div>
  </div>
</template>
<script>

import Tabs from '../../components/Tabs';
import Team from './Team';
import Values from './Values';
import Introduction from './Introduction';

export default {
  name: 'About',
  components: { Tabs, Team, Values,Introduction },
  data: function(){
    return {
      labels:[
        {id: 1, label: '公司简介'},
        // {id: 2, label: '专家团队'},
        {id: 3, label: '霖珑价值观'},
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
    .about{
      width: 100%;
      margin-top: 74px;
      margin-bottom: 128px;
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