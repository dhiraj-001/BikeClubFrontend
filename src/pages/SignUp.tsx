import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form'
import { signUpSchema } from '@/lib/zod/authValidation'
import LoadingButton from '@/components/LoadingButton'
import { toast } from 'sonner'

type Props = {}

const Signup = (props: Props) => {

	// const {toast} = useToast();
	const [pending, setPending] = useState(false);

	const form = useForm<z.infer<typeof signUpSchema>>({
		resolver: zodResolver(signUpSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	const onSubmit = async () => {
		setPending(true);
        toast("Account Created successfully");
		setPending(false);
	};

	return (
		<div className="grow flex items-center justify-center p-4 min-h-screen dark:bg-black">
			<Card className="w-full max-w-md">
				<CardHeader>
					<CardTitle className="text-3xl font-bold text-center">
						Create Account
					</CardTitle>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
							{["name", "email", "password", "confirmPassword"].map((field) => (
								<FormField
									control={form.control}
									key={field}
									name={field as keyof z.infer<typeof signUpSchema>}
									render={({ field: fieldProps }) => (
										<FormItem>
											<FormLabel>
												{field.charAt(0).toUpperCase() + field.slice(1)}
											</FormLabel>
											<FormControl>
												<Input
													type={
														field.includes("password")
															? "password"
															: field === "email"
																? "email"
																: "text"
													}
													placeholder={`Enter your ${field}`}
													{...fieldProps}
													autoComplete="off"
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							))}
							<LoadingButton pending={pending}>Sign up</LoadingButton>
						</form>
					</Form>
					<div className="mt-4 text-center text-sm">
						<a href="/sign-in" className="text-primary hover:underline">
							Already have an account? Sign in
						</a>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}

export default Signup