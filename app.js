// app.js

const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
  const url = ctx.request.url;

  if (url === '/') {
    ctx.body = '<h1>Index sayfasına hoşgeldiniz</h1>';
  } else if (url === '/hakkimda') {
    ctx.body = '<h1>Hakkımda sayfasına hoşgeldiniz</h1>';
  } else if (url === '/iletisim') {
    ctx.body = '<h1>İletişim sayfasına hoşgeldiniz</h1>';
  } else {
    ctx.status = 404;
    ctx.body = '<h1>404 - Sayfa Bulunamadı</h1>';
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`🚀 Koa sunucusu ${port} portunda çalışıyor...`);
});
