import { TUNNEL_HOST } from "../../lib/tunnel";

export const dynamic = "force-dynamic";

export function GET() {
  return Response.redirect(`https://${TUNNEL_HOST}/chat/xaEHycFuwJPq8Cll`, 302);
}
