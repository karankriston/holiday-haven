export interface TourPackage {
  id: string;
  name: string;
  locations: string;
  locationsList: string[];
  duration: string;
  price: string;
  image: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string;
  packages: TourPackage[];
}

export const categories: Category[] = [
  {
    id: "hill-stations",
    name: "Ooty Tour Packages",
    description: "Escape to the misty mountains and serene valleys",
    image: "/images/hill-station.jpg",
    icon: "🏔️",
    packages: [
      {
        id: "ooty-delight",
        name: "Ooty Delight Tour",
        locations: "Doddabetta Peak, Tea Park, Ooty Lake, Botanical Garden, Karnataka Garden, Tea Factory, Eagle Adventures Park, Chocolate Museum",
        locationsList: ["Doddabetta Peak", "Tea Park", "Ooty Lake [Boating]", "Botanical Garden", "Karnataka Garden", "Tea Factory", "Eagle Adventures Park", "Chocolate Museum"],
        duration: "Full Day",
        price: "₹2,500",
        image: "/images/ooty.jpg",
        description: "Experience the Queen of Hill Stations with sprawling tea gardens, botanical wonders, and scenic railway journeys through the Nilgiris"
      },
      {
        id: "kodaikanal-escape",
        name: "Coonoor Scenic Experience",
        locations: "Lamb's Rock, Dolphin's Nose, Sims Park, Tea Garden, Madras Regimental Museum, Strawberry Farm",
        locationsList: ["Lamb's Rock", "Dolphin's Nose", "Sims Park", "Tea Garden", "Madras Regimental Museum", "Strawberry Farm"],
        duration: "Full Day",
        price: "₹2,500",
        image: "/images/kodaikanal.jpg",
        description: "Discover the scenic beauty of Coonoor with pristine viewpoints, lush gardens, and historic colonial architecture"
      },
      {
        id: "munnar-magic",
        name: "Pykara Nature And Adventure",
        locations: "Pykara Falls, Pykara Lake, Shooting Spot, Pine Forest, Tree Park, Wenlock Downs, Mudhumalai Trek",
        locationsList: ["Pykara Falls", "Pykara Lake [Boating]", "Shooting Spot (9th Miles)", "Pine Forest", "Tree Park", "Wenlock Downs", "Mudhumalai Trek [₹1000]"],
        duration: "Full Day",
        price: "₹2,500",
        image: "/images/munnar.jpg",
        description: "Experience the natural wonders of Pykara with stunning waterfalls, boat rides, and adventure activities in the Nilgiris"
      },
      {
        id: "coorg-adventure",
        name: "Avalanche Wilderness Retreat",
        locations: "Cairn Hill Reservoir, Thoda Museum, Emerald Lake, Avalanche Dam, Avalanche Jeep Ride",
        locationsList: ["Cairn Hill Reservoir", "Thoda Museum", "Emerald Lake", "Avalanche Dam", "Avalanche Jeep Ride [Additional Cost]"],
        duration: "Full Day",
        price: "₹2,700",
        image: "/images/coorg.jpg",
        description: "Explore the pristine wilderness of Avalanche with crystal clear lakes, shola forests, and untouched natural beauty"
      },
      {
        id: "shimla-manali",
        name: "Kodanadu Highlight Experience",
        locations: "Kodanadu Viewpoint, Catherine Falls, Kodanad Estates, Pandian Park, Rangaswamy Peak",
        locationsList: ["Kodanadu Viewpoint", "Catherine Falls", "Kodanad Estates", "Pandian Park", "Rangaswamy Peak"],
        duration: "Full Day",
        price: "₹3,000",
        image: "/images/shimla.jpg",
        description: "Experience the breathtaking views of Kodanadu with elephant encounters, tea plantation walks, and stunning valley vistas"
      }
    ]
  },
  {
    id: "beaches",
    name: "Pick up & Drop",
    description: "Comfortable transfers to your destination. Additional charges may apply based on pickup location.",
    image: "/images/beach.jpg",
    icon: "🚗",
    packages: [
      {
        id: "goa-carnival",
        name: "Airport Pickup",
        locations: "Coimbatore Airport, Bangalore Airport, Chennai Airport, Mysore, Salem, Erode, Tirupur, Madurai",
        locationsList: ["Coimbatore Airport", "Bangalore Airport", "Chennai Airport", "Mysore", "Salem", "Erode", "Tirupur", "Madurai"],
        duration: "One Way",
        price: "₹2,999",
        image: "/images/goa.jpg",
        description: "Comfortable pickup service from major airports to Ooty with experienced drivers and well-maintained vehicles"
      },
      {
        id: "andaman-paradise",
        name: "Railway Station Transfer",
        locations: "Mettupalayam, Coimbatore, Salem, Mysore, Bangalore, Erode, Chennai, Madurai",
        locationsList: ["Mettupalayam", "Coimbatore Junction", "Salem Junction", "Mysore Junction", "Bangalore City", "Erode Junction", "Chennai Central", "Madurai Junction"],
        duration: "One Way",
        price: "₹1,999",
        image: "/images/andaman.jpg",
        description: "Seamless transfers from railway stations to Ooty with punctual service and comfortable seating"
      },
      {
        id: "kerala-backwaters",
        name: "Round Trip Transfer",
        locations: "Any City to Ooty and Back",
        locationsList: ["Coimbatore", "Bangalore", "Chennai", "Mysore", "Kochi", "Madurai", "Salem", "Tirupur"],
        duration: "Round Trip",
        price: "₹5,999",
        image: "/images/kerala.jpg",
        description: "Complete round trip transfer package with flexible scheduling and 24/7 availability"
      }
    ]
  },
  {
    id: "heritage",
    name: "South Serenity Tours",
    description: "Peaceful escapes through South India",
    image: "/images/heritage.jpg",
    icon: "🌿",
    packages: [
      {
        id: "rajasthan-royal",
        name: "Kerala Backwaters Bliss",
        locations: "Alleppey, Kumarakom, Kochi, Munnar",
        locationsList: ["Alleppey", "Kumarakom", "Fort Kochi", "Munnar", "Thekkady", "Vagamon"],
        duration: "7 Days / 6 Nights",
        price: "₹32,999",
        image: "/images/rajasthan.jpg",
        description: "Experience the serene backwaters of Kerala with houseboat stays, Ayurvedic treatments, and lush hill stations"
      },
      {
        id: "golden-triangle",
        name: "Tamil Nadu Temple Trail",
        locations: "Madurai, Rameswaram, Kanyakumari, Thanjavur",
        locationsList: ["Madurai", "Rameswaram", "Kanyakumari", "Thanjavur", "Trichy", "Pondicherry"],
        duration: "5 Days / 4 Nights",
        price: "₹19,999",
        image: "/images/agra.jpg",
        description: "Explore the magnificent temples of Tamil Nadu with their stunning Dravidian architecture"
      },
      {
        id: "hampi-heritage",
        name: "Karnataka Heritage",
        locations: "Mysore, Coorg, Hampi, Badami",
        locationsList: ["Mysore Palace", "Coorg", "Hampi", "Badami Caves", "Belur", "Halebidu"],
        duration: "4 Days / 3 Nights",
        price: "₹12,999",
        image: "/images/hampi.jpg",
        description: "Discover Karnataka's rich heritage with royal palaces, ancient ruins, and coffee plantations"
      },
      {
        id: "varanasi-spiritual",
        name: "Andhra Spiritual Journey",
        locations: "Tirupati, Srikalahasti, Lepakshi, Puttaparthi",
        locationsList: ["Tirupati", "Tirumala", "Srikalahasti", "Lepakshi", "Puttaparthi", "Ahobilam"],
        duration: "5 Days / 4 Nights",
        price: "₹16,999",
        image: "/images/varanasi.jpg",
        description: "A spiritual journey through Andhra Pradesh's most sacred temples and pilgrimage sites"
      },
      {
        id: "south-temple",
        name: "Complete South India",
        locations: "Kerala, Tamil Nadu, Karnataka, Andhra Pradesh",
        locationsList: ["Kochi", "Munnar", "Ooty", "Mysore", "Madurai", "Rameswaram"],
        duration: "6 Days / 5 Nights",
        price: "₹21,999",
        image: "/images/madurai.jpg",
        description: "The ultimate South India experience covering all four states with their unique culture and beauty"
      }
    ]
  },
  {
    id: "wildlife",
    name: "Ooty Toy Train Ride",
    description: "Heritage railway experience through the Nilgiris",
    image: "/images/wildlife.jpg",
    icon: "🚂",
    packages: []
  },
  {
    id: "adventure",
    name: "Treks & Adventures",
    description: "Thrilling experiences for the bold explorer",
    image: "/images/adventure.jpg",
    icon: "🥾",
    packages: [
      {
        id: "ladakh-expedition",
        name: "Doddabetta Trek",
        locations: "Doddabetta Peak, highest point in Nilgiris",
        locationsList: ["Doddabetta Base", "Forest Trail", "View Point", "Summit", "Tea Estate", "Botanical Garden"],
        duration: "Half Day",
        price: "₹1,499",
        image: "/images/ladakh.jpg",
        description: "Trek to the highest peak in the Nilgiris at 2,637m with panoramic views of the entire region"
      },
      {
        id: "birdwatch-virgin",
        name: "Bird Watch [Virgin Earth]",
        locations: "Virgin Earth Bird Sanctuary, Nilgiri forests",
        locationsList: ["Virgin Earth Sanctuary", "Forest Trails", "Bird Watching Points", "Nature Walk", "Photography Spots", "Wildlife Spotting"],
        duration: "Half Day",
        price: "₹1,999",
        image: "/images/birdwatch.jpg",
        description: "Discover exotic bird species in the pristine Virgin Earth sanctuary with expert naturalist guides"
      },
      {
        id: "rishikesh-thrill",
        name: "Mukurthi Peak Trek",
        locations: "Mukurthi National Park adventure",
        locationsList: ["Mukurthi Park Entry", "Shola Forest", "Grasslands", "Peak Summit", "Wildlife Spotting"],
        duration: "Full Day",
        price: "₹2,999",
        image: "/images/rishikesh.jpg",
        description: "Challenging trek through Mukurthi National Park with chances to spot Nilgiri Tahr and exotic birds"
      },
      {
        id: "spiti-valley",
        name: "Avalanche Valley Trek",
        locations: "Avalanche Lake and surrounding trails",
        locationsList: ["Avalanche Lake", "Upper Bhavani", "Emerald Lake", "Forest Trails", "Trout Fishing"],
        duration: "Full Day",
        price: "₹2,499",
        image: "/images/spiti.jpg",
        description: "Scenic trek through the pristine Avalanche valley with crystal clear lakes and diverse wildlife"
      },
      {
        id: "meghalaya-caves",
        name: "Night Safari Adventure",
        locations: "Mudumalai and Bandipur wildlife",
        locationsList: ["Mudumalai Entry", "Jeep Safari", "Wildlife Spotting", "Night Camp", "Nature Walk"],
        duration: "Overnight",
        price: "₹4,999",
        image: "/images/meghalaya.jpg",
        description: "Thrilling night safari through Mudumalai Tiger Reserve with camping and wildlife encounters"
      },
      {
        id: "sikkim-adventure",
        name: "Multi-Day Adventure Package",
        locations: "Complete adventure experience",
        locationsList: ["Trekking", "Camping", "Safari", "Rock Climbing", "Rappelling", "Nature Walks"],
        duration: "3 Days / 2 Nights",
        price: "₹8,999",
        image: "/images/sikkim.jpg",
        description: "Ultimate adventure package combining multiple activities for thrill seekers"
      }
    ]
  },
  {
    id: "pilgrimage",
    name: "Honeymoon Packages",
    description: "Romantic getaways for couples",
    image: "/images/pilgrimage.jpg",
    icon: "💑",
    packages: [
      {
        id: "char-dham",
        name: "Romantic Ooty Escape",
        locations: "Ooty, Coonoor romantic spots",
        locationsList: ["Rose Garden", "Botanical Garden", "Ooty Lake", "Boat House", "Dolphin's Nose", "Lamb's Rock"],
        duration: "4 Days / 3 Nights",
        price: "₹18,999",
        image: "/images/chardham.jpg",
        description: "Perfect honeymoon package with romantic stays, candlelight dinners, and scenic excursions"
      },
      {
        id: "vaishno-devi",
        name: "Coorg & Ooty Romance",
        locations: "Coorg and Ooty combined tour",
        locationsList: ["Abbey Falls", "Raja's Seat", "Coffee Plantations", "Ooty Lake", "Rose Garden", "Tea Estates"],
        duration: "5 Days / 4 Nights",
        price: "₹24,999",
        image: "/images/vaishnodevi.jpg",
        description: "Romantic journey through the coffee estates of Coorg and tea gardens of Ooty"
      },
      {
        id: "tirupati-darshan",
        name: "Kerala Honeymoon Special",
        locations: "Kerala backwaters and hills",
        locationsList: ["Munnar", "Thekkady", "Alleppey", "Kumarakom", "Houseboat Stay", "Ayurveda Spa"],
        duration: "6 Days / 5 Nights",
        price: "₹32,999",
        image: "/images/tirupati.jpg",
        description: "Luxurious Kerala honeymoon with houseboat stays, spa treatments, and romantic hill station visits"
      },
      {
        id: "amarnath-yatra",
        name: "South India Romantic Tour",
        locations: "Ooty, Kodaikanal, Munnar",
        locationsList: ["Ooty", "Kodaikanal", "Munnar", "Alleppey", "Romantic Stays", "Private Tours"],
        duration: "7 Days / 6 Nights",
        price: "₹38,999",
        image: "/images/amarnath.jpg",
        description: "Grand South India honeymoon covering the most romantic destinations with luxury accommodations"
      },
      {
        id: "south-jyotirlinga",
        name: "Budget Honeymoon Package",
        locations: "Ooty romantic essentials",
        locationsList: ["Ooty Lake", "Botanical Garden", "Rose Garden", "Doddabetta", "Pine Forest"],
        duration: "3 Days / 2 Nights",
        price: "₹12,999",
        image: "/images/rameshwaram.jpg",
        description: "Affordable honeymoon package with all romantic essentials in the Queen of Hill Stations"
      }
    ]
  }
];

