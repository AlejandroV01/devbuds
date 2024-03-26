import supabase from "@/lib/supabaseClient";

const insertIdeaSaves = async (profile_id: number, idea_id: number): Promise<boolean> => {

    try {

      const { data:ideas , error } = await supabase.from("idea_saves").insert([{ profile_id, idea_id }]);
  
//Errors:      
      if (error) {

        console.error(error);
        return false;

      }
  
      if (ideas) {

        console.log("Idea Saves successfully inserted:", ideas);
        return true;

      }
  
      return false;

    } 
    
    catch (error) {

      console.error("Unexpected error while inserting Idea Saves:", error);
      return false;
      
    }

  };
  
  export default insertIdeaSaves;