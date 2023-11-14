import './SingleCard.css'

export default function SingleCard({ cardProp }) {
  return (
    <div className="card">
      <div>
        <img className="front" src={cardProp.src} alt="card front" />
        <img className="back" src="/img/cover.png" alt="cover" />
      </div>
    </div>
  )
}
