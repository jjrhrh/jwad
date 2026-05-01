function getStreams(tmdbId, mediaType, season, episode) {
  var isMovie = mediaType !== "tv";
  var url = isMovie
    ? "https://autoembed.cc/embed/movie/" + tmdbId
    : "https://autoembed.cc/embed/tv/" + tmdbId + "/" + season + "/" + episode;

  return Promise.resolve([{
    name: "AutoEmbed",
    title: "AutoEmbed - 700K+",
    url: url,
    quality: "Auto",
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Referer": "https://autoembed.cc/"
    },
    isM3U8: false,
    supportsExternalPlayer: false
  }]);
}

module.exports = { getStreams };
