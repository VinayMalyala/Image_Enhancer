import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import { useState } from 'react'
import {enhancedImageAPI} from "../utils/enhanceImageApi"

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadImageHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file));
    setLoading(true); 

    try {
      const enhancedURL = await enhancedImageAPI(file);
      setEnhancedImage(enhancedURL);
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert("Error while enhancing image. Please try again.");
      
    }
    
  };

  return (
    <>
        <ImageUpload uploadImageHandler={uploadImageHandler} />
        <ImagePreview loading={loading} uploaded={uploadImage} enhanced={enhancedImage?.image} />
    </>
  )
}

export default Home