<template>
  <div class="community">
    <div class="title">
      <Title bg-text="COOPERATION" title="HR社群" />
    </div>
    <div class="content">
      <div class="b-list">
        <div class="b-item" v-for="(item, index) in communitys" :key="index">
          <div class="avader">
            <img :src="item.qrcode" :alt="'霖珑云科 -- ' + item.title" />
          </div>
          <div class="text">
            <h1 class="text-l">{{item.title}}</h1>
            <p class="text-m text-remark" v-for="(msg, idx) in item.messages" :key="idx">{{msg}}</p>
            <span class="text-m">{{item.tips}}</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import Title from '../../components/Title';
import { getCommunitys } from '../../utils/apis';

export default {
  name: 'Community',
  components: { Title },
  data: function(){
    return {
      communitys: [],
    }
  },
  mounted() {
    this.getCommunitys();
  },
  methods: {
    
    getCommunitys(){
      getCommunitys().then((res) =>{
        if(res.data.code == 200){
          this.communitys = res.data.list;
        }
      })
    }
  },
}
</script>
<style lang="scss" scoped>
    .community{
      width: 1200px;
      margin: 0 auto;
      min-height: 500px;
      .content{
        width: 100%;
        margin-top: 40px;
        .b-list{
          display: flex;
          justify-content: space-between;
          .b-item{ 
            flex-basis: 592px;
            padding: 20px;
            display: flex;
            border: 1px solid #E7E7E7;
            .avader{
              img{
                width: 160px;
              }
            }
            .text{
              margin-left: 30px;
              position: relative;
              h1{
                font-weight:600;
                line-height: 1;
                margin-bottom: 30px;
              }
              p{
                line-height: 1.4;
              }
              span{
                display: inline-block;
                background: #EFEFEF;
                padding: 4px;
                position: absolute;
                bottom: 4px;
                left: 0;
              }
            }
          }
        }
        
      }
    }
</style>