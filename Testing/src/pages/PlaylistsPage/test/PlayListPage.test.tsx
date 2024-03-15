import "@testing-library/jest-dom";

import { fireEvent, render } from "@testing-library/react";
import { PlaylistsPage } from "../PlaylistsPage";
import { MemoryRouter } from "react-router-dom";



describe("PlayListInfoPage", () => {

  test("Компонент PlaylistsPage: тест, проверяющий вызов метода setSearchParam из react-router-dom при вводе названия", async () => {

    const { getByTestId } = render(<MemoryRouter><PlaylistsPage /></MemoryRouter>);

    await fireEvent.input(getByTestId('inputAlbom'), { target: { value: 'great rock hits' }})

    expect(getByTestId("playlist")).toBeInTheDocument();

  });
  test("Компонент PlaylistsPage: тест, проверяющий вызов метода setSearchParam из react-router-dom при вводе жанра", async () => {

    const { getByTestId } = render(<MemoryRouter><PlaylistsPage /></MemoryRouter>);

    await fireEvent.input(getByTestId('inputGenre'), { target: { value: 'rock' }})

    expect(getByTestId("playlist")).toBeInTheDocument();

  });


});