import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Ryowu',
      email: 'ryowu0329@gmail.com',
      password: bcrypt.hashSync('leo140814'),
      isAdmin: true,
    },
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image:
        'https://res.cloudinary.com/dp53ha8ie/image/upload/v1729957643/vuzdlrtpzjfzzqvrbfx2.jpg', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image:
        'https://res.cloudinary.com/dp53ha8ie/image/upload/v1729957668/oc19ykcpjjqzvblt8mu7.jpg',
      price: 250,
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '3',
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image:
        'https://res.cloudinary.com/dp53ha8ie/image/upload/v1729957678/pme9uk6s2duafkwbrl4c.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      // _id: '4',
      name: 'Adidas Fit Pant',
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image:
        'https://res.cloudinary.com/dp53ha8ie/image/upload/v1729958088/lte06pjsasdfidoshfko.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
};
export default data;
