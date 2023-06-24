export interface Session {
  id?: string;
  title?: string;
  speakerId?: string;
  description?: string;
}

export interface Speaker {
  id?: string;
  first?: string;
  last?: string;
  bio?: string;
  sessionId?: string;
}
