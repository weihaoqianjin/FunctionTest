(function($){
    $.fn.twinkle=function(time,defaultColor){
        // // 选项设置
        // options=$.extend({
        //     time:200,
        //     defaultColor:"black"
        // },options);
        time=time?time:500;
        defaultColor=defaultColor?defaultColor:"red";

       var setColor=function () {
            return  '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6);
        }

        // jQuery链
        return this.each(function(){
            $this=$(this);
            setInterval(function(){

                $this.css("color",setColor());
            },time);
        });

    };
})(jQuery);