import { useState } from 'react';
import { X, Upload } from 'lucide-react';

interface TripGalleryProps {
  destination: string;
  onClose: () => void;
}

const TripGallery = ({ destination, onClose }: TripGalleryProps) => {
  const [, setSelectedFile] = useState<File | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-6">
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
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center mb-6 hover:border-slate-500 transition-colors">
            <Upload className="mx-auto mb-4 text-gray-400" size={48} />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Upload Your Photos & Videos</h3>
            <p className="text-gray-500 mb-4">
              Click to browse or drag and drop your travel memories here
            </p>
            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleFileUpload}
              className="hidden"
              id={`file-upload-${destination}`}
              multiple
            />
            <label
              htmlFor={`file-upload-${destination}`}
              className="inline-block px-6 py-3 bg-slate-900 text-white rounded-lg cursor-pointer hover:bg-slate-800 transition-colors"
            >
              Choose Files
            </label>
          </div>

          <div className="text-center text-gray-500 py-8">
            <p className="text-lg">
              Upload your photos and videos to create your {destination} gallery
            </p>
            <p className="text-sm mt-2">
              To upload photos permanently, add them to the <code className="bg-gray-100 px-2 py-1 rounded">/public</code> folder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripGallery;
