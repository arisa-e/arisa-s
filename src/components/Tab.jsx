import React from 'react'

const Tab = ({ list, activeTab, onTabSwitch }) => {
    let active = activeTab === '' ? list[0] :activeTab

  return (
    <div className='sticky z-1000 bg-white'>
        <div className="container mx-auto flex align-center py-2 border-b-gray-400 border-b-1">
            {list.map((item, index)=>{
                return(
                    <div className="nav-item px-2" key={index}>
                        {/* <a href={`{#{item}}`}> */}
                            <button onClick={()=>onTabSwitch(item)}
                            className='pt-7 pb-3'>
                                <span className={`hover:text-yellow transition-colors border-b-2 ${active === item ?'border-b-yellow-400':'border-none text-slate-400'}`}>
                                    {item.toUpperCase()}
                                </span>
                            </button>
                        {/* </a> */}
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Tab