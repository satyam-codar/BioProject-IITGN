import http from "../http-common";
console.log('http')
console.log(http)
class CancerTableDataService {
  getAll() {
    return http.get("/cancerData");
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
  }
}

export default new CancerTableDataService();