import supabase from '@/lib/supabaseClient'
import { IIdeaUpdate } from '@/routes/Home'
const updateIdea = async (idea: IIdeaUpdate) => {
  const { data, error } = await supabase
    .from('ideas')
    .update({
      idea_title: idea.title,
      idea_description: idea.description,
      tech_stack: idea.techStack,
      front_end: idea.frontend,
      back_end: idea.backend,
      full_stack: idea.fullstack,
      ux_ui: idea.uiux,
    })
    .eq('idea_id', idea.id)
  if (data) {
    console.log(data)
    return true
  } else {
    console.error(error)
    return false
  }
}

export default updateIdea