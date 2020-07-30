import React from 'react'

// Step 1:- Creating a user context
const userContext = React.createContext()

const userProvider = userContext.Provider
const userConsumer = userContext.Consumer

export {userProvider, userConsumer}