import { PATHS } from './paths'
import FavoritesPage from '../pages/FavoritesPage'
import VacanciesPage from '../pages/VacationsPage'
import Page404 from '../pages/404Page'

export const routes = [
  { path: PATHS.VACANCIES, component: VacanciesPage },
  { path: PATHS.FAVORITES, component: FavoritesPage },
  { path: PATHS.PAGE_404, component: Page404 },
]
