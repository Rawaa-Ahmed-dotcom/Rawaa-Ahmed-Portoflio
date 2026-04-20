import {supabase} from "../../supabaseClient";
export const getAllSkills = async() => {
  const { data, error } = await supabase.from("Skills").select("*");

  if (error) {
    throw error;
  } else {
    return data;
  }
};
