addic8ed = {

bindFavorite: function()
{
	if($('a[href="javascript:qsClear();"]').length)
	{
		this.bindFavoriteSelect();
		this.bindFavoriteButton();
	}
},
bindFavoriteSelect: function() {
	if($("#qsShow").length)
	{
		addic8ed.showFavoriteSelect();
	}
	$('a[href="javascript:qsClear();"]').on('click', function() {
		$(this).parent().bind('DOMSubtreeModified', function(e) {
			if($("#qsShow").length)
			{
				$(this).unbind(e);
				addic8ed.showFavoriteSelect();
			}
		});
	});
},
showFavoriteSelect: function() {
	var favorites = localStorage.favorites && JSON.parse(localStorage.favorites) || [];
	var favoriteSelect = $('<select>');
	var favoritesOptions = '<option>[Favorite]</option>';
	favorites.forEach(function(v) {
		favoritesOptions += '<option value="' + v[0] + '">' + v[1] + '</option>';
	});
	favoriteSelect.append(favoritesOptions);
	favoriteSelect.change(function(){
		$("#qsShow").val($(this).val());
		// We have to manually trigger the change event
		var changeEvent = document.createEvent("HTMLEvents");
		changeEvent.initEvent("change", true, true);
		document.getElementById("qsShow").dispatchEvent(changeEvent);
	});
	$("#qsShow").before(favoriteSelect);
},
bindFavoriteButton: function() {
	$('#qsShow').on('change', function() {
		addic8ed.showFavoriteButton();
	});
},
showFavoriteButton: function() {
	var favorites = localStorage.favorites && JSON.parse(localStorage.favorites) || [];
	var showId = $("#qsSeason a").attr('href').substr('/show/'.length);
	var isFavorite = !!aArray.get(favorites, showId);
	var favoriteButton = $('<span>', {class: 'addic8ed ' + (isFavorite ? 'remove' : 'add') + 'Favorite'});

	favoriteButton.click(function(){
		
	});
	$("#qsSeason a").after(favoriteButton);
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