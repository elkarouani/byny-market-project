import React from "react";
import { Link } from "react-router-dom";
import BynyMarketLogo from "/images/BynyMarketLogo.png";
import MenuIcon from "@/components/Icons/MenuIcon";
import SimpleDropDown from "@/components/UI/MyDropDowns/SimpleDropDown";
import NavigationMenu, { toggleMainMenu } from "@/components/Store/NavigationMenu";

interface MainLayoutProps {
	children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	return (
		<div className="layout">
			{isMenuOpen &&
				<NavigationMenu 
					isMenuOpen={isMenuOpen}
					setMenuOpenState={(state: boolean) => setIsMenuOpen(state)}
				/>
			}
			<div className="layout__header">
				<div className="layout__header--navbar">
					<Link to="/">
						<img
							width="61.1"
							height="47.78"
							src={BynyMarketLogo}
							alt="byny market brand"
							className="cursor-pointer"
						/>
					</Link>
					<div
						className="cursor-pointer"
						onClick={() => toggleMainMenu({ 
							isMenuOpen, 
							setMenuOpenState: (state: boolean) => setIsMenuOpen(state)
						})}
					>
						<MenuIcon />
					</div>
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