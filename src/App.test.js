import { render, screen, fireEvent } from "@testing-library/react";
import App from "src/App";
import MockParent from "src/mockParent";

test("renders heading", () => {
	render(
		<MockParent>
			<App />
		</MockParent>
	);
	const linkElement = screen.getByText(/GitHub Search/i);
	expect(linkElement).toBeInTheDocument();
});

test("renders search component and adds input", () => {
	render(
		<MockParent>
			<App />
		</MockParent>
	);
	const input = screen.getByTestId("search-input");
	let testString = "github";
	fireEvent.change(input, { target: { value: testString } });
	expect(input.value).toBe(testString);
});
