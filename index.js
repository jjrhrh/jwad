const { addonBuilder, serveHTTP } = require("stremio-addon-sdk");
const manifest = require("./manifest.json");
const providers = [
  require("./providers/multiembed"),
  require("./providers/vidsrc"),
  require("./providers/vidlink"),
  require("./providers/2embed"),
  require("./providers/autoembed"),
  require("./providers/cinemaos"),
  require("./providers/embedapi"),
];

const builder = new addonBuilder(manifest);

builder.defineStreamHandler(async ({ type, id }) => {
  const parts = id.split(":");
  const tmdbId = parts[0];
  const season = parts[1];
  const episode = parts[2];
  let streams = [];
  for (const p of providers) {
    const s = await p.getStreams(tmdbId, type, season, episode);
    streams = streams.concat(s);
  }
  return { streams };
});

serveHTTP(builder.getInterface(), { port: process.env.PORT || 7000 });
