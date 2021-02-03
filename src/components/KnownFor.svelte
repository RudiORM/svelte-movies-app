<script>
  import { onMount } from 'svelte'
  
  export let personId

  const IMAGE_API = 'https://image.tmdb.org/t/p/w300'
  const DEFAULT_IMG = './images/default.jpg'
  const ApiKey = process.env.API_KEY
  const KNOWN_API = `https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${ApiKey}&language=en-US`

  let movies = []

  onMount(async () => {
    movies = await fetch(KNOWN_API)
    .then(x => x.json())
    .then(x => x.cast)
	})

</script>

{#if movies}
<div class="wrapper">
  <div class='container'>
      {#each movies as movie}
      <a class='movie'href=#/movie/{movie.id}>
          <img src={movie.poster_path ? IMAGE_API + movie.poster_path : DEFAULT_IMG } alt={movie.title} />
          <div class='movie-info'>
            <h3>{ movie.title }</h3>
          </div>
        </a>
      {/each}
  </div></div>
{/if}

<style>

h3 {
  color: var(--light-text);
  margin: 0;
  font-weight: 400;
  text-align:center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
}
.container {
  margin: 0 auto;
  display: flex;
  overflow-y: hidden;
}
/* .container::after {
    content: '';
    width: 60px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-image: linear-gradient(to right, rgba(255,255,255,0) 0%, #932432 100%);
    will-change: opacity;
  } */
.movie {
  text-decoration: none;
  margin-bottom: 0.5rem;
  position: relative;
  background-color: var(--secondary-colour);
  margin-right: 0.8rem;
  border-radius: 3px;
  transition: all .4s ease-in-out;
}  
.movie:hover {
  transform: scale(1.1);
}

img {
  width: 150px;
  border-radius: 3px;
}

</style>
