import { createStore } from 'vuex'

export default createStore({
  state: {
    documents: [], // Массив с документами
    workers: [], // Массив с работниками
    sortWorkersParam: '', // Параметр для сортировки
    sortDocumentsParam: '',
  },
  getters: {
    getDocuments(state) {
      return state.documents
    },
    getSortWorkersParams(state) {
      return state.sortWorkersParam
    },
    getSortDocumentsParams(state) {
      return state.sortDocumentsParam
    },
    getWorkers(state) {
      return state.workers
    },
    // Получение работника по id
    getWorkerById: (state) => (id) => {
      return state.workers.find((worker) => worker.id === id)
    },
    // Получение документа по id
    getDocumentById: (state) => (id) => {
      return state.documents.find((document) => document.id === id)
    },
  },
  mutations: {
    setDocuments(state, documents) {
      state.documents = documents;
    },
    setWorkers(state, workers) {
      state.workers = workers;
    },
    setSortWorkersParam(state, sortParam) { // Fix the mutation name here
      state.sortWorkersParam = sortParam;
    },
    setSortDocumentsParam(state, sortParam) { // Add the correct mutation for sortDocumentsParam
      state.sortDocumentsParam = sortParam;
    },
  },
  actions: {
    // // Получение списка всех документов
    // async fetchAllDocuments({ commit }) {
    //   const response = await fetch('http://localhost:3000/documents');
    //   const data = await response.json();
    //   commit('setDocuments', data);
    // },
    // Получение списка всех рабочих
    // async fetchAllWorkers({ commit }) {
    //   const response = await fetch('http://localhost:3000/workers');
    //   const data = await response.json();
    //   commit('setWorkers', data);
    // },
    updateSortWorkersParams({ commit }, sortParams) {
      commit('setSortWorkersParam', sortParams);
    },
    updateSortDocumentsParams({ commit }, sortParams) {
      commit('setSortDocumentsParam', sortParams);
    },
    async fetchSortedWorkers({ commit, getters }) {
      const sortWorkerParam = getters.getSortWorkersParams;
      const response = await fetch(`http://localhost:3000/workers?${sortWorkerParam}`);
      const data = await response.json();
      commit('setWorkers', data);
    },
    async fetchSortedDocuments({ commit, getters }) {
      const sortDocumentParam = getters.getSortDocumentsParams;
      const response = await fetch(`http://localhost:3000/documents?${sortDocumentParam}`);
      const data = await response.json();
      commit('setDocuments', data);
    },


  },
  modules: {},
})
