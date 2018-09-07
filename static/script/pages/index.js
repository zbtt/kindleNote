
$.get('/ajax/index',function(d){
    new Vue({
        el:'.noteList-container',
        data:{
            items:d
        },
    });
},'json');
$('li:eq(1)').click(function(){
    if(this.next().is(':hidden')){
        this.next().css('style','block');
    }else{
        this.next().css('style','none');
    }
});
