import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage } from '../../src/components/ProductImage';
import { product2 } from './data/products';
import { ProductCard } from '../../src/components/ProductCard';

describe('ProductImage', () => {
  test('debe mostrar el componente correctamente con el titulo personalizado', () => {
    const wrapper = renderer.create(<ProductImage img="http://hola.jpg" />);

    console.log(wrapper.toJSON());

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe mostrar el componente con la imagen del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    console.log(wrapper.toJSON());

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
