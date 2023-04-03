export interface SessionData {
    user: {
      name: string;
      username: string;
      image: string;
    } | null;
  }
  
export interface SessionStatus {
    error: any;
    loading: boolean;
  }
  
export type UseSession = () => {
    data: SessionData | undefined;
    status: SessionStatus;
  };