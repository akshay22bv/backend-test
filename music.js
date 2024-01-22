import axios from "axios";

const options = {
  method: "GET",
  url: "https://youtube-mp3-converter.p.rapidapi.com/service/run",
  params: {
    lang: "en",
    id: "aJOTlE1K90k",
    action: "button",
    widget: "rapidapi",
    format: "mp3",
  },
  headers: {
    "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
    "X-RapidAPI-Host": "youtube-mp3-converter.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error({ error });
}
