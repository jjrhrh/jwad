var TWOEMBED_BASE = "https://www.2embed.cc";

function getStreams(tmdbId, mediaType, season, episode) {
  return __async(this, null, function* () {
    try {
      var isMovie = mediaType !== "tv";
      var url = isMovie
        ? TWOEMBED_BASE + "/embed/" + tmdbId
        : TWOEMBED_BASE + "/embedtv/" + tmdbId + "&s=" + season + "&e=" + episode;

      return [{
        name: "\u26A1 2Embed",
        title: "2Embed - 2embed.cc",
        url: url,
        quality: "Auto",
        headers: {
          "User-Agent": "Mozilla/5.0",
          "Referer": TWOEMBED_BASE + "/"
        },
        isM3U8: false,
        supportsExternalPlayer: true
      }];
    } catch (e) {
      console.error("[2Embed] Error: " + e.message);
      return [];
    }
  });
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { getStreams };
} else {
  global.getStreams = getStreams;
}
