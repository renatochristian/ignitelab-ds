import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { SignIn } from "./SignIn";
import { rest } from "msw";

export default {
	title: "Pages/Sign In",
	component: SignIn,
	args: {},
	argTypes: {},
	parameters: {
		msw: {
			handlers: [
				rest.post('/sessions', (require,response, context) => {
					return response(context.json({
						message: 'Login Realizado com sucesso'
					}))
				})
			],
		},
	},
} as Meta;

export const Default: StoryObj = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		userEvent.type(
			canvas.getByPlaceholderText("Digite seu e-mail"),
			"renatochristian@outlook.com"
		);
		userEvent.type(canvas.getByPlaceholderText("******"), "12345678");

		userEvent.click(canvas.getByRole("button"));

		await waitFor(() => {
			return expect(
				canvas.getByText("Login Realizado com sucesso")
			).toBeInTheDocument();
		});
	},
};
