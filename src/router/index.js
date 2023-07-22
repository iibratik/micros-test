import { createRouter, createWebHistory } from 'vue-router'
import WorkerDetails from '@/views/Details/WorkerDetails.vue';
import DocumentDetails from '@/views/Details/DocumentDetails.vue';
import WorkersList from "@/views/Lists/WorkersList"
import DocumentsList from "@/views/Lists/DocumentsList"
import TestPage from "@/views/TestPage.vue"


const routes = [
  {
    path: '/',
    redirect: '/workers', // Пустой список работников, здесь они будут загружаться из хранилища

  },
  // Маршрут для отображения списка работников
  {
    path: '/workers',
    component: WorkersList,
    props: { workers: [] }, // Пустой список работников, здесь они будут загружаться из хранилища
  },
  // Маршрут для отображения списка документов
  {
    path: '/documents',
    component: DocumentsList,
    props: { documents: [] }, // Пустой список документов, здесь они будут загружаться из хранилища
  },
  // Параметризированный маршрут для отображения данных о работнике
  {
    path: '/worker/:id',
    component: WorkerDetails,
    props: true,
  },
  // Параметризированный маршрут для отображения данных о документе
  {
    path: '/document/:id',
    component: DocumentDetails,
    props: true,
  },
  {
    path: '/test',
    component: TestPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
