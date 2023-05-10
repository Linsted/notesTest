import axios from "axios";

export const fetchNotes = async () => { 
    
const KEY = `cLW6bUW6XdbikgWOBdHCoq&amp`;
 axios.defaults.baseURL = `https://quintadb.com`;
  
  const response = await axios.get(`/apps/azWQL1W5LllyoVW6WCfmkE/dtypes/entity/bPWO7cUvPiEQ5tW4_dVvH_.json?rest_api_key=${KEY}`);  
  
  return response.data.records;

};

export const addNote = async () => {


  console.log("addNote works")
const APP_ID = 'azWQL1W5LllyoVW6WCfmkE'; 
const ENTITY_ID = 'bPWO7cUvPiEQ5tW4_dVvH_'; 
const API_KEY = `cLW6bUW6XdbikgWOBdHCoq`; 
axios.defaults.baseURL = `https://quintadb.com/apps/${APP_ID}/dtypes.json?rest_api_key=${API_KEY}`;   
const fieldText = 'ddQ8kFps1ff4owWPldSCow';
  
  const requestBody = {
  values: {
    entity_id: ENTITY_ID,
    [fieldText]: `Add your note: `,
  },
};
  try {
    const response = await axios.post('', requestBody);
    
    return response.data.records;
  } catch (error) {
    console.log(error)
  }
  

};

export const updateNote = async ({id, text}) => {



    
 
const APP_ID = 'azWQL1W5LllyoVW6WCfmkE'; 
// const ENTITY_ID = 'bPWO7cUvPiEQ5tW4_dVvH_'; 
const API_KEY = `cLW6bUW6XdbikgWOBdHCoq`; 
axios.defaults.baseURL = `https://quintadb.com`;   
const fieldText = "ddQ8kFps1ff4owWPldSCow";
  
  const requestBody = {
  values: {
  
    [fieldText]: text,
  },
};
  try {
    const response = await axios.put(`/apps/${APP_ID}/dtypes/${id}.json?rest_api_key=${API_KEY}`, requestBody);
    console.log(response.data)
    return response.data.records;
  } catch (error) {
    console.log(error)
  }
  

};




// https://quintadb.com/apps/${APP_ID}/dtypes/aOC8o0k0LhWRxcNCoWWPDN.json?rest_api_key=${API_KEY}