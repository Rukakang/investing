<template>
  <section class="data_section" ref="data_section">
    <el-row :gutter="10" class="row_list order_list">
      <el-col :span="5">
          <basic-info></basic-info>
      </el-col>
      <el-col :span="13">
        <line-bar-chart ></line-bar-chart>
      </el-col>
      <el-col :span="6">
        <achievement></achievement>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="row_list order_list">
      <el-col :span="9">
        <industry-chart></industry-chart>
      </el-col>
      <el-col :span="9">
        <card-list></card-list>
      </el-col>
      <el-col :span="6">
        <error-records></error-records>
      </el-col>

    </el-row>
    <el-row :gutter="10" class="row_list order_list">
      <el-col :span="10">
        <repository-chart></repository-chart>
      </el-col>
      <el-col :span="14">
        <daily-earn-chart></daily-earn-chart>
      </el-col>
    </el-row>
  </section>
</template>

<script>
import LineBarChart from "cps/echarts/lineBarChart";
import BasicInfo from "@/page/index/components/basicInfo";
import Achievement from "@/page/index/components/achievement";
import CardList from "@/page/index/components/cardList";
import IndustryChart from "cps/echarts/industryChart";
import RepositoryChart from "cps/echarts/repositoryChart";
import DailyEarnChart from "cps/echarts/dailyEarnChart";
import ErrorRecords from "@/page/index/components/errorRecords"; // 用户投资类型 折线图

export default {
  data() {
    return {}
  },
  components: {
    ErrorRecords,
    DailyEarnChart,
    RepositoryChart,
    IndustryChart,
    Achievement,
    CardList,
    BasicInfo,
    LineBarChart,
  },
  created() {
  },
  mounted() {
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.data_section {
  margin: 20px;
  border-radius: 2px;

  .row_list {
    margin-bottom: 20px;
  }

  .order_list {
    .orderArea {
      width: 100%;
      height: 300px;
      background: #fff !important;
      border-radius: 6px;
      box-sizing: border-box;
      padding-top: 40px;
    }
    .orderbarArea{
      height: 370px;
    }
  }

}

</style>
