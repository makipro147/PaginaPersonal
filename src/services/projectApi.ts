import { projects, type Project } from '../data/projects';

export const projectApi = {
  getProjects: async (): Promise<Project[]> => {
    // Simula una llamada a una API (en este caso, solo devuelve los datos estáticos)
    return new Promise((resolve) => {
      setTimeout(() => resolve(projects), 500); // Simula un retraso de red
    });
  }
};