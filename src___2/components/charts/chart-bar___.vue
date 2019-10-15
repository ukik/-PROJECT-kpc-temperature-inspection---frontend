<script>
import { Bar, Doughnut, Line } from "vue-chartjs";
import Chart from "chart.js";

export default {
  extends: Bar,
  props: {
    _newLabel: {
      default: () => ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"]
    },
    _newDatasets: {
      default: () => ({
        label: "Grafik Cuaca Mingguan",
        data: [12, 19, 3, 5, 2, 3]
      })
    }
    // _chartdata: {
    //   default: () => ({
    //     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    //     datasets: [
    //       {
    //         // label: "# of Votes",
    //         // data: [12, 19, 3, 5, 2, 3],
    //         backgroundColor: [
    //           "rgba(255, 99, 132, 0.2)",
    //           "rgba(54, 162, 235, 0.2)",
    //           "rgba(255, 206, 86, 0.2)",
    //           "rgba(75, 192, 192, 0.2)",
    //           "rgba(153, 102, 255, 0.2)",
    //           "rgba(255, 159, 64, 0.2)"
    //         ],
    //         borderColor: [
    //           "rgba(255, 99, 132, 1)",
    //           "rgba(54, 162, 235, 1)",
    //           "rgba(255, 206, 86, 1)",
    //           "rgba(75, 192, 192, 1)",
    //           "rgba(153, 102, 255, 1)",
    //           "rgba(255, 159, 64, 1)"
    //         ],
    //         borderWidth: 1
    //       }
    //     ]
    //   })
    // }
  },
  data() {
    return {
      chartdata: {
        labels: this._newLabel,
        datasets: [
          {
            label: this._newDatasets.label,
            data: this._newDatasets.data,
            // label: "# of Votes",
            // data: [12, 19, 3, 5, 2, 3],
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
    // this.chartdata = this._chartdata;
    let { datasets } = this.chartdata;
    console.log(datasets);

    this.options = {
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

            return labels; // untuk menghilangkan tombol legenda
          }
        }
      },
      // global chartjs
      onClick: function(event, array) {
        // if (array[0] != null && vm.$attrs.data != "") {
        //   vm.popup(array[0]._index);
        //   // console.log(array[0]._index)
        // }
        console.log(array);
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
              let mydata = data.datasets[0].data[tooltipItem.index];

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

  console.log(index, legendItem);

  return;

  // if (index > 1) {
  //   // Do the original logic
  //   defaultLegendClickHandler(e, legendItem);
  // } else {
  //   let ci = this.chart;
  //   [ci.getDatasetMeta(0), ci.getDatasetMeta(1)].forEach(function(meta) {
  //     meta.hidden =
  //       meta.hidden === null ? !ci.data.datasets[index].hidden : null;
  //   });
  //   ci.update();
  // }
};
</script>