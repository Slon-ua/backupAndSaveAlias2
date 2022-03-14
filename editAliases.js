const fetch = require('cross-fetch');

console.log(process.argv);
console.log(require('optimist').argv);

var opts = require('optimist').argv;
let idAlias = opts.idAlias;
console.log(opts.idAlias);

const fs = require('fs')
let file = fs.readFileSync('./NewURLencode.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
})

//// GET request - resive Alias info

// let text = fetch("https://wiser.driveroo.com/admin/aliases/"+idAlias+"", {
//   "headers": {
//     "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
//     "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
//     "cache-control": "max-age=0",
//     "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"99\", \"Google Chrome\";v=\"99\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"macOS\"",
//     "sec-fetch-dest": "document",
//     "sec-fetch-mode": "navigate",
//     "sec-fetch-site": "same-origin",
//     "sec-fetch-user": "?1",
//     "upgrade-insecure-requests": "1",
//     "cookie": "ajs_group_id=null; ajs_anonymous_id=%223c17c2bc-b673-4c47-8487-5e11409b1473%22; _lfa=LF1.1.c9742e8bf067579e.1643966608865; __awc_tld_test__=tld_test; _uetvid=1d2c2020859c11ecbd4cc1fdf786eac4; _clck=1h6wvp5|1|eze|0; _ga=GA1.2.1306053452.1644588409; _ga_VLL86CMPFN=GS1.1.1646253807.45.1.1646253812.55; _wise_session=782bccbf4fd4e52723fc9f70a0d8638a",
//     "Referer": "https://wiser.driveroo.com/admin/aliases/249/edit",
//     "Referrer-Policy": "no-referrer-when-downgrade"
//   },
//   "body": null,
//   "method": "GET"
// }).then(function (response) {
//   console.log(response)
// });


// console.log(text);

//// GET request edit - resive Alias info & save in file like HTML 

// fetch("https://wiser.driveroo.com/admin/aliases/"+idAlias+"/edit", {
//   "headers": {
//     "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
//     "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
//     "if-none-match": "W/\"2d8eb454d6e7430ef777c80ce7823ff6\"",
//     "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"99\", \"Google Chrome\";v=\"99\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"macOS\"",
//     "sec-fetch-dest": "document",
//     "sec-fetch-mode": "navigate",
//     "sec-fetch-site": "same-origin",
//     "sec-fetch-user": "?1",
//     "upgrade-insecure-requests": "1",
//     "cookie": "ajs_group_id=null; ajs_anonymous_id=%223c17c2bc-b673-4c47-8487-5e11409b1473%22; _lfa=LF1.1.c9742e8bf067579e.1643966608865; __awc_tld_test__=tld_test; _uetvid=1d2c2020859c11ecbd4cc1fdf786eac4; _clck=1h6wvp5|1|eze|0; _ga=GA1.2.1306053452.1644588409; _ga_VLL86CMPFN=GS1.1.1646253807.45.1.1646253812.55; _wise_session=782bccbf4fd4e52723fc9f70a0d8638a",
//     "Referer": "https://wiser.driveroo.com/admin/aliases/249",
//     "Referrer-Policy": "no-referrer-when-downgrade"
//   },
//   "body": null,
//   "method": "GET"
// }).then(function(response) {
//   response.text().then(function(text) {
//     // console.log(text);
//     // return text;
//     fs.writeFileSync("response2.txt", text);
//   });
// });


//// POST request save - save new Alias

fetch("https://wiser.driveroo.com/admin/aliases/"+idAlias+"", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "max-age=0",
    "content-type": "application/x-www-form-urlencoded",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"99\", \"Google Chrome\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "cookie": "ajs_group_id=null; ajs_anonymous_id=%223c17c2bc-b673-4c47-8487-5e11409b1473%22; _lfa=LF1.1.c9742e8bf067579e.1643966608865; __awc_tld_test__=tld_test; _uetvid=1d2c2020859c11ecbd4cc1fdf786eac4; _clck=1h6wvp5|1|eze|0; _ga=GA1.2.1306053452.1644588409; _ga_VLL86CMPFN=GS1.1.1646253807.45.1.1646253812.55; _wise_session=782bccbf4fd4e52723fc9f70a0d8638a",
    "Referer": "https://wiser.driveroo.com/admin/aliases/249/edit",
    "Referrer-Policy": "no-referrer-when-downgrade"
  },
  "body": file,
  "method": "POST"
}).then(function (response) {
  console.log(response)
});

console.log("Done!");