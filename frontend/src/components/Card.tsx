export default function Card({ title, image, url }: { title: string; image: string; url: string }) {
	return (
		<a href={url} className="w-full flex flex-col gap-[0.75rem]">
			<figure className="w-full overflow-hidden rounded-[0.5rem] relative">
				<img src={image} alt="" className="w-full" />
				<div className="absolute right-[0.5rem] bottom-[0.5rem] rounded-[0.375rem] text-[0.75rem] text-white bg-black/80 p-[0.25rem]">
					03:28
				</div>
			</figure>

			<div className="flex flex-col h-[3.75rem] w-full">
				<h3 className="font-semibold">{title}</h3>
				<div className="flex items-center mt-auto text-gray-400 text-[0.75rem] gap-[0.25rem]">
					<p>709k views</p>
					<span className="block w-[0.125rem] h-[0.125rem] rounded-full bg-gray-400"></span>
					<p>1 year ago</p>
				</div>
			</div>
		</a>
	);
}
