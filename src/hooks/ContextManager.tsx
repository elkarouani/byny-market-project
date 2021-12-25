import Loading from '@/pages/Loading';
import React, { Suspense } from 'react';

const CONTEXT_REGISTER: Array<string> = [
	'./contexts/UserContext',
	'./contexts/ProductsContext',
];

const getProviders = () =>
	CONTEXT_REGISTER.map(context_relative_path =>
		React.lazy(() => {
			return new Promise(resolve => {
				setTimeout(() => resolve(import(/* @vite-ignore */`${context_relative_path}`)), 1000);
			});
		})
	);

interface ContextManagerProviderProps {
	children: React.ReactNode,
};

const ContextManagerProvider = ({ children }: ContextManagerProviderProps) => {
	const providers = getProviders();
	const providersToDOM = providers.reduce(
		(Inner, Outer) => <Outer>{Inner}</Outer>,
		children
	);

	return <Suspense fallback={<Loading />}>{providersToDOM}</Suspense>;
};

export default ContextManagerProvider;