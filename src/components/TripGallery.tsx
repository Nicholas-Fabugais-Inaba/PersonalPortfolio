import { X } from 'lucide-react';

interface TripGalleryProps {
  destination: string;
  galleryFolder: string;
  image: string;
  onClose: () => void;
}

// Dynamically import all gallery images from public folder using Vite's glob
const globImages = import.meta.glob<{ default: string }>(
  '/public/*/[!.]*.{jpg,jpeg,png}',
  { eager: true }
);

// Build gallery object from glob results
const buildGalleryImages = () => {
  const galleries: Record<string, string[]> = {};

  // Sort paths to ensure consistent ordering
  const sortedEntries = Object.entries(globImages).sort(([pathA], [pathB]) =>
    pathA.localeCompare(pathB)
  );

  sortedEntries.forEach(([path, module]) => {
    const folderName = path.split('/')[2]; // Extract destination folder name
    if (!galleries[folderName]) galleries[folderName] = [];
    galleries[folderName].push(module.default);
  });

  return galleries;
};

const galleryImages = buildGalleryImages();

const TripGallery = ({ destination, galleryFolder, image, onClose }: TripGalleryProps) => {
  const images = galleryImages[galleryFolder] || [image];

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-3xl font-bold text-gray-900">{destination} Gallery</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close gallery"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((img, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
                <img
                  src={img}
                  alt={`${destination} ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripGallery;
