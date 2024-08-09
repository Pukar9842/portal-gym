
<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import Dropdown2 from "@/components/dropdown/Dropdown2.vue";

export default defineComponent({
  name: "default-dashboard-widget-4",
  components: {
    Dropdown2,
  },
  props: {
    className: { type: String, required: false },
  },
  setup() {
    const items = [
      {
        description: "Avg. Client Rating",
        statistics: "7.8",
        inc: true,
        number: "true",
      },
      {
        description: "Instagram Followers",
        statistics: "730k",
        inc: false,
        number: "false",
      },
      {
        description: "Google Ads CPC",
        statistics: "$2.09",
        inc: true,
        number: "false",
      },
    ];

    return {
      items,
      getAssetPath,
    };
  },
});
</script>
