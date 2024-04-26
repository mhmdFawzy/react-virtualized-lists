import './app.css'
import { VirtualizedList } from './components/VirtualizedList/VirtualizedList'

function App() {
  return (
    <div>
      <h1 className="text-primary text-4xl font-bold">Tickets tracker</h1>
      <VirtualizedList numberOfItems={10000} />
    </div>
  )
}
export default App
