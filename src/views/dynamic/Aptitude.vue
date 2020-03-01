<template>
  <div class="aptitude">
    <div class="title">
      <Title bg-text="HONOR" title="企业荣誉" />
    </div>
    <div class="honor">
      <div class="h-item">
        <div class="avader">
          <img class="horizontal" src="../../assets/honor-6.png" alt="霖珑云科 -- 2017年_国家级高新技术企业" />
        </div>
        <div class="descript">
          <img src="../../assets/left.png" alt="霖珑云科 -- 2017年_国家级高新技术企业" />
          <p>2017年</p>
          <p>国家级高新技术企业</p>
        </div>

        <div class="avader">
          <img class="horizontal" src="../../assets/honor-3.png" alt="霖珑云科 -- 2017年_江苏省民营科技企业" />
        </div>
        <div class="descript">
          <img src="../../assets/left.png" alt="霖珑云科 -- 2017年_江苏省民营科技企业" />
          <p>2017年</p>
          <p>江苏省民营科技企业</p>
        </div>

        <div class="descript text-right">
          <img class="ratate" src="../../assets/left.png" alt="霖珑云科 -- 2018年_江苏省苏州高新区优秀科技服务机构" />
          <p>2018年</p>
          <p>江苏省苏州高新区</p>
          <p>优秀科技服务机构</p>
        </div>
        <div class="avader">
          <img class="horizontal" src="../../assets/honor-4.png" alt="霖珑云科 -- 2018年_江苏省苏州高新区优秀科技服务机构" />
        </div>

        <div class="descript text-right">
          <img class="ratate" src="../../assets/left.png" alt="霖珑云科 -- 2019年_亚太人力资源博览会创业新星奖" />
          <p>2019年</p>
          <p>亚太人力资源博览会</p>
          <p>创业新星奖</p>
        </div>
        <div class="avader">
          <img class="horizontal" src="../../assets/honor-1.png" alt="霖珑云科 -- 2019年_亚太人力资源博览会创业新星奖" />
        </div>

        <div class="avader">
          <img class="horizontal" src="../../assets/honor-5.png" alt="霖珑云科 -- 2019年_中关村金种子企业" />
        </div>
        <div class="descript">
          <img class="horizontal" src="../../assets/left.png" alt="霖珑云科 -- 2019年_中关村金种子企业" />
          <p>2019年</p>
          <p>中关村金种子企业</p>
        </div>

        <div class="avader">
          <img src="../../assets/honor-2.png" alt="霖珑云科 -- 2017年_最佳智能移动一体化办公产品" />
        </div>
        <div class="descript">
          <img src="../../assets/left.png" alt="霖珑云科 -- 2017年_最佳智能移动一体化办公产品" />
          <p>2017年</p>
          <p>最佳智能移动</p>
          <p>一体化办公产品</p>
        </div>

      </div>
    </div>
    <div class="title">
      <Title bg-text="QUALIFICATIONS" title="企业资质" />
    </div>
    <div class="qualification">
      <div class="q-list">
        <div class="q-item">
          <img src="../../assets/aptitude-icon.png" alt="霖珑云科 -- 人力资源服务许可证" />
          <span>人力资源服务许可证</span>
        </div>

        <div class="q-item">
          <img src="../../assets/aptitude-icon.png" alt="霖珑云科 -- 劳务派遣经营许可证" />
          <span>劳务派遣经营许可证</span>
        </div>
        
        <div class="q-item">
          <img src="../../assets/aptitude-icon.png" alt="霖珑云科 -- 国家高新技术企业" />
          <span>国家高新技术企业</span>
        </div>

        <div class="q-item">
          <img src="../../assets/aptitude-icon.png" alt="霖珑云科 -- 江苏省人力资源服务行业协会常务理事" />
          <span>江苏省人力资源服务行业协会常务理事</span>
        </div>

        <div class="q-item">
          <img src="../../assets/aptitude-icon.png" alt="霖珑云科 -- 江苏省民营科技企业" />
          <span>江苏省民营科技企业</span>
        </div>

        <div class="q-item">
          <img src="../../assets/aptitude-icon.png" alt="霖珑云科 -- 江苏省苏商发展促进会理事单位" />
          <span>江苏省苏商发展促进会理事单位</span>
        </div>

        <div class="q-item">
          <img src="../../assets/aptitude-icon.png" alt="霖珑云科 -- 中国人才交流协会会员证" />
          <span>中国人才交流协会会员证</span>
        </div>

        <div class="q-item">
          <img src="../../assets/aptitude-icon.png" alt="霖珑云科 -- 信息技术服务管理认证" />
          <span>信息技术服务管理认证</span>
        </div>

        <div class="q-item">
          <img src="../../assets/aptitude-icon.png" alt="霖珑云科 -- 软件研发质量管理体系认证" />
          <span>软件研发质量管理体系认证</span>
        </div>

        <div class="q-item">
          <img src="../../assets/aptitude-icon.png" alt="霖珑云科 -- 信息安全管理体系认证" />
          <span>信息安全管理体系认证</span>
        </div>

      </div>
    </div>
  </div>
</template>
<script>

import Title from '../../components/Title';

export default {
  name: 'Aptitude',
  components: { Title },
  data: function(){
    return {
    }
  },
  mounted() {
    
  },
  methods: {

  },
}
</script>
<style lang="scss" scoped>
    .aptitude{
      width: 100%;
      .honor{
        width: 1200px;
        margin: 0 auto;
        margin-bottom: 90px;
        .h-item{
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          >div{
            flex-basis: 285px;
            height: 234px;
            margin-top: 14px;
          }
          .descript{
            background: #F5F5F5;
            padding: 38px 22px 0 18px;
            font-size: 16px;
            color: #858585;
            img{
              height: 30px;
              margin-bottom: 30px;
            }
            p{
              line-height: 1.4;
            }
            .ratate{
              transform: rotate(180deg);
            }
            &.text-right{
              text-align: right;
            }
          }
          .avader{
            background: #d8d8d8;
            text-align: center;
            img{
              height: 100%;
            }
            .horizontal{
              width: 100%!important;
            }
          }
        }
      }
      .qualification{
        width: 1200px;
        margin: 0 auto;
        .q-list{
          display: flex;
          flex-wrap: wrap;
          width: 70%;
          margin: 0 auto;
          .q-item{
            flex-basis: 50%;
            font-size: 22px;
            color: #4A4A4A;
            line-height: 60px;
            img{
              height: 30px;
              vertical-align: middle;
            }
            span{
              vertical-align: middle;
              margin-left: 20px;
            }
          }
        }
      }
    }
</style>