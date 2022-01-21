// import faker
var faker = require('@faker-js/faker');
const fs = require('fs');


var subscriber = []


const start = ()=>{
   

    for(var i = 0; i < 1; i++){

        var nationalityData= null
        const dateOfbirthdata = faker.date.between('2009-01-01', '2020-01-01')
       const  firstNameData = faker.name.firstName()
       const genderData =faker.random.arrayElement(["FEMALE", "MALE"])
        const lastNameData = faker.name.lastName()
       const msisdnData =`${faker.datatype.number({ min: 71000000, max: 71099999 })}`
       const  numberStatusData =faker.random.arrayElement(["INACTIVE", "ACTIVE","TEMPORARILY_BARRED","SUSPENDED"])
        const cityTownData = faker.address.city()
        const plotNumberData = faker.address.secondaryAddress()
        const wardDataData = faker.address.streetName()
        const boxNumberData = faker.address.secondaryAddress()
        const documentTypeData = faker.random.arrayElement(["PASSPORT", "NATIONAL_ID"])
        const documentNumberData = `${faker.datatype.number({ min: 10000000000, max: 900000000000 })}`
        const dateOfIssueData = faker.date.between('2009-01-01', '2020-01-01')
        const expiryDateData = faker.date.between('2021-01-01', '2030-01-01')
        //check value of  documentTypeData
        if(documentTypeData === "PASSPORT"){
            nationalityData = faker.address.country()
        }
        else{
            nationalityData = "Botswana"
        }


        subscriber.push({
            dateOfbirth:dateOfbirthdata,
            documents: [{
                dateOfIssue: dateOfIssueData,
                expiryDate: expiryDateData,
                documentType: documentTypeData,
                documentNumber: documentNumberData
            }],
            firstName: firstNameData,
            gender:genderData,
            lastName:lastNameData,
            nationality:nationalityData,
            msisdn:msisdnData,
            numberStatus:numberStatusData,
            physicalAddress:{
                cityTown:cityTownData,
                plotNumber:plotNumberData,
                ward:wardDataData,
            },
            postalAddress:{
                boxNumber:boxNumberData,
                cityTown:cityTownData  
            },
        })
        // console.log(subscriber)
        console.log(JSON.stringify(subscriber, null, 2))
    }

}

//call start function
start()
