import Dhauli_Hills from '../assets/Dhauli Hills.webp';
import jaganatha from '../assets/jaganatha.webp';
import chilika from '../assets/chilika.webp';
import Konarka_Temple from '../assets/Konarka_Temple.webp';
import Daringibari_Tour from '../assets/Daringibari-Tour.webp';
import puri from '../assets/puri.webp';
import Package1 from '../assets/package1.png';
import Package2 from '../assets/package2.png';
import Package3 from '../assets/package3.png';

//package 

export const dummyImages = [
  Package1,
  Package2,
  Package3,
  chilika,
  jaganatha,
  puri // Temple
];


export const plans = [
  {
    title: "Puri-Konark-Chilika Tour",
    features: [
      "Arrival in Bhubaneswar & transfer to Puri",
      "Visit Dhauli & Pipili",
      "Konark Sun Temple",
      "Chilika Lake Dolphin Boat Ride",
      "Jagannath Temple visit",
      "Hotel stay & breakfast included"
    ],
    price: "₹6,999",
    image: dummyImages[0],
    color: "bg-blue-600 hover:bg-blue-700",
    textColor: "text-blue-800"
  },
  {
    title: "Berhampur & Daringbadi",
    features: [
      "Drive to Daringbadi hill station",
      "Hill View Point & Nature Park",
      "Doluri River & Coffee Garden",
      "Mandasaru & Putudi Waterfalls",
      "Gopalpur Beach",
      "Overnight stays & local sightseeing"
    ],
    price: "₹7,999",
    image: dummyImages[1],
    color: "bg-blue-600 hover:bg-blue-700",
    textColor: "text-blue-800"
  },
  {
    title: "Bhubaneswar & Puri",
    features: [
      "Jagannath Temple & Golden Beach",
      "Konark Sun Temple & Chandrabhaga Beach",
      "Sakhigopal Temple & Raghurajpur",
      "Chilika Lake Dolphin Ride",
      "Bhubaneswar city temples",
      "Nandankanan Zoo visit"
    ],
    price: "₹8,499",
    image: dummyImages[2],
    color: "bg-blue-600 hover:bg-blue-700",
    textColor: "text-blue-800"
  },
  {
    title: "Similipal Wildlife Safari",
    features: [
      "Jungle safari to Barehipani & Joranda",
      "Wildlife spotting",
      "Tribal market visit",
      "Evening campfire",
      "Forest eco-stay",
      "All meals included"
    ],
    price: "₹5,500",
    image: dummyImages[3],
    color: "bg-blue-600 hover:bg-blue-700",
    textColor: "text-blue-800"
  },
  {
    title: "Chandipur Beach Retreat",
    features: [
      "Sea-view hotel stay",
      "Low tide beach walk",
      "Panchalingeswar Temple",
      "Sunrise view at beach",
      "Cycling along coast",
      "Breakfast included"
    ],
    price: "₹3,000",
    image: dummyImages[4],
    color: "bg-blue-600 hover:bg-blue-700",
    textColor: "text-blue-800"
  },
  {
    title: "Custom Odisha Tour",
    features: [
      "Flexible itinerary",
      "Choice of destinations",
      "Private vehicle & driver",
      "Custom hotel selection",
      "Guided sightseeing",
      "All permits arranged"
    ],
    price: "₹5,500",
    image: dummyImages[5],
    color: "bg-blue-600 hover:bg-blue-700",
    textColor: "text-blue-800"
  }
];

////////////////////////////////

