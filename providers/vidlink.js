var VIDLINK_BASE = "https://vidlink.pro";

function getStreams(tmdbId, mediaType, season, episode) {
  return __async(this, null, function* () {
    try {
      var isMovie = mediaType !== "tv";
      var url = isMovie
        ? VIDLINK_BASE + "/movie/" + tmdbId
        : VIDLINK_BASE + "/tv/" + tmdbId + "/" + season + "/" + episode;

      return [{
        name: "\u{1F517} VidLink",
        title: "VidLink - vidlink.pro",
        url: url,
        quality: "Auto",
        headers: {
          "User-Agent": "Mozilla/5.0",
          "Referer": VIDLINK_BASE + "/"
        },
        isM3U8: false,
        supportsExternalPlayer: true
      }];
    } catch (e) {
      console.error("[VidLink] Error: " + e.message);
      return [];
    }
  });
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { getStreams };
} else {
  global.getStreams = getStreams;
}
