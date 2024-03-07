
function formatDate(date) {
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      };

    return date.toDateString('us-EN', options);
}