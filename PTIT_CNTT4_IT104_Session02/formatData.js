export const formatDate = (dataInput) => {
    const date = new Date(dataInput);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formattedDay = day < 10 ? '0' + day : day;
    const formatteMonth = month < 10 ? '0' + month : month;

    return `${formattedDay}/${formatteMonth}/${year}`;

}