<!-- src/pages/TaskView.vue -->
<template>
  <div class="task-view" :class="theme">
    <!-- Task List Header -->
    <h2>{{ theme === 'dark' ? 'Dark Mode' : 'Light Mode' }} Tasks</h2>

    <!-- Task List -->
    <ul v-if="tasks.length > 0">
      <li v-for="task in tasks" :key="task.id" class="task-card">
        <h3 :class="{ 'completed': task.completed }">{{ task.name }}</h3>
        <p>{{ task.details }}</p>
        <div class="task-meta">
          <span class="status" :class="{ 'done': task.completed }">
            {{ task.completed ? '✅ Done' : '🔄 Pending' }}
          </span>
          <span v-if="task.due_date" class="due-date">
            📅 {{ new Date(task.due_date).toLocaleDateString() }}
          </span>
        </div>
      </li>
    </ul>

    <!-- Empty State -->
    <p v-else>No tasks found. Add one to get started!</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Task } from '@/types/task';
export default defineComponent({
  props: {
    tasks: {
      type: Array as PropType<Task[]>,
      required: true
    },
    theme: {
      type: String as PropType<'light' | 'dark'>,
      default: 'light'
    }
  }
});
</script>

<style scoped>
/* Light Theme (Default) */
.task-view.light {
  background: #f9f9f9;
  color: #333;
}

.task-view.light .task-card {
  background: white;
  border: 1px solid #eee;
}

/* Dark Theme */
.task-view.dark {
  background: #1e1e1e;
  color: #f0f0f0;
}

.task-view.dark .task-card {
  background: #2d2d2d;
  border: 1px solid #444;
}

/* Shared Styles */
.task-card {
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 8px;
}

.completed {
  text-decoration: line-through;
  opacity: 0.7;
}

.status.done {
  color: #4caf50;
}

.task-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.9em;
  margin-top: 0.5rem;
}
</style>