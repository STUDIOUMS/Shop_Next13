'use client'

import { redirect } from 'next/navigation'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const orders = localStorage.getItem('orders')
  if (!orders) redirect('/')
  return (
    <div>
      {children}
    </div>
  )
}