import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import { useState } from 'react'

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadImageHandler = (file) => {
    setUploadImage(URL.createObjectURL(file));
    setLoading(true); 

    //* call the API to enhance the image
    
  };

  return (
    <div>
        <ImageUpload uploadImageHandler={uploadImageHandler} />
        <ImagePreview loading={loading} uploaded={uploadImage} enhanced={enhancedImage} />
    </div>
  )
}

export default Home