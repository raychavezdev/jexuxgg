export async function fetchVideos() {
  try {
    const KEY = import.meta.env.KEY
    const ID = import.meta.env.ID
    const TOTAL_RES = 12

    const response = await fetch(
      'https://www.googleapis.com/youtube/v3/search?key=' +
        KEY +
        '&channelId=' +
        ID +
        '&part=snippet,id&order=date&maxResults=' +
        TOTAL_RES,
    )

    if (!response.ok) {
      throw new Error('Error en la busqueda de videos')
    }

    const data = await response.json()
    return data.items
  } catch (error) {
    console.error(error)
    return []
  }
}
