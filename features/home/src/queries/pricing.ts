import { queryOptions } from '@tanstack/react-query';
import { apiFetch } from '@/lib/api';
import type { Pricing } from '@/types/api';

export const pricingQueryOptions = queryOptions({
  queryKey: ['pricing'],
  queryFn: () => apiFetch<Pricing | Pricing[]>('/api/v1/pricing?lang=ar'),
});
