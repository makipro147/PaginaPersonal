interface CVData {
  fileName: string;
  downloadUrl: string;
}

const cvData: CVData = {
  fileName: 'CV_FullStack_Developer.pdf',
  downloadUrl: 'https://drive.google.com/file/d/1LHp17m_evHD50QzH-iSJoHCKSbsm_50I/view?usp=sharing' // Ejemplo: 'https://drive.google.com/uc?export=download&id=1a2b3c4d5e6f7g8h9i0'
};

export { cvData, type CVData };