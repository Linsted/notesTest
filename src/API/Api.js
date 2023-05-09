import axios from "axios";

export const fetchNotes = async () => { 
    
const KEY = `cLW6bUW6XdbikgWOBdHCoq&amp`;
 axios.defaults.baseURL = `https://quintadb.com/apps/azWQL1W5LllyoVW6WCfmkE/dtypes/entity/bPWO7cUvPiEQ5tW4_dVvH_.json?rest_api_key=${KEY}`;
    


  const response = await  axios.get('');  

    
    return response.data.records;

};

// export const addNote = async () => { 
    
// const KEY = `cLW6bUW6XdbikgWOBdHCoq&amp`;
//  axios.defaults.baseURL = `https://quintadb.com/apps/azWQL1W5LllyoVW6WCfmkE/dtypes/entity/bPWO7cUvPiEQ5tW4_dVvH_.json?rest_api_key=${KEY}`;
    


//   const response = await  axios.post('');  

    
//     return response.data.records;

// };