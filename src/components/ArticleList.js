import React from 'react'
import Article from './Article'

const ArticleList = () => {
  return (
    <div>
        <main>
       <Article id={1} title= "components 101" date="December 15,2020" preview= "Setting up the building blocks of your site" minitues= {5} ></Article>

       <Article id={2} title= "React data flow" date="December 11,2020" preview= "passing props is never passé" minitues= {15} ></Article>

       <Article id={3} title= " Function vs Class Components"  preview= "React meet oojs" minitues= {47} ></Article>

        </main>
        
    </div>
  )
}

export default ArticleList