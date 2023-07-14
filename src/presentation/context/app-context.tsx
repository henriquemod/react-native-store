/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from 'react'
import type { Business } from 'src/data/contracts'

interface AppContextType {
  orders: Business.Order[]
  findOrder: (order: Business.Order) => Business.Order | undefined
  insertOrder: (order: Business.Order) => void
  increaseQuantity: (order: Business.Order) => void
  decreaseQuantity: (order: Business.Order) => void
}

export const AppContext = createContext<AppContextType>({
  orders: [],
  findOrder: () => undefined,
  insertOrder: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
})

interface Props {
  children: React.ReactNode
}

export const AppProvider: React.FC<Props> = ({ children }: Props) => {
  const [orders, setOrders] = useState<Business.Order[]>([])

  const insertOrder = (order: Business.Order) => {
    setOrders([...orders, order])
  }

  const increaseQuantity = (order: Business.Order) => {
    const newOrders = orders.map(o => {
      if (o.id === order.id) {
        return { ...o, quantity: o.quantity + 1 }
      }
      return o
    })

    setOrders(newOrders)
  }

  const decreaseQuantity = (order: Business.Order) => {
    const newOrders = orders.map(o => {
      if (o.id === order.id) {
        return { ...o, quantity: o.quantity - 1 }
      }
      return o
    })

    setOrders(newOrders)
  }

  const findOrder = (order: Business.Order) => {
    return orders.find(o => o.id === order.id)
  }

  const contextValue: AppContextType = {
    orders,
    findOrder,
    insertOrder,
    increaseQuantity,
    decreaseQuantity,
  }

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}
