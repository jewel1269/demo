import DealsSection from '@/components/page/courses/DealsSection';
import CourseOverview from '@/components/page/courses/details';
import React from 'react';

const Page = () => {
    return (
        <div>
            <CourseOverview/>
            <DealsSection/>
        </div>
    );
};

export default Page;