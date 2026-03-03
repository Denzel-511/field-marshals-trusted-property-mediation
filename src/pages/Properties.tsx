import { useState, useMemo } from "react";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Properties = () => {
  const [typeFilter, setTypeFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");

  const locations = useMemo(() => [...new Set(properties.map(p => p.location))], []);
  const types = useMemo(() => [...new Set(properties.map(p => p.type))], []);

  const filtered = useMemo(() => {
    return properties.filter(p => {
      if (typeFilter !== "all" && p.type !== typeFilter) return false;
      if (locationFilter !== "all" && p.location !== locationFilter) return false;
      return true;
    });
  }, [typeFilter, locationFilter]);

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-primary pt-32 pb-20">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2">Browse</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Our Properties</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            Explore available properties across Ghana. Filter by type or location to find exactly what you need.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-background border-b border-border">
        <div className="container-wide px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {types.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
              </SelectContent>
            </Select>
            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger className="w-full sm:w-64">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                {locations.map(l => <SelectItem key={l} value={l}>{l}</SelectItem>)}
              </SelectContent>
            </Select>
            <div className="flex items-center text-sm text-muted-foreground ml-auto">
              {filtered.length} {filtered.length === 1 ? "property" : "properties"} found
            </div>
          </div>
        </div>
      </section>

      {/* Listings */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No properties match your filters.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Properties;
