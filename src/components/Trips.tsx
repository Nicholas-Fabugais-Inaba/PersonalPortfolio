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
    image: '/D485C125-2EA2-49CF-95A4-40072F916F1A.JPG',
    description: 'Visiting my first country in Asia with amazing food, culture, and history',
    highlights: ['Tokyo', 'Yokohama', 'Kyoto', 'Uji', 'Nara', 'Osaka', 'Kobe', 'Okayama', 'Hiroshima'],
  },
  {
    id: 2,
    destination: 'Italy',
    years: [2025],
    image: '/5F1A7896-D3DE-4105-AFD1-8BEF259F100C_4_5005_c.jpeg',
    description: 'Incredible food, driving along the Amalfi coast, and watching Pope Leo XIV elected in person',
    highlights: ['Florence', 'Rome', 'Vatican City', 'Positano', 'Amalfi'],
  },
  {
    id: 3,
    destination: 'Seoul',
    years: [2025],
    image: '/54F90B1A-90E6-4A13-9B59-DC737A9546CD_1_201_a.jpeg',
    description: 'Roamed the streets of Myeongdong, learnt about the Korean war on the DMZ tour, and experienced a spa treatment',
    highlights: ['Myeongdong', 'DMZ', 'Namsan'],
  },
  {
    id: 4,
    destination: 'Philippines',
    years: [2025],
    image: '/4B9369B3-0E09-4461-B56D-E57B3235453C_1_201_a.jpeg',
    description: 'Island hopping in El Nido and swimming with whale sharks, sea turtles, and sardines in Oslob',
    highlights: ['Boracay', 'Cebu', 'El Nido', 'Manila', 'Oslob'],
  },
  {
    id: 5,
    destination: 'Maine',
    years: [2025],
    image: '/35B2FD12-FD0F-4E28-9C50-84FF3B0009BE_1_105_c.jpeg',
    description: 'Solo road trip to see coastal towns and eat delicious lobster rolls',
    highlights: ['Cape Elizabeth', 'Old Orchard Beach', 'Portland'],
  },
  {
    id: 6,
    destination: 'Boston',
    years: [2025],
    image: '/6EEF0E5D-0BD5-4519-AC01-A89549036A7C_1_105_c.jpeg',
    description: 'Walked the Harvard campus, watched the Red Sox at Fenway Park, and walked around the Boston Public Garden',
    highlights: ['Harvard', 'Fenway Park', 'Boston Public Garden'],
  },
  {
    id: 7,
    destination: 'Montreal',
    years: [2025],
    image: '/D341C46D-A7A0-497E-8BF6-9F58A13A786A_1_102_a.jpeg',
    description: 'Hiked Mont Royal, walked around Old Montreal and Downtown, and went on a food tour',
    highlights: ['Mont Royal', 'Little Italy', 'Old Montreal'],
  },
  {
    id: 8,
    destination: 'Punta Cana',
    years: [2025],
    image: '/7D5058BF-D65F-4422-86C4-181C79AD86E5.JPG',
    description: 'All-inclusive vacation with friends and a full-day excursion to Scape Park',
    highlights: ['Scape Park', 'Riu Republica', 'Boat Party'],
  },
  {
    id: 9,
    destination: 'New York',
    years: [2019, 2023, 2025],
    image: '/83E6AA7D-621A-4D7D-82BD-0A8A8FB61C38_1_201_a.jpeg',
    description: 'The city that never sleeps - visiting friends and family throughout the years',
    highlights: ['Brooklyn', 'Manhattan', 'Jersey City'],
  },
  {
    id: 10,
    destination: 'Portugal',
    years: [2024],
    image: '/70524F64-83AC-468B-AF72-614BF8A5A28C_1_201_a.jpeg',
    description: 'Visited the Algarve, experienced a Port wine tour, and enjoyed beautiful beaches',
    highlights: ['Porto', 'Nazare', 'Peniche', 'Albufeira', 'Portimao', 'Lagos', 'Lisbon'],
  },
  {
    id: 11,
    destination: 'Amsterdam',
    years: [2024],
    image: '/CBB1BE6E-AB5E-4D92-BCD7-0B98C3493B2B.JPG',
    description: 'Windmills, museums, and relaxing beside the canals',
    highlights: ['Anne Frank House', 'Rijksmuseum', 'Canal Tour', 'Red Light District', 'Heineken Factory'],
  },
  {
    id: 12,
    destination: 'British Columbia',
    years: [2023],
    image: '/92881976-35EA-45F4-A648-E18B85EDCB77.JPG',
    description: 'Surfing in Tofino, breathtaking mountain landscapes, and attending my Japanese-side\'s family reunion',
    highlights: ['Tofino', 'Vancouver', 'Victoria'],
  },
  {
    id: 13,
    destination: 'Hawaii',
    years: [2022],
    image: '/1A1D095E-95E3-464B-B15A-5239CA79F94B_1_102_a.jpeg',
    description: 'Driving the Road to Hana, watching the Haleakala sunrise, and relaxed on beautiful beaches',
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
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-left cursor-pointer flex flex-col"
              >
                <div className="relative h-64 overflow-hidden flex-shrink-0">
                  <img
                    src={trip.image}
                    alt={trip.destination}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
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
          image={trips.find((t) => t.destination === selectedTrip)?.image || ''}
          onClose={() => setSelectedTrip(null)}
        />
      )}
    </>
  );
};

export default Trips;
