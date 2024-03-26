import supabase from '@/lib/supabaseClient';

interface UpdateProfileData {
  first_name?: string;
  last_name?: string;
  email?: string;
  school?: string;
  major?: string;
  location?: string;
  linkedin_link?: string;
  github_link?: string;
  portfolio_link?: string;
  skills?: string[];
  languages?: string[];
}

const updateProfileById = async (profile_id: number, data: UpdateProfileData): Promise<boolean> => {

  try {
    const { error } = await supabase
    .from('profiles')
    .update(data).
    eq('id', profile_id);

    if (error) {
      console.error(error);
      return false;
    }

    return true;

  } 
  
  catch (error) {

    console.error('ERROR: Cannot update profile data', error);
    return false;

  }
};

export default updateProfileById;