import supabase from "@/lib/supabaseClient";

const getProjects = async (profile_id: number) => {
  const { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .eq("profile_id", profile_id);
  if (projects) {
    return projects;
  } else {
    console.error(error);
    return null;
  }
};

export default getProjects;
