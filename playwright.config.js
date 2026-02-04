// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  // Dossier contenant les tests
  testDir: './tests',
  
  // Timeout maximum pour chaque test (30 secondes)
  timeout: 30000,
  
  // Nombre de tentatives en cas d'échec
  retries: 1,
  
  // Configuration des navigateurs
  use: {
    // Mode headless (sans interface graphique) - requis pour CI
    headless: true,
    
    // Capture d'écran uniquement en cas d'échec
    screenshot: 'only-on-failure',
    
    // Trace pour le debug (uniquement lors du premier retry)
    trace: 'on-first-retry',
    
    // Viewport par défaut
    viewport: { width: 1280, height: 720 },
  },
  
  // Reporters pour afficher les résultats
  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],
});
