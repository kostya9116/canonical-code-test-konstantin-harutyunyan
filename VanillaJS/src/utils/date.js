const convertDateFormat = (dateString) => {
    if (!dateString) {
        return null;
    }

    try {
        const date = new Date(dateString);

        // Check if the date is valid
        if (isNaN(date.getTime())) {
            return null;
        }

        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();

        return `${day} ${month} ${year}`;
    } catch (error) {
        return null;
    }
}