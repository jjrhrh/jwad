function getStreams(tmdbId, mediaType, season, episode) {
  var isMovie = mediaType !== "tv";
  var url = isMovie
    ? "https://vidlink.pro/movie/" + tmdbId
    : "https://vidlink.pro/tv/" + tmdbId + "/" + season + "/" + episode;

  return Promise.resolve([{
    name: "VidLink",
    title: "VidLink - vidlink.pro",
    url: url,
    quality: "Auto",
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Referer": "https://vidlink.pro/"
    },
    isM3U8: false,
    supportsExternalPlayer: false
  }]);
}

module.exports = { getStreams };
