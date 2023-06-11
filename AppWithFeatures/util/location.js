const mapApiKey = process.env.MAP_API_KEY;
export function getMapPreview(lat, lng) {
  const url = `https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=600&height=400&center=lonlat:${lng},${lat}&zoom=11.7122&marker=lonlat:${lng},${lat};color:%23ff0000;size:medium&apiKey=${mapApiKey}`;
  return url;
}
