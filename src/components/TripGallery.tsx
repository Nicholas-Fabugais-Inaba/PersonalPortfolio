import { X } from 'lucide-react';

interface TripGalleryProps {
  destination: string;
  image: string;
  onClose: () => void;
}

const TripGallery = ({ destination, image, onClose }: TripGalleryProps) => {
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

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)] flex items-center justify-center">
          <img
            src={image}
            alt={destination}
            className="max-w-full max-h-[calc(90vh-200px)] object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default TripGallery;
