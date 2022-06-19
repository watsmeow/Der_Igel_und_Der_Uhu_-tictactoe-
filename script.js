
const square = (document.querySelectorAll('.gridItem'))




class TicTacToe {
    constructor(square) {
        this.square = square
        this.player = true
        this.square.forEach((item, index) => item.addEventListener('click', () => {
            this.placeAPiece(index)
        }
        ))
    }

    placeAPiece(location) {
        if (this.square[location].querySelector('.Hedgehog').style.display == 'block' || this.square[location].querySelector('.Owl').style.display == 'block') {
            return
        } else if (this.player == true) {
            this.square[location].querySelector('.Hedgehog').style.display = 'block'
            setTimeout(() => {
                this.winnerWinner('.Hedgehog')  
            }, 1000);
            
        } else if (this.player == false) {
            this.square[location].querySelector('.Owl').style.display = 'block'
            setTimeout(() => {
                this.winnerWinner('.Owl')  
            }, 1000);
        }
        this.switchPlayer()

    }



    switchPlayer() {
        this.player = !this.player
    }



    winnerWinner(animal) {
        if (this.square[0].querySelector(animal).style.display == 'block' 
        && this.square[1].querySelector(animal).style.display == 'block'
        && this.square[2].querySelector(animal).style.display == 'block') {
            if (animal == '.Owl') {
                alert(`Uhu ist der Gewinner`)
            } else {
                alert(`Igel ist der Gewinner`)
            }
        } else if (this.square[3].querySelector(animal).style.display == 'block' 
        && this.square[4].querySelector(animal).style.display == 'block'
        && this.square[5].querySelector(animal).style.display == 'block') {
            if (animal == '.Owl') {
                alert(`Uhu ist der Gewinner`)
            } else {
                alert(`Igel ist der Gewinner`)
            }
        } else if (this.square[6].querySelector(animal).style.display == 'block' 
        && this.square[7].querySelector(animal).style.display == 'block'
        && this.square[8].querySelector(animal).style.display == 'block') {
            if (animal == '.Owl') {
                alert(`Uhu ist der Gewinner`)
            } else {
                alert(`Igel ist der Gewinner`)
            }
        } else if (this.square[0].querySelector(animal).style.display == 'block' 
        && this.square[3].querySelector(animal).style.display == 'block'
        && this.square[6].querySelector(animal).style.display == 'block') {
            if (animal == '.Owl') {
                alert(`Uhu ist der Gewinner`)
            } else {
                alert(`Igel ist der Gewinner`)
            }
        } else if (this.square[1].querySelector(animal).style.display == 'block' 
        && this.square[4].querySelector(animal).style.display == 'block'
        && this.square[7].querySelector(animal).style.display == 'block') {
            if (animal == '.Owl') {
                alert(`Uhu ist der Gewinner`)
            } else {
                alert(`Igel ist der Gewinner`)
            }
        } else if (this.square[2].querySelector(animal).style.display == 'block' 
        && this.square[5].querySelector(animal).style.display == 'block'
        && this.square[8].querySelector(animal).style.display == 'block') {
            if (animal == '.Owl') {
                alert(`Uhu ist der Gewinner`)
            } else {
                alert(`Igel ist der Gewinner`)
            }
        } else if (this.square[0].querySelector(animal).style.display == 'block' 
        && this.square[4].querySelector(animal).style.display == 'block'
        && this.square[8].querySelector(animal).style.display == 'block') {
            if (animal == '.Owl') {
                alert(`Uhu ist der Gewinner`)
            } else {
                alert(`Igel ist der Gewinner`)
            }
        } else if (this.square[6].querySelector(animal).style.display == 'block' 
        && this.square[4].querySelector(animal).style.display == 'block'
        && this.square[2].querySelector(animal).style.display == 'block') {
            if (animal == '.Owl') {
                alert(`Uhu ist der Gewinner`)
            } else {
                alert(`Igel ist der Gewinner`)
            }
        }
    }
}

let board = new TicTacToe(square) 


