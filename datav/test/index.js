Vue.component("top-header",{
    template:'<div id="top-header"> <dv-decoration-8 class="header-left-decoration" /> <dv-decoration-5 class="header-center-decoration" /> <dv-decoration-8 class="header-right-decoration" :reverse="true" /> <div class="center-title">施工养护综合数据</div> </div>'
});

var digitalFlop = Vue.extend({
    template: `<div id="digital-flop"> <div class="digital-flop-item" v-for="item in digitalFlopData" :key="item.title" > <div class="digital-flop-title">{{ item.title }}</div> <div class="digital-flop"> <dv-digital-flop :config="item.number" style="width:100px;height:50px;" /> <div class="unit">{{ item.unit }}</div> </div> </div> <dv-decoration-10 /> </div>`,
    data () {
        return {
          digitalFlopData: []
        }
      },
      methods: {
        createData () {
          this.digitalFlopData = getDigitalFlopData();
        }
      },
      mounted () {
        const { createData } = this;
        createData();
        setInterval(createData, 3000);
      }
});


Vue.component("ranking-board",{
    template:'<div id="ranking-board"> <div class="ranking-board-title">巡查上报记录数量</div> <dv-scroll-ranking-board :config="config" /> </div>'
});


var app = new Vue({
    el: '#app',
    components:{
        'digitalFlop':digitalFlop
    }

});



function randomExtend (minNum, maxNum) {
    if (arguments.length === 1) {
      return parseInt(Math.random() * minNum + 1, 10)
    } else {
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
    }
}

function getDigitalFlopData(){
    return [
        {
          title: '管养里程',
          number: {
            number: [randomExtend(20000, 30000)],
            content: '{nt}',
            textAlign: 'right',
            style: {
              fill: '#4d99fc',
              fontWeight: 'bold'
            }
          },
          unit: '公里'
        },
        {
          title: '桥梁',
          number: {
            number: [randomExtend(20, 30)],
            content: '{nt}',
            textAlign: 'right',
            style: {
              fill: '#f46827',
              fontWeight: 'bold'
            }
          },
          unit: '座'
        },
        {
          title: '涵洞隧道',
          number: {
            number: [randomExtend(20, 30)],
            content: '{nt}',
            textAlign: 'right',
            style: {
              fill: '#40faee',
              fontWeight: 'bold'
            }
          },
          unit: '个'
        },
        {
          title: '匝道',
          number: {
            number: [randomExtend(10, 20)],
            content: '{nt}',
            textAlign: 'right',
            style: {
              fill: '#4d99fc',
              fontWeight: 'bold'
            }
          },
          unit: '个'
        },
        {
          title: '隧道',
          number: {
            number: [randomExtend(5, 10)],
            content: '{nt}',
            textAlign: 'right',
            style: {
              fill: '#f46827',
              fontWeight: 'bold'
            }
          },
          unit: '个'
        },
        {
          title: '服务区',
          number: {
            number: [randomExtend(5, 10)],
            content: '{nt}',
            textAlign: 'right',
            style: {
              fill: '#40faee',
              fontWeight: 'bold'
            }
          },
          unit: '个'
        },
        {
          title: '收费站',
          number: {
            number: [randomExtend(5, 10)],
            content: '{nt}',
            textAlign: 'right',
            style: {
              fill: '#4d99fc',
              fontWeight: 'bold'
            }
          },
          unit: '个'
        },
        {
          title: '超限站',
          number: {
            number: [randomExtend(5, 10)],
            content: '{nt}',
            textAlign: 'right',
            style: {
              fill: '#f46827',
              fontWeight: 'bold'
            }
          },
          unit: '个'
        },
        {
          title: '停车区',
          number: {
            number: [randomExtend(5, 10)],
            content: '{nt}',
            textAlign: 'right',
            style: {
              fill: '#40faee',
              fontWeight: 'bold'
            }
          },
          unit: '个'
        }
      ]
}