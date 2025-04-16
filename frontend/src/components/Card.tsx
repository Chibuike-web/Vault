import CardImage from "../assets/CardImage.png";
export default function Card() {
	return (
		<article className="w-full max-w-[16.125rem] flex flex-col gap-[0.75rem]">
			<figure className="w-full overflow-hidden rounded-[0.5rem] relative">
				<img src={CardImage} alt="" className="w-full" />
				<div className="absolute right-[0.5rem] bottom-[0.5rem] rounded-[0.375rem] text-[0.75rem] text-white bg-black/80 p-[0.25rem]">
					03:28
				</div>
			</figure>
			<div className="flex flex-col w-full gap-[0.5rem]">
				<div className="flex gap-[0.375rem] w-full items-center">
					<span className="block w-[1.25rem] h-[1.25rem] rounded-full bg-gray-400"></span>
					<p className="text-gray-600 text-[0.75rem]">Chibuike Maduabuchi</p>
				</div>
				<div className="flex flex-col h-[3.75rem] w-full">
					<h3 className="font-semibold">Data Structures and Algorithms for Beginners</h3>
					<div className="flex items-center mt-auto text-gray-400 text-[0.75rem] gap-[0.25rem]">
						<p>709k views</p>
						<span className="block w-[0.125rem] h-[0.125rem] rounded-full bg-gray-400"></span>
						<p>1 year ago</p>
					</div>
				</div>
			</div>
		</article>
	);
}
