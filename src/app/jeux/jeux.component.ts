import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styles: []
})
export class JeuxComponent implements OnInit
{ 
  playerHand = 0;
  houseHand = 0;
  isLost = false;
  isWinner = false;
  isTie = false;
  deck = new Array;
  message = '';

  shuffle()
  {
    this.deck = new Array;
    for (let i = 1 ; i <= 4 ; i++)
    {
      for (let i = 1 ; i <= 13 ; i++)
      {
        if (i === 11 || i === 12 || i === 13)
        {
          this.deck.push(10);
        }

        else
        {

          this.deck.push(i);
        }
      }
    }
  }

  getCard() : number
  {
    return this.deck[Math.floor(Math.random() * this.deck.length)];
  }

  hit()
  {
    let card = this.getCard();
    this.playerHand += card;
    this.message = 'You got a ' + card;
    if (this.playerHand > 21)
    {
      this.isLost = true;
    }
  }

  calculateHouse()
  {
    while (this.houseHand < 17)
    {
      this.houseHand += this.getCard();
    }

    if (this.houseHand > 21)
    {
      this.isWinner= true;
    }

    else if (this.houseHand === this.playerHand)
    {
      this.isTie = true;
    }

    else if (this.houseHand > this.playerHand)
    {
      this.isLost = true;
    }

    else
    {
      this.isWinner = true;
    }
  }

  restart()
  {
    this.message = '';
    this.playerHand = 0;
    this.houseHand = 0;
    this.ngOnInit();
    this.isLost = false;
    this.isWinner = false;
    this.isTie = false;
  }

  constructor() {}

  ngOnInit(): void 
  {
    this.shuffle();
    for (let i = 0 ; i < 2 ; i++)
    {
      this.playerHand += this.getCard();
      this.houseHand += this.getCard();
    }
  }

}
