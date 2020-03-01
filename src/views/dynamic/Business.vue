<template>
  <div class="business">
    <div class="title">
      <Title bg-text="COOPERATION" title="商务合作" />
    </div>
    <div class="content">
      <div class="b-list">
        <div class="b-item">
          <img src="../../assets/tel.png" alt="霖珑云科 -- 0512-67903209" />
          <span>0512-67903209</span>
        </div>

        <div class="b-item">
          <img src="../../assets/address.png" alt="霖珑云科 -- 苏州吴中区东方大道100号" />
          <span>苏州吴中区东方大道100号</span>
        </div>

        <div class="b-item">
          <img src="../../assets/message.png" alt="霖珑云科 -- info@linlongyun.com" />
          <span>info@linlongyun.com </span>
        </div>
      </div>

      <!-- <div class="btn">
        <button>在线咨询</button>
      </div> -->
    </div>
  </div>
</template>
<script>
import Title from '../../components/Title';

export default {
  name: 'Business',
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
    .business{
      width: 1200px;
      margin: 0 auto;
      .content{
        width: 100%;
        margin-top: 90px;
        .b-list{
          width: 1000px;
          margin: 0 auto;
          display: flex;
          .b-item{ 
            text-align: center;
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
              vertical-align: middle;
              width: 35px;
            }
            span{
              vertical-align: middle;
              font-size: 20px;
              color: #4A4A4A;
              margin-left: 20px;
            }
          }
        }
        .btn{
          width: 100%;
          margin-top: 54px;
          text-align: center;
          button{
            color: #fff;
            width: 167px;
            height: 40px;
            line-height: 40px;
            background: #1e88f5;
            box-shadow: 0px 0px 10px 0px rgba(0, 145, 255, 0.74);
            border-radius: 32px;
            border: none;
            cursor: pointer;
            &:hover{
              opacity: .9;
            }
          }
        } 
        
      }
    }
</style>