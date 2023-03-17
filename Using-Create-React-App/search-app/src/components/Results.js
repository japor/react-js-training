import {
  Container,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';

export const Results = () => {
  return (
    <Container>
      <h2>Results List</h2>
      <ListGroup>
        <ListGroupItem href="#" active>Link 1</ListGroupItem>
        <ListGroupItem href="#">Link 2</ListGroupItem>
        <ListGroupItem href="#" disabled>Link 3</ListGroupItem>
      </ListGroup>
    </Container>
  );
};
