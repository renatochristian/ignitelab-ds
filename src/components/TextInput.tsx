import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
	children: ReactNode;
}
function TextInputRoot(props: TextInputRootProps) {
	return (
		<div className="flex items-center gap-0 bg-gray-800 w-full rounded focus-within:ring-2 ring-cyan-300 outline-none">
			{props.children}
		</div>
	);
}
TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps{
	children: ReactNode;
}
function TextInputIcon(props: TextInputIconProps) {
	return (
		<Slot className="w-6 h-6 ml-3 text-gray-700">
			{props.children}
		</Slot>
	);
}
TextInputIcon.displayName = 'TextInput.Icon'


export interface TextInputInputProps
	extends InputHTMLAttributes<HTMLInputElement> {}
function TextInputInput(props: TextInputInputProps) {
	return (
		<input
			className="bg-transparent outline-none pl-3 py-4 h-12 flex-1 text-gray-100 text-xs placeholder:text-gray-700"
			{...props}
		/>
	);
}
TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
	Root: TextInputRoot,
	Icon: TextInputIcon,
	Input: TextInputInput,
};
