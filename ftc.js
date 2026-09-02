const footballTeam = {
  team: "Argentina",
  year: 1986,
  headCoach: "Carlos Bilardo",
  players: [
    {
      name: "Sergio Almirón",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Sergio Batista",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Ricardo Bochini",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Claudio Borghi",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "José Luis Brown",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Daniel Passarella",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Jorge Burruchaga",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Néstor Clausen",
      position: "defender",
      isCaptain: false
    },
    {
      name: "José Luis Cuciuffo",
      position: "defender",
      isCaptain: false
    },
    {
      name: "(Captain) Diego Maradona",
      position: "midfielder",
      isCaptain: true
    },
    {
      name: "Jorge Valdano",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Héctor Enrique",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Oscar Garré",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Ricardo Giusti",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Luis Islas",
      position: "goalkeeper",
      isCaptain: false
    },
    {
      name: "Julio Olarticoechea",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Pedro Pasculli",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Nery Pumpido",
      position: "goalkeeper",
      isCaptain: false
    },
    {
      name: "Oscar Ruggeri",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Carlos Tapia",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Marcelo Trobbiani",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Héctor Zelada",
      position: "goalkeeper",
      isCaptain: false
    },
  ]
};

const headCoach = document.getElementById("head-coach");
const team = document.getElementById("team");
const year = document.getElementById("year");

headCoach.textContent = footballTeam.headCoach;
team.textContent = footballTeam.team;
year.innerText = footballTeam.year;

const playerCards = document.getElementById("player-cards");
let playercardsHTML = "";

for (const player of footballTeam.players) {
  playercardsHTML += `
    <div class="player-card">
  <h2>${player.name}</h2>
  <p>Position: ${player.position}</p>
</div>
  `;
}

playerCards.innerHTML = playercardsHTML;

const playersDropdown = document.getElementById("players");

playersDropdown.addEventListener("change", () => {
  const selectedPosition = playersDropdown.value;

  const filteredPlayers =
    selectedPosition === "all"
      ? footballTeam.players
      : footballTeam.players.filter(
          (player) => player.position === selectedPosition
        );

  playerCards.innerHTML = filteredPlayers
    .map((player) => {
      return `
        <div class="player-card">
          <h2>${player.name}</h2>
          <p>Position: ${player.position}</p>
        </div>
      `;
    })
    .join("");
});