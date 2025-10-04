import { X } from 'lucide-react';

interface TripGalleryProps {
  destination: string;
  image: string;
  onClose: () => void;
}

const galleryImages: Record<string, string[]> = {
  'Japan': [
    '/6E743E29-EADF-4994-9850-CFB4E2D9F5E1.JPG',
    '/74EF340C-7423-4E0D-916E-B966577870B0.JPG',
    '/C575A675-F3FD-4AEC-A24E-43CA0AFC1F21.JPG',
    '/2D99A38E-FC80-4637-83D0-464C59A25274.JPG',
    '/E02761DC-FFB9-4D59-B173-81CF1D7A49FC.JPG',
  ],
};

const TripGallery = ({ destination, image, onClose }: TripGalleryProps) => {
  const images = galleryImages[destination] || [image];

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
