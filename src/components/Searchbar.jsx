import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
	const navigate = useNavigate();
	const [searchTerm, setSearchTerm] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`/search/${searchTerm}`);
	};

	return (
		<form
			autoComplete="off"
			onSubmit={handleSubmit}
			className="p-2 text-gray-400 focus-within:text-gray-600"
		>
			<label htmlFor="search-field" className="sr-only">
				Search all songs
			</label>
			<div className="flex flex-row justifystart items-center">
				<FiSearch className="w-5 h-5 ml-4" />
				<input
					name="search-field"
					type="search"
					id="search-field"
					placeholder="Search"
					value={searchTerm}
					autoComplete="off"
					onChange={(e) => setSearchTerm(e.target.value)}
					className="flex-1 bg-transparent border-none outline-none p-4 text-white text-base placeholder-gray-500"
				/>
			</div>
		</form>
	);
};

export default Searchbar;
