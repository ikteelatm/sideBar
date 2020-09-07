/**
 *  Simulate fetching the json data through asynchronous call
 * @returns {Promise<Array|*>}
 */
export const getReports = async (file) => {
    const response = await fetch(file);
    const json = await response.json();
    return json.result.reports.sort((a, b) => b.updated - a.updated);
};