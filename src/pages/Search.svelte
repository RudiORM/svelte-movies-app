<script>
	import MainSection from '../components/MainSection.svelte'

	export let params

	const API_KEY = process.env.API_KEY
	const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-GB"&page=1&include_adult=true&query="`
	
	$:api_url = (SEARCH_API + params.id + '&page=')

</script>

<MainSection {api_url}/>