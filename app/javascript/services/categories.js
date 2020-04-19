import api from './api';

const CategoriesService = {
  index: () => api.get('/categories'),
  show: (id) => api.get(`/categories/${id}`)
}

export default CategoriesService;