export const longTrips = [
  {
    id: "kashmir-complete",
    name: "Ooty to Bangalore",
    duration: "2 Days / 1 Night",
    price: "₹8,999",
    image: "/images/kashmir.jpg",
    description: "Complete road trip from Ooty to Bangalore via Mysore, Coorg with multiple sightseeing stops"
  },
  {
    id: "northeast-explorer",
    name: "Ooty to Kerala",
    duration: "3 Days / 2 Nights",
    price: "₹12,999",
    image: "/images/northeast.jpg",
    description: "Epic journey from Ooty to Kerala covering Munnar, Thekkady, Alleppey backwaters and beaches"
  },
  {
    id: "south-india-grand",
    name: "Ooty to Coimbatore",
    duration: "1 Day",
    price: "₹3,999",
    image: "/images/southindia.jpg",
    description: "Scenic route from Ooty to Coimbatore with all major attractions and comfortable transfers"
  },
  {
    id: "ooty-mysore",
    name: "Ooty to Mysore",
    duration: "2 Days / 1 Night",
    price: "₹7,999",
    image: "/images/ooty-mysore.jpg",
    description: "Explore Mysore Palace, Chamundi Hills, and Brindavan Gardens on this scenic journey from Ooty"
  },
  {
    id: "ooty-mettupalayam",
    name: "Ooty to Mettupalayam",
    duration: "Half Day",
    price: "₹2,499",
    image: "/images/ooty-mettupalayam.jpg",
    description: "Scenic drive through 36 hairpin bends from Ooty to Mettupalayam with tea garden views"
  },
  {
    id: "ooty-chennai",
    name: "Ooty to Chennai",
    duration: "2 Days / 1 Night",
    price: "₹9,999",
    image: "/images/ooty-chennai.jpg",
    description: "Long scenic journey from Ooty to Chennai with stops at major attractions en route"
  }
];

