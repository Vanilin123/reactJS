import { Link, Route, useParams } from "react-router-dom";
import { USERS } from "../../data";
import "./UserInfoPage.css";
import { PlaylistsInfoPage } from "../PlaylistsInfoPage/PlaylistsInfoPage";

export function UserInfoPage() {
	const { userId } = useParams();
	const user = USERS[Number(userId)];

	if (!user) {
		return (
			<div className="userInfoPage">
				<h2>UserInfoPage</h2>

				<div className="users">
					<p>пользователя таким userId нет</p>
				</div>
			</div>
		);
	}
	if (user.playlist === undefined){
		return (
			<div className="userInfoPage">
				<h2>UserInfoPage</h2>
	
				<div className="users">
					<p>{user.jobTitle}</p>
					<p>{user.email}</p>
					<img src={user.avatar} alt="" width={200} height={200} />
					<p>{user.fullName}</p>
					<p>{user.bio}</p>
					</div>
		</div>
	);	
	}
	return (
		<div className="userInfoPage">
			<h2>UserInfoPage</h2>

			<div className="users">
				<p>{user.jobTitle}</p>
				<p>{user.email}</p>
				<img src={user.avatar} alt="" width={200} height={200} />
				<p>{user.fullName}</p>
				<p>{user.bio}</p>
				<Link to={`/playlists?searchName=${user.playlist.name.toLowerCase()}`}>
				{user.playlist.name}
				</Link>
			</div>
		</div>
	);
}
