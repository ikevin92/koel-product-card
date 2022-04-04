# KOEL-Product-card

Este es un paquete de pruebas de despliegue en NPM


### Kevin Echeverri

### Ejemplo
```
import  {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'koel-product-card'
```

```
<ProductCard
  product={product}
  initialValues={{
    count: 6,
    // maxCount: 10,
  }}>
  {({ reset, isMaxCountReached, maxCount, increaseBy, count }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```