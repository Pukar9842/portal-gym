 

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";

export default defineComponent({
  name: "default-dashboard-widget-3",
  components: {},
  props: {
    stats: { type: String, required: true },
    description: { type: String, required: true },
    className: { type: String, required: false },
  },
  setup() {
    const profiles = [
      {
        name: "Alan Warden",
        initials: "A",
        state: "warning",
      },
      {
        name: "Michael Eberon",
        src: getAssetPath("media/avatars/300-11.jpg"),
      },
      {
        name: "Susan Redwood",
        initials: "S",
        state: "primary",
      },
      {
        name: "Melody Macy",
        src: getAssetPath("media/avatars/300-2.jpg"),
      },
      {
        name: "Perry Matthew",
        initials: "P",
        state: "danger",
      },
      {
        name: "Barry Walter",
        src: getAssetPath("media/avatars/300-12.jpg"),
      },
    ];

    return {
      profiles,
      getAssetPath,
    };
  },
});
</script>
