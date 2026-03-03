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
    id: "1",
    title: "Executive 4-Bedroom Residence",
    location: "East Legon, Accra",
    price: "GH₵ 2,500,000",
    type: "House",
    bedrooms: 4,
    bathrooms: 3,
    area: "4,200 sq ft",
    image: "/images/property-1.jpg",
    description: "A stunning executive residence in the heart of East Legon. This property features modern architecture, spacious living areas, and premium finishes throughout. The compound includes a landscaped garden, covered parking for 3 vehicles, and 24-hour security.",
    features: ["Swimming Pool", "Boys' Quarters", "Garage", "Garden", "Security Post", "Generator House"],
    status: "Available",
    images: ["/images/property-1.jpg"],
  },
  {
    id: "2",
    title: "Prime Residential Plot",
    location: "Tema Community 25",
    price: "GH₵ 450,000",
    type: "Land",
    area: "1.2 Acres",
    image: "/images/property-2.jpg",
    description: "A prime residential plot located in the rapidly developing Tema Community 25 area. This land is ideal for residential development, with access to major roads, utilities, and amenities. Title deed is clean and verified.",
    features: ["Fenced", "Road Access", "Electricity Nearby", "Water Access", "Clean Title"],
    status: "Available",
    images: ["/images/property-2.jpg"],
  },
  {
    id: "3",
    title: "4-Bedroom Detached House",
    location: "Spintex Road, Accra",
    price: "GH₵ 1,800,000",
    type: "Townhouse",
    bedrooms: 4,
    bathrooms: 4,
    area: "3,500 sq ft",
    image: "/images/property-3.jpg",
    description: "A beautifully designed detached house in a gated community on Spintex Road. Features modern interiors, a private garden, and access to community amenities including a clubhouse and swimming pool.",
    features: ["Gated Community", "Clubhouse Access", "Garden", "Fitted Kitchen", "Tiled Compound"],
    status: "Under Negotiation",
    images: ["/images/property-3.jpg"],
  },
  {
    id: "4",
    title: "Luxury 3-Bedroom Apartment",
    location: "Airport Residential, Accra",
    price: "GH₵ 3,200,000",
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 3,
    area: "2,800 sq ft",
    image: "/images/property-4.jpg",
    description: "A premium apartment in the prestigious Airport Residential Area. This unit features floor-to-ceiling windows, a modern open-plan kitchen, and panoramic city views. Building amenities include a gym, pool, and concierge service.",
    features: ["City Views", "Gym", "Concierge", "Underground Parking", "Balcony", "Smart Home"],
    status: "Available",
    images: ["/images/property-4.jpg"],
  },
];
