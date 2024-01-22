class CustomRegex
{
    static isAlphabet(value,helper){
        
            const regex = /^[a-zA-Z ]{3,}$/ ;
            if(!regex.test(value))
                return helper.message("FirstName can only contains alphabets.");
            return true;
    }

    static isContactNumber(value,helper){
        
        const regex = /^[6-9]{1}[0-9]{9}$/ ;
        
        if(!regex.test(value))
            return helper.message("Contact number must be of 10 digits."); 
        return true;
    }   

}

export default CustomRegex ; 