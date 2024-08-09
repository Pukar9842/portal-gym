

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import Dropdown2 from "@/components/dropdown/Dropdown2.vue";

export default defineComponent({
  name: "default-dashboard-widget-7",
  components: {
    Dropdown2,
  },
  props: {
    className: { type: String, required: false },
  },
  setup() {
    const items = [
      {
        title: "SaaS",
        icon: "car",
        index: "1",
        table: [
          {
            agent: {
              avatar: getAssetPath("media/avatars/300-3.jpg"),
              name: "Guy Hawkins",
              city: "Haiti",
            },
            price: "78.34",
            icon: true,
            statistics: 5,
            chartCcolor: "success",
          },
          {
            agent: {
              avatar: getAssetPath("media/avatars/300-2.jpg"),
              name: "Jane Cooper",
              city: "Monaco",
            },
            price: "63.83",
            icon: false,
            statistics: 10,
            chartCcolor: "danger",
          },
          {
            agent: {
              avatar: getAssetPath("media/avatars/300-9.jpg"),
              name: "Jacob Jones",
              city: "Poland",
            },
            price: "92.56",
            icon: true,
            statistics: 9,
            chartCcolor: "success",
          },
          {
            agent: {
              avatar: getAssetPath("media/avatars/300-7.jpg"),
              name: "Cody Fishers",
              city: "Mexico",
            },
            price: "63.08",
            icon: false,
            statistics: 9.5,
            chartCcolor: "success",
          },
        ],
      },
      {
        title: "Crypto",
        icon: "bitcoin",
        index: "2",
        table: [
          {
            agent: {
              avatar: getAssetPath("media/avatars/300-25.jpg"),
              name: "Brooklyn Simmons",
              city: "Poland",
            },
            price: "85.23",
            icon: true,
            statistics: 9.5,
            chartCcolor: "success",
          },
          {
            agent: {
              avatar: getAssetPath("media/avatars/300-24.jpg"),
              name: "Esther Howard",
              city: "Mexico",
            },
            price: "74.83",
            icon: false,
            statistics: 10,
            chartCcolor: "danger",
          },
          {
            agent: {
              avatar: getAssetPath("media/avatars/300-20.jpg"),
              name: "Annette Black",
              city: "Haiti",
            },
            price: "90.06",
            icon: true,
            statistics: 3,
            chartCcolor: "success",
          },
          {
            agent: {
              avatar: getAssetPath("media/avatars/300-17.jpg"),
              name: "Marvin McKinney",
              city: "Monaco",
            },
            price: "54.08",
            icon: false,
            statistics: 9.5,
            chartCcolor: "success",
          },
        ],
      },
      {
        title: "Social",
        icon: "like",
        index: "3",
        table: [
          {
            agent: {
              avatar: getAssetPath("media/avatars/300-11.jpg"),
              name: "Jacob Jones",
              city: "New York",
            },
            price: "52.34",
            icon: true,
            statistics: 10.5,
            chartCcolor: "success",
          },
          {
            agent: {
              avatar: getAssetPath("media/avatars/300-23.jpg"),
              name: "Ronald Richards",
              city: "Madrid",
            },
            price: "77.65",
            icon: true,
            statistics: 9.5,
            chartCcolor: "danger",
          },
          {
            agent: {
              avatar: getAssetPath("media/avatars/300-4.jpg"),
              name: "Leslie Alexander",
              city: "Pune",
            },
            price: "82.47",
            icon: false,
            statistics: 10.5,
            chartCcolor: "success",
          },
          {
            agent: {
              avatar: getAssetPath("media/avatars/300-1.jpg"),
              name: "Courtney Henry",
              city: "Mexico",
            },
            price: "67.84",
            icon: true,
            statistics: 11.5,
            chartCcolor: "success",
          },
        ],
      },
      {
        title: "Mobile",
        icon: "tablet",
        index: "4",
        table: [
          {
            agent: {
              avatar: getAssetPath("media/avatars/300-12.jpg"),
              name: "Arlene McCoy",
              city: "London",
            },
            price: "53.44",
            icon: false,
            statistics: 9.5,
            chartCcolor: "success",
          },
          {
            agent: {
              avatar: getAssetPath("media/avatars/300-21.jpg"),
              name: "Marvin McKinneyr",
              city: "Monaco",
            },
            price: "74.64",
            icon: false,
            statistics: 9.5,
            chartCcolor: "danger",
          },
          {
            agent: {
              avatar: getAssetPath("media/avatars/300-30.jpg"),
              name: "Jacob Jones",
              city: "PManila",
            },
            price: "88.56",
            icon: true,
            statistics: 5.5,
            chartCcolor: "success",
          },
          {
            agent: {
              avatar: getAssetPath("media/avatars/300-14.jpg"),
              name: "Esther Howard",
              city: "Iceland",
            },
            price: "63.16",
            icon: false,
            statistics: 1.5,
            chartCcolor: "success",
          },
        ],
      },
      {
        title: "Others",
        icon: "send",
        index: "5",
        table: [
          {
            agent: {
              avatar: getAssetPath("media/avatars/300-6.jpg"),
              name: "Jane Cooper",
              city: "Haiti",
            },
            price: "68.54",
            icon: true,
            statistics: 0.5,
            chartCcolor: "success",
          },
          {
            agent: {
              avatar: getAssetPath("media/avatars/300-10.jpg"),
              name: "Esther Howard",
              city: "Kiribati",
            },
            price: "55.83",
            icon: false,
            statistics: 1.5,
            chartCcolor: "danger",
          },
          {
            agent: {
              avatar: getAssetPath("media/avatars/300-9.jpg"),
              name: "Jacob Jones",
              city: "Poland",
            },
            price: "93.46",
            icon: true,
            statistics: 9.5,
            chartCcolor: "success",
          },
          {
            agent: {
              avatar: getAssetPath("media/avatars/300-3.jpg"),
              name: "Ralph Edwards",
              city: "Mexico",
            },
            price: "64.48",
            icon: false,
            statistics: 9.5,
            chartCcolor: "success",
          },
        ],
      },
    ];

    return {
      items,
      getAssetPath,
    };
  },
});
</script>
