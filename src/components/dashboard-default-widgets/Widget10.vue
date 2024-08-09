<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";

export default defineComponent({
  name: "default-dashboard-widget-10",
  components: {},
  props: {
    className: { type: String, required: false },
  },
  setup() {
    const table = [
      {
        img: getAssetPath("media/stock/600x600/img-49.jpg"),
        title: "Mivy App",
        name: "Jane Cooper",
        price: "32,400",
        statistics: "9.2",
        icon: true,
        chartColor: "success",
        status: {
          label: "In Process",
          state: "primary",
        },
      },
      {
        img: getAssetPath("media/stock/600x600/img-40.jpg"),
        title: "Avionica",
        name: "Esther Howard",
        price: "256,910",
        statistics: "0.4",
        icon: false,
        chartColor: "danger",
        status: {
          label: "On Hold",
          state: "warning",
        },
      },
      {
        img: getAssetPath("media/stock/600x600/img-39.jpg"),
        title: "Charto CRM",
        name: "Jenny Wilson",
        price: "8,220",
        statistics: "9.2",
        icon: true,
        chartColor: "success",
        status: {
          label: "In Process",
          state: "primary",
        },
      },
      {
        img: getAssetPath("media/stock/600x600/img-47.jpg"),
        title: "Tower Hill",
        name: "Cody Fisher",
        price: "74,000",
        statistics: "9.2",
        icon: true,
        chartColor: "success",
        status: {
          label: "Completed",
          state: "success",
        },
      },
      {
        img: getAssetPath("media/stock/600x600/img-48.jpg"),
        title: "9 Degree",
        name: "Savannah Nguyen",
        price: "183,300",
        statistics: "0.4",
        icon: false,
        chartColor: "danger",
        status: {
          label: "In Process",
          state: "primary",
        },
      },
    ];

    return {
      table,
      getAssetPath,
    };
  },
});
</script>
