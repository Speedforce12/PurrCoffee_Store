import { GetUserOrders } from '@/actions/get-userOrder'
import { currentUser } from '@clerk/nextjs'
import React from 'react'

const HistoryPage = async () => {

  const user = await currentUser()
  const orderHistory = await GetUserOrders(user.id)

  console.log(orderHistory)
  return (
    <div className='flex flex-col mt-5'>
      <div>
        <h1 className='font-bold md:text-2xl text-xl'>Order History</h1>
        <p className='text-sm text-gray-400 font-semibold'>View your previous Orders</p>
      </div>

      <div>
        
      </div>
    </div>
  )
}

export default HistoryPage