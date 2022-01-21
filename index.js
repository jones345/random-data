 var mocker = require('mocker-data-generator').default 




var mobileNumbers = 
    {


    msisdn: {
        faker: 'datatype.number({"min": 71000000, "max": 71099999})'
    }
    ,
    numberStatus: {
        values: ['ACTIVE', 'INACTIVE','TEMPORARILY_BARRED',' SUSPENDED']  
    }
    
 }

 // create a array of objects



var Natural_Subscriber = {
    dateOfBirth: {
        chance: 'birthday({ "string": true })'
    },
    gender:{
        values: ['MALE', 'FEMALE']   
    },
    firstName:{
        faker: 'name.firstName'
    },
    lastName:{
        faker: 'name.lastName'
    },
    document:{

        dateOfIssue: {
            faker: 'date.past'
        },
        dateOfExpiry: {
            faker: 'date.future'
        },
        documentType: {
            values: ['PASSPORT', 'NATIONAL_ID']
        },
        'object.documentType=="PASSPORT",documentNumber': { 
            faker: 'random.number({"min": 10000000000, "max": 900000000000})'
        },
        'object.documentType=="NATIONAL_ID",documentNumber': {
            faker: 'random.number({"min": 100000000, "max": 900000000})'
        }
    },
    mobileNumbers:mobileNumbers

}



mocker()
.schema('Natural_Subscriber', Natural_Subscriber,1)
.build()
.then(function(data) {
    // json and excel files are generated in the same folder
    console.log(JSON.stringify(data.Natural_Subscriber, null, 2));

    // combine both arrays
   
})