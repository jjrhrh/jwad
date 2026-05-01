function getStreams(tmdbId, mediaType, season, episode) {
  var isMovie = mediaType !== "tv";
  var url = isMovie
    ? "https://vidsrc.to/embed/movie/" + tmdbId
    : "https://vidsrc.to/embed/tv/" + tmdbId + "/" + season + "/" + episode;

  return Promise.resolve([{
    name: "VidSrc",
    title: "VidSrc - vidsrc.to",
    url: url,
    quality: "Auto",
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Referer": "https://vidsrc.to/"
    },
    isM3U8: false,
    supportsExternalPlayer: true
  }]);
}

module.exports = { getStreams };
