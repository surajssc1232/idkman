// 'use server';
/**
 * @fileOverview A professional bio generation AI agent.
 *
 * - generateBio - A function that handles the bio generation process.
 * - GenerateBioInput - The input type for the generateBio function.
 * - GenerateBioOutput - The return type for the generateBio function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBioInputSchema = z.object({
  name: z.string().describe('The name of the developer.'),
  title: z.string().describe('The professional title of the developer.'),
  skills: z
    .string()
    .describe('A comma-separated list of the developer\u2019s skills.'),
  experience: z
    .string()
    .describe(
      'A brief summary of the developer\'s professional experience.'
    ),
  style: z
    .string()
    .optional()
    .default('minimalist')
    .describe('The desired style of the bio (e.g., minimalist, professional, creative).'),
});
export type GenerateBioInput = z.infer<typeof GenerateBioInputSchema>;

const GenerateBioOutputSchema = z.object({
  bio: z.string().describe('The generated professional bio.'),
});
export type GenerateBioOutput = z.infer<typeof GenerateBioOutputSchema>;

export async function generateBio(input: GenerateBioInput): Promise<GenerateBioOutput> {
  return generateBioFlow(input);
}

const generateBioPrompt = ai.definePrompt({
  name: 'generateBioPrompt',
  input: {schema: GenerateBioInputSchema},
  output: {schema: GenerateBioOutputSchema},
  prompt: `You are a professional bio writer. Create a compelling bio for a developer based on the following information. Adhere to the specified style.

Name: {{{name}}}
Title: {{{title}}}
Skills: {{{skills}}}
Experience: {{{experience}}}
Style: {{{style}}}

Bio:`,
});

const generateBioFlow = ai.defineFlow(
  {
    name: 'generateBioFlow',
    inputSchema: GenerateBioInputSchema,
    outputSchema: GenerateBioOutputSchema,
  },
  async input => {
    const {output} = await generateBioPrompt(input);
    return output!;
  }
);
