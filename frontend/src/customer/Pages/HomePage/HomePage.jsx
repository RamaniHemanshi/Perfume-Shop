import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_perfume } from '../../../Data/mens_perfume'
import { women_perfume } from '../../../Data/women_perfume'
import { mens_attar } from '../../../Data/mens_attar'
import { women_attar } from '../../../Data/women_attar'
import { deo } from '../../../Data/deo'

const HomePage = () => {

    return (
        <div>
            <MainCarousel />

            <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
                <HomeSectionCarousel data={mens_perfume} sectionName={"men's Perfume"}/>
                <HomeSectionCarousel data={mens_attar} sectionName={"men's Attar"}/>
                <HomeSectionCarousel data={women_perfume} sectionName={"women's Perfume"}/>
                <HomeSectionCarousel data={women_attar} sectionName={"women's Attar"}/>
                <HomeSectionCarousel data={deo} sectionName={"Deo"}/>
            </div>
        </div>
    )
}

export default HomePage