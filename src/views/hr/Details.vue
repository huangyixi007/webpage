<template>
  <div class="details">
    <div class="wrap">
      <div class="content" v-if="details">
        <div class="title">
          <h2>{{details.title}}</h2>
          <span>{{details.date}}</span>
          <p>关键词：{{details.keywords}}</p>
        </div>

        <div class="abstract">{{details.abstract}}</div>

        <div class="c-content" v-html="details.content">
        </div>
        
      </div>
      <div  v-if="!details">暂无内容</div>
    </div>
  </div>
</template>
<script>

import { getIndustrysDetails } from '../../utils/apis';

export default {
  name: 'Details',
  components: { },
  data: function(){
    return {
      details: {}
    }
  },
  mounted() {
    let id = this.$route.params.id;
    this.getDetails({id});
  },
  methods: {
    getDetails(params){
      getIndustrysDetails(params).then((res) =>{
        if(res.data.code == 200){
          this.details = res.data.details;
        }
      })
    }
  },
}
</script>
<style lang="scss" >
    .details{
      width: 100%;
      background: #F7F7F7;
      margin-top: 74px;
      .wrap{
        width: 1200px;
        margin: 0 auto;
        padding-bottom: 128px;
        background: #fff;
        .content{
          padding-top: 60px;
          width: 690px;
          margin: 0 auto;
          .title{
            overflow: hidden;
            h2{
              font-size: 32px;
              font-weight: 400;
              color: #4A4A4A;
              line-height: 46px;
              margin-bottom: 16px;
            }
            span{
              font-size: 14px;
              color: #C7C7C7;
            }
            p{
              font-size: 14px;
              font-weight: 400;
              color: #333;
              line-height: 20px;
              margin-top: 16px;
            }
          }
          .abstract{
            font-size: 16px;
            font-weight: 400;
            color: #797979;
            margin-top: 74px;
          }
          .c-content{
            width: 100%;
            h2{
              font-size: 26px;
              font-weight: 400;
              color: #4A4A4A;
              margin: 50px 0 30px;
            }
            p{
              font-size:16px;
              font-weight:400;
              color:#797979;
              line-height:22px;
              margin-top: 20px;
            }
            .image{
              padding: 26px 0;
              text-align: center;
              img{
                margin-bottom: 20px;
                width: 100%;
              }
              span{
                font-size: 12px;
                color: #9B9B9B;
              }
            }
          }
        }
      }
    }
</style>