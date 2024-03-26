import supabase from "@/lib/supabaseClient";
import { error} from "console";

const updateIdeaSaves = async (newIdeaID: number, profile_id: number) => {
    
    const { data, error } = await supabase
    .from('idea_saves')
    .update( {idea_id: newIdeaID} )
    .eq('profile_id', profile_id)
    .select()

    if (data) {
        return data;
      } else {
        console.error(error);
        return null;
      }
}

export default updateIdeaSaves

/* Implement a file that utilizes the Supabase API to update animalName information of a specific animal_id from the database table using the Supabase API*/