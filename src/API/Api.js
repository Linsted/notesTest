import axios from "axios";

axios.defaults.baseURL = `https://645cca91250a246ae30e2ca6.mockapi.io`;

export const fetchNotes = async () => { 

  const response = await axios.get(`/notes`);  
  return response.data;
};



export const addNote = async () => {

   const requestBody = {noteText: ""};
    const response = await axios.post('/notes', requestBody);
    return response.data;
};



export const updateNote = async ({ id, text }) => {

  const requestBody = {noteText: text};
    const response = await axios.put(`/notes/${id}`, requestBody);
    return response.data;
};



export const deleteNote = async ( id ) => {

    const response = await axios.delete(`/notes/${id}`);
    return response.data.records;
};