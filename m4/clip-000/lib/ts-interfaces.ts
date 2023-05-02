export interface SessionData {
  id: string;
  title: string;
  descriptionShort: string;
  sessionVideos: { youTubeUrl: string }[] | null;
}

export interface YouTubeData {
  id: string;
  snippet: {
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
  statistics: {
    viewCount: string;
    likeCount: string;
  };
}
