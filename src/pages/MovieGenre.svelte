<script>
	import MainSection from '../components/MainSection.svelte'

	export let params

  const ApiKey = __myapp.env.API_KEY
	const MOVIE_GENRE_API = `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&with_genres=`

	$: api_url = (MOVIE_GENRE_API + params.id + '&page=')

</script>
{#key params.id}
	<MainSection id = 'genres' {api_url} />
{/key}

