/*function Featurette(props) {
  let textClass = 'col-md-7'
  let imageClass = 'col-md-5'

  if (props.inversed) {
    textClass += ' order-md-2'
    imageClass += ' order-md-1'
  }
  return (
    <>
      <div className='row featurette'>
        <div className={textClass}>
          <h2 className='featurette-heading'>
            {props.title} <span className='text-muted'>{props.titleMuted}</span>
          </h2>
          <p className='lead'>{props.paragraph}</p>
        </div>
        <div className={imageClass}>
          <img src={props.image} alt={props.title} className='w-100'></img>
        </div>
      </div>
      <hr className='featurette-divider' />
    </>
  )
}

function FeaturetteContainer(props) {
  const data = props.data ?? []

  return (
    <>
      {data.map((e, k) => (
        <Featurette {...e} key={k} inversed={k % 2 === 0} />
      ))}
    </>
  )
}

export default FeaturetteContainer*/
