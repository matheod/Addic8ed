addic8ed = {

bindFavorite: function()
{
	if($('a[href="javascript:qsClear();"]').length)
	{

	}
}

}

aArray = {
get: function(array, key) {
	array.forEach(function(v) {
		if(v[0] === key)	return v[1];
	});
},
set: function(array, key, value) {
	array.forEach(function(v, i, a) {
		if(v[0] === key)
		{
			array[i] = value;
			return;
		}
	});
	array.push([key, value]);
},
remove: function(array, key) {
	array.forEach(function(v, i, a) {
		if(v[0] === key)
		{
			array.splice(i, 1);
			return true;
		}
	});
	return false;
},
sort: function(array) {
	array.sort(this.sortFunction);
},
sortFunction: function(a,b){
  if (a[0] < b[0])
     return -1;
  if (a[0] > b[0])
     return 1;
  return 0;
}
}


window.addEventListener('DOMContentLoaded', function() {

	addic8ed.bindFavorite();

}, false);