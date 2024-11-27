import type { Scene } from '../types/prompt';

export function generatePrompt(scene: Scene): string {
  const params = scene.parameters;
  const creature = params.find(p => p.id === 'creature')?.selected;
  const environment = params.find(p => p.id === 'environment')?.selected;
  const weather = params.find(p => p.id === 'weather')?.selected;
  const lighting = params.find(p => p.id === 'lighting')?.selected;
  const quality = params.find(p => p.id === 'quality')?.selected;
  const storyDescription = scene.storyDescription?.trim();

  const descriptions = {
    creature: {
      prefix: ['terrifiant', 'menaçant', 'colossal', 'surnaturel', 'ancien'],
      suffix: ['entité', 'être', 'présence', 'manifestation', 'apparition']
    },
    environment: {
      prefix: ['mystérieux', 'inquiétant', 'désolé', 'hanté', 'éthéré'],
      suffix: ['royaume', 'domaine', 'lieu', 'décor', 'dimension']
    }
  };

  const randomElement = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

  const creaturePrefix = randomElement(descriptions.creature.prefix);
  const creatureSuffix = randomElement(descriptions.creature.suffix);
  const environmentPrefix = randomElement(descriptions.environment.prefix);

  const basePrompt = `Un${creaturePrefix.endsWith('e') ? 'e' : ''} ${creaturePrefix} ${creature}, rendu${creaturePrefix.endsWith('e') ? 'e' : ''} en ${quality}. Cette ${creatureSuffix} surnaturelle émerge dans ${environmentPrefix.endsWith('e') ? 'une' : 'un'} ${environmentPrefix} ${environment}, où l'atmosphère est chargée de ${weather}. La scène est dramatiquement illuminée par ${lighting}, créant une ambiance surnaturelle qui accentue la présence imposante et la nature mystérieuse de la créature.`;

  if (storyDescription) {
    return `${storyDescription}\n\n${basePrompt}`;
  }

  return `${basePrompt} La combinaison des éléments environnementaux crée une scène d'horreur cosmique qui défie la compréhension humaine.`;
}