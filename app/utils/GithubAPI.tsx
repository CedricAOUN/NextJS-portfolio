let axios = require('axios');
// let puppet = require('puppeteer');
let fs = require('fs');
let path = require('path');

export async function getGithubProjects() {
  return await axios.get('https://api.github.com/users/CedricAOUN/repos', {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
    },
  });
}

// export function generateImage(url: string, name: string) {
//   const cacheURL = 'puppet-cache';
//   if (!fs.existsSync(`public/Projects/${name}.png`)) {
//     puppet
//       .launch({
//         userDataDir: cacheURL,
//         defaultViewport: {
//           width: 1920,
//           height: 1080,
//         },
//         headless: 'new',
//         args: [
//           '--aggressive-cache-discard',
//           '--disable-cache',
//           '--disable-application-cache',
//           '--disable-offline-load-stale-cache',
//           '--disable-gpu-shader-disk-cache',
//           '--media-cache-size=0',
//           '--disk-cache-size=0',
//           '--no-sandbox',
//         ],
//       })
//       .then(async (browser: any) => {
//         if (url != null && url != '') {
//           const context = await browser.createIncognitoBrowserContext();
//           const page = await context.newPage();
//           await page.setCacheEnabled(false);
//           await page.goto(url);
//           if (name == 'f1-weather-forecast') {
//             await page.waitForSelector('#titles', { timeout: 10_000 });
//           }
//           await page.screenshot({ path: `public/Projects/${name}.png` });
//           await browser.close();
//         }
//       });
//   }
// }

export async function generateImage(url: string, name: string) {
  if (!fs.existsSync(`public/Projects/${name}.png`)) {
    let response = await axios.get(`https://api.screenshotone.com/take?access_key=${process.env.URL_TO_IMAGE_API_KEY}&url=${encodeURIComponent(url)}%2F&device_scale_factor=1&viewport_width=1920&viewport_height=1080&format=png&block_ads=true&block_cookie_banners=true&block_trackers=true&cache=false`, {
      responseType: 'arraybuffer',
    })
    try {
      await fs.writeFileSync(`public/Projects/${name}.png`, response.data);
    } catch (e) {
      console.log('error with file write:', e)
    }
  } else {
    console.log('image already exists')
  }
}