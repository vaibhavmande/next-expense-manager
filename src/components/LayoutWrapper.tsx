import React from 'react'

function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <header>Header</header>
      <main className="flex-1 m-auto max-w-md">{children}</main>
      <footer>Footer</footer>
    </div>
  )
}

export default LayoutWrapper
