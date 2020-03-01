<template>
  <div class="social">
    <div class="banner">
      <img src="https://static.weibangong.com/files/5d145526ec2e0140512f8161-big" alt="霖珑云科 -- 汇聚向善力量_让企业有温度" />
      <div class="text">
        <h1>汇聚向善力量&nbsp;让企业有温度</h1>
        <!-- <p>汇聚向善力量&nbsp;让企业有温度</p> -->
      </div>
    </div>
    <div class="s-title">
      <!-- <h2 class="text-xxxl">共享发展成果、贡献社会价值</h2> -->
      <div class="title">
        <Title bg-text="RESPONSIBILITY" title="共享发展成果、贡献社会价值" />
      </div>
      <p class="text-m text-remark">霖珑云科不止帮助企业降本增效，更致力于通过建立数字经济下人力资源服务新业态。</p>
      <p class="text-m text-remark">带动新型就业、激发市场活力、释放双创新动能、让企业和人才可持续发展，积极承担平台责任、贡献社会价值。</p>
    </div>
    <div class="list">
      <div class="item" v-for="(item, index) in socials" :key="index">
        
        <div class="avader" v-if="index%2==1">
          <img :src="item.image" :alt="'霖珑云科 -- ' + item.title" />
        </div>

        <div class="text">
          <h1>{{item.title}}</h1>
          <p class="text-m text-remark">{{item.message}}</p>
        </div>

        <div class="avader" v-if="index%2==0">
          <img :src="item.image" :alt="'霖珑云科 -- ' + item.title" />
        </div>

      </div>
    </div>
    <div class="s-title">
      <!-- <h2 class="text-xxxl">社会公益</h2> -->
      <Title bg-text="ACTIVITIES" title="社会公益" />
    </div>
    <div class="list bottom">
      <div class="item" v-for="(item, index) in benefits" :key="index">
        <img class="b-avader" :src="item.image" :alt="'霖珑云科 -- ' + item.title" />
        <div class="b-text" :class="{'yellow': index%2 == 0}">
          <h1>{{item.title}}</h1>
          <p class="text-l text-white">{{item.message}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getSocials, getBenefits } from '../utils/apis';
import Title from "../components/Title";

export default {
  name: 'Industry',
  components: { Title },
  data: function(){
    return {
      socials: [],
      benefits: [],
    }
  },
  mounted() {
    this.getSocials();
    this.getBenefits();
  },
  methods: {
    getSocials(){
      getSocials().then((res) =>{
        if(res.data.code == 200){
          this.socials = res.data.list;
        }
      })
    },
    getBenefits(){
      getBenefits().then((res) =>{
        if(res.data.code == 200){
          this.benefits = res.data.list;
        }
      })
    }
  },
}
</script>
<style lang="scss" scoped>
    .social{
      width: 100%;
      min-height: 500px;
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
      .s-title{
        text-align: center;
        overflow: hidden;
        margin-top: 30px;
        h1{
          margin-bottom: 20px;
        }
        p{
          line-height: 18px;
        }
      }
      .list{
        max-width: 1200px;
        margin: 0 auto;
        margin-top: 20px;
        .item{
          display: flex;
          margin-top: 46px;
          position: relative;
          >div{
            flex: 1;
          }
          >img{
            width: 100%;
          }
          .avader{
            img{
              width: 600px;
              height: 390px;
              display: block;
            }
          }
          .text{
            padding: 112px 54px 0 54px;
            background:rgba(235,235,235,0.52);
            h1{
              font-weight: 500;
              font-size: 30px;
            }
            p{
              margin-top: 28px;
            }
          }
          .b-avader{
            height: 400px;
          }
          .b-text{
            background:rgba(18,130,216,.8);
            position: absolute;
            right: 0;
            bottom: 0;
            padding: 36px 24px;
            width: 500px;
            &.yellow{
              background:rgba(245,166,35,.8);
            }
            h1{
              font-size: 36px!important;
              color: #fff;
              font-weight: 600;
            }
            p{
              margin-top: 30px;
            }
          }
        }
      }
      .bottom{
        margin-bottom: 128px;
      }
    }
</style>