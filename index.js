const faker = require('@faker-js/faker');
const fs = require('fs');

const subscribers = [];

for (let i = 0; i < 10; i++) {
  const country = faker.address.country();

  const documentType = country === 'Botswana' ? 'NATIONAL_ID' : faker.random.arrayElement(['PASSPORT', 'NATIONAL_ID']);

  const subscriber = {
    msisdn: `${faker.datatype.number({ min: 73900000, max: 73999999 })}`,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    country,
    dateOfBirth: faker.date.between('2009-01-01', '2020-01-01'),
    sex: faker.random.arrayElement(['FEMALE', 'MALE']),
    documents: [
      {
        documentNumber: `${faker.datatype.number({ min: 10000000, max: 90000000 })}`,
        documentType,
        dateOfIssue: '2022-08-01T12:30:10.734Z',
        expiryDate: '2024-08-01T12:30:10.734Z',
      },
    ],
    addresses: [
      {
        plotWardBox: faker.address.streetAddress(),
        cityTown: faker.address.secondaryAddress(),
        addressType: 'PHYSICAL',
      },
    ],
  };

  subscribers.push(subscriber);
}

(async () => {
  try {
    await fs.promises.writeFile('natural_subscriber_btcl.json', JSON.stringify(subscribers), 'utf8');
    console.log('File written successfully!');
  } catch (error) {
    console.error('Error writing file:', error);
  }
})();
