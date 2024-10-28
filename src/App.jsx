import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-green-200 h-screen'>
        <div className='container mx-auto py-[200px] '>
          <h2>Contact us</h2>
          <form>
            <div>
              <div>
                <label htmlFor="firstName">First Name *</label>
                <input 
                  type="text"
                  id='firstName'
                  name='firstName'
                  className=''
                />
              </div>
              <div>
                <label htmlFor="lastName">Last name *</label>
                <input 
                  type="text"
                  name='lastName'
                  id='lastName'
                  className=''
                />
              </div>
            </div>
            <div>
              <label htmlFor="emailAdd">email address *</label>
              <input 
                type="email"
                id='emailAdd'
                name='emailAdd'
                className=''
              />
            </div>
            <div>
              <h2>Query type *</h2>
              <div>
                <div>
                  <input type="radio" 
                    name='generalEnquiry'
                    id='generalEnquiry'
                    className=''
                  />
                  <h2>general enquiry</h2>
                </div>
                <div>
                  <input 
                    type="radio"
                    name='generalEnquiry'
                    id='generalEnquiry'
                    className=''
                  />
                  <h2>support request</h2>
                </div>
              </div>
              
            </div>
            <div>
              <h2>message *</h2>
              <textarea 
                name="message"
                id="message"
                rows={5}
                />
            </div>

            <div>
              <div>
              <input type="checkbox"  />
              <label htmlFor="checkbox">I consent to being contacted by the team *</label>
              </div>
              <button>
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
