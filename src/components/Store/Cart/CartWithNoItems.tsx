import EmptyCartIcon from "@/components/Icons/EmptyCartIcon"

export default function CartWithNoItems() {
  return (
    <div className="my-28 flex flex-col items-center space-y-5">
      <EmptyCartIcon />
      <h4
        className="w-1/2 text-center text-gray-600 text-2xl"
      >
        Your cart is empty
      </h4>
    </div>
  )
}