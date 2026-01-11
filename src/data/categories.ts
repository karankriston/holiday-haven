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
        locations: "Ooty, Coonoor, Kotagiri, Wellington, Ketti, Lovedale, Doddabetta",
        locationsList: ["Ooty", "Coonoor", "Kotagiri", "Wellington", "Ketti", "Lovedale", "Doddabetta"],
        duration: "4 Days / 3 Nights",
        price: "₹12,999",
        image: "/images/ooty.jpg",
        description: "Experience the Queen of Hill Stations with sprawling tea gardens, botanical wonders, and scenic railway journeys through the Nilgiris"
      },
      {
        id: "kodaikanal-escape",
        name: "Coonoor Scenic Experience",
        locations: "Coonoor, Sim's Park, Dolphin's Nose, Lamb's Rock, Tiger Hill, Droog Fort",
        locationsList: ["Coonoor", "Sim's Park", "Dolphin's Nose", "Lamb's Rock", "Tiger Hill", "Droog Fort"],
        duration: "3 Days / 2 Nights",
        price: "₹9,999",
        image: "/images/kodaikanal.jpg",
        description: "Discover the scenic beauty of Coonoor with pristine viewpoints, lush gardens, and historic colonial architecture"
      },
      {
        id: "munnar-magic",
        name: "Pykara Nature and Adventure",
        locations: "Pykara, Pykara Falls, Pykara Lake, Pine Forest, Wenlock Downs, Shooting Point",
        locationsList: ["Pykara Falls", "Pykara Lake", "Pine Forest", "Wenlock Downs", "Shooting Point", "6th Mile"],
        duration: "5 Days / 4 Nights",
        price: "₹15,999",
        image: "/images/munnar.jpg",
        description: "Experience the natural wonders of Pykara with stunning waterfalls, boat rides, and adventure activities in the Nilgiris"
      },
      {
        id: "coorg-adventure",
        name: "Avalanche Wilderness Retreat",
        locations: "Avalanche, Avalanche Lake, Upper Bhavani, Emerald Lake, Silent Valley",
        locationsList: ["Avalanche Lake", "Upper Bhavani", "Emerald Lake", "Silent Valley", "Mukurthi Peak", "Trout Farm"],
        duration: "4 Days / 3 Nights",
        price: "₹13,499",
        image: "/images/coorg.jpg",
        description: "Explore the pristine wilderness of Avalanche with crystal clear lakes, shola forests, and untouched natural beauty"
      },
      {
        id: "shimla-manali",
        name: "Kodanadu Highlight Experience",
        locations: "Kodanadu, Kodanadu View Point, Elephant Camp, Tea Estate, Kotagiri",
        locationsList: ["Kodanadu View Point", "Elephant Camp", "Tea Estate Walk", "Kotagiri", "Catherine Falls", "Rangaswamy Pillar"],
        duration: "6 Days / 5 Nights",
        price: "₹22,999",
        image: "/images/shimla.jpg",
        description: "Experience the breathtaking views of Kodanadu with elephant encounters, tea plantation walks, and stunning valley vistas"
      }
    ]
  },
  {
    id: "beaches",
    name: "Pick up & Drop",
    description: "Comfortable transfers to your destination",
    image: "/images/beach.jpg",
    icon: "🚗",
    packages: [
      {
        id: "goa-carnival",
        name: "Airport Pickup",
        locations: "Coimbatore Airport, Bangalore Airport, Chennai Airport, Mysore",
        locationsList: ["Coimbatore Airport", "Bangalore Airport", "Chennai Airport", "Mysore", "Salem", "Erode"],
        duration: "One Way",
        price: "₹2,999",
        image: "/images/goa.jpg",
        description: "Comfortable pickup service from major airports to Ooty with experienced drivers and well-maintained vehicles"
      },
      {
        id: "andaman-paradise",
        name: "Railway Station Transfer",
        locations: "Mettupalayam, Coimbatore, Salem, Mysore, Bangalore",
        locationsList: ["Mettupalayam", "Coimbatore Junction", "Salem Junction", "Mysore Junction", "Bangalore City", "Erode"],
        duration: "One Way",
        price: "₹1,999",
        image: "/images/andaman.jpg",
        description: "Seamless transfers from railway stations to Ooty with punctual service and comfortable seating"
      },
      {
        id: "kerala-backwaters",
        name: "Round Trip Transfer",
        locations: "Any City to Ooty and Back",
        locationsList: ["Coimbatore", "Bangalore", "Chennai", "Mysore", "Kochi", "Madurai"],
        duration: "Round Trip",
        price: "₹5,999",
        image: "/images/kerala.jpg",
        description: "Complete round trip transfer package with flexible scheduling and 24/7 availability"
      },
      {
        id: "pondicherry-bliss",
        name: "Local Sightseeing Transfer",
        locations: "Ooty, Coonoor, Kotagiri, Pykara, Avalanche",
        locationsList: ["Ooty Lake", "Botanical Garden", "Doddabetta", "Pykara Falls", "Rose Garden", "Tea Factory"],
        duration: "Full Day",
        price: "₹1,499",
        image: "/images/pondicherry.jpg",
        description: "Full day local sightseeing with comfortable vehicle and knowledgeable driver guide"
      },
      {
        id: "lakshadweep-dream",
        name: "Multi-Day Package Transfer",
        locations: "Complete tour coverage with transfers",
        locationsList: ["All Ooty Attractions", "Coonoor Points", "Kotagiri", "Pykara", "Mudumalai", "Bandipur"],
        duration: "Multi-Day",
        price: "₹8,999",
        image: "/images/lakshadweep.jpg",
        description: "Complete multi-day package with dedicated vehicle, driver, and all transfers included"
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
    packages: [
      {
        id: "jim-corbett",
        name: "Full Toy Train Experience",
        locations: "Mettupalayam to Ooty via Coonoor",
        locationsList: ["Mettupalayam", "Kallar", "Adderly", "Hillgrove", "Coonoor", "Wellington", "Ooty"],
        duration: "Full Day",
        price: "₹1,999",
        image: "/images/corbett.jpg",
        description: "Complete UNESCO World Heritage toy train journey from Mettupalayam to Ooty through 16 tunnels and 250 bridges"
      },
      {
        id: "ranthambore",
        name: "Ooty to Coonoor Train",
        locations: "Ooty to Coonoor scenic route",
        locationsList: ["Ooty Station", "Lovedale", "Wellington", "Coonoor Station"],
        duration: "Half Day",
        price: "₹999",
        image: "/images/ranthambore.jpg",
        description: "Short scenic journey from Ooty to Coonoor with stunning valley views and tea garden landscapes"
      },
      {
        id: "kaziranga",
        name: "First Class Experience",
        locations: "Premium toy train journey",
        locationsList: ["Reserved First Class", "Window Seats", "Scenic Views", "Photo Stops"],
        duration: "Full Day",
        price: "₹2,999",
        image: "/images/kaziranga.jpg",
        description: "Travel in comfort with first-class reserved seating, guaranteed window views, and premium service"
      },
      {
        id: "bandipur",
        name: "Toy Train with Sightseeing",
        locations: "Train ride plus local attractions",
        locationsList: ["Toy Train", "Botanical Garden", "Rose Garden", "Ooty Lake", "Doddabetta"],
        duration: "Full Day",
        price: "₹3,499",
        image: "/images/bandipur.jpg",
        description: "Combine the toy train experience with guided sightseeing of Ooty's major attractions"
      },
      {
        id: "gir-safari",
        name: "Sunset Train Special",
        locations: "Evening train ride with sunset views",
        locationsList: ["Evening Departure", "Sunset Views", "Tea Gardens", "Valley Panorama"],
        duration: "Evening",
        price: "₹1,499",
        image: "/images/gir.jpg",
        description: "Special evening train ride timing to catch the magical sunset over the Nilgiri hills"
      }
    ]
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
    duration: "10 Days / 9 Nights",
    price: "₹55,999",
    image: "/images/kashmir.jpg",
    description: "Complete road trip from Ooty to Bangalore via Mysore, Coorg with multiple sightseeing stops"
  },
  {
    id: "northeast-explorer",
    name: "Ooty to Kerala",
    duration: "14 Days / 13 Nights",
    price: "₹72,999",
    image: "/images/northeast.jpg",
    description: "Epic journey from Ooty to Kerala covering Munnar, Thekkady, Alleppey backwaters and beaches"
  },
  {
    id: "south-india-grand",
    name: "Ooty to Coimbatore",
    duration: "12 Days / 11 Nights",
    price: "₹48,999",
    image: "/images/southindia.jpg",
    description: "Scenic route from Ooty to Coimbatore with all major attractions and comfortable transfers"
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
  }
];
