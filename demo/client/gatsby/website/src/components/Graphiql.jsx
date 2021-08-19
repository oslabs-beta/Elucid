import React from 'react'
import GraphiQL from 'graphiql'
import 'graphiql/graphiql.min.css'

const Graphiql = () => (
  <div className="graphiql">
    <GraphiQL
<<<<<<< HEAD
      fetcher={async graphQLParams => {
        const data = await fetch('http://localhost:3000/graphql', {
=======
      fetcher={async (graphQLParams) => {
        const data = await fetch('https://elucid-graphiql.herokuapp.com/graphql', {
>>>>>>> testingCors
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(graphQLParams),
          credentials: 'same-origin',
        })
        return data.json().catch(() => data.text())
      }}
    />
  </div>
)

export default Graphiql
