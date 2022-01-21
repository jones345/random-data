var faker = require('@faker-js/faker');
var Chance = require('chance');
const fs = require('fs');

var subscriber = []
var subscriber_data = []
// loop 100 times
//optimize for speed

//optimize for speed

for (var i = 0; i < 1; i++) {
    subscriber.push({
        dateOfbirth:faker.date.between('2009-01-01', '2020-01-01'),
        documents: [{
            dateOfIssue: faker.date.between('2009-01-01', '2020-01-01'),
            expiryDate: faker.date.between('2021-01-01', '2030-01-01'),
            documentType: faker.random.arrayElement(["PASSPORT", "NATIONAL_ID"]),
            documentNumber: `${faker.datatype.number({ min: 10000000000, max: 900000000000 })}`
        }],
        firstName: faker.name.firstName(),
        gender:faker.random.arrayElement(["FEMALE", "MALE"]),
        lastName:faker.name.lastName(),
        nationality:"Botswana",
        msisdn:`${faker.datatype.number({ min: 71000000, max: 71099999 })}`,
        numberStatus:faker.random.arrayElement(["INACTIVE", "ACTIVE","TEMPORARILY_BARRED","SUSPENDED"]),
        physicalAddress:{
            cityTown:faker.address.city(),
            plotNumber:faker.address.secondaryAddress(),
            ward:faker.address.streetName(),
        },
        postalAddress:{
            boxNumber:faker.address.secondaryAddress(),
            cityTown:faker.address.city()  
        },
    })

    // wait for 1 second
    // await new Promise(r => setTimeout(r, 5000));
    setTimeout(() => {
        // index of array

        console.log(subscriber.length())
        //fs.writeFileSync(`subscriber_data.json`, JSON.stringify(subscriber), 'utf8');
    }, 5000);
    

    // 

    //update the subscriber_data.json file
    
}
// for (let i = 0; i < 1001; i++) {
     
//     // create a object
//     subscriber = {
//         dateOfbirth:faker.date.between('2009-01-01', '2020-01-01'),
//         documents: [{
//             dateOfIssue: faker.date.between('2009-01-01', '2020-01-01'),
//             expiryDate: faker.date.between('2021-01-01', '2030-01-01'),
//             documentType: faker.random.arrayElement(["PASSPORT", "NATIONAL_ID"]),
//             documentNumber: `${faker.datatype.number({ min: 10000000000, max: 900000000000 })}`
//         }],
//         firstName: faker.name.firstName(),
//         gender:faker.random.arrayElement(["FEMALE", "MALE"]),
//         lastName:faker.name.lastName(),
//         nationality:"Botswana",
//         msisdn:`${faker.datatype.number({ min: 71000000, max: 71099999 })}`,
//         numberStatus:faker.random.arrayElement(["INACTIVE", "ACTIVE","TEMPORARILY_BARRED","SUSPENDED"]),
//         physicalAddress:{
//             cityTown:faker.address.city(),
//             plotNumber:faker.address.secondaryAddress(),
//             ward:faker.address.streetName(),
//         },
//         postalAddress:{
//             boxNumber:faker.address.secondaryAddress(),
//             cityTown:faker.address.city()  
//         },
//     }  
//     subscriber_data.push(subscriber)
//     // save to txt file
//     // fs.writeFileSync(`subscriber_data.txt`, JSON.stringify(subscriber_data), 'utf8');
//     // // save to json file
//     fs.writeFileSync(`subscriber_data.json`, JSON.stringify(subscriber_data), 'utf8');
//     // // save to csv file
//     // fs.writeFileSync(`subscriber_data.csv`, JSON.stringify(subscriber_data), 'utf8');
//     // console.log(JSON.stringify(subscriber, null, 2))
    
// }
// var count = 0
// while(count < 10){
//     console.log(count) 
// count ++

// }


// console.log(JSON.stringify(subscriber, null, 2))


