import { Cloudinary } from '@cloudinary/url-gen';

// Initialize Cloudinary instance
export const cld = new Cloudinary({
  cloud: {
    cloudName: 'deiwbxqpu',
  },
});

// Configuration for uploads
export const CLOUDINARY_CONFIG = {
  cloudName: 'deiwbxqpu',
  uploadPreset: 'ml_default',
  folder: 'techember_fest',
};

// helper function for image transformation
export const getOptimizedImageUrl = (publicId) => {
  return cld
    .image(publicId)
    .resize(Resize.scale().width(500).height(500))
    .format('auto')
    .quality('auto');
};
