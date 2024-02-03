"use client"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"

import {Button} from "@/components/ui/button"
import {
    Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {toast} from "@/components/ui/use-toast";
import {useState} from "react";

const FormSchema = z.object({
    username: z.string().email({
        message: "Invalid email address.",
    }),
    twitter: z.string().regex(/^@?(\w){1,15}$/, {
        message: "Invalid Twitter handle.",
    }),
    ordinalsAddress: z.string().regex(/^bc?[a-zA-Z0-9]{20,65}$/, {
        message: "Invalid ordinals address.",
    }),
});

export function EmailForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema), defaultValues: {
            username: "",
            twitter: "",
            ordinalsAddress: "",
        },
    })

    const [isLoading, setIsLoading] = useState(false);

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        setIsLoading(true);
        const { username, twitter, ordinalsAddress } = data;

        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbzT7NvpO49JYQkN1nvQ7FlndjmHEWoMGcNknOP_qgzorfAVyc7HZyRIqvslATqsXhbeoQ/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: username, twitter, ordinalAddress: ordinalsAddress }),
            });
            toast({
                title: "Welcome!",
                description: "Your form has been submitted. Welcome to RunePro!",
                duration: 5000,
            });
            setIsLoading(false);
            // After the response comes back, reset the form fields
            form.reset();
        } catch (error) {
            setIsLoading(false);
            console.error('There was an issue submitting your form.', error);
        }
    }

    return (<Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="username"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel >JOIN THE WAITLIST</FormLabel>
                            <FormControl >
                                <Input placeholder="email" {...field} />
                            </FormControl>
                            {/*<FormDescription>*/}
                            {/*    We will keep you updated!*/}
                            {/*</FormDescription>*/}
                            <FormMessage/>
                        </FormItem>)}
                />
                <FormField
                    control={form.control}
                    name="twitter"
                    render={({field}) => (
                        <FormItem>
                            {/*<FormLabel >Twitter Handle</FormLabel>*/}
                            <FormControl >
                                <Input placeholder="@twitterhandle" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>)}
                />
                <FormField
                    control={form.control}
                    name="ordinalsAddress"
                    render={({field}) => (
                        <FormItem>
                            {/*<FormLabel >Ordinals Address</FormLabel>*/}
                            <FormControl >
                                <Input placeholder="ordinals address" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>)}
                />
                <Button type="submit" disabled={isLoading}>Submit</Button>
            </form>
        </Form>)
}
