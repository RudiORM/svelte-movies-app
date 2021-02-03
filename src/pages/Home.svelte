<script>
	import MainSection from '../components/MainSection.svelte'

	const API_KEY = process.env.API_KEY
	const FEATURED_API = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=en-GB`

	let api_url = (FEATURED_API + '&page=')

</script>

<MainSection id='home' {api_url}/>
