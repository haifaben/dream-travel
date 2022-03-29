import Icons from './Icons'
import Featurette from './Featurette'

function Marketing(props) {
  return (
    <div className='container marketing'>
      <Icons data={props.icons} />
      <Featurette data={props.featurettes} />
    </div>
  )
}

export default Marketing
