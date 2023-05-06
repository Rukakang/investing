<template>
  <div class="logContainer">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>业绩表现：</span>
      </div>
      <div class="logArea el-scrollbar">
        <div class="item" v-for="(item,index) in achievement" :key="index">
          <div class="timeArea">
            <span class="title">{{ item.title }}</span>
            <span class="title time">{{item.desc[0]}}</span>
          </div>
        </div>
      </div>

    </el-card>
  </div>
</template>

<script>
import achievement from "@/assets/datas/achievement.json";

export default {
  name:'achievement',
  data() {
    return {
      achievement:achievement.data,
    };
  }
}
</script>

<style lang="less" scoped>
.logContainer{
  background: #fff;
  box-sizing: border-box;
  height:370px;
  max-height: 370px;
  overflow: hidden;
  border-radius: 6px;
  .logArea{
    overflow: auto;
    height: 100%;
  }
  .item{
    .timeArea{
      display: flex;
      justify-content: space-between;
    }
    .title{
      font-size: 13px;
    }
    .time{
      color:#87DE75;
    }
    .logContent{
      .logUl{
        padding-left: 30px;
        li{
          font-size: 12px;
          list-style: disc;
          line-height: 20px;
        }
      }
    }
  }
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
</style>