export const tourPackages = [
  // Your Puri-Konark-Chilika Tour
  {
    title: "Puri-Konark-Chilika Tour",
    subtitle: "The complete golden triangle experience (3D/2N)",
    price: 6999,
    itinerary: [
      {
        day: "Day 1: Arrival in Bhubaneswar & Transfer to Puri",
        activities: [
          "Pickup from Bhubaneswar Airport/Railway Station.",
          "Visit Dhauli (Peace Pagoda) and Pipili (Applique work village) on the way.",
          "Check-in to hotel in Puri. Evening visit to Jagannath Temple.",
          "Relax on the Puri beach. Overnight stay in Puri."
        ]
      },
      {
        day: "Day 2: Konark & Chilika Lake (Satapada)",
        activities: [
          "After breakfast, drive to Konark.",
          "Visit the magnificent Sun Temple (a UNESCO World Heritage site).",
          "Proceed to Satapada on Chilika Lake.",
          "Enjoy a boat cruise to see dolphins and the sea mouth.",
          "Return to Puri for overnight stay."
        ]
      },
      {
        day: "Day 3: Departure from Bhubaneswar",
        activities: [
          "After breakfast, check out from the hotel.",
          "Drive back to Bhubaneswar.",
          "Drop at Bhubaneswar Airport/Railway Station for your onward journey."
        ]
      }
    ],
    inclusions: [
      "Accommodation for 2 nights",
      "Private AC vehicle for all transfers",
      "Breakfast at the hotel",
      "All tolls, taxes, and driver allowances"
    ],
    exclusions: [
      "Airfare/Train fare",
      "Entry fees at monuments",
      "Lunch, dinner, and personal expenses",
      "Boating charges at Chilika"
    ]
  },

  // From your uploaded files
  {
    title: "Berhampur & Daringbadi",
    subtitle: "3 Nights - 4 Days",
    itinerary: [
      {
        day: "Day 1: Berhampur - Daringbadi",
        activities: [
          "Pickup from Berhampur railway station.",
          "Drive to Daringbadi hill station (4 hours).",
          "Check in to resort, lunch, and rest.",
          "Evening visit to Hill View Point.",
          "Enjoy bonfire with snacks and dinner.",
          "Overnight stay at Daringbadi."
        ]
      },
      {
        day: "Day 2: Daringbadi Local",
        activities: [
          "Breakfast at resort.",
          "Sightseeing: Nature Park, Doluri River, Pine Jungle, Coffee Garden, Lovers Paradise, Daringbadi Waterfall, Emu farm.",
          "Lunch at resort.",
          "Evening bonfire with snacks and dinner.",
          "Overnight stay at Daringbadi."
        ]
      },
      {
        day: "Day 3: Daringbadi - Mandasaru - Putudi Waterfall - Phulbani - Daringbadi",
        activities: [
          "Drive to Phulbani.",
          "Enroute visit Pisogrundu Waterfall, Mandasaru Valley, Putudi Waterfall.",
          "Return to Daringbadi.",
          "Overnight stay."
        ]
      },
      {
        day: "Day 4: Daringbadi - Berhampur Local - Gopalpur Beach - Drop",
        activities: [
          "Visit Taratarini Temple, Maa Bhairavi Temple.",
          "Enjoy Gopalpur Sea Beach activities.",
          "Return to hotel, refresh, check-out.",
          "Drop at Berhampur railway station."
        ]
      }
    ],
    inclusions: [],
    exclusions: []
  },

  {
    title: "Bhubaneswar & Puri",
    subtitle: "3 Nights - 4 Days",
    itinerary: [
      {
        day: "Day 1: Bhubaneswar - Puri Local",
        activities: [
          "Pickup from Bhubaneswar Airport.",
          "Transfer to Puri.",
          "Visit Sri Jagannath Temple, Gundicha Temple, Mausima Temple, Bedi Hanuman Temple.",
          "Relax at Golden Sea Beach.",
          "Lunch and drop at hotel.",
          "Overnight stay at Puri."
        ]
      },
      {
        day: "Day 2: Puri - Konark - Puri",
        activities: [
          "Breakfast.",
          "Drive to Chandrabhaga Beach.",
          "Visit Konark Sun Temple, Ramchandi Temple.",
          "Proceed to Sakhigopal Temple & Raghurajpur.",
          "Return to Puri.",
          "Overnight stay."
        ]
      },
      {
        day: "Day 3: Puri - Chilika (Satapada) - Puri",
        activities: [
          "Visit Chilika Lake (Satapada).",
          "Boat ride to spot Irrawaddy Dolphins.",
          "Return to Puri via Alarnath Temple, Raghurajpur Patachitra Village.",
          "Overnight stay at Puri."
        ]
      },
      {
        day: "Day 4: Puri - Bhubaneswar Local Drop",
        activities: [
          "Visit Dhauli, Lingaraj Temple, Rajarani Temple, Mukteswar Temple, Kedear Gouri Temple.",
          "Visit Khandagiri & Udaigiri Jain caves.",
          "Lunch break.",
          "Visit Nandankanan Zoo.",
          "Drop at Bhubaneswar Airport or Station."
        ]
      }
    ],
    inclusions: [],
    exclusions: []
  },

  // Two dummy tour packages
  {
    title: "Similipal Wildlife Safari",
    subtitle: "2 Nights - 3 Days",
    price: 5500,
    itinerary: [
      {
        day: "Day 1: Arrival & Safari",
        activities: [
          "Pickup from Baripada.",
          "Check-in at eco-cottage.",
          "Evening nature walk.",
          "Overnight stay."
        ]
      },
      {
        day: "Day 2: Jungle Safari",
        activities: [
          "Full-day jeep safari to Barehipani & Joranda waterfalls.",
          "Wildlife spotting.",
          "Evening campfire.",
          "Overnight stay."
        ]
      },
      {
        day: "Day 3: Departure",
        activities: [
          "Breakfast.",
          "Visit nearby tribal market.",
          "Drop at Baripada."
        ]
      }
    ],
    inclusions: ["Safari permits", "Accommodation", "Meals"],
    exclusions: ["Personal expenses", "Camera fees"]
  },

  {
    title: "Chandipur Beach Retreat",
    subtitle: "1 Night - 2 Days",
    price: 3000,
    itinerary: [
      {
        day: "Day 1: Arrival & Beach Walk",
        activities: [
          "Arrival at Balasore.",
          "Transfer to Chandipur Beach hotel.",
          "Evening beach walk during low tide.",
          "Overnight stay."
        ]
      },
      {
        day: "Day 2: Departure",
        activities: [
          "Morning sunrise at beach.",
          "Breakfast.",
          "Visit nearby Panchalingeswar Temple.",
          "Drop at Balasore."
        ]
      }
    ],
    inclusions: ["Accommodation", "Breakfast"],
    exclusions: ["Lunch & Dinner", "Transport"]
  }
];


