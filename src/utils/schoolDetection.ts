/**
 * School type definition
 */
export type School = 'nuovo' | 'yuverta';

/**
 * Detects which school to display based on URL path or hostname
 *
 * Priority:
 * 1. URL path (e.g., localhost:5173/nuovo or localhost:5173/yuverta)
 * 2. Hostname subdomain (e.g., nuovo.example.com or yuverta.example.com)
 * 3. Full hostname match (e.g., nuovo.nl or yuverta.nl)
 * 4. Default to 'nuovo'
 */
export const detectSchool = (): School => {
  if (typeof window === 'undefined') return 'nuovo';

  const path = window.location.pathname.toLowerCase();
  const hostname = window.location.hostname.toLowerCase();

  // Check URL path first
  if (path.includes('/yuverta')) return 'yuverta';
  if (path.includes('/nuovo')) return 'nuovo';

  // Check hostname subdomain or full domain
  if (hostname.includes('yuverta')) return 'yuverta';
  if (hostname.includes('nuovo')) return 'nuovo';

  // Default to nuovo
  return 'nuovo';
};

/**
 * Gets the base path for the current school
 */
export const getSchoolBasePath = (school: School): string => {
  return `/${school}`;
};
