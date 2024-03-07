// EXAMPLE 1 - How to convert an Object to FormData in JavaScript

function objectToFormData(obj) {
  const formData = new FormData();

  Object.entries(obj).forEach(([key, value]) => {
    formData.append(key, value);
  });

  return formData;
}

const employee = {
  id: 1,
  first: 'bobby',
  last: 'hadz',
  age: 30,
  tasks: ['develop', 'test', 'ship'],
};

const fData = objectToFormData(employee);
console.log(fData);

console.log(fData.get('first')); // 👉️ bobby
console.log(fData.get('tasks')); // 👉️ develop,test,ship

// ------------------------------------------------------------------

// // EXAMPLE 2 - Making an HTTP request after converting the object to FormData

// function objectToFormData(obj) {
//   const formData = new FormData();

//   Object.entries(obj).forEach(([key, value]) => {
//     formData.append(key, value);
//   });

//   return formData;
// }

// const employee = {
//   id: 1,
//   first: 'bobby',
//   last: 'hadz',
//   age: 30,
//   tasks: ['develop', 'test', 'ship'],
// };

// const response = fetch('https://reqres.in/api/users', {
//   method: 'POST',
//   // 👇️ set body to FormData
//   body: objectToFormData(employee),
//   headers: {
//     Accept: 'application/json',
//   },
// })
//   .then(res => res.json())
//   .then(data => {
//     console.log('data: ', data);
//   })
//   .catch(err => {
//     console.log('error: ', err);
//   });

// ------------------------------------------------------------------

// // EXAMPLE 3 - Converting FormData to a JSON object in JavaScript

// function objectToFormData(obj) {
//   const formData = new FormData();

//   Object.entries(obj).forEach(([key, value]) => {
//     formData.append(key, value);
//   });

//   return formData;
// }

// const employee = {
//   id: 1,
//   first: 'bobby',
//   last: 'hadz',
//   age: 30,
//   tasks: ['develop', 'test', 'ship'],
// };

// const formData = objectToFormData(employee);

// // 1) Declare new empty object
// const object = {};

// formData.forEach((value, key) => {
//   // 2) Assign each key-value pair to the object
//   object[key] = value;
// });

// // {
// //   id: '1',
// //   first: 'bobby',
// //   last: 'hadz',
// //   age: '30',
// //   tasks: 'develop,test,ship'
// // }
// console.log(object);

// // 3) Convert the object to a JSON string
// const jsonString = JSON.stringify(object);

// // {"id":"1","first":"bobby","last":"hadz","age":"30","tasks":"develop,test,ship"}
// console.log(jsonString);

// ------------------------------------------------------------------

// // EXAMPLE 4 - How to convert an Object to FormData using Array.reduce()

// function objectToFormData(obj) {
//   return Object.entries(obj).reduce((formData, [key, value]) => {
//     formData.append(key, value);

//     return formData;
//   }, new FormData());
// }

// const employee = {
//   id: 1,
//   first: 'bobby',
//   last: 'hadz',
//   age: 30,
//   tasks: ['develop', 'test', 'ship'],
// };

// const fData = objectToFormData(employee);
// console.log(fData);

// console.log(fData.get('first')); // 👉️ bobby
// console.log(fData.get('tasks')); // 👉️ develop,test,ship

// ------------------------------------------------------------------

// // EXAMPLE 5 - Handle nested objects and files when converting an object to FormData

// const buildFormData = (formData, obj, parentKey = '') => {
//   if (Array.isArray(obj)) {
//     obj.forEach(element => {
//       buildFormData(formData, element, parentKey);
//     });
//   } else if (typeof obj === 'object' && !(obj instanceof File)) {
//     Object.keys(obj).forEach(key => {
//       buildFormData(
//         formData,
//         obj[key],
//         parentKey ? `${parentKey}.${key}` : key,
//       );
//     });
//   } else {
//     if (obj == null) {
//       return;
//     }

//     const value =
//       typeof obj === 'number' || typeof obj === 'boolean'
//         ? obj.toString()
//         : obj;
//     formData.append(parentKey, value);
//   }
// };

// export const objectToFormData = obj => {
//   const formData = new FormData();

//   buildFormData(formData, obj);

//   return formData;
// };

// const employee = {
//   id: 1,
//   first: 'bobby',
//   last: 'hadz',
//   age: 30,
//   tasks: ['develop', 'test', 'ship'],
//   address: {
//     country: 'Belgium',
//     city: 'Ghent',
//   },
// };

// const fData = objectToFormData(employee);

// // FormData {
// //   [Symbol(state)]: [
// //     { name: 'id', value: '1' },
// //     { name: 'first', value: 'bobby' },
// //     { name: 'last', value: 'hadz' },
// //     { name: 'age', value: '30' },
// //     { name: 'tasks', value: 'develop' },
// //     { name: 'tasks', value: 'test' },
// //     { name: 'tasks', value: 'ship' },
// //     { name: 'address.country', value: 'Belgium' },
// //     { name: 'address.city', value: 'Ghent' }
// //   ]
// // }
// console.log(fData);

// console.log(fData.get('first'));
// console.log(fData.get('tasks'));
