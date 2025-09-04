const { default: axios } = require("axios");
const fs = require("fs");
require("dotenv").config();
const { loadEnvConfig } = require("@next/env");
const { features } = require("process");
const { Agent } = require("http");

loadEnvConfig(process.cwd());

async function fetchGlobalData() {
  try {
    console.log("fetching global data");
    const [header, footer, sidebar] = await Promise.all([
      axios(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/globals/header`).then(
        (res) => res?.data
      ),
      axios(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/globals/footer`).then(
        (res) => res?.data
      ),
      axios(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/globals/sidebar`).then(
        (res) => res?.data
      ),
      // axios(
      //   `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/listings?limit=12&sort=-exlusive,-price`
      // ).then((res) => {
      //   return res.data.docs.map((listing) => {
      //     return {
      //       ...listing,
      //       features: [],
      //       agent: {},
      //       description: {},
      //       areaDescription: {},
      //       excerpt: {},
      //       images: listing.images.slice(0, 1),
      //     };
      //   });
      // }),
    ]);
    const globalData = {
      header,
      footer,
      sidebar,
    };

    for (const [key, value] of Object.entries(globalData)) {
      if (value) {
        const jsonValue = JSON.stringify(value, null, 2);
        fs.writeFileSync(`src/globalData/${key}.json`, jsonValue);
      }
    }
  } catch (error) {
    console.error("Error fetching global data", error);
    process.exit(1);
  }
}

fetchGlobalData();
