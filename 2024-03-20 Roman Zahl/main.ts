export function romanConverter(int: number) {
  let result = '';
  if(int < 1 || int > 3999) {
    
    result = 'Number must be between 1 and 3999';
  }
 

  const romanNumbers = [
    { value: 1000, roman: 'M' },
    { value: 900, roman: 'CM' },  
    { value: 500, roman: 'D' }, 
    { value: 400, roman: 'CD' }, 
    { value: 100, roman: 'C' }, 
    { value: 90, roman: 'XC' }, 
    { value: 50, roman: 'L' }, 
    { value: 40, roman: 'XL' }, 
    { value: 10, roman: 'X' }, 
    { value: 9, roman: 'IX' }, 
    { value: 5, roman: 'V' }, 
    { value: 4, roman: 'IV' }, 
    { value: 1, roman: 'I' }
  ];

  

  for(let i = 0; i < romanNumbers.length; i++) {
    while(int >= romanNumbers[i].value) {
      result += romanNumbers[i].roman;
      int -= romanNumbers[i].value;
    }
  }   
  return result;
}

