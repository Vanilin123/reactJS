import { FC, useCallback, useEffect, useState } from "react";
import { Photos } from "../../models";
import Api from "../../api/api";
import "./index.css";

type Props = {
	albumId: number;
};


const Album= async ({ albumId }: Props) => {
	const getData = async (): Promise<Photos> => {
		const data = await Api.getPhotos(albumId);
		return data
	}
	const data = await getData();
	return (
		<div className="album-container">
			{data.map((photo) => (
				<div key={albumId} className="photo-container">
					<img src={photo.url} className="photo-img" />
				</div>
			))}
		</div>
	);
};

export default Album;
