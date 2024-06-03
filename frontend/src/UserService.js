import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users';

class UserService {
    loginUser(user) {
        return axios.post(`${API_URL}/login`, user);
    }

    createUser(user) {
        return axios.post(`${API_URL}/create`, user);
    }

    getUserById(id) {
        return axios.get(`${API_URL}/${id}`);
    }

    getAllUsers() {
        return axios.get(API_URL);
    }

    updateUser(id, user) {
        return axios.put(`${API_URL}/${id}`, user);
    }

    deleteUser(id) {
        return axios.delete(`${API_URL}/${id}`);
    }

    adminLogin(user) {
        return axios.post(`${API_URL}/admin/login`, user);
    }
}

const userServiceInstance = new UserService();

export default userServiceInstance;