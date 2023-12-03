export class DateUtil {
  static transformDayNumberToDayText(dayNumber) {
    if (dayNumber === 0) {
      return '일';
    } else if (dayNumber === 1) {
      return '월';
    } else if (dayNumber === 2) {
      return '화';
    } else if (dayNumber === 3) {
      return '수';
    } else if (dayNumber === 4) {
      return '목';
    } else if (dayNumber === 5) {
      return '금';
    } else if (dayNumber === 6) {
      return '토';
    }
  }
}
