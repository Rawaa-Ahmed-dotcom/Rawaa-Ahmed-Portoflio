export type Skill = {
    id : number,
    title : string,
    icon : string,
    createAt : Date
}
export type Skills = Skill[];

export type project = {
    id : number,
    title : string,
    img : string,
    live : string,
    github : string,
    tags : string[],
    createdAt : Date,
    description : string
}
export type projects = project[];