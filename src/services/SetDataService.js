import http from "../http-common";

class SetDataService {
    getAll() {
        return http.get("/sets");
    }

    get(id) {
        return http.get(`/sets/${id}`);
    }

    create(data) {
        return http.post("/sets", data);
    }

    update(id, data) {
        return http.put(`/sets/${id}`, data);
    }

    delete(id) {
        return http.delete(`/sets/${id}`);
    }

    deleteAll() {
        return http.delete(`/sets`);
    }

    findByNazwa(title) {
        return http.get(`/sets?nazwa=${nazwa}`);
    }
}

export default new SetDataService();