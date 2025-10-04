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
  'Italy': [
    '/373B610B-25FC-44CB-8127-43E9A585FAC1.JPG',
    '/3E06FBE0-6B6D-4096-B1DF-EDAA901C57CA.JPG',
    '/53903233-A8D1-4C4B-B222-E21DDBE00EBE_1_201_a.jpeg',
    '/3A9D9481-4B5E-4E73-99E9-A93D3BF47F1D_1_201_a.jpeg',
    '/5F1A7896-D3DE-4105-AFD1-8BEF259F100C_4_5005_c.jpeg',
  ],
  'Seoul': [
    '/seoul-gallery/D5EC211A-D7BB-407E-8934-BCA41BAB9ABD.JPG',
    '/seoul-gallery/C4BDDE17-0E8F-4E63-8BCE-88A7BD204E4E.JPG',
    '/seoul-gallery/DAF5BD08-85B7-4C1C-9EF5-62085EF3CEC4.JPG',
    '/seoul-gallery/16D9DFC9-3738-42C3-8996-B71CBFB4E340.JPG',
    '/seoul-gallery/EDB507CF-9A61-4E21-AF0E-2D3E80A976F2_1_105_c.jpeg',
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
