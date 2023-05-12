import axios from "axios";

export const fetchNotes = async () => { 

 axios.defaults.baseURL = `https://645cca91250a246ae30e2ca6.mockapi.io`;
  const response = await axios.get(`/notes`);  
  return response.data;
};



export const addNote = async () => {
axios.defaults.baseURL = `https://645cca91250a246ae30e2ca6.mockapi.io`;   
   const requestBody = {
    noteText: " ",
  };
    const response = await axios.post('/notes', requestBody);
    console.log(response)
    return response.data;
};



export const updateNote = async ({ id, text }) => {

  axios.defaults.baseURL = `https://645cca91250a246ae30e2ca6.mockapi.io`;
  const requestBody = {noteText: text};
    const response = await axios.put(`/notes/${id}`, requestBody);
    console.log(response.data)
    return response.data.records;
};



export const deleteNote = async ( id ) => {

  axios.defaults.baseURL = `https://645cca91250a246ae30e2ca6.mockapi.io`;
    const response = await axios.delete(`/notes/${id}`);
    console.log(response.data)
    return response.data.records;

};