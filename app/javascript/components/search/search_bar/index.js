import React, { Fragment, useState } from 'react';
import { Form } from 'react-bulma-components';

export default function SearchBar(props) {
  const [query, setQuery] = useState('');

  const Search = (e) => {
    if (e.key === 'Enter') props.fetchSearch(query);
  };

  return(
    <Fragment>
      <Form.Field onKeyDown={Search}>
        <Form.Control iconRight>
          <Form.Input
            placeholder='Albums, artists or songs'
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </Form.Control>
      </Form.Field>
    </Fragment>
  )
}