const apiRestCountries = 'https://restcountries.eu/rest/v2/all';
const apiNeighbouringCountries = 'https://api.geodatasource.com/neighboring-countries'
const container = document.querySelector('.container');
const vecinos = document.querySelector('.vecinos');
//const body = document.createElement('body');
/*configuración Headers: {method: 'get',
                          mode: 'no-cors',
                          cache: 'no-cache',
                          credentials: 'include',
                          headers:{'Access-Control-Allow-Origin': 'https://localhost:3000'
                          }}*/
let recuperarDatos = ()=>{
fetch(apiRestCountries)
.then(response => response.json())
.then(countries=> {
    countries.forEach(data => {
        console.log(data);

        const p = document.createElement('p');
       const a = document.createElement('a');
        p.textContent = data.name;
        a.textContent = data.alpha2Code;
        container.appendChild(p);
        container.appendChild(a);
    

    });
});
}

let recuperarDatosVecinos = ()=>{
    fetch(apiNeighbouringCountries)
    .then(response => response.json())
    .then(countriesV=> {
        countriesV.forEach(data => {
            console.log(data);
        
            const p = document.createElement('p');
            p.textContent = data.name;
          
            vecinos.appendChild(p);
           
    
        });
    })
    }
    /*eventoCambio.addEventListener('change', (event)=>{
        vecinos = document.querySelector('.vecinos');
        vecinos.textContent = event.target.value;
    })*/

window.addEventListener('load',()=>{
    let boton = document.querySelector('button');
    boton.addEventListener('click',recuperarDatos);
    let boton2 = document.querySelector('.boto2');
    boton2.addEventListener('click',recuperarDatosVecinos);
});
