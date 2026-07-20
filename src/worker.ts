export interface Env { ASSETS: Fetcher; }
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (!url.hostname.startsWith("www.")) {
      const target = new URL(request.url);
      target.hostname = `www.${url.hostname}`;
      return Response.redirect(target.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
