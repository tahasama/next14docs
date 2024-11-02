'use server'

let likesCount=0
const incrementLike = async () => {
 // Simulate a delay for an async call (e.g., to a database or API)
 await new Promise((resolve) => setTimeout(resolve, 200));
  
 // Increment the likes count
 likesCount += 1;

 // Return the updated count
 return likesCount;
}

export default incrementLike