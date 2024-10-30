import { useState } from 'react'



function App() {

  // const [firstName, lastName, emailAdd, quiryType, message] = useState({})
  // initial state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName:"",
    emailAdd: "",
    quiryType: "",
    message: "",
  })

  const onChangeHandler = (e) =>{
    console.log(e);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value

    })
    
  }

  const onSubmitHandler= (e)=>{
    e.preventDefault()
    console.log(formData);
    

  }

  return (
    <>
      <div className='bg-lightGreen h-screen font-karla text-base '>
        <div className='container mx-auto py-[140px] h-[770px] w-[736px] '>
          <div className='bg-white rounded-lg p-12 '>
            <h2 className='text-[28px] font-bold py-[18px] '>Contact us</h2>
            <form onSubmit={onSubmitHandler}>
              {/* name input */}
              <div className=' flex justify-between my-3 '>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="firstName">First Name *</label>
                  <input 
                    type="text"
                    name='firstName'
                    value={formData.firstName}
                    onChange={onChangeHandler}

                    className='border rounded-md p-1 w-[310px] h-[36px] outline-none '
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="lastName">Last name *</label>
                  <input 
                    type="text"
                    name='lastName'
                    value={formData.lastName}
                    onChange={onChangeHandler}

                    className='border rounded-md p-1 w-[310px] h-[36px] outline-none'
                  />
                </div>
              </div>
              {/* email */}
              <div className='flex flex-col gap-2 capitalize my-3'>
                <label htmlFor="emailAdd">email address *</label>
                <input 
                  type="email"
                  name='emailAdd'
                  value={formData.emailAdd}
                  onChange={onChangeHandler}

                  className='border rounded-md h-[36px] px-2 outline-none '
                />
              </div>
              {/* querry type */}
              <div>
                <h2 className='text-[18px] py-[18px] '>Query type *</h2>
                <div className='flex gap-2'>
                  <div className='border rounded-lg px-5 py-2 flex items-center capitalize '>
                    <input type="radio" 
                      name='quiryType'
                      id='quiryType'
                      className=''
                    />
                    <label className='pl-3' htmlFor="generalEnquiry">general enquiry</label>
                  </div>
                  <div className='border rounded-lg px-5 py-2 flex items-center capitalize'>
                    <input 
                      type="radio"
                      name='quiryType'
                      id='quiryType'
                      className=''
                    />
                    <label className='pl-3' htmlFor="supportEnquiry">support request</label>
                  </div>
                </div>
                
              </div>
              {/* message */}
              <div className='my-4'>
                <h2 className='my-2 capitalize'>message *</h2>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={onChangeHandler}

                  rows={5}
                  className='w-full border rounded-md p-1 outline-none'
                ></textarea>
              </div>
              {/* btn */}
              <div>
                <div className=' py-4 flex items-center'>
                  <input type="checkbox" id='checkbox' name='checkbox' />
                  <label className=' pl-2' htmlFor="checkbox">I consent to being contacted by the team *</label>
                </div>
                <button className='w-full bg-darkGreen text-white rounded-md py-3  '>
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
