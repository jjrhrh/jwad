function getStreams(tmdbId, mediaType, season, episode) {
  var isMovie = mediaType !== "tv";
  var url = isMovie
    ? "https://www.2embed.cc/embed/" + tmdbId
    : "https://www.2embed.cc/embedtv/" + tmdbId + "&s=" + season + "&e=" + episode;

  return Promise.resolve([{
    name: "2Embed",
    title: "2Embed - 2embed.cc",
    url: url,
    quality: "Auto",
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Referer": "https://www.2embed.cc/"
    },
    isM3U8: false,
    supportsExternalPlayer: true
  }]);
}

module.exports = { getStreams };
