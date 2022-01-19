import React, { useState } from 'react'
import { InnerLayout } from '../MainLayout'
import Title from '../Title'

import portfolios from '../../pages/api/data/portfolios'
import Menu from './menu'

const PortfolioComponent = () => {
    const [menuItem, setMenuItems] = useState(portfolios);

    return (
        <>
            <div className="heading">
                <Title title={"Projects"} span={"Projects"} />
            </div>
            <InnerLayout className={"Projects"} span={"Projects"}>
                <Menu menuItem={menuItem}></Menu>
            </InnerLayout>
        </>
    )
}

export default PortfolioComponent
