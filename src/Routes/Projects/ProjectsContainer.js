import React from "react";
import {useQuery} from "react-apollo-hooks";
import queryString from 'query-string';
import ProjectsPresenter from "./ProjectsPresenter";
import {ALL_POSTS} from "./ProjectsQueries";

const ProjectsContainer = ({match, location}) => {
    const {term} = queryString.parse(location.search);
    const {category} = match.params;
    const getAllPostsQuery = useQuery(ALL_POSTS);

    const {data, loading, error} = getAllPostsQuery;

    if (error) {
        console.error(error);
        throw Error(error);
    }

    if (loading) {
        return <div>loading...</div>;
    } else if (category) {
        const {allPosts} = data;
        const posts = allPosts.filter(post => {
            return post.categories.filter(c => c.title === category).length !== 0;
        });
        return <ProjectsPresenter posts={posts}/>;
    } else {
        return <ProjectsPresenter posts={data.allPosts}/>
    }
};

export default React.memo(ProjectsContainer);
