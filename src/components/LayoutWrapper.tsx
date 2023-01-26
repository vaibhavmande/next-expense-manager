import React from 'react'

function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <header>This is my header</header>
      <main className="flex-1 m-auto max-w-md">{children}</main>
      <footer>This is my footer</footer>
    </div>
  )
}

export default LayoutWrapper
