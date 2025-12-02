# 🚀 Cypress Automation Project - Web Testing

This project contains automated test cases for web applications using **Cypress**, demonstrating best practices in test automation and integration with **Git/GitHub**.

## 📋 Features
- ✅ **Login flow automation** with valid/invalid scenarios
- ✅ **Page Object Model (POM)** design pattern implementation
- ✅ **GitHub integration** with proper version control
- ✅ **Cross-browser testing** capabilities
- ✅ **CI/CD ready** structure

## 🛠️ Tech Stack
- **Cypress** v13.0.0+
- **JavaScript/Node.js**
- **Git & GitHub Desktop**
- **Visual Studio Code**

## 🏗️ Project Structure
Fail-Test-webgithub-cypress/
├── cypress/
│ ├── e2e/ # Test specifications
│ ├── fixtures/ # Test data
│ ├── support/ # Custom commands
│ └── videos/ # Recorded test runs (.gitignored)
├── .gitignore # Ignored files and directories
└── README.md # Project documentation


## 🚦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Git & GitHub Desktop
- Visual Studio Code (recommended)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/qalidiarodriguez/Fail-Test-webgithub-cypress.git

2. Install dependencies:
   npm install

3. Open Cypress:
   npx cypress open


🧪 Running Tests
Interactive mode: npx cypress open
Headless mode: npx cypress run
Specific browser: npx cypress run --browser chrome

📚 Learning Resources
Cypress Documentation
GitHub Desktop Guide
Page Object Model Best Practices

👩‍🏫 About This Course
This project is part of the QA Automation 1:1 Coaching Program, focusing on practical skills for modern test automation engineers.

📄 License
This project is for educational purposes. Feel free to use it as a reference for your own automation projects!

## 🔄 De Test Manual a Automatizado

Guía rápida para transformar casos de prueba manuales en scripts de automatización con Cypress:

📝 **Ver la guía completa**: [Google Sheets - Transición Manual a Automatizado](https://docs.google.com/spreadsheets/d/1zSLmARh84RwaDwMXtzPICMWd_c9C1CsnbOuv9pXgvJk/edit?usp=sharing)

**Pasos clave:**
1. **Identifica** el flujo crítico a automatizar
2. **Desglosa** cada paso manual en comandos de Cypress
3. **Mapea** elementos de la UI con selectores estables
4. **Implementa** verificaciones (assertions) para cada paso
5. **Ejecuta y refina** basado en los resultados

*(Documentación incluida en el repositorio: `cypress/support/transition-guide.js`)*

Created with 💜 by Qalidia Rodriguez, PamStem, Qa Queen.
