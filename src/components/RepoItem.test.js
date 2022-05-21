import { render, screen } from "@testing-library/react";
import RepoItem from "src/components/RepoItem";
import MockParent from "src/mockParent";

const props = {
	item: {
		full_name: "phodal/github",
		url: "https://api.github.com/repos/phodal/github",
		isFav: false
	},
	type: "toggle"
};
test("renders RepoItem component", () => {
	render(
		<MockParent>
			<RepoItem {...props} />
		</MockParent>
	);
	const repoItem = screen.getByTestId("repo-item");
	expect(repoItem).not.toBe(null);

	const linkElement = screen.getByText(props.item.full_name);
	expect(linkElement).toBeInTheDocument();
	expect(linkElement.href).toBe(props.item.url);
});
