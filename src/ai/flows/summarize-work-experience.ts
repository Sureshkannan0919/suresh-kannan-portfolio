'use server';

/**
 * @fileOverview A flow that summarizes work experiences using AI.
 *
 * - summarizeWorkExperience - A function that summarizes the work experience.
 * - SummarizeWorkExperienceInput - The input type for the summarizeWorkExperience function.
 * - SummarizeWorkExperienceOutput - The return type for the summarizeWorkExperience function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeWorkExperienceInputSchema = z.object({
  experience: z
    .string()
    .describe('The detailed description of the work experience to summarize.'),
});
export type SummarizeWorkExperienceInput = z.infer<typeof SummarizeWorkExperienceInputSchema>;

const SummarizeWorkExperienceOutputSchema = z.object({
  summary: z.string().describe('The summarized version of the work experience.'),
});
export type SummarizeWorkExperienceOutput = z.infer<typeof SummarizeWorkExperienceOutputSchema>;

export async function summarizeWorkExperience(input: SummarizeWorkExperienceInput): Promise<SummarizeWorkExperienceOutput> {
  return summarizeWorkExperienceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeWorkExperiencePrompt',
  input: {schema: SummarizeWorkExperienceInputSchema},
  output: {schema: SummarizeWorkExperienceOutputSchema},
  prompt: `Summarize the following work experience, focusing on key achievements and responsibilities. Keep the summary concise and easy to understand.\n\nWork Experience:\n{{experience}}`,
});

const summarizeWorkExperienceFlow = ai.defineFlow(
  {
    name: 'summarizeWorkExperienceFlow',
    inputSchema: SummarizeWorkExperienceInputSchema,
    outputSchema: SummarizeWorkExperienceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
