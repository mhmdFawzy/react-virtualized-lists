import './app.css'
import VirtualizedTable from './components/VirtualizedTable'

function App() {
  return (
    <div>
      <h1 className="text-primary text-4xl font-bold">Tickets tracker</h1>
      <VirtualizedTable numberOfRows={10000} />
    </div>
  )
}
export default App
