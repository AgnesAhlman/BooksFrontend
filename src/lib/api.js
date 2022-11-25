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

export const getBooksByTitle = (title) => {
  return fetch(`${baseUrl}/books?&title=${title}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => console.error(error));
};

// Fetch Book By Authors

export const getBookByAuthors = (authors) => {
  return fetch(`${baseUrl}/books?&year=${authors}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.error(error));
};
