export const slugify = (text) => {
    if (!text) return '';
    return text
        .toString()
        .toLowerCase()
        .replace(/ğ/g, 'g')
        .replace(/ü/g, 'u')
        .replace(/ş/g, 's')
        .replace(/ı/g, 'i')
        .replace(/İ/g, 'i')
        .replace(/ö/g, 'o')
        .replace(/ç/g, 'c')
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '') // Remove all non-word chars
        .replace(/--+/g, '-');   // Replace multiple - with single -
};
