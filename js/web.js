function add()
{
    var element= document.getElementById('Number');
    var value= element.innerHTML;

    ++value;

    console.log(value);
    document.getElementById('Number').innerHTML=value;
    set
}

function sub()
{
    var element= document.getElementById('Number');
    var value= element.innerHTML;

    --value;

    console.log(value);
    document.getElementById('Number').innerHTML= value;
}
