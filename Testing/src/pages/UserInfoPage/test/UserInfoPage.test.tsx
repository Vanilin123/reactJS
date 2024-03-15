import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import { UserInfoPage } from "../..";
import { MemoryRouter } from "react-router-dom";



describe("UserInfoPage", () => {

  test("Компонент UserInfoPage: тест, проверяющий текст по умолчанию, если нет пользователя", () => {

    const { getByText } = render(<UserInfoPage />);

    expect(getByText("пользователя таким userId нет")).toBeInTheDocument();

  });
  test("Компонент UserInfoPage: тест, проверяющий данные о пользователе, если он существует (email, имя, ссылка на плейлист).", async () => {

    const { container } = render(

      <MemoryRouter initialEntries={["/users/0"]}>

        <UserInfoPage />

      </MemoryRouter>

    );



    expect(container.querySelector('h2')).toHaveTextContent('UserInfoPage');

    expect(container.querySelector('p')).toBeInTheDocument(); 

  });
  

});