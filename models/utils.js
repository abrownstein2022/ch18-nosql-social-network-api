const dateFns = require('date-fns')
function formatDate(dateValue){
    return dateFns.format(dateValue, 'hh:ss MM/dd/y')
  }

module.exports = {
  formatDate
}