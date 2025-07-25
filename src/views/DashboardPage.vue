<template>
  <div>
    <h1>Bienvenue sur votre tableau de bord To-Do !</h1>
    <p>C'est ici que vos tâches seront affichées et gérées.</p>
    <button @click="logout">Déconnexion</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'DashboardPage',
  setup() {
    const router = useRouter();
    const logout = () => {
      alert('Déconnexion...');
      router.push('/login');
    };
    return {
      logout
    };
  },
});
</script>

<style scoped>
div {
  text-align: center;
  margin-top: 50px;
}

button {
  padding: 10px 20px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 20px;
}

button:hover {
  background-color: #c82333;
}
</style>