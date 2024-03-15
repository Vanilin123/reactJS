import "@testing-library/jest-dom";

import { fireEvent, render } from "@testing-library/react";

import { UsersPage } from "..";
import { MemoryRouter } from "react-router-dom";



describe("UsersPage", () => {

  test("Компонент UserInfoPage: тест, проверяющий вызов метода setSearchParam из react-router-dom при вводе имени пользователя", async () => {
    
    const { getByTestId } = render(<MemoryRouter> <UsersPage/> </MemoryRouter>);

    await fireEvent.input(getByTestId('inputUsers'), { target: { value: 'Abraham Walsh' }})

    expect(getByTestId("users")).toBeInTheDocument();

  });

});