import {supabase} from "../../supabaseClient";
export const getAllProjects = async () => {
  const { data, error } = await supabase.from("projects").select("*");
  if (error) {
    console.log(error)
    throw error;
  } else {
    console.log(`${data} from supabase client`);
    return data;
  }
}