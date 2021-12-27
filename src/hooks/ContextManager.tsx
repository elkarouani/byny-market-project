import Loading from '@/pages/Loading';
import { FC, ComponentProps, useState } from 'react';

import ProductsContextProvider from './contexts/ProductsContext';
import ServicesContextProvider from './contexts/ServicesContext';
import UserContextProvider from './contexts/UserContext';

const ProvidersReducer = ((...providers: FC[]): FC => {
	return providers.reduce(
		(AccumulatedComponents, CurrentComponent) => {
			return ({ children }: ComponentProps<FC>): JSX.Element => {
				return (
					<AccumulatedComponents>
						<CurrentComponent>{children}</CurrentComponent>
					</AccumulatedComponents>
				);
			};
		},
		({ children }) => <>{children}</>,
	);
})(...[
	UserContextProvider,
	ProductsContextProvider,
	ServicesContextProvider
]);

const ContextManagerProvider: React.FunctionComponent = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true);
	setTimeout(() => setIsLoading(false), 1000);


	return isLoading
		? <Loading />
		: <ProvidersReducer>{children}</ProvidersReducer>
}

export default ContextManagerProvider;