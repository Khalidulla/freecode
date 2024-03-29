// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

function whatCentury(year)
{
  let suffix;
  const yearNumber = parseInt(year)
  let century = Math.ceil(yearNumber/100);
  if (century>=11 && century<=13){
    suffix = "th";
  } else{
    switch (century % 10) {
        case 1:
         suffix = "st"
          break;
        case 2:
          suffix = "nd"
          break ;
        case 3:
          suffix = "rd"
          break;
        default: 
        suffix ="th"
    }
  }
  return century + suffix
  
}