function getStreams(tmdbId, mediaType, season, episode) {
  var isMovie = mediaType !== "tv";
  var url = isMovie
    ? "https://multiembed.mov/?video_id=" + tmdbId + "&tmdb=1"
    : "https://multiembed.mov/?video_id=" + tmdbId + "&tmdb=1&s=" + season + "&e=" + episode;

  var servers = [
    { name: "Flux", ds: 1 },
    { name: "Shadow", ds: 2 },
    { name: "Cine", ds: 3 },
    { name: "Stream", ds: 4 },
    { name: "Torrent", ds: 5 },
    { name: "Prism", ds: 6 },
    { name: "Onyx", ds: 7 },
    { name: "Titan", ds: 8 },
    { name: "Vortex", ds: 9 },
    { name: "Crown", ds: 10 },
    { name: "Quantum", ds: 11 },
    { name: "Nova", ds: 12 },
    { name: "Apex", ds: 13 },
    { name: "Blaze", ds: 14 },
    { name: "Storm", ds: 15 },
    { name: "Echo", ds: 16 }
  ];

  return Promise.resolve(servers.map(function(s) {
    return {
      name: "MultiEmbed | " + s.name,
      title: "MultiEmbed - " + s.name,
      url: url + "&ds=" + s.ds,
      quality: "Auto",
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Referer": "https://multiembed.mov/"
      },
      isM3U8: false,
      supportsExternalPlayer: false
    };
  }));
}

module.exports = { getStreams };
