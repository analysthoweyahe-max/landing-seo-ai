import { queryOptions } from '@tanstack/react-query';
import { apiFetch } from '@/lib/api';
import type { Hero } from '@/types/api';

export const heroQueryOptions = queryOptions({
  queryKey: ['heroes'],
  queryFn: () => apiFetch<Hero[]>('/api/v1/heroes?lang=ar'),
});
