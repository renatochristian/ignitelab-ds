import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxProps } from "./Checkbox";
import { Text } from "./Text";

export default {
	title: "Components/Checkbox",
	component: Checkbox,
	decorators:[
		(Story) =>{
			return(
				<div className="flex items-center gap-2">
					{Story()}
					<label>
						Lembrar de mim por 30 dias
					</label>
				</div>
			)
		}
	]
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {
	argTypes:{
		asChild:{
			table: {
				disable: true,
			}
		}
	}
};
