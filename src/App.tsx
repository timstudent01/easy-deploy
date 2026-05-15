import { useState } from 'react'
import { Button } from '@/components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-6 p-8 text-center">
      <h1 className="text-4xl font-bold tracking-tight">easy-deploy</h1>
      <p className="text-muted-foreground">
        Vite + React + TypeScript + Tailwind + shadcn/ui
      </p>
      <Button onClick={() => setCount((n) => n + 1)}>Count is {count}</Button>
    </main>
  )
}

export default App
