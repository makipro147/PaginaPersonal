import { cvData } from '../data/cvData';

export const cvService = {
  downloadCV: () => {
    const link = document.createElement('a');
    link.href = cvData.downloadUrl;
    link.download = cvData.fileName;
    link.click();
  }
};