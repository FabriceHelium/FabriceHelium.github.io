import { humanoids } from './creatures/humanoids';
import { hybrids } from './creatures/hybrids';
import { cryptids } from './creatures/cryptids';
import { xenomorphs } from './creatures/xenomorphs';
import { supernatural } from './creatures/supernatural';

const allCreatures = [
  ...humanoids.creatures,
  ...hybrids.creatures,
  ...cryptids.creatures,
  ...xenomorphs.creatures,
  ...supernatural.creatures
];

export const defaultParameters = [
  {
    id: 'creature',
    name: 'Type de Créature',
    options: allCreatures,
    selected: allCreatures[0]
  },
  {
    id: 'environment',
    name: 'Environnement',
    options: [
      'Ruines Anciennes',
      'Station Spatiale',
      'Installation Souterraine',
      'Jungle Dense',
      'Base Arctique',
      'Ville Abandonnée',
      'Désert Post-apocalyptique',
      'Profondeurs Océaniques',
      'Paysage Volcanique',
      'Monde Alien'
    ],
    selected: 'Ruines Anciennes'
  },
  {
    id: 'weather',
    name: 'Atmosphère',
    options: [
      'Brouillard Toxique',
      'Pluie Acide',
      'Pluie de Météores',
      'Tempête Électrique',
      'Éruption Solaire',
      'Éclipse Totale',
      'Distorsion Quantique',
      'Tempête Temporelle',
      'Brèche Dimensionnelle',
      'Faille Réalité'
    ],
    selected: 'Brouillard Toxique'
  },
  {
    id: 'lighting',
    name: 'Effets Lumineux',
    options: [
      'Lueur Bioluminescente',
      'Décharge de Plasma',
      'Particules Quantiques',
      'Radiation UV',
      'Brume Éthérée',
      'Énergie du Vide',
      'Réfraction Cristalline',
      'Réseau Neural',
      'Matière Sombre',
      'Distorsion Temporelle'
    ],
    selected: 'Lueur Bioluminescente'
  },
  {
    id: 'quality',
    name: 'Qualité du Rendu',
    options: [
      'Réalisme 8K',
      'Photoréaliste',
      'Cinématographique',
      'Hyperréaliste',
      'Rendu Quantique',
      'Amélioration Neurale',
      'Deep Dream',
      'Optimisation IA'
    ],
    selected: 'Réalisme 8K'
  }
];