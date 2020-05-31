<template>
  <client-only>
    <VueApexCharts
      height="350"
      type="bar"
      class="-ml-4 md:ml-auto"
      :options="chartOptions"
      :series="series"
    />
  </client-only>
</template>

<script>
export default {
  props: ['blok'],
  data: () => {
    return {
      series: [],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 350
        },
        colors: ['#f06988', '#4fba98'],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '50%',
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        fill: {
          opacity: 1
        },
        legend: {
          onItemClick: {
            toggleDataSeries: false
          }
        },
        tooltip: {
          y: {
            formatter: (value) => value + ' steps'
          }
        },
        responsive: [
          {
            breakpoint: 1000,
            options: {
              chart: {
                height: 250
              },
              plotOptions: {
                bar: {
                  columnWidth: '100%'
                }
              }
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.series = [
      {
        name: 'Past month',
        type: 'bar',
        data: this.dataMonth()
      },
      {
        name: 'This month',
        type: 'bar',
        data: this.dataMonth()
      }
    ]
  },
  methods: {
    dataMonth() {
      const data = []
      for (let i = -14; i <= 0; i++) {
        data.push({
          x: this.$moment()
            .add(i, 'days')
            .format('Do MMM'),
          y: Math.floor(Math.random() * 5000)
        })
      }

      return data
    }
  }
}
</script>
