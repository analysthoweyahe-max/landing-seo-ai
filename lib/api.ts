export const API_BASE_URL = 'https://api-landing-seo.subcodeco.com';

export async function apiFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      Accept: 'application/json',
      'Accept-Language': 'ar',
    },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`API ${res.status}: ${path}`);
  }

  const json = await res.json();
  return json.data as T;
}

export function stripHtml(html: string | null | undefined): string {
  if (!html) return '';
  return String(html).replace(/<[^>]*>/g, '').trim();
}
