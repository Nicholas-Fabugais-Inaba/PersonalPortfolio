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
  'Philippines': [
    '/philippines-gallery/1BB5B73D-3B25-4EA6-8971-FD4C604BD89A_1_102_o.jpeg',
    '/philippines-gallery/39725F80-8673-4B40-8CFB-D67486B05055.JPG',
    '/philippines-gallery/6F20C516-FCA8-45FE-B884-CCB9EE1B0AAD_1_201_a.jpeg',
    '/philippines-gallery/9FE0E8D0-3BE4-4BC7-B8FA-5A6E080C26D4_1_105_c.jpeg',
    '/philippines-gallery/B6A05F3A-48A3-442C-811A-9A8C98415858_1_201_a.jpeg',
  ],
  'Maine': [
    '/maine-gallery/663C9B14-626A-4D6F-BCC3-CB80B1A0875B_1_105_c.jpeg',
    '/maine-gallery/12649CF4-499F-467C-A832-536962898AF1_1_105_c.jpeg',
    '/maine-gallery/116D765C-6167-4174-A553-D0694E05D97A_1_105_c.jpeg',
    '/maine-gallery/C831CAB3-B18A-42F6-97E4-8481AB384095_1_105_c.jpeg',
  ],
  'Boston': [
    '/boston-gallery/326DBE77-879D-4CFC-8491-26D513698F04_1_105_c.jpeg',
    '/boston-gallery/BF8880DD-A683-4B5B-9AEC-13408AEEB8CB_1_105_c.jpeg',
    '/boston-gallery/C548F8B1-0954-4DD0-89A0-8D273DA78367_1_105_c.jpeg',
    '/boston-gallery/5141BB41-4AF4-42BB-9F2A-28C292C7241C_4_5005_c.jpeg',
    '/boston-gallery/2CB6F4FC-7815-45B0-9B38-CC1BD3678ACB_1_105_c.jpeg',
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
