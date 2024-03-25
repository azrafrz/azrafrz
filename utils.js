class Utils {
    static emptyElement(element) {
      element.innerHTML = '';
    }
    
    static isValidInteger(newValue) {
      return Number.isNaN(newValue) || Number.isFinite(newValue);
    }
  }
  
  export default Utils;