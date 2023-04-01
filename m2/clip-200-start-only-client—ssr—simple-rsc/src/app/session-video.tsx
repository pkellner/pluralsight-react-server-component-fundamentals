import ShowBusyIndicator from "@/lib/show-busy-indicator";
import Boundary from "@/lib/boundary";

export default function SessionVideo({ id }: { id?: string }) {
  if (!id) {
    return null;
  }

  const data : any = {
    kind: "youtube#video",
    etag: "FIjynaiLkUIVmieZFAvd6tmztMs",
    id: "mEJ8f0-rACo",
    snippet: {
      publishedAt: "2018-11-01T04:19:09Z",
      channelId: "UCl_fhwlTAARASHq2hoEd_pw",
      title:
        "Gayle Laakmann McDowell Talks about 'Interview Like Google (or not)-But Better!'",
      description:
        "Gayle Laakmann McDowell Talks about 'Interview Like Google (or not)-But Better!' at https://SiliconValley-CodeCamp.com in San Jose Hosted by PayPal\n\nBe a better interviewer: make candidates happier, raise the bar, create a consistent process, and avoid rejecting good candidates or hiring bad ones. We'll discuss multiple interview styles so you can interview like Google (or not)-but better!\n\n\nSession Details:\nhttps://SiliconValley-CodeCamp.com/Session/2018/interview-like-google-or-not-but-better\nSession Materials:\nhttp://go.gayle.com/interviewinglikegoogle\n\n\nSilicon Valley Code Camp site:\nhttps://SiliconValley-CodeCamp.com\n\nSubscribe to the Silicon Valley Code Camp Youtube Channel\nhttps://www.youtube.com/c/SiliconValleyCodeCampVideos\n\nFollow Silicon Valley Code Camp on Twitter: https://twitter.com/sv_code_camp\nJoin the Silicon Valley Code Camp G+ community: https://plus.google.com/110656351842726857531\nInterview Like Google (or not)-But Better! at Silicon Valley Code Camp 2018 \n\n\n\nFollow Gayle Laakmann McDowell on Twitter: https://twitter.com/gayle\n\nSpeaker Biography for Gayle Laakmann McDowell\n\nGayle Laakmann McDowell is the founder and CEO of CareerCup.com and the author of three books.\n\nGayle has worked as a Software Engineer for Google, Microsoft and Apple. She holds a BSE and MSE from UPenn in Computer Science, and an MBA from the Wharton School.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/mEJ8f0-rACo/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/mEJ8f0-rACo/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/mEJ8f0-rACo/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/mEJ8f0-rACo/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/mEJ8f0-rACo/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Silicon Valley Code Camp",
      categoryId: "27",
      liveBroadcastContent: "none",
      localized: {
        title:
          "Gayle Laakmann McDowell Talks about 'Interview Like Google (or not)-But Better!'",
        description:
          "Gayle Laakmann McDowell Talks about 'Interview Like Google (or not)-But Better!' at https://SiliconValley-CodeCamp.com in San Jose Hosted by PayPal\n\nBe a better interviewer: make candidates happier, raise the bar, create a consistent process, and avoid rejecting good candidates or hiring bad ones. We'll discuss multiple interview styles so you can interview like Google (or not)-but better!\n\n\nSession Details:\nhttps://SiliconValley-CodeCamp.com/Session/2018/interview-like-google-or-not-but-better\nSession Materials:\nhttp://go.gayle.com/interviewinglikegoogle\n\n\nSilicon Valley Code Camp site:\nhttps://SiliconValley-CodeCamp.com\n\nSubscribe to the Silicon Valley Code Camp Youtube Channel\nhttps://www.youtube.com/c/SiliconValleyCodeCampVideos\n\nFollow Silicon Valley Code Camp on Twitter: https://twitter.com/sv_code_camp\nJoin the Silicon Valley Code Camp G+ community: https://plus.google.com/110656351842726857531\nInterview Like Google (or not)-But Better! at Silicon Valley Code Camp 2018 \n\n\n\nFollow Gayle Laakmann McDowell on Twitter: https://twitter.com/gayle\n\nSpeaker Biography for Gayle Laakmann McDowell\n\nGayle Laakmann McDowell is the founder and CEO of CareerCup.com and the author of three books.\n\nGayle has worked as a Software Engineer for Google, Microsoft and Apple. She holds a BSE and MSE from UPenn in Computer Science, and an MBA from the Wharton School.",
      },
      defaultAudioLanguage: "en",
    },
    contentDetails: {
      duration: "PT1H16M2S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    status: {
      uploadStatus: "processed",
      privacyStatus: "public",
      license: "youtube",
      embeddable: true,
      publicStatsViewable: true,
      madeForKids: false,
    },
    statistics: {
      viewCount: "2484",
      likeCount: "45",
      favoriteCount: "0",
      commentCount: "0",
    },
  };

  return data ? (
    <Boundary isServerComponent={true}>
      <div className="row">
        <div className="col-md-6">
          <a target="_blank" href={`https://www.youtube.com/watch?v=${id}}`}>
            <img
              src={data?.snippet?.thumbnails?.medium?.url}
              width={100}
              alt="youtube thumb"
            />
          </a>
        </div>
        <div className="col-md-6 fst-italic fs-6">
          Views {data?.statistics?.viewCount}
        </div>
      </div>
    </Boundary>
  ) : (
    <ShowBusyIndicator />
  );
}
