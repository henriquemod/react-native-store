/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from 'react'
import type { Business } from 'src/data/contracts'

interface AppContextType {
  order: {
    orders: Business.Order[]
    findOrder: (order: Business.Order) => Business.Order | undefined
    insertOrder: (order: Business.Order) => void
    increaseQuantity: (order: Business.Order) => void
    decreaseQuantity: (order: Business.Order) => void
  }
  favorite: {
    favorites: Business.Product[]
    findFavorite: (product: Business.Product) => Business.Product | undefined
    insertFavorite: (product: Business.Product) => void
    removeFavorite: (product: Business.Product) => void
    toggleFavorite: (product: Business.Product) => void
  }
}

export const AppContext = createContext<AppContextType>({
  order: {
    orders: [],
    findOrder: () => undefined,
    insertOrder: () => {},
    increaseQuantity: () => {},
    decreaseQuantity: () => {},
  },
  favorite: {
    favorites: [],
    findFavorite: () => undefined,
    insertFavorite: () => {},
    removeFavorite: () => {},
    toggleFavorite: () => {},
  },
})

interface Props {
  children: React.ReactNode
}

export const AppProvider: React.FC<Props> = ({ children }: Props) => {
  const [orders, setOrders] = useState<Business.Order[]>([])
  const [favorites, setFavorites] = useState<Business.Product[]>([])

  const insertOrder = (order: Business.Order) => {
    const existingOrder = findOrder(order)
    if (existingOrder) {
      increaseQuantity(existingOrder)
    } else {
      setOrders([...orders, order])
    }
  }

  const increaseQuantity = (order: Business.Order) => {
    console.log()
    const newOrders = orders.map(o =>
      o.product.id === order.product.id
        ? { ...o, quantity: o.quantity + 1 }
        : o,
    )

    setOrders(newOrders)
  }

  const decreaseQuantity = (order: Business.Order) => {
    const newOrders = orders
      .map(o => (o.id === order.id ? { ...o, quantity: o.quantity - 1 } : o))
      .filter(o => o.quantity > 0)

    setOrders(newOrders)
  }

  const findOrder = (order: Business.Order) => {
    return orders.find(o => o.product.id === order.product.id)
  }

  const insertFavorite = (product: Business.Product) => {
    setFavorites([...favorites, product])
  }

  const toggleFavorite = (product: Business.Product) => {
    const favorite = findFavorite(product)
    if (favorite) {
      removeFavorite(product)
    } else {
      insertFavorite(product)
    }
  }

  const removeFavorite = (product: Business.Product) => {
    const newFavorites = favorites.filter(f => f.id !== product.id)
    setFavorites(newFavorites)
  }

  const findFavorite = (product: Business.Product) => {
    return favorites.find(f => f.id === product.id)
  }

  const contextValue: AppContextType = {
    order: {
      orders,
      findOrder,
      insertOrder,
      increaseQuantity,
      decreaseQuantity,
    },
    favorite: {
      favorites,
      findFavorite,
      insertFavorite,
      toggleFavorite,
      removeFavorite,
    },
  }

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}
