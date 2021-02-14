
<div class="selector">
  <div class="anchor selected">
    <h3><a href="#" class="no_click" data-group="movie">Movies </a></h3>
  </div>

  <div class="anchor">
    <h3><a href="#" data-group="tv">TV </a></h3>
  </div>
</div>

<style>
  .selector {
    display: flex;
    justify-content: right;
    align-items:center;
    height: 30px;
    color: var(--light-text);
    border-left: 2px solid var(--light-text);
    border-top: 2px solid var(--light-text);
    border-bottom: 2px solid var(--border-colour);
    border-right: 2px solid var(--border-colour);
    border-radius: 30px;
  }
  

  .anchor {
    box-sizing: border-box;
    color: rgb(0, 0, 0);
    left: 0px;
    position: relative;
    top: 0px;
    z-index: 1
  }
  h3 {
    display: inline-flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    /* padding: 4px 20px; */
    margin-bottom: 0;
    white-space: nowrap;
  }
  a {
    text-decoration: none;
    transition-delay: 0s;
    transition-duration: 0.5s;
    transition-property: -webkit-text-fill-color;
    transition-timing-function: ease;
    white-space: nowrap
  }
</style>