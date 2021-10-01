import * as api from '../api'
export const postRequest = async(inputInfo) => {
    try {
        const {data} = await api.postRequest(inputInfo);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}