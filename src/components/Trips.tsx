import { useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import TripGallery from './TripGallery';

interface Trip {
  id: number;
  destination: string;
  years: number[];
  image: string;
  description: string;
  highlights: string[];
}

const trips: Trip[] = [
  {
    id: 1,
    destination: 'Japan',
    years: [2025],
    image: 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'An unforgettable journey through ancient temples and modern cities',
    highlights: ['Tokyo', 'Yokohama', 'Kyoto', 'Uji', 'Nara', 'Osaka', 'Kobe', 'Okayama', 'Hiroshima'],
  },
  {
    id: 2,
    destination: 'Italy',
    years: [2025],
    image: 'https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Renaissance art, incredible cuisine, and timeless beauty',
    highlights: ['Florence', 'Rome', 'Positano', 'Amalfi'],
  },
  {
    id: 3,
    destination: 'Seoul',
    years: [2025],
    image: 'https://images.pexels.com/photos/237211/pexels-photo-237211.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Where tradition meets cutting-edge technology',
    highlights: ['Myeongdong', 'DMZ', 'Namsan'],
  },
  {
    id: 4,
    destination: 'Philippines',
    years: [2025],
    image: 'https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Tropical paradise with pristine beaches and vibrant culture',
    highlights: ['Boracay', 'Cebu', 'El Nido', 'Manila'],
  },
  {
    id: 5,
    destination: 'Maine',
    years: [2025],
    image: 'https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Rugged coastlines and charming coastal towns',
    highlights: ['Cape Elizabeth', 'Old Orchard Beach', 'Portland'],
  },
  {
    id: 6,
    destination: 'Boston',
    years: [2025],
    image: 'https://images.pexels.com/photos/24047376/pexels-photo-24047376.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Rich history and vibrant modern culture',
    highlights: ['Harvard', 'Fenway Park', 'Boston Public Garden'],
  },
  {
    id: 7,
    destination: 'Montreal',
    years: [2025],
    image: 'https://images.pexels.com/photos/1119413/pexels-photo-1119413.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'A beautiful blend of European charm and North American vibrancy',
    highlights: ['Mont Royal', 'Little Italy', 'Old Montreal'],
  },
  {
    id: 8,
    destination: 'Punta Cana',
    years: [2025],
    image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Caribbean paradise with white sand beaches and turquoise waters',
    highlights: ['Beaches', 'Resorts', 'Water Sports'],
  },
  {
    id: 9,
    destination: 'New York',
    years: [2019, 2023, 2025],
    image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'The city that never sleeps - visited across multiple years',
    highlights: ['Brooklyn', 'Manhattan'],
  },
  {
    id: 10,
    destination: 'Portugal',
    years: [2024],
    image: 'https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Charming streets, coastal views, and warm hospitality',
    highlights: ['Porto', 'Nazare', 'Peniche', 'Albufeira', 'Portimao', 'Lagos', 'Lisbon'],
  },
  {
    id: 11,
    destination: 'Amsterdam',
    years: [2024],
    image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Picturesque canals, historic architecture, and cycling culture',
    highlights: ['Canals', 'Museums', 'Cycling'],
  },
  {
    id: 12,
    destination: 'British Columbia',
    years: [2023],
    image: 'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Breathtaking landscapes and outdoor adventures',
    highlights: ['Tofino', 'Vancouver', 'Victoria'],
  },
  {
    id: 13,
    destination: 'Hawaii',
    years: [2022],
    image: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Island paradise with volcanic landscapes and aloha spirit',
    highlights: ['Oahu', 'Maui', 'Hana', 'Haleakala'],
  },
];

const Trips = () => {
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [selectedTrip, setSelectedTrip] = useState<string | null>(null);

  const allYears = Array.from(
    new Set(trips.flatMap((trip) => trip.years))
  ).sort((a, b) => b - a);

  const filteredTrips =
    selectedYear === 'all'
      ? trips
      : trips.filter((trip) => trip.years.includes(selectedYear));

  const formatYears = (years: number[]) => {
    if (years.length === 1) return years[0].toString();
    if (years.length === 2) return years.join(', ');
    if (years.length === 3) return `${years[0]}, ${years[1]}, ${years[2]}`;
    return years.join(', ');
  };

  return (
    <>
      <section id="trips" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Travels</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A collection of adventures from around the globe. Each destination has left an
              indelible mark on my journey.
            </p>
          </div>

          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            <button
              onClick={() => setSelectedYear('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedYear === 'all'
                  ? 'bg-slate-900 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-slate-100'
              }`}
            >
              All Years
            </button>
            {allYears.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedYear === year
                    ? 'bg-slate-900 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-slate-100'
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTrips.map((trip) => (
              <button
                key={trip.id}
                onClick={() => setSelectedTrip(trip.destination)}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-left cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={trip.image}
                    alt={trip.destination}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                    <Calendar size={14} className="text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">
                      {formatYears(trip.years)}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Gallery
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <MapPin size={20} className="text-slate-600" />
                    {trip.destination}
                  </h3>
                  <p className="text-gray-600 mb-4">{trip.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {trip.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="text-xs px-3 py-1 bg-slate-100 text-slate-700 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedTrip && (
        <TripGallery
          destination={selectedTrip}
          onClose={() => setSelectedTrip(null)}
        />
      )}
    </>
  );
};

export default Trips;
