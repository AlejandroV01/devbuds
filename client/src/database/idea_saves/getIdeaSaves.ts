import supabase from "@/lib/supabaseClient";

const getIdeaSaves = async (idea_id: string) => {
  const { data: profiles, error } = await supabase
    .from("idea_saves")
    .select("*")
    .eq("idea_id", idea_id);

  if (profiles) {
    return profiles;
  } else {
    console.error(error);
    return null;
  }
};

export default getIdeaSaves;
