'use server';

import { summarizeWorkExperience } from "@/ai/flows/summarize-work-experience";
import { summarizeProjectDescription } from "@/ai/flows/summarize-project-description";

export async function getExperienceSummary(experience: string): Promise<string> {
  try {
    const result = await summarizeWorkExperience({ experience });
    return result.summary;
  } catch (error) {
    console.error("Error summarizing experience:", error);
    return "Could not generate summary.";
  }
}

export async function getProjectSummary(projectDescription: string): Promise<string> {
  try {
    const result = await summarizeProjectDescription({ projectDescription });
    return result.summary;
  } catch (error) {
    console.error("Error summarizing project:", error);
    return "Could not generate summary.";
  }
}
