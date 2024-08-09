<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref } from "vue";
import Dropdown3 from "@/components/dropdown/Dropdown3.vue";

export default defineComponent({
  name: "kt-widget-4",
  components: {
    Dropdown3,
  },
  props: {
    widgetClasses: String,
  },
  setup() {
    const list = ref([
      {
        image: getAssetPath("media/svg/brand-logos/plurk.svg"),
        title: "Top Authors",
        text: "Mark, Rowling, Esther",
        badge: "+82$",
      },
      {
        image: getAssetPath("media/svg/brand-logos/telegram.svg"),
        title: "Popular Authors",
        text: "Randy, Steve, Mike",
        badge: "+280$",
      },
      {
        image: getAssetPath("media/svg/brand-logos/vimeo.svg"),
        title: "New Users",
        text: "John, Pat, Jimmy",
        badge: "+4500$",
      },
      {
        image: getAssetPath("media/svg/brand-logos/bebo.svg"),
        title: "Active Customers",
        text: "Mark, Rowling, Esther",
        badge: "+4500$",
      },
      {
        image: getAssetPath("media/svg/brand-logos/kickstarter.svg"),
        title: "Bestseller Theme",
        text: "Disco, Retro, Sports",
        badge: "+4500$",
      },
      {
        image: getAssetPath("media/svg/brand-logos/fox-hub.svg"),
        title: "Fox Broker App",
        text: "Finance, Corporate, Apps",
        badge: "+145$",
        space: "",
      },
    ]);

    return {
      list,
      getAssetPath,
    };
  },
});
</script>
