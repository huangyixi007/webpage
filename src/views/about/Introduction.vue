<template>
  <div class="introduction">
    <div class="title">
      <Title bg-text="ABOUT US" title="关于霖珑云科" />
    </div>
    <div class="introduce">
      <div class="itro">
        <span></span>
        <p class="text-m">霖珑云科，专注于为财税新政下的灵活用工企业提供人力薪税综合解决方案，以社保代理、薪酬优化、HR金融、雇员自助四条产品线为核心，以属地化交付、专业化方案、一体化咨询三级服务体系为保障，为企业多重用工的合规优化，提供从战略咨询到执行落地的一揽子服务。</p>
      </div>
      <div class="itro">
        <span class="yellow"></span>
        <p class="text-m">依托覆盖全国30个省市的200余个服务网点及灵活高效的HR SaaS平台，目前霖珑云科已为阿里巴巴、百度、京东、途牛、饿了么、蒙牛、广之旅、百合网等1000余家头部企业、60000余家中小企业提供优质的人力资源服务，年服务人次逾50万，年平台流水逾50亿元，始终保持高速增长。</p>
      </div>
      <!-- <div class="itro">
        <span></span>
        <p class="text-m text-remark">截至目前，霖珑云科在全国设有10余个直属分公司和覆盖全国的160余个服务网点，是目前国内直营网点覆盖最广的人资服务机构之一，公司先后为阿里巴巴、百度、京东、途牛、饿了么、蒙牛、广之旅、百合网等1000余家头部企业、50000余家中小企业提供优质的人力资源服务，年服务人次逾50万，年平台流水逾30亿元。</p>
      </div> -->
    </div>
    <div class="title">
      <Title bg-text="OUR TEAM" title="高管团队" />
    </div>
    <div class="team">
      <div class="t-list">
        <div class="t-item" v-for="(item, index) in team" :key="index">

          <div class="avader" v-if="index%2 == 1">
            <img :src="item.image" :alt="'霖珑云科 -- 高管团队 -- ' + item.name" />
          </div>
          <div class="text">
            <h1>
              {{item.name}}
              <span v-if="item.name_e">{{item.name_e}}</span>
            </h1>
            <p class="text-l" v-for="(info, idx) in item.titles" :key="idx">{{info}}</p>
          </div>
          <div class="avader" v-if="index%2 == 0">
            <img :src="item.image" :alt="'霖珑云科 -- 高管团队 -- ' + item.name" />
          </div>

        </div>
      </div>
    </div>

    <div class="title">
      <Title bg-text="DEVELOPMENT" title="发展历程" />
    </div>

    <div class="develop">
      <div class="d-list">
        <span></span>
      </div>
      <div class="d-list"  v-for="(item, index) in develops" :key="index" >
        <div class="d-item" :class="{'left': index%2 == 0, 'right': index%2 == 1, ['mark-' + item.id]: item.id }">
          <h1>{{item.date}}</h1>
          <p v-for="(info, idx) in item.descripts" :key="idx">{{info}}</p>
        </div>
      </div>
      <div class="d-list">
        <span class="gray"></span>
      </div>
    </div>

    <div class="title">
      <Title bg-text="SERVICE NETWORK" title="服务网点" remark="200+全国直营网点、1v1专属顾问服务" />
    </div>

    <div class="map">
      <img src="../../assets/serve-map.png" alt="霖珑云科 -- 服务网点 -- 200+全国直营网点、1v1专属顾问服务" />
      <!-- <div class="info">
        <p>160+全国直营网点 1v1专属顾问服务</p>
      </div> -->
    </div>

  </div>
</template>
<script>
import Title from '../../components/Title';
import { getTeam, getDevelops } from '../../utils/apis';
  
