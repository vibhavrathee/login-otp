import axios from 'axios';

const url = "https://asia-southeast1-frapp-prod.cloudfunctions.net/mock-endpoint";

export const postRequest = (inputInfo) => axios.post(url, inputInfo);
