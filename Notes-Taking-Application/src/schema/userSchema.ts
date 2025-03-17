import { z } from "zod";

export const userSchema = z.object({
    title: z.string()
        .min(1, { message: 'Title is required' })
        .min(5, { message: 'Title cannot be smaller than 5 characters' })
        .max(30, { message: 'Title cannot be larger than 30 characters' })
        .refine(value => value.trim().length > 0, { message: 'Input should not be empty or just spaces' }),
    
    description: z.string()
        .min(1, { message: 'Description is required' })
        .min(10, { message: 'Description cannot be less than 10 characters' })
        .max(200, { message: 'Description cannot be larger than 200 characters' }),
    
    category: z.string()
        .max(20, { message: 'Category cannot be more than 20 characters' })
});

export type UserSchema = z.infer<typeof userSchema>;
