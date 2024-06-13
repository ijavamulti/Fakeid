```

**script.js**
```javascript
// قم بتعديل هذا القسم ليتوافق مع مكتبة Faker.js
const { faker } = window.require("@faker-js/faker");

function generateIdentity() {
    const name = faker.name.fullName();
    const address = faker.address.streetAddress();
    const country = faker.address.country();
    const zipcode = faker.address.zipCode();
    const phone = faker.phone.number();
    const email = faker.internet.email();

    document.getElementById('name').innerText = `الاسم: ${name}`;
    document.getElementById('address').innerText = `العنوان: ${address}`;
    document.getElementById('country').innerText = `الدولة: ${country}`;
    document.getElementById('zipcode').innerText = `الرمز البريدي: ${zipcode}`;
    document.getElementById('phone').innerText = `رقم الهاتف: ${phone}`;
    document.getElementById('email').innerText = `البريد الإلكتروني: ${email}`;
}
```
