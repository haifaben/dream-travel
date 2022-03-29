import { useState } from 'react'

function Carousel() {
  const [show, setShow] = useState(false)

  return (
    <>
      <button onClick={() => setShow(!show)} className='btn btn-light'>
        {show ? 'Show less' : 'Show more'}
      </button>
      {show && (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae diam mauris. In a
          rutrum ligula. Nulla a convallis odio, vel dictum lectus. Curabitur non dui sagittis,
          condimentum est at, venenatis justo. Morbi feugiat nisl nulla, nec vulputate ligula
          dapibus vel. Proin tempus mollis mollis. Etiam pretium ipsum odio, et tincidunt lorem
          lobortis ac.
        </p>
      )}
    </>
  )
}

export default Carousel
