import inquirer from "inquirer";
type wordCount=(str:string)=>void;
const wordCount:wordCount=(string)=>{
    const words=string.trim().split(/\s+/g);
    console.log("Total Words in the Para are: "+words.length);
    
}
const get1Input =async()=>{
    const userInput=await inquirer.prompt([
        {
            type:"input",
            name:"para",
            message:"Enter your Para:"
        }
    ]);
    await wordCount(userInput.para);

}
await get1Input();
