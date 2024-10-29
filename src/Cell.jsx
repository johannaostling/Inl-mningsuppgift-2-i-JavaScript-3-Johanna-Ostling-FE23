import styles from './Cell.module.css'




function Cells({cell, onClick}){


 const onClickLocal = () =>{
    console.log('click på ', cell)
        onClick()
 }

return(
    <>
        <div className={styles.CellInlineStyle} onClick={onClickLocal}>
        {cell.visible ? (cell.hasMine ? "B" : cell.numberOfNeighbouringMines) : ""}
        </div>
    </>
)

}
export default Cells