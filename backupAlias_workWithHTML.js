
const fetch = require('cross-fetch');
const fs = require('fs');

console.log(process.argv);
console.log(require('optimist').argv);

var opts = require('optimist').argv;
let idAlias = opts.idAlias;
console.log(opts.idAlias);

let text = fetch("https://wiser.driveroo.com/admin/aliases/"+idAlias+"/edit", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "max-age=0",
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
  "body": null,
  "method": "GET"
}).then(function(response) {
    response.text().then(function(text) {
    // console.log(text);
    console.log(response);
    fs.writeFileSync("BackupHTML.txt", text);
  });
});

let file
setTimeout(() => {  
    file = fs.readFileSync('./BackupHTML.txt', 'utf8' , (err, data) => {
        if (err) {
        console.error(err)
         return
    }
  })


const regex1 = /name=".{2,}?"| value=".*?"| ]">[\s\S]*<\/textarea>/gm; // регулярное выражение
// const regex2 = /value=".*?"/gm; // регулярное выражение
const regex3 = /]">[\s\S]*<\/textarea>/gm; // регулярное выражение

let m1;
let i=0;
let tg1 = [];
let tg3 = [];

// ++++++++++++++ 1

while ((m1 = regex1.exec(file)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m1.index === regex1.lastIndex) {
        regex1.lastIndex++;
    }
    i++;
    // The result can be accessed through the `m`-variable.
    m1.forEach((match, groupIndex) => {
        
        let entities = ['name="','"'];
        let replacements = ["",""];
        
        match=(match.replace('name="',''));
        match=(match.replace('"',''));

        match=(match.replace('value="',''));
        match=(match.replace('value=',''));
        match=(match.replace('"',''));
        match=(match.replace('&#x2713;','✓'));

        tg1.push(match);
        // console.log("tg1["+i+"] = "+match)
    });
}

// ++++++++++++++ 2

// while ((m1 = regex2.exec(file)) !== null) {
//     // This is necessary to avoid infinite loops with zero-width matches
//     if (m1.index === regex2.lastIndex) {
//         regex2.lastIndex++;
//     }
//     i++;
//     // The result can be accessed through the `m`-variable.
//     m1.forEach((match, groupIndex) => {
//         // console.log(`Found match = `+i+` , group ${groupIndex}: ${match}`);
//         let entities = ['value="','"'];
//         let replacements = ["",""];
//         // console.log(match.replace(entities,replacements));
//         // console.log(match.replace('name="',''));
//         match=(match.replace('value="',''));
//         match=(match.replace('"',''));
//         match=(match.replace('&#x2713;','✓'));
//         tg2.push(match);
//         // console.log(match);
//     });
// }
    
// console.log("+++++++++++++++++++++++++ 2\n")
// console.log(tg2.length)
// // console.log(tg2)
// // console.log("tg2[2] = "+tg2[2]+"\n\n")


// // ++++++++++++++ 3
// console.log("+++++++++++++++++++++++++ 3\n")

while ((m1 = regex3.exec(file)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m1.index === regex3.lastIndex) {
        regex3.lastIndex++;
    }
    i++;
    // The result can be accessed through the `m`-variable.
    m1.forEach((match, groupIndex) => {
        let entities = ['value="','"'];
        let replacements = ["",""];
        match=(match.replace(']">\n',''));
        match=(match.replace('</textarea>',''));
        match=(match.replace(/&#39;/g,'\''));
        match=(match.replace(/&amp;&amp;/g,'&&'));
        tg3.push(match);
    });
}
    let sting = tg1[2]+":"+tg1[3]+"\n"+tg1[4]+":"+tg1[5]+"\n"+tg1[6]+":"+tg1[7]+"\n"+tg1[9]+":"+tg1[8]+"\n"+tg1[10]+": "+tg3[0]+"\n"+tg1[11]+":"+tg1[12];
    console.log(sting);

    fs.writeFileSync("BackupAlias.txt", sting)
}, 2000);