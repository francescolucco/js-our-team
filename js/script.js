// 1. Creo un array contente gli oggetti e le relative proprietà e valori
const teamCard = {
    image: ['wayne-barnett-founder-ceo.jpg','angela-caroll-chief-editor.jpg','angela-lopez-social-media-manager.jpg',
    'barbara-ramos-graphic-designer.jpg',
    'scott-estrada-developer.jpg',
    'walter-gordon-office-manager.jpg',
    'walter-gordon-office-manager.jpg'],
    firstname: ['Wayne','Angela', 'Angela', 'Barbara', 'Scott', 'Walter'],
    lastname: ['Barnett', 'Caroll', 'Lopez', 'Ramos', 'Estrada', 'Gordon'],
    role: ['Founder & CEO', 'Chief Editor', 'Social Media Manager', 'Graphic Designer', 'Developer', 'Office Manager'],
  }
console.log(teamCard);

// creo una variabile vuota contente una stringa che utilizzerò per stamapare il testo HTML
let html = '';
// creo la costante che mi aggancia il punto su cui andare a stampare sul DOM
const teamContainer = document.querySelector('team-container');

// 3. Utilizzo un ciclo "for in" per ricavare tutte le informazioni dei singoli utenti
for(let i = 0; i < teamCard.image.length; i++){
    html = 
    `<div class="team-card">
      <div class="card-image">
        <img src="{${teamCard.image[i]}}" alt="${teamCard.firstname[i]} ${teamCard.lastname[i]}" />
      </div>
      <div class="card-text">
        <h3>${teamCard.firstname[i]} ${teamCard.lastname[i]}</h3>
        <p>${teamCard.role[i]}</p>
      </div>
    </div>`
    console.log(html);
    teamContainer.innerHTML = html;
}
  




// const teamCard = [
//   {
//     cardImage: 'wayne-barnett-founder-ceo.jpg',
//     firstname: 'Wayne',
//     lastname: 'Barnett',
//     role: 'Founder & CEO',
//   },
//   {
//     cardImage: 'angela-caroll-chief-editor.jpg',
//     firstname: 'Angela',
//     lastname: 'Caroll',
//     role: 'Chief Editor',
//   },
//   {
//     cardImage: 'angela-lopez-social-media-manager.jpg',
//     firstname: 'Angela',
//     lastname: 'Lopez',
//     role: 'Social Media Manager',
//   },
//   {
//     cardImage: 'barbara-ramos-graphic-designer.jpg',
//     firstname: 'Barbara',
//     lastname: 'Ramos',
//     role: 'Graphic Designer',
//   },
//   {
//     cardImage: 'scott-estrada-developer.jpg',
//     firstname: 'Scott',
//     lastname: 'Estrada',
//     role: 'Developer',
//   },
//   {
//     cardImage: 'walter-gordon-office-manager.jpg',
//     firstname: 'Walter',
//     lastname: 'Gordon',
//     role: 'Office Manager',
//   },
//   {
//     cardImage: 'walter-gordon-office-manager.jpg',
//     firstname: 'Walter',
//     lastname: 'Gordon',
//     role: 'Office Manager',
//   },
// ]