export async function getTrailerId(VIDEO_API) {
  const apiVideo = await fetch(VIDEO_API)
  const preview = await apiVideo.json()
  const preview_Id = preview.results[0].key
  console.log("fetch", preview_Id)
  return preview_Id
}
