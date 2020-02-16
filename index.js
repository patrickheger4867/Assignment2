const Item = {
  ItemId: 'owh12845-1kk2-9384-ckd0-akeiwh4968we',
  name: 'Griff's leash',
  description: 'The leash of the greatest pup in the world!',
  price: 100000.99,
  size: 'Griff sized'
  };
  
const FirstName = 'Griffingford';
const LastName = 'Qwerty';
  
const Customer = {
  FirstName,
  LastName,
  email: '${FirstName.toLowerCase()}.${LastName.toLowerCase()}@drake.edu',
  PhoneNumber: '+16439651289'
};

const Cart = {
  Customer: FirstName LastName,
  CreatedDate: 'March 14th 2019',
  PuchasedDate: 'January 20th 2020'
};

const CartItem = {
  itemName: 'Tie of President Marty Martin',
  ItemAmount: 999
};

console.log('Item', Item);
console.log('Customer', Customer);
console.log('Cart', Cart);
console.log('CartItem', CartItem);