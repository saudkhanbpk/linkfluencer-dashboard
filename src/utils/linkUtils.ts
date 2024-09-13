export const getLinkLabel = (targetSite: string) =>
  targetSite === 'unknown'
    ? 'Smart Link'
    : targetSite.charAt(0).toUpperCase() + targetSite.slice(1);
