<script>
  import ProgressBar from './ProgressBar.svelte'
  import Spinner from './Spinner.svelte'
  import { fade } from 'svelte/transition'
  const IMAGE_API = 'https://image.tmdb.org/t/p/w300'
  const DEFAULT_IMG = './images/default.jpg'

  export let poster_path
  export let title
  export let vote_average
  export let overview
  export let id
  export let release_date
  release_date ? release_date : 0

</script>
{#if id}

  <div class='movie'>
    <div class= 'movie-inner'>
      <div class='movie-front'>
        <img class='movie-img'  src={poster_path ? IMAGE_API + poster_path : DEFAULT_IMG } alt={title} /> 
        <div class='movie-info'>
          <h3>{ title }</h3>
          <p class='release-date'>{release_date ? release_date.substring(0,4) : undefined}</p>
        </div>
        <div class='vote'>
          <ProgressBar progress={vote_average} />
        </div>
      </div>
      <a class='movie-back'href=#/movie/{id}>
        <h3>Overview</h3>
        <p>{overview}</p>
      </a>
    </div>
  </div>
 
{:else}
  <Spinner />
{/if}

<style>
  h3 {
    color: var(--dark-text);
  }

  a {
    text-decoration: none;
    color: black;
  }

  .movie {
    display:flex;
    justify-content:space-between;
    background-color: transparent;
    width: 230px;
    
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    perspective: 1000px;
    border-radius: 8px;
  }

  .movie-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .movie:hover .movie-inner {
    transform: rotateY(180deg);
  }
  

  .movie-front, .movie-back {
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 8px;
  }
  .movie-front {
    background-color: white;
    color: var(--dark-text);
    box-shadow: 3px 3px 5px rgb(0,0,0,0.1);
  }

  .movie-back {
    transform: rotateY(180deg);
    background-color: white;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    color: var(--dark-text);
    padding:0.5rem;
    height: 100%;
    overflow: auto;
    transition: 0.3s ease-in-out;
    box-shadow: 0 -3px 5px rgba(0,0,0,0.1);
    font-size: 1.0em;
    font-weight: 700;
    z-index: 5;
  }
  .movie-back h3 {
    margin-top: 5px;
    margin-bottom: 0px;
    font-size: 1.2rem;
    text-transform: uppercase;
    color: white;
    background-color: blueviolet;
    padding-left: 10px;
  }

  .movie-img {
    object-fit: cover;
    /* height: 500px; */
    max-width: 100%;
    height: 345px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom: 1px solid rgb(165, 165, 165)
  }
  
  .movie-info {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    flex-direction: column;
    margin-left: 1rem;
  }
  
  .movie-info h3 {
    margin: 0;
    font-family: "Source Sans Pro", Arial, sans-serif;
    font-weight: 600;
    font-size: 16px;
  }

  .release-date {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 900;
  }

  .vote {
    transform: scale(0.44);
    transform-origin: top left;
    z-index: 2;
    position: absolute; 
    left: 18px;
    top: 315px;
    color:var(--dark-text);
  }
  
  </style>