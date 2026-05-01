var AUTOEMBED_BASE = "https://autoembed.cc";

function getStreams(tmdbId, mediaType, season, episode) {
  return __async(this, null, function* () {
    try {
      var isMovie = mediaType !== "tv";
      var url = isMovie
        ? AUTOEMBED_BASE + "/embed/movie/" + tmdbId
        : AUTOEMBED_BASE + "/embed/tv/" + tmdbId + "/" + season + "/" + episode;

      return [{
        name: "\u{1F4E6} AutoEmbed",
        title: "AutoEmbed - 700K+ أفلام",
        url: url,
        quality: "Auto",
        headers: {
          "User-Agent": "Mozilla/5.0",
          "Referer": AUTOEMBED_BASE + "/"
        },
        isM3U8: false,
        supportsExternalPlayer: true
      }];
    } catch (e) {
      console.error("[AutoEmbed] Error: " + e.message);
      return [];
    }
  });
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { getStreams };
} else {
  global.getStreams = getStreams;
}
