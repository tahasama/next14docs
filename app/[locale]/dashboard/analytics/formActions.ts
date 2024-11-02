export const publishPost:any = async (prevState: any,formData: FormData) => {
  
   
      const newContent= formData.get("username") as string;
      console.log("🚀 ~ constpublishPost:any= ~ newContent:", )
    
  
    // Simulate saving the post to a database or API
    await new Promise((resolve) => setTimeout(resolve, 200));
  
    return { success: true, message: `this is your content: ${newContent}` };
};

  export const saveDraft:any = async (draftContent: string) => {
    // Simulate saving the draft locally or to a database
    console.log("Saving draft:", draftContent);
    await new Promise((resolve) => setTimeout(resolve, 200));
    return { success: true, message: `this is your draft: ${draftContent}` };

  };