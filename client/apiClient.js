const urls = [
  "https://swapi.co/api/starships/9"
]

export const fetchData = async () => {
  try {
    const response = await Promise.all(
      urls.map(url => fetch(url).then(res => res.json()))
    )
    console.log(response)
    return response
  } catch(err) {
    console.log('Error', err)
  }
}