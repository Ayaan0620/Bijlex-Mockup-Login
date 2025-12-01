/**
 * School type definition
 */
export type School = 'nuovo' | 'yuverta' | 'schoolanzee' | 'ma' | 'casparus';

/**
 * Detects which school to display based on URL path or hostname
 *
 * Priority:
 * 1. URL path (e.g., localhost:5173/nuovo or localhost:5173/yuverta or localhost:5173/scholanzee)
 * 2. Hostname subdomain (e.g., nuovo.example.com or yuverta.example.com or scholanzee.example.com)
 * 3. Full hostname match (e.g., nuovo.nl or yuverta.nl or scholanzee.nl)
 * 4. Default to 'casparus'
 */
export const detectSchool = (): School => {
  if (typeof window === 'undefined') return 'casparus';

  const path = window.location.pathname.toLowerCase();
  const hostname = window.location.hostname.toLowerCase();

  // Check URL path first
  if (path.includes('/yuverta')) return 'yuverta';
  if (path.includes('/nuovo')) return 'nuovo';
  if (path.includes('/schoolanzee')) return 'schoolanzee';
  if (path.includes('/ma')) return 'ma';
  if (path.includes('/casparus')) return 'casparus';

  // Check hostname subdomain or full domain
  if (hostname.includes('yuverta')) return 'yuverta';
  if (hostname.includes('nuovo')) return 'nuovo';
  if (hostname.includes('schoolanzee')) return 'schoolanzee';
  if (hostname.includes('ma')) return 'ma';
  if (hostname.includes('casparus')) return 'casparus';

  // Default to casparus
  return 'casparus';
};

/**
 * Gets the base path for the current school
 */
export const getSchoolBasePath = (school: School): string => {
  return `/${school}`;
};
