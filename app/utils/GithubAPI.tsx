let axios = require("axios");
let puppet = require("puppeteer");
let fs = require("fs");

export async function getGithubProjects() {
  return await axios.get("https://api.github.com/users/CedricAOUN/repos", {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
    },
  });
}

export function generateImage(url: string, name: string) {
  if (!fs.existsSync(`public/${name}.png`)) {
    puppet
      .launch({
        defaultViewport: {
          width: 1920,
          height: 1080,
        },
        headless: "new",
      })
      .then(async (browser: any) => {
        if (url != null && url != "") {
          const page = await browser.newPage();
          await page.goto(url);
          if (name == "f1-weather-forecast") {
            await page.waitForSelector("#titles", { timeout: 10_000 });
          }
          await page.screenshot({ path: `public/${name}.png` });
          await browser.close();
        }
      });
  }
}
