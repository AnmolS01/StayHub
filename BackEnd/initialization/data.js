const sampleListing = [
  {
    title: "Luxury Pool Villa",
    description: "Spectacular contemporary design",
    image:
      "https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150755.jpg",
    price: 7000,
    location: "Bengaluru, Karnataka",
    country: "India",
    __v: 0,
  },
  {
    title: "Modern Villa with Pool",
    description: "Stunning modern villa with a swimming pool",
    image:
      "https://img.freepik.com/free-photo/landscape-sunset-architectural-matrix-stunning-modern-villa-with-swimming-pool_1409-5155.jpg",
    price: 6500,
    location: "Goa",
    country: "India",
    __v: 0,
  },
  {
    title: "3D Model House",
    description: "3D model house with contemporary architecture",
    image:
      "https://img.freepik.com/free-photo/3d-model-house-building_23-2150761004.jpg",
    price: 5800,
    location: "Mumbai, Maharashtra",
    country: "India",
    __v: 0,
  },
  {
    title: "Modern Architecture",
    description: "3D house model with modern architecture",
    image:
      "https://img.freepik.com/free-photo/3d-house-model-with-modern-architecture_23-2151004062.jpg",
    price: 6000,
    location: "Delhi",
    country: "India",
    __v: 0,
  },
  {
    title: "Luxurious Villa",
    description: "Luxurious villa with a modern design",
    image:
      "https://img.freepik.com/free-photo/luxurious-villa-with-modern-architectural-design_23-2151694118.jpg",
    price: 7200,
    location: "Chennai, Tamil Nadu",
    country: "India",
    __v: 0,
  },
  {
    title: "House with Red Car",
    description: "Charming house with a red car in front",
    image:
      "https://img.freepik.com/free-photo/house-with-red-car-front-it_1340-32084.jpg",
    price: 5300,
    location: "Pondicherry",
    country: "India",
    __v: 0,
  },
  {
    title: "Luxury Hotel with Infinity Pool",
    description: "Hotel with an infinity pool and tropical landscape",
    image:
      "https://img.freepik.com/free-photo/luxury-hotel-with-infinity-pool-palm-trees-tropical-landscape-generated-by-artificial-intelligence_188544-150208.jpg",
    price: 7500,
    location: "Alleppey, Kerala",
    country: "India",
    __v: 0,
  },
  {
    title: "House by the Lake",
    description: "Beautiful house with a lake view",
    image:
      "https://img.freepik.com/free-photo/house-with-lake-background_1340-43168.jpg",
    price: 6000,
    location: "Nainital, Uttarakhand",
    country: "India",
    __v: 0,
  },
  {
    title: "Modern Luxury Villa",
    description: "Modern luxury villa with contemporary features",
    image:
      "https://img.freepik.com/free-photo/modern-luxury-villa-background_1409-7368.jpg",
    price: 6800,
    location: "Hyderabad, Telangana",
    country: "India",
    __v: 0,
  },
  {
    title: "Ocean View Villa",
    description: "By the beach",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 5000,
    location: "Mirzapur, Bihar",
    country: "India",
    __v: 0,
  },
  {
    title: "Mountain Retreat",
    description: "Nestled in the hills",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 4500,
    location: "Shimla, Himachal Pradesh",
    country: "India",
    __v: 0,
  },
  {
    title: "City Escape",
    description: "Modern and cozy",
    image:
      "https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 5500,
    location: "Delhi",
    country: "India",
    __v: 0,
  },
  {
    title: "Countryside Cottage",
    description: "Peaceful and serene",
    image:
      "https://images.unsplash.com/photo-1521750465-672a0f580901?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 4000,
    location: "Coorg, Karnataka",
    country: "India",
    __v: 0,
  },
  {
    title: "Desert Oasis",
    description: "Luxurious and unique",
    image:
      "https://images.unsplash.com/photo-1534009502677-4e5080efa8c6?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 6000,
    location: "Jaisalmer, Rajasthan",
    country: "India",
    __v: 0,
  },
  {
    title: "Lakeside Lodge",
    description: "Scenic and relaxing",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 4700,
    location: "Nainital, Uttarakhand",
    country: "India",
    __v: 0,
  },
  {
    title: "Urban Loft",
    description: "Chic and stylish",
    image:
      "https://images.unsplash.com/photo-1586611292717-f828b167408c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 5200,
    location: "Mumbai, Maharashtra",
    country: "India",
    __v: 0,
  },
  {
    title: "Seaside Cottage",
    description: "Charming and quaint",
    image:
      "https://images.unsplash.com/photo-1584084991225-767356289e9c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 4800,
    location: "Goa",
    country: "India",
    __v: 0,
  },
  {
    title: "Hilltop Haven",
    description: "Breath-taking views",
    image:
      "https://images.unsplash.com/photo-1586611292717-f828b167408c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 6500,
    location: "Mussoorie, Uttarakhand",
    country: "India",
    __v: 0,
  },
  {
    title: "Riverside Cabin",
    description: "Cozy and tranquil",
    image:
      "https://images.unsplash.com/photo-1534009502677-4e5080efa8c6?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 5300,
    location: "Kerala",
    country: "India",
    __v: 0,
  },
  {
    title: "Grand Estate",
    description: "Elegant and majestic",
    image:
      "https://img.freepik.com/free-photo/3d-house-model-with-modern-architecture_23-2151004046.jpg",
    price: 8000,
    location: "Hyderabad, Telangana",
    country: "India",
    __v: 0,
  },
  {
    title: "Coastal Villa",
    description: "Stylish and relaxing",
    image:
      "https://img.freepik.com/premium-photo/house-hd-image-luxury-house-villa-palace-house-rent-house-sale-front-elevation-design_1012565-20476.jpg",
    price: 6700,
    location: "Kochi, Kerala",
    country: "India",
    __v: 0,
  },
  {
    title: "Elegant Estate",
    description: "Sophisticated and upscale",
    image:
      "https://img.freepik.com/premium-photo/house-hd-image-luxury-house-villa-palace-house-rent-house-sale-front-elevation-design_1012565-20855.jpg",
    price: 7200,
    location: "Pune, Maharashtra",
    country: "India",
    __v: 0,
  },
  {
    title: "Country Manor",
    description: "Rustic and charming",
    image:
      "https://img.freepik.com/free-photo/nature-landscape-hawaii-with-digital-art-style_23-2151793618.jpg",
    price: 5000,
    location: "Chandigarh",
    country: "India",
    __v: 0,
  },
  {
    title: "Sunny Beach House",
    description: "Bright and airy",
    image:
      "https://img.freepik.com/free-photo/3d-model-house-building_23-2150761002.jpg",
    price: 5500,
    location: "Goa",
    country: "India",
    __v: 0,
  },
  {
    title: "Chic Urban Apartment",
    description: "Stylish and modern",
    image:
      "https://img.freepik.com/free-photo/3d-house-model-with-modern-architecture_23-2151004020.jpg",
    price: 5600,
    location: "Bengaluru, Karnataka",
    country: "India",
    __v: 0,
  },
  {
    title: "Eco-Friendly Lodge",
    description: "Sustainable and comfortable",
    image:
      "https://img.freepik.com/free-photo/3d-house-model-with-modern-architecture_23-2151004030.jpg",
    price: 4800,
    location: "Coorg, Karnataka",
    country: "India",
    __v: 0,
  },
  {
    title: "Spacious Penthouse",
    description: "Luxurious and expansive",
    image:
      "https://img.freepik.com/free-photo/3d-rendering-wooden-house_23-2151264503.jpg",
    price: 7000,
    location: "Mumbai, Maharashtra",
    country: "India",
    __v: 0,
  },
  {
    title: "Historic Mansion",
    description: "Elegant and historic",
    image:
      "https://img.freepik.com/free-photo/luxurious-villa-with-modern-architectural-design_23-2151694097.jpg",
    price: 8000,
    location: "Kolkata, West Bengal",
    country: "India",
    __v: 0,
  },
  {
    title: "Contemporary Apartment",
    description: "Modern and comfortable",
    image:
      "https://img.freepik.com/free-photo/3d-model-house-building_23-2150761006.jpg",
    price: 5400,
    location: "Delhi",
    country: "India",
    __v: 0,
  },
  {
    title: "Charming Farmhouse",
    description: "Rustic and cozy",
    image:
      "https://img.freepik.com/free-photo/luxurious-villa-with-modern-architectural-design_23-2151694144.jpg",
    price: 4700,
    location: "Pondicherry",
    country: "India",
    __v: 0,
  },
];

// exporting object with key:value to make it accessible anywhere in the application
module.exports = { sampleData: sampleListing };