export const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    comment: "Our Ooty trip was absolutely magical! The team arranged everything perfectly - from the cozy homestay to the guided tour of tea gardens. Highly recommended!",
    avatar: "PS",
    trip: "Ooty Delight Tour"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Delhi",
    rating: 5,
    comment: "The toy train experience was a dream come true. The breathtaking landscapes and professional organization made it an unforgettable adventure. Will definitely book again!",
    avatar: "RK",
    trip: "Toy Train Experience"
  },
  {
    id: 3,
    name: "Anita Desai",
    location: "Bangalore",
    rating: 5,
    comment: "Our honeymoon package exceeded all expectations. The romantic settings and personalized service was incredible. Perfect couple vacation!",
    avatar: "AD",
    trip: "Romantic Ooty Escape"
  },
  {
    id: 4,
    name: "Vikram Mehta",
    location: "Hyderabad",
    rating: 5,
    comment: "The Pykara trip was breathtaking! The waterfalls, boating, and pine forests made it a memorable day. Driver was very knowledgeable about local spots.",
    avatar: "VM",
    trip: "Pykara Nature Adventure"
  },
  {
    id: 5,
    name: "Sneha Nair",
    location: "Kochi",
    rating: 5,
    comment: "Best family trip ever! Kids loved the chocolate museum and botanical gardens. The driver was patient and accommodating with our schedule changes.",
    avatar: "SN",
    trip: "Ooty Delight Tour"
  },
  {
    id: 6,
    name: "Arjun Reddy",
    location: "Chennai",
    rating: 5,
    comment: "The Coonoor experience was serene and peaceful. Lamb's Rock view was stunning! Great value for money and excellent service throughout.",
    avatar: "AR",
    trip: "Coonoor Scenic Experience"
  },
  {
    id: 7,
    name: "Meera Krishnan",
    location: "Coimbatore",
    rating: 5,
    comment: "Booked the airport pickup and local sightseeing combo. Everything was seamless - punctual driver, clean vehicle, and great hospitality!",
    avatar: "MK",
    trip: "Airport Pickup"
  },
  {
    id: 8,
    name: "Sanjay Gupta",
    location: "Pune",
    rating: 5,
    comment: "The Avalanche trek was an adventure of a lifetime! Crystal clear lakes, misty forests, and the jeep ride was thrilling. Highly recommend!",
    avatar: "SG",
    trip: "Avalanche Wilderness Retreat"
  }
];

