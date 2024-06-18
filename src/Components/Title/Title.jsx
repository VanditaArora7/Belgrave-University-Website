import './Title.css'
const Title = ({subtext,maintext}) => {
  return (
    <div className='title'>
        <p>
           {subtext}
        </p>
        <h2>{maintext}</h2>
    </div>
  )
}
export default Title