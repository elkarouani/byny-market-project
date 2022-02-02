interface SimpleNavigatorProps {
	pagesCount: number;
	currentPage: number;
	onPageChange?: (page: number) => void;
}

export default function SimpleNavigator(props: SimpleNavigatorProps) {
	return (
		<ul className="simple-navigator__layout">
			{Array.from(Array(props.pagesCount).keys()).map((page) => (
				<li key={page}>
					<button
						className={`w-6 h-6 rounded-[50%]
							${page === (props.currentPage - 1) 
								? 'bg-[#95AFBA]/20 border border-success' 
								: ''
							}
						`}
						onClick={() => props.onPageChange && props.onPageChange(page)}
					>
						{page + 1}
					</button>
				</li>
			))}
		</ul>
	);
}