'use client'

import { OrderType } from '@/options/types'
import { createSlice } from '@reduxjs/toolkit'

export interface appState {
  orders: OrderType[]
  view: 'grid' | 'list'
  loadFilter: boolean
  loadSort: boolean
  loadPager: boolean
}

const initialState: appState = {
  orders: [],
  view: 'grid',
  loadFilter: false,
  loadSort: false,
  loadPager: false
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {

    // view
    setView: (state, action) => {
      state.view = action.payload
      localStorage.setItem('view', action.payload)
    },

    // setLoad
    setLoadFilter: (state, action) => {
      state.loadFilter = action.payload
    },
    setLoadSort: (state, action) => {
      state.loadSort = action.payload
    },
    setLoadPager: (state, action) => {
      state.loadPager = action.payload
    },
    
    // setOrder
    setOrder: (state, action) => {
      const newOrder = { ...action.payload, count: 1 }
      let existOrder = state.orders.find(el => {
        if (el.id === action.payload.id)
        return el
      })

      if (existOrder) {
        state.orders.map(el => {
          if (el.id === action.payload.id) {
            el.count! += 1
            el.total = Number(el.count) * el.price
          }
          return el
        })
      } else {
        state.orders = [...state.orders, newOrder]
      }
      localStorage.setItem('orders', JSON.stringify(state.orders))
    },

    // setOrders
    setOrders: (state, action) => {
      state.orders = JSON.parse(action.payload)
    },

    // removeOrder
    removeOrder: (state, action) => {
      const updatedOrders = state.orders.filter(el => el.id !== action.payload)
      state.orders = updatedOrders
      localStorage.removeItem('orders')
      localStorage.setItem('orders', JSON.stringify(updatedOrders))
    },

    // changeCountOrder
    changeCountOrder: (state, action) => {
      const { id, count } = action.payload
      let currentOrder = state.orders.find(el => el.id === id)
      currentOrder!.count = count
      currentOrder!.total = currentOrder!.price * Number(count)
      localStorage.removeItem('orders')
      localStorage.setItem('orders', JSON.stringify(state.orders))
    }
  },
})

// Action creators are generated for each case reducer function
export const { setView, setLoadFilter, setLoadSort, setLoadPager, setOrder, changeCountOrder, setOrders, removeOrder } = appSlice.actions

export default appSlice.reducer