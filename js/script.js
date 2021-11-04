// 1. Creo un array contente gli oggetti e le relative proprietà e valori
const teamCard = [
  {
    cardImage: 'wayne-barnett-founder-ceo.jpg',
    name: 'Wayne Barnet',
    role: 'Founder & CEO',
  },
  {
    cardImage: 'angela-caroll-chief-editor.jpg',
    name: 'Angela Caroll',
    role: 'Chief Editor',
  },
  {
    cardImage: 'angela-lopez-social-media-manager.jpg',
    name: 'Angela Lopez',
    role: 'Social Media Manager',
  },
  {
    cardImage: 'barbara-ramos-graphic-designer.jpg',
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
  },
  {
    cardImage: 'scott-estrada-developer.jpg',
    name: 'Scott Estrada',
    role: 'Developer',
  },
  {
    cardImage: 'walter-gordon-office-manager.jpg',
    name: 'Walter Gordon',
    role: 'Office Manager',
  },

]



// creo una variabile vuota contente una stringa che utilizzerò per stamapare il testo HTML
let html = '';
// creo la costante che mi aggancia il punto su cui andare a stampare sul DOM
const teamContainer = document.querySelector('.team-container');

// 3. Utilizzo un ciclo "for in" per ricavare tutte le informazioni dei singoli utenti
for(let i = 0; i < teamCard.length; i++){

    // let htmlDeiRuoli = '';

    // for(let indiceRole = 0; indiceRole < teamCard.role) {
    //   htmlDeiRuoli += `<p>${teamCard.role[indiceRole]</p>`
    // }

    html += 
    `<div class="team-card">
      <div class="card-image">
        <img src="img/${teamCard[i].cardImage}" alt="${teamCard[i].name}" />
      </div>
      <div class="card-text">
        <h3>${teamCard[i].name}</h3>
        <p>${teamCard[i].role}</p>
      </div>
    </div>`
    console.log(html);
    teamContainer.innerHTML = html;
}
  




