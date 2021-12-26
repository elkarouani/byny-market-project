import { FC } from "react";

interface PageTitleProps {
	title?: string;
}

const PageTitle: FC<PageTitleProps> = ({ title }) => (
	<h1
		className="py-10 text-center text-3xl leading-9"
	>
		{title}
	</h1>
);

interface MenuSubComponents {
	PageTitle: FC<PageTitleProps>;
}

const HeadlessLayout: FC<{}> & MenuSubComponents = ({ children }) => (
	<div className="layout">
		<div className="layout__content">
			{children}
		</div>
	</div>
);

HeadlessLayout.PageTitle = PageTitle;

export default HeadlessLayout;