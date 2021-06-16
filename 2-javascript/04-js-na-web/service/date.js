export const removeRepeatedDates = (dates) => {

  const uniqueDates = [];
  dates.forEach((date => {
    if(uniqueDates.indexOf(date.dateFormated) === -1){
      uniqueDates.push(date.dateFormated);
    }
  }));
  return uniqueDates;
}

export const sortDates = (date) => {
  date.sort((a, b) => {
    const firstDate = moment(a, 'DD/MM/YYYY').format('YYYYMMDD');
    const secondDate = moment(b, 'DD/MM/YYYY').format('YYYYMMDD');
    return firstDate - secondDate;
  });
};