import React from 'react'
import styled from 'styled-components';
import Products from '../Products/Products';

const Category = () => {
  return (
    <Wrapper >
        <div className='category-main-content'>
        <div className='layout'>
            <div className='category-title'>Category Title
            </div>
            <Products innerPage={true}/>
                
 
        </div>
        </div>
    </Wrapper>
  )
}


const Wrapper = styled.section`
.category-main-content{
    margin: 7.5rem 0;
    .layout{
        margin: 0 auto;
        max-width: 120rem;
    }
    .category-title{
        font-size: 3.4rem;
    

    }

}
.products-container{
    margin: 5rem 0;
}

@media (max-width: ${({theme})=>theme.media.mobile}) {

    .category-main-content{
        margin: 3rem 0;
        .layout{
            max-width: calc(100% - 2rem);
           

        }
        .category-title{
            font-size: 2.4rem;
        
    }

    }
    .products-container{
    margin: 2rem 0;
}

    
}
`;

export default Category