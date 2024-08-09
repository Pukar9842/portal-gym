
<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";

export default defineComponent({
  name: "default-dashboard-widget-8",
  components: {},
  props: {
    className: { type: String, required: false },
    image: { type: String, required: true },
  },
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>
