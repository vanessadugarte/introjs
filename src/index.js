const apiKey =  'OHLxZzT4AsX0YjLT5DkIq9wtLxpc0SUT';

const peticion = fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`);

peticion.then(resp => console.log(resp));