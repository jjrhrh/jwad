function getStreams(tmdbId, mediaType, season, episode) {
  var isMovie = mediaType !== "tv";

  var embedSuUrl = isMovie
    ? "https://embed.su/embed/movie/" + tmdbId
    : "https://embed.su/embed/tv/" + tmdbId + "/" + season + "/" + episode;

  var vidBingeUrl = isMovie
    ? "https://vidbinge.dev/embed/movie/" + tmdbId
    : "https://vidbinge.dev/embed/tv/" + tmdbId + "/" + season + "/" + episode;

  return Promise.resolve([
    {
      name: "EmbedAPI | EmbedSu",
      title: "EmbedSu",
      url: embedSuUrl,
      quality: "Auto",
      headers: { "User-Agent": "Mozilla/5.0", "Referer": "https://embed.su/" },
      isM3U8: false,
      supportsExternalPlayer: false
    },
    {
      name: "EmbedAPI | VidBinge",
      title: "VidBinge",
      url: vidBingeUrl,
      quality: "Auto",
      headers: { "User-Agent": "Mozilla/5.0", "Referer": "https://vidbinge.dev/" },
      isM3U8: false,
      supportsExternalPlayer: false
    }
  ]);
}

module.exports = { getStreams };
