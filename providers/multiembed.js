var MULTIEMBED_BASE = "https://multiembed.mov";

function getStreams(tmdbId, mediaType, season, episode) {
  return __async(this, null, function* () {
    try {
      var isMovie = mediaType !== "tv";
      var url = isMovie
        ? MULTIEMBED_BASE + "/?video_id=" + tmdbId + "&tmdb=1"
        : MULTIEMBED_BASE + "/?video_id=" + tmdbId + "&tmdb=1&s=" + season + "&e=" + episode;

      var servers = [
        { name: "Flux",    ds: 1 },
        { name: "Shadow",  ds: 2 },
        { name: "Cine",    ds: 3 },
        { name: "Stream",  ds: 4 },
        { name: "Torrent", ds: 5 },
        { name: "Prism",   ds: 6 },
        { name: "Onyx",    ds: 7 },
        { name: "Titan",   ds: 8 },
        { name: "Vortex",  ds: 9 },
        { name: "Crown",   ds: 10 },
        { name: "Quantum", ds: 11 },
        { name: "Nova",    ds: 12 },
        { name: "Apex",    ds: 13 },
        { name: "Blaze",   ds: 14 },
        { name: "Storm",   ds: 15 },
        { name: "Echo",    ds: 16 }
      ];

      return servers.map(function(s) {
        return {
          name: "\u{1F3AC} MultiEmbed | " + s.name,
          title: "MultiEmbed - " + s.name,
          url: url + "&ds=" + s.ds,
          quality: "Auto",
          headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
            "Referer": MULTIEMBED_BASE + "/"
          },
          isM3U8: false,
          supportsExternalPlayer: true
        };
      });
    } catch (e) {
      console.error("[MultiEmbed] Error: " + e.message);
      return [];
    }
  });
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { getStreams };
} else {
  global.getStreams = getStreams;
}
