<script>
	import MainSection from '../components/MainSection.svelte'

	const ApiKey = process.env.API_KEY
	const FEATURED_API = `https://api.themoviedb.org/3/trending/movie/week?api_key=${ApiKey}&language=en-GB`

	let api_url = (FEATURED_API + '&page=')

</script>

<MainSection id='home' {api_url}/>
