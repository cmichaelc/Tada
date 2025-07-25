import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import DashboardPage from '../views/DashboardPage.vue' // Pour la page principale des tâches

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/login' // Redirige la page d'accueil vers la page de login par défaut
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardPage
      // Ici, tu pourrais ajouter un meta field pour vérifier l'authentification
      // meta: { requiresAuth: true }
    }
  ]
})

export default router

   Explication : path est l'URL, name est un nom unique pour la route (utile pour naviguer), et component est le composant Vue que cette route affichera.
Étape 3 : Création des pages Login et Register (40 minutes)
C'est là que tu vas mettre les mains dans le code Vue !
 * Crée src/views/LoginPage.vue :
   <template>
  <div class="auth-container">
    <h2>Connexion</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email-login">Email :</label>
        <input type="email" id="email-login" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password-login">Mot de passe :</label>
        <input type="password" id="password-login" v-model="password" required />
      </div>
      <button type="submit">Se connecter</button>
    </form>
    <p>Pas encore de compte ? <router-link to="/register">S'inscrire</router-link></p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router'; // Pour la navigation

export default defineComponent({
  name: 'LoginPage',
  setup() {
    const email = ref('');
    const password = ref('');
    const router = useRouter(); // Initialise le routeur

    const handleLogin = () => {
      // Ici, tu mettrais ta logique de connexion.
      // Pour l'instant, on va juste simuler une connexion réussie et naviguer.
      console.log('Tentative de connexion avec :', email.value, password.value);
      // Simuler une API call réussie
      setTimeout(() => {
        alert('Connexion réussie !');
        // Redirige vers la page principale des tâches
        router.push('/dashboard');
      }, 500);
    };

    return {
      email,
      password,
      handleLogin,
    };
  },
});
</script>

<style scoped>
/* Styles pour la page de connexion */
.auth-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: center;
}

.auth-container h2 {
  margin-bottom: 25px;
  color: #333;
  font-size: 2em;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #555;
}

.form-group input[type="email"],
.form-group input[type="password"] {
  width: calc(100% - 20px); /* Ajuste la largeur pour le padding */
  padding: 12px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  box-sizing: border-box; /* Inclut padding et border dans la largeur */
}

button[type="submit"] {
  width: 100%;
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}

p {
  margin-top: 20px;
  color: #666;
}

p router-link {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

p router-link:hover {
  text-decoration: underline;
}
</style>