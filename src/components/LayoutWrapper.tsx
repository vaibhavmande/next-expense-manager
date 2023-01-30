import React from 'react'
import Header from '@/components/Header'

function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen gap-8 max-w-3xl m-auto">
      <Header />
      <main className="flex-1 m-auto max-w-md">{children}</main>
      <footer>Footer</footer>
    </div>
  )
}

export default LayoutWrapper
