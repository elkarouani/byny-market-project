import ProductNotFoundIcon from "@/components/Icons/ProductNotFoundIcon"

export default function ProductNotFound() {
  return (
    <div className="my-[12.75rem] flex flex-col items-center space-y-5">
      <ProductNotFoundIcon />
      <h4
        className="w-1/2 text-center text-gray-600 text-2xl"
      >
        Aucun produit trouvé
      </h4>
    </div>
  )
}