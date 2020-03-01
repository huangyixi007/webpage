<template>
  <div class="product">

    <div class="product-matrix-images">
      <img class="product-matrix-images-font" :alt="'霖珑云科 -- ' + item.title + '_' + item.message" :class="{'image-active': item.active}" v-for="(item, index) in allProducts" :key="index + 'image'" :src="item.image" />
      <div class="product-matrix-images-back" :class="{'active': item.active}" v-for="(item, index) in allProducts" :key="index + 'div'">
        <div class="skip" v-if="item.active"></div>
      </div>
    </div>
    <div class="product-matrix-list">
      <a :href="item.url" target="_blank" class="product-card" v-for="(item, index) in allProducts" :key="index"  @mouseover="hover(item)">
        <div class="product-card-icon">
          <img :src="item.logo" :alt="'霖珑云科 -- ' + item.title + '_' + item.message" />
        </div>
        <div class="product-card-text">
          <div class="product-card-text-title">{{item.title}}</div>
          <div class="product-card-text-subtitle">{{item.message}}</div>
          <a :href="item.url" target="_blank">了解详情</a>
        </div>
        <div class="product-card-arrow">
          <img src="../assets/right.png" :alt="'霖珑云科 -- ' + item.title + '_' + item.message" />
        </div>
      </a>
    </div>

  </div>
</template>
<script>
import { getAllProducts } from '../utils/apis';

export default {
  name: 'product',
  components: { },
  data: function(){
    return{
      allProducts: [],
      active: false,
    }
  },
  mounted() {
    this.getAllProducts();
  },
  methods: {
    getAllProducts(){
      getAllProducts().then((res) =>{
        if(res.data.code == 200){
          this.allProducts = res.data.list;
        }
      })
    },
    hover(item){
      this.$nextTick(() =>{
        this.allProducts.forEach((p) =>{
          this.$set(p, 'active', false);
        })
        this.$set(item, 'active', true);
      })
    },
    // noHover(item){
    //   @mouseout="noHover(item)"
    //   // this.$set(item, 'active', false);
    // }
  },
}
</script>
<style lang="scss" scoped>

    .product{
      display: flex;
      overflow: hidden;
      margin: 0 auto;
      width: 100%;
      max-width: 1200px;
      margin-top: 100px;
      height: 716px;
      .product-matrix-images{
        position: relative;
        // flex: 64;
        // width: 64%;
        // height: 100%;
        width: 706px;
        height: 716px;
        .product-matrix-images-font{
          position: absolute;
          top: 52%;
          left: 50%;
          z-index: 60;
          height: auto;
          max-height: 90%;
          max-width: 95%;
          opacity: 0;
          transition: opacity 0.6s, transform 0.6s;
          transform: translate(-50%, -57%) scale(0.98);
          &.image-active{
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
        }
        .product-matrix-images-back{
          position: absolute;
          z-index: 55;
          opacity: 0;
          width: 100%;
          height: 100%;
          display: none;
          transition: opacity 0.6s;
          background:linear-gradient(145deg,rgba(206,235,251,1) 0%,rgba(160,210,245,1) 100%);
          border:1px solid rgba(151,151,151,1);
          &.active{
            opacity: .12;
            display: block;
          }
        }
      }
      .product-matrix-list{
        display: flex;
        flex-direction: column;
        // flex: 36;
        // width: 36%;
        // min-width: 348px;

        width: 496px;
        height: 720px;
        background: #fff;
        .product-card{
          display: flex;
          align-items: center;
          position: relative;
          z-index: 70;
          flex: 1;
          border: 1px solid transparent;
          border-top-color: #ccc;
          border-right-color: #ccc;
          width: 100%;
          background: #fff;
          transition: border-color 0.3s, box-shadow 0.3s, opacity 0.3s;
          opacity: 0.4;
          cursor: pointer;
          &::before{
            content: '';
            position: absolute;
            border-width: 18px 18px 18px 0;
            border-style: solid;
            border-color: transparent #fff transparent transparent;
            top: 50%;
            left: 0;
            width: 0;
            height: 0;
            opacity: 1;
            transform: translate3d(0, -50%, 0);
            transition: transform 0.3s;
          }
          &:hover{
            border-top-color: #e5e5e5;
            opacity: 1;
            box-shadow: 0 0 12px 0 rgba(0,0,0,0.1);
            text-decoration: none;
            &::before{
              transform: translate3d(-17px, -50%, 0);
            }
            .product-card-arrow{
              opacity: 1;
              transform: translateX(0);
            }
            .product-card-icon{
              box-shadow: 0 6px 18px 0 rgba(0,0,0,0.1);
            }
            .product-card-text{
              a{
                display: block;
              }
            }
            
          }
          .product-card-icon{
            margin-left: 15%;
            margin-right: 8.2%;
            border-radius: 8px;
            width: 60px;
            height: 60px;
            background-size: 100%;
            background-position: center;
            background-repeat: no-repeat;
            transition: box-shadow 0.3s;
            img{
              width: 100%;
            }
          }
          .product-card-text{
            height: 90px;
            width: calc(61.8% - 64px);
            padding-top: 10px;
            .product-card-text-title{
              display: flex;
              align-items: center;
              position: relative;
              max-width: 100%;
              line-height: 28px;
              font-size: 1.375em;
              font-weight: 500;
            }
            .product-card-text-subtitle{
              margin-top: 11px;
              max-width: 100%;
              line-height: 24px;
              font-size: 14px;
            }
            a{
              display: none;
              font-size: 12px;
              color: #1E82F0;
              margin-top: 14px;
              text-decoration: underline;
            }
          }
          .product-card-arrow{
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            position: absolute;
            top: 0;
            right: 0;
            width: 72px;
            max-width: 72px;
            height: 100%;
            opacity: 0;
            transform: translateX(72px);
            transition: transform 0.3s, opacity 0.3s;
            background: #E0F2FF;
            text-align: center;
            img{
              width: 20px;
            }
            .product-card-arrow-back{
              top: 0;
              right: 0;
              width: 100%;
              height: 100%;
              transform: translate3d(72px, 0, 0);
              opacity: 0.1;
            }
            .icon{
              top: 50%;
              left: calc(50% + 72px);
              transform: translate3d(-50%, -50%, 0);
              font-size: 1.5em;
              opacity: 0;
              position: absolute;
              transition: 0.3s;

              display: inline-block;
              font-family: "tb-icons" !important;
              font-stretch: normal;
              font-style: normal;
              font-variant: normal;
              font-weight: normal;
              speak: none;
              text-transform: none;
              text-rendering: auto;
            }

          }

        }
      }
    }
</style>