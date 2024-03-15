import { Link, useSearchParams } from "react-router-dom";
import { PLAYLISTS } from "../../data";
import { ChangeEvent } from "react";
import "./PlaylistsPage";

export function PlaylistsPage() {
	const [searchParam, setSearchParam] = useSearchParams();
	const [searchParamGenre, setSearchParamGenre] = useSearchParams();

	const handleSearchName = (event: ChangeEvent<HTMLInputElement>): void => {
		const { value } = event.target;
		setSearchParam({ searchName: value.toLowerCase() });
	};

	const searchName = searchParam.get("searchName") || "";

	const filteredUsers = PLAYLISTS.filter(({ name }) =>
		name.toLowerCase().includes(searchName)
	);

	const handleSearchGenre = (event: ChangeEvent<HTMLInputElement>): void => {
		const { value } = event.target;
		setSearchParamGenre({ searchGenre: value.toLowerCase() });
	};

	const searchGenre = searchParamGenre.get("searchGenre") || "";

	const filteredGenre = PLAYLISTS.filter(({ genre }) =>
		genre.toLowerCase().includes(searchGenre)
	);


	const leastArr = filteredUsers.length<filteredGenre.length?filteredUsers:filteredGenre;
	const biggestArr = filteredUsers.length>=filteredGenre.length?filteredUsers:filteredGenre;

	const resultArray = leastArr.filter((item)=>{
		return biggestArr.some((item2)=>item2.id===item.id)
	})
	return (
		<div className="usersPage">
			<h2>PlaylistsPage</h2>

			<div className="users">
				<label>
					введите альбом{" "}
					<input type="text" value={searchName} onChange={handleSearchName} />
				</label>
				<label>
					введите жанр{" "}
					<input type="text" value={searchGenre} onChange={handleSearchGenre} />
				</label>

				{resultArray.map(({ id, name }) => (
					<Link to={`/playlists/${id}`} key={id}>
						{name}
					</Link>
				))}
			</div>
		</div>
	);
}
