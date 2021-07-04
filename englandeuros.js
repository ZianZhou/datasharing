let team = {
  _players: [
    {
      firstName: 'Harry',
      lastName: 'Kane',
      age: 27
    },
    {
      firstName: 'Raheem',
      lastName: 'Sterling',
      age: 26
    },
    {
      firstName: 'Jadon',
      lastName: 'Sancho',
      age: 21
    }  
  ],
  _games: [
    {
      opponent: 'Czech Republic',
      teamPoints: 1,
      opponentPoints: 0
    },
    {
      opponent: 'Germany',
      teamPoints: 2,
      opponentPoints: 0
    },
    {
      opponent: 'Ukraine',
      teamPoints: 4,
      opponentPoints: 0
    }
  ],
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  addPlayer(firstName,lastName,age){
    let newPlayer ={
      firstName,
      lastName,
      age
    }
    this._players.push(newPlayer);
  },
  addGame(opponent, teamPoints, opponentPoints){
    let newGame = {
      opponent,
      teamPoints,
      opponentPoints
    }
    this._games.push(newGame);
  }
}
team.addPlayer('Jack', 'Grealish', 25);
team.addPlayer('Jordan', 'Pickford', 27);
team.addPlayer('Kalvin','Phillips', 25);
team.addGame('Scotland', 0, 0);
team.addGame('Croatia', 1, 0);
team.addGame('Romania', 1, 0);

console.log(team.players);
console.log(team.games);


