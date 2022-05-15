var faker = require('@faker-js/faker');
var Chance = require('chance');
const fs = require('fs');

var subscriber = []
var subscriber_data = []

for (var i = 0; i < 30; i++) {
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
        physicalAddress:{
            cityTown:faker.address.city(),
            plotNumber:faker.address.secondaryAddress(),
            ward:faker.address.streetName(),
        },
        postalAddress:{
            boxNumber:faker.address.secondaryAddress(),
            cityTown:faker.address.city()  
        },
        juristicContacts:[{
            msisdn:`${faker.datatype.number({ min: 71000000, max: 71099999 })}`
        }]
    })

    // wait for 1 second
    // await new Promise(r => setTimeout(r, 5000));
    setTimeout(() => {
        // index of array

       
        fs.writeFileSync(`juristics_subscriber_data.json`, JSON.stringify(subscriber), 'utf8');
    }, 5000);
    

    // 

    //update the subscriber_data.json file
    
}



