
<template>
  <div class="logContainer">
    <el-card class="box-card" shadow="never">
      <div slot="header" class="clearfix">
        <span>基本信息：</span>
        <p class="desc">PSC策略为趋势策略，结合AI学习+风险控制为一体的综合性策略，预期年化收益28%</p>
      </div>
      <div class="logArea el-scrollbar">
        <div class="item" v-for="(item,index) in basicInfoData" :key="index">
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
import basicInfoData from "@/assets/datas/basicInfo.json";

export default {
  name:'basicInfo',
  data() {
    return {
      basicInfoData:basicInfoData.data,
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
  .desc{
    font-size: 12px;
    color: #029698;
    margin-top: 10px;
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

