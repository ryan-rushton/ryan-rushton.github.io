import './style.css';
import bannerTemplate from './templates/banner.html?raw';
import aboutTemplate from './templates/about.html?raw';
import skillsTemplate from './templates/skills.html?raw';
import experienceTemplate from './templates/experience.html?raw';
import contactTemplate from './templates/contact.html?raw';
import projectsTemplate from './templates/projects.html?raw';

interface Command {
  description: string;
  execute: () => string;
}

const commands: Record<string, Command> = {
  help: {
    description: 'Show available commands',
    execute: () => {
      const commandList = Object.entries(commands)
        .map(([name, cmd]) => `  <span class="command">${name.padEnd(12)}</span> ${cmd.description}`)
        .join('\n');
      return `<div class="section-header">Available Commands:</div>\n${commandList}`;
    },
  },

  about: {
    description: 'Learn more about me',
    execute: () => aboutTemplate.trim(),
  },

  skills: {
    description: 'View technical skills',
    execute: () => skillsTemplate.trim(),
  },

  experience: {
    description: 'Show work experience',
    execute: () => experienceTemplate.trim(),
  },

  contact: {
    description: 'Get in touch',
    execute: () => contactTemplate.trim(),
  },

  projects: {
    description: 'View notable projects',
    execute: () => projectsTemplate.trim(),
  },

  clear: {
    description: 'Clear the terminal',
    execute: () => {
      const content = document.getElementById('terminal-content');
      if (content) content.innerHTML = '';
      return '';
    },
  },

  theme: {
    description: 'Toggle terminal theme (coming soon)',
    execute: () => '<span class="warning">⚠ Feature coming soon!</span>',
  },

  banner: {
    description: 'Show welcome banner',
    execute: () => bannerTemplate.trim(),
  },
};

function addLine(content: string, className: string = ''): void {
  const terminalContent = document.getElementById('terminal-content');
  if (!terminalContent) return;

  const line = document.createElement('div');
  line.className = `line ${className}`;
  line.innerHTML = content;
  terminalContent.appendChild(line);

  // Scroll to bottom
  const terminalBody = document.querySelector('.terminal-body');
  if (terminalBody) {
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }
}

function addPromptLine(input: string): void {
  if (input.trim()) {
    addLine(
      `<span class="prompt">ryan@rushton</span> <span class="command">${escapeHtml(input)}</span>`
    );
  }
}

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function executeCommand(input: string): void {
  const trimmedInput = input.trim().toLowerCase();

  if (!trimmedInput) return;

  addPromptLine(input);

  if (trimmedInput in commands) {
    const output = commands[trimmedInput].execute();
    if (output) {
      addLine(output);
    }
  } else {
    addLine(
      `<span class="error">Command not found: ${escapeHtml(trimmedInput)}</span>\nType <span class="command">help</span> for available commands.`
    );
  }
}

function updatePrompt(): void {
  const promptSpan = document.querySelector('.input-line .prompt');
  if (promptSpan) {
    promptSpan.innerHTML = '<span style="color: var(--color-cyan); font-weight: 500;">ryan@rushton</span>';
  }
}

function init(): void {
  const input = document.getElementById('terminal-input') as HTMLInputElement;

  if (!input) return;

  // Show welcome banner
  addLine(bannerTemplate.trim());

  // Update the prompt
  updatePrompt();

  // Handle input
  input.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const value = input.value;
      executeCommand(value);
      input.value = '';
    }
  });

  // Keep input focused
  document.addEventListener('click', () => {
    input.focus();
  });

  // Handle tab completion (basic)
  input.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const value = input.value.toLowerCase();
      if (value) {
        const matches = Object.keys(commands).filter((cmd) => cmd.startsWith(value));
        if (matches.length === 1) {
          input.value = matches[0];
        }
      }
    }
  });

  input.focus();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
