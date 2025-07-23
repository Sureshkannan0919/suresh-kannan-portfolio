'use server';
/**
 * @fileOverview This file defines a Genkit flow for summarizing project descriptions using AI.
 *
 * - summarizeProjectDescription - A function that takes a project description as input and returns a summarized version.
 * - SummarizeProjectDescriptionInput - The input type for the summarizeProjectDescription function.
 * - SummarizeProjectDescriptionOutput - The return type for the summarizeProjectDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeProjectDescriptionInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('The full text description of the project to be summarized.'),
});
export type SummarizeProjectDescriptionInput = z.infer<typeof SummarizeProjectDescriptionInputSchema>;

const SummarizeProjectDescriptionOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise AI-powered summary of the project description.'),
});
export type SummarizeProjectDescriptionOutput = z.infer<typeof SummarizeProjectDescriptionOutputSchema>;

export async function summarizeProjectDescription(input: SummarizeProjectDescriptionInput): Promise<SummarizeProjectDescriptionOutput> {
  return summarizeProjectDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeProjectDescriptionPrompt',
  input: {schema: SummarizeProjectDescriptionInputSchema},
  output: {schema: SummarizeProjectDescriptionOutputSchema},
  prompt: `Summarize the following project description in a concise manner, highlighting the key aspects and technologies used:\n\n{{{projectDescription}}}`,
});

const summarizeProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'summarizeProjectDescriptionFlow',
    inputSchema: SummarizeProjectDescriptionInputSchema,
    outputSchema: SummarizeProjectDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
