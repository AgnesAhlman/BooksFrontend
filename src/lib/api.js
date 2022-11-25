const baseUrl = 'https://project-mongo-api-z2nrwel4pa-lz.a.run.app';

// Fetch All Movies

export const getBooks = () => {
  return fetch(`${baseUrl}/books`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.error(error));
};

// Fetch Book By Title

export const getBooksByTitle = async (title) => {
  try {
    const res = await fetch(`${baseUrl}/books?&title=${title}`);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    return console.error(error);
  }
};

// Fetch Book By Authors

export const getBookByAuthors = async (authors) => {
  try {
    const res = await fetch(`${baseUrl}/books?&year=${authors}`);
    const data = await res.json();
    return data;
  } catch (error) {
    return console.error(error);
  }
};
