updateTodo(updated: Todo) {
  const index = this.todos.findIndex(t => t.id === updated.id)
  if (index !== -1) {
    this.todos[index] = { ...updated }
    this.saveToStorage()
  }
}
