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
        .map(
          ([name, cmd]) =>
            `<div class="indent"><span class="command">${name.padEnd(12)}</span> ${cmd.description}</div>`
        )
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
      return commands.banner.execute();
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

function addLine(content: string, animate: boolean = true): void {
  const terminalContent = document.getElementById('terminal-content');
  if (!terminalContent) return;

  const line = document.createElement('div');
  line.className = animate ? `line` : '';
  line.style.marginBottom = '8px';
  line.style.lineHeight = '1.6';
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
    promptSpan.innerHTML =
      '<span style="color: var(--color-cyan); font-weight: 500;">ryan@rushton</span>';
  }
}

function updateAutocompleteSuggestion(input: HTMLInputElement): void {
  const suggestionSpan = document.getElementById('autocomplete-suggestion');
  if (!suggestionSpan) return;

  const value = input.value.toLowerCase();

  if (!value) {
    suggestionSpan.textContent = '';
    return;
  }

  const matches = Object.keys(commands).filter((cmd) => cmd.startsWith(value));

  if (matches.length === 1) {
    const match = matches[0];
    // Show the typed part + remaining part
    suggestionSpan.textContent = value + match.slice(value.length);
  } else {
    suggestionSpan.textContent = '';
  }
}

function init(): void {
  const input = document.getElementById('terminal-input') as HTMLInputElement;

  if (!input) return;

  // Show welcome banner (without animation for instant display)
  addLine(bannerTemplate.trim(), false);

  // Update the prompt
  updatePrompt();

  // Handle input changes for autocomplete suggestion
  input.addEventListener('input', () => {
    updateAutocompleteSuggestion(input);
  });

  // Handle input
  input.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const value = input.value;
      executeCommand(value);
      input.value = '';
      updateAutocompleteSuggestion(input); // Clear suggestion after command
    } else if (e.key === 'Tab') {
      // Handle tab completion
      e.preventDefault();
      const value = input.value.toLowerCase();
      if (value) {
        const matches = Object.keys(commands).filter((cmd) => cmd.startsWith(value));
        if (matches.length === 1) {
          input.value = matches[0];
          updateAutocompleteSuggestion(input); // Update suggestion after tab completion
        }
      }
    }
  });

  // Keep input focused
  document.addEventListener('click', () => {
    input.focus();
  });

  input.focus();

  // Show terminal after initialization is complete
  const terminalWindow = document.querySelector('.terminal-window') as HTMLElement;
  if (terminalWindow) {
    terminalWindow.style.display = 'block';
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
