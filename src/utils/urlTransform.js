export const formatServiceId = (id) => {
  if (!id) return '';
  return id.toLowerCase().replace(/_/g, '-');
};

export const parseServiceId = (id) => {
  if (!id) return '';
  return id.toUpperCase().replace(/-/g, '_');
}; 