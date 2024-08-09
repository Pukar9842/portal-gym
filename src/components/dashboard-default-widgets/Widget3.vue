
<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, onMounted } from "vue";
import { getCSSVariableValue } from "@/assets/ts/_utils";

export default defineComponent({
  name: "default-dashboard-widget-2",
  components: {},
  props: {
    className: { type: String, required: false },
    chartSize: { type: Number, required: true },
  },
  setup(props, { expose }) {
    const initChart = () => {
      expose();
      var el = document.getElementById("kt_card_widget_17_chart");

      if (!el) {
        return;
      }

      var options = {
        size: el.getAttribute("data-kt-size")
          ? parseInt(el.getAttribute("data-kt-size") as string)
          : 70,
        lineWidth: el.getAttribute("data-kt-line")
          ? parseInt(el.getAttribute("data-kt-line") as string)
          : 11,
        rotate: el.getAttribute("data-kt-rotate")
          ? parseInt(el.getAttribute("data-kt-rotate") as string)
          : 145,
        //percent:  el.getAttribute('data-kt-percent') ,
      };

      var canvas = document.createElement("canvas");
      var span = document.createElement("span");

      var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
      canvas.width = canvas.height = options.size;

      el.appendChild(span);
      el.appendChild(canvas);

      ctx.translate(options.size / 2, options.size / 2); // change center
      ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

      //imd = ctx.getImageData(0, 0, 240, 240);
      var radius = (options.size - options.lineWidth) / 2;

      var drawCircle = function (
        color: string,
        lineWidth: number,
        percent: number
      ) {
        percent = Math.min(Math.max(0, percent || 1), 1);
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
        ctx.strokeStyle = color;
        ctx.lineCap = "round"; // butt, round or square
        ctx.lineWidth = lineWidth;
        ctx.stroke();
      };

      // Init
      drawCircle("#E4E6EF", options.lineWidth, 100 / 100);
      drawCircle(
        getCSSVariableValue("--bs-primary"),
        options.lineWidth,
        100 / 150
      );
      drawCircle(
        getCSSVariableValue("--bs-success"),
        options.lineWidth,
        100 / 250
      );
    };

    onMounted(() => {
      initChart();
    });

    return {
      getAssetPath,
    };
  },
});
</script>