export const trainSchedule = {
  mettupalayamToOoty: [
    {
      trainNo: "56136",
      name: "Mettupalayam-Ooty Passenger",
      from: "Mettupalayam (MTP)",
      departure: "7:10 AM",
      to: "Ooty (UAM)",
      arrival: "11:55 AM",
      duration: "4h 45m / 46 km"
    }
  ],
  coonoorToOoty: [
    {
      trainNo: "56141",
      name: "Coonoor-Udagamandalam Passenger",
      from: "Coonoor (ONR)",
      departure: "7:45 AM",
      to: "Ooty (UAM)",
      arrival: "9:00 AM",
      duration: "1h 15m / 19 km"
    },
    {
      trainNo: "56136",
      name: "Mettupalayam-Ooty Passenger",
      from: "Coonoor (ONR)",
      departure: "10:40 AM",
      to: "Ooty (UAM)",
      arrival: "11:55 AM",
      duration: "1h 15m / 19 km"
    },
    {
      trainNo: "56143",
      name: "Coonoor-Udagamandalam Passenger",
      from: "Coonoor (ONR)",
      departure: "12:35 PM",
      to: "Ooty (UAM)",
      arrival: "1:45 PM",
      duration: "1h 10m / 19 km"
    },
    {
      trainNo: "56138",
      name: "Coonoor-Udagamandalam Passenger",
      from: "Coonoor (ONR)",
      departure: "4:00 PM",
      to: "Ooty (UAM)",
      arrival: "5:10 PM",
      duration: "1h 10m / 19 km"
    }
  ],
  ootyToMettupalayam: [
    {
      trainNo: "56137",
      name: "Ooty-Mettupalayam Passenger",
      from: "Ooty (UAM)",
      departure: "2:00 PM",
      to: "Mettupalayam (MTP)",
      arrival: "5:30 PM",
      duration: "3h 30m / 46 km"
    }
  ],
  ootyToCoonoor: [
    {
      trainNo: "56139",
      name: "Udagamandalam-Coonoor Passenger",
      from: "Ooty (UAM)",
      departure: "9:15 AM",
      to: "Coonoor (ONR)",
      arrival: "10:20 AM",
      duration: "1h 5m / 19 km"
    },
    {
      trainNo: "56142",
      name: "Udagamandalam-Coonoor Passenger",
      from: "Ooty (UAM)",
      departure: "12:15 PM",
      to: "Coonoor (ONR)",
      arrival: "1:15 PM",
      duration: "1h / 19 km"
    },
    {
      trainNo: "56137",
      name: "Udagamandalam-Mettupalayam Passenger",
      from: "Ooty (UAM)",
      departure: "2:00 PM",
      to: "Coonoor (ONR)",
      arrival: "3:05 PM",
      duration: "1h 5m / 19 km"
    },
    {
      trainNo: "56140",
      name: "Udagamandalam-Coonoor Passenger",
      from: "Ooty (UAM)",
      departure: "5:30 PM",
      to: "Coonoor (ONR)",
      arrival: "6:35 PM",
      duration: "1h 5m / 19 km"
    }
  ],
  ticketFare: {
    mettupalayamToOoty: { firstClass: 600, secondClass: 295 },
    mettupalayamToCoonoor: { firstClass: 445, secondClass: 190 },
    coonoorToOoty: { firstClass: 350, secondClass: 150 }
  }
};
