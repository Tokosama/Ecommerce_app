import mongoose from "mongoose";
import { Product } from "../models/product.model.js";
import { ENV } from "../config/env.js";

// const products = [
//   {
//     name: "Wireless Bluetooth Headphones",
//     description:
//       "Premium over-ear headphones with active noise cancellation, 30-hour battery life, and premium sound quality. Perfect for music lovers and travelers.",
//     price: 149.99,
//     stock: 50,
//     category: "Electronics",
//     images: [
//       "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
//       "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500",
//     ],
//     averageRating: 4.5,
//     totalReviews: 128,
//   },
//   {
//     name: "Smart Watch Series 5",
//     description:
//       "Advanced fitness tracking, heart rate monitor, GPS, and water-resistant design. Stay connected with notifications and apps on your wrist.",
//     price: 299.99,
//     stock: 35,
//     category: "Electronics",
//     images: [
//       "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
//       "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
//     ],
//     averageRating: 4.7,
//     totalReviews: 256,
//   },
//   {
//     name: "Leather Crossbody Bag",
//     description:
//       "Handcrafted genuine leather bag with adjustable strap. Features multiple compartments and elegant design perfect for daily use.",
//     price: 89.99,
//     stock: 25,
//     category: "Fashion",
//     images: [
//       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500",
//       "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500",
//     ],
//     averageRating: 4.3,
//     totalReviews: 89,
//   },
//   {
//     name: "Running Shoes - Pro Edition",
//     description:
//       "Lightweight running shoes with responsive cushioning and breathable mesh upper. Designed for performance and comfort during long runs.",
//     price: 129.99,
//     stock: 60,
//     category: "Sports",
//     images: [
//       "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
//       "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500",
//     ],
//     averageRating: 4.6,
//     totalReviews: 342,
//   },
//   {
//     name: "Bestselling Mystery Novel",
//     description:
//       "A gripping psychological thriller that will keep you on the edge of your seat. New York Times bestseller with over 1 million copies sold.",
//     price: 24.99,
//     stock: 100,
//     category: "Books",
//     images: [
//       "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500",
//       "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500",
//     ],
//     averageRating: 4.8,
//     totalReviews: 1243,
//   },
//   {
//     name: "Portable Bluetooth Speaker",
//     description:
//       "Waterproof wireless speaker with 360-degree sound, 12-hour battery life, and durable design. Perfect for outdoor adventures.",
//     price: 79.99,
//     stock: 45,
//     category: "Electronics",
//     images: [
//       "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
//       "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500",
//     ],
//     averageRating: 4.4,
//     totalReviews: 167,
//   },
//   {
//     name: "Classic Denim Jacket",
//     description:
//       "Timeless denim jacket with vintage wash and comfortable fit. A wardrobe essential that pairs perfectly with any outfit.",
//     price: 69.99,
//     stock: 40,
//     category: "Fashion",
//     images: [
//       "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
//       "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=500",
//     ],
//     averageRating: 4.2,
//     totalReviews: 95,
//   },
//   {
//     name: "Yoga Mat Pro",
//     description:
//       "Extra-thick non-slip yoga mat with carrying strap. Eco-friendly material provides excellent cushioning and grip for all yoga styles.",
//     price: 49.99,
//     stock: 75,
//     category: "Sports",
//     images: [
//       "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500",
//       "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=500",
//     ],
//     averageRating: 4.5,
//     totalReviews: 203,
//   },
//   {
//     name: "Mechanical Keyboard RGB",
//     description:
//       "Gaming keyboard with customizable RGB lighting, mechanical switches, and programmable keys. Built for gamers and typing enthusiasts.",
//     price: 119.99,
//     stock: 30,
//     category: "Electronics",
//     images: [
//       "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500",
//       "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
//     ],
//     averageRating: 4.7,
//     totalReviews: 421,
//   },
//   {
//     name: "Coffee Table Book Collection",
//     description:
//       "Stunning photography book featuring architecture and design from around the world. Hardcover edition with 300+ pages of inspiration.",
//     price: 39.99,
//     stock: 55,
//     category: "Books",
//     images: [
//       "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500",
//       "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500",
//     ],
//     averageRating: 4.6,
//     totalReviews: 134,
//   },
// ];
const products = [
  // BOOKS
  {
    name: "Atomic Habits",
    description: "Practical strategies to build good habits and break bad ones.",
    price: 18.99,
    stock: 40,
    category: "Books",
    images: [
      "https://images.unsplash.com/photo-1614813231574-843cb1fb940b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1718882703829-2abcf6fd4e03?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    averageRating: 4.6,
    totalReview: 312
  },
  {
    name: "Deep Work",
    description: "Rules for focused success in a distracted world.",
    price: 16.99,
    stock: 35,
    category: "Books",
    images: [
      "https://images.unsplash.com/photo-1621948415096-db7be1f040bd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1711185895262-f14ad4d4eeac?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    averageRating: 4.4,
    totalReview: 221
  },
  {
    name: "Clean Code",
    description: "A handbook of agile software craftsmanship.",
    price: 28.99,
    stock: 30,
    category: "Books",
    images: [
      "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353"
    ],
    averageRating: 4.7,
    totalReview: 405
  },
  {
    name: "Psychology of Money",
    description: "Timeless lessons on wealth and happiness.",
    price: 20.99,
    stock: 50,
    category: "Books",
    images: [
      "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?q=80&w=912&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613870221528-f7a918522a4b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    averageRating: 4.8,
    totalReview: 511
  },
  {
    name: "Start With Why",
    description: "How great leaders inspire action.",
    price: 19.99,
    stock: 25,
    category: "Books",
    images: [
      "https://images.squarespace-cdn.com/content/v1/59c82ac46f4ca30b86d179bf/1718578174886-HGNXPWDKSSNEQK9NA6AJ/124.bookreview.StartWithWhy.jpg",
      "https://i0.wp.com/www.charellegriffith.com/wp-content/uploads/2017/05/Start_With_Why_Charelle_Griffith_Book_Blog.jpg?fit=3024%2C3024&ssl=1"
    ],
    averageRating: 4.3,
    totalReview: 184
  },

  // SPORTS
  {
    name: "Football Ball",
    description: "High quality football for professional matches.",
    price: 25.99,
    stock: 60,
    category: "Sports",
    images: [
      "https://plus.unsplash.com/premium_photo-1663133632945-4a9e77571659?q=80&w=378&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1634114441919-7636abb21cae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vdGJhbGwlMjBiYWxsfGVufDB8fDB8fHww"
    ],
    averageRating: 4.5,
    totalReview: 276
  },
  {
    name: "Basketball",
    description: "Durable basketball for indoor and outdoor play.",
    price: 30.99,
    stock: 50,
    category: "Sports",
    images: [
      "https://images.unsplash.com/photo-1519861531473-9200262188bf",
      "https://images.unsplash.com/photo-1653191584476-9b7b47f9a8c2?q=80&w=801&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    averageRating: 4.4,
    totalReview: 198
  },
  {
    name: "Tennis Racket",
    description: "Lightweight tennis racket for beginners and pros.",
    price: 70.99,
    stock: 20,
    category: "Sports",
    images: [
      "https://images.unsplash.com/photo-1759819598850-8783b8aaf7a8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1599236760739-9d3b26be520b?q=80&w=812&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    averageRating: 4.6,
    totalReview: 144
  },
  {
    name: "Yoga Mat",
    description: "Comfortable non-slip yoga mat.",
    price: 22.99,
    stock: 80,
    category: "Sports",
    images: [
      "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1718862403436-616232ec6005?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    averageRating: 4.2,
    totalReview: 132
  },
  {
    name: "Running Shoes",
    description: "Breathable running shoes designed for performance.",
    price: 95.99,
    stock: 40,
    category: "Sports",
    images: [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    averageRating: 4.7,
    totalReview: 344
  },

  // ELECTRONICS
  {
    name: "Wireless Headphones",
    description: "Noise cancelling bluetooth headphones.",
    price: 120.99,
    stock: 25,
    category: "Electronics",
    images: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1165&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    averageRating: 4.6,
    totalReview: 410
  },
  {
    name: "IPhone",
    description: "Latest generation smartphone with powerful camera.",
    price: 699.99,
    stock: 15,
    category: "Electronics",
    images: [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1603145733146-ae562a55031e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    averageRating: 4.8,
    totalReview: 622
  },
  {
    name: "Laptop Hp",
    description: "High performance laptop for work and gaming.",
    price: 1100.99,
    stock: 10,
    category: "Electronics",
    images: [
      "https://images.unsplash.com/photo-1663354027456-ce6a7e07d212?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    averageRating: 4.7,
    totalReview: 305
  },
  {
    name: "Apple Watch",
    description: "Smartwatch with fitness and health tracking.",
    price: 199.99,
    stock: 35,
    category: "Electronics",
    images: [
      "https://images.unsplash.com/photo-1624096104992-9b4fa3a279dd?q=80&w=402&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    averageRating: 4.5,
    totalReview: 256
  },
  {
    name: "Edifier Speaker",
    description: "Portable waterproof bluetooth speaker.",
    price: 85.99,
    stock: 45,
    category: "Electronics",
    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1632603954190-eb8f4e393eeb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    averageRating: 4.4,
    totalReview: 198
  },

  // FASHION
  {
    name: "Classic T-Shirt",
    description: "Comfortable cotton t-shirt for everyday wear.",
    price: 15.99,
    stock: 100,
    category: "Fashion",
    images: [
      "https://images.unsplash.com/photo-1759572095329-1dcf9522762b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1759572095384-1a7e646d0d4f?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    averageRating: 4.3,
    totalReview: 140
  },
  {
    name: "Denim Jacket",
    description: "Classic blue denim jacket.",
    price: 65.99,
    stock: 30,
    category: "Fashion",
    images: [
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RGVuaW0lMjBKYWNrZXR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1615943168243-5b2503679e47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fERlbmltJTIwSmFja2V0fGVufDB8fDB8fHww"
    ],
    averageRating: 4.6,
    totalReview: 222
  },
  {
    name: "Air Sneakers",
    description: "Stylish everyday sneakers.",
    price: 75.99,
    stock: 40,
    category: "Fashion",
    images: [
      "https://images.unsplash.com/photo-1571601035754-5c927f2d7edc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U25lYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1603787081207-362bcef7c144?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U25lYWtlcnxlbnwwfHwwfHx8MA%3D%3D"
    ],
    averageRating: 4.5,
    totalReview: 265
  },
  {
    name: "Leather Bag",
    description: "Premium leather handbag.",
    price: 120.99,
    stock: 20,
    category: "Fashion",
    images: [
      "https://images.unsplash.com/photo-1657603719375-8ffdacaac790?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1657603738389-951c374b740c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    averageRating: 4.7,
    totalReview: 190
  },
  {
    name: "Sunglasses",
    description: "Stylish UV protection sunglasses.",
    price: 40.99,
    stock: 60,
    category: "Fashion",
    images: [
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1bmdsYXNzZXN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1610136649349-0f646f318053?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D"
    ],
    averageRating: 4.4,
    totalReview: 208
  }
];


const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(ENV.DB_URL);
    console.log("✅ Connected to MongoDB");

    // Clear existing products
    await Product.deleteMany({});
    console.log("🗑️  Cleared existing products");

    // Insert seed products
    await Product.insertMany(products);
    console.log(`✅ Successfully seeded ${products.length} products`);

    // Display summary
    const categories = [...new Set(products.map((p) => p.category))];
    console.log("\n📊 Seeded Products Summary:");
    console.log(`Total Products: ${products.length}`);
    console.log(`Categories: ${categories.join(", ")}`);

    // Close connection
    await mongoose.connection.close();
    console.log("\n✅ Database seeding completed and connection closed");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

// Run the seed function
seedDatabase();
