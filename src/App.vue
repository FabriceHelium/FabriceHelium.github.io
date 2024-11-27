<script setup lang="ts">
import { ref } from 'vue';
import type { Scene } from './types/prompt';
import SceneCard from './components/SceneCard.vue';
import { defaultParameters } from './data/parameters';
import { generatePrompt } from './utils/promptGenerator';

const scenes = ref<Scene[]>([
  {
    id: '1',
    parameters: defaultParameters,
    generatedPrompt: '',
    storyDescription: ''
  }
]);

const updateScene = (sceneId: string, updatedScene: Scene) => {
  const index = scenes.value.findIndex(s => s.id === sceneId);
  if (index !== -1) {
    updatedScene.generatedPrompt = generatePrompt(updatedScene);
    scenes.value[index] = updatedScene;
  }
};

const addScene = () => {
  const newId = (scenes.value.length + 1).toString();
  scenes.value.push({
    id: newId,
    parameters: [...defaultParameters],
    generatedPrompt: '',
    storyDescription: ''
  });
};

const deleteScene = (sceneId: string) => {
  scenes.value = scenes.value.filter(s => s.id !== sceneId);
};
</script>

<template>
  <div class="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Générateur de Prompts Horrifiques</h1>
        <p class="text-gray-600">Créez des descriptions détaillées d'entités surnaturelles et de scènes cosmiques</p>
      </div>

      <div class="space-y-6">
        <div v-for="scene in scenes" :key="scene.id">
          <SceneCard
            :scene="scene"
            @update:scene="(updatedScene) => updateScene(scene.id, updatedScene)"
            @delete="deleteScene(scene.id)"
          />
        </div>
      </div>

      <div class="mt-8 flex justify-center">
        <button
          @click="addScene"
          class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Ajouter une Nouvelle Scène
        </button>
      </div>
    </div>
  </div>
</template>