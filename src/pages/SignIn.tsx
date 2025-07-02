import LoadingButton from '@/components/LoadingButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { signInSchema } from '@/lib/zod/authValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import { GithubIcon, Globe } from 'lucide-react';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

const SignIn = () => {

	const [pendingCredentials, setPendingCredentials] = useState(false);
	const [pendingGithub, setPendingGithub] = useState(false);
	const [pendingGoogle, setPendingGoogle] = useState(false);

	const form = useForm<z.infer<typeof signInSchema>>({
		resolver: zodResolver(signInSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const handleCredentialsSignIn = async (
		values: z.infer<typeof signInSchema>
	) => {
		setPendingCredentials(true);
		toast("Logged in successfully");
		setPendingCredentials(false);
	};

	const handleSignInWithGithub = async () => {
		setPendingGithub(true);
		toast("Logged in successfully");
		setPendingGithub(false);
	};

	const handleSignInWithGoogle = async () => {
		setPendingGoogle(true);
		toast("Logged in successfully");
		setPendingGoogle(false);
	};

	return (
		<div className="grow flex items-center justify-center p-4 min-h-screen dark:bg-black">
			<Card className="w-full max-w-md">
				<CardHeader>
					<CardTitle className="text-3xl font-bold text-center">
						Sign In
					</CardTitle>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(handleCredentialsSignIn)}
							className="space-y-6"
						>
							{["email", "password"].map((field) => (
								<FormField
									control={form.control}
									key={field}
									name={field as keyof z.infer<typeof signInSchema>}
									render={({ field: fieldProps }) => (
										<FormItem>
											<FormLabel>
												{field.charAt(0).toUpperCase() + field.slice(1)}
											</FormLabel>
											<FormControl>
												<Input
													type={field === "password" ? "password" : "email"}
													placeholder={`Enter your ${field}`}
													{...fieldProps}
													autoComplete={
														field === "password" ? "current-password" : "email"
													}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							))}
							<div className="mt-4 text-end text-sm">
								<a
									href="/forgot-password"
									className="text-primary hover:underline"
								>
									Forgot password?
								</a>
							</div>
							<LoadingButton pending={pendingCredentials}>
								Sign in
							</LoadingButton>
						</form>
					</Form>
					<div className='flex w-full justify-around items-center mt-4'>
						<Separator className='w-2/5' />
						<p className='text-xs text-slate-500'>OR</p>
						<Separator className='w-2/5' />
					</div>
					<div className="mt-4 space-y-2">
						<LoadingButton
							pending={pendingGithub}
							onClick={handleSignInWithGithub}
						>
							<GithubIcon className="w-4 h-4 mr-2" />
							Continue with GitHub
						</LoadingButton>
						<LoadingButton pending={pendingGoogle}
							onClick={handleSignInWithGoogle}>
							<img src="/google-icon.svg" alt="google" height={10} width={10} className='w-4 h-4 object-contain' />
							Continue with Google
						</LoadingButton>
					</div>
					<div className="mt-4 text-center text-sm">
						<a
							href="/sign-up"
							className="text-primary hover:underline"
						>
							Don't have an account? Sign up
						</a>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}

export default SignIn
