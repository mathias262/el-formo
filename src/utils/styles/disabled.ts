export const disabled = () => {
    return `&:disabled {
        cursor: not-allowed;
        background-color: var(--color-gray-400);
        border-color: var(--color-gray-400);
        color: var(--color-gray-600);
        filter: grayscale();
    }
`
}
