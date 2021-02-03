<script>
  let searchTerm
  const handleOnSubmit = () => {
    if (searchTerm) {
      let searching = searchTerm
      searchTerm = ''
      location.href =`#/search/${searching}`
		}
  }
  
</script>

<header>
  <div class='header-top'>
    <a class='home' href='#/home'><i class="fa fa-home"></i> Home</a>
    <form 
      on:submit|preventDefault = {handleOnSubmit}>
      <input 
        label='search'
        class='search'
        type='text'
        placeholder='Search...'
        bind:value={searchTerm}
        on:change = {(e) => (e.target.value)}
      />
    </form>
  </div>
</header>

<style>
  input[type=text], .search {
    color: var(--light-text);
    border-left: 2px solid var(--light-text);
    border-top: 2px solid var(--light-text);
    border-bottom: 2px solid var(--border-colour);
    border-right: 2px solid var(--border-colour);
    /* border: 2px solid -internal-light-dark(rgb(118, 118, 118), rgb(226, 153, 248)); */
  }

  input[type=text]::placeholder {
    color:   var(--light-text);
  }

  header {
    background-color: var(--secondary-colour);
    padding: 0.2rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .header-top {
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
  .home, .home:visited {
    justify-content: left;
    font-size: 2em;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
  }

  form {
    display: flex;
    justify-content: right;
    align-items:center;
  }

  .search {
    background-color: transparent;
    border-radius: 30px;
    font-family: inherit;
    font-size: 1.2rem;
    padding: 0.5rem 1.0rem;
    height: 30px;
    color: var(--light-text);
  }
  
  .search:focus {
    outline: 0;
  }
 
</style>