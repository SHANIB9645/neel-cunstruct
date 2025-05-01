import React from 'react'
import PhotoGallery from './PhotoGallery'
import ContractValue from './ContractValue'
import TargetCard from './TargetCard'
import PaymentCard from './PaymentCard'
import CostStatus from './CostStatus'

function ProjectRight() {
  return (
    <div className='border border-[#ffffff1a] backdrop-blur-[17] rounded-[5px] bg_gradiant_main relative h-full px-4 py-4'>
        <PhotoGallery />
        <ContractValue />
        <TargetCard />
        <PaymentCard   />
        <CostStatus />
    </div>
  )
}

export default ProjectRight