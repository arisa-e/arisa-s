import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AddressForm, Button, Summary, Tab } from '../components'
// import useTabSwitch from '../hooks/useTabSwitch'
import { cartProducts } from "../store/cart/cartSlice"


const Cart = () => {

  const cart= useSelector(cartProducts)
  const tabs=['Summary', 'Delivery', 'Payment']
  const [currentTab, setCurrentTab] = useState('Summary')
  // const {currentTab, handleTabSwitch} = useTabSwitch(tabs, Summary)

  useEffect(()=>{
    setCurrentTab('Summary')
  },[])

  const handleTabSwitch =(tab)=>{
    setCurrentTab(tab)
  }

  if (!cart || cart.length === 0){
    return(
      <div className='h-full flex flex-col justify-center items-center p-4 bg-white '>
        <h1 className='text-4xl'>Your Cart is empty</h1>
        <Link className='text-3xl' to='/menu'>Menu</Link>
      </div>
    )
  } 

  return (
    <div className='bg-white  mx-auto mt-2 border border-gray-200 p-4 md:w-2/3 rounded-lg shadow-md sm:p-6 lg:p-8'>
      <Tab list={tabs} onTabSwitch={handleTabSwitch} activeTab={currentTab}/>
      <div className={`tabs ${currentTab !== 'Summary' ? 'hidden': ''}`}>
        <Summary/>
        <div className="flex justify-end p-2">
          <Button variant ='dark' 
          className='flex items-center'
          onClick={()=>handleTabSwitch('Delivery')}>
            <span className="mr-1">Next</span>
          </Button>
        </div>
      </div>
        <div className={`tabs ${currentTab !== 'Delivery' ? 'hidden':''}`}>
          <AddressForm onTabSwitch={handleTabSwitch}/>
        </div>
        <div className={`tabs ${currentTab !== 'Payment' ? 'hidden':''}`}>
          {/* <StripeWrapper/> */}
        </div>
    </div>
  )
}

export default Cart