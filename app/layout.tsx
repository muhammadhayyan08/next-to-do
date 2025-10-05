"use client";
import './global.css'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <div className="min-h-screen bg-slate-50 p-6">
            <div className="max-w-3xl mx-auto">
              <header className="mb-6">
                <h1 className="text-3xl font-bold">Next.js + Redux To‑Do</h1>
              
              </header>
              <main>{children}</main>
            </div>
          </div>
        </Provider>
      </body>
    </html>
  )
}
