<template>
  <div>
    <h2>Liste des tâches</h2>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <span>{{ task.name }} - {{ task.description }}</span>
        <button @click="deleteTask(task.id)">Supprimer</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Task } from '../types/task';

export default defineComponent({
  name: 'TaskList',
  data() {
    return {
      tasks: [] as Task[]
    };
  },
  methods: {
    deleteTask(id: number) {
      this.tasks = this.tasks.filter(task => task.id !== id);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      alert('Tâche supprimée avec succès');
    },
    loadTasks() {
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
        this.tasks = JSON.parse(savedTasks);
      } else {
        // Tâches par défaut si localStorage est vide
        this.tasks = [
          { id: 1, name: 'Tâche 1', description: 'Description 1' },
          { id: 2, name: 'Tâche 2', description: 'Description 2' }
        ];
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
    }
  },
  mounted() {
    this.loadTasks();
  }
});
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
}
button {
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
}
button:hover {
  background-color: #d9363e;
}
</style>