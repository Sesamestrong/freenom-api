require("dotenv").config();
const {runEntireScraper}=require("@sesamestrong/json-scraper");
(async ()=>{
  console.log(await runEntireScraper(require("./myDomains.json"),{username:process.env.EMAIL,password:process.env.PASSWORD}));
})();
