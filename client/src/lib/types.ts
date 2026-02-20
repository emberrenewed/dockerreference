export interface DockerTopic {
  id: number;
  category: string;
  topic: string;
  description: string;
  longDescription: string;
  command: string;
  usage: string; // Legacy fallback
  tips: string[]; // Legacy fallback
  osSpecific?: {
    linux?: string;
    windows?: string;
    mac?: string;
  };
  osCommand?: {
    linux?: string;
    windows?: string;
    mac?: string;
  };
  examples?: {
    title: string;
    code: string;
    description?: string;
  }[];
}
