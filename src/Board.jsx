import React from "react";
import createBoard from './utils'
import Cells from "./Cell";
import styles from "./Board.module.css"



class Board extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            board: createBoard(25, 7)
        }
        console.log(this.state)
    }

    renderCell(e){
        // skapa array med cell
       let arrayWithCells= []

        for (let i = 0; i < this.state.board.length; i++) {
            arrayWithCells.push(<
                Cells key={i} 
                cell={this.state.board[i]} 
                onClick={() => this.handleCellClick(i)} 
            />)
        }
        // returnera array
        return arrayWithCells;
    }

    // Reset page
    timeout = () => {
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    }

    handleCellClick= (index) =>{
        let newBoard = [...this.state.board]
        newBoard[index].visible = true
        this.setState({board:newBoard})

        console.log('handleCellClick')

        // har den en mina?
        if(newBoard[index].hasMine === true){
            console.log('booom')
            this.setState({ board: newBoard, gameOver: true });
            this.timeout();
             
        }
        else{
            console.log('not boom')
            if( newBoard.every(cell => cell.hasMine || cell.visible)){
                this.setState({won:true})
                this.timeout()
                console.log('you win')
            }

        }
    }
   
render(){


    return(
        <>
            {this.state.gameOver? 
            (
                <div className={styles.GameOverMessage}>
                    BOOOOOOOOOM <br />
                    Game Over
                </div>
            ):this.state.won ? 
                (<div className={styles.WinMessage}>
                    You Win!
                </div>):
            (            
                <div className={styles.BoardGrid}>
                    {this.renderCell()}
                </div>
            )}

        </>
    )

}
    
}

export default Board