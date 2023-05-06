<template>
  <div class="logContainer">
    <el-card class="box-card" shadow="never">
      <div slot="header" class="clearfix">
        <span>异常记录：</span>
      </div>
      <div class="logArea el-scrollbar">
        <ul class="top-fin">
          <li>策略运行异常，点击查看详情</li>
          <li>策略单日跌幅超过3%</li>
          <li>策略单日涨幅超过300%</li>
          <li>邮件发送失败，点击查看详情</li>
          <li>数据更新失败，点击查看详情</li>
        </ul>
      </div>

    </el-card>
  </div>
</template>

<script>
import basicInfoData from "@/assets/datas/basicInfo.json";

export default {
  name:'errorRecords',
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
}
.top-fin{

}
.top-fin li{
  font-size: 14px;
  color: #e84236;

  line-height: 32px;
  list-style: disc;
  margin-left: 20px;
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

