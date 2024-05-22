import { Filters, ProductsContainer } from "../components";
import useShop from "../hooks/useShop";
import { Brand, Category } from "../types/entities";

type Filter={
  brands: Array<Brand["id"]>,
  category: Category["id"]
}

export function ShopPage() {
  const {brandsFilters, products, setProductsFilter, productsFilter} = useShop()

  const handleFilter=( filter : Filter  )=>{
    const { brands, category } = filter
    const filters= products.filter( item => category ? item.category.id === category : true && brands.length ? brands.includes(item.brand.id) : true )
      setProductsFilter([...filters])
  }

  return (
    <section className="w-full p-16  h-screen grid grid-cols-[250px,1fr]">
        <Filters handleFilter= { handleFilter } brandsFilters={brandsFilters}  />
        <ProductsContainer products={ productsFilter} />
    </section>
  )
}