export default {
  name: 'Introduction',
  components: { Title },
  data: function(){
    return {
      team: [],
      develops: []
    }
  },
  mounted() {
    this.getTeam();
    this.getDevelops();
  },
  methods: {
    getTeam(){
      getTeam().then((res) =>{
        if(res.data.code == 200){
          this.team = res.data.list;
        }
      })
    },
    getDevelops(){
      getDevelops().then((res) =>{
        if(res.data.code == 200){
          this.develops = res.data.list;
        }
      })
    },

  }
}
</script>
<style lang="scss" scoped>
    .introduction{
      width: 100%;
      margin-bottom: 128px;
      min-height: 500px;
      .introduce{
        width: 1000px;
        margin: 40px auto;
        .itro{
          
          position: relative;
          margin-bottom: 30px;
          span{
            position: absolute;
            display: inline-block;
            left: 0;
            top: 6px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: $blue;

            &.yellow{
              background: #FFA006;
            }
          }
          p{
            margin-left: 30px;
            line-height: 20px;
            letter-spacing:2px;
            color: #666;
          }
        }
      }
      .t-list{
        .t-item{
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          background:linear-gradient(180deg,rgba(255,255,255,0.87) 0%,rgba(240,240,240,0.46) 100%);
          .avader{
            flex-basis: 550px;
            height: 500px;
            text-align: center;
            position: relative;
            img{
              height: 500px;
              padding-top: 20px;
              position: absolute;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);
              height: 80%;
            }
          }
          .text{
            width: 550px;
            padding: 140px 0 0 60px;
            h1{
              font-size:36px;
              color: #4A4A4A;
              font-weight: 600;
              position: relative;
              margin-bottom: 40px;
              &::after{
                content: ' ';
                position: absolute;
                left: -18px;
                top: 10px;
                height: 28px;
                width: 8px;
                background: $blue;
              }
              span{
                font-size: 32px;
                color: $remark;
                font-weight: 400;
              }
            }
            p{
              width: 400px;
              line-height: 22px;
              color:#666;
            }
          }
        }
      }

      .develop{
        width: 100%;
        margin-top: 100px;
        margin-bottom: 150px;
        .d-list{
          width: 1200px;
          margin: 0 auto;
          overflow: hidden;
          text-align: center;
          >span{
            display: inline-block;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: $blue;
            color: $white;
            line-height: 60px;
          }
          >.gray{
            background: rgba($color: #000000, $alpha: .2);
          }
          .d-item{
            padding: 60px 26px;
            position: relative;
            h1{
              font-size: 30px;
              color: $blue;
              font-weight: 500;
              margin-bottom: 10px;
            }
            p{
              font-size: 14px;
              color: #666;
              line-height: 20px;
            }
          }
          .left{
            float: left;
            text-align: right;
            border-right: 2px solid rgba($color: #000, $alpha: .1);
            width: calc(50% + 2px);
            &::after{
              content: ' ';
              position: absolute;
              right: -9px;
              top: 70px;
              width: 16px;
              height: 16px;
              border-radius: 50%;
              background: rgba($color: $blue, $alpha: 1.0);
            }
          }
          .right{
            float: right;
            text-align: left;
            border-left: 2px solid rgba($color: #000, $alpha: .1);
            width: 50%;
            &::after{
              content: ' ';
              position: absolute;
              left: -9px;
              top: 70px;
              width: 16px;
              height: 16px;
              border-radius: 50%;
              background: rgba($color: $blue, $alpha: 1.0);
            }
          }
          .mark-1{
            &::after{
              background: rgba($color: $mark-1, $alpha: 1.0);
            }
          }
          .mark-2{
            &::after{
              background: rgba($color: $mark-2, $alpha: 1.0);
            }
          }
          .mark-3{
            &::after{
              background: rgba($color: $mark-3, $alpha: 1.0);
            }
          }
          .mark-4{
            &::after{
              background: rgba($color: $mark-4, $alpha: 1.0);
            }
          }
          
        }
      }
      
      .map{
        margin-top: 60px;
        text-align: center;
        position: relative;
        width: 920px;
        margin: 50px auto;
        img{
          width: 100%;
        }
        .info{
          width: 180px;
          position: absolute;
          right: -60px;
          bottom: 50px;
          text-align: left;
          font-size: 18px;
          color: $remark;
        }
      }
      
    }
</style>