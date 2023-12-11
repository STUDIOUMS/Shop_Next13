'use client'

import { store } from './store'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        {children}
      </Provider>
    </QueryClientProvider>
  )
}