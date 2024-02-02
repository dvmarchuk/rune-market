"use client"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"

import {Button} from "@/components/ui/button"
import {
    Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {toast} from "@/components/ui/use-toast"

const FormSchema = z.object({
    username: z.string().email({
        message: "Invalid email address.",
    }),
    twitter: z.string().regex(/^@?(\w){1,15}$/, {
        message: "Invalid Twitter handle.",
    }),
    ordinalsAddress: z.string().regex(/^0x[a-fA-F0-9]{40}$/, {
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

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
      <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    </pre>),
        })
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
                <Button type="submit">Submit</Button>
            </form>
        </Form>)
}