export const formatServiceId = (id) => {
  return id
    .replace(/_/g, '-')
    .toLowerCase();
};

export const parseServiceId = (id) => {
  return id
    .replace(/-/g, '_')
    .toUpperCase();
}; 