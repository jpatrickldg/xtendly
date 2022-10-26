import FormSection from './components/FormSection';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mt-6 md:hidden w-full">
        <FormSection />
      </div>
    </div>
  );
}

export default App;