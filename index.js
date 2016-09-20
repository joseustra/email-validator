'use strict';
module.exports = function (email) {
    var valid_filter;
    var m;

    if(email.length > 254) {
        return false;
    }

    valid_filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    m = void 0;
    if ((m = valid_filter.exec(email)) !== null) {
      if (m.index === valid_filter.lastIndex) {
        valid_filter.lastIndex++;
      }
    }
    return m !== null;
};
