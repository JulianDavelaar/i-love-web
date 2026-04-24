// constructor functie die een object terug geeft
function Plant () {
    this.name = name
    this.pot = 'clay' 
    this.photosyntesis = function(){
        //turn light into oxygen
    }
}

const hybiscus = new Plant('hibi')
const cactus = new Plant('kakki')


// variabelen
// formulier
// selects
// loader 
const form = document.querySelector('form')
const selects = form.querySelectorALL('select')
const button =  form.querySelector('input[type="submit"]')
const loader = document.querySelector('.loader')

button.hidden = true

form.addEventListener('submit', event => event.preventDefault())

selects.forEach(select => {
    select.addEventListener('change', () => fetchPizza({ pushState: true}))
})


// logic (waarde die aan naam wordt toegekend, nodig om DOM objecten aan te roepen en iets mee te kunnen doen)
// onchange
// voorkom default formulier werking
// submit 

// loading aan 
// fetchPizza
// fetch
// loading uit
// parsen
// in de dom renderen / zetten
// URL state / form state synchroniseren





//function declaration
