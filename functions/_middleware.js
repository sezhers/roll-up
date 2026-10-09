const LEGACY_PARAMS = [
  "id",
  "id_lang",
  "lang_id",
  "id_gal",
  "print_page",
  "action",
  "current_action",
  "output",
];

export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.pathname === "/" && LEGACY_PARAMS.some((p) => url.searchParams.has(p))) {
    return Response.redirect(`${url.origin}/`, 301);
  }
  return next();
}
