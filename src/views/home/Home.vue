<template>
  <div class="home" id="linHome">
    <div class="banner">
      <!-- <img src="../../assets/banner.jpeg" alt="霖珑云科 -- 社会化用工薪税全流程解决方案" /> -->
      <img src="https://static.weibangong.com/files/5d36e9b453651f028d7cec01-big" alt="霖珑云科 -- 社会化用工薪税全流程解决方案" />
      <div class="b-info text-white">
        <p class="text-xxxl">&nbsp;合规降本增效&nbsp;专业成就未来</p>
        <h1 class="text-max">社会化用工薪税全流程解决方案</h1>
      </div>
    </div>

    <div class="numbers">
      <div class="n-data">
        <div class="n-item" v-for="(item, index) in numbers" :key="index">
          <div class="n-info">
            <div class="n-top text-blue">
              <count-to
                class="text-xxxxl"
                :start-val="0"
                :end-val="item.number"
                :duration="duration"
              />
              <i class="text-m" v-if="index != 1 && index != 2">{{item.unit}}1</i>
              <i class="text-l" v-if="index == 1 || index == 2">{{item.unit}}2</i>
            </div>
            <div class="n-btm">
              <span class="text-gray text-m">{{item.message}}1</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wrap">
      <div class="products animated" :class="{'anitr': this.activeClass('products') }" v-scrollWatch="{...watchOptions, name: 'products'}" >
        <div class="title">
          <Title bg-text="PRODUCT" title="产品与服务" remark="合规、降本、增效、省事" />
        </div>
        <div class="p-cards">
          <div class="p-item animated" @click="skipTo()" :class="{['anitr-' + item.id]: item.id, 'fadeInUp': activeClass('products')}" v-for="(item, index) in products" :key="index">
            <div class="p-top">
              <img :src="item.icon" :alt="'霖珑云科 -- 产品与服务_' + item.title" />
              <p class="text-l text-white">{{item.title}}</p>
            </div>
            <div class="p-btm">
              <div class="p-text" v-for="(info, idx) in item.messages" :key="idx">
                <img v-if="index%2==0" src="../../assets/check-blue.png" :alt="'霖珑云科 -- '+ item.title +'_' + info.text" />
                <img v-if="index%2!=0" src="../../assets/check-yellow.png" :alt="'霖珑云科 -- '+ item.title +'_' + info.text" />
                <p class="text-m text-gray">{{info.text}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="advantage" :class="{'anitr': this.activeClass('advantage') }" v-scrollWatch="{...watchOptions, name: 'advantage'}" >
        <div class="title">
          <Title bg-text="ADVANTAGE" title="我们的优势" remark="科技赋能专业 服务创造价值" />
        </div>
        <div class="a-cards">
          <div class="a-item animated" :class="{['anitr-' + item.id]: item.id, 'slideInUp': activeClass('advantage')}" v-for="(item, index) in advantages" :key="index">
            <div class="a-top">
              <img src="../../assets/advantages.png" :alt="'霖珑云科 -- 我们的优势_' + item.title" />
              <h1 class="text-xxxl text-gray">{{item.title}}</h1>
            </div>
            <div class="a-btm">
              <p class="text-m text-remark" v-for="(msg, idx) in item.messages" :key="idx">{{msg}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="customers" :class="{'anitr': this.activeClass('customers') }" v-scrollWatch="{...watchOptions, name: 'customers'}" >
      <div class="title">
        <Title bg-text="CUSTOMER" title="他们眼中的霖珑" remark="创造价值 携手共赢" />
      </div>
      <div class="c-wrap">
        <div class="c-content">
          <h1>科技赋能管理</h1>
          <img class="customer-bg" src="../../assets/customer.jpg" alt="霖珑云科 -- 他们眼中的霖珑_创造价值_携手共赢" />
          <div class="c-cards">
            <div class="c-item animated" :class="{['anitr-' + item.id]: item.id, 'slideInUp': activeClass('customers')}" v-for="(item, index) in companys" :key="index" @click="enterpriseHonor" >
              <img class="dot-1" src="../../assets/dot-1.png" :alt="'霖珑云科 -- ' + item.company + '_' + item.duty" />
              <img class="dot-2" src="../../assets/dot-2.png" :alt="'霖珑云科 -- ' + item.company + '_' + item.duty" />
              <div class="logo">
                <img :src="item.logo" :alt="'霖珑云科 -- ' + item.company + '_' + item.duty" />
              </div>
              <div class="message text-s text-remark">{{item.message}}</div>
              <div class="company text-s">
                <b>{{item.company}}</b>
                <span>{{item.duty}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wrap">
      <div class="dynamic" :class="{'anitr': this.activeClass('dynamic') }" v-scrollWatch="{...watchOptions, name: 'dynamic'}" >
        <div class="title">
          <Title bg-text="ACTIVITIES" title="霖珑声音" remark="创造价值 携手共赢" />
        </div>
        <div class="d-list">
          <router-link target="_blank" :to="{path:'/dynamic'}" class="d-item animated"  :class="{['anitr-' + item.id]: item.id, 'slideInUp': activeClass('dynamic')}" v-for="(item, index) in dynamics" :key="index" >
            <div class="avader">
              <img :src="item.image" :alt="'霖珑云科 -- ' + item.title" />
            </div>
            <div class="text">
              <h1>{{splitTitle(item.title) }}</h1>
              <p>{{splitMessage(item.message)}}</p>
            </div>
          </router-link>
        </div>
      </div>

      <div class="cooperative" :class="{'anitr': this.activeClass('cooperative') }" v-scrollWatch="{...watchOptions, name: 'cooperative'}">
        <div class="title">
          <Title bg-text="PARTNERSHIP" title="合作伙伴" remark=" " />
        </div>
        <div class="parners"></div>
      </div>

      <!-- <div class="contactus" :class="{'anitr': this.activeClass('contactus') }" v-scrollWatch="{...watchOptions, name: 'contactus'}">
        <div class="title">
          <Title bg-text="CONTACTUS" title="联系我们" remark=" " />
        </div>
        <div class="forms">
          <input
            class="text-xxl"
            :class="{'error-tip': errorClass.name}"
            v-model="form.name"
            type="text"
            placeholder="姓名"
          />
          <input
            class="text-xxl"
            v-model="form.tel"
            :class="{'error-tip': errorClass.tel}"
            type="text"
            placeholder="电话"
          />
          <div class="select" :class="{'error-tip': errorClass.option}" @click="showOptions()">
            <span v-html="selectOptionValue">您要了解的产品</span>
            <img class="right" :class="{'rotate': displayOptions}" src="../../assets/down.png" />
          </div>
          <div class="options text-gray" v-if="displayOptions">
            <p>
              <span @click="getOptionValue('微办公')">微办公</span>
            </p>
            <p>
              <span @click="getOptionValue('乐接活')">乐接活</span>
            </p>
            <p>
              <span @click="getOptionValue('不木钱包')">不木钱包</span>
            </p>
            <p>
              <span @click="getOptionValue('汇社保')">汇社保</span>
            </p>
          </div>
        </div>
        <button class="button">提交</button>
      </div> -->
    </div>

    <!-- <div class="service">
      <img src="../../assets/service.png" alt="">
    </div>-->

    <!-- <div>
      <button v-on:click="shuffle">Shuffle</button>
      <transition-group name='list' tag="p">
        <p v-for="(item,index) in list" v-bind:key="index" class="list-item">
          {{ item.title }}
        </p>
      </transition-group>
    </div>-->
  </div>
</template>

<script>
import _ from "lodash";
import CountTo from "vue-count-to";
import Title from "../../components/Title";
import store from "../../store/index";
import scrollWatch from "vue-scrollwatch";
import {
  getNumbers,
  getProducts,
  getAdvantages,
  getCompanys,
  getMedias,
  getGithub
} from "../../utils/apis";

export default {
  name: "home",
  components: { CountTo, Title },
  data: function() {
    return {
      list: [],
      number: 0,
      duration: 1000,
      menuType: 1,
      numbers: [],
      products: [],
      advantages: [],
      companys: [],
      dynamics: [],
      displayOptions: false,
      tabIndex: "1",
      activeMenu: "",
      selectOptionValue: "您要了解的产品",
      form: {
        name: "",
        tel: "",
        option: ""
      },
      errorClass: {
        name: false,
        tel: false,
        option: false
      },
      activeMenus: [],
      watchOptions: {
        name:'numbers',
        offset: 500,
        callback: this.spyDomChange.bind(this)
      },
    };
  },
  computed: {
    
  },
  created() {
    // this.watchOptions.offset = window.screen.height;
  },
  mounted() {
    let self = this;
    window.addEventListener("scroll", e => {
      if (this.$route.path !== "/") return;
      let t = document.documentElement.scrollTop || document.body.scrollTop;
      let menuType = self.menuType;

      if (t > 74) {
        if (menuType == 2) return;
        store.dispatch("permission/getMenuType", 2);
        self.menuType = 2;
      } else {
        if (menuType == 1) return;
        self.menuType = 1;
        store.dispatch("permission/getMenuType", 1);
      }
    }, true);

    this.getDatas();
    this.getProducts();
    this.getAdvantages();
    this.getCompanys();
    this.getDynamics();
    this.getGithub();

  },
  methods: {
    skipTo(){
      window.open('/product');
    },
    activeClass(name){
      return this.activeMenus.indexOf(name) >= 0;
    },
    splitMessage(message){
      if(message.length > 68){
        return message.substring(0,68) + '...';
      }else{
        return message;
      }
    },
    splitTitle(title){
      if(title.length > 34){
        return title.substring(0,34) + '...';
      }else{
        return title;
      }
    },
    getGithub() {
      getGithub({ name: "xiao ming" })
        .then(res => {
          // console.log("res", res);
        })
        .catch(err => {
          // console.log("err", err);
        });
    },
    // 校验是否电话号码
    IsPhoneNumber(phoneNumber) {
      var reg = /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
      return reg.test(phoneNumber);
    },
    // 提交表单
    handleSumbit() {
      this.errorClass.name = this.form.name == "" ? true : false;
      this.errorClass.tel = !this.IsPhoneNumber(this.form.tel);
      this.errorClass.option = this.form.option == "" ? true : false;
      let validateError = Object.entries(this.errorClass).some(item => item[1]);
      if (validateError) {
        return false;
      }
      // alert("登录成功！");
      // console.log(" result: ", this.form);
    },
    // 获取select option的值
    getOptionValue(value) {
      this.form.option = value;
      this.selectOptionValue = value;
      this.errorClass.option = this.form.option == "" ? true : false;
      this.displayOptions = false;
    },
    spyDomChange(node) {
      let menus = this.activeMenus;
      if(menus.indexOf(node.name) < 0){
        menus.push(node.name);
        this.activeMenus = menus;
      }

      // if (this.activeMenu != node.name) {
      //   this.activeMenu = node.name;
      // }
    },
    scrollTo(name) {
      scrollWatch.scrollTo(name);
    },

    skipDynamic() {
      store.dispatch("permission/changeTabIndex", 2);
      this.$router.push({
        path: "/dynamic"
      });
    },
    showOptions() {
      this.displayOptions = !this.displayOptions;
    },
    getDatas() {
      getNumbers().then(res => {
        if (res.data.code == 200) {
          this.numbers = res.data.list;
        }
      });
    },
    getProducts() {
      getProducts().then(res => {
        if (res.data.code == 200) {
          this.products = res.data.list;
        }
      });
    },
    getAdvantages() {
      getAdvantages().then(res => {
        if (res.data.code == 200) {
          this.advantages = res.data.list;
        }
      });
    },
    getCompanys() {
      getCompanys().then(res => {
        if (res.data.code == 200) {
          this.companys = res.data.list;
        }
      });
    },
    getDynamics() {
      getMedias().then(res => {
        if (res.data.code == 200) {
          this.dynamics = res.data.list.slice(0,3);
        }
      });
    },

    shuffle() {
      this.list = _.shuffle(this.list);
    },
    changeNumber() {
      this.number = 200000;
      this.menuType = this.menuType == 2 ? 1 : 2;
    },
    enterpriseHonor() {
      store.dispatch("permission/changeTabIndex", 2);
      this.$router.push({
        path: "/dynamic"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  .marks {
    position: fixed;
    top: 80px;
    background: #fff;
    color: #000;
    font-size: 40px;
    z-index: 9999;
  }
  .error-tip {
    border-bottom: 1px solid #f70d0d !important;
  }

  .service {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    right: 100px;
    z-index: 9999;
    img {
      width: 60px;
      height: 60px;
    }
  }

  .banner {
    position: relative;
    width: 100%;
    img {
      width: 100%;
      display: block;
    }
    .b-info {
      width: 100%;
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      transform: translateY(-50%);
      text-align: center;
      animation: 1s banner;
      p {
        letter-spacing: 12px;
        text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.29);
        font-weight: 300;
        font-family:"PingFangSC-Light","Microsoft Yahei";
      }
      h1 {
        font-weight: 500;
        letter-spacing: 2px;
        text-shadow: 1px 1px 20px rgba(0, 61, 166, 1);
        font-family:"PingFangSC","Microsoft Yahei";
        margin-top: 10px;
      }
    }
  }

  .numbers {
    width: 100%;
    background: #f5f5f5;
    padding: 30px 0;
    .n-data {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      .n-item {
        .n-info {
          display: inline-block;
          width: auto;
          text-align: left;
        }
        flex: 1;
        text-align: center;
        .n-top {
          font-size: 0;
          span {
            display: inline-block;
            font-weight: 300;
            margin-right: 4px;
          }
        }
      }
    }
  }

  .wrap {
    width: 1200px;
    margin: 0 auto;

    .products {
      width: 100%;
      margin-top: 10px;
      transform: translateY(100px);
      opacity: 0.5;
      .p-cards {
        margin-top: 60px;
        display: flex;
        justify-content: space-between;

        .p-item {
          width: 250px;
          flex-basis: 250px;
          box-shadow: 0px 20px 60px 10px rgba(13, 37, 62, 0.05);
          border-radius: 4px;
          cursor: pointer;

          &:nth-of-type(2n) .p-top {
            background: $orange;
          }
          &:hover {
            box-shadow: 0px 0px 10px 10px rgba(32, 0, 0, 0.06);
          }
          .p-top {
            background: $blue;
            height: 114px;
            text-align: center;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            img {
              width: 36px;
              height: 36px;
              margin-top: 30px;
            }
            p {
              margin-top: 10px;
            }
          }
          .p-btm {
            padding: 36px 24px 50px;
            .p-text {
              height: 50px;
              position: relative;
              p {
                line-height: 20px;
                display: inline-block;
                width: 160px;
                position: absolute;
                right: 6px;
              }
              img {
                width: 40px;
                position: absolute;
                left: 0;
                top: -6px;
              }
            }
          }
        }
      }
    }

    .advantage {
      margin-top: 50px;
      transform: translateY(100px);
      opacity: 0.5;
      .a-cards {
        margin-top: 60px;
        display: flex;
        justify-content: space-between;
        .a-item {
          width: 350px;
          flex-basis: 350px;
          box-shadow: 0px 20px 60px 10px rgba(13, 37, 62, 0.05);
          border-radius: 4px;
          text-align: left;
          padding: 50px 30px 44px;
          position: relative;
          &:hover {
            box-shadow: 0px 0px 10px 10px rgba(32, 0, 0, 0.06);
            &::after {
              content: " ";
              position: absolute;
              bottom: 0;
              width: 350px;
              height: 6px;
              background-color: #f5a623;
              left: 0;
            }
          }

          .a-top {
            img {
              width: 52px;
            }
            h1 {
              margin-top: 6px;
              margin-bottom: 20px;
            }
          }
        }
      }
    }

    .dynamic {
      margin: 140px auto;
      margin-bottom: 100px;
      width: 1200px;
      transform: translateY(100px);
      opacity: 0.5;
      .d-list {
        display: flex;
        justify-content: space-around;
        margin-top: 60px;
        .d-item {
          display: block;
          flex-basis: 380px;
          &:hover {
            text-decoration: none;
          }
          .avader {
            img {
              width: 380px;
              height: 180px;
              object-fit: cover;
              display: block;
            }
          }
          .text {
            padding: 30px 22px;
            border-left: 1px solid #e9e9e9;
            border-bottom: 1px solid #e9e9e9;
            border-right: 1px solid #e9e9e9;
            height: 200px;

            h1 {
              font-size: 20px;
              font-weight: 400;
              line-height: 22px;
              margin-bottom: 26px;
            }
            p {
              font-size: 14px;
              font-weight: 400;
              line-height: 22px;
              color: #666;
              width: 334px;
              height: 70px;
            }
          }
        }
      }
    }

    .cooperative {
      width: 100%;
      transform: translateY(100px);
      opacity: 0.5;
      margin-bottom: 180px;
      .parners {
        width: 940px;
        height: 460px;
        margin: 0 auto;
        background: url(../../assets/partner.png) 100% 100% no-repeat;
        background-size: contain;
      }
    }

    .contactus {
      text-align: center;
      margin-top: 100px;
      transform: translateY(30px);
      opacity: 0.5;
      .forms {
        margin-top: 60px;
        display: flex;
        position: relative;
        justify-content: space-between;
        input {
          flex-basis: 260px;
          line-height: 40px;
          border: none;
          border-bottom: 1px solid #e2e2e2;
          &::-webkit-input-placeholder {
            font-size: 16px;
          }
        }
        .select {
          line-height: 40px;
          border-bottom: 1px solid #e2e2e2;
          flex-basis: 260px;
          color: #c9c9c9;
          text-align: left;
          font-size: 16px;
          position: relative;
          .rotate {
            transform: rotate(180deg);
          }
          cursor: pointer;
          .right {
            position: absolute;
            right: 0;
            bottom: 15px;
            width: 16px;
          }
        }
        .options {
          text-align: center;
          position: absolute;
          top: 41px;
          width: 260px;
          right: 0;
          z-index: 10;
          p {
            padding: 0 32px;
            color: #9b9b9b;
            line-height: 40px;
            cursor: pointer;
            &:hover {
              background: #f7f7f7;
              color: $blue;
            }
            span {
              display: inline-block;
              width: 100%;
              height: 100%;
              border-bottom: 1px solid #eee;
            }
          }
        }
      }
      .button {
        width: 167px;
        height: 40px;
        line-height: 40px;
        background: rgba(30, 136, 245, 1);
        box-shadow: 0px 0px 10px 0px rgba(0, 145, 255, 0.74);
        border-radius: 32px;
        margin-top: 70px;
        margin-bottom: 200px;
        border: none;
        color: #fff;
        cursor: pointer;
        &:hover {
          opacity: 0.9;
        }
      }
    }
  }

  .customers {
    width: 100%;
    margin-top: 60px;
    transform: translateY(100px);
      opacity: 0.5;
    .c-wrap {
      height: 700px;
      width: 100%;
      margin-top: 130px;
      margin-bottom: 50px;
      background-color: #c1e8ff;
      .c-content {
        width: 1200px;
        height: 100%;
        margin: 0 auto;
        position: relative;
        .customer-bg {
          position: absolute;
          left: -20px;
          top: 30px;
          width: 700px;
          height: 670px;
        }
        h1 {
          display: inline-block;
          width: 310px;
          line-height: 70px;
          background: rgba($color: #1e82f0, $alpha: .9);
          border-radius: 4px;
          font-size: 40px;
          font-weight: 600;
          color: #fff;
          letter-spacing: 4px;
          text-align: center;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 740px;
          z-index: 20;
        }
        .c-cards {
          position: absolute;
          right: 0;
          top: -65px;
          width: 650px;
          // max-height: 830px;
          display: flex;
          flex-direction: column;
          box-shadow: 0px 0px 60px 10px rgba(13, 37, 62, 0.1);
          // overflow-y: auto;
          overflow: hidden;
          cursor: pointer;
          .c-item {
            flex-basis: 260px;
            background: #fff;
            box-shadow: 0px 0px 60px 10px rgba(13, 37, 62, 0.1);
            border-radius: 4px;
            padding: 26px 58px 22px 26px;
            position: relative;
            &:hover {
              text-decoration: none;
            }
            .dot-2 {
              position: absolute;
              top: 26px;
              left: 26px;
              width: 80px;
              height: 70px;
            }
            .dot-1 {
              position: absolute;
              right: 26px;
              bottom: 26px;
              width: 80px;
              height: 70px;
            }
            &:not(:first-child) {
              margin-top: 22px;
            }
            .logo {
              width: 100%;
              text-align: center;
              img {
                height: 60px;
              }
            }
            .message {
              width: 490px;
              margin: 0 auto;
              text-align: left;
              margin-top: 26px;
            }
            .company {
              text-align: center;
              position: absolute;
              bottom: 30px;
              width: 100%;
              left: 0;
              right: 0;
              line-height: 18px;
              span {
                margin-left: 6px;
              }
            }
          }
        }
      }
    }
  }

  .anitr{
    animation: 1s topcity;
    animation-fill-mode: both;
  }
  .anitr-1 {
    animation-delay: .2s
  }

  .anitr-2 {
    animation-delay: .4s
  }

  .anitr-3 {
    animation-delay: .6s
  }

  .anitr-4 {
    animation-delay: .8s
  }

  .anitr-5 {
    animation-delay: 1s
  }

  .anitr-6 {
    animation-delay: 1.2s
  }

  .anitr-7 {
    animation-delay: 1.4s
  }

  @keyframes topcity{
    from {
      opacity: 0.2;
      transform: translate3d(0, 100px, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes banner{
    0%{ top: 40% }
    100%{ top: 50%; }
  }
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
// 设置初始位置
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
  // transform: translateY(30px);
}
.list-move {
  transition: transform 1s;
}
</style>
