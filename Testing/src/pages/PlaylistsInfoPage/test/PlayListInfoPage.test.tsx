import "@testing-library/jest-dom";

import {  render } from "@testing-library/react";
import { PlaylistsInfoPage } from "../PlaylistsInfoPage";
import { MemoryRouter} from "react-router-dom";



describe("PlayListInfoPage", () => {

  test("Компонент PlaylistInfoPage: тест, проверяющий текст по умолчанию, если нет доступного плейлиста", () => {

    const { getByText } = render(<PlaylistsInfoPage />);

    expect(getByText("пользователя c таким playlistId нет")).toBeInTheDocument();

  });

  test("Компонент PlaylistInfoPage: тест, проверяющий данные о плейлисте, если он доступен (жанр, название, количестве песен в списке)", async () => {

    const { container } = render(

      <MemoryRouter initialEntries={["/playlists/0"]}>

        <PlaylistsInfoPage />

      </MemoryRouter>

    );



    expect(container.querySelector('h2')).toHaveTextContent('playlistInfoPage');

    expect(container.querySelector('p')).toBeInTheDocument(); 

  });
  

});