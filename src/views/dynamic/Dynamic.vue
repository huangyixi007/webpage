<template>
  <div class="dynamic">
    <div class="banner">
      <img src="https://static.weibangong.com/files/5d1331f207b9fb09ae2a276e-big" alt="霖珑云科 -- 关注霖珑时事_了解企业动态" />
      <div class="text">
        <h1>关注霖珑时事&nbsp;了解企业动态</h1>
        <!-- <p>关注霖珑时事&nbsp;了解企业动态</p> -->
      </div>
    </div>
    <div class="d-tabs">
      <Tabs :labels="labels" :tabIndexData="tabIndex"  @getTabIndex = "getTabIndex"></Tabs>
    </div>
    <div class="media" v-if="tabIndex == 1"><Media /></div>
    <div class="aptitude" v-if="tabIndex == 2"><Aptitude /></div>
    <div class="business" v-if="tabIndex == 3"><Business /></div>
  </div>
</template>
<script>

import Tabs from '../../components/Tabs';
import Media from './Media';
import Aptitude from './Aptitude';
import Business from './Business';
import { mapGetters } from 'vuex';

export default {
  name: 'Dynamic',
  components: { Tabs, Media, Business, Aptitude },
  data: function(){
    return {
      labels:[
        {id: 1, label: '新闻报道'},
        {id: 2, label: '企业资质'},
        {id: 3, label: '商务合作'},
      ],
      tabIndex:'1' 
    }
  },
  mounted() {
    this.tabIndex = this.tabIdx;
  },
  computed: {
    ...mapGetters([
      'tabIdx'
    ]),
  },
  methods: {
    // tab切换
    getTabIndex(item){
      this.tabIndex = item.id + '';
    }
  },
  
}
</script>
<style lang="scss" scoped>
    .dynamic{
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