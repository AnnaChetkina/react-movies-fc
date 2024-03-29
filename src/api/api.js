export function getMovies(search = "matrix", type = "", page = "1") {
  const params = new URLSearchParams();
  page && params.append("page", page);
  search && params.append("s", search ? search : "matrix");
  type && type !== "all" && params.append("type", type);
  console.log(params.toString())
  return fetch(
    `https://www.omdbapi.com/?apikey=${
      process.env.REACT_APP_API_KEY
    }&${params.toString()}`
  )
    .then((res) => res.json())
    .catch((err) => {
      console.log("Error", err);
    });
}
