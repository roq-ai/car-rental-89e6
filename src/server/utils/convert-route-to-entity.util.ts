const mapping: Record<string, string> = {
  organizations: 'organization',
  reservations: 'reservation',
  usages: 'usage',
  users: 'user',
  vehicles: 'vehicle',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
