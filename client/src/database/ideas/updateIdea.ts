import supabase from '@/lib/supabaseClient'
const updateIdea = async (ideaId: number, updatedIdea: object) => {
  const { data: ideas, error } = await supabase.from('ideas').update(updatedIdea).eq('idea_id', ideaId)
  if (ideas) {
    return ideas[0]
  } else {
    console.error(error)
    return null
  }
}

export default updateIdea