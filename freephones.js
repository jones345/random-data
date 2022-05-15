const data = require ('./freephone.json')
const fs = require('fs');
var faker = require('@faker-js/faker');

const count = data.length;

const free_phones = [];

const location_id ="2e450ce7-190a-4816-9f2c-a2734b070246";
const btc = "3bf0a4a6-06c4-4290-915d-0aa57b22bd93678";
const orange = "3bf0a4a6-06c4-4290-915d-0aa57b22-674bd9377";
const mascom = "3bf0a4a6-06c4-4290-915d-0aa57b22bd9377"
console.log(count);


for (let i of data) {

    let orignation_id

    // remove array with  element less than 10
    if (i.length < 4) {
        continue;
    }
    


    if(i.Applicant){

   

    if(i.Applicant === "BTC"){
        orignation_id = btc
    }

    if(i.Applicant === "BTCL"){
        orignation_id = btc
    }

    if(i.Applicant === "Orange"){
        orignation_id = orange
    }
    if(i.Applicant === "Mascom"){
        orignation_id = mascom
    }

}
    else{
        orignation_id = btc
    }
    // check if Start is present in json
    if(i.Start){
        var dateSr = i.Start ; // uncommon US short date
        //convert to date 
        var date = new Date(dateStr);
        var dateStr =date.toISOString();
    }
    else{
        var dateStr = faker.date.between('1970-01-01', '1982-01-01')
    }

    // check if End is present in json
    if(i.End){
        var dateS = i.End ; // uncommon US short date
        //convert to date 
        var date = new Date(dateS);
        var dateStr2 = date.toISOString();
    }
    else{
        var dateStr2 = faker.date.between('1970-01-01', '1982-01-01')
    }
    
    
    free_phones.push({
        "locationId": location_id,
        "operatorId": orignation_id,
        "blockStatus":"ACTIVE",
        "rangeStatus":"ALLOCATED",
        "customerApplicantName": i.Customer_Applicant,
        "number": i.Tollphone,
        "serviceStartDate": dateStr,
        "serviceEndDate": dateStr2,
        "customerApplicantUsage": "Not Provided",
        "remarks": "Not Provided",
        "type":"FREEPHONE",
    });


}

setTimeout(() => {
    console.log(free_phones.length)
   fs.writeFileSync(`longRangeFreephone.json`, JSON.stringify(free_phones), 'utf8');
}, 10000);