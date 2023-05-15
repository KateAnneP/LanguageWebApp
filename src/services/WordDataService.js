import http from "../http-common";

class WordDataService {
    getAll() {
        return http.get("/words");
    }

    get(id) {
        return http.get(`/words/${id}`);
    }

    create(data) {
        return http.post("/words", data);
    }

    update(id, data) {
        return http.put(`/words/${id}`, data);
    }

    delete(id) {
        return http.delete(`/words/${id}`);
    }

    deleteAll() {
        return http.delete(`/words`);
    }

    findBySlowko(title) {
        return http.get(`/words?slowko=${slowko}`);
    }
}

export default new WordDataService();