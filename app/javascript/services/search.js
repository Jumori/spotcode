import api from './api';

const SearchService = {
  index: (query) => api.get(`/search?query=${query}`)
}

export default SearchService;