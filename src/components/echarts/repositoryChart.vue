<template>
  <div class="logContainer">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>仓位管理：</span>
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
  name: "repositoryChart",
  data() {
    return {
      id: "repositoryChart",
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
      let options = {

        "animation": true,
        "title": {
          "x": "center",
          "y": "center",
          "textStyle": {
            "color": "black",
            "fontSize": 10,
            "fontWeight": "normal",
            "align": "center",
            "width": "200px"
          },
          "subtextStyle": {
            "color": "black",
            "fontSize": 12,
            "fontWeight": "normal",
            "align": "center"
          }
        },
        "legend": {
          "width": "100%",
          "left": "center",
          "textStyle": {
            "color": "black",
            "fontSize": 12
          },
          "icon": "circle",
          "right": "0",
          "bottom": "-60",
          "padding": [70, 20],
          "itemGap": 5,
          "data": ["北方稀土", "中煤能源", "中远海控", "玲珑轮胎", "杭州银行", "光大证券", "中信银行","现金"]
        },
        "series": [{
          "type": "pie",
          "center": ["50%", "40%"],
          "radius": ["20%", "43%"],
          "color": ["#FEE449", "#00FFFF", "#00FFA8", "#9F17FF", "#FFE400", "#F76F01", "#01A4F7", "#FE2C8A"],
          "startAngle": 135,
          "labelLine": {
            "normal": {
              "length": 15
            }
          },
          "label": {
            "normal": {
              "formatter": "{b|{b}:}  {per|{d}%} ",
              "backgroundColor": "rgba(255, 147, 38, 0)",
              "borderColor": "transparent",
              "borderRadius": 4,
              "rich": {
                "a": {
                  "color": "#999",
                  "lineHeight": 12,
                  "align": "center"
                },
                "hr": {
                  "borderColor": "#aaa",
                  "width": "100%",
                  "borderWidth": 1,
                  "height": 0
                },
                "b": {
                  "color": "#b3e5ff",
                  "fontSize": 16,
                  "lineHeight": 33
                },
                "c": {
                  "fontSize": 14,
                  "color": "#eee"
                },
                "per": {
                  "color": "#FDF44E",
                  "fontSize": 14,
                  "padding": [5, 8],
                  "borderRadius": 2
                }
              },
              "textStyle": {
                "color": "black",
                "fontSize": 16
              }
            }
          },
          "emphasis": {
            "label": {
              "show": true,
              "formatter": "{b|{b}:}  {per|{d}%}  ",
              "backgroundColor": "rgba(255, 147, 38, 0)",
              "borderColor": "transparent",
              "borderRadius": 4,
              "rich": {
                "a": {
                  "color": "#999",
                  "lineHeight": 22,
                  "align": "center"
                },
                "hr": {
                  "borderColor": "#aaa",
                  "width": "100%",
                  "borderWidth": 1,
                  "height": 0
                },
                "b": {
                  "color": "black",
                  "fontSize": 14,
                  "lineHeight": 33
                },
                "c": {
                  "fontSize": 14,
                  "color": "#eee"
                },
                "per": {
                  "color": "#FDF44E",
                  "fontSize": 14,
                  "padding": [5, 6],
                  "borderRadius": 2
                }
              }
            }
          },
          "data": [{
            "name": "北方稀土",
            "value": 1
          }, {
            "name": "中煤能源",
            "value": 1
          }, {
            "name": "中远海控",
            "value": 1
          }, {
            "name": "玲珑轮胎",
            "value": 1
          }, {
            "name": "杭州银行",
            "value": 1
          }, {
            "name": "光大证券",
            "value": 1
          }, {
            "name": "中信银行",
            "value": 1
          }, {
            "name": "现金",
            "value": 3
          }]
        }, {
          "type": "pie",
          "center": ["50%", "40%"],
          "radius": ["15%", "14%"],
          "label": {
            "show": false
          },
          "data": [{
            "value": 78,
            "name": "实例1",
            "itemStyle": {
              "normal": {
                "color": {
                  "x": 0,
                  "y": 0,
                  "x2": 1,
                  "y2": 0,
                  "type": "linear",
                  "global": false,
                  "colorStops": [{
                    "offset": 0,
                    "color": "#9F17FF"
                  }, {
                    "offset": 0.2,
                    "color": "#01A4F7"
                  }, {
                    "offset": 0.5,
                    "color": "#FE2C8A"
                  }, {
                    "offset": 0.8,
                    "color": "#FEE449"
                  }, {
                    "offset": 1,
                    "color": "#00FFA8"
                  }]
                }
              }
            }
          }]
        }]}
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
