export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=b305a34b2b9f0753f79e2795061081d6&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };