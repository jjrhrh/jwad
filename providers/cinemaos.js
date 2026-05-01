var CINEMAOS_BASE = "https://cinemaos.live";

function getStreams(tmdbId, mediaType, season, episode) {
  return __async(this, null, function* () {
    try {
      var isMovie = mediaType !== "tv";
      var url = isMovie
        ? CINEMAOS_BASE + "/embed/movie/" + tmdbId
        : CINEMAOS_BASE + "/embed/tv/" + tmdbId + "/" + season + "/" + episode;

      return [{
        name: "\u{1F3A5} CinemaOS",
        title: "CinemaOS - cinemaos.live",
        url: url,
        quality: "Auto",
        headers: {
          "User-Agent": "Mozilla/5.0",
          "Referer": CINEMAOS_BASE + "/"
        },
        isM3U8: false,
        supportsExternalPlayer: true
      }];
    } catch (e) {
      console.error("[CinemaOS] Error: " + e.message);
      return [];
    }
  });
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { getStreams };
} else {
  global.getStreams = getStreams;
}
