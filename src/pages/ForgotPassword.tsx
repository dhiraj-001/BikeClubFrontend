import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/LoadingButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { forgotPasswordSchema } from "@/lib/zod/authValidation";
import { toast } from "sonner";

export default function ForgotPassword() {
    // const { toast } = useToast();
    const [isPending, setIsPending] = useState(false);

    const form = useForm<z.infer<typeof forgotPasswordSchema>>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = async () => {
        setIsPending(true);
        toast("If an account exists with this email, you will receive a password reset link.",);
        setIsPending(false);
    };

    return (
        <div className="grow flex items-center justify-center p-4 min-h-screen dark:bg-black">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center">
                        Forgot Password
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder="Enter your email"
                                                {...field}
                                                autoComplete="email"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <LoadingButton pending={isPending}>Send Reset Link</LoadingButton>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}