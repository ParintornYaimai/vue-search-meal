import axios from 'axios'

export const serviceGet =async(baseURL)=>{
    try {
        const response = await axios.get(baseURL)
        return response.data
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}