import React, { useEffect, useState } from 'react';
import Issue from '../Issue';
import { v4 as uuid } from 'uuid';

const IssuesContainer: React.FC = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/repos/facebook/react/issues')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data);
            });
    }, []);
    const issues = data.map(
        (issue: {
            title: string;
            url: string;
            number: number;
            labels: [];
            assignees: [];
            created_at: string;
            user: { login: string };
        }) => (
            <Issue
                key={uuid()}
                title={issue.title}
                url={issue.url}
                number={issue.number}
                labels={issue.labels}
                assignees={issue.assignees}
                created_at={issue.created_at}
                created_by={issue.user.login}
            />
        ),
    );
    return <div>{issues}</div>;
};

export default IssuesContainer;
