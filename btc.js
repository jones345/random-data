
let jsonData = require('./mascom.json');
var faker = require('@faker-js/faker');
const fs = require('fs');

const count = jsonData.length;
var subscriber = [];

for(let i of jsonData){ 

    let Sex
     if(i.SEX === 'M'){
        Sex = 'MALE'
     }
     if(i.SEX === 'F'){
        Sex = 'FEMALE'
     }

     var documentType;
     if(i.NATIONALITY_NAME=== 'Botswana'){
         documentType = 'NATIONAL_ID'
     }
     else{
        documentType = 'PASSPORT'
    }
    var documentnumber

    
    
    // var dateStr = i.BIRTH_DATE ; // uncommon US short date
    // var dateArr = dateStr.split('/');
    // var dateObj = new Date(dateArr[2], parseInt(dateArr[1]) - 1, dateArr[0]);

    const dateOfIssueData = faker.date.between('2009-01-01', '2020-01-01')
    const expiryDateData = faker.date.between('2023-01-01', '2030-01-01')

    subscriber.push({
        firstName:i.NAME,
        lastName: i.LAST_NAME,
        nationality:i.NATIONALITY_NAME,
        dateOfBirth:i.BIRTH_DATE,
        msisdn:i.EXTERNAL_ID,
        sex:Sex,
        documents:[
            {
                documentNumber:i.IDENT_DOCUMENT,
                documentType:documentType,
                dateOfIssue:i.REGISTER_DATE,
                expiryDate:expiryDateData
            }
        ],
        addresses:[
            {
            plotWardBox:i.ADDRESS,
            cityTown:i.CITY,
            addressType:"PHYSICAL"
        },
        {
            plotWardBox:i.POSTAL_ADDRESS,
            cityTown:i.CITY,
            addressType:"POSTAL"   
        }
    ]
     })
}
setTimeout(() => {
    console.log(subscriber.length)
   fs.writeFileSync(`subscriberMascom.json`, JSON.stringify(subscriber), 'utf8');
}, 10000);