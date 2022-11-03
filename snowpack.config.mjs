export default {
  mount: {
    src: { url: '/dist' },
    public: {url: '/', static: true},
  },
  routes: [
    {match: 'routes', src: '.*', dest: '/index.html'} // fallback route for SPA https://www.snowpack.dev/guides/routing
  ],
  packageOptions: {
    knownEntrypoints: [
      'react-is',
    ],
  },
  buildOptions: {
    out: 'dist',
    baseUrl: '.',
  },
  devOptions: {
    open: 'chrome',
  },
  // optimize: {
  //   // entrypoints: 'auto',
  //   // preload: true,
  //   bundle: true,
  //   minify: true,
  //   treeshake: true,
  //   manifest: true,
  //   target: 'es2018',
  // },
};
