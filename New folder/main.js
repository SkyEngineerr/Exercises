function prompt_box()
{

    var name = prompt("Please enter your name","Name");

    if(name!=null && name!= " ")
    {

        document.write("Hello" + " " + name 
        + " " + "Thank You!");

    }
}