const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval: NodeJS.Timeout | undefined = undefined;

export const hackerEffect = (event: Event & { target: HTMLButtonElement & { dataset: { value: string } } }) => {
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter: string, index: number) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 2;
  }, 40);
};
