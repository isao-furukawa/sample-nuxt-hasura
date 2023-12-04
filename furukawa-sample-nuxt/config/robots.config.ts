export default [
  { Comment: '一旦全てのクローラーを遮断する' },
  { UserAgent: '*' },
  { Disallow: '/' },
  { BlankLine: true },
  // { Sitemap: (req:any) => `https://${req.headers.host}/sitemap.xml` },
];
