let axios = require("axios");
let fs = require("fs");
let path = require("path");

export async function getGithubProjects() {
  return await axios.get("https://api.github.com/users/CedricAOUN/repos", {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
    },
  });
}

export async function generateImage(url: string, name: string) {
  if (!fs.existsSync(`public/Projects/${name}.jpg`)) {
    let response = await axios.get(
      `https://api.screenshotone.com/take?access_key=${
        process.env.URL_TO_IMAGE_API_KEY
      }&url=${encodeURIComponent(
        url,
      )}%2F&device_scale_factor=1&viewport_width=1280&viewport_height=720&format=jpg&block_ads=true&block_cookie_banners=true&block_trackers=true&cache=false`,
      {
        responseType: "arraybuffer",
      },
    );
    try {
      await fs.writeFileSync(`public/Projects/${name}.jpg`, response.data);
      console.log("Generating Image...");
    } catch (e) {
      console.log("error with file write:", e);
    }
  }
}
