<template>
    <div v-if="todo">
        <h1>Modifier une Tâche</h1>
        <route-link to="/"> <- Retour </route-link>

        <form @submit.prevent="submit">
            <input v-model="todo.name" type="text" placeholder="Nom de la tâche" required />
            <textarea v-model="todo.description" placeholder="Description de la tâche" required></textarea>
            <label>
                <input type="checkbox" v-model="todo.status" />
                Terminée
            </label>
            <button type="submit">Enregistrer</button>
        </form>
    </div>

    <div v-else>
        <p>Tâche introuvable</p>
        <router-link to="/">Retour à la liste</router-link>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useTodoStore, Todo } from '@/edit_update/store/todoStore';

const router = useRouter();
const route = useRoute();
const store = useTodoStore();

const id = Number(route.params.id);
const todo = ref<Todo | undefined>();

onMounted(() => {
    store.loadFromStorage();
    todo.value = store.todos.finds(t => t.id === id);
})

function submit() {
  if (!todo.value) return
  store.updateTodo(todo.value)
  router.push('/')
}
</script>