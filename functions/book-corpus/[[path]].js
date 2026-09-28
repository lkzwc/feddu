// 书籍《高性价比人生指南》正文代理：同源转发 GitHub 仓库原始文件，
// 每次请求都回源拉取最新内容（cacheTtl 0），避免浏览器直连 raw.githubusercontent
// 被网络阻断，也避免本地副本过期。
const UPSTREAM = 'https://raw.githubusercontent.com/eternity4719/HowToLiveBetter/main/';

export async function onRequest(context) {
  try {
    const segs = context.params.path || [];
    if (typeof segs === 'string') {
      return new Response('params: string=' + segs, { status: 200 });
    }
    if (segs.some(s => s === '..' || s.includes('\\'))) {
      return new Response('bad path', { status: 400 });
    }
    const path = segs.map(encodeURIComponent).join('/');
    if (!path) return new Response('missing path', { status: 400 });

    const res = await fetch(UPSTREAM + path, { cf: { cacheTtl: 0 } });
    const headers = new Headers(res.headers);
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Content-Type', 'text/plain; charset=utf-8');
    return new Response(res.body, { status: res.status, headers });
  } catch (err) {
    return new Response('upstream error: ' + (err && err.message ? err.message : String(err)), { status: 502 });
  }
}
