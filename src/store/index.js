import { createStore } from 'vuex'

export default createStore({
  state: {
    documents: [], // Массив с документами
    workers: [], // Массив с работниками
  },
  getters: {
    getDocuments(state) {
      return state.documents;
    },
    getWorkers(state) {
      return state.workers;
    },
    // Получение работника по id
    getWorkerById: (state) => (id) => {
      return state.workers.find((worker) => worker.id === id);
    },
    // Получение документа по id
    getDocumentById: (state) => (id) => {
      return state.documents.find((document) => document.id === id);
    },
  },
  mutations: {
    setDocuments(state, documents) {
      state.documents = documents;
    },
    setWorkers(state, workers) {
      state.workers = workers;
    },
  },
  actions: {
     // Получение списка документов
     async fetchDocuments({ commit }) {
      const response = await fetch('http://localhost:3000/documents');
      const data = await response.json();
      commit('setDocuments', data);
    },
    // Получение списка рабочих
    async fetchWorkers({ commit }) {
      const response = await fetch('http://localhost:3000/workers');
      const data = await response.json();
      commit('setWorkers', data);
    },
  },
  modules: {
  }
})
