import './app.css';
import ProductsForm from './components/ProductsForm'
import ProductList from './components/ProductsList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="main-container">
        <h1 style={{
          fontSize: "2.5rem",
          marginBottom: "2rem"
        }}> My Product list</h1>
        <ProductsForm/>
        <ProductList/>
        <ReactQueryDevtools initialIsOpen={false} />
      </div>

    </QueryClientProvider>
  );
}
export default App;