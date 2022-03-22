import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({children}) => {
    return (
        <BlogContext.Provider value={'Hello'}>
            {children}
        </BlogContext.Provider>)
};
