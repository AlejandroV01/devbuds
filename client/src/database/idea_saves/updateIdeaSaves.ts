import supabase from "@/lib/supabaseClient";
import { error, profile } from "console";

const updateIdeaSaves = async (profile_id: number) => {
    //Update idea saves to specific profile_id
    const { data: profiles, error } = await supabase
    .from('idea_saves')
    .update( { profile_id: profile_id.valueOf() } )
    .eq('ideas_id', profile_id)
    .select()

    if (profiles) {
        return profiles;
      } else {
        console.error(error);
        return null;
      }
}

/* Implement a file that utilizes the Supabase API to update animalName information of a specific animal_id from the database table using the Supabase API*/