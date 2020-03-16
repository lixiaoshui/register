$(function() {
    console.log(1111)
    var $name = $('#name'),
        $phone = $('#phone'),
        $psd = $('#psd'),
        $yz = $('#yz'),
        $button = $('#button'),
        $namem = $('#namem'),
        $phonem = $('#phonem'),
        $psdm = $('#psdm'),
        $vrf = $('#vrf'),
        $vrfm = $('#vrfm');
    var count = 59;
    var nameres = false,
        psdres = false,
        phoneres = false,
        yzres = false;

    //输入提示
    $name.focus(function() {
        $namem.html('设置后不可更改，中英文皆可，最长14个英文或7个汉字')
    });
    $psd.focus(function() {
        $psdm.html('长度为8~14个字符，字母/数字/标点符号至少两种，不能有中文和空格')
    });

    //字段级别验证

    //用户名检验
    $name.blur(function() {
        if($name.val().length > 14){
            $namem.html('用户名长度不能超过14个字符');
        }else if(!(/^[\u4E00-\u9FA5A-Za-z0-9_]+$/.test($name.val()) && !/^[0-9]*$/.test($name.val()))){
            $namem.html('用户名只支持中英文，数字，下划线且不能为纯数字')
        }else{
            $namem.html('');
            nameres=true;
        }
    });

    //手机号验证
    $phone.blur(function() {
        if(!(/^\d{11}$/.test($phone.val()))){
            $phonem.html('手机号格式不正确');
        }else{
            $phonem.html('');
            phoneres = true;
        }
    });

    //密码验证
    $psd.blur(function() {
        if($psd.val().length < 8 || $psd.val().length > 14){
            $psdm.html('密码格式不符合要求')
        }else if(!(/^([\u4e00-\u9fa5]|[\S])+$/.test($psd.val()))){
            $psdm.html('密码格式不符合要求')
        }else{
            $psdm.html('');
            psdres = true;
        }
    })

    //验证码验证
    $yz.blur(function() {
        if(!$yz.val()){
            $vrfm.html('请输入验证码')
            yzres = false;
        }else{
            $vrfm.html('');
            yzres = true;
        }
    })



    //验证码效果
    $vrf.click(function() {
        $vrf.addClass('disable').attr({'disabled':'disabled'});
        var time = setInterval(function() {
            $vrf.html(count--);
        },1000);
        setTimeout(function() {
            $vrf.removeClass('disable').removeAttr('disabled');
            clearInterval(time);
            $vrf.html('获取验证码');
            count = 59;
        },60000);
    });


    //表单验证
    $button.click(function() {
        if(! (nameres && psdres && phoneres && yzres)){
            console.log('注册失败')
        }else{
            console.log('注册成功')
        }
        
    });

    
});