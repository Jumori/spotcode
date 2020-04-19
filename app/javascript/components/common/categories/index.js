import React, { Fragment, useState, useEffect } from 'react';
import { Columns, Image, Section } from 'react-bulma-components';
import CategoriesService from './../../../services/categories';
import styled from 'styled-components';

const DivVerticalSpaced = styled.div `
  margin-top: 50px;
`;

const LinkImage = styled(Image) `
  cursor: pointer;
`;

export default function Categories(props) {
  const [categories, setCategories] = useState([]);

  const categories_list = categories.map((category, key) => 
   <Columns.Column desktop={{size: 3}} mobile={{size: 6}} key={key}>
     <LinkImage src={category.image_url} onClick={() => props.fetchCategorySearch(category.id)}></LinkImage>
   </Columns.Column>
  );

  // AUX FUNCTIONS -------------------------------------------------------------
  async function fetchCategories() {
    const response = await CategoriesService.index();
    setCategories(response.data.categories);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return(
    <Fragment>
      <DivVerticalSpaced>
        <Columns className='is-mobile'>
          {categories_list}
        </Columns>
      </DivVerticalSpaced>
    </Fragment>
  )
}