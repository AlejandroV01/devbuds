import supabase from "@/lib/supabaseClient";

// CREATE TABLE experiences (
//     profile_id BIGINT REFERENCES profiles (id),
//     company TEXT NOT NULL,
//     title TEXT NOT NULL,
//     start_date TEXT NOT NULL,
//     end_date TEXT NOT NULL,
//     description TEXT
//     );

interface ExperienceTableTypes {
  experience_id: number;
  company: string;
  title: string;
  start_date: string;
  end_date: string;
  description: string;
}

const updateExperience = async (experience: ExperienceTableTypes) => {
  const { data, error } = await supabase
    .from("experiences")
    .update({
      company: experience.company,
      title: experience.title,
      start_date: experience.start_date,
      end_date: experience.end_date,
      description: experience.description,
    })
    .eq("experience_id", experience.experience_id);
  if (data) {
    console.log(data);
    return true;
  } else {
    console.error(error);
    return false;
  }
};

export default updateExperience;
