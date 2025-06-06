import z from 'zod';

export const contactSchema = z.object({
  name: z.string().min(1, { message: 'nameRequired' }),
  email: z
    .string()
    .min(1, { message: 'emailRequired' })
    .email({ message: 'emailInvalid' }),
  subject: z.string().min(1, { message: 'subjectRequired' }),
  message: z.string().min(1, { message: 'messageRequired' }),
});

export type Contact = z.infer<typeof contactSchema>;
