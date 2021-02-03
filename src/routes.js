import Home from './pages/Home.svelte';
import MovieDetail from './pages/MovieDetail.svelte';
import MovieGenre from './pages/MovieGenre.svelte';
import NotFound from './pages/NotFound.svelte';
import Search from './pages/Search.svelte'
import PersonDetail from './pages/PersonDetail.svelte'

export default {
    '/': Home,
    '/Home': Home,
    '/movie/:id': MovieDetail,
    '/genre/:id': MovieGenre,
    '/genre/*': MovieGenre,
    '/search/:id': Search,
    '/search/': Search,
    '/people/:id' :PersonDetail,
    '*': NotFound
};
