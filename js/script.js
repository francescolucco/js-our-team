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

// 2. creo una variabile vuota contente una stringa che utilizzerò per stamapare il testo HTML
let html = '';

// 3. creo la costante che mi aggancia il punto su cui andare a stampare sul DOM
const teamContainer = document.querySelector('.team-container');

// 4. Utilizzo un ciclo "for" attraverso la mia funzione "stampa" per stampare le informazioni sul foglio HTML
stampaCardHTLM (teamCard);

// 5. Al click:

document.getElementById('addMemberButton').addEventListener('click', function(){

      //5.1 - Creo un oggetto vuoto

  let newTeamMember = {
    cardImage: '',
    name: '',
    role: '',
  };

      //5.2 - Rilevo i dati aggiunti dal form

  let imageEntered = document.getElementById('image').value;
  console.log(imageEntered);
  newTeamMember.cardImage = imageEntered;
  
  let nameEntered = document.getElementById('name').value;
  console.log(nameEntered);
  newTeamMember.name = nameEntered;
  
  let roleEntered = document.getElementById('role').value;
  console.log(roleEntered);
  newTeamMember.role = roleEntered;

  console.log(newTeamMember);

      //5.3 - Li pusho all'interno dell'array contenente gli   oggetti

  teamCard.push(newTeamMember);

  console.log(teamCard);

    //5.4 - Ristampo le card su HTML utilizzando la mia funzione

  stampaCardHTLM (teamCard);

});


/// § § § ---- FUNZIONI ----- § § § ///

function stampaCardHTLM (listaOggetti){
  for(let i = 0; i < (listaOggetti).length; i++){
    html += 
    `<div class="team-card">
      <div class="card-image">
        <img src="img/${(listaOggetti)[i].cardImage}" alt="${(listaOggetti)[i].name}" />
      </div>
      <div class="card-text">
        <h3>${(listaOggetti)[i].name}</h3>
        <p>${(listaOggetti)[i].role}</p>
      </div>
    </div>`
    console.log(html);
    teamContainer.innerHTML = html;
  }
}


//     // let htmlDeiRuoli = '';

//     // for(let indiceRole = 0; indiceRole < teamCard.role) {
//     //   htmlDeiRuoli += `<p>${teamCard.role[indiceRole]</p>`
//     // }

