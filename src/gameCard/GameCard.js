import './gameCard.css'

function GameCard(props) {
  const clickHandler = () => {
    console.log('clicked');
  }
  return (
    <div className='gameCard' onClick={clickHandler} >card</div>
  )
}

export default GameCard