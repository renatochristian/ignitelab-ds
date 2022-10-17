import { Envelope, Lock } from "phosphor-react";
import { FormEvent, useState } from "react";
import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { Heading } from "../components/Heading";
import { Logo } from "../components/Logo";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import axios from 'axios';

export function SignIn(){

	const [isUserSignedIn, setIsUserSignedIn] = useState(false);

	async function handleSignIn(event: FormEvent){
		event.preventDefault();

		await axios.post('/sessions', {
			email: 'renatochristian@outlook.com',
			password: '12345678'
		  })

		setIsUserSignedIn(true)
	}


	return(
		<div onSubmit={handleSignIn} className="flex flex-col my-16 2xl:my-0 w-full 2xl:w-screen h-full 2xl:h-screen items-center justify-center text-gray-100">
			<header className="flex flex-col items-center">
				<Logo />
				<Heading size="lg" className="text-gray-100 mt-4">
					Ignite Lab
				</Heading>
				<Text size="lg" className="text-gray-700 mt-1">
					Faça login e comece a usar!
				</Text>
			</header>
			<form className="flex flex-col items-stretch mt-10 w-full max-w-xs md:max-w-sm gap-4">

				{isUserSignedIn && 
					<Text>
						Login Realizado com sucesso
					</Text> 
				}

				<label htmlFor="email" className="gap-3 flex flex-col">
					<Text className="font-semibold text-gray-100">
						Endereço de e-mail
					</Text>
					<TextInput.Root>
						<TextInput.Icon>
							<Envelope />
						</TextInput.Icon>
						<TextInput.Input
							type="email"
							placeholder="Digite seu e-mail"
						></TextInput.Input>
					</TextInput.Root>
				</label>
				<label htmlFor="password" className="gap-3 flex flex-col">
					<Text className="font-semibold text-gray-100">
						Sua Senha
					</Text>
					<TextInput.Root>
						<TextInput.Icon>
							<Lock />
						</TextInput.Icon>
						<TextInput.Input
							type="password"
							placeholder="******"
						></TextInput.Input>
					</TextInput.Root>
				</label>

				<label htmlFor="remember" className="flex items-center gap-2">
					<Checkbox id="remember" />
					<Text
						size="sm"
						className="font-semibold text-gray-400 cursor-pointer"
					>
						Lembrar de mim por 30 dias
					</Text>
				</label>

				<Button type="submit" className="mt-8">
					<Text size="md">Entrar na plataforma</Text>
				</Button>
			</form>

			<footer className="mt-8 flex flex-col gap-2 items-center">
				<Text asChild size="sm" className="text-gray-400 hover:text-gray-200 underline">
					<a href="">Esqueceu sua senha?</a>
				</Text>
				<Text asChild size="sm" className="text-gray-400 hover:text-gray-200 underline">
					<a href="">Não possui conta? Crie uma agora</a>
				</Text>
			</footer>
		</div>
	)
}