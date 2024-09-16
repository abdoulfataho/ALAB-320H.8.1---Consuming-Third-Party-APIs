export async function getAllStarships() {
    const response = await fetch('https://swapi.dev/api/starships/');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.results;
  }