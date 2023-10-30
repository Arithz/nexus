import React from 'react'

const TopicBar = () => {
  return (
    <>
    <div className = "grid grid-cols-5 gap-2 mb-4">
      {[...Array(10)].map((_, i: number) => (
        <p className = "border border-cs-fade3 py-1 px-3 text-center">Item {i}</p>
      ))}
    </div>
    <hr/>
    </>
  )
};

function Marketplace() {
  return (
    <>
    marketplace
    <div className = "h-full w-full py-4 bg-cs-white border border-cs-border-fade rounded px-4">
      <TopicBar/>
    </div>
    </>
    
  )
}

export default Marketplace;