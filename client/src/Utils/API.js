import axios from "axios";

export default {
  getStats: function() {
    return axios.get("/api/stats");
  },
  getStat: function(id) {
    return axios.get("/api/stats/" + id);
  },
  deleteStat: function(id) {
    return axios.delete("/api/stats/" + id);
  },
  saveStat: function(statData) {
    return axios.post("/api/stats", statData);
  }
};
