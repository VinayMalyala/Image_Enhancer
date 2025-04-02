import axios from 'axios'; 

const API_KEY = import.meta.env.REACT_APP_API_KEY;


const BASE_URL = "https://techhk.aoscdn.com/";
const MAXIMUM_RETRIES = 20;


export const enhancedImageAPI = async (file) => {
    try {
        const taskId = await uploadImage(file);
        console.log('Image uploaded successfully, TaskId:', taskId);
        
        
        const enhancedImageData = await PollForEnhancedImage(taskId);
        console.log('Enhanced image data:', enhancedImageData);
        return enhancedImageData;
    } catch (error) {
        console.log('Error enhancing image:', error.message);
        
    }
};

const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('image_file', file);
    
    const {data} = await axios.post(
        `${BASE_URL}/api/tasks/visual/scale`,
         formData, 
         {
            headers: {
                "Content-Type": "multipart/form-data",
                "X-API-KEY": API_KEY,
            },
        });
        
        if (!data?.data?.task_id) {
            throw new Error('Failed to upload image! Task ID not found.');
        }
        return data.data.task_id;
        
};




const fetchEnhancedImage = async (taskId) => {
    //* fetch enhanced image
    // /api/tasks/visual/scale/{task_id}
};