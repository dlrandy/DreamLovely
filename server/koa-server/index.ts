import http from 'http';
import https from 'https'
import Koa from 'koa'

const app = new Koa();
app.use(async (ctx, next) => {
  const currentDateTime = new Date().toLocaleDateString();
  console.log(`${ctx.method} request made top oo${ctx.url} at ${currentDateTime}`)
  await next();
})

http.createServer(app.callback()).listen(3000);
https.createServer(app.callback()).listen(3001);

