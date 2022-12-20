const dateFns = require('date-fns')
function formatDate(dateValue){
  //from date-fns format list https://date-fns.org/v2.29.3/docs/format
  /// Pp  04/29/1453, 12:00 AM
    return dateFns.format(dateValue, 'Pp')
  }

module.exports = {
  formatDate
}