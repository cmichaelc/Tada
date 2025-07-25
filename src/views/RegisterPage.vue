<template>
  <div class="auth-container">
    <h2>Inscription</h2>
    <form @submit.prevent="handleRegister">
      <div class="form-group">
        <label for="email-register">Email :</label>
        <input type="email" id="email-register" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password-register">Mot de passe :</label>
        <input type="password" id="password-register" v-model="password" required />
      </div>
      <div class="form-group">
        <label for="confirm-password-register">Confirmer le mot de passe :</label>
        <input type="password" id="confirm-password-register" v-model="confirmPassword" required />
      </div>
      <button type="submit">S'inscrire</button>
    </form>
    <p>Déjà un compte ? <router-link to="/login">Se connecter</router-link></p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'RegisterPage', // N'oublie pas de changer le nom ici
  setup() {
    const email = ref('');
    const password = ref('');
    const confirmPassword = ref(''); // Nouveau champ
    const router = useRouter();

    const handleRegister = () => {
      // Ici, tu mettrais ta logique d'inscription.
      // Tu devrais vérifier si password et confirmPassword correspondent.
      if (password.value !== confirmPassword.value) {
        alert('Les mots de passe ne correspondent pas !');
        return;
      }
      console.log('Tentative d\'inscription avec :', email.value, password.value);
      // Simuler une API call réussie
      setTimeout(() => {
        alert('Inscription réussie ! Vous pouvez maintenant vous connecter.');
        // Redirige vers la page de connexion après l'inscription
        router.push('/login');
      }, 500);
    };

    return {
      email,
      password,
      confirmPassword, // Retourne le nouveau champ
      handleRegister,
    };
  },
});
</script>

<style scoped>
/* Tu peux copier les mêmes styles que LoginPage.vue ou les factoriser si tu as le temps */
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
  width: calc(100% - 20px);
  padding: 12px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  box-sizing: border-box;
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