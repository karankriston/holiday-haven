export interface TourPackage {
  id: string;
  name: string;
  locations: string;
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
    name: "Hill Stations",
    description: "Escape to the misty mountains and serene valleys",
    image: "/images/hill-station.jpg",
    icon: "⛰️",
    packages: [
      {
        id: "ooty-delight",
        name: "Ooty Delight Tour",
        locations: "Ooty, Coonoor, Kotagiri, Wellington, Ketti, Lovedale, Doddabetta",
        duration: "4 Days / 3 Nights",
        price: "₹12,999",
        image: "/images/ooty.jpg",
        description: "Experience the Queen of Hill Stations with tea gardens and botanical wonders"
      },
      {
        id: "kodaikanal-escape",
        name: "Kodaikanal Escape",
        locations: "Kodaikanal, Palani, Berijam, Mannavanur, Vattakanal, Dolphin's Nose, Pillar Rocks",
        duration: "3 Days / 2 Nights",
        price: "₹9,999",
        image: "/images/kodaikanal.jpg",
        description: "Discover the Princess of Hill Stations with pristine lakes and forests"
      },
      {
        id: "munnar-magic",
        name: "Munnar Magic",
        locations: "Munnar, Devikulam, Mattupetty, Top Station, Echo Point, Eravikulam, Anamudi",
        duration: "5 Days / 4 Nights",
        price: "₹15,999",
        image: "/images/munnar.jpg",
        description: "Immerse in the emerald tea plantations of God's Own Country"
      },
      {
        id: "coorg-adventure",
        name: "Coorg Coffee Trail",
        locations: "Coorg, Madikeri, Abbey Falls, Raja's Seat, Talacauvery, Bylakuppe, Nagarhole",
        duration: "4 Days / 3 Nights",
        price: "₹13,499",
        image: "/images/coorg.jpg",
        description: "Explore the Scotland of India with coffee estates and misty hills"
      },
      {
        id: "shimla-manali",
        name: "Shimla Manali Special",
        locations: "Shimla, Manali, Kullu, Solang, Rohtang, Mall Road, Hidimba Temple",
        duration: "6 Days / 5 Nights",
        price: "₹22,999",
        image: "/images/shimla.jpg",
        description: "The ultimate Himalayan adventure with snow-capped peaks"
      }
    ]
  },
  {
    id: "beaches",
    name: "Beach Getaways",
    description: "Sun, sand, and pristine coastal paradise",
    image: "/images/beach.jpg",
    icon: "🏖️",
    packages: [
      {
        id: "goa-carnival",
        name: "Goa Carnival",
        locations: "Baga, Calangute, Anjuna, Panjim, Old Goa, Dudhsagar, Chapora Fort",
        duration: "4 Days / 3 Nights",
        price: "₹14,999",
        image: "/images/goa.jpg",
        description: "Experience the vibrant nightlife and stunning beaches of Goa"
      },
      {
        id: "andaman-paradise",
        name: "Andaman Paradise",
        locations: "Port Blair, Havelock, Neil Island, Radhanagar, Cellular Jail, Ross Island, Baratang",
        duration: "6 Days / 5 Nights",
        price: "₹28,999",
        image: "/images/andaman.jpg",
        description: "Crystal clear waters and untouched coral reefs await"
      },
      {
        id: "kerala-backwaters",
        name: "Kerala Backwaters",
        locations: "Alleppey, Kumarakom, Kochi, Kovalam, Varkala, Marari, Cherai",
        duration: "5 Days / 4 Nights",
        price: "₹18,999",
        image: "/images/kerala.jpg",
        description: "Cruise through tranquil backwaters on traditional houseboats"
      },
      {
        id: "pondicherry-bliss",
        name: "Pondicherry Bliss",
        locations: "Pondicherry, Auroville, Paradise Beach, Serenity Beach, Promenade, Chunnambar, Mahe",
        duration: "3 Days / 2 Nights",
        price: "₹8,999",
        image: "/images/pondicherry.jpg",
        description: "French colonial charm meets pristine beaches"
      },
      {
        id: "lakshadweep-dream",
        name: "Lakshadweep Dream",
        locations: "Kavaratti, Agatti, Bangaram, Kadmat, Kalpeni, Minicoy, Thinnakara",
        duration: "5 Days / 4 Nights",
        price: "₹35,999",
        image: "/images/lakshadweep.jpg",
        description: "India's hidden coral paradise with turquoise lagoons"
      }
    ]
  },
  {
    id: "heritage",
    name: "Heritage Tours",
    description: "Journey through India's glorious past",
    image: "/images/heritage.jpg",
    icon: "🏛️",
    packages: [
      {
        id: "rajasthan-royal",
        name: "Royal Rajasthan",
        locations: "Jaipur, Udaipur, Jodhpur, Jaisalmer, Pushkar, Bikaner, Mount Abu",
        duration: "7 Days / 6 Nights",
        price: "₹32,999",
        image: "/images/rajasthan.jpg",
        description: "Live like royalty in magnificent palaces and forts"
      },
      {
        id: "golden-triangle",
        name: "Golden Triangle",
        locations: "Delhi, Agra, Jaipur, Fatehpur Sikri, Mathura, Vrindavan, Bharatpur",
        duration: "5 Days / 4 Nights",
        price: "₹19,999",
        image: "/images/agra.jpg",
        description: "The iconic trio featuring the majestic Taj Mahal"
      },
      {
        id: "hampi-heritage",
        name: "Hampi Heritage",
        locations: "Hampi, Hospet, Badami, Aihole, Pattadakal, Anegundi, Tungabhadra",
        duration: "4 Days / 3 Nights",
        price: "₹12,999",
        image: "/images/hampi.jpg",
        description: "Explore the ruins of the mighty Vijayanagara Empire"
      },
      {
        id: "varanasi-spiritual",
        name: "Varanasi Spiritual",
        locations: "Varanasi, Sarnath, Allahabad, Bodh Gaya, Kushinagar, Nalanda, Rajgir",
        duration: "5 Days / 4 Nights",
        price: "₹16,999",
        image: "/images/varanasi.jpg",
        description: "Experience the spiritual heart of India"
      },
      {
        id: "south-temple",
        name: "South Temple Trail",
        locations: "Madurai, Thanjavur, Trichy, Rameswaram, Kanyakumari, Mahabalipuram, Chidambaram",
        duration: "6 Days / 5 Nights",
        price: "₹21,999",
        image: "/images/madurai.jpg",
        description: "Marvel at the architectural grandeur of Dravidian temples"
      }
    ]
  },
  {
    id: "wildlife",
    name: "Wildlife Safari",
    description: "Encounter majestic creatures in their habitat",
    image: "/images/wildlife.jpg",
    icon: "🦁",
    packages: [
      {
        id: "jim-corbett",
        name: "Jim Corbett Adventure",
        locations: "Jim Corbett, Nainital, Ramnagar, Dhikala, Bijrani, Jhirna, Dhela",
        duration: "4 Days / 3 Nights",
        price: "₹18,999",
        image: "/images/corbett.jpg",
        description: "Track the majestic Royal Bengal Tiger in its natural habitat"
      },
      {
        id: "ranthambore",
        name: "Ranthambore Safari",
        locations: "Ranthambore, Sawai Madhopur, Jaipur, Keoladeo, Bundi, Chittorgarh, Tonk",
        duration: "4 Days / 3 Nights",
        price: "₹17,499",
        image: "/images/ranthambore.jpg",
        description: "Witness tigers roaming amidst ancient ruins"
      },
      {
        id: "kaziranga",
        name: "Kaziranga Expedition",
        locations: "Kaziranga, Guwahati, Shillong, Cherrapunji, Mawlynnong, Majuli, Tezpur",
        duration: "6 Days / 5 Nights",
        price: "₹26,999",
        image: "/images/kaziranga.jpg",
        description: "Home to the one-horned rhinoceros and diverse wildlife"
      },
      {
        id: "bandipur",
        name: "Bandipur Wild Trail",
        locations: "Bandipur, Mudumalai, Nagarhole, Ooty, Wayanad, Mysore, Kabini",
        duration: "5 Days / 4 Nights",
        price: "₹19,999",
        image: "/images/bandipur.jpg",
        description: "Explore the lush forests of the Western Ghats"
      },
      {
        id: "gir-safari",
        name: "Gir Lion Safari",
        locations: "Gir Forest, Junagadh, Somnath, Diu, Sasangir, Jamjir, Kankai",
        duration: "4 Days / 3 Nights",
        price: "₹20,999",
        image: "/images/gir.jpg",
        description: "The last refuge of the Asiatic Lion"
      }
    ]
  },
  {
    id: "adventure",
    name: "Adventure Tours",
    description: "Thrilling experiences for the bold explorer",
    image: "/images/adventure.jpg",
    icon: "🏔️",
    packages: [
      {
        id: "ladakh-expedition",
        name: "Ladakh Expedition",
        locations: "Leh, Nubra Valley, Pangong, Khardung La, Tso Moriri, Zanskar, Hemis",
        duration: "7 Days / 6 Nights",
        price: "₹38,999",
        image: "/images/ladakh.jpg",
        description: "Conquer the highest motorable roads in the world"
      },
      {
        id: "rishikesh-thrill",
        name: "Rishikesh Adventure",
        locations: "Rishikesh, Haridwar, Shivpuri, Kaudiyala, Neelkanth, Lakshman Jhula, Triveni Ghat",
        duration: "3 Days / 2 Nights",
        price: "₹11,999",
        image: "/images/rishikesh.jpg",
        description: "River rafting, bungee jumping, and spiritual awakening"
      },
      {
        id: "spiti-valley",
        name: "Spiti Valley Quest",
        locations: "Spiti, Kaza, Key Monastery, Chandratal, Kunzum Pass, Tabo, Pin Valley",
        duration: "8 Days / 7 Nights",
        price: "₹42,999",
        image: "/images/spiti.jpg",
        description: "The middle land between India and Tibet"
      },
      {
        id: "meghalaya-caves",
        name: "Meghalaya Exploration",
        locations: "Shillong, Cherrapunji, Dawki, Mawlynnong, Living Root Bridges, Mawsmai Caves, Nongriat",
        duration: "5 Days / 4 Nights",
        price: "₹23,999",
        image: "/images/meghalaya.jpg",
        description: "Living root bridges and the wettest place on Earth"
      },
      {
        id: "sikkim-adventure",
        name: "Sikkim Adventure",
        locations: "Gangtok, Pelling, Lachung, Yumthang, Nathula Pass, Tsomgo Lake, Ravangla",
        duration: "6 Days / 5 Nights",
        price: "₹29,999",
        image: "/images/sikkim.jpg",
        description: "Himalayan adventure with stunning monastery visits"
      }
    ]
  },
  {
    id: "pilgrimage",
    name: "Pilgrimage",
    description: "Sacred journeys for the soul",
    image: "/images/pilgrimage.jpg",
    icon: "🙏",
    packages: [
      {
        id: "char-dham",
        name: "Char Dham Yatra",
        locations: "Yamunotri, Gangotri, Kedarnath, Badrinath, Haridwar, Rishikesh, Uttarkashi",
        duration: "10 Days / 9 Nights",
        price: "₹45,999",
        image: "/images/chardham.jpg",
        description: "The sacred four abodes in the Himalayas"
      },
      {
        id: "vaishno-devi",
        name: "Vaishno Devi Darshan",
        locations: "Katra, Vaishno Devi, Jammu, Patnitop, Shiv Khori, Baba Dhansar, Purmandal",
        duration: "4 Days / 3 Nights",
        price: "₹12,999",
        image: "/images/vaishnodevi.jpg",
        description: "Trek to the divine cave shrine of Mata Vaishno Devi"
      },
      {
        id: "tirupati-darshan",
        name: "Tirupati Darshan",
        locations: "Tirupati, Tirumala, Chennai, Mahabalipuram, Kanchipuram, Srikalahasti, Kanipakam",
        duration: "3 Days / 2 Nights",
        price: "₹9,999",
        image: "/images/tirupati.jpg",
        description: "Seek blessings at the richest temple in the world"
      },
      {
        id: "amarnath-yatra",
        name: "Amarnath Yatra",
        locations: "Pahalgam, Amarnath Cave, Srinagar, Gulmarg, Sonmarg, Chandanwari, Baltal",
        duration: "5 Days / 4 Nights",
        price: "₹28,999",
        image: "/images/amarnath.jpg",
        description: "Witness the miraculous ice Shivling"
      },
      {
        id: "south-jyotirlinga",
        name: "South Jyotirlinga Tour",
        locations: "Rameshwaram, Kanyakumari, Madurai, Srirangam, Thanjavur, Chidambaram, Velankanni",
        duration: "6 Days / 5 Nights",
        price: "₹24,999",
        image: "/images/rameshwaram.jpg",
        description: "Visit the sacred Jyotirlinga and Dhanushkodi"
      }
    ]
  }
];

