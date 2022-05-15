let jsonData = require('./data.json');
var faker = require('@faker-js/faker');
const fs = require('fs');

// count the number of subscribers
const count = jsonData.length;
//print the number of subscribers
//console.log(count);


// cut the array into chunks of 100
// const chunkSize = 100;
// const chunks = [];
// for (let i = 10; i < count; i += chunkSize) {
//     chunks.push(jsonData.slice(i, i + chunkSize));
//     // save the chunks to a file
//     fs.writeFileSync(`subscriber_data_BTC_1m_${i}.json`, JSON.stringify(chunks[i]), 'utf8');
// }


// slice the array into chunks of 100
const chunkSize = 100;
const chunks = [];
var subscriber = [];
// get all phone numbers

const phoneNumber = jsonData.map(function(item) {
    // remove the +1 from the phone number
    return item.MSISDN.slice(3);
    //return item.MSISDN;
});


// get all Fist Names
const firstName = jsonData.map(function(item) {
    return item.FORENAMES;
});

// get all Last Names
const lastName = jsonData.map(function(item) {
    return item.LASTNAME;
});

const NATIONALITY = jsonData.map(function(item) {
    return item.NATIONALITY;
});

// push them into array 


// console.log(JSON.stringify(NATIONALITY));

 for(let i of jsonData){
     let Sex
     if(i.GENDER === 'M'){
        Sex = 'MALE'
     }
     if(i.GENDER === 'F'){
        Sex = 'FEMALE'
     }
     var documentType;
     //NATIONAL_ID
     if(i.DOCUMENTTYPE=== 'Omang'){
         documentType = 'NATIONAL_ID'
     }
     if(i.DOCUMENTTYPE=== 'Passport'){
        documentType = 'PASSPORT'
    }
    
     const dateOfIssueData = faker.date.between('2009-01-01', '2020-01-01')
      const expiryDateData = faker.date.between('2021-01-01', '2030-01-01')
     
     var dateStr = i.DATEOFBIRTH ; // uncommon US short date
     var dateArr = dateStr.split('/');
     var dateObj = new Date(dateArr[2], parseInt(dateArr[1]) - 1, dateArr[0]);
     
     let PostAddress;
     let PHYSICALADDRESS;
     function countWords(str) {
        const arr = str.split(' ');
      
        return arr.filter(word => word !== '').length;
      }

      //console.log(countWords(i.PHYSICALADDRESS));
    
        if(countWords(i.POSTALADDRESS) === 1){
            PostAddress = i.POSTALADDRESS;

        }
        if(countWords(i.PHYSICALADDRESS) === 2){
            PostAddress = i.PHYSICALADDRESS;
            PHYSICALADDRESS = i.PHYSICALADDRESS;
        }
    
     subscriber.push({
        firstName:i.FORENAMES,
        lastName: i.LASTNAME,
        nationality:i.NATIONALITY,
        dateOfBirth:dateObj,
        msisdn:i.MSISDN.slice(3),
        sex:Sex,
        documents:[
            {
                documentNumber:i.DOCUMENTNO,
                documentType:documentType,
                dateOfIssue:dateOfIssueData,
                expiryDate:expiryDateData
            }
        ],
        addresses:[{
            plotWardBox:i.POSTALADDRESS,
            cityTown:i.PHYSICALADDRESS,
            addressType:"PHYSICAL"
        }]
     }) 
  
 }
 setTimeout(() => {
    console.log(subscriber.length)
   fs.writeFileSync(`subscriber.json`, JSON.stringify(subscriber), 'utf8');
}, 10000);

// for (let i = 0; i < count;) {
//    // fetch all phone numbers
//     // subscriber.push(jsonData.MSISDN);
//     // console.log(JSON.stringify(subscriber));
    
//     // fetch all phone numbers
//     subscriber.push(jsonData[i].MSISDN);
//      console.log(JSON.stringify(subscriber));
    
// }




// search for a specific subscriber
// const search = jsonData.map(function(subscriber) {
//     return subscriber.msisdn  === "72085538";
// });

// // print the subscriber
// console.log(search);

//change the first name of a subscriber
// const change = jsonData.find(function(subscriber) {
//     if (subscriber.firstName === 'Jon') {
//         subscriber.firstName = 'John';
//         // save the changes
        
//         return subscriber.firstName;
//     }
//     return false;
// }
// );

// // print the subscriber
// console.log(change);

// change all subscriber phone numbers 
// const changeAll = jsonData.map(function(subscriber) {
//     const msisdnData =`${faker.datatype.number({ min: 71000000, max: 71099999 })}`
//     subscriber.msisdn = msisdnData;
//     setTimeout(() => {
//         fs.writeFileSync(`subscriber_data_ORANGE-MASCOM.json`, JSON.stringify(subscriber), 'utf8');
//         return subscriber.length;
//     }, 100000);
   
// } );

// // print the subscriber
// console.log(changeAll);