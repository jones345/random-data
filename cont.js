// import faker
var faker = require('@faker-js/faker');
const fs = require('fs');


var subscriber = []
//1000000
const million = '1000000'
const start = ()=>{

        
  for(var i = 0; i < 10; i++){

    var nationalityData= null
    var documentNumberData = null;
  
   const  firstNameData = faker.name.firstName()
   const lastNameData = faker.name.lastName()
   const genderData =faker.random.arrayElement(["FEMALE", "MALE"])
   
   const msisdnData =`${faker.datatype.number({ min: 71000000, max: 71099999 })}`
   const  numberStatusData =faker.random.arrayElement(["INACTIVE", "ACTIVE","TEMPORARILY_BARRED","SUSPENDED"])
    const cityTownData = faker.address.city()
    const dateOfbirthdata = faker.date.between('2009-01-01', '2020-01-01')
    const plotNumberData = faker.address.secondaryAddress()
    const wardDataData = faker.address.streetName()
    const boxNumberData = faker.address.secondaryAddress()
    const documentTypeData = faker.random.arrayElement(["PASSPORT", "NATIONAL_ID"])
    const dateOfIssueData = faker.date.between('2009-01-01', '2020-01-01')
    const expiryDateData = faker.date.between('2021-01-01', '2030-01-01')
    //check value of  documentTypeData
    if(documentTypeData === "PASSPORT"){
        nationalityData = faker.address.country()
        documentNumberData = `${faker.datatype.number({ min: 10000000000, max: 900000000000 })}`
    }
    else{
        nationalityData = "Botswana"
        documentNumberData = `${faker.datatype.number({ min: 100000000, max: 900000000 })}`
    }

    subscriber.push({
        firstName: firstNameData,
        lastName:lastNameData,
        nationality:nationalityData,
        dateOfBirth:dateOfbirthdata,
        sex:genderData,
        msisdn:msisdnData,
        mnoReference:"MNOref",
        
        documents: [{
            documentNumber: documentNumberData,
            documentType: documentTypeData,
            dateOfIssue: dateOfIssueData,
            expiryDate: expiryDateData
        }],
    
        addresses:[{
            plotWardBox:plotNumberData,
            cityTown:cityTownData,
            addressType:"PHYSICAL",
        }]
    })

  }


        setTimeout(() => {
             console.log(subscriber.length)
            fs.writeFileSync(`subscriber_data10.json`, JSON.stringify(subscriber), 'utf8');
        }, 5000);
    }


start()
