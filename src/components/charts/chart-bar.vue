<script>
import { Bar, Doughnut, Line } from "vue-chartjs";
import Chart from "chart.js";

export default {
  extends: Bar,
  props: {
    _newLabel: {
      default: () => [] //["Red", "Blue", "Yellow", "Green", "Purple", "Orange"]
    },
    _newDatasets: {
      default: () => []
    },
    _fieldInspection: {
      default: ""
    }
  },
  data() {
    return {
      chartdata: {
        labels: this._newLabel,
        datasets: [
          {
            label: this._newLabel, //this._newDatasets.label,
            data: this._newDatasets, //this._newDatasets.data,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: null
    };
  },

  mounted() {
    const vm = this;
    let { datasets } = this.chartdata;

    this.options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      },
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        // legend only
        onClick: newLegendClickHandler,
        labels: {
          generateLabels: function(chart) {
            const labels = Chart.defaults.global.legend.labels.generateLabels(
              chart
            );
            //labels[0].fillStyle = "red";
            //labels[1].fillStyle = 'blue';

            // return labels; // untuk menghilangkan tombol legenda
          }
        }
      },
      // global chartjs
      onClick: function(event, array) {
        // if (array[0] != null && vm.$attrs.data != "") {
        //   vm.popup(array[0]._index);
        //   // console.log(array[0]._index)
        // }
        // console.log(array);
      },
      tooltips: {
        bodyFontColor: "#000000",
        bodyFontSize: 12,
        bodyFontStyle: "normal",
        bodyFontColor: "#FFFFFF",
        bodyFontFamily: "'Helvetica', 'Arial', sans-serif",
        footerFontSize: 14,
        callbacks: {
          label: function(tooltipItem, data) {
            if (data.labels[0] == "No Data") {
              // console.log(data, data.labels[0])
              return "No Data";
            } else {
              let mylabel = data.labels[tooltipItem.index];

              let mydata = "";
              switch (vm._fieldInspection) {
                case "condition":
                  mydata =
                    " (Mean) " +
                    getCondition(data.datasets[0].data[tooltipItem.index]);
                  break;
                case "weather":
                  mydata =
                    " (Mean) " +
                    getWeather(data.datasets[0].data[tooltipItem.index]);
                  break;
                default:
                  mydata =
                    " (Mean) " + data.datasets[0].data[tooltipItem.index];
                  break;
              }

              // console.log(tooltipItem.index)
              return mydata;
            }
            tooltipItem.yLabel;
          }
        }
      }
    };

    this.renderChart(this.chartdata, this.options);
  }
};

var defaultLegendClickHandler = Chart.defaults.global.legend.onClick;
var newLegendClickHandler = function(e, legendItem) {
  var index = legendItem.datasetIndex;

  return;
};

function getCondition(value) {
  switch (Number(value)) {
    case 1:
      return "Noise";
    case 2:
      return "Dusty";
    case 3:
      return "Vibration";
  }
}

function getWeather(value) {
  switch (Number(value)) {
    case 1:
      return "Cerah";
    case 2:
      return "Mendung";
    case 3:
      return "Hujan";
    case 4:
      return "Kabut";
    case 5:
      return "Angin";
    case 6:
      return "Lainnya";
  }
}
</script>