export function newsTitle({ title, type = 1 }) {
    type = type > 6 ? 6 : (type < 1 ? 1 : type);
    return `
        <h${type} class="text-3xl font-bold text-blue-700">${title}</h${type}>
    `;
}