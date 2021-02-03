<script>
	import MainSection from '../components/MainSection.svelte'

	export let params
	$: genre = params.id

  const ApiKey = process.env.API_KEY
	const MOVIE_GENRE_API = `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&with_genres=`
	
	$: api_url = (MOVIE_GENRE_API + params.id + '&page=')
	// console.log('movie genre',genre,params.id)
	
</script>
{#key params.id}
	<MainSection id = 'genres' {api_url} />
	{/key}