export const longTrips = [
  {
    id: "kashmir-complete",
    name: "Complete Kashmir Experience",
    duration: "10 Days / 9 Nights",
    price: "₹55,999",
    image: "/images/kashmir.jpg",
    description: "Srinagar, Gulmarg, Pahalgam, Sonmarg - The complete paradise experience with houseboat stay"
  },
  {
    id: "northeast-explorer",
    name: "Northeast Explorer",
    duration: "14 Days / 13 Nights",
    price: "₹72,999",
    image: "/images/northeast.jpg",
    description: "Seven Sisters adventure - Assam, Meghalaya, Arunachal Pradesh, Nagaland"
  },
  {
    id: "south-india-grand",
    name: "Grand South India",
    duration: "12 Days / 11 Nights",
    price: "₹48,999",
    image: "/images/southindia.jpg",
    description: "Kerala, Tamil Nadu, Karnataka - Complete cultural and natural heritage tour"
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
    comment: "The Ladakh expedition was a dream come true. The breathtaking landscapes and professional organization made it an unforgettable adventure. Will definitely book again!",
    avatar: "RK",
    trip: "Ladakh Expedition"
  },
  {
    id: 3,
    name: "Anita Desai",
    location: "Bangalore",
    rating: 5,
    comment: "Kerala backwaters tour exceeded all expectations. The houseboat experience was serene and the food was incredible. Perfect family vacation!",
    avatar: "AD",
    trip: "Kerala Backwaters"
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Jaipur",
    rating: 5,
    comment: "The wildlife safari at Jim Corbett was thrilling! Spotted a tiger on our second day. The guides were knowledgeable and the jungle lodge was comfortable.",
    avatar: "VS",
    trip: "Jim Corbett Adventure"
  },
  {
    id: 5,
    name: "Meera Patel",
    location: "Ahmedabad",
    rating: 5,
    comment: "Char Dham Yatra was a spiritually enriching experience. Every detail was taken care of, making the difficult journey smooth and memorable.",
    avatar: "MP",
    trip: "Char Dham Yatra"
  }
];