export const cars = [
  // 1️⃣ Package 1
  [
    {
      name: "Maruti Suzuki Dzire",
      price: 15500,
      img: "https://www.marutisuzuki.com/-/media/images/maruti/marutisuzuki/car/car-profile-shots/dzireoxfordbluemergednew-image-black-v3.ashx",
      features: ["AC", "4 Seater", "Free Cancellation"]
    },
    {
      name: "Toyota Innova",
      price: 20500,
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/140809/innova-crysta-exterior-right-front-three-quarter-2.png?isig=0&q=80",
      features: ["AC", "7 Seater", "Free Cancellation"]
    },
    {
      name: "Toyota Innova Crysta",
      price: 25500,
      img: "https://static3.toyotabharat.com/images/news/2020/nov-24/innova-crysta.jpg",
      features: ["Premium AC", "7 Seater", "WiFi"]
    },
    {
      name: "13 Seater Tempo Traveller",
      price: 30000,
      img: "https://odishataxiservice.com/images/vehicle/15-seater-tempo-traveller.jpg",
      features: ["AC", "13 Seater", "Experienced Driver"]
    },
    {
      name: "17 Seater Force Traveller",
      price: 35000,
      img: "https://www.forcemotors.com/wp-content/uploads/2025/02/Traveller-3700WB-12D17D-Main-Image.png",
      features: ["AC", "17 Seater", "Luggage Space"]
    },
    {
      name: "26 Seater Mini Bus",
      price: 42000,
      img: "https://www.bhubaneswarcabrental.com/wp-content/uploads/2017/03/26-seater-ac-tempo-traveller.jpg",
      features: ["AC", "26 Seater", "Ample Luggage Space"]
    }
  ],

  // 2️⃣ Package 2
  [
    {
      name: "Maruti Suzuki Dzire",
      price: 16000,
      img: "https://www.marutisuzuki.com/-/media/images/maruti/marutisuzuki/car/car-profile-shots/dzireoxfordbluemergednew-image-black-v3.ashx",
      features: ["AC", "4 Seater", "Driver Included"]
    },
    {
      name: "Toyota Innova",
      price: 22000,
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/140809/innova-crysta-exterior-right-front-three-quarter-2.png?isig=0&q=80",
      features: ["AC", "7 Seater", "Spacious"]
    },
    {
      name: "Toyota Innova Crysta",
      price: 26000,
      img: "https://static3.toyotabharat.com/images/news/2020/nov-24/innova-crysta.jpg",
      features: ["Premium AC", "7 Seater", "Comfort Ride"]
    },
    {
      name: "13 Seater Tempo Traveller",
      price: 30000,
      img: "https://odishataxiservice.com/images/vehicle/15-seater-tempo-traveller.jpg",
      features: ["AC", "13 Seater", "Experienced Driver"]
    },
    {
      name: "17 Seater Force Traveller",
      price: 36000,
      img: "https://www.forcemotors.com/wp-content/uploads/2025/02/Traveller-3700WB-12D17D-Main-Image.png",
      features: ["AC", "17 Seater", "Luggage Space"]
    },
    {
      name: "26 Seater Mini Bus",
      price: 42000,
      img: "https://www.bhubaneswarcabrental.com/wp-content/uploads/2017/03/26-seater-ac-tempo-traveller.jpg",
      features: ["AC", "26 Seater", "Ample Luggage Space"]
    }
  ],

  // 3️⃣ Package 3
  [
    {
      name: "Maruti Suzuki Dzire",
      price: 12000,
      img: "https://www.marutisuzuki.com/-/media/images/maruti/marutisuzuki/car/car-profile-shots/dzireoxfordbluemergednew-image-black-v3.ashx",
      features: ["AC", "4 Seater", "Budget Ride"]
    },
    {
      name: "Toyota Innova",
      price: 16000,
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/140809/innova-crysta-exterior-right-front-three-quarter-2.png?isig=0&q=80",
      features: ["AC", "7 Seater", "Comfortable"]
    },
    {
      name: "Toyota Innova Crysta",
      price: 20000,
      img: "https://static3.toyotabharat.com/images/news/2020/nov-24/innova-crysta.jpg",
      features: ["Premium AC", "7 Seater", "Best for Long Trips"]
    },
    {
      name: "13 Seater Tempo Traveller",
      price: 24000,
      img: "https://odishataxiservice.com/images/vehicle/15-seater-tempo-traveller.jpg",
      features: ["AC", "13 Seater", "Experienced Driver"]
    },
    {
      name: "17 Seater Force Traveller",
      price: 28000,
      img: "https://www.forcemotors.com/wp-content/uploads/2025/02/Traveller-3700WB-12D17D-Main-Image.png",
      features: ["AC", "17 Seater", "Luggage Space"]
    },
    {
      name: "26 Seater Mini Bus",
      price: 36000,
      img: "https://www.bhubaneswarcabrental.com/wp-content/uploads/2017/03/26-seater-ac-tempo-traveller.jpg",
      features: ["AC", "26 Seater", "Ample Luggage Space"]
    }
  ],

  // 4️⃣ Package 4 (Dummy 1)
  [
    {
      name: "Mahindra XUV500",
      price: 23000,
      img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/XUV500/7931/1620902179681/front-left-side-47.jpg",
      features: ["AC", "6 Seater", "Comfort Ride"]
    },
    {
      name: "Tata Winger",
      price: 28000,
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/144871/winger-executive-left-front-three-quarter.jpeg?isig=0&q=80",
      features: ["AC", "12 Seater", "Spacious Luggage"]
    }
  ],

  // 5️⃣ Package 5 (Dummy 2)
  [
    {
      name: "Hyundai Alcazar",
      price: 25000,
      img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/100829/alcazar-exterior-front-view.jpeg",
      features: ["AC", "6 Seater", "Luxury Ride"]
    },
    {
      name: "Force Urbania",
      price: 38000,
      img: "https://www.forcemotors.com/wp-content/uploads/2025/02/urbania-main-image.png",
      features: ["AC", "17 Seater", "Modern Design"]
    }
  ],

  // 6️⃣ Package 6 (Dummy 3)
  [
    {
      name: "Kia Carnival",
      price: 32000,
      img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/40058/carnival-exterior-front-view.jpeg",
      features: ["Premium AC", "7 Seater", "Family Comfort"]
    },
    {
      name: "Ashok Leyland Mini Bus",
      price: 45000,
      img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/100721/minibus-exterior-side-view.jpeg",
      features: ["AC", "26 Seater", "Group Travel"]
    }
  ]
];

