import './card.css'

function Card(params) {
   return <div className={'card ' + params.className}>{params.children}</div>
}

export default Card