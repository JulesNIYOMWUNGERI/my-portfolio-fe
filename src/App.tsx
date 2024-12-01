import { Provider } from 'react-redux'
import { store } from './store/store'
import { RouterProvider } from 'react-router-dom'
import { PrimeReactProvider } from 'primereact/api'
import router from './routes'

function App() {

  return (
    <Provider store={store}>
      <PrimeReactProvider>
        <h1 className="">
          <RouterProvider router={router} />
        </h1>
      </PrimeReactProvider>
    </Provider>
  )
}

export default App
