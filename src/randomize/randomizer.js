
export  default  function randomize(max, oldValue=99) 
{
    max=max+1;
    let randomNumber;
    randomNumber=Math.floor(Math.random() * max);

    if(randomNumber == oldValue)
    {
        {
            do 
            {
                randomNumber=Math.floor(Math.random() * max);
            } while (randomNumber!=oldValue);
        }
    }    
    return randomNumber; 
}

