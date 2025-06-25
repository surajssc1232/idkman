// 'use server'
'use server';

/**
 * @fileOverview AI-powered layout personalization based on visitor behavior.
 *
 * This file exports functions and types for tailoring the website layout to match
 * visitor interests and preferences.
 *
 * @remarks
 *   - personalizeLayout: Adjusts the site layout based on visitor actions.
 *   - PersonalizeLayoutInput: Defines the input schema for personalizeLayout.
 *   - PersonalizeLayoutOutput: Defines the output schema for personalizeLayout.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizeLayoutInputSchema = z.object({
  visitorActions: z
    .string()
    .describe(
      'A summary of the visitor actions on the site, including sections visited, projects viewed, and skills explored.'
    ),
});
export type PersonalizeLayoutInput = z.infer<typeof PersonalizeLayoutInputSchema>;

const PersonalizeLayoutOutputSchema = z.object({
  highlightedProjects: z
    .array(z.string())
    .describe('An array of project IDs to highlight based on visitor interests.'),
  highlightedSkills: z
    .array(z.string())
    .describe('An array of skill IDs to highlight based on visitor interests.'),
  layoutAdjustments: z
    .string()
    .describe('A description of layout adjustments to make, such as reordering sections or emphasizing certain content areas.'),
});
export type PersonalizeLayoutOutput = z.infer<typeof PersonalizeLayoutOutputSchema>;

export async function personalizeLayout(input: PersonalizeLayoutInput): Promise<PersonalizeLayoutOutput> {
  return personalizeLayoutFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizeLayoutPrompt',
  input: {schema: PersonalizeLayoutInputSchema},
  output: {schema: PersonalizeLayoutOutputSchema},
  prompt: `Based on the visitor's actions on the site, determine which projects and skills to highlight to provide a tailored experience.

Visitor Actions: {{{visitorActions}}}

Highlight the projects and skills that are most relevant to the visitor's interests. Describe layout adjustments that can be made to emphasize these areas.

Output in JSON format.`,
});

const personalizeLayoutFlow = ai.defineFlow(
  {
    name: 'personalizeLayoutFlow',
    inputSchema: PersonalizeLayoutInputSchema,
    outputSchema: PersonalizeLayoutOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