//AllCar

export const carData = [
  {
    category: "Sedan Car",
    cars: [
      {
        name: "AC Tata Indigo",
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGF0YSUyMGluZGlnb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        rates: { "8h80": 1800, "12h120": 2300 },
        extraKm: 12,
        extraHr: 120,
        night: 300,
      },
      {
        name: "AC Hyundai Xcent",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aHl1bmRhaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        rates: { "8h80": 1900, "12h120": 2350 },
        extraKm: 12,
        extraHr: 150,
        night: 250,
      },
      {
        name: "AC Maruti Dzire",
        image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hcnV0aSUyMGR6aXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        rates: { "8h80": 2000, "12h120": 2500 },
        extraKm: 10,
        extraHr: 100,
        night: 350,
      },
      {
        name: "AC Honda City",
        image: "https://images.unsplash.com/photo-1603383928972-0b132d1e0a6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9uZGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        rates: { "8h80": 2200, "12h120": 2700 },
        extraKm: 11,
        extraHr: 110,
        night: 400,
      },
    ],
  },
  {
    category: "SUV Car",
    cars: [
      {
        name: "AC Chevrolet Enjoy",
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hldnJvbGV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        rates: { "8h80": 2500, "12h120": 3000 },
        extraKm: 14,
        extraHr: 190,
        night: 200,
      },
      {
        name: "AC Chevrolet Tavera",
        image: "https://images.unsplash.com/photo-1551836026-d10c33be9cd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1dnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        rates: { "8h80": 2600, "12h120": 2950 },
        extraKm: 14,
        extraHr: 150,
        night: 200,
      },
      {
        name: "AC Toyota Fortuner",
        image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRveW90YSUyMGZvcnR1bmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        rates: { "8h80": 3500, "12h120": 4200 },
        extraKm: 18,
        extraHr: 250,
        night: 500,
      },
      {
        name: "AC Mahindra Scorpio",
        image: "https://images.unsplash.com/photo-1566473356299-838a22890b8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1haGluZHJhJTIwc2NvcnBpb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        rates: { "8h80": 3000, "12h120": 3800 },
        extraKm: 16,
        extraHr: 200,
        night: 400,
      },
    ],
  },
  {
    category: "AC Force Traveller",
    cars: [
      {
        name: "AC 13 Seater Traveller",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        rates: { "8h80": 5000, "12h120": 6000 },
        extraKm: 25,
        extraHr: 200,
        night: 200,
      },
      {
        name: "AC 17 Seater Traveller",
        image: "https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        rates: { "8h80": 5300, "12h120": 6300 },
        extraKm: 26,
        extraHr: 200,
        night: 200,
      },
      {
        name: "AC 20 Seater Traveller",
        image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        rates: { "8h80": 6000, "12h120": 7000 },
        extraKm: 28,
        extraHr: 250,
        night: 300,
      },
      {
        name: "AC 25 Seater Luxury Traveller",
        image: "https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGx1eHVyeSUyMGJ1c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        rates: { "8h80": 7000, "12h120": 8000 },
        extraKm: 30,
        extraHr: 300,
        night: 500,
      },
    ],
  },
];


