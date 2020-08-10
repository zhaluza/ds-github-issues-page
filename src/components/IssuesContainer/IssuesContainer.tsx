import React, { useEffect, useState } from 'react';
import Issue from '../Issue';
import { v4 as uuid } from 'uuid';
import { ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client';
import './issuesContainer.scss';
const githubURL = 'https://api.github.com/graphql';
console.log(process.env.REACT_APP_GITHUB_ACCESS_TOKEN);
const httpLink = new HttpLink({
    uri: githubURL,
    headers: {
        authorization: `bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
    },
});
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});
const GET_ISSUES = gql`
    {
        repository(owner: "Facebook", name: "React") {
            issues(first: 30, states: OPEN, orderBy: { field: CREATED_AT, direction: DESC }) {
                edges {
                    node {
                        number
                        title
                        author {
                            login
                        }
                        assignees(first: 5) {
                            edges {
                                node {
                                    avatarUrl
                                }
                            }
                        }
                        url
                        createdAt
                        state
                        labels(first: 10) {
                            edges {
                                node {
                                    name
                                    color
                                }
                            }
                        }
                        comments(first: 100) {
                            totalCount
                        }
                    }
                }
            }
        }
    }
`;

interface Props {
    isMobile: boolean;
}

const IssuesContainer: React.FC<Props> = ({ isMobile }: Props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        client
            .query({
                query: GET_ISSUES,
            })
            .then((result) => {
                const issueData = result.data.repository.issues.edges;
                console.log(issueData);
                setData(issueData);
            });
    }, []);
    const issues = data.map(
        (issue: {
            node: {
                createdAt: string;
                labels: {
                    edges: [
                        {
                            node: {
                                name: string;
                                color: string;
                            };
                        },
                    ];
                };
                assignees: {
                    edges: [{ node: { avatarUrl: string } }];
                };
                number: number;
                state: string;
                title: string;
                url: string;
                author: { login: string };
                comments: { totalCount: number };
            };
        }) => (
            <Issue
                key={uuid()}
                title={issue.node.title}
                url={issue.node.url}
                number={issue.node.number}
                labels={issue.node.labels.edges}
                assignees={issue.node.assignees.edges}
                createdAt={issue.node.createdAt}
                author={issue.node.author.login}
                comments={issue.node.comments.totalCount}
            />
        ),
    );

    // TODO: Add modals below details elements
    return (
        <div className="issues-container">
            <div className="issues-container__heading">
                {!isMobile && (
                    <div className="heading__right">
                        <details>
                            <summary>
                                Author <i className="fas fa-caret-down"></i>
                            </summary>
                        </details>
                        <details>
                            <summary>
                                Label <i className="fas fa-caret-down"></i>
                            </summary>
                        </details>
                        <details>
                            <summary>
                                Projects <i className="fas fa-caret-down"></i>
                            </summary>
                        </details>
                        <details>
                            <summary>
                                Milestones <i className="fas fa-caret-down"></i>
                            </summary>
                        </details>
                        <details>
                            <summary>
                                Assignee <i className="fas fa-caret-down"></i>
                            </summary>
                        </details>
                        <details>
                            <summary>
                                Sort <i className="fas fa-caret-down"></i>
                            </summary>
                        </details>
                    </div>
                )}
            </div>
            <div className="issues-container__list">{issues}</div>
        </div>
    );
};

export default IssuesContainer;
