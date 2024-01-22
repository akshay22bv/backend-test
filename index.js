const express = require("express");
const app = express();

async function fetchPosts(id) {
  try {
    if (typeof id === "undefined") {
      throw new Error("ID is required");
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await response.json();

    // Return an object with both data and status code
    return {
      data: data,
      status: response.status,
    };
  } catch (error) {
    // console.log("errrrr", error.message);
  }
}

async function displayPosts() {
  try {
    const posts1 = await fetchPosts(1);
    console.log("posts1: ", posts1);
    const posts2 = await fetchPosts();

    if (!posts2) {
      throw new Error("Id resquired");
    }
  } catch (error) {
    console.log("errrrr", error.message);
  }
}

// displayPosts();

const countryFlags = [
  {
    countryCode: 355,
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f1.svg",
    name: "Albania",
  },
  {
    countryCode: 376,
    name: "Andorra",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1e9.svg",
  },
  {
    countryCode: 672,
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f6.svg",
    name: "Antarctica",
  },
  {
    countryCode: 1268,
    flag: undefined,
    name: "Antigua and Barbuda",
  },
  {
    countryCode: 54,
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f7.svg",
    name: "Argentina",
  },
  {
    countryCode: 297,
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1fc.svg",
    name: "Aruba",
  },
  {
    countryCode: 61,
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1fa.svg",
    name: "Australia",
  },
  {
    countryCode: 43,
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f9.svg",
    name: "Austria",
  },
  {
    countryCode: 32,
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1ea.svg",
    name: "Belgium",
  },
  {
    countryCode: 1441,
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f2.svg",
    name: "Bermuda",
  },
  {
    countryCode: 975,
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f9.svg",
    name: "Bhutan",
  },
  {
    countryCode: 387,
    flag: undefined,
    name: "Bosnia and Herzegovina",
  },
  {
    countryCode: 55,
    name: "Brazil",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f7.svg",
  },
  {
    countryCode: 673,
    name: "Brunei",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f3.svg",
  },
  {
    countryCode: 359,
    name: "Bulgaria",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1ec.svg",
  },
  {
    countryCode: 1,
    name: "Canada",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1e6.svg",
  },
  {
    countryCode: 238,
    name: "Cape Verde",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1fb.svg",
  },
  {
    countryCode: 1345,
    name: "Cayman Islands",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f0-1f1fe.svg",
  },
  {
    countryCode: 56,
    name: "Chile",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1f1.svg",
  },
  {
    countryCode: 506,
    name: "Costa Rica",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1f7.svg",
  },
  {
    countryCode: 385,
    name: "Croatia",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ed-1f1f7.svg",
  },
  {
    countryCode: 357,
    name: "Cyprus",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1fe.svg",
  },
  {
    countryCode: 420,
    name: "Czech Republic",
    flag: undefined,
  },
  {
    countryCode: 45,
    name: "Denmark",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e9-1f1f0.svg",
  },
  {
    countryCode: 372,
    name: "Estonia",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ea-1f1ea.svg",
  },
  {
    countryCode: 500,
    name: "Falkland Islands",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1eb-1f1f0.svg",
  },
  {
    countryCode: 298,
    name: "Faroe Islands",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1eb-1f1f4.svg",
  },
  {
    countryCode: 358,
    name: "Finland",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1eb-1f1ee.svg",
  },
  {
    countryCode: 33,
    name: "France",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1eb-1f1f7.svg",
  },
  {
    countryCode: 594,
    name: "French Guiana",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1eb.svg",
  },
  {
    countryCode: 49,
    name: "Germany",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e9-1f1ea.svg",
  },
  {
    countryCode: 350,
    name: "Gibraltar",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1ee.svg",
  },
  {
    countryCode: 30,
    name: "Greece",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1f7.svg",
  },
  {
    countryCode: 299,
    name: "Greenland",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1f1.svg",
  },
  {
    countryCode: 1473,
    name: "Grenada",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1e9.svg",
  },
  {
    countryCode: 590,
    name: "Guadeloupe",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1f5.svg",
  },
  {
    countryCode: 441481,
    name: "Guernsey",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1ec.svg",
  },
  {
    countryCode: 852,
    name: "Hong Kong",
    flag: undefined,
  },
  {
    countryCode: 36,
    name: "Hungary",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ed-1f1fa.svg",
  },
  {
    countryCode: 354,
    name: "Iceland",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f8.svg",
  },
  {
    countryCode: 91,
    name: "India",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f3.svg",
  },
  {
    countryCode: 353,
    name: "Ireland",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1ea.svg",
  },
  {
    countryCode: 39,
    name: "Italy",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f9.svg",
  },
  {
    countryCode: 81,
    name: "Japan",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ef-1f1f5.svg",
  },
  {
    countryCode: 441534,
    name: "Jersey",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ef-1f1ea.svg",
  },
  {
    countryCode: 962,
    name: "Jordan",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ef-1f1f4.svg",
  },
  {
    countryCode: 254,
    name: "Kenya",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f0-1f1ea.svg",
  },
  {
    countryCode: 383,
    name: "Kosovo",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1fd-1f1f0.svg",
  },
  {
    countryCode: 371,
    name: "Latvia",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1fb.svg",
  },
  {
    countryCode: 423,
    name: "Liechtenstein",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1ee.svg",
  },
  {
    countryCode: 370,
    name: "Lithuania",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1f9.svg",
  },
  {
    countryCode: 352,
    name: "Luxembourg",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1fa.svg",
  },
  {
    countryCode: 261,
    name: "Madagascar",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1ec.svg",
  },
  {
    countryCode: 356,
    name: "Malta",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f9.svg",
  },
  {
    countryCode: 441624,
    name: "Montserrat",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f2.svg",
  },
  {
    countryCode: 596,
    name: "Martinique",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f6.svg",
  },
  {
    countryCode: 262,
    name: "Mayotte",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1fe-1f1f9.svg",
  },
  {
    countryCode: 373,
    name: "Moldova",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1e9.svg",
  },
  {
    countryCode: 382,
    name: "Montenegro",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1ea.svg",
  },
  {
    countryCode: 1664,
    name: "Montserrat",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f8.svg",
  },
  {
    countryCode: 212,
    name: "Morocco",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1e6.svg",
  },
  {
    countryCode: 258,
    name: "Mozambique",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1ff.svg",
  },
  {
    countryCode: 264,
    name: "Namibia",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1e6.svg",
  },
  {
    countryCode: 31,
    name: "Netherlands",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1f1.svg",
  },
  {
    countryCode: 64,
    name: "New Zealand",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1ff.svg",
  },
  {
    countryCode: 389,
    name: "North Macedonia",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f0.svg",
  },
  {
    countryCode: 47,
    name: "Norway",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1f4.svg",
  },
  {
    countryCode: 968,
    name: "Oman",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f4-1f1f2.svg",
  },
  {
    countryCode: 63,
    name: "Philippines",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1ed.svg",
  },
  {
    countryCode: 870,
    name: "Pitcairn Islands",
    flag: undefined,
  },
  {
    countryCode: 48,
    name: "Poland",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1f1.svg",
  },
  {
    countryCode: 351,
    name: "Portugal",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1f9.svg",
  },
  {
    countryCode: 1787,
    name: "Puerto Rico",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1f7.svg",
  },
  {
    countryCode: 974,
    name: "Qatar",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f6-1f1e6.svg",
  },
  {
    countryCode: 262,
    name: "Réunion",
    flag: undefined,
  },
  {
    countryCode: 40,
    name: "Romania",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f7-1f1f4.svg",
  },
  {
    countryCode: 290,
    name: "Saint Helena",
    flag: undefined,
  },
  {
    countryCode: 1758,
    name: "Saint Lucia",
    flag: undefined,
  },
  {
    countryCode: 1784,
    name: "Saint Vincent and the Grenadines",
    flag: undefined,
  },
  {
    countryCode: 378,
    name: "San Marino",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f2.svg",
  },
  {
    countryCode: 239,
    name: "São Tomé and Príncipe",
    flag: undefined,
  },
  {
    countryCode: 221,
    name: "Senegal",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f3.svg",
  },
  {
    countryCode: 381,
    name: "Serbia",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f7-1f1f8.svg",
  },
  {
    countryCode: 65,
    name: "Singapore",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1ec.svg",
  },
  {
    countryCode: 421,
    name: "Slovakia",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f0.svg",
  },
  {
    countryCode: 386,
    name: "Slovenia",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1ee.svg",
  },
  {
    countryCode: 27,
    name: "South Africa",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ff-1f1e6.svg",
  },
  {
    countryCode: 82,
    name: "South Korea",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f0-1f1f7.svg",
  },
  {
    countryCode: 34,
    name: "Spain",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ea-1f1f8.svg",
  },
  {
    countryCode: 94,
    name: "Sri Lanka",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1f0.svg",
  },
  {
    countryCode: 47,
    name: "Svalbard and Jan Mayen",
    flag: undefined,
  },
  {
    countryCode: 46,
    name: "Sweden",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1ea.svg",
  },
  {
    countryCode: 41,
    name: "Switzerland",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1ed.svg",
  },
  {
    countryCode: 886,
    name: "Taiwan",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1fc.svg",
  },
  {
    countryCode: 255,
    name: "Tanzania",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1ff.svg",
  },
  {
    countryCode: 216,
    name: "Tunisia",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1f3.svg",
  },
  {
    countryCode: 90,
    name: "Turkey",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1f7.svg",
  },
  {
    countryCode: 971,
    name: "United Arab Emirates",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1ea.svg",
  },
  {
    countryCode: 44,
    name: "United Kingdom",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1e7.svg",
  },
  {
    countryCode: 598,
    name: "Uruguay",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1fa-1f1fe.svg",
  },
  {
    countryCode: 84,
    name: "Vietnam",
    flag: "https://twemoji.maxcdn.com/2/svg/1f1fb-1f1f3.svg",
  },
];

const PORT = 3000;

app.get("/", (req, res) => {
  res.send({ countryFlags });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
