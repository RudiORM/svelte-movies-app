export async function getMovieDetails(x) {
  const apiResult = await fetch(x)
  const movieResult = await apiResult.json()
  const movieResults = movieResult.results
  console.log('Fetched data', movieResults)
  return movieResult
}