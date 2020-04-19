function changeImg() {
    /*获取图片和索引的数组*/
    var $imgs = $("#ad_img li");
    var $nums = $("#ad_num li");

    var isStop = false;
    var index = 0;

    $nums.eq(index).addClass("numsover").siblings().removeClass("numsover");
    $imgs.eq(index).show();

    /*鼠标悬停在数字上的事件*/
    $nums.mouseover(function() {
        isStop = true;
        /*先把数字的背景改了*/
        $(this).addClass("numsover").siblings().removeClass("numsover");

        /*图片的索引和数字的索引是对应的，所以获取当前的数字的索引就可以获得图片，从而对图片进行操作*/
        index = $nums.index(this);
        $imgs.eq(index).show("slow");
        $imgs.eq(index).siblings().hide("slow");
    }).mouseout(function() {
        isStop = false
    });
    /*设置循环*/
    setInterval(function() {
        if(isStop) return;
        if(index >= 5) index = -1;
        index++;
        $nums.eq(index).addClass("numsover").siblings().removeClass("numsover");
        $imgs.eq(index).show("slow").siblings().hide("slow");

    }, 3000);

}
