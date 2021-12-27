import React from "react";
import BynyMarketLogo from "/images/BynyMarketLogo.png";
import MenuIcon from "@/components/Icons/MenuIcon";
import SimpleDropDown from "@/components/UI/MyDropDowns/SimpleDropDown";

interface MainLayoutProps {
	children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
	return (
		<div className="layout">
			<div className="flex flex-col">
				<div className="py-1 px-4 flex items-center justify-between">
					<img width="61.1" height="47.78" src={BynyMarketLogo} alt="byny market brand" />
					<MenuIcon />
				</div>
				<SimpleDropDown items={['item1', 'item2']} label="Catégories" />
			</div>
			<div className="layout__content">
				{children}
			</div>
			<div className="layout__footer">
				<div className="layout__footer--navigation">
					<h3 className="font-semibold">Navigation</h3>
					<ul className="flex space-x-2">
						<li className="underline">home</li>
						<li className="underline">products</li>
						<li className="underline">cart</li>
					</ul>
				</div>
				<div className="layout__footer--rights">
					<span>All rights reserved</span>
					<span>Byny@2021</span>
				</div>
			</div>
		</div>
	);
}