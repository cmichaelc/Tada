<template>
  <div>
    <!-- Bouton d'ajout -->
    <button @click="showModal = true" class="add-btn">+ Ajouter un élément</button>

    <!-- Popup Modal -->
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <div class="modal-header">
          <h3>Nouvel élément</h3>
          <button @click="closeModal" class="close-btn">&times;</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>Titre :</label>
            <input 
              v-model="newElement.title" 
              placeholder="Titre" 
              ref="titleInput"
              @keyup.enter="saveElement"
            />
          </div>
          <div class="form-group">
            <label>Description :</label>
            <textarea 
              v-model="newElement.description" 
              placeholder="Description"
              @keyup.enter="saveElement"
            ></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button @click="closeModal" class="cancel-btn">Annuler</button>
          <button @click="saveElement" class="save-btn">Enregistrer</button>
        </div>
      </div>
    </div>

    <!-- Liste des éléments -->
    <div class="elements-container">
      <div 
        v-for="(element, index) in elements" 
        :key="index" 
        class="element-card"
      >
        <div class="element-info">
          <h4>{{ element.title }}</h4>
          <p>{{ element.description }}</p>
        </div>
        <button @click="removeElement(index)" class="delete-btn">
          &times;
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      elements: [],
      showModal: false,
      newElement: {
        title: '',
        description: ''
      }
    }
  },
  methods: {
    openModal() {
      this.showModal = true;
      this.$nextTick(() => {
        this.$refs.titleInput.focus();
      });
    },
    closeModal() {
      this.showModal = false;
      this.resetForm();
    },
    saveElement() {
      if (!this.newElement.title.trim()) {
        alert('Le titre est requis');
        return;
      }

      this.elements.push({
        title: this.newElement.title,
        description: this.newElement.description
      });

      this.resetForm();
      this.closeModal();
    },
    removeElement(index) {
      if (confirm('Supprimer cet élément ?')) {
        this.elements.splice(index, 1);
      }
    },
    resetForm() {
      this.newElement = {
        title: '',
        description: ''
      };
    }
  }
}
</script>

<style scoped>
/* Styles de base */
button {
  cursor: pointer;
  transition: all 0.2s;
}

/* Bouton Ajouter */
.add-btn {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 20px;
}

.add-btn:hover {
  background-color: #3aa876;
}

/* Modal Overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* Modal Content */
.modal-content {
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  animation: modalFadeIn 0.3s;
}

@keyframes modalFadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

.modal-header {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h3 {
  margin: 0;
  color: #2c3e50;
}

.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  color: #666;
}

.close-btn:hover {
  color: #333;
}

.modal-body {
  padding: 20px;
}

.modal-footer {
  padding: 15px 20px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

/* Form Styles */
.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  color: #555;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #42b983;
}

.form-group textarea {
  min-height: 100px;
  resize: vertical;
}

/* Boutons du modal */
.save-btn {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
}

.save-btn:hover {
  background-color: #3aa876;
}

.cancel-btn {
  background-color: #f0f0f0;
  color: #555;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
}

.cancel-btn:hover {
  background-color: #e0e0e0;
}

/* Liste des éléments */
.elements-container {
  display: grid;
  gap: 15px;
}

.element-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 15px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.element-info h4 {
  margin: 0 0 5px 0;
  color: #2c3e50;
}

.element-info p {
  margin: 0;
  color: #666;
  font-size: 14px;
}

.delete-btn {
  background: none;
  border: none;
  color: #ff4444;
  font-size: 24px;
  line-height: 1;
  padding: 0 0 5px 10px;
}

.delete-btn:hover {
  color: #cc0000;
}
</style>