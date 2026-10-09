export interface Tool {
  name: string;
  color: string;
  icon: string;
}

export const TOOLS: Tool[] = [
  { name: 'Figma', color: '#F24E1E', icon: 'figma' },
  { name: 'Miro', color: '#FFD02F', icon: 'miro' },
  { name: 'Maze', color: '#6C5CE7', icon: 'maze' },
  { name: 'Clarity', color: '#2F8CFF', icon: 'clarity' },
  { name: 'Mixpanel', color: '#7856FF', icon: 'mixpanel' },
  { name: 'Claude Design', color: '#D97757', icon: 'claude' },
  { name: 'Claude Code', color: '#D97757', icon: 'claude' },
  { name: 'Git / GitLab', color: '#FC6D26', icon: 'gitlab' },
  { name: 'Google Workspace', color: '#4285F4', icon: 'google-workspace' },
];
