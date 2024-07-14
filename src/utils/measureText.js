
const measureText = (text,ref) => {
     console.log(ref)

     

     if(ref.current !== null){
      const canvas = document.createElement('canvas');
     const context = canvas.getContext('2d');
     const font =  window.getComputedStyle(ref.current).font
     context.font = font;
     const metrics = context.measureText(text);
     console.log(metrics.width)
     return metrics.width
     }
     
}

export default measureText