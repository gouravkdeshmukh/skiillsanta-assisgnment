str = prompt("Enter the String with HTML tags");

function removeTags(str)
{
   if ((str===null) || (str===''))
       return false;
  else
   str = str.toString();
  return str.replace(/<[^>]*>/g, '');
}

document.write(removeTags(str));
