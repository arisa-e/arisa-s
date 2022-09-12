import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MenuCard, Tab } from '../components'
import { addToCart } from '../store/cart/cartSlice'
import { fetchProducts, selectAllProducts } from '../store/menu/menuSlice'


const Menu = () => {
  const dispatch = useDispatch()
  const products = useSelector(selectAllProducts)
  const [activeTab, setActiveTab]=useState('')
  const [tabIndex, setTabIndex]=useState(0)

  useEffect(()=>{
    dispatch(fetchProducts())
  }, [dispatch])


  const onAddProduct = (product)=>{
    dispatch(addToCart(product))
  }

  const onTabSwitch=(newActiveTab)=>{
    setActiveTab(newActiveTab)
    let categories = products.products.map((product)=>product.name.name)
    let index = categories.findIndex(category =>newActiveTab === category)
    if(index > -1){
      setTabIndex(index)
    }else{
      setActiveTab(0)
    }
  }

  return (
    <div className="bg-white">
      {
        products.status !== 'fulfilled' ?
        <div>Loading ... </div> :
        <div className='menu-wrapper'>
          {
            products.products &&
            <Tab
            list={products.products.map((product)=>product.name.name)}
            activeTab={activeTab}
            onTabSwitch={onTabSwitch}

            />
          }
            <div className="flex flex-row mx-3">
              {
                products.products && products.products[tabIndex].products.map((product, index)=>{
                  return(
                    <MenuCard key={index} product={product} onAddProduct={onAddProduct}/>
                  )
                })
              }
            </div>
        </div>
      }
    </div>
  )
}

export default Menu