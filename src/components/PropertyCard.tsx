import { Link } from "react-router-dom";
import { MapPin, Bed, Bath, Maximize } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Property } from "@/data/properties";

const PropertyCard = ({ property }: { property: Property }) => {
  const statusColor = property.status === "Sold" 
    ? "bg-destructive text-destructive-foreground" 
    : property.status === "Under Negotiation" 
    ? "bg-accent text-accent-foreground" 
    : "bg-primary text-primary-foreground";

  return (
    <Link to={`/properties/${property.id}`} className="group block">
      <div className="bg-card rounded-lg overflow-hidden border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-shadow duration-300">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <Badge className={`absolute top-3 left-3 ${statusColor} text-xs font-medium`}>
            {property.status}
          </Badge>
          <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm rounded px-2 py-1">
            <span className="text-xs font-medium text-card-foreground">{property.type}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="font-display text-xl font-bold text-primary mb-1">{property.price}</p>
          <h3 className="font-display text-base font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
            {property.title}
          </h3>
          <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
            <MapPin className="h-3.5 w-3.5" />
            {property.location}
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-3">
            {property.bedrooms && (
              <span className="flex items-center gap-1"><Bed className="h-4 w-4" /> {property.bedrooms} Beds</span>
            )}
            {property.bathrooms && (
              <span className="flex items-center gap-1"><Bath className="h-4 w-4" /> {property.bathrooms} Baths</span>
            )}
            <span className="flex items-center gap-1"><Maximize className="h-4 w-4" /> {property.area}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
