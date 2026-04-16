export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  type: "House" | "Land" | "Apartment" | "Townhouse";
  bedrooms?: number;
  bathrooms?: number;
  area: string;
  image: string;
  description: string;
  features: string[];
  status: "Available" | "Sold" | "Under Negotiation";
  images: string[];
}

export const properties: Property[] = [
  {
    id: "2",
    title: "Prime Residential Plot",
    location: "Tema Community 25",
    price: "",
    type: "Land",
    area: "1.2 Acres",
    image: "/images/property-2.jpg",
    description: "A prime residential plot located in the rapidly developing Tema Community 25 area. This land is ideal for residential development, with access to major roads, utilities, and amenities. Title deed is clean and verified.",
    features: ["Fenced", "Road Access", "Electricity Nearby", "Water Access", "Clean Title"],
    status: "Available",
    images: ["/images/property-2.jpg"],
  },
  {
    id: "5",
    title: "6-Bedroom Two-Storey Residence",
    location: "Oyibi, Accra",
    price: "",
    type: "House",
    bedrooms: 6,
    bathrooms: 8,
    area: "5,500 sq ft",
    image: "/images/property-5a.jpg",
    description: "A magnificent two-storey, six-bedroom house with all bedrooms en-suite. The property features three balconies, two kitchens (one on each floor) with dedicated kitchen storage, and two visitors' washrooms on each floor. Secured with an electronic fence and electronic gate, parking space for three SUVs, and two poly water storage tanks. Located in Oyibi, just 20 minutes walk from Valley View University.",
    features: ["All En-suite Bedrooms", "3 Balconies", "2 Kitchens", "Electronic Fence & Gate", "3-SUV Parking", "2 Poly Water Tanks", "Visitors' Washrooms", "Kitchen Storage"],
    status: "Available",
    images: ["/images/property-5a.jpg", "/images/property-5b.jpg", "/images/property-5c.jpg", "/images/property-5d.jpg"],
  },
  {
    id: "6",
    title: "5-Bedroom House with Cenim Hall",
    location: "Tema Community 25",
    price: "",
    type: "House",
    bedrooms: 5,
    bathrooms: 5,
    area: "4,800 sq ft",
    image: "/images/property-6a.jpg",
    description: "A stunning five-bedroom house located in Tema Community 25, featuring a Cenim Hall — perfect for entertaining and events. The property boasts a swimming pool, thatched gazebo, landscaped gardens, and ample outdoor space. A truly unique residence combining comfort with entertainment.",
    features: ["Cenim Hall", "Swimming Pool", "Thatched Gazebo", "Landscaped Garden", "Spacious Compound", "Parking Space"],
    status: "Available",
    images: ["/images/property-6a.jpg", "/images/property-6b.jpg", "/images/property-6c.jpg", "/images/property-6d.jpg"],
  },
];
