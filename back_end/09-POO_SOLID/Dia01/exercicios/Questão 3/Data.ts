class Data {
  day: number;
  month: number;
  year: number;

  constructor(day: number, month: number, year: number) {
    if (this.isValidateDate(day, month, year)){
      this.day = day;
      this.month = month;
      this.year = year;
    } else {
      this.day = 1;
      this.month = 1;
      this.year = 1900;
    }
  }

  private isValidateDate(day: number, month: number, year: number): boolean {
    const date = new Date(year, month -1, day);
  
    return (
      date.getFullYear() === year &&
      date.getMonth() === month -1 &&
      date.getDay() === day
    );
  }

  getMonthName(month: number): string {
    const paddedMonth = month < 10 ? `0${month}` : `${month}`;
    switch (paddedMonth) {
      case '01':
        return 'Janeiro';
      case '02':
        return 'Fevereiro';
      case '03':
        return 'Março';
      case '04':
        return 'Abril';
      case '05':
        return 'Maio';
      case '06':
        return 'Junho';
      case '07':
        return 'Julho';
      case '08':
        return 'Agosto';
      case '09':
        return 'Setembro';
      case '10':
        return 'Outubro';
      case '11':
        return 'Novembro';
      default:
        return 'Dezembro'
    }
  }

  isLeapYear(): boolean {
    const year = this.year;
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  compare(newData: Data): number {
    const currDate = new Date(this.year, this.month -1, this.day).getTime();
    const newDate = new Date(newData.year, newData.month -1, newData.day).getTime();

    if (currDate === newDate){
      return 0;
    } else if (currDate > newDate) {
      return 1;
    } else {
      return -1;
    }
  }

  format(format: string): string {
    let formattedDate = format;

    formattedDate = formattedDate.replace('aaaa', this.year.toString());
    formattedDate = formattedDate.replace('aa', (this.year % 100).toString().padStart(2, '0'));
    formattedDate = formattedDate.replace('mm', this.month.toString().padStart(2, '0'));
    formattedDate = formattedDate.replace('M', this.getMonthName(this.month));
    formattedDate = formattedDate.replace('dd', this.day.toString().padStart(2, '0'));

    return formattedDate;
  }
}

export default Data;