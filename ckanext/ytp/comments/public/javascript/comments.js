function ShowCommentForm(id, type){
  // reset the status
  $("form.ytp-form").addClass('hidden');
  $("div.ytp-content").removeClass('hidden');

  if(type==="edit"){
    $("#" + "edit_" + id).removeClass('hidden');
    $("#" + "content_" + id).addClass('hidden');
  }
  else{
    $("#" + "reply_" + id).removeClass('hidden');
  }
}
