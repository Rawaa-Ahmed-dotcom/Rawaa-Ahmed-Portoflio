import { useQuery } from "@tanstack/react-query"
import { getAllSkills } from '../../services/Skills';

export const useGetAllSkills = () => {
    const {data,isLoading,isError,error,isFetching} = useQuery({
        queryKey : ["skills"],
        queryFn : getAllSkills
    })
    return {data,isLoading,isError,error,isFetching};
}