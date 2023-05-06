<template>
  <div :id="id" class="orderArea orderbarArea"></div>
</template>

<script>
import echartsTheme from "cps/echarts/theme/westeros.json";
export default {
  name: "lineBarChart",
  data() {
    return {
      id: 'lineBarChart',
      myChart: null,
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
      let option = {
        tooltip: {
          trigger: 'axis'
        },
        toolbox: {
          show: true,
          feature: {
            mark: {
              show: true
            },
            dataView: {
              show: true,
              readOnly: false
            },
            magicType: {
              show: true,
              type: ['line', 'bar']
            },
            restore: {
              show: true
            },
            saveAsImage: {
              show: true
            }
          }
        },
        grid: {
          left: '2%',
          right: '2%',
          bottom: '3%',
          top: '12%',
          containLabel: true
        },
        legend: {
          data: ['策略累计收益','基准累计收益', '超额收益','仓位'],
          textStyle: {
            color: "black"
          },
          left:"10%"
        },
        xAxis: [{
          type: 'category',
          data: [ '20220725', '20220726', '20220727', '20220728', '20220729', '20220730', '20220731', '20220732', '20220733',
            '20220725', '20220726', '20220727', '20220728', '20220729', '20220730', '20220731', '20220732', '20220733',
            '20220725', '20220726', '20220727', '20220728', '20220729',


          ],
          axisLabel: {
            show: true,
            textStyle: {
              color: "black" //X轴文字颜色
            }
          },
          axisLine: {
            lineStyle: {
              color: '#01FCE3'
            }
          },
        }],
        yAxis: [{
          type: 'value',
          name: '收益',
          axisLabel: {
            formatter: '{value} ',
            textStyle: {
              color: "#2EC7C9" //X轴文字颜色
            }
          },
          axisLine: {
            lineStyle: {
              color: '#01FCE3'
            }
          },
        },
          {
          }
        ],
        series: [
          {
            name: '仓位',
            type: 'bar',
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: "#00FFE3"
                },
                  {
                    offset: 1,
                    color: "#4693EC"
                  }
                ])
              }
            },
            /*data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]*/
            data: [88.6, 76.7, 135.6, 162.2, 70.7, 75.6, 82.2, 48.7, 58.8, 16.0, 32.3, 30.3, 21.3, 66.3,76.7, 135.6, 162.2, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0,],
          },

          {
            name: '超额收益',
            type: 'line',
            yAxisIndex: 1,
            data: [ 82.3, 72.3, 62.3, 52.3, 42.3, 36.6,26.4, 28.7,2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3 , 21.3, 66.3, 41.3, 15.3, 30.3, ],
            lineStyle: {
              normal: {
                width: 5,
                color: {
                  type: 'linear',

                  colorStops: [{
                    offset: 0,
                    color: '#e84234' // 0% 处的颜色
                  },
                    {
                      offset: 0.4,
                      color: '#333b98' // 100% 处的颜色
                    }, {
                      offset: 1,
                      color: '#333b98' // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                },
                shadowColor: 'rgba(71,216,190, 0.5)',
                shadowBlur: 10,
                shadowOffsetY: 7
              }
            },
            itemStyle: {
              normal: {
                color: '#AAF487',
                borderWidth: 10,
                borderColor: "#AAF487"
              }
            },
            smooth: true,
          },

          {
            name: '基准累计收益',
            type: 'line',
            yAxisIndex: 1,
            data: [26.4, 18.7, 70.7, 75.6, 82.2, 48.7, 2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3, 30.3, 22.3, 12.3, 82.3, 72.3, 62.3, 52.3],
            lineStyle: {
              normal: {
                width: 5,
                color: {
                  type: 'linear',

                  colorStops: [{
                    offset: 0,
                    color: '#AAF487' // 0% 处的颜色
                  },
                    {
                      offset: 0.4,
                      color: '#47D8BE' // 100% 处的颜色
                    }, {
                      offset: 1,
                      color: '#47D8BE' // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                },
                shadowColor: 'rgba(71,216,190, 0.5)',
                shadowBlur: 10,
                shadowOffsetY: 7
              }
            },
            itemStyle: {
              normal: {
                color: '#AAF487',
                borderWidth: 10,
                /*shadowColor: 'rgba(72,216,191, 0.3)',
                 shadowBlur: 100,*/
                borderColor: "#AAF487"
              }
            },
            smooth: true,
          },
          {
            name: '策略累计收益',
            type: 'line',
            yAxisIndex: 1,
            data: [26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 58.8, 16.0, 32.3, 30.3, 21.3, 66.3, 41.3, 15.3, 30.3, 22.3, 12.3, 82.3, 72.3, 62.3, 52.3, 42.3, 36.6],
            lineStyle: {
              normal: {
                width: 5,
                color: {
                  type: 'linear',

                  colorStops: [{
                    offset: 0,
                    color: '#F8B854' // 0% 处的颜色
                  },
                    {
                      offset: 0.4,
                      color: '#DE801C' // 100% 处的颜色
                    }, {
                      offset: 1,
                      color: '#DE801C' // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                },
                shadowColor: 'rgba(71,216,190, 0.5)',
                shadowBlur: 10,
                shadowOffsetY: 7
              }
            },
            itemStyle: {
              normal: {
                color: '#F7AD3E',
                borderWidth: 10,
                /*shadowColor: 'rgba(72,216,191, 0.3)',
                 shadowBlur: 100,*/
                borderColor: "#F7AD3E"
              }
            },
            smooth: true,
          }




        ]
      };
      return option;
    },
  },
}
</script>

<style scoped>

</style>