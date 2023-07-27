import { createRouter, createWebHistory } from 'vue-router'
import WorkerDetails from '@/views/Details/WorkerDetails.vue'
import DocumentDetails from '@/views/Details/DocumentDetails.vue'
import WorkersList from '@/views/Lists/WorkersList'
import DocumentsList from '@/views/Lists/DocumentsList'

const routes = [
  {
    path: '/',
    redirect: '/workers',
    meta: { title: 'Список работников' },
    // Пустой список работников, здесь они будут загружаться из хранилища
  },
  // Маршрут для отображения списка работников
  {
    path: '/workers',
    component: WorkersList,
    meta: { title: 'Список работников' },
    props: { workers: [] }, // Пустой список работников, здесь они будут загружаться из хранилища
  },
  // Маршрут для отображения списка документов
  {
    path: '/documents',
    component: DocumentsList,
    meta: { title: 'Список документов' },
    props: { documents: [] }, // Пустой список документов, здесь они будут загружаться из хранилища
  },
  // Параметризированный маршрут для отображения данных о работнике
  {
    path: '/worker/:id',
    component: WorkerDetails,
    meta: { title: 'Рабочий' },
    props: true,
  },
  // Параметризированный маршрут для отображения данных о документе
  {
    path: '/document/:id',
    component: DocumentDetails,
    meta: { title: 'Документ' },
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

// Глобальный навигационный хук `afterEach`
router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = 'Страница' // title по default
  }
})

export default router
