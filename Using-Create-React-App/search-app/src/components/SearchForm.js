import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

export const SearchForm = () => {
  return (
    <Form inline>
      <FormGroup controlId="formInlineEmail">
        <FormControl type="search" placeholder="enter something..." />
      </FormGroup>
      {' '}
      <Button type="submit">
        search
      </Button>
    </Form>
  );
};
