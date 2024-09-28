"use client";

// form
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// utils
import { blogAddCommentFormSchema } from "@/utils/validators";
// icons
import { SolarAddImageBold, SolarPin, SolarSmileEmoji } from "@/components/svg";
// cmp
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const AddComment = () => {
  const form = useForm<z.infer<typeof blogAddCommentFormSchema>>({
    mode: "all",
    resolver: zodResolver(blogAddCommentFormSchema),
    defaultValues: {
      text: "",
    },
  });

  const onSubmit = (values: z.infer<typeof blogAddCommentFormSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <h5 className="h5">Comments (8)</h5>
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  {...field}
                  rows={5}
                  placeholder="Write some of your comments ..."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Button variant="icon" type="button">
              <SolarAddImageBold />
            </Button>
            <Button variant="icon" type="button">
              <SolarPin />
            </Button>
            <Button variant="icon" type="button">
              <SolarSmileEmoji />
            </Button>
          </div>
          <Button type="submit" className="font-medium">
            Post comment
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddComment;
