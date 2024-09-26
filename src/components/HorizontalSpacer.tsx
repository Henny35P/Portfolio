interface Iprops {
	name: string;
}

export default function HorizontalSpacer(props: Iprops) {
	return (
		<div className="shadow-black shadow-xl backdrop-blur-sm">
			<hr className="my-8 h-px bg-gray-200 dark:bg-gray-700" />
			<h1 className="text-white text-center text-xl md:text-3xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
				{props.name}
			</h1>
			<hr className="my-8 h-px bg-gray-200 dark:bg-gray-700" />
		</div>
	);
}
