const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

// const $n = document.querySelector('name'); Se debe referenciar a la clase
// const $b = document.querySelector('#blog'); Se referencian a ID pero es una clase

const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

async function displayUser(username) { //Debe ser una función async
  //Faltaba un try y un catch
  try{
    $n.textContent = 'cargando...';
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data =  await response.json();

    console.log(data);
    $n.textContent = `${data.name}`; //Se usan backticks
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  } catch(err){
    handleError(err)
  }
}
  

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}` //Variable n mal definida
}

displayUser('stolinski');