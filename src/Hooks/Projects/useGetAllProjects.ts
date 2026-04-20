import {  useQuery } from "@tanstack/react-query"
import { getAllProjects } from "../../services/Projects";

export const useGetAllProjects = () => {
    const {data,isLoading,isFetching,error,isError} = useQuery({
        queryKey : ["projects"],
        queryFn : getAllProjects
    })
    return {data,isLoading,isFetching,error,isError};
}