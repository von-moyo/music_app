import { useNavigate } from "react-router-dom";

const ArtistCard = ({ track }) => {
	const navigate = useNavigate();

	return (
		<div
			className="flex flex-col w-[250px] p-4 cursor-pointer bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg"
			onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
		>
			<img
				src={track?.images?.coverart}
				alt="artist"
				className="w-full h-56 rounded-lg"
			/>
			<p className="mt-4 truncate font-semibold text-lg text-white">
				{track?.subtitle}
			</p>
		</div>
	);
};

export default ArtistCard;
