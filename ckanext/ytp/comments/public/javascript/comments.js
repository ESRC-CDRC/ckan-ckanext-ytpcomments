function ShowCommentForm(id, type){
  // reset the status
  $(".ytp-form").addClass('hidden');
  $(".ytp-content").removeClass('hidden');

  if(type==="edit"){
    $("#" + "edit_" + id).removeClass('hidden');
    $("#" + "content_" + id).addClass('hidden');
  }
  else{
    $("#" + "reply_" + id).removeClass('hidden');
  }
}
