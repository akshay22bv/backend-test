const client_id = "3a43e49fd65047128a0e6184a64356e5";
const client_secret = "2cf3f8f94ebf4acfa767c49aa400408f";

async function getToken() {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    body: new URLSearchParams({
      grant_type: "client_credentials",
    }),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(client_id + ":" + client_secret).toString("base64"),
    },
  });

  return await response.json();
}

async function getTrackInfo(access_token) {
  const response = await fetch(
    "https://api.spotify.com/v1/tracks/4cOdK2wGLETKBW3PvgPWqT",
    {
      method: "GET",
      headers: { Authorization: "Bearer " + access_token },
    }
  );

  return await response.json();
}

async function getSearchMusic(access_token, query) {
  console.log("access_token: ", access_token);
  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${query}&type=track&limits=1`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + access_token },
    }
  );

  return await response.json();
}

getToken()
  .then((response) => {
    // Assuming you have a function like getTrackInfo defined
    getTrackInfo(response.access_token).then((profile) => {
      // console.log(profile);
    });

    const searchQuery = "tu hai kaha"; // Replace with your desired song name
    getSearchMusic(response.access_token, searchQuery).then((music) => {
      console.log("music", music?.tracks?.items);
    });
  })
  .catch((error) => {
    console.log({ error });
  });
