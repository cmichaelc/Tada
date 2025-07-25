// src/services/api.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api', // Remplace par l'URL de ton API
  headers: {
    'Content-Type': 'application/json'
  }
});

export default {
  deleteTask(id: number) {
    return apiClient.delete(`/tasks/${id}`);
  },
  getTasks() {
    return apiClient.get('/tasks');
  }
};