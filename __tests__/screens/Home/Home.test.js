import { create } from "react-test-renderer";
import { fireEvent, render } from "@testing-library/react-native";

import Home from "../../../src/screens/Home";
import NameProvider from "../../../src/contexts/NameProvider";

describe("All tests", () => {
  const tree = create(<Home />).toJSON();

  test("Should render correctly", () => {
    create(<Home />);
  });

  test("Should render correctly Home", () => {
    render(<Home />);
  });

  test("Should render correctly snapshot", () => {
    expect(tree).toMatchSnapshot();
  });

  test("Should display default text No Name", () => {
    const { getByText } = render(<Home />);

    const textNoName = getByText("Welcome, No Name");
    expect(textNoName).not.toBeNull();
    //expect(textNoName).not.toBe(null);
  });

  test("Should display text Welcome, alex", () => {
    const { getByText, getByTestId } = render(<Home />, {
      wrapper: NameProvider,
    });

    const input = getByTestId("name");
    fireEvent.changeText(input, "alex");

    const button = getByTestId("buttonChange");
    fireEvent.press(button);

    const textName = getByText("Welcome, alex");
    expect(textName).not.toBeNull();
    //expect(textNoName).not.toBe(null);
    //expect(textNoName.length).toBe(1);
  });

  test("Should not display default text No Name", () => {
    const { queryByText, getByTestId } = render(
      <NameProvider>
        <Home />
      </NameProvider>
    );

    const input = getByTestId("name");
    fireEvent.changeText(input, "Alex");

    const button = getByTestId("buttonChange");
    fireEvent.press(button);

    expect(queryByText("Welcome, No Name")).toBeNull();
    //expect(queryByText("Welcome, No Name")).toBe(null);
  });

  test("Should display a text with Welcome, alex", () => {
    const { getByText } = render(<Home name="Alex" />);

    getByText("Welcome, Alex");
  });

  test("Should call setName function", () => {
    const setName = jest.fn();
    const setError = jest.fn();

    const { getByTestId } = render(
      <Home setName={setName} setError={setError} />
    );

    const input = getByTestId("name");
    fireEvent.changeText(input, "alex");

    const button = getByTestId("buttonChange");
    fireEvent.press(button);

    expect(setName).toBeCalledWith("alex");
  });
});
