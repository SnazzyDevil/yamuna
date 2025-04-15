
import { useState } from 'react';
import { X } from 'lucide-react';

type ImageType = {
  id: number;
  src: string;
  alt: string;
  category: string;
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  const images: ImageType[] = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1580943943374-5465b06acbd5?q=80&w=2070&auto=format&fit=crop',
      alt: 'Bathroom renovation - Modern bathroom fixtures installed by Yamuna Plumbing',
      category: 'Bathroom'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1529390381374-30487ca925dd?q=80&w=2070&auto=format&fit=crop',
      alt: 'Kitchen sink and faucet installation by Yamuna Plumbing Services',
      category: 'Kitchen'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1603184548954-cba8e8a2bea9?q=80&w=2051&auto=format&fit=crop',
      alt: 'Commercial plumbing project completed for a local business',
      category: 'Commercial'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1585001633819-c28757193673?q=80&w=2070&auto=format&fit=crop',
      alt: 'Water heater installation by Yamuna Plumbing team',
      category: 'Installation'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1542319630-55fb7f7c944d?q=80&w=1935&auto=format&fit=crop',
      alt: 'Pipe repair and replacement project',
      category: 'Repair'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1603002089734-2daafa773a95?q=80&w=2073&auto=format&fit=crop',
      alt: 'Drain clearing service performed by Yamuna Plumbing',
      category: 'Maintenance'
    }
  ];

  const openLightbox = (image: ImageType) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Our Work</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Browse through our gallery to see examples of our quality workmanship across various plumbing projects in Durban.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:scale-[1.02] group"
              onClick={() => openLightbox(image)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <span className="inline-block px-3 py-1 bg-yamuna-blue text-white text-sm rounded-full mb-2">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button
              className="absolute top-4 right-4 text-white bg-black/40 rounded-full p-2 hover:bg-black/60 transition-colors"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>
            <div className="max-w-4xl max-h-[90vh]">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <p className="text-white mt-2 text-center">{selectedImage.alt}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
