# GitHub-Commit-project

There is a description about GitHub-Commit API endpoints to use in the dashboard project

## URI (base_path)
It has the following structure:

`http://localhost:4000/api/v1.0.0`

## Installation

Execute the comand `yarn install`

Add a `.env` file 
}

run npm run start:dev

## Endpoints ☀️

### 1. Get all commits for specific project

`/commits`

This endpoint return a paginated list of commits of specific project **visible to the user**

### 2. Get a specific project

`/repos`

Returns the [project details] for a repo

To return information you should specified a req.body data

const body = `{
                    "userName": **User name owner of the project**,
                    
                    "repoName": **The name of the repository from which you want to obtain information.**,
                  }`;
```

The information that it returns include: commit, author, message, url.



