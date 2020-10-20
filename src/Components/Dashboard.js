import React, { useEffect } from 'react'
import Header from './Header'
import ProjectList from './ProjectList'
import { connect } from 'react-redux'
import { fetchProjects } from '../actions/index'

const Dashboard = ({ fetchProjects, projects, isLoading }) => {

    useEffect(() => {
        fetchProjects()
    },[fetchProjects])

    return (
        <div>
            <Header />
            {isLoading ? (
                'loading...'
            ) : (
                    projects.map((project, index) => {
                        return <ProjectList project={project} key={index} />;
                    })
                )}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        projects: state.projects,
        isLoading: state.isLoading,
    };
};

export default connect(mapStateToProps, { fetchProjects })(Dashboard)
