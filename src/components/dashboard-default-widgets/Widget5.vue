

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";

export default defineComponent({
  name: "default-dashboard-widget-5",
  components: {},
  props: {
    className: { type: String, required: false },
  },
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>
