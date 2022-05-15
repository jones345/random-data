var faker = require('@faker-js/faker');
const fs = require('fs');

var total = 20
var subscriber = []

const start = ()=>{
for (var i = 0; i < total; i++) {
    const  firstNameData = faker.name.firstName()
    const lastNameData = faker.name.lastName()
    const genderData =faker.random.arrayElement(["FEMALE", "MALE"])
    const MNOref = faker.random.alphaNumeric(12)
    const msisdnData =`${faker.datatype.number({ min: 75800000, max: 75899999})}`
    const  numberStatusData =faker.random.arrayElement(["INACTIVE", "ACTIVE","TEMPORARILY_BARRED","SUSPENDED"])
     const cityTownData = faker.address.city()
     const dateOfbirthdata = faker.date.between('2009-01-01', '2020-01-01')
     const plotNumberData = faker.address.secondaryAddress()
     const wardDataData = faker.address.streetName()
     const boxNumberData = faker.address.secondaryAddress()
     const documentTypeData = faker.random.arrayElement(["PASSPORT", "NATIONAL_ID"])
     const dateOfIssueData = faker.date.between('2009-01-01', '2020-01-01')
     const expiryDateData = faker.date.between('2021-01-01', '2030-01-01')

     if(documentTypeData === "PASSPORT"){
        nationalityData = faker.address.country()
        documentNumberData = `${faker.datatype.number({ min: 10000000000, max: 900000000000 })}`
    }
    else{
        nationalityData = "Botswana"
        documentNumberData = `${faker.datatype.number({ min: 100000000, max: 900000000 })}`
    }

    subscriber.push({
        tradingName: MNOref,

 registrationNumber:"BW101000",

msisdn:"72830555",

firstName:"Kgosi",

 lastName:"Morapedi",

 nationality:"Motswana",

 dateOfBirth:"1989-09-09",

sex:"MALE"

,

documents: [{

    documentNumber:"090909090",

    documentType:"NATIONAL_ID",

    dateOfIssue:"2009-10-10",

    expiryDate:"2019-10-10"

}],

addresses:[{

    plotWardBox:"7890",

    cityTown:"Gaborone",

    addressType:"PHYSICAL"

}]
    })

  }


        setTimeout(() => {
             console.log(subscriber.length)
            fs.writeFileSync(`subscriber_data_BTC_10K.json`, JSON.stringify(subscriber), 'utf8');
        }, 10000);
}
