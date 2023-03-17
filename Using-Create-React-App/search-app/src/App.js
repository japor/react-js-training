import { Container, Carousel } from 'react-bootstrap';
import { SearchForm } from './components/SearchForm';
import { Results } from './components/Results';

function App() {
  return (
    <Carousel>
      <Container>
        <h1>Search App</h1>
        <p>This is a simple search app</p>
        <SearchForm />
      </Container>
      <Results />
    </Carousel>
  );
}

export default App;
