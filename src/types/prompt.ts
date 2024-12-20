export interface PromptParameter {
  id: string;
  name: string;
  options: string[];
  selected: string;
}

export interface Scene {
  id: string;
  parameters: PromptParameter[];
  generatedPrompt: string;
  storyDescription: string;
}