import axios from "axios";

export const fetchData = async (url: string, parameter?: string) => {
    const apiUrl = parameter ? `${url}/${parameter}` : url;
    const response = await axios.get(apiUrl);
    
    return response.data.data;
}