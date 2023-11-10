export default function Title({ title, subtitle }) {
  return (
    <>
      <h1 className="title">{title}</h1>
      <br />
      <h2 className="subtitle">{subtitle}</h2>
      <h3>I'm an H3 comming from the Component Title</h3> 
    </>
  )
}
