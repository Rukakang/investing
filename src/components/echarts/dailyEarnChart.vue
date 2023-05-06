<template>
  <div class="logContainer">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>每日收益统计：</span>
      </div>
      <div class="logArea el-scrollbar">
        <div :id="id" class="orderArea" style="width: 98%;height: 90%"></div>
      </div>
    </el-card>
  </div>
</template>

<script>
import echartsTheme from "cps/echarts/theme/westeros.json";
export default {
  name: "dailyEarnChart",
  data() {
    return {
      id: "dailyEarnChart",
      myChart: null,
      colors:['rgb(46, 199, 201)', 'rgb(90, 177, 239)', 'rgb(255, 185, 128)']
    }
  },
  mounted() {
    this.loadChart();
  },
  beforeDestroy() {
    if (!this.myChart) {
      return
    }
    this.myChart.dispose();
    this.myChart = null;
  },
  methods: {
    loadChart() {
      this.$nextTick(() => {
        this.$echarts.registerTheme('westeros', echartsTheme)
        this.myChart = this.$echarts.init(document.getElementById(this.id), 'westeros');
        this.myChart.setOption(this.initOption());
      })
    },
    initOption() {
      let options = {
        color: this.colors,

        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          formatter: function(params) {
            // 系列
            let html = params[0].name + "<br>";

            for (var i = 0; i < params.length; i++) {

              // 获取每个系列对应的颜色值
              html += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + params[i].color + ';"></span>';

              // 通过判断指定系列增加 % 符号
              if (options.series[params[i].seriesIndex].type == "line") {
                html += params[i].seriesName + ": " + params[i].value + "%<br>";
              } else {
                html += params[i].seriesName + ": " + params[i].value + "<br>";
              }
            }
            return html;
          }
        },
        grid: {
          right: '20%'
        },
        toolbox: {
          feature: {
            dataView: {
              show: true,
              readOnly: false
            },
            restore: {
              show: true
            },
            saveAsImage: {
              show: true
            }
          }
        },
        legend: {
          textStyle: {
            color: '#fff'
          },
          data: ['超额收益']
        },
        // 缩放组件
        /*dataZoom: {
            type: 'slider'
        },*/
        xAxis: [{
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            formatter: '{value} ',
            textStyle: {
              color: "#ffffff" //X轴文字颜色
            }
          },
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }],
        yAxis: [{
          // type: 'value',
          // name: '超额收益',
          // min: 0,
          // max: 250,
          // position: 'right',
          // axisLine: {
          //     lineStyle: {
          //         color: colors[0]
          //     }
          // },
          // axisLabel: {
          //     formatter: '{value} ml'
          // }
        },
          {
            // type: 'value',
            // name: '超额收益',
            // min: 0,
            // max: 250,
            // position: 'right',
            // offset: 80,
            // axisLine: {
            //     lineStyle: {
            //         color: colors[1]
            //     }
            // },
            // axisLabel: {
            //     formatter: '{value} ml'
            // }
          },
          {
            type: 'value',
            name: '金额',
            min: 0,
            max: 25,
            position: 'left',
            axisLine: {
              lineStyle: {
                color: this.colors[1]
              }
            },
            axisLabel: {
              formatter: '{value} '
            }
          }
        ],
        series: [
          //     {
          //     name: '收益',
          //     type: 'bar',
          //     data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
          //     itemStyle: {
          //         normal: {
          //             barBorderRadius: 2
          //         }
          //     }
          // },
          {
            barGap: '-50%', // 增加偏移量使重叠显示
            name: '绝对收益',
            type: 'bar',
            yAxisIndex: 1,
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            itemStyle: {
              normal: {
                barBorderRadius: 2
              }
            }
          },
          // {
          //     name: '最大收益',
          //     type: 'line',
          //     yAxisIndex: 2,
          //     data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
          // }
        ]}
      return options;
    },
  },
  watch: {
    // id:()=>{
    //     this.initOption()
    // }
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

</style>
