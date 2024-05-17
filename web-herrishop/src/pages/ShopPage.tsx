import { Filters, ProductsContainer } from "../components";

export function ShopPage() {
  return (
    <section className="w-full p-16  h-screen grid grid-cols-[250px,1fr]">
        <Filters />
        <ProductsContainer />
    </section>
  )
}
