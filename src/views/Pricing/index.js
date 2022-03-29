/*function PricingCard(props) {
  let cardClassName = 'card mb-4 rounded-3 shadow-sm'
  let cardHeaderClassName = 'card-header py-3'

  if (props.cardVarient) {
    cardClassName += ' border-' + props.cardVarient
    cardHeaderClassName += ' border-' + props.cardVarient
    cardHeaderClassName += ' bg-' + props.cardVarient
  }
  const darkVarients = ['primary', 'secondary', 'success', 'danger', 'dark']

  if (darkVarients.includes(props.cardVarient)) {
    cardHeaderClassName += ' text-white'
  }

  return (
    <div className='col'>
      <div className={cardClassName}>
        <div className={cardHeaderClassName}>
          <h4 className='my-0 fw-normal'>{props.title}</h4>
        </div>
        <div className='card-body'>
          <h1 className='card-title pricing-card-title'>
            ${props.price}
            <small className='text-muted fw-light'>/mo</small>
          </h1>
          <ul class='list-unstyled mt-3 mb-4'>
            {props.listItems.map((e, k) => (
              <li key={k}>
                <i className={e.icon}></i> {e.text}
              </li>
            ))}
          </ul>
          <button type='button' class={props.btnClassName}>
            {props.btnText}
          </button>
        </div>
      </div>
    </div>
  )
}

const cardsData = [
  {
    title: 'Free',
    price: 0,
    listItems: [
      { icon: 'fas fa-users', text: '10 users included' },
      { icon: 'fas fa-boxes', text: '2 GB of storage' },
      { icon: 'fas fa-envelope-open-text', text: 'Email support' },
      { icon: 'fas fa-question-circle', text: 'Help center access' },
    ],
    btnText: 'Sign up for free',
    cardVarient: 'warning',
    btnClassName: 'w-100 btn btn-lg btn-outline-primary',
  },
  {
    title: 'Pro',
    price: 15,
    listItems: [
      { icon: 'fas fa-users', text: '20 users included' },
      { icon: 'fas fa-boxes', text: '10 GB of storage' },
      { icon: 'fas fa-envelope-open-text', text: 'Priority email support' },
      { icon: 'fas fa-question-circle', text: 'Help center access' },
    ],
    btnText: 'Get started',
    cardVarient: 'danger',
    btnClassName: 'w-100 btn btn-lg btn-primary',
  },
  {
    title: 'Enterprise',
    price: 29,
    listItems: [
      { icon: 'fas fa-users', text: '30 users included' },
      { icon: 'fas fa-boxes', text: '15 GB of storage' },
      { icon: 'fas fa-envelope-open-text', text: 'Phone and email support' },
      { icon: 'fas fa-question-circle', text: 'Help center access' },
    ],
    btnText: 'Contact us',
    cardVarient: 'primary',
    btnClassName: 'w-100 btn btn-lg btn-primary',
  },
]

function Pricing() {
  return (
    <div id='pricing-view'>
      <svg xmlns='http://www.w3.org/2000/svg' style={{ display: 'none' }}>
        <symbol id='check' viewBox='0 0 16 16'>
          <title>Check</title>
          <path d='M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z' />
        </symbol>
      </svg>

      <div class='container py-5'>
        <header>
          <div class='pricing-header p-3 pb-md-4 mx-auto text-center'>
            <h1 class='display-4 fw-normal'>Pricing</h1>
            <p class='fs-5 text-muted'>
              Quickly build an effective pricing table for your potential customers with this
              Bootstrap example. It’s built with default Bootstrap components and utilities with
              little customization.
            </p>
          </div>
        </header>

        <main>
          <div class='row row-cols-1 row-cols-md-3 mb-3 text-center'>
            {cardsData.map((e, k) => (
              <PricingCard key={k} {...e} />
            ))}
          </div>

          <h2 class='display-6 text-center mb-4'>Compare plans</h2>

          <div class='table-responsive'>
            <table class='table text-center'>
              <thead>
                <tr>
                  <th style={{ width: '34%;' }}></th>
                  <th style={{ width: '22%;' }}>Free</th>
                  <th style={{ width: '22%;' }}>Pro</th>
                  <th style={{ width: '22%;' }}>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row' class='text-start'>
                    Public
                  </th>
                  <td>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      class='bi bi-check'
                      viewBox='0 0 16 16'>
                      <path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z' />
                    </svg>
                  </td>
                  <td>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      class='bi bi-check'
                      viewBox='0 0 16 16'>
                      <path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z' />
                    </svg>
                  </td>
                  <td>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      class='bi bi-check'
                      viewBox='0 0 16 16'>
                      <path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z' />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <th scope='row' class='text-start'>
                    Private
                  </th>
                  <td></td>
                  <td>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      class='bi bi-check'
                      viewBox='0 0 16 16'>
                      <path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z' />
                    </svg>
                  </td>
                  <td>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      class='bi bi-check'
                      viewBox='0 0 16 16'>
                      <path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z' />
                    </svg>
                  </td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <th scope='row' class='text-start'>
                    Permissions
                  </th>
                  <td>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      class='bi bi-check'
                      viewBox='0 0 16 16'>
                      <path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z' />
                    </svg>
                  </td>
                  <td>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      class='bi bi-check'
                      viewBox='0 0 16 16'>
                      <path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z' />
                    </svg>
                  </td>
                  <td>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      class='bi bi-check'
                      viewBox='0 0 16 16'>
                      <path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z' />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <th scope='row' class='text-start'>
                    Sharing
                  </th>
                  <td></td>
                  <td>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      class='bi bi-check'
                      viewBox='0 0 16 16'>
                      <path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z' />
                    </svg>
                  </td>
                  <td>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      class='bi bi-check'
                      viewBox='0 0 16 16'>
                      <path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z' />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <th scope='row' class='text-start'>
                    Unlimited members
                  </th>
                  <td></td>
                  <td>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      class='bi bi-check'
                      viewBox='0 0 16 16'>
                      <path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z' />
                    </svg>
                  </td>
                  <td>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      class='bi bi-check'
                      viewBox='0 0 16 16'>
                      <path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z' />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <th scope='row' class='text-start'>
                    Extra security
                  </th>
                  <td></td>
                  <td></td>
                  <td>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      class='bi bi-check'
                      viewBox='0 0 16 16'>
                      <path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z' />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  )
}
export default Pricing*/
