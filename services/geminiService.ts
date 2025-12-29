
import { GoogleGenAI, Type } from "@google/genai";
import { DesignBrief } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateDesignBrief = async (industry: string, projectType: string): Promise<DesignBrief> => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Generate a creative design brief for a ${projectType} in the ${industry} industry. 
    The brief should be inspiring and include a clear goal, target audience profile, suggested color palette (as hex codes), key visual elements, and a realistic estimated timeline.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          goal: { type: Type.STRING },
          targetAudience: { type: Type.STRING },
          colorPalette: { 
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          suggestedElements: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          estimatedTimeline: { type: Type.STRING }
        },
        required: ["goal", "targetAudience", "colorPalette", "suggestedElements", "estimatedTimeline"]
      }
    }
  });

  return JSON.parse(response.text);
};
