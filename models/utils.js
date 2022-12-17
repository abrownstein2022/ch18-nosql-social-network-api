
function formatDate(dateValue){
    return dateFns.format(dateValue, 'HH:mm:SS d/yy')
  }

module.exports = {
  formatDate
}