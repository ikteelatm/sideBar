/**
 *  Simulate fetching the json data through asynchronous call
 * @returns {Promise<Array|*>}
 */
export const getReports = async () => {
    const response = await fetch('sidebar.json');
    const json = await response.json();
    return json.result.reports;
};