export interface ISessionData {
  id: string;
  title: string;
  descriptionShort: string;
  sessionVideos: { youTubeUrl: string }[] | null;
}

export interface IYouTubeData {
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
