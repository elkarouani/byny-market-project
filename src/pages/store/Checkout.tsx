import ActionButton from "@/components/UI/MyButtons/ActionButton";
import SimpleInput from "@/components/UI/MyInputs/SimpleInput";
import HeadlessLayout from "@/layouts/HeadlessLayout";

export default function CheckoutPage() {
	return (
		<div>
			<HeadlessLayout.PageTitle title="Checkout" />
			<form action="#" className="checkout-page__form">
				<div className="space-y-8">
					<SimpleInput
						id="FullNameInput"
						label="Full Name :"
						placeholder="ex: john doe"
					/>
					<SimpleInput
						id="CreditCardNumberInput"
						label="Credit Card Number :"
						placeholder="0000 0000 0000 0000"
					/>
					<div className="grid grid-cols-3 gap-x-8 content-center">
						<div className="col-span-1">
							<SimpleInput
								id="CVCInput"
								label="CVC :"
								placeholder="•••"
							/>
						</div>
						<div className="col-span-2">
							<SimpleInput
								id="ExpirationDateInput"
								label="Expiration Date :"
								placeholder="MM/YY"
							/>
						</div>
					</div>
				</div>
				<ActionButton
					label="Continue"
				/>
			</form>
		</div>
	);
}