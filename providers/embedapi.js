var EMBEDSU_BASE = "https://embed.su";
var VIDBINGE_BASE = "https://vidbinge.dev";

function getStreams(tmdbId, mediaType, season, episode) {
  return __async(this, null, function* () {
    try {
      var isMovie = mediaType !== "tv";
      var streams = [];

      var embedSuUrl = isMovie
        ? EMBEDSU_BASE + "/embed/movie/" + tmdbId
        : EMBEDSU_BASE + "/embed/tv/" + tmdbId + "/" + season + "/" + episode;

      streams.push({
        name: "\u26A1 EmbedAPI | EmbedSu",
        title: "EmbedSu",
        url: embedSuUrl,
        quality: "Auto",
        headers: { "User-Agent": "Mozilla/5.0", "Referer": EMBEDSU_BASE + "/" },
        isM3U8: false,
        supportsExternalPlayer: true
      });

      var vidBingeUrl = isMovie
        ? VIDBINGE_BASE + "/embed/movie/" + tmdbId
        : VIDBINGE_BASE + "/embed/tv/" + tmdbId + "/" + season + "/" + episode;

      streams.push({
        name: "\u26A1 EmbedAPI | VidBinge",
        title: "VidBinge",
        url: vidBingeUrl,
        quality: "Auto",
        headers: { "User-Agent": "Mozilla/5.0", "Referer": VIDBINGE_BASE + "/" },
        isM3U8: false,
        supportsExternalPlayer: true
      });

      return streams;
    } catch (e) {
      console.error("[EmbedAPI] Error: " + e.message);
      return [];
    }
  });
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { getStreams };
} else {
  global.getStreams = getStreams;
}
