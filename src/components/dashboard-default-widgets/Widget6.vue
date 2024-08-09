

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { computed, defineComponent, onMounted, ref, watch } from "vue";
import type VueApexCharts from "vue3-apexcharts";
import type { ApexOptions } from "apexcharts";
import { useThemeStore } from "@/stores/theme";
import { getCSSVariableValue } from "@/assets/ts/_utils";

export default defineComponent({
  name: "default-dashboard-widget-6",
  components: {},
  props: {
    className: { type: String, required: false },
    height: { type: String, required: false, default: "425px" },
  },
  setup(props) {
    const chartRef1 = ref<typeof VueApexCharts | null>(null);
    const chartRef2 = ref<typeof VueApexCharts | null>(null);
    const chart = ref<ApexOptions>({});
    const store = useThemeStore();

    const series1 = [
      {
        name: "Social Campaigns",
        data: [[100, 250, 30]],
      },
      {
        name: "Email Newsletter",
        data: [[225, 300, 35]],
      },
      {
        name: "TV Campaign",
        data: [[300, 350, 25]],
      },
      {
        name: "Google Ads",
        data: [[350, 350, 20]],
      },
      {
        name: "Courses",
        data: [[450, 400, 25]],
      },
      {
        name: "Radio",
        data: [[550, 350, 35]],
      },
    ];

    const series2 = [
      {
        name: "Social Campaigns",
        data: [[125, 300, 40]],
      },
      {
        name: "Email Newsletter",
        data: [[250, 350, 35]],
      },
      {
        name: "TV Campaign",
        data: [[350, 450, 30]],
      },
      {
        name: "Google Ads",
        data: [[450, 250, 25]],
      },
      {
        name: "Courses",
        data: [[500, 500, 30]],
      },
      {
        name: "Radio",
        data: [[600, 250, 28]],
      },
    ];

    const themeMode = computed(() => {
      return store.mode;
    });

    onMounted(() => {
      Object.assign(chart.value, chartOptions(props.height));
    });

    const refreshChart = () => {
      if (!chartRef1.value || !chartRef2.value) {
        return;
      }

      chartRef1.value.updateOptions(chartOptions(props.height));
      chartRef2.value.updateOptions(chartOptions(props.height));
    };

    watch(themeMode, () => {
      refreshChart();
    });

    return {
      chart,
      chartRef1,
      chartRef2,
      series1,
      series2,
      getAssetPath,
    };
  },
});

const chartOptions = (height: string): ApexOptions => {
  const borderColor = getCSSVariableValue("--bs-border-dashed-color");

  return {
    chart: {
      fontFamily: "inherit",
      type: "bubble",
      height: height,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bubble: {},
    },
    stroke: {
      show: false,
      width: 0,
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "numeric",
      tickAmount: 7,
      min: 0,
      max: 700,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: true,
        height: 0,
      },
      labels: {
        show: true,
        trim: true,
        style: {
          colors: getCSSVariableValue("--bs-gray-500"),
          fontSize: "13px",
        },
      },
    },
    yaxis: {
      tickAmount: 7,
      min: 0,
      max: 700,
      labels: {
        style: {
          colors: getCSSVariableValue("--bs-gray-500"),
          fontSize: "13px",
        },
      },
    },
    tooltip: {
      style: {
        fontSize: "12px",
      },
      x: {
        formatter: function (val) {
          return "Clicks: " + val;
        },
      },
      y: {
        formatter: function (val) {
          return "$" + val + "K";
        },
      },
      z: {
        title: "Impression: ",
      },
    },
    colors: [
      getCSSVariableValue("--bs-primary"),
      getCSSVariableValue("--bs-success"),
      getCSSVariableValue("--bs-warning"),
      getCSSVariableValue("--bs-danger"),
      getCSSVariableValue("--bs-info"),
      "#43CED7",
    ],
    fill: {
      opacity: 1,
    },
    markers: {
      strokeWidth: 0,
    },
    grid: {
      borderColor: borderColor,
      strokeDashArray: 4,
      padding: {
        right: 20,
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  };
};
</script>
