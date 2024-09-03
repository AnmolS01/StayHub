const sampleListing = [
  {
    title: "Ocean View Villa",
    description: "By the beach",
    image:
      "https://unsplash.com/photos/blue-body-of-water-in-front-of-building-near-trees-during-nighttime-M7GddPqJowg",
    price: 5000,
    location: "Mirzapur, Bihar",
    country: "India",
    __v: 0,
  },
  {
    title: "Mountain Retreat",
    description: "Nestled in the hills",
    image:
      "https://unsplash.com/photos/white-and-grey-concrete-building-near-swimming-pool-under-clear-sky-during-daytime-2d4lAQAlbDA",
    price: 4500,
    location: "Shimla, Himachal Pradesh",
    country: "India",
    __v: 0,
  },
  {
    title: "City Escape",
    description: "Modern and cozy",
    image: "https://unsplash.com/photos/swimming-pool-on-mountain-OwWbUOIbhDY",
    price: 5500,
    location: "Delhi",
    country: "India",
    __v: 0,
  },
  {
    title: "Countryside Cottage",
    description: "Peaceful and serene",
    image:
      "https://unsplash.com/photos/wide-angle-photo-of-brown-and-blue-building-_6ROq_LmdkM",
    price: 4000,
    location: "Coorg, Karnataka",
    country: "India",
    __v: 0,
  },
  {
    title: "Desert Oasis",
    description: "Luxurious and unique",
    image:
      "https://unsplash.com/photos/resort-with-pool-hut-and-patio-umbrellas-dyj7RTs85Fs",
    price: 6000,
    location: "Jaisalmer, Rajasthan",
    country: "India",
    __v: 0,
  },
  {
    title: "Lakeside Lodge",
    description: "Scenic and relaxing",
    image: "https://unsplash.com/photos/swimming-pool-near-ocean-2gOxKj594nM",
    price: 4700,
    location: "Nainital, Uttarakhand",
    country: "India",
    __v: 0,
  },
  {
    title: "Urban Loft",
    description: "Chic and stylish",
    image:
      "https://unsplash.com/photos/brown-wooden-lounge-chairs-near-body-of-water-during-daytime-oyxsG2Lh_uA",
    price: 5200,
    location: "Mumbai, Maharashtra",
    country: "India",
    __v: 0,
  },
  {
    title: "Seaside Cottage",
    description: "Charming and quaint",
    image:
      "https://unsplash.com/photos/brown-wooden-gazebo-on-beach-during-daytime-VfvDuCY6-ZM",
    price: 4800,
    location: "Goa",
    country: "India",
    __v: 0,
  },
  {
    title: "Hilltop Haven",
    description: "Breath-taking views",
    image:
      "https://unsplash.com/photos/bench-and-dining-table-near-body-of-water-under-calm-sky-YC8qqp50BdA",
    price: 5600,
    location: "Munnar, Kerala",
    country: "India",
    __v: 0,
  },
  {
    title: "Traditional Haveli",
    description: "Rich in heritage",
    image: "https://unsplash.com/photos/brown-estate-ssOtyGE8CyE",
    price: 6500,
    location: "Udaipur, Rajasthan",
    country: "India",
    __v: 0,
  },
  {
    title: "Luxury Apartment",
    description: "Elegant and modern",
    image:
      "https://unsplash.com/photos/a-large-swimming-pool-with-a-sun-setting-in-the-background-Yw3_lbdt48w",
    price: 6200,
    location: "Bengaluru, Karnataka",
    country: "India",
    __v: 0,
  },
  {
    title: "Riverside Retreat",
    description: "Calm and serene",
    image:
      "https://unsplash.com/photos/pool-surrounded-with-trees-and-gazebos-1tyuLfDOnG0",
    price: 5400,
    location: "Rishikesh, Uttarakhand",
    country: "India",
    __v: 0,
  },
  {
    title: "Beachfront Resort",
    description: "Perfect for relaxation",
    image:
      "https://unsplash.com/photos/a-large-pool-with-a-wooden-dock-surrounded-by-palm-trees-izUlxxDtLL8",
    price: 7000,
    location: "Kovalam, Kerala",
    country: "India",
    __v: 0,
  },
  {
    title: "Rustic Farmhouse",
    description: "Countryside charm",
    image:
      "https://unsplash.com/photos/a-swimming-pool-surrounded-by-trees-and-plants-tYd9AaYofn8",
    price: 4300,
    location: "Pondicherry",
    country: "India",
    __v: 0,
  },
  {
    title: "Contemporary Villa",
    description: "Spacious and modern",
    image:
      "https://unsplash.com/photos/white-and-brown-house-near-swimming-pool-during-daytime-HKr5cn6S0q0",
    price: 5900,
    location: "Chennai, Tamil Nadu",
    country: "India",
    __v: 0,
  },
  {
    title: "Historic Mansion",
    description: "Grand and classic",
    image:
      "https://unsplash.com/photos/brown-wooden-lounge-chairs-near-body-of-water-during-daytime-oyxsG2Lh_uA",
    price: 6800,
    location: "Hyderabad, Telangana",
    country: "India",
    __v: 0,
  },
  {
    title: "Eco-Friendly Cabin",
    description: "Sustainable living",
    image:
      "https://unsplash.com/photos/sunloungers-fronting-buildings-near-mountain-DGa0LQ0yDPc",
    price: 4200,
    location: "Alleppey, Kerala",
    country: "India",
    __v: 0,
  },
  {
    title: "Modern Penthouse",
    description: "Luxurious and exclusive",
    image:
      "https://unsplash.com/photos/a-house-with-a-swimming-pool-in-front-of-it-7ugCvlbjv-E",
    price: 7500,
    location: "Delhi",
    country: "India",
    __v: 0,
  },
  {
    title: "Quiet Getaway",
    description: "Peaceful and private",
    image:
      "https://unsplash.com/photos/white-and-brown-concrete-building-hHz4yrvxwlA",
    price: 4600,
    location: "Mysore, Karnataka",
    country: "India",
    __v: 0,
  },
  {
    title: "Charming Studio",
    description: "Compact and cozy",
    image: "https://unsplash.com/photos/white-concrete-building-g39p1kDjvSY",
    price: 3400,
    location: "Gurgaon, Haryana",
    country: "India",
    __v: 0,
  },
];

module.exports = sampleListing;
