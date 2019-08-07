export const stringifyUTCOffset = hour => {
  const leadingSign = hour < 0 ? '-' : '+';
  return leadingSign + Math.abs(hour).toString().padStart(2, '0') + ':00';
}
  
