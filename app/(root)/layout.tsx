import React from 'react'
import Header from '@/components/Header'

const layout = async ({children}: {children: React.ReactNode}) => {
  return (
    <main className="min-h-screen text-yellow-400">
     <Header/>
     <div className="container py-10">
      {children}
      </div>
      
    </main>
  )
}

export default layout