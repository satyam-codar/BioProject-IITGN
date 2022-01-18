import http from "../http-common";
console.log("http");
console.log(http);
class CancerTableDataService {
  getAll() {
    console.log("getAll");
    return http.get("/cancerData");
    // return http.get("/search");
  }

  get(id) {
    return http.get(`/cancerData/${id}`);
  }

  create(data) {
    return http.post("/cancerData", data);
  }

  update(id, data) {
    return http.put(`/cancerData/${id}`, data);
  }

  delete(id) {
    return http.delete(`/cancerData/${id}`);
  }

  deleteAll() {
    return http.delete(`/cancerData`);
  }

  findByTitle(title) {
    return http.get(`/cancerData?title=${title}`);
    // console.log("findByTitle");
    // return http.get(`/?searchTerm=${title}`); // Rishi's api
  }
  findByLncRna(title) {
    return http.get(`/cancerData/qgrsData?title=${title}`);
  }

  // g4hunter 0.9 data
  findByLncRnaG4Hpoint9(title) {
    return http.get(`/cancerData/g4hunter_point9?title=${title}`);
  }
  // g4hunter 1.4 data
  findByLncRnaG4H1point4(title) {
    return http.get(`/cancerData/g4hunter_1point4?title=${title}`);
  }

  // Get plot data
  findByLncRnaPlotData(title) {
    return http.get(`/cancerData/show-plots?title=${title}`);
  }
}

export default new CancerTableDataService();
