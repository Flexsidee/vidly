//This algorithm is used for paginate a list of items 
//Lodash was used

import _ from 'lodash';

export function paginate(items, pageNumber, pageSize){
    const startIndex = (pageNumber -1) * pageSize;
   return _(items).slice(startIndex).take(pageSize).value();
}