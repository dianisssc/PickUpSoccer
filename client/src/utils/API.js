import axios from "axios";


export default {
  getProfiles: function(data) {
    return axios.post('/api/profiles/getProfiles', data);
 },

 getModalProfile: function(id){
   console.log("id showing", id)
   return axios.get("/api/profiles/" + id);
 },
 getProfile: function(email){
   return axios.get("api/profiles/" + email)
 },
 login: function(data){
   return axios.post("/api/profiles", data); 
 },
  
  deleteProfile: function(id) {
    return axios.delete("/api/profiles/deleteProfile/" + id);
  },

  saveProfile: function(data) {
   
    return axios.post("/api/profiles/saveProfiles", data);
  },
  updateProfile: function(id){
    return axios.post("/api/profiles/updateProfile/" +id)
  }
};
