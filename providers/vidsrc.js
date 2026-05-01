var VIDSRC_BASE = "https://vidsrc.to";

function getStreams(tmdbId, mediaType, season, episode) {
  return __async(this, null, function* () {
    try {
      var isMovie = mediaType !== "tv";
      var url = isMovie
        ? VIDSRC_BASE + "/embed/movie/" + tmdbId
        : VIDSRC_BASE + "/embed/tv/" + tmdbId + "/" + season + "/" + episode;

      return [{
        name: "\u{1F4FA} VidSrc",
        title: "VidSrc - vidsrc.to",
        url: url,
        quality: "Auto",
        headers: {
          "User-Agent": "Mozilla/5.0",
          "Referer": VIDSRC_BASE + "/"
        },
        isM3U8: false,
        supportsExternalPlayer: true
      }];
    } catch (e) {
      console.error("[VidSrc] Error: " + e.message);
      return [];
    }
  });
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { getStreams };
} else {
  global.getStreams = getStreams;
}
