const mapApiKey = process.env.MAP_API_KEY;
export function getMapPreview(lat, lng) {
  const url = `https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=600&height=400&center=lonlat:${lng},${lat}&zoom=11.7122&marker=lonlat:${lng},${lat};color:%23ff0000;size:medium&apiKey=${mapApiKey}`;
  return url;
}

export async function getAddress(lat, lng) {
  const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&type=postcode&format=json&apiKey=${mapApiKey}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch address");
  }

  const data = await response.json();
  const address = `${data?.results[0].address_line1}, ${data?.results[0].country}`;
  return address;
}
