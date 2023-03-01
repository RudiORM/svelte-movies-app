<script>
	import MainSection from '../components/MainSection.svelte'

	const ApiKey = __myapp.env.API_KEY
	console.log('my fake key is:')
	console.log(ApiKey)
	const FEATURED_API = `https://api.themoviedb.org/3/trending/movie/week?api_key=${ApiKey}&language=en-GB`

	let api_url = (FEATURED_API + '&page=')

</script>

<MainSection id='home' {api_url}/>
