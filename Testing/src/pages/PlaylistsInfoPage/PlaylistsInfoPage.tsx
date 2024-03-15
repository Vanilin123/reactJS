import { Link, useParams } from "react-router-dom";
import { PLAYLISTS } from "../../data";

export function PlaylistsInfoPage() {
	const { playlistId } = useParams();
	const playlist = PLAYLISTS[Number(playlistId)];

	if (!playlist) {
		return (
			<div className="userInfoPage">
				<h2>playlistInfoPage</h2>

				<div className="users">
					<p>пользователя c таким playlistId нет</p>
				</div>
			</div>
		);
	}

	return (
		<div className="userInfoPage">
			<h2>playlistInfoPage</h2>
			<div data-testid="playlistInfoPage" className="users">
				<Link to={`/playlists?searchGenre=${playlist.genre.toLowerCase()}`}>{playlist.genre}</Link>
				<p>{playlist.name}</p>
				<ul>
				{playlist.songs.map(( item:string ) => (
					<li>{item}</li>
				))}	
				</ul>
			</div>
		</div>
	);
}
