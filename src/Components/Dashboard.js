import React, { useEffect, useState } from 'react'
import Header from './Header'
import ProjectList from './ProjectList'
import { connect } from 'react-redux'
import { fetchProjects } from '../actions/index'
import axiosWithAuth from '../utils/axiosWithAuth'

const Dashboard = ({ fetchProjects, projects, isLoading }) => {
    const [ oneProjects, setOneProjects] = useState()


    useEffect(() => {
        // axiosWithAuth()
        // .get('/projects')
        // .then((res) => {
        //     setProjects(res.data)
        //     setLoading(false)
        // })
        // .catch((err) => {
        //     console.log(err)
        // })
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
