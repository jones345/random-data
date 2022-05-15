var faker = require('@faker-js/faker');
var Chance = require('chance');
const fs = require('fs');


var Citizen =[]
var count = 100

for (var i = 0; i < 5; i++){
    var currentStatus
    var SPOUSE_NME;
    var UnknownDate;
    var DEATH_CERT_NO2;
    var dateOfDeath = faker.date.between('1940-01-01', '2000-01-01')
    var PersonStatus = faker.random.arrayElement(['DEAD', 'LIVE'])
    if(PersonStatus == 'LIVE'){
        currentStatus = 'LIVE'
        UnknownDate = "NA"
        SPOUSE_NME = faker.name.firstName()
        DEATH_CERT_NO2 = "NA"
        dateOfDeath = "NA"
    }
    var MARITAL_STATUS = ['Single', 'Married', 'Divorced', 'Widowed']
    if(MARITAL_STATUS=='Single'){
        SPOUSE_NME= "NA"
        DEATH_CERT_NO2 = `${faker.datatype.number({ min: 7100000000, max: 7109999900 })}`
        UnknownDate = faker.date.between('1940-01-01', '2000-01-01')
    }
    else{
        SPOUSE_NME = faker.name.firstName()+" "+faker.name.lastName()
    }
    var status = faker.random.arrayElement(['single', 'married', 'divorced', 'widowed'])
    if (status === 'single'){
        currentStatus = 'single'
    }
    Citizen.push({
        ID_NO:`${faker.datatype.number({ min: 810000009, max: 810934999 })}`,
        SURNME:faker.name.lastName(),
        FIRST_NME:faker.name.firstName(),
        SEX:faker.random.arrayElement(["F", "M"]),
        BIRTH_DTE:faker.date.between('2009-01-01', '2020-01-01'),
        BIRTH_DTE_UNKNOWN:"N",
        BIRTH_PLACE_NME:faker.address.city(),
        OCCUPATION_CDE:faker.random.arrayElement(["D","M","Y","N"]),
        BIRTH_PLACE_NME:faker.address.city(),
        OCCUPATION_CDE:faker.random.arrayElement(["Developer","Accountant","Not Working","Not Specified"]),
        RESIDENTIAL_ADDR:faker.address.streetAddress(),
        POSTAL_ADDR:faker.address.zipCode(),
        MARITAL_STATUS_CDE:faker.random.arrayElement(["SGL", "MAR", "SEP", "DIV", "WDW", "WHD"]),
        SPOUSE_NME:SPOUSE_NME,
        DISTRICT_CDE:faker.random.arrayElement(["Central", "South", " North Eastern", "North", "South Western", "North Western", "Eastern", "Western"]),
        APPLICATION_PLACE_CDE:faker.random.arrayElement(["Gaborone","Palapye","Kanye","Francistown"]),
        APPLICATION_PLACE_NME:faker.address.city(),
        DECEASED_DTE:dateOfDeath,
        PERSON_STATUS:PersonStatus,
        APPLICATION_NO:`${faker.datatype.number({ min: 7100000000, max: 7109999900 })}`,
        DECEASED_DTE_UNKNOWN:UnknownDate,
        CHANGE_DTE:faker.date.between('2019-01-01', '2020-01-01'),
        EXPIRY_DTE:faker.date.between('2019-01-01', '2030-01-01'),
        DEATH_CERT_NO:DEATH_CERT_NO2,
        CITIZEN_STATUS_CDE:faker.random.arrayElement(["CITZ", "NONZ"]),
        CITIZEN_STATUS_DTE:faker.date.between('2000-01-01', '2022-01-01'),

        
    })
    console.log(Citizen[i])
    fs.writeFileSync(`NIS_Mock_Data.json`, JSON.stringify(Citizen), 'utf8');
}