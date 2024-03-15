import { render} from "@testing-library/react";
import { MainPage } from "../..";


describe('MainPage', () => {
    it('Компонент MainPage: снапшотный тест', () => {
      const {container} = render(<MainPage/>);
      expect(container).toMatchSnapshot()
    })
  
  })