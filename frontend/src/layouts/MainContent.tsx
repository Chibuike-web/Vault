import Card from "../components/Card";
import Filter from "../components/Filters";
import { useFilter, usePlaylistItems } from "../components/store";

export default function MainContent() {
	const { filter } = useFilter();
	const { playlistItems } = usePlaylistItems();

	return (
		<>
			<Filter />
			<section className="px-8 xl:max-w-[1440px] xl:mx-auto grid grid-cols-[repeat(auto-fill,minmax(272px,1fr))] gap-6 w-full pb-12">
				{playlistItems.map((item) => (
					<div key={item.id}>
						{(filter === "All" || filter === "Videos" || filter === "Reels") && (
							<Card title={item.title} image={item.thumbnail} url={item.url} />
						)}
					</div>
				))}
			</section>
		</>
	);
}
