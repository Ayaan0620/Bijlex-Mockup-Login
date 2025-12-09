/**
 * School type definition
 */
export type School = 'nuovo' | 'yuverta' | 'schoolanzee' | 'ma' | 'casparus' | 'viertaal' | 'stbonifatius';

/**
 * Detects which school to display based on URL path or hostname
 *
 * Priority:
 * 1. URL path (e.g., localhost:5173/nuovo or localhost:5173/yuverta or localhost:5173/scholanzee or localhost:5173/viertaal or localhost:5173/stbonifatius)
 * 2. Hostname subdomain (e.g., nuovo.example.com or yuverta.example.com or scholanzee.example.com or viertaal.example.com or stbonifatius.example.com)
 * 3. Full hostname match (e.g., nuovo.nl or yuverta.nl or scholanzee.nl or viertaal.nl or stbonifatius.nl or boni.nl)
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
  if (path.includes('/viertaal')) return 'viertaal';
  if (path.includes('/stbonifatius')) return 'stbonifatius';
  if (path.includes('/boni')) return 'stbonifatius';

  // Check hostname subdomain or full domain
  if (hostname.includes('yuverta')) return 'yuverta';
  if (hostname.includes('nuovo')) return 'nuovo';
  if (hostname.includes('schoolanzee')) return 'schoolanzee';
  if (hostname.includes('ma')) return 'ma';
  if (hostname.includes('casparus')) return 'casparus';
  if (hostname.includes('viertaal')) return 'viertaal';
  if (hostname.includes('stbonifatius')) return 'stbonifatius';
  if (hostname.includes('boni.nl')) return 'stbonifatius';
  if (hostname.includes('bonifatius')) return 'stbonifatius';

  // Default to casparus
  return 'casparus';
};

/**
 * Gets the base path for the current school
 */
export const getSchoolBasePath = (school: School): string => {
  return `/${school}`;
